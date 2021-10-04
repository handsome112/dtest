module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: ROLE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE", function() { return ROLE; });
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_withReduxSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux/withReduxSaga */ "./src/redux/withReduxSaga.ts");
/* harmony import */ var _layouts_base_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @layouts/base-layout */ "./src/layouts/base-layout.tsx");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _redux_user_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redux/user/actions */ "./src/redux/user/actions.ts");
/* harmony import */ var _redux_performer_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redux/performer/actions */ "./src/redux/performer/actions.ts");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/setting.service */ "./src/services/setting.service.ts");
/* harmony import */ var _redux_studio_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redux/studio/actions */ "./src/redux/studio/actions.ts");
/* harmony import */ var _redux_ui_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var src_services_api_request__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/api-request */ "./src/services/api-request.ts");
/* harmony import */ var src_socket__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/socket */ "./src/socket/index.ts");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../style/index.less */ "./style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _redux_settings_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @redux/settings/actions */ "./src/redux/settings/actions.ts");
/* harmony import */ var _redux_banner_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @redux/banner/actions */ "./src/redux/banner/actions.ts");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/constants */ "./src/constants.tsx");
/* harmony import */ var _redux_streaming_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @redux/streaming/actions */ "./src/redux/streaming/actions.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_23__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























const ROLE = {
  STUDIO: 'studio',
  PERFORMER: 'performer',
  USER: 'user'
};

function redirectLogin(ctx, authenticate) {
  if (false) {} // fix for production build
  // ctx.res.clearCookie && ctx.res.clearCookie('token');


  const authCookie = cookie__WEBPACK_IMPORTED_MODULE_23___default.a.serialize('token', '', {
    maxAge: -1
  });
  ctx.res.writeHead && ctx.res.writeHead(302, {
    'Set-Cookie': authCookie,
    Location: authenticate && authenticate === ROLE.STUDIO ? '/studio/login' : '/auth/login/user'
  });
  ctx.res.end && ctx.res.end();
}

async function auth(ctx, authenticate) {
  try {
    if (false) {}
    const {
      store
    } = ctx;
    const state = store.getState();

    if (state.auth && state.auth.loggedIn) {
      return;
    } // TODO - move to a service


    const {
      token,
      role
    } = next_cookies__WEBPACK_IMPORTED_MODULE_3___default()(ctx);

    if (token && role) {
      _services_index__WEBPACK_IMPORTED_MODULE_6__["authService"].setAuthHeaderToken(token);
      let resp;

      if (role === src_services_api_request__WEBPACK_IMPORTED_MODULE_14__["PERFORMER_ROLE"]) {
        resp = await _services_index__WEBPACK_IMPORTED_MODULE_6__["performerService"].me({
          Authorization: token
        });
        store.dispatch(Object(_redux_performer_actions__WEBPACK_IMPORTED_MODULE_10__["updateCurrentPerformer"])(resp.data));
      }

      if (role === src_services_api_request__WEBPACK_IMPORTED_MODULE_14__["USER_ROLE"]) {
        resp = await _services_index__WEBPACK_IMPORTED_MODULE_6__["userService"].me({
          Authorization: token
        });
        store.dispatch(Object(_redux_user_actions__WEBPACK_IMPORTED_MODULE_9__["updateCurrentUser"])(resp.data));
      }

      if (role === ROLE.STUDIO) {
        resp = await _services_index__WEBPACK_IMPORTED_MODULE_6__["studioService"].me({
          Authorization: token
        });
        store.dispatch(Object(_redux_studio_actions__WEBPACK_IMPORTED_MODULE_12__["updateCurrentStudio"])(resp.data));
      } // TODO - check permission


      store.dispatch(Object(_redux_auth_actions__WEBPACK_IMPORTED_MODULE_8__["loginSuccess"])());
    } else if (authenticate) {
      redirectLogin(ctx, authenticate);
      return;
    }
  } catch (e) {
    if (authenticate) {
      redirectLogin(ctx, authenticate);
    }
  }
}

async function updateSettingsStore(ctx, settings) {
  try {
    const {
      store
    } = ctx;
    store.dispatch(Object(_redux_settings_actions__WEBPACK_IMPORTED_MODULE_17__["updateSettings"])({
      tipSound: settings.tipSound
    }));
    store.dispatch(Object(_redux_banner_actions__WEBPACK_IMPORTED_MODULE_18__["getBannersSuccess"])(settings.banners));
    store.dispatch(Object(_redux_ui_actions__WEBPACK_IMPORTED_MODULE_13__["updateUIValue"])({
      placeholderLoginUrl: settings.placeholderLoginUrl,
      placeholderAvatarUrl: settings.placeholderAvatarUrl,
      logo: settings.logoUrl,
      siteName: settings.siteName,
      menus: settings.menus,
      footerContent: settings.footerContent,
      currencySymbol: settings.currencySymbol,
      singularTextModel: settings.singularTextModel,
      pluralTextModel: settings.pluralTextModel,
      popup18Enabled: settings.popup18Enabled,
      popup18ContentId: settings.popup18ContentId
    }));
    store.dispatch(Object(_redux_streaming_actions__WEBPACK_IMPORTED_MODULE_20__["updateLiveStreamSettings"])(Object(lodash__WEBPACK_IMPORTED_MODULE_21__["pick"])(settings, [src_constants__WEBPACK_IMPORTED_MODULE_19__["SETTING_KEYS"].VIEWER_URL, src_constants__WEBPACK_IMPORTED_MODULE_19__["SETTING_KEYS"].PUBLISHER_URL, src_constants__WEBPACK_IMPORTED_MODULE_19__["SETTING_KEYS"].SUBSCRIBER_URL, src_constants__WEBPACK_IMPORTED_MODULE_19__["SETTING_KEYS"].OPTION_FOR_BROADCAST, src_constants__WEBPACK_IMPORTED_MODULE_19__["SETTING_KEYS"].OPTION_FOR_PRIVATE, src_constants__WEBPACK_IMPORTED_MODULE_19__["SETTING_KEYS"].OPTION_FOR_GROUP, src_constants__WEBPACK_IMPORTED_MODULE_19__["SETTING_KEYS"].DEFAULT_OFFLINE_MODEL_IMAGE, src_constants__WEBPACK_IMPORTED_MODULE_19__["SETTING_KEYS"].DEFAULT_MODEL_PRIVATECALL_WITH_USER_IMAGE, src_constants__WEBPACK_IMPORTED_MODULE_19__["SETTING_KEYS"].DEFAULT_MODEL_IN_GROUP_CHAT_IMAGE, src_constants__WEBPACK_IMPORTED_MODULE_19__["SETTING_KEYS"].ANT_MEDIA_APPNAME]))); // TODO - update others like meta data
  } catch (e) {
    // TODO - implement me
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

class Application extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  // TODO - consider if we need to use get static props in children component instead?
  // or check in render?
  static async getInitialProps({
    Component,
    ctx
  }) {
    // won't check auth for un-authenticated page such as login, register
    // use static field in the component
    await auth(ctx, Component.authenticate); // server side to load settings, once time only

    let settings = {};

    if (true) {
      var _banner$data;

      const [_settings, _banner] = await Promise.all([_services_setting_service__WEBPACK_IMPORTED_MODULE_11__["settingService"].all(), _services_index__WEBPACK_IMPORTED_MODULE_6__["bannerService"].search({
        status: 'active'
      })]); // TODO encrypt, decypt header script, footer script or other info if needed

      settings = _settings.data || {};
      await updateSettingsStore(ctx, _objectSpread(_objectSpread({}, settings), {}, {
        banners: (_banner === null || _banner === void 0 ? void 0 : (_banner$data = _banner.data) === null || _banner$data === void 0 ? void 0 : _banner$data.data) || []
      }));
    }

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ctx
      });
    } // TODO - overwrite for ui config by using redux-store


    return {
      settings,
      pageProps,
      layout: Component.layout
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store,
      settings
    } = this.props;
    const {
      layout
    } = Component;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_22___default.a, null, __jsx("title", null, typeof settings.siteName === 'string' && settings.siteName.length > 0 ? settings.siteName : 'Application'), __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    })), __jsx(src_socket__WEBPACK_IMPORTED_MODULE_15__["Socket"], null, __jsx(_layouts_base_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      layout: layout,
      maintenanceMode: settings.maintenanceMode
    }, __jsx(Component, pageProps))));
  }

}

_defineProperty(Application, "settingQuery", false);

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_withReduxSaga__WEBPACK_IMPORTED_MODULE_4__["default"])(Application));

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

/***/ "./src/components/common/layout/footer.less":
/*!**************************************************!*\
  !*** ./src/components/common/layout/footer.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/layout/footer.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/layout/footer.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.less */ "./src/components/common/layout/footer.less");
/* harmony import */ var _footer_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/no-danger */







class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  renderMenu() {
    const {
      ui
    } = this.props;
    const {
      menus = []
    } = ui;
    const data = [];

    if (menus.length) {
      menus.forEach(menu => {
        const {
          path,
          isOpenNewTab,
          internal,
          title
        } = menu;
        const href = path || '/';
        const key = Object(_lib_string__WEBPACK_IMPORTED_MODULE_5__["generateUuid"])();

        if (internal) {
          data.push(__jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            key: key,
            href: href
          }, __jsx("a", {
            className: "mr-8"
          }, title)));
        } else {
          data.push(__jsx("a", {
            href: href,
            key: key,
            className: "mr-8",
            target: isOpenNewTab ? '_blank' : '',
            rel: "noreferrer"
          }, menu.title));
        }
      });
    }

    return data;
  }

  render() {
    const {
      ui
    } = this.props;
    const {
      siteName
    } = ui;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Footer, {
      id: "layoutFooter"
    }, __jsx("div", {
      className: "footer-custom"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), this.renderMenu(), ui !== null && ui !== void 0 && ui.footerContent ? __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: ui.footerContent
      }
    }) : __jsx("p", null, "\xA9 Copyright", ' ', siteName, ' ', new Date().getFullYear(), ". All Rights! Reserved")));
  }

}

const mapStateToProps = state => ({
  ui: _objectSpread({}, state.ui)
});

const mapDispatch = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatch)(Footer));

/***/ }),

/***/ "./src/components/common/layout/form-register-placeholder.tsx":
/*!********************************************************************!*\
  !*** ./src/components/common/layout/form-register-placeholder.tsx ***!
  \********************************************************************/
/*! exports provided: FormRegisterPlaceHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterPlaceHolder", function() { return FormRegisterPlaceHolder; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FormRegisterPlaceHolder = ({
  ui
}) => __jsx("div", {
  className: "form-register-placeholder",
  style: ui !== null && ui !== void 0 && ui.placeholderLoginUrl ? {
    backgroundImage: `url(${ui.placeholderLoginUrl})`
  } : {}
});

/***/ }),

/***/ "./src/components/common/layout/header.less":
/*!**************************************************!*\
  !*** ./src/components/common/layout/header.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/layout/header.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/layout/header.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_base_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common/base/icons */ "./src/components/common/base/icons.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/index */ "./src/services/index.ts");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _redux_performer_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redux/performer/actions */ "./src/redux/performer/actions.ts");
/* harmony import */ var _redux_settings_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redux/settings/actions */ "./src/redux/settings/actions.ts");
/* harmony import */ var src_socket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/socket */ "./src/socket/index.ts");
/* harmony import */ var _redux_streaming_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redux/streaming/actions */ "./src/redux/streaming/actions.ts");
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var src_redux_studio_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/redux/studio/actions */ "./src/redux/studio/actions.ts");
/* harmony import */ var _redux_message_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redux/message/actions */ "./src/redux/message/actions.ts");
/* harmony import */ var _components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/common/layout/numberformat */ "./src/components/common/layout/numberformat.tsx");
/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header.less */ "./src/components/common/layout/header.less");
/* harmony import */ var _header_less__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_header_less__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/constants */ "./src/constants.tsx");
/* harmony import */ var _left_header_content__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./left-header-content */ "./src/components/common/layout/left-header-content.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-return-assign */






















const roundBalance = balance => {
  if (balance < 10000) return Math.round(balance);
  return '9999+';
};

const EVENT = {
  RECEIVED_PRIVATE_CHAT_REQUEST: 'private-chat-request',
  NOTIFY_READ_MESSAGE: 'nofify_read_messages_in_conversation',
  TIPPED: 'tipped'
};

