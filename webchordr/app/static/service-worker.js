const VERSION = '{RANDOM_ID}';
const CACHE_NAME = 'chordr-' + VERSION;
const ASSET_CACHE_NAME = 'chordr-assets';

importScripts('javascripts/logger.js')

const output = buildOutput(true, 'SW');

const handleInstall = event => {
    output.debug('Install the service worker version \'' + VERSION + '\'', event);
    self.skipWaiting();

    const assetUrlsToCache = [
        '/assets/fonts/libre-baskerville-v7-latin_latin-ext-regular.woff2',
        '/assets/fonts/merriweather-v21-latin-regular.woff2',
        '/assets/fonts/merriweather-v21-latin-700.woff2',
        '/assets/icons/fonts/iconmonstr-iconic-font.woff2?v=1.3.0',
        '/assets/images/logo-512-light.png',
        '/assets/images/logo-32-light.png',
        '/assets/images/logo-120.png',
    ];
    const appUrlsToCache = [
        '/',
        '/manifest.json',
        // '/stylesheets/chordr-app.css',
        //{JS} // This will be replaced with the WASM JavaScript file path
        //{WASM} // This will be replaced with the WASM file path
        //{SORTABLE} // This will be replaced with the sortable.js file path
        '/javascripts/logger.js',
        '/javascripts/bundle.js',
        '/catalog.json'
    ];

    event.waitUntil(
        Promise.all([
            caches.open(CACHE_NAME)
                .then(cache => {
                    output.debug('Add app URLs to the cache: ', appUrlsToCache);

                    return cache.addAll(appUrlsToCache);
                }),
            caches.open(ASSET_CACHE_NAME)
                .then(cache => {
                    output.debug('Add asset URLs to the cache: ', assetUrlsToCache);

                    return cache.addAll(assetUrlsToCache);
                })
        ])
    );
};

const handleActivate = event => {
    clients.claim();
    /* Delete caches of old versions */
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (key !== CACHE_NAME && key !== ASSET_CACHE_NAME) {
                    output.debug('Clear cache ' + key);

                    return caches.delete(key);
                }
            })
        )).then(() => {
            output.debug('Service worker version \'' + VERSION + '\' is ready');
            sendVersionInformationToClients();
        })
    );
}

/**
 * @param {Request} request
 * @returns {boolean}
 */
const shouldCacheRequest = (request) => {
    return request.method !== 'POST';
}

/**
 * @param {Request} request
 * @param {Response} response
 * @returns {boolean}
 */
const shouldCache = (request, response) => {
    if (!response || response.status !== 200 || response.type !== 'basic') {
        return false;
    }
    return shouldCacheRequest(request)
}

/**
 * @param {FetchEvent} event
 * @returns {Promise<Response>}
 */
const fetchFromServer = event => {
    const request = event.request;
    return fetch(request).then(
        async response => {
            if (!shouldCache(request, response)) {
                return response
            }
            /* Stash copy of response */
            const cachedResponse = response.clone();
            const cache = await caches.open(CACHE_NAME)
            cache.put(request, cachedResponse).then();

            return response;
        }
    ).catch(error => {
        throw error
    });
};

/**
 * @param {FetchEvent} event
 */
const fetchInBackground = (event) => {
    const url = event.request.url;

    fetchFromServer(event)
        .then(() => {
            output.debug('Background load success ' + url)
        })
        .catch(_error => {
            output.warn('Background load failed ' + url)
        });
}

/**
 * @param {FetchEvent} event
 */
const handleFetch = event => {
    if (shouldCacheRequest(event.request)) {
        event.respondWith(
            /* Check if there is a cached entry for the request */
            caches.match(event.request)
                .then(response => {
                    if (!response) {
                        output.info('Live load ' + event.request.url + ' from server')

                        return fetchFromServer(event)
                            .then(r => r)
                            .catch(() => output.warn('Failed to fetch ' + event.request.url));
                    } else {
                        /*
                        "Fetch in background" is not necessary because on each build the service-worker will change
                        This change will install the service-worker - which in turn pre-fetches the new resources
                        */
                        // /* If online try to fetch the latest version in the background */
                        // if (navigator.onLine) {
                        //     fetchInBackground(event);
                        // }

                        output.debug('Serve cached version for ' + event.request.url);
                        return response;
                    }
                })
        );
    } else {
        event.respondWith(fetchFromServer(event))
    }
}

const sendVersionInformationToClients = () => {
    self.clients.matchAll({
        includeUncontrolled: true,
        type: 'window',
    }).then((clients) => {
        if (clients && clients.length) {
            for (const client of clients) {
                client.postMessage({
                    type: 'VERSION_UPDATE',
                    version: VERSION,
                });
            }
        }
    });
}

self.addEventListener('install', handleInstall);
self.addEventListener('activate', handleActivate)
self.addEventListener('fetch', handleFetch);
