(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./src/components/common/layout/menu.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/layout/menu.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable react/no-array-index-key */





var SiderMenu = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SiderMenu, _PureComponent);

  var _super = _createSuper(SiderMenu);

  function SiderMenu() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SiderMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      selectedKeys: ['dashboard'],
      openKeys: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onOpenChange", function (openKeys) {
      var menus = _this.props.menus;
      var rootSubmenuKeys = menus.filter(function (_) {
        return !_.menuParentId;
      }).map(function (_) {
        return _.id;
      });
      var latestOpenKey = openKeys.find(function (key) {
        return openKeys.indexOf(key) === -1;
      });
      var newOpenKeys = openKeys;

      if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
        newOpenKeys = latestOpenKey ? [latestOpenKey] : [];
      }

      _this.setState({
        openKeys: newOpenKeys
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "generateMenus", function (data) {
      var totalNotReadMessage = _this.props.totalNotReadMessage;
      return data.map(function (item, index) {
        if (item.children) {
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Menu"].SubMenu, {
            icon: item.icon,
            key: "sub-".concat(index),
            title: __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("span", null, item.name))
          }, _this.generateMenus(item.children));
        }

        return (// <h1>Be happy!</h1>
          __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
            key: item.id,
            icon: item.icon
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
            href: item.route,
            as: item.as || item.route
          }, __jsx("a", null, item.name, ' ', item.id === 'messages' && "(".concat(totalNotReadMessage, ")"))))
        );
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SiderMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Router.events.on('routeChangeStart', this.routerChange.bind(this));
      var menus = this.props.menus;
      var selectedKeys = true ? this.getSelectedKeys(menus) : undefined;
      this.setSelectedKeys(selectedKeys);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          menus = _this$props.menus,
          router = _this$props.router;

      if (router.pathname !== prevProps.router.pathname) {
        var selectedKeys = true ? this.getSelectedKeys(menus) : undefined;
        this.setSelectedKeys(selectedKeys);
      }
    }
  }, {
    key: "onSelect",
    value: function onSelect(_ref) {
      var key = _ref.key;
      var menus = this.props.menus;
      var flatTree = this.flatten(menus);
      var selectedKeys = flatTree.filter(function (m) {
        return m.id === key;
      }).map(function (m) {
        return m.id;
      });
      this.setSelectedKeys(selectedKeys);
    }
  }, {
    key: "getSelectedKeys",
    value: function getSelectedKeys(menus) {
      var pathname = true ? next_router__WEBPACK_IMPORTED_MODULE_11___default.a.pathname : undefined;
      var flatTree = this.flatten(menus);
      return flatTree // .filter((m) => pathname.includes(m.as || m.route))
      .filter(function (m) {
        return pathname === m.route || pathname === m.as;
      }).map(function (m) {
        return m.id;
      });
    }
  }, {
    key: "setSelectedKeys",
    value: function setSelectedKeys(selectedKeys) {
      this.setState({
        selectedKeys: selectedKeys
      });
    }
  }, {
    key: "flatten",
    value: function flatten(menus) {
      var _this2 = this;

      var flattenMenus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      menus.forEach(function (m) {
        if (m.children) {
          _this2.flatten(m.children, flattenMenus);
        }

        var tmp = _objectSpread({}, m);

        delete tmp.children;
        flattenMenus.push(tmp);
      });
      return flattenMenus;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          menus = _this$props2.menus,
          collapsed = _this$props2.collapsed,
          onClick = _this$props2.onClick;
      var _this$state = this.state,
          selectedKeys = _this$state.selectedKeys,
          openKeys = _this$state.openKeys;
      var menuProps = collapsed ? {} : {
        openKeys: openKeys
      };
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Menu"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: "profile-menu",
        mode: "inline",
        theme: theme,
        selectedKeys: selectedKeys,
        onOpenChange: this.onOpenChange.bind(this),
        onSelect: this.onSelect.bind(this),
        onClick: onClick // onClick={
        //   isMobile
        //     ? () => {
        //         onCollapseChange(true);
        //       }
        //     : undefined
        // }

      }, menuProps), this.generateMenus(menus));
    }
  }]);

  return SiderMenu;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (_c = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(SiderMenu));