class Header extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, "_audio", void 0);

    _defineProperty(this, "handleMessage", event => {
      const {
        countNotReadMessage: dispatchCountNotReadMessage
      } = this.props;
      event && dispatchCountNotReadMessage(event.total);
    });

    _defineProperty(this, "handlePrivateChat", data => {
      const {
        addPrivateRequest: dispatchAddPrivateRequest,
        settings
      } = this.props;
      const path = settings[src_constants__WEBPACK_IMPORTED_MODULE_19__["SETTING_KEYS"].OPTION_FOR_PRIVATE] === 'webrtc' ? 'webrtc/' : '';
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success({
        content: __jsx("span", null, data.user.username, ' ', "sent you a private chat request."),
        duration: 10,
        key: data.conversationId,
        onClick: () => {
          next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
            pathname: `/live/${path}privatechat`,
            query: {
              id: data.conversationId
            }
          }, `/live/${path}privatechat/${data.conversationId}`);
          antd__WEBPACK_IMPORTED_MODULE_3__["message"].destroy(data.conversationId);
        }
      });
      this._audio && this._audio.play();
      dispatchAddPrivateRequest(_objectSpread(_objectSpread({}, data), {}, {
        createdAt: new Date()
      }));
    });

    _defineProperty(this, "sendTipHandler", ({
      token,
      senderInfo
    }) => {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success(`${senderInfo.username} tip ${token === null || token === void 0 ? void 0 : token.toFixed(2)} tokens`, 10);
      this._audio && this._audio.play();
    });

    _defineProperty(this, "initSocketEvent", () => {
      this.socket = this.context;
      const {
        currentUser
      } = this.props;

      if (this.socket.connected) {
        if (currentUser.role === 'performer') {
          this.socket.on(EVENT.RECEIVED_PRIVATE_CHAT_REQUEST, this.handlePrivateChat);
          this.socket.on(EVENT.TIPPED, this.sendTipHandler);
        }

        this.socket.on(EVENT.NOTIFY_READ_MESSAGE, this.handleMessage);
      } else {
        this.socket.on('connect', () => {
          if (currentUser.role === 'performer') {
            this.socket.on(EVENT.RECEIVED_PRIVATE_CHAT_REQUEST, this.handlePrivateChat);
            this.socket.on(EVENT.TIPPED, this.sendTipHandler);
          }

          this.socket.on(EVENT.NOTIFY_READ_MESSAGE, this.handleMessage);
        });
      }
    });

    this.state = {
      showSearch: false
    };
  }

  async componentDidMount() {
    const {
      getPerformerCategories: dispatchGetPerformerCategories,
      getCountries: dispatchGetCountries,
      getStudioStats: dispatchGetStudioStats,
      currentUser,
      loggedIn,
      tipSound,
      countNotReadMessage: dispatchCountNotReadMessage
    } = this.props; // this.socket = this.context;

    dispatchGetPerformerCategories({
      limit: 0
    });
    dispatchGetCountries();

    if (currentUser !== null && currentUser !== void 0 && currentUser._id) {
      const data = await (await src_services_index__WEBPACK_IMPORTED_MODULE_4__["messageService"].countTotalNotRead()).data;

      if (data) {
        dispatchCountNotReadMessage(data.total);
      }
    }

    if (currentUser !== null && currentUser !== void 0 && currentUser._id && currentUser.role === 'studio') {
      dispatchGetStudioStats();
    }

    if (loggedIn) {
      this.initSocketEvent();
      this.checkPermissionAccess();
    }

    this._audio = new Audio(tipSound);
    this._audio.volume = 0.5;
  }

  componentDidUpdate(prevProps) {
    const {
      loggedIn,
      router: {
        query: {
          unauthorized
        }
      }
    } = this.props;

    if (loggedIn && prevProps.loggedIn !== loggedIn) {
      setTimeout(this.initSocketEvent, 1000);
    }

    if (unauthorized !== prevProps.router.query.unauthorized) {
      this.checkPermissionAccess();
    }
  }

  componentWillUnmount() {
    if (this.socket) {
      this.socket.off(EVENT.NOTIFY_READ_MESSAGE);
      this.socket.off(EVENT.RECEIVED_PRIVATE_CHAT_REQUEST);
      this.socket.off(EVENT.TIPPED);
    }
  }

  onSearchPerformer(key) {
    this.search(key);
  }

  onPressEnter(event) {
    const target = event.currentTarget;
    const key = target.value;
    this.search(key);
  }

  search(key) {
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
      pathname: '/',
      query: {
        q: key
      }
    }, `/?q=${key}`);
  }

  async checkPermissionAccess() {
    const {
      loggedIn,
      router: {
        query: {
          unauthorized
        }
      }
    } = this.props;

    if (!loggedIn || !unauthorized) {
      return;
    }

    this.beforeLogout();
  }

  async beforeLogout() {
    const {
      logout: dispatchLogout
    } = this.props;
    dispatchLogout();
  }

  render() {
    const {
      ui,
      loggedIn,
      privateRequests,
      currentUser,
      totalNotReadMessage,
      settings
    } = this.props;
    const {
      showSearch
    } = this.state;
    const path = settings[src_constants__WEBPACK_IMPORTED_MODULE_19__["SETTING_KEYS"].OPTION_FOR_PRIVATE] === 'webrtc' ? 'webrtc/' : '';
    const rightContent = loggedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: loggedIn && currentUser.role === 'user' ? '/account/user/funds-tokens' : '#'
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: `${currentUser.balance && currentUser.balance.toFixed(2) || 0} Tokens`
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      style: {
        margin: '0px 10px',
        color: '#ff0066'
      },
      className: "btn-tokens"
    }, `${roundBalance((currentUser === null || currentUser === void 0 ? void 0 : currentUser.balance) || 0)} Tokens`))), currentUser.role === 'performer' && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
      overlay: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], null, privateRequests.length > 0 ? privateRequests.map(request => {
        var _request$user, _request$user2, _request$user3;

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
          onClick: () => antd__WEBPACK_IMPORTED_MODULE_3__["message"].destroy(request.conversationId)
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: {
            pathname: `/live/${path}privatechat`,
            query: {
              id: request.conversationId,
              streamId: request.id
            }
          },
          as: `/live/${path}privatechat/${request.conversationId}?streamId=${request.id}`,
          key: request.conversationId
        }, __jsx("a", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          bordered: false,
          hoverable: false
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
          avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
            src: ((_request$user = request.user) === null || _request$user === void 0 ? void 0 : _request$user.avatar) || '/default-user-icon.png'
          }),
          title: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, (_request$user2 = request.user) === null || _request$user2 === void 0 ? void 0 : _request$user2.username), ' ', "(", __jsx(_components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_17__["default"], {
            value: ((_request$user3 = request.user) === null || _request$user3 === void 0 ? void 0 : _request$user3.balance) || 0,
            suffix: " tokens"
          }), ")"),
          description: Object(src_lib__WEBPACK_IMPORTED_MODULE_14__["formatDate"])(request === null || request === void 0 ? void 0 : request.createdAt)
        })))));
      }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, null, "There are no private request."))
    }, __jsx("span", {
      className: "call-requests"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
      count: privateRequests.length,
      showZero: true
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["BellOutlined"], {
      style: {
        color: '#ffffff'
      }
    })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
      overlay: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
        key: "menu-right-content"
      }, currentUser.role === 'user' && [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        key: "settings-menu-right-content",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/account/user/account-settings')
      }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["SettingOutlined"], {
        className: "primary-icon"
      }), ' ', "Profile")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        key: "favorite-menu-right-content",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/account/user/favorites')
      }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartOutlined"], {
        className: "primary-icon"
      }), ' ', "My Favorites")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        key: "funds-tokens-menu-right-content",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/account/user/funds-tokens')
      }, __jsx("span", null, __jsx("span", {
        className: "anticon primary-icon"
      }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_2__["FundsIcon"], null)), ' ', "Funds / Tokens")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        key: "user-messages-menu-right-content",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/messages')
      }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutlined"], {
        className: "primary-icon"
      }), ' ', "Messages (", totalNotReadMessage || 0, ")"))], currentUser.role === 'performer' && [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        key: "profile-menu-right-content",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/account/performer/profile')
      }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["UserOutlined"], {
        className: "primary-icon"
      }), ' ', "Profile")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        key: "account-settings-menu-right-content",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/account/performer/account-settings')
      }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["SettingOutlined"], {
        className: "primary-icon"
      }), ' ', "Account Settings")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        key: "model-messages-menu-right-content",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/messages')
      }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutlined"], {
        className: "primary-icon"
      }), ' ', "Messages (", totalNotReadMessage, ")"))], currentUser.role === 'studio' && [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        key: "account-settings-menu-right-content",
        onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/studio/account-settings')
      }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["SettingOutlined"], {
        className: "primary-icon"
      }), ' ', "Account Settings"))], __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        key: "log-out",
        onClick: this.beforeLogout.bind(this)
      }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["LogoutOutlined"], {
        className: "primary-icon"
      }), ' ', "Log out"))
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      style: {
        margin: '0 15px',
        cursor: 'pointer',
        background: '#ffffff'
      },
      src: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.avatar) || '/default-user-icon.png'
    }))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      className: "btn-login",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/auth/login/user', '/auth/login')
    }, "Login");
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Header, {
      className: "header",
      id: "layoutHeader"
    }, __jsx("div", {
      className: "left-container"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/"
    }, __jsx("a", {
      className: "header-logo"
    }, "            ", __jsx("img", {
      src: typeof ui.logo === 'string' && ui.logo.length > 0 ? ui.logo : '/xcam-logo-white.png',
      alt: "header-logo"
    }))), __jsx("div", {
      className: "menu-left-header"
    }, __jsx(_left_header_content__WEBPACK_IMPORTED_MODULE_20__["default"], this.props))), __jsx("div", {
      className: "right-container"
    }, __jsx("div", {
      className: showSearch ? 'search-icon active' : 'search-icon',
      "aria-hidden": true,
      onClick: () => this.setState({
        showSearch: !showSearch
      })
    }, showSearch ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CloseOutlined"], null) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["SearchOutlined"], null)), __jsx("div", {
      className: !showSearch ? 'hide search-bar' : 'search-bar'
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
      placeholder: "Enter keyword!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
      loading: false,
      allowClear: true,
      enterButton: true,
      onPressEnter: this.onPressEnter.bind(this),
      onSearch: this.onSearchPerformer.bind(this)
    })), rightContent));
  }

}

Header.contextType = src_socket__WEBPACK_IMPORTED_MODULE_12__["SocketContext"];

const userSelecter = state => state.user.current;

const performerSelecter = state => state.performer.current;

const studioSelecter = state => state.studio.current;

const authSelecter = state => state.auth;

const currentUserSelecter = Object(reselect__WEBPACK_IMPORTED_MODULE_5__["createSelector"])(userSelecter, performerSelecter, studioSelecter, authSelecter, (user, performer, studio, auth) => {
  if (!auth.loggedIn) return {};

  if (user !== null && user !== void 0 && user._id) {
    return _objectSpread(_objectSpread({}, user), {}, {
      role: 'user'
    });
  }

  if (performer !== null && performer !== void 0 && performer._id) {
    return _objectSpread(_objectSpread({}, performer), {}, {
      role: 'performer'
    });
  }

  if (studio !== null && studio !== void 0 && studio._id) {
    return _objectSpread(_objectSpread({}, studio), {}, {
      role: 'studio'
    });
  }

  return {};
});
Header.contextType = src_socket__WEBPACK_IMPORTED_MODULE_12__["SocketContext"];

const mapStateToProps = state => _objectSpread({
  ui: _objectSpread({}, state.ui),
  currentUser: currentUserSelecter(state),
  tipSound: state.settings.tipSound,
  loggedIn: state.auth.loggedIn,
  performerCategories: state.performer.categories,
  totalNotReadMessage: state.message.totalNotReadMessage
}, state.streaming);

const mapDispatch = {
  logout: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_9__["logout"],
  getPerformerCategories: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_10__["getPerformerCategories"],
  getCountries: _redux_settings_actions__WEBPACK_IMPORTED_MODULE_11__["getCountries"],
  addPrivateRequest: _redux_streaming_actions__WEBPACK_IMPORTED_MODULE_13__["addPrivateRequest"],
  getStudioStats: src_redux_studio_actions__WEBPACK_IMPORTED_MODULE_15__["getStudioStats"],
  countNotReadMessage: _redux_message_actions__WEBPACK_IMPORTED_MODULE_16__["countNotReadMessage"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatch)(Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Header)));

/***/ }),

/***/ "./src/components/common/layout/index.ts":
/*!***********************************************!*\
  !*** ./src/components/common/layout/index.ts ***!
  \***********************************************/
/*! exports provided: FormRegisterPlaceHolder, Popup18PlusContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_register_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-register-placeholder */ "./src/components/common/layout/form-register-placeholder.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormRegisterPlaceHolder", function() { return _form_register_placeholder__WEBPACK_IMPORTED_MODULE_0__["FormRegisterPlaceHolder"]; });

/* harmony import */ var _popup_18plus_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-18plus-content */ "./src/components/common/layout/popup-18plus-content.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup18PlusContent", function() { return _popup_18plus_content__WEBPACK_IMPORTED_MODULE_1__["Popup18PlusContent"]; });




/***/ }),

/***/ "./src/components/common/layout/left-header-content.less":
/*!***************************************************************!*\
  !*** ./src/components/common/layout/left-header-content.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/layout/left-header-content.tsx":
/*!**************************************************************!*\
  !*** ./src/components/common/layout/left-header-content.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var _left_header_content_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./left-header-content.less */ "./src/components/common/layout/left-header-content.less");
/* harmony import */ var _left_header_content_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_left_header_content_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants */ "./src/constants.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const LeftHeaderContent = ({
  loggedIn,
  currentUser,
  pluralTextModel,
  performerCategories,
  settings
}) => {
  const [selectedKey, setSelectedKey] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');
  const path = settings[src_constants__WEBPACK_IMPORTED_MODULE_6__["SETTING_KEYS"].OPTION_FOR_GROUP] === 'webrtc' ? 'webrtc/' : '';

  const categoryMenu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, performerCategories.data.length > 0 && performerCategories.data.map(category => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: `category-${category._id}`,
    onClick: () => {
      setSelectedKey('');
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/performer-category',
      query: {
        slug: category.slug,
        category: JSON.stringify(category)
      }
    },
    as: `/performer-category/${category.slug}`
  }, __jsx("a", null, category.name)))));

  const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    onClick: () => {
      setSelectedKey('');
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/live"
  }, __jsx("a", null, "Go Live"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/live/${path}groupchat`
  }, __jsx("a", null, "Group Chat"))));

  return __jsx("nav", null, __jsx("ul", {
    className: "ant-menu ant-menu-root ant-menu-horizontal ant-menu-light",
    style: {
      display: 'flex'
    }
  }, __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('ant-menu-item', {
      'ant-menu-item-selected': selectedKey === 'home'
    }),
    onClick: () => {
      setSelectedKey('home');
    },
    "aria-hidden": "true"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    shallow: true
  }, __jsx("a", null, "Home"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    overlay: categoryMenu
  }, __jsx("li", {
    className: "ant-menu-item"
  }, __jsx("span", null, "Categories"))), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('ant-menu-item', {
      'ant-menu-item-selected': selectedKey === 'model'
    }),
    onClick: () => {
      setSelectedKey('model');
    },
    "aria-hidden": "true"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/performer-category",
    as: "/all-models"
  }, __jsx("a", null, `All ${pluralTextModel || 'Models'}`))), loggedIn && (currentUser === null || currentUser === void 0 ? void 0 : currentUser._id) && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'performer' && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('ant-menu-item hidden-sm', {
      'ant-menu-item-selected': selectedKey === 'live'
    }),
    onClick: () => {
      setSelectedKey('live');
    },
    "aria-hidden": "true"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/live"
  }, __jsx("a", null, "Go Live"))), __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('ant-menu-item hidden-sm', {
      'ant-menu-item-selected': selectedKey === 'groupchat'
    }),
    onClick: () => {
      setSelectedKey('groupchat');
    },
    "aria-hidden": "true"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/live/${path}groupchat`
  }, __jsx("a", null, "Group Chat"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    overlay: menu
  }, __jsx("li", {
    className: "ant-menu-item visible-sm"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["MoreOutlined"], null))))));
};

LeftHeaderContent.defaultProps = {
  loggedIn: false,
  currentUser: null,
  settings: null,
  pluralTextModel: '',
  performerCategories: {
    total: 0,
    data: []
  }
};

const mapStateToProps = state => _objectSpread(_objectSpread({
  loggedIn: state.auth.loggedIn
}, state.performer.performers), state.ui);

const mapDispatch = {
  updateUIValue: src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_4__["updateUIValue"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatch)(LeftHeaderContent));

/***/ }),

/***/ "./src/components/common/layout/numberformat.tsx":
/*!*******************************************************!*\
  !*** ./src/components/common/layout/numberformat.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const NumberFormat = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-number-format */ "react-number-format", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-number-format */ "react-number-format")],
    modules: ['react-number-format']
  }
});
/* harmony default export */ __webpack_exports__["default"] = (_ref => {
  let {
    decimalScale
  } = _ref,
      props = _objectWithoutProperties(_ref, ["decimalScale"]);

  return __jsx(NumberFormat, _extends({}, props, {
    displayType: "text",
    decimalScale: decimalScale || 2,
    decimalSeparator: ",",
    thousandSeparator: "."
  }));
});

/***/ }),

/***/ "./src/components/common/layout/popup-18plus-content.less":
/*!****************************************************************!*\
  !*** ./src/components/common/layout/popup-18plus-content.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/layout/popup-18plus-content.tsx":
/*!***************************************************************!*\
  !*** ./src/components/common/layout/popup-18plus-content.tsx ***!
  \***************************************************************/
/*! exports provided: Popup18PlusContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup18PlusContent", function() { return Popup18PlusContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _popup_18plus_content_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-18plus-content.less */ "./src/components/common/layout/popup-18plus-content.less");
/* harmony import */ var _popup_18plus_content_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_popup_18plus_content_less__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Popup18PlusContent() {
  return __jsx("div", null, __jsx("div", {
    className: "confirmage__header text-center"
  }, "YOU MUST BE OVER 18 AND AGREE TO THE TERMS BELOW BEFORE CONTINUING:"), __jsx("div", {
    className: "confirmage__description text-center"
  }, __jsx("div", {
    className: "scroll"
  }, __jsx("p", null, "You also agree to share your information with Duodecad ITS Learn More", __jsx("br", null), "You also agree to share information with Duodecad ITS because the website will not work properly without this agreement.", __jsx("br", null), "An important part of the cam material is provided by Duodecad ITS:", __jsx("br", null), "The profiles content and photographs", __jsx("br", null), "The player and his functionalities", __jsx("br", null), "The payment processor", __jsx("br", null), "...", __jsx("br", null), "Therefore, every page is depending on Duodecad ITS and can\u2019t be dissociated with (users URL) service."), __jsx("p", null, "This website contains information, links, images and videos of sexually explicit material (collectively, the \"Sexually Explicit Material\"). Do NOT continue if: (i) you are not at least 18 years of age or the age of majority in each and every jurisdiction in which you will or may view the Sexually Explicit Material, whichever is higher (the \"Age of Majority\"), (ii) such material offends you, or (iii) viewing the Sexually Explicit Material is not legal in each and every community where you choose to view it."), __jsx("p", null, "By choosing to enter this website you are affirming under oath and penalties of perjury pursuant to Title 28 U.S.C. \xA7 1746 and other applicable statutes and laws that all of the following statements are true and correct:"), __jsx("ul", null, __jsx("li", null, "I have attained the Age of Majority in my jurisdiction;"), __jsx("li", null, "The sexually explicit material I am viewing is for my own personal use and I will not expose any minors to the material;"), __jsx("li", null, "I desire to receive/view sexually explicit material;"), __jsx("li", null, "I believe that as an adult it is my inalienable constitutional right to receive/view sexually explicit material;"), __jsx("li", null, "I believe that sexual acts between consenting adults are neither offensive nor obscene;"), __jsx("li", null, "The viewing, reading and downloading of sexually explicit materials does not violate the standards of any community, town, city, state or country where I will be viewing, reading and/or downloading the Sexually Explicit Materials;"), __jsx("li", null, "I am solely responsible for any false disclosures or legal ramifications of viewing, reading or downloading any material appearing on this site. I further agree that neither this website nor its affiliates will be held responsible for any legal ramifications arising from any fraudulent entry into or use of this website;"), __jsx("li", null, "I understand that my use of this website is governed by the website's", __jsx("a", {
    href: "/page/terms-and-conditions"
  }, "Terms"), ' ', "which I have reviewed and accepted, and I agree to be bound by such Terms."), __jsx("li", null, "I agree that by entering this website, I am subjecting myself, and any business entity in which I have any legal or equitable interest, to the personal jurisdiction of the State of Florida, Miami-Dade County, should any dispute arise at any time between this website, myself and/or such business entity;"), __jsx("li", null, "This warning page constitutes a legally binding agreement between me, this website and/or any business in which I have any legal or equitable interest. If any provision of this Agreement is found to be unenforceable, the remainder shall be enforced as fully as possible and the unenforceable provision shall be deemed modified to the limited extent required to permit its enforcement in a manner most closely representing the intentions as expressed herein;"), __jsx("li", null, "All performers on this site are over the age of 18, have consented being photographed and/or filmed, believe it is their right to engage in consensual sexual acts for the entertainment and education of other adults and I believe it is my right as an adult to watch them doing what adults do;"), __jsx("li", null, "The videos and images in this site are intended to be used by responsible adults as sexual aids, to provide sexual education and to provide sexual entertainment;"), __jsx("li", null, "I understand that providing a false declaration under the penalties of perjury is a criminal offense; and"), __jsx("li", null, "I agree that this agreement is governed by the Electronic Signatures in Global and National Commerce Act (commonly known as the \"E-Sign Act\"), 15 U.S.C. \xA7 7000, et seq., and by choosing to click on \"I Agree. Enter Here\" and indicating my agreement to be bound by the terms of this agreement, I affirmatively adopt the signature line below as my signature and the manifestation of my consent to be bound by the terms of this agreement."))), __jsx("p", {
    className: "notice-txt"
  }, "THIS SITE ACTIVELY COOPERATES WITH LAW ENFORCEMENT IN ALL INSTANCES OF SUSPECTED ILLEGAL USE OF THE SERVICE, ESPECIALLY IN THE CASE OF UNDERAGE USAGE OF THE SERVICE.")));
}

