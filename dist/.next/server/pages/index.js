module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_performer_performer_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/performer/performer-grid */ "./src/components/performer/performer-grid.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_performer_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux/performer/actions */ "./src/redux/performer/actions.ts");
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _redux_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redux/user/actions */ "./src/redux/user/actions.ts");
/* harmony import */ var _redux_studio_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux/studio/actions */ "./src/redux/studio/actions.ts");
/* harmony import */ var _components_user_performer_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/user/performer-filter */ "./src/components/user/performer-filter.tsx");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_socket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/socket */ "./src/socket/index.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const initQueryState = {
  offset: 0,
  limit: 60,
  gender: '',
  category: '',
  country: '',
  sortBy: '',
  sort: 'desc'
};

class Homepage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, "search", () => {
      const {
        router,
        searchPerformer: dispatchSearchPerformer
      } = this.props;
      const {
        query
      } = this.state;
      dispatchSearchPerformer(_objectSpread(_objectSpread({}, query), router.query));
    });

    this.state = {
      query: initQueryState
    };
  }

  componentDidMount() {
    this.search();
    this.socket = this.context;
    this.socket.on('modelUpdateStatus', this.search);
    this.socket.on('modelUpdateStreamingStatus', this.search);
  }

  componentDidUpdate(prevProps, prevStates) {
    const {
      router,
      loggedIn
    } = this.props;
    const {
      query
    } = this.state;

    if (router.query.q !== prevProps.router.query.q || query !== prevStates.query) {
      this.search();
    }

    if (!loggedIn && loggedIn !== prevProps.loggedIn) {
      this.search();
    }
  }

  componentWillUnmount() {
    this.socket = this.context;

    if (this.socket) {
      this.socket.off('modelUpdateStatus');
      this.socket.off('modelUpdateStreamingStatus');
    }
  }

  async onLike(performer) {
    const {
      updatePerformerFavourite: dispatchUpdatePerformerFavorite
    } = this.props;
    const {
      _id,
      isFavorite
    } = performer;

    try {
      await src_services__WEBPACK_IMPORTED_MODULE_8__["favouriteService"].favorite(_id, isFavorite);
      dispatchUpdatePerformerFavorite(_id);
    } catch (error) {
      const e = await Promise.resolve(error);
      antd__WEBPACK_IMPORTED_MODULE_9__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_10__["getResponseError"])(e));
    }
  }

  setFilter(name, value) {
    const {
      query
    } = this.state;
    this.setState({
      query: _objectSpread(_objectSpread({}, query), {}, {
        [name]: value
      })
    });
  }

  clearFilter() {
    this.setState({
      query: initQueryState
    });
  }

  render() {
    const {
      categories,
      countries,
      ui
    } = this.props;
    const {
      query
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, null, __jsx("title", null, ui === null || ui === void 0 ? void 0 : ui.siteName)), __jsx("div", {
      className: "homepage"
    }, __jsx(_components_user_performer_filter__WEBPACK_IMPORTED_MODULE_7__["default"] // here is part of filter view.
    , _extends({
      countries: countries,
      categories: categories,
      setFilter: this.setFilter.bind(this),
      clearFilter: this.clearFilter.bind(this)
    }, query)), __jsx(_components_performer_performer_grid__WEBPACK_IMPORTED_MODULE_1__["default"] //here is part of main home's body view
    , _extends({}, this.props, {
      onLike: this.onLike.bind(this),
      title: "Live cams",
      isPage: true,
      setFilter: this.setFilter.bind(this)
    }, query))));
  }

}

Homepage.contextType = src_socket__WEBPACK_IMPORTED_MODULE_12__["SocketContext"];

const mapStateToProps = state => _objectSpread(_objectSpread({
  ui: _objectSpread({}, state.ui)
}, state.performer.performers), {}, {
  countries: state.settings.countries,
  loggedIn: state.auth.loggedIn,
  categories: state.performer.categories.data
});

const mapDispatch = {
  searchPerformer: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_3__["searchPerformer"],
  updatePerformerFavourite: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_3__["updatePerformerFavourite"],
  updateCurrentUser: _redux_user_actions__WEBPACK_IMPORTED_MODULE_5__["updateCurrentUser"],
  updateCurrentPerformer: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_3__["updateCurrentPerformer"],
  updateCurrentStudio: _redux_studio_actions__WEBPACK_IMPORTED_MODULE_6__["updateCurrentStudio"],
  loginSuccess: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginSuccess"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatch)(Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Homepage)));

/***/ }),

/***/ "./src/components/common/base/icons.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/base/icons.tsx ***!
  \**********************************************/
/*! exports provided: FacebookIcon, TwitterIcon, InstagramIcon, GiftIcon, MessageIcon, FavouriteIcon, SendMessageIcon, FundsIcon, PaymentTokensHistoryIcon, TransactionHistoryIcon, PurchasedImageIcon, PurchasedVideoIcon, PurchasedItemIcon, MyProductIcon, VideosIcon, PhotosIcon, FemaleSignIcon, MaleSignIcon, TransgenderIcon, TokensIcon, EarningIcon, PayoutRequestIcon, Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookIcon", function() { return FacebookIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterIcon", function() { return TwitterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramIcon", function() { return InstagramIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftIcon", function() { return GiftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageIcon", function() { return MessageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteIcon", function() { return FavouriteIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageIcon", function() { return SendMessageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundsIcon", function() { return FundsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTokensHistoryIcon", function() { return PaymentTokensHistoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHistoryIcon", function() { return TransactionHistoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedImageIcon", function() { return PurchasedImageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedVideoIcon", function() { return PurchasedVideoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedItemIcon", function() { return PurchasedItemIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductIcon", function() { return MyProductIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosIcon", function() { return VideosIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosIcon", function() { return PhotosIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FemaleSignIcon", function() { return FemaleSignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaleSignIcon", function() { return MaleSignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransgenderIcon", function() { return TransgenderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokensIcon", function() { return TokensIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningIcon", function() { return EarningIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayoutRequestIcon", function() { return PayoutRequestIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable react/require-default-props */

/* eslint-disable react/no-unused-prop-types */

const FacebookIcon = ({
  style
}) => __jsx("img", {
  src: "/icons/facebook.svg",
  style: style
});
const TwitterIcon = ({
  style
}) => __jsx("img", {
  src: "/icons/twitter.svg",
  style: style
});
const InstagramIcon = ({
  style
}) => __jsx("img", {
  src: "/icons/instagram.svg",
  style: style
});
const GiftIcon = () => __jsx("div", {
  className: "anticon"
}, __jsx("svg", {
  width: "17",
  height: "16",
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M14.6001 4.84375H12.2938C12.5063 4.50938 12.6313 4.1125 12.6313 3.6875C12.6313 2.49844 11.6642 1.53125 10.4751 1.53125C9.82822 1.53125 9.24541 1.81875 8.8501 2.27187C8.45479 1.81875 7.87197 1.53125 7.2251 1.53125C6.03604 1.53125 5.06885 2.49844 5.06885 3.6875C5.06885 4.1125 5.19229 4.50938 5.40635 4.84375H3.1001C2.82354 4.84375 2.6001 5.06719 2.6001 5.34375V8.46875C2.6001 8.5375 2.65635 8.59375 2.7251 8.59375H3.3501V13.9688C3.3501 14.2453 3.57354 14.4688 3.8501 14.4688H13.8501C14.1267 14.4688 14.3501 14.2453 14.3501 13.9688V8.59375H14.9751C15.0438 8.59375 15.1001 8.5375 15.1001 8.46875V5.34375C15.1001 5.06719 14.8767 4.84375 14.6001 4.84375ZM9.38135 3.6875C9.38135 3.08438 9.87197 2.59375 10.4751 2.59375C11.0782 2.59375 11.5688 3.08438 11.5688 3.6875C11.5688 4.29062 11.0782 4.78125 10.4751 4.78125H9.38135V3.6875ZM7.2251 2.59375C7.82822 2.59375 8.31885 3.08438 8.31885 3.6875V4.78125H7.2251C6.62197 4.78125 6.13135 4.29062 6.13135 3.6875C6.13135 3.08438 6.62197 2.59375 7.2251 2.59375ZM3.6626 7.53125V5.90625H8.31885V7.53125H3.6626ZM4.4126 8.59375H8.31885V13.4062H4.4126V8.59375ZM13.2876 13.4062H9.38135V8.59375H13.2876V13.4062ZM14.0376 7.53125H9.38135V5.90625H14.0376V7.53125Z",
  fill: "currentColor"
})));
const MessageIcon = ({
  width,
  height,
  color
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM20.8125 6.34687V18.5625H3.1875V6.34687L2.54063 5.84297L3.46172 4.65938L4.46484 5.43984H19.5375L20.5406 4.65938L21.4617 5.84297L20.8125 6.34687ZM19.5375 5.4375L12 11.2969L4.4625 5.4375L3.45938 4.65703L2.53828 5.84062L3.18516 6.34453L11.1914 12.5695C11.4217 12.7484 11.7049 12.8455 11.9965 12.8455C12.2881 12.8455 12.5713 12.7484 12.8016 12.5695L20.8125 6.34687L21.4594 5.84297L20.5383 4.65938L19.5375 5.4375Z",
  fill: color
}));
const FavouriteIcon = ({
  width,
  height,
  color
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M14.1855 4.45916C13.9838 3.97793 13.6929 3.54185 13.3292 3.17532C12.9653 2.80769 12.5362 2.51555 12.0652 2.31477C11.5769 2.10575 11.0531 1.99876 10.5243 2.00001C9.78243 2.00001 9.05862 2.20933 8.42961 2.60472C8.27913 2.6993 8.13618 2.80319 8.00074 2.91638C7.86531 2.80319 7.72236 2.6993 7.57188 2.60472C6.94287 2.20933 6.21906 2.00001 5.47719 2.00001C4.94299 2.00001 4.42533 2.10545 3.93627 2.31477C3.46377 2.51634 3.03791 2.80629 2.67224 3.17532C2.30807 3.54143 2.01717 3.97762 1.81601 4.45916C1.60684 4.95998 1.5 5.49182 1.5 6.03916C1.5 6.55549 1.60233 7.09352 1.80547 7.64086C1.97552 8.09827 2.2193 8.57273 2.53079 9.05185C3.02436 9.81006 3.70303 10.6008 4.54572 11.4025C5.94218 12.7313 7.32509 13.6492 7.38378 13.6864L7.74041 13.9221C7.89842 14.026 8.10157 14.026 8.25957 13.9221L8.61621 13.6864C8.6749 13.6476 10.0563 12.7313 11.4543 11.4025C12.297 10.6008 12.9756 9.81006 13.4692 9.05185C13.7807 8.57273 14.026 8.09827 14.1945 7.64086C14.3977 7.09352 14.5 6.55549 14.5 6.03916C14.5015 5.49182 14.3946 4.95998 14.1855 4.45916V4.45916ZM8.00074 12.6956C8.00074 12.6956 2.64365 9.15884 2.64365 6.03916C2.64365 4.45916 3.9122 3.17842 5.47719 3.17842C6.5772 3.17842 7.53125 3.81104 8.00074 4.73516C8.47024 3.81104 9.42429 3.17842 10.5243 3.17842C12.0893 3.17842 13.3578 4.45916 13.3578 6.03916C13.3578 9.15884 8.00074 12.6956 8.00074 12.6956Z",
  fill: color
}));
const SendMessageIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M26.7552 14.6367L3.64018 3.04608C3.54623 2.9991 3.43846 2.98804 3.33622 3.01291C3.10134 3.07095 2.95488 3.30862 3.01291 3.54629L5.39488 13.2797C5.4308 13.4262 5.53857 13.5451 5.68226 13.592L9.76365 14.9932L5.68502 16.3943C5.54133 16.4441 5.43356 16.5602 5.4004 16.7066L3.01291 26.4539C2.98804 26.5562 2.9991 26.6639 3.04607 26.7551C3.15384 26.9735 3.41912 27.0619 3.64018 26.9541L26.7552 15.4298C26.8408 15.3884 26.9099 15.3165 26.9541 15.2336C27.0619 15.0125 26.9735 14.7472 26.7552 14.6367ZM5.73752 23.6848L7.12746 18.0028L15.2847 15.2032C15.3483 15.1811 15.4008 15.1314 15.4229 15.065C15.4616 14.949 15.4008 14.8246 15.2847 14.7832L7.12746 11.9864L5.74305 6.32649L23.0966 15.0291L5.73752 23.6848Z",
  fill: "#FF0066"
}));
const FundsIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 25 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M9.8501 10C9.58488 10 9.33053 10.1054 9.14299 10.2929C8.95545 10.4804 8.8501 10.7348 8.8501 11V13C8.8501 13.2652 8.95545 13.5196 9.14299 13.7071C9.33053 13.8946 9.58488 14 9.8501 14C10.1153 14 10.3697 13.8946 10.5572 13.7071C10.7447 13.5196 10.8501 13.2652 10.8501 13V11C10.8501 10.7348 10.7447 10.4804 10.5572 10.2929C10.3697 10.1054 10.1153 10 9.8501 10ZM21.8501 11C22.1153 11 22.3697 10.8946 22.5572 10.7071C22.7447 10.5196 22.8501 10.2652 22.8501 10V6C22.8501 5.73478 22.7447 5.48043 22.5572 5.29289C22.3697 5.10536 22.1153 5 21.8501 5H3.8501C3.58488 5 3.33053 5.10536 3.14299 5.29289C2.95545 5.48043 2.8501 5.73478 2.8501 6V10C2.8501 10.2652 2.95545 10.5196 3.14299 10.7071C3.33053 10.8946 3.58488 11 3.8501 11C4.11531 11 4.36967 11.1054 4.5572 11.2929C4.74474 11.4804 4.8501 11.7348 4.8501 12C4.8501 12.2652 4.74474 12.5196 4.5572 12.7071C4.36967 12.8946 4.11531 13 3.8501 13C3.58488 13 3.33053 13.1054 3.14299 13.2929C2.95545 13.4804 2.8501 13.7348 2.8501 14V18C2.8501 18.2652 2.95545 18.5196 3.14299 18.7071C3.33053 18.8946 3.58488 19 3.8501 19H21.8501C22.1153 19 22.3697 18.8946 22.5572 18.7071C22.7447 18.5196 22.8501 18.2652 22.8501 18V14C22.8501 13.7348 22.7447 13.4804 22.5572 13.2929C22.3697 13.1054 22.1153 13 21.8501 13C21.5849 13 21.3305 12.8946 21.143 12.7071C20.9555 12.5196 20.8501 12.2652 20.8501 12C20.8501 11.7348 20.9555 11.4804 21.143 11.2929C21.3305 11.1054 21.5849 11 21.8501 11ZM20.8501 9.18C20.2709 9.3902 19.7706 9.77363 19.4169 10.2782C19.0633 10.7827 18.8736 11.3839 18.8736 12C18.8736 12.6161 19.0633 13.2173 19.4169 13.7218C19.7706 14.2264 20.2709 14.6098 20.8501 14.82V17H10.8501C10.8501 16.7348 10.7447 16.4804 10.5572 16.2929C10.3697 16.1054 10.1153 16 9.8501 16C9.58488 16 9.33053 16.1054 9.14299 16.2929C8.95545 16.4804 8.8501 16.7348 8.8501 17H4.8501V14.82C5.42925 14.6098 5.92964 14.2264 6.28326 13.7218C6.63687 13.2173 6.82657 12.6161 6.82657 12C6.82657 11.3839 6.63687 10.7827 6.28326 10.2782C5.92964 9.77363 5.42925 9.3902 4.8501 9.18V7H8.8501C8.8501 7.26522 8.95545 7.51957 9.14299 7.70711C9.33053 7.89464 9.58488 8 9.8501 8C10.1153 8 10.3697 7.89464 10.5572 7.70711C10.7447 7.51957 10.8501 7.26522 10.8501 7H20.8501V9.18Z"
}));
const PaymentTokensHistoryIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M19.958 4.04201C18.9157 2.99684 17.6772 2.16796 16.3135 1.603C14.9499 1.03805 13.488 0.748166 12.012 0.750009C8.93797 0.750009 6.15197 1.98401 4.12297 3.98501L4.12397 3.98401V0.751009H2.62397V6.75101H8.62397V5.25101H4.98097C5.88924 4.30215 6.98033 3.54713 8.1884 3.03153C9.39646 2.51592 10.6965 2.2504 12.01 2.25101C17.38 2.25101 21.748 6.62001 21.748 11.989C21.748 17.358 17.379 21.727 12.01 21.727C6.64097 21.727 2.27197 17.358 2.27197 11.989H0.771973C0.771973 18.196 5.80397 23.227 12.01 23.227C15.113 23.227 17.923 21.969 19.957 19.935C21.991 17.901 23.249 15.092 23.249 11.988C23.249 8.88401 21.991 6.07501 19.957 4.04101L19.958 4.04201Z"
}), __jsx("path", {
  d: "M16.125 7.5H6.375V15H16.125V7.5ZM15.375 14.25H7.125V8.25H15.375V14.25Z"
}), __jsx("path", {
  d: "M16.875 9.375V15.75H8.25V16.5H17.625V9.375H16.875Z",
  fill: "black"
}), __jsx("path", {
  d: "M11.25 13.089C12.1805 13.089 12.9375 12.2655 12.9375 11.253C12.9375 10.2405 12.1805 9.41699 11.25 9.41699C10.3195 9.41699 9.5625 10.2405 9.5625 11.253C9.5625 12.2655 10.3195 13.089 11.25 13.089ZM11.25 10.1675C11.767 10.1675 12.1875 10.6545 12.1875 11.2535C12.1875 11.8525 11.767 12.3395 11.25 12.3395C10.733 12.3395 10.3125 11.8525 10.3125 11.2535C10.3125 10.6545 10.733 10.1675 11.25 10.1675Z"
}), __jsx("path", {
  d: "M7.875 9.1875H8.625V13.3125H7.875V9.1875Z",
  fill: "black"
}), __jsx("path", {
  d: "M13.875 9.1875H14.625V13.3125H13.875V9.1875Z",
  fill: "black"
}));
const TransactionHistoryIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M19.958 4.04201C18.9157 2.99684 17.6772 2.16796 16.3135 1.603C14.9499 1.03805 13.488 0.748166 12.012 0.750009C8.93797 0.750009 6.15197 1.98401 4.12297 3.98501L4.12397 3.98401V0.751009H2.62397V6.75101H8.62397V5.25101H4.98097C5.88924 4.30215 6.98033 3.54713 8.1884 3.03153C9.39646 2.51592 10.6965 2.2504 12.01 2.25101C17.38 2.25101 21.748 6.62001 21.748 11.989C21.748 17.358 17.379 21.727 12.01 21.727C6.64097 21.727 2.27197 17.358 2.27197 11.989H0.771973C0.771973 18.196 5.80397 23.227 12.01 23.227C15.113 23.227 17.923 21.969 19.957 19.935C21.991 17.901 23.249 15.092 23.249 11.988C23.249 8.88401 21.991 6.07501 19.957 4.04101L19.958 4.04201Z"
}), __jsx("path", {
  d: "M12.0003 6.16675C8.77897 6.16675 6.16699 8.77873 6.16699 12.0001C6.16699 15.2214 8.77897 17.8334 12.0003 17.8334C15.2217 17.8334 17.8337 15.2214 17.8337 12.0001C17.8337 8.77873 15.2217 6.16675 12.0003 6.16675ZM12.0003 16.8438C9.32585 16.8438 7.15658 14.6746 7.15658 12.0001C7.15658 9.3256 9.32585 7.15633 12.0003 7.15633C14.6748 7.15633 16.8441 9.3256 16.8441 12.0001C16.8441 14.6746 14.6748 16.8438 12.0003 16.8438ZM12.6214 11.698L12.2907 11.6212V9.87248C12.7855 9.94019 13.0915 10.2501 13.1436 10.6303C13.1501 10.6824 13.1943 10.7201 13.2464 10.7201H13.8311C13.8923 10.7201 13.9404 10.6667 13.9352 10.6056C13.8558 9.79435 13.1878 9.27352 12.2959 9.18368V8.75789C12.2959 8.7006 12.249 8.65373 12.1917 8.65373H11.8258C11.7686 8.65373 11.7217 8.7006 11.7217 8.75789V9.18758C10.7998 9.27743 10.0785 9.78654 10.0785 10.7371C10.0785 11.6173 10.7269 12.0417 11.4079 12.2045L11.7295 12.2865V14.1446C11.154 14.0678 10.8311 13.7605 10.7646 13.3464C10.7568 13.297 10.7126 13.2605 10.6618 13.2605H10.0602C9.99902 13.2605 9.95085 13.3126 9.95606 13.3738C10.0146 14.0899 10.5576 14.7488 11.7165 14.8334V15.2423C11.7165 15.2996 11.7633 15.3464 11.8206 15.3464H12.1904C12.2477 15.3464 12.2946 15.2996 12.2946 15.241L12.292 14.8282C13.3115 14.7384 14.0407 14.1928 14.0407 13.2136C14.0394 12.31 13.4652 11.9063 12.6214 11.698ZM11.7282 11.4871C11.6553 11.4662 11.5941 11.4467 11.5329 11.422C11.0928 11.2631 10.8883 11.0066 10.8883 10.6759C10.8883 10.2032 11.2464 9.93368 11.7282 9.87248V11.4871ZM12.2907 14.1485V12.4076C12.3311 12.4194 12.3675 12.4285 12.4053 12.4363C13.0212 12.6238 13.2282 12.8842 13.2282 13.2839C13.2282 13.7931 12.8454 14.099 12.2907 14.1485Z"
}));
const PurchasedImageIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M7.5 6.75C7.5 6.75 7.5 2.25 12 2.25C16.5 2.25 16.5 6.75 16.5 6.75M3.75 6.75V21.75H20.25V6.75H3.75Z"
}), __jsx("path", {
  d: "M12.4816 13.966L11.5699 15.1285L11.0883 14.5145C11.0795 14.5032 11.0683 14.4942 11.0555 14.488C11.0427 14.4817 11.0287 14.4785 11.0145 14.4785C11.0002 14.4785 10.9862 14.4817 10.9734 14.488C10.9606 14.4942 10.9494 14.5032 10.9406 14.5145L9.77109 16.0051C9.76027 16.0189 9.75356 16.0355 9.75172 16.0529C9.74988 16.0704 9.75299 16.088 9.76069 16.1038C9.76839 16.1195 9.78038 16.1328 9.79527 16.1421C9.81017 16.1514 9.82737 16.1563 9.84492 16.1562H14.1562C14.2348 16.1562 14.2781 16.066 14.2301 16.0051L12.6305 13.966C12.6216 13.9548 12.6103 13.9457 12.5974 13.9395C12.5845 13.9333 12.5704 13.93 12.5561 13.93C12.5417 13.93 12.5276 13.9333 12.5147 13.9395C12.5018 13.9457 12.4905 13.9548 12.4816 13.966ZM10.2188 13.1797C10.2188 13.304 10.2681 13.4232 10.356 13.5111C10.444 13.5991 10.5632 13.6484 10.6875 13.6484C10.8118 13.6484 10.931 13.5991 11.019 13.5111C11.1069 13.4232 11.1562 13.304 11.1562 13.1797C11.1562 13.0554 11.1069 12.9361 11.019 12.8482C10.931 12.7603 10.8118 12.7109 10.6875 12.7109C10.5632 12.7109 10.444 12.7603 10.356 12.8482C10.2681 12.9361 10.2188 13.0554 10.2188 13.1797ZM16.0148 11.382L13.493 8.86016C13.4227 8.78984 13.3277 8.75 13.2281 8.75H8.25C8.04258 8.75 7.875 8.91758 7.875 9.125V18.875C7.875 19.0824 8.04258 19.25 8.25 19.25H15.75C15.9574 19.25 16.125 19.0824 16.125 18.875V11.648C16.125 11.5484 16.0852 11.4523 16.0148 11.382ZM15.2602 11.8203H13.0547V9.61484L15.2602 11.8203ZM15.2812 18.4062H8.71875V9.59375H12.2578V12.125C12.2578 12.2555 12.3097 12.3807 12.402 12.473C12.4943 12.5653 12.6195 12.6172 12.75 12.6172H15.2812V18.4062Z"
}));
const PurchasedVideoIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M7.5 6.75C7.5 6.75 7.5 2.25 12 2.25C16.5 2.25 16.5 6.75 16.5 6.75M3.75 6.75V21.75H20.25V6.75H3.75Z"
}), __jsx("path", {
  d: "M12 9C9.243 9 7 11.243 7 14C7 16.757 9.243 19 12 19C14.757 19 17 16.757 17 14C17 11.243 14.757 9 12 9ZM12 18C9.7945 18 8 16.2055 8 14C8 11.7945 9.7945 10 12 10C14.2055 10 16 11.7945 16 14C16 16.2055 14.2055 18 12 18Z"
}), __jsx("path", {
  d: "M10.5 16.5L14.5 14L10.5 11.5V16.5Z",
  fill: "black"
}));
const PurchasedItemIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M1.5 6.40498V17.61C1.5 18.285 1.95 18.87 2.625 19.065L12.375 21.66C12.615 21.735 12.885 21.735 13.125 21.66L22.875 19.065C23.55 18.87 24 18.285 24 17.61V6.40498C24 5.72998 23.55 5.14498 22.875 4.94998L13.125 2.33998C12.877 2.29498 12.623 2.29498 12.375 2.33998L2.625 4.94998C1.95 5.14498 1.5 5.72998 1.5 6.40498ZM12 20.04L3 17.655V7.49998L12 9.91498V20.04ZM3 5.99998L6.75 4.99498L16.5 7.58998L12.75 8.59498L3 5.99998ZM22.5 17.655L13.5 20.04V9.91498L16.5 9.08998V12.75L19.5 11.955V8.29498L22.5 7.49998V17.655ZM19.5 6.79498L9.75 4.19998L12.75 3.40498L22.5 5.99998L19.5 6.79498Z"
}));
const MyProductIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.5 6.40503V17.61C1.5 18.285 1.95 18.87 2.625 19.065L12.375 21.66C12.615 21.735 12.885 21.735 13.125 21.66L22.875 19.065C23.55 18.87 24 18.285 24 17.61V6.40503C24 5.73003 23.55 5.14503 22.875 4.95003L13.125 2.34003C12.877 2.29502 12.623 2.29502 12.375 2.34003L2.625 4.95003C1.95 5.14503 1.5 5.73003 1.5 6.40503ZM12 20.04L3 17.655V7.50003L12 9.91503V20.04ZM3 6.00003L6.75 4.99503L16.5 7.59003L12.75 8.59503L3 6.00003ZM22.5 17.655L13.5 20.04V9.91503L16.5 9.09003V12.75L19.5 11.955V8.29503L22.5 7.50003V17.655ZM19.5 6.79503L9.75 4.20003L12.75 3.40503L22.5 6.00003L19.5 6.79503Z"
}));
const VideosIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 30 31",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M22.5002 9.14424C22.5002 7.76549 21.3789 6.64424 20.0002 6.64424H5.00018C3.62143 6.64424 2.50018 7.76549 2.50018 9.14424V21.6442C2.50018 23.023 3.62143 24.1442 5.00018 24.1442H20.0002C21.3789 24.1442 22.5002 23.023 22.5002 21.6442V17.478L27.5002 21.6442V9.14424L22.5002 13.3105V9.14424ZM20.0027 21.6442H5.00018V9.14424H20.0002L20.0014 15.393L20.0002 15.3942L20.0014 15.3955L20.0027 21.6442Z"
}));
const PhotosIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM20.8125 18.5625H3.1875V17.6273L6.43359 13.7766L9.95156 17.9484L15.4242 11.4609L20.8125 17.85V18.5625ZM20.8125 15.5203L15.5672 9.3C15.4922 9.21094 15.3562 9.21094 15.2812 9.3L9.95156 15.6188L6.57656 11.618C6.50156 11.5289 6.36562 11.5289 6.29062 11.618L3.1875 15.2977V5.4375H20.8125V15.5203ZM7.125 10.6875C7.39585 10.6875 7.66405 10.6342 7.91428 10.5305C8.16452 10.4269 8.39189 10.2749 8.58341 10.0834C8.77493 9.89189 8.92685 9.66452 9.0305 9.41428C9.13415 9.16405 9.1875 8.89585 9.1875 8.625C9.1875 8.35415 9.13415 8.08595 9.0305 7.83572C8.92685 7.58548 8.77493 7.35811 8.58341 7.16659C8.39189 6.97507 8.16452 6.82315 7.91428 6.7195C7.66405 6.61585 7.39585 6.5625 7.125 6.5625C6.57799 6.5625 6.05339 6.7798 5.66659 7.16659C5.2798 7.55339 5.0625 8.07799 5.0625 8.625C5.0625 9.17201 5.2798 9.69661 5.66659 10.0834C6.05339 10.4702 6.57799 10.6875 7.125 10.6875ZM7.125 7.96875C7.48828 7.96875 7.78125 8.26172 7.78125 8.625C7.78125 8.98828 7.48828 9.28125 7.125 9.28125C6.76172 9.28125 6.46875 8.98828 6.46875 8.625C6.46875 8.26172 6.76172 7.96875 7.125 7.96875Z"
}));
const FemaleSignIcon = ({
  color
}) => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M8 1.33337C5.794 1.33337 4 3.12737 4 5.33337C4 7.31137 5.44467 8.95471 7.33333 9.27337V11.3334H5.33333V12.6667H7.33333V14.6587H8.66667V12.6667H10.6667V11.3334H8.66667V9.27337C10.5553 8.95404 12 7.31137 12 5.33337C12 3.12737 10.206 1.33337 8 1.33337ZM8 8.00004C6.52933 8.00004 5.33333 6.80404 5.33333 5.33337C5.33333 3.86271 6.52933 2.66671 8 2.66671C9.47067 2.66671 10.6667 3.86271 10.6667 5.33337C10.6667 6.80404 9.47067 8.00004 8 8.00004Z",
  fill: color || 'currentColor'
}));
const MaleSignIcon = ({
  color
}) => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M13.3334 7.33329V2.66663H8.66671L10.5287 4.52863L7.64737 7.40996C6.9726 6.9266 6.16341 6.66667 5.33337 6.66663C3.12737 6.66663 1.33337 8.46063 1.33337 10.6666C1.33337 12.8726 3.12737 14.6666 5.33337 14.6666C7.53937 14.6666 9.33337 12.8726 9.33337 10.6666C9.33337 9.80396 9.05604 9.00663 8.59004 8.35263L11.4714 5.47129L13.3334 7.33329ZM5.33337 13.3333C3.86271 13.3333 2.66671 12.1373 2.66671 10.6666C2.66671 9.19596 3.86271 7.99996 5.33337 7.99996C6.80404 7.99996 8.00004 9.19596 8.00004 10.6666C8.00004 12.1373 6.80404 13.3333 5.33337 13.3333Z",
  fill: color || 'currentColor'
}));
const TransgenderIcon = ({
  color
}) => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M6.66665 10.3333C7.5507 10.3333 8.39855 9.9821 9.02367 9.35698C9.64879 8.73185 9.99998 7.88401 9.99998 6.99995C9.99998 6.1159 9.64879 5.26805 9.02367 4.64293C8.39855 4.01781 7.5507 3.66662 6.66665 3.66662C5.78259 3.66662 4.93474 4.01781 4.30962 4.64293C3.6845 5.26805 3.33331 6.1159 3.33331 6.99995C3.33331 7.88401 3.6845 8.73185 4.30962 9.35698C4.93474 9.9821 5.78259 10.3333 6.66665 10.3333V10.3333ZM10.6753 4.60929C11.0688 5.26924 11.2932 6.0161 11.3288 6.78362C11.3644 7.55113 11.21 8.31556 10.8792 9.00907C10.5485 9.70258 10.0517 10.3037 9.4329 10.7592C8.8141 11.2146 8.09245 11.5103 7.33198 11.62L7.33331 11.6666V12.3333H7.99998C8.17679 12.3333 8.34636 12.4035 8.47138 12.5285C8.59641 12.6536 8.66664 12.8231 8.66664 13C8.66664 13.1768 8.59641 13.3463 8.47138 13.4714C8.34636 13.5964 8.17679 13.6666 7.99998 13.6666H7.33331V14.3333C7.33331 14.5101 7.26307 14.6797 7.13805 14.8047C7.01303 14.9297 6.84346 15 6.66665 15C6.48983 15 6.32026 14.9297 6.19524 14.8047C6.07022 14.6797 5.99998 14.5101 5.99998 14.3333V13.6666H5.33331C5.1565 13.6666 4.98693 13.5964 4.86191 13.4714C4.73688 13.3463 4.66665 13.1768 4.66665 13C4.66665 12.8231 4.73688 12.6536 4.86191 12.5285C4.98693 12.4035 5.1565 12.3333 5.33331 12.3333H5.99998V11.6666C5.99998 11.6506 5.99998 11.6353 6.00131 11.62C4.83545 11.4491 3.77732 10.8437 3.03926 9.92518C2.3012 9.00666 1.93781 7.84299 2.02201 6.66769C2.10622 5.49239 2.63178 4.39242 3.49325 3.58849C4.35471 2.78457 5.48834 2.33617 6.66665 2.33329C7.83906 2.33186 8.96881 2.77304 9.82998 3.56862L11.0633 2.33529H10.0066C9.82983 2.33529 9.66026 2.26505 9.53524 2.14002C9.41022 2.015 9.33998 1.84543 9.33998 1.66862C9.33998 1.49181 9.41022 1.32224 9.53524 1.19722C9.66026 1.07219 9.82983 1.00195 10.0066 1.00195H12.6733C12.8501 1.00195 13.0197 1.07219 13.1447 1.19722C13.2697 1.32224 13.34 1.49181 13.34 1.66862V4.33529C13.34 4.5121 13.2697 4.68167 13.1447 4.80669C13.0197 4.93172 12.8501 5.00195 12.6733 5.00195C12.4965 5.00195 12.3269 4.93172 12.2019 4.80669C12.0769 4.68167 12.0066 4.5121 12.0066 4.33529V3.27795L10.676 4.60929H10.6753Z",
  fill: color || 'currentColor'
}));
const TokensIcon = () => __jsx("svg", {
  width: "25",
  height: "24",
  viewBox: "0 0 25 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M9.8501 10C9.58488 10 9.33053 10.1054 9.14299 10.2929C8.95545 10.4804 8.8501 10.7348 8.8501 11V13C8.8501 13.2652 8.95545 13.5196 9.14299 13.7071C9.33053 13.8946 9.58488 14 9.8501 14C10.1153 14 10.3697 13.8946 10.5572 13.7071C10.7447 13.5196 10.8501 13.2652 10.8501 13V11C10.8501 10.7348 10.7447 10.4804 10.5572 10.2929C10.3697 10.1054 10.1153 10 9.8501 10ZM21.8501 11C22.1153 11 22.3697 10.8946 22.5572 10.7071C22.7447 10.5196 22.8501 10.2652 22.8501 10V6C22.8501 5.73478 22.7447 5.48043 22.5572 5.29289C22.3697 5.10536 22.1153 5 21.8501 5H3.8501C3.58488 5 3.33053 5.10536 3.14299 5.29289C2.95545 5.48043 2.8501 5.73478 2.8501 6V10C2.8501 10.2652 2.95545 10.5196 3.14299 10.7071C3.33053 10.8946 3.58488 11 3.8501 11C4.11531 11 4.36967 11.1054 4.5572 11.2929C4.74474 11.4804 4.8501 11.7348 4.8501 12C4.8501 12.2652 4.74474 12.5196 4.5572 12.7071C4.36967 12.8946 4.11531 13 3.8501 13C3.58488 13 3.33053 13.1054 3.14299 13.2929C2.95545 13.4804 2.8501 13.7348 2.8501 14V18C2.8501 18.2652 2.95545 18.5196 3.14299 18.7071C3.33053 18.8946 3.58488 19 3.8501 19H21.8501C22.1153 19 22.3697 18.8946 22.5572 18.7071C22.7447 18.5196 22.8501 18.2652 22.8501 18V14C22.8501 13.7348 22.7447 13.4804 22.5572 13.2929C22.3697 13.1054 22.1153 13 21.8501 13C21.5849 13 21.3305 12.8946 21.143 12.7071C20.9555 12.5196 20.8501 12.2652 20.8501 12C20.8501 11.7348 20.9555 11.4804 21.143 11.2929C21.3305 11.1054 21.5849 11 21.8501 11ZM20.8501 9.18C20.2709 9.3902 19.7706 9.77363 19.4169 10.2782C19.0633 10.7827 18.8736 11.3839 18.8736 12C18.8736 12.6161 19.0633 13.2173 19.4169 13.7218C19.7706 14.2264 20.2709 14.6098 20.8501 14.82V17H10.8501C10.8501 16.7348 10.7447 16.4804 10.5572 16.2929C10.3697 16.1054 10.1153 16 9.8501 16C9.58488 16 9.33053 16.1054 9.14299 16.2929C8.95545 16.4804 8.8501 16.7348 8.8501 17H4.8501V14.82C5.42925 14.6098 5.92964 14.2264 6.28326 13.7218C6.63687 13.2173 6.82657 12.6161 6.82657 12C6.82657 11.3839 6.63687 10.7827 6.28326 10.2782C5.92964 9.77363 5.42925 9.3902 4.8501 9.18V7H8.8501C8.8501 7.26522 8.95545 7.51957 9.14299 7.70711C9.33053 7.89464 9.58488 8 9.8501 8C10.1153 8 10.3697 7.89464 10.5572 7.70711C10.7447 7.51957 10.8501 7.26522 10.8501 7H20.8501V9.18Z",
  fill: "currentColor"
}));
const EarningIcon = () => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M20.25 3H0.75V18H20.25V3ZM18.75 16.5H2.25V4.5H18.75V16.5Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M21.75 6.75V19.5H4.5V21H23.25V6.75H21.75Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M10.5 14.178C12.361 14.178 13.875 12.531 13.875 10.506C13.875 8.481 12.361 6.834 10.5 6.834C8.639 6.834 7.125 8.481 7.125 10.506C7.125 12.531 8.639 14.178 10.5 14.178ZM10.5 8.335C11.534 8.335 12.375 9.309 12.375 10.507C12.375 11.705 11.534 12.679 10.5 12.679C9.466 12.679 8.625 11.705 8.625 10.507C8.625 9.309 9.466 8.335 10.5 8.335Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M3.75 6.375H5.25V14.625H3.75V6.375Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M15.75 6.375H17.25V14.625H15.75V6.375Z",
  fill: "currentColor"
}));
const PayoutRequestIcon = () => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM19.6875 13.5H12.375V10.5H19.6875V13.5ZM19.6875 19.6875H4.3125V4.3125H19.6875V9H11.625C11.2102 9 10.875 9.33516 10.875 9.75V14.25C10.875 14.6648 11.2102 15 11.625 15H19.6875V19.6875ZM13.5938 12C13.5938 12.2486 13.6925 12.4871 13.8683 12.6629C14.0442 12.8387 14.2826 12.9375 14.5312 12.9375C14.7799 12.9375 15.0183 12.8387 15.1942 12.6629C15.37 12.4871 15.4688 12.2486 15.4688 12C15.4688 11.7514 15.37 11.5129 15.1942 11.3371C15.0183 11.1613 14.7799 11.0625 14.5312 11.0625C14.2826 11.0625 14.0442 11.1613 13.8683 11.3371C13.6925 11.5129 13.5938 11.7514 13.5938 12Z",
  fill: "currentColor"
}));
const Group = () => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 25 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M17.4542 11.048C18.0632 10.0101 18.3262 8.80528 18.2052 7.60797C18.0262 5.82397 17.0302 4.24697 15.4022 3.16797L14.2972 4.83397C15.4162 5.57597 16.0972 6.63297 16.2152 7.80797C16.2696 8.35407 16.2016 8.90543 16.0162 9.42195C15.8307 9.93847 15.5325 10.4072 15.1432 10.794L13.9512 11.986L15.5692 12.461C19.8012 13.701 19.8502 17.957 19.8502 18H21.8502C21.8502 16.211 20.8942 12.715 17.4542 11.048Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M10.3501 12C12.5561 12 14.3501 10.206 14.3501 8C14.3501 5.794 12.5561 4 10.3501 4C8.1441 4 6.3501 5.794 6.3501 8C6.3501 10.206 8.1441 12 10.3501 12ZM10.3501 6C11.4531 6 12.3501 6.897 12.3501 8C12.3501 9.103 11.4531 10 10.3501 10C9.2471 10 8.3501 9.103 8.3501 8C8.3501 6.897 9.2471 6 10.3501 6ZM11.8501 13H8.8501C5.5411 13 2.8501 15.691 2.8501 19V20H4.8501V19C4.8501 16.794 6.6441 15 8.8501 15H11.8501C14.0561 15 15.8501 16.794 15.8501 19V20H17.8501V19C17.8501 15.691 15.1591 13 11.8501 13Z",
  fill: "currentColor"
}));

/***/ }),

/***/ "./src/components/common/base/loader.less":
/*!************************************************!*\
  !*** ./src/components/common/base/loader.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/base/loader.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/base/loader.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.less */ "./src/components/common/base/loader.less");
/* harmony import */ var _loader_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_less__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Loader = ({
  spinning = false,
  fullScreen = false
}) => __jsx("div", {
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('loader', {
    hidden: !spinning,
    fullScreen
  })
}, __jsx("div", {
  className: "warpper"
}, __jsx("div", {
  className: "text"
}, __jsx("img", {
  src: "/loading-ico.gif",
  width: "65px",
  alt: ""
}))));

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/components/common/layout/banner.less":
/*!**************************************************!*\
  !*** ./src/components/common/layout/banner.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/layout/banner.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/layout/banner.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _banner_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner.less */ "./src/components/common/layout/banner.less");
/* harmony import */ var _banner_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_banner_less__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Link from 'next/link';




const renderBanner = (banner, styleImage) => {
  const {
    type,
    href,
    _id,
    photo,
    contentHTML
  } = banner;

  if (type === 'html' && contentHTML) {
    // eslint-disable-next-line react/no-danger
    return __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: contentHTML
      },
      style: styleImage || {}
    });
  }

  return __jsx("a", {
    href: href || '#',
    target: "_blank",
    rel: "noreferrer",
    key: _id
  }, __jsx("img", {
    src: photo && photo.url,
    alt: "",
    style: styleImage || {}
  }));
};

const Banner = ({
  banners,
  styleImage,
  classnames
}) => __jsx("div", null, banners && banners.length > 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
  autoplay: true,
  arrows: true,
  dots: false,
  effect: "fade",
  className: classnames
}, banners.map(item => renderBanner(item, styleImage))));

Banner.defaultProps = {
  classnames: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./src/components/performer/index.less":
/*!*********************************************!*\
  !*** ./src/components/performer/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/performer/performer-grid.tsx":
/*!*****************************************************!*\
  !*** ./src/components/performer/performer-grid.tsx ***!
  \*****************************************************/
/*! exports provided: GridCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridCard", function() { return GridCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_base_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/common/base/icons */ "./src/components/common/base/icons.tsx");
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/components/performer/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/common/layout/banner */ "./src/components/common/layout/banner.tsx");
/* harmony import */ var _components_common_base_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/common/base/loader */ "./src/components/common/base/loader.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];












const renderTitle = (gender, name) => __jsx("div", {
  className: "p-title"
}, __jsx("span", {
  style: {
    marginRight: 5
  }
}, name), gender === 'male' ? __jsx("span", {
  className: "anticon"
}, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_3__["MaleSignIcon"], null)) : gender === 'female' ? __jsx("span", {
  className: "anticon"
}, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_3__["FemaleSignIcon"], null)) : __jsx("span", {
  className: "anticon"
}, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_3__["TransgenderIcon"], null)));

const renderTags = tags => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
  className: "tags",
  wrap: true,
  size: [5, 2]
}, tags.map(tag => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: {
    pathname: '/tag',
    query: {
      tags: tag
    }
  },
  key: tag,
  as: `/tag/${tag}`
}, __jsx("a", null, "#", tag))));

const GridCard = ({
  performer,
  loggedIn,
  onLike,
  className,
  placeholderAvatarUrl
}) => {
  var _performer$stats;

  const {
    isOnline,
    streamingStatus
  } = performer;
  const statusClassNames = ['p-status'];
  let status = 'offline';

  if (isOnline) {
    switch (streamingStatus) {
      case 'private':
        statusClassNames.push('private');
        status = 'private chat';
        break;

      case 'group':
        statusClassNames.push('group');
        status = 'group chat';
        break;

      case 'public':
        status = 'live';
        statusClassNames.push('online');
        break;

      default:
        status = 'online';
        statusClassNames.push('online');
        break;
    }
  } else {
    statusClassNames.push('offline');
  }

  const defaultPlaceholderAvatarUrl = placeholderAvatarUrl || '/default-user-icon.png';
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Grid, {
    className: className,
    key: performer._id,
    hoverable: false
  }, performer.isBlocked && __jsx("div", {
    className: "blocked-thumb"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["LockOutlined"], null)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/stream',
      query: {
        performer: JSON.stringify(performer)
      }
    },
    as: `/profile/${performer.username}`
  }, __jsx("a", null, __jsx("div", {
    className: "performer-avatar"
  }, __jsx("img", {
    className: "image-performer",
    src: typeof performer.avatar === 'string' && performer.avatar.length > 0 ? performer.avatar : defaultPlaceholderAvatarUrl,
    alt: ""
  }), __jsx("span", {
    className: statusClassNames.join(' ')
  }, status), renderTitle(performer.gender, performer.username), (performer === null || performer === void 0 ? void 0 : (_performer$stats = performer.stats) === null || _performer$stats === void 0 ? void 0 : _performer$stats.views) > 0 && __jsx("div", {
    className: "p-viewer"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EyeOutlined"], {
    style: {
      marginRight: 5
    }
  }), __jsx("span", null, performer.stats.views))))), __jsx("div", {
    className: "performer-bottom"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    justify: "space-between"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx("div", null, performer.tags && renderTags(performer.tags))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx("div", {
    "aria-hidden": true,
    hidden: !loggedIn,
    className: "p-favorite",
    onClick: () => onLike(performer)
  }, performer.isFavorite ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartFilled"], {
    className: "icon"
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {
    className: "icon"
  })))), __jsx("div", {
    className: "about-me"
  }, performer === null || performer === void 0 ? void 0 : performer.aboutMe)));
};

const PerformerGrid = ({
  data,
  searching,
  success,
  title,
  onLike,
  loggedIn,
  isPage,
  offset,
  limit,
  total,
  setFilter,
  placeholderAvatarUrl,
  banners,
  render
}) => {
  const {
    topBanners,
    rightBanners,
    bottomBanners
  } = banners;

  const RowGrid = ({
    dataSource
  }) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      width: '100%'
    }
  }, dataSource && dataSource.length > 0 && dataSource.map(performer => __jsx(GridCard, {
    placeholderAvatarUrl: placeholderAvatarUrl,
    className: "performer-box",
    key: performer._id,
    performer: performer,
    loggedIn: loggedIn,
    onLike: onLike
  })));

  const renderGrid = () => {
    const {
      length
    } = data;

    if (length <= 12) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          width: '100%'
        }
      }, rightBanners && rightBanners.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 16,
        md: 16,
        xs: 24
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, data && data.length > 0 && data.map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer)
      })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 8,
        md: 8,
        xs: 24
      }, __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        }
      }))) : data && data.length > 0 && data.map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer)
      })));
    }

    if (length > 12 && length <= 24) {
      const dataChunk = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["chunk"])(data, 12);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, rightBanners && rightBanners.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          width: '100%'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 16,
        md: 16,
        xs: 24
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, dataChunk[0] && dataChunk[0].length > 0 && dataChunk[0].map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer)
      })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 8,
        md: 8,
        xs: 24
      }, rightBanners && rightBanners.length > 0 && __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        }
      }))), __jsx(RowGrid, {
        dataSource: dataChunk[1]
      })) : __jsx(RowGrid, {
        dataSource: data
      }));
    }

    if (length > 24 && length <= 36) {
      const dataChunk = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["chunk"])(data, 12);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(RowGrid, {
        dataSource: dataChunk[0]
      }), rightBanners && rightBanners.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          width: '100%'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 16,
        lg: 18,
        md: 18,
        xs: 24
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, dataChunk[1] && dataChunk[1].length > 0 && dataChunk[1].map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer)
      })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 8,
        lg: 6,
        md: 6,
        xs: 24
      }, __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        }
      }))) : __jsx(RowGrid, {
        dataSource: dataChunk[1]
      }), __jsx(RowGrid, {
        dataSource: dataChunk[2]
      }));
    }

    if (length > 36) {
      const dataChunk = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["chunk"])(data, 12);
      const lastDataChunk = dataChunk.slice(3);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(RowGrid, {
        dataSource: dataChunk[0]
      }), rightBanners && rightBanners.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          width: '100%'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 16,
        lg: 18,
        md: 18,
        xs: 24
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, dataChunk[1] && dataChunk[1].length > 0 && dataChunk[1].map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer)
      })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 8,
        lg: 6,
        md: 6,
        xs: 24
      }, __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        }
      }))) : __jsx(RowGrid, {
        dataSource: dataChunk[1]
      }), __jsx(RowGrid, {
        dataSource: dataChunk[2]
      }), lastDataChunk.length > 0 && lastDataChunk.map(v => __jsx(RowGrid, {
        key: Object(src_lib__WEBPACK_IMPORTED_MODULE_4__["generateUuid"])(),
        dataSource: v
      })));
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  const actions = setFilter && total > 0 ? [total > limit && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    disabled: searching,
    current: Math.round(offset / limit) + 1,
    pageSize: limit,
    total: total,
    size: "small",
    onChange: page => setFilter('offset', (page - 1) * limit),
    showSizeChanger: false
  })] : [];

  if (render) {
    /**
     * placeholderAvatarUrl props
     */
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "performer-grid",
      title: title,
      bordered: false,
      hoverable: false,
      bodyStyle: {
        padding: '0'
      },
      actions: actions
    }, __jsx(_components_common_base_loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
      spinning: searching
    }), data.length > 0 && data.map(performer => render(performer)));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, isPage && (topBanners === null || topBanners === void 0 ? void 0 : topBanners.length) > 0 && __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    banners: topBanners,
    styleImage: {
      padding: '10px',
      width: '100%'
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "performer-grid",
    title: title,
    bordered: false,
    hoverable: false,
    bodyStyle: {
      padding: '0'
    },
    actions: actions
  }, __jsx(_components_common_base_loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    spinning: searching
  }), success // eslint-disable-next-line no-nested-ternary
  && (total > 0 ? isPage ? renderGrid() : data.map(performer => __jsx(GridCard, {
    key: performer === null || performer === void 0 ? void 0 : performer._id,
    placeholderAvatarUrl: placeholderAvatarUrl,
    className: "performer-box",
    performer: performer,
    loggedIn: loggedIn,
    onLike: p => onLike(p)
  })) : __jsx("div", {
    className: "ant-card-head"
  }, "No model found."))), isPage && (bottomBanners === null || bottomBanners === void 0 ? void 0 : bottomBanners.length) > 0 && __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    banners: bottomBanners,
    styleImage: {
      padding: '10px',
      width: '100%'
    }
  }));
};

PerformerGrid.defaultProps = {
  loggedIn: false,
  setFilter: null,
  limit: 0,
  offset: 0,
  total: 0,
  success: false,
  searching: false,
  title: '',
  onLike: null,
  render: null,
  isPage: false,
  banners: {},
  placeholderAvatarUrl: '/no-avatar.png'
};

const bannerSelecter = state => state.banner.listBanners.data;

const filterBanner = Object(src_lib__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(bannerSelecter, banners => {
  if (!banners.length) return {};
  return {
    topBanners: banners.filter(b => b.position === 'top'),
    rightBanners: banners.filter(b => b.position === 'right'),
    bottomBanners: banners.filter(b => b.position === 'bottom')
  };
});

const mapStates = state => ({
  placeholderAvatarUrl: state.ui.placeholderAvatarUrl,
  banners: filterBanner(state)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStates)(PerformerGrid));

/***/ }),

/***/ "./src/components/user/performer-filter.less":
/*!***************************************************!*\
  !*** ./src/components/user/performer-filter.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/user/performer-filter.tsx":
/*!**************************************************!*\
  !*** ./src/components/user/performer-filter.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _performer_filter_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performer-filter.less */ "./src/components/user/performer-filter.less");
/* harmony import */ var _performer_filter_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_performer_filter_less__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






const PerformerFilter = ({
  countries,
  categories,
  setFilter,
  category,
  country,
  gender,
  clearFilter
}) => {
  const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [selectedMenuKeys, setSelectedMenuKeys] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
  const [lastSelectedMenuKey, setLastSelectedMenuKey] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]();

  const onOpenChange = keys => {
    const menuKeys = keys.filter(key => key !== lastSelectedMenuKey);
    setSelectedMenuKeys(menuKeys);
    setLastSelectedMenuKey(menuKeys[0]);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    align: "middle",
    className: "performer-filter",
    justify: "space-between"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["FilterOutlined"], null),
    type: "primary",
    onClick: () => setVisible(true),
    className: "mr-8"
  }, "Filter"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    className: "ant-space-wrap"
  }, __jsx("span", {
    style: {
      fontWeight: 'bold'
    }
  }, "Popular Filter:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: clearFilter,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(gender === '' ? 'active' : ''),
    type: "dashed"
  }, "All"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setFilter('gender', gender === 'female' ? '' : 'female'),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(gender === 'female' ? 'active' : ''),
    type: "dashed"
  }, "Female"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setFilter('gender', gender === 'transgender' ? '' : 'transgender'),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(gender === 'transgender' ? 'active' : ''),
    type: "dashed"
  }, "Transgender"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => setFilter('gender', gender === 'male' ? '' : 'male'),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(gender === 'male' ? 'active' : ''),
    type: "dashed"
  }, "Male")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    visible: visible,
    placement: "left",
    onClose: () => setVisible(false),
    title: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      justify: "space-between",
      align: "middle"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], null, "Filter by:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "link",
      onClick: () => clearFilter(),
      size: "small",
      style: {
        marginRight: 10
      }
    }, "Clear Filter")))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    style: {
      borderRight: 0
    },
    multiple: false,
    onSelect: ({
      key
    }) => setFilter('category', key),
    onDeselect: () => setFilter('category', ''),
    selectedKeys: [category],
    openKeys: selectedMenuKeys,
    onOpenChange: onOpenChange
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
    title: "Category",
    key: "category"
  }, categories.length > 0 && categories.map(c => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: c._id
  }, c.name)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    style: {
      borderRight: 0
    },
    onSelect: ({
      key
    }) => setFilter('gender', key),
    onDeselect: () => setFilter('gender', ''),
    selectedKeys: [gender],
    openKeys: selectedMenuKeys,
    onOpenChange: onOpenChange
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
    title: "Gender",
    key: "gender"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "female"
  }, "Female"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "transgender"
  }, "Transgender"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "male"
  }, "Male"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    style: {
      borderRight: 0
    },
    multiple: false,
    onSelect: ({
      key
    }) => setFilter('country', key),
    onDeselect: () => setFilter('country', ''),
    selectedKeys: [country],
    openKeys: selectedMenuKeys,
    onOpenChange: onOpenChange
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
    title: "Country",
    key: "country"
  }, countries.length > 0 && countries.map(c => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: c.name
  }, c.name))))));
};

PerformerFilter.defaultProps = {
  countries: [],
  categories: [],
  // offset: 0,
  // limit: 0,
  gender: '',
  category: '',
  country: ''
};
/* harmony default export */ __webpack_exports__["default"] = (PerformerFilter);

/***/ }),

/***/ "./src/lib/date.ts":
/*!*************************!*\
  !*** ./src/lib/date.ts ***!
  \*************************/
/*! exports provided: formatDate, converDuration, parseAge, getAge, formatDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "converDuration", function() { return converDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAge", function() { return parseAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAge", function() { return getAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDuration", function() { return formatDuration; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function formatDate(date, format = 'DD/MM/YYYY HH:mm:ss') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
}
function converDuration(duration, format = 'HH:mm') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default.a.utc(moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(duration, 'milliseconds').asMilliseconds()).format(format);
}
function parseAge(date, format = 'MMMM DD, YYYY') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
}
function getAge(d) {
  if (!d) return '';
  const age = new Date().getFullYear() - new Date(d).getFullYear();
  return age;
}
function formatDuration(s) {
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s - hours * 3600) / 60);
  const seconds = s - hours * 3600 - minutes * 60;
  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

/***/ }),

/***/ "./src/lib/file.ts":
/*!*************************!*\
  !*** ./src/lib/file.ts ***!
  \*************************/
/*! exports provided: beforeAvatarUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeAvatarUpload", function() { return beforeAvatarUpload; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);

function beforeAvatarUpload(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  const isImageAccept = ".jpeg, .jpg, .png".split(',').map(item => item.trim()).indexOf(`.${ext}`);

  if (isImageAccept === -1) {
    antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(`You can only upload ${".jpeg, .jpg, .png"} file!`);
    return false;
  }

  const isLt2M = file.size / 1024 / 1024 < ("2" || false);

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(`Image must smaller than ${"2" || false}MB!`);
    return false;
  }

  return true;
}

/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! exports provided: isHasInternetConnection, createSagas, createAction, createAsyncAction, createAsyncActions, createSelectorsA, handleActions, createReducers, createSelectors, createSelector, createJSSelectors, isUrl, generateUuid, capitalizeFirstLetter, unitPrices, formatDate, converDuration, parseAge, getAge, formatDuration, validateMessages, formItemLayout, tailFormItemLayout, defaultColor, arrayToTree, pathMatchRegexp, queryAncestors, getResponseError, isMobile, getUrlParameter, DAY_OF_WEEK, getDefaultSchedule, getNextShow, getSearchData, getBase64, convertConnectionData, checkUserLogin, getCurrentUser, isPhysicalProduct, chatBoxMessageClassName, formatDataWeight, formatDataHeight, formatPrice, usernamePatternRule, beforeAvatarUpload, DEFAULT_OFFLINE_IMAGE_URL, DEFAULT_PRIVATE_IMAGE_URL, DEFAULT_GROUP_IMAGE_URL, DEFAULT_ONLINE_IMAGE_URL, getPoster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internet */ "./src/lib/internet.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isHasInternetConnection", function() { return _internet__WEBPACK_IMPORTED_MODULE_0__["isHasInternetConnection"]; });

/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux */ "./src/lib/redux.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSagas", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createSagas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAsyncAction", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createAsyncAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAsyncActions", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createAsyncActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorsA", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createSelectorsA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleActions", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["handleActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducers", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectors", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createJSSelectors", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createJSSelectors"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "./src/lib/string.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["isUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateUuid", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["generateUuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["capitalizeFirstLetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unitPrices", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["unitPrices"]; });

/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./src/lib/date.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "converDuration", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["converDuration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAge", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["parseAge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAge", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["getAge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDuration", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["formatDuration"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/lib/message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateMessages", function() { return _message__WEBPACK_IMPORTED_MODULE_4__["validateMessages"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ "./src/lib/layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formItemLayout", function() { return _layout__WEBPACK_IMPORTED_MODULE_5__["formItemLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tailFormItemLayout", function() { return _layout__WEBPACK_IMPORTED_MODULE_5__["tailFormItemLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultColor", function() { return _layout__WEBPACK_IMPORTED_MODULE_5__["defaultColor"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/lib/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayToTree", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["arrayToTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathMatchRegexp", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["pathMatchRegexp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAncestors", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["queryAncestors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResponseError", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getResponseError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["isMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUrlParameter", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getUrlParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAY_OF_WEEK", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["DAY_OF_WEEK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultSchedule", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultSchedule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextShow", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getNextShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchData", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getSearchData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBase64", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getBase64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertConnectionData", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["convertConnectionData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkUserLogin", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["checkUserLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getCurrentUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPhysicalProduct", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["isPhysicalProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chatBoxMessageClassName", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["chatBoxMessageClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDataWeight", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["formatDataWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDataHeight", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["formatDataHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["formatPrice"]; });

/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules */ "./src/lib/rules.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usernamePatternRule", function() { return _rules__WEBPACK_IMPORTED_MODULE_7__["usernamePatternRule"]; });

/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file */ "./src/lib/file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeAvatarUpload", function() { return _file__WEBPACK_IMPORTED_MODULE_8__["beforeAvatarUpload"]; });

/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stream */ "./src/lib/stream.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_OFFLINE_IMAGE_URL", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_OFFLINE_IMAGE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRIVATE_IMAGE_URL", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_PRIVATE_IMAGE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GROUP_IMAGE_URL", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_GROUP_IMAGE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ONLINE_IMAGE_URL", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_ONLINE_IMAGE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPoster", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["getPoster"]; });












/***/ }),

/***/ "./src/lib/internet.ts":
/*!*****************************!*\
  !*** ./src/lib/internet.ts ***!
  \*****************************/
/*! exports provided: isHasInternetConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHasInternetConnection", function() { return isHasInternetConnection; });
const INTERNET_CHECK_URL = 'https://google.com';
const isHasInternetConnection = async () => {
  try {
    const res = await fetch(INTERNET_CHECK_URL, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0
      }
    });

    if (res.status === 404 || res.status === 401 || res.status === 403 || res.status === 500 || res.status >= 200 && res.status <= 300) {
      return true;
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }

  return false;
};

/***/ }),

/***/ "./src/lib/layout.ts":
/*!***************************!*\
  !*** ./src/lib/layout.ts ***!
  \***************************/
/*! exports provided: formItemLayout, tailFormItemLayout, defaultColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formItemLayout", function() { return formItemLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tailFormItemLayout", function() { return tailFormItemLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColor", function() { return defaultColor; });
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};
const defaultColor = {
  primaryColor: '#ff0066',
  successColor: '#2fb52d',
  whiteColor: '#ffffff'
};

/***/ }),

/***/ "./src/lib/message.ts":
/*!****************************!*\
  !*** ./src/lib/message.ts ***!
  \****************************/
/*! exports provided: validateMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMessages", function() { return validateMessages; });
const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!'
  },
  number: {
    range: 'Must be between min and max'
  }
};

/***/ }),

/***/ "./src/lib/redux.ts":
/*!**************************!*\
  !*** ./src/lib/redux.ts ***!
  \**************************/
/*! exports provided: createSagas, createAction, createAsyncAction, createAsyncActions, createSelectorsA, handleActions, createReducers, createSelectors, createSelector, createJSSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSagas", function() { return createSagas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncAction", function() { return createAsyncAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncActions", function() { return createAsyncActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorsA", function() { return createSelectorsA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleActions", function() { return handleActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducers", function() { return createReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectors", function() { return createSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createJSSelectors", function() { return createJSSelectors; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"]; });

/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable func-names */

/* eslint-disable no-param-reassign */





function createAction(type) {
  const action = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])(type);

  action.is = aType => action.toString() === aType;

  return action;
}
/* tslint:disable-next-line */


function createAsyncAction(action, type) {
  return {
    [action]: createAction(type),
    [`${action}Success`]: createAction(`${type}_SUCCESS`),
    [`${action}Fail`]: createAction(`${type}_FAIL`)
  };
}

function createAsyncActions(type) {
  return [createAction(type), createAction(`${type}_SUCCESS`), createAction(`${type}_FAIL`)];
}
/* tslint:disable */


function handleActions(actions, initialState) {
  return Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(actions, (reducer, handler, action) => {
    reducer[action] = (state, act) => handler(state.set('action', action), act);

    return reducer;
  }, {}), initialState);
}

function createReducers(stateContext, reducers, initialState, preventResetting = false) {
  return {
    [stateContext]: Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(reducers), (reducer, action) => {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(action.on)) {
        action.on.forEach(act => {
          reducer[act] = action.reducer;
        });
      } else reducer[action.on] = action.reducer;

      return reducer;
    }, preventResetting ? {} : {
      APP_STATE_RESET: () => initialState
    }), initialState)
  };
}

function createSagas(sagas) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(sagas).map(saga => {
    const {
      on,
      effect = redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"],
      worker
    } = saga;
    return function* () {
      yield effect(on, function* (action) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(0);
        yield worker(action);
      });
    };
  });
}

function createSelectorsA(context, keys = []) {
  const stateSelector = state => state[context];

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(keys)) return stateSelector;
  return keys.map(key => state => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(key) ? stateSelector(state).getIn(key) : stateSelector(state).get(key));
}

function createSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state).get(key);

    return selectors;
  }, {});
}

function createJSSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state)[key];

    return selectors;
  }, {});
}



/***/ }),

/***/ "./src/lib/rules.ts":
/*!**************************!*\
  !*** ./src/lib/rules.ts ***!
  \**************************/
/*! exports provided: usernamePatternRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernamePatternRule", function() { return usernamePatternRule; });
const usernamePatternRule = {
  pattern: new RegExp('^[a-zA-Z0-9]*$'),
  message: 'Dont allow special chars or space'
};

/***/ }),

/***/ "./src/lib/stream.ts":
/*!***************************!*\
  !*** ./src/lib/stream.ts ***!
  \***************************/
/*! exports provided: DEFAULT_OFFLINE_IMAGE_URL, DEFAULT_PRIVATE_IMAGE_URL, DEFAULT_GROUP_IMAGE_URL, DEFAULT_ONLINE_IMAGE_URL, getPoster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_OFFLINE_IMAGE_URL", function() { return DEFAULT_OFFLINE_IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRIVATE_IMAGE_URL", function() { return DEFAULT_PRIVATE_IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GROUP_IMAGE_URL", function() { return DEFAULT_GROUP_IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ONLINE_IMAGE_URL", function() { return DEFAULT_ONLINE_IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoster", function() { return getPoster; });
const DEFAULT_OFFLINE_IMAGE_URL = '/offline.png';
const DEFAULT_PRIVATE_IMAGE_URL = '/private.png';
const DEFAULT_GROUP_IMAGE_URL = '/group.png';
const DEFAULT_ONLINE_IMAGE_URL = '';
function getPoster(status) {
  let poster = '';

  switch (status) {
    case 'private':
      poster = DEFAULT_PRIVATE_IMAGE_URL;
      break;

    case 'offline':
      poster = DEFAULT_OFFLINE_IMAGE_URL;
      break;

    case 'public':
      poster = DEFAULT_ONLINE_IMAGE_URL;
      break;

    case 'group':
      poster = DEFAULT_GROUP_IMAGE_URL;
      break;

    default:
      poster = DEFAULT_OFFLINE_IMAGE_URL;
      break;
  }

  return poster;
}

/***/ }),

/***/ "./src/lib/string.ts":
/*!***************************!*\
  !*** ./src/lib/string.ts ***!
  \***************************/
/*! exports provided: isUrl, generateUuid, capitalizeFirstLetter, unitPrices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return isUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUuid", function() { return generateUuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitPrices", function() { return unitPrices; });
function isUrl(url) {
  return url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g) !== null;
}
const generateUuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  /* eslint-disable */
  const r = Math.random() * 16 | 0;
  const v = c === 'x' ? r : r & 0x3 | 0x8;
  return v.toString(16);
  /* eslint-enable */
});
function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const unitPrices = [{
  value: 15,
  text: '15 tokens'
}, {
  value: 20,
  text: '20 tokens'
}, {
  value: 25,
  text: '25 tokens'
}, {
  value: 30,
  text: '30 tokens'
}, {
  value: 35,
  text: '35 tokens'
}, {
  value: 40,
  text: '40 tokens'
}, {
  value: 45,
  text: '45 tokens'
}, {
  value: 50,
  text: '50 tokens'
} // {
//   value: 55,
//   text: '55 tokens'
// },
// {
//   value: 60,
//   text: '60 tokens'
// },
// {
//   value: 65,
//   text: '65 tokens'
// },
// {
//   value: 70,
//   text: '70 tokens'
// },
// {
//   value: 75,
//   text: '75 tokens'
// },
// {
//   value: 80,
//   text: '80 tokens'
// },
// {
//   value: 85,
//   text: '85 tokens'
// },
// {
//   value: 90,
//   text: '90 tokens'
// },
// {
//   value: 95,
//   text: '95 tokens'
// },
// {
//   value: 100,
//   text: '100 tokens'
// },
// {
//   value: 120,
//   text: '120 tokens'
// },
// {
//   value: 140,
//   text: '140 tokens'
// },
// {
//   value: 160,
//   text: '160 tokens'
// },
// {
//   value: 180,
//   text: '180 tokens'
// },
// {
//   value: 200,
//   text: '200 tokens'
// },
// {
//   value: 220,
//   text: '220 tokens'
// },
// {
//   value: 240,
//   text: '240 tokens'
// },
// {
//   value: 260,
//   text: '260 tokens'
// },
// {
//   value: 280,
//   text: '280 tokens'
// },
// {
//   value: 300,
//   text: '300 tokens'
// },
// {
//   value: 320,
//   text: '320 tokens'
// },
// {
//   value: 340,
//   text: '340 tokens'
// },
// {
//   value: 360,
//   text: '360 tokens'
// },
// {
//   value: 380,
//   text: '380 tokens'
// },
// {
//   value: 400,
//   text: '400 tokens'
// },
// {
//   value: 420,
//   text: '420 tokens'
// },
// {
//   value: 440,
//   text: '440 tokens'
// },
// {
//   value: 460,
//   text: '460 tokens'
// },
// {
//   value: 480,
//   text: '480 tokens'
// },
// {
//   value: 500,
//   text: '500 tokens'
// },
// {
//   value: 550,
//   text: '550 tokens'
// },
// {
//   value: 600,
//   text: '600 tokens'
// },
// {
//   value: 650,
//   text: '650 tokens'
// },
// {
//   value: 700,
//   text: '700 tokens'
// },
// {
//   value: 750,
//   text: '750 tokens'
// },
// {
//   value: 800,
//   text: '800 tokens'
// },
// {
//   value: 850,
//   text: '850 tokens'
// },
// {
//   value: 900,
//   text: '900 tokens'
// },
// {
//   value: 950,
//   text: '950 tokens'
// },
// {
//   value: 1000,
//   text: '1000 tokens'
// }
];

/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/*! exports provided: arrayToTree, pathMatchRegexp, queryAncestors, getResponseError, isMobile, getUrlParameter, DAY_OF_WEEK, getDefaultSchedule, getNextShow, getSearchData, getBase64, convertConnectionData, checkUserLogin, getCurrentUser, isPhysicalProduct, chatBoxMessageClassName, formatDataWeight, formatDataHeight, formatPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToTree", function() { return arrayToTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathMatchRegexp", function() { return pathMatchRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAncestors", function() { return queryAncestors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponseError", function() { return getResponseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParameter", function() { return getUrlParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAY_OF_WEEK", function() { return DAY_OF_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSchedule", function() { return getDefaultSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextShow", function() { return getNextShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchData", function() { return getSearchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBase64", function() { return getBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertConnectionData", function() { return convertConnectionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserLogin", function() { return checkUserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPhysicalProduct", function() { return isPhysicalProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatBoxMessageClassName", function() { return chatBoxMessageClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataWeight", function() { return formatDataWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataHeight", function() { return formatDataHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path-to-regexp */ "path-to-regexp");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/api-request */ "./src/services/api-request.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Convert an array to a tree-structured array.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @param   {string}    parentId       The alias of the parent ID of the object in the array.
 * @param   {string}    children  The alias of children of the object in the array.
 * @return  {array}    Return a tree-structured array.
 */

function arrayToTree(array, id = 'id', parentId = 'pid', children = 'children') {
  const result = [];
  const hash = {};
  const data = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(array);
  data.forEach((item, index) => {
    hash[data[index][id]] = data[index];
  });
  data.forEach(item => {
    const hashParent = hash[item[parentId]];

    if (hashParent) {
      !hashParent[children] && (hashParent[children] = []);
      hashParent[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
/**
 * Whether the path matches the regexp if the language prefix is ignored, https://github.com/pillarjs/path-to-regexp.
 * @param   {string|regexp|array}     regexp     Specify a string, array of strings, or a regular expression.
 * @param   {string}                  pathname   Specify the pathname to match.
 * @return  {array|null}              Return the result of the match or null.
 */

function pathMatchRegexp(regexp, pathname) {
  return path_to_regexp__WEBPACK_IMPORTED_MODULE_1__["pathToRegexp"](regexp).exec(pathname);
}
/**
 * In an array of objects, specify an object that traverses the objects whose parent ID matches.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    current   Specify the object that needs to be queried.
 * @param   {string}    parentId  The alias of the parent ID of the object in the array.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @return  {array}    Return a key array.
 */

function queryAncestors(array, current, parentId, id = 'id') {
  const result = [current];
  const hashMap = new Map();
  array.forEach(item => hashMap.set(item[id], item)); // eslint-disable-next-line no-shadow

  const getPath = current => {
    const currentParentId = hashMap.get(current[id])[parentId];

    if (currentParentId) {
      result.push(hashMap.get(currentParentId));
      getPath(hashMap.get(currentParentId));
    }
  };

  getPath(current);
  return result;
}
function getResponseError(data) {
  if (!data) {
    return '';
  }

  if (typeof data === 'string') {
    return data;
  }

  if (Array.isArray(data.message)) {
    const item = data.message[0];

    if (!item.constraints) {
      return data.error || 'Bad request!';
    }

    return Object.values(item.constraints)[0];
  } // TODO - parse for langauge or others


  return typeof data.message === 'string' ? data.message : 'Bad request!';
}
function isMobile() {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    return true;
  }

  return false;
} // eslint-disable-next-line consistent-return

function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');
  let sParameterName;
  let i;

  for (i = 0; i < sURLVariables.length; i += 1) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}
const DAY_OF_WEEK = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday'
};
function getDefaultSchedule() {
  const defaultVal = {
    start: null,
    end: null,
    closed: true
  };
  return {
    mon: _objectSpread({}, defaultVal),
    tue: _objectSpread({}, defaultVal),
    wed: _objectSpread({}, defaultVal),
    thu: _objectSpread({}, defaultVal),
    fri: _objectSpread({}, defaultVal),
    sat: _objectSpread({}, defaultVal),
    sun: _objectSpread({}, defaultVal)
  };
}
function getNextShow(schedule) {
  let weekDay = parseInt(moment__WEBPACK_IMPORTED_MODULE_2___default()().format('e'), 10);
  let i = 0;
  let nextShow;
  const performerShows = Object.keys(schedule).filter(key => !schedule[key].closed);

  do {
    const date = moment__WEBPACK_IMPORTED_MODULE_2___default()().day(weekDay).format('ddd').toLowerCase();

    if (performerShows.indexOf(date) > -1) {
      nextShow = date;
    }

    weekDay += 1;
    i += 1;
  } while (i < 7 && !nextShow);

  if (nextShow) {
    return `${schedule[nextShow].start} ${moment__WEBPACK_IMPORTED_MODULE_2___default()().day(weekDay - 1).format('DD/MM/YYYY')}`;
  }

  return '';
}
function getSearchData(pagination, filters, sorter, state) {
  let {
    sort,
    sortBy,
    filter
  } = state;
  const {
    limit
  } = state;

  if (filters) {
    Object.keys(filters).forEach(key => {
      if (filters[key] && filters[key].length) {
        // eslint-disable-next-line prefer-destructuring
        filter[key] = filters[key][0];
      }

      if (!filters[key]) {
        filter[key] = '';
      }
    });
  } else {
    filter = {};
  }

  if (sorter) {
    if (sorter.order) {
      const {
        field,
        order
      } = sorter;
      sort = _services_api_request__WEBPACK_IMPORTED_MODULE_3__["SORT"][order];
      sortBy = field;
    } else {
      sortBy = 'createdAt';
      sort = 'desc';
    }
  }

  return _objectSpread(_objectSpread(_objectSpread({}, state), filter), {}, {
    sort,
    sortBy,
    offset: (pagination.current - 1) * limit
  });
}
function getBase64(originFileObj, status = 'uploading', file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    if (originFileObj) {
      reader.readAsDataURL(originFileObj);

      reader.onload = () => resolve(_objectSpread(_objectSpread({}, originFileObj), {}, {
        status,
        name: originFileObj.name,
        url: reader.result,
        originFileObj
      }));

      reader.onerror = error => reject(error);
    } else {
      resolve(file);
    }
  });
}
function convertConnectionData(data) {
  const arr = data.split('%/%');
  const serverData = arr[1] && JSON.parse(arr[1]);
  const clientData = arr[0] && JSON.parse(arr[0]);
  return {
    serverData,
    clientData
  };
}
function checkUserLogin(isLoggedIn, user) {
  if (!isLoggedIn) return false;
  if (!user && !user._id) return false;
  return true;
}
function getCurrentUser(user, performer) {
  if (user && user._id) return user;
  if (performer && performer._id) return performer;
  return null;
}
function isPhysicalProduct(item) {
  if (item && item.type === 'physical') return true;
  return false;
}
function chatBoxMessageClassName(req) {
  const {
    isMine,
    startsSequence,
    endsSequence,
    data: {
      type
    }
  } = req;
  return classnames__WEBPACK_IMPORTED_MODULE_4___default()('message', {
    mine: isMine && type !== 'tip'
  }, {
    tip: type === 'tip'
  }, {
    start: !!startsSequence
  }, {
    end: !!endsSequence
  });
}

function convertFeetToCm(feet, inch) {
  const [f] = feet.split('.');
  const [i] = inch.split('.');
  return (parseInt(f, 10) * 12 + parseInt(i, 10)) * 2.54;
}

function formatDataWeight(min = 99, max = 319) {
  let i = min;
  const result = [];

  do {
    result[i] = (i * 0.45).toFixed(2);
    i += 1;
  } while (i < max);

  return result.map((v, index) => ({
    label: `${index}  lbs (${v}kg)`,
    value: `${index} lbs`
  }));
}
function formatDataHeight(min = 4, max = 7) {
  const result = [];

  for (let feet = min; feet < max; feet += 1) {
    for (let inch = 0; inch <= 11; inch += 1) {
      const a = convertFeetToCm(feet.toFixed(1).toString(), inch.toFixed(1).toString());
      result.push(`${feet}'${inch}" (${a.toFixed(2)} cm)`);
    }
  }

  return result.map(f => ({
    label: `${f}`,
    value: `${f}`
  }));
}
function formatPrice(price, fractionDigits = 2) {
  if (price) {
    return price.toFixed(fractionDigits);
  }

  return '';
}

/***/ }),

/***/ "./src/redux/auth/actions.ts":
/*!***********************************!*\
  !*** ./src/redux/auth/actions.ts ***!
  \***********************************/
/*! exports provided: login, loginSuccess, loginFail, loginRequesting, performerlogin, performerloginSuccess, performerloginFail, resetLoginData, studioLogin, studioLoginSuccess, studioLoginFail, performerRegister, performerRegisterSuccess, performerRegisterFail, setPerformerRegisterSubmitting, userRegister, userRegisterSuccess, userRegisterFail, setUserRegisterSubmitting, updatePassword, updatePasswordSuccess, updatePasswordFail, setUpdatePasswordSubmitting, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFail", function() { return loginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequesting", function() { return loginRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerlogin", function() { return performerlogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerloginSuccess", function() { return performerloginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerloginFail", function() { return performerloginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLoginData", function() { return resetLoginData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioLogin", function() { return studioLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioLoginSuccess", function() { return studioLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioLoginFail", function() { return studioLoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerRegister", function() { return performerRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerRegisterSuccess", function() { return performerRegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerRegisterFail", function() { return performerRegisterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPerformerRegisterSubmitting", function() { return setPerformerRegisterSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRegister", function() { return userRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRegisterSuccess", function() { return userRegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRegisterFail", function() { return userRegisterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserRegisterSubmitting", function() { return setUserRegisterSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePassword", function() { return updatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePasswordSuccess", function() { return updatePasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePasswordFail", function() { return updatePasswordFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdatePasswordSubmitting", function() { return setUpdatePasswordSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  login,
  loginSuccess,
  loginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('login', 'LOGIN');
const loginRequesting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('LOGIN_REQUESTING');
const {
  performerlogin,
  performerloginSuccess,
  performerloginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('performerlogin', 'PERFORMER_LOGIN');
const resetLoginData = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('resetLoginData');
const {
  studioLogin,
  studioLoginSuccess,
  studioLoginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('studioLogin', 'STUDIO_LOGIN');
const {
  performerRegister,
  performerRegisterSuccess,
  performerRegisterFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('performerRegister', 'PERFORMER_REGISTER');
const setPerformerRegisterSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_PERFORMER_REGISTER_SUBMITTING');
const {
  userRegister,
  userRegisterSuccess,
  userRegisterFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('userRegister', 'USER_REGISTER');
const setUserRegisterSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_USER_REGISTER_SUBMITTING');
const {
  updatePassword,
  updatePasswordSuccess,
  updatePasswordFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updatePassword', 'UPDATE_PASSWORD');
const setUpdatePasswordSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_UPDATE_PASSWORD_SUBMITTING');
const logout = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('logout');

/***/ }),

/***/ "./src/redux/performer/actions.ts":
/*!****************************************!*\
  !*** ./src/redux/performer/actions.ts ***!
  \****************************************/
/*! exports provided: getPerformerCategories, getPerformerCategoriesSuccess, getPerformerCategoriesFail, searchPerformer, searchPerformerSuccess, searchPerformerFail, setPerformerSearching, updatePerformerProfile, updatePerformerProfileSuccess, updatePerformerProfileFail, setupdatingPerformerProfile, updatePaymentInfo, updateDirectDeposit, updatePaxum, updateBitpay, updateStreamingStatus, updateDefaultPrice, getPerformerDetails, getPerformerDetailsSuccess, getPerformerDetailsFail, setGettingPerformerDetails, setPerformerDetails, updatePerformerAsset, setFavoritePerformerDetails, getMyProducts, getMyProductsSuccess, getMyProductsFail, setGettingMyProducts, addMyProduct, removeMyProduct, getEarning, getEarningSuccess, getEarningFail, setGettingEarning, getPayoutRequest, getPayoutRequestSuccess, getPayoutRequestFail, setGettingPayoutRequest, removePayoutRequest, getMyVideos, getMyVideosSuccess, getMyVideosFail, setgettingMyVideos, addMyVideos, removeMyVideo, getMyPhotos, getMyPhotosSuccess, getMyPhotosFail, setgettingMyPhotos, addMyPhotos, removeMyPhoto, getMyGalleries, getMyGalleriesSuccess, getMyGalleriesFail, setgettingMyGalleries, addMyGalleries, removeMyGalleries, updateCurrentPerformer, updatePerformerFavourite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerCategories", function() { return getPerformerCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerCategoriesSuccess", function() { return getPerformerCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerCategoriesFail", function() { return getPerformerCategoriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPerformer", function() { return searchPerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPerformerSuccess", function() { return searchPerformerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPerformerFail", function() { return searchPerformerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPerformerSearching", function() { return setPerformerSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerProfile", function() { return updatePerformerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerProfileSuccess", function() { return updatePerformerProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerProfileFail", function() { return updatePerformerProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupdatingPerformerProfile", function() { return setupdatingPerformerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePaymentInfo", function() { return updatePaymentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDirectDeposit", function() { return updateDirectDeposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePaxum", function() { return updatePaxum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBitpay", function() { return updateBitpay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStreamingStatus", function() { return updateStreamingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDefaultPrice", function() { return updateDefaultPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerDetails", function() { return getPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerDetailsSuccess", function() { return getPerformerDetailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerDetailsFail", function() { return getPerformerDetailsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingPerformerDetails", function() { return setGettingPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPerformerDetails", function() { return setPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerAsset", function() { return updatePerformerAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFavoritePerformerDetails", function() { return setFavoritePerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyProducts", function() { return getMyProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyProductsSuccess", function() { return getMyProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyProductsFail", function() { return getMyProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingMyProducts", function() { return setGettingMyProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMyProduct", function() { return addMyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMyProduct", function() { return removeMyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarning", function() { return getEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarningSuccess", function() { return getEarningSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarningFail", function() { return getEarningFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingEarning", function() { return setGettingEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayoutRequest", function() { return getPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayoutRequestSuccess", function() { return getPayoutRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayoutRequestFail", function() { return getPayoutRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingPayoutRequest", function() { return setGettingPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePayoutRequest", function() { return removePayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyVideos", function() { return getMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyVideosSuccess", function() { return getMyVideosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyVideosFail", function() { return getMyVideosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setgettingMyVideos", function() { return setgettingMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMyVideos", function() { return addMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMyVideo", function() { return removeMyVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyPhotos", function() { return getMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyPhotosSuccess", function() { return getMyPhotosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyPhotosFail", function() { return getMyPhotosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setgettingMyPhotos", function() { return setgettingMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMyPhotos", function() { return addMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMyPhoto", function() { return removeMyPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyGalleries", function() { return getMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyGalleriesSuccess", function() { return getMyGalleriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyGalleriesFail", function() { return getMyGalleriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setgettingMyGalleries", function() { return setgettingMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMyGalleries", function() { return addMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMyGalleries", function() { return removeMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentPerformer", function() { return updateCurrentPerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerFavourite", function() { return updatePerformerFavourite; });
/* harmony import */ var src_lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/redux */ "./src/lib/redux.ts");

const {
  getPerformerCategories,
  getPerformerCategoriesSuccess,
  getPerformerCategoriesFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPerformerCategories', 'GET_PERFORMER_CATEGORIES');
const {
  searchPerformer,
  searchPerformerSuccess,
  searchPerformerFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('searchPerformer', 'SEARCH_PERFORMER');
const setPerformerSearching = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_PERFORMER_SEARCHING');
const {
  updatePerformerProfile,
  updatePerformerProfileSuccess,
  updatePerformerProfileFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updatePerformerProfile', 'UPDATE_PERFORMER_PROFILE');
const setupdatingPerformerProfile = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updatingPerformerProfile');
const updatePaymentInfo = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PAYMENT_INFO');
const updateDirectDeposit = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_DIRECT_DEPOSIT');
const updatePaxum = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PAXUM');
const updateBitpay = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_BITPAY');
const updateStreamingStatus = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STREAMING_STATUS');
const updateDefaultPrice = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_DEFAULT_PRICE');
const {
  getPerformerDetails,
  getPerformerDetailsSuccess,
  getPerformerDetailsFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPerformerDetails', 'GET_PERFORMER_DETAILS');
const setGettingPerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setGettingPerformerDetails');
const setPerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_PERFORMER_DETAILS');
const updatePerformerAsset = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PERFORMER_ASSET');
const setFavoritePerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_FAVORITE_PERFORMER_DETAILS');
const {
  getMyProducts,
  getMyProductsSuccess,
  getMyProductsFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMyProducts', 'GET_MY_PRODUCT');
const setGettingMyProducts = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setGettingMyProducts');
const addMyProduct = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addMyProduct');
const removeMyProduct = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeMyProduct');
const {
  getEarning,
  getEarningSuccess,
  getEarningFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getEarning', 'GET_EARNING');
const setGettingEarning = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_EARNIG');
const {
  getPayoutRequest,
  getPayoutRequestSuccess,
  getPayoutRequestFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPayoutRequest', 'GET_PAYOUT_REQUEST');
const setGettingPayoutRequest = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_PAYOUT_REQUEST');
const removePayoutRequest = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('REMOVE_PAYOUT_REQUEST');
const {
  getMyVideos,
  getMyVideosSuccess,
  getMyVideosFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMyVideos', 'GET_MY_VIDEO');
const setgettingMyVideos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setgettingMyVideos');
const addMyVideos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addMyVideos');
const removeMyVideo = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeMyVideo');
const {
  getMyPhotos,
  getMyPhotosSuccess,
  getMyPhotosFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMyPhotos', 'GET_MY_PHOTO');
const setgettingMyPhotos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setgettingMyPhotos');
const addMyPhotos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addMyPhotos');
const removeMyPhoto = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeMyPhoto');
const {
  getMyGalleries,
  getMyGalleriesSuccess,
  getMyGalleriesFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMyGalleries', 'GET_MY_GALLERIES');
const setgettingMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setgettingMyGalleries');
const addMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addMyGalleries');
const removeMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeMyGalleries');
const updateCurrentPerformer = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentPerformer');
const updatePerformerFavourite = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PERFORMER_FAVOURITE');

/***/ }),

/***/ "./src/redux/studio/actions.ts":
/*!*************************************!*\
  !*** ./src/redux/studio/actions.ts ***!
  \*************************************/
/*! exports provided: updateCurrentStudio, updateStudio, updateStudioSuccess, updateStudioFail, setUpdatingStudio, updateStudioPaymentInfo, updateStudioDirectDeposit, updateStudioPaxum, updateStudioBitpay, getStudioEarning, getStudioEarningSuccess, getStudioEarningFail, setGettingStudioEarning, getStudioPayoutRequest, getStudioPayoutRequestSuccess, getStudioPayoutRequestFail, setGettingStudioPayoutRequest, removeStudioPayoutRequest, getPerformerRequest, getPerformerRequestSuccess, getPerformerRequestFail, setGettingPerformerRequest, getMembers, getMembersSuccess, getMembersFail, getMembersSearching, updateMemberStatus, getMembersCommissions, getMembersCommissionsSuccess, getMembersCommissionsFail, getMembersCommissionsSearching, updateMemberCommision, getStudioStats, getStudioStatsSuccess, getStudioStatsFail, updateTotalPerformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentStudio", function() { return updateCurrentStudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudio", function() { return updateStudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioSuccess", function() { return updateStudioSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioFail", function() { return updateStudioFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdatingStudio", function() { return setUpdatingStudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioPaymentInfo", function() { return updateStudioPaymentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioDirectDeposit", function() { return updateStudioDirectDeposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioPaxum", function() { return updateStudioPaxum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioBitpay", function() { return updateStudioBitpay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioEarning", function() { return getStudioEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioEarningSuccess", function() { return getStudioEarningSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioEarningFail", function() { return getStudioEarningFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingStudioEarning", function() { return setGettingStudioEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioPayoutRequest", function() { return getStudioPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioPayoutRequestSuccess", function() { return getStudioPayoutRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioPayoutRequestFail", function() { return getStudioPayoutRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingStudioPayoutRequest", function() { return setGettingStudioPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStudioPayoutRequest", function() { return removeStudioPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerRequest", function() { return getPerformerRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerRequestSuccess", function() { return getPerformerRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerRequestFail", function() { return getPerformerRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingPerformerRequest", function() { return setGettingPerformerRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembers", function() { return getMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersSuccess", function() { return getMembersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersFail", function() { return getMembersFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersSearching", function() { return getMembersSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMemberStatus", function() { return updateMemberStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersCommissions", function() { return getMembersCommissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersCommissionsSuccess", function() { return getMembersCommissionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersCommissionsFail", function() { return getMembersCommissionsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersCommissionsSearching", function() { return getMembersCommissionsSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMemberCommision", function() { return updateMemberCommision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioStats", function() { return getStudioStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioStatsSuccess", function() { return getStudioStatsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioStatsFail", function() { return getStudioStatsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTotalPerformer", function() { return updateTotalPerformer; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateCurrentStudio = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentStudio');
const {
  updateStudio,
  updateStudioSuccess,
  updateStudioFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updateStudio', 'UPDATE_STUDIO');
const setUpdatingStudio = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updatingStudio');
const updateStudioPaymentInfo = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STUDIO_PAYMENT_INFO');
const updateStudioDirectDeposit = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STUDIO_DIRECT_DEPOSIT');
const updateStudioPaxum = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STUDIO_PAXUM');
const updateStudioBitpay = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STUDIO_BITPAY');
const {
  getStudioEarning,
  getStudioEarningSuccess,
  getStudioEarningFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getStudioEarning', 'GET_STUDIO_EARNING');
const setGettingStudioEarning = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_STUDIO_EARNIG');
const {
  getStudioPayoutRequest,
  getStudioPayoutRequestSuccess,
  getStudioPayoutRequestFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getStudioPayoutRequest', 'GET_STUDIO_PAYOUT_REQUEST');
const setGettingStudioPayoutRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_STUDIO_PAYOUT_REQUEST');
const removeStudioPayoutRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('REMOVE_STUDIO_PAYOUT_REQUEST');
const {
  getPerformerRequest,
  getPerformerRequestSuccess,
  getPerformerRequestFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPerformerRequest', 'GET_PERFORMER_REQUEST');
const setGettingPerformerRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_PERFORMER_REQUEST');
const {
  getMembers,
  getMembersSuccess,
  getMembersFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMembers', 'GET_MEMBERS');
const getMembersSearching = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_MEMBER_SEACHING');
const updateMemberStatus = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_MEMBER_STATUS');
const {
  getMembersCommissions,
  getMembersCommissionsSuccess,
  getMembersCommissionsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMembersCommissions', 'GET_MEMBERS_COMMSSIONS');
const getMembersCommissionsSearching = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_MEMBER_COMMSSIO_SEACHING');
const updateMemberCommision = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_MEMBER_COMMISSION');
const {
  getStudioStats,
  getStudioStatsSuccess,
  getStudioStatsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getStudioStats', 'GET_STUDIO_STATS');
const updateTotalPerformer = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_TOTAL_PERFORMER');

/***/ }),

/***/ "./src/redux/user/actions.ts":
/*!***********************************!*\
  !*** ./src/redux/user/actions.ts ***!
  \***********************************/
/*! exports provided: updateCurrentUser, updateCurrentUserAvatar, updateCurrentUserBalance, updateUser, updateUserSuccess, updateUserFail, setUpdating, setReducer, buyTokenSuccess, getFavoritePerformers, getFavoritePerformersSuccess, getFavoritePerformersFailed, gettingFavoritePerformers, removeFavorite, getPaymentTokenHistroy, getPaymentTokenHistroySuccess, getPaymentTokenHistroyFail, gettigPaymentTokenHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUser", function() { return updateCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUserAvatar", function() { return updateCurrentUserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUserBalance", function() { return updateCurrentUserBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserSuccess", function() { return updateUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserFail", function() { return updateUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdating", function() { return setUpdating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReducer", function() { return setReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buyTokenSuccess", function() { return buyTokenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritePerformers", function() { return getFavoritePerformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritePerformersSuccess", function() { return getFavoritePerformersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritePerformersFailed", function() { return getFavoritePerformersFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingFavoritePerformers", function() { return gettingFavoritePerformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFavorite", function() { return removeFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentTokenHistroy", function() { return getPaymentTokenHistroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentTokenHistroySuccess", function() { return getPaymentTokenHistroySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentTokenHistroyFail", function() { return getPaymentTokenHistroyFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettigPaymentTokenHistory", function() { return gettigPaymentTokenHistory; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateCurrentUser = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentUser');
const updateCurrentUserAvatar = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentUserAvatar');
const updateCurrentUserBalance = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentUserBalance');
const {
  updateUser,
  updateUserSuccess,
  updateUserFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updateUser', 'UPDATE_USER');
const setUpdating = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updatingUser');
const setReducer = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setUserReducer');
const buyTokenSuccess = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('buyTokenSuccess');
const {
  getFavoritePerformers,
  getFavoritePerformersSuccess,
  getFavoritePerformersFailed
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getFavoritePerformers', 'GET_FAVOURITE');
const gettingFavoritePerformers = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GETTING_FAVORITE');
const removeFavorite = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('REMOVE_FAVORITE');
const {
  getPaymentTokenHistroy,
  getPaymentTokenHistroySuccess,
  getPaymentTokenHistroyFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPaymentTokenHistroy', 'GET_PAYMET_TOKE_HISTORY');
const gettigPaymentTokenHistory = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GETTING_PAYMET_TOKE_HISTORY');

/***/ }),

/***/ "./src/services/api-request.ts":
/*!*************************************!*\
  !*** ./src/services/api-request.ts ***!
  \*************************************/
/*! exports provided: TOKEN, ROLE, PERFORMER_ROLE, USER_ROLE, STUDIO_ROLE, SORT, APIRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE", function() { return ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERFORMER_ROLE", function() { return PERFORMER_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROLE", function() { return USER_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDIO_ROLE", function() { return STUDIO_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT", function() { return SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIRequest", function() { return APIRequest; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const TOKEN = 'token';
const ROLE = 'role';
const PERFORMER_ROLE = 'performer';
const USER_ROLE = 'user';
const STUDIO_ROLE = 'studio';
const SORT = {
  descend: 'desc',
  ascend: 'asc'
};
class APIRequest {
  setAuthHeaderToken(token) {
    APIRequest.token = token;
  }
  /**
   * Parses the JSON returned by a network request
   *
   * @param  {object} response A response from a network request
   *
   * @return {object}          The parsed JSON from the request
   */


  parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }

    return response.json();
  }
  /**
   * Checks if a network request came back fine, and throws an error if not
   *
   * @param  {object} response   A response from a network request
   *
   * @return {object|undefined} Returns either the response, or throws an error
   */


  async checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    if (response.status === 403) {
      if (false) {}
    } // const error = new Error(response.statusText) as any;
    // error.response = response;
    // throw error;


    throw response.clone().json();
  }

  request(url, method, body, headers) {
    const verb = (method || 'get').toUpperCase();

    const updatedHeader = _objectSpread({
      'Content-Type': 'application/json',
      // TODO - check me
      Authorization: APIRequest.token || (false ? undefined : '')
    }, headers || {});

    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__["isUrl"])(url) ? url : `${process.env.API_ENDPOINT || "https://api.dtest.live"}${url}`, {
      method: verb,
      headers: updatedHeader,
      body: body ? JSON.stringify(body) : null
    }).then(this.checkStatus).then(this.parseJSON);
  }

  buildUrl(baseUrl, params) {
    if (!params) {
      return baseUrl;
    }

    const queryString = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
    return `${baseUrl}?${queryString}`;
  }

  get(url, headers) {
    return this.request(url, 'get', null, headers);
  }

  post(url, data, headers) {
    return this.request(url, 'post', data, headers);
  }

  put(url, data, headers) {
    return this.request(url, 'put', data, headers);
  }

  del(url, data, headers) {
    return this.request(url, 'delete', data, headers);
  }

  upload(url, files, options = {
    onProgress() {},

    method: 'POST'
  }) {
    const uploadUrl = Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__["isUrl"])(url) ? url : `${"https://api.dtest.live"}${url}`;
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData();
      files.forEach(f => formData.append(f.fieldname, f.file, f.file.name));
      options.customData && Object.keys(options.customData).forEach(fieldname => typeof options.customData[fieldname] !== 'undefined' && formData.append(fieldname, options.customData[fieldname]));
      req.responseType = 'json';
      req.open(options.method || 'POST', uploadUrl);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  register(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.documentVerification) {
        const documentVerificationFile = data.documentVerification.file.originFileObj;
        formData.append('documentVerification', documentVerificationFile, documentVerificationFile.name);
      }

      if (data.idVerification) {
        const idVerificationDile = data.idVerification.file.originFileObj;
        formData.append('idVerification', idVerificationDile, idVerificationDile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['documentVerification', 'idVerification'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__["isUrl"])(url) ? url : `${"https://api.dtest.live"}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

}

_defineProperty(APIRequest, "token", '');

/***/ }),

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService, authService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return authService; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class AuthService extends _api_request__WEBPACK_IMPORTED_MODULE_1__["APIRequest"] {
  login(data) {
    return this.post('/auth/users/login', data);
  }

  setAuthHeader(token, role) {
    // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"], token, {
      expires: 365
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__["ROLE"], role, {
      expires: 365
    });
    this.setAuthHeaderToken(token);
  }

  performerLogin(data) {
    return this.post('/auth/performers/login', data);
  }

  studioLogin(data) {
    return this.post('/auth/studio/login', data);
  }

  setToken(token) {
    // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"], token, {
      expires: 365
    });
    this.setAuthHeaderToken(token);
  }

  getToken() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]);
    return token || null;
  }

  getRole() {
    const role = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_1__["ROLE"]);
    return role || null;
  }

  removeToken() {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]);
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(_api_request__WEBPACK_IMPORTED_MODULE_1__["ROLE"]);
  }

  removeRemember() {
     false && false;
  }

  updatePassword(body) {
    return this.put('/auth/users/me/password', body);
  }

  performersRegister(data) {
    return this.register('/auth/performers/register', data);
  }

  userRegister(data) {
    return this.post('/auth/users/register', data);
  }

  studioRegister(data) {
    return this.register('/auth/studio/register', data);
  }

  forgotPassword(email, type) {
    const data = {
      email,
      type
    };
    return this.post('/auth/users/forgot', data);
  }

  resendVerificationEmail(data) {
    return this.post('/verification/resend-verification-email', data);
  }

}
const authService = new AuthService();

/***/ }),

/***/ "./src/services/banner.service.ts":
/*!****************************************!*\
  !*** ./src/services/banner.service.ts ***!
  \****************************************/
/*! exports provided: BannerService, bannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerService", function() { return bannerService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class BannerService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/banners/search', query));
  }

}
const bannerService = new BannerService();

/***/ }),

/***/ "./src/services/earning.service.ts":
/*!*****************************************!*\
  !*** ./src/services/earning.service.ts ***!
  \*****************************************/
/*! exports provided: earningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "earningService", function() { return earningService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class EarningService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params, role = 'performer') {
    return this.get(this.buildUrl(`/earning/${role}/search`, params));
  }

  stats(params, role = 'performer') {
    return this.get(this.buildUrl(`/earning/${role}/stats`, params));
  }

}

const earningService = new EarningService();

/***/ }),

/***/ "./src/services/favourite.service.ts":
/*!*******************************************!*\
  !*** ./src/services/favourite.service.ts ***!
  \*******************************************/
/*! exports provided: favouriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favouriteService", function() { return favouriteService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class FavouriteService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  like(id) {
    return this.post(`/favourite/${id}/like`);
  }

  unlike(id) {
    return this.post(`/favourite/${id}/unlike`);
  }

  favorite(id, isFavorited) {
    return this.post(`/favourite/${id}/${isFavorited ? 'unlike' : 'like'}`);
  }

  search(query) {
    return this.get(this.buildUrl('/favourite', query));
  }

}

const favouriteService = new FavouriteService();

/***/ }),

/***/ "./src/services/gallery.service.ts":
/*!*****************************************!*\
  !*** ./src/services/gallery.service.ts ***!
  \*****************************************/
/*! exports provided: GalleryService, galleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galleryService", function() { return galleryService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class GalleryService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params, isPerformer = true) {
    return this.get(this.buildUrl(isPerformer ? '/performer/performer-assets/galleries/search' : '/user/performer-assets/galleries/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/galleries', params));
  }

  create(data) {
    return this.post('/performer/performer-assets/galleries', data);
  }

  update(id, data) {
    return this.put(`/performer/performer-assets/galleries/${id}`, data);
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/galleries/${id}/view`, headers);
  }

  publicdetails(id, headers) {
    return this.get(`/user/performer-assets/galleries/${id}/view`, headers);
  }

  remove(id) {
    return this.del(`/performer/performer-assets/galleries/${id}`);
  }

}
const galleryService = new GalleryService();

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: AuthService, authService, UserService, userService, PostService, postService, PerformerCategoriesService, performerCategories, PerformerService, GENNDER_PERFORMER, performerService, VideoService, videoService, ProductService, productService, SettingService, settingService, PhotoService, photoService, GalleryService, galleryService, favouriteService, TokenPackageService, tokenPackageService, TransactionService, transactionService, streamService, MessageService, messageService, PurchaseItemService, purchaseItemService, OrderService, orderService, earningService, payoutRequestService, RefundRequestService, refundRequestService, UtilsService, utilsService, StudioService, studioService, BannerService, bannerService, paymentInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["authService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["userService"]; });

/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.service */ "./src/services/post.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postService", function() { return _post_service__WEBPACK_IMPORTED_MODULE_2__["postService"]; });

/* harmony import */ var _perfomer_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfomer-categories.service */ "./src/services/perfomer-categories.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerformerCategoriesService", function() { return _perfomer_categories_service__WEBPACK_IMPORTED_MODULE_3__["PerformerCategoriesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "performerCategories", function() { return _perfomer_categories_service__WEBPACK_IMPORTED_MODULE_3__["performerCategories"]; });

/* harmony import */ var _perfomer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perfomer.service */ "./src/services/perfomer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerformerService", function() { return _perfomer_service__WEBPACK_IMPORTED_MODULE_4__["PerformerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GENNDER_PERFORMER", function() { return _perfomer_service__WEBPACK_IMPORTED_MODULE_4__["GENNDER_PERFORMER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "performerService", function() { return _perfomer_service__WEBPACK_IMPORTED_MODULE_4__["performerService"]; });

/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video.service */ "./src/services/video.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return _video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "videoService", function() { return _video_service__WEBPACK_IMPORTED_MODULE_5__["videoService"]; });

/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.service */ "./src/services/product.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_6__["productService"]; });

/* harmony import */ var _setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setting.service */ "./src/services/setting.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return _setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settingService", function() { return _setting_service__WEBPACK_IMPORTED_MODULE_7__["settingService"]; });

/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photo.service */ "./src/services/photo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return _photo_service__WEBPACK_IMPORTED_MODULE_8__["PhotoService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "photoService", function() { return _photo_service__WEBPACK_IMPORTED_MODULE_8__["photoService"]; });

/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery.service */ "./src/services/gallery.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return _gallery_service__WEBPACK_IMPORTED_MODULE_9__["GalleryService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "galleryService", function() { return _gallery_service__WEBPACK_IMPORTED_MODULE_9__["galleryService"]; });

/* harmony import */ var _favourite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./favourite.service */ "./src/services/favourite.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "favouriteService", function() { return _favourite_service__WEBPACK_IMPORTED_MODULE_10__["favouriteService"]; });

/* harmony import */ var _token_package_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./token-package.service */ "./src/services/token-package.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenPackageService", function() { return _token_package_service__WEBPACK_IMPORTED_MODULE_11__["TokenPackageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenPackageService", function() { return _token_package_service__WEBPACK_IMPORTED_MODULE_11__["tokenPackageService"]; });

/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transaction.service */ "./src/services/transaction.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return _transaction_service__WEBPACK_IMPORTED_MODULE_12__["TransactionService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transactionService", function() { return _transaction_service__WEBPACK_IMPORTED_MODULE_12__["transactionService"]; });

/* harmony import */ var _stream_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stream.service */ "./src/services/stream.service.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "streamService", function() { return _stream_service__WEBPACK_IMPORTED_MODULE_13__["streamService"]; });

/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./message.service */ "./src/services/message.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return _message_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "messageService", function() { return _message_service__WEBPACK_IMPORTED_MODULE_14__["messageService"]; });

/* harmony import */ var _purchase_item_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./purchase-item.service */ "./src/services/purchase-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PurchaseItemService", function() { return _purchase_item_service__WEBPACK_IMPORTED_MODULE_15__["PurchaseItemService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purchaseItemService", function() { return _purchase_item_service__WEBPACK_IMPORTED_MODULE_15__["purchaseItemService"]; });

/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order.service */ "./src/services/order.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return _order_service__WEBPACK_IMPORTED_MODULE_16__["OrderService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderService", function() { return _order_service__WEBPACK_IMPORTED_MODULE_16__["orderService"]; });

/* harmony import */ var _earning_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./earning.service */ "./src/services/earning.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "earningService", function() { return _earning_service__WEBPACK_IMPORTED_MODULE_17__["earningService"]; });

/* harmony import */ var _payout_request__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payout-request */ "./src/services/payout-request.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "payoutRequestService", function() { return _payout_request__WEBPACK_IMPORTED_MODULE_18__["payoutRequestService"]; });

/* harmony import */ var _refund_request_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./refund-request.service */ "./src/services/refund-request.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefundRequestService", function() { return _refund_request_service__WEBPACK_IMPORTED_MODULE_19__["RefundRequestService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refundRequestService", function() { return _refund_request_service__WEBPACK_IMPORTED_MODULE_19__["refundRequestService"]; });

/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils.service */ "./src/services/utils.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_20__["UtilsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utilsService", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_20__["utilsService"]; });

/* harmony import */ var _studio_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./studio.service */ "./src/services/studio.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudioService", function() { return _studio_service__WEBPACK_IMPORTED_MODULE_21__["StudioService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studioService", function() { return _studio_service__WEBPACK_IMPORTED_MODULE_21__["studioService"]; });

/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./banner.service */ "./src/services/banner.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return _banner_service__WEBPACK_IMPORTED_MODULE_22__["BannerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bannerService", function() { return _banner_service__WEBPACK_IMPORTED_MODULE_22__["bannerService"]; });

/* harmony import */ var _payment_information_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./payment-information.service */ "./src/services/payment-information.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paymentInformationService", function() { return _payment_information_service__WEBPACK_IMPORTED_MODULE_23__["paymentInformationService"]; });

/* empty/unused harmony star reexport */

























/***/ }),

/***/ "./src/services/message.service.ts":
/*!*****************************************!*\
  !*** ./src/services/message.service.ts ***!
  \*****************************************/
/*! exports provided: MessageService, messageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageService", function() { return messageService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class MessageService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  getConversations(query) {
    return this.get(this.buildUrl('/conversations', query));
  }

  searchConversations(query) {
    return this.get(this.buildUrl('/conversations/search', query));
  }

  createConversation(data) {
    return this.post('/conversations', data);
  }

  getConversationDetail(id) {
    return this.get(`/conversations/${id}`);
  }

  getConversationByStreamId(streamId) {
    return this.get(`/conversations/stream/${streamId}`);
  }

  getMessages(conversationId, query) {
    return this.get(this.buildUrl(`/messages/conversations/${conversationId}`, query));
  }

  getPublicMessages(conversationId, query) {
    return this.get(this.buildUrl(`/messages/conversations/public/${conversationId}`, query));
  }

  sendMessage(conversationId, data) {
    return this.post(`/messages/conversations/${conversationId}`, data);
  }

  sendStreamMessage(conversationId, data) {
    return this.post(`/messages/stream/conversations/${conversationId}`, data);
  }

  sendPublicStreamMessage(conversationId, data) {
    return this.post(`/messages/stream/public/conversations/${conversationId}`, data);
  }

  findPublicConversationPerformer(performerId) {
    return this.get(`/conversations/stream/public/${performerId}`);
  }

  countTotalNotRead() {
    return this.get('/messages/counting-not-read-messages');
  }

  readAllInConversation(conversationId, recipientId) {
    return this.post('/messages/read-all', {
      conversationId,
      recipientId
    });
  }

  getMessageUploadUrl() {
    return `${"https://api.dtest.live"}/messages/private/file`;
  }

  deleteMessage(id) {
    return this.del(`/messages/${id}`);
  }

  deleteAllMessageInConversation(conversationId) {
    return this.del(`/messages/${conversationId}/remove-all-message`);
  }

}
const messageService = new MessageService();

/***/ }),

/***/ "./src/services/order.service.ts":
/*!***************************************!*\
  !*** ./src/services/order.service.ts ***!
  \***************************************/
/*! exports provided: OrderService, orderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderService", function() { return orderService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
// import { IGalleryCreate } from 'src/interfaces';

class OrderService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(payload) {
    return this.get(this.buildUrl('/orders/search', payload));
  }

  details(id) {
    return this.get(`/orders/details/${id}`);
  }

  update(id, data) {
    return this.put(`/orders/${id}/update`, data);
  }

  userSearch(query) {
    return this.get(this.buildUrl('/orders/user/search', query));
  }

  userFindDetails(id) {
    return this.get(`/orders/user/details/${id}`);
  }

}
const orderService = new OrderService();

/***/ }),

/***/ "./src/services/payment-information.service.ts":
/*!*****************************************************!*\
  !*** ./src/services/payment-information.service.ts ***!
  \*****************************************************/
/*! exports provided: paymentInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentInformationService", function() { return paymentInformationService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class PaymentInformationService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  create(data) {
    return this.post('/payment-information', data);
  }

  findOne(data) {
    return this.get(this.buildUrl('/payment-information', data));
  }

}

const paymentInformationService = new PaymentInformationService();

/***/ }),

/***/ "./src/services/payout-request.ts":
/*!****************************************!*\
  !*** ./src/services/payout-request.ts ***!
  \****************************************/
/*! exports provided: payoutRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payoutRequestService", function() { return payoutRequestService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class PayoutRequestService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  calculate(params, role) {
    return this.get(this.buildUrl(`/earning/${role || 'performer'}/payout`, params));
  }

  search(query) {
    return this.get(this.buildUrl('/payout-requests/performer/search', query));
  }

  studioSearch(query) {
    return this.get(this.buildUrl('/payout-requests/studio/search', query));
  }

  create(body, role = 'performer') {
    return this.post(`/payout-requests/${role}`, body);
  }

  update(id, body, role = 'performer') {
    return this.put(`/payout-requests/${role}/${id}`, body);
  }

  detail(id, headers, role = 'performer') {
    return this.get(`/payout-requests/${role}/${id}/view`, headers);
  }

}

const payoutRequestService = new PayoutRequestService();

/***/ }),

/***/ "./src/services/perfomer-categories.service.ts":
/*!*****************************************************!*\
  !*** ./src/services/perfomer-categories.service.ts ***!
  \*****************************************************/
/*! exports provided: PerformerCategoriesService, performerCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformerCategoriesService", function() { return PerformerCategoriesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerCategories", function() { return performerCategories; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class PerformerCategoriesService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  getList(query) {
    return this.get(this.buildUrl('/performer-categories', query));
  }

  details(id) {
    return this.get(`/performer-categories/${id}/view`);
  }

}
const performerCategories = new PerformerCategoriesService();

/***/ }),

/***/ "./src/services/perfomer.service.ts":
/*!******************************************!*\
  !*** ./src/services/perfomer.service.ts ***!
  \******************************************/
/*! exports provided: PerformerService, GENNDER_PERFORMER, performerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformerService", function() { return PerformerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENNDER_PERFORMER", function() { return GENNDER_PERFORMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerService", function() { return performerService; });
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");




class PerformerService extends _api_request__WEBPACK_IMPORTED_MODULE_3__["APIRequest"] {
  me(headers) {
    return this.get('/performers/me', headers);
  }

  updateMe(payload) {
    return this.put('/performers', payload);
  }

  search(query) {
    return this.get(this.buildUrl('/performers/search', query));
  }

  details(username, headers = {}) {
    return this.get(`/performers/${username}/view`, headers);
  }

  getAvatarUploadUrl() {
    return `${"https://api.dtest.live"}/performers/avatar/upload`;
  }

  getDocumentsUploadUrl() {
    return `${"https://api.dtest.live"}/performers/documents/upload`;
  }

  getReleaseFormUrl() {
    return `${"https://api.dtest.live"}/performers/release-form/upload`;
  }

  myProduct(query) {
    return this.get(this.buildUrl('/performer/performer-assets/products/search', query));
  }

  createProduct(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.image) {
        const image = data.image.file.originFileObj;
        formData.append('image', image, image.name);
      }

      if (data.digitalFile) {
        const digitalFile = data.digitalFile.file.originFileObj;
        formData.append('digitalFile', digitalFile, digitalFile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['image', 'digitalFile'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_0__["isUrl"])(url) ? url : `${"https://api.dtest.live"}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  updateProduct(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.image && data.image.file) {
        const image = data.image.file.originFileObj;
        formData.append('image', image, image.name);
      }

      if (data.digitalFile && data.digitalFile.file) {
        const digitalFile = data.digitalFile.file.originFileObj;
        formData.append('digitalFile', digitalFile, digitalFile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['image', 'digitalFile'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_0__["isUrl"])(url) ? url : `${"https://api.dtest.live"}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  removeProduct(id) {
    return this.del(`/performer/performer-assets/products/${id}`);
  }

  getCommission() {
    return this.get('/settings/performer/commission');
  }

  updatePaymentInfo(payload) {
    return this.post('/performers/bank-transfer/update', payload);
  }

  updateDirectDepost(payload) {
    return this.post('/performers/direct-deposit/update', payload);
  }

  updatePaxum(payload) {
    return this.post('/performers/paxum/update', payload);
  }

  updateBitpay(payload) {
    return this.post('/performers/bitpay/update', payload);
  }

  updateStreamingStatus(payload) {
    return this.post('/performers/streaming-status/update', payload);
  }

  geoBlock(payload) {
    return this.post('/performers/blocking/update', payload);
  }

  getBlockedList() {
    return this.get(this.buildUrl('/performers/blocking'));
  }

  increaseView(performerId) {
    return this.post(`/performers/${performerId}/inc-view`);
  }

  updateDefaultPrice(payload) {
    return this.post('/performers/default-price/update', payload);
  }

  updateBroadcastSetting(payload) {
    return this.post('/performers/broadcast-setting/update', payload);
  }

  suspendAccount(password) {
    return this.post('/performers/suspend-account', {
      password
    });
  }

  checkBlock(performerId) {
    return this.get(`/performers/${performerId}/check-blocking`);
  }

}
const GENNDER_PERFORMER = ['female', 'transgender', 'male'];
const performerService = new PerformerService();

/***/ }),

/***/ "./src/services/photo.service.ts":
/*!***************************************!*\
  !*** ./src/services/photo.service.ts ***!
  \***************************************/
/*! exports provided: PhotoService, photoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photoService", function() { return photoService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/api-request */ "./src/services/api-request.ts");





class PhotoService extends src_services_api_request__WEBPACK_IMPORTED_MODULE_3__["APIRequest"] {
  search(params) {
    return this.get(this.buildUrl('/performer/performer-assets/photos/search', params));
  }

  searchByGallery(galleryId, params, headers) {
    return this.get(this.buildUrl(`/user/performer-assets/photos/${galleryId}/search`, params), headers);
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/photos/${id}/view`, headers);
  }

  myPhotos(query) {
    return this.get(this.buildUrl('/performer/performer-assets/photos/search', query));
  }

  remove(id) {
    return this.del(`/performer/performer-assets/photos/${id}`);
  }

  create(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.photo) {
        const photo = data.photo.file.originFileObj;
        formData.append('photo', photo, photo.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(data, ['photo'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_1__["isUrl"])(url) ? url : `${"https://api.dtest.live"}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  update(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.photo && data.photo.file) {
        const photo = data.photo.file.originFileObj;
        formData.append('photo', photo, photo.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(data, ['photo'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_1__["isUrl"])(url) ? url : `${"https://api.dtest.live"}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  uploadImages(file, payload, onProgress) {
    return this.upload('/performer/performer-assets/photos/upload', [{
      fieldname: 'photo',
      file
    }], {
      onProgress,
      customData: payload
    });
  }

}
const photoService = new PhotoService();

/***/ }),

/***/ "./src/services/post.service.ts":
/*!**************************************!*\
  !*** ./src/services/post.service.ts ***!
  \**************************************/
/*! exports provided: PostService, postService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postService", function() { return postService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class PostService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/posts/search', query));
  }

  findById(id) {
    return this.get(`/posts/${id}`);
  }

}
const postService = new PostService();

/***/ }),

/***/ "./src/services/product.service.ts":
/*!*****************************************!*\
  !*** ./src/services/product.service.ts ***!
  \*****************************************/
/*! exports provided: ProductService, productService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productService", function() { return productService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class ProductService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  details(id, headers) {
    return this.get(`/performer/performer-assets/products/${id}/view`, headers);
  }

  search(params) {
    return this.get(this.buildUrl('/user/performer-assets/products/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/products', params));
  }

  getDownloadLink(id) {
    return this.get(`/user/performer-assets/products/${id}/download-link`);
  }

}
const productService = new ProductService();

/***/ }),

/***/ "./src/services/purchase-item.service.ts":
/*!***********************************************!*\
  !*** ./src/services/purchase-item.service.ts ***!
  \***********************************************/
/*! exports provided: PurchaseItemService, purchaseItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseItemService", function() { return PurchaseItemService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseItemService", function() { return purchaseItemService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class PurchaseItemService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/purchased-items/user/search', query));
  }

  purchaseItem(id, type, data) {
    return this.post(`/purchase-items/${type}/${id}`, data);
  }

  purchaseProduct(id) {
    return this.post(`/purchase-items/product/${id}`);
  }

  purchaseVideo(id) {
    return this.post(`/purchase-items/video/${id}`);
  }

}
const purchaseItemService = new PurchaseItemService();

/***/ }),

/***/ "./src/services/refund-request.service.ts":
/*!************************************************!*\
  !*** ./src/services/refund-request.service.ts ***!
  \************************************************/
/*! exports provided: RefundRequestService, refundRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundRequestService", function() { return RefundRequestService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refundRequestService", function() { return refundRequestService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class RefundRequestService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  create(data) {
    return this.post('/refund-requests', data);
  }

  search(params) {
    return this.get(this.buildUrl('/refund-requests/search', params));
  }

}
const refundRequestService = new RefundRequestService();

/***/ }),

/***/ "./src/services/setting.service.ts":
/*!*****************************************!*\
  !*** ./src/services/setting.service.ts ***!
  \*****************************************/
/*! exports provided: SettingService, settingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingService", function() { return settingService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class SettingService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  all(group = '') {
    return this.get(this.buildUrl('/settings/public', {
      group
    }));
  }

  getCountries() {
    return this.get('/countries/list');
  }

  getTimezones() {
    return this.get('/timezones/list');
  }

}
const settingService = new SettingService();

/***/ }),

/***/ "./src/services/stream.service.tsx":
/*!*****************************************!*\
  !*** ./src/services/stream.service.tsx ***!
  \*****************************************/
/*! exports provided: streamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "streamService", function() { return streamService; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");





class StreamService extends _api_request__WEBPACK_IMPORTED_MODULE_3__["APIRequest"] {
  getSessionId(id, type) {
    return this.get(`/streaming/session/${id}/${type}`);
  }

  goLive() {
    return this.post('/streaming/live');
  }

  joinPublicChat(performerId) {
    return this.post(`/streaming/join/${performerId}`);
  }

  requestPrivateChat(performerId) {
    return this.post(`/streaming/private-chat/${performerId}`);
  }

  acceptPrivateChat(id) {
    return this.get(`/streaming/private-chat/${id}`);
  }

  startGroupChat() {
    return this.post('/streaming/group-chat');
  }

  joinGroupChat(id) {
    return this.get(`/streaming/group-chat/${id}`);
  }

  generateOneTimeToken(data) {
    return this.post('/streaming/token', data);
  }

  async getPublishToken(options, expireDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'd').toDate().getTime()) {
    try {
      const {
        settings,
        streamId
      } = options;
      const {
        secureOption
      } = settings;

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'publish',
          expireDate
        });
        return resp.data.tokenId;
      }

      return null;
    } catch (err) {
      const error = await Promise.resolve(err);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_2__["getResponseError"])(error));
      return null;
    }
  }

  async getSubscriberToken(options, expireDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'd').toDate().getTime()) {
    try {
      const {
        settings,
        streamId
      } = options;
      const {
        secureOption
      } = settings;

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'play',
          expireDate
        });
        return resp.data.tokenId;
      }

      return null;
    } catch (err) {
      const error = await Promise.resolve(err);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_2__["getResponseError"])(error));
      return null;
    }
  }

  async getLiveStreamOrVodURL(options, expireDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'd').toDate().getTime(), _player = 'hls') {
    // http://[IP_Address]/<Application_Name>/streams/streamID.mp4?token=tokenId
    // http://[IP_Address]/<Application_Name>/streams/streamID.m3u8?token=tokenId
    // http://[IP_Address]/<Application_Name>/play.html?name=streamID&playOrder=hls&token=tokenId
    try {
      // const src = `https://${viewerURL}:5443/${appName}/streams/${streamId}.m3u8${oneTimeToken ? `?token=${oneTimeToken}` : ''}`;
      // eslint-disable-next-line no-shadow
      const {
        appName,
        settings,
        streamId
      } = options;
      const {
        secureOption,
        viewerURL
      } = settings;
      const extension = _player === 'hls' ? 'm3u8' : 'mp4';

      if (!viewerURL || !appName) {
        return '';
      }

      let oneTimeToken = '';

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'play',
          expireDate
        });
        oneTimeToken = resp.data.tokenId;
      }

      const {
        protocol
      } = window.location;
      return `${protocol}//${viewerURL}/${appName}/streams/${streamId}.${extension}${oneTimeToken ? `?token=${oneTimeToken}` : ''}`;
    } catch (err) {
      const error = await Promise.resolve(err);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_2__["getResponseError"])(error));
      return '';
    }
  }

}

const streamService = new StreamService();

/***/ }),

/***/ "./src/services/studio.service.ts":
/*!****************************************!*\
  !*** ./src/services/studio.service.ts ***!
  \****************************************/
/*! exports provided: StudioService, studioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudioService", function() { return StudioService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioService", function() { return studioService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class StudioService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  me(headers) {
    return this.get('/studio/me', headers);
  }

  update(payload) {
    return this.put('/studio/update', payload);
  }

  updatePaymentInfo(payload) {
    return this.post('/studio/bank-transfer/update', payload);
  }

  updateDirectDepost(payload) {
    return this.post('/studio/direct-deposit/update', payload);
  }

  updatePaxum(payload) {
    return this.post('/studio/paxum/update', payload);
  }

  updateBitpay(payload) {
    return this.post('/studio/bitpay/update', payload);
  }

  getCommission() {
    return this.get('/settings/studio/commission');
  }

  addModel(payload) {
    return this.post('/studio/members', payload);
  }

  getMembers(params) {
    return this.get(this.buildUrl('/studio/members', params));
  }

  getMemberCommissions(params) {
    return this.get(this.buildUrl('/studio/commission', params));
  }

  updateMemberCommission(id, commission) {
    return this.put(`/studio/commission/member/${id}`, {
      commission
    });
  }

  getPerformerRequest(params) {
    return this.get(this.buildUrl('/payout-requests/studio/performer-request', params));
  }

  updateStatusPerformerRequest(id, payload) {
    return this.put(`/payout-requests/studio/update/${id}`, _objectSpread({}, payload));
  }

  updateMemberStatus(id, status) {
    return this.post(`/studio/members/${id}/${status}`);
  }

  stats() {
    return this.get('/studio/stats');
  }

  getDocumentsUploadUrl() {
    return `${"https://api.dtest.live"}/studio/documents/upload`;
  }

}
const studioService = new StudioService();

/***/ }),

/***/ "./src/services/token-package.service.ts":
/*!***********************************************!*\
  !*** ./src/services/token-package.service.ts ***!
  \***********************************************/
/*! exports provided: TokenPackageService, tokenPackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenPackageService", function() { return TokenPackageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenPackageService", function() { return tokenPackageService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class TokenPackageService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params) {
    return this.get(this.buildUrl('/package/token/search', params));
  }

  buyTokens(id) {
    return this.post(`/payment/purchase-tokens/${id}`);
  }

}
const tokenPackageService = new TokenPackageService();

/***/ }),

/***/ "./src/services/transaction.service.ts":
/*!*********************************************!*\
  !*** ./src/services/transaction.service.ts ***!
  \*********************************************/
/*! exports provided: TransactionService, transactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionService", function() { return transactionService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class TransactionService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params) {
    return this.get(this.buildUrl('/transactions/user/search', params));
  }

  sendTipToken(performerId, token, conversationId) {
    return this.post(`/member/send-tip-token/${performerId}`, {
      token,
      conversationId
    });
  }

  sendPaidToken(conversationId) {
    return this.post(`/member/send-pay-token/${conversationId}`);
  }

}
const transactionService = new TransactionService();

/***/ }),

/***/ "./src/services/user.service.ts":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService, userService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return userService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class UserService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  me(headers) {
    return this.get('/users/me', headers);
  }

  updateMe(payload) {
    return this.put('/users', payload);
  }

  getAvatarUploadUrl(userId) {
    if (userId) {
      return `${"https://api.dtest.live"}/users/${userId}/avatar/upload`;
    }

    return `${"https://api.dtest.live"}/users/avatar/upload`;
  }

  search(query) {
    return this.get(this.buildUrl('/users/search', query));
  }

  findById(id) {
    return this.get(`/users/view/${id}`);
  }

}
const userService = new UserService();

/***/ }),

/***/ "./src/services/utils.service.ts":
/*!***************************************!*\
  !*** ./src/services/utils.service.ts ***!
  \***************************************/
/*! exports provided: UtilsService, utilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utilsService", function() { return utilsService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class UtilsService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  countriesList() {
    return this.get('/countries/list');
  }

  languagesList() {
    return this.get('/languages/list');
  }

  phoneCodesList() {
    return this.get('/phone-codes/list');
  }

  statistics() {
    return this.get('/statistics/admin');
  }

}
const utilsService = new UtilsService();

/***/ }),

/***/ "./src/services/video.service.ts":
/*!***************************************!*\
  !*** ./src/services/video.service.ts ***!
  \***************************************/
/*! exports provided: VideoService, videoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoService", function() { return videoService; });
/* harmony import */ var src_services_api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/api-request */ "./src/services/api-request.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);





class VideoService extends src_services_api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params) {
    return this.get(this.buildUrl('/user/performer-assets/videos/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/videos', params));
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/videos/${id}/view`, headers);
  }

  myVideos(query) {
    return this.get(this.buildUrl('/performer/performer-assets/videos/search', query));
  }

  removeMyVideo(id) {
    return this.del(`/performer/performer-assets/videos/${id}`);
  }

  create(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.video) {
        const video = data.video.file.originFileObj;
        formData.append('video', video, video.name);
      }

      if (data.trailer) {
        const trailer = data.trailer.file.originFileObj;
        formData.append('trailer', trailer, trailer.name);
      }

      if (data.thumbnail) {
        const thumbnail = data.thumbnail.file.originFileObj;
        formData.append('thumbnail', thumbnail, thumbnail.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['video', 'thumbnail', 'trailer'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_2__["isUrl"])(url) ? url : `${"https://api.dtest.live"}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  update(url, data, options = {
    onProgress() {}

  }) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.video && data.video.file) {
        const video = data.video.file.originFileObj;
        formData.append('video', video, video.name);
      }

      if (data.trailer && data.trailer.file) {
        const trailer = data.trailer.file.originFileObj;
        formData.append('trailer', trailer, trailer.name);
      }

      if (data.thumbnail && data.thumbnail.file) {
        const thumbnail = data.thumbnail.file.originFileObj;
        formData.append('thumbnail', thumbnail, thumbnail.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['video', 'thumbnail', 'trailer'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_2__["isUrl"])(url) ? url : `${"https://api.dtest.live"}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  increaseView(id) {
    return this.post(`/user/performer-assets/videos/${id}/inc-view`);
  } // update(videoId, performerId, data) {
  //   return this.put(`/performer/performer-assets/videos/${videoId}`, {
  //     ...data,
  //     performerId
  //   });
  // }


  userFindVideoById(id, headers = {}) {
    return this.get(`/user/performer-assets/videos/${id}`, headers);
  }

}
const videoService = new VideoService();

/***/ }),

/***/ "./src/socket/Event.tsx":
/*!******************************!*\
  !*** ./src/socket/Event.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SocketContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocketContext */ "./src/socket/SocketContext.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/socket/utils.ts");




class Event extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      event,
      handler
    } = this.props;
    const socket = this.context;

    if (!socket) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["warning"])('Socket IO connection has not been established.');
      return;
    }

    socket.on(event, handler);
  }

  componentWillUnmount() {
    const {
      event
    } = this.props;
    const socket = this.context;

    if (!socket) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["warning"])('Socket IO connection has not been established.');
      return;
    }

    socket.off(event);
  }

  render() {
    return false;
  }

}

Event.contextType = _SocketContext__WEBPACK_IMPORTED_MODULE_1__["SocketContext"];
/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./src/socket/Socket.tsx":
/*!*******************************!*\
  !*** ./src/socket/Socket.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/socket/utils.ts");
/* harmony import */ var _SocketContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SocketContext */ "./src/socket/SocketContext.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Socket extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    this.connect();
  }

  componentDidUpdate(nextProps) {
    const {
      loggedIn
    } = this.props;

    if (nextProps.loggedIn !== loggedIn) {
      this.connect();
    }

    return true;
  }

  componentWillUnmount() {
    this.socket && this.socket.close();
  }

  connect() {
    const {
      loggedIn
    } = this.props;
    const token = loggedIn && _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["authService"].getToken();

    if (true) {
      return;
    }

    const {
      uri = "https://api.dtest.live"
    } = this.props;
    const options = {
      transports: ['websocket', 'polling', 'long-polling'],
      query: token ? `token=${token}` : ''
    };
    this.socket && this.socket.close();
    this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(uri, this.mergeOptions(options));
    this.socket.status = 'initialized';
    this.socket.on('connect', () => {
      this.socket.status = 'connected';
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["debug"])('connected');
    });
    this.socket.on('disconnect', () => {
      this.socket.status = 'disconnected';
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["debug"])('disconnect');
    });
    this.socket.on('error', err => {
      this.socket.status = 'failed';
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["warning"])('error', err);
    });
    this.socket.on('reconnect', data => {
      this.socket.status = 'connected';
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["debug"])('reconnect', data);
    });
    this.socket.on('reconnect_attempt', () => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["debug"])('reconnect_attempt');
    });
    this.socket.on('reconnecting', () => {
      this.socket.status = 'reconnecting';
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["debug"])('reconnecting');
    });
    this.socket.on('reconnect_failed', error => {
      this.socket.status = 'failed';
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["warning"])('reconnect_failed', error);
    });
  }

  mergeOptions(options = {}) {
    const defaultOptions = {
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1 * 1000,
      reconnectionDelayMax: 5 * 1000,
      autoConnect: true,
      transports: ['websocket', 'polling', 'long-polling'],
      rejectUnauthorized: true
    };
    return _objectSpread(_objectSpread({}, defaultOptions), options);
  }

  render() {
    const {
      children
    } = this.props;
    return __jsx(_SocketContext__WEBPACK_IMPORTED_MODULE_5__["SocketContext"].Provider, {
      value: this.socket
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children));
  }

}

const mapStates = state => ({
  loggedIn: state.auth.loggedIn
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStates)(Socket));

/***/ }),

/***/ "./src/socket/SocketContext.tsx":
/*!**************************************!*\
  !*** ./src/socket/SocketContext.tsx ***!
  \**************************************/
/*! exports provided: SocketContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketContext", function() { return SocketContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SocketContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext('socket');

/***/ }),

/***/ "./src/socket/index.ts":
/*!*****************************!*\
  !*** ./src/socket/index.ts ***!
  \*****************************/
/*! exports provided: Socket, Event, SocketContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Socket */ "./src/socket/Socket.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return _Socket__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event */ "./src/socket/Event.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _Event__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SocketContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocketContext */ "./src/socket/SocketContext.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketContext", function() { return _SocketContext__WEBPACK_IMPORTED_MODULE_2__["SocketContext"]; });





if (false) {}



/***/ }),

/***/ "./src/socket/utils.ts":
/*!*****************************!*\
  !*** ./src/socket/utils.ts ***!
  \*****************************/
/*! exports provided: warning, debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* eslint-disable prefer-spread */

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
const warning = (...args) => {
  // debug on development and staging.
  if (false) {}
  /* eslint-disable no-console */

  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error.apply(console, args);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(args.join(' '));
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

};
const debug = (...args) => {
  // debug on development and staging.
  if (false) {}
  /* eslint-disable no-console */

  if (typeof console !== 'undefined' && typeof console.debug === 'function') {
    console.debug.apply(console, args);
  }
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "path-to-regexp":
/*!*********************************!*\
  !*** external "path-to-regexp" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vYmFzZS9pY29ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Jhc2UvbG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0L2Jhbm5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGVyZm9ybWVyL3BlcmZvcm1lci1ncmlkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyL3BlcmZvcm1lci1maWx0ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9saWIvZGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2ludGVybmV0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvbGF5b3V0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvbWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3JlZHV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcnVsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYXV0aC9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9wZXJmb3JtZXIvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3R1ZGlvL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3VzZXIvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXBpLXJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYmFubmVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Vhcm5pbmcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZmF2b3VyaXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2dhbGxlcnkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvb3JkZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGF5bWVudC1pbmZvcm1hdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wYXlvdXQtcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGVyZm9tZXItY2F0ZWdvcmllcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wZXJmb21lci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9waG90by5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wb3N0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcHVyY2hhc2UtaXRlbS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZWZ1bmQtcmVxdWVzdC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0cmVhbS5zZXJ2aWNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3R1ZGlvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3Rva2VuLXBhY2thZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdHJhbnNhY3Rpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy92aWRlby5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvRXZlbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvU29ja2V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc29ja2V0L1NvY2tldENvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC91dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoLXRvLXJlZ2V4cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWFjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXNlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInZhbHVlIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsImluaXRRdWVyeVN0YXRlIiwib2Zmc2V0IiwibGltaXQiLCJnZW5kZXIiLCJjYXRlZ29yeSIsImNvdW50cnkiLCJzb3J0QnkiLCJzb3J0IiwiSG9tZXBhZ2UiLCJQdXJlQ29tcG9uZW50Iiwic2VhcmNoUGVyZm9ybWVyIiwiZGlzcGF0Y2hTZWFyY2hQZXJmb3JtZXIiLCJjb21wb25lbnREaWRNb3VudCIsInNvY2tldCIsImNvbnRleHQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGVzIiwibG9nZ2VkSW4iLCJxIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJvbkxpa2UiLCJwZXJmb3JtZXIiLCJ1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUiLCJkaXNwYXRjaFVwZGF0ZVBlcmZvcm1lckZhdm9yaXRlIiwiX2lkIiwiaXNGYXZvcml0ZSIsImZhdm91cml0ZVNlcnZpY2UiLCJmYXZvcml0ZSIsInJlc29sdmUiLCJnZXRSZXNwb25zZUVycm9yIiwic2V0RmlsdGVyIiwic2V0U3RhdGUiLCJjbGVhckZpbHRlciIsInJlbmRlciIsImNhdGVnb3JpZXMiLCJjb3VudHJpZXMiLCJ1aSIsInNpdGVOYW1lIiwiYmluZCIsImNvbnRleHRUeXBlIiwiU29ja2V0Q29udGV4dCIsIm1hcFN0YXRlVG9Qcm9wcyIsInBlcmZvcm1lcnMiLCJzZXR0aW5ncyIsIm1hcERpc3BhdGNoIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVDdXJyZW50UGVyZm9ybWVyIiwidXBkYXRlQ3VycmVudFN0dWRpbyIsImxvZ2luU3VjY2VzcyIsImNvbm5lY3QiLCJ3aXRoUm91dGVyIiwiRmFjZWJvb2tJY29uIiwic3R5bGUiLCJUd2l0dGVySWNvbiIsIkluc3RhZ3JhbUljb24iLCJHaWZ0SWNvbiIsIk1lc3NhZ2VJY29uIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsIkZhdm91cml0ZUljb24iLCJTZW5kTWVzc2FnZUljb24iLCJGdW5kc0ljb24iLCJQYXltZW50VG9rZW5zSGlzdG9yeUljb24iLCJUcmFuc2FjdGlvbkhpc3RvcnlJY29uIiwiUHVyY2hhc2VkSW1hZ2VJY29uIiwiUHVyY2hhc2VkVmlkZW9JY29uIiwiUHVyY2hhc2VkSXRlbUljb24iLCJNeVByb2R1Y3RJY29uIiwiVmlkZW9zSWNvbiIsIlBob3Rvc0ljb24iLCJGZW1hbGVTaWduSWNvbiIsIk1hbGVTaWduSWNvbiIsIlRyYW5zZ2VuZGVySWNvbiIsIlRva2Vuc0ljb24iLCJFYXJuaW5nSWNvbiIsIlBheW91dFJlcXVlc3RJY29uIiwiR3JvdXAiLCJMb2FkZXIiLCJzcGlubmluZyIsImZ1bGxTY3JlZW4iLCJjbGFzc05hbWVzIiwiaGlkZGVuIiwicmVuZGVyQmFubmVyIiwiYmFubmVyIiwic3R5bGVJbWFnZSIsInR5cGUiLCJwaG90byIsImNvbnRlbnRIVE1MIiwiX19odG1sIiwiQmFubmVyIiwiYmFubmVycyIsImNsYXNzbmFtZXMiLCJsZW5ndGgiLCJtYXAiLCJkZWZhdWx0UHJvcHMiLCJyZW5kZXJUaXRsZSIsIm1hcmdpblJpZ2h0IiwicmVuZGVyVGFncyIsInRhZ3MiLCJ0YWciLCJHcmlkQ2FyZCIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyQXZhdGFyVXJsIiwiaXNPbmxpbmUiLCJzdHJlYW1pbmdTdGF0dXMiLCJzdGF0dXNDbGFzc05hbWVzIiwic3RhdHVzIiwiZGVmYXVsdFBsYWNlaG9sZGVyQXZhdGFyVXJsIiwiaXNCbG9ja2VkIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJuYW1lIiwiYXZhdGFyIiwiam9pbiIsInN0YXRzIiwidmlld3MiLCJhYm91dE1lIiwiUGVyZm9ybWVyR3JpZCIsInNlYXJjaGluZyIsInRpdGxlIiwiaXNQYWdlIiwidG90YWwiLCJ0b3BCYW5uZXJzIiwicmlnaHRCYW5uZXJzIiwiYm90dG9tQmFubmVycyIsIlJvd0dyaWQiLCJkYXRhU291cmNlIiwicmVuZGVyR3JpZCIsInBhZGRpbmciLCJkYXRhQ2h1bmsiLCJjaHVuayIsImxhc3REYXRhQ2h1bmsiLCJzbGljZSIsInYiLCJnZW5lcmF0ZVV1aWQiLCJhY3Rpb25zIiwiTWF0aCIsInJvdW5kIiwiYmFubmVyU2VsZWN0ZXIiLCJsaXN0QmFubmVycyIsImZpbHRlckJhbm5lciIsImNyZWF0ZVNlbGVjdG9yIiwiZmlsdGVyIiwiYiIsInBvc2l0aW9uIiwibWFwU3RhdGVzIiwiUGVyZm9ybWVyRmlsdGVyIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJzZWxlY3RlZE1lbnVLZXlzIiwic2V0U2VsZWN0ZWRNZW51S2V5cyIsImxhc3RTZWxlY3RlZE1lbnVLZXkiLCJzZXRMYXN0U2VsZWN0ZWRNZW51S2V5Iiwib25PcGVuQ2hhbmdlIiwibWVudUtleXMiLCJmb250V2VpZ2h0IiwiYm9yZGVyUmlnaHQiLCJjIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJmb3JtYXQiLCJtb21lbnQiLCJjb252ZXJEdXJhdGlvbiIsImR1cmF0aW9uIiwidXRjIiwiYXNNaWxsaXNlY29uZHMiLCJwYXJzZUFnZSIsImdldEFnZSIsImQiLCJhZ2UiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJmb3JtYXREdXJhdGlvbiIsInMiLCJob3VycyIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJiZWZvcmVBdmF0YXJVcGxvYWQiLCJmaWxlIiwiZXh0Iiwic3BsaXQiLCJwb3AiLCJ0b0xvd2VyQ2FzZSIsImlzSW1hZ2VBY2NlcHQiLCJ0cmltIiwiaW5kZXhPZiIsImlzTHQyTSIsInNpemUiLCJJTlRFUk5FVF9DSEVDS19VUkwiLCJpc0hhc0ludGVybmV0Q29ubmVjdGlvbiIsImZldGNoIiwiaGVhZGVycyIsIlByYWdtYSIsIkV4cGlyZXMiLCJleGNlcHRpb24iLCJsb2ciLCJmb3JtSXRlbUxheW91dCIsImxhYmVsQ29sIiwieHMiLCJzcGFuIiwic20iLCJ3cmFwcGVyQ29sIiwidGFpbEZvcm1JdGVtTGF5b3V0IiwiZGVmYXVsdENvbG9yIiwicHJpbWFyeUNvbG9yIiwic3VjY2Vzc0NvbG9yIiwid2hpdGVDb2xvciIsInZhbGlkYXRlTWVzc2FnZXMiLCJyZXF1aXJlZCIsInR5cGVzIiwiZW1haWwiLCJudW1iZXIiLCJyYW5nZSIsImNyZWF0ZUFjdGlvbiIsImFjdGlvbiIsIlJlZHV4Q3JlYXRlQWN0aW9uIiwiaXMiLCJhVHlwZSIsInRvU3RyaW5nIiwiY3JlYXRlQXN5bmNBY3Rpb24iLCJjcmVhdGVBc3luY0FjdGlvbnMiLCJoYW5kbGVBY3Rpb25zIiwiaW5pdGlhbFN0YXRlIiwiaGFuZGxlUmVkdXhBY3Rpb25zIiwicmVkdWNlIiwicmVkdWNlciIsImFjdCIsImNyZWF0ZVJlZHVjZXJzIiwic3RhdGVDb250ZXh0IiwicmVkdWNlcnMiLCJwcmV2ZW50UmVzZXR0aW5nIiwiZmxhdHRlbiIsImlzQXJyYXkiLCJmb3JFYWNoIiwiQVBQX1NUQVRFX1JFU0VUIiwiY3JlYXRlU2FnYXMiLCJzYWdhcyIsInNhZ2EiLCJlZmZlY3QiLCJ0YWtlTGF0ZXN0Iiwid29ya2VyIiwiZGVsYXkiLCJjcmVhdGVTZWxlY3RvcnNBIiwic3RhdGVTZWxlY3RvciIsImlzRW1wdHkiLCJnZXRJbiIsImNyZWF0ZVNlbGVjdG9ycyIsInNlbGVjdG9ycyIsImNyZWF0ZUpTU2VsZWN0b3JzIiwidXNlcm5hbWVQYXR0ZXJuUnVsZSIsInBhdHRlcm4iLCJSZWdFeHAiLCJERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMIiwiREVGQVVMVF9QUklWQVRFX0lNQUdFX1VSTCIsIkRFRkFVTFRfR1JPVVBfSU1BR0VfVVJMIiwiREVGQVVMVF9PTkxJTkVfSU1BR0VfVVJMIiwiZ2V0UG9zdGVyIiwicG9zdGVyIiwiaXNVcmwiLCJtYXRjaCIsInIiLCJyYW5kb20iLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInVuaXRQcmljZXMiLCJ0ZXh0IiwiYXJyYXlUb1RyZWUiLCJhcnJheSIsImlkIiwicGFyZW50SWQiLCJjbG9uZURlZXAiLCJpbmRleCIsImhhc2hQYXJlbnQiLCJwYXRoTWF0Y2hSZWdleHAiLCJyZWdleHAiLCJleGVjIiwicXVlcnlBbmNlc3RvcnMiLCJjdXJyZW50IiwiaGFzaE1hcCIsIk1hcCIsImdldFBhdGgiLCJjdXJyZW50UGFyZW50SWQiLCJjb25zdHJhaW50cyIsInZhbHVlcyIsImlzTW9iaWxlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZ2V0VXJsUGFyYW1ldGVyIiwic1BhcmFtIiwic1BhZ2VVUkwiLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsInNVUkxWYXJpYWJsZXMiLCJzUGFyYW1ldGVyTmFtZSIsInVuZGVmaW5lZCIsIkRBWV9PRl9XRUVLIiwibW9uIiwidHVlIiwid2VkIiwidGh1IiwiZnJpIiwic2F0Iiwic3VuIiwiZ2V0RGVmYXVsdFNjaGVkdWxlIiwiZGVmYXVsdFZhbCIsInN0YXJ0IiwiZW5kIiwiY2xvc2VkIiwiZ2V0TmV4dFNob3ciLCJzY2hlZHVsZSIsIndlZWtEYXkiLCJuZXh0U2hvdyIsInBlcmZvcm1lclNob3dzIiwiZGF5IiwiZ2V0U2VhcmNoRGF0YSIsInBhZ2luYXRpb24iLCJmaWx0ZXJzIiwic29ydGVyIiwib3JkZXIiLCJTT1JUIiwiZ2V0QmFzZTY0Iiwib3JpZ2luRmlsZU9iaiIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwib25lcnJvciIsImNvbnZlcnRDb25uZWN0aW9uRGF0YSIsImFyciIsInNlcnZlckRhdGEiLCJwYXJzZSIsImNsaWVudERhdGEiLCJjaGVja1VzZXJMb2dpbiIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJpc1BoeXNpY2FsUHJvZHVjdCIsImNoYXRCb3hNZXNzYWdlQ2xhc3NOYW1lIiwicmVxIiwiaXNNaW5lIiwic3RhcnRzU2VxdWVuY2UiLCJlbmRzU2VxdWVuY2UiLCJtaW5lIiwidGlwIiwiY29udmVydEZlZXRUb0NtIiwiZmVldCIsImluY2giLCJmIiwiZm9ybWF0RGF0YVdlaWdodCIsIm1pbiIsIm1heCIsInRvRml4ZWQiLCJsYWJlbCIsImZvcm1hdERhdGFIZWlnaHQiLCJhIiwiZm9ybWF0UHJpY2UiLCJwcmljZSIsImZyYWN0aW9uRGlnaXRzIiwibG9naW4iLCJsb2dpbkZhaWwiLCJsb2dpblJlcXVlc3RpbmciLCJwZXJmb3JtZXJsb2dpbiIsInBlcmZvcm1lcmxvZ2luU3VjY2VzcyIsInBlcmZvcm1lcmxvZ2luRmFpbCIsInJlc2V0TG9naW5EYXRhIiwic3R1ZGlvTG9naW4iLCJzdHVkaW9Mb2dpblN1Y2Nlc3MiLCJzdHVkaW9Mb2dpbkZhaWwiLCJwZXJmb3JtZXJSZWdpc3RlciIsInBlcmZvcm1lclJlZ2lzdGVyU3VjY2VzcyIsInBlcmZvcm1lclJlZ2lzdGVyRmFpbCIsInNldFBlcmZvcm1lclJlZ2lzdGVyU3VibWl0dGluZyIsInVzZXJSZWdpc3RlciIsInVzZXJSZWdpc3RlclN1Y2Nlc3MiLCJ1c2VyUmVnaXN0ZXJGYWlsIiwic2V0VXNlclJlZ2lzdGVyU3VibWl0dGluZyIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGFzc3dvcmRTdWNjZXNzIiwidXBkYXRlUGFzc3dvcmRGYWlsIiwic2V0VXBkYXRlUGFzc3dvcmRTdWJtaXR0aW5nIiwibG9nb3V0IiwiZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllcyIsImdldFBlcmZvcm1lckNhdGVnb3JpZXNTdWNjZXNzIiwiZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllc0ZhaWwiLCJzZWFyY2hQZXJmb3JtZXJTdWNjZXNzIiwic2VhcmNoUGVyZm9ybWVyRmFpbCIsInNldFBlcmZvcm1lclNlYXJjaGluZyIsInVwZGF0ZVBlcmZvcm1lclByb2ZpbGUiLCJ1cGRhdGVQZXJmb3JtZXJQcm9maWxlU3VjY2VzcyIsInVwZGF0ZVBlcmZvcm1lclByb2ZpbGVGYWlsIiwic2V0dXBkYXRpbmdQZXJmb3JtZXJQcm9maWxlIiwidXBkYXRlUGF5bWVudEluZm8iLCJ1cGRhdGVEaXJlY3REZXBvc2l0IiwidXBkYXRlUGF4dW0iLCJ1cGRhdGVCaXRwYXkiLCJ1cGRhdGVTdHJlYW1pbmdTdGF0dXMiLCJ1cGRhdGVEZWZhdWx0UHJpY2UiLCJnZXRQZXJmb3JtZXJEZXRhaWxzIiwiZ2V0UGVyZm9ybWVyRGV0YWlsc1N1Y2Nlc3MiLCJnZXRQZXJmb3JtZXJEZXRhaWxzRmFpbCIsInNldEdldHRpbmdQZXJmb3JtZXJEZXRhaWxzIiwic2V0UGVyZm9ybWVyRGV0YWlscyIsInVwZGF0ZVBlcmZvcm1lckFzc2V0Iiwic2V0RmF2b3JpdGVQZXJmb3JtZXJEZXRhaWxzIiwiZ2V0TXlQcm9kdWN0cyIsImdldE15UHJvZHVjdHNTdWNjZXNzIiwiZ2V0TXlQcm9kdWN0c0ZhaWwiLCJzZXRHZXR0aW5nTXlQcm9kdWN0cyIsImFkZE15UHJvZHVjdCIsInJlbW92ZU15UHJvZHVjdCIsImdldEVhcm5pbmciLCJnZXRFYXJuaW5nU3VjY2VzcyIsImdldEVhcm5pbmdGYWlsIiwic2V0R2V0dGluZ0Vhcm5pbmciLCJnZXRQYXlvdXRSZXF1ZXN0IiwiZ2V0UGF5b3V0UmVxdWVzdFN1Y2Nlc3MiLCJnZXRQYXlvdXRSZXF1ZXN0RmFpbCIsInNldEdldHRpbmdQYXlvdXRSZXF1ZXN0IiwicmVtb3ZlUGF5b3V0UmVxdWVzdCIsImdldE15VmlkZW9zIiwiZ2V0TXlWaWRlb3NTdWNjZXNzIiwiZ2V0TXlWaWRlb3NGYWlsIiwic2V0Z2V0dGluZ015VmlkZW9zIiwiYWRkTXlWaWRlb3MiLCJyZW1vdmVNeVZpZGVvIiwiZ2V0TXlQaG90b3MiLCJnZXRNeVBob3Rvc1N1Y2Nlc3MiLCJnZXRNeVBob3Rvc0ZhaWwiLCJzZXRnZXR0aW5nTXlQaG90b3MiLCJhZGRNeVBob3RvcyIsInJlbW92ZU15UGhvdG8iLCJnZXRNeUdhbGxlcmllcyIsImdldE15R2FsbGVyaWVzU3VjY2VzcyIsImdldE15R2FsbGVyaWVzRmFpbCIsInNldGdldHRpbmdNeUdhbGxlcmllcyIsImFkZE15R2FsbGVyaWVzIiwicmVtb3ZlTXlHYWxsZXJpZXMiLCJ1cGRhdGVTdHVkaW8iLCJ1cGRhdGVTdHVkaW9TdWNjZXNzIiwidXBkYXRlU3R1ZGlvRmFpbCIsInNldFVwZGF0aW5nU3R1ZGlvIiwidXBkYXRlU3R1ZGlvUGF5bWVudEluZm8iLCJ1cGRhdGVTdHVkaW9EaXJlY3REZXBvc2l0IiwidXBkYXRlU3R1ZGlvUGF4dW0iLCJ1cGRhdGVTdHVkaW9CaXRwYXkiLCJnZXRTdHVkaW9FYXJuaW5nIiwiZ2V0U3R1ZGlvRWFybmluZ1N1Y2Nlc3MiLCJnZXRTdHVkaW9FYXJuaW5nRmFpbCIsInNldEdldHRpbmdTdHVkaW9FYXJuaW5nIiwiZ2V0U3R1ZGlvUGF5b3V0UmVxdWVzdCIsImdldFN0dWRpb1BheW91dFJlcXVlc3RTdWNjZXNzIiwiZ2V0U3R1ZGlvUGF5b3V0UmVxdWVzdEZhaWwiLCJzZXRHZXR0aW5nU3R1ZGlvUGF5b3V0UmVxdWVzdCIsInJlbW92ZVN0dWRpb1BheW91dFJlcXVlc3QiLCJnZXRQZXJmb3JtZXJSZXF1ZXN0IiwiZ2V0UGVyZm9ybWVyUmVxdWVzdFN1Y2Nlc3MiLCJnZXRQZXJmb3JtZXJSZXF1ZXN0RmFpbCIsInNldEdldHRpbmdQZXJmb3JtZXJSZXF1ZXN0IiwiZ2V0TWVtYmVycyIsImdldE1lbWJlcnNTdWNjZXNzIiwiZ2V0TWVtYmVyc0ZhaWwiLCJnZXRNZW1iZXJzU2VhcmNoaW5nIiwidXBkYXRlTWVtYmVyU3RhdHVzIiwiZ2V0TWVtYmVyc0NvbW1pc3Npb25zIiwiZ2V0TWVtYmVyc0NvbW1pc3Npb25zU3VjY2VzcyIsImdldE1lbWJlcnNDb21taXNzaW9uc0ZhaWwiLCJnZXRNZW1iZXJzQ29tbWlzc2lvbnNTZWFyY2hpbmciLCJ1cGRhdGVNZW1iZXJDb21taXNpb24iLCJnZXRTdHVkaW9TdGF0cyIsImdldFN0dWRpb1N0YXRzU3VjY2VzcyIsImdldFN0dWRpb1N0YXRzRmFpbCIsInVwZGF0ZVRvdGFsUGVyZm9ybWVyIiwidXBkYXRlQ3VycmVudFVzZXJBdmF0YXIiLCJ1cGRhdGVDdXJyZW50VXNlckJhbGFuY2UiLCJ1cGRhdGVVc2VyIiwidXBkYXRlVXNlclN1Y2Nlc3MiLCJ1cGRhdGVVc2VyRmFpbCIsInNldFVwZGF0aW5nIiwic2V0UmVkdWNlciIsImJ1eVRva2VuU3VjY2VzcyIsImdldEZhdm9yaXRlUGVyZm9ybWVycyIsImdldEZhdm9yaXRlUGVyZm9ybWVyc1N1Y2Nlc3MiLCJnZXRGYXZvcml0ZVBlcmZvcm1lcnNGYWlsZWQiLCJnZXR0aW5nRmF2b3JpdGVQZXJmb3JtZXJzIiwicmVtb3ZlRmF2b3JpdGUiLCJnZXRQYXltZW50VG9rZW5IaXN0cm95IiwiZ2V0UGF5bWVudFRva2VuSGlzdHJveVN1Y2Nlc3MiLCJnZXRQYXltZW50VG9rZW5IaXN0cm95RmFpbCIsImdldHRpZ1BheW1lbnRUb2tlbkhpc3RvcnkiLCJUT0tFTiIsIlJPTEUiLCJQRVJGT1JNRVJfUk9MRSIsIlVTRVJfUk9MRSIsIlNUVURJT19ST0xFIiwiZGVzY2VuZCIsImFzY2VuZCIsIkFQSVJlcXVlc3QiLCJzZXRBdXRoSGVhZGVyVG9rZW4iLCJ0b2tlbiIsInBhcnNlSlNPTiIsInJlc3BvbnNlIiwianNvbiIsImNoZWNrU3RhdHVzIiwiY2xvbmUiLCJyZXF1ZXN0IiwiYm9keSIsInZlcmIiLCJ1cGRhdGVkSGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImVudiIsIkFQSV9FTkRQT0lOVCIsInRoZW4iLCJidWlsZFVybCIsImJhc2VVcmwiLCJxdWVyeVN0cmluZyIsImsiLCJwb3N0IiwicHV0IiwiZGVsIiwidXBsb2FkIiwiZmlsZXMiLCJvblByb2dyZXNzIiwidXBsb2FkVXJsIiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRhZ2UiLCJsb2FkZWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmllbGRuYW1lIiwiY3VzdG9tRGF0YSIsInJlc3BvbnNlVHlwZSIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsInJlZ2lzdGVyIiwiZG9jdW1lbnRWZXJpZmljYXRpb24iLCJkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUiLCJpZFZlcmlmaWNhdGlvbiIsImlkVmVyaWZpY2F0aW9uRGlsZSIsIm9taXQiLCJBdXRoU2VydmljZSIsInNldEF1dGhIZWFkZXIiLCJyb2xlIiwiZXhwaXJlcyIsInBlcmZvcm1lckxvZ2luIiwic2V0VG9rZW4iLCJnZXRUb2tlbiIsImdldFJvbGUiLCJyZW1vdmVUb2tlbiIsInJlbW92ZSIsInJlbW92ZVJlbWVtYmVyIiwicGVyZm9ybWVyc1JlZ2lzdGVyIiwic3R1ZGlvUmVnaXN0ZXIiLCJmb3Jnb3RQYXNzd29yZCIsInJlc2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwiYXV0aFNlcnZpY2UiLCJCYW5uZXJTZXJ2aWNlIiwiYmFubmVyU2VydmljZSIsIkVhcm5pbmdTZXJ2aWNlIiwiZWFybmluZ1NlcnZpY2UiLCJGYXZvdXJpdGVTZXJ2aWNlIiwibGlrZSIsInVubGlrZSIsImlzRmF2b3JpdGVkIiwiR2FsbGVyeVNlcnZpY2UiLCJpc1BlcmZvcm1lciIsInB1cmNoYXNlZCIsImNyZWF0ZSIsInVwZGF0ZSIsImRldGFpbHMiLCJwdWJsaWNkZXRhaWxzIiwiZ2FsbGVyeVNlcnZpY2UiLCJNZXNzYWdlU2VydmljZSIsImdldENvbnZlcnNhdGlvbnMiLCJzZWFyY2hDb252ZXJzYXRpb25zIiwiY3JlYXRlQ29udmVyc2F0aW9uIiwiZ2V0Q29udmVyc2F0aW9uRGV0YWlsIiwiZ2V0Q29udmVyc2F0aW9uQnlTdHJlYW1JZCIsInN0cmVhbUlkIiwiZ2V0TWVzc2FnZXMiLCJjb252ZXJzYXRpb25JZCIsImdldFB1YmxpY01lc3NhZ2VzIiwic2VuZE1lc3NhZ2UiLCJzZW5kU3RyZWFtTWVzc2FnZSIsInNlbmRQdWJsaWNTdHJlYW1NZXNzYWdlIiwiZmluZFB1YmxpY0NvbnZlcnNhdGlvblBlcmZvcm1lciIsInBlcmZvcm1lcklkIiwiY291bnRUb3RhbE5vdFJlYWQiLCJyZWFkQWxsSW5Db252ZXJzYXRpb24iLCJyZWNpcGllbnRJZCIsImdldE1lc3NhZ2VVcGxvYWRVcmwiLCJkZWxldGVNZXNzYWdlIiwiZGVsZXRlQWxsTWVzc2FnZUluQ29udmVyc2F0aW9uIiwibWVzc2FnZVNlcnZpY2UiLCJPcmRlclNlcnZpY2UiLCJwYXlsb2FkIiwidXNlclNlYXJjaCIsInVzZXJGaW5kRGV0YWlscyIsIm9yZGVyU2VydmljZSIsIlBheW1lbnRJbmZvcm1hdGlvblNlcnZpY2UiLCJmaW5kT25lIiwicGF5bWVudEluZm9ybWF0aW9uU2VydmljZSIsIlBheW91dFJlcXVlc3RTZXJ2aWNlIiwiY2FsY3VsYXRlIiwic3R1ZGlvU2VhcmNoIiwiZGV0YWlsIiwicGF5b3V0UmVxdWVzdFNlcnZpY2UiLCJQZXJmb3JtZXJDYXRlZ29yaWVzU2VydmljZSIsImdldExpc3QiLCJwZXJmb3JtZXJDYXRlZ29yaWVzIiwiUGVyZm9ybWVyU2VydmljZSIsIm1lIiwidXBkYXRlTWUiLCJnZXRBdmF0YXJVcGxvYWRVcmwiLCJnZXREb2N1bWVudHNVcGxvYWRVcmwiLCJnZXRSZWxlYXNlRm9ybVVybCIsIm15UHJvZHVjdCIsImNyZWF0ZVByb2R1Y3QiLCJpbWFnZSIsImRpZ2l0YWxGaWxlIiwidXBkYXRlUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJnZXRDb21taXNzaW9uIiwidXBkYXRlRGlyZWN0RGVwb3N0IiwiZ2VvQmxvY2siLCJnZXRCbG9ja2VkTGlzdCIsImluY3JlYXNlVmlldyIsInVwZGF0ZUJyb2FkY2FzdFNldHRpbmciLCJzdXNwZW5kQWNjb3VudCIsInBhc3N3b3JkIiwiY2hlY2tCbG9jayIsIkdFTk5ERVJfUEVSRk9STUVSIiwicGVyZm9ybWVyU2VydmljZSIsIlBob3RvU2VydmljZSIsInNlYXJjaEJ5R2FsbGVyeSIsImdhbGxlcnlJZCIsIm15UGhvdG9zIiwidXBsb2FkSW1hZ2VzIiwicGhvdG9TZXJ2aWNlIiwiUG9zdFNlcnZpY2UiLCJmaW5kQnlJZCIsInBvc3RTZXJ2aWNlIiwiUHJvZHVjdFNlcnZpY2UiLCJnZXREb3dubG9hZExpbmsiLCJwcm9kdWN0U2VydmljZSIsIlB1cmNoYXNlSXRlbVNlcnZpY2UiLCJwdXJjaGFzZUl0ZW0iLCJwdXJjaGFzZVByb2R1Y3QiLCJwdXJjaGFzZVZpZGVvIiwicHVyY2hhc2VJdGVtU2VydmljZSIsIlJlZnVuZFJlcXVlc3RTZXJ2aWNlIiwicmVmdW5kUmVxdWVzdFNlcnZpY2UiLCJTZXR0aW5nU2VydmljZSIsImdyb3VwIiwiZ2V0Q291bnRyaWVzIiwiZ2V0VGltZXpvbmVzIiwic2V0dGluZ1NlcnZpY2UiLCJTdHJlYW1TZXJ2aWNlIiwiZ2V0U2Vzc2lvbklkIiwiZ29MaXZlIiwiam9pblB1YmxpY0NoYXQiLCJyZXF1ZXN0UHJpdmF0ZUNoYXQiLCJhY2NlcHRQcml2YXRlQ2hhdCIsInN0YXJ0R3JvdXBDaGF0Iiwiam9pbkdyb3VwQ2hhdCIsImdlbmVyYXRlT25lVGltZVRva2VuIiwiZ2V0UHVibGlzaFRva2VuIiwiZXhwaXJlRGF0ZSIsImFkZCIsInRvRGF0ZSIsImdldFRpbWUiLCJzZWN1cmVPcHRpb24iLCJyZXNwIiwidG9rZW5JZCIsImdldFN1YnNjcmliZXJUb2tlbiIsImdldExpdmVTdHJlYW1PclZvZFVSTCIsIl9wbGF5ZXIiLCJhcHBOYW1lIiwidmlld2VyVVJMIiwiZXh0ZW5zaW9uIiwib25lVGltZVRva2VuIiwic3RyZWFtU2VydmljZSIsIlN0dWRpb1NlcnZpY2UiLCJhZGRNb2RlbCIsImdldE1lbWJlckNvbW1pc3Npb25zIiwidXBkYXRlTWVtYmVyQ29tbWlzc2lvbiIsImNvbW1pc3Npb24iLCJ1cGRhdGVTdGF0dXNQZXJmb3JtZXJSZXF1ZXN0Iiwic3R1ZGlvU2VydmljZSIsIlRva2VuUGFja2FnZVNlcnZpY2UiLCJidXlUb2tlbnMiLCJ0b2tlblBhY2thZ2VTZXJ2aWNlIiwiVHJhbnNhY3Rpb25TZXJ2aWNlIiwic2VuZFRpcFRva2VuIiwic2VuZFBhaWRUb2tlbiIsInRyYW5zYWN0aW9uU2VydmljZSIsIlVzZXJTZXJ2aWNlIiwidXNlcklkIiwidXNlclNlcnZpY2UiLCJVdGlsc1NlcnZpY2UiLCJjb3VudHJpZXNMaXN0IiwibGFuZ3VhZ2VzTGlzdCIsInBob25lQ29kZXNMaXN0Iiwic3RhdGlzdGljcyIsInV0aWxzU2VydmljZSIsIlZpZGVvU2VydmljZSIsIm15VmlkZW9zIiwidmlkZW8iLCJ0cmFpbGVyIiwidGh1bWJuYWlsIiwidXNlckZpbmRWaWRlb0J5SWQiLCJ2aWRlb1NlcnZpY2UiLCJFdmVudCIsIndhcm5pbmciLCJTb2NrZXQiLCJuZXh0UHJvcHMiLCJjbG9zZSIsInVyaSIsIk5FWFRfUFVCTElDX1NPQ0tFVF9FTkRQT0lOVCIsInRyYW5zcG9ydHMiLCJTb2NrZXRJTyIsIm1lcmdlT3B0aW9ucyIsImRlYnVnIiwiZGVmYXVsdE9wdGlvbnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsImF1dG9Db25uZWN0IiwicmVqZWN0VW5hdXRob3JpemVkIiwib25seSIsImNyZWF0ZUNvbnRleHQiLCJhcHBseSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FB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LFdBQU8sQ0FBQzZLLEtBQVIsQ0FBYysxQixLQUFkLENBQW9CNWdDLE9BQXBCLEVBQTZCYyxJQUE3QjtBQUNEO0FBQ0Q7OztBQUNBLE1BQUk7QUFDRjtBQUNBO0FBQ0E7QUFFQSxVQUFNLElBQUkrL0IsS0FBSixDQUFVLy9CLElBQUksQ0FBQzJZLElBQUwsQ0FBVSxHQUFWLENBQVYsQ0FBTjtBQUNBO0FBQ0QsR0FQRCxDQU9FLE9BQU9uWixDQUFQLEVBQVUsQ0FBRTtBQUNkOztBQUNELENBbEJNO0FBb0JBLE1BQU0yL0IsS0FBSyxHQUFHLENBQUMsR0FBR24vQixJQUFKLEtBQWE7QUFDaEM7QUFDQSxhQUEyQyxFQUFPO0FBRWxEOztBQUNBLE1BQUksT0FBT2QsT0FBUCxLQUFtQixXQUFuQixJQUFrQyxPQUFPQSxPQUFPLENBQUNpZ0MsS0FBZixLQUF5QixVQUEvRCxFQUEyRTtBQUN6RWpnQyxXQUFPLENBQUNpZ0MsS0FBUixDQUFjVyxLQUFkLENBQW9CNWdDLE9BQXBCLEVBQTZCYyxJQUE3QjtBQUNEO0FBQ0YsQ0FSTSxDOzs7Ozs7Ozs7OztBQzNCUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIElQZXJmb3JtZXIsXG4gIElDb3VudHJpZXMsXG4gIElQZXJmb3JtZXJDYXRlZ29naWVzLFxuICBJUGVyZm9ybVNlYXJjaCxcbiAgSVVJQ29uZmlnXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCBQZXJmb3JtZXJHcmlkIGZyb20gJ0Bjb21wb25lbnRzL3BlcmZvcm1lci9wZXJmb3JtZXItZ3JpZCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgc2VhcmNoUGVyZm9ybWVyLFxuICB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUsXG4gIHVwZGF0ZUN1cnJlbnRQZXJmb3JtZXJcbn0gZnJvbSAnQHJlZHV4L3BlcmZvcm1lci9hY3Rpb25zJztcbmltcG9ydCB7IGxvZ2luU3VjY2VzcyB9IGZyb20gJ0ByZWR1eC9hdXRoL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXBkYXRlQ3VycmVudFVzZXIgfSBmcm9tICdAcmVkdXgvdXNlci9hY3Rpb25zJztcbmltcG9ydCB7IHVwZGF0ZUN1cnJlbnRTdHVkaW8gfSBmcm9tICdAcmVkdXgvc3R1ZGlvL2FjdGlvbnMnO1xuaW1wb3J0IFBlcmZvcm1lckZpbHRlciBmcm9tICdAY29tcG9uZW50cy91c2VyL3BlcmZvcm1lci1maWx0ZXInO1xuaW1wb3J0IHsgZmF2b3VyaXRlU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXRSZXNwb25zZUVycm9yIH0gZnJvbSAnc3JjL2xpYic7XG5pbXBvcnQgeyB3aXRoUm91dGVyLCBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJ3NyYy9zb2NrZXQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHJvdXRlcjogTmV4dFJvdXRlcjtcbiAgdWk6IElVSUNvbmZpZztcbiAgZGF0YTogSVBlcmZvcm1lcltdO1xuICBzZWFyY2hQZXJmb3JtZXI/OiBGdW5jdGlvbjtcbiAgdG90YWw/OiBudW1iZXI7XG4gIHN1Y2Nlc3M/OiBib29sZWFuO1xuICBlcnJvcj86IGFueTtcbiAgc2VhcmNoaW5nPzogYm9vbGVhbjtcbiAgbG9nZ2VkSW4/OiBib29sZWFuO1xuICBxdWVyeT86IHtcbiAgICBxOiBzdHJpbmc7XG4gIH07XG4gIGNhdGVnb3JpZXM/OiBJUGVyZm9ybWVyQ2F0ZWdvZ2llc1tdO1xuICBjb3VudHJpZXM/OiBJQ291bnRyaWVzW107XG4gIHVwZGF0ZVBlcmZvcm1lckZhdm91cml0ZTogRnVuY3Rpb247XG4gIHVwZGF0ZUN1cnJlbnRVc2VyOiBGdW5jdGlvbjtcbiAgdXBkYXRlQ3VycmVudFBlcmZvcm1lcjogRnVuY3Rpb247XG4gIHVwZGF0ZUN1cnJlbnRTdHVkaW86IEZ1bmN0aW9uO1xuICBsb2dpblN1Y2Nlc3M6IEZ1bmN0aW9uO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlcyB7XG4gIHF1ZXJ5OiBJUGVyZm9ybVNlYXJjaDtcbiAgc29ydD86IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgc29ydEJ5Pzogc3RyaW5nO1xuICB9O1xufVxuXG5jb25zdCBpbml0UXVlcnlTdGF0ZTogSVBlcmZvcm1TZWFyY2ggPSB7XG4gIG9mZnNldDogMCxcbiAgbGltaXQ6IDYwLFxuICBnZW5kZXI6ICcnLFxuICBjYXRlZ29yeTogJycsXG4gIGNvdW50cnk6ICcnLFxuICBzb3J0Qnk6ICcnLFxuICBzb3J0OiAnZGVzYydcbn07XG5cbmNsYXNzIEhvbWVwYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZXM+IHtcbiAgcHJpdmF0ZSBzb2NrZXQ7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcXVlcnk6IGluaXRRdWVyeVN0YXRlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgdGhpcy5zb2NrZXQgPSB0aGlzLmNvbnRleHQ7XG4gICAgdGhpcy5zb2NrZXQub24oJ21vZGVsVXBkYXRlU3RhdHVzJywgdGhpcy5zZWFyY2gpO1xuICAgIHRoaXMuc29ja2V0Lm9uKCdtb2RlbFVwZGF0ZVN0cmVhbWluZ1N0YXR1cycsIHRoaXMuc2VhcmNoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IElQcm9wcywgcHJldlN0YXRlczogSVN0YXRlcykge1xuICAgIGNvbnN0IHsgcm91dGVyLCBsb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChcbiAgICAgIHJvdXRlci5xdWVyeS5xICE9PSBwcmV2UHJvcHMucm91dGVyLnF1ZXJ5LnFcbiAgICAgIHx8IHF1ZXJ5ICE9PSBwcmV2U3RhdGVzLnF1ZXJ5XG4gICAgKSB7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgICBpZiAoIWxvZ2dlZEluICYmIGxvZ2dlZEluICE9PSBwcmV2UHJvcHMubG9nZ2VkSW4pIHtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zb2NrZXQgPSB0aGlzLmNvbnRleHQ7XG4gICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICB0aGlzLnNvY2tldC5vZmYoJ21vZGVsVXBkYXRlU3RhdHVzJyk7XG4gICAgICB0aGlzLnNvY2tldC5vZmYoJ21vZGVsVXBkYXRlU3RyZWFtaW5nU3RhdHVzJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25MaWtlKHBlcmZvcm1lcjogSVBlcmZvcm1lcikge1xuICAgIGNvbnN0IHtcbiAgICAgIHVwZGF0ZVBlcmZvcm1lckZhdm91cml0ZTogZGlzcGF0Y2hVcGRhdGVQZXJmb3JtZXJGYXZvcml0ZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgX2lkLCBpc0Zhdm9yaXRlIH0gPSBwZXJmb3JtZXI7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZhdm91cml0ZVNlcnZpY2UuZmF2b3JpdGUoX2lkLCBpc0Zhdm9yaXRlKTtcbiAgICAgIGRpc3BhdGNoVXBkYXRlUGVyZm9ybWVyRmF2b3JpdGUoX2lkKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgZSA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnJvcik7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZSkpO1xuICAgIH1cbiAgfVxuXG4gIHNldEZpbHRlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJvdXRlciwgc2VhcmNoUGVyZm9ybWVyOiBkaXNwYXRjaFNlYXJjaFBlcmZvcm1lciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGRpc3BhdGNoU2VhcmNoUGVyZm9ybWVyKHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgLi4ucm91dGVyLnF1ZXJ5XG4gICAgfSk7XG4gIH07XG5cbiAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeTogaW5pdFF1ZXJ5U3RhdGVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYXRlZ29yaWVzLCBjb3VudHJpZXMsIHVpXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPnt1aT8uc2l0ZU5hbWV9PC90aXRsZT5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2VcIj5cbiAgICAgICAgICA8UGVyZm9ybWVyRmlsdGVyICAgICAgICAgICAgLy8gaGVyZSBpcyBwYXJ0IG9mIGZpbHRlciB2aWV3LlxuICAgICAgICAgICAgY291bnRyaWVzPXtjb3VudHJpZXN9XG4gICAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAgICAgc2V0RmlsdGVyPXt0aGlzLnNldEZpbHRlci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgY2xlYXJGaWx0ZXI9e3RoaXMuY2xlYXJGaWx0ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHsuLi5xdWVyeX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQZXJmb3JtZXJHcmlkICAgICAgICAgICAgIC8vaGVyZSBpcyBwYXJ0IG9mIG1haW4gaG9tZSdzIGJvZHkgdmlld1xuICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICBvbkxpa2U9e3RoaXMub25MaWtlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICB0aXRsZT1cIkxpdmUgY2Ftc1wiXG4gICAgICAgICAgICBpc1BhZ2VcbiAgICAgICAgICAgIHNldEZpbHRlcj17dGhpcy5zZXRGaWx0ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHsuLi5xdWVyeX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuSG9tZXBhZ2UuY29udGV4dFR5cGUgPSBTb2NrZXRDb250ZXh0O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVpOiB7IC4uLnN0YXRlLnVpIH0sXG4gIC4uLnN0YXRlLnBlcmZvcm1lci5wZXJmb3JtZXJzLFxuICBjb3VudHJpZXM6IHN0YXRlLnNldHRpbmdzLmNvdW50cmllcyxcbiAgbG9nZ2VkSW46IHN0YXRlLmF1dGgubG9nZ2VkSW4sXG4gIGNhdGVnb3JpZXM6IHN0YXRlLnBlcmZvcm1lci5jYXRlZ29yaWVzLmRhdGFcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gIHNlYXJjaFBlcmZvcm1lcixcbiAgdXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlLFxuICB1cGRhdGVDdXJyZW50VXNlcixcbiAgdXBkYXRlQ3VycmVudFBlcmZvcm1lcixcbiAgdXBkYXRlQ3VycmVudFN0dWRpbyxcbiAgbG9naW5TdWNjZXNzXG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoKSh3aXRoUm91dGVyKEhvbWVwYWdlKSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbHQtdGV4dCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBJSWNvbnMge1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBjb2xvcj86IHN0cmluZztcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgY29uc3QgRmFjZWJvb2tJY29uID0gKHsgc3R5bGUgfTogSUljb25zKSA9PiAoXG4gIDxpbWcgc3JjPVwiL2ljb25zL2ZhY2Vib29rLnN2Z1wiIHN0eWxlPXtzdHlsZX0gLz5cbik7XG5cbmV4cG9ydCBjb25zdCBUd2l0dGVySWNvbiA9ICh7IHN0eWxlIH06IElJY29ucykgPT4gKFxuICA8aW1nIHNyYz1cIi9pY29ucy90d2l0dGVyLnN2Z1wiIHN0eWxlPXtzdHlsZX0gLz5cbik7XG5cbmV4cG9ydCBjb25zdCBJbnN0YWdyYW1JY29uID0gKHsgc3R5bGUgfTogSUljb25zKSA9PiAoXG4gIDxpbWcgc3JjPVwiL2ljb25zL2luc3RhZ3JhbS5zdmdcIiBzdHlsZT17c3R5bGV9IC8+XG4pO1xuXG5leHBvcnQgY29uc3QgR2lmdEljb24gPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYW50aWNvblwiPlxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMTdcIlxuICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgdmlld0JveD1cIjAgMCAxNyAxNlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE0LjYwMDEgNC44NDM3NUgxMi4yOTM4QzEyLjUwNjMgNC41MDkzOCAxMi42MzEzIDQuMTEyNSAxMi42MzEzIDMuNjg3NUMxMi42MzEzIDIuNDk4NDQgMTEuNjY0MiAxLjUzMTI1IDEwLjQ3NTEgMS41MzEyNUM5LjgyODIyIDEuNTMxMjUgOS4yNDU0MSAxLjgxODc1IDguODUwMSAyLjI3MTg3QzguNDU0NzkgMS44MTg3NSA3Ljg3MTk3IDEuNTMxMjUgNy4yMjUxIDEuNTMxMjVDNi4wMzYwNCAxLjUzMTI1IDUuMDY4ODUgMi40OTg0NCA1LjA2ODg1IDMuNjg3NUM1LjA2ODg1IDQuMTEyNSA1LjE5MjI5IDQuNTA5MzggNS40MDYzNSA0Ljg0Mzc1SDMuMTAwMUMyLjgyMzU0IDQuODQzNzUgMi42MDAxIDUuMDY3MTkgMi42MDAxIDUuMzQzNzVWOC40Njg3NUMyLjYwMDEgOC41Mzc1IDIuNjU2MzUgOC41OTM3NSAyLjcyNTEgOC41OTM3NUgzLjM1MDFWMTMuOTY4OEMzLjM1MDEgMTQuMjQ1MyAzLjU3MzU0IDE0LjQ2ODggMy44NTAxIDE0LjQ2ODhIMTMuODUwMUMxNC4xMjY3IDE0LjQ2ODggMTQuMzUwMSAxNC4yNDUzIDE0LjM1MDEgMTMuOTY4OFY4LjU5Mzc1SDE0Ljk3NTFDMTUuMDQzOCA4LjU5Mzc1IDE1LjEwMDEgOC41Mzc1IDE1LjEwMDEgOC40Njg3NVY1LjM0Mzc1QzE1LjEwMDEgNS4wNjcxOSAxNC44NzY3IDQuODQzNzUgMTQuNjAwMSA0Ljg0Mzc1Wk05LjM4MTM1IDMuNjg3NUM5LjM4MTM1IDMuMDg0MzggOS44NzE5NyAyLjU5Mzc1IDEwLjQ3NTEgMi41OTM3NUMxMS4wNzgyIDIuNTkzNzUgMTEuNTY4OCAzLjA4NDM4IDExLjU2ODggMy42ODc1QzExLjU2ODggNC4yOTA2MiAxMS4wNzgyIDQuNzgxMjUgMTAuNDc1MSA0Ljc4MTI1SDkuMzgxMzVWMy42ODc1Wk03LjIyNTEgMi41OTM3NUM3LjgyODIyIDIuNTkzNzUgOC4zMTg4NSAzLjA4NDM4IDguMzE4ODUgMy42ODc1VjQuNzgxMjVINy4yMjUxQzYuNjIxOTcgNC43ODEyNSA2LjEzMTM1IDQuMjkwNjIgNi4xMzEzNSAzLjY4NzVDNi4xMzEzNSAzLjA4NDM4IDYuNjIxOTcgMi41OTM3NSA3LjIyNTEgMi41OTM3NVpNMy42NjI2IDcuNTMxMjVWNS45MDYyNUg4LjMxODg1VjcuNTMxMjVIMy42NjI2Wk00LjQxMjYgOC41OTM3NUg4LjMxODg1VjEzLjQwNjJINC40MTI2VjguNTkzNzVaTTEzLjI4NzYgMTMuNDA2Mkg5LjM4MTM1VjguNTkzNzVIMTMuMjg3NlYxMy40MDYyWk0xNC4wMzc2IDcuNTMxMjVIOS4zODEzNVY1LjkwNjI1SDE0LjAzNzZWNy41MzEyNVpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VJY29uID0gKHsgd2lkdGgsIGhlaWdodCwgY29sb3IgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMjEuNzUgMy43NUgyLjI1QzEuODM1MTYgMy43NSAxLjUgNC4wODUxNiAxLjUgNC41VjE5LjVDMS41IDE5LjkxNDggMS44MzUxNiAyMC4yNSAyLjI1IDIwLjI1SDIxLjc1QzIyLjE2NDggMjAuMjUgMjIuNSAxOS45MTQ4IDIyLjUgMTkuNVY0LjVDMjIuNSA0LjA4NTE2IDIyLjE2NDggMy43NSAyMS43NSAzLjc1Wk0yMC44MTI1IDYuMzQ2ODdWMTguNTYyNUgzLjE4NzVWNi4zNDY4N0wyLjU0MDYzIDUuODQyOTdMMy40NjE3MiA0LjY1OTM4TDQuNDY0ODQgNS40Mzk4NEgxOS41Mzc1TDIwLjU0MDYgNC42NTkzOEwyMS40NjE3IDUuODQyOTdMMjAuODEyNSA2LjM0Njg3Wk0xOS41Mzc1IDUuNDM3NUwxMiAxMS4yOTY5TDQuNDYyNSA1LjQzNzVMMy40NTkzOCA0LjY1NzAzTDIuNTM4MjggNS44NDA2MkwzLjE4NTE2IDYuMzQ0NTNMMTEuMTkxNCAxMi41Njk1QzExLjQyMTcgMTIuNzQ4NCAxMS43MDQ5IDEyLjg0NTUgMTEuOTk2NSAxMi44NDU1QzEyLjI4ODEgMTIuODQ1NSAxMi41NzEzIDEyLjc0ODQgMTIuODAxNiAxMi41Njk1TDIwLjgxMjUgNi4zNDY4N0wyMS40NTk0IDUuODQyOTdMMjAuNTM4MyA0LjY1OTM4TDE5LjUzNzUgNS40Mzc1WlwiXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBGYXZvdXJpdGVJY29uID0gKHsgd2lkdGgsIGhlaWdodCwgY29sb3IgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMTQuMTg1NSA0LjQ1OTE2QzEzLjk4MzggMy45Nzc5MyAxMy42OTI5IDMuNTQxODUgMTMuMzI5MiAzLjE3NTMyQzEyLjk2NTMgMi44MDc2OSAxMi41MzYyIDIuNTE1NTUgMTIuMDY1MiAyLjMxNDc3QzExLjU3NjkgMi4xMDU3NSAxMS4wNTMxIDEuOTk4NzYgMTAuNTI0MyAyLjAwMDAxQzkuNzgyNDMgMi4wMDAwMSA5LjA1ODYyIDIuMjA5MzMgOC40Mjk2MSAyLjYwNDcyQzguMjc5MTMgMi42OTkzIDguMTM2MTggMi44MDMxOSA4LjAwMDc0IDIuOTE2MzhDNy44NjUzMSAyLjgwMzE5IDcuNzIyMzYgMi42OTkzIDcuNTcxODggMi42MDQ3MkM2Ljk0Mjg3IDIuMjA5MzMgNi4yMTkwNiAyLjAwMDAxIDUuNDc3MTkgMi4wMDAwMUM0Ljk0Mjk5IDIuMDAwMDEgNC40MjUzMyAyLjEwNTQ1IDMuOTM2MjcgMi4zMTQ3N0MzLjQ2Mzc3IDIuNTE2MzQgMy4wMzc5MSAyLjgwNjI5IDIuNjcyMjQgMy4xNzUzMkMyLjMwODA3IDMuNTQxNDMgMi4wMTcxNyAzLjk3NzYyIDEuODE2MDEgNC40NTkxNkMxLjYwNjg0IDQuOTU5OTggMS41IDUuNDkxODIgMS41IDYuMDM5MTZDMS41IDYuNTU1NDkgMS42MDIzMyA3LjA5MzUyIDEuODA1NDcgNy42NDA4NkMxLjk3NTUyIDguMDk4MjcgMi4yMTkzIDguNTcyNzMgMi41MzA3OSA5LjA1MTg1QzMuMDI0MzYgOS44MTAwNiAzLjcwMzAzIDEwLjYwMDggNC41NDU3MiAxMS40MDI1QzUuOTQyMTggMTIuNzMxMyA3LjMyNTA5IDEzLjY0OTIgNy4zODM3OCAxMy42ODY0TDcuNzQwNDEgMTMuOTIyMUM3Ljg5ODQyIDE0LjAyNiA4LjEwMTU3IDE0LjAyNiA4LjI1OTU3IDEzLjkyMjFMOC42MTYyMSAxMy42ODY0QzguNjc0OSAxMy42NDc2IDEwLjA1NjMgMTIuNzMxMyAxMS40NTQzIDExLjQwMjVDMTIuMjk3IDEwLjYwMDggMTIuOTc1NiA5LjgxMDA2IDEzLjQ2OTIgOS4wNTE4NUMxMy43ODA3IDguNTcyNzMgMTQuMDI2IDguMDk4MjcgMTQuMTk0NSA3LjY0MDg2QzE0LjM5NzcgNy4wOTM1MiAxNC41IDYuNTU1NDkgMTQuNSA2LjAzOTE2QzE0LjUwMTUgNS40OTE4MiAxNC4zOTQ2IDQuOTU5OTggMTQuMTg1NSA0LjQ1OTE2VjQuNDU5MTZaTTguMDAwNzQgMTIuNjk1NkM4LjAwMDc0IDEyLjY5NTYgMi42NDM2NSA5LjE1ODg0IDIuNjQzNjUgNi4wMzkxNkMyLjY0MzY1IDQuNDU5MTYgMy45MTIyIDMuMTc4NDIgNS40NzcxOSAzLjE3ODQyQzYuNTc3MiAzLjE3ODQyIDcuNTMxMjUgMy44MTEwNCA4LjAwMDc0IDQuNzM1MTZDOC40NzAyNCAzLjgxMTA0IDkuNDI0MjkgMy4xNzg0MiAxMC41MjQzIDMuMTc4NDJDMTIuMDg5MyAzLjE3ODQyIDEzLjM1NzggNC40NTkxNiAxMy4zNTc4IDYuMDM5MTZDMTMuMzU3OCA5LjE1ODg0IDguMDAwNzQgMTIuNjk1NiA4LjAwMDc0IDEyLjY5NTZaXCJcbiAgICAgIGZpbGw9e2NvbG9yfVxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFNlbmRNZXNzYWdlSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMjYuNzU1MiAxNC42MzY3TDMuNjQwMTggMy4wNDYwOEMzLjU0NjIzIDIuOTk5MSAzLjQzODQ2IDIuOTg4MDQgMy4zMzYyMiAzLjAxMjkxQzMuMTAxMzQgMy4wNzA5NSAyLjk1NDg4IDMuMzA4NjIgMy4wMTI5MSAzLjU0NjI5TDUuMzk0ODggMTMuMjc5N0M1LjQzMDggMTMuNDI2MiA1LjUzODU3IDEzLjU0NTEgNS42ODIyNiAxMy41OTJMOS43NjM2NSAxNC45OTMyTDUuNjg1MDIgMTYuMzk0M0M1LjU0MTMzIDE2LjQ0NDEgNS40MzM1NiAxNi41NjAyIDUuNDAwNCAxNi43MDY2TDMuMDEyOTEgMjYuNDUzOUMyLjk4ODA0IDI2LjU1NjIgMi45OTkxIDI2LjY2MzkgMy4wNDYwNyAyNi43NTUxQzMuMTUzODQgMjYuOTczNSAzLjQxOTEyIDI3LjA2MTkgMy42NDAxOCAyNi45NTQxTDI2Ljc1NTIgMTUuNDI5OEMyNi44NDA4IDE1LjM4ODQgMjYuOTA5OSAxNS4zMTY1IDI2Ljk1NDEgMTUuMjMzNkMyNy4wNjE5IDE1LjAxMjUgMjYuOTczNSAxNC43NDcyIDI2Ljc1NTIgMTQuNjM2N1pNNS43Mzc1MiAyMy42ODQ4TDcuMTI3NDYgMTguMDAyOEwxNS4yODQ3IDE1LjIwMzJDMTUuMzQ4MyAxNS4xODExIDE1LjQwMDggMTUuMTMxNCAxNS40MjI5IDE1LjA2NUMxNS40NjE2IDE0Ljk0OSAxNS40MDA4IDE0LjgyNDYgMTUuMjg0NyAxNC43ODMyTDcuMTI3NDYgMTEuOTg2NEw1Ljc0MzA1IDYuMzI2NDlMMjMuMDk2NiAxNS4wMjkxTDUuNzM3NTIgMjMuNjg0OFpcIlxuICAgICAgZmlsbD1cIiNGRjAwNjZcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEZ1bmRzSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgdmlld0JveD1cIjAgMCAyNSAyNFwiXG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTkuODUwMSAxMEM5LjU4NDg4IDEwIDkuMzMwNTMgMTAuMTA1NCA5LjE0Mjk5IDEwLjI5MjlDOC45NTU0NSAxMC40ODA0IDguODUwMSAxMC43MzQ4IDguODUwMSAxMVYxM0M4Ljg1MDEgMTMuMjY1MiA4Ljk1NTQ1IDEzLjUxOTYgOS4xNDI5OSAxMy43MDcxQzkuMzMwNTMgMTMuODk0NiA5LjU4NDg4IDE0IDkuODUwMSAxNEMxMC4xMTUzIDE0IDEwLjM2OTcgMTMuODk0NiAxMC41NTcyIDEzLjcwNzFDMTAuNzQ0NyAxMy41MTk2IDEwLjg1MDEgMTMuMjY1MiAxMC44NTAxIDEzVjExQzEwLjg1MDEgMTAuNzM0OCAxMC43NDQ3IDEwLjQ4MDQgMTAuNTU3MiAxMC4yOTI5QzEwLjM2OTcgMTAuMTA1NCAxMC4xMTUzIDEwIDkuODUwMSAxMFpNMjEuODUwMSAxMUMyMi4xMTUzIDExIDIyLjM2OTcgMTAuODk0NiAyMi41NTcyIDEwLjcwNzFDMjIuNzQ0NyAxMC41MTk2IDIyLjg1MDEgMTAuMjY1MiAyMi44NTAxIDEwVjZDMjIuODUwMSA1LjczNDc4IDIyLjc0NDcgNS40ODA0MyAyMi41NTcyIDUuMjkyODlDMjIuMzY5NyA1LjEwNTM2IDIyLjExNTMgNSAyMS44NTAxIDVIMy44NTAxQzMuNTg0ODggNSAzLjMzMDUzIDUuMTA1MzYgMy4xNDI5OSA1LjI5Mjg5QzIuOTU1NDUgNS40ODA0MyAyLjg1MDEgNS43MzQ3OCAyLjg1MDEgNlYxMEMyLjg1MDEgMTAuMjY1MiAyLjk1NTQ1IDEwLjUxOTYgMy4xNDI5OSAxMC43MDcxQzMuMzMwNTMgMTAuODk0NiAzLjU4NDg4IDExIDMuODUwMSAxMUM0LjExNTMxIDExIDQuMzY5NjcgMTEuMTA1NCA0LjU1NzIgMTEuMjkyOUM0Ljc0NDc0IDExLjQ4MDQgNC44NTAxIDExLjczNDggNC44NTAxIDEyQzQuODUwMSAxMi4yNjUyIDQuNzQ0NzQgMTIuNTE5NiA0LjU1NzIgMTIuNzA3MUM0LjM2OTY3IDEyLjg5NDYgNC4xMTUzMSAxMyAzLjg1MDEgMTNDMy41ODQ4OCAxMyAzLjMzMDUzIDEzLjEwNTQgMy4xNDI5OSAxMy4yOTI5QzIuOTU1NDUgMTMuNDgwNCAyLjg1MDEgMTMuNzM0OCAyLjg1MDEgMTRWMThDMi44NTAxIDE4LjI2NTIgMi45NTU0NSAxOC41MTk2IDMuMTQyOTkgMTguNzA3MUMzLjMzMDUzIDE4Ljg5NDYgMy41ODQ4OCAxOSAzLjg1MDEgMTlIMjEuODUwMUMyMi4xMTUzIDE5IDIyLjM2OTcgMTguODk0NiAyMi41NTcyIDE4LjcwNzFDMjIuNzQ0NyAxOC41MTk2IDIyLjg1MDEgMTguMjY1MiAyMi44NTAxIDE4VjE0QzIyLjg1MDEgMTMuNzM0OCAyMi43NDQ3IDEzLjQ4MDQgMjIuNTU3MiAxMy4yOTI5QzIyLjM2OTcgMTMuMTA1NCAyMi4xMTUzIDEzIDIxLjg1MDEgMTNDMjEuNTg0OSAxMyAyMS4zMzA1IDEyLjg5NDYgMjEuMTQzIDEyLjcwNzFDMjAuOTU1NSAxMi41MTk2IDIwLjg1MDEgMTIuMjY1MiAyMC44NTAxIDEyQzIwLjg1MDEgMTEuNzM0OCAyMC45NTU1IDExLjQ4MDQgMjEuMTQzIDExLjI5MjlDMjEuMzMwNSAxMS4xMDU0IDIxLjU4NDkgMTEgMjEuODUwMSAxMVpNMjAuODUwMSA5LjE4QzIwLjI3MDkgOS4zOTAyIDE5Ljc3MDYgOS43NzM2MyAxOS40MTY5IDEwLjI3ODJDMTkuMDYzMyAxMC43ODI3IDE4Ljg3MzYgMTEuMzgzOSAxOC44NzM2IDEyQzE4Ljg3MzYgMTIuNjE2MSAxOS4wNjMzIDEzLjIxNzMgMTkuNDE2OSAxMy43MjE4QzE5Ljc3MDYgMTQuMjI2NCAyMC4yNzA5IDE0LjYwOTggMjAuODUwMSAxNC44MlYxN0gxMC44NTAxQzEwLjg1MDEgMTYuNzM0OCAxMC43NDQ3IDE2LjQ4MDQgMTAuNTU3MiAxNi4yOTI5QzEwLjM2OTcgMTYuMTA1NCAxMC4xMTUzIDE2IDkuODUwMSAxNkM5LjU4NDg4IDE2IDkuMzMwNTMgMTYuMTA1NCA5LjE0Mjk5IDE2LjI5MjlDOC45NTU0NSAxNi40ODA0IDguODUwMSAxNi43MzQ4IDguODUwMSAxN0g0Ljg1MDFWMTQuODJDNS40MjkyNSAxNC42MDk4IDUuOTI5NjQgMTQuMjI2NCA2LjI4MzI2IDEzLjcyMThDNi42MzY4NyAxMy4yMTczIDYuODI2NTcgMTIuNjE2MSA2LjgyNjU3IDEyQzYuODI2NTcgMTEuMzgzOSA2LjYzNjg3IDEwLjc4MjcgNi4yODMyNiAxMC4yNzgyQzUuOTI5NjQgOS43NzM2MyA1LjQyOTI1IDkuMzkwMiA0Ljg1MDEgOS4xOFY3SDguODUwMUM4Ljg1MDEgNy4yNjUyMiA4Ljk1NTQ1IDcuNTE5NTcgOS4xNDI5OSA3LjcwNzExQzkuMzMwNTMgNy44OTQ2NCA5LjU4NDg4IDggOS44NTAxIDhDMTAuMTE1MyA4IDEwLjM2OTcgNy44OTQ2NCAxMC41NTcyIDcuNzA3MTFDMTAuNzQ0NyA3LjUxOTU3IDEwLjg1MDEgNy4yNjUyMiAxMC44NTAxIDdIMjAuODUwMVY5LjE4WlwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFBheW1lbnRUb2tlbnNIaXN0b3J5SWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTE5Ljk1OCA0LjA0MjAxQzE4LjkxNTcgMi45OTY4NCAxNy42NzcyIDIuMTY3OTYgMTYuMzEzNSAxLjYwM0MxNC45NDk5IDEuMDM4MDUgMTMuNDg4IDAuNzQ4MTY2IDEyLjAxMiAwLjc1MDAwOUM4LjkzNzk3IDAuNzUwMDA5IDYuMTUxOTcgMS45ODQwMSA0LjEyMjk3IDMuOTg1MDFMNC4xMjM5NyAzLjk4NDAxVjAuNzUxMDA5SDIuNjIzOTdWNi43NTEwMUg4LjYyMzk3VjUuMjUxMDFINC45ODA5N0M1Ljg4OTI0IDQuMzAyMTUgNi45ODAzMyAzLjU0NzEzIDguMTg4NCAzLjAzMTUzQzkuMzk2NDYgMi41MTU5MiAxMC42OTY1IDIuMjUwNCAxMi4wMSAyLjI1MTAxQzE3LjM4IDIuMjUxMDEgMjEuNzQ4IDYuNjIwMDEgMjEuNzQ4IDExLjk4OUMyMS43NDggMTcuMzU4IDE3LjM3OSAyMS43MjcgMTIuMDEgMjEuNzI3QzYuNjQwOTcgMjEuNzI3IDIuMjcxOTcgMTcuMzU4IDIuMjcxOTcgMTEuOTg5SDAuNzcxOTczQzAuNzcxOTczIDE4LjE5NiA1LjgwMzk3IDIzLjIyNyAxMi4wMSAyMy4yMjdDMTUuMTEzIDIzLjIyNyAxNy45MjMgMjEuOTY5IDE5Ljk1NyAxOS45MzVDMjEuOTkxIDE3LjkwMSAyMy4yNDkgMTUuMDkyIDIzLjI0OSAxMS45ODhDMjMuMjQ5IDguODg0MDEgMjEuOTkxIDYuMDc1MDEgMTkuOTU3IDQuMDQxMDFMMTkuOTU4IDQuMDQyMDFaXCIgLz5cbiAgICA8cGF0aCBkPVwiTTE2LjEyNSA3LjVINi4zNzVWMTVIMTYuMTI1VjcuNVpNMTUuMzc1IDE0LjI1SDcuMTI1VjguMjVIMTUuMzc1VjE0LjI1WlwiIC8+XG4gICAgPHBhdGggZD1cIk0xNi44NzUgOS4zNzVWMTUuNzVIOC4yNVYxNi41SDE3LjYyNVY5LjM3NUgxNi44NzVaXCIgZmlsbD1cImJsYWNrXCIgLz5cbiAgICA8cGF0aCBkPVwiTTExLjI1IDEzLjA4OUMxMi4xODA1IDEzLjA4OSAxMi45Mzc1IDEyLjI2NTUgMTIuOTM3NSAxMS4yNTNDMTIuOTM3NSAxMC4yNDA1IDEyLjE4MDUgOS40MTY5OSAxMS4yNSA5LjQxNjk5QzEwLjMxOTUgOS40MTY5OSA5LjU2MjUgMTAuMjQwNSA5LjU2MjUgMTEuMjUzQzkuNTYyNSAxMi4yNjU1IDEwLjMxOTUgMTMuMDg5IDExLjI1IDEzLjA4OVpNMTEuMjUgMTAuMTY3NUMxMS43NjcgMTAuMTY3NSAxMi4xODc1IDEwLjY1NDUgMTIuMTg3NSAxMS4yNTM1QzEyLjE4NzUgMTEuODUyNSAxMS43NjcgMTIuMzM5NSAxMS4yNSAxMi4zMzk1QzEwLjczMyAxMi4zMzk1IDEwLjMxMjUgMTEuODUyNSAxMC4zMTI1IDExLjI1MzVDMTAuMzEyNSAxMC42NTQ1IDEwLjczMyAxMC4xNjc1IDExLjI1IDEwLjE2NzVaXCIgLz5cbiAgICA8cGF0aCBkPVwiTTcuODc1IDkuMTg3NUg4LjYyNVYxMy4zMTI1SDcuODc1VjkuMTg3NVpcIiBmaWxsPVwiYmxhY2tcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTMuODc1IDkuMTg3NUgxNC42MjVWMTMuMzEyNUgxMy44NzVWOS4xODc1WlwiIGZpbGw9XCJibGFja1wiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uSGlzdG9yeUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk0xOS45NTggNC4wNDIwMUMxOC45MTU3IDIuOTk2ODQgMTcuNjc3MiAyLjE2Nzk2IDE2LjMxMzUgMS42MDNDMTQuOTQ5OSAxLjAzODA1IDEzLjQ4OCAwLjc0ODE2NiAxMi4wMTIgMC43NTAwMDlDOC45Mzc5NyAwLjc1MDAwOSA2LjE1MTk3IDEuOTg0MDEgNC4xMjI5NyAzLjk4NTAxTDQuMTIzOTcgMy45ODQwMVYwLjc1MTAwOUgyLjYyMzk3VjYuNzUxMDFIOC42MjM5N1Y1LjI1MTAxSDQuOTgwOTdDNS44ODkyNCA0LjMwMjE1IDYuOTgwMzMgMy41NDcxMyA4LjE4ODQgMy4wMzE1M0M5LjM5NjQ2IDIuNTE1OTIgMTAuNjk2NSAyLjI1MDQgMTIuMDEgMi4yNTEwMUMxNy4zOCAyLjI1MTAxIDIxLjc0OCA2LjYyMDAxIDIxLjc0OCAxMS45ODlDMjEuNzQ4IDE3LjM1OCAxNy4zNzkgMjEuNzI3IDEyLjAxIDIxLjcyN0M2LjY0MDk3IDIxLjcyNyAyLjI3MTk3IDE3LjM1OCAyLjI3MTk3IDExLjk4OUgwLjc3MTk3M0MwLjc3MTk3MyAxOC4xOTYgNS44MDM5NyAyMy4yMjcgMTIuMDEgMjMuMjI3QzE1LjExMyAyMy4yMjcgMTcuOTIzIDIxLjk2OSAxOS45NTcgMTkuOTM1QzIxLjk5MSAxNy45MDEgMjMuMjQ5IDE1LjA5MiAyMy4yNDkgMTEuOTg4QzIzLjI0OSA4Ljg4NDAxIDIxLjk5MSA2LjA3NTAxIDE5Ljk1NyA0LjA0MTAxTDE5Ljk1OCA0LjA0MjAxWlwiIC8+XG4gICAgPHBhdGggZD1cIk0xMi4wMDAzIDYuMTY2NzVDOC43Nzg5NyA2LjE2Njc1IDYuMTY2OTkgOC43Nzg3MyA2LjE2Njk5IDEyLjAwMDFDNi4xNjY5OSAxNS4yMjE0IDguNzc4OTcgMTcuODMzNCAxMi4wMDAzIDE3LjgzMzRDMTUuMjIxNyAxNy44MzM0IDE3LjgzMzcgMTUuMjIxNCAxNy44MzM3IDEyLjAwMDFDMTcuODMzNyA4Ljc3ODczIDE1LjIyMTcgNi4xNjY3NSAxMi4wMDAzIDYuMTY2NzVaTTEyLjAwMDMgMTYuODQzOEM5LjMyNTg1IDE2Ljg0MzggNy4xNTY1OCAxNC42NzQ2IDcuMTU2NTggMTIuMDAwMUM3LjE1NjU4IDkuMzI1NiA5LjMyNTg1IDcuMTU2MzMgMTIuMDAwMyA3LjE1NjMzQzE0LjY3NDggNy4xNTYzMyAxNi44NDQxIDkuMzI1NiAxNi44NDQxIDEyLjAwMDFDMTYuODQ0MSAxNC42NzQ2IDE0LjY3NDggMTYuODQzOCAxMi4wMDAzIDE2Ljg0MzhaTTEyLjYyMTQgMTEuNjk4TDEyLjI5MDcgMTEuNjIxMlY5Ljg3MjQ4QzEyLjc4NTUgOS45NDAxOSAxMy4wOTE1IDEwLjI1MDEgMTMuMTQzNiAxMC42MzAzQzEzLjE1MDEgMTAuNjgyNCAxMy4xOTQzIDEwLjcyMDEgMTMuMjQ2NCAxMC43MjAxSDEzLjgzMTFDMTMuODkyMyAxMC43MjAxIDEzLjk0MDQgMTAuNjY2NyAxMy45MzUyIDEwLjYwNTZDMTMuODU1OCA5Ljc5NDM1IDEzLjE4NzggOS4yNzM1MiAxMi4yOTU5IDkuMTgzNjhWOC43NTc4OUMxMi4yOTU5IDguNzAwNiAxMi4yNDkgOC42NTM3MyAxMi4xOTE3IDguNjUzNzNIMTEuODI1OEMxMS43Njg2IDguNjUzNzMgMTEuNzIxNyA4LjcwMDYgMTEuNzIxNyA4Ljc1Nzg5VjkuMTg3NThDMTAuNzk5OCA5LjI3NzQzIDEwLjA3ODUgOS43ODY1NCAxMC4wNzg1IDEwLjczNzFDMTAuMDc4NSAxMS42MTczIDEwLjcyNjkgMTIuMDQxNyAxMS40MDc5IDEyLjIwNDVMMTEuNzI5NSAxMi4yODY1VjE0LjE0NDZDMTEuMTU0IDE0LjA2NzggMTAuODMxMSAxMy43NjA1IDEwLjc2NDYgMTMuMzQ2NEMxMC43NTY4IDEzLjI5NyAxMC43MTI2IDEzLjI2MDUgMTAuNjYxOCAxMy4yNjA1SDEwLjA2MDJDOS45OTkwMiAxMy4yNjA1IDkuOTUwODUgMTMuMzEyNiA5Ljk1NjA2IDEzLjM3MzhDMTAuMDE0NiAxNC4wODk5IDEwLjU1NzYgMTQuNzQ4OCAxMS43MTY1IDE0LjgzMzRWMTUuMjQyM0MxMS43MTY1IDE1LjI5OTYgMTEuNzYzMyAxNS4zNDY0IDExLjgyMDYgMTUuMzQ2NEgxMi4xOTA0QzEyLjI0NzcgMTUuMzQ2NCAxMi4yOTQ2IDE1LjI5OTYgMTIuMjk0NiAxNS4yNDFMMTIuMjkyIDE0LjgyODJDMTMuMzExNSAxNC43Mzg0IDE0LjA0MDcgMTQuMTkyOCAxNC4wNDA3IDEzLjIxMzZDMTQuMDM5NCAxMi4zMSAxMy40NjUyIDExLjkwNjMgMTIuNjIxNCAxMS42OThaTTExLjcyODIgMTEuNDg3MUMxMS42NTUzIDExLjQ2NjIgMTEuNTk0MSAxMS40NDY3IDExLjUzMjkgMTEuNDIyQzExLjA5MjggMTEuMjYzMSAxMC44ODgzIDExLjAwNjYgMTAuODg4MyAxMC42NzU5QzEwLjg4ODMgMTAuMjAzMiAxMS4yNDY0IDkuOTMzNjggMTEuNzI4MiA5Ljg3MjQ4VjExLjQ4NzFaTTEyLjI5MDcgMTQuMTQ4NVYxMi40MDc2QzEyLjMzMTEgMTIuNDE5NCAxMi4zNjc1IDEyLjQyODUgMTIuNDA1MyAxMi40MzYzQzEzLjAyMTIgMTIuNjIzOCAxMy4yMjgyIDEyLjg4NDIgMTMuMjI4MiAxMy4yODM5QzEzLjIyODIgMTMuNzkzMSAxMi44NDU0IDE0LjA5OSAxMi4yOTA3IDE0LjE0ODVaXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgUHVyY2hhc2VkSW1hZ2VJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNNy41IDYuNzVDNy41IDYuNzUgNy41IDIuMjUgMTIgMi4yNUMxNi41IDIuMjUgMTYuNSA2Ljc1IDE2LjUgNi43NU0zLjc1IDYuNzVWMjEuNzVIMjAuMjVWNi43NUgzLjc1WlwiIC8+XG4gICAgPHBhdGggZD1cIk0xMi40ODE2IDEzLjk2NkwxMS41Njk5IDE1LjEyODVMMTEuMDg4MyAxNC41MTQ1QzExLjA3OTUgMTQuNTAzMiAxMS4wNjgzIDE0LjQ5NDIgMTEuMDU1NSAxNC40ODhDMTEuMDQyNyAxNC40ODE3IDExLjAyODcgMTQuNDc4NSAxMS4wMTQ1IDE0LjQ3ODVDMTEuMDAwMiAxNC40Nzg1IDEwLjk4NjIgMTQuNDgxNyAxMC45NzM0IDE0LjQ4OEMxMC45NjA2IDE0LjQ5NDIgMTAuOTQ5NCAxNC41MDMyIDEwLjk0MDYgMTQuNTE0NUw5Ljc3MTA5IDE2LjAwNTFDOS43NjAyNyAxNi4wMTg5IDkuNzUzNTYgMTYuMDM1NSA5Ljc1MTcyIDE2LjA1MjlDOS43NDk4OCAxNi4wNzA0IDkuNzUyOTkgMTYuMDg4IDkuNzYwNjkgMTYuMTAzOEM5Ljc2ODM5IDE2LjExOTUgOS43ODAzOCAxNi4xMzI4IDkuNzk1MjcgMTYuMTQyMUM5LjgxMDE3IDE2LjE1MTQgOS44MjczNyAxNi4xNTYzIDkuODQ0OTIgMTYuMTU2MkgxNC4xNTYyQzE0LjIzNDggMTYuMTU2MiAxNC4yNzgxIDE2LjA2NiAxNC4yMzAxIDE2LjAwNTFMMTIuNjMwNSAxMy45NjZDMTIuNjIxNiAxMy45NTQ4IDEyLjYxMDMgMTMuOTQ1NyAxMi41OTc0IDEzLjkzOTVDMTIuNTg0NSAxMy45MzMzIDEyLjU3MDQgMTMuOTMgMTIuNTU2MSAxMy45M0MxMi41NDE3IDEzLjkzIDEyLjUyNzYgMTMuOTMzMyAxMi41MTQ3IDEzLjkzOTVDMTIuNTAxOCAxMy45NDU3IDEyLjQ5MDUgMTMuOTU0OCAxMi40ODE2IDEzLjk2NlpNMTAuMjE4OCAxMy4xNzk3QzEwLjIxODggMTMuMzA0IDEwLjI2ODEgMTMuNDIzMiAxMC4zNTYgMTMuNTExMUMxMC40NDQgMTMuNTk5MSAxMC41NjMyIDEzLjY0ODQgMTAuNjg3NSAxMy42NDg0QzEwLjgxMTggMTMuNjQ4NCAxMC45MzEgMTMuNTk5MSAxMS4wMTkgMTMuNTExMUMxMS4xMDY5IDEzLjQyMzIgMTEuMTU2MiAxMy4zMDQgMTEuMTU2MiAxMy4xNzk3QzExLjE1NjIgMTMuMDU1NCAxMS4xMDY5IDEyLjkzNjEgMTEuMDE5IDEyLjg0ODJDMTAuOTMxIDEyLjc2MDMgMTAuODExOCAxMi43MTA5IDEwLjY4NzUgMTIuNzEwOUMxMC41NjMyIDEyLjcxMDkgMTAuNDQ0IDEyLjc2MDMgMTAuMzU2IDEyLjg0ODJDMTAuMjY4MSAxMi45MzYxIDEwLjIxODggMTMuMDU1NCAxMC4yMTg4IDEzLjE3OTdaTTE2LjAxNDggMTEuMzgyTDEzLjQ5MyA4Ljg2MDE2QzEzLjQyMjcgOC43ODk4NCAxMy4zMjc3IDguNzUgMTMuMjI4MSA4Ljc1SDguMjVDOC4wNDI1OCA4Ljc1IDcuODc1IDguOTE3NTggNy44NzUgOS4xMjVWMTguODc1QzcuODc1IDE5LjA4MjQgOC4wNDI1OCAxOS4yNSA4LjI1IDE5LjI1SDE1Ljc1QzE1Ljk1NzQgMTkuMjUgMTYuMTI1IDE5LjA4MjQgMTYuMTI1IDE4Ljg3NVYxMS42NDhDMTYuMTI1IDExLjU0ODQgMTYuMDg1MiAxMS40NTIzIDE2LjAxNDggMTEuMzgyWk0xNS4yNjAyIDExLjgyMDNIMTMuMDU0N1Y5LjYxNDg0TDE1LjI2MDIgMTEuODIwM1pNMTUuMjgxMiAxOC40MDYySDguNzE4NzVWOS41OTM3NUgxMi4yNTc4VjEyLjEyNUMxMi4yNTc4IDEyLjI1NTUgMTIuMzA5NyAxMi4zODA3IDEyLjQwMiAxMi40NzNDMTIuNDk0MyAxMi41NjUzIDEyLjYxOTUgMTIuNjE3MiAxMi43NSAxMi42MTcySDE1LjI4MTJWMTguNDA2MlpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBQdXJjaGFzZWRWaWRlb0ljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk03LjUgNi43NUM3LjUgNi43NSA3LjUgMi4yNSAxMiAyLjI1QzE2LjUgMi4yNSAxNi41IDYuNzUgMTYuNSA2Ljc1TTMuNzUgNi43NVYyMS43NUgyMC4yNVY2Ljc1SDMuNzVaXCIgLz5cbiAgICA8cGF0aCBkPVwiTTEyIDlDOS4yNDMgOSA3IDExLjI0MyA3IDE0QzcgMTYuNzU3IDkuMjQzIDE5IDEyIDE5QzE0Ljc1NyAxOSAxNyAxNi43NTcgMTcgMTRDMTcgMTEuMjQzIDE0Ljc1NyA5IDEyIDlaTTEyIDE4QzkuNzk0NSAxOCA4IDE2LjIwNTUgOCAxNEM4IDExLjc5NDUgOS43OTQ1IDEwIDEyIDEwQzE0LjIwNTUgMTAgMTYgMTEuNzk0NSAxNiAxNEMxNiAxNi4yMDU1IDE0LjIwNTUgMTggMTIgMThaXCIgLz5cbiAgICA8cGF0aCBkPVwiTTEwLjUgMTYuNUwxNC41IDE0TDEwLjUgMTEuNVYxNi41WlwiIGZpbGw9XCJibGFja1wiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFB1cmNoYXNlZEl0ZW1JY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNMS41IDYuNDA0OThWMTcuNjFDMS41IDE4LjI4NSAxLjk1IDE4Ljg3IDIuNjI1IDE5LjA2NUwxMi4zNzUgMjEuNjZDMTIuNjE1IDIxLjczNSAxMi44ODUgMjEuNzM1IDEzLjEyNSAyMS42NkwyMi44NzUgMTkuMDY1QzIzLjU1IDE4Ljg3IDI0IDE4LjI4NSAyNCAxNy42MVY2LjQwNDk4QzI0IDUuNzI5OTggMjMuNTUgNS4xNDQ5OCAyMi44NzUgNC45NDk5OEwxMy4xMjUgMi4zMzk5OEMxMi44NzcgMi4yOTQ5OCAxMi42MjMgMi4yOTQ5OCAxMi4zNzUgMi4zMzk5OEwyLjYyNSA0Ljk0OTk4QzEuOTUgNS4xNDQ5OCAxLjUgNS43Mjk5OCAxLjUgNi40MDQ5OFpNMTIgMjAuMDRMMyAxNy42NTVWNy40OTk5OEwxMiA5LjkxNDk4VjIwLjA0Wk0zIDUuOTk5OThMNi43NSA0Ljk5NDk4TDE2LjUgNy41ODk5OEwxMi43NSA4LjU5NDk4TDMgNS45OTk5OFpNMjIuNSAxNy42NTVMMTMuNSAyMC4wNFY5LjkxNDk4TDE2LjUgOS4wODk5OFYxMi43NUwxOS41IDExLjk1NVY4LjI5NDk4TDIyLjUgNy40OTk5OFYxNy42NTVaTTE5LjUgNi43OTQ5OEw5Ljc1IDQuMTk5OThMMTIuNzUgMy40MDQ5OEwyMi41IDUuOTk5OThMMTkuNSA2Ljc5NDk4WlwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IE15UHJvZHVjdEljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgZD1cIk0xLjUgNi40MDUwM1YxNy42MUMxLjUgMTguMjg1IDEuOTUgMTguODcgMi42MjUgMTkuMDY1TDEyLjM3NSAyMS42NkMxMi42MTUgMjEuNzM1IDEyLjg4NSAyMS43MzUgMTMuMTI1IDIxLjY2TDIyLjg3NSAxOS4wNjVDMjMuNTUgMTguODcgMjQgMTguMjg1IDI0IDE3LjYxVjYuNDA1MDNDMjQgNS43MzAwMyAyMy41NSA1LjE0NTAzIDIyLjg3NSA0Ljk1MDAzTDEzLjEyNSAyLjM0MDAzQzEyLjg3NyAyLjI5NTAyIDEyLjYyMyAyLjI5NTAyIDEyLjM3NSAyLjM0MDAzTDIuNjI1IDQuOTUwMDNDMS45NSA1LjE0NTAzIDEuNSA1LjczMDAzIDEuNSA2LjQwNTAzWk0xMiAyMC4wNEwzIDE3LjY1NVY3LjUwMDAzTDEyIDkuOTE1MDNWMjAuMDRaTTMgNi4wMDAwM0w2Ljc1IDQuOTk1MDNMMTYuNSA3LjU5MDAzTDEyLjc1IDguNTk1MDNMMyA2LjAwMDAzWk0yMi41IDE3LjY1NUwxMy41IDIwLjA0VjkuOTE1MDNMMTYuNSA5LjA5MDAzVjEyLjc1TDE5LjUgMTEuOTU1VjguMjk1MDNMMjIuNSA3LjUwMDAzVjE3LjY1NVpNMTkuNSA2Ljc5NTAzTDkuNzUgNC4yMDAwM0wxMi43NSAzLjQwNTAzTDIyLjUgNi4wMDAwM0wxOS41IDYuNzk1MDNaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBWaWRlb3NJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDMwIDMxXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNMjIuNTAwMiA5LjE0NDI0QzIyLjUwMDIgNy43NjU0OSAyMS4zNzg5IDYuNjQ0MjQgMjAuMDAwMiA2LjY0NDI0SDUuMDAwMThDMy42MjE0MyA2LjY0NDI0IDIuNTAwMTggNy43NjU0OSAyLjUwMDE4IDkuMTQ0MjRWMjEuNjQ0MkMyLjUwMDE4IDIzLjAyMyAzLjYyMTQzIDI0LjE0NDIgNS4wMDAxOCAyNC4xNDQySDIwLjAwMDJDMjEuMzc4OSAyNC4xNDQyIDIyLjUwMDIgMjMuMDIzIDIyLjUwMDIgMjEuNjQ0MlYxNy40NzhMMjcuNTAwMiAyMS42NDQyVjkuMTQ0MjRMMjIuNTAwMiAxMy4zMTA1VjkuMTQ0MjRaTTIwLjAwMjcgMjEuNjQ0Mkg1LjAwMDE4VjkuMTQ0MjRIMjAuMDAwMkwyMC4wMDE0IDE1LjM5M0wyMC4wMDAyIDE1LjM5NDJMMjAuMDAxNCAxNS4zOTU1TDIwLjAwMjcgMjEuNjQ0MlpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBQaG90b3NJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNMjEuNzUgMy43NUgyLjI1QzEuODM1MTYgMy43NSAxLjUgNC4wODUxNiAxLjUgNC41VjE5LjVDMS41IDE5LjkxNDggMS44MzUxNiAyMC4yNSAyLjI1IDIwLjI1SDIxLjc1QzIyLjE2NDggMjAuMjUgMjIuNSAxOS45MTQ4IDIyLjUgMTkuNVY0LjVDMjIuNSA0LjA4NTE2IDIyLjE2NDggMy43NSAyMS43NSAzLjc1Wk0yMC44MTI1IDE4LjU2MjVIMy4xODc1VjE3LjYyNzNMNi40MzM1OSAxMy43NzY2TDkuOTUxNTYgMTcuOTQ4NEwxNS40MjQyIDExLjQ2MDlMMjAuODEyNSAxNy44NVYxOC41NjI1Wk0yMC44MTI1IDE1LjUyMDNMMTUuNTY3MiA5LjNDMTUuNDkyMiA5LjIxMDk0IDE1LjM1NjIgOS4yMTA5NCAxNS4yODEyIDkuM0w5Ljk1MTU2IDE1LjYxODhMNi41NzY1NiAxMS42MThDNi41MDE1NiAxMS41Mjg5IDYuMzY1NjIgMTEuNTI4OSA2LjI5MDYyIDExLjYxOEwzLjE4NzUgMTUuMjk3N1Y1LjQzNzVIMjAuODEyNVYxNS41MjAzWk03LjEyNSAxMC42ODc1QzcuMzk1ODUgMTAuNjg3NSA3LjY2NDA1IDEwLjYzNDIgNy45MTQyOCAxMC41MzA1QzguMTY0NTIgMTAuNDI2OSA4LjM5MTg5IDEwLjI3NDkgOC41ODM0MSAxMC4wODM0QzguNzc0OTMgOS44OTE4OSA4LjkyNjg1IDkuNjY0NTIgOS4wMzA1IDkuNDE0MjhDOS4xMzQxNSA5LjE2NDA1IDkuMTg3NSA4Ljg5NTg1IDkuMTg3NSA4LjYyNUM5LjE4NzUgOC4zNTQxNSA5LjEzNDE1IDguMDg1OTUgOS4wMzA1IDcuODM1NzJDOC45MjY4NSA3LjU4NTQ4IDguNzc0OTMgNy4zNTgxMSA4LjU4MzQxIDcuMTY2NTlDOC4zOTE4OSA2Ljk3NTA3IDguMTY0NTIgNi44MjMxNSA3LjkxNDI4IDYuNzE5NUM3LjY2NDA1IDYuNjE1ODUgNy4zOTU4NSA2LjU2MjUgNy4xMjUgNi41NjI1QzYuNTc3OTkgNi41NjI1IDYuMDUzMzkgNi43Nzk4IDUuNjY2NTkgNy4xNjY1OUM1LjI3OTggNy41NTMzOSA1LjA2MjUgOC4wNzc5OSA1LjA2MjUgOC42MjVDNS4wNjI1IDkuMTcyMDEgNS4yNzk4IDkuNjk2NjEgNS42NjY1OSAxMC4wODM0QzYuMDUzMzkgMTAuNDcwMiA2LjU3Nzk5IDEwLjY4NzUgNy4xMjUgMTAuNjg3NVpNNy4xMjUgNy45Njg3NUM3LjQ4ODI4IDcuOTY4NzUgNy43ODEyNSA4LjI2MTcyIDcuNzgxMjUgOC42MjVDNy43ODEyNSA4Ljk4ODI4IDcuNDg4MjggOS4yODEyNSA3LjEyNSA5LjI4MTI1QzYuNzYxNzIgOS4yODEyNSA2LjQ2ODc1IDguOTg4MjggNi40Njg3NSA4LjYyNUM2LjQ2ODc1IDguMjYxNzIgNi43NjE3MiA3Ljk2ODc1IDcuMTI1IDcuOTY4NzVaXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgRmVtYWxlU2lnbkljb24gPSAoeyBjb2xvciB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMTZcIlxuICAgIGhlaWdodD1cIjE2XCJcbiAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk04IDEuMzMzMzdDNS43OTQgMS4zMzMzNyA0IDMuMTI3MzcgNCA1LjMzMzM3QzQgNy4zMTEzNyA1LjQ0NDY3IDguOTU0NzEgNy4zMzMzMyA5LjI3MzM3VjExLjMzMzRINS4zMzMzM1YxMi42NjY3SDcuMzMzMzNWMTQuNjU4N0g4LjY2NjY3VjEyLjY2NjdIMTAuNjY2N1YxMS4zMzM0SDguNjY2NjdWOS4yNzMzN0MxMC41NTUzIDguOTU0MDQgMTIgNy4zMTEzNyAxMiA1LjMzMzM3QzEyIDMuMTI3MzcgMTAuMjA2IDEuMzMzMzcgOCAxLjMzMzM3Wk04IDguMDAwMDRDNi41MjkzMyA4LjAwMDA0IDUuMzMzMzMgNi44MDQwNCA1LjMzMzMzIDUuMzMzMzdDNS4zMzMzMyAzLjg2MjcxIDYuNTI5MzMgMi42NjY3MSA4IDIuNjY2NzFDOS40NzA2NyAyLjY2NjcxIDEwLjY2NjcgMy44NjI3MSAxMC42NjY3IDUuMzMzMzdDMTAuNjY2NyA2LjgwNDA0IDkuNDcwNjcgOC4wMDAwNCA4IDguMDAwMDRaXCJcbiAgICAgIGZpbGw9e2NvbG9yIHx8ICdjdXJyZW50Q29sb3InfVxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IE1hbGVTaWduSWNvbiA9ICh7IGNvbG9yIH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNlwiXG4gICAgaGVpZ2h0PVwiMTZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEzLjMzMzQgNy4zMzMyOVYyLjY2NjYzSDguNjY2NzFMMTAuNTI4NyA0LjUyODYzTDcuNjQ3MzcgNy40MDk5NkM2Ljk3MjYgNi45MjY2IDYuMTYzNDEgNi42NjY2NyA1LjMzMzM3IDYuNjY2NjNDMy4xMjczNyA2LjY2NjYzIDEuMzMzMzcgOC40NjA2MyAxLjMzMzM3IDEwLjY2NjZDMS4zMzMzNyAxMi44NzI2IDMuMTI3MzcgMTQuNjY2NiA1LjMzMzM3IDE0LjY2NjZDNy41MzkzNyAxNC42NjY2IDkuMzMzMzcgMTIuODcyNiA5LjMzMzM3IDEwLjY2NjZDOS4zMzMzNyA5LjgwMzk2IDkuMDU2MDQgOS4wMDY2MyA4LjU5MDA0IDguMzUyNjNMMTEuNDcxNCA1LjQ3MTI5TDEzLjMzMzQgNy4zMzMyOVpNNS4zMzMzNyAxMy4zMzMzQzMuODYyNzEgMTMuMzMzMyAyLjY2NjcxIDEyLjEzNzMgMi42NjY3MSAxMC42NjY2QzIuNjY2NzEgOS4xOTU5NiAzLjg2MjcxIDcuOTk5OTYgNS4zMzMzNyA3Ljk5OTk2QzYuODA0MDQgNy45OTk5NiA4LjAwMDA0IDkuMTk1OTYgOC4wMDAwNCAxMC42NjY2QzguMDAwMDQgMTIuMTM3MyA2LjgwNDA0IDEzLjMzMzMgNS4zMzMzNyAxMy4zMzMzWlwiXG4gICAgICBmaWxsPXtjb2xvciB8fCAnY3VycmVudENvbG9yJ31cbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBUcmFuc2dlbmRlckljb24gPSAoeyBjb2xvciB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMTZcIlxuICAgIGhlaWdodD1cIjE2XCJcbiAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk02LjY2NjY1IDEwLjMzMzNDNy41NTA3IDEwLjMzMzMgOC4zOTg1NSA5Ljk4MjEgOS4wMjM2NyA5LjM1Njk4QzkuNjQ4NzkgOC43MzE4NSA5Ljk5OTk4IDcuODg0MDEgOS45OTk5OCA2Ljk5OTk1QzkuOTk5OTggNi4xMTU5IDkuNjQ4NzkgNS4yNjgwNSA5LjAyMzY3IDQuNjQyOTNDOC4zOTg1NSA0LjAxNzgxIDcuNTUwNyAzLjY2NjYyIDYuNjY2NjUgMy42NjY2MkM1Ljc4MjU5IDMuNjY2NjIgNC45MzQ3NCA0LjAxNzgxIDQuMzA5NjIgNC42NDI5M0MzLjY4NDUgNS4yNjgwNSAzLjMzMzMxIDYuMTE1OSAzLjMzMzMxIDYuOTk5OTVDMy4zMzMzMSA3Ljg4NDAxIDMuNjg0NSA4LjczMTg1IDQuMzA5NjIgOS4zNTY5OEM0LjkzNDc0IDkuOTgyMSA1Ljc4MjU5IDEwLjMzMzMgNi42NjY2NSAxMC4zMzMzVjEwLjMzMzNaTTEwLjY3NTMgNC42MDkyOUMxMS4wNjg4IDUuMjY5MjQgMTEuMjkzMiA2LjAxNjEgMTEuMzI4OCA2Ljc4MzYyQzExLjM2NDQgNy41NTExMyAxMS4yMSA4LjMxNTU2IDEwLjg3OTIgOS4wMDkwN0MxMC41NDg1IDkuNzAyNTggMTAuMDUxNyAxMC4zMDM3IDkuNDMyOSAxMC43NTkyQzguODE0MSAxMS4yMTQ2IDguMDkyNDUgMTEuNTEwMyA3LjMzMTk4IDExLjYyTDcuMzMzMzEgMTEuNjY2NlYxMi4zMzMzSDcuOTk5OThDOC4xNzY3OSAxMi4zMzMzIDguMzQ2MzYgMTIuNDAzNSA4LjQ3MTM4IDEyLjUyODVDOC41OTY0MSAxMi42NTM2IDguNjY2NjQgMTIuODIzMSA4LjY2NjY0IDEzQzguNjY2NjQgMTMuMTc2OCA4LjU5NjQxIDEzLjM0NjMgOC40NzEzOCAxMy40NzE0QzguMzQ2MzYgMTMuNTk2NCA4LjE3Njc5IDEzLjY2NjYgNy45OTk5OCAxMy42NjY2SDcuMzMzMzFWMTQuMzMzM0M3LjMzMzMxIDE0LjUxMDEgNy4yNjMwNyAxNC42Nzk3IDcuMTM4MDUgMTQuODA0N0M3LjAxMzAzIDE0LjkyOTcgNi44NDM0NiAxNSA2LjY2NjY1IDE1QzYuNDg5ODMgMTUgNi4zMjAyNiAxNC45Mjk3IDYuMTk1MjQgMTQuODA0N0M2LjA3MDIyIDE0LjY3OTcgNS45OTk5OCAxNC41MTAxIDUuOTk5OTggMTQuMzMzM1YxMy42NjY2SDUuMzMzMzFDNS4xNTY1IDEzLjY2NjYgNC45ODY5MyAxMy41OTY0IDQuODYxOTEgMTMuNDcxNEM0LjczNjg4IDEzLjM0NjMgNC42NjY2NSAxMy4xNzY4IDQuNjY2NjUgMTNDNC42NjY2NSAxMi44MjMxIDQuNzM2ODggMTIuNjUzNiA0Ljg2MTkxIDEyLjUyODVDNC45ODY5MyAxMi40MDM1IDUuMTU2NSAxMi4zMzMzIDUuMzMzMzEgMTIuMzMzM0g1Ljk5OTk4VjExLjY2NjZDNS45OTk5OCAxMS42NTA2IDUuOTk5OTggMTEuNjM1MyA2LjAwMTMxIDExLjYyQzQuODM1NDUgMTEuNDQ5MSAzLjc3NzMyIDEwLjg0MzcgMy4wMzkyNiA5LjkyNTE4QzIuMzAxMiA5LjAwNjY2IDEuOTM3ODEgNy44NDI5OSAyLjAyMjAxIDYuNjY3NjlDMi4xMDYyMiA1LjQ5MjM5IDIuNjMxNzggNC4zOTI0MiAzLjQ5MzI1IDMuNTg4NDlDNC4zNTQ3MSAyLjc4NDU3IDUuNDg4MzQgMi4zMzYxNyA2LjY2NjY1IDIuMzMzMjlDNy44MzkwNiAyLjMzMTg2IDguOTY4ODEgMi43NzMwNCA5LjgyOTk4IDMuNTY4NjJMMTEuMDYzMyAyLjMzNTI5SDEwLjAwNjZDOS44Mjk4MyAyLjMzNTI5IDkuNjYwMjYgMi4yNjUwNSA5LjUzNTI0IDIuMTQwMDJDOS40MTAyMiAyLjAxNSA5LjMzOTk4IDEuODQ1NDMgOS4zMzk5OCAxLjY2ODYyQzkuMzM5OTggMS40OTE4MSA5LjQxMDIyIDEuMzIyMjQgOS41MzUyNCAxLjE5NzIyQzkuNjYwMjYgMS4wNzIxOSA5LjgyOTgzIDEuMDAxOTUgMTAuMDA2NiAxLjAwMTk1SDEyLjY3MzNDMTIuODUwMSAxLjAwMTk1IDEzLjAxOTcgMS4wNzIxOSAxMy4xNDQ3IDEuMTk3MjJDMTMuMjY5NyAxLjMyMjI0IDEzLjM0IDEuNDkxODEgMTMuMzQgMS42Njg2MlY0LjMzNTI5QzEzLjM0IDQuNTEyMSAxMy4yNjk3IDQuNjgxNjcgMTMuMTQ0NyA0LjgwNjY5QzEzLjAxOTcgNC45MzE3MiAxMi44NTAxIDUuMDAxOTUgMTIuNjczMyA1LjAwMTk1QzEyLjQ5NjUgNS4wMDE5NSAxMi4zMjY5IDQuOTMxNzIgMTIuMjAxOSA0LjgwNjY5QzEyLjA3NjkgNC42ODE2NyAxMi4wMDY2IDQuNTEyMSAxMi4wMDY2IDQuMzM1MjlWMy4yNzc5NUwxMC42NzYgNC42MDkyOUgxMC42NzUzWlwiXG4gICAgICBmaWxsPXtjb2xvciB8fCAnY3VycmVudENvbG9yJ31cbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBUb2tlbnNJY29uID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIyNVwiXG4gICAgaGVpZ2h0PVwiMjRcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjUgMjRcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTkuODUwMSAxMEM5LjU4NDg4IDEwIDkuMzMwNTMgMTAuMTA1NCA5LjE0Mjk5IDEwLjI5MjlDOC45NTU0NSAxMC40ODA0IDguODUwMSAxMC43MzQ4IDguODUwMSAxMVYxM0M4Ljg1MDEgMTMuMjY1MiA4Ljk1NTQ1IDEzLjUxOTYgOS4xNDI5OSAxMy43MDcxQzkuMzMwNTMgMTMuODk0NiA5LjU4NDg4IDE0IDkuODUwMSAxNEMxMC4xMTUzIDE0IDEwLjM2OTcgMTMuODk0NiAxMC41NTcyIDEzLjcwNzFDMTAuNzQ0NyAxMy41MTk2IDEwLjg1MDEgMTMuMjY1MiAxMC44NTAxIDEzVjExQzEwLjg1MDEgMTAuNzM0OCAxMC43NDQ3IDEwLjQ4MDQgMTAuNTU3MiAxMC4yOTI5QzEwLjM2OTcgMTAuMTA1NCAxMC4xMTUzIDEwIDkuODUwMSAxMFpNMjEuODUwMSAxMUMyMi4xMTUzIDExIDIyLjM2OTcgMTAuODk0NiAyMi41NTcyIDEwLjcwNzFDMjIuNzQ0NyAxMC41MTk2IDIyLjg1MDEgMTAuMjY1MiAyMi44NTAxIDEwVjZDMjIuODUwMSA1LjczNDc4IDIyLjc0NDcgNS40ODA0MyAyMi41NTcyIDUuMjkyODlDMjIuMzY5NyA1LjEwNTM2IDIyLjExNTMgNSAyMS44NTAxIDVIMy44NTAxQzMuNTg0ODggNSAzLjMzMDUzIDUuMTA1MzYgMy4xNDI5OSA1LjI5Mjg5QzIuOTU1NDUgNS40ODA0MyAyLjg1MDEgNS43MzQ3OCAyLjg1MDEgNlYxMEMyLjg1MDEgMTAuMjY1MiAyLjk1NTQ1IDEwLjUxOTYgMy4xNDI5OSAxMC43MDcxQzMuMzMwNTMgMTAuODk0NiAzLjU4NDg4IDExIDMuODUwMSAxMUM0LjExNTMxIDExIDQuMzY5NjcgMTEuMTA1NCA0LjU1NzIgMTEuMjkyOUM0Ljc0NDc0IDExLjQ4MDQgNC44NTAxIDExLjczNDggNC44NTAxIDEyQzQuODUwMSAxMi4yNjUyIDQuNzQ0NzQgMTIuNTE5NiA0LjU1NzIgMTIuNzA3MUM0LjM2OTY3IDEyLjg5NDYgNC4xMTUzMSAxMyAzLjg1MDEgMTNDMy41ODQ4OCAxMyAzLjMzMDUzIDEzLjEwNTQgMy4xNDI5OSAxMy4yOTI5QzIuOTU1NDUgMTMuNDgwNCAyLjg1MDEgMTMuNzM0OCAyLjg1MDEgMTRWMThDMi44NTAxIDE4LjI2NTIgMi45NTU0NSAxOC41MTk2IDMuMTQyOTkgMTguNzA3MUMzLjMzMDUzIDE4Ljg5NDYgMy41ODQ4OCAxOSAzLjg1MDEgMTlIMjEuODUwMUMyMi4xMTUzIDE5IDIyLjM2OTcgMTguODk0NiAyMi41NTcyIDE4LjcwNzFDMjIuNzQ0NyAxOC41MTk2IDIyLjg1MDEgMTguMjY1MiAyMi44NTAxIDE4VjE0QzIyLjg1MDEgMTMuNzM0OCAyMi43NDQ3IDEzLjQ4MDQgMjIuNTU3MiAxMy4yOTI5QzIyLjM2OTcgMTMuMTA1NCAyMi4xMTUzIDEzIDIxLjg1MDEgMTNDMjEuNTg0OSAxMyAyMS4zMzA1IDEyLjg5NDYgMjEuMTQzIDEyLjcwNzFDMjAuOTU1NSAxMi41MTk2IDIwLjg1MDEgMTIuMjY1MiAyMC44NTAxIDEyQzIwLjg1MDEgMTEuNzM0OCAyMC45NTU1IDExLjQ4MDQgMjEuMTQzIDExLjI5MjlDMjEuMzMwNSAxMS4xMDU0IDIxLjU4NDkgMTEgMjEuODUwMSAxMVpNMjAuODUwMSA5LjE4QzIwLjI3MDkgOS4zOTAyIDE5Ljc3MDYgOS43NzM2MyAxOS40MTY5IDEwLjI3ODJDMTkuMDYzMyAxMC43ODI3IDE4Ljg3MzYgMTEuMzgzOSAxOC44NzM2IDEyQzE4Ljg3MzYgMTIuNjE2MSAxOS4wNjMzIDEzLjIxNzMgMTkuNDE2OSAxMy43MjE4QzE5Ljc3MDYgMTQuMjI2NCAyMC4yNzA5IDE0LjYwOTggMjAuODUwMSAxNC44MlYxN0gxMC44NTAxQzEwLjg1MDEgMTYuNzM0OCAxMC43NDQ3IDE2LjQ4MDQgMTAuNTU3MiAxNi4yOTI5QzEwLjM2OTcgMTYuMTA1NCAxMC4xMTUzIDE2IDkuODUwMSAxNkM5LjU4NDg4IDE2IDkuMzMwNTMgMTYuMTA1NCA5LjE0Mjk5IDE2LjI5MjlDOC45NTU0NSAxNi40ODA0IDguODUwMSAxNi43MzQ4IDguODUwMSAxN0g0Ljg1MDFWMTQuODJDNS40MjkyNSAxNC42MDk4IDUuOTI5NjQgMTQuMjI2NCA2LjI4MzI2IDEzLjcyMThDNi42MzY4NyAxMy4yMTczIDYuODI2NTcgMTIuNjE2MSA2LjgyNjU3IDEyQzYuODI2NTcgMTEuMzgzOSA2LjYzNjg3IDEwLjc4MjcgNi4yODMyNiAxMC4yNzgyQzUuOTI5NjQgOS43NzM2MyA1LjQyOTI1IDkuMzkwMiA0Ljg1MDEgOS4xOFY3SDguODUwMUM4Ljg1MDEgNy4yNjUyMiA4Ljk1NTQ1IDcuNTE5NTcgOS4xNDI5OSA3LjcwNzExQzkuMzMwNTMgNy44OTQ2NCA5LjU4NDg4IDggOS44NTAxIDhDMTAuMTE1MyA4IDEwLjM2OTcgNy44OTQ2NCAxMC41NTcyIDcuNzA3MTFDMTAuNzQ0NyA3LjUxOTU3IDEwLjg1MDEgNy4yNjUyMiAxMC44NTAxIDdIMjAuODUwMVY5LjE4WlwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBFYXJuaW5nSWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMTZcIlxuICAgIGhlaWdodD1cIjE2XCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0yMC4yNSAzSDAuNzVWMThIMjAuMjVWM1pNMTguNzUgMTYuNUgyLjI1VjQuNUgxOC43NVYxNi41WlwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAvPlxuICAgIDxwYXRoIGQ9XCJNMjEuNzUgNi43NVYxOS41SDQuNVYyMUgyMy4yNVY2Ljc1SDIxLjc1WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEwLjUgMTQuMTc4QzEyLjM2MSAxNC4xNzggMTMuODc1IDEyLjUzMSAxMy44NzUgMTAuNTA2QzEzLjg3NSA4LjQ4MSAxMi4zNjEgNi44MzQgMTAuNSA2LjgzNEM4LjYzOSA2LjgzNCA3LjEyNSA4LjQ4MSA3LjEyNSAxMC41MDZDNy4xMjUgMTIuNTMxIDguNjM5IDE0LjE3OCAxMC41IDE0LjE3OFpNMTAuNSA4LjMzNUMxMS41MzQgOC4zMzUgMTIuMzc1IDkuMzA5IDEyLjM3NSAxMC41MDdDMTIuMzc1IDExLjcwNSAxMS41MzQgMTIuNjc5IDEwLjUgMTIuNjc5QzkuNDY2IDEyLjY3OSA4LjYyNSAxMS43MDUgOC42MjUgMTAuNTA3QzguNjI1IDkuMzA5IDkuNDY2IDguMzM1IDEwLjUgOC4zMzVaXCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIC8+XG4gICAgPHBhdGggZD1cIk0zLjc1IDYuMzc1SDUuMjVWMTQuNjI1SDMuNzVWNi4zNzVaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgPHBhdGggZD1cIk0xNS43NSA2LjM3NUgxNy4yNVYxNC42MjVIMTUuNzVWNi4zNzVaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFBheW91dFJlcXVlc3RJY29uID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9XCIxNlwiXG4gICAgaGVpZ2h0PVwiMTZcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTIwLjYyNSAyLjYyNUgzLjM3NUMyLjk2MDE2IDIuNjI1IDIuNjI1IDIuOTYwMTYgMi42MjUgMy4zNzVWMjAuNjI1QzIuNjI1IDIxLjAzOTggMi45NjAxNiAyMS4zNzUgMy4zNzUgMjEuMzc1SDIwLjYyNUMyMS4wMzk4IDIxLjM3NSAyMS4zNzUgMjEuMDM5OCAyMS4zNzUgMjAuNjI1VjMuMzc1QzIxLjM3NSAyLjk2MDE2IDIxLjAzOTggMi42MjUgMjAuNjI1IDIuNjI1Wk0xOS42ODc1IDEzLjVIMTIuMzc1VjEwLjVIMTkuNjg3NVYxMy41Wk0xOS42ODc1IDE5LjY4NzVINC4zMTI1VjQuMzEyNUgxOS42ODc1VjlIMTEuNjI1QzExLjIxMDIgOSAxMC44NzUgOS4zMzUxNiAxMC44NzUgOS43NVYxNC4yNUMxMC44NzUgMTQuNjY0OCAxMS4yMTAyIDE1IDExLjYyNSAxNUgxOS42ODc1VjE5LjY4NzVaTTEzLjU5MzggMTJDMTMuNTkzOCAxMi4yNDg2IDEzLjY5MjUgMTIuNDg3MSAxMy44NjgzIDEyLjY2MjlDMTQuMDQ0MiAxMi44Mzg3IDE0LjI4MjYgMTIuOTM3NSAxNC41MzEyIDEyLjkzNzVDMTQuNzc5OSAxMi45Mzc1IDE1LjAxODMgMTIuODM4NyAxNS4xOTQyIDEyLjY2MjlDMTUuMzcgMTIuNDg3MSAxNS40Njg4IDEyLjI0ODYgMTUuNDY4OCAxMkMxNS40Njg4IDExLjc1MTQgMTUuMzcgMTEuNTEyOSAxNS4xOTQyIDExLjMzNzFDMTUuMDE4MyAxMS4xNjEzIDE0Ljc3OTkgMTEuMDYyNSAxNC41MzEyIDExLjA2MjVDMTQuMjgyNiAxMS4wNjI1IDE0LjA0NDIgMTEuMTYxMyAxMy44NjgzIDExLjMzNzFDMTMuNjkyNSAxMS41MTI5IDEzLjU5MzggMTEuNzUxNCAxMy41OTM4IDEyWlwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBHcm91cCA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMTZcIlxuICAgIGhlaWdodD1cIjE2XCJcbiAgICB2aWV3Qm94PVwiMCAwIDI1IDI0XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xNy40NTQyIDExLjA0OEMxOC4wNjMyIDEwLjAxMDEgMTguMzI2MiA4LjgwNTI4IDE4LjIwNTIgNy42MDc5N0MxOC4wMjYyIDUuODIzOTcgMTcuMDMwMiA0LjI0Njk3IDE1LjQwMjIgMy4xNjc5N0wxNC4yOTcyIDQuODMzOTdDMTUuNDE2MiA1LjU3NTk3IDE2LjA5NzIgNi42MzI5NyAxNi4yMTUyIDcuODA3OTdDMTYuMjY5NiA4LjM1NDA3IDE2LjIwMTYgOC45MDU0MyAxNi4wMTYyIDkuNDIxOTVDMTUuODMwNyA5LjkzODQ3IDE1LjUzMjUgMTAuNDA3MiAxNS4xNDMyIDEwLjc5NEwxMy45NTEyIDExLjk4NkwxNS41NjkyIDEyLjQ2MUMxOS44MDEyIDEzLjcwMSAxOS44NTAyIDE3Ljk1NyAxOS44NTAyIDE4SDIxLjg1MDJDMjEuODUwMiAxNi4yMTEgMjAuODk0MiAxMi43MTUgMTcuNDU0MiAxMS4wNDhaXCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMTAuMzUwMSAxMkMxMi41NTYxIDEyIDE0LjM1MDEgMTAuMjA2IDE0LjM1MDEgOEMxNC4zNTAxIDUuNzk0IDEyLjU1NjEgNCAxMC4zNTAxIDRDOC4xNDQxIDQgNi4zNTAxIDUuNzk0IDYuMzUwMSA4QzYuMzUwMSAxMC4yMDYgOC4xNDQxIDEyIDEwLjM1MDEgMTJaTTEwLjM1MDEgNkMxMS40NTMxIDYgMTIuMzUwMSA2Ljg5NyAxMi4zNTAxIDhDMTIuMzUwMSA5LjEwMyAxMS40NTMxIDEwIDEwLjM1MDEgMTBDOS4yNDcxIDEwIDguMzUwMSA5LjEwMyA4LjM1MDEgOEM4LjM1MDEgNi44OTcgOS4yNDcxIDYgMTAuMzUwMSA2Wk0xMS44NTAxIDEzSDguODUwMUM1LjU0MTEgMTMgMi44NTAxIDE1LjY5MSAyLjg1MDEgMTlWMjBINC44NTAxVjE5QzQuODUwMSAxNi43OTQgNi42NDQxIDE1IDguODUwMSAxNUgxMS44NTAxQzE0LjA1NjEgMTUgMTUuODUwMSAxNi43OTQgMTUuODUwMSAxOVYyMEgxNy44NTAxVjE5QzE3Ljg1MDEgMTUuNjkxIDE1LjE1OTEgMTMgMTEuODUwMSAxM1pcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICcuL2xvYWRlci5sZXNzJztcblxuY29uc3QgTG9hZGVyID0gKHsgc3Bpbm5pbmcgPSBmYWxzZSwgZnVsbFNjcmVlbiA9IGZhbHNlIH06IGFueSkgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdsb2FkZXInLCB7XG4gICAgICBoaWRkZW46ICFzcGlubmluZyxcbiAgICAgIGZ1bGxTY3JlZW5cbiAgICB9KX1cbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2FycHBlclwiPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIiAvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPjxpbWcgc3JjPVwiL2xvYWRpbmctaWNvLmdpZlwiIHdpZHRoPVwiNjVweFwiIGFsdD1cIlwiIC8+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgJy4vYmFubmVyLmxlc3MnO1xuaW1wb3J0IHsgSUJhbm5lciB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGJhbm5lcnM6IElCYW5uZXJbXTtcbiAgc3R5bGVJbWFnZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgY2xhc3NuYW1lcz86IHN0cmluZztcbn1cbmNvbnN0IHJlbmRlckJhbm5lciA9IChiYW5uZXI6IElCYW5uZXIsIHN0eWxlSW1hZ2U6IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHR5cGUsIGhyZWYsIF9pZCwgcGhvdG8sIGNvbnRlbnRIVE1MXG4gIH0gPSBiYW5uZXI7XG4gIGlmICh0eXBlID09PSAnaHRtbCcgJiYgY29udGVudEhUTUwpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG4gICAgcmV0dXJuIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb250ZW50SFRNTCB9fSBzdHlsZT17c3R5bGVJbWFnZSB8fCB7fX0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e2hyZWYgfHwgJyMnfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIga2V5PXtfaWR9PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e3Bob3RvICYmIHBob3RvLnVybH1cbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgc3R5bGU9e3N0eWxlSW1hZ2UgfHwge319XG4gICAgICAvPlxuICAgIDwvYT5cbiAgKTtcbn07XG5jb25zdCBCYW5uZXIgPSAoeyBiYW5uZXJzLCBzdHlsZUltYWdlLCBjbGFzc25hbWVzIH06IElQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIHtiYW5uZXJzICYmIGJhbm5lcnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXkgYXJyb3dzIGRvdHM9e2ZhbHNlfSBlZmZlY3Q9XCJmYWRlXCIgY2xhc3NOYW1lPXtjbGFzc25hbWVzfT5cbiAgICAgICAge2Jhbm5lcnMubWFwKChpdGVtKSA9PiAocmVuZGVyQmFubmVyKGl0ZW0sIHN0eWxlSW1hZ2UpXG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICApfVxuICA8L2Rpdj5cbik7XG5cbkJhbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzbmFtZXM6ICcnXG59O1xuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSVBlcmZvcm1lciwgR0VOREVSLCBJQmFubmVyIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7XG4gIENhcmQsIFNwYWNlLCBSb3csIENvbCwgUGFnaW5hdGlvblxufSBmcm9tICdhbnRkJztcbmltcG9ydCB7XG4gIE1hbGVTaWduSWNvbixcbiAgRmVtYWxlU2lnbkljb24sXG4gIFRyYW5zZ2VuZGVySWNvblxufSBmcm9tICdAY29tcG9uZW50cy9jb21tb24vYmFzZS9pY29ucyc7XG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgZ2VuZXJhdGVVdWlkIH0gZnJvbSAnc3JjL2xpYic7XG5pbXBvcnQge1xuICBIZWFydEZpbGxlZCxcbiAgSGVhcnRPdXRsaW5lZCxcbiAgRXllT3V0bGluZWQsXG4gIExvY2tPdXRsaW5lZFxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgJy4vaW5kZXgubGVzcyc7XG5pbXBvcnQgeyBjaHVuayB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgQmFubmVyIGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvYmFubmVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uL2Jhc2UvbG9hZGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBsb2dnZWRJbj86IGJvb2xlYW47XG4gIHNldEZpbHRlcj86IEZ1bmN0aW9uO1xuICBsaW1pdD86IG51bWJlcjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBkYXRhOiBJUGVyZm9ybWVyW107XG4gIHRvdGFsPzogbnVtYmVyO1xuICBzdWNjZXNzPzogYm9vbGVhbjtcbiAgYmFubmVycz86IFJlY29yZDxzdHJpbmcsIElCYW5uZXJbXT47XG4gIHNlYXJjaGluZz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIG9uTGlrZT86IEZ1bmN0aW9uO1xuICBpc1BhZ2U/OiBib29sZWFuO1xuICBwbGFjZWhvbGRlckF2YXRhclVybD86IHN0cmluZztcbiAgcmVuZGVyPzogKHBlcmZvcm1lcjogSVBlcmZvcm1lcikgPT4gUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCByZW5kZXJUaXRsZSA9IChnZW5kZXI6IEdFTkRFUiwgbmFtZTogc3RyaW5nKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicC10aXRsZVwiPlxuICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19PntuYW1lfTwvc3Bhbj5cbiAgICB7Z2VuZGVyID09PSAnbWFsZScgPyAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbnRpY29uXCI+XG4gICAgICAgIDxNYWxlU2lnbkljb24gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICApIDogZ2VuZGVyID09PSAnZmVtYWxlJyA/IChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFudGljb25cIj5cbiAgICAgICAgPEZlbWFsZVNpZ25JY29uIC8+XG4gICAgICA8L3NwYW4+XG4gICAgKSA6IChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFudGljb25cIj5cbiAgICAgICAgPFRyYW5zZ2VuZGVySWNvbiAvPlxuICAgICAgPC9zcGFuPlxuICAgICl9XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgcmVuZGVyVGFncyA9ICh0YWdzOiBzdHJpbmdbXSkgPT4gKFxuICA8U3BhY2UgY2xhc3NOYW1lPVwidGFnc1wiIHdyYXAgc2l6ZT17WzUsIDJdfT5cbiAgICB7dGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17eyBwYXRobmFtZTogJy90YWcnLCBxdWVyeTogeyB0YWdzOiB0YWcgfSB9fVxuICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgYXM9e2AvdGFnLyR7dGFnfWB9XG4gICAgICA+XG4gICAgICAgIDxhPlxuICAgICAgICAgICNcbiAgICAgICAgICB7dGFnfVxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgKSl9XG4gIDwvU3BhY2U+XG4pO1xuXG5pbnRlcmZhY2UgSUdyaWRDYXJkIHtcbiAgcGVyZm9ybWVyOiBJUGVyZm9ybWVyO1xuICBsb2dnZWRJbjogYm9vbGVhbjtcbiAgb25MaWtlOiBhbnk7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBwbGFjZWhvbGRlckF2YXRhclVybDogc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IEdyaWRDYXJkID0gKHtcbiAgcGVyZm9ybWVyLFxuICBsb2dnZWRJbixcbiAgb25MaWtlLFxuICBjbGFzc05hbWUsXG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsXG59OiBJR3JpZENhcmQpID0+IHtcbiAgY29uc3QgeyBpc09ubGluZSwgc3RyZWFtaW5nU3RhdHVzIH0gPSBwZXJmb3JtZXI7XG4gIGNvbnN0IHN0YXR1c0NsYXNzTmFtZXMgPSBbJ3Atc3RhdHVzJ107XG4gIGxldCBzdGF0dXMgPSAnb2ZmbGluZSc7XG4gIGlmIChpc09ubGluZSkge1xuICAgIHN3aXRjaCAoc3RyZWFtaW5nU3RhdHVzKSB7XG4gICAgICBjYXNlICdwcml2YXRlJzpcbiAgICAgICAgc3RhdHVzQ2xhc3NOYW1lcy5wdXNoKCdwcml2YXRlJyk7XG4gICAgICAgIHN0YXR1cyA9ICdwcml2YXRlIGNoYXQnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2dyb3VwJzpcbiAgICAgICAgc3RhdHVzQ2xhc3NOYW1lcy5wdXNoKCdncm91cCcpO1xuICAgICAgICBzdGF0dXMgPSAnZ3JvdXAgY2hhdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHVibGljJzpcbiAgICAgICAgc3RhdHVzID0gJ2xpdmUnO1xuICAgICAgICBzdGF0dXNDbGFzc05hbWVzLnB1c2goJ29ubGluZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0YXR1cyA9ICdvbmxpbmUnO1xuICAgICAgICBzdGF0dXNDbGFzc05hbWVzLnB1c2goJ29ubGluZScpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3RhdHVzQ2xhc3NOYW1lcy5wdXNoKCdvZmZsaW5lJyk7XG4gIH1cbiAgY29uc3QgZGVmYXVsdFBsYWNlaG9sZGVyQXZhdGFyVXJsID0gcGxhY2Vob2xkZXJBdmF0YXJVcmwgfHwgJy9kZWZhdWx0LXVzZXItaWNvbi5wbmcnO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQuR3JpZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtwZXJmb3JtZXIuX2lkfSBob3ZlcmFibGU9e2ZhbHNlfT5cbiAgICAgIHtwZXJmb3JtZXIuaXNCbG9ja2VkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja2VkLXRodW1iXCI+XG4gICAgICAgICAgPExvY2tPdXRsaW5lZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8TGlua1xuICAgICAgICBocmVmPXt7XG4gICAgICAgICAgcGF0aG5hbWU6ICcvc3RyZWFtJyxcbiAgICAgICAgICBxdWVyeTogeyBwZXJmb3JtZXI6IEpTT04uc3RyaW5naWZ5KHBlcmZvcm1lcikgfVxuICAgICAgICB9fVxuICAgICAgICBhcz17YC9wcm9maWxlLyR7cGVyZm9ybWVyLnVzZXJuYW1lfWB9XG4gICAgICA+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWF2YXRhclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1wZXJmb3JtZXJcIlxuICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgIHR5cGVvZiBwZXJmb3JtZXIuYXZhdGFyID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICYmIHBlcmZvcm1lci5hdmF0YXIubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgPyBwZXJmb3JtZXIuYXZhdGFyXG4gICAgICAgICAgICAgICAgICA6IGRlZmF1bHRQbGFjZWhvbGRlckF2YXRhclVybFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdGF0dXNDbGFzc05hbWVzLmpvaW4oJyAnKX0+e3N0YXR1c308L3NwYW4+XG4gICAgICAgICAgICB7cmVuZGVyVGl0bGUocGVyZm9ybWVyLmdlbmRlciwgcGVyZm9ybWVyLnVzZXJuYW1lKX1cbiAgICAgICAgICAgIHtwZXJmb3JtZXI/LnN0YXRzPy52aWV3cyA+IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtdmlld2VyXCI+XG4gICAgICAgICAgICAgICAgPEV5ZU91dGxpbmVkIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3BlcmZvcm1lci5zdGF0cy52aWV3c308L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm90dG9tXCI+XG4gICAgICAgIDxSb3cganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPGRpdj57cGVyZm9ybWVyLnRhZ3MgJiYgcmVuZGVyVGFncyhwZXJmb3JtZXIudGFncyl9PC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW5cbiAgICAgICAgICAgICAgaGlkZGVuPXshbG9nZ2VkSW59XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtZmF2b3JpdGVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkxpa2UocGVyZm9ybWVyKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BlcmZvcm1lci5pc0Zhdm9yaXRlID8gKFxuICAgICAgICAgICAgICAgIDxIZWFydEZpbGxlZCBjbGFzc05hbWU9XCJpY29uXCIgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBjbGFzc05hbWU9XCJpY29uXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1tZVwiPntwZXJmb3JtZXI/LmFib3V0TWV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NhcmQuR3JpZD5cbiAgKTtcbn07XG5cbmNvbnN0IFBlcmZvcm1lckdyaWQgPSAoe1xuICBkYXRhLFxuICBzZWFyY2hpbmcsXG4gIHN1Y2Nlc3MsXG4gIHRpdGxlLFxuICBvbkxpa2UsXG4gIGxvZ2dlZEluLFxuICBpc1BhZ2UsXG4gIG9mZnNldCxcbiAgbGltaXQsXG4gIHRvdGFsLFxuICBzZXRGaWx0ZXIsXG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsLFxuICBiYW5uZXJzLFxuICByZW5kZXJcbn06IElQcm9wcykgPT4ge1xuICBjb25zdCB7IHRvcEJhbm5lcnMsIHJpZ2h0QmFubmVycywgYm90dG9tQmFubmVycyB9ID0gYmFubmVycztcbiAgY29uc3QgUm93R3JpZCA9ICh7IGRhdGFTb3VyY2UgfTogeyBkYXRhU291cmNlOiBJUGVyZm9ybWVyW10gfSkgPT4gKFxuICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgIHtkYXRhU291cmNlXG4gICAgICAgICYmIGRhdGFTb3VyY2UubGVuZ3RoID4gMFxuICAgICAgICAmJiBkYXRhU291cmNlLm1hcCgocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSA9PiAoXG4gICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICBwbGFjZWhvbGRlckF2YXRhclVybD17cGxhY2Vob2xkZXJBdmF0YXJVcmx9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm94XCJcbiAgICAgICAgICAgIGtleT17cGVyZm9ybWVyLl9pZH1cbiAgICAgICAgICAgIHBlcmZvcm1lcj17cGVyZm9ybWVyfVxuICAgICAgICAgICAgbG9nZ2VkSW49e2xvZ2dlZElufVxuICAgICAgICAgICAgb25MaWtlPXtvbkxpa2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgPC9Sb3c+XG4gICk7XG5cbiAgY29uc3QgcmVuZGVyR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gZGF0YTtcbiAgICBpZiAobGVuZ3RoIDw9IDEyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAge3JpZ2h0QmFubmVycyAmJiByaWdodEJhbm5lcnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxDb2wgbGc9ezE2fSBtZD17MTZ9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgIHtkYXRhXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGEubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhLm1hcCgocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckF2YXRhclVybD17cGxhY2Vob2xkZXJBdmF0YXJVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm94IHBlcmZvcm1lci1ib3gtNC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGVyZm9ybWVyLl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmZvcm1lcj17cGVyZm9ybWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VkSW49e2xvZ2dlZElufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25MaWtlPXsoKSA9PiBvbkxpa2UocGVyZm9ybWVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgbGc9ezh9IG1kPXs4fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXM9XCJyaWdodC1iYW5uZXJzXCJcbiAgICAgICAgICAgICAgICAgIGJhbm5lcnM9e3JpZ2h0QmFubmVyc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgJiYgZGF0YS5sZW5ndGggPiAwXG4gICAgICAgICAgICAmJiBkYXRhLm1hcCgocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkQ2FyZFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm94XCJcbiAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lci5faWR9XG4gICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgbG9nZ2VkSW49e2xvZ2dlZElufVxuICAgICAgICAgICAgICAgIG9uTGlrZT17KCkgPT4gb25MaWtlKHBlcmZvcm1lcil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvUm93PlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGxlbmd0aCA+IDEyICYmIGxlbmd0aCA8PSAyNCkge1xuICAgICAgY29uc3QgZGF0YUNodW5rID0gY2h1bmsoZGF0YSwgMTIpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7cmlnaHRCYW5uZXJzICYmIHJpZ2h0QmFubmVycy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFJvdyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezE2fSBtZD17MTZ9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YUNodW5rWzBdXG4gICAgICAgICAgICAgICAgICAgICAgJiYgZGF0YUNodW5rWzBdLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMF0ubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckF2YXRhclVybD17cGxhY2Vob2xkZXJBdmF0YXJVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3ggcGVyZm9ybWVyLWJveC00LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lci5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmZvcm1lcj17cGVyZm9ybWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uTGlrZT17KCkgPT4gb25MaWtlKHBlcmZvcm1lcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBsZz17OH0gbWQ9ezh9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgICB7cmlnaHRCYW5uZXJzICYmIHJpZ2h0QmFubmVycy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXM9XCJyaWdodC1iYW5uZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICBiYW5uZXJzPXtyaWdodEJhbm5lcnN9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMV19IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChsZW5ndGggPiAyNCAmJiBsZW5ndGggPD0gMzYpIHtcbiAgICAgIGNvbnN0IGRhdGFDaHVuayA9IGNodW5rKGRhdGEsIDEyKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzBdfSAvPlxuICAgICAgICAgIHtyaWdodEJhbm5lcnMgJiYgcmlnaHRCYW5uZXJzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgIDxDb2wgeGw9ezE2fSBsZz17MTh9IG1kPXsxOH0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAge2RhdGFDaHVua1sxXVxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMV0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMV0ubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3ggcGVyZm9ybWVyLWJveC00LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwZXJmb3JtZXIuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxpa2U9eygpID0+IG9uTGlrZShwZXJmb3JtZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4bD17OH0gbGc9ezZ9IG1kPXs2fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXM9XCJyaWdodC1iYW5uZXJzXCJcbiAgICAgICAgICAgICAgICAgIGJhbm5lcnM9e3JpZ2h0QmFubmVyc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzFdfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzJdfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChsZW5ndGggPiAzNikge1xuICAgICAgY29uc3QgZGF0YUNodW5rID0gY2h1bmsoZGF0YSwgMTIpO1xuICAgICAgY29uc3QgbGFzdERhdGFDaHVuayA9IGRhdGFDaHVuay5zbGljZSgzKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzBdfSAvPlxuICAgICAgICAgIHtyaWdodEJhbm5lcnMgJiYgcmlnaHRCYW5uZXJzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgIDxDb2wgeGw9ezE2fSBsZz17MTh9IG1kPXsxOH0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAge2RhdGFDaHVua1sxXVxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMV0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMV0ubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3ggcGVyZm9ybWVyLWJveC00LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwZXJmb3JtZXIuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxpa2U9eygpID0+IG9uTGlrZShwZXJmb3JtZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4bD17OH0gbGc9ezZ9IG1kPXs2fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxCYW5uZXJcbiAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZXM9XCJyaWdodC1iYW5uZXJzXCJcbiAgICAgICAgICAgICAgICAgIGJhbm5lcnM9e3JpZ2h0QmFubmVyc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzFdfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFJvd0dyaWQgZGF0YVNvdXJjZT17ZGF0YUNodW5rWzJdfSAvPlxuICAgICAgICAgIHtsYXN0RGF0YUNodW5rLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICYmIGxhc3REYXRhQ2h1bmsubWFwKCh2KSA9PiAoXG4gICAgICAgICAgICAgIDxSb3dHcmlkIGtleT17Z2VuZXJhdGVVdWlkKCl9IGRhdGFTb3VyY2U9e3Z9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPD48Lz47XG4gIH07XG5cbiAgY29uc3QgYWN0aW9ucyA9IHNldEZpbHRlciAmJiB0b3RhbCA+IDBcbiAgICA/IFtcbiAgICAgIHRvdGFsID4gbGltaXQgJiYgKFxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIGRpc2FibGVkPXtzZWFyY2hpbmd9XG4gICAgICAgICAgY3VycmVudD17TWF0aC5yb3VuZChvZmZzZXQgLyBsaW1pdCkgKyAxfVxuICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cbiAgICAgICAgICB0b3RhbD17dG90YWx9XG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBvbkNoYW5nZT17KHBhZ2UpID0+IHNldEZpbHRlcignb2Zmc2V0JywgKHBhZ2UgLSAxKSAqIGxpbWl0KX1cbiAgICAgICAgICBzaG93U2l6ZUNoYW5nZXI9e2ZhbHNlfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIF1cbiAgICA6IFtdO1xuXG4gIGlmIChyZW5kZXIpIHtcbiAgICAvKipcbiAgICAgKiBwbGFjZWhvbGRlckF2YXRhclVybCBwcm9wc1xuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZFxuICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItZ3JpZFwiXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICBob3ZlcmFibGU9e2ZhbHNlfVxuICAgICAgICBib2R5U3R5bGU9e3sgcGFkZGluZzogJzAnIH19XG4gICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICA+XG4gICAgICAgIDxMb2FkZXIgc3Bpbm5pbmc9e3NlYXJjaGluZ30gLz5cbiAgICAgICAge2RhdGEubGVuZ3RoID4gMCAmJiBkYXRhLm1hcCgocGVyZm9ybWVyKSA9PiByZW5kZXIocGVyZm9ybWVyKSl9XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc1BhZ2UgJiYgdG9wQmFubmVycz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCYW5uZXJcbiAgICAgICAgICBiYW5uZXJzPXt0b3BCYW5uZXJzfVxuICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPENhcmRcbiAgICAgICAgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWdyaWRcIlxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgaG92ZXJhYmxlPXtmYWxzZX1cbiAgICAgICAgYm9keVN0eWxlPXt7IHBhZGRpbmc6ICcwJyB9fVxuICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgPlxuICAgICAgICA8TG9hZGVyIHNwaW5uaW5nPXtzZWFyY2hpbmd9IC8+XG4gICAgICAgIHtzdWNjZXNzXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgICAgJiYgKHRvdGFsID4gMCA/IChcbiAgICAgICAgICAgIGlzUGFnZSA/IChcbiAgICAgICAgICAgICAgcmVuZGVyR3JpZCgpXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBkYXRhLm1hcCgocGVyZm9ybWVyKSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lcj8uX2lkfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJBdmF0YXJVcmw9e3BsYWNlaG9sZGVyQXZhdGFyVXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWJveFwiXG4gICAgICAgICAgICAgICAgICBwZXJmb3JtZXI9e3BlcmZvcm1lcn1cbiAgICAgICAgICAgICAgICAgIGxvZ2dlZEluPXtsb2dnZWRJbn1cbiAgICAgICAgICAgICAgICAgIG9uTGlrZT17KHA6IElQZXJmb3JtZXIpID0+IG9uTGlrZShwKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC1jYXJkLWhlYWRcIj5ObyBtb2RlbCBmb3VuZC48L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgIDwvQ2FyZD5cbiAgICAgIHtpc1BhZ2UgJiYgYm90dG9tQmFubmVycz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCYW5uZXJcbiAgICAgICAgICBiYW5uZXJzPXtib3R0b21CYW5uZXJzfVxuICAgICAgICAgIHN0eWxlSW1hZ2U9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblBlcmZvcm1lckdyaWQuZGVmYXVsdFByb3BzID0ge1xuICBsb2dnZWRJbjogZmFsc2UsXG4gIHNldEZpbHRlcjogbnVsbCxcbiAgbGltaXQ6IDAsXG4gIG9mZnNldDogMCxcbiAgdG90YWw6IDAsXG4gIHN1Y2Nlc3M6IGZhbHNlLFxuICBzZWFyY2hpbmc6IGZhbHNlLFxuICB0aXRsZTogJycsXG4gIG9uTGlrZTogbnVsbCxcbiAgcmVuZGVyOiBudWxsLFxuICBpc1BhZ2U6IGZhbHNlLFxuICBiYW5uZXJzOiB7fSxcbiAgcGxhY2Vob2xkZXJBdmF0YXJVcmw6ICcvbm8tYXZhdGFyLnBuZydcbn07XG5cbmNvbnN0IGJhbm5lclNlbGVjdGVyID0gKHN0YXRlKSA9PiBzdGF0ZS5iYW5uZXIubGlzdEJhbm5lcnMuZGF0YTtcbmNvbnN0IGZpbHRlckJhbm5lciA9IGNyZWF0ZVNlbGVjdG9yKGJhbm5lclNlbGVjdGVyLCAoYmFubmVycykgPT4ge1xuICBpZiAoIWJhbm5lcnMubGVuZ3RoKSByZXR1cm4ge307XG5cbiAgcmV0dXJuIHtcbiAgICB0b3BCYW5uZXJzOiBiYW5uZXJzLmZpbHRlcigoYikgPT4gYi5wb3NpdGlvbiA9PT0gJ3RvcCcpLFxuICAgIHJpZ2h0QmFubmVyczogYmFubmVycy5maWx0ZXIoKGIpID0+IGIucG9zaXRpb24gPT09ICdyaWdodCcpLFxuICAgIGJvdHRvbUJhbm5lcnM6IGJhbm5lcnMuZmlsdGVyKChiKSA9PiBiLnBvc2l0aW9uID09PSAnYm90dG9tJylcbiAgfTtcbn0pO1xuY29uc3QgbWFwU3RhdGVzID0gKHN0YXRlOiBhbnkpID0+ICh7XG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsOiBzdGF0ZS51aS5wbGFjZWhvbGRlckF2YXRhclVybCxcbiAgYmFubmVyczogZmlsdGVyQmFubmVyKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVzKShQZXJmb3JtZXJHcmlkKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFJvdywgQ29sLCBEcmF3ZXIsIEJ1dHRvbiwgTWVudSwgU3BhY2Vcbn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBGaWx0ZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IElDb3VudHJpZXMsIElQZXJmb3JtZXJDYXRlZ29naWVzIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgJy4vcGVyZm9ybWVyLWZpbHRlci5sZXNzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNvdW50cmllcz86IElDb3VudHJpZXNbXTtcbiAgY2F0ZWdvcmllcz86IElQZXJmb3JtZXJDYXRlZ29naWVzW107XG4gIC8vIG9mZnNldD86IG51bWJlcjtcbiAgLy8gbGltaXQ/OiBudW1iZXI7XG4gIGdlbmRlcj86IHN0cmluZztcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7XG4gIGNvdW50cnk/OiBzdHJpbmc7XG4gIHNldEZpbHRlcjogRnVuY3Rpb247XG4gIGNsZWFyRmlsdGVyOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBQZXJmb3JtZXJGaWx0ZXIgPSAoe1xuICBjb3VudHJpZXMsXG4gIGNhdGVnb3JpZXMsXG4gIHNldEZpbHRlcixcbiAgY2F0ZWdvcnksXG4gIGNvdW50cnksXG4gIGdlbmRlcixcbiAgY2xlYXJGaWx0ZXJcbn06IElQcm9wcykgPT4ge1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZE1lbnVLZXlzLCBzZXRTZWxlY3RlZE1lbnVLZXlzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtsYXN0U2VsZWN0ZWRNZW51S2V5LCBzZXRMYXN0U2VsZWN0ZWRNZW51S2V5XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3Qgb25PcGVuQ2hhbmdlID0gKGtleXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgY29uc3QgbWVudUtleXMgPSBrZXlzLmZpbHRlcigoa2V5KSA9PiBrZXkgIT09IGxhc3RTZWxlY3RlZE1lbnVLZXkpO1xuICAgIHNldFNlbGVjdGVkTWVudUtleXMobWVudUtleXMpO1xuICAgIHNldExhc3RTZWxlY3RlZE1lbnVLZXkobWVudUtleXNbMF0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Um93IGFsaWduPVwibWlkZGxlXCIgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWZpbHRlclwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgIDxDb2w+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWNvbj17PEZpbHRlck91dGxpbmVkIC8+fVxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLThcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZpbHRlclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxTcGFjZSBjbGFzc05hbWU9XCJhbnQtc3BhY2Utd3JhcFwiPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlBvcHVsYXIgRmlsdGVyOjwvc3Bhbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17Y2xlYXJGaWx0ZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhnZW5kZXIgPT09ICcnID8gJ2FjdGl2ZScgOiAnJyl9XG4gICAgICAgICAgICAgIHR5cGU9XCJkYXNoZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBbGxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoJ2dlbmRlcicsIGdlbmRlciA9PT0gJ2ZlbWFsZScgPyAnJyA6ICdmZW1hbGUnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGdlbmRlciA9PT0gJ2ZlbWFsZScgPyAnYWN0aXZlJyA6ICcnKX1cbiAgICAgICAgICAgICAgdHlwZT1cImRhc2hlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZlbWFsZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcignZ2VuZGVyJywgZ2VuZGVyID09PSAndHJhbnNnZW5kZXInID8gJycgOiAndHJhbnNnZW5kZXInKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGdlbmRlciA9PT0gJ3RyYW5zZ2VuZGVyJyA/ICdhY3RpdmUnIDogJycpfVxuICAgICAgICAgICAgICB0eXBlPVwiZGFzaGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVHJhbnNnZW5kZXJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoJ2dlbmRlcicsIGdlbmRlciA9PT0gJ21hbGUnID8gJycgOiAnbWFsZScpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoZ2VuZGVyID09PSAnbWFsZScgPyAnYWN0aXZlJyA6ICcnKX1cbiAgICAgICAgICAgICAgdHlwZT1cImRhc2hlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1hbGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8RHJhd2VyXG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX1cbiAgICAgICAgdGl0bGU9eyhcbiAgICAgICAgICA8Um93IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ249XCJtaWRkbGVcIj5cbiAgICAgICAgICAgIDxDb2w+RmlsdGVyIGJ5OjwvQ29sPlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbGVhckZpbHRlcigpfVxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDbGVhciBGaWx0ZXJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgey8qIFNlbGVjdCBtdWx0aXBsZSBjYXRlZ29yeSAqL31cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSaWdodDogMCB9fVxuICAgICAgICAgIG11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgICBvblNlbGVjdD17KHsga2V5IH0pID0+IHNldEZpbHRlcignY2F0ZWdvcnknLCBrZXkpfVxuICAgICAgICAgIG9uRGVzZWxlY3Q9eygpID0+IHNldEZpbHRlcignY2F0ZWdvcnknLCAnJyl9XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbY2F0ZWdvcnldfVxuICAgICAgICAgIG9wZW5LZXlzPXtzZWxlY3RlZE1lbnVLZXlzfVxuICAgICAgICAgIG9uT3BlbkNoYW5nZT17b25PcGVuQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnUuU3ViTWVudSB0aXRsZT1cIkNhdGVnb3J5XCIga2V5PVwiY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgJiYgY2F0ZWdvcmllcy5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17Yy5faWR9PntjLm5hbWV9PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICA8L01lbnU+XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IDAgfX1cbiAgICAgICAgICBvblNlbGVjdD17KHsga2V5IH0pID0+IHNldEZpbHRlcignZ2VuZGVyJywga2V5KX1cbiAgICAgICAgICBvbkRlc2VsZWN0PXsoKSA9PiBzZXRGaWx0ZXIoJ2dlbmRlcicsICcnKX1cbiAgICAgICAgICBzZWxlY3RlZEtleXM9e1tnZW5kZXJdfVxuICAgICAgICAgIG9wZW5LZXlzPXtzZWxlY3RlZE1lbnVLZXlzfVxuICAgICAgICAgIG9uT3BlbkNoYW5nZT17b25PcGVuQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnUuU3ViTWVudSB0aXRsZT1cIkdlbmRlclwiIGtleT1cImdlbmRlclwiPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJmZW1hbGVcIj5GZW1hbGU8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwidHJhbnNnZW5kZXJcIj5UcmFuc2dlbmRlcjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtYWxlXCI+TWFsZTwvTWVudS5JdGVtPlxuICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICA8L01lbnU+XG4gICAgICAgIHsvKiBTZWxlY3QgbXVsdGlwbGUgY291bnRyeSAqL31cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSaWdodDogMCB9fVxuICAgICAgICAgIG11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgICBvblNlbGVjdD17KHsga2V5IH0pID0+IHNldEZpbHRlcignY291bnRyeScsIGtleSl9XG4gICAgICAgICAgb25EZXNlbGVjdD17KCkgPT4gc2V0RmlsdGVyKCdjb3VudHJ5JywgJycpfVxuICAgICAgICAgIHNlbGVjdGVkS2V5cz17W2NvdW50cnldfVxuICAgICAgICAgIG9wZW5LZXlzPXtzZWxlY3RlZE1lbnVLZXlzfVxuICAgICAgICAgIG9uT3BlbkNoYW5nZT17b25PcGVuQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnUuU3ViTWVudSB0aXRsZT1cIkNvdW50cnlcIiBrZXk9XCJjb3VudHJ5XCI+XG4gICAgICAgICAgICB7Y291bnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgJiYgY291bnRyaWVzLm1hcCgoYykgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtjLm5hbWV9PntjLm5hbWV9PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICA8L01lbnU+XG4gICAgICA8L0RyYXdlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5QZXJmb3JtZXJGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBjb3VudHJpZXM6IFtdLFxuICBjYXRlZ29yaWVzOiBbXSxcbiAgLy8gb2Zmc2V0OiAwLFxuICAvLyBsaW1pdDogMCxcbiAgZ2VuZGVyOiAnJyxcbiAgY2F0ZWdvcnk6ICcnLFxuICBjb3VudHJ5OiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVyZm9ybWVyRmlsdGVyO1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlLCBmb3JtYXQgPSAnREQvTU0vWVlZWSBISDptbTpzcycpIHtcbiAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlckR1cmF0aW9uKGR1cmF0aW9uOiBudW1iZXIsIGZvcm1hdCA9ICdISDptbScpIHtcbiAgcmV0dXJuIG1vbWVudFxuICAgIC51dGMobW9tZW50LmR1cmF0aW9uKGR1cmF0aW9uLCAnbWlsbGlzZWNvbmRzJykuYXNNaWxsaXNlY29uZHMoKSlcbiAgICAuZm9ybWF0KGZvcm1hdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFnZShkYXRlOiBzdHJpbmcsIGZvcm1hdCA9ICdNTU1NIERELCBZWVlZJykge1xuICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChmb3JtYXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlKGQ6IHN0cmluZykge1xuICBpZiAoIWQpIHJldHVybiAnJztcbiAgY29uc3QgYWdlID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gbmV3IERhdGUoZCkuZ2V0RnVsbFllYXIoKTtcbiAgcmV0dXJuIGFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdER1cmF0aW9uKHM6IG51bWJlcikge1xuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IocyAvIDM2MDApO1xuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigocyAtIGhvdXJzICogMzYwMCkgLyA2MCk7XG4gIGNvbnN0IHNlY29uZHMgPSBzIC0gaG91cnMgKiAzNjAwIC0gbWludXRlcyAqIDYwO1xuICByZXR1cm4gYCR7aG91cnMgPCAxMCA/ICcwJyA6ICcnfSR7aG91cnN9OiR7XG4gICAgbWludXRlcyA8IDEwID8gJzAnIDogJydcbiAgfSR7bWludXRlc306JHtzZWNvbmRzIDwgMTAgPyAnMCcgOiAnJ30ke3NlY29uZHN9YDtcbn1cbiIsImltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFJjRmlsZSB9IGZyb20gJ2FudGQvbGliL3VwbG9hZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiZWZvcmVBdmF0YXJVcGxvYWQoZmlsZTogUmNGaWxlKTogYm9vbGVhbiB7XG4gIGNvbnN0IGV4dCA9IGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGlzSW1hZ2VBY2NlcHQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JTUFHRV9BQ0NQRVRcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoKGl0ZW06IHN0cmluZykgPT4gaXRlbS50cmltKCkpXG4gICAgLmluZGV4T2YoYC4ke2V4dH1gKTtcbiAgaWYgKGlzSW1hZ2VBY2NlcHQgPT09IC0xKSB7XG4gICAgbWVzc2FnZS5lcnJvcihgWW91IGNhbiBvbmx5IHVwbG9hZCAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lNQUdFX0FDQ1BFVH0gZmlsZSFgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVhJTVVNX1NJWkVfVVBMT0FEX0FWQVRBUiB8fCAyKTtcbiAgaWYgKCFpc0x0Mk0pIHtcbiAgICBtZXNzYWdlLmVycm9yKFxuICAgICAgYEltYWdlIG11c3Qgc21hbGxlciB0aGFuICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFYSU1VTV9TSVpFX1VQTE9BRF9BVkFUQVIgfHwgMn1NQiFgXG4gICAgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vaW50ZXJuZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWR1eCc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vbGF5b3V0JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0nO1xuIiwiY29uc3QgSU5URVJORVRfQ0hFQ0tfVVJMID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbSc7XG5cbmV4cG9ydCBjb25zdCBpc0hhc0ludGVybmV0Q29ubmVjdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChJTlRFUk5FVF9DSEVDS19VUkwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGUnLFxuICAgICAgICBQcmFnbWE6ICduby1jYWNoZScsXG4gICAgICAgIEV4cGlyZXM6IDBcbiAgICAgIH0gYXMgYW55XG4gICAgfSk7XG4gICAgaWYgKFxuICAgICAgcmVzLnN0YXR1cyA9PT0gNDA0XG4gICAgICB8fCByZXMuc3RhdHVzID09PSA0MDFcbiAgICAgIHx8IHJlcy5zdGF0dXMgPT09IDQwM1xuICAgICAgfHwgcmVzLnN0YXR1cyA9PT0gNTAwXG4gICAgICB8fCAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8PSAzMDApXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coZXhjZXB0aW9uKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGZvcm1JdGVtTGF5b3V0ID0ge1xuICBsYWJlbENvbDoge1xuICAgIHhzOiB7XG4gICAgICBzcGFuOiAyNFxuICAgIH0sXG4gICAgc206IHtcbiAgICAgIHNwYW46IDEyXG4gICAgfVxuICB9LFxuICB3cmFwcGVyQ29sOiB7XG4gICAgeHM6IHtcbiAgICAgIHNwYW46IDI0XG4gICAgfSxcbiAgICBzbToge1xuICAgICAgc3BhbjogMTJcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0YWlsRm9ybUl0ZW1MYXlvdXQgPSB7XG4gIHdyYXBwZXJDb2w6IHtcbiAgICB4czoge1xuICAgICAgc3BhbjogMjQsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9LFxuICAgIHNtOiB7XG4gICAgICBzcGFuOiAxNixcbiAgICAgIG9mZnNldDogMFxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb2xvciA9IHtcbiAgcHJpbWFyeUNvbG9yOiAnI2ZmMDA2NicsXG4gIHN1Y2Nlc3NDb2xvcjogJyMyZmI1MmQnLFxuICB3aGl0ZUNvbG9yOiAnI2ZmZmZmZidcbn07XG5cbmV4cG9ydCB0eXBlIEJyZWFrcG9pbnQgPSAneHhsJyB8ICd4bCcgfCAnbGcnIHwgJ21kJyB8ICdzbScgfCAneHMnO1xuZXhwb3J0IHR5cGUgQnJlYWtwb2ludE1hcCA9IFBhcnRpYWw8UmVjb3JkPEJyZWFrcG9pbnQsIHN0cmluZz4+O1xuIiwiZXhwb3J0IGNvbnN0IHZhbGlkYXRlTWVzc2FnZXMgPSB7XG4gIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCEnLFxuICB0eXBlczoge1xuICAgIGVtYWlsOiAnTm90IGEgdmFsaWRhdGUgZW1haWwhJyxcbiAgICBudW1iZXI6ICdOb3QgYSB2YWxpZGF0ZSBudW1iZXIhJ1xuICB9LFxuICBudW1iZXI6IHtcbiAgICByYW5nZTogJ011c3QgYmUgYmV0d2VlbiBtaW4gYW5kIG1heCdcbiAgfVxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQge1xuICByZWR1Y2UsIGlzQXJyYXksIGlzRW1wdHksIGZsYXR0ZW5cbn0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQWN0aW9uIGFzIFJlZHV4Q3JlYXRlQWN0aW9uLFxuICBoYW5kbGVBY3Rpb25zIGFzIGhhbmRsZVJlZHV4QWN0aW9ucyxcbiAgQWN0aW9uXG59IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25GdW5jdGlvbjE8VDEsIFI+ID0gKHQxPzogVDEpID0+IFI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uRnVuY3Rpb248UGF5bG9hZD5cbiAgZXh0ZW5kcyBBY3Rpb25GdW5jdGlvbjE8UGF5bG9hZCwgQWN0aW9uPFBheWxvYWQ+PiB7XG4gIGlzOiAodHlwZTogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb248UGF5bG9hZCA9IGFueT4odHlwZTogc3RyaW5nKTogQWN0aW9uRnVuY3Rpb248UGF5bG9hZD4ge1xuICBjb25zdCBhY3Rpb24gPSBSZWR1eENyZWF0ZUFjdGlvbjxQYXlsb2FkPih0eXBlKSBhcyBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPjtcbiAgYWN0aW9uLmlzID0gKGFUeXBlOiBzdHJpbmcpID0+IGFjdGlvbi50b1N0cmluZygpID09PSBhVHlwZTtcbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5mdW5jdGlvbiBjcmVhdGVBc3luY0FjdGlvbihhY3Rpb246IHN0cmluZywgdHlwZTogc3RyaW5nKTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBbYWN0aW9uXTogY3JlYXRlQWN0aW9uKHR5cGUpLFxuICAgIFtgJHthY3Rpb259U3VjY2Vzc2BdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIFtgJHthY3Rpb259RmFpbGBdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fRkFJTGApXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jQWN0aW9uczxcbiAgQWN0aW9uRGF0YSA9IGFueSxcbiAgU3VjY2Vzc0RhdGEgPSBhbnksXG4gIEVycm9yRGF0YSA9IEVycm9yXG4+KFxuICB0eXBlOiBzdHJpbmdcbik6IFtcbiAgQWN0aW9uRnVuY3Rpb248QWN0aW9uRGF0YT4sXG4gIEFjdGlvbkZ1bmN0aW9uPFN1Y2Nlc3NEYXRhPixcbiAgQWN0aW9uRnVuY3Rpb248RXJyb3JEYXRhPlxuXSB7XG4gIHJldHVybiBbXG4gICAgY3JlYXRlQWN0aW9uPEFjdGlvbkRhdGE+KHR5cGUpLFxuICAgIGNyZWF0ZUFjdGlvbjxTdWNjZXNzRGF0YT4oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIGNyZWF0ZUFjdGlvbjxFcnJvckRhdGE+KGAke3R5cGV9X0ZBSUxgKVxuICBdO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuZnVuY3Rpb24gaGFuZGxlQWN0aW9ucyhhY3Rpb25zOiBhbnksIGluaXRpYWxTdGF0ZTogYW55KSB7XG4gIHJldHVybiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgcmVkdWNlKFxuICAgICAgYWN0aW9ucyxcbiAgICAgIChyZWR1Y2VyOiBhbnksIGhhbmRsZXIsIGFjdGlvbikgPT4ge1xuICAgICAgICByZWR1Y2VyW2FjdGlvbl0gPSAoc3RhdGU6IGFueSwgYWN0OiBhbnkpID0+IGhhbmRsZXIoc3RhdGUuc2V0KCdhY3Rpb24nLCBhY3Rpb24pLCBhY3QpO1xuICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgIH0sXG4gICAgICB7fVxuICAgICksXG4gICAgaW5pdGlhbFN0YXRlXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXJzKFxuICBzdGF0ZUNvbnRleHQ6IHN0cmluZyxcbiAgcmVkdWNlcnM6IGFueVtdLFxuICBpbml0aWFsU3RhdGU6IGFueSxcbiAgcHJldmVudFJlc2V0dGluZzogYm9vbGVhbiA9IGZhbHNlXG4pOiBhbnkge1xuICByZXR1cm4ge1xuICAgIFtzdGF0ZUNvbnRleHRdOiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgICByZWR1Y2UoXG4gICAgICAgIGZsYXR0ZW4ocmVkdWNlcnMpLFxuICAgICAgICAocmVkdWNlcjogYW55LCBhY3Rpb246IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpc0FycmF5KGFjdGlvbi5vbikpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vbi5mb3JFYWNoKChhY3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZWR1Y2VyW2FjdF0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSByZWR1Y2VyW2FjdGlvbi5vbl0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudFJlc2V0dGluZ1xuICAgICAgICAgID8ge31cbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgIEFQUF9TVEFURV9SRVNFVDogKCkgPT4gaW5pdGlhbFN0YXRlXG4gICAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGluaXRpYWxTdGF0ZVxuICAgIClcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNhZ2FzKHNhZ2FzOiBhbnlbXSk6IGFueVtdIHtcbiAgcmV0dXJuIGZsYXR0ZW4oc2FnYXMpLm1hcCgoc2FnYTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBvbiwgZWZmZWN0ID0gdGFrZUxhdGVzdCwgd29ya2VyIH0gPSBzYWdhO1xuICAgIHJldHVybiBmdW5jdGlvbiogKCkge1xuICAgICAgeWllbGQgZWZmZWN0KG9uLCBmdW5jdGlvbiogKGFjdGlvbjogYW55KSB7XG4gICAgICAgIHlpZWxkIGRlbGF5KDApO1xuICAgICAgICB5aWVsZCB3b3JrZXIoYWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnNBKGNvbnRleHQ6IHN0cmluZywga2V5czogYW55W10gPSBbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgaWYgKGlzRW1wdHkoa2V5cykpIHJldHVybiBzdGF0ZVNlbGVjdG9yO1xuXG4gIHJldHVybiBrZXlzLm1hcCgoa2V5OiBhbnkpID0+IChzdGF0ZTogYW55KSA9PiAoaXNBcnJheShrZXkpXG4gICAgPyBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXRJbihrZXkpXG4gICAgOiBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXQoa2V5KSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSkuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gc2VsZWN0b3JzO1xuICAgIH0sXG4gICAge31cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSlNTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSlba2V5XTtcbiAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgfSxcbiAgICB7fVxuICApO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvbnMsXG4gIGNyZWF0ZVNlbGVjdG9yc0EsXG4gIGhhbmRsZUFjdGlvbnMsXG4gIGNyZWF0ZVJlZHVjZXJzLFxuICBjcmVhdGVTZWxlY3RvcnMsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBjcmVhdGVKU1NlbGVjdG9yc1xufTtcbiIsImV4cG9ydCBjb25zdCB1c2VybmFtZVBhdHRlcm5SdWxlID0ge1xuICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdeW2EtekEtWjAtOV0qJCcpLFxuICBtZXNzYWdlOiAnRG9udCBhbGxvdyBzcGVjaWFsIGNoYXJzIG9yIHNwYWNlJ1xufTtcbiIsImV4cG9ydCBjb25zdCBERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMID0gJy9vZmZsaW5lLnBuZyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QUklWQVRFX0lNQUdFX1VSTCA9ICcvcHJpdmF0ZS5wbmcnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfR1JPVVBfSU1BR0VfVVJMID0gJy9ncm91cC5wbmcnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfT05MSU5FX0lNQUdFX1VSTCA9ICcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdGVyKHN0YXR1czogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHBvc3RlciA9ICcnO1xuICBzd2l0Y2ggKHN0YXR1cykge1xuICAgIGNhc2UgJ3ByaXZhdGUnOlxuICAgICAgcG9zdGVyID0gREVGQVVMVF9QUklWQVRFX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ29mZmxpbmUnOlxuICAgICAgcG9zdGVyID0gREVGQVVMVF9PRkZMSU5FX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3B1YmxpYyc6XG4gICAgICBwb3N0ZXIgPSBERUZBVUxUX09OTElORV9JTUFHRV9VUkw7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdncm91cCc6XG4gICAgICBwb3N0ZXIgPSBERUZBVUxUX0dST1VQX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBwb3N0ZXIgPSBERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHBvc3Rlcjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHVybC5tYXRjaChcbiAgICAgIC8oaHR0cChzKT86XFwvXFwvLik/KHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezIsMjU2fVxcLlthLXpdezIsNn1cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLy89XSopL2dcbiAgICApICE9PSBudWxsXG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVV1aWQgPSAoKSA9PiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMDtcbiAgICBjb25zdCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXN0cikgcmV0dXJuICcnO1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgY29uc3QgdW5pdFByaWNlczogeyB2YWx1ZTogbnVtYmVyLCB0ZXh0OiBhbnkgfVtdID0gW1xuICB7XG4gICAgdmFsdWU6IDE1LFxuICAgIHRleHQ6ICcxNSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMjAsXG4gICAgdGV4dDogJzIwIHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAyNSxcbiAgICB0ZXh0OiAnMjUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDMwLFxuICAgIHRleHQ6ICczMCB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMzUsXG4gICAgdGV4dDogJzM1IHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiA0MCxcbiAgICB0ZXh0OiAnNDAgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDQ1LFxuICAgIHRleHQ6ICc0NSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogNTAsXG4gICAgdGV4dDogJzUwIHRva2VucydcbiAgfVxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDU1LFxuICAvLyAgIHRleHQ6ICc1NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjAsXG4gIC8vICAgdGV4dDogJzYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA2NSxcbiAgLy8gICB0ZXh0OiAnNjUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDcwLFxuICAvLyAgIHRleHQ6ICc3MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNzUsXG4gIC8vICAgdGV4dDogJzc1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4MCxcbiAgLy8gICB0ZXh0OiAnODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDg1LFxuICAvLyAgIHRleHQ6ICc4NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTAsXG4gIC8vICAgdGV4dDogJzkwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA5NSxcbiAgLy8gICB0ZXh0OiAnOTUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDEwMCxcbiAgLy8gICB0ZXh0OiAnMTAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMjAsXG4gIC8vICAgdGV4dDogJzEyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTQwLFxuICAvLyAgIHRleHQ6ICcxNDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDE2MCxcbiAgLy8gICB0ZXh0OiAnMTYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxODAsXG4gIC8vICAgdGV4dDogJzE4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjAwLFxuICAvLyAgIHRleHQ6ICcyMDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDIyMCxcbiAgLy8gICB0ZXh0OiAnMjIwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyNDAsXG4gIC8vICAgdGV4dDogJzI0MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjYwLFxuICAvLyAgIHRleHQ6ICcyNjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDI4MCxcbiAgLy8gICB0ZXh0OiAnMjgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzMDAsXG4gIC8vICAgdGV4dDogJzMwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzIwLFxuICAvLyAgIHRleHQ6ICczMjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDM0MCxcbiAgLy8gICB0ZXh0OiAnMzQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzNjAsXG4gIC8vICAgdGV4dDogJzM2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzgwLFxuICAvLyAgIHRleHQ6ICczODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQwMCxcbiAgLy8gICB0ZXh0OiAnNDAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0MjAsXG4gIC8vICAgdGV4dDogJzQyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDQwLFxuICAvLyAgIHRleHQ6ICc0NDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQ2MCxcbiAgLy8gICB0ZXh0OiAnNDYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0ODAsXG4gIC8vICAgdGV4dDogJzQ4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNTAwLFxuICAvLyAgIHRleHQ6ICc1MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDU1MCxcbiAgLy8gICB0ZXh0OiAnNTUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA2MDAsXG4gIC8vICAgdGV4dDogJzYwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjUwLFxuICAvLyAgIHRleHQ6ICc2NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDcwMCxcbiAgLy8gICB0ZXh0OiAnNzAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3NTAsXG4gIC8vICAgdGV4dDogJzc1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogODAwLFxuICAvLyAgIHRleHQ6ICc4MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDg1MCxcbiAgLy8gICB0ZXh0OiAnODUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA5MDAsXG4gIC8vICAgdGV4dDogJzkwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTUwLFxuICAvLyAgIHRleHQ6ICc5NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDEwMDAsXG4gIC8vICAgdGV4dDogJzEwMDAgdG9rZW5zJ1xuICAvLyB9XG5dO1xuIiwiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICdwYXRoLXRvLXJlZ2V4cCc7XG5pbXBvcnQge1xuICBJU2NoZWR1bGUsIElVc2VyLCBJUGVyZm9ybWVyLCBJU3R1ZGlvXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFNPUlQgfSBmcm9tICdAc2VydmljZXMvYXBpLXJlcXVlc3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSB0byBhIHRyZWUtc3RydWN0dXJlZCBhcnJheS5cbiAqIEBwYXJhbSAgIHthcnJheX0gICAgIGFycmF5ICAgICBUaGUgQXJyYXkgbmVlZCB0byBDb252ZXJ0ZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBpZCAgICAgICAgVGhlIGFsaWFzIG9mIHRoZSB1bmlxdWUgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBwYXJlbnRJZCAgICAgICBUaGUgYWxpYXMgb2YgdGhlIHBhcmVudCBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGNoaWxkcmVuICBUaGUgYWxpYXMgb2YgY2hpbGRyZW4gb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJuICB7YXJyYXl9ICAgIFJldHVybiBhIHRyZWUtc3RydWN0dXJlZCBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5VG9UcmVlKFxuICBhcnJheSxcbiAgaWQgPSAnaWQnLFxuICBwYXJlbnRJZCA9ICdwaWQnLFxuICBjaGlsZHJlbiA9ICdjaGlsZHJlbidcbikge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgaGFzaCA9IHt9O1xuICBjb25zdCBkYXRhID0gY2xvbmVEZWVwKGFycmF5KTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaGFzaFtkYXRhW2luZGV4XVtpZF1dID0gZGF0YVtpbmRleF07XG4gIH0pO1xuXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGhhc2hQYXJlbnQgPSBoYXNoW2l0ZW1bcGFyZW50SWRdXTtcbiAgICBpZiAoaGFzaFBhcmVudCkge1xuICAgICAgIWhhc2hQYXJlbnRbY2hpbGRyZW5dICYmIChoYXNoUGFyZW50W2NoaWxkcmVuXSA9IFtdKTtcbiAgICAgIGhhc2hQYXJlbnRbY2hpbGRyZW5dLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgcGF0aCBtYXRjaGVzIHRoZSByZWdleHAgaWYgdGhlIGxhbmd1YWdlIHByZWZpeCBpcyBpZ25vcmVkLCBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAuXG4gKiBAcGFyYW0gICB7c3RyaW5nfHJlZ2V4cHxhcnJheX0gICAgIHJlZ2V4cCAgICAgU3BlY2lmeSBhIHN0cmluZywgYXJyYXkgb2Ygc3RyaW5ncywgb3IgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgIHBhdGhuYW1lICAgU3BlY2lmeSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJuICB7YXJyYXl8bnVsbH0gICAgICAgICAgICAgIFJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBtYXRjaCBvciBudWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0aE1hdGNoUmVnZXhwKHJlZ2V4cCwgcGF0aG5hbWUpIHtcbiAgcmV0dXJuIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAocmVnZXhwKS5leGVjKHBhdGhuYW1lKTtcbn1cblxuLyoqXG4gKiBJbiBhbiBhcnJheSBvZiBvYmplY3RzLCBzcGVjaWZ5IGFuIG9iamVjdCB0aGF0IHRyYXZlcnNlcyB0aGUgb2JqZWN0cyB3aG9zZSBwYXJlbnQgSUQgbWF0Y2hlcy5cbiAqIEBwYXJhbSAgIHthcnJheX0gICAgIGFycmF5ICAgICBUaGUgQXJyYXkgbmVlZCB0byBDb252ZXJ0ZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBjdXJyZW50ICAgU3BlY2lmeSB0aGUgb2JqZWN0IHRoYXQgbmVlZHMgdG8gYmUgcXVlcmllZC5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIHBhcmVudElkICBUaGUgYWxpYXMgb2YgdGhlIHBhcmVudCBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGlkICAgICAgICBUaGUgYWxpYXMgb2YgdGhlIHVuaXF1ZSBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEByZXR1cm4gIHthcnJheX0gICAgUmV0dXJuIGEga2V5IGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBbmNlc3RvcnMoYXJyYXksIGN1cnJlbnQsIHBhcmVudElkLCBpZCA9ICdpZCcpIHtcbiAgY29uc3QgcmVzdWx0ID0gW2N1cnJlbnRdO1xuICBjb25zdCBoYXNoTWFwID0gbmV3IE1hcCgpO1xuICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiBoYXNoTWFwLnNldChpdGVtW2lkXSwgaXRlbSkpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgY29uc3QgZ2V0UGF0aCA9IChjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBhcmVudElkID0gaGFzaE1hcC5nZXQoY3VycmVudFtpZF0pW3BhcmVudElkXTtcbiAgICBpZiAoY3VycmVudFBhcmVudElkKSB7XG4gICAgICByZXN1bHQucHVzaChoYXNoTWFwLmdldChjdXJyZW50UGFyZW50SWQpKTtcbiAgICAgIGdldFBhdGgoaGFzaE1hcC5nZXQoY3VycmVudFBhcmVudElkKSk7XG4gICAgfVxuICB9O1xuXG4gIGdldFBhdGgoY3VycmVudCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNwb25zZUVycm9yKGRhdGE6IGFueSkge1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLm1lc3NhZ2UpKSB7XG4gICAgY29uc3QgaXRlbSA9IGRhdGEubWVzc2FnZVswXTtcbiAgICBpZiAoIWl0ZW0uY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiBkYXRhLmVycm9yIHx8ICdCYWQgcmVxdWVzdCEnO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhpdGVtLmNvbnN0cmFpbnRzKVswXTtcbiAgfVxuXG4gIC8vIFRPRE8gLSBwYXJzZSBmb3IgbGFuZ2F1Z2Ugb3Igb3RoZXJzXG4gIHJldHVybiB0eXBlb2YgZGF0YS5tZXNzYWdlID09PSAnc3RyaW5nJyA/IGRhdGEubWVzc2FnZSA6ICdCYWQgcmVxdWVzdCEnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gIGlmIChcbiAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzIFBob25lL2kpXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXIoc1BhcmFtKSB7XG4gIGNvbnN0IHNQYWdlVVJMID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgY29uc3Qgc1VSTFZhcmlhYmxlcyA9IHNQYWdlVVJMLnNwbGl0KCcmJyk7XG4gIGxldCBzUGFyYW1ldGVyTmFtZTtcbiAgbGV0IGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNVUkxWYXJpYWJsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzUGFyYW1ldGVyTmFtZSA9IHNVUkxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcblxuICAgIGlmIChzUGFyYW1ldGVyTmFtZVswXSA9PT0gc1BhcmFtKSB7XG4gICAgICByZXR1cm4gc1BhcmFtZXRlck5hbWVbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzUGFyYW1ldGVyTmFtZVsxXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERBWV9PRl9XRUVLID0ge1xuICBtb246ICdNb25kYXknLFxuICB0dWU6ICdUdWVzZGF5JyxcbiAgd2VkOiAnV2VkbmVzZGF5JyxcbiAgdGh1OiAnVGh1cnNkYXknLFxuICBmcmk6ICdGcmlkYXknLFxuICBzYXQ6ICdTYXR1cmRheScsXG4gIHN1bjogJ1N1bmRheSdcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0U2NoZWR1bGUoKSB7XG4gIGNvbnN0IGRlZmF1bHRWYWwgPSB7IHN0YXJ0OiBudWxsLCBlbmQ6IG51bGwsIGNsb3NlZDogdHJ1ZSB9O1xuICByZXR1cm4ge1xuICAgIG1vbjogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgdHVlOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICB3ZWQ6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHRodTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgZnJpOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICBzYXQ6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHN1bjogeyAuLi5kZWZhdWx0VmFsIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTaG93KHNjaGVkdWxlOiBJU2NoZWR1bGUpOiBzdHJpbmcge1xuICBsZXQgd2Vla0RheSA9IHBhcnNlSW50KG1vbWVudCgpLmZvcm1hdCgnZScpLCAxMCk7XG4gIGxldCBpID0gMDtcbiAgbGV0IG5leHRTaG93OiBzdHJpbmc7XG4gIGNvbnN0IHBlcmZvcm1lclNob3dzID0gT2JqZWN0LmtleXMoc2NoZWR1bGUpLmZpbHRlcihcbiAgICAoa2V5KSA9PiAhc2NoZWR1bGVba2V5XS5jbG9zZWRcbiAgKTtcbiAgZG8ge1xuICAgIGNvbnN0IGRhdGUgPSBtb21lbnQoKS5kYXkod2Vla0RheSkuZm9ybWF0KCdkZGQnKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChwZXJmb3JtZXJTaG93cy5pbmRleE9mKGRhdGUpID4gLTEpIHtcbiAgICAgIG5leHRTaG93ID0gZGF0ZTtcbiAgICB9XG4gICAgd2Vla0RheSArPSAxO1xuICAgIGkgKz0gMTtcbiAgfSB3aGlsZSAoaSA8IDcgJiYgIW5leHRTaG93KTtcblxuICBpZiAobmV4dFNob3cpIHtcbiAgICByZXR1cm4gYCR7c2NoZWR1bGVbbmV4dFNob3ddLnN0YXJ0fSAke21vbWVudCgpXG4gICAgICAuZGF5KHdlZWtEYXkgLSAxKVxuICAgICAgLmZvcm1hdCgnREQvTU0vWVlZWScpfWA7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoRGF0YShwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIsIHN0YXRlKSB7XG4gIGxldCB7IHNvcnQsIHNvcnRCeSwgZmlsdGVyIH0gPSBzdGF0ZTtcbiAgY29uc3QgeyBsaW1pdCB9ID0gc3RhdGU7XG4gIGlmIChmaWx0ZXJzKSB7XG4gICAgT2JqZWN0LmtleXMoZmlsdGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoZmlsdGVyc1trZXldICYmIGZpbHRlcnNba2V5XS5sZW5ndGgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIGZpbHRlcltrZXldID0gZmlsdGVyc1trZXldWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZpbHRlcnNba2V5XSkge1xuICAgICAgICBmaWx0ZXJba2V5XSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZpbHRlciA9IHt9O1xuICB9XG5cbiAgaWYgKHNvcnRlcikge1xuICAgIGlmIChzb3J0ZXIub3JkZXIpIHtcbiAgICAgIGNvbnN0IHsgZmllbGQsIG9yZGVyIH0gPSBzb3J0ZXI7XG4gICAgICBzb3J0ID0gU09SVFtvcmRlcl07XG4gICAgICBzb3J0QnkgPSBmaWVsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydEJ5ID0gJ2NyZWF0ZWRBdCc7XG4gICAgICBzb3J0ID0gJ2Rlc2MnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4uZmlsdGVyLFxuICAgIHNvcnQsXG4gICAgc29ydEJ5LFxuICAgIG9mZnNldDogKHBhZ2luYXRpb24uY3VycmVudCAtIDEpICogbGltaXRcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2U2NChvcmlnaW5GaWxlT2JqLCBzdGF0dXMgPSAndXBsb2FkaW5nJywgZmlsZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgaWYgKG9yaWdpbkZpbGVPYmopIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKG9yaWdpbkZpbGVPYmopO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoe1xuICAgICAgICAuLi5vcmlnaW5GaWxlT2JqLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIG5hbWU6IG9yaWdpbkZpbGVPYmoubmFtZSxcbiAgICAgICAgdXJsOiByZWFkZXIucmVzdWx0LFxuICAgICAgICBvcmlnaW5GaWxlT2JqXG4gICAgICB9KTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gKGVycm9yKSA9PiByZWplY3QoZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKGZpbGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q29ubmVjdGlvbkRhdGEoZGF0YSkge1xuICBjb25zdCBhcnIgPSBkYXRhLnNwbGl0KCclLyUnKTtcbiAgY29uc3Qgc2VydmVyRGF0YSA9IGFyclsxXSAmJiBKU09OLnBhcnNlKGFyclsxXSk7XG4gIGNvbnN0IGNsaWVudERhdGEgPSBhcnJbMF0gJiYgSlNPTi5wYXJzZShhcnJbMF0pO1xuICByZXR1cm4ge1xuICAgIHNlcnZlckRhdGEsXG4gICAgY2xpZW50RGF0YVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tVc2VyTG9naW4oaXNMb2dnZWRJbjogYm9vbGVhbiwgdXNlcjogSVVzZXIgfCBJUGVyZm9ybWVyIHwgSVN0dWRpbykge1xuICBpZiAoIWlzTG9nZ2VkSW4pIHJldHVybiBmYWxzZTtcbiAgaWYgKCF1c2VyICYmICF1c2VyLl9pZCkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIodXNlcjogSVVzZXIsIHBlcmZvcm1lcjogSVBlcmZvcm1lcikge1xuICBpZiAodXNlciAmJiB1c2VyLl9pZCkgcmV0dXJuIHVzZXI7XG4gIGlmIChwZXJmb3JtZXIgJiYgcGVyZm9ybWVyLl9pZCkgcmV0dXJuIHBlcmZvcm1lcjtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGh5c2ljYWxQcm9kdWN0KGl0ZW0pIHtcbiAgaWYgKGl0ZW0gJiYgaXRlbS50eXBlID09PSAncGh5c2ljYWwnKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhdEJveE1lc3NhZ2VDbGFzc05hbWUocmVxKSB7XG4gIGNvbnN0IHtcbiAgICBpc01pbmUsXG4gICAgc3RhcnRzU2VxdWVuY2UsXG4gICAgZW5kc1NlcXVlbmNlLFxuICAgIGRhdGE6IHsgdHlwZSB9XG4gIH0gPSByZXE7XG4gIHJldHVybiBjbGFzc25hbWVzKFxuICAgICdtZXNzYWdlJyxcbiAgICB7IG1pbmU6IGlzTWluZSAmJiB0eXBlICE9PSAndGlwJyB9LFxuICAgIHsgdGlwOiB0eXBlID09PSAndGlwJyB9LFxuICAgIHsgc3RhcnQ6ICEhc3RhcnRzU2VxdWVuY2UgfSxcbiAgICB7IGVuZDogISFlbmRzU2VxdWVuY2UgfVxuICApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RmVldFRvQ20oZmVldCwgaW5jaCkge1xuICBjb25zdCBbZl0gPSBmZWV0LnNwbGl0KCcuJyk7XG4gIGNvbnN0IFtpXSA9IGluY2guc3BsaXQoJy4nKTtcbiAgcmV0dXJuIChwYXJzZUludChmLCAxMCkgKiAxMiArIHBhcnNlSW50KGksIDEwKSkgKiAyLjU0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0YVdlaWdodChtaW4gPSA5OSwgbWF4ID0gMzE5KSB7XG4gIGxldCBpID0gbWluO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZG8ge1xuICAgIHJlc3VsdFtpXSA9IChpICogMC40NSkudG9GaXhlZCgyKTtcbiAgICBpICs9IDE7XG4gIH0gd2hpbGUgKGkgPCBtYXgpO1xuICByZXR1cm4gcmVzdWx0Lm1hcCgodiwgaW5kZXgpID0+ICh7XG4gICAgbGFiZWw6IGAke2luZGV4fSAgbGJzICgke3Z9a2cpYCxcbiAgICB2YWx1ZTogYCR7aW5kZXh9IGxic2BcbiAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGFIZWlnaHQobWluID0gNCwgbWF4ID0gNykge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgZmVldCA9IG1pbjsgZmVldCA8IG1heDsgZmVldCArPSAxKSB7XG4gICAgZm9yIChsZXQgaW5jaCA9IDA7IGluY2ggPD0gMTE7IGluY2ggKz0gMSkge1xuICAgICAgY29uc3QgYSA9IGNvbnZlcnRGZWV0VG9DbShcbiAgICAgICAgZmVldC50b0ZpeGVkKDEpLnRvU3RyaW5nKCksXG4gICAgICAgIGluY2gudG9GaXhlZCgxKS50b1N0cmluZygpXG4gICAgICApO1xuICAgICAgcmVzdWx0LnB1c2goYCR7ZmVldH0nJHtpbmNofVwiICgke2EudG9GaXhlZCgyKX0gY20pYCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQubWFwKChmKSA9PiAoeyBsYWJlbDogYCR7Zn1gLCB2YWx1ZTogYCR7Zn1gIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlOiBudW1iZXIsIGZyYWN0aW9uRGlnaXRzID0gMikge1xuICBpZiAocHJpY2UpIHtcbiAgICByZXR1cm4gcHJpY2UudG9GaXhlZChmcmFjdGlvbkRpZ2l0cyk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY0FjdGlvbiwgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5cbmV4cG9ydCBjb25zdCB7IGxvZ2luLCBsb2dpblN1Y2Nlc3MsIGxvZ2luRmFpbCB9ID0gY3JlYXRlQXN5bmNBY3Rpb24oXG4gICdsb2dpbicsXG4gICdMT0dJTidcbik7XG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0aW5nID0gY3JlYXRlQWN0aW9uKCdMT0dJTl9SRVFVRVNUSU5HJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHBlcmZvcm1lcmxvZ2luLFxuICBwZXJmb3JtZXJsb2dpblN1Y2Nlc3MsXG4gIHBlcmZvcm1lcmxvZ2luRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdwZXJmb3JtZXJsb2dpbicsICdQRVJGT1JNRVJfTE9HSU4nKTtcblxuZXhwb3J0IGNvbnN0XG4gIHJlc2V0TG9naW5EYXRhID0gY3JlYXRlQWN0aW9uKCdyZXNldExvZ2luRGF0YScpO1xuXG5leHBvcnQgY29uc3Qge1xuICBzdHVkaW9Mb2dpbixcbiAgc3R1ZGlvTG9naW5TdWNjZXNzLFxuICBzdHVkaW9Mb2dpbkZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignc3R1ZGlvTG9naW4nLCAnU1RVRElPX0xPR0lOJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHBlcmZvcm1lclJlZ2lzdGVyLFxuICBwZXJmb3JtZXJSZWdpc3RlclN1Y2Nlc3MsXG4gIHBlcmZvcm1lclJlZ2lzdGVyRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdwZXJmb3JtZXJSZWdpc3RlcicsICdQRVJGT1JNRVJfUkVHSVNURVInKTtcbmV4cG9ydCBjb25zdCBzZXRQZXJmb3JtZXJSZWdpc3RlclN1Ym1pdHRpbmcgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfUEVSRk9STUVSX1JFR0lTVEVSX1NVQk1JVFRJTkcnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICB1c2VyUmVnaXN0ZXIsXG4gIHVzZXJSZWdpc3RlclN1Y2Nlc3MsXG4gIHVzZXJSZWdpc3RlckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXNlclJlZ2lzdGVyJywgJ1VTRVJfUkVHSVNURVInKTtcbmV4cG9ydCBjb25zdCBzZXRVc2VyUmVnaXN0ZXJTdWJtaXR0aW5nID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX1VTRVJfUkVHSVNURVJfU1VCTUlUVElORydcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHVwZGF0ZVBhc3N3b3JkLFxuICB1cGRhdGVQYXNzd29yZFN1Y2Nlc3MsXG4gIHVwZGF0ZVBhc3N3b3JkRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCd1cGRhdGVQYXNzd29yZCcsICdVUERBVEVfUEFTU1dPUkQnKTtcbmV4cG9ydCBjb25zdCBzZXRVcGRhdGVQYXNzd29yZFN1Ym1pdHRpbmcgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfVVBEQVRFX1BBU1NXT1JEX1NVQk1JVFRJTkcnXG4pO1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gY3JlYXRlQWN0aW9uKCdsb2dvdXQnKTtcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jQWN0aW9uLCBjcmVhdGVBY3Rpb24gfSBmcm9tICdzcmMvbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllcyxcbiAgZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllc1N1Y2Nlc3MsXG4gIGdldFBlcmZvcm1lckNhdGVnb3JpZXNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFBlcmZvcm1lckNhdGVnb3JpZXMnLCAnR0VUX1BFUkZPUk1FUl9DQVRFR09SSUVTJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHNlYXJjaFBlcmZvcm1lcixcbiAgc2VhcmNoUGVyZm9ybWVyU3VjY2VzcyxcbiAgc2VhcmNoUGVyZm9ybWVyRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdzZWFyY2hQZXJmb3JtZXInLCAnU0VBUkNIX1BFUkZPUk1FUicpO1xuXG5leHBvcnQgY29uc3Qgc2V0UGVyZm9ybWVyU2VhcmNoaW5nID0gY3JlYXRlQWN0aW9uKCdTRVRfUEVSRk9STUVSX1NFQVJDSElORycpO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVQZXJmb3JtZXJQcm9maWxlLFxuICB1cGRhdGVQZXJmb3JtZXJQcm9maWxlU3VjY2VzcyxcbiAgdXBkYXRlUGVyZm9ybWVyUHJvZmlsZUZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXBkYXRlUGVyZm9ybWVyUHJvZmlsZScsICdVUERBVEVfUEVSRk9STUVSX1BST0ZJTEUnKTtcbmV4cG9ydCBjb25zdCBzZXR1cGRhdGluZ1BlcmZvcm1lclByb2ZpbGUgPSBjcmVhdGVBY3Rpb24oXG4gICd1cGRhdGluZ1BlcmZvcm1lclByb2ZpbGUnXG4pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBheW1lbnRJbmZvID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfUEFZTUVOVF9JTkZPJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlRGlyZWN0RGVwb3NpdCA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX0RJUkVDVF9ERVBPU0lUJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlUGF4dW0gPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9QQVhVTScpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUJpdHBheSA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX0JJVFBBWScpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0cmVhbWluZ1N0YXR1cyA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1NUUkVBTUlOR19TVEFUVVMnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVEZWZhdWx0UHJpY2UgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9ERUZBVUxUX1BSSUNFJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFBlcmZvcm1lckRldGFpbHMsXG4gIGdldFBlcmZvcm1lckRldGFpbHNTdWNjZXNzLFxuICBnZXRQZXJmb3JtZXJEZXRhaWxzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRQZXJmb3JtZXJEZXRhaWxzJywgJ0dFVF9QRVJGT1JNRVJfREVUQUlMUycpO1xuZXhwb3J0IGNvbnN0IHNldEdldHRpbmdQZXJmb3JtZXJEZXRhaWxzID0gY3JlYXRlQWN0aW9uKFxuICAnc2V0R2V0dGluZ1BlcmZvcm1lckRldGFpbHMnXG4pO1xuZXhwb3J0IGNvbnN0IHNldFBlcmZvcm1lckRldGFpbHMgPSBjcmVhdGVBY3Rpb24oJ1NFVF9QRVJGT1JNRVJfREVUQUlMUycpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcmZvcm1lckFzc2V0ID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfUEVSRk9STUVSX0FTU0VUJyk7XG5leHBvcnQgY29uc3Qgc2V0RmF2b3JpdGVQZXJmb3JtZXJEZXRhaWxzID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX0ZBVk9SSVRFX1BFUkZPUk1FUl9ERVRBSUxTJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0TXlQcm9kdWN0cyxcbiAgZ2V0TXlQcm9kdWN0c1N1Y2Nlc3MsXG4gIGdldE15UHJvZHVjdHNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldE15UHJvZHVjdHMnLCAnR0VUX01ZX1BST0RVQ1QnKTtcbmV4cG9ydCBjb25zdCBzZXRHZXR0aW5nTXlQcm9kdWN0cyA9IGNyZWF0ZUFjdGlvbignc2V0R2V0dGluZ015UHJvZHVjdHMnKTtcbmV4cG9ydCBjb25zdCBhZGRNeVByb2R1Y3QgPSBjcmVhdGVBY3Rpb24oJ2FkZE15UHJvZHVjdCcpO1xuZXhwb3J0IGNvbnN0IHJlbW92ZU15UHJvZHVjdCA9IGNyZWF0ZUFjdGlvbigncmVtb3ZlTXlQcm9kdWN0Jyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldEVhcm5pbmcsXG4gIGdldEVhcm5pbmdTdWNjZXNzLFxuICBnZXRFYXJuaW5nRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRFYXJuaW5nJywgJ0dFVF9FQVJOSU5HJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ0Vhcm5pbmcgPSBjcmVhdGVBY3Rpb24oJ1NFVF9HRVRUSU5HX0VBUk5JRycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRQYXlvdXRSZXF1ZXN0LFxuICBnZXRQYXlvdXRSZXF1ZXN0U3VjY2VzcyxcbiAgZ2V0UGF5b3V0UmVxdWVzdEZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0UGF5b3V0UmVxdWVzdCcsICdHRVRfUEFZT1VUX1JFUVVFU1QnKTtcbmV4cG9ydCBjb25zdCBzZXRHZXR0aW5nUGF5b3V0UmVxdWVzdCA9IGNyZWF0ZUFjdGlvbignU0VUX0dFVFRJTkdfUEFZT1VUX1JFUVVFU1QnKTtcbmV4cG9ydCBjb25zdCByZW1vdmVQYXlvdXRSZXF1ZXN0ID0gY3JlYXRlQWN0aW9uKCdSRU1PVkVfUEFZT1VUX1JFUVVFU1QnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0TXlWaWRlb3MsXG4gIGdldE15VmlkZW9zU3VjY2VzcyxcbiAgZ2V0TXlWaWRlb3NGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldE15VmlkZW9zJywgJ0dFVF9NWV9WSURFTycpO1xuZXhwb3J0IGNvbnN0IHNldGdldHRpbmdNeVZpZGVvcyA9IGNyZWF0ZUFjdGlvbignc2V0Z2V0dGluZ015VmlkZW9zJyk7XG5leHBvcnQgY29uc3QgYWRkTXlWaWRlb3MgPSBjcmVhdGVBY3Rpb24oJ2FkZE15VmlkZW9zJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlTXlWaWRlbyA9IGNyZWF0ZUFjdGlvbigncmVtb3ZlTXlWaWRlbycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRNeVBob3RvcyxcbiAgZ2V0TXlQaG90b3NTdWNjZXNzLFxuICBnZXRNeVBob3Rvc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0TXlQaG90b3MnLCAnR0VUX01ZX1BIT1RPJyk7XG5leHBvcnQgY29uc3Qgc2V0Z2V0dGluZ015UGhvdG9zID0gY3JlYXRlQWN0aW9uKCdzZXRnZXR0aW5nTXlQaG90b3MnKTtcbmV4cG9ydCBjb25zdCBhZGRNeVBob3RvcyA9IGNyZWF0ZUFjdGlvbignYWRkTXlQaG90b3MnKTtcbmV4cG9ydCBjb25zdCByZW1vdmVNeVBob3RvID0gY3JlYXRlQWN0aW9uKCdyZW1vdmVNeVBob3RvJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE15R2FsbGVyaWVzLFxuICBnZXRNeUdhbGxlcmllc1N1Y2Nlc3MsXG4gIGdldE15R2FsbGVyaWVzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNeUdhbGxlcmllcycsICdHRVRfTVlfR0FMTEVSSUVTJyk7XG5leHBvcnQgY29uc3Qgc2V0Z2V0dGluZ015R2FsbGVyaWVzID0gY3JlYXRlQWN0aW9uKCdzZXRnZXR0aW5nTXlHYWxsZXJpZXMnKTtcbmV4cG9ydCBjb25zdCBhZGRNeUdhbGxlcmllcyA9IGNyZWF0ZUFjdGlvbignYWRkTXlHYWxsZXJpZXMnKTtcbmV4cG9ydCBjb25zdCByZW1vdmVNeUdhbGxlcmllcyA9IGNyZWF0ZUFjdGlvbigncmVtb3ZlTXlHYWxsZXJpZXMnKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRQZXJmb3JtZXIgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZUN1cnJlbnRQZXJmb3JtZXInKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUgPSBjcmVhdGVBY3Rpb24oXG4gICdVUERBVEVfUEVSRk9STUVSX0ZBVk9VUklURSdcbik7XG4iLCJpbXBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9uXG59IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFN0dWRpbyA9IGNyZWF0ZUFjdGlvbigndXBkYXRlQ3VycmVudFN0dWRpbycpO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVTdHVkaW8sXG4gIHVwZGF0ZVN0dWRpb1N1Y2Nlc3MsXG4gIHVwZGF0ZVN0dWRpb0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXBkYXRlU3R1ZGlvJywgJ1VQREFURV9TVFVESU8nKTtcblxuZXhwb3J0IGNvbnN0IHNldFVwZGF0aW5nU3R1ZGlvID0gY3JlYXRlQWN0aW9uKCd1cGRhdGluZ1N0dWRpbycpO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU3R1ZGlvUGF5bWVudEluZm8gPSBjcmVhdGVBY3Rpb24oXG4gICdVUERBVEVfU1RVRElPX1BBWU1FTlRfSU5GTydcbik7XG5leHBvcnQgY29uc3QgdXBkYXRlU3R1ZGlvRGlyZWN0RGVwb3NpdCA9IGNyZWF0ZUFjdGlvbihcbiAgJ1VQREFURV9TVFVESU9fRElSRUNUX0RFUE9TSVQnXG4pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0dWRpb1BheHVtID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfU1RVRElPX1BBWFVNJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlU3R1ZGlvQml0cGF5ID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfU1RVRElPX0JJVFBBWScpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRTdHVkaW9FYXJuaW5nLFxuICBnZXRTdHVkaW9FYXJuaW5nU3VjY2VzcyxcbiAgZ2V0U3R1ZGlvRWFybmluZ0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0U3R1ZGlvRWFybmluZycsICdHRVRfU1RVRElPX0VBUk5JTkcnKTtcbmV4cG9ydCBjb25zdCBzZXRHZXR0aW5nU3R1ZGlvRWFybmluZyA9IGNyZWF0ZUFjdGlvbihcbiAgJ1NFVF9HRVRUSU5HX1NUVURJT19FQVJOSUcnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRTdHVkaW9QYXlvdXRSZXF1ZXN0LFxuICBnZXRTdHVkaW9QYXlvdXRSZXF1ZXN0U3VjY2VzcyxcbiAgZ2V0U3R1ZGlvUGF5b3V0UmVxdWVzdEZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0U3R1ZGlvUGF5b3V0UmVxdWVzdCcsICdHRVRfU1RVRElPX1BBWU9VVF9SRVFVRVNUJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ1N0dWRpb1BheW91dFJlcXVlc3QgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfR0VUVElOR19TVFVESU9fUEFZT1VUX1JFUVVFU1QnXG4pO1xuZXhwb3J0IGNvbnN0IHJlbW92ZVN0dWRpb1BheW91dFJlcXVlc3QgPSBjcmVhdGVBY3Rpb24oXG4gICdSRU1PVkVfU1RVRElPX1BBWU9VVF9SRVFVRVNUJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UGVyZm9ybWVyUmVxdWVzdCxcbiAgZ2V0UGVyZm9ybWVyUmVxdWVzdFN1Y2Nlc3MsXG4gIGdldFBlcmZvcm1lclJlcXVlc3RGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFBlcmZvcm1lclJlcXVlc3QnLCAnR0VUX1BFUkZPUk1FUl9SRVFVRVNUJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ1BlcmZvcm1lclJlcXVlc3QgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfR0VUVElOR19QRVJGT1JNRVJfUkVRVUVTVCdcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE1lbWJlcnMsXG4gIGdldE1lbWJlcnNTdWNjZXNzLFxuICBnZXRNZW1iZXJzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNZW1iZXJzJywgJ0dFVF9NRU1CRVJTJyk7XG5leHBvcnQgY29uc3QgZ2V0TWVtYmVyc1NlYXJjaGluZyA9IGNyZWF0ZUFjdGlvbignR0VUX01FTUJFUl9TRUFDSElORycpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZU1lbWJlclN0YXR1cyA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX01FTUJFUl9TVEFUVVMnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0TWVtYmVyc0NvbW1pc3Npb25zLFxuICBnZXRNZW1iZXJzQ29tbWlzc2lvbnNTdWNjZXNzLFxuICBnZXRNZW1iZXJzQ29tbWlzc2lvbnNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldE1lbWJlcnNDb21taXNzaW9ucycsICdHRVRfTUVNQkVSU19DT01NU1NJT05TJyk7XG5leHBvcnQgY29uc3QgZ2V0TWVtYmVyc0NvbW1pc3Npb25zU2VhcmNoaW5nID0gY3JlYXRlQWN0aW9uKFxuICAnR0VUX01FTUJFUl9DT01NU1NJT19TRUFDSElORydcbik7XG5leHBvcnQgY29uc3QgdXBkYXRlTWVtYmVyQ29tbWlzaW9uID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfTUVNQkVSX0NPTU1JU1NJT04nKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0U3R1ZGlvU3RhdHMsXG4gIGdldFN0dWRpb1N0YXRzU3VjY2VzcyxcbiAgZ2V0U3R1ZGlvU3RhdHNGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFN0dWRpb1N0YXRzJywgJ0dFVF9TVFVESU9fU1RBVFMnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVUb3RhbFBlcmZvcm1lciA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1RPVEFMX1BFUkZPUk1FUicpO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvblxufSBmcm9tICdAbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRVc2VyID0gY3JlYXRlQWN0aW9uKCd1cGRhdGVDdXJyZW50VXNlcicpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRVc2VyQXZhdGFyID0gY3JlYXRlQWN0aW9uKCd1cGRhdGVDdXJyZW50VXNlckF2YXRhcicpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRVc2VyQmFsYW5jZSA9IGNyZWF0ZUFjdGlvbihcbiAgJ3VwZGF0ZUN1cnJlbnRVc2VyQmFsYW5jZSdcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHVwZGF0ZVVzZXIsXG4gIHVwZGF0ZVVzZXJTdWNjZXNzLFxuICB1cGRhdGVVc2VyRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCd1cGRhdGVVc2VyJywgJ1VQREFURV9VU0VSJyk7XG5cbmV4cG9ydCBjb25zdCBzZXRVcGRhdGluZyA9IGNyZWF0ZUFjdGlvbigndXBkYXRpbmdVc2VyJyk7XG5cbmV4cG9ydCBjb25zdCBzZXRSZWR1Y2VyID0gY3JlYXRlQWN0aW9uKCdzZXRVc2VyUmVkdWNlcicpO1xuXG5leHBvcnQgY29uc3QgYnV5VG9rZW5TdWNjZXNzID0gY3JlYXRlQWN0aW9uKCdidXlUb2tlblN1Y2Nlc3MnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0RmF2b3JpdGVQZXJmb3JtZXJzLFxuICBnZXRGYXZvcml0ZVBlcmZvcm1lcnNTdWNjZXNzLFxuICBnZXRGYXZvcml0ZVBlcmZvcm1lcnNGYWlsZWRcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0RmF2b3JpdGVQZXJmb3JtZXJzJywgJ0dFVF9GQVZPVVJJVEUnKTtcbmV4cG9ydCBjb25zdCBnZXR0aW5nRmF2b3JpdGVQZXJmb3JtZXJzID0gY3JlYXRlQWN0aW9uKCdHRVRUSU5HX0ZBVk9SSVRFJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlRmF2b3JpdGUgPSBjcmVhdGVBY3Rpb24oJ1JFTU9WRV9GQVZPUklURScpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRQYXltZW50VG9rZW5IaXN0cm95LFxuICBnZXRQYXltZW50VG9rZW5IaXN0cm95U3VjY2VzcyxcbiAgZ2V0UGF5bWVudFRva2VuSGlzdHJveUZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0UGF5bWVudFRva2VuSGlzdHJveScsICdHRVRfUEFZTUVUX1RPS0VfSElTVE9SWScpO1xuZXhwb3J0IGNvbnN0IGdldHRpZ1BheW1lbnRUb2tlbkhpc3RvcnkgPSBjcmVhdGVBY3Rpb24oJ0dFVFRJTkdfUEFZTUVUX1RPS0VfSElTVE9SWScpO1xuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IHsgSVJlZ2lzdGVyRm9ybURhdGEgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3BvbnNlPFQ+IHtcbiAgc3RhdHVzOiBudW1iZXI7XG4gIGRhdGE6IFQ7XG59XG5cbmV4cG9ydCBjb25zdCBUT0tFTiA9ICd0b2tlbic7XG5leHBvcnQgY29uc3QgUk9MRSA9ICdyb2xlJztcbmV4cG9ydCBjb25zdCBQRVJGT1JNRVJfUk9MRSA9ICdwZXJmb3JtZXInO1xuZXhwb3J0IGNvbnN0IFVTRVJfUk9MRSA9ICd1c2VyJztcbmV4cG9ydCBjb25zdCBTVFVESU9fUk9MRSA9ICdzdHVkaW8nO1xuZXhwb3J0IGNvbnN0IFNPUlQgPSB7IGRlc2NlbmQ6ICdkZXNjJywgYXNjZW5kOiAnYXNjJyB9O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQVBJUmVxdWVzdCB7XG4gIHN0YXRpYyB0b2tlbjogc3RyaW5nID0gJyc7XG5cbiAgc2V0QXV0aEhlYWRlclRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICBBUElSZXF1ZXN0LnRva2VuID0gdG9rZW47XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBKU09OIHJldHVybmVkIGJ5IGEgbmV0d29yayByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gcmVzcG9uc2UgQSByZXNwb25zZSBmcm9tIGEgbmV0d29yayByZXF1ZXN0XG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgVGhlIHBhcnNlZCBKU09OIGZyb20gdGhlIHJlcXVlc3RcbiAgICovXG4gIHByaXZhdGUgcGFyc2VKU09OKHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwNSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgbmV0d29yayByZXF1ZXN0IGNhbWUgYmFjayBmaW5lLCBhbmQgdGhyb3dzIGFuIGVycm9yIGlmIG5vdFxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHJlc3BvbnNlICAgQSByZXNwb25zZSBmcm9tIGEgbmV0d29yayByZXF1ZXN0XG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdHx1bmRlZmluZWR9IFJldHVybnMgZWl0aGVyIHRoZSByZXNwb25zZSwgb3IgdGhyb3dzIGFuIGVycm9yXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGNoZWNrU3RhdHVzKHJlc3BvbnNlOiBSZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xuICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW4gaW4gdGhlIGFjdGlvbiEnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkgYXMgYW55O1xuICAgIC8vIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgLy8gdGhyb3cgZXJyb3I7XG4gICAgdGhyb3cgcmVzcG9uc2UuY2xvbmUoKS5qc29uKCk7XG4gIH1cblxuICByZXF1ZXN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG1ldGhvZD86IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCB2ZXJiID0gKG1ldGhvZCB8fCAnZ2V0JykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCB1cGRhdGVkSGVhZGVyID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC8vIFRPRE8gLSBjaGVjayBtZVxuICAgICAgQXV0aG9yaXphdGlvbjpcbiAgICAgICAgQVBJUmVxdWVzdC50b2tlbiB8fCAocHJvY2Vzcy5icm93c2VyID8gY29va2llLmdldChUT0tFTikgOiAnJyksXG4gICAgICAuLi4oaGVhZGVycyB8fCB7fSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZldGNoKGlzVXJsKHVybCkgPyB1cmwgOiBgJHtwcm9jZXNzLmVudi5BUElfRU5EUE9JTlQgfHwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWAsIHtcbiAgICAgIG1ldGhvZDogdmVyYixcbiAgICAgIGhlYWRlcnM6IHVwZGF0ZWRIZWFkZXIsXG4gICAgICBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBudWxsXG4gICAgfSlcbiAgICAgIC50aGVuKHRoaXMuY2hlY2tTdGF0dXMpXG4gICAgICAudGhlbih0aGlzLnBhcnNlSlNPTik7XG4gIH1cblxuICBidWlsZFVybChiYXNlVXJsOiBzdHJpbmcsIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB9KSB7XG4gICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgIHJldHVybiBiYXNlVXJsO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgLm1hcCgoaykgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba10pfWApXG4gICAgICAuam9pbignJicpO1xuICAgIHJldHVybiBgJHtiYXNlVXJsfT8ke3F1ZXJ5U3RyaW5nfWA7XG4gIH1cblxuICBnZXQodXJsOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdnZXQnLCBudWxsLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdwb3N0JywgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICBwdXQodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdwdXQnLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIGRlbCh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ2RlbGV0ZScsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBsb2FkKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGZpbGVzOiB7XG4gICAgICBmaWxlOiBGaWxlO1xuICAgICAgZmllbGRuYW1lOiBzdHJpbmc7XG4gICAgfVtdLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uO1xuICAgICAgY3VzdG9tRGF0YT86IFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgICBtZXRob2Q/OiBzdHJpbmc7XG4gICAgfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfVxuICApIHtcbiAgICBjb25zdCB1cGxvYWRVcmwgPSBpc1VybCh1cmwpID8gdXJsIDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWA7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZpbGVzLmZvckVhY2goKGYpID0+IGZvcm1EYXRhLmFwcGVuZChmLmZpZWxkbmFtZSwgZi5maWxlLCBmLmZpbGUubmFtZSkpO1xuICAgICAgb3B0aW9ucy5jdXN0b21EYXRhXG4gICAgICAgICYmIE9iamVjdC5rZXlzKG9wdGlvbnMuY3VzdG9tRGF0YSkuZm9yRWFjaChcbiAgICAgICAgICAoZmllbGRuYW1lKSA9PiB0eXBlb2Ygb3B0aW9ucy5jdXN0b21EYXRhW2ZpZWxkbmFtZV0gIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAmJiBmb3JtRGF0YS5hcHBlbmQoZmllbGRuYW1lLCBvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSlcbiAgICAgICAgKTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKG9wdGlvbnMubWV0aG9kIHx8ICdQT1NUJywgdXBsb2FkVXJsKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVnaXN0ZXIoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVJlZ2lzdGVyRm9ybURhdGEsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLmRvY3VtZW50VmVyaWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZSA9IGRhdGEuZG9jdW1lbnRWZXJpZmljYXRpb24uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgJ2RvY3VtZW50VmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICBkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUsXG4gICAgICAgICAgZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlLm5hbWVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuaWRWZXJpZmljYXRpb24pIHtcbiAgICAgICAgY29uc3QgaWRWZXJpZmljYXRpb25EaWxlID0gZGF0YS5pZFZlcmlmaWNhdGlvbi5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAnaWRWZXJpZmljYXRpb24nLFxuICAgICAgICAgIGlkVmVyaWZpY2F0aW9uRGlsZSxcbiAgICAgICAgICBpZFZlcmlmaWNhdGlvbkRpbGUubmFtZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgb21pdChkYXRhLCBbJ2RvY3VtZW50VmVyaWZpY2F0aW9uJywgJ2lkVmVyaWZpY2F0aW9uJ10pXG4gICAgICApLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUE9TVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHtcbiAgSUxvZ2luLFxuICBJcGVyZm9ybWVyTG9naW4sXG4gIElSZWdpc3RlckZvcm1EYXRhLFxuICBJVXNlclJlZ2lzdGVyRm9ybURhdGFcbn0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgQVBJUmVxdWVzdCwgVE9LRU4sIElSZXNwb25zZSwgUk9MRVxufSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGxvZ2luKGRhdGE6IElMb2dpbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL2xvZ2luJywgZGF0YSk7XG4gIH1cblxuICBzZXRBdXRoSGVhZGVyKHRva2VuOiBzdHJpbmcsIHJvbGU6IHN0cmluZykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gICAgLy8gc2luY2UgU2FmYXJpIGRvZXMgbm90IHN1cHBvcnQsIG5lZWQgYSBiZXR0ZXIgc29sdXRpb25cbiAgICBjb29raWUuc2V0KFRPS0VOLCB0b2tlbiwgeyBleHBpcmVzOiAzNjUgfSk7XG4gICAgY29va2llLnNldChST0xFLCByb2xlLCB7IGV4cGlyZXM6IDM2NSB9KTtcbiAgICB0aGlzLnNldEF1dGhIZWFkZXJUb2tlbih0b2tlbik7XG4gIH1cblxuICBwZXJmb3JtZXJMb2dpbihkYXRhOiBJcGVyZm9ybWVyTG9naW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9wZXJmb3JtZXJzL2xvZ2luJywgZGF0YSk7XG4gIH1cblxuICBzdHVkaW9Mb2dpbihkYXRhOiBJTG9naW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9zdHVkaW8vbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHNldFRva2VuKHRva2VuOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICAgIC8vIHNpbmNlIFNhZmFyaSBkb2VzIG5vdCBzdXBwb3J0LCBuZWVkIGEgYmV0dGVyIHNvbHV0aW9uXG4gICAgY29va2llLnNldChUT0tFTiwgdG9rZW4sIHsgZXhwaXJlczogMzY1IH0pO1xuICAgIHRoaXMuc2V0QXV0aEhlYWRlclRva2VuKHRva2VuKTtcbiAgfVxuXG4gIGdldFRva2VuKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICByZXR1cm4gdG9rZW4gfHwgbnVsbDtcbiAgfVxuXG4gIGdldFJvbGUoKTogc3RyaW5nIHtcbiAgICBjb25zdCByb2xlID0gY29va2llLmdldChST0xFKTtcbiAgICByZXR1cm4gcm9sZSB8fCBudWxsO1xuICB9XG5cbiAgcmVtb3ZlVG9rZW4oKTogdm9pZCB7XG4gICAgY29va2llLnJlbW92ZShUT0tFTik7XG4gICAgY29va2llLnJlbW92ZShST0xFKTtcbiAgfVxuXG4gIHJlbW92ZVJlbWVtYmVyKCk6IHZvaWQge1xuICAgIHByb2Nlc3MuYnJvd3NlciAmJiBjb29raWUucmVtb3ZlKCdyZW1lbWJlck1lJyk7XG4gIH1cblxuICB1cGRhdGVQYXNzd29yZChib2R5OiB7IHBhc3N3b3JkOiBzdHJpbmc7IHNvdXJjZT86IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvYXV0aC91c2Vycy9tZS9wYXNzd29yZCcsIGJvZHkpO1xuICB9XG5cbiAgcGVyZm9ybWVyc1JlZ2lzdGVyKGRhdGE6IElSZWdpc3RlckZvcm1EYXRhKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlcignL2F1dGgvcGVyZm9ybWVycy9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgdXNlclJlZ2lzdGVyKGRhdGE6IElVc2VyUmVnaXN0ZXJGb3JtRGF0YSk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC91c2Vycy9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgc3R1ZGlvUmVnaXN0ZXIoZGF0YTogSVJlZ2lzdGVyRm9ybURhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKCcvYXV0aC9zdHVkaW8vcmVnaXN0ZXInLCBkYXRhKTtcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKGVtYWlsOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlbWFpbCxcbiAgICAgIHR5cGVcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL2ZvcmdvdCcsIGRhdGEpO1xuICB9XG5cbiAgcmVzZW5kVmVyaWZpY2F0aW9uRW1haWwoZGF0YTogeyBlbWFpbDogc3RyaW5nLCBzb3VyY2U6IHN0cmluZ30pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvdmVyaWZpY2F0aW9uL3Jlc2VuZC12ZXJpZmljYXRpb24tZW1haWwnLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSBuZXcgQXV0aFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElCYW5uZXJTZWFyY2ggfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBCYW5uZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeTogSUJhbm5lclNlYXJjaCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvYmFubmVycy9zZWFyY2gnLCBxdWVyeSBhcyBhbnkpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYmFubmVyU2VydmljZSA9IG5ldyBCYW5uZXJTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIEVhcm5pbmdTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCByb2xlID0gJ3BlcmZvcm1lcicpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybChgL2Vhcm5pbmcvJHtyb2xlfS9zZWFyY2hgLCBwYXJhbXMpKTtcbiAgfVxuXG4gIHN0YXRzKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJvbGUgPSAncGVyZm9ybWVyJykge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvZWFybmluZy8ke3JvbGV9L3N0YXRzYCwgcGFyYW1zKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVhcm5pbmdTZXJ2aWNlID0gbmV3IEVhcm5pbmdTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIEZhdm91cml0ZVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbGlrZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2Zhdm91cml0ZS8ke2lkfS9saWtlYCk7XG4gIH1cblxuICB1bmxpa2UoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9mYXZvdXJpdGUvJHtpZH0vdW5saWtlYCk7XG4gIH1cblxuICBmYXZvcml0ZShpZDogc3RyaW5nLCBpc0Zhdm9yaXRlZDogYm9vbGVhbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9mYXZvdXJpdGUvJHtpZH0vJHtpc0Zhdm9yaXRlZCA/ICd1bmxpa2UnIDogJ2xpa2UnfWApO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9mYXZvdXJpdGUnLCBxdWVyeSkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmYXZvdXJpdGVTZXJ2aWNlID0gbmV3IEZhdm91cml0ZVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElSZXNwb25zZSwgSURhdGFSZXNwb25zZSwgSVBlcmZvcm1lckdhbGxlcnkgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBHYWxsZXJ5U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2goXG4gICAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgICBpc1BlcmZvcm1lciA9IHRydWVcbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8SURhdGFSZXNwb25zZTxJUGVyZm9ybWVyR2FsbGVyeT4+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybChcbiAgICAgICAgaXNQZXJmb3JtZXJcbiAgICAgICAgICA/ICcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzL3NlYXJjaCdcbiAgICAgICAgICA6ICcvdXNlci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy9zZWFyY2gnLFxuICAgICAgICBwYXJhbXNcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHVyY2hhc2VkKHBhcmFtcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0pOiBQcm9taXNlPElSZXNwb25zZTxJRGF0YVJlc3BvbnNlPElQZXJmb3JtZXJHYWxsZXJ5Pj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3B1cmNoYXNlZC1pdGVtcy91c2VyL2dhbGxlcmllcycsIHBhcmFtcykpO1xuICB9XG5cbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzJywgZGF0YSk7XG4gIH1cblxuICB1cGRhdGUoaWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH1gLCBkYXRhKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICBgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfS92aWV3YCxcbiAgICAgIGhlYWRlcnNcbiAgICApO1xuICB9XG5cbiAgcHVibGljZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2FsbGVyeVNlcnZpY2UgPSBuZXcgR2FsbGVyeVNlcnZpY2UoKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGVyZm9tZXItY2F0ZWdvcmllcy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGVyZm9tZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZGVvLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9kdWN0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXR0aW5nLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9waG90by5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZ2FsbGVyeS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZmF2b3VyaXRlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi90b2tlbi1wYWNrYWdlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2FjdGlvbi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3RyZWFtLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wdXJjaGFzZS1pdGVtLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9vcmRlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZWFybmluZy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGF5b3V0LXJlcXVlc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWZ1bmQtcmVxdWVzdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0dWRpby5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYmFubmVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXltZW50LWluZm9ybWF0aW9uLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0uc2VydmljZSc7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBnZXRDb252ZXJzYXRpb25zKHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvY29udmVyc2F0aW9ucycsIHF1ZXJ5KSk7XG4gIH1cblxuICBzZWFyY2hDb252ZXJzYXRpb25zKHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvY29udmVyc2F0aW9ucy9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgY3JlYXRlQ29udmVyc2F0aW9uKGRhdGE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvY29udmVyc2F0aW9ucycsIGRhdGEpO1xuICB9XG5cbiAgZ2V0Q29udmVyc2F0aW9uRGV0YWlsKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zLyR7aWR9YCk7XG4gIH1cblxuICBnZXRDb252ZXJzYXRpb25CeVN0cmVhbUlkKHN0cmVhbUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zL3N0cmVhbS8ke3N0cmVhbUlkfWApO1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgcXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgcXVlcnkpKTtcbiAgfVxuXG4gIGdldFB1YmxpY01lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvbWVzc2FnZXMvY29udmVyc2F0aW9ucy9wdWJsaWMvJHtjb252ZXJzYXRpb25JZH1gLCBxdWVyeSkpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBzZW5kU3RyZWFtTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL3N0cmVhbS9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBzZW5kUHVibGljU3RyZWFtTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL3N0cmVhbS9wdWJsaWMvY29udmVyc2F0aW9ucy8ke2NvbnZlcnNhdGlvbklkfWAsIGRhdGEpO1xuICB9XG5cbiAgZmluZFB1YmxpY0NvbnZlcnNhdGlvblBlcmZvcm1lcihwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvY29udmVyc2F0aW9ucy9zdHJlYW0vcHVibGljLyR7cGVyZm9ybWVySWR9YCk7XG4gIH1cblxuICBjb3VudFRvdGFsTm90UmVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9tZXNzYWdlcy9jb3VudGluZy1ub3QtcmVhZC1tZXNzYWdlcycpO1xuICB9XG5cbiAgcmVhZEFsbEluQ29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcgfCBudW1iZXIsIHJlY2lwaWVudElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvbWVzc2FnZXMvcmVhZC1hbGwnLCB7IGNvbnZlcnNhdGlvbklkLCByZWNpcGllbnRJZCB9KTtcbiAgfVxuXG4gIGdldE1lc3NhZ2VVcGxvYWRVcmwoKSB7XG4gICAgcmV0dXJuIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vbWVzc2FnZXMvcHJpdmF0ZS9maWxlYDtcbiAgfVxuXG4gIGRlbGV0ZU1lc3NhZ2UoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9tZXNzYWdlcy8ke2lkfWApO1xuICB9XG5cbiAgZGVsZXRlQWxsTWVzc2FnZUluQ29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvbWVzc2FnZXMvJHtjb252ZXJzYXRpb25JZH0vcmVtb3ZlLWFsbC1tZXNzYWdlYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VTZXJ2aWNlID0gbmV3IE1lc3NhZ2VTZXJ2aWNlKCk7XG4iLCIvLyBpbXBvcnQgeyBJR2FsbGVyeUNyZWF0ZSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIE9yZGVyU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvb3JkZXJzL3NlYXJjaCcsIHBheWxvYWQpKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9vcmRlcnMvZGV0YWlscy8ke2lkfWApO1xuICB9XG5cbiAgdXBkYXRlKGlkLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvb3JkZXJzLyR7aWR9L3VwZGF0ZWAsIGRhdGEpO1xuICB9XG5cbiAgdXNlclNlYXJjaChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvb3JkZXJzL3VzZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHVzZXJGaW5kRGV0YWlscyhpZCkge1xuICAgIHJldHVybiB0aGlzLmdldChgL29yZGVycy91c2VyL2RldGFpbHMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JkZXJTZXJ2aWNlID0gbmV3IE9yZGVyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBQYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BheW1lbnQtaW5mb3JtYXRpb24nLCBkYXRhKTtcbiAgfVxuXG4gIGZpbmRPbmUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGF5bWVudC1pbmZvcm1hdGlvbicsIGRhdGEpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGF5bWVudEluZm9ybWF0aW9uU2VydmljZSA9IG5ldyBQYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUmVzcG9uc2UgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIFBheW91dFJlcXVlc3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNhbGN1bGF0ZShwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJvbGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoYC9lYXJuaW5nLyR7cm9sZSB8fCAncGVyZm9ybWVyJ30vcGF5b3V0YCwgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BheW91dC1yZXF1ZXN0cy9wZXJmb3JtZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHN0dWRpb1NlYXJjaChxdWVyeTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGF5b3V0LXJlcXVlc3RzL3N0dWRpby9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgY3JlYXRlKGJvZHk6IGFueSwgcm9sZSA9ICdwZXJmb3JtZXInKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3BheW91dC1yZXF1ZXN0cy8ke3JvbGV9YCwgYm9keSk7XG4gIH1cblxuICB1cGRhdGUoaWQ6IHN0cmluZywgYm9keTogYW55LCByb2xlID0gJ3BlcmZvcm1lcicpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9wYXlvdXQtcmVxdWVzdHMvJHtyb2xlfS8ke2lkfWAsIGJvZHkpO1xuICB9XG5cbiAgZGV0YWlsKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgaGVhZGVyczoge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH0sXG4gICAgcm9sZSA9ICdwZXJmb3JtZXInXG4gICk6IFByb21pc2U8SVJlc3BvbnNlPFBheW91dFJlcXVlc3RTZXJ2aWNlPj4ge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BheW91dC1yZXF1ZXN0cy8ke3JvbGV9LyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGF5b3V0UmVxdWVzdFNlcnZpY2UgPSBuZXcgUGF5b3V0UmVxdWVzdFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFBlcmZvcm1lckNhdGVnb3JpZXNTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGdldExpc3QocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXItY2F0ZWdvcmllcycsIHF1ZXJ5KSk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXItY2F0ZWdvcmllcy8ke2lkfS92aWV3YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBlcmZvcm1lckNhdGVnb3JpZXMgPSBuZXcgUGVyZm9ybWVyQ2F0ZWdvcmllc1NlcnZpY2UoKTtcbiIsImltcG9ydCB7XG4gIElQZXJmb3JtZXIsXG4gIElDcmVhdGVQZXJmb3JtZXJQcm9kdWN0UGF5bG9hZCxcbiAgSVVwZGF0ZVBlcmZvcm1lclByb2R1Y3RQYXlsb2FkXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGlzVXJsIH0gZnJvbSAnQGxpYi9zdHJpbmcnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSwgVE9LRU4gfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFBlcmZvcm1lclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3BlcmZvcm1lcnMvbWUnLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwZGF0ZU1lKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL3BlcmZvcm1lcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BlcmZvcm1lcnMvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGRldGFpbHModXNlcm5hbWU6IHN0cmluZywgaGVhZGVycyA9IHt9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXJzLyR7dXNlcm5hbWV9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIGdldEF2YXRhclVwbG9hZFVybCgpIHtcbiAgICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9wZXJmb3JtZXJzL2F2YXRhci91cGxvYWRgO1xuICB9XG5cbiAgZ2V0RG9jdW1lbnRzVXBsb2FkVXJsKCkge1xuICAgIHJldHVybiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3BlcmZvcm1lcnMvZG9jdW1lbnRzL3VwbG9hZGA7XG4gIH1cblxuICBnZXRSZWxlYXNlRm9ybVVybCgpIHtcbiAgICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9wZXJmb3JtZXJzL3JlbGVhc2UtZm9ybS91cGxvYWRgO1xuICB9XG5cbiAgbXlQcm9kdWN0KHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy9zZWFyY2gnLCBxdWVyeSlcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlUHJvZHVjdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJQ3JlYXRlUGVyZm9ybWVyUHJvZHVjdFBheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5pbWFnZSkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRhdGEuaW1hZ2UuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgaW1hZ2UsIGltYWdlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5kaWdpdGFsRmlsZSkge1xuICAgICAgICBjb25zdCBkaWdpdGFsRmlsZSA9IGRhdGEuZGlnaXRhbEZpbGUuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RpZ2l0YWxGaWxlJywgZGlnaXRhbEZpbGUsIGRpZ2l0YWxGaWxlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsnaW1hZ2UnLCAnZGlnaXRhbEZpbGUnXSkpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUE9TVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVByb2R1Y3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVVwZGF0ZVBlcmZvcm1lclByb2R1Y3RQYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEuaW1hZ2UgJiYgZGF0YS5pbWFnZS5maWxlKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZGF0YS5pbWFnZS5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBpbWFnZSwgaW1hZ2UubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmRpZ2l0YWxGaWxlICYmIGRhdGEuZGlnaXRhbEZpbGUuZmlsZSkge1xuICAgICAgICBjb25zdCBkaWdpdGFsRmlsZSA9IGRhdGEuZGlnaXRhbEZpbGUuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RpZ2l0YWxGaWxlJywgZGlnaXRhbEZpbGUsIGRpZ2l0YWxGaWxlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsnaW1hZ2UnLCAnZGlnaXRhbEZpbGUnXSkpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUFVUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlUHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH1gKTtcbiAgfVxuXG4gIGdldENvbW1pc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc2V0dGluZ3MvcGVyZm9ybWVyL2NvbW1pc3Npb24nKTtcbiAgfVxuXG4gIHVwZGF0ZVBheW1lbnRJbmZvKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2JhbmstdHJhbnNmZXIvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVEaXJlY3REZXBvc3QocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvZGlyZWN0LWRlcG9zaXQvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVQYXh1bShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9wYXh1bS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZUJpdHBheShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9iaXRwYXkvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVTdHJlYW1pbmdTdGF0dXMocGF5bG9hZDoge1xuICAgIHN0YXR1czogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9zdHJlYW1pbmctc3RhdHVzL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2VvQmxvY2socGF5bG9hZDoge3VzZXJJZHM/OiBzdHJpbmdbXSwgY291bnRyaWVzPzogc3RyaW5nW119KTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2Jsb2NraW5nL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0QmxvY2tlZExpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVycy9ibG9ja2luZycpKTtcbiAgfVxuXG4gIGluY3JlYXNlVmlldyhwZXJmb3JtZXJJZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wZXJmb3JtZXJzLyR7cGVyZm9ybWVySWR9L2luYy12aWV3YCk7XG4gIH1cblxuICB1cGRhdGVEZWZhdWx0UHJpY2UocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvZGVmYXVsdC1wcmljZS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZUJyb2FkY2FzdFNldHRpbmcocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9icm9hZGNhc3Qtc2V0dGluZy91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHN1c3BlbmRBY2NvdW50KHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9zdXNwZW5kLWFjY291bnQnLCB7IHBhc3N3b3JkIH0pO1xuICB9XG5cbiAgY2hlY2tCbG9jayhwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVycy8ke3BlcmZvcm1lcklkfS9jaGVjay1ibG9ja2luZ2ApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBHRU5OREVSX1BFUkZPUk1FUiA9IFsnZmVtYWxlJywgJ3RyYW5zZ2VuZGVyJywgJ21hbGUnXTtcblxuZXhwb3J0IGNvbnN0IHBlcmZvcm1lclNlcnZpY2UgPSBuZXcgUGVyZm9ybWVyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IFRPS0VOIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7XG4gIElSZXNwb25zZSxcbiAgSVBlcmZvcm1lclBob3RvUGF5bG9hZCxcbiAgSURhdGFSZXNwb25zZSxcbiAgSVBob3RvXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFBob3RvU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfSk6IFByb21pc2U8SVJlc3BvbnNlPElEYXRhUmVzcG9uc2U8SVBob3RvPj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zL3NlYXJjaCcsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgc2VhcmNoQnlHYWxsZXJ5KFxuICAgIGdhbGxlcnlJZDogc3RyaW5nLFxuICAgIHBhcmFtcz86IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9LFxuICAgIGhlYWRlcnM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gICkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoXG4gICAgICAgIGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy8ke2dhbGxlcnlJZH0vc2VhcmNoYCxcbiAgICAgICAgcGFyYW1zXG4gICAgICApLFxuICAgICAgaGVhZGVyc1xuICAgICk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zLyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIG15UGhvdG9zKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3Mvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zLyR7aWR9YCk7XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVBlcmZvcm1lclBob3RvUGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLnBob3RvKSB7XG4gICAgICAgIGNvbnN0IHBob3RvID0gZGF0YS5waG90by5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBwaG90bywgcGhvdG8ubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWydwaG90byddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQT1NUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElQZXJmb3JtZXJQaG90b1BheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5waG90byAmJiBkYXRhLnBob3RvLmZpbGUpIHtcbiAgICAgICAgY29uc3QgcGhvdG8gPSBkYXRhLnBob3RvLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwaG90bycsIHBob3RvLCBwaG90by5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ3Bob3RvJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BVVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwbG9hZEltYWdlcyhmaWxlOiBGaWxlLCBwYXlsb2FkOiBhbnksIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvbikge1xuICAgIHJldHVybiB0aGlzLnVwbG9hZChcbiAgICAgICcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zL3VwbG9hZCcsXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZG5hbWU6ICdwaG90bycsXG4gICAgICAgICAgZmlsZVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAge1xuICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICBjdXN0b21EYXRhOiBwYXlsb2FkXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGhvdG9TZXJ2aWNlID0gbmV3IFBob3RvU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVBvc3RTZWFyY2ggfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQb3N0U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocXVlcnk6IElQb3N0U2VhcmNoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wb3N0cy9zZWFyY2gnLCBxdWVyeSBhcyBhbnkpKTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wb3N0cy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwb3N0U2VydmljZSA9IG5ldyBQb3N0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdXNlci9wZXJmb3JtZXItYXNzZXRzL3Byb2R1Y3RzL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG5cbiAgcHVyY2hhc2VkKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3B1cmNoYXNlZC1pdGVtcy91c2VyL3Byb2R1Y3RzJywgcGFyYW1zKSk7XG4gIH1cblxuICBnZXREb3dubG9hZExpbmsoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy8ke2lkfS9kb3dubG9hZC1saW5rYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RTZXJ2aWNlID0gbmV3IFByb2R1Y3RTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQdXJjaGFzZUl0ZW1TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcHVyY2hhc2VkLWl0ZW1zL3VzZXIvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIHB1cmNoYXNlSXRlbShpZDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcHVyY2hhc2UtaXRlbXMvJHt0eXBlfS8ke2lkfWAsIGRhdGEpO1xuICB9XG5cbiAgcHVyY2hhc2VQcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcHVyY2hhc2UtaXRlbXMvcHJvZHVjdC8ke2lkfWApO1xuICB9XG5cbiAgcHVyY2hhc2VWaWRlbyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3B1cmNoYXNlLWl0ZW1zL3ZpZGVvLyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHB1cmNoYXNlSXRlbVNlcnZpY2UgPSBuZXcgUHVyY2hhc2VJdGVtU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUmVmdW5kUmVxdWVzdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcmVmdW5kLXJlcXVlc3RzJywgZGF0YSk7XG4gIH1cblxuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcmVmdW5kLXJlcXVlc3RzL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWZ1bmRSZXF1ZXN0U2VydmljZSA9IG5ldyBSZWZ1bmRSZXF1ZXN0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVNldHRpbmcsIElDb3VudHJpZXMgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGFsbChncm91cCA9ICcnKTogUHJvbWlzZTxJUmVzcG9uc2U8SVNldHRpbmc+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9zZXR0aW5ncy9wdWJsaWMnLCB7IGdyb3VwIH0pKTtcbiAgfVxuXG4gIGdldENvdW50cmllcygpOiBQcm9taXNlPElSZXNwb25zZTxJQ291bnRyaWVzW10+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvY291bnRyaWVzL2xpc3QnKTtcbiAgfVxuXG4gIGdldFRpbWV6b25lcygpOiBQcm9taXNlPElSZXNwb25zZTxzdHJpbmdbXT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy90aW1lem9uZXMvbGlzdCcpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nU2VydmljZSA9IG5ldyBTZXR0aW5nU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSU9uZVRpbWVUb2tlbiwgU3RyZWFtU2V0dGluZ3MgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXRSZXNwb25zZUVycm9yIH0gZnJvbSAnc3JjL2xpYic7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIFN0cmVhbVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgZ2V0U2Vzc2lvbklkKGlkOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3N0cmVhbWluZy9zZXNzaW9uLyR7aWR9LyR7dHlwZX1gKTtcbiAgfVxuXG4gIGdvTGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3RyZWFtaW5nL2xpdmUnKTtcbiAgfVxuXG4gIGpvaW5QdWJsaWNDaGF0KHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvc3RyZWFtaW5nL2pvaW4vJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIHJlcXVlc3RQcml2YXRlQ2hhdChwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3N0cmVhbWluZy9wcml2YXRlLWNoYXQvJHtwZXJmb3JtZXJJZH1gKTtcbiAgfVxuXG4gIGFjY2VwdFByaXZhdGVDaGF0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9zdHJlYW1pbmcvcHJpdmF0ZS1jaGF0LyR7aWR9YCk7XG4gIH1cblxuICBzdGFydEdyb3VwQ2hhdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3RyZWFtaW5nL2dyb3VwLWNoYXQnKTtcbiAgfVxuXG4gIGpvaW5Hcm91cENoYXQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3N0cmVhbWluZy9ncm91cC1jaGF0LyR7aWR9YCk7XG4gIH1cblxuICBnZW5lcmF0ZU9uZVRpbWVUb2tlbihkYXRhOiBJT25lVGltZVRva2VuKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0cmVhbWluZy90b2tlbicsIGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgZ2V0UHVibGlzaFRva2VuKG9wdGlvbnM6IHtcbiAgICBzdHJlYW1JZDogc3RyaW5nLFxuICAgIHNldHRpbmdzOiBTdHJlYW1TZXR0aW5nc1xuICAgIH0sIGV4cGlyZURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2QnKS50b0RhdGUoKS5nZXRUaW1lKCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHNldHRpbmdzLCBzdHJlYW1JZCB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHsgc2VjdXJlT3B0aW9uIH0gPSBzZXR0aW5ncztcbiAgICAgIGlmIChzZWN1cmVPcHRpb24pIHtcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVPbmVUaW1lVG9rZW4oe1xuICAgICAgICAgIGlkOiBzdHJlYW1JZCxcbiAgICAgICAgICB0eXBlOiAncHVibGlzaCcsXG4gICAgICAgICAgZXhwaXJlRGF0ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3AuZGF0YS50b2tlbklkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGVycik7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFN1YnNjcmliZXJUb2tlbihvcHRpb25zOiB7XG4gICAgc3RyZWFtSWQ6IHN0cmluZyxcbiAgICBzZXR0aW5nczogU3RyZWFtU2V0dGluZ3NcbiAgICB9LCBleHBpcmVEYXRlID0gbW9tZW50KCkuYWRkKDEsICdkJykudG9EYXRlKCkuZ2V0VGltZSgpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzZXR0aW5ncywgc3RyZWFtSWQgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCB7IHNlY3VyZU9wdGlvbiB9ID0gc2V0dGluZ3M7XG4gICAgICBpZiAoc2VjdXJlT3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdlbmVyYXRlT25lVGltZVRva2VuKHtcbiAgICAgICAgICBpZDogc3RyZWFtSWQsXG4gICAgICAgICAgdHlwZTogJ3BsYXknLFxuICAgICAgICAgIGV4cGlyZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwLmRhdGEudG9rZW5JZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnIpO1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycm9yKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRMaXZlU3RyZWFtT3JWb2RVUkwob3B0aW9uczoge1xuICAgIHN0cmVhbUlkOiBzdHJpbmcsXG4gICAgc2V0dGluZ3M6IFN0cmVhbVNldHRpbmdzLFxuICAgIGFwcE5hbWU6IHN0cmluZ1xuICAgIH0sIGV4cGlyZURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2QnKS50b0RhdGUoKS5nZXRUaW1lKCksIF9wbGF5ZXIgPSAnaGxzJykge1xuICAgIC8vIGh0dHA6Ly9bSVBfQWRkcmVzc10vPEFwcGxpY2F0aW9uX05hbWU+L3N0cmVhbXMvc3RyZWFtSUQubXA0P3Rva2VuPXRva2VuSWRcbiAgICAvLyBodHRwOi8vW0lQX0FkZHJlc3NdLzxBcHBsaWNhdGlvbl9OYW1lPi9zdHJlYW1zL3N0cmVhbUlELm0zdTg/dG9rZW49dG9rZW5JZFxuICAgIC8vIGh0dHA6Ly9bSVBfQWRkcmVzc10vPEFwcGxpY2F0aW9uX05hbWU+L3BsYXkuaHRtbD9uYW1lPXN0cmVhbUlEJnBsYXlPcmRlcj1obHMmdG9rZW49dG9rZW5JZFxuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBzcmMgPSBgaHR0cHM6Ly8ke3ZpZXdlclVSTH06NTQ0My8ke2FwcE5hbWV9L3N0cmVhbXMvJHtzdHJlYW1JZH0ubTN1OCR7b25lVGltZVRva2VuID8gYD90b2tlbj0ke29uZVRpbWVUb2tlbn1gIDogJyd9YDtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgICAgIGNvbnN0IHsgYXBwTmFtZSwgc2V0dGluZ3MsIHN0cmVhbUlkIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgeyBzZWN1cmVPcHRpb24sIHZpZXdlclVSTCB9ID0gc2V0dGluZ3M7XG4gICAgICBjb25zdCBleHRlbnNpb24gPSBfcGxheWVyID09PSAnaGxzJyA/ICdtM3U4JyA6ICdtcDQnO1xuICAgICAgaWYgKCF2aWV3ZXJVUkwgfHwgIWFwcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBsZXQgb25lVGltZVRva2VuID0gJyc7XG4gICAgICBpZiAoc2VjdXJlT3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdlbmVyYXRlT25lVGltZVRva2VuKHtcbiAgICAgICAgICBpZDogc3RyZWFtSWQsXG4gICAgICAgICAgdHlwZTogJ3BsYXknLFxuICAgICAgICAgIGV4cGlyZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIG9uZVRpbWVUb2tlbiA9IHJlc3AuZGF0YS50b2tlbklkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHByb3RvY29sIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke3ZpZXdlclVSTH0vJHthcHBOYW1lfS9zdHJlYW1zLyR7c3RyZWFtSWR9LiR7ZXh0ZW5zaW9ufSR7b25lVGltZVRva2VuID8gYD90b2tlbj0ke29uZVRpbWVUb2tlbn1gIDogJyd9YDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGVycik7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0cmVhbVNlcnZpY2UgPSBuZXcgU3RyZWFtU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVN0dWRpbyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgU3R1ZGlvU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBtZShoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc3R1ZGlvL21lJywgaGVhZGVycyk7XG4gIH1cblxuICB1cGRhdGUocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvc3R1ZGlvL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlUGF5bWVudEluZm8ocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0dWRpby9iYW5rLXRyYW5zZmVyL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlRGlyZWN0RGVwb3N0KHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vZGlyZWN0LWRlcG9zaXQvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVQYXh1bShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVN0dWRpbz4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL3BheHVtL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlQml0cGF5KHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vYml0cGF5L3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0Q29tbWlzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zZXR0aW5ncy9zdHVkaW8vY29tbWlzc2lvbicpO1xuICB9XG5cbiAgYWRkTW9kZWwocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vbWVtYmVycycsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0TWVtYmVycyhwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9zdHVkaW8vbWVtYmVycycsIHBhcmFtcykpO1xuICB9XG5cbiAgZ2V0TWVtYmVyQ29tbWlzc2lvbnMocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc3R1ZGlvL2NvbW1pc3Npb24nLCBwYXJhbXMpKTtcbiAgfVxuXG4gIHVwZGF0ZU1lbWJlckNvbW1pc3Npb24oaWQ6IHN0cmluZywgY29tbWlzc2lvbjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvc3R1ZGlvL2NvbW1pc3Npb24vbWVtYmVyLyR7aWR9YCwgeyBjb21taXNzaW9uIH0pO1xuICB9XG5cbiAgZ2V0UGVyZm9ybWVyUmVxdWVzdChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BheW91dC1yZXF1ZXN0cy9zdHVkaW8vcGVyZm9ybWVyLXJlcXVlc3QnLCBwYXJhbXMpXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXR1c1BlcmZvcm1lclJlcXVlc3QoaWQ6IHN0cmluZywgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3BheW91dC1yZXF1ZXN0cy9zdHVkaW8vdXBkYXRlLyR7aWR9YCwgeyAuLi5wYXlsb2FkIH0pO1xuICB9XG5cbiAgdXBkYXRlTWVtYmVyU3RhdHVzKGlkOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3N0dWRpby9tZW1iZXJzLyR7aWR9LyR7c3RhdHVzfWApO1xuICB9XG5cbiAgc3RhdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc3R1ZGlvL3N0YXRzJyk7XG4gIH1cblxuICBnZXREb2N1bWVudHNVcGxvYWRVcmwoKSB7XG4gICAgcmV0dXJuIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vc3R1ZGlvL2RvY3VtZW50cy91cGxvYWRgO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdHVkaW9TZXJ2aWNlID0gbmV3IFN0dWRpb1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFRva2VuUGFja2FnZVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BhY2thZ2UvdG9rZW4vc2VhcmNoJywgcGFyYW1zKSk7XG4gIH1cblxuICBidXlUb2tlbnMoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wYXltZW50L3B1cmNoYXNlLXRva2Vucy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2tlblBhY2thZ2VTZXJ2aWNlID0gbmV3IFRva2VuUGFja2FnZVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdHJhbnNhY3Rpb25zL3VzZXIvc2VhcmNoJywgcGFyYW1zKSk7XG4gIH1cblxuICBzZW5kVGlwVG9rZW4ocGVyZm9ybWVySWQ6IHN0cmluZywgdG9rZW46IG51bWJlciwgY29udmVyc2F0aW9uSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVtYmVyL3NlbmQtdGlwLXRva2VuLyR7cGVyZm9ybWVySWR9YCwgeyB0b2tlbiwgY29udmVyc2F0aW9uSWQgfSk7XG4gIH1cblxuICBwdWJsaWMgc2VuZFBhaWRUb2tlbihjb252ZXJzYXRpb25JZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lbWJlci9zZW5kLXBheS10b2tlbi8ke2NvbnZlcnNhdGlvbklkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFuc2FjdGlvblNlcnZpY2UgPSBuZXcgVHJhbnNhY3Rpb25TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJVXNlciB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPElSZXNwb25zZTxJVXNlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy91c2Vycy9tZScsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBkYXRlTWUocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvdXNlcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldEF2YXRhclVwbG9hZFVybCh1c2VySWQ/OiBzdHJpbmcpIHtcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS91c2Vycy8ke3VzZXJJZH0vYXZhdGFyL3VwbG9hZGA7XG4gICAgfVxuICAgIHJldHVybiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3VzZXJzL2F2YXRhci91cGxvYWRgO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdXNlcnMvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2Vycy92aWV3LyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJQ291bnRyeSwgSUxhbmdndWdlcywgSVBob25lQ29kZXMgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFV0aWxzU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjb3VudHJpZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElDb3VudHJ5Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL2NvdW50cmllcy9saXN0Jyk7XG4gIH1cblxuICBsYW5ndWFnZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElMYW5nZ3VnZXM+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvbGFuZ3VhZ2VzL2xpc3QnKTtcbiAgfVxuXG4gIHBob25lQ29kZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElQaG9uZUNvZGVzPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3Bob25lLWNvZGVzL2xpc3QnKTtcbiAgfVxuXG4gIHN0YXRpc3RpY3MoKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3N0YXRpc3RpY3MvYWRtaW4nKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXRpbHNTZXJ2aWNlID0gbmV3IFV0aWxzU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVJlc3BvbnNlLCBJUGVyZm9ybWVyVmlkZW9QYXlsb2FkIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgVE9LRU4gfSBmcm9tICdzcmMvc2VydmljZXMvYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFZpZGVvU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy91c2VyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zL3NlYXJjaCcsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgcHVyY2hhc2VkKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcHVyY2hhc2VkLWl0ZW1zL3VzZXIvdmlkZW9zJywgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIG15VmlkZW9zKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3Mvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZU15VmlkZW8oaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfWApO1xuICB9XG5cbiAgY3JlYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElQZXJmb3JtZXJWaWRlb1BheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS52aWRlbykge1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRhdGEudmlkZW8uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgdmlkZW8sIHZpZGVvLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50cmFpbGVyKSB7XG4gICAgICAgIGNvbnN0IHRyYWlsZXIgPSBkYXRhLnRyYWlsZXIuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RyYWlsZXInLCB0cmFpbGVyLCB0cmFpbGVyLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50aHVtYm5haWwpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gZGF0YS50aHVtYm5haWwuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RodW1ibmFpbCcsIHRodW1ibmFpbCwgdGh1bWJuYWlsLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsndmlkZW8nLCAndGh1bWJuYWlsJywgJ3RyYWlsZXInXSkpLmZvckVhY2goXG4gICAgICAgICh2KSA9PiB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVBlcmZvcm1lclZpZGVvUGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLnZpZGVvICYmIGRhdGEudmlkZW8uZmlsZSkge1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRhdGEudmlkZW8uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgdmlkZW8sIHZpZGVvLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50cmFpbGVyICYmIGRhdGEudHJhaWxlci5maWxlKSB7XG4gICAgICAgIGNvbnN0IHRyYWlsZXIgPSBkYXRhLnRyYWlsZXIuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RyYWlsZXInLCB0cmFpbGVyLCB0cmFpbGVyLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50aHVtYm5haWwgJiYgZGF0YS50aHVtYm5haWwuZmlsZSkge1xuICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBkYXRhLnRodW1ibmFpbC5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGh1bWJuYWlsJywgdGh1bWJuYWlsLCB0aHVtYm5haWwubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWyd2aWRlbycsICd0aHVtYm5haWwnLCAndHJhaWxlciddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQVVQnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBpbmNyZWFzZVZpZXcoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC91c2VyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9L2luYy12aWV3YCk7XG4gIH1cblxuICAvLyB1cGRhdGUodmlkZW9JZCwgcGVyZm9ybWVySWQsIGRhdGEpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5wdXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHt2aWRlb0lkfWAsIHtcbiAgLy8gICAgIC4uLmRhdGEsXG4gIC8vICAgICBwZXJmb3JtZXJJZFxuICAvLyAgIH0pO1xuICAvLyB9XG4gIHVzZXJGaW5kVmlkZW9CeUlkKGlkOiBzdHJpbmcsIGhlYWRlcnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHtpZH1gLCBoZWFkZXJzKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdmlkZW9TZXJ2aWNlID0gbmV3IFZpZGVvU2VydmljZSgpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNvY2tldENvbnRleHQgfSBmcm9tICcuL1NvY2tldENvbnRleHQnO1xuaW1wb3J0IHsgd2FybmluZyB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgSUV2ZW50UHJvcHMge1xuICBldmVudDogc3RyaW5nO1xuICBoYW5kbGVyOiBGdW5jdGlvbjtcbn1cblxuY2xhc3MgRXZlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUV2ZW50UHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGV2ZW50LCBoYW5kbGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuY29udGV4dDtcblxuICAgIGlmICghc29ja2V0KSB7XG4gICAgICB3YXJuaW5nKCdTb2NrZXQgSU8gY29ubmVjdGlvbiBoYXMgbm90IGJlZW4gZXN0YWJsaXNoZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc29ja2V0Lm9uKGV2ZW50LCBoYW5kbGVyKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgZXZlbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc29ja2V0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgIHdhcm5pbmcoJ1NvY2tldCBJTyBjb25uZWN0aW9uIGhhcyBub3QgYmVlbiBlc3RhYmxpc2hlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzb2NrZXQub2ZmKGV2ZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuRXZlbnQuY29udGV4dFR5cGUgPSBTb2NrZXRDb250ZXh0O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU29ja2V0SU8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdhcm5pbmcsIGRlYnVnIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBTb2NrZXRDb250ZXh0IH0gZnJvbSAnLi9Tb2NrZXRDb250ZXh0JztcblxuaW50ZXJmYWNlIElTb2NrZXRQcm9wcyB7XG4gIHVyaT86IHN0cmluZztcbiAgY2hpbGRyZW46IGFueTtcbiAgbG9nZ2VkSW46IGJvb2xlYW47XG59XG5cbmNsYXNzIFNvY2tldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJU29ja2V0UHJvcHM+IHtcbiAgc29ja2V0O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuY29ubmVjdCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKG5leHRQcm9wczogYW55KSB7XG4gICAgY29uc3QgeyBsb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobmV4dFByb3BzLmxvZ2dlZEluICE9PSBsb2dnZWRJbikge1xuICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgfVxuXG4gIGNvbm5lY3QoKSB7XG4gICAgY29uc3QgeyBsb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0b2tlbiA9IGxvZ2dlZEluICYmIGF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyB1cmkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TT0NLRVRfRU5EUE9JTlQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0JywgJ3BvbGxpbmcnLCAnbG9uZy1wb2xsaW5nJ10sXG4gICAgICBxdWVyeTogdG9rZW4gPyBgdG9rZW49JHt0b2tlbn1gIDogJydcbiAgICB9O1xuXG4gICAgdGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQuY2xvc2UoKTtcblxuICAgIHRoaXMuc29ja2V0ID0gU29ja2V0SU8odXJpLCB0aGlzLm1lcmdlT3B0aW9ucyhvcHRpb25zKSk7XG5cbiAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnaW5pdGlhbGl6ZWQnO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnY29ubmVjdGVkJztcbiAgICAgIGRlYnVnKCdjb25uZWN0ZWQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2Rpc2Nvbm5lY3RlZCc7XG4gICAgICBkZWJ1ZygnZGlzY29ubmVjdCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2ZhaWxlZCc7XG4gICAgICB3YXJuaW5nKCdlcnJvcicsIGVycik7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0JywgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdjb25uZWN0ZWQnO1xuICAgICAgZGVidWcoJ3JlY29ubmVjdCcsIGRhdGEpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdF9hdHRlbXB0JywgKCkgPT4ge1xuICAgICAgZGVidWcoJ3JlY29ubmVjdF9hdHRlbXB0Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0aW5nJywgKCkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ3JlY29ubmVjdGluZyc7XG4gICAgICBkZWJ1ZygncmVjb25uZWN0aW5nJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0X2ZhaWxlZCcsIChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2ZhaWxlZCc7XG4gICAgICB3YXJuaW5nKCdyZWNvbm5lY3RfZmFpbGVkJywgZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgbWVyZ2VPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgcmVjb25uZWN0aW9uOiB0cnVlLFxuICAgICAgcmVjb25uZWN0aW9uQXR0ZW1wdHM6IEluZmluaXR5LFxuICAgICAgcmVjb25uZWN0aW9uRGVsYXk6IDEgKiAxMDAwLFxuICAgICAgcmVjb25uZWN0aW9uRGVsYXlNYXg6IDUgKiAxMDAwLFxuICAgICAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gICAgICB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCcsICdwb2xsaW5nJywgJ2xvbmctcG9sbGluZyddLFxuICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4geyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTb2NrZXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnNvY2tldH0+XG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKX1cbiAgICAgIDwvU29ja2V0Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlcyA9IChzdGF0ZTogYW55KSA9PiAoe1xuICBsb2dnZWRJbjogc3RhdGUuYXV0aC5sb2dnZWRJblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVzKShTb2NrZXQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFNvY2tldENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PGFueT4oJ3NvY2tldCcpO1xuIiwiaW1wb3J0IFNvY2tldCBmcm9tICcuL1NvY2tldCc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudCc7XG5pbXBvcnQgeyBTb2NrZXRDb250ZXh0IH0gZnJvbSAnLi9Tb2NrZXRDb250ZXh0JztcblxuaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICBpZiAod2luZG93KSB3aW5kb3cuUmVhY3RTb2NrZXRJTyA9IHsgU29ja2V0LCBFdmVudCwgU29ja2V0Q29udGV4dCB9O1xufVxuXG5leHBvcnQgeyBTb2NrZXQsIEV2ZW50LCBTb2NrZXRDb250ZXh0IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItc3ByZWFkICovXG4vKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSAoLi4uYXJncykgPT4ge1xuICAvLyBkZWJ1ZyBvbiBkZXZlbG9wbWVudCBhbmQgc3RhZ2luZy5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHJldHVybjtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYXJncy5qb2luKCcgJykpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cbn07XG5cbmV4cG9ydCBjb25zdCBkZWJ1ZyA9ICguLi5hcmdzKSA9PiB7XG4gIC8vIGRlYnVnIG9uIGRldmVsb3BtZW50IGFuZCBzdGFnaW5nLlxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykgcmV0dXJuO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5kZWJ1ZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZGVidWcuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoLXRvLXJlZ2V4cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1hY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=