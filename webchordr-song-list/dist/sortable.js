/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"MultiDrag\": () => (/* binding */ MultiDragPlugin),\n/* harmony export */   \"Sortable\": () => (/* binding */ Sortable),\n/* harmony export */   \"Swap\": () => (/* binding */ SwapPlugin)\n/* harmony export */ });\n/**!\n * Sortable 1.10.2\n * @author\tRubaXa   <trash@rubaxa.org>\n * @author\towenm    <owen23355@gmail.com>\n * @license MIT\n */\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function (obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function (obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      _defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nfunction _toConsumableArray(arr) {\n  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];\n\n    return arr2;\n  }\n}\n\nfunction _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nvar version = \"1.10.2\";\n\nfunction userAgent(pattern) {\n  if (typeof window !== 'undefined' && window.navigator) {\n    return !!\n    /*@__PURE__*/\n    navigator.userAgent.match(pattern);\n  }\n}\n\nvar IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\\.|msie|iemobile|Windows Phone)/i);\nvar Edge = userAgent(/Edge/i);\nvar FireFox = userAgent(/firefox/i);\nvar Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);\nvar IOS = userAgent(/iP(ad|od|hone)/i);\nvar ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);\n\nvar captureMode = {\n  capture: false,\n  passive: false\n};\n\nfunction on(el, event, fn) {\n  el.addEventListener(event, fn, !IE11OrLess && captureMode);\n}\n\nfunction off(el, event, fn) {\n  el.removeEventListener(event, fn, !IE11OrLess && captureMode);\n}\n\nfunction matches(\n/**HTMLElement*/\nel,\n/**String*/\nselector) {\n  if (!selector) return;\n  selector[0] === '>' && (selector = selector.substring(1));\n\n  if (el) {\n    try {\n      if (el.matches) {\n        return el.matches(selector);\n      } else if (el.msMatchesSelector) {\n        return el.msMatchesSelector(selector);\n      } else if (el.webkitMatchesSelector) {\n        return el.webkitMatchesSelector(selector);\n      }\n    } catch (_) {\n      return false;\n    }\n  }\n\n  return false;\n}\n\nfunction getParentOrHost(el) {\n  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;\n}\n\nfunction closest(\n/**HTMLElement*/\nel,\n/**String*/\nselector,\n/**HTMLElement*/\nctx, includeCTX) {\n  if (el) {\n    ctx = ctx || document;\n\n    do {\n      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {\n        return el;\n      }\n\n      if (el === ctx) break;\n      /* jshint boss:true */\n    } while (el = getParentOrHost(el));\n  }\n\n  return null;\n}\n\nvar R_SPACE = /\\s+/g;\n\nfunction toggleClass(el, name, state) {\n  if (el && name) {\n    if (el.classList) {\n      el.classList[state ? 'add' : 'remove'](name);\n    } else {\n      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');\n      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');\n    }\n  }\n}\n\nfunction css(el, prop, val) {\n  var style = el && el.style;\n\n  if (style) {\n    if (val === void 0) {\n      if (document.defaultView && document.defaultView.getComputedStyle) {\n        val = document.defaultView.getComputedStyle(el, '');\n      } else if (el.currentStyle) {\n        val = el.currentStyle;\n      }\n\n      return prop === void 0 ? val : val[prop];\n    } else {\n      if (!(prop in style) && prop.indexOf('webkit') === -1) {\n        prop = '-webkit-' + prop;\n      }\n\n      style[prop] = val + (typeof val === 'string' ? '' : 'px');\n    }\n  }\n}\n\nfunction matrix(el, selfOnly) {\n  var appliedTransforms = '';\n\n  if (typeof el === 'string') {\n    appliedTransforms = el;\n  } else {\n    do {\n      var transform = css(el, 'transform');\n\n      if (transform && transform !== 'none') {\n        appliedTransforms = transform + ' ' + appliedTransforms;\n      }\n      /* jshint boss:true */\n\n    } while (!selfOnly && (el = el.parentNode));\n  }\n\n  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;\n  /*jshint -W056 */\n\n  return matrixFn && new matrixFn(appliedTransforms);\n}\n\nfunction find(ctx, tagName, iterator) {\n  if (ctx) {\n    var list = ctx.getElementsByTagName(tagName),\n        i = 0,\n        n = list.length;\n\n    if (iterator) {\n      for (; i < n; i++) {\n        iterator(list[i], i);\n      }\n    }\n\n    return list;\n  }\n\n  return [];\n}\n\nfunction getWindowScrollingElement() {\n  var scrollingElement = document.scrollingElement;\n\n  if (scrollingElement) {\n    return scrollingElement;\n  } else {\n    return document.documentElement;\n  }\n}\n/**\r\n * Returns the \"bounding client rect\" of given element\r\n * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted\r\n * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container\r\n * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr\r\n * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone\r\n * @param  {[HTMLElement]} container              The parent the element will be placed in\r\n * @return {Object}                               The boundingClientRect of el, with specified adjustments\r\n */\n\n\nfunction getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {\n  if (!el.getBoundingClientRect && el !== window) return;\n  var elRect, top, left, bottom, right, height, width;\n\n  if (el !== window && el !== getWindowScrollingElement()) {\n    elRect = el.getBoundingClientRect();\n    top = elRect.top;\n    left = elRect.left;\n    bottom = elRect.bottom;\n    right = elRect.right;\n    height = elRect.height;\n    width = elRect.width;\n  } else {\n    top = 0;\n    left = 0;\n    bottom = window.innerHeight;\n    right = window.innerWidth;\n    height = window.innerHeight;\n    width = window.innerWidth;\n  }\n\n  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {\n    // Adjust for translate()\n    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)\n    // Not needed on <= IE11\n\n    if (!IE11OrLess) {\n      do {\n        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {\n          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container\n\n          top -= containerRect.top + parseInt(css(container, 'border-top-width'));\n          left -= containerRect.left + parseInt(css(container, 'border-left-width'));\n          bottom = top + elRect.height;\n          right = left + elRect.width;\n          break;\n        }\n        /* jshint boss:true */\n\n      } while (container = container.parentNode);\n    }\n  }\n\n  if (undoScale && el !== window) {\n    // Adjust for scale()\n    var elMatrix = matrix(container || el),\n        scaleX = elMatrix && elMatrix.a,\n        scaleY = elMatrix && elMatrix.d;\n\n    if (elMatrix) {\n      top /= scaleY;\n      left /= scaleX;\n      width /= scaleX;\n      height /= scaleY;\n      bottom = top + height;\n      right = left + width;\n    }\n  }\n\n  return {\n    top: top,\n    left: left,\n    bottom: bottom,\n    right: right,\n    width: width,\n    height: height\n  };\n}\n/**\r\n * Checks if a side of an element is scrolled past a side of its parents\r\n * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question\r\n * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')\r\n * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')\r\n * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element\r\n */\n\n\nfunction isScrolledPast(el, elSide, parentSide) {\n  var parent = getParentAutoScrollElement(el, true),\n      elSideVal = getRect(el)[elSide];\n  /* jshint boss:true */\n\n  while (parent) {\n    var parentSideVal = getRect(parent)[parentSide],\n        visible = void 0;\n\n    if (parentSide === 'top' || parentSide === 'left') {\n      visible = elSideVal >= parentSideVal;\n    } else {\n      visible = elSideVal <= parentSideVal;\n    }\n\n    if (!visible) return parent;\n    if (parent === getWindowScrollingElement()) break;\n    parent = getParentAutoScrollElement(parent, false);\n  }\n\n  return false;\n}\n/**\r\n * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)\r\n * and non-draggable elements\r\n * @param  {HTMLElement} el       The parent element\r\n * @param  {Number} childNum      The index of the child\r\n * @param  {Object} options       Parent Sortable's options\r\n * @return {HTMLElement}          The child at index childNum, or null if not found\r\n */\n\n\nfunction getChild(el, childNum, options) {\n  var currentChild = 0,\n      i = 0,\n      children = el.children;\n\n  while (i < children.length) {\n    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {\n      if (currentChild === childNum) {\n        return children[i];\n      }\n\n      currentChild++;\n    }\n\n    i++;\n  }\n\n  return null;\n}\n/**\r\n * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)\r\n * @param  {HTMLElement} el       Parent element\r\n * @param  {selector} selector    Any other elements that should be ignored\r\n * @return {HTMLElement}          The last child, ignoring ghostEl\r\n */\n\n\nfunction lastChild(el, selector) {\n  var last = el.lastElementChild;\n\n  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {\n    last = last.previousElementSibling;\n  }\n\n  return last || null;\n}\n/**\r\n * Returns the index of an element within its parent for a selected set of\r\n * elements\r\n * @param  {HTMLElement} el\r\n * @param  {selector} selector\r\n * @return {number}\r\n */\n\n\nfunction index(el, selector) {\n  var index = 0;\n\n  if (!el || !el.parentNode) {\n    return -1;\n  }\n  /* jshint boss:true */\n\n\n  while (el = el.previousElementSibling) {\n    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {\n      index++;\n    }\n  }\n\n  return index;\n}\n/**\r\n * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.\r\n * The value is returned in real pixels.\r\n * @param  {HTMLElement} el\r\n * @return {Array}             Offsets in the format of [left, top]\r\n */\n\n\nfunction getRelativeScrollOffset(el) {\n  var offsetLeft = 0,\n      offsetTop = 0,\n      winScroller = getWindowScrollingElement();\n\n  if (el) {\n    do {\n      var elMatrix = matrix(el),\n          scaleX = elMatrix.a,\n          scaleY = elMatrix.d;\n      offsetLeft += el.scrollLeft * scaleX;\n      offsetTop += el.scrollTop * scaleY;\n    } while (el !== winScroller && (el = el.parentNode));\n  }\n\n  return [offsetLeft, offsetTop];\n}\n/**\r\n * Returns the index of the object within the given array\r\n * @param  {Array} arr   Array that may or may not hold the object\r\n * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find\r\n * @return {Number}      The index of the object in the array, or -1\r\n */\n\n\nfunction indexOfObject(arr, obj) {\n  for (var i in arr) {\n    if (!arr.hasOwnProperty(i)) continue;\n\n    for (var key in obj) {\n      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);\n    }\n  }\n\n  return -1;\n}\n\nfunction getParentAutoScrollElement(el, includeSelf) {\n  // skip to window\n  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();\n  var elem = el;\n  var gotSelf = false;\n\n  do {\n    // we don't need to get elem css if it isn't even overflowing in the first place (performance)\n    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {\n      var elemCSS = css(elem);\n\n      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {\n        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();\n        if (gotSelf || includeSelf) return elem;\n        gotSelf = true;\n      }\n    }\n    /* jshint boss:true */\n\n  } while (elem = elem.parentNode);\n\n  return getWindowScrollingElement();\n}\n\nfunction extend(dst, src) {\n  if (dst && src) {\n    for (var key in src) {\n      if (src.hasOwnProperty(key)) {\n        dst[key] = src[key];\n      }\n    }\n  }\n\n  return dst;\n}\n\nfunction isRectEqual(rect1, rect2) {\n  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);\n}\n\nvar _throttleTimeout;\n\nfunction throttle(callback, ms) {\n  return function () {\n    if (!_throttleTimeout) {\n      var args = arguments,\n          _this = this;\n\n      if (args.length === 1) {\n        callback.call(_this, args[0]);\n      } else {\n        callback.apply(_this, args);\n      }\n\n      _throttleTimeout = setTimeout(function () {\n        _throttleTimeout = void 0;\n      }, ms);\n    }\n  };\n}\n\nfunction cancelThrottle() {\n  clearTimeout(_throttleTimeout);\n  _throttleTimeout = void 0;\n}\n\nfunction scrollBy(el, x, y) {\n  el.scrollLeft += x;\n  el.scrollTop += y;\n}\n\nfunction clone(el) {\n  var Polymer = window.Polymer;\n  var $ = window.jQuery || window.Zepto;\n\n  if (Polymer && Polymer.dom) {\n    return Polymer.dom(el).cloneNode(true);\n  } else if ($) {\n    return $(el).clone(true)[0];\n  } else {\n    return el.cloneNode(true);\n  }\n}\n\nfunction setRect(el, rect) {\n  css(el, 'position', 'absolute');\n  css(el, 'top', rect.top);\n  css(el, 'left', rect.left);\n  css(el, 'width', rect.width);\n  css(el, 'height', rect.height);\n}\n\nfunction unsetRect(el) {\n  css(el, 'position', '');\n  css(el, 'top', '');\n  css(el, 'left', '');\n  css(el, 'width', '');\n  css(el, 'height', '');\n}\n\nvar expando = 'Sortable' + new Date().getTime();\n\nfunction AnimationStateManager() {\n  var animationStates = [],\n      animationCallbackId;\n  return {\n    captureAnimationState: function captureAnimationState() {\n      animationStates = [];\n      if (!this.options.animation) return;\n      var children = [].slice.call(this.el.children);\n      children.forEach(function (child) {\n        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;\n        animationStates.push({\n          target: child,\n          rect: getRect(child)\n        });\n\n        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation\n\n\n        if (child.thisAnimationDuration) {\n          var childMatrix = matrix(child, true);\n\n          if (childMatrix) {\n            fromRect.top -= childMatrix.f;\n            fromRect.left -= childMatrix.e;\n          }\n        }\n\n        child.fromRect = fromRect;\n      });\n    },\n    addAnimationState: function addAnimationState(state) {\n      animationStates.push(state);\n    },\n    removeAnimationState: function removeAnimationState(target) {\n      animationStates.splice(indexOfObject(animationStates, {\n        target: target\n      }), 1);\n    },\n    animateAll: function animateAll(callback) {\n      var _this = this;\n\n      if (!this.options.animation) {\n        clearTimeout(animationCallbackId);\n        if (typeof callback === 'function') callback();\n        return;\n      }\n\n      var animating = false,\n          animationTime = 0;\n      animationStates.forEach(function (state) {\n        var time = 0,\n            target = state.target,\n            fromRect = target.fromRect,\n            toRect = getRect(target),\n            prevFromRect = target.prevFromRect,\n            prevToRect = target.prevToRect,\n            animatingRect = state.rect,\n            targetMatrix = matrix(target, true);\n\n        if (targetMatrix) {\n          // Compensate for current animation\n          toRect.top -= targetMatrix.f;\n          toRect.left -= targetMatrix.e;\n        }\n\n        target.toRect = toRect;\n\n        if (target.thisAnimationDuration) {\n          // Could also check if animatingRect is between fromRect and toRect\n          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect\n          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {\n            // If returning to same place as started from animation and on same axis\n            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);\n          }\n        } // if fromRect != toRect: animate\n\n\n        if (!isRectEqual(toRect, fromRect)) {\n          target.prevFromRect = fromRect;\n          target.prevToRect = toRect;\n\n          if (!time) {\n            time = _this.options.animation;\n          }\n\n          _this.animate(target, animatingRect, toRect, time);\n        }\n\n        if (time) {\n          animating = true;\n          animationTime = Math.max(animationTime, time);\n          clearTimeout(target.animationResetTimer);\n          target.animationResetTimer = setTimeout(function () {\n            target.animationTime = 0;\n            target.prevFromRect = null;\n            target.fromRect = null;\n            target.prevToRect = null;\n            target.thisAnimationDuration = null;\n          }, time);\n          target.thisAnimationDuration = time;\n        }\n      });\n      clearTimeout(animationCallbackId);\n\n      if (!animating) {\n        if (typeof callback === 'function') callback();\n      } else {\n        animationCallbackId = setTimeout(function () {\n          if (typeof callback === 'function') callback();\n        }, animationTime);\n      }\n\n      animationStates = [];\n    },\n    animate: function animate(target, currentRect, toRect, duration) {\n      if (duration) {\n        css(target, 'transition', '');\n        css(target, 'transform', '');\n        var elMatrix = matrix(this.el),\n            scaleX = elMatrix && elMatrix.a,\n            scaleY = elMatrix && elMatrix.d,\n            translateX = (currentRect.left - toRect.left) / (scaleX || 1),\n            translateY = (currentRect.top - toRect.top) / (scaleY || 1);\n        target.animatingX = !!translateX;\n        target.animatingY = !!translateY;\n        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');\n        repaint(target); // repaint\n\n        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));\n        css(target, 'transform', 'translate3d(0,0,0)');\n        typeof target.animated === 'number' && clearTimeout(target.animated);\n        target.animated = setTimeout(function () {\n          css(target, 'transition', '');\n          css(target, 'transform', '');\n          target.animated = false;\n          target.animatingX = false;\n          target.animatingY = false;\n        }, duration);\n      }\n    }\n  };\n}\n\nfunction repaint(target) {\n  return target.offsetWidth;\n}\n\nfunction calculateRealTime(animatingRect, fromRect, toRect, options) {\n  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;\n}\n\nvar plugins = [];\nvar defaults = {\n  initializeByDefault: true\n};\nvar PluginManager = {\n  mount: function mount(plugin) {\n    // Set default static properties\n    for (var option in defaults) {\n      if (defaults.hasOwnProperty(option) && !(option in plugin)) {\n        plugin[option] = defaults[option];\n      }\n    }\n\n    plugins.push(plugin);\n  },\n  pluginEvent: function pluginEvent(eventName, sortable, evt) {\n    var _this = this;\n\n    this.eventCanceled = false;\n\n    evt.cancel = function () {\n      _this.eventCanceled = true;\n    };\n\n    var eventNameGlobal = eventName + 'Global';\n    plugins.forEach(function (plugin) {\n      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable\n\n      if (sortable[plugin.pluginName][eventNameGlobal]) {\n        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({\n          sortable: sortable\n        }, evt));\n      } // Only fire plugin event if plugin is enabled in this sortable,\n      // and plugin has event defined\n\n\n      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {\n        sortable[plugin.pluginName][eventName](_objectSpread({\n          sortable: sortable\n        }, evt));\n      }\n    });\n  },\n  initializePlugins: function initializePlugins(sortable, el, defaults, options) {\n    plugins.forEach(function (plugin) {\n      var pluginName = plugin.pluginName;\n      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;\n      var initialized = new plugin(sortable, el, sortable.options);\n      initialized.sortable = sortable;\n      initialized.options = sortable.options;\n      sortable[pluginName] = initialized; // Add default options from plugin\n\n      _extends(defaults, initialized.defaults);\n    });\n\n    for (var option in sortable.options) {\n      if (!sortable.options.hasOwnProperty(option)) continue;\n      var modified = this.modifyOption(sortable, option, sortable.options[option]);\n\n      if (typeof modified !== 'undefined') {\n        sortable.options[option] = modified;\n      }\n    }\n  },\n  getEventProperties: function getEventProperties(name, sortable) {\n    var eventProperties = {};\n    plugins.forEach(function (plugin) {\n      if (typeof plugin.eventProperties !== 'function') return;\n\n      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));\n    });\n    return eventProperties;\n  },\n  modifyOption: function modifyOption(sortable, name, value) {\n    var modifiedValue;\n    plugins.forEach(function (plugin) {\n      // Plugin must exist on the Sortable\n      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin\n\n      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {\n        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);\n      }\n    });\n    return modifiedValue;\n  }\n};\n\nfunction dispatchEvent(_ref) {\n  var sortable = _ref.sortable,\n      rootEl = _ref.rootEl,\n      name = _ref.name,\n      targetEl = _ref.targetEl,\n      cloneEl = _ref.cloneEl,\n      toEl = _ref.toEl,\n      fromEl = _ref.fromEl,\n      oldIndex = _ref.oldIndex,\n      newIndex = _ref.newIndex,\n      oldDraggableIndex = _ref.oldDraggableIndex,\n      newDraggableIndex = _ref.newDraggableIndex,\n      originalEvent = _ref.originalEvent,\n      putSortable = _ref.putSortable,\n      extraEventProperties = _ref.extraEventProperties;\n  sortable = sortable || rootEl && rootEl[expando];\n  if (!sortable) return;\n  var evt,\n      options = sortable.options,\n      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature\n\n  if (window.CustomEvent && !IE11OrLess && !Edge) {\n    evt = new CustomEvent(name, {\n      bubbles: true,\n      cancelable: true\n    });\n  } else {\n    evt = document.createEvent('Event');\n    evt.initEvent(name, true, true);\n  }\n\n  evt.to = toEl || rootEl;\n  evt.from = fromEl || rootEl;\n  evt.item = targetEl || rootEl;\n  evt.clone = cloneEl;\n  evt.oldIndex = oldIndex;\n  evt.newIndex = newIndex;\n  evt.oldDraggableIndex = oldDraggableIndex;\n  evt.newDraggableIndex = newDraggableIndex;\n  evt.originalEvent = originalEvent;\n  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;\n\n  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));\n\n  for (var option in allEventProperties) {\n    evt[option] = allEventProperties[option];\n  }\n\n  if (rootEl) {\n    rootEl.dispatchEvent(evt);\n  }\n\n  if (options[onName]) {\n    options[onName].call(sortable, evt);\n  }\n}\n\nvar pluginEvent = function pluginEvent(eventName, sortable) {\n  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},\n      originalEvent = _ref.evt,\n      data = _objectWithoutProperties(_ref, [\"evt\"]);\n\n  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({\n    dragEl: dragEl,\n    parentEl: parentEl,\n    ghostEl: ghostEl,\n    rootEl: rootEl,\n    nextEl: nextEl,\n    lastDownEl: lastDownEl,\n    cloneEl: cloneEl,\n    cloneHidden: cloneHidden,\n    dragStarted: moved,\n    putSortable: putSortable,\n    activeSortable: Sortable.active,\n    originalEvent: originalEvent,\n    oldIndex: oldIndex,\n    oldDraggableIndex: oldDraggableIndex,\n    newIndex: newIndex,\n    newDraggableIndex: newDraggableIndex,\n    hideGhostForTarget: _hideGhostForTarget,\n    unhideGhostForTarget: _unhideGhostForTarget,\n    cloneNowHidden: function cloneNowHidden() {\n      cloneHidden = true;\n    },\n    cloneNowShown: function cloneNowShown() {\n      cloneHidden = false;\n    },\n    dispatchSortableEvent: function dispatchSortableEvent(name) {\n      _dispatchEvent({\n        sortable: sortable,\n        name: name,\n        originalEvent: originalEvent\n      });\n    }\n  }, data));\n};\n\nfunction _dispatchEvent(info) {\n  dispatchEvent(_objectSpread({\n    putSortable: putSortable,\n    cloneEl: cloneEl,\n    targetEl: dragEl,\n    rootEl: rootEl,\n    oldIndex: oldIndex,\n    oldDraggableIndex: oldDraggableIndex,\n    newIndex: newIndex,\n    newDraggableIndex: newDraggableIndex\n  }, info));\n}\n\nvar dragEl,\n    parentEl,\n    ghostEl,\n    rootEl,\n    nextEl,\n    lastDownEl,\n    cloneEl,\n    cloneHidden,\n    oldIndex,\n    newIndex,\n    oldDraggableIndex,\n    newDraggableIndex,\n    activeGroup,\n    putSortable,\n    awaitingDragStarted = false,\n    ignoreNextClick = false,\n    sortables = [],\n    tapEvt,\n    touchEvt,\n    lastDx,\n    lastDy,\n    tapDistanceLeft,\n    tapDistanceTop,\n    moved,\n    lastTarget,\n    lastDirection,\n    pastFirstInvertThresh = false,\n    isCircumstantialInvert = false,\n    targetMoveDistance,\n    // For positioning ghost absolutely\nghostRelativeParent,\n    ghostRelativeParentInitialScroll = [],\n    // (left, top)\n_silent = false,\n    savedInputChecked = [];\n/** @const */\n\nvar documentExists = typeof document !== 'undefined',\n    PositionGhostAbsolutely = IOS,\n    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',\n    // This will not pass for IE9, because IE9 DnD only works on anchors\nsupportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),\n    supportCssPointerEvents = function () {\n  if (!documentExists) return; // false when <= IE11\n\n  if (IE11OrLess) {\n    return false;\n  }\n\n  var el = document.createElement('x');\n  el.style.cssText = 'pointer-events:auto';\n  return el.style.pointerEvents === 'auto';\n}(),\n    _detectDirection = function _detectDirection(el, options) {\n  var elCSS = css(el),\n      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),\n      child1 = getChild(el, 0, options),\n      child2 = getChild(el, 1, options),\n      firstChildCSS = child1 && css(child1),\n      secondChildCSS = child2 && css(child2),\n      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,\n      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;\n\n  if (elCSS.display === 'flex') {\n    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';\n  }\n\n  if (elCSS.display === 'grid') {\n    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';\n  }\n\n  if (child1 && firstChildCSS[\"float\"] && firstChildCSS[\"float\"] !== 'none') {\n    var touchingSideChild2 = firstChildCSS[\"float\"] === 'left' ? 'left' : 'right';\n    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';\n  }\n\n  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';\n},\n    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {\n  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,\n      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,\n      dragElOppLength = vertical ? dragRect.width : dragRect.height,\n      targetS1Opp = vertical ? targetRect.left : targetRect.top,\n      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,\n      targetOppLength = vertical ? targetRect.width : targetRect.height;\n  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;\n},\n\n/**\n * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.\n * @param  {Number} x      X position\n * @param  {Number} y      Y position\n * @return {HTMLElement}   Element of the first found nearest Sortable\n */\n_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {\n  var ret;\n  sortables.some(function (sortable) {\n    if (lastChild(sortable)) return;\n    var rect = getRect(sortable),\n        threshold = sortable[expando].options.emptyInsertThreshold,\n        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,\n        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;\n\n    if (threshold && insideHorizontally && insideVertically) {\n      return ret = sortable;\n    }\n  });\n  return ret;\n},\n    _prepareGroup = function _prepareGroup(options) {\n  function toFn(value, pull) {\n    return function (to, from, dragEl, evt) {\n      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;\n\n      if (value == null && (pull || sameGroup)) {\n        // Default pull value\n        // Default pull and put value if same group\n        return true;\n      } else if (value == null || value === false) {\n        return false;\n      } else if (pull && value === 'clone') {\n        return value;\n      } else if (typeof value === 'function') {\n        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);\n      } else {\n        var otherGroup = (pull ? to : from).options.group.name;\n        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;\n      }\n    };\n  }\n\n  var group = {};\n  var originalGroup = options.group;\n\n  if (!originalGroup || _typeof(originalGroup) != 'object') {\n    originalGroup = {\n      name: originalGroup\n    };\n  }\n\n  group.name = originalGroup.name;\n  group.checkPull = toFn(originalGroup.pull, true);\n  group.checkPut = toFn(originalGroup.put);\n  group.revertClone = originalGroup.revertClone;\n  options.group = group;\n},\n    _hideGhostForTarget = function _hideGhostForTarget() {\n  if (!supportCssPointerEvents && ghostEl) {\n    css(ghostEl, 'display', 'none');\n  }\n},\n    _unhideGhostForTarget = function _unhideGhostForTarget() {\n  if (!supportCssPointerEvents && ghostEl) {\n    css(ghostEl, 'display', '');\n  }\n}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position\n\n\nif (documentExists) {\n  document.addEventListener('click', function (evt) {\n    if (ignoreNextClick) {\n      evt.preventDefault();\n      evt.stopPropagation && evt.stopPropagation();\n      evt.stopImmediatePropagation && evt.stopImmediatePropagation();\n      ignoreNextClick = false;\n      return false;\n    }\n  }, true);\n}\n\nvar nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {\n  if (dragEl) {\n    evt = evt.touches ? evt.touches[0] : evt;\n\n    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);\n\n    if (nearest) {\n      // Create imitation event\n      var event = {};\n\n      for (var i in evt) {\n        if (evt.hasOwnProperty(i)) {\n          event[i] = evt[i];\n        }\n      }\n\n      event.target = event.rootEl = nearest;\n      event.preventDefault = void 0;\n      event.stopPropagation = void 0;\n\n      nearest[expando]._onDragOver(event);\n    }\n  }\n};\n\nvar _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {\n  if (dragEl) {\n    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);\n  }\n};\n/**\n * @class  Sortable\n * @param  {HTMLElement}  el\n * @param  {Object}       [options]\n */\n\n\nfunction Sortable(el, options) {\n  if (!(el && el.nodeType && el.nodeType === 1)) {\n    throw \"Sortable: `el` must be an HTMLElement, not \".concat({}.toString.call(el));\n  }\n\n  this.el = el; // root element\n\n  this.options = options = _extends({}, options); // Export instance\n\n  el[expando] = this;\n  var defaults = {\n    group: null,\n    sort: true,\n    disabled: false,\n    store: null,\n    handle: null,\n    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',\n    swapThreshold: 1,\n    // percentage; 0 <= x <= 1\n    invertSwap: false,\n    // invert always\n    invertedSwapThreshold: null,\n    // will be set to same as swapThreshold if default\n    removeCloneOnHide: true,\n    direction: function direction() {\n      return _detectDirection(el, this.options);\n    },\n    ghostClass: 'sortable-ghost',\n    chosenClass: 'sortable-chosen',\n    dragClass: 'sortable-drag',\n    ignore: 'a, img',\n    filter: null,\n    preventOnFilter: true,\n    animation: 0,\n    easing: null,\n    setData: function setData(dataTransfer, dragEl) {\n      dataTransfer.setData('Text', dragEl.textContent);\n    },\n    dropBubble: false,\n    dragoverBubble: false,\n    dataIdAttr: 'data-id',\n    delay: 0,\n    delayOnTouchOnly: false,\n    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,\n    forceFallback: false,\n    fallbackClass: 'sortable-fallback',\n    fallbackOnBody: false,\n    fallbackTolerance: 0,\n    fallbackOffset: {\n      x: 0,\n      y: 0\n    },\n    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,\n    emptyInsertThreshold: 5\n  };\n  PluginManager.initializePlugins(this, el, defaults); // Set default options\n\n  for (var name in defaults) {\n    !(name in options) && (options[name] = defaults[name]);\n  }\n\n  _prepareGroup(options); // Bind all private methods\n\n\n  for (var fn in this) {\n    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {\n      this[fn] = this[fn].bind(this);\n    }\n  } // Setup drag mode\n\n\n  this.nativeDraggable = options.forceFallback ? false : supportDraggable;\n\n  if (this.nativeDraggable) {\n    // Touch start threshold cannot be greater than the native dragstart threshold\n    this.options.touchStartThreshold = 1;\n  } // Bind events\n\n\n  if (options.supportPointer) {\n    on(el, 'pointerdown', this._onTapStart);\n  } else {\n    on(el, 'mousedown', this._onTapStart);\n    on(el, 'touchstart', this._onTapStart);\n  }\n\n  if (this.nativeDraggable) {\n    on(el, 'dragover', this);\n    on(el, 'dragenter', this);\n  }\n\n  sortables.push(this.el); // Restore sorting\n\n  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager\n\n  _extends(this, AnimationStateManager());\n}\n\nSortable.prototype =\n/** @lends Sortable.prototype */\n{\n  constructor: Sortable,\n  _isOutsideThisEl: function _isOutsideThisEl(target) {\n    if (!this.el.contains(target) && target !== this.el) {\n      lastTarget = null;\n    }\n  },\n  _getDirection: function _getDirection(evt, target) {\n    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;\n  },\n  _onTapStart: function _onTapStart(\n  /** Event|TouchEvent */\n  evt) {\n    if (!evt.cancelable) return;\n\n    var _this = this,\n        el = this.el,\n        options = this.options,\n        preventOnFilter = options.preventOnFilter,\n        type = evt.type,\n        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,\n        target = (touch || evt).target,\n        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,\n        filter = options.filter;\n\n    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.\n\n\n    if (dragEl) {\n      return;\n    }\n\n    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {\n      return; // only left button and enabled\n    } // cancel dnd if original target is content editable\n\n\n    if (originalTarget.isContentEditable) {\n      return;\n    }\n\n    target = closest(target, options.draggable, el, false);\n\n    if (target && target.animated) {\n      return;\n    }\n\n    if (lastDownEl === target) {\n      // Ignoring duplicate `down`\n      return;\n    } // Get the index of the dragged element within its parent\n\n\n    oldIndex = index(target);\n    oldDraggableIndex = index(target, options.draggable); // Check filter\n\n    if (typeof filter === 'function') {\n      if (filter.call(this, evt, target, this)) {\n        _dispatchEvent({\n          sortable: _this,\n          rootEl: originalTarget,\n          name: 'filter',\n          targetEl: target,\n          toEl: el,\n          fromEl: el\n        });\n\n        pluginEvent('filter', _this, {\n          evt: evt\n        });\n        preventOnFilter && evt.cancelable && evt.preventDefault();\n        return; // cancel dnd\n      }\n    } else if (filter) {\n      filter = filter.split(',').some(function (criteria) {\n        criteria = closest(originalTarget, criteria.trim(), el, false);\n\n        if (criteria) {\n          _dispatchEvent({\n            sortable: _this,\n            rootEl: criteria,\n            name: 'filter',\n            targetEl: target,\n            fromEl: el,\n            toEl: el\n          });\n\n          pluginEvent('filter', _this, {\n            evt: evt\n          });\n          return true;\n        }\n      });\n\n      if (filter) {\n        preventOnFilter && evt.cancelable && evt.preventDefault();\n        return; // cancel dnd\n      }\n    }\n\n    if (options.handle && !closest(originalTarget, options.handle, el, false)) {\n      return;\n    } // Prepare `dragstart`\n\n\n    this._prepareDragStart(evt, touch, target);\n  },\n  _prepareDragStart: function _prepareDragStart(\n  /** Event */\n  evt,\n  /** Touch */\n  touch,\n  /** HTMLElement */\n  target) {\n    var _this = this,\n        el = _this.el,\n        options = _this.options,\n        ownerDocument = el.ownerDocument,\n        dragStartFn;\n\n    if (target && !dragEl && target.parentNode === el) {\n      var dragRect = getRect(target);\n      rootEl = el;\n      dragEl = target;\n      parentEl = dragEl.parentNode;\n      nextEl = dragEl.nextSibling;\n      lastDownEl = target;\n      activeGroup = options.group;\n      Sortable.dragged = dragEl;\n      tapEvt = {\n        target: dragEl,\n        clientX: (touch || evt).clientX,\n        clientY: (touch || evt).clientY\n      };\n      tapDistanceLeft = tapEvt.clientX - dragRect.left;\n      tapDistanceTop = tapEvt.clientY - dragRect.top;\n      this._lastX = (touch || evt).clientX;\n      this._lastY = (touch || evt).clientY;\n      dragEl.style['will-change'] = 'all';\n\n      dragStartFn = function dragStartFn() {\n        pluginEvent('delayEnded', _this, {\n          evt: evt\n        });\n\n        if (Sortable.eventCanceled) {\n          _this._onDrop();\n\n          return;\n        } // Delayed drag has been triggered\n        // we can re-enable the events: touchmove/mousemove\n\n\n        _this._disableDelayedDragEvents();\n\n        if (!FireFox && _this.nativeDraggable) {\n          dragEl.draggable = true;\n        } // Bind the events: dragstart/dragend\n\n\n        _this._triggerDragStart(evt, touch); // Drag start event\n\n\n        _dispatchEvent({\n          sortable: _this,\n          name: 'choose',\n          originalEvent: evt\n        }); // Chosen item\n\n\n        toggleClass(dragEl, options.chosenClass, true);\n      }; // Disable \"draggable\"\n\n\n      options.ignore.split(',').forEach(function (criteria) {\n        find(dragEl, criteria.trim(), _disableDraggable);\n      });\n      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);\n      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);\n      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);\n      on(ownerDocument, 'mouseup', _this._onDrop);\n      on(ownerDocument, 'touchend', _this._onDrop);\n      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)\n\n      if (FireFox && this.nativeDraggable) {\n        this.options.touchStartThreshold = 4;\n        dragEl.draggable = true;\n      }\n\n      pluginEvent('delayStart', this, {\n        evt: evt\n      }); // Delay is impossible for native DnD in Edge or IE\n\n      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {\n        if (Sortable.eventCanceled) {\n          this._onDrop();\n\n          return;\n        } // If the user moves the pointer or let go the click or touch\n        // before the delay has been reached:\n        // disable the delayed drag\n\n\n        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);\n        on(ownerDocument, 'touchend', _this._disableDelayedDrag);\n        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);\n        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);\n        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);\n        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);\n        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);\n      } else {\n        dragStartFn();\n      }\n    }\n  },\n  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(\n  /** TouchEvent|PointerEvent **/\n  e) {\n    var touch = e.touches ? e.touches[0] : e;\n\n    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {\n      this._disableDelayedDrag();\n    }\n  },\n  _disableDelayedDrag: function _disableDelayedDrag() {\n    dragEl && _disableDraggable(dragEl);\n    clearTimeout(this._dragStartTimer);\n\n    this._disableDelayedDragEvents();\n  },\n  _disableDelayedDragEvents: function _disableDelayedDragEvents() {\n    var ownerDocument = this.el.ownerDocument;\n    off(ownerDocument, 'mouseup', this._disableDelayedDrag);\n    off(ownerDocument, 'touchend', this._disableDelayedDrag);\n    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);\n    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);\n    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);\n    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);\n  },\n  _triggerDragStart: function _triggerDragStart(\n  /** Event */\n  evt,\n  /** Touch */\n  touch) {\n    touch = touch || evt.pointerType == 'touch' && evt;\n\n    if (!this.nativeDraggable || touch) {\n      if (this.options.supportPointer) {\n        on(document, 'pointermove', this._onTouchMove);\n      } else if (touch) {\n        on(document, 'touchmove', this._onTouchMove);\n      } else {\n        on(document, 'mousemove', this._onTouchMove);\n      }\n    } else {\n      on(dragEl, 'dragend', this);\n      on(rootEl, 'dragstart', this._onDragStart);\n    }\n\n    try {\n      if (document.selection) {\n        // Timeout neccessary for IE9\n        _nextTick(function () {\n          document.selection.empty();\n        });\n      } else {\n        window.getSelection().removeAllRanges();\n      }\n    } catch (err) {}\n  },\n  _dragStarted: function _dragStarted(fallback, evt) {\n\n    awaitingDragStarted = false;\n\n    if (rootEl && dragEl) {\n      pluginEvent('dragStarted', this, {\n        evt: evt\n      });\n\n      if (this.nativeDraggable) {\n        on(document, 'dragover', _checkOutsideTargetEl);\n      }\n\n      var options = this.options; // Apply effect\n\n      !fallback && toggleClass(dragEl, options.dragClass, false);\n      toggleClass(dragEl, options.ghostClass, true);\n      Sortable.active = this;\n      fallback && this._appendGhost(); // Drag start event\n\n      _dispatchEvent({\n        sortable: this,\n        name: 'start',\n        originalEvent: evt\n      });\n    } else {\n      this._nulling();\n    }\n  },\n  _emulateDragOver: function _emulateDragOver() {\n    if (touchEvt) {\n      this._lastX = touchEvt.clientX;\n      this._lastY = touchEvt.clientY;\n\n      _hideGhostForTarget();\n\n      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);\n      var parent = target;\n\n      while (target && target.shadowRoot) {\n        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);\n        if (target === parent) break;\n        parent = target;\n      }\n\n      dragEl.parentNode[expando]._isOutsideThisEl(target);\n\n      if (parent) {\n        do {\n          if (parent[expando]) {\n            var inserted = void 0;\n            inserted = parent[expando]._onDragOver({\n              clientX: touchEvt.clientX,\n              clientY: touchEvt.clientY,\n              target: target,\n              rootEl: parent\n            });\n\n            if (inserted && !this.options.dragoverBubble) {\n              break;\n            }\n          }\n\n          target = parent; // store last element\n        }\n        /* jshint boss:true */\n        while (parent = parent.parentNode);\n      }\n\n      _unhideGhostForTarget();\n    }\n  },\n  _onTouchMove: function _onTouchMove(\n  /**TouchEvent*/\n  evt) {\n    if (tapEvt) {\n      var options = this.options,\n          fallbackTolerance = options.fallbackTolerance,\n          fallbackOffset = options.fallbackOffset,\n          touch = evt.touches ? evt.touches[0] : evt,\n          ghostMatrix = ghostEl && matrix(ghostEl, true),\n          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,\n          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,\n          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),\n          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),\n          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging\n\n      if (!Sortable.active && !awaitingDragStarted) {\n        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {\n          return;\n        }\n\n        this._onDragStart(evt, true);\n      }\n\n      if (ghostEl) {\n        if (ghostMatrix) {\n          ghostMatrix.e += dx - (lastDx || 0);\n          ghostMatrix.f += dy - (lastDy || 0);\n        } else {\n          ghostMatrix = {\n            a: 1,\n            b: 0,\n            c: 0,\n            d: 1,\n            e: dx,\n            f: dy\n          };\n        }\n\n        var cssMatrix = \"matrix(\".concat(ghostMatrix.a, \",\").concat(ghostMatrix.b, \",\").concat(ghostMatrix.c, \",\").concat(ghostMatrix.d, \",\").concat(ghostMatrix.e, \",\").concat(ghostMatrix.f, \")\");\n        css(ghostEl, 'webkitTransform', cssMatrix);\n        css(ghostEl, 'mozTransform', cssMatrix);\n        css(ghostEl, 'msTransform', cssMatrix);\n        css(ghostEl, 'transform', cssMatrix);\n        lastDx = dx;\n        lastDy = dy;\n        touchEvt = touch;\n      }\n\n      evt.cancelable && evt.preventDefault();\n    }\n  },\n  _appendGhost: function _appendGhost() {\n    // Bug if using scale(): https://stackoverflow.com/questions/2637058\n    // Not being adjusted for\n    if (!ghostEl) {\n      var container = this.options.fallbackOnBody ? document.body : rootEl,\n          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),\n          options = this.options; // Position absolutely\n\n      if (PositionGhostAbsolutely) {\n        // Get relatively positioned parent\n        ghostRelativeParent = container;\n\n        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {\n          ghostRelativeParent = ghostRelativeParent.parentNode;\n        }\n\n        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {\n          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();\n          rect.top += ghostRelativeParent.scrollTop;\n          rect.left += ghostRelativeParent.scrollLeft;\n        } else {\n          ghostRelativeParent = getWindowScrollingElement();\n        }\n\n        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);\n      }\n\n      ghostEl = dragEl.cloneNode(true);\n      toggleClass(ghostEl, options.ghostClass, false);\n      toggleClass(ghostEl, options.fallbackClass, true);\n      toggleClass(ghostEl, options.dragClass, true);\n      css(ghostEl, 'transition', '');\n      css(ghostEl, 'transform', '');\n      css(ghostEl, 'box-sizing', 'border-box');\n      css(ghostEl, 'margin', 0);\n      css(ghostEl, 'top', rect.top);\n      css(ghostEl, 'left', rect.left);\n      css(ghostEl, 'width', rect.width);\n      css(ghostEl, 'height', rect.height);\n      css(ghostEl, 'opacity', '0.8');\n      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');\n      css(ghostEl, 'zIndex', '100000');\n      css(ghostEl, 'pointerEvents', 'none');\n      Sortable.ghost = ghostEl;\n      container.appendChild(ghostEl); // Set transform-origin\n\n      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');\n    }\n  },\n  _onDragStart: function _onDragStart(\n  /**Event*/\n  evt,\n  /**boolean*/\n  fallback) {\n    var _this = this;\n\n    var dataTransfer = evt.dataTransfer;\n    var options = _this.options;\n    pluginEvent('dragStart', this, {\n      evt: evt\n    });\n\n    if (Sortable.eventCanceled) {\n      this._onDrop();\n\n      return;\n    }\n\n    pluginEvent('setupClone', this);\n\n    if (!Sortable.eventCanceled) {\n      cloneEl = clone(dragEl);\n      cloneEl.draggable = false;\n      cloneEl.style['will-change'] = '';\n\n      this._hideClone();\n\n      toggleClass(cloneEl, this.options.chosenClass, false);\n      Sortable.clone = cloneEl;\n    } // #1143: IFrame support workaround\n\n\n    _this.cloneId = _nextTick(function () {\n      pluginEvent('clone', _this);\n      if (Sortable.eventCanceled) return;\n\n      if (!_this.options.removeCloneOnHide) {\n        rootEl.insertBefore(cloneEl, dragEl);\n      }\n\n      _this._hideClone();\n\n      _dispatchEvent({\n        sortable: _this,\n        name: 'clone'\n      });\n    });\n    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events\n\n    if (fallback) {\n      ignoreNextClick = true;\n      _this._loopId = setInterval(_this._emulateDragOver, 50);\n    } else {\n      // Undo what was set in _prepareDragStart before drag started\n      off(document, 'mouseup', _this._onDrop);\n      off(document, 'touchend', _this._onDrop);\n      off(document, 'touchcancel', _this._onDrop);\n\n      if (dataTransfer) {\n        dataTransfer.effectAllowed = 'move';\n        options.setData && options.setData.call(_this, dataTransfer, dragEl);\n      }\n\n      on(document, 'drop', _this); // #1276 fix:\n\n      css(dragEl, 'transform', 'translateZ(0)');\n    }\n\n    awaitingDragStarted = true;\n    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));\n    on(document, 'selectstart', _this);\n    moved = true;\n\n    if (Safari) {\n      css(document.body, 'user-select', 'none');\n    }\n  },\n  // Returns true - if no further action is needed (either inserted or another condition)\n  _onDragOver: function _onDragOver(\n  /**Event*/\n  evt) {\n    var el = this.el,\n        target = evt.target,\n        dragRect,\n        targetRect,\n        revert,\n        options = this.options,\n        group = options.group,\n        activeSortable = Sortable.active,\n        isOwner = activeGroup === group,\n        canSort = options.sort,\n        fromSortable = putSortable || activeSortable,\n        vertical,\n        _this = this,\n        completedFired = false;\n\n    if (_silent) return;\n\n    function dragOverEvent(name, extra) {\n      pluginEvent(name, _this, _objectSpread({\n        evt: evt,\n        isOwner: isOwner,\n        axis: vertical ? 'vertical' : 'horizontal',\n        revert: revert,\n        dragRect: dragRect,\n        targetRect: targetRect,\n        canSort: canSort,\n        fromSortable: fromSortable,\n        target: target,\n        completed: completed,\n        onMove: function onMove(target, after) {\n          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);\n        },\n        changed: changed\n      }, extra));\n    } // Capture animation state\n\n\n    function capture() {\n      dragOverEvent('dragOverAnimationCapture');\n\n      _this.captureAnimationState();\n\n      if (_this !== fromSortable) {\n        fromSortable.captureAnimationState();\n      }\n    } // Return invocation when dragEl is inserted (or completed)\n\n\n    function completed(insertion) {\n      dragOverEvent('dragOverCompleted', {\n        insertion: insertion\n      });\n\n      if (insertion) {\n        // Clones must be hidden before folding animation to capture dragRectAbsolute properly\n        if (isOwner) {\n          activeSortable._hideClone();\n        } else {\n          activeSortable._showClone(_this);\n        }\n\n        if (_this !== fromSortable) {\n          // Set ghost class to new sortable's ghost class\n          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);\n          toggleClass(dragEl, options.ghostClass, true);\n        }\n\n        if (putSortable !== _this && _this !== Sortable.active) {\n          putSortable = _this;\n        } else if (_this === Sortable.active && putSortable) {\n          putSortable = null;\n        } // Animation\n\n\n        if (fromSortable === _this) {\n          _this._ignoreWhileAnimating = target;\n        }\n\n        _this.animateAll(function () {\n          dragOverEvent('dragOverAnimationComplete');\n          _this._ignoreWhileAnimating = null;\n        });\n\n        if (_this !== fromSortable) {\n          fromSortable.animateAll();\n          fromSortable._ignoreWhileAnimating = null;\n        }\n      } // Null lastTarget if it is not inside a previously swapped element\n\n\n      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {\n        lastTarget = null;\n      } // no bubbling and not fallback\n\n\n      if (!options.dragoverBubble && !evt.rootEl && target !== document) {\n        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted\n\n\n        !insertion && nearestEmptyInsertDetectEvent(evt);\n      }\n\n      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();\n      return completedFired = true;\n    } // Call when dragEl has been inserted\n\n\n    function changed() {\n      newIndex = index(dragEl);\n      newDraggableIndex = index(dragEl, options.draggable);\n\n      _dispatchEvent({\n        sortable: _this,\n        name: 'change',\n        toEl: el,\n        newIndex: newIndex,\n        newDraggableIndex: newDraggableIndex,\n        originalEvent: evt\n      });\n    }\n\n    if (evt.preventDefault !== void 0) {\n      evt.cancelable && evt.preventDefault();\n    }\n\n    target = closest(target, options.draggable, el, true);\n    dragOverEvent('dragOver');\n    if (Sortable.eventCanceled) return completedFired;\n\n    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {\n      return completed(false);\n    }\n\n    ignoreNextClick = false;\n\n    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list\n    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {\n      vertical = this._getDirection(evt, target) === 'vertical';\n      dragRect = getRect(dragEl);\n      dragOverEvent('dragOverValid');\n      if (Sortable.eventCanceled) return completedFired;\n\n      if (revert) {\n        parentEl = rootEl; // actualization\n\n        capture();\n\n        this._hideClone();\n\n        dragOverEvent('revert');\n\n        if (!Sortable.eventCanceled) {\n          if (nextEl) {\n            rootEl.insertBefore(dragEl, nextEl);\n          } else {\n            rootEl.appendChild(dragEl);\n          }\n        }\n\n        return completed(true);\n      }\n\n      var elLastChild = lastChild(el, options.draggable);\n\n      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {\n        // If already at end of list: Do not insert\n        if (elLastChild === dragEl) {\n          return completed(false);\n        } // assign target only if condition is true\n\n\n        if (elLastChild && el === evt.target) {\n          target = elLastChild;\n        }\n\n        if (target) {\n          targetRect = getRect(target);\n        }\n\n        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {\n          capture();\n          el.appendChild(dragEl);\n          parentEl = el; // actualization\n\n          changed();\n          return completed(true);\n        }\n      } else if (target.parentNode === el) {\n        targetRect = getRect(target);\n        var direction = 0,\n            targetBeforeFirstSwap,\n            differentLevel = dragEl.parentNode !== el,\n            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),\n            side1 = vertical ? 'top' : 'left',\n            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),\n            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;\n\n        if (lastTarget !== target) {\n          targetBeforeFirstSwap = targetRect[side1];\n          pastFirstInvertThresh = false;\n          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;\n        }\n\n        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);\n        var sibling;\n\n        if (direction !== 0) {\n          // Check if target is beside dragEl in respective direction (ignoring hidden elements)\n          var dragIndex = index(dragEl);\n\n          do {\n            dragIndex -= direction;\n            sibling = parentEl.children[dragIndex];\n          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));\n        } // If dragEl is already beside target: Do not insert\n\n\n        if (direction === 0 || sibling === target) {\n          return completed(false);\n        }\n\n        lastTarget = target;\n        lastDirection = direction;\n        var nextSibling = target.nextElementSibling,\n            after = false;\n        after = direction === 1;\n\n        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);\n\n        if (moveVector !== false) {\n          if (moveVector === 1 || moveVector === -1) {\n            after = moveVector === 1;\n          }\n\n          _silent = true;\n          setTimeout(_unsilent, 30);\n          capture();\n\n          if (after && !nextSibling) {\n            el.appendChild(dragEl);\n          } else {\n            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);\n          } // Undo chrome's scroll adjustment (has no effect on other browsers)\n\n\n          if (scrolledPastTop) {\n            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);\n          }\n\n          parentEl = dragEl.parentNode; // actualization\n          // must be done before animation\n\n          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {\n            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);\n          }\n\n          changed();\n          return completed(true);\n        }\n      }\n\n      if (el.contains(dragEl)) {\n        return completed(false);\n      }\n    }\n\n    return false;\n  },\n  _ignoreWhileAnimating: null,\n  _offMoveEvents: function _offMoveEvents() {\n    off(document, 'mousemove', this._onTouchMove);\n    off(document, 'touchmove', this._onTouchMove);\n    off(document, 'pointermove', this._onTouchMove);\n    off(document, 'dragover', nearestEmptyInsertDetectEvent);\n    off(document, 'mousemove', nearestEmptyInsertDetectEvent);\n    off(document, 'touchmove', nearestEmptyInsertDetectEvent);\n  },\n  _offUpEvents: function _offUpEvents() {\n    var ownerDocument = this.el.ownerDocument;\n    off(ownerDocument, 'mouseup', this._onDrop);\n    off(ownerDocument, 'touchend', this._onDrop);\n    off(ownerDocument, 'pointerup', this._onDrop);\n    off(ownerDocument, 'touchcancel', this._onDrop);\n    off(document, 'selectstart', this);\n  },\n  _onDrop: function _onDrop(\n  /**Event*/\n  evt) {\n    var el = this.el,\n        options = this.options; // Get the index of the dragged element within its parent\n\n    newIndex = index(dragEl);\n    newDraggableIndex = index(dragEl, options.draggable);\n    pluginEvent('drop', this, {\n      evt: evt\n    });\n    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event\n\n    newIndex = index(dragEl);\n    newDraggableIndex = index(dragEl, options.draggable);\n\n    if (Sortable.eventCanceled) {\n      this._nulling();\n\n      return;\n    }\n\n    awaitingDragStarted = false;\n    isCircumstantialInvert = false;\n    pastFirstInvertThresh = false;\n    clearInterval(this._loopId);\n    clearTimeout(this._dragStartTimer);\n\n    _cancelNextTick(this.cloneId);\n\n    _cancelNextTick(this._dragStartId); // Unbind events\n\n\n    if (this.nativeDraggable) {\n      off(document, 'drop', this);\n      off(el, 'dragstart', this._onDragStart);\n    }\n\n    this._offMoveEvents();\n\n    this._offUpEvents();\n\n    if (Safari) {\n      css(document.body, 'user-select', '');\n    }\n\n    css(dragEl, 'transform', '');\n\n    if (evt) {\n      if (moved) {\n        evt.cancelable && evt.preventDefault();\n        !options.dropBubble && evt.stopPropagation();\n      }\n\n      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);\n\n      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {\n        // Remove clone(s)\n        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);\n      }\n\n      if (dragEl) {\n        if (this.nativeDraggable) {\n          off(dragEl, 'dragend', this);\n        }\n\n        _disableDraggable(dragEl);\n\n        dragEl.style['will-change'] = ''; // Remove classes\n        // ghostClass is added in dragStarted\n\n        if (moved && !awaitingDragStarted) {\n          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);\n        }\n\n        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event\n\n        _dispatchEvent({\n          sortable: this,\n          name: 'unchoose',\n          toEl: parentEl,\n          newIndex: null,\n          newDraggableIndex: null,\n          originalEvent: evt\n        });\n\n        if (rootEl !== parentEl) {\n          if (newIndex >= 0) {\n            // Add event\n            _dispatchEvent({\n              rootEl: parentEl,\n              name: 'add',\n              toEl: parentEl,\n              fromEl: rootEl,\n              originalEvent: evt\n            }); // Remove event\n\n\n            _dispatchEvent({\n              sortable: this,\n              name: 'remove',\n              toEl: parentEl,\n              originalEvent: evt\n            }); // drag from one list and drop into another\n\n\n            _dispatchEvent({\n              rootEl: parentEl,\n              name: 'sort',\n              toEl: parentEl,\n              fromEl: rootEl,\n              originalEvent: evt\n            });\n\n            _dispatchEvent({\n              sortable: this,\n              name: 'sort',\n              toEl: parentEl,\n              originalEvent: evt\n            });\n          }\n\n          putSortable && putSortable.save();\n        } else {\n          if (newIndex !== oldIndex) {\n            if (newIndex >= 0) {\n              // drag & drop within the same list\n              _dispatchEvent({\n                sortable: this,\n                name: 'update',\n                toEl: parentEl,\n                originalEvent: evt\n              });\n\n              _dispatchEvent({\n                sortable: this,\n                name: 'sort',\n                toEl: parentEl,\n                originalEvent: evt\n              });\n            }\n          }\n        }\n\n        if (Sortable.active) {\n          /* jshint eqnull:true */\n          if (newIndex == null || newIndex === -1) {\n            newIndex = oldIndex;\n            newDraggableIndex = oldDraggableIndex;\n          }\n\n          _dispatchEvent({\n            sortable: this,\n            name: 'end',\n            toEl: parentEl,\n            originalEvent: evt\n          }); // Save sorting\n\n\n          this.save();\n        }\n      }\n    }\n\n    this._nulling();\n  },\n  _nulling: function _nulling() {\n    pluginEvent('nulling', this);\n    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;\n    savedInputChecked.forEach(function (el) {\n      el.checked = true;\n    });\n    savedInputChecked.length = lastDx = lastDy = 0;\n  },\n  handleEvent: function handleEvent(\n  /**Event*/\n  evt) {\n    switch (evt.type) {\n      case 'drop':\n      case 'dragend':\n        this._onDrop(evt);\n\n        break;\n\n      case 'dragenter':\n      case 'dragover':\n        if (dragEl) {\n          this._onDragOver(evt);\n\n          _globalDragOver(evt);\n        }\n\n        break;\n\n      case 'selectstart':\n        evt.preventDefault();\n        break;\n    }\n  },\n\n  /**\n   * Serializes the item into an array of string.\n   * @returns {String[]}\n   */\n  toArray: function toArray() {\n    var order = [],\n        el,\n        children = this.el.children,\n        i = 0,\n        n = children.length,\n        options = this.options;\n\n    for (; i < n; i++) {\n      el = children[i];\n\n      if (closest(el, options.draggable, this.el, false)) {\n        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));\n      }\n    }\n\n    return order;\n  },\n\n  /**\n   * Sorts the elements according to the array.\n   * @param  {String[]}  order  order of the items\n   */\n  sort: function sort(order) {\n    var items = {},\n        rootEl = this.el;\n    this.toArray().forEach(function (id, i) {\n      var el = rootEl.children[i];\n\n      if (closest(el, this.options.draggable, rootEl, false)) {\n        items[id] = el;\n      }\n    }, this);\n    order.forEach(function (id) {\n      if (items[id]) {\n        rootEl.removeChild(items[id]);\n        rootEl.appendChild(items[id]);\n      }\n    });\n  },\n\n  /**\n   * Save the current sorting\n   */\n  save: function save() {\n    var store = this.options.store;\n    store && store.set && store.set(this);\n  },\n\n  /**\n   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.\n   * @param   {HTMLElement}  el\n   * @param   {String}       [selector]  default: `options.draggable`\n   * @returns {HTMLElement|null}\n   */\n  closest: function closest$1(el, selector) {\n    return closest(el, selector || this.options.draggable, this.el, false);\n  },\n\n  /**\n   * Set/get option\n   * @param   {string} name\n   * @param   {*}      [value]\n   * @returns {*}\n   */\n  option: function option(name, value) {\n    var options = this.options;\n\n    if (value === void 0) {\n      return options[name];\n    } else {\n      var modifiedValue = PluginManager.modifyOption(this, name, value);\n\n      if (typeof modifiedValue !== 'undefined') {\n        options[name] = modifiedValue;\n      } else {\n        options[name] = value;\n      }\n\n      if (name === 'group') {\n        _prepareGroup(options);\n      }\n    }\n  },\n\n  /**\n   * Destroy\n   */\n  destroy: function destroy() {\n    pluginEvent('destroy', this);\n    var el = this.el;\n    el[expando] = null;\n    off(el, 'mousedown', this._onTapStart);\n    off(el, 'touchstart', this._onTapStart);\n    off(el, 'pointerdown', this._onTapStart);\n\n    if (this.nativeDraggable) {\n      off(el, 'dragover', this);\n      off(el, 'dragenter', this);\n    } // Remove draggable attributes\n\n\n    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {\n      el.removeAttribute('draggable');\n    });\n\n    this._onDrop();\n\n    this._disableDelayedDragEvents();\n\n    sortables.splice(sortables.indexOf(this.el), 1);\n    this.el = el = null;\n  },\n  _hideClone: function _hideClone() {\n    if (!cloneHidden) {\n      pluginEvent('hideClone', this);\n      if (Sortable.eventCanceled) return;\n      css(cloneEl, 'display', 'none');\n\n      if (this.options.removeCloneOnHide && cloneEl.parentNode) {\n        cloneEl.parentNode.removeChild(cloneEl);\n      }\n\n      cloneHidden = true;\n    }\n  },\n  _showClone: function _showClone(putSortable) {\n    if (putSortable.lastPutMode !== 'clone') {\n      this._hideClone();\n\n      return;\n    }\n\n    if (cloneHidden) {\n      pluginEvent('showClone', this);\n      if (Sortable.eventCanceled) return; // show clone at dragEl or original position\n\n      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {\n        rootEl.insertBefore(cloneEl, dragEl);\n      } else if (nextEl) {\n        rootEl.insertBefore(cloneEl, nextEl);\n      } else {\n        rootEl.appendChild(cloneEl);\n      }\n\n      if (this.options.group.revertClone) {\n        this.animate(dragEl, cloneEl);\n      }\n\n      css(cloneEl, 'display', '');\n      cloneHidden = false;\n    }\n  }\n};\n\nfunction _globalDragOver(\n/**Event*/\nevt) {\n  if (evt.dataTransfer) {\n    evt.dataTransfer.dropEffect = 'move';\n  }\n\n  evt.cancelable && evt.preventDefault();\n}\n\nfunction _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {\n  var evt,\n      sortable = fromEl[expando],\n      onMoveFn = sortable.options.onMove,\n      retVal; // Support for new CustomEvent feature\n\n  if (window.CustomEvent && !IE11OrLess && !Edge) {\n    evt = new CustomEvent('move', {\n      bubbles: true,\n      cancelable: true\n    });\n  } else {\n    evt = document.createEvent('Event');\n    evt.initEvent('move', true, true);\n  }\n\n  evt.to = toEl;\n  evt.from = fromEl;\n  evt.dragged = dragEl;\n  evt.draggedRect = dragRect;\n  evt.related = targetEl || toEl;\n  evt.relatedRect = targetRect || getRect(toEl);\n  evt.willInsertAfter = willInsertAfter;\n  evt.originalEvent = originalEvent;\n  fromEl.dispatchEvent(evt);\n\n  if (onMoveFn) {\n    retVal = onMoveFn.call(sortable, evt, originalEvent);\n  }\n\n  return retVal;\n}\n\nfunction _disableDraggable(el) {\n  el.draggable = false;\n}\n\nfunction _unsilent() {\n  _silent = false;\n}\n\nfunction _ghostIsLast(evt, vertical, sortable) {\n  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));\n  var spacer = 10;\n  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;\n}\n\nfunction _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {\n  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,\n      targetLength = vertical ? targetRect.height : targetRect.width,\n      targetS1 = vertical ? targetRect.top : targetRect.left,\n      targetS2 = vertical ? targetRect.bottom : targetRect.right,\n      invert = false;\n\n  if (!invertSwap) {\n    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold\n    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {\n      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2\n      // check if past first invert threshold on side opposite of lastDirection\n      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {\n        // past first invert threshold, do not restrict inverted threshold to dragEl shadow\n        pastFirstInvertThresh = true;\n      }\n\n      if (!pastFirstInvertThresh) {\n        // dragEl shadow (target move distance shadow)\n        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow\n        : mouseOnAxis > targetS2 - targetMoveDistance) {\n          return -lastDirection;\n        }\n      } else {\n        invert = true;\n      }\n    } else {\n      // Regular\n      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {\n        return _getInsertDirection(target);\n      }\n    }\n  }\n\n  invert = invert || invertSwap;\n\n  if (invert) {\n    // Invert of regular\n    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {\n      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;\n    }\n  }\n\n  return 0;\n}\n/**\n * Gets the direction dragEl must be swapped relative to target in order to make it\n * seem that dragEl has been \"inserted\" into that element's position\n * @param  {HTMLElement} target       The target whose position dragEl is being inserted at\n * @return {Number}                   Direction dragEl must be swapped\n */\n\n\nfunction _getInsertDirection(target) {\n  if (index(dragEl) < index(target)) {\n    return 1;\n  } else {\n    return -1;\n  }\n}\n/**\n * Generate id\n * @param   {HTMLElement} el\n * @returns {String}\n * @private\n */\n\n\nfunction _generateId(el) {\n  var str = el.tagName + el.className + el.src + el.href + el.textContent,\n      i = str.length,\n      sum = 0;\n\n  while (i--) {\n    sum += str.charCodeAt(i);\n  }\n\n  return sum.toString(36);\n}\n\nfunction _saveInputCheckedState(root) {\n  savedInputChecked.length = 0;\n  var inputs = root.getElementsByTagName('input');\n  var idx = inputs.length;\n\n  while (idx--) {\n    var el = inputs[idx];\n    el.checked && savedInputChecked.push(el);\n  }\n}\n\nfunction _nextTick(fn) {\n  return setTimeout(fn, 0);\n}\n\nfunction _cancelNextTick(id) {\n  return clearTimeout(id);\n} // Fixed #973:\n\n\nif (documentExists) {\n  on(document, 'touchmove', function (evt) {\n    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {\n      evt.preventDefault();\n    }\n  });\n} // Export utils\n\n\nSortable.utils = {\n  on: on,\n  off: off,\n  css: css,\n  find: find,\n  is: function is(el, selector) {\n    return !!closest(el, selector, el, false);\n  },\n  extend: extend,\n  throttle: throttle,\n  closest: closest,\n  toggleClass: toggleClass,\n  clone: clone,\n  index: index,\n  nextTick: _nextTick,\n  cancelNextTick: _cancelNextTick,\n  detectDirection: _detectDirection,\n  getChild: getChild\n};\n/**\n * Get the Sortable instance of an element\n * @param  {HTMLElement} element The element\n * @return {Sortable|undefined}         The instance of Sortable\n */\n\nSortable.get = function (element) {\n  return element[expando];\n};\n/**\n * Mount a plugin to Sortable\n * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted\n */\n\n\nSortable.mount = function () {\n  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {\n    plugins[_key] = arguments[_key];\n  }\n\n  if (plugins[0].constructor === Array) plugins = plugins[0];\n  plugins.forEach(function (plugin) {\n    if (!plugin.prototype || !plugin.prototype.constructor) {\n      throw \"Sortable: Mounted plugin must be a constructor function, not \".concat({}.toString.call(plugin));\n    }\n\n    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);\n    PluginManager.mount(plugin);\n  });\n};\n/**\n * Create sortable instance\n * @param {HTMLElement}  el\n * @param {Object}      [options]\n */\n\n\nSortable.create = function (el, options) {\n  return new Sortable(el, options);\n}; // Export\n\n\nSortable.version = version;\n\nvar autoScrolls = [],\n    scrollEl,\n    scrollRootEl,\n    scrolling = false,\n    lastAutoScrollX,\n    lastAutoScrollY,\n    touchEvt$1,\n    pointerElemChangedInterval;\n\nfunction AutoScrollPlugin() {\n  function AutoScroll() {\n    this.defaults = {\n      scroll: true,\n      scrollSensitivity: 30,\n      scrollSpeed: 10,\n      bubbleScroll: true\n    }; // Bind all private methods\n\n    for (var fn in this) {\n      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {\n        this[fn] = this[fn].bind(this);\n      }\n    }\n  }\n\n  AutoScroll.prototype = {\n    dragStarted: function dragStarted(_ref) {\n      var originalEvent = _ref.originalEvent;\n\n      if (this.sortable.nativeDraggable) {\n        on(document, 'dragover', this._handleAutoScroll);\n      } else {\n        if (this.options.supportPointer) {\n          on(document, 'pointermove', this._handleFallbackAutoScroll);\n        } else if (originalEvent.touches) {\n          on(document, 'touchmove', this._handleFallbackAutoScroll);\n        } else {\n          on(document, 'mousemove', this._handleFallbackAutoScroll);\n        }\n      }\n    },\n    dragOverCompleted: function dragOverCompleted(_ref2) {\n      var originalEvent = _ref2.originalEvent;\n\n      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)\n      if (!this.options.dragOverBubble && !originalEvent.rootEl) {\n        this._handleAutoScroll(originalEvent);\n      }\n    },\n    drop: function drop() {\n      if (this.sortable.nativeDraggable) {\n        off(document, 'dragover', this._handleAutoScroll);\n      } else {\n        off(document, 'pointermove', this._handleFallbackAutoScroll);\n        off(document, 'touchmove', this._handleFallbackAutoScroll);\n        off(document, 'mousemove', this._handleFallbackAutoScroll);\n      }\n\n      clearPointerElemChangedInterval();\n      clearAutoScrolls();\n      cancelThrottle();\n    },\n    nulling: function nulling() {\n      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;\n      autoScrolls.length = 0;\n    },\n    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {\n      this._handleAutoScroll(evt, true);\n    },\n    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {\n      var _this = this;\n\n      var x = (evt.touches ? evt.touches[0] : evt).clientX,\n          y = (evt.touches ? evt.touches[0] : evt).clientY,\n          elem = document.elementFromPoint(x, y);\n      touchEvt$1 = evt; // IE does not seem to have native autoscroll,\n      // Edge's autoscroll seems too conditional,\n      // MACOS Safari does not have autoscroll,\n      // Firefox and Chrome are good\n\n      if (fallback || Edge || IE11OrLess || Safari) {\n        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change\n\n        var ogElemScroller = getParentAutoScrollElement(elem, true);\n\n        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {\n          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour\n\n          pointerElemChangedInterval = setInterval(function () {\n            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);\n\n            if (newElem !== ogElemScroller) {\n              ogElemScroller = newElem;\n              clearAutoScrolls();\n            }\n\n            autoScroll(evt, _this.options, newElem, fallback);\n          }, 10);\n          lastAutoScrollX = x;\n          lastAutoScrollY = y;\n        }\n      } else {\n        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll\n        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {\n          clearAutoScrolls();\n          return;\n        }\n\n        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);\n      }\n    }\n  };\n  return _extends(AutoScroll, {\n    pluginName: 'scroll',\n    initializeByDefault: true\n  });\n}\n\nfunction clearAutoScrolls() {\n  autoScrolls.forEach(function (autoScroll) {\n    clearInterval(autoScroll.pid);\n  });\n  autoScrolls = [];\n}\n\nfunction clearPointerElemChangedInterval() {\n  clearInterval(pointerElemChangedInterval);\n}\n\nvar autoScroll = throttle(function (evt, options, rootEl, isFallback) {\n  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521\n  if (!options.scroll) return;\n  var x = (evt.touches ? evt.touches[0] : evt).clientX,\n      y = (evt.touches ? evt.touches[0] : evt).clientY,\n      sens = options.scrollSensitivity,\n      speed = options.scrollSpeed,\n      winScroller = getWindowScrollingElement();\n  var scrollThisInstance = false,\n      scrollCustomFn; // New scroll root, set scrollEl\n\n  if (scrollRootEl !== rootEl) {\n    scrollRootEl = rootEl;\n    clearAutoScrolls();\n    scrollEl = options.scroll;\n    scrollCustomFn = options.scrollFn;\n\n    if (scrollEl === true) {\n      scrollEl = getParentAutoScrollElement(rootEl, true);\n    }\n  }\n\n  var layersOut = 0;\n  var currentParent = scrollEl;\n\n  do {\n    var el = currentParent,\n        rect = getRect(el),\n        top = rect.top,\n        bottom = rect.bottom,\n        left = rect.left,\n        right = rect.right,\n        width = rect.width,\n        height = rect.height,\n        canScrollX = void 0,\n        canScrollY = void 0,\n        scrollWidth = el.scrollWidth,\n        scrollHeight = el.scrollHeight,\n        elCSS = css(el),\n        scrollPosX = el.scrollLeft,\n        scrollPosY = el.scrollTop;\n\n    if (el === winScroller) {\n      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');\n      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');\n    } else {\n      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');\n      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');\n    }\n\n    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);\n    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);\n\n    if (!autoScrolls[layersOut]) {\n      for (var i = 0; i <= layersOut; i++) {\n        if (!autoScrolls[i]) {\n          autoScrolls[i] = {};\n        }\n      }\n    }\n\n    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {\n      autoScrolls[layersOut].el = el;\n      autoScrolls[layersOut].vx = vx;\n      autoScrolls[layersOut].vy = vy;\n      clearInterval(autoScrolls[layersOut].pid);\n\n      if (vx != 0 || vy != 0) {\n        scrollThisInstance = true;\n        /* jshint loopfunc:true */\n\n        autoScrolls[layersOut].pid = setInterval(function () {\n          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour\n          if (isFallback && this.layer === 0) {\n            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely\n\n          }\n\n          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;\n          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;\n\n          if (typeof scrollCustomFn === 'function') {\n            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {\n              return;\n            }\n          }\n\n          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);\n        }.bind({\n          layer: layersOut\n        }), 24);\n      }\n    }\n\n    layersOut++;\n  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));\n\n  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not\n}, 30);\n\nvar drop = function drop(_ref) {\n  var originalEvent = _ref.originalEvent,\n      putSortable = _ref.putSortable,\n      dragEl = _ref.dragEl,\n      activeSortable = _ref.activeSortable,\n      dispatchSortableEvent = _ref.dispatchSortableEvent,\n      hideGhostForTarget = _ref.hideGhostForTarget,\n      unhideGhostForTarget = _ref.unhideGhostForTarget;\n  if (!originalEvent) return;\n  var toSortable = putSortable || activeSortable;\n  hideGhostForTarget();\n  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;\n  var target = document.elementFromPoint(touch.clientX, touch.clientY);\n  unhideGhostForTarget();\n\n  if (toSortable && !toSortable.el.contains(target)) {\n    dispatchSortableEvent('spill');\n    this.onSpill({\n      dragEl: dragEl,\n      putSortable: putSortable\n    });\n  }\n};\n\nfunction Revert() {}\n\nRevert.prototype = {\n  startIndex: null,\n  dragStart: function dragStart(_ref2) {\n    var oldDraggableIndex = _ref2.oldDraggableIndex;\n    this.startIndex = oldDraggableIndex;\n  },\n  onSpill: function onSpill(_ref3) {\n    var dragEl = _ref3.dragEl,\n        putSortable = _ref3.putSortable;\n    this.sortable.captureAnimationState();\n\n    if (putSortable) {\n      putSortable.captureAnimationState();\n    }\n\n    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);\n\n    if (nextSibling) {\n      this.sortable.el.insertBefore(dragEl, nextSibling);\n    } else {\n      this.sortable.el.appendChild(dragEl);\n    }\n\n    this.sortable.animateAll();\n\n    if (putSortable) {\n      putSortable.animateAll();\n    }\n  },\n  drop: drop\n};\n\n_extends(Revert, {\n  pluginName: 'revertOnSpill'\n});\n\nfunction Remove() {}\n\nRemove.prototype = {\n  onSpill: function onSpill(_ref4) {\n    var dragEl = _ref4.dragEl,\n        putSortable = _ref4.putSortable;\n    var parentSortable = putSortable || this.sortable;\n    parentSortable.captureAnimationState();\n    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);\n    parentSortable.animateAll();\n  },\n  drop: drop\n};\n\n_extends(Remove, {\n  pluginName: 'removeOnSpill'\n});\n\nvar lastSwapEl;\n\nfunction SwapPlugin() {\n  function Swap() {\n    this.defaults = {\n      swapClass: 'sortable-swap-highlight'\n    };\n  }\n\n  Swap.prototype = {\n    dragStart: function dragStart(_ref) {\n      var dragEl = _ref.dragEl;\n      lastSwapEl = dragEl;\n    },\n    dragOverValid: function dragOverValid(_ref2) {\n      var completed = _ref2.completed,\n          target = _ref2.target,\n          onMove = _ref2.onMove,\n          activeSortable = _ref2.activeSortable,\n          changed = _ref2.changed,\n          cancel = _ref2.cancel;\n      if (!activeSortable.options.swap) return;\n      var el = this.sortable.el,\n          options = this.options;\n\n      if (target && target !== el) {\n        var prevSwapEl = lastSwapEl;\n\n        if (onMove(target) !== false) {\n          toggleClass(target, options.swapClass, true);\n          lastSwapEl = target;\n        } else {\n          lastSwapEl = null;\n        }\n\n        if (prevSwapEl && prevSwapEl !== lastSwapEl) {\n          toggleClass(prevSwapEl, options.swapClass, false);\n        }\n      }\n\n      changed();\n      completed(true);\n      cancel();\n    },\n    drop: function drop(_ref3) {\n      var activeSortable = _ref3.activeSortable,\n          putSortable = _ref3.putSortable,\n          dragEl = _ref3.dragEl;\n      var toSortable = putSortable || this.sortable;\n      var options = this.options;\n      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);\n\n      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {\n        if (dragEl !== lastSwapEl) {\n          toSortable.captureAnimationState();\n          if (toSortable !== activeSortable) activeSortable.captureAnimationState();\n          swapNodes(dragEl, lastSwapEl);\n          toSortable.animateAll();\n          if (toSortable !== activeSortable) activeSortable.animateAll();\n        }\n      }\n    },\n    nulling: function nulling() {\n      lastSwapEl = null;\n    }\n  };\n  return _extends(Swap, {\n    pluginName: 'swap',\n    eventProperties: function eventProperties() {\n      return {\n        swapItem: lastSwapEl\n      };\n    }\n  });\n}\n\nfunction swapNodes(n1, n2) {\n  var p1 = n1.parentNode,\n      p2 = n2.parentNode,\n      i1,\n      i2;\n  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;\n  i1 = index(n1);\n  i2 = index(n2);\n\n  if (p1.isEqualNode(p2) && i1 < i2) {\n    i2++;\n  }\n\n  p1.insertBefore(n2, p1.children[i1]);\n  p2.insertBefore(n1, p2.children[i2]);\n}\n\nvar multiDragElements = [],\n    multiDragClones = [],\n    lastMultiDragSelect,\n    // for selection with modifier key down (SHIFT)\nmultiDragSortable,\n    initialFolding = false,\n    // Initial multi-drag fold when drag started\nfolding = false,\n    // Folding any other time\ndragStarted = false,\n    dragEl$1,\n    clonesFromRect,\n    clonesHidden;\n\nfunction MultiDragPlugin() {\n  function MultiDrag(sortable) {\n    // Bind all private methods\n    for (var fn in this) {\n      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {\n        this[fn] = this[fn].bind(this);\n      }\n    }\n\n    if (sortable.options.supportPointer) {\n      on(document, 'pointerup', this._deselectMultiDrag);\n    } else {\n      on(document, 'mouseup', this._deselectMultiDrag);\n      on(document, 'touchend', this._deselectMultiDrag);\n    }\n\n    on(document, 'keydown', this._checkKeyDown);\n    on(document, 'keyup', this._checkKeyUp);\n    this.defaults = {\n      selectedClass: 'sortable-selected',\n      multiDragKey: null,\n      setData: function setData(dataTransfer, dragEl) {\n        var data = '';\n\n        if (multiDragElements.length && multiDragSortable === sortable) {\n          multiDragElements.forEach(function (multiDragElement, i) {\n            data += (!i ? '' : ', ') + multiDragElement.textContent;\n          });\n        } else {\n          data = dragEl.textContent;\n        }\n\n        dataTransfer.setData('Text', data);\n      }\n    };\n  }\n\n  MultiDrag.prototype = {\n    multiDragKeyDown: false,\n    isMultiDrag: false,\n    delayStartGlobal: function delayStartGlobal(_ref) {\n      var dragged = _ref.dragEl;\n      dragEl$1 = dragged;\n    },\n    delayEnded: function delayEnded() {\n      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);\n    },\n    setupClone: function setupClone(_ref2) {\n      var sortable = _ref2.sortable,\n          cancel = _ref2.cancel;\n      if (!this.isMultiDrag) return;\n\n      for (var i = 0; i < multiDragElements.length; i++) {\n        multiDragClones.push(clone(multiDragElements[i]));\n        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;\n        multiDragClones[i].draggable = false;\n        multiDragClones[i].style['will-change'] = '';\n        toggleClass(multiDragClones[i], this.options.selectedClass, false);\n        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);\n      }\n\n      sortable._hideClone();\n\n      cancel();\n    },\n    clone: function clone(_ref3) {\n      var sortable = _ref3.sortable,\n          rootEl = _ref3.rootEl,\n          dispatchSortableEvent = _ref3.dispatchSortableEvent,\n          cancel = _ref3.cancel;\n      if (!this.isMultiDrag) return;\n\n      if (!this.options.removeCloneOnHide) {\n        if (multiDragElements.length && multiDragSortable === sortable) {\n          insertMultiDragClones(true, rootEl);\n          dispatchSortableEvent('clone');\n          cancel();\n        }\n      }\n    },\n    showClone: function showClone(_ref4) {\n      var cloneNowShown = _ref4.cloneNowShown,\n          rootEl = _ref4.rootEl,\n          cancel = _ref4.cancel;\n      if (!this.isMultiDrag) return;\n      insertMultiDragClones(false, rootEl);\n      multiDragClones.forEach(function (clone) {\n        css(clone, 'display', '');\n      });\n      cloneNowShown();\n      clonesHidden = false;\n      cancel();\n    },\n    hideClone: function hideClone(_ref5) {\n      var _this = this;\n\n      var sortable = _ref5.sortable,\n          cloneNowHidden = _ref5.cloneNowHidden,\n          cancel = _ref5.cancel;\n      if (!this.isMultiDrag) return;\n      multiDragClones.forEach(function (clone) {\n        css(clone, 'display', 'none');\n\n        if (_this.options.removeCloneOnHide && clone.parentNode) {\n          clone.parentNode.removeChild(clone);\n        }\n      });\n      cloneNowHidden();\n      clonesHidden = true;\n      cancel();\n    },\n    dragStartGlobal: function dragStartGlobal(_ref6) {\n      var sortable = _ref6.sortable;\n\n      if (!this.isMultiDrag && multiDragSortable) {\n        multiDragSortable.multiDrag._deselectMultiDrag();\n      }\n\n      multiDragElements.forEach(function (multiDragElement) {\n        multiDragElement.sortableIndex = index(multiDragElement);\n      }); // Sort multi-drag elements\n\n      multiDragElements = multiDragElements.sort(function (a, b) {\n        return a.sortableIndex - b.sortableIndex;\n      });\n      dragStarted = true;\n    },\n    dragStarted: function dragStarted(_ref7) {\n      var _this2 = this;\n\n      var sortable = _ref7.sortable;\n      if (!this.isMultiDrag) return;\n\n      if (this.options.sort) {\n        // Capture rects,\n        // hide multi drag elements (by positioning them absolute),\n        // set multi drag elements rects to dragRect,\n        // show multi drag elements,\n        // animate to rects,\n        // unset rects & remove from DOM\n        sortable.captureAnimationState();\n\n        if (this.options.animation) {\n          multiDragElements.forEach(function (multiDragElement) {\n            if (multiDragElement === dragEl$1) return;\n            css(multiDragElement, 'position', 'absolute');\n          });\n          var dragRect = getRect(dragEl$1, false, true, true);\n          multiDragElements.forEach(function (multiDragElement) {\n            if (multiDragElement === dragEl$1) return;\n            setRect(multiDragElement, dragRect);\n          });\n          folding = true;\n          initialFolding = true;\n        }\n      }\n\n      sortable.animateAll(function () {\n        folding = false;\n        initialFolding = false;\n\n        if (_this2.options.animation) {\n          multiDragElements.forEach(function (multiDragElement) {\n            unsetRect(multiDragElement);\n          });\n        } // Remove all auxiliary multidrag items from el, if sorting enabled\n\n\n        if (_this2.options.sort) {\n          removeMultiDragElements();\n        }\n      });\n    },\n    dragOver: function dragOver(_ref8) {\n      var target = _ref8.target,\n          completed = _ref8.completed,\n          cancel = _ref8.cancel;\n\n      if (folding && ~multiDragElements.indexOf(target)) {\n        completed(false);\n        cancel();\n      }\n    },\n    revert: function revert(_ref9) {\n      var fromSortable = _ref9.fromSortable,\n          rootEl = _ref9.rootEl,\n          sortable = _ref9.sortable,\n          dragRect = _ref9.dragRect;\n\n      if (multiDragElements.length > 1) {\n        // Setup unfold animation\n        multiDragElements.forEach(function (multiDragElement) {\n          sortable.addAnimationState({\n            target: multiDragElement,\n            rect: folding ? getRect(multiDragElement) : dragRect\n          });\n          unsetRect(multiDragElement);\n          multiDragElement.fromRect = dragRect;\n          fromSortable.removeAnimationState(multiDragElement);\n        });\n        folding = false;\n        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);\n      }\n    },\n    dragOverCompleted: function dragOverCompleted(_ref10) {\n      var sortable = _ref10.sortable,\n          isOwner = _ref10.isOwner,\n          insertion = _ref10.insertion,\n          activeSortable = _ref10.activeSortable,\n          parentEl = _ref10.parentEl,\n          putSortable = _ref10.putSortable;\n      var options = this.options;\n\n      if (insertion) {\n        // Clones must be hidden before folding animation to capture dragRectAbsolute properly\n        if (isOwner) {\n          activeSortable._hideClone();\n        }\n\n        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location\n\n        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {\n          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible\n          var dragRectAbsolute = getRect(dragEl$1, false, true, true);\n          multiDragElements.forEach(function (multiDragElement) {\n            if (multiDragElement === dragEl$1) return;\n            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted\n            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable\n\n            parentEl.appendChild(multiDragElement);\n          });\n          folding = true;\n        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out\n\n\n        if (!isOwner) {\n          // Only remove if not folding (folding will remove them anyways)\n          if (!folding) {\n            removeMultiDragElements();\n          }\n\n          if (multiDragElements.length > 1) {\n            var clonesHiddenBefore = clonesHidden;\n\n            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden\n\n\n            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {\n              multiDragClones.forEach(function (clone) {\n                activeSortable.addAnimationState({\n                  target: clone,\n                  rect: clonesFromRect\n                });\n                clone.fromRect = clonesFromRect;\n                clone.thisAnimationDuration = null;\n              });\n            }\n          } else {\n            activeSortable._showClone(sortable);\n          }\n        }\n      }\n    },\n    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {\n      var dragRect = _ref11.dragRect,\n          isOwner = _ref11.isOwner,\n          activeSortable = _ref11.activeSortable;\n      multiDragElements.forEach(function (multiDragElement) {\n        multiDragElement.thisAnimationDuration = null;\n      });\n\n      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {\n        clonesFromRect = _extends({}, dragRect);\n        var dragMatrix = matrix(dragEl$1, true);\n        clonesFromRect.top -= dragMatrix.f;\n        clonesFromRect.left -= dragMatrix.e;\n      }\n    },\n    dragOverAnimationComplete: function dragOverAnimationComplete() {\n      if (folding) {\n        folding = false;\n        removeMultiDragElements();\n      }\n    },\n    drop: function drop(_ref12) {\n      var evt = _ref12.originalEvent,\n          rootEl = _ref12.rootEl,\n          parentEl = _ref12.parentEl,\n          sortable = _ref12.sortable,\n          dispatchSortableEvent = _ref12.dispatchSortableEvent,\n          oldIndex = _ref12.oldIndex,\n          putSortable = _ref12.putSortable;\n      var toSortable = putSortable || this.sortable;\n      if (!evt) return;\n      var options = this.options,\n          children = parentEl.children; // Multi-drag selection\n\n      if (!dragStarted) {\n        if (options.multiDragKey && !this.multiDragKeyDown) {\n          this._deselectMultiDrag();\n        }\n\n        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));\n\n        if (!~multiDragElements.indexOf(dragEl$1)) {\n          multiDragElements.push(dragEl$1);\n          dispatchEvent({\n            sortable: sortable,\n            rootEl: rootEl,\n            name: 'select',\n            targetEl: dragEl$1,\n            originalEvt: evt\n          }); // Modifier activated, select from last to dragEl\n\n          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {\n            var lastIndex = index(lastMultiDragSelect),\n                currentIndex = index(dragEl$1);\n\n            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {\n              // Must include lastMultiDragSelect (select it), in case modified selection from no selection\n              // (but previous selection existed)\n              var n, i;\n\n              if (currentIndex > lastIndex) {\n                i = lastIndex;\n                n = currentIndex;\n              } else {\n                i = currentIndex;\n                n = lastIndex + 1;\n              }\n\n              for (; i < n; i++) {\n                if (~multiDragElements.indexOf(children[i])) continue;\n                toggleClass(children[i], options.selectedClass, true);\n                multiDragElements.push(children[i]);\n                dispatchEvent({\n                  sortable: sortable,\n                  rootEl: rootEl,\n                  name: 'select',\n                  targetEl: children[i],\n                  originalEvt: evt\n                });\n              }\n            }\n          } else {\n            lastMultiDragSelect = dragEl$1;\n          }\n\n          multiDragSortable = toSortable;\n        } else {\n          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);\n          lastMultiDragSelect = null;\n          dispatchEvent({\n            sortable: sortable,\n            rootEl: rootEl,\n            name: 'deselect',\n            targetEl: dragEl$1,\n            originalEvt: evt\n          });\n        }\n      } // Multi-drag drop\n\n\n      if (dragStarted && this.isMultiDrag) {\n        // Do not \"unfold\" after around dragEl if reverted\n        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {\n          var dragRect = getRect(dragEl$1),\n              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');\n          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;\n          toSortable.captureAnimationState();\n\n          if (!initialFolding) {\n            if (options.animation) {\n              dragEl$1.fromRect = dragRect;\n              multiDragElements.forEach(function (multiDragElement) {\n                multiDragElement.thisAnimationDuration = null;\n\n                if (multiDragElement !== dragEl$1) {\n                  var rect = folding ? getRect(multiDragElement) : dragRect;\n                  multiDragElement.fromRect = rect; // Prepare unfold animation\n\n                  toSortable.addAnimationState({\n                    target: multiDragElement,\n                    rect: rect\n                  });\n                }\n              });\n            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert\n            // properly they must all be removed\n\n\n            removeMultiDragElements();\n            multiDragElements.forEach(function (multiDragElement) {\n              if (children[multiDragIndex]) {\n                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);\n              } else {\n                parentEl.appendChild(multiDragElement);\n              }\n\n              multiDragIndex++;\n            }); // If initial folding is done, the elements may have changed position because they are now\n            // unfolding around dragEl, even though dragEl may not have his index changed, so update event\n            // must be fired here as Sortable will not.\n\n            if (oldIndex === index(dragEl$1)) {\n              var update = false;\n              multiDragElements.forEach(function (multiDragElement) {\n                if (multiDragElement.sortableIndex !== index(multiDragElement)) {\n                  update = true;\n                  return;\n                }\n              });\n\n              if (update) {\n                dispatchSortableEvent('update');\n              }\n            }\n          } // Must be done after capturing individual rects (scroll bar)\n\n\n          multiDragElements.forEach(function (multiDragElement) {\n            unsetRect(multiDragElement);\n          });\n          toSortable.animateAll();\n        }\n\n        multiDragSortable = toSortable;\n      } // Remove clones if necessary\n\n\n      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {\n        multiDragClones.forEach(function (clone) {\n          clone.parentNode && clone.parentNode.removeChild(clone);\n        });\n      }\n    },\n    nullingGlobal: function nullingGlobal() {\n      this.isMultiDrag = dragStarted = false;\n      multiDragClones.length = 0;\n    },\n    destroyGlobal: function destroyGlobal() {\n      this._deselectMultiDrag();\n\n      off(document, 'pointerup', this._deselectMultiDrag);\n      off(document, 'mouseup', this._deselectMultiDrag);\n      off(document, 'touchend', this._deselectMultiDrag);\n      off(document, 'keydown', this._checkKeyDown);\n      off(document, 'keyup', this._checkKeyUp);\n    },\n    _deselectMultiDrag: function _deselectMultiDrag(evt) {\n      if (typeof dragStarted !== \"undefined\" && dragStarted) return; // Only deselect if selection is in this sortable\n\n      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable\n\n      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click\n\n      if (evt && evt.button !== 0) return;\n\n      while (multiDragElements.length) {\n        var el = multiDragElements[0];\n        toggleClass(el, this.options.selectedClass, false);\n        multiDragElements.shift();\n        dispatchEvent({\n          sortable: this.sortable,\n          rootEl: this.sortable.el,\n          name: 'deselect',\n          targetEl: el,\n          originalEvt: evt\n        });\n      }\n    },\n    _checkKeyDown: function _checkKeyDown(evt) {\n      if (evt.key === this.options.multiDragKey) {\n        this.multiDragKeyDown = true;\n      }\n    },\n    _checkKeyUp: function _checkKeyUp(evt) {\n      if (evt.key === this.options.multiDragKey) {\n        this.multiDragKeyDown = false;\n      }\n    }\n  };\n  return _extends(MultiDrag, {\n    // Static methods & properties\n    pluginName: 'multiDrag',\n    utils: {\n      /**\r\n       * Selects the provided multi-drag item\r\n       * @param  {HTMLElement} el    The element to be selected\r\n       */\n      select: function select(el) {\n        var sortable = el.parentNode[expando];\n        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;\n\n        if (multiDragSortable && multiDragSortable !== sortable) {\n          multiDragSortable.multiDrag._deselectMultiDrag();\n\n          multiDragSortable = sortable;\n        }\n\n        toggleClass(el, sortable.options.selectedClass, true);\n        multiDragElements.push(el);\n      },\n\n      /**\r\n       * Deselects the provided multi-drag item\r\n       * @param  {HTMLElement} el    The element to be deselected\r\n       */\n      deselect: function deselect(el) {\n        var sortable = el.parentNode[expando],\n            index = multiDragElements.indexOf(el);\n        if (!sortable || !sortable.options.multiDrag || !~index) return;\n        toggleClass(el, sortable.options.selectedClass, false);\n        multiDragElements.splice(index, 1);\n      }\n    },\n    eventProperties: function eventProperties() {\n      var _this3 = this;\n\n      var oldIndicies = [],\n          newIndicies = [];\n      multiDragElements.forEach(function (multiDragElement) {\n        oldIndicies.push({\n          multiDragElement: multiDragElement,\n          index: multiDragElement.sortableIndex\n        }); // multiDragElements will already be sorted if folding\n\n        var newIndex;\n\n        if (folding && multiDragElement !== dragEl$1) {\n          newIndex = -1;\n        } else if (folding) {\n          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');\n        } else {\n          newIndex = index(multiDragElement);\n        }\n\n        newIndicies.push({\n          multiDragElement: multiDragElement,\n          index: newIndex\n        });\n      });\n      return {\n        items: _toConsumableArray(multiDragElements),\n        clones: [].concat(multiDragClones),\n        oldIndicies: oldIndicies,\n        newIndicies: newIndicies\n      };\n    },\n    optionListeners: {\n      multiDragKey: function multiDragKey(key) {\n        key = key.toLowerCase();\n\n        if (key === 'ctrl') {\n          key = 'Control';\n        } else if (key.length > 1) {\n          key = key.charAt(0).toUpperCase() + key.substr(1);\n        }\n\n        return key;\n      }\n    }\n  });\n}\n\nfunction insertMultiDragElements(clonesInserted, rootEl) {\n  multiDragElements.forEach(function (multiDragElement, i) {\n    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];\n\n    if (target) {\n      rootEl.insertBefore(multiDragElement, target);\n    } else {\n      rootEl.appendChild(multiDragElement);\n    }\n  });\n}\n/**\r\n * Insert multi-drag clones\r\n * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted\r\n * @param  {HTMLElement} rootEl\r\n */\n\n\nfunction insertMultiDragClones(elementsInserted, rootEl) {\n  multiDragClones.forEach(function (clone, i) {\n    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];\n\n    if (target) {\n      rootEl.insertBefore(clone, target);\n    } else {\n      rootEl.appendChild(clone);\n    }\n  });\n}\n\nfunction removeMultiDragElements() {\n  multiDragElements.forEach(function (multiDragElement) {\n    if (multiDragElement === dragEl$1) return;\n    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);\n  });\n}\n\nSortable.mount(new AutoScrollPlugin());\nSortable.mount(Remove, Revert);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);\n\n\n\n//# sourceURL=webpack:///./node_modules/sortablejs/modular/sortable.esm.js?");

