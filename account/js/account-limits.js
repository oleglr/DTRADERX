/*! For license information please see account-limits.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(
        require("@deriv/components"),
        require("@deriv/shared"),
        require("@deriv/translations"),
        require("mobx-react"),
        require("react"),
        require("react-dom")
      ))
    : "function" == typeof define && define.amd
    ? define(
        [
          "@deriv/components",
          "@deriv/shared",
          "@deriv/translations",
          "mobx-react",
          "react",
          "react-dom",
        ],
        t
      )
    : "object" == typeof exports
    ? (exports["@deriv/account"] = t(
        require("@deriv/components"),
        require("@deriv/shared"),
        require("@deriv/translations"),
        require("mobx-react"),
        require("react"),
        require("react-dom")
      ))
    : (e["@deriv/account"] = t(
        e["@deriv/components"],
        e["@deriv/shared"],
        e["@deriv/translations"],
        e["mobx-react"],
        e.react,
        e["react-dom"]
      ));
})(self, function (e, t, n, r, a, o) {
  return (() => {
    var i = {
        "./Components/demo-message/index.js": (e, t, n) => {
          "use strict";
          n.d(t, { default: () => h });
          var r = n("react"),
            a = n.n(r),
            o = n("../../../node_modules/prop-types/index.js"),
            i = n.n(o),
            l = n("@deriv/translations"),
            c = n("../../../node_modules/classnames/index.js"),
            s = n.n(c),
            u = n("@deriv/components"),
            m = n("@deriv/shared"),
            d = n("./Stores/connect.js"),
            p = function (e) {
              var t = e.icon,
                n = e.message,
                a = e.has_button,
                o = e.toggleAccountsDialog,
                i = r.useContext(m.PlatformContext).is_dashboard;
              return r.createElement(
                "div",
                {
                  className: s()("da-icon-with-message", {
                    "da-icon-with-message-full-width": i,
                  }),
                },
                r.createElement(u.Icon, { icon: t, size: 128 }),
                r.createElement(
                  u.Text,
                  {
                    className: "da-icon-with-message__text",
                    as: "p",
                    color: "general",
                    size: m.isMobile ? "xs" : "s",
                    line_height: "m",
                    weight: "bold",
                  },
                  n
                ),
                a &&
                  r.createElement(
                    u.Button,
                    {
                      primary: !0,
                      onClick: o,
                      className: "account__demo-message-button",
                    },
                    (0, l.localize)("Add a real account")
                  )
              );
            };
          p.propTypes = {
            icon: i().string.isRequired,
            has_button: i().bool,
            message: i().string.isRequired,
            toggleAccountsDialog: i().func,
          };
          const f = (0, d.$j)(function (e) {
            return { toggleAccountsDialog: e.ui.toggleAccountsDialog };
          })(p);
          var _ = function (e) {
            var t = e.has_demo_icon,
              n = e.has_button;
            return a().createElement(f, {
              icon: t ? "IcPoaLockDemo" : "IcPoaLock",
              message: (0, l.localize)(
                "This feature is not available for demo accounts."
              ),
              has_button: n,
            });
          };
          _.propTypes = { has_demo_icon: i().bool, full_width: i().bool };
          const h = _;
        },
        "./Components/icon-message-content/index.js": (e, t, n) => {
          "use strict";
          n.d(t, { default: () => d });
          var r = n("react"),
            a = n.n(r),
            o = n("../../../node_modules/prop-types/index.js"),
            i = n("../../../node_modules/classnames/index.js"),
            l = n.n(i),
            c = n("@deriv/components"),
            s = n("@deriv/shared");
          function u(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var m = function (e) {
            var t = e.children,
              n = e.className,
              r = e.full_width,
              o = e.icon,
              i = e.icon_row,
              m = e.message,
              d = e.text;
            return a().createElement(
              c.Div100vhContainer,
              {
                className: l()("account-management__message-wrapper", {
                  "account-management__message-wrapper-full-width": r,
                }),
                is_disabled: (0, s.isDesktop)(),
                height_offset: "110px",
              },
              a().createElement(
                "div",
                {
                  className: l()(
                    "account-management__message-content",
                    u({}, "".concat(n, "__message-content"), n)
                  ),
                },
                o &&
                  a().createElement(
                    "div",
                    {
                      className: l()(
                        "account-management__message-icon",
                        u({}, "".concat(n, "__message-icon"), n)
                      ),
                    },
                    o
                  ),
                i && a().createElement("div", null, i),
                a().createElement(
                  c.Text,
                  {
                    as: "div",
                    color: "general",
                    weight: "bold",
                    size: "s",
                    align: "center",
                    className: l()(
                      "account-management__message",
                      u({}, "".concat(n, "__message"), n)
                    ),
                  },
                  m
                ),
                d &&
                  a().createElement(
                    "div",
                    { className: "account-management__text-container" },
                    a().createElement(
                      c.Text,
                      {
                        className: l()(u({}, "".concat(n, "__text"), n)),
                        as: "p",
                        size: "xs",
                        align: "center",
                      },
                      d
                    )
                  ),
                t
              )
            );
          };
          m.propTypes = {
            children: o.PropTypes.oneOfType([
              o.PropTypes.object,
              o.PropTypes.array,
            ]),
            className: o.PropTypes.string,
            full_width: o.PropTypes.bool,
            icon: o.PropTypes.object,
            message: o.PropTypes.oneOfType([
              o.PropTypes.node,
              o.PropTypes.string,
              o.PropTypes.object,
            ]),
            text: o.PropTypes.string,
          };
          const d = m;
        },
        "./Components/load-error-message/index.js": (e, t, n) => {
          "use strict";
          n.d(t, { default: () => l });
          var r = n("react"),
            a = n.n(r),
            o = n("@deriv/components"),
            i = n("./Components/icon-message-content/index.js");
          const l = function (e) {
            var t = e.error_message;
            return a().createElement(i.default, {
              message: t,
              icon: a().createElement(o.Icon, { icon: "IcPoaLock", size: 128 }),
            });
          };
        },
        "./Stores/connect.js": (e, t, n) => {
          "use strict";
          n.d(t, { $j: () => u });
          var r = n("mobx-react"),
            a = n("react"),
            o = n.n(a);
          function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function l(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? i(Object(n), !0).forEach(function (t) {
                    c(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : i(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function c(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var s = o().createContext(null),
            u = function (e) {
              return function (t) {
                return (function (e, t) {
                  var n = function (n) {
                    var a = o().useContext(s),
                      i = t;
                    return (
                      (function (e) {
                        return !(
                          "function" != typeof e ||
                          !e.prototype ||
                          !e.prototype.isReactComponent
                        );
                      })(t) &&
                        (i = function (e) {
                          return o().createElement(t, e);
                        }),
                      (0, r.useObserver)(function () {
                        return i(l(l({}, n), e(a, n)));
                      })
                    );
                  };
                  return (n.displayName = t.name), n;
                })(e, t);
              };
            };
        },
        "../../../node_modules/classnames/index.js": (e, t) => {
          var n;
          !(function () {
            "use strict";
            var r = {}.hasOwnProperty;
            function a() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                var n = arguments[t];
                if (n) {
                  var o = typeof n;
                  if ("string" === o || "number" === o) e.push(n);
                  else if (Array.isArray(n) && n.length) {
                    var i = a.apply(null, n);
                    i && e.push(i);
                  } else if ("object" === o)
                    for (var l in n) r.call(n, l) && n[l] && e.push(l);
                }
              }
              return e.join(" ");
            }
            e.exports
              ? ((a.default = a), (e.exports = a))
              : void 0 ===
                  (n = function () {
                    return a;
                  }.apply(t, [])) || (e.exports = n);
          })();
        },
        "../../../node_modules/prop-types/factoryWithThrowingShims.js": (
          e,
          t,
          n
        ) => {
          "use strict";
          var r = n(
            "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js"
          );
          function a() {}
          function o() {}
          (o.resetWarningCache = a),
            (e.exports = function () {
              function e(e, t, n, a, o, i) {
                if (i !== r) {
                  var l = new Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                  );
                  throw ((l.name = "Invariant Violation"), l);
                }
              }
              function t() {
                return e;
              }
              e.isRequired = e;
              var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: o,
                resetWarningCache: a,
              };
              return (n.PropTypes = n), n;
            });
        },
        "../../../node_modules/prop-types/index.js": (e, t, n) => {
          e.exports = n(
            "../../../node_modules/prop-types/factoryWithThrowingShims.js"
          )();
        },
        "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js": (e) => {
          "use strict";
          e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        "@deriv/components": (t) => {
          "use strict";
          t.exports = e;
        },
        "@deriv/shared": (e) => {
          "use strict";
          e.exports = t;
        },
        "@deriv/translations": (e) => {
          "use strict";
          e.exports = n;
        },
        "mobx-react": (e) => {
          "use strict";
          e.exports = r;
        },
        react: (e) => {
          "use strict";
          e.exports = a;
        },
        "react-dom": (e) => {
          "use strict";
          e.exports = o;
        },
      },
      l = {};
    function c(e) {
      if (l[e]) return l[e].exports;
      var t = (l[e] = { exports: {} });
      return i[e](t, t.exports, c), t.exports;
    }
    (c.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return c.d(t, { a: t }), t;
    }),
      (c.d = (e, t) => {
        for (var n in t)
          c.o(t, n) &&
            !c.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
    var s = {};
    return (
      (() => {
        "use strict";
        c.d(s, { default: () => C });
        var e = c("../../../node_modules/prop-types/index.js"),
          t = c.n(e),
          n = c("react"),
          r = c("../../../node_modules/classnames/index.js"),
          a = c.n(r),
          o = c("@deriv/components"),
          i = c("@deriv/shared"),
          l = c("@deriv/translations"),
          u = c("./Components/load-error-message/index.js"),
          m = c("./Components/demo-message/index.js"),
          d = function (e) {
            var t = e.title,
              r = e.descriptions,
              a = e.onClickLearnMore,
              i = (null == r ? void 0 : r.length) > 0,
              c = 1 === (null == r ? void 0 : r.length);
            return n.createElement(
              "article",
              { className: "da-article" },
              n.createElement(
                o.Text,
                {
                  as: "h4",
                  color: "prominent",
                  line_height: "m",
                  size: "xs",
                  weight: "bold",
                  className: "da-article__header",
                },
                t
              ),
              i &&
                n.createElement(
                  n.Fragment,
                  null,
                  c
                    ? n.createElement(
                        o.Text,
                        { as: "p", size: "xxs", line_height: "m" },
                        r[0]
                      )
                    : n.createElement(
                        "ul",
                        { className: "da-article__list" },
                        r.map(function (e, t) {
                          return n.createElement(
                            "li",
                            { key: t },
                            n.createElement(
                              o.Text,
                              { size: "xxs", line_height: "xs" },
                              e.component || e
                            )
                          );
                        })
                      )
                ),
              a &&
                n.createElement(
                  "div",
                  { className: "da-article__learn-more", onClick: a },
                  n.createElement(
                    o.Text,
                    { size: "xxs", color: "loss-danger", line_height: "s" },
                    n.createElement(l.Localize, {
                      i18n_default_text: "Learn more",
                    })
                  ),
                  n.createElement(o.Icon, {
                    icon: "IcChevronRight",
                    className: "da-article__learn-more-icon",
                    color: "red",
                  })
                )
            );
          };
        d.propTypes = {
          descriptions: t().array.isRequired,
          onClickLearnMore: t().func,
          title: t().string.isRequired,
        };
        const p = d,
          f = function () {
            return n.createElement(p, {
              title: (0, l.localize)("Account limits"),
              descriptions: [
                n.createElement(l.Localize, {
                  key: 0,
                  i18n_default_text:
                    "These are default limits that we apply to your accounts.",
                }),
                n.createElement(l.Localize, {
                  key: 1,
                  i18n_default_text:
                    "To learn more about trading limits and how they apply, please go to the <0>Help Centre.</0>",
                  components: [
                    n.createElement(o.StaticUrl, {
                      key: 0,
                      className: "link",
                      href: "/help-centre",
                    }),
                  ],
                }),
              ],
            });
          },
          _ = n.createContext();
        function h() {
          return (h =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        var g = function (e) {
          var t = e.message,
            r = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                a = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    a = {},
                    o = Object.keys(e);
                  for (r = 0; r < o.length; r++)
                    (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                  return a;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                  (n = o[r]),
                    t.indexOf(n) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (a[n] = e[n]));
              }
              return a;
            })(e, ["message"]);
          return (0, i.isMobile)()
            ? n.createElement(
                o.Text,
                { color: "less-prominent", line_height: "s", size: "xxxs" },
                t
              )
            : n.createElement(
                o.Popover,
                h(
                  {
                    alignment: "right",
                    className: "da-account-limits__popover",
                    icon: "info",
                    is_bubble_hover_enabled: !0,
                    message: t,
                    zIndex: 9999,
                  },
                  r
                )
              );
        };
        g.propTypes = { message: t().string.isRequired };
        const y = g;
        var b = c("react-dom");
        const x = function () {
            var e = n.useContext(_),
              t = e.footer_ref,
              r = e.toggleOverlay;
            return (0, b.createPortal)(
              n.createElement(
                o.AppSettings.Footer,
                null,
                n.createElement(
                  o.AppSettings.Footer.Left,
                  null,
                  n.createElement(
                    "a",
                    { className: "link link--prominent", onClick: r },
                    n.createElement(
                      o.Text,
                      { size: "xxs", line_height: "m", weight: "bold" },
                      n.createElement(l.Localize, {
                        i18n_default_text: "Learn more about account limits",
                      })
                    )
                  )
                )
              ),
              t
            );
          },
          E = function () {
            var e = n.useContext(_),
              t = e.overlay_ref,
              r = e.toggleOverlay;
            return n.createElement(o.Popup.Overlay, {
              descriptions: [
                {
                  key: "account_limits_desc_1",
                  component: n.createElement(l.Localize, {
                    i18n_default_text:
                      "These are default limits that we apply to your accounts.",
                  }),
                },
                {
                  key: "account_limits_desc_2",
                  component: n.createElement(l.Localize, {
                    i18n_default_text:
                      "To learn more about account limits and how they apply, please go to the <0>Help Centre</0>.",
                    components: [
                      n.createElement(o.StaticUrl, {
                        key: 0,
                        className: "link",
                        href: "/help-centre",
                      }),
                    ],
                  }),
                },
              ],
              done_text: (0, l.localize)("Done"),
              overlay_ref: t,
              title: (0, l.localize)("Account limits"),
              toggleOverlay: r,
            });
          };
        var v = function (e) {
          var t = e.align,
            r = e.children,
            i = e.is_hint,
            l = e.renderExtraInfo,
            c = i ? "xxxs" : "xxs";
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              "td",
              {
                className: a()("da-account-limits__table-cell", {
                  "da-account-limits__table-cell--left": "right" !== t,
                  "da-account-limits__table-cell--right": "right" === t,
                }),
              },
              r &&
                n.createElement(
                  o.Text,
                  {
                    align: t,
                    as: "p",
                    color: "prominent",
                    size: c,
                    line_height: "m",
                  },
                  r
                ),
              l && l()
            )
          );
        };
        v.propTypes = {
          align: t().oneOf(["right", "left"]),
          children: t().any,
          is_hint: t().bool,
          renderExtraInfo: t().func,
        };
        const w = v;
        var O = function (e) {
          var t = e.align,
            r = e.children,
            i = e.renderExtraInfo;
          return n.createElement(
            "th",
            {
              className: a()("da-account-limits__table-header", {
                "da-account-limits__table-header--left": "right" !== t,
                "da-account-limits__table-header--right": "right" === t,
              }),
            },
            r &&
              n.createElement(
                o.Text,
                {
                  align: t,
                  as: "p",
                  color: "prominent",
                  size: "xxs",
                  line_height: "m",
                  weight: "bold",
                },
                r
              ),
            i && i()
          );
        };
        O.propTypes = {
          align: t().oneOf(["right", "left"]),
          children: t().any,
        };
        const j = O;
        var T = function (e) {
          var t = e.collection,
            r = e.title,
            a = n.useContext(_).currency;
          return null != t && t.length
            ? t.map(function (e) {
                return n.createElement(
                  "tr",
                  { key: e.name },
                  n.createElement(w, null, r && "".concat(r, " - "), e.name),
                  n.createElement(
                    w,
                    { align: "right" },
                    (0, i.formatMoney)(a, e.turnover_limit, !0)
                  )
                );
              })
            : null;
        };
        T.propTypes = { collection: t().arrayOf(t().any), title: t().any };
        const P = T;
        function z(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function L(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function N(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              if (
                "undefined" != typeof Symbol &&
                Symbol.iterator in Object(e)
              ) {
                var n = [],
                  r = !0,
                  a = !1,
                  o = void 0;
                try {
                  for (
                    var i, l = e[Symbol.iterator]();
                    !(r = (i = l.next()).done) &&
                    (n.push(i.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (a = !0), (o = e);
                } finally {
                  try {
                    r || null == l.return || l.return();
                  } finally {
                    if (a) throw o;
                  }
                }
                return n;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return k(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? k(e, t)
                    : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function k(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var S = function (e) {
          var t = e.account_limits,
            r = e.currency,
            c = e.footer_ref,
            s = e.getLimits,
            d = e.is_app_settings,
            p = e.is_fully_authenticated,
            h = e.is_switching,
            g = e.is_virtual,
            b = e.overlay_ref,
            v = e.setIsOverlayShown,
            O = e.should_bypass_scrollbars,
            T = e.should_show_article,
            k = (0, i.useIsMounted)(),
            S = N(n.useState(!1), 2),
            C = S[0],
            I = S[1],
            q = N(n.useState(!1), 2),
            M = q[0],
            R = q[1],
            A = n.useContext(i.PlatformContext).is_dashboard;
          if (
            (n.useEffect(function () {
              g
                ? I(!1)
                : s().then(function () {
                    k() && I(!1);
                  });
            }, []),
            n.useEffect(
              function () {
                !g && t && C && I(!1);
              },
              [t, g, C]
            ),
            n.useEffect(
              function () {
                "function" == typeof v && v(M);
              },
              [M, v]
            ),
            h)
          )
            return n.createElement(o.Loading, { is_fullscreen: !1 });
          if (g)
            return n.createElement(
              "div",
              {
                className: a()("account__demo-message-wrapper", {
                  "account__demo-message-wrapper-dashboard": A,
                }),
              },
              n.createElement(m.default, { has_demo_icon: A, has_button: A }),
              ";"
            );
          var D = t.api_initial_load_error,
            F = t.open_positions,
            W = t.account_balance,
            U = t.payout,
            B = t.market_specific,
            H = t.num_of_days_limit,
            Y = t.remainder,
            $ = t.withdrawal_since_inception_monetary;
          if (D) return n.createElement(u.default, { error_message: D });
          if (h || C) return n.createElement(o.Loading, { is_fullscreen: !1 });
          var V = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? z(Object(n), !0).forEach(function (t) {
                      L(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : z(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({}, B),
            G = V.commodities,
            J = V.forex,
            K = V.indices,
            Q = V.synthetic_index,
            X =
              null == J
                ? void 0
                : J.slice().sort(function (e, t) {
                    return e.name < t.name ? 1 : -1;
                  });
          X && X.push && X.push(X.shift());
          var Z = {
            currency: r,
            footer_ref: c,
            overlay_ref: b,
            toggleOverlay: function () {
              return R(!M);
            },
          };
          return n.createElement(
            _.Provider,
            { value: Z },
            n.createElement(
              "section",
              { className: "da-account-limits__wrapper" },
              n.createElement(
                "div",
                {
                  className: a()("da-account-limits", {
                    "da-account-limits--app-settings": d,
                  }),
                },
                T && (0, i.isMobile)() && n.createElement(f, null),
                n.createElement(
                  "div",
                  { className: "da-account-limits__table-wrapper" },
                  n.createElement(
                    o.ThemedScrollbars,
                    { is_bypassed: O || (0, i.isMobile)() },
                    n.createElement(
                      "table",
                      { className: "da-account-limits__table" },
                      n.createElement(
                        "thead",
                        null,
                        n.createElement(
                          "tr",
                          null,
                          n.createElement(
                            j,
                            null,
                            n.createElement(l.Localize, {
                              i18n_default_text: "Trading limits - Item",
                            })
                          ),
                          n.createElement(
                            j,
                            { align: "right" },
                            n.createElement(l.Localize, {
                              i18n_default_text: "Limit",
                            })
                          )
                        )
                      ),
                      n.createElement(
                        "tbody",
                        null,
                        n.createElement(
                          "tr",
                          null,
                          n.createElement(
                            w,
                            {
                              renderExtraInfo: function () {
                                return n.createElement(y, {
                                  message: (0, l.localize)(
                                    "Represents the maximum number of outstanding contracts in your portfolio. Each line in your portfolio counts for one open position. Once the maximum is reached, you will not be able to open new positions without closing an existing position first."
                                  ),
                                });
                              },
                            },
                            n.createElement(l.Localize, {
                              i18n_default_text:
                                "*Maximum number of open positions",
                            })
                          ),
                          n.createElement(w, { align: "right" }, F)
                        ),
                        n.createElement(
                          "tr",
                          null,
                          n.createElement(
                            w,
                            {
                              renderExtraInfo: function () {
                                return n.createElement(y, {
                                  message: (0, l.localize)(
                                    "Represents the maximum amount of cash that you may hold in your account.  If the maximum is reached, you will be asked to withdraw funds."
                                  ),
                                });
                              },
                            },
                            n.createElement(l.Localize, {
                              i18n_default_text:
                                "*Maximum account cash balance",
                            })
                          ),
                          n.createElement(
                            w,
                            { align: "right" },
                            (0, i.formatMoney)(r, W, !0)
                          )
                        ),
                        n.createElement(
                          "tr",
                          null,
                          n.createElement(
                            w,
                            {
                              renderExtraInfo: function () {
                                return n.createElement(y, {
                                  message: (0, l.localize)(
                                    "Represents the maximum aggregate payouts on outstanding contracts in your portfolio. If the maximum is attained, you may not purchase additional contracts without first closing out existing positions."
                                  ),
                                });
                              },
                            },
                            n.createElement(l.Localize, {
                              i18n_default_text:
                                "Maximum aggregate payouts on open positions",
                            })
                          ),
                          n.createElement(
                            w,
                            { align: "right" },
                            (0, i.formatMoney)(r, U, !0)
                          )
                        ),
                        n.createElement(
                          "tr",
                          null,
                          n.createElement(
                            w,
                            { is_hint: !0 },
                            n.createElement(l.Localize, {
                              i18n_default_text:
                                "*Any limits in your Self-exclusion settings will override these default limits.",
                            })
                          ),
                          n.createElement(w, null)
                        )
                      )
                    ),
                    n.createElement(
                      "table",
                      { className: "da-account-limits__table" },
                      n.createElement(
                        "thead",
                        null,
                        n.createElement(
                          "tr",
                          null,
                          n.createElement(
                            j,
                            {
                              renderExtraInfo: function () {
                                return n.createElement(y, {
                                  message: (0, l.localize)(
                                    "Represents the maximum volume of contracts that you may purchase in any given trading day."
                                  ),
                                });
                              },
                            },
                            n.createElement(l.Localize, {
                              i18n_default_text:
                                "Trading limits - Maximum daily turnover",
                            })
                          ),
                          n.createElement(
                            j,
                            { align: "right" },
                            n.createElement(l.Localize, {
                              i18n_default_text: "Limit",
                            })
                          )
                        )
                      ),
                      n.createElement(
                        "tbody",
                        null,
                        n.createElement(P, { collection: G }),
                        n.createElement(P, {
                          collection: X,
                          title: (0, l.localize)("Forex"),
                        }),
                        n.createElement(P, { collection: K }),
                        n.createElement(P, { collection: Q })
                      )
                    ),
                    !d &&
                      n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                          "table",
                          { className: "da-account-limits__table" },
                          n.createElement(
                            "thead",
                            null,
                            n.createElement(
                              "tr",
                              null,
                              n.createElement(
                                j,
                                null,
                                n.createElement(l.Localize, {
                                  i18n_default_text: "Withdrawal limits",
                                })
                              ),
                              p &&
                                n.createElement(
                                  j,
                                  { align: "right" },
                                  n.createElement(l.Localize, {
                                    i18n_default_text: "Limit",
                                  })
                                )
                            )
                          ),
                          n.createElement(
                            "tbody",
                            null,
                            p
                              ? n.createElement(
                                  n.Fragment,
                                  null,
                                  n.createElement(
                                    o.Text,
                                    { size: "xxs", color: "prominent" },
                                    (0, l.localize)(
                                      "Your account is fully authenticated and your withdrawal limits have been lifted."
                                    )
                                  )
                                )
                              : n.createElement(
                                  n.Fragment,
                                  null,
                                  n.createElement(
                                    "tr",
                                    null,
                                    n.createElement(
                                      w,
                                      null,
                                      n.createElement(l.Localize, {
                                        i18n_default_text: A
                                          ? "Total withdrawal limit"
                                          : "Total withdrawal allowed",
                                      }),
                                      A &&
                                        !p &&
                                        n.createElement(
                                          n.Fragment,
                                          null,
                                          n.createElement(
                                            o.Text,
                                            {
                                              size: (0, i.isMobile)()
                                                ? "xxxs"
                                                : "xxs",
                                              className:
                                                "account-management-table__verify",
                                              color: "less-prominent",
                                              line_height: "xs",
                                            },
                                            (0, l.localize)(
                                              "To increase limit please verify your identity"
                                            )
                                          ),
                                          n.createElement(
                                            o.ButtonLink,
                                            {
                                              to: "/account/proof-of-identity",
                                              size: "small",
                                              className:
                                                "account-management-table__verify-button",
                                            },
                                            n.createElement(
                                              o.Text,
                                              {
                                                weight: "bold",
                                                color: "colored-background",
                                                size: (0, i.isMobile)()
                                                  ? "xxxs"
                                                  : "xxs",
                                              },
                                              (0, l.localize)("Verify")
                                            )
                                          )
                                        )
                                    ),
                                    n.createElement(
                                      w,
                                      { align: "right" },
                                      (0, i.formatMoney)(r, H, !0)
                                    )
                                  ),
                                  n.createElement(
                                    "tr",
                                    null,
                                    n.createElement(
                                      w,
                                      null,
                                      n.createElement(l.Localize, {
                                        i18n_default_text: "Total withdrawn",
                                      })
                                    ),
                                    n.createElement(
                                      w,
                                      { align: "right" },
                                      (0, i.formatMoney)(r, $, !0)
                                    )
                                  ),
                                  n.createElement(
                                    "tr",
                                    null,
                                    n.createElement(
                                      w,
                                      null,
                                      n.createElement(l.Localize, {
                                        i18n_default_text:
                                          "Maximum withdrawal remaining",
                                      })
                                    ),
                                    n.createElement(
                                      w,
                                      { align: "right" },
                                      (0, i.formatMoney)(r, Y, !0)
                                    )
                                  )
                                )
                          )
                        ),
                        !A ||
                          ((0, i.isMobile)() &&
                            n.createElement(
                              "div",
                              {
                                className: "da-account-limits__text-container",
                              },
                              n.createElement(
                                o.Text,
                                {
                                  as: "p",
                                  size: "xxs",
                                  color: "less-prominent",
                                  line_height: "xs",
                                },
                                p
                                  ? n.createElement(l.Localize, {
                                      i18n_default_text:
                                        "Your account is fully authenticated and your withdrawal limits have been lifted.",
                                    })
                                  : n.createElement(l.Localize, {
                                      i18n_default_text:
                                        "Stated limits are subject to change without prior notice.",
                                    })
                              )
                            ))
                      )
                  )
                ),
                T && (0, i.isDesktop)() && n.createElement(f, null),
                c && n.createElement(x, null),
                M && b && n.createElement(E, null)
              )
            )
          );
        };
        S.propTypes = {
          account_limits: t().object,
          currency: t().string.isRequired,
          footer_ref: t().shape({ current: t().any }),
          is_app_settings: t().bool,
          getLimits: t().func.isRequired,
          is_fully_authenticated: t().bool.isRequired,
          is_switching: t().bool.isRequired,
          is_virtual: t().bool.isRequired,
          overlay_ref: t().shape({ current: t().any }),
          setIsPopupOverlayShown: t().func,
          should_bypass_scrollbars: t().bool,
          should_show_article: t().bool,
        };
        const C = S;
      })(),
      s.default
    );
  })();
});