/***/ }),

/***/ "./src/constants.tsx":
/*!***************************!*\
  !*** ./src/constants.tsx ***!
  \***************************/
/*! exports provided: SETTING_CHANNEL, SETTING_KEYS, MENU_SECTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTING_CHANNEL", function() { return SETTING_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTING_KEYS", function() { return SETTING_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_SECTION", function() { return MENU_SECTION; });
const SETTING_CHANNEL = 'SETTINGS';
const SETTING_KEYS = {
  SITE_NAME: 'siteName',
  LOGO_URL: 'logoUrl',
  PLACEHOLDER_LOGIN_URL: 'placeholderLoginUrl',
  PLACEHOLDER_AVATAR_URL: 'placeholderAvatarUrl',
  FAVICON: 'favicon',
  META_KEYWORDS: 'metaKeywords',
  META_DESCRIPTION: 'metaDescription',
  HEADER_SCRIPT: 'headerScript',
  AFTER_BODY_SCRIPT: 'afterBodyScript',
  CURRENCY: 'currency',
  GOOGLE_ANALYTICS_CODE: 'gaCode',
  MAINTENANCE_MODE: 'maintenanceMode',
  TIP_SOUND: 'tipSound',
  DEFAULT_OFFLINE_MODEL_IMAGE: 'defaultOfflineModelImage',
  DEFAULT_MODEL_PRIVATECALL_WITH_USER_IMAGE: 'defaultPrivateCallImage',
  DEFAULT_MODEL_IN_GROUP_CHAT_IMAGE: 'defaultGroupChatImage',
  VIEWER_URL: 'viewerURL',
  PUBLISHER_URL: 'publisherURL',
  SUBSCRIBER_URL: 'subscriberUrl',
  OPTION_FOR_BROADCAST: 'optionForBroadcast',
  OPTION_FOR_PRIVATE: 'optionForPrivate',
  OPTION_FOR_GROUP: 'optionForGroup',
  SECURE_OPTION: 'secureOption',
  ANT_MEDIA_APPNAME: 'AntMediaAppname'
};
const MENU_SECTION = {
  MAIN: 'main',
  // HEADER: 'header',
  FOOTER: 'footer'
};

/***/ }),

/***/ "./src/layouts/auth-layout.less":
/*!**************************************!*\
  !*** ./src/layouts/auth-layout.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/layouts/auth-layout.tsx":
/*!*************************************!*\
  !*** ./src/layouts/auth-layout.tsx ***!
  \*************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var _auth_layout_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-layout.less */ "./src/layouts/auth-layout.less");
/* harmony import */ var _auth_layout_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth_layout_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! enquire-js */ "enquire-js");
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(enquire_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var _components_common_layout_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/common/layout/header */ "./src/components/common/layout/header.tsx");
/* harmony import */ var _components_common_base_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/common/base/loader */ "./src/components/common/base/loader.tsx");
/* harmony import */ var _components_common_layout_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/common/layout/footer */ "./src/components/common/layout/footer.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











async function getStaticProps() {
  return {
    props: {}
  };
}

class AuthLayout extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isMobile: false,
      // security request for primary layout
      routerChange: false
    });

    _defineProperty(this, "enquireHandler", void 0);

    _defineProperty(this, "onThemeChange", theme => {
      const {
        updateUIValue: dispatchUpdateUIValue
      } = this.props;
      dispatchUpdateUIValue({
        theme
      });
    });

    _defineProperty(this, "onCollapseChange", collapsed => {
      const {
        updateUIValue: dispatchUpdateUIValue
      } = this.props;
      dispatchUpdateUIValue({
        collapsed
      });
    });
  }

  componentDidMount() {
    const {
      loadUIValue: dispatchLoadUIValue,
      loggedIn
    } = this.props;

    if (loggedIn) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
      return;
    }

    dispatchLoadUIValue();
    this.enquireHandler = Object(enquire_js__WEBPACK_IMPORTED_MODULE_3__["enquireScreen"])(mobile => {
      const {
        isMobile
      } = this.state;

      if (isMobile !== mobile) {
        this.setState({
          isMobile: mobile
        });
      }
    });
     false && false;
  }

  componentWillUnmount() {
    Object(enquire_js__WEBPACK_IMPORTED_MODULE_3__["unenquireScreen"])(this.enquireHandler);
  }

  handleStateChange() {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on('routeChangeStart', () => this.setState({
      routerChange: true
    }));
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on('routeChangeComplete', () => this.setState({
      routerChange: false
    }));
  }

  render() {
    const {
      children,
      collapsed,
      logo,
      // siteName,
      theme
    } = this.props;
    const {
      routerChange
    } = this.state;
    const headerProps = {
      logo,
      collapsed,
      theme,
      onCollapseChange: this.onCollapseChange
    };
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      className: "container",
      id: "authLayout"
    }, __jsx(_components_common_layout_header__WEBPACK_IMPORTED_MODULE_7__["default"], headerProps), __jsx("div", {
      className: "content"
    }, routerChange && __jsx(_components_common_base_loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      spinning: true,
      fullScreen: true
    }), children), __jsx(_components_common_layout_footer__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], {
      className: "backTop"
    }));
  }

}

const mapStateToProps = state => _objectSpread(_objectSpread({}, state.ui), {}, {
  loggedIn: state.auth.loggedIn,
  auth: state.auth
});

const mapDispatchToProps = {
  updateUIValue: src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_6__["updateUIValue"],
  loadUIValue: src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_6__["loadUIValue"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(AuthLayout));

/***/ }),

/***/ "./src/layouts/base-layout.tsx":
/*!*************************************!*\
  !*** ./src/layouts/base-layout.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primary_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primary-layout */ "./src/layouts/primary-layout.tsx");
/* harmony import */ var _public_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public-layout */ "./src/layouts/public-layout.tsx");
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-layout */ "./src/layouts/default-layout.tsx");
/* harmony import */ var _auth_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout */ "./src/layouts/auth-layout.tsx");
/* harmony import */ var _maintenance_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maintenance-layout */ "./src/layouts/maintenance-layout.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






const LayoutMap = {
  maintenance: _maintenance_layout__WEBPACK_IMPORTED_MODULE_5__["default"],
  primary: _primary_layout__WEBPACK_IMPORTED_MODULE_1__["default"],
  public: _public_layout__WEBPACK_IMPORTED_MODULE_2__["default"],
  auth: _auth_layout__WEBPACK_IMPORTED_MODULE_4__["default"],
  default: _default_layout__WEBPACK_IMPORTED_MODULE_3__["default"]
};
class BaseLayout extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      children,
      layout,
      maintenanceMode = false
    } = this.props;

    if (maintenanceMode) {
      return __jsx(_maintenance_layout__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    }

    const Container = layout && LayoutMap[layout] ? LayoutMap[layout] : LayoutMap.public;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(Container, null, children));
  }

}

/***/ }),

/***/ "./src/layouts/default-layout.less":
/*!*****************************************!*\
  !*** ./src/layouts/default-layout.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/layouts/default-layout.tsx":
/*!****************************************!*\
  !*** ./src/layouts/default-layout.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.less */ "./src/layouts/default-layout.less");
/* harmony import */ var _default_layout_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_default_layout_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx("div", {
  className: "container"
}, children));

/***/ }),

/***/ "./src/layouts/maintenance-layout.tsx":
/*!********************************************!*\
  !*** ./src/layouts/maintenance-layout.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MaintenanceLayout = () => __jsx("main", {
  role: "main"
}, __jsx("img", {
  alt: "Under construction",
  src: "/under-construction.jpg",
  width: "100%"
}), __jsx("img", {
  alt: "Under construction",
  src: "/under-construction.jpg",
  width: "100%"
}), __jsx("img", {
  alt: "Under construction",
  src: "/under-construction.jpg",
  width: "100%"
}));

/* harmony default export */ __webpack_exports__["default"] = (MaintenanceLayout);

/***/ }),

/***/ "./src/layouts/primary-layout.less":
/*!*****************************************!*\
  !*** ./src/layouts/primary-layout.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/layouts/primary-layout.tsx":
/*!****************************************!*\
  !*** ./src/layouts/primary-layout.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primary_layout_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-layout.less */ "./src/layouts/primary-layout.less");
/* harmony import */ var _primary_layout_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_primary_layout_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var _components_common_layout_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/common/layout/header */ "./src/components/common/layout/header.tsx");
/* harmony import */ var _components_common_base_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/common/base/loader */ "./src/components/common/base/loader.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/common/base/icons */ "./src/components/common/base/icons.tsx");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var _components_common_layout_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/common/layout/footer */ "./src/components/common/layout/footer.tsx");
/* harmony import */ var _components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/common/layout/numberformat */ "./src/components/common/layout/numberformat.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // import { SiderMenu } from '@components/common/layout/menu';






const SiderMenuNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @components/common/layout/menu */ "./src/components/common/layout/menu.tsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! @components/common/layout/menu */ "./src/components/common/layout/menu.tsx")],
    modules: ['@components/common/layout/menu']
  }
});
const userSettingMenu = [{
  id: 'account-settings',
  name: 'Account Settings',
  route: '/account/user/account-settings',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["SettingOutlined"], null)
}, {
  id: 'messages',
  name: 'Messages',
  route: '/messages',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["MessageOutlined"], null)
}, {
  id: 'favorites',
  name: 'My favorites',
  route: '/account/user/favorites',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["HeartOutlined"], null)
}, {
  id: 'funds-tokens',
  name: 'Funds / Tokens',
  route: '/account/user/funds-tokens',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["FundsIcon"], null))
}, {
  id: 'transaction-history',
  name: 'Transaction History',
  route: '/account/user/transaction-history',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["TransactionHistoryIcon"], null))
}, {
  id: 'payment-token-history',
  name: 'Payment Tokens History',
  route: '/account/user/payment-token-history',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["PaymentTokensHistoryIcon"], null))
}, {
  id: 'order',
  name: 'My orders',
  route: '/account/user/orders',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["OrderedListOutlined"], null)
}, {
  id: 'purchased-galleries',
  name: 'Purchased Galleries',
  route: '/account/user/purchased-gallery',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["PurchasedImageIcon"], null))
}, {
  id: 'purchased-videos',
  name: 'Purchased Videos',
  route: '/account/user/purchased-video',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["PurchasedVideoIcon"], null))
}, {
  id: 'purchased-products',
  name: 'Purchased Products',
  route: '/account/user/purchased-product',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["PurchasedItemIcon"], null))
} // {
//   id: 'refund-request',
//   name: 'Refund Requests',
//   route: '/account/user/refund-request',
//   icon: <RollbackOutlined />
// }
];
const performerSettingMenu = [{
  id: 'profile',
  name: 'Profile',
  route: '/account/performer/profile',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["UserOutlined"], null)
}, {
  id: 'account-settings',
  name: 'Account Settings',
  route: '/account/performer/account-settings',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["SettingOutlined"], null)
}, {
  id: 'messages',
  name: 'Messages',
  route: '/messages',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["MessageOutlined"], null)
}, {
  id: 'earning',
  name: 'Earnings',
  route: '/account/performer/earning',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["EarningIcon"], null))
}, {
  id: 'schedules',
  name: 'Schedules',
  route: '/account/performer/schedules',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["CalendarOutlined"], null)
}, {
  id: 'my-products',
  name: 'Products',
  route: '/account/performer/products',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["MyProductIcon"], null))
}, {
  id: 'my-videos',
  name: 'Videos',
  route: '/account/performer/videos',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["VideosIcon"], null))
}, {
  id: 'my-galleries',
  name: 'Galleries',
  route: '/account/performer/galleries',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["PhotosIcon"], null))
}, {
  id: 'my-blocking',
  name: 'Blocking',
  route: '/account/performer/geo-block',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["GlobalOutlined"], null)
}, {
  id: 'payout-request',
  name: 'Payout Request',
  route: '/account/performer/payout-requests',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["PayoutRequestIcon"], null))
}, {
  id: 'order',
  name: 'Orders',
  route: '/account/performer/orders',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["OrderedListOutlined"], null)
}];
const studioSettingMenu = [{
  id: 'account-settings',
  name: 'Account Settings',
  route: '/studio/account-settings',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["SettingOutlined"], null)
}, {
  id: 'earning',
  name: 'Earnings',
  route: '/studio/earning',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["EarningIcon"], null))
}, {
  id: 'commission',
  name: 'Commission',
  route: '/studio/commissions',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["PieChartOutlined"], null)
}, {
  id: 'studio-models',
  name: 'Models',
  route: '/studio/models',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["Group"], null))
}, {
  id: 'studio-payout-requests',
  name: 'Payout Requests',
  route: '/studio/payout-requests',
  icon: __jsx("span", {
    className: "anticon"
  }, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_10__["PayoutRequestIcon"], null))
}, {
  id: 'studioperformer-requests',
  name: 'Performer Payout Requests',
  route: '/studio/payout-requests/performer-requests',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["SolutionOutlined"], null)
}, {
  id: 'performer-stats',
  name: 'Performer Stats',
  route: '/studio/models/stats',
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LineChartOutlined"], null)
}];

class PrimaryLayout extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "enquireHandler", void 0);

    _defineProperty(this, "rightPrimaryLayoutRef", void 0);

    this.state = {
      // security request for primary layout
      routerChange: false
    };
  }

  async componentDidMount() {
    const {
      loadUIValue: dispatchLoadUIValue
    } = this.props;
    dispatchLoadUIValue();
     false && false;
    this.rightPrimaryLayoutRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
  }

  handleStateChange() {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on('routeChangeStart', () => this.setState({
      routerChange: true
    }));
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on('routeChangeComplete', () => this.setState({
      routerChange: false
    }));
  }

  onLive() {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/live');
  }

  onSideMenuClick() {
    if (this.rightPrimaryLayoutRef.current instanceof HTMLDivElement) {
      const container = document.querySelector('.container');
      const rect = this.rightPrimaryLayoutRef.current.getBoundingClientRect();

      if (container) {
        container.scroll({
          top: rect.top,
          behavior: 'smooth'
        });
      }
    }
  }

  render() {
    const {
      children,
      collapsed,
      fixedHeader,
      logo,
      currentUser,
      totalNotReadMessage,
      // siteName,
      theme
    } = this.props;
    const {
      routerChange
    } = this.state;
    const headerProps = {
      logo,
      collapsed,
      theme
    };
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("link", {
      href: "https://unpkg.com/video.js@7.8.3/dist/video-js.css",
      rel: "stylesheet"
    }), __jsx("script", {
      src: "https://unpkg.com/video.js@7.8.3/dist/video.js"
    }), __jsx("script", {
      src: "https://unpkg.com/@videojs/http-streaming@1.13.3/dist/videojs-http-streaming.js"
    })), __jsx("div", {
      className: "container",
      style: {
        paddingTop: fixedHeader ? 72 : 0
      },
      id: "primaryLayout"
    }, __jsx(_components_common_layout_header__WEBPACK_IMPORTED_MODULE_7__["default"], headerProps), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content, {
      className: "content"
    }, routerChange && __jsx(_components_common_base_loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      spinning: true,
      fullScreen: true
    }), __jsx("div", {
      className: "primary-content"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      gutter: 10
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 24,
      sm: 4
    }, (currentUser === null || currentUser === void 0 ? void 0 : currentUser._id) && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'performer' && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
      direction: "vertical",
      style: {
        width: '100%'
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "primary",
      className: "btn-live",
      onClick: this.onLive.bind(this)
    }, "Go Live"), __jsx(SiderMenuNoSSR, {
      menus: performerSettingMenu,
      totalNotReadMessage: totalNotReadMessage,
      onClick: this.onSideMenuClick.bind(this)
    })), (currentUser === null || currentUser === void 0 ? void 0 : currentUser._id) && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'user' && __jsx(SiderMenuNoSSR, {
      menus: userSettingMenu,
      totalNotReadMessage: totalNotReadMessage,
      onClick: this.onSideMenuClick.bind(this)
    }), (currentUser === null || currentUser === void 0 ? void 0 : currentUser._id) && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'studio' && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
      className: "tk-studio"
    }, __jsx("div", {
      className: "stat"
    }, __jsx("span", null, "Total models"), __jsx("span", null, currentUser.stats.totalPerformer || 0)), __jsx("div", {
      className: "stat"
    }, __jsx("span", null, "Total earned"), __jsx("span", null, __jsx(_components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_14__["default"], {
      value: currentUser.stats.totalTokenEarned || 0
    }))), __jsx("div", {
      className: "stat"
    }, __jsx("span", null, "Total sessions"), __jsx("span", null, currentUser.stats.totalOnlineToday || 0)), __jsx("div", {
      className: "stat"
    }, __jsx("span", null, "Total hours online"), __jsx("span", null, currentUser.stats.totalHoursOnline && Object(src_lib__WEBPACK_IMPORTED_MODULE_12__["converDuration"])(currentUser.stats.totalHoursOnline)))), __jsx(SiderMenuNoSSR, {
      menus: studioSettingMenu,
      onClick: this.onSideMenuClick.bind(this) // totalNotReadMessage={totalNotReadMessage}

    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: 24,
      sm: 20,
      className: "right-primary-layout",
      ref: this.rightPrimaryLayoutRef
    }, children)))), __jsx(_components_common_layout_footer__WEBPACK_IMPORTED_MODULE_13__["default"], null), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], {
      className: "backTop",
      target: () => document.querySelector('#primaryLayout')
    })));
  }

}

