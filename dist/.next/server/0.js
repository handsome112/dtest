exports.ids = [0];
exports.modules = {

/***/ "./src/components/common/layout/menu.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/layout/menu.tsx ***!
  \***********************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/no-array-index-key */





class SiderMenu extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedKeys: ['dashboard'],
      openKeys: []
    });

    _defineProperty(this, "onOpenChange", openKeys => {
      const {
        menus
      } = this.props;
      const rootSubmenuKeys = menus.filter(_ => !_.menuParentId).map(_ => _.id);
      const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === -1);
      let newOpenKeys = openKeys;

      if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
        newOpenKeys = latestOpenKey ? [latestOpenKey] : [];
      }

      this.setState({
        openKeys: newOpenKeys
      });
    });

    _defineProperty(this, "generateMenus", data => {
      const {
        totalNotReadMessage
      } = this.props;
      return data.map((item, index) => {
        if (item.children) {
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
            icon: item.icon,
            key: `sub-${index}`,
            title: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, item.name))
          }, this.generateMenus(item.children));
        }

        return (// <h1>Be happy!</h1>
          __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
            key: item.id,
            icon: item.icon
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: item.route,
            as: item.as || item.route
          }, __jsx("a", null, item.name, ' ', item.id === 'messages' && `(${totalNotReadMessage})`)))
        );
      });
    });
  }

  componentDidMount() {
    // Router.events.on('routeChangeStart', this.routerChange.bind(this));
    const {
      menus
    } = this.props;
    const selectedKeys = false ? undefined : [];
    this.setSelectedKeys(selectedKeys);
  }

  componentDidUpdate(prevProps) {
    const {
      menus,
      router
    } = this.props;

    if (router.pathname !== prevProps.router.pathname) {
      const selectedKeys = false ? undefined : [];
      this.setSelectedKeys(selectedKeys);
    }
  }

  onSelect({
    key
  }) {
    const {
      menus
    } = this.props;
    const flatTree = this.flatten(menus);
    const selectedKeys = flatTree.filter(m => m.id === key).map(m => m.id);
    this.setSelectedKeys(selectedKeys);
  }

  getSelectedKeys(menus) {
    const pathname = false ? undefined : '';
    const flatTree = this.flatten(menus);
    return flatTree // .filter((m) => pathname.includes(m.as || m.route))
    .filter(m => pathname === m.route || pathname === m.as).map(m => m.id);
  }

  setSelectedKeys(selectedKeys) {
    this.setState({
      selectedKeys
    });
  }

  flatten(menus, flattenMenus = []) {
    menus.forEach(m => {
      if (m.children) {
        this.flatten(m.children, flattenMenus);
      }

      const tmp = _objectSpread({}, m);

      delete tmp.children;
      flattenMenus.push(tmp);
    });
    return flattenMenus;
  }

  render() {
    const {
      theme,
      menus,
      collapsed,
      onClick
    } = this.props;
    const {
      selectedKeys,
      openKeys
    } = this.state;
    const menuProps = collapsed ? {} : {
      openKeys
    };
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], _extends({
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

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(SiderMenu));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0L21lbnUudHN4Il0sIm5hbWVzIjpbIlNpZGVyTWVudSIsIlB1cmVDb21wb25lbnQiLCJzZWxlY3RlZEtleXMiLCJvcGVuS2V5cyIsIm1lbnVzIiwicHJvcHMiLCJyb290U3VibWVudUtleXMiLCJmaWx0ZXIiLCJfIiwibWVudVBhcmVudElkIiwibWFwIiwiaWQiLCJsYXRlc3RPcGVuS2V5IiwiZmluZCIsImtleSIsImluZGV4T2YiLCJuZXdPcGVuS2V5cyIsInNldFN0YXRlIiwiZGF0YSIsInRvdGFsTm90UmVhZE1lc3NhZ2UiLCJpdGVtIiwiaW5kZXgiLCJjaGlsZHJlbiIsImljb24iLCJuYW1lIiwiZ2VuZXJhdGVNZW51cyIsInJvdXRlIiwiYXMiLCJjb21wb25lbnREaWRNb3VudCIsInNldFNlbGVjdGVkS2V5cyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInJvdXRlciIsInBhdGhuYW1lIiwib25TZWxlY3QiLCJmbGF0VHJlZSIsImZsYXR0ZW4iLCJtIiwiZ2V0U2VsZWN0ZWRLZXlzIiwiUm91dGVyIiwiZmxhdHRlbk1lbnVzIiwiZm9yRWFjaCIsInRtcCIsInB1c2giLCJyZW5kZXIiLCJ0aGVtZSIsImNvbGxhcHNlZCIsIm9uQ2xpY2siLCJzdGF0ZSIsIm1lbnVQcm9wcyIsIm9uT3BlbkNoYW5nZSIsImJpbmQiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVlBLE1BQU1BLFNBQU4sU0FBd0JDLG1EQUF4QixDQUE4QztBQUFBO0FBQUE7O0FBQUEsbUNBQ3BDO0FBQ05DLGtCQUFZLEVBQUUsQ0FBQyxXQUFELENBRFI7QUFFTkMsY0FBUSxFQUFFO0FBRkosS0FEb0M7O0FBQUEsMENBeUI1QkEsUUFBRCxJQUFjO0FBQzNCLFlBQU07QUFBRUM7QUFBRixVQUFZ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QUFGO0FBQWdCQztBQUFoQixRQUE2QixLQUFLNkMsS0FBeEM7QUFDQSxVQUFNQyxTQUFTLEdBQUdILFNBQVMsR0FDdkIsRUFEdUIsR0FFdkI7QUFDQTNDO0FBREEsS0FGSjtBQU1BLFdBQ0UsTUFBQyx5Q0FBRDtBQUNFLFNBQUcsRUFBQyxjQUROO0FBRUUsVUFBSSxFQUFDLFFBRlA7QUFHRSxXQUFLLEVBQUUwQyxLQUhUO0FBSUUsa0JBQVksRUFBRTNDLFlBSmhCO0FBS0Usa0JBQVksRUFBRSxLQUFLZ0QsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FMaEI7QUFNRSxjQUFRLEVBQUUsS0FBS2pCLFFBQUwsQ0FBY2lCLElBQWQsQ0FBbUIsSUFBbkIsQ0FOWjtBQU9FLGFBQU8sRUFBRUosT0FQWCxDQVFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWRGLE9BZU1FLFNBZk4sR0FpQkcsS0FBS3hCLGFBQUwsQ0FBbUJyQixLQUFuQixDQWpCSCxDQURGO0FBcUJEOztBQWpKMkM7O0FBb0ovQmdELDZIQUFVLENBQUNwRCxTQUFELENBQXpCLEUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyLCBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGhlbWU/OiBzdHJpbmc7XG4gIGlzTW9iaWxlPzogYm9vbGVhbjtcbiAgbWVudXM/OiBhbnk7XG4gIGNvbGxhcHNlZD86IGJvb2xlYW47XG4gIHJvdXRlcjogTmV4dFJvdXRlcjtcbiAgdG90YWxOb3RSZWFkTWVzc2FnZT86IG51bWJlcjtcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmNsYXNzIFNpZGVyTWVudSBleHRlbmRzIFB1cmVDb21wb25lbnQ8SVByb3BzPiB7XG4gIHN0YXRlID0ge1xuICAgIHNlbGVjdGVkS2V5czogWydkYXNoYm9hcmQnXSxcbiAgICBvcGVuS2V5czogW11cbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgdGhpcy5yb3V0ZXJDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgY29uc3QgeyBtZW51cyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzZWxlY3RlZEtleXMgPSBwcm9jZXNzLmJyb3dzZXJcbiAgICAgID8gdGhpcy5nZXRTZWxlY3RlZEtleXMobWVudXMpXG4gICAgICA6IFtdO1xuICAgIHRoaXMuc2V0U2VsZWN0ZWRLZXlzKHNlbGVjdGVkS2V5cyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBJUHJvcHMpIHtcbiAgICBjb25zdCB7IG1lbnVzLCByb3V0ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSAhPT0gcHJldlByb3BzLnJvdXRlci5wYXRobmFtZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcHJvY2Vzcy5icm93c2VyXG4gICAgICAgID8gdGhpcy5nZXRTZWxlY3RlZEtleXMobWVudXMpXG4gICAgICAgIDogW107XG4gICAgICB0aGlzLnNldFNlbGVjdGVkS2V5cyhzZWxlY3RlZEtleXMpO1xuICAgIH1cbiAgfVxuXG4gIG9uT3BlbkNoYW5nZSA9IChvcGVuS2V5cykgPT4ge1xuICAgIGNvbnN0IHsgbWVudXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgcm9vdFN1Ym1lbnVLZXlzID0gbWVudXNcbiAgICAgIC5maWx0ZXIoKF8pID0+ICFfLm1lbnVQYXJlbnRJZClcbiAgICAgIC5tYXAoKF8pID0+IF8uaWQpO1xuXG4gICAgY29uc3QgbGF0ZXN0T3BlbktleSA9IG9wZW5LZXlzLmZpbmQoXG4gICAgICAoa2V5KSA9PiBvcGVuS2V5cy5pbmRleE9mKGtleSkgPT09IC0xXG4gICAgKTtcblxuICAgIGxldCBuZXdPcGVuS2V5cyA9IG9wZW5LZXlzO1xuICAgIGlmIChyb290U3VibWVudUtleXMuaW5kZXhPZihsYXRlc3RPcGVuS2V5KSAhPT0gLTEpIHtcbiAgICAgIG5ld09wZW5LZXlzID0gbGF0ZXN0T3BlbktleSA/IFtsYXRlc3RPcGVuS2V5XSA6IFtdO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbktleXM6IG5ld09wZW5LZXlzXG4gICAgfSk7XG4gIH07XG5cbiAgb25TZWxlY3QoeyBrZXkgfSkge1xuICAgIGNvbnN0IHsgbWVudXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZmxhdFRyZWUgPSB0aGlzLmZsYXR0ZW4obWVudXMpO1xuICAgIGNvbnN0IHNlbGVjdGVkS2V5cyA9IGZsYXRUcmVlLmZpbHRlcigobSkgPT4gbS5pZCA9PT0ga2V5KS5tYXAoKG0pID0+IG0uaWQpO1xuICAgIHRoaXMuc2V0U2VsZWN0ZWRLZXlzKHNlbGVjdGVkS2V5cyk7XG4gIH1cblxuICBnZXRTZWxlY3RlZEtleXMobWVudXM6IGFueSkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJvY2Vzcy5icm93c2VyID8gUm91dGVyLnBhdGhuYW1lIDogJyc7XG4gICAgY29uc3QgZmxhdFRyZWUgPSB0aGlzLmZsYXR0ZW4obWVudXMpO1xuICAgIHJldHVybiAoXG4gICAgICBmbGF0VHJlZVxuICAgICAgICAvLyAuZmlsdGVyKChtKSA9PiBwYXRobmFtZS5pbmNsdWRlcyhtLmFzIHx8IG0ucm91dGUpKVxuICAgICAgICAuZmlsdGVyKChtKSA9PiAocGF0aG5hbWUgPT09IG0ucm91dGUgfHwgcGF0aG5hbWUgPT09IG0uYXMpKVxuICAgICAgICAubWFwKChtKSA9PiBtLmlkKVxuICAgICk7XG4gIH1cblxuICBzZXRTZWxlY3RlZEtleXMoc2VsZWN0ZWRLZXlzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkS2V5cyB9KTtcbiAgfVxuXG4gIGdlbmVyYXRlTWVudXMgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgdG90YWxOb3RSZWFkTWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZW51LlN1Yk1lbnVcbiAgICAgICAgICAgIGljb249e2l0ZW0uaWNvbn1cbiAgICAgICAgICAgIGtleT17YHN1Yi0ke2luZGV4fWB9XG4gICAgICAgICAgICB0aXRsZT17KFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVNZW51cyhpdGVtLmNoaWxkcmVuKX1cbiAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIDxoMT5CZSBoYXBweSE8L2gxPlxuICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS5pZH0gaWNvbj17aXRlbS5pY29ufT5cbiAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnJvdXRlfSBhcz17aXRlbS5hcyB8fCBpdGVtLnJvdXRlfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICB7aXRlbS5pZCA9PT0gJ21lc3NhZ2VzJyAmJiBgKCR7dG90YWxOb3RSZWFkTWVzc2FnZX0pYH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBmbGF0dGVuKG1lbnVzLCBmbGF0dGVuTWVudXMgPSBbXSkge1xuICAgIG1lbnVzLmZvckVhY2goKG0pID0+IHtcbiAgICAgIGlmIChtLmNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuZmxhdHRlbihtLmNoaWxkcmVuLCBmbGF0dGVuTWVudXMpO1xuICAgICAgfVxuICAgICAgY29uc3QgdG1wID0geyAuLi5tIH07XG4gICAgICBkZWxldGUgdG1wLmNoaWxkcmVuO1xuICAgICAgZmxhdHRlbk1lbnVzLnB1c2godG1wKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmbGF0dGVuTWVudXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsIG1lbnVzLCBjb2xsYXBzZWQsIG9uQ2xpY2tcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkS2V5cywgb3BlbktleXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbWVudVByb3BzID0gY29sbGFwc2VkXG4gICAgICA/IHt9XG4gICAgICA6IHtcbiAgICAgICAgb3BlbktleXNcbiAgICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnVcbiAgICAgICAga2V5PVwicHJvZmlsZS1tZW51XCJcbiAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgIHRoZW1lPXt0aGVtZSBhcyBhbnl9XG4gICAgICAgIHNlbGVjdGVkS2V5cz17c2VsZWN0ZWRLZXlzfVxuICAgICAgICBvbk9wZW5DaGFuZ2U9e3RoaXMub25PcGVuQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0LmJpbmQodGhpcyl9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIC8vIG9uQ2xpY2s9e1xuICAgICAgICAvLyAgIGlzTW9iaWxlXG4gICAgICAgIC8vICAgICA/ICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlKHRydWUpO1xuICAgICAgICAvLyAgICAgICB9XG4gICAgICAgIC8vICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAvLyB9XG4gICAgICAgIHsuLi5tZW51UHJvcHN9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLmdlbmVyYXRlTWVudXMobWVudXMpfVxuICAgICAgPC9NZW51PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTaWRlck1lbnUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==