var _c;

$RefreshReg$(_c, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dC9tZW51LnRzeCJdLCJuYW1lcyI6WyJTaWRlck1lbnUiLCJzZWxlY3RlZEtleXMiLCJvcGVuS2V5cyIsIm1lbnVzIiwicHJvcHMiLCJyb290U3VibWVudUtleXMiLCJmaWx0ZXIiLCJfIiwibWVudVBhcmVudElkIiwibWFwIiwiaWQiLCJsYXRlc3RPcGVuS2V5IiwiZmluZCIsImtleSIsImluZGV4T2YiLCJuZXdPcGVuS2V5cyIsInNldFN0YXRlIiwiZGF0YSIsInRvdGFsTm90UmVhZE1lc3NhZ2UiLCJpdGVtIiwiaW5kZXgiLCJjaGlsZHJlbiIsImljb24iLCJuYW1lIiwiZ2VuZXJhdGVNZW51cyIsInJvdXRlIiwiYXMiLCJnZXRTZWxlY3RlZEtleXMiLCJzZXRTZWxlY3RlZEtleXMiLCJwcmV2UHJvcHMiLCJyb3V0ZXIiLCJwYXRobmFtZSIsImZsYXRUcmVlIiwiZmxhdHRlbiIsIm0iLCJSb3V0ZXIiLCJmbGF0dGVuTWVudXMiLCJmb3JFYWNoIiwidG1wIiwicHVzaCIsInRoZW1lIiwiY29sbGFwc2VkIiwib25DbGljayIsInN0YXRlIiwibWVudVByb3BzIiwib25PcGVuQ2hhbmdlIiwiYmluZCIsIm9uU2VsZWN0IiwiUHVyZUNvbXBvbmVudCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFZTUEsUzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxrQkFBWSxFQUFFLENBQUMsV0FBRCxDQURSO0FBRU5DLGNBQVEsRUFBRTtBQUZKLEs7O3VOQXdCTyxVQUFDQSxRQUFELEVBQWM7QUFDM0IsVUFBUUMsS0FBUixHQUFrQixNQUFLQyxLQUF2QixDQUFRRCxLQUFSO0FBQ0EsVUFBTUUsZUFBZSxHQUFHRixLQUFLLENBQzFCRyxNQURxQixDQUNkLFVB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UUFBWDtBQUNBZSxvQkFBWSxDQUFDRyxJQUFiLENBQWtCRCxHQUFsQjtBQUNELE9BUEQ7QUFTQSxhQUFPRixZQUFQO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AseUJBRUksS0FBS2hDLEtBRlQ7QUFBQSxVQUNFb0MsS0FERixnQkFDRUEsS0FERjtBQUFBLFVBQ1NyQyxLQURULGdCQUNTQSxLQURUO0FBQUEsVUFDZ0JzQyxTQURoQixnQkFDZ0JBLFNBRGhCO0FBQUEsVUFDMkJDLE9BRDNCLGdCQUMyQkEsT0FEM0I7QUFHQSx3QkFBbUMsS0FBS0MsS0FBeEM7QUFBQSxVQUFRMUMsWUFBUixlQUFRQSxZQUFSO0FBQUEsVUFBc0JDLFFBQXRCLGVBQXNCQSxRQUF0QjtBQUNBLFVBQU0wQyxTQUFTLEdBQUdILFNBQVMsR0FDdkIsRUFEdUIsR0FFdkI7QUFDQXZDLGdCQUFRLEVBQVJBO0FBREEsT0FGSjtBQU1BLGFBQ0UsTUFBQyx5Q0FBRDtBQUNFLFdBQUcsRUFBQyxjQUROO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSxhQUFLLEVBQUVzQyxLQUhUO0FBSUUsb0JBQVksRUFBRXZDLFlBSmhCO0FBS0Usb0JBQVksRUFBRSxLQUFLNEMsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FMaEI7QUFNRSxnQkFBUSxFQUFFLEtBQUtDLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQU5aO0FBT0UsZUFBTyxFQUFFSixPQVBYLENBUUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZEYsU0FlTUUsU0FmTixHQWlCRyxLQUFLcEIsYUFBTCxDQUFtQnJCLEtBQW5CLENBakJILENBREY7QUFxQkQ7Ozs7RUFqSnFCNkMsbUQ7O0FBb0pULG9FQUFBQywrREFBVSxDQUFDakQsU0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciwgTmV4dFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRoZW1lPzogc3RyaW5nO1xuICBpc01vYmlsZT86IGJvb2xlYW47XG4gIG1lbnVzPzogYW55O1xuICBjb2xsYXBzZWQ/OiBib29sZWFuO1xuICByb3V0ZXI6IE5leHRSb3V0ZXI7XG4gIHRvdGFsTm90UmVhZE1lc3NhZ2U/OiBudW1iZXI7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5jbGFzcyBTaWRlck1lbnUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PElQcm9wcz4ge1xuICBzdGF0ZSA9IHtcbiAgICBzZWxlY3RlZEtleXM6IFsnZGFzaGJvYXJkJ10sXG4gICAgb3BlbktleXM6IFtdXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIHRoaXMucm91dGVyQ2hhbmdlLmJpbmQodGhpcykpO1xuICAgIGNvbnN0IHsgbWVudXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcHJvY2Vzcy5icm93c2VyXG4gICAgICA/IHRoaXMuZ2V0U2VsZWN0ZWRLZXlzKG1lbnVzKVxuICAgICAgOiBbXTtcbiAgICB0aGlzLnNldFNlbGVjdGVkS2V5cyhzZWxlY3RlZEtleXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogSVByb3BzKSB7XG4gICAgY29uc3QgeyBtZW51cywgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgIT09IHByZXZQcm9wcy5yb3V0ZXIucGF0aG5hbWUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHByb2Nlc3MuYnJvd3NlclxuICAgICAgICA/IHRoaXMuZ2V0U2VsZWN0ZWRLZXlzKG1lbnVzKVxuICAgICAgICA6IFtdO1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZEtleXMoc2VsZWN0ZWRLZXlzKTtcbiAgICB9XG4gIH1cblxuICBvbk9wZW5DaGFuZ2UgPSAob3BlbktleXMpID0+IHtcbiAgICBjb25zdCB7IG1lbnVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJvb3RTdWJtZW51S2V5cyA9IG1lbnVzXG4gICAgICAuZmlsdGVyKChfKSA9PiAhXy5tZW51UGFyZW50SWQpXG4gICAgICAubWFwKChfKSA9PiBfLmlkKTtcblxuICAgIGNvbnN0IGxhdGVzdE9wZW5LZXkgPSBvcGVuS2V5cy5maW5kKFxuICAgICAgKGtleSkgPT4gb3BlbktleXMuaW5kZXhPZihrZXkpID09PSAtMVxuICAgICk7XG5cbiAgICBsZXQgbmV3T3BlbktleXMgPSBvcGVuS2V5cztcbiAgICBpZiAocm9vdFN1Ym1lbnVLZXlzLmluZGV4T2YobGF0ZXN0T3BlbktleSkgIT09IC0xKSB7XG4gICAgICBuZXdPcGVuS2V5cyA9IGxhdGVzdE9wZW5LZXkgPyBbbGF0ZXN0T3BlbktleV0gOiBbXTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW5LZXlzOiBuZXdPcGVuS2V5c1xuICAgIH0pO1xuICB9O1xuXG4gIG9uU2VsZWN0KHsga2V5IH0pIHtcbiAgICBjb25zdCB7IG1lbnVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZsYXRUcmVlID0gdGhpcy5mbGF0dGVuKG1lbnVzKTtcbiAgICBjb25zdCBzZWxlY3RlZEtleXMgPSBmbGF0VHJlZS5maWx0ZXIoKG0pID0+IG0uaWQgPT09IGtleSkubWFwKChtKSA9PiBtLmlkKTtcbiAgICB0aGlzLnNldFNlbGVjdGVkS2V5cyhzZWxlY3RlZEtleXMpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRLZXlzKG1lbnVzOiBhbnkpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByb2Nlc3MuYnJvd3NlciA/IFJvdXRlci5wYXRobmFtZSA6ICcnO1xuICAgIGNvbnN0IGZsYXRUcmVlID0gdGhpcy5mbGF0dGVuKG1lbnVzKTtcbiAgICByZXR1cm4gKFxuICAgICAgZmxhdFRyZWVcbiAgICAgICAgLy8gLmZpbHRlcigobSkgPT4gcGF0aG5hbWUuaW5jbHVkZXMobS5hcyB8fCBtLnJvdXRlKSlcbiAgICAgICAgLmZpbHRlcigobSkgPT4gKHBhdGhuYW1lID09PSBtLnJvdXRlIHx8IHBhdGhuYW1lID09PSBtLmFzKSlcbiAgICAgICAgLm1hcCgobSkgPT4gbS5pZClcbiAgICApO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRLZXlzKHNlbGVjdGVkS2V5cykge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEtleXMgfSk7XG4gIH1cblxuICBnZW5lcmF0ZU1lbnVzID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCB7IHRvdGFsTm90UmVhZE1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWVudS5TdWJNZW51XG4gICAgICAgICAgICBpY29uPXtpdGVtLmljb259XG4gICAgICAgICAgICBrZXk9e2BzdWItJHtpbmRleH1gfVxuICAgICAgICAgICAgdGl0bGU9eyhcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlTWVudXMoaXRlbS5jaGlsZHJlbil9XG4gICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICAvLyA8aDE+QmUgaGFwcHkhPC9oMT5cbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0uaWR9IGljb249e2l0ZW0uaWNvbn0+XG4gICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5yb3V0ZX0gYXM9e2l0ZW0uYXMgfHwgaXRlbS5yb3V0ZX0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAge2l0ZW0uaWQgPT09ICdtZXNzYWdlcycgJiYgYCgke3RvdGFsTm90UmVhZE1lc3NhZ2V9KWB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgZmxhdHRlbihtZW51cywgZmxhdHRlbk1lbnVzID0gW10pIHtcbiAgICBtZW51cy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICBpZiAobS5jaGlsZHJlbikge1xuICAgICAgICB0aGlzLmZsYXR0ZW4obS5jaGlsZHJlbiwgZmxhdHRlbk1lbnVzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRtcCA9IHsgLi4ubSB9O1xuICAgICAgZGVsZXRlIHRtcC5jaGlsZHJlbjtcbiAgICAgIGZsYXR0ZW5NZW51cy5wdXNoKHRtcCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmxhdHRlbk1lbnVzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLCBtZW51cywgY29sbGFwc2VkLCBvbkNsaWNrXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZEtleXMsIG9wZW5LZXlzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG1lbnVQcm9wcyA9IGNvbGxhcHNlZFxuICAgICAgPyB7fVxuICAgICAgOiB7XG4gICAgICAgIG9wZW5LZXlzXG4gICAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNZW51XG4gICAgICAgIGtleT1cInByb2ZpbGUtbWVudVwiXG4gICAgICAgIG1vZGU9XCJpbmxpbmVcIlxuICAgICAgICB0aGVtZT17dGhlbWUgYXMgYW55fVxuICAgICAgICBzZWxlY3RlZEtleXM9e3NlbGVjdGVkS2V5c31cbiAgICAgICAgb25PcGVuQ2hhbmdlPXt0aGlzLm9uT3BlbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdC5iaW5kKHRoaXMpfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAvLyBvbkNsaWNrPXtcbiAgICAgICAgLy8gICBpc01vYmlsZVxuICAgICAgICAvLyAgICAgPyAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgb25Db2xsYXBzZUNoYW5nZSh0cnVlKTtcbiAgICAgICAgLy8gICAgICAgfVxuICAgICAgICAvLyAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgLy8gfVxuICAgICAgICB7Li4ubWVudVByb3BzfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5nZW5lcmF0ZU1lbnVzKG1lbnVzKX1cbiAgICAgIDwvTWVudT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2lkZXJNZW51KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=