const userSelecter = state => state.user.current;

const performerSelecter = state => state.performer.current;

const studioSelecter = state => state.studio.current;

const authSelecter = state => state.auth;

const currentUserSelecter = Object(src_lib__WEBPACK_IMPORTED_MODULE_12__["createSelector"])(userSelecter, performerSelecter, studioSelecter, authSelecter, (user, performer, studio, auth) => {
  if (!auth.loggedIn) return {};

  if (user !== null && user !== void 0 && user._id) {
    return _objectSpread(_objectSpread({}, user), {}, {
      role: 'user'
    });
  }

  if (performer !== null && performer !== void 0 && performer._id) {
    return _objectSpread(_objectSpread({}, performer), {}, {
      role: 'performer'
    });
  }

  if (studio !== null && studio !== void 0 && studio._id) {
    return _objectSpread(_objectSpread({}, studio), {}, {
      role: 'studio'
    });
  }

  return {};
});

const mapStateToProps = state => _objectSpread(_objectSpread(_objectSpread({}, state.ui), state.auth), {}, {
  totalNotReadMessage: state.message.totalNotReadMessage,
  currentUser: currentUserSelecter(state)
});

const mapDispatchToProps = {
  loadUIValue: src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_6__["loadUIValue"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(PrimaryLayout));

/***/ }),

/***/ "./src/layouts/public-layout.less":
/*!****************************************!*\
  !*** ./src/layouts/public-layout.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/layouts/public-layout.tsx":
/*!***************************************!*\
  !*** ./src/layouts/public-layout.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_layout_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-layout.less */ "./src/layouts/public-layout.less");
/* harmony import */ var _public_layout_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_layout_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var _components_common_layout_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/common/layout/header */ "./src/components/common/layout/header.tsx");
/* harmony import */ var _components_common_base_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/common/base/loader */ "./src/components/common/base/loader.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_common_layout_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/common/layout/footer */ "./src/components/common/layout/footer.tsx");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var src_components_common_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/common/layout */ "./src/components/common/layout/index.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/no-danger */













class PrimaryLayout extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      routerChange: false,
      popupContent18: '',
      visiblePopup18: false
    });

    _defineProperty(this, "onThemeChange", theme => {
      const {
        updateUIValue: dispatchUpdateUIValue
      } = this.props;
      dispatchUpdateUIValue({
        theme
      });
    });

    _defineProperty(this, "onCollapseChange", collapsed => {
      const {
        updateUIValue: dispatchUpdateUIValue
      } = this.props;
      dispatchUpdateUIValue({
        collapsed
      });
    });
  }

  componentDidMount() {
    const {
      loadUIValue: dispatchLoadUIValue,
      popup18Enabled
    } = this.props;
    dispatchLoadUIValue();

    if (false) {}
  }

  handleStateChange() {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeStart', () => this.setState({
      routerChange: true
    }));
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', () => this.setState({
      routerChange: false
    }));
  }

  handlePopup18Ok() {
    // set cookie / local storage and hide popup
    localStorage.setItem('agree18', 'yes');
    this.setState({
      visiblePopup18: false
    });
  }

  handlePopup18Cancel() {
    window.location.href = 'http://www.google.com';
  }

  async getPopup18PlusContent() {
    try {
      var _resp$data;

      const {
        popup18ContentId
      } = this.props;
      const resp = await src_services__WEBPACK_IMPORTED_MODULE_10__["postService"].findById(popup18ContentId);
      this.setState({
        popupContent18: ((_resp$data = resp.data) === null || _resp$data === void 0 ? void 0 : _resp$data.content) || ''
      });
    } catch {
      this.setState({
        popupContent18: ''
      });
    } finally {
      this.setState({
        visiblePopup18: true
      });
    }
  }

  render() {
    const {
      children,
      logo,
      // siteName,
      theme,
      popup18ContentId
    } = this.props;
    const {
      routerChange,
      popupContent18,
      visiblePopup18
    } = this.state;
    const headerProps = {
      logo,
      theme,
      onCollapseChange: this.onCollapseChange
    };
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx("script", {
      type: "application/javascript",
      src: "/lib/adapter-latest.js"
    }), __jsx("script", {
      type: "application/javascript",
      src: "/lib/webrtc_adaptor.js"
    }), __jsx("link", {
      href: "https://unpkg.com/video.js@7.8.3/dist/video-js.css",
      rel: "stylesheet"
    }), __jsx("script", {
      src: "https://unpkg.com/video.js@7.8.3/dist/video.js"
    }), __jsx("script", {
      src: "https://unpkg.com/@videojs/http-streaming@1.13.3/dist/videojs-http-streaming.js"
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      id: "publicLayout",
      className: "container"
    }, __jsx(_components_common_layout_header__WEBPACK_IMPORTED_MODULE_6__["default"], headerProps), __jsx("div", {
      className: "content"
    }, routerChange && __jsx(_components_common_base_loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      spinning: true,
      fullScreen: true
    }), children), __jsx(_components_common_layout_footer__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      width: 770,
      centered: true,
      visible: visiblePopup18,
      title: "This website includes Adult content",
      okText: "I'm atleast 18 years of age",
      cancelText: "Take me back",
      onOk: this.handlePopup18Ok.bind(this),
      onCancel: () => this.handlePopup18Cancel()
    }, popup18ContentId && popupContent18 ? __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: popupContent18
      }
    }) : __jsx(src_components_common_layout__WEBPACK_IMPORTED_MODULE_11__["Popup18PlusContent"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], {
      className: "backTop",
      target: () => document.querySelector('#publicLayout')
    })));
  }

}

const mapStateToProps = state => _objectSpread(_objectSpread({}, state.ui), state.auth);

const mapDispatchToProps = {
  updateUIValue: src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__["updateUIValue"],
  loadUIValue: src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__["loadUIValue"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(PrimaryLayout));

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

/***/ "./src/lib/storeHolder.ts":
/*!********************************!*\
  !*** ./src/lib/storeHolder.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let store = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  getStore: () => store,
  setStore: s => {
    store = s;
  }
});

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

/***/ "./src/redux/auth/reducers.ts":
/*!************************************!*\
  !*** ./src/redux/auth/reducers.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/auth/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  loggedIn: false,
  authUser: null,
  performerRegister: {
    data: null,
    success: false,
    submiting: false,
    error: null
  },
  userRegister: {
    data: null,
    success: false,
    submiting: false,
    error: null
  },
  userLogin: {
    requesting: false,
    success: false,
    data: null,
    error: null
  },
  updatePassword: {
    success: false,
    submiting: false,
    error: null
  }
};
const authReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loginRequesting"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      userLogin: _objectSpread(_objectSpread({}, state.userLogin), {}, {
        requesting: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      loggedIn: true,
      userLogin: {
        requesting: false,
        error: null,
        data: data.payload,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loginFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      loggedIn: false,
      userLogin: {
        requesting: false,
        error: data.payload,
        data: null,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["performerloginSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      loggedIn: true,
      userLogin: {
        requesting: false,
        error: null,
        data: data.payload,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["performerloginFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      loggedIn: false,
      userLogin: {
        requesting: false,
        error: data.payload,
        data: null,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["studioLoginSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      loggedIn: true,
      userLogin: {
        requesting: false,
        error: null,
        data: data.payload,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["studioLoginFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      loggedIn: false,
      userLogin: {
        requesting: false,
        error: data.payload,
        data: null,
        success: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["setPerformerRegisterSubmitting"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerRegister: _objectSpread(_objectSpread({}, state.performerRegister), {}, {
        submiting: true,
        error: null
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["performerRegisterSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerRegister: {
        data: data.payload,
        success: true,
        submiting: false,
        error: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["performerRegisterFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerRegister: {
        success: false,
        submiting: false,
        error: data.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["setUserRegisterSubmitting"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      userRegister: _objectSpread(_objectSpread({}, state.userRegister), {}, {
        success: false,
        requesting: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["userRegisterFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      userRegister: {
        requesting: false,
        success: false,
        error: action.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["userRegisterSuccess"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      userRegister: {
        requesting: false,
        success: true,
        error: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["setUpdatePasswordSubmitting"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updatePassword: _objectSpread(_objectSpread({}, state.updatePassword), {}, {
        submiting: true,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["updatePasswordSuccess"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updatePassword: {
        success: true,
        submiting: false,
        error: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["updatePasswordFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updatePassword: {
        success: false,
        submiting: false,
        error: data.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["logout"],

  reducer() {
    return _objectSpread({}, initialState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["resetLoginData"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      userLogin: {
        requesting: false,
        success: false,
        data: null,
        error: null
      }
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('auth', [authReducers], initialState)));

/***/ }),

/***/ "./src/redux/auth/sagas.ts":
/*!*********************************!*\
  !*** ./src/redux/auth/sagas.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var src_services_api_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/api-request */ "./src/services/api-request.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _studio_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../studio/actions */ "./src/redux/studio/actions.ts");
/* harmony import */ var _performer_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../performer/actions */ "./src/redux/performer/actions.ts");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user/actions */ "./src/redux/user/actions.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions */ "./src/redux/auth/actions.ts");











const authSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_10__["login"],

  *worker(data) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["loginRequesting"])());
      const payload = data.payload;
      const resp = (yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].login(payload)).data; // store token, update store and redirect to dashboard page

      yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].setAuthHeader(resp.token, src_services_api_request__WEBPACK_IMPORTED_MODULE_5__["USER_ROLE"]);
      const userResp = (yield src_services__WEBPACK_IMPORTED_MODULE_4__["userService"].me()).data;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_user_actions__WEBPACK_IMPORTED_MODULE_9__["updateCurrentUser"])(userResp));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["loginSuccess"])());
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["loginFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_10__["performerlogin"],

  *worker(data) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["loginRequesting"])());
      const payload = data.payload;
      const resp = (yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].performerLogin(payload)).data; // store token, update store and redirect to dashboard page

      yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].setAuthHeader(resp.token, src_services_api_request__WEBPACK_IMPORTED_MODULE_5__["PERFORMER_ROLE"]);
      const performerResp = (yield src_services__WEBPACK_IMPORTED_MODULE_4__["performerService"].me()).data;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_performer_actions__WEBPACK_IMPORTED_MODULE_8__["updateCurrentPerformer"])(performerResp));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["performerloginSuccess"])());
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/live');
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["performerloginFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_10__["studioLogin"],

  *worker(data) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["loginRequesting"])());
      const payload = data.payload;
      const resp = (yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].studioLogin(payload)).data; // store token, update store and redirect to dashboard page

      yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].setAuthHeader(resp.token, src_services_api_request__WEBPACK_IMPORTED_MODULE_5__["STUDIO_ROLE"]);
      const studioResp = (yield src_services__WEBPACK_IMPORTED_MODULE_4__["studioService"].me()).data;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_studio_actions__WEBPACK_IMPORTED_MODULE_7__["updateCurrentStudio"])(studioResp));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["studioLoginSuccess"])());
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/studio/account-settings');
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["studioLoginFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_10__["performerRegister"],

  *worker(data) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setPerformerRegisterSubmitting"])());
      const {
        payload
      } = data;
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].performersRegister(payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["performerRegisterSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["performerRegisterFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_10__["logout"],

  *worker() {
    try {
      yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].removeToken();
      yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].removeRemember();
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
      antd__WEBPACK_IMPORTED_MODULE_6__["message"].success('Log out!');
    } catch (e) {
      antd__WEBPACK_IMPORTED_MODULE_6__["message"].error('Something went wrong!');
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_10__["userRegister"],

  *worker(data) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setUserRegisterSubmitting"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].userRegister(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["userRegisterSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["userRegisterFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_10__["updatePassword"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["setUpdatePasswordSubmitting"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_4__["authService"].updatePassword(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["updatePasswordSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["updatePasswordFail"])(error));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(authSagas)]));

/***/ }),

/***/ "./src/redux/banner/actions.ts":
/*!*************************************!*\
  !*** ./src/redux/banner/actions.ts ***!
  \*************************************/
/*! exports provided: getBanners, getBannersSuccess, getBannersFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBanners", function() { return getBanners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannersSuccess", function() { return getBannersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannersFail", function() { return getBannersFail; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  getBanners,
  getBannersSuccess,
  getBannersFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getBanners', 'GET_BANNERS');

/***/ }),

/***/ "./src/redux/banner/reducers.ts":
/*!**************************************!*\
  !*** ./src/redux/banner/reducers.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/banner/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  listBanners: {
    loading: false,
    data: [],
    error: null,
    success: false
  }
};
const bannerReducer = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getBannersSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      listBanners: {
        loading: false,
        data: data.payload,
        error: null,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getBannersFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      listBanners: _objectSpread(_objectSpread({}, state.listBanners), {}, {
        loading: false,
        data: null,
        error: data.payload,
        success: false
      })
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createReducers"])('banner', [bannerReducer], initialState)));

/***/ }),

/***/ "./src/redux/banner/sagas.ts":
/*!***********************************!*\
  !*** ./src/redux/banner/sagas.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/redux/banner/actions.ts");





const bannerSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getBanners"],

  *worker(data) {
    try {
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["bannerService"].search(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getBannersSuccess"])(resp.data));
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getBannersFail"])(error));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(bannerSagas)]));

/***/ }),

/***/ "./src/redux/galleries/actions.ts":
/*!****************************************!*\
  !*** ./src/redux/galleries/actions.ts ***!
  \****************************************/
/*! exports provided: getPerformerGalleries, getPerformerGalleriesSuccess, getPerformerGalleriesFail, gettingPerformerGalleries, addPerformerGalleries, purchaseGallerySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerGalleries", function() { return getPerformerGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerGalleriesSuccess", function() { return getPerformerGalleriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerGalleriesFail", function() { return getPerformerGalleriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingPerformerGalleries", function() { return gettingPerformerGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPerformerGalleries", function() { return addPerformerGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseGallerySuccess", function() { return purchaseGallerySuccess; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const [getPerformerGalleries, getPerformerGalleriesSuccess, getPerformerGalleriesFail] = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncActions"])('GET_PERFORMER_GALLERIES');
const gettingPerformerGalleries = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GETTING_PERFORMER_GALLERIES');
const addPerformerGalleries = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ADD_PERFORMER_GALLERIES');
const purchaseGallerySuccess = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('PURCHASE_GALLERY_SUCCESS');

/***/ }),

/***/ "./src/redux/galleries/reducers.ts":
/*!*****************************************!*\
  !*** ./src/redux/galleries/reducers.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/galleries/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialGalleiresState = {
  error: null,
  data: {},
  ids: [],
  total: 0,
  success: false,
  searching: false
};
const galleryReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["gettingPerformerGalleries"],

  reducer() {
    return _objectSpread(_objectSpread({}, initialGalleiresState), {}, {
      searching: true
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getPerformerGalleriesSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload), {}, {
      error: null,
      success: true,
      searching: false
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getPerformerGalleriesFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      error: action.payload,
      success: false,
      searching: false
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["addPerformerGalleries"],

  reducer(state, action) {
    const {
      ids,
      data
    } = state;
    const galleries = action.payload;
    galleries.forEach(g => {
      data[g._id] = g;
      ids.push(g._id);
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["purchaseGallerySuccess"],

  reducer(state, action) {
    const {
      data
    } = state;
    data[action.payload].isBought = true;
    return _objectSpread({}, state);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createReducers"])('galleries', [galleryReducers], initialGalleiresState)));

/***/ }),

/***/ "./src/redux/galleries/sagas.ts":
/*!**************************************!*\
  !*** ./src/redux/galleries/sagas.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/redux/galleries/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const galleriedSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerGalleries"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["gettingPerformerGalleries"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_4__["galleryService"].search(action.payload, false);
      const galleries = resp.data.data;
      const ids = galleries.map(g => g._id);
      const data = galleries.length && (galleries.length > 1 ? galleries.reduce((previousValue, currentValue, index) => {
        if (index === 1) {
          return {
            [previousValue._id]: previousValue,
            [currentValue._id]: currentValue
          };
        }

        const value = _objectSpread({}, previousValue);

        value[currentValue._id] = currentValue;
        return value;
      }) : {
        [galleries[0]._id]: galleries[0]
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerGalleriesSuccess"])({
        data,
        ids,
        total: resp.data.total
      }));
    } catch (error) {
      const err = yield Object(src_lib__WEBPACK_IMPORTED_MODULE_3__["getResponseError"])(error);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerGalleriesFail"])(err));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(galleriedSagas)]));

/***/ }),

/***/ "./src/redux/message/actions.ts":
/*!**************************************!*\
  !*** ./src/redux/message/actions.ts ***!
  \**************************************/