/***/ }),

/***/ "./src-typescript/SortableWrapper.ts":
/*!*******************************************!*\
  !*** ./src-typescript/SortableWrapper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SortableWrapper\": () => (/* binding */ SortableWrapper)\n/* harmony export */ });\n/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ \"./node_modules/sortablejs/modular/sortable.esm.js\");\n\nvar SETLIST_CHANGE_SORTING = \"chordr:setlist-change-sorting\";\nvar SortableWrapper = /** @class */ (function () {\n    function SortableWrapper(element, callback, options) {\n        console.log('[SortableWrapper] New', element, options);\n        options = options || {};\n        options.onEnd = function (e) {\n            setTimeout(function () {\n                callback(e.oldIndex, e.newIndex);\n            }, 100);\n            // create and dispatch the event\n            var customEvent = new CustomEvent(SETLIST_CHANGE_SORTING, {\n                detail: {\n                    originalEvent: e,\n                    oldIndex: e.oldIndex,\n                    newIndex: e.newIndex,\n                }\n            });\n            element.dispatchEvent(customEvent);\n        };\n        this.sortable = sortablejs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(element, options);\n        console.debug(\"[SortableWrapper] Initialized sortable\", this.sortable);\n    }\n    SortableWrapper.prototype.destroy = function () {\n        if (this.sortable) {\n            console.debug(\"[SortableWrapper] Destroy\", this.sortable);\n            this.sortable.destroy();\n            this.sortable = undefined;\n        }\n        else {\n            console.debug(\"[SortableWrapper] Already destroyed\");\n        }\n    };\n    return SortableWrapper;\n}());\n\n\n\n//# sourceURL=webpack:///./src-typescript/SortableWrapper.ts?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	try {
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	} catch(e) {
/******/ 		module.error = e;
/******/ 		throw e;
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/******/ // expose the module cache
/******/ __webpack_require__.c = __webpack_module_cache__;
/******/ 
/******/ // expose the module execution interceptor
/******/ __webpack_require__.i = [];
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get javascript update chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference all chunks
/******/ 	__webpack_require__.hu = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.mjs";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get update manifest filename */
/******/ (() => {
/******/ 	__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("10909037e89f4aa0fb2b")
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/load script */
/******/ (() => {
/******/ 	var inProgress = {};
/******/ 	// data-webpack is not used as build has no uniqueName
/******/ 	// loadScript function to load a script via script tag
/******/ 	__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 		if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 		var script, needAttach;
/******/ 		if(key !== undefined) {
/******/ 			var scripts = document.getElementsByTagName("script");
/******/ 			for(var i = 0; i < scripts.length; i++) {
/******/ 				var s = scripts[i];
/******/ 				if(s.getAttribute("src") == url) { script = s; break; }
/******/ 			}
/******/ 		}
/******/ 		if(!script) {
/******/ 			needAttach = true;
/******/ 			script = document.createElement('script');
/******/ 			script.type = "module";
/******/ 			script.charset = 'utf-8';
/******/ 			script.timeout = 120;
/******/ 			if (__webpack_require__.nc) {
/******/ 				script.setAttribute("nonce", __webpack_require__.nc);
/******/ 			}
/******/ 	
/******/ 			script.src = url;
/******/ 		}
/******/ 		inProgress[url] = [done];
/******/ 		var onScriptComplete = (prev, event) => {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var doneFns = inProgress[url];
/******/ 			delete inProgress[url];
/******/ 			script.parentNode && script.parentNode.removeChild(script);
/******/ 			doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 			if(prev) return prev(event);
/******/ 		}
/******/ 		;
/******/ 		var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 		script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 		script.onload = onScriptComplete.bind(null, script.onload);
/******/ 		needAttach && document.head.appendChild(script);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hot module replacement */
/******/ (() => {
/******/ 	var currentModuleData = {};
/******/ 	var installedModules = __webpack_require__.c;
/******/ 	
/******/ 	// module and require creation
/******/ 	var currentChildModule;
/******/ 	var currentParents = [];
/******/ 	
/******/ 	// status
/******/ 	var registeredStatusHandlers = [];
/******/ 	var currentStatus = "idle";
/******/ 	
/******/ 	// while downloading
/******/ 	var blockingPromises;
/******/ 	
/******/ 	// The update info
/******/ 	var currentUpdateApplyHandlers;
/******/ 	var queuedInvalidatedModules;
/******/ 	
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	__webpack_require__.hmrD = currentModuleData;
/******/ 	
/******/ 	__webpack_require__.i.push(function (options) {
/******/ 		var module = options.module;
/******/ 		var require = createRequire(options.require, options.id);
/******/ 		module.hot = createModuleHotObject(options.id, module);
/******/ 		module.parents = currentParents;
/******/ 		module.children = [];
/******/ 		currentParents = [];
/******/ 		options.require = require;
/******/ 	});
/******/ 	
/******/ 	__webpack_require__.hmrC = {};
/******/ 	__webpack_require__.hmrI = {};
/******/ 	
/******/ 	function createRequire(require, moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return require;
/******/ 		var fn = function (request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					var parents = installedModules[request].parents;
/******/ 					if (parents.indexOf(moduleId) === -1) {
/******/ 						parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					currentParents = [moduleId];
/******/ 					currentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				currentParents = [];
/******/ 			}
/******/ 			return require(request);
/******/ 		};
/******/ 		var createPropertyDescriptor = function (name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function () {
/******/ 					return require[name];
/******/ 				},
/******/ 				set: function (value) {
/******/ 					require[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in require) {
/******/ 			if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function (chunkId) {
/******/ 			return trackBlockingPromise(require.e(chunkId));
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function createModuleHotObject(moduleId, me) {
/******/ 		var _main = currentChildModule !== moduleId;
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_acceptedErrorHandlers: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: _main,
/******/ 			_requireSelf: function () {
/******/ 				currentParents = me.parents.slice();
/******/ 				currentChildModule = _main ? undefined : moduleId;
/******/ 				__webpack_require__(moduleId);
/******/ 			},
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function (dep, callback, errorHandler) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object" && dep !== null) {
/******/ 					for (var i = 0; i < dep.length; i++) {
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 					}
/******/ 				} else {
/******/ 					hot._acceptedDependencies[dep] = callback || function () {};
/******/ 					hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 				}
/******/ 			},
/******/ 			decline: function (dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object" && dep !== null)
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function (callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function (callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function (callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function () {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (currentStatus) {
/******/ 					case "idle":
/******/ 						currentUpdateApplyHandlers = [];
/******/ 						Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 							__webpack_require__.hmrI[key](
/******/ 								moduleId,
/******/ 								currentUpdateApplyHandlers
/******/ 							);
/******/ 						});
/******/ 						setStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 							__webpack_require__.hmrI[key](
/******/ 								moduleId,
/******/ 								currentUpdateApplyHandlers
/******/ 							);
/******/ 						});
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 							moduleId
/******/ 						);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function (l) {
/******/ 				if (!l) return currentStatus;
/******/ 				registeredStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function (l) {
/******/ 				registeredStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function (l) {
/******/ 				var idx = registeredStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: currentModuleData[moduleId]
/******/ 		};
/******/ 		currentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	function setStatus(newStatus) {
/******/ 		currentStatus = newStatus;
/******/ 		var results = [];
/******/ 	
/******/ 		for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 			results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 	
/******/ 		return Promise.all(results);
/******/ 	}
/******/ 	
/******/ 	function trackBlockingPromise(promise) {
/******/ 		switch (currentStatus) {
/******/ 			case "ready":
/******/ 				setStatus("prepare");
/******/ 				blockingPromises.push(promise);
/******/ 				waitForBlockingPromises(function () {
/******/ 					return setStatus("ready");
/******/ 				});
/******/ 				return promise;
/******/ 			case "prepare":
/******/ 				blockingPromises.push(promise);
/******/ 				return promise;
/******/ 			default:
/******/ 				return promise;
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function waitForBlockingPromises(fn) {
/******/ 		if (blockingPromises.length === 0) return fn();
/******/ 		var blocker = blockingPromises;
/******/ 		blockingPromises = [];
/******/ 		return Promise.all(blocker).then(function () {
/******/ 			return waitForBlockingPromises(fn);
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotCheck(applyOnUpdate) {
/******/ 		if (currentStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		return setStatus("check")
/******/ 			.then(__webpack_require__.hmrM)
/******/ 			.then(function (update) {
/******/ 				if (!update) {
/******/ 					return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 						function () {
/******/ 							return null;
/******/ 						}
/******/ 					);
/******/ 				}
/******/ 	
/******/ 				return setStatus("prepare").then(function () {
/******/ 					var updatedModules = [];
/******/ 					blockingPromises = [];
/******/ 					currentUpdateApplyHandlers = [];
/******/ 	
/******/ 					return Promise.all(
/******/ 						Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 							promises,
/******/ 							key
/******/ 						) {
/******/ 							__webpack_require__.hmrC[key](
/******/ 								update.c,
/******/ 								update.r,
/******/ 								update.m,
/******/ 								promises,
/******/ 								currentUpdateApplyHandlers,
/******/ 								updatedModules
/******/ 							);
/******/ 							return promises;
/******/ 						},
/******/ 						[])
/******/ 					).then(function () {
/******/ 						return waitForBlockingPromises(function () {
/******/ 							if (applyOnUpdate) {
/******/ 								return internalApply(applyOnUpdate);
/******/ 							} else {
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							}
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if (currentStatus !== "ready") {
/******/ 			return Promise.resolve().then(function () {
/******/ 				throw new Error("apply() is only allowed in ready status");
/******/ 			});
/******/ 		}
/******/ 		return internalApply(options);
/******/ 	}
/******/ 	
/******/ 	function internalApply(options) {
/******/ 		options = options || {};
/******/ 	
/******/ 		applyInvalidatedModules();
/******/ 	
/******/ 		var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 			return handler(options);
/******/ 		});
/******/ 		currentUpdateApplyHandlers = undefined;
/******/ 	
/******/ 		var errors = results
/******/ 			.map(function (r) {
/******/ 				return r.error;
/******/ 			})
/******/ 			.filter(Boolean);
/******/ 	
/******/ 		if (errors.length > 0) {
/******/ 			return setStatus("abort").then(function () {
/******/ 				throw errors[0];
/******/ 			});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		var disposePromise = setStatus("dispose");
/******/ 	
/******/ 		results.forEach(function (result) {
/******/ 			if (result.dispose) result.dispose();
/******/ 		});
/******/ 	
/******/ 		// Now in "apply" phase
/******/ 		var applyPromise = setStatus("apply");
/******/ 	
/******/ 		var error;
/******/ 		var reportError = function (err) {
/******/ 			if (!error) error = err;
/******/ 		};
/******/ 	
/******/ 		var outdatedModules = [];
/******/ 		results.forEach(function (result) {
/******/ 			if (result.apply) {
/******/ 				var modules = result.apply(reportError);
/******/ 				if (modules) {
/******/ 					for (var i = 0; i < modules.length; i++) {
/******/ 						outdatedModules.push(modules[i]);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				return setStatus("fail").then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 	
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 	
/******/ 			return setStatus("idle").then(function () {
/******/ 				return outdatedModules;
/******/ 			});
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function applyInvalidatedModules() {
/******/ 		if (queuedInvalidatedModules) {
/******/ 			if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 			Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 				queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 					__webpack_require__.hmrI[key](
/******/ 						moduleId,
/******/ 						currentUpdateApplyHandlers
/******/ 					);
/******/ 				});
/******/ 			});
/******/ 			queuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	__webpack_require__.p = "/";
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 		"main": 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	var currentUpdatedModulesList;
/******/ 	var waitingUpdateResolves = {};
/******/ 	function loadUpdateChunk(chunkId) {
/******/ 		return new Promise((resolve, reject) => {
/******/ 			waitingUpdateResolves[chunkId] = resolve;
/******/ 			// start update chunk loading
/******/ 			var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 			// create error before stack unwound to get useful stacktrace later
/******/ 			var error = new Error();
/******/ 			var loadingEnded = (event) => {
/******/ 				if(waitingUpdateResolves[chunkId]) {
/******/ 					waitingUpdateResolves[chunkId] = undefined
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realSrc = event && event.target && event.target.src;
/******/ 					error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 					error.name = 'ChunkLoadError';
/******/ 					error.type = errorType;
/******/ 					error.request = realSrc;
/******/ 					reject(error);
/******/ 				}
/******/ 			};
/******/ 			__webpack_require__.l(url, loadingEnded);
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	self["webpackHotUpdate"] = (chunkId, moreModules, runtime) => {
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 				currentUpdate[moduleId] = moreModules[moduleId];
/******/ 				if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 			}
/******/ 		}
/******/ 		if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		if(waitingUpdateResolves[chunkId]) {
/******/ 			waitingUpdateResolves[chunkId]();
/******/ 			waitingUpdateResolves[chunkId] = undefined;
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	var currentUpdateChunks;
/******/ 	var currentUpdate;
/******/ 	var currentUpdateRemovedChunks;
/******/ 	var currentUpdateRuntime;
/******/ 	function applyHandler(options) {
/******/ 		if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 		currentUpdateChunks = undefined;
/******/ 		function getAffectedModuleEffects(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.map(function (id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				var module = __webpack_require__.c[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = __webpack_require__.c[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 			);
/******/ 		};
/******/ 	
/******/ 		for (var moduleId in currentUpdate) {
/******/ 			if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				var newModuleFactory = currentUpdate[moduleId];
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (newModuleFactory) {
/******/ 					result = getAffectedModuleEffects(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					return {
/******/ 						error: abortError
/******/ 					};
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = newModuleFactory;
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		currentUpdate = undefined;
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (var j = 0; j < outdatedModules.length; j++) {
/******/ 			var outdatedModuleId = outdatedModules[j];
/******/ 			var module = __webpack_require__.c[outdatedModuleId];
/******/ 			if (
/******/ 				module &&
/******/ 				(module.hot._selfAccepted || module.hot._main) &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!module.hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: outdatedModuleId,
/******/ 					require: module.hot._requireSelf,
/******/ 					errorHandler: module.hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		var moduleOutdatedDependencies;
/******/ 	
/******/ 		return {
/******/ 			dispose: function () {
/******/ 				currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 					delete installedChunks[chunkId];
/******/ 				});
/******/ 				currentUpdateRemovedChunks = undefined;
/******/ 	
/******/ 				var idx;
/******/ 				var queue = outdatedModules.slice();
/******/ 				while (queue.length > 0) {
/******/ 					var moduleId = queue.pop();
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (!module) continue;
/******/ 	
/******/ 					var data = {};
/******/ 	
/******/ 					// Call dispose handlers
/******/ 					var disposeHandlers = module.hot._disposeHandlers;
/******/ 					for (j = 0; j < disposeHandlers.length; j++) {
/******/ 						disposeHandlers[j].call(null, data);
/******/ 					}
/******/ 					__webpack_require__.hmrD[moduleId] = data;
/******/ 	
/******/ 					// disable module (this disables requires from this module)
/******/ 					module.hot.active = false;
/******/ 	
/******/ 					// remove module from cache
/******/ 					delete __webpack_require__.c[moduleId];
/******/ 	
/******/ 					// when disposing there is no need to call dispose handler
/******/ 					delete outdatedDependencies[moduleId];
/******/ 	
/******/ 					// remove "parents" references from all children
/******/ 					for (j = 0; j < module.children.length; j++) {
/******/ 						var child = __webpack_require__.c[module.children[j]];
/******/ 						if (!child) continue;
/******/ 						idx = child.parents.indexOf(moduleId);
/******/ 						if (idx >= 0) {
/******/ 							child.parents.splice(idx, 1);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// remove outdated dependency from module children
/******/ 				var dependency;
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								dependency = moduleOutdatedDependencies[j];
/******/ 								idx = module.children.indexOf(dependency);
/******/ 								if (idx >= 0) module.children.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 			apply: function (reportError) {
/******/ 				// insert new code
/******/ 				for (var updateModuleId in appliedUpdate) {
/******/ 					if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 						__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// run new runtime modules
/******/ 				for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 					currentUpdateRuntime[i](__webpack_require__);
/******/ 				}
/******/ 	
/******/ 				// call accept handlers
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						var module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							var callbacks = [];
/******/ 							var errorHandlers = [];
/******/ 							var dependenciesForCallbacks = [];
/******/ 							for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								var dependency = moduleOutdatedDependencies[j];
/******/ 								var acceptCallback =
/******/ 									module.hot._acceptedDependencies[dependency];
/******/ 								var errorHandler =
/******/ 									module.hot._acceptedErrorHandlers[dependency];
/******/ 								if (acceptCallback) {
/******/ 									if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 									callbacks.push(acceptCallback);
/******/ 									errorHandlers.push(errorHandler);
/******/ 									dependenciesForCallbacks.push(dependency);
/******/ 								}
/******/ 							}
/******/ 							for (var k = 0; k < callbacks.length; k++) {
/******/ 								try {
/******/ 									callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 								} catch (err) {
/******/ 									if (typeof errorHandlers[k] === "function") {
/******/ 										try {
/******/ 											errorHandlers[k](err, {
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k]
/******/ 											});
/******/ 										} catch (err2) {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-error-handler-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err2,
/******/ 													originalError: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err2);
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									} else {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// Load self accepted modules
/******/ 				for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 					var item = outdatedSelfAcceptedModules[o];
/******/ 					var moduleId = item.module;
/******/ 					try {
/******/ 						item.require(moduleId);
/******/ 					} catch (err) {
/******/ 						if (typeof item.errorHandler === "function") {
/******/ 							try {
/******/ 								item.errorHandler(err, {
/******/ 									moduleId: moduleId,
/******/ 									module: __webpack_require__.c[moduleId]
/******/ 								});
/******/ 							} catch (err2) {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-error-handler-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err2,
/******/ 										originalError: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err2);
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						} else {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "self-accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								reportError(err);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				return outdatedModules;
/******/ 			}
/******/ 		};
/******/ 	}
/******/ 	__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 		if (!currentUpdate) {
/******/ 			currentUpdate = {};
/******/ 			currentUpdateRuntime = [];
/******/ 			currentUpdateRemovedChunks = [];
/******/ 			applyHandlers.push(applyHandler);
/******/ 		}
/******/ 		if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 			currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 		}
/******/ 	};
/******/ 	__webpack_require__.hmrC.jsonp = function (
/******/ 		chunkIds,
/******/ 		removedChunks,
/******/ 		removedModules,
/******/ 		promises,
/******/ 		applyHandlers,
/******/ 		updatedModulesList
/******/ 	) {
/******/ 		applyHandlers.push(applyHandler);
/******/ 		currentUpdateChunks = {};
/******/ 		currentUpdateRemovedChunks = removedChunks;
/******/ 		currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 			obj[key] = false;
/******/ 			return obj;
/******/ 		}, {});
/******/ 		currentUpdateRuntime = [];
/******/ 		chunkIds.forEach(function (chunkId) {
/******/ 			if (
/******/ 				__webpack_require__.o(installedChunks, chunkId) &&
/******/ 				installedChunks[chunkId] !== undefined
/******/ 			) {
/******/ 				promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 				currentUpdateChunks[chunkId] = true;
/******/ 			}
/******/ 		});
/******/ 		if (__webpack_require__.f) {
/******/ 			__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 				if (
/******/ 					currentUpdateChunks &&
/******/ 					!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.hmrM = () => {
/******/ 		if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 		return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 			if(response.status === 404) return; // no update available
/******/ 			if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 			return response.json();
/******/ 		});
/******/ 	};
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// no jsonp function
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // module cache are used so entry inlining is disabled
/******/ // startup
/******/ // Load entry module and return exports
/******/ var __webpack_exports__ = __webpack_require__("./src-typescript/SortableWrapper.ts");
/******/ var __webpack_exports__SortableWrapper = __webpack_exports__.SortableWrapper;
/******/ export { __webpack_exports__SortableWrapper as SortableWrapper };
/******/ 
