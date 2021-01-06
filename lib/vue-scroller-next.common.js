module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/scroll/scroll.vue?vue&type=template&id=728dc3d8


function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_scrollChild = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("scrollChild")

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    style: _ctx.outerHeight,
    onMouseenter: _cache[1] || (_cache[1] = (...args) => (_ctx.handleMouEn && _ctx.handleMouEn(...args))),
    onMouseleave: _cache[2] || (_cache[2] = (...args) => (_ctx.handleMouOut && _ctx.handleMouOut(...args)))
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_scrollChild, {
      height: _ctx.height,
      data: _ctx.data,
      ease: _ctx.ease,
      isFirst: false,
      isHover: _ctx.isHover,
      speed: _ctx.speed,
      "hold-up": _ctx.holdUp,
      "show-line": _ctx.showLine
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["height", "data", "ease", "isHover", "speed", "hold-up", "show-line"]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_scrollChild, {
      height: _ctx.height,
      data: _ctx.data,
      ease: _ctx.ease,
      isFirst: true,
      isHover: _ctx.isHover,
      speed: _ctx.speed,
      "hold-up": _ctx.holdUp,
      "show-line": _ctx.showLine
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["height", "data", "ease", "isHover", "speed", "hold-up", "show-line"])
  ], 36))
}
// CONCATENATED MODULE: ./src/scroll/scroll.vue?vue&type=template&id=728dc3d8

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/scroll/scrollChild.vue?vue&type=template&id=f9129e14


function scrollChildvue_type_template_id_f9129e14_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    ref: "scrollBox",
    style: _ctx.trans
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
  ], 4))
}
// CONCATENATED MODULE: ./src/scroll/scrollChild.vue?vue&type=template&id=f9129e14

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--13-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/scroll/scrollChild.vue?vue&type=script&lang=ts

/* harmony default export */ var scrollChildvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
    name: 'scrollChild',
    props: {
        height: {
            default: function () { return 18; },
            type: Number
        },
        data: {
            default: function () { return []; },
            type: Array
        },
        ease: {
            default: function () { return false; },
            type: Boolean
        },
        isFirst: {
            default: function () { return true; },
            type: Boolean
        },
        isHover: {
            default: function () { return false; },
            type: Boolean
        },
        speed: {
            default: function () { return 1000; },
            type: Number
        },
        holdUp: {
            default: function () { return 1000; },
            type: Number
        },
        showLine: {
            default: function () { return 1; },
            type: Number
        }
    },
    setup: function (props) {
        var yPos = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
        var _easeSpeed = 'ease-in-out';
        var _linerSpeed = 'cubic-bezier(0.44, 0.44, 0.61, 0.63)';
        var _timer;
        var _top = props.data.length * props.height + props.showLine * props.height - props.showLine * props.height;
        var trans = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
            return {
                transform: "translate(0, " + yPos.value + "px)",
                transition: "transform " + props.speed + "ms " + (props.ease ? _easeSpeed : _linerSpeed) + " " + props.holdUp + "ms",
                overflow: 'hidden',
                position: 'relative',
                top: "-" + _top + "px",
                display: 'flex',
                flexDirection: 'column-reverse',
                justifyContent: 'flex-end'
            };
        });
        var _move = function () {
            if (props.data.length <= props.showLine) {
                return;
            }
            yPos.value += props.height;
            if (!props.isHover) {
                _timer = setTimeout(_move, props.speed + props.holdUp);
            }
        };
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(yPos, function () {
            var diffHeight = props.isFirst ? _top : _top + props.data.length * props.height;
            if (yPos.value > diffHeight) {
                _top = _top + props.data.length * props.height * 2;
            }
        });
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
            _move();
            document.addEventListener('visibilitychange', function () {
                // 监听失去焦点时不处理动画
                if (document.visibilityState === 'hidden') {
                    clearTimeout(_timer);
                }
                else if (document.visibilityState === 'visible') {
                    _move();
                }
            });
        });
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(props, function () {
            if (!props.isHover) {
                _move();
            }
            else if (props.isHover) {
                clearTimeout(_timer);
            }
        });
        return { trans: trans };
    }
}));

// CONCATENATED MODULE: ./src/scroll/scrollChild.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/scroll/scrollChild.vue



scrollChildvue_type_script_lang_ts.render = scrollChildvue_type_template_id_f9129e14_render

/* harmony default export */ var scrollChild = (scrollChildvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--13-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/scroll/scroll.vue?vue&type=script&lang=ts


/* harmony default export */ var scrollvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
    name: 'Scroll',
    components: {
        scrollChild: scrollChild
    },
    props: {
        height: {
            default: function () { return 18; },
            type: Number
        },
        data: {
            default: function () { return []; },
            type: Array
        },
        ease: {
            default: function () { return false; },
            type: Boolean
        },
        speed: {
            default: function () { return 1000; },
            type: Number
        },
        holdUp: {
            default: function () { return 1000; },
            type: Number
        },
        showLine: {
            default: function () { return 1; },
            type: Number
        }
    },
    setup: function (props) {
        var isHover = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
        var outerHeight = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
            return { height: props.showLine * props.height + "px", overflow: 'hidden' };
        });
        var handleMouEn = function () {
            isHover.value = true;
        };
        var handleMouOut = function () {
            isHover.value = false;
        };
        return { isHover: isHover, handleMouEn: handleMouEn, handleMouOut: handleMouOut, outerHeight: outerHeight };
    }
}));

// CONCATENATED MODULE: ./src/scroll/scroll.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./src/scroll/scroll.vue



scrollvue_type_script_lang_ts.render = render

/* harmony default export */ var scroll_scroll = (scrollvue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/index.ts

scroll_scroll.install = function (app) { app.component(scroll_scroll.name, scroll_scroll); };
/* harmony default export */ var src_0 = (scroll_scroll);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
//# sourceMappingURL=vue-scroller-next.common.js.map