/*! exports provided: getConversations, getConversationsSuccess, getConversationsFail, searchConversations, searchConversationsSuccess, searchConversationsFail, readMessages, sendMessage, sendMessageSuccess, sendMessageFail, receiveMessageSuccess, sentFileSuccess, deactiveConversation, updateLastMessage, setActiveConversation, setActiveConversationSuccess, setActiveConversationFail, loadMessages, loadMessagesSuccess, loadMessagesFail, loadMoreMessages, loadMoreMessagesSuccess, loadMoreMessagesFail, fetchingMessage, resetMessageState, getConversationDetail, getConversationDetailSuccess, getConversationDetailFail, countNotReadMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversations", function() { return getConversations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationsSuccess", function() { return getConversationsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationsFail", function() { return getConversationsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchConversations", function() { return searchConversations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchConversationsSuccess", function() { return searchConversationsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchConversationsFail", function() { return searchConversationsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readMessages", function() { return readMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageSuccess", function() { return sendMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageFail", function() { return sendMessageFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveMessageSuccess", function() { return receiveMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentFileSuccess", function() { return sentFileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactiveConversation", function() { return deactiveConversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLastMessage", function() { return updateLastMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveConversation", function() { return setActiveConversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveConversationSuccess", function() { return setActiveConversationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveConversationFail", function() { return setActiveConversationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessages", function() { return loadMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessagesSuccess", function() { return loadMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMessagesFail", function() { return loadMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreMessages", function() { return loadMoreMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreMessagesSuccess", function() { return loadMoreMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreMessagesFail", function() { return loadMoreMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchingMessage", function() { return fetchingMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetMessageState", function() { return resetMessageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationDetail", function() { return getConversationDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationDetailSuccess", function() { return getConversationDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConversationDetailFail", function() { return getConversationDetailFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countNotReadMessage", function() { return countNotReadMessage; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  getConversations,
  getConversationsSuccess,
  getConversationsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getConversations', 'LOAD_CONVERSATIONS');
const {
  searchConversations,
  searchConversationsSuccess,
  searchConversationsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('searchConversations', 'SEARCH_CONVERSATIONS');
const {
  readMessages
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('readMessages', 'READ_MESSAGES');
const {
  sendMessage,
  sendMessageSuccess,
  sendMessageFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('sendMessage', 'SEND_MESSAGE');
const {
  receiveMessageSuccess
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('receiveMessageSuccess', 'RECEIVE_MESSAGE_SUCCESS');
const {
  sentFileSuccess
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('sentFileSuccess', 'SENT_FILE_SUCCESS');
const {
  deactiveConversation
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('deactiveConversation', 'DEACTIVE_CONVERSATION');
const updateLastMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateLastMessage');
const {
  setActiveConversation,
  setActiveConversationSuccess,
  setActiveConversationFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('setActiveConversation', 'SET_ACTIVE_CONVERSATION_RECEIVER');
const {
  loadMessages,
  loadMessagesSuccess,
  loadMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('loadMessages', 'LOAD_MESSAGES');
const {
  loadMoreMessages,
  loadMoreMessagesSuccess,
  loadMoreMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('loadMoreMessages', 'LOAD_MORE_MESSAGES');
const fetchingMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('fetchingMessage');
const resetMessageState = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('resetMessageState');
const {
  getConversationDetail,
  getConversationDetailSuccess,
  getConversationDetailFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getConversationDetail', 'LOAD_CONVERSATION_ITEM');
const countNotReadMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('COUNT_TOTAL_NOT_READ_MESSAGE');

/***/ }),

/***/ "./src/redux/message/reducers.ts":
/*!***************************************!*\
  !*** ./src/redux/message/reducers.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/message/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialConversationState = {
  list: {
    requesting: false,
    error: null,
    data: [],
    total: 0,
    success: false
  },
  mapping: {},
  activeConversation: {}
};
const initialMessageState = {
  // conversationId => { fetching: boolean, items: [] }
  conversationMap: {},
  sendMessage: {},
  receiveMessage: {},
  totalNotReadMessage: 0
};
const conversationReducer = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["resetMessageState"],

  reducer(state) {
    let {
      list,
      mapping,
      activeConversation
    } = state;
    list = {
      requesting: false,
      error: null,
      data: [],
      total: 0,
      success: false
    };
    mapping = {};
    activeConversation = {};
    return _objectSpread(_objectSpread({}, state), {}, {
      list,
      mapping,
      activeConversation
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getConversations"],

  reducer(state) {
    const nextState = _objectSpread({}, state);

    nextState.list.requesting = true;
    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getConversationsSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const {
      list,
      mapping
    } = nextState;
    const {
      data: items,
      total
    } = data.payload;
    const Ids = items.map(c => c._id);
    list.data = list.data.concat(Ids);
    list.total = total;
    list.success = true;
    list.requesting = false;
    list.error = false;
    items.forEach(c => {
      mapping[c._id] = c;
    });
    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getConversationsFail"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    return _objectSpread(_objectSpread({}, nextState), {}, {
      list: {
        requesting: false,
        error: data.payload,
        data: [],
        total: 0,
        success: false
      },
      mapping: {},
      activeConversation: {}
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["searchConversations"],

  reducer(state) {
    const nextState = _objectSpread({}, state);

    return _objectSpread(_objectSpread({}, nextState), {}, {
      list: {
        requesting: true,
        error: null,
        data: [],
        total: 0,
        success: false
      },
      mapping: {},
      activeConversation: {}
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["searchConversationsSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const {
      list,
      mapping
    } = nextState;
    const {
      data: items,
      total
    } = data.payload;
    const Ids = items.map(c => c._id);
    list.data = Ids;
    list.total = total;
    list.success = true;
    list.requesting = false;
    list.error = false;
    items.forEach(c => {
      mapping[c._id] = c;
    });
    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["searchConversationsFail"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    return _objectSpread(_objectSpread({}, nextState), {}, {
      list: {
        requesting: false,
        error: data.payload,
        data: [],
        total: 0,
        success: false
      },
      mapping: {},
      activeConversation: {}
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["setActiveConversationSuccess"],

  reducer(state, data) {
    const conversation = data.payload;
    const list = state.list.data;
    const {
      mapping
    } = state;
    const check = list.find(c => c === conversation._id);

    if (!check) {
      list.unshift(conversation._id);
      mapping[conversation._id] = conversation;
    }

    return _objectSpread(_objectSpread({}, state), {}, {
      activeConversation: conversation
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getConversationDetailSuccess"],

  reducer(state, data) {
    const {
      list,
      mapping
    } = state;
    const conversation = data.payload;

    if (!list.data.includes(conversation._id)) {
      list.data.unshift(conversation._id);
      mapping[conversation._id] = conversation;
    }

    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["readMessages"],

  reducer(state, data) {
    const conversationId = data.payload;
    const {
      mapping
    } = state;
    mapping[conversationId].totalNotSeenMessages = 0;
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["deactiveConversation"],

  reducer(state) {
    const nextState = _objectSpread({}, state);

    nextState.activeConversation = {};
    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["updateLastMessage"],

  reducer(state, action) {
    const {
      conversationId,
      lastMessage
    } = action.payload;
    const {
      mapping
    } = state;

    if (mapping[conversationId]) {
      mapping[conversationId].lastMessage = lastMessage;
      mapping[conversationId].lastMessageCreatedAt = new Date();
      mapping[conversationId].totalNotSeenMessages = 0;
    }

    return _objectSpread({}, state);
  }

}];
const messageReducer = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchingMessage"],

  reducer(state, data) {
    const {
      conversationMap
    } = state;
    const {
      conversationId
    } = data.payload;
    conversationMap[conversationId] = _objectSpread(_objectSpread({}, conversationMap[conversationId]), {}, {
      fetching: true
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loadMessagesSuccess"],

  reducer(state, data) {
    const {
      conversationMap
    } = state;
    const {
      conversationId,
      items,
      total
    } = data.payload;
    conversationMap[conversationId] = {
      items: [...items.reverse()],
      total,
      fetching: false
    };
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loadMoreMessagesSuccess"],

  reducer(state, data) {
    const {
      conversationMap
    } = state;
    const {
      conversationId,
      items,
      total
    } = data.payload;
    conversationMap[conversationId] = {
      items: [...items.reverse(), ...(conversationMap[conversationId].items || [])],
      total,
      fetching: false
    };
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sendMessage"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      sendMessage: {
        sending: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sendMessageSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    if (!nextState.conversationMap[data.payload.conversationId] || !nextState.conversationMap[data.payload.conversationId].items) {
      nextState.conversationMap[data.payload.conversationId].items = [];
    }

    nextState.conversationMap[data.payload.conversationId].items.push(data.payload);
    return _objectSpread(_objectSpread({}, nextState), {}, {
      sendMessage: {
        sending: false,
        success: true,
        data: data.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sendMessageFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      sendMessage: {
        sending: false,
        success: false,
        error: data.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["receiveMessageSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    if (!nextState.conversationMap[data.payload.conversationId]) {
      return _objectSpread({}, nextState);
    }

    nextState.conversationMap[data.payload.conversationId].items.push(data.payload);
    return _objectSpread(_objectSpread({}, nextState), {}, {
      receiveMessage: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sentFileSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    if (!nextState.conversationMap[data.payload.conversationId] || !nextState.conversationMap[data.payload.conversationId].items) {
      nextState.conversationMap[data.payload.conversationId].items = [];
    }

    nextState.conversationMap[data.payload.conversationId].items.push(data.payload);
    return _objectSpread(_objectSpread({}, nextState), {}, {
      sendMessage: {
        sending: false,
        success: true,
        data: data.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["countNotReadMessage"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      totalNotReadMessage: action.payload
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('conversation', [conversationReducer], initialConversationState), Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('message', [messageReducer], initialMessageState)));

/***/ }),

/***/ "./src/redux/message/sagas.ts":
/*!************************************!*\
  !*** ./src/redux/message/sagas.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/message.service */ "./src/services/message.service.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/redux/message/actions.ts");






const conversationSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getConversations"],

  *worker(data) {
    try {
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getConversations(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getConversationsSuccess"])(resp.data));
    } catch (e) {
      // TODO - alert error
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getConversationsFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["searchConversations"],

  *worker(data) {
    try {
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getConversations(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["searchConversationsSuccess"])(resp.data));
    } catch (e) {
      // TODO - alert error
      const error = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["searchConversationsFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["setActiveConversation"],

  *worker(data) {
    try {
      const {
        source,
        sourceId,
        conversationId,
        recipientId
      } = data.payload;
      const conversationMapping = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(state => state.conversation.mapping);

      if (conversationId) {
        // todo - check me later
        if (conversationMapping[conversationId]) {
          yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setActiveConversationSuccess"])(conversationMapping[conversationId]));
          const readAllMessages = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].readAllInConversation(conversationId, recipientId);

          if (readAllMessages) {
            yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["readMessages"])(conversationId));
          }

          yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadMessages"])({
            conversationId,
            limit: 25,
            offset: 0
          }));
        } else {// TODO - check me later, query to DB and update here
        }
      } else {
        const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].createConversation({
          source,
          sourceId
        });
        const conversation = resp.data;

        if (conversationMapping[conversation._id]) {
          yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setActiveConversationSuccess"])(conversationMapping[conversation._id]));
        } else {
          yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setActiveConversationSuccess"])(conversation));
        }

        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadMessages"])({
          conversationId: conversation._id,
          limit: 25,
          offset: 0
        }));
      }
    } catch (e) {
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].error('Error occured, please try again later');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setActiveConversationFail"])(e));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getConversationDetail"],

  *worker(data) {
    try {
      const conversation = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getConversationDetail(data.payload.id);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getConversationDetailSuccess"])(conversation.data));
    } catch (e) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getConversationsFail"])(e));
    }
  }

}];
const messageSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["loadMessages"],

  *worker(data) {
    try {
      const messageMap = Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(state => state.message.mapping);
      const {
        conversationId,
        offset,
        limit
      } = data.payload;

      if (messageMap[conversationId] && messageMap[conversationId].fetching) {
        // do nothing if it is fetching
        return;
      }

      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["fetchingMessage"])({
        conversationId
      }));
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getMessages(conversationId, {
        offset,
        limit
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadMessagesSuccess"])({
        conversationId,
        items: resp.data.data,
        total: resp.data.total
      }));
    } catch (e) {
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].error('Error occured, please try again later');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadMessagesFail"])(e));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["loadMoreMessages"],

  *worker(data) {
    try {
      const messageMap = Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(state => state.message.mapping);
      const {
        conversationId,
        offset,
        limit
      } = data.payload;

      if (messageMap[conversationId] && messageMap[conversationId].fetching) {
        // do nothing if it is fetching
        return;
      }

      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["fetchingMessage"])({
        conversationId
      }));
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getMessages(conversationId, {
        offset,
        limit
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadMoreMessagesSuccess"])({
        conversationId,
        items: resp.data.data,
        total: resp.data.total
      }));
    } catch (e) {
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].error('Error occured, please try again later');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadMoreMessagesFail"])(e));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["sendMessage"],

  *worker(req) {
    try {
      const {
        conversationId,
        data
      } = req.payload;
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].sendMessage(conversationId, data);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["sendMessageSuccess"])(resp.data));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updateLastMessage"])({
        conversationId,
        lastMessage: data.text
      }));
    } catch (e) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["sendMessageFail"])(e));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(conversationSagas), Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(messageSagas)]));

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

/***/ "./src/redux/performer/reducers.ts":
/*!*****************************************!*\
  !*** ./src/redux/performer/reducers.ts ***!
  \*****************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/redux/performer/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initialState = {
  current: {
    _id: null,
    avatar: '/no-avatar.png',
    name: '',
    steamingStatus: '',
    email: ''
  },
  earning: {
    data: [],
    stats: null,
    total: 0,
    searching: false,
    success: false,
    error: null,
    fromDate: null,
    toDate: null
  },
  payout: {
    data: [],
    total: 0,
    searching: false,
    success: false,
    error: null
  },
  assets: {
    products: {
      data: [],
      total: 0,
      searching: false,
      success: false
    },
    videos: {
      data: [],
      total: 0,
      searching: false,
      success: false
    },
    photos: {
      data: [],
      total: 0,
      searching: false,
      success: false
    },
    galleries: {
      data: [],
      total: 0,
      searching: false,
      success: false
    }
  },
  categories: {
    data: [],
    total: 0
  },
  performers: {
    data: [],
    total: 0,
    success: false,
    searching: false,
    error: null
  },
  performerDetails: {
    data: {
      _id: null,
      avatar: '/no-avatar.png',
      name: '',
      email: '',
      products: [],
      videos: [],
      photos: [],
      galleries: [],
      relatedPerformer: [],
      tags: [],
      categoryIds: [],
      categories: [],
      languages: []
    },
    products: {},
    videos: {},
    photos: {},
    galleries: {},
    success: false,
    searching: false,
    error: null
  },
  getCagetoriesError: null,
  updateSuccess: false,
  updating: false,
  updateError: null
};
const performerReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getPerformerCategoriesSuccess"],

  reducer(state, actions) {
    return _objectSpread(_objectSpread({}, state), {}, {
      categories: _objectSpread({}, actions.payload),
      getCagetoriesError: null
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getPerformerCategoriesFail"],

  reducer(state, actions) {
    return _objectSpread(_objectSpread({}, state), {}, {
      getCagetoriesError: actions.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["searchPerformerSuccess"],

  reducer(state, actions) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performers: {
        success: true,
        searching: false,
        error: null,
        data: actions.payload.data,
        total: actions.payload.total
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["searchPerformerFail"],

  reducer(state, actions) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performers: {
        success: false,
        error: actions.payload,
        searching: false,
        data: []
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setPerformerSearching"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performers: _objectSpread(_objectSpread({}, state.performers), {}, {
        searching: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updatePerformerProfile"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updating: true
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updatePerformerProfileSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: data.payload,
      updateSuccess: true,
      updating: false,
      updateError: null
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updatePerformerProfileFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updateSuccess: false,
      updating: false,
      updateError: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setupdatingPerformerProfile"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updating: true,
      updateSuccess: false
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setPerformerDetails"],

  reducer(state, action) {
    const {
      performerDetails
    } = state;
    performerDetails.data = _objectSpread(_objectSpread({}, performerDetails.data), action.payload);
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setFavoritePerformerDetails"],

  reducer(state, action) {
    const {
      performerDetails
    } = state;
    const {
      data
    } = performerDetails;
    data.isFavorite = action.payload;
    return _objectSpread(_objectSpread({}, state), {}, {
      performerDetails: _objectSpread({}, performerDetails)
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getPerformerDetailsSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerDetails: {
        data: data.payload.performer,
        products: data.payload.products,
        videos: data.payload.videos,
        photos: data.payload.photos,
        galleries: data.payload.galleries,
        searching: false,
        success: true,
        error: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getPerformerDetailsFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerDetails: {
        error: data.payload,
        success: false,
        searching: false
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setGettingPerformerDetails"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerDetails: _objectSpread(_objectSpread({}, state.performerDetails), {}, {
        success: false,
        searching: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMyProductsSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      assets: _objectSpread(_objectSpread({}, state.assets), {}, {
        products: {
          data: action.payload.data,
          total: action.payload.total,
          searching: false,
          success: true,
          error: null
        }
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMyProductsFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      assets: _objectSpread(_objectSpread({}, state.assets), {}, {
        products: _objectSpread(_objectSpread({}, state.assets.products), {}, {
          searching: false,
          success: false,
          error: action.payload
        })
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setGettingMyProducts"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      assets: _objectSpread(_objectSpread({}, state.assets), {}, {
        products: _objectSpread(_objectSpread({}, state.assets.products), {}, {
          searching: true,
          success: false
        })
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getEarningSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      earning: {
        data: action.payload.data.data,
        total: action.payload.data.total,
        fromDate: action.payload.fromDate,
        toDate: action.payload.toDate,
        stats: action.payload.stats,
        searching: false,
        success: true,
        error: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getEarningFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      earning: _objectSpread(_objectSpread({}, state.earning), {}, {
        searching: false,
        success: false,
        error: action.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setGettingEarning"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      earning: _objectSpread(_objectSpread({}, state.earning), {}, {
        searching: true,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["addMyProduct"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      assets: _objectSpread(_objectSpread({}, state.assets), {}, {
        products: _objectSpread(_objectSpread({}, state.assets.products), {}, {
          data: [...state.assets.products.data, action.payload],
          total: state.assets.products.total + 1
        })
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["removeMyProduct"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      assets: _objectSpread(_objectSpread({}, state.assets), {}, {
        products: _objectSpread(_objectSpread({}, state.assets.products), {}, {
          data: state.assets.products.data.filter(product => product._id !== action.payload),
          total: state.assets.products.total - 1
        })
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMyVideosSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      assets: _objectSpread(_objectSpread({}, state.assets), {}, {
        videos: {
          data: action.payload.data,
          total: action.payload.total,
          searching: false,
          success: true,
          error: null
        }
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMyVideosFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      assets: _objectSpread(_objectSpread({}, state.assets), {}, {
        videos: _objectSpread(_objectSpread({}, state.assets.videos), {}, {
          searching: false,
          success: false,
          error: action.payload
        })
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setgettingMyVideos"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      assets: _objectSpread(_objectSpread({}, state.assets), {}, {
        videos: _objectSpread(_objectSpread({}, state.assets.videos), {}, {
          searching: true,
          success: false
        })
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["removeMyVideo"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      assets: _objectSpread(_objectSpread({}, state.assets), {}, {
        videos: _objectSpread(_objectSpread({}, state.assets.videos), {}, {
          data: state.assets.videos.data.filter(video => video._id !== action.payload),
          total: state.assets.videos.total - 1
        })
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["addMyVideos"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      assets: _objectSpread(_objectSpread({}, state.assets), {}, {
        videos: _objectSpread(_objectSpread({}, state.assets.videos), {}, {
          data: [...state.assets.videos.data, ...action.payload]
        })
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMyPhotosSuccess"],

  reducer(state, action) {
    const {
      assets
    } = state;
    assets.photos = {
      data: action.payload.data,
      total: action.payload.total,
      searching: false,
      success: true,
      error: null
    };
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMyPhotosFail"],

  reducer(state, action) {
    const {
      assets
    } = state;
    assets.photos = _objectSpread(_objectSpread({}, state.assets.photos), {}, {
      searching: false,
      success: false,
      error: action.payload
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setgettingMyPhotos"],

  reducer(state) {
    const {
      assets
    } = state;
    assets.photos = _objectSpread(_objectSpread({}, state.assets.photos), {}, {
      searching: true,
      success: false
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["removeMyPhoto"],

  reducer(state, action) {
    const {
      assets
    } = state;
    assets.photos = _objectSpread(_objectSpread({}, state.assets.photos), {}, {
      data: state.assets.photos.data.filter(p => p._id !== action.payload),
      total: state.assets.photos.total - 1
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["addMyPhotos"],

  reducer(state, action) {
    const {
      assets
    } = state;
    assets.photos = _objectSpread(_objectSpread({}, state.assets.photos), {}, {
      data: [...state.assets.photos.data, ...action.payload]
    });
    return _objectSpread({}, state);
  }

}, // galleries
{
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setgettingMyGalleries"],

  reducer(state) {
    const {
      assets
    } = state;
    assets.galleries = _objectSpread(_objectSpread({}, state.assets.galleries), {}, {
      searching: true,
      success: false
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMyGalleriesSuccess"],

  reducer(state, action) {
    const {
      assets
    } = state;
    assets.galleries = {
      data: action.payload.data,
      total: action.payload.total,
      searching: false,
      success: true,
      error: null
    };
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMyGalleriesFail"],

  reducer(state, action) {
    const {
      assets
    } = state;
    assets.galleries = _objectSpread(_objectSpread({}, state.assets.galleries), {}, {
      searching: false,
      success: false,
      error: action.payload
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["removeMyGalleries"],

  reducer(state, action) {
    const {
      assets
    } = state;
    assets.galleries = _objectSpread(_objectSpread({}, state.assets.galleries), {}, {
      data: state.assets.galleries.data.filter(p => p._id !== action.payload),
      total: state.assets.galleries.total - 1
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["addMyGalleries"],

  reducer(state, action) {
    const {
      assets
    } = state;
    assets.galleries = _objectSpread(_objectSpread({}, state.assets.galleries), {}, {
      data: [...state.assets.galleries.data, ...action.payload]
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getPayoutRequestSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      payout: {
        data: action.payload.data,
        total: action.payload.total,
        searching: false,
        success: true,
        error: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getPayoutRequestFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      payout: _objectSpread(_objectSpread({}, state.payout), {}, {
        searching: false,
        success: false,
        error: action.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setGettingPayoutRequest"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      payout: _objectSpread(_objectSpread({}, state.payout), {}, {
        searching: true,
        error: null
      })
    });
  }

}, //= =====================================
{
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateCurrentPerformer"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updatePerformerFavourite"],

  reducer(state, action) {
    const {
      data
    } = state.performers;
    return _objectSpread(_objectSpread({}, state), {}, {
      performers: _objectSpread(_objectSpread({}, state.performers), {}, {
        data: data.map(d => {
          if (d._id === action.payload) {
            return _objectSpread(_objectSpread({}, d), {}, {
              isFavorite: !d.isFavorite
            });
          }

          return d;
        })
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updatePerformerAsset"],

  reducer(state, action) {
    const {
      type,
      id,
      payload
    } = action.payload;
    const {
      performerDetails
    } = state;

    if (type === 'gallery') {
      const {
        galleries
      } = performerDetails;
      return _objectSpread(_objectSpread({}, state), {}, {
        performerDetails: _objectSpread(_objectSpread({}, performerDetails), {}, {
          galleries: _objectSpread(_objectSpread({}, galleries), {}, {
            [id]: _objectSpread(_objectSpread({}, galleries[id]), payload)
          })
        })
      });
    }

    if (type === 'product') {
      const {
        products
      } = performerDetails;
      return _objectSpread(_objectSpread({}, state), {}, {
        performerDetails: _objectSpread(_objectSpread({}, performerDetails), {}, {
          products: _objectSpread(_objectSpread({}, products), {}, {
            [id]: _objectSpread(_objectSpread({}, products[id]), payload)
          })
        })
      });
    }

    return _objectSpread({}, state);
  }

}, {
  on: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_2__["logout"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, initialState), {}, {
      performers: state.performers,
      categories: state.categories
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('performer', [performerReducers], initialState)));

/***/ }),

/***/ "./src/redux/performer/sagas.ts":
/*!**************************************!*\
  !*** ./src/redux/performer/sagas.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/photo.service */ "./src/services/photo.service.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/redux/performer/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-return-assign */






const performerSaga = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerCategories"],

  *worker(data) {
    try {
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["performerCategories"].getList(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerCategoriesSuccess"])(resp.data));
    } catch (err) {
      const error = yield Promise.resolve(err);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerCategoriesFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["searchPerformer"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setPerformerSearching"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["performerService"].search(action.payload);
      const currentPerformer = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(state => state.performer.current);
      const data = resp.data.data.filter(p => p._id !== currentPerformer._id);
      const total = currentPerformer !== null && currentPerformer !== void 0 && currentPerformer._id ? resp.data.total - 1 : resp.data.total;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["searchPerformerSuccess"])({
        data,
        total
      }));
    } catch (err) {
      const error = yield Promise.resolve(err);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["searchPerformerFail"])(error));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfile"],

  *worker(data) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setupdatingPerformerProfile"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["performerService"].updateMe(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileSuccess"])(resp.data)); // if this is current user, reload user info?
    } catch (e) {
      // TODO - alert error
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerDetails"],

  *worker(data) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setGettingPerformerDetails"])());
      const [performerResponse, performerProductReponse, performerVideoResponse, performerGalleryResponse, relatedPerformerResponse] = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([src_services__WEBPACK_IMPORTED_MODULE_3__["performerService"].details(data.payload.username), src_services__WEBPACK_IMPORTED_MODULE_3__["productService"].search({
        performerId: data.payload._id,
        status: 'active'
      }), src_services__WEBPACK_IMPORTED_MODULE_3__["videoService"].search({
        performerId: data.payload._id,
        status: 'active'
      }), src_services__WEBPACK_IMPORTED_MODULE_3__["galleryService"].search({
        performerId: data.payload._id,
        status: 'active'
      }, false), src_services__WEBPACK_IMPORTED_MODULE_3__["performerService"].search({
        status: 'active',
        excludedId: data.payload._id,
        limit: 12
      })]);
      const products = {};
      const videos = {};
      const galleries = {};
      performerProductReponse.data.data.forEach(p => products[p._id] = p);
      performerVideoResponse.data.data.forEach(v => videos[v._id] = v);
      performerGalleryResponse.data.data.forEach(g => galleries[g._id] = g);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerDetailsSuccess"])({
        performer: _objectSpread(_objectSpread({}, performerResponse.data), {}, {
          products: performerProductReponse.data.data.map(p => p._id),
          videos: performerVideoResponse.data.data.map(v => v._id),
          galleries: performerGalleryResponse.data.data.map(g => g._id),
          relatedPerformers: relatedPerformerResponse.data.data
        }),
        // photos,
        videos,
        products,
        galleries
      }));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerDetailsFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getMyProducts"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setGettingMyProducts"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["performerService"].myProduct(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getMyProductsSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getMyProductsFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getEarning"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setGettingEarning"])());
      let difDateQuery = false;
      const earning = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(state => state.performer.earning);
      const {
        fromDate,
        toDate
      } = action.payload;
      const query = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(action.payload, ['fromDate', 'toDate']);

      if (fromDate && toDate) {
        query.fromDate = fromDate;
        query.toDate = toDate;
      }

      if (earning.toDate !== toDate || earning.fromDate !== fromDate) difDateQuery = true;
      const [resp, stats] = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([src_services__WEBPACK_IMPORTED_MODULE_3__["earningService"].search(query), earning.stats && !difDateQuery ? earning.stats : src_services__WEBPACK_IMPORTED_MODULE_3__["earningService"].stats(query)]);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getEarningSuccess"])(_objectSpread(_objectSpread({}, query), {}, {
        stats,
        data: resp.data
      })));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getEarningFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getPayoutRequest"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setGettingPayoutRequest"])());
      const [resp] = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([src_services__WEBPACK_IMPORTED_MODULE_3__["payoutRequestService"].search(action.payload)]);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPayoutRequestSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPayoutRequestFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getMyVideos"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setgettingMyVideos"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["videoService"].myVideos(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getMyVideosSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getMyVideosFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getMyPhotos"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setgettingMyPhotos"])());
      const resp = yield _services_photo_service__WEBPACK_IMPORTED_MODULE_4__["photoService"].myPhotos(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getMyPhotosSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getMyPhotosFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getMyGalleries"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setgettingMyGalleries"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["galleryService"].search(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getMyGalleriesSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getMyGalleriesFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["updatePaymentInfo"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setupdatingPerformerProfile"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["performerService"].updatePaymentInfo(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["updateDirectDeposit"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setupdatingPerformerProfile"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["performerService"].updateDirectDepost(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["updateBitpay"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setupdatingPerformerProfile"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["performerService"].updateBitpay(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["updatePaxum"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setupdatingPerformerProfile"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["performerService"].updatePaxum(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["updateStreamingStatus"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setupdatingPerformerProfile"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["performerService"].updateStreamingStatus({
        status: action.payload
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["updateDefaultPrice"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["setupdatingPerformerProfile"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["performerService"].updateDefaultPrice(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerProfileFail"])(err));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createSagas"])(performerSaga)]));

/***/ }),

/***/ "./src/redux/photos/actions.ts":
/*!*************************************!*\
  !*** ./src/redux/photos/actions.ts ***!
  \*************************************/
/*! exports provided: getPerformerPhotos, getPerformerPhotosSuccess, getPerformerPhotosFail, gettingPerformerPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerPhotos", function() { return getPerformerPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerPhotosSuccess", function() { return getPerformerPhotosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerPhotosFail", function() { return getPerformerPhotosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingPerformerPhotos", function() { return gettingPerformerPhotos; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const [getPerformerPhotos, getPerformerPhotosSuccess, getPerformerPhotosFail] = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncActions"])('GET_PERFORMER_PHOTOS');
const gettingPerformerPhotos = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GETTING_PERFORMER_PHOTOS');

/***/ }),

/***/ "./src/redux/photos/reducers.ts":
/*!**************************************!*\
  !*** ./src/redux/photos/reducers.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/photos/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialPhotosState = {
  error: null,
  data: {},
  total: 0,
  success: false,
  searching: false
};
const photoReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["gettingPerformerPhotos"],

  reducer() {
    return _objectSpread(_objectSpread({}, initialPhotosState), {}, {
      searching: true
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getPerformerPhotosSuccess"],

  reducer(_, action) {
    return {
      error: null,
      data: action.payload.data,
      total: action.payload.total,
      success: true,
      searching: false
    };
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getPerformerPhotosFail"],

  reducer(_, action) {
    return {
      data: null,
      error: action.payload,
      success: false,
      searching: false
    };
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createReducers"])('photos', [photoReducers], initialPhotosState)));

/***/ }),

/***/ "./src/redux/photos/sagas.ts":
/*!***********************************!*\
  !*** ./src/redux/photos/sagas.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/redux/photos/actions.ts");






const photosSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerPhotos"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["gettingPerformerPhotos"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_4__["photoService"].search(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerPhotosSuccess"])({
        data: resp.data.data,
        total: resp.data.total
      }));
    } catch (error) {
      const err = Object(src_lib__WEBPACK_IMPORTED_MODULE_3__["getResponseError"])(error);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerPhotosFail"])(err));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(photosSagas)]));

/***/ }),

/***/ "./src/redux/products/actions.ts":
/*!***************************************!*\
  !*** ./src/redux/products/actions.ts ***!
  \***************************************/
/*! exports provided: getPerformerProducts, getPerformerProductsSuccess, getPerformerProductsFail, gettingPerformerProduct, loadMorePerformerProduct, purchaseProductSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerProducts", function() { return getPerformerProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerProductsSuccess", function() { return getPerformerProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerProductsFail", function() { return getPerformerProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingPerformerProduct", function() { return gettingPerformerProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMorePerformerProduct", function() { return loadMorePerformerProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseProductSuccess", function() { return purchaseProductSuccess; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const [getPerformerProducts, getPerformerProductsSuccess, getPerformerProductsFail] = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncActions"])('GET_PERFORMER_PRODUCTS');
const gettingPerformerProduct = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GETTING_PERFORMER_PRODUCTS');
const loadMorePerformerProduct = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('LOAD_MORE_PERFORMER_PRODUCT');
const purchaseProductSuccess = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('PURCHASE_PRODUCT_SUCCESS');

/***/ }),

/***/ "./src/redux/products/reducers.ts":
/*!****************************************!*\
  !*** ./src/redux/products/reducers.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/products/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialProductState = {
  data: {},
  total: 0,
  error: null,
  searching: false,
  success: false,
  ids: []
};
const productReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["gettingPerformerProduct"],

  reducer() {
    return _objectSpread(_objectSpread({}, initialProductState), {}, {
      searching: true
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getPerformerProductsSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      data: action.payload.data,
      total: action.payload.total,
      ids: action.payload.ids,
      error: null,
      searching: false,
      success: true
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getPerformerProductsFail"],

  reducer(_, action) {
    return {
      data: null,
      error: action.payload.data,
      searching: false,
      success: false
    };
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loadMorePerformerProduct"],

  reducer(state, action) {
    const {
      ids,
      data
    } = state;
    const products = action.payload;
    products.forEach(p => {
      data[p._id] = p;
      ids.push(p._id);
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["purchaseProductSuccess"],

  reducer(state, action) {
    const {
      data
    } = state;
    data[action.payload].isBought = true;
    return _objectSpread({}, state);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('product', [productReducers], initialProductState)));

/***/ }),

/***/ "./src/redux/products/sagas.ts":
/*!*************************************!*\
  !*** ./src/redux/products/sagas.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/product.service */ "./src/services/product.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/redux/products/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const productSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerProducts"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["gettingPerformerProduct"])());
      const resp = yield _services_product_service__WEBPACK_IMPORTED_MODULE_2__["productService"].search(action.payload);
      const products = resp.data.data;
      const ids = products.map(p => p._id);
      const data = products.length && (products.length > 1 ? products.reduce((previousValue, currentValue, index) => {
        if (index === 1) {
          return {
            [previousValue._id]: previousValue,
            [currentValue._id]: currentValue
          };
        }

        const value = _objectSpread({}, previousValue);

        value[currentValue._id] = currentValue;
        return value;
      }) : {
        [products[0]._id]: products[0]
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerProductsSuccess"])({
        data,
        total: resp.data.total,
        ids
      }));
    } catch (error) {
      const err = Object(src_lib__WEBPACK_IMPORTED_MODULE_0__["getResponseError"])(error);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_4__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPerformerProductsFail"])(err));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createSagas"])(productSagas)]));

/***/ }),

/***/ "./src/redux/rootReducer.ts":
/*!**********************************!*\
  !*** ./src/redux/rootReducer.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/reducers */ "./src/redux/settings/reducers.ts");
/* harmony import */ var _ui_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/reducers */ "./src/redux/ui/reducers.ts");
/* harmony import */ var _user_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/reducers */ "./src/redux/user/reducers.ts");
/* harmony import */ var _auth_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/reducers */ "./src/redux/auth/reducers.ts");
/* harmony import */ var _performer_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./performer/reducers */ "./src/redux/performer/reducers.ts");
/* harmony import */ var _message_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message/reducers */ "./src/redux/message/reducers.ts");
/* harmony import */ var _stream_chat_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stream-chat/reducers */ "./src/redux/stream-chat/reducers.ts");
/* harmony import */ var _streaming_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./streaming/reducers */ "./src/redux/streaming/reducers.ts");
/* harmony import */ var _videos_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./videos/reducers */ "./src/redux/videos/reducers.ts");
/* harmony import */ var _photos_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./photos/reducers */ "./src/redux/photos/reducers.ts");
/* harmony import */ var _products_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/reducers */ "./src/redux/products/reducers.ts");
/* harmony import */ var _galleries_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./galleries/reducers */ "./src/redux/galleries/reducers.ts");
/* harmony import */ var _studio_reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./studio/reducers */ "./src/redux/studio/reducers.ts");
/* harmony import */ var _banner_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./banner/reducers */ "./src/redux/banner/reducers.ts");

 // load reducer here















const reducers = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])(_settings_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], _ui_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], _user_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], _auth_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], _performer_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], _message_reducers__WEBPACK_IMPORTED_MODULE_7__["default"], _stream_chat_reducers__WEBPACK_IMPORTED_MODULE_8__["default"], _streaming_reducers__WEBPACK_IMPORTED_MODULE_9__["default"], _videos_reducers__WEBPACK_IMPORTED_MODULE_10__["default"], _photos_reducers__WEBPACK_IMPORTED_MODULE_11__["default"], _products_reducers__WEBPACK_IMPORTED_MODULE_12__["default"], _galleries_reducers__WEBPACK_IMPORTED_MODULE_13__["default"], _studio_reducers__WEBPACK_IMPORTED_MODULE_14__["default"], _banner_reducers__WEBPACK_IMPORTED_MODULE_15__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(reducers));

/***/ }),

/***/ "./src/redux/rootSaga.ts":
/*!*******************************!*\
  !*** ./src/redux/rootSaga.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/sagas */ "./src/redux/user/sagas.ts");
/* harmony import */ var _auth_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/sagas */ "./src/redux/auth/sagas.ts");
/* harmony import */ var _performer_sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./performer/sagas */ "./src/redux/performer/sagas.ts");
/* harmony import */ var _message_sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message/sagas */ "./src/redux/message/sagas.ts");
/* harmony import */ var _settings_sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/sagas */ "./src/redux/settings/sagas.ts");
/* harmony import */ var _stream_chat_sagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stream-chat/sagas */ "./src/redux/stream-chat/sagas.ts");
/* harmony import */ var _videos_sagas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./videos/sagas */ "./src/redux/videos/sagas.ts");
/* harmony import */ var _photos_sagas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photos/sagas */ "./src/redux/photos/sagas.ts");
/* harmony import */ var _products_sagas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/sagas */ "./src/redux/products/sagas.ts");
/* harmony import */ var _galleries_sagas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./galleries/sagas */ "./src/redux/galleries/sagas.ts");
/* harmony import */ var _studio_sagas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./studio/sagas */ "./src/redux/studio/sagas.ts");
/* harmony import */ var _banner_sagas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./banner/sagas */ "./src/redux/banner/sagas.ts");














function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([..._auth_sagas__WEBPACK_IMPORTED_MODULE_2__["default"], ..._user_sagas__WEBPACK_IMPORTED_MODULE_1__["default"], ..._performer_sagas__WEBPACK_IMPORTED_MODULE_3__["default"], ..._message_sagas__WEBPACK_IMPORTED_MODULE_4__["default"], ..._settings_sagas__WEBPACK_IMPORTED_MODULE_5__["default"], ..._stream_chat_sagas__WEBPACK_IMPORTED_MODULE_6__["default"], ..._videos_sagas__WEBPACK_IMPORTED_MODULE_7__["default"], ..._photos_sagas__WEBPACK_IMPORTED_MODULE_8__["default"], ..._products_sagas__WEBPACK_IMPORTED_MODULE_9__["default"], ..._galleries_sagas__WEBPACK_IMPORTED_MODULE_10__["default"], ..._studio_sagas__WEBPACK_IMPORTED_MODULE_11__["default"], ..._banner_sagas__WEBPACK_IMPORTED_MODULE_12__["default"]].map(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["spawn"]));
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ }),

/***/ "./src/redux/settings/actions.ts":
/*!***************************************!*\
  !*** ./src/redux/settings/actions.ts ***!
  \***************************************/
/*! exports provided: updateSettings, getCountries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSettings", function() { return updateSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountries", function() { return getCountries; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateSettings = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateSettings');
const getCountries = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('getCountries');

/***/ }),

/***/ "./src/redux/settings/reducers.ts":
/*!****************************************!*\
  !*** ./src/redux/settings/reducers.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/settings/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // TODO -

const initialState = {
  countries: []
};
const settingReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["updateSettings"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), data.payload);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('settings', [settingReducers], initialState)));

/***/ }),

/***/ "./src/redux/settings/sagas.ts":
/*!*************************************!*\
  !*** ./src/redux/settings/sagas.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/redux/settings/actions.ts");





const settingSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getCountries"],

  *worker() {
    try {
      const countries = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(state => state.settings.countries);
      if (countries && countries.length) return;
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_2__["settingService"].getCountries();
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateSettings"])({
        countries: resp.data
      }));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createSagas"])(settingSagas)]));

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_storeHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/storeHolder */ "./src/lib/storeHolder.ts");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ "./src/redux/rootReducer.ts");
/* harmony import */ var _rootSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootSaga */ "./src/redux/rootSaga.ts");

 // import { composeWithDevTools } from 'remote-redux-devtools';





const bindMiddleware = middleware => {
  if (true) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};
/**
 * const composeEnhancers = composeWithDevTools({
 * realtime: true,
 * name: 'xcams user',
 * hostname: 'localhost',
 * port: 8000 // the port your remotedev server is running at
 * });
*/


function configureStore(initialState) {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, bindMiddleware([sagaMiddleware]));
  /**
   * redux dev tool
   * const store = createStore(rootReducer, initialState, composeEnhancers(bindMiddleware([sagaMiddleware]))) as any;
   */

  store.sagaTask = sagaMiddleware.run(_rootSaga__WEBPACK_IMPORTED_MODULE_4__["default"]);
  _lib_storeHolder__WEBPACK_IMPORTED_MODULE_2__["default"].setStore(store);
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./src/redux/stream-chat/actions.ts":
/*!******************************************!*\
  !*** ./src/redux/stream-chat/actions.ts ***!
  \******************************************/
/*! exports provided: getStreamConversation, getStreamConversationSuccess, getStreamConversationFail, sendStreamMessage, sendStreamMessageSuccess, sendStreamMessageFail, receiveStreamMessageSuccess, loadStreamMessages, loadStreamMessagesSuccess, loadStreamMessagesFail, loadMoreStreamMessages, loadMoreStreamMessagesSuccess, loadMoreStreamMessagesFail, fetchingStreamMessage, resetStreamMessage, resetAllStreamMessage, deleteMessage, deleteMessageSuccess, deleteMessageFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStreamConversation", function() { return getStreamConversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStreamConversationSuccess", function() { return getStreamConversationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStreamConversationFail", function() { return getStreamConversationFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendStreamMessage", function() { return sendStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendStreamMessageSuccess", function() { return sendStreamMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendStreamMessageFail", function() { return sendStreamMessageFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveStreamMessageSuccess", function() { return receiveStreamMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStreamMessages", function() { return loadStreamMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStreamMessagesSuccess", function() { return loadStreamMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStreamMessagesFail", function() { return loadStreamMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreStreamMessages", function() { return loadMoreStreamMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreStreamMessagesSuccess", function() { return loadMoreStreamMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreStreamMessagesFail", function() { return loadMoreStreamMessagesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchingStreamMessage", function() { return fetchingStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetStreamMessage", function() { return resetStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAllStreamMessage", function() { return resetAllStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMessage", function() { return deleteMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMessageSuccess", function() { return deleteMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMessageFail", function() { return deleteMessageFail; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  getStreamConversation,
  getStreamConversationSuccess,
  getStreamConversationFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getStreamConversation', 'GET_STREAM_CONVERSATION');
const {
  sendStreamMessage,
  sendStreamMessageSuccess,
  sendStreamMessageFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('sendStreamMessage', 'SEND_STREAM_MESSAGE');
const {
  receiveStreamMessageSuccess
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('receiveStreamMessageSuccess', 'RECEIVE_STREAM_MESSAGE_SUCCESS');
const {
  loadStreamMessages,
  loadStreamMessagesSuccess,
  loadStreamMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('loadStreamMessages', 'LOAD_STREAM_MESSAGES');
const {
  loadMoreStreamMessages,
  loadMoreStreamMessagesSuccess,
  loadMoreStreamMessagesFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('loadMoreStreamMessages', 'LOAD_MORE_STREAM_MESSAGES');
const fetchingStreamMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('fetchingStreamMessage');
const resetStreamMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('resetStreamMessage');
const resetAllStreamMessage = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('resetAllStreamMessage');
const {
  deleteMessage,
  deleteMessageSuccess,
  deleteMessageFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('deleteMessage', 'DELETE_MESSAGE');

/***/ }),

/***/ "./src/redux/stream-chat/reducers.ts":
/*!*******************************************!*\
  !*** ./src/redux/stream-chat/reducers.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/stream-chat/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialMessageState = {
  activeConversation: {},
  sendMessage: {
    sending: false
  },
  receiveMessage: {},
  conversationMap: {}
};
const streamMessageReducer = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getStreamConversation"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      activeConversation: {
        fetching: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getStreamConversationSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      activeConversation: {
        fetching: false,
        data: data.payload.data
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchingStreamMessage"],

  reducer(state, data) {
    const {
      conversationMap
    } = state;
    const {
      conversationId
    } = data.payload;
    conversationMap[conversationId] = _objectSpread(_objectSpread({}, conversationMap[conversationId]), {}, {
      fetching: true
    });
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loadStreamMessagesSuccess"],

  reducer(state, data) {
    const {
      conversationMap
    } = state;
    const {
      conversationId,
      items,
      total
    } = data.payload;
    conversationMap[conversationId] = {
      items: [...items.reverse()],
      total,
      fetching: false
    };
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loadMoreStreamMessagesSuccess"],

  reducer(state, data) {
    const {
      conversationMap
    } = state;
    const {
      conversationId,
      items,
      total
    } = data.payload;
    conversationMap[conversationId] = {
      items: [...items.reverse(), ...(conversationMap[conversationId].items || [])],
      total,
      fetching: false
    };
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sendStreamMessage"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      sendMessage: {
        sending: true,
        success: false,
        data: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sendStreamMessageSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    return _objectSpread(_objectSpread({}, nextState), {}, {
      sendMessage: {
        sending: false,
        success: true,
        data: data.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["sendStreamMessageFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      sendMessage: {
        sending: false,
        success: false,
        error: data.payload
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["receiveStreamMessageSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const {
      conversationId
    } = data.payload;

    if (!nextState.conversationMap[conversationId] || !nextState.conversationMap[conversationId].items) {
      nextState.conversationMap[conversationId] = {
        items: []
      };
    }

    nextState.conversationMap[conversationId].items = [...nextState.conversationMap[conversationId].items, data.payload];
    return _objectSpread(_objectSpread({}, nextState), {}, {
      receiveMessage: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["resetStreamMessage"],

  reducer(state) {
    const nextState = _objectSpread({}, state);

    return _objectSpread(_objectSpread({}, nextState), {}, {
      activeConversation: {},
      sendMessage: {
        sending: false
      },
      receiveMessage: {},
      conversationMap: {}
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["resetAllStreamMessage"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const {
      conversationId
    } = data.payload;
    nextState.conversationMap[conversationId] = {
      items: []
    };
    return _objectSpread({}, nextState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["deleteMessageSuccess"],

  reducer(state, data) {
    const nextState = _objectSpread({}, state);

    const {
      conversationId,
      _id
    } = data.payload;
    const i = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"])(nextState.conversationMap[conversationId].items, item => item && item._id === _id);

    if (nextState.conversationMap[conversationId].items && nextState.conversationMap[conversationId].items[i]) {
      nextState.conversationMap[conversationId].items[i].text = 'Message deleted';
      nextState.conversationMap[conversationId].items[i].isDeleted = true;
    }

    return _objectSpread({}, nextState);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('streamMessage', [streamMessageReducer], initialMessageState)));

/***/ }),

/***/ "./src/redux/stream-chat/sagas.ts":
/*!****************************************!*\
  !*** ./src/redux/stream-chat/sagas.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/message.service */ "./src/services/message.service.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/redux/stream-chat/actions.ts");
/* eslint-disable no-console */






const streamMessageSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getStreamConversation"],

  *worker(data) {
    try {
      const {
        conversation
      } = data.payload;
      const {
        type
      } = conversation;
      const resp = type === 'stream_public' ? yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].findPublicConversationPerformer(conversation.performerId) : yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getConversationByStreamId(conversation.streamId);

      if (resp && resp.data) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getStreamConversationSuccess"])({
          data: resp.data
        }));
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadStreamMessages"])({
          conversationId: resp.data._id,
          limit: 25,
          offset: 0,
          type
        }));
      }
    } catch (e) {
      // load error
      console.log('err-get-conversation', e);
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["loadStreamMessages"],

  *worker(data) {
    try {
      const {
        conversationId,
        offset,
        limit,
        type
      } = data.payload;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["fetchingStreamMessage"])({
        conversationId
      }));
      const resp = type === 'stream_public' ? yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getPublicMessages(conversationId, {
        sort: 'desc',
        offset,
        limit
      }) : yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getMessages(conversationId, {
        sort: 'desc',
        offset,
        limit
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadStreamMessagesSuccess"])({
        conversationId,
        items: resp.data.data,
        total: resp.data.total
      }));
    } catch (e) {
      // load error
      console.log('err', e);
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["loadMoreStreamMessages"],

  *worker(data) {
    try {
      const messageMap = Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(state => state.streamMessage.messages);
      const {
        conversationId,
        offset,
        limit,
        type
      } = data.payload;

      if (messageMap && messageMap.fetching) {
        return;
      }

      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["fetchingStreamMessage"])({
        conversationId
      }));
      const resp = type === 'stream_public' ? yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getPublicMessages(conversationId, {
        sort: 'desc',
        offset,
        limit
      }) : yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].getMessages(conversationId, {
        sort: 'desc',
        offset,
        limit
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["loadMoreStreamMessagesSuccess"])({
        conversationId,
        items: resp.data.data,
        total: resp.data.total
      }));
    } catch (e) {
      // load error
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].error('Error occured, please try again later');
      console.log('err', e);
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["sendStreamMessage"],

  *worker(req) {
    try {
      const {
        conversationId,
        data,
        type
      } = req.payload;
      const resp = type === 'stream_public' ? yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].sendPublicStreamMessage(conversationId, data) : yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].sendStreamMessage(conversationId, data);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["sendStreamMessageSuccess"])(resp.data));
    } catch (e) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["sendStreamMessageSuccess"])(e));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["deleteMessage"],

  *worker(req) {
    try {
      const {
        messageId
      } = req.payload;
      const resp = yield _services_message_service__WEBPACK_IMPORTED_MODULE_3__["messageService"].deleteMessage(messageId);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMessageSuccess"])(resp.data));
    } catch (e) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["deleteMessageSuccess"])(e));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(streamMessageSagas)]));

/***/ }),

/***/ "./src/redux/streaming/actions.ts":
/*!****************************************!*\
  !*** ./src/redux/streaming/actions.ts ***!
  \****************************************/
/*! exports provided: addPrivateRequest, accessPrivateRequest, updateLiveStreamSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPrivateRequest", function() { return addPrivateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessPrivateRequest", function() { return accessPrivateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLiveStreamSettings", function() { return updateLiveStreamSettings; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const addPrivateRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ADD_PRIVATE_REQUEST');
const accessPrivateRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ACCESS_PRIVATE_REQUSET');
const updateLiveStreamSettings = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_LIVE_STREAM_SETTINGS');

/***/ }),

/***/ "./src/redux/streaming/reducers.ts":
/*!*****************************************!*\
  !*** ./src/redux/streaming/reducers.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/streaming/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  privateRequests: [],
  settings: {
    viewerURL: '',
    publisherURL: '',
    optionForBroadcast: 'hls',
    optionForPrivate: 'hls',
    secureOption: false
  }
};
const reducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["addPrivateRequest"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      privateRequests: [...state.privateRequests, action.payload]
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["accessPrivateRequest"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      privateRequests: state.privateRequests.filter(p => p.conversationId !== action.payload)
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["updateLiveStreamSettings"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      settings: _objectSpread(_objectSpread({}, state.settings), action.payload)
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('streaming', [reducers], initialState)));

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

/***/ "./src/redux/studio/reducers.ts":
/*!**************************************!*\
  !*** ./src/redux/studio/reducers.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/redux/studio/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initialState = {
  current: {
    _id: null,
    avatar: '/default-user-icon.png',
    stats: {},
    balance: 0,
    name: '',
    email: ''
  },
  updatingStudio: false,
  members: {
    data: [],
    total: 0,
    success: false,
    searching: false,
    error: null
  },
  commissions: {
    data: [],
    total: 0,
    success: false,
    searching: false,
    error: null
  },
  performerRequests: {
    data: [],
    total: 0,
    success: false,
    searching: false,
    error: null
  },
  earning: {
    data: [],
    stats: null,
    total: 0,
    searching: false,
    success: false,
    error: null,
    fromDate: null,
    toDate: null
  },
  studioPayout: {
    data: [],
    total: 0,
    searching: false,
    success: false,
    error: null
  },
  updateStudioSuccess: false,
  updateStudioError: null
};
const studioReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateCurrentStudio"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateStudioSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: data.payload,
      updateStudioSuccess: true,
      updatingStudio: false,
      updateStudioError: null
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateStudioFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updateStudioSuccess: false,
      updatingStudio: false,
      updateStudioError: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setUpdatingStudio"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updatingStudio: true,
      updateStudioSuccess: false
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMembersSearching"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      members: _objectSpread(_objectSpread({}, state.members), {}, {
        searching: true,
        error: null
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMembersSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      members: {
        searching: false,
        success: true,
        data: action.payload.data,
        total: action.payload.total,
        error: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMembersFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      members: _objectSpread(_objectSpread({}, state.members), {}, {
        searching: false,
        success: false,
        error: action.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateMemberStatus"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      members: _objectSpread(_objectSpread({}, state.members), {}, {
        data: state.members.data.map(member => _objectSpread(_objectSpread({}, member), {}, {
          status: member._id === action.payload ? member.status === 'active' ? 'inactive' : 'active' : member.status
        }))
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMembersCommissionsSearching"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      commissions: _objectSpread(_objectSpread({}, state.commissions), {}, {
        searching: true,
        error: null
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMembersCommissionsSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      commissions: {
        searching: false,
        success: true,
        data: action.payload.data,
        total: action.payload.total,
        error: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getMembersCommissionsFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      commissions: _objectSpread(_objectSpread({}, state.commissions), {}, {
        searching: false,
        success: false,
        error: action.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateMemberCommision"],

  reducer(state, action) {
    const {
      id,
      memberCommission
    } = action.payload;
    const {
      commissions
    } = state;
    const commission = commissions.data.find(c => c._id === id);

    if (commission) {
      commission.commissionSetting.memberCommission = memberCommission;
    }

    return _objectSpread(_objectSpread({}, state), {}, {
      commissions: _objectSpread(_objectSpread({}, state.commissions), {}, {
        data: [...commissions.data]
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getStudioEarningSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      earning: {
        data: action.payload.data.data,
        total: action.payload.data.total,
        fromDate: action.payload.fromDate,
        toDate: action.payload.toDate,
        stats: action.payload.stats,
        searching: false,
        success: true,
        error: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getStudioEarningFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      earning: _objectSpread(_objectSpread({}, state.earning), {}, {
        searching: false,
        success: false,
        error: action.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setGettingStudioEarning"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      earning: _objectSpread(_objectSpread({}, state.earning), {}, {
        searching: true,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setGettingPerformerRequest"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerRequests: _objectSpread(_objectSpread({}, state.performerRequests), {}, {
        searching: true,
        error: null
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getPerformerRequestSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerRequests: {
        searching: false,
        success: true,
        data: action.payload.data,
        total: action.payload.total,
        error: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getPerformerRequestFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      performerRequests: _objectSpread(_objectSpread({}, state.performerRequests), {}, {
        searching: false,
        success: false,
        error: action.payload
      })
    });
  }

}, {
  on: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_2__["logout"],

  reducer() {
    return _objectSpread({}, initialState);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getStudioStatsSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: _objectSpread(_objectSpread({}, state.current), {}, {
        stats: action.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateTotalPerformer"],

  reducer(state, action) {
    const {
      current
    } = state;
    return _objectSpread(_objectSpread({}, state), {}, {
      stats: _objectSpread(_objectSpread({}, state.stats), {}, {
        totalPerformer: current.stats.totalPerformer + action.payload
      })
    });
  }

}, // studio payout request
{
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getStudioPayoutRequestSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      studioPayout: {
        data: action.payload.data,
        total: action.payload.total,
        searching: false,
        success: true,
        error: null
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getStudioPayoutRequestFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      studioPayout: _objectSpread(_objectSpread({}, state.studioPayout), {}, {
        searching: false,
        success: false,
        error: action.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setGettingStudioPayoutRequest"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      studioPayout: _objectSpread(_objectSpread({}, state.studioPayout), {}, {
        searching: true,
        error: null
      })
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('studio', [studioReducers], initialState)));

/***/ }),

/***/ "./src/redux/studio/sagas.ts":
/*!***********************************!*\
  !*** ./src/redux/studio/sagas.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/redux/studio/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const studioSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["updateStudio"],

  *worker(data) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setUpdatingStudio"])());
      const updated = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["studioService"].update(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioSuccess"])(updated.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioPaymentInfo"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setUpdatingStudio"])());
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["studioService"].updatePaymentInfo(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioDirectDeposit"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setUpdatingStudio"])());
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["studioService"].updateDirectDepost(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioBitpay"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setUpdatingStudio"])());
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["studioService"].updateBitpay(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioPaxum"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setUpdatingStudio"])());
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["studioService"].updatePaxum(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateStudioFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getMembers"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getMembersSearching"])());
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["studioService"].getMembers(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getMembersSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getMembersFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getMembersCommissions"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getMembersCommissionsSearching"])());
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["studioService"].getMemberCommissions(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getMembersCommissionsSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getMembersCommissionsFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getPerformerRequest"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setGettingPerformerRequest"])());
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["studioService"].getPerformerRequest(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getPerformerRequestSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getPerformerRequestFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getStudioEarning"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setGettingStudioEarning"])());
      let difDateQuery = false;
      const earning = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(state => state.performer.earning);
      const {
        fromDate,
        toDate
      } = action.payload;
      const query = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(action.payload, ['fromDate', 'toDate']);

      if (fromDate && toDate) {
        query.fromDate = fromDate;
        query.toDate = toDate;
      }

      if (earning.toDate !== toDate || earning.fromDate !== fromDate) difDateQuery = true;
      const [resp, stats] = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([_services_index__WEBPACK_IMPORTED_MODULE_3__["earningService"].search(query, 'studio'), earning.stats && !difDateQuery ? earning.stats : _services_index__WEBPACK_IMPORTED_MODULE_3__["earningService"].stats(query, 'studio')]);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getStudioEarningSuccess"])(_objectSpread(_objectSpread({}, query), {}, {
        stats,
        data: resp.data
      })));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getStudioEarningFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getStudioStats"],

  *worker() {
    try {
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["studioService"].stats();
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getStudioStatsSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getStudioStatsFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getStudioPayoutRequest"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setGettingStudioPayoutRequest"])());
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["payoutRequestService"].studioSearch(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getStudioPayoutRequestSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getStudioPayoutRequestFail"])(err));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(studioSagas)]));

/***/ }),

/***/ "./src/redux/ui/actions.ts":
/*!*********************************!*\
  !*** ./src/redux/ui/actions.ts ***!
  \*********************************/
/*! exports provided: updateUIValue, loadUIValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUIValue", function() { return updateUIValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUIValue", function() { return loadUIValue; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateUIValue = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateUIValue');
const loadUIValue = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('loadUIValue');

/***/ }),

/***/ "./src/redux/ui/reducers.ts":
/*!**********************************!*\
  !*** ./src/redux/ui/reducers.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/ui/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // TODO -

const initialState = {
  theme: 'light',
  siteName: '',
  logo: '',
  banner: '',
  menus: [],
  placeholderAvatarUrl: '/no-avatar.png',
  placeholderLoginUrl: '/background-login.jpg',
  footerContent: '',
  enablePopup18Plus: true,
  popupContent18Plus: ''
};
const uiReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["updateUIValue"],

  reducer(state, data) {
    if (false) {}

    return _objectSpread(_objectSpread({}, state), data.payload);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["loadUIValue"],

  reducer(state) {
    const newVal = {};

    if (false) {}

    return _objectSpread(_objectSpread({}, state), newVal);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('ui', [uiReducers], initialState)));

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

/***/ "./src/redux/user/reducers.ts":
/*!************************************!*\
  !*** ./src/redux/user/reducers.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/redux/user/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initialState = {
  current: {
    _id: null,
    avatar: '/default-user-icon.png',
    name: '',
    email: ''
  },
  userUpdating: false,
  updateUserSuccess: false,
  updateUserError: null,
  paymentTokenHistory: {
    searching: false,
    data: [],
    total: 0,
    error: null,
    success: false
  },
  favourites: {
    searching: false,
    data: null,
    total: 0,
    error: null,
    success: false
  }
};
const userReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateCurrentUser"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateCurrentUserAvatar"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: _objectSpread(_objectSpread({}, state.current), {}, {
        avatar: data.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateCurrentUserBalance"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: _objectSpread(_objectSpread({}, state.current), {}, {
        balance: state.current.balance + action.payload
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateUserSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: data.payload,
      updateUserSuccess: true,
      userUpdating: false,
      updateUserError: null
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["updateUserFail"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      updateUserSuccess: false,
      userUpdating: false,
      updateUserError: data.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setUpdating"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      userUpdating: true,
      updateUserSuccess: false
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["setReducer"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      [data.payload.field]: data.payload.data
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["buyTokenSuccess"],

  reducer(state, data) {
    const {
      current
    } = state;
    current.balance += data.payload;
    return _objectSpread(_objectSpread({}, state), {}, {
      current: _objectSpread(_objectSpread({}, state.current), {}, {
        balance: current.balance
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["gettingFavoritePerformers"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      favourites: _objectSpread(_objectSpread({}, state.favourites), {}, {
        searching: true,
        data: null,
        total: 0,
        error: null,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getFavoritePerformersSuccess"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      favourites: _objectSpread(_objectSpread({}, state.favourites), {}, {
        searching: false,
        data: data.payload.data,
        total: data.payload.total,
        error: null,
        success: true
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getFavoritePerformersFailed"],

  reducer(state, data) {
    return _objectSpread(_objectSpread({}, state), {}, {
      favourites: _objectSpread(_objectSpread({}, state.favourites), {}, {
        searching: false,
        data: null,
        total: 0,
        error: data.payload.data,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["removeFavorite"],

  reducer(state, action) {
    const {
      favourites
    } = state;
    favourites.data = favourites.data.filter(f => f.performer._id !== action.payload);
    return _objectSpread({}, state);
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["gettigPaymentTokenHistory"],

  reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      paymentTokenHistory: _objectSpread(_objectSpread({}, state.paymentTokenHistory), {}, {
        searching: true,
        error: null,
        success: false
      })
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getPaymentTokenHistroySuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      paymentTokenHistory: {
        searching: false,
        data: action.payload.data,
        total: action.payload.total,
        error: null,
        success: true
      }
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_3__["getPaymentTokenHistroyFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      paymentTokenHistory: _objectSpread(_objectSpread({}, state.paymentTokenHistory), {}, {
        searching: false,
        error: action.payload,
        success: false
      })
    });
  }

}, {
  on: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_2__["logout"],

  reducer() {
    return _objectSpread({}, initialState);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"])('user', [userReducers], initialState)));

/***/ }),

/***/ "./src/redux/user/sagas.ts":
/*!*********************************!*\
  !*** ./src/redux/user/sagas.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/index */ "./src/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/redux/user/actions.ts");





const userSagas = [// TODO - defind update current user or get from auth user info to reload current user data if needed
{
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["updateUser"],

  *worker(data) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setUpdating"])());
      const updated = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["userService"].updateMe(data.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateUserSuccess"])(updated.data)); // if this is current user, reload user info?
    } catch (e) {
      // TODO - alert error
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["updateUserFail"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getFavoritePerformers"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["gettingFavoritePerformers"])());
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["favouriteService"].search(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getFavoritePerformersSuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getFavoritePerformersFailed"])(err));
    }
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_4__["getPaymentTokenHistroy"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["gettigPaymentTokenHistory"])());
      const resp = yield _services_index__WEBPACK_IMPORTED_MODULE_3__["purchaseItemService"].search(action.payload);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getPaymentTokenHistroySuccess"])(resp.data));
    } catch (e) {
      const err = yield Promise.resolve(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["getPaymentTokenHistroyFail"])(err));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(userSagas)]));

/***/ }),

/***/ "./src/redux/videos/actions.ts":
/*!*************************************!*\
  !*** ./src/redux/videos/actions.ts ***!
  \*************************************/
/*! exports provided: getPerformersVideos, getPerformersVideosSuccess, getPerformersVideosFail, gettingPerformerVideos, addPerformerVideos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformersVideos", function() { return getPerformersVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformersVideosSuccess", function() { return getPerformersVideosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformersVideosFail", function() { return getPerformersVideosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingPerformerVideos", function() { return gettingPerformerVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPerformerVideos", function() { return addPerformerVideos; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const [getPerformersVideos, getPerformersVideosSuccess, getPerformersVideosFail] = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncActions"])('GET_PERFOMER_VIDEOS');
const gettingPerformerVideos = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GETTING_PERFORMER_VIDEOS');
const addPerformerVideos = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ADD_PERFORMER_VIDEOS');

/***/ }),

/***/ "./src/redux/videos/reducers.ts":
/*!**************************************!*\
  !*** ./src/redux/videos/reducers.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/videos/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  ids: [],
  data: {},
  searching: false,
  success: false,
  error: null
};
const videoReducers = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["gettingPerformerVideos"],

  reducer() {
    return _objectSpread(_objectSpread({}, initialState), {}, {
      searching: true
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getPerformersVideosSuccess"],

  reducer(state, action) {
    return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload), {}, {
      searching: false,
      success: true,
      error: null
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["getPerformersVideosFail"],

  reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      searching: false,
      success: false,
      error: action.payload
    });
  }

}, {
  on: _actions__WEBPACK_IMPORTED_MODULE_2__["addPerformerVideos"],

  reducer(state, action) {
    const {
      ids,
      data
    } = state;
    const videos = action.payload;
    videos.forEach(v => {
      data[v._id] = v;
      ids.push(v._id);
    });
    return _objectSpread({}, state);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createReducers"])('videos', [videoReducers], initialState)));

/***/ }),

/***/ "./src/redux/videos/sagas.ts":
/*!***********************************!*\
  !*** ./src/redux/videos/sagas.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/redux/videos/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const videosSagas = [{
  on: _actions__WEBPACK_IMPORTED_MODULE_5__["getPerformersVideos"],

  *worker(action) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["gettingPerformerVideos"])());
      const resp = yield src_services__WEBPACK_IMPORTED_MODULE_3__["videoService"].search(action.payload);
      const videos = resp.data.data;
      const ids = videos.map(v => v._id);
      const data = videos.length && (videos.length > 1 ? videos.reduce((previousValue, currentValue, index) => {
        if (index === 1) {
          return {
            [previousValue._id]: previousValue,
            [currentValue._id]: currentValue
          };
        }

        const value = _objectSpread({}, previousValue);

        value[currentValue._id] = currentValue;
        return value;
      }) : {
        [videos[0]._id]: videos[0]
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPerformersVideosSuccess"])({
        total: resp.data.total,
        data,
        ids
      }));
    } catch (e) {
      const err = Object(src_lib__WEBPACK_IMPORTED_MODULE_4__["getResponseError"])(e);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["getPerformersVideosFail"])(err));
    }
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])([Object(_lib_redux__WEBPACK_IMPORTED_MODULE_2__["createSagas"])(videosSagas)]));

/***/ }),

/***/ "./src/redux/withReduxSaga.ts":
/*!************************************!*\
  !*** ./src/redux/withReduxSaga.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/redux/store.ts");




const withReduxSaga = BaseComponent => next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default()(_store__WEBPACK_IMPORTED_MODULE_2__["default"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_1___default()(BaseComponent));

/* harmony default export */ __webpack_exports__["default"] = (withReduxSaga);

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

/***/ "./style/index.less":
/*!**************************!*\
  !*** ./style/index.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


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

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "enquire-js":
/*!*****************************!*\
  !*** external "enquire-js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("enquire-js");

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

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

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