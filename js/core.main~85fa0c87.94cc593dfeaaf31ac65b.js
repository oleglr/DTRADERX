(self.webpackChunk = self.webpackChunk || []).push([
  [982],
  {
    16846: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => N });
      var r = n(32735),
        a = n(13799),
        o = n(57573),
        i = n(20374),
        c = n(78508),
        l = n(60216),
        s = n.n(l),
        u = n(75672),
        _ = n(58468),
        d = function (e) {
          var t = e.history,
            n = e.currency,
            a = e.setVerificationCode,
            c = e.hasAnyRealAccount,
            l = e.openRealAccountSignup,
            s = e.setResetTradingPasswordModalOpen,
            u = e.toggleAccountSignupModal,
            d = e.toggleResetPasswordModal,
            m = window.location.search,
            p = new URLSearchParams(m),
            f = !1,
            g = r.useContext(o.PlatformContext).is_dashboard;
          switch ((a(p.get("code"), p.get("action")), p.get("action"))) {
            case "signup":
              g &&
                (t.push({ pathname: o.routes.dashboard, search: m }), (f = !0)),
                sessionStorage.removeItem("redirect_url"),
                u(!0);
              break;
            case "reset_password":
              d(!0);
              break;
            case "trading_platform_password_reset":
              s(!0);
              break;
            case "payment_withdraw":
              t.push(o.routes.cashier_withdrawal), (f = !0);
              break;
            case "payment_agent_withdraw":
              t.push(o.routes.cashier_pa), (f = !0);
              break;
            case "add_account":
              _.WS.wait("get_account_status").then(function () {
                return n ? (c() ? l("manage") : l()) : l("set_currency");
              });
              var h = p.get("ext_platform_url");
              h &&
                (t.push(
                  "".concat(o.routes.root, "?ext_platform_url=").concat(h)
                ),
                (f = !0));
              break;
            case "verification":
              sessionStorage.setItem(
                "redirect_url",
                o.routes.cashier_p2p_verification
              ),
                (window.location.href = (0, o.loginUrl)({
                  language: (0, i.getLanguage)(),
                }));
              break;
            case "trading_platform_investor_password_reset":
              var y;
              localStorage.setItem("cfd_reset_password_code", p.get("code"));
              var b =
                null ===
                  (y = localStorage.getItem("cfd_reset_password_intent")) ||
                void 0 === y
                  ? void 0
                  : y.includes("demo");
              t.push(
                ""
                  .concat(o.routes.mt5, "#")
                  .concat(b ? "demo" : "real", "#reset-password")
              ),
                (f = !0);
          }
          return f || t.push({ pathname: o.routes.root, search: m }), null;
        };
      d.propTypes = {
        getServerTime: s().object,
        history: s().object,
        setResetTradingPasswordModalOpen: s().func,
        setVerificationCode: s().func,
        toggleAccountSignupModal: s().func,
        toggleResetPasswordModal: s().func,
      };
      const m = (0, a.withRouter)(
        (0, u.$j)(function (e) {
          var t = e.client,
            n = e.ui;
          return {
            currency: t.currency,
            setVerificationCode: t.setVerificationCode,
            fetchResidenceList: t.fetchResidenceList,
            hasAnyRealAccount: t.hasAnyRealAccount,
            openRealAccountSignup: n.openRealAccountSignup,
            setResetTradingPasswordModalOpen:
              n.setResetTradingPasswordModalOpen,
            toggleAccountSignupModal: n.toggleAccountSignupModal,
            toggleResetPasswordModal: n.toggleResetPasswordModal,
          };
        })(d)
      );
      var p = n(52918);
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return g(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return g(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return g(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function h(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function b(e, t, n) {
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
      var v,
        E = r.lazy(function () {
          return Promise.resolve().then(n.bind(n, 63986));
        }),
        w = r.lazy(function () {
          var e = document.querySelector("head"),
            t = document.createElement("link");
          return (
            (t.href = (0, o.getUrlBase)("/css/trader.main.css")),
            (t.rel = "stylesheet"),
            (t.type = "text/css"),
            e.appendChild(t),
            Promise.all([n.e(605), n.e(930), n.e(447), n.e(245)]).then(
              n.t.bind(n, 55711, 23)
            )
          );
        }),
        S = r.lazy(function () {
          var e = document.querySelector("head"),
            t = document.createElement("link");
          return (
            (t.href = (0, o.getUrlBase)("/account/css/account.css")),
            (t.rel = "stylesheet"),
            (t.type = "text/css"),
            e.appendChild(t),
            n.e(809).then(n.t.bind(n, 98148, 23))
          );
        }),
        A = r.lazy(function () {
          var e = document.querySelector("head"),
            t = document.createElement("link");
          return (
            (t.href = (0, o.getUrlBase)("/css/cashier.css")),
            (t.rel = "stylesheet"),
            (t.type = "text/css"),
            e.appendChild(t),
            n.e(856).then(n.t.bind(n, 86184, 23))
          );
        }),
        x = r.lazy(function () {
          return Promise.all([n.e(605), n.e(172)]).then(n.t.bind(n, 53928, 23));
        }),
        z = r.lazy(function () {
          return n.e(966).then(n.bind(n, 95135));
        }),
        T = (0, c.m)(function () {
          return n.e(880).then(n.bind(n, 23456));
        }),
        C = function (e) {
          var t = e.is_dashboard;
          return [
            {
              path: o.routes.index,
              component: a.Redirect,
              getTitle: function () {
                return "";
              },
              to: o.routes.root,
            },
            {
              path: o.routes.endpoint,
              component: p.Z,
              getTitle: function () {
                return "Endpoint";
              },
            },
            {
              path: o.routes.redirect,
              component: m,
              getTitle: function () {
                return (0, i.localize)("Redirect");
              },
            },
            {
              path: o.routes.complaints_policy,
              component: T(),
              getTitle: function () {
                return (0, i.localize)("Complaints policy");
              },
              icon_component: "IcComplaintsPolicy",
              is_authenticated: !0,
            },
          ].concat(
            f(
              (function (e) {
                var t = e.is_dashboard;
                return [
                  {
                    path: o.routes.bot,
                    component: x,
                    getTitle: function () {
                      return (0, i.localize)("Bot");
                    },
                  },
                  {
                    path: o.routes.dashboard,
                    component: z,
                    is_modal: !0,
                    getTitle: function () {
                      return (0, i.localize)("Dashboard");
                    },
                    routes: [
                      {
                        path: o.routes.home,
                        component: z,
                        icon_component: "IcUserOutline",
                        getTitle: function () {
                          return (0, i.localize)("Home");
                        },
                      },
                      {
                        path: o.routes.my_apps,
                        component: z,
                        is_modal: !0,
                        icon_component: "IcUserOutline",
                        getTitle: function () {
                          return (0, i.localize)("My Apps");
                        },
                      },
                      {
                        path: o.routes.explore,
                        component: z,
                        icon_component: "IcWalletExplore",
                        getTitle: function () {
                          return (0, i.localize)("Explore");
                        },
                      },
                      {
                        path: o.routes.about_us,
                        component: z,
                        getTitle: function () {
                          return (0, i.localize)("About Us");
                        },
                      },
                      {
                        path: o.routes.resources,
                        component: z,
                        getTitle: function () {
                          return (0, i.localize)("Resources");
                        },
                      },
                    ],
                  },
                  {
                    path: o.routes.wallets,
                    component: z,
                    is_modal: !0,
                    icon_component: "IcWalletWallets",
                    getTitle: function () {
                      return (0, i.localize)("Wallets");
                    },
                    routes: [
                      {
                        getTitle: function () {
                          return (0, i.localize)("Credit/Debit Cards");
                        },
                        path: o.routes.explore,
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("E-wallet");
                        },
                        path: o.routes.explore,
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("Cryptocurrency");
                        },
                        path: o.routes.explore,
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("Bank Wire");
                        },
                        path: o.routes.explore,
                      },
                    ],
                  },
                  {
                    path: o.routes.platforms,
                    component: z,
                    is_modal: !0,
                    icon_component: "IcWalletPlatforms",
                    getTitle: function () {
                      return (0, i.localize)("Platforms");
                    },
                    routes: [
                      {
                        default: !0,
                        getTitle: function () {
                          return (0, i.localize)("DMT5");
                        },
                        path: o.routes.platform_dmt5,
                      },
                      {
                        default: !0,
                        getTitle: function () {
                          return (0, i.localize)("DMT5 Financial STP");
                        },
                        path: o.routes.platform_dmt5_financial_stp,
                      },
                      {
                        default: !0,
                        getTitle: function () {
                          return (0, i.localize)("DMT5 Financial");
                        },
                        path: o.routes.platform_dmt5_financial,
                      },
                      {
                        default: !0,
                        getTitle: function () {
                          return (0, i.localize)("DMT5 Synthetic");
                        },
                        path: o.routes.platform_dmt5_synthetic,
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("DTrader");
                        },
                        path: o.routes.explore,
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("DBot");
                        },
                        path: o.routes.explore,
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("SmartTrader");
                        },
                        path: o.routes.explore,
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("Binary Bot");
                        },
                        path: o.routes.explore,
                      },
                    ],
                  },
                  {
                    path: o.routes.trade_types,
                    component: z,
                    is_modal: !0,
                    icon_component: "IcWalletTradeTypes",
                    getTitle: function () {
                      return (0, i.localize)("Trade Types");
                    },
                    routes: [
                      {
                        getTitle: function () {
                          return (0, i.localize)("CFDs");
                        },
                        path: o.routes.explore,
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("Multipliers");
                        },
                        path: o.routes.explore,
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("Options");
                        },
                        path: o.routes.explore,
                      },
                    ],
                  },
                  {
                    path: o.routes.markets,
                    component: z,
                    is_modal: !0,
                    icon_component: "IcWalletMarkets",
                    getTitle: function () {
                      return (0, i.localize)("Markets");
                    },
                    routes: [
                      {
                        getTitle: function () {
                          return (0, i.localize)("Forex");
                        },
                        path: o.routes.explore,
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("Synthetic Indices");
                        },
                        path: o.routes.explore,
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("Stock Indices");
                        },
                        path: o.routes.explore,
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("Commodities");
                        },
                        path: o.routes.explore,
                      },
                    ],
                  },
                  {
                    path: o.routes.account_deactivated,
                    component: S,
                    getTitle: function () {
                      return (0, i.localize)("Account deactivated");
                    },
                  },
                  {
                    path: o.routes.account,
                    component: S,
                    getTitle: function () {
                      return (0, i.localize)("Account Settings");
                    },
                    icon_component: "IcUserOutline",
                    is_authenticated: !0,
                    routes: [
                      {
                        getTitle: function () {
                          return (0, i.localize)("Profile");
                        },
                        icon: "IcUserOutline",
                        subroutes: [
                          {
                            path: o.routes.personal_details,
                            component: S,
                            getTitle: function () {
                              return (0, i.localize)("Personal details");
                            },
                            default: !0,
                          },
                          {
                            path: o.routes.financial_assessment,
                            component: S,
                            getTitle: function () {
                              return (0, i.localize)("Financial assessment");
                            },
                          },
                        ],
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("Verification");
                        },
                        icon: "IcVerification",
                        subroutes: [
                          {
                            path: o.routes.proof_of_identity,
                            component: S,
                            getTitle: function () {
                              return (0, i.localize)("Proof of identity");
                            },
                          },
                          {
                            path: o.routes.proof_of_address,
                            component: S,
                            getTitle: function () {
                              return (0, i.localize)("Proof of address");
                            },
                          },
                        ],
                      },
                      {
                        getTitle: function () {
                          return (0, i.localize)("Security and safety");
                        },
                        icon: "IcSecurity",
                        subroutes: [
                          {
                            path: o.routes.passwords,
                            component: S,
                            getTitle: function () {
                              return (0, i.localize)("Passwords");
                            },
                          },
                          {
                            path: o.routes.self_exclusion,
                            component: S,
                            getTitle: function () {
                              return (0, i.localize)("Self exclusion");
                            },
                          },
                          {
                            path: o.routes.account_limits,
                            component: S,
                            getTitle: function () {
                              return (0, i.localize)("Account limits");
                            },
                          },
                          {
                            path: o.routes.login_history,
                            component: S,
                            getTitle: function () {
                              return (0, i.localize)("Login history");
                            },
                          },
                          {
                            path: o.routes.api_token,
                            component: S,
                            getTitle: function () {
                              return (0, i.localize)("API token");
                            },
                          },
                          {
                            path: o.routes.connected_apps,
                            component: S,
                            getTitle: function () {
                              return (0, i.localize)("Connected apps");
                            },
                          },
                          {
                            path: o.routes.two_factor_authentication,
                            component: S,
                            getTitle: function () {
                              return (0, i.localize)(
                                "Two-factor authentication"
                              );
                            },
                          },
                          {
                            path: o.routes.deactivate_account,
                            component: S,
                            getTitle: function () {
                              return (0, i.localize)("Deactivate account");
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    path: o.routes.cashier,
                    component: A,
                    is_modal: !0,
                    is_authenticated: !0,
                    getTitle: function () {
                      return (0, i.localize)("Cashier");
                    },
                    icon_component: "IcCashier",
                    routes: [
                      {
                        path: o.routes.cashier_deposit,
                        component: A,
                        getTitle: function () {
                          return (0, i.localize)("Deposit");
                        },
                        icon_component: "IcWalletAdd",
                        default: !0,
                      },
                      {
                        path: o.routes.cashier_withdrawal,
                        component: A,
                        getTitle: function () {
                          return (0, i.localize)("Withdrawal");
                        },
                        icon_component: "IcWalletMinus",
                      },
                      {
                        path: o.routes.cashier_pa,
                        component: A,
                        getTitle: function () {
                          return (0, i.localize)("Payment agents");
                        },
                        icon_component: "IcPaymentAgent",
                      },
                      {
                        path: o.routes.cashier_acc_transfer,
                        component: A,
                        getTitle: function () {
                          return (0, i.localize)("Transfer");
                        },
                        icon_component: "IcAccountTransfer",
                      },
                      {
                        path: o.routes.cashier_pa_transfer,
                        component: A,
                        getTitle: function () {
                          return (0, i.localize)("Transfer to client");
                        },
                        icon_component: "IcAccountTransfer",
                      },
                      {
                        path: o.routes.cashier_p2p,
                        component: A,
                        getTitle: function () {
                          return (0, i.localize)("DP2P");
                        },
                        icon_component: "IcDp2p",
                      },
                      {
                        path: o.routes.cashier_p2p_verification,
                        component: A,
                        getTitle: function () {
                          return (0, i.localize)("DP2P");
                        },
                        icon_component: "IcDp2p",
                        is_invisible: !0,
                      },
                      {
                        id: "gtm-onramp-tab",
                        path: o.routes.cashier_onramp,
                        component: A,
                        getTitle: function () {
                          return (0, i.localize)("Fiat onramp");
                        },
                        icon_component: "IcCashierOnRamp",
                      },
                    ],
                  },
                  y(
                    {},
                    t
                      ? {
                          path: o.routes.dashboard,
                          component: z,
                          getTitle: function () {
                            return (0, i.localize)("Dashboard");
                          },
                          routes: [
                            {
                              path: o.routes.explore,
                              component: z,
                              getTitle: function () {
                                return (0, i.localize)("Explore");
                              },
                            },
                            {
                              path: o.routes.about_us,
                              component: z,
                              getTitle: function () {
                                return (0, i.localize)("About Us");
                              },
                            },
                            {
                              path: o.routes.resources,
                              component: z,
                              getTitle: function () {
                                return (0, i.localize)("Resources");
                              },
                            },
                            {
                              path: o.routes.platform_dmt5_synthetic,
                              component: z,
                              getTitle: function () {
                                return (0, i.localize)("DMT5 Synthetic");
                              },
                            },
                          ],
                        }
                      : {
                          path: o.routes.root,
                          component: w,
                          getTitle: function () {
                            return (0, i.localize)("Trader");
                          },
                          routes: [
                            {
                              path: o.routes.dxtrade,
                              component: w,
                              getTitle: function () {
                                return (0, i.localize)("Deriv X");
                              },
                              is_authenticated: !1,
                            },
                            {
                              path: o.routes.mt5,
                              component: w,
                              getTitle: function () {
                                return (0, i.localize)("MT5");
                              },
                              is_authenticated: !1,
                            },
                            {
                              path: o.routes.reports,
                              component: w,
                              getTitle: function () {
                                return (0, i.localize)("Reports");
                              },
                              icon_component: "IcReports",
                              is_authenticated: !0,
                              routes: [
                                {
                                  path: o.routes.positions,
                                  component: w,
                                  getTitle: function () {
                                    return (0, i.localize)("Open positions");
                                  },
                                  icon_component: "IcOpenPositions",
                                  default: !0,
                                },
                                {
                                  path: o.routes.profit,
                                  component: w,
                                  getTitle: function () {
                                    return (0, i.localize)("Profit table");
                                  },
                                  icon_component: "IcProfitTable",
                                },
                                {
                                  path: o.routes.statement,
                                  component: w,
                                  getTitle: function () {
                                    return (0, i.localize)("Statement");
                                  },
                                  icon_component: "IcStatement",
                                },
                              ],
                            },
                            {
                              path: o.routes.contract,
                              component: w,
                              getTitle: function () {
                                return (0, i.localize)("Contract Details");
                              },
                              is_authenticated: !0,
                            },
                            {
                              path: o.routes.error404,
                              component: w,
                              getTitle: function () {
                                return (0, i.localize)("Error 404");
                              },
                            },
                          ],
                        }
                  ),
                ];
              })({ is_dashboard: t })
            )
          );
        },
        k = {
          component: E,
          getTitle: function () {
            return (0, i.localize)("Error 404");
          },
        };
      const N = function (e) {
        var t = e.is_dashboard;
        return v || (v = C({ is_dashboard: void 0 === t || t })).push(k), v;
      };
    },
    83902: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => y });
      var r = n(60216),
        a = n.n(r),
        o = n(40841),
        i = n.n(o),
        c = n(32735),
        l = n(4390),
        s = n(77395),
        u = n(32577),
        _ = n(75672),
        d = n(20374),
        m = n(57573),
        p = n(53151);
      var f = function (e) {
          var t = e.notifications,
            n = e.toggleDialog;
          return c.createElement(
            c.Fragment,
            null,
            t.map(function (e) {
              return c.createElement(
                "div",
                { className: "notifications-item", key: e.key },
                c.createElement(
                  s.Text,
                  {
                    as: "h2",
                    className: "notifications-item__title",
                    weight: "bold",
                    size: "xs",
                    line_height: "m",
                    color: "prominent",
                  },
                  e.type &&
                    c.createElement(s.Icon, {
                      icon: ["contract_sold", "info"].includes(e.type)
                        ? "IcAlertInfo"
                        : "IcAlert".concat((0, m.toTitleCase)(e.type)),
                      className: i()(
                        "notifications-item__title-icon",
                        ((t = {}),
                        (r = "notifications-item__title-icon--".concat(e.type)),
                        (a = e.type),
                        r in t
                          ? Object.defineProperty(t, r, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (t[r] = a),
                        t)
                      ),
                    }),
                  e.header
                ),
                c.createElement(
                  "div",
                  { className: "notifications-item__message" },
                  e.message
                ),
                c.createElement(
                  "div",
                  { className: "notifications-item__action" },
                  !(0, m.isEmptyObject)(e.action) &&
                    c.createElement(
                      c.Fragment,
                      null,
                      e.action.route
                        ? c.createElement(
                            u.CG,
                            {
                              onClick: n,
                              active_class: "notifications-item",
                              className: i()(
                                "dc-btn",
                                "dc-btn--secondary",
                                "notifications-item__cta-button"
                              ),
                              to: e.action.route,
                            },
                            c.createElement(
                              s.Text,
                              { weight: "bold", size: "xxs" },
                              e.action.text
                            )
                          )
                        : c.createElement(
                            s.Button,
                            {
                              className: i()(
                                "dc-btn--secondary",
                                "notifications-item__cta-button"
                              ),
                              onClick: e.action.onClick,
                            },
                            c.createElement(
                              s.Text,
                              { weight: "bold", size: "xxs" },
                              e.action.text
                            )
                          )
                    )
                )
              );
              var t, r, a;
            })
          );
        },
        g = c.forwardRef(function (e, t) {
          var n = e.notifications,
            r = e.toggleDialog,
            a = !n.length;
          return c.createElement(
            "div",
            { className: "notifications-dialog", ref: t },
            c.createElement(
              "div",
              { className: "notifications-dialog__header" },
              c.createElement(
                s.Text,
                {
                  as: "h2",
                  className: "notifications-dialog__header-text",
                  size: "s",
                  weight: "bold",
                  color: "prominent",
                  styles: { lineHeight: "1.6rem" },
                },
                c.createElement(d.Localize, {
                  i18n_default_text: "Notifications",
                })
              )
            ),
            c.createElement(
              "div",
              {
                className: i()("notifications-dialog__content", {
                  "notifications-dialog__content--empty": a,
                }),
              },
              c.createElement(
                s.ThemedScrollbars,
                { is_bypassed: (0, m.isMobile)() || a },
                a
                  ? c.createElement(p.X, null)
                  : c.createElement(f, { notifications: n, toggleDialog: r })
              )
            )
          );
        });
      g.displayName = "NotificationListWrapper";
      var h = function (e) {
        var t = e.is_visible,
          n = e.notifications,
          r = e.toggleDialog,
          a = c.useRef();
        return (
          (0, s.useOnClickOutside)(a, function (e) {
            var n,
              o = !e.target.classList.contains(
                "notifications-toggle__icon-wrapper"
              );
            (null !== (n = a.current) &&
              void 0 !== n &&
              n.contains(e.target)) ||
              !t ||
              !o ||
              r();
          }),
          c.createElement(
            c.Fragment,
            null,
            c.createElement(
              s.MobileWrapper,
              null,
              c.createElement(
                s.MobileDialog,
                {
                  portal_element_id: "modal_root",
                  title: (0, d.localize)("Notifications"),
                  wrapper_classname: "notifications-mobile-dialog",
                  visible: t,
                  onClose: r,
                },
                c.createElement(g, {
                  notifications: n,
                  ref: a,
                  toggleDialog: r,
                })
              )
            ),
            c.createElement(
              s.DesktopWrapper,
              null,
              c.createElement(
                l.Z,
                {
                  in: t,
                  classNames: {
                    enter: "notifications-dialog--enter",
                    enterDone: "notifications-dialog--enter-done",
                    exit: "notifications-dialog--exit",
                  },
                  timeout: 150,
                  unmountOnExit: !0,
                },
                c.createElement(g, {
                  notifications: n,
                  ref: a,
                  toggleDialog: r,
                })
              )
            )
          )
        );
      };
      h.propTypes = {
        is_visible: a().bool,
        notifications: a().array,
        toggleDialog: a().func,
      };
      const y = (0, _.$j)(function (e) {
        var t = e.ui,
          n = e.common;
        return {
          notifications: t.filtered_notifications,
          app_routing_history: n.app_routing_history,
          removeNotificationByKey: t.removeNotificationByKey,
          removeNotificationMessage: t.removeNotificationMessage,
        };
      })(h);
    },
    78568: (e, t, n) => {
      "use strict";
      n.d(t, { FX: () => a, GH: () => o, Sj: () => i });
      var r = n(20374),
        a = { SUCCESS: 1, WARN: 0, DANGER: -1, PENDING: -2 },
        o = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.account_residence,
            a = void 0 === n ? "" : n;
          if ("be" === a) return (0, r.localize)("Real Synthetic");
          if ("im" === a) return (0, r.localize)("Deriv account");
          switch (e) {
            case "svg":
              return (0, r.localize)("Deriv account");
            case "iom":
            case "malta":
              return (0, r.localize)("Deriv Synthetic");
            case "maltainvest":
              return (0, r.localize)("Deriv Financial");
            default:
              return (0, r.localize)("Deriv");
          }
        },
        i = function (e) {
          var t = e.landing_company_shortcode,
            n = void 0 === t ? "" : t,
            r = e.is_fully_authenticated,
            o = void 0 !== r && r,
            i = e.is_age_verified,
            c = void 0 !== i && i,
            l = e.is_isle_of_man_residence,
            s = void 0 !== l && l,
            u = e.is_belgium_residence;
          return "svg" === n || s || (void 0 !== u && u)
            ? a.SUCCESS
            : "iom" === n
            ? o
              ? a.SUCCESS
              : c
              ? a.WARN
              : a.DANGER
            : a.SUCCESS;
        };
    },
    93802: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => d });
      var r = n(40841),
        a = n.n(r),
        o = n(60216),
        i = n.n(o),
        c = n(32735),
        l = n(57573),
        s = n(75672),
        u = n(77395),
        _ = function (e) {
          var t = e.is_mobile,
            n = e.server_time,
            r = (0, l.toGMTFormat)(n),
            o = (0, l.toLocalFormat)(n);
          return c.createElement(
            u.Popover,
            {
              alignment: "top",
              message: o,
              className: a()("server-time", { "server-time--is-mobile": t }),
            },
            r
          );
        };
      _.propTypes = { is_mobile: i().bool, server_time: i().object };
      const d = (0, s.$j)(function (e) {
        return { server_time: e.common.server_time };
      })(_);
    },
    96987: (e, t, n) => {
      "use strict";
      var r = n(60216),
        a = n.n(r),
        o = n(32735),
        i = n(12788),
        c = n(14956),
        l = n(40001),
        s = n.n(l),
        u = n(77395),
        _ = n(57573),
        d = n(20374),
        m = n(25078),
        p = n.n(m),
        f = n(3968),
        g = n(75672),
        h = n(22816);
      function y() {
        return (y =
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
      function b(e, t) {
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
      }
      var v = function (e) {
        var t = e.toasts,
          n = e.removeToast;
        if (0 === t.length) return null;
        var r = t.filter(function (e) {
            return !e.is_bottom;
          }),
          a = t.filter(function (e) {
            return e.is_bottom;
          }),
          c = function (e) {
            var t = e.key,
              r = e.content,
              a = b(e, ["key", "content"]);
            return o.createElement(
              u.Toast,
              y({ key: t }, a, {
                onClose: function () {
                  return n(t);
                },
              }),
              r
            );
          },
          l = o.createElement(
            u.Div100vhContainer,
            { className: "toast-messages", height_offset: "15px" },
            o.createElement(
              "div",
              { className: "toast-messages__top" },
              r.map(c)
            ),
            o.createElement(
              "div",
              { className: "toast-messages__bottom" },
              a.map(c)
            )
          );
        return i.createPortal(l, document.getElementById("popup_root"));
      };
      v.propTypes = {
        toasts: a().arrayOf(
          a().shape({
            key: a().string,
            timeout: a().number,
            content: a().oneOfType([a().node, a().string]),
            type: a().oneOf(["error", "info"]),
            is_bottom: a().bool,
          })
        ),
        removeToast: a().func,
      };
      const E = (0, g.$j)(function (e) {
        var t = e.ui;
        return { toasts: t.toasts, removeToast: t.removeToast };
      })(v);
      var w = n(61407),
        S = n(40841),
        A = n.n(S),
        x = n(13799),
        z = n(96363);
      function T(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return C(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return C(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var k = new _.CookieStorage(_.TRACKING_STATUS_KEY),
        N = function (e) {
          var t = e.children,
            n = e.identifyEvent,
            r = e.is_app_disabled,
            a = e.is_cashier_visible,
            i = e.is_dark_mode,
            c = e.is_eu_country,
            l = e.is_logged_in,
            s = e.is_logging_in,
            d = e.is_cfd_page,
            m = e.is_positions_drawer_on,
            p = e.is_route_modal_on,
            g = e.notifyAppInstall,
            h = e.pageView,
            y = e.pushDataLayer,
            b = T(o.useState(!1), 2),
            v = b[0],
            E = b[1],
            w = T(o.useState(!1), 2),
            S = w[0],
            x = w[1],
            C = o.useContext(_.PlatformContext).is_dashboard,
            N = k.get(_.TRACKING_STATUS_KEY);
          o.useEffect(
            function () {
              (!c || "accepted" === N) &&
                !S &&
                (y({ event: "allow_tracking" }), x(!0));
            },
            [S, c, y, N]
          ),
            o.useEffect(
              function () {
                N ||
                  l ||
                  s ||
                  f.Z.wait("website_status").then(function () {
                    E(c);
                  });
              },
              [N, l, c, s]
            ),
            n(),
            h(),
            o.useEffect(
              function () {
                var e = function (e) {
                  e.preventDefault(), g(e);
                };
                return (
                  window.addEventListener("beforeinstallprompt", e),
                  function () {
                    return window.removeEventListener("beforeinstallprompt", e);
                  }
                );
              },
              [g]
            );
          return o.createElement(
            "div",
            {
              id: "app_contents",
              className: A()("app-contents", {
                "app-contents--show-positions-drawer": m,
                "app-contents--is-disabled": r,
                "app-contents--is-mobile": (0, _.isMobile)(),
                "app-contents--is-route-modal": p,
                "app-contents--is-scrollable": d || a,
                "app-contents--is-dashboard": C,
              }),
            },
            o.createElement(u.MobileWrapper, null, t),
            o.createElement(
              u.DesktopWrapper,
              null,
              o.createElement(
                u.ThemedScrollbars,
                { height: "calc(100vh - 84px)", has_horizontal: !0 },
                t
              )
            ),
            v &&
              o.createElement(z.Z, {
                onAccept: function () {
                  k.set(_.TRACKING_STATUS_KEY, "accepted", {
                    sameSite: "none",
                    secure: !0,
                  }),
                    y({ event: "allow_tracking" }),
                    E(!1),
                    x(!0);
                },
                onDecline: function () {
                  k.set(_.TRACKING_STATUS_KEY, "declined", {
                    sameSite: "none",
                    secure: !0,
                  }),
                    E(!1);
                },
                is_open: v,
                is_dark_mode: i,
              })
          );
        };
      N.propTypes = {
        children: a().any,
        is_app_disabled: a().bool,
        is_cashier_visible: a().bool,
        is_logged_in: a().bool,
        is_cfd_page: a().bool,
        is_positions_drawer_on: a().bool,
        is_route_modal_on: a().bool,
      };
      const O = (0, x.withRouter)(
        (0, g.$j)(function (e) {
          var t = e.client,
            n = e.gtm,
            r = e.rudderstack,
            a = e.ui;
          return {
            is_eu_country: t.is_eu_country,
            is_eu: t.is_eu,
            is_logged_in: t.is_logged_in,
            is_logging_in: t.is_logging_in,
            pushDataLayer: n.pushDataLayer,
            identifyEvent: r.identifyEvent,
            pageView: r.pageView,
            is_app_disabled: a.is_app_disabled,
            is_cashier_visible: a.is_cashier_visible,
            is_dark_mode: a.is_dark_mode_on,
            is_cfd_page: a.is_cfd_page,
            is_positions_drawer_on: a.is_positions_drawer_on,
            is_route_modal_on: a.is_route_modal_on,
            notifyAppInstall: a.notifyAppInstall,
          };
        })(N)
      );
      function I(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return M(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return M(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function D() {
        return (D =
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
      var P = "is_dashboard";
      const j = function (e) {
        var t = D({}, e),
          n =
            !!window.localStorage.getItem(P) &&
            "true" === window.localStorage.getItem(P),
          r = I(o.useState(n), 2),
          a = {
            is_dashboard: r[0],
            setDerivDashboard: r[1],
            DERIV_DASHBOARD_KEY: P,
          };
        return o.createElement(_.PlatformContext.Provider, D({ value: a }, t));
      };
      var L = n(4514),
        R = n(57870),
        F = n(93802),
        W = function () {
          return o.createElement("div", { className: "footer-icon-separator" });
        },
        U = function (e, t) {
          var n = e.Component;
          return o.createElement(
            o.Fragment,
            { key: "footer-link-".concat(e.position, "-").concat(t) },
            e.has_left_separator && o.createElement(W, null),
            o.createElement(n, null),
            e.has_right_separator && o.createElement(W, null)
          );
        },
        B = function (e) {
          var t = e.enableApp,
            n = e.footer_extensions,
            r = e.is_app_disabled,
            a = e.is_eu,
            i = e.is_logged_in,
            c = e.is_route_modal_on,
            l = e.is_settings_modal_on,
            s = e.is_virtual,
            u = e.disableApp,
            _ = e.toggleSettingsModal,
            d = e.settings_extension,
            m = e.landing_company_shortcode,
            p = [],
            f = [];
          return (
            n.filter &&
              ((p = n.filter(function (e) {
                return "left" === e.position;
              })),
              (f = n.filter(function (e) {
                return "right" === e.position;
              }))),
            o.createElement(
              "footer",
              { className: A()("footer", { "footer--is-disabled": r || c }) },
              p.length > 0 &&
                o.createElement(
                  "div",
                  { className: "footer__links footer__links--left" },
                  p.map(U)
                ),
              o.createElement(L.hI, null),
              o.createElement(L.Ie, null),
              o.createElement(F.Z, null),
              o.createElement(
                "div",
                { className: "footer__links" },
                f.map(U),
                o.createElement(R.Z, null),
                o.createElement(W, null),
                o.createElement(L.jU, null),
                o.createElement(L.Nb, null),
                i && o.createElement(L.J0, null),
                !s && o.createElement(L.W0, { landing_company: m, is_eu: a }),
                o.createElement(W, null),
                o.createElement(L.l1, null),
                o.createElement(L.VR, {
                  is_settings_visible: l,
                  toggleSettings: _,
                  disableApp: u,
                  enableApp: t,
                  settings_extension: d,
                }),
                o.createElement(L.Yx, null)
              )
            )
          );
        };
      B.propTypes = {
        is_app_disabled: a().bool,
        is_logged_in: a().bool,
        is_route_modal_on: a().bool,
        is_settings_modal_on: a().bool,
        landing_company_shortcode: a().string,
        location: a().object,
        toggleSettingsModal: a().func,
      };
      const $ = (0, x.withRouter)(
        (0, g.$j)(function (e) {
          var t = e.client,
            n = e.ui;
          return {
            enableApp: n.enableApp,
            footer_extensions: n.footer_extensions,
            settings_extension: n.settings_extension,
            is_app_disabled: n.is_app_disabled,
            is_route_modal_on: n.is_route_modal_on,
            is_logged_in: t.is_logged_in,
            is_eu: t.is_eu,
            is_loading: n.is_loading,
            is_settings_modal_on: n.is_settings_modal_on,
            is_virtual: t.is_virtual,
            landing_company_shortcode: t.landing_company_shortcode,
            disableApp: n.disableApp,
            toggleSettingsModal: n.toggleSettingsModal,
          };
        })(B)
      );
      var Z = n(11818);
      const V = [
        {
          icon: "IcBrandDtrader",
          title: function () {
            return (0, d.localize)("DTrader");
          },
          name: "DTrader",
          description: function () {
            return (0, d.localize)(
              "A whole new trading experience on a powerful yet easy to use platform."
            );
          },
          link_to: _.routes.trade,
        },
        {
          icon: "IcBrandDbot",
          title: function () {
            return (0, d.localize)("DBot");
          },
          name: "DBot",
          description: function () {
            return (0, d.localize)(
              "Automated trading at your fingertips. No coding needed."
            );
          },
          link_to: _.routes.bot,
        },
        {
          icon: "IcBrandDmt5",
          title: function () {
            return (0, d.localize)("DMT5");
          },
          name: "DMT5",
          description: function () {
            return (0, d.localize)(
              "Trade on Deriv MetaTrader 5 (DMT5), the all-in-one FX and CFD trading platform."
            );
          },
          link_to: _.routes.mt5,
        },
        {
          icon: "IcBrandDxtrade",
          title: function () {
            return (0, d.localize)("Deriv X");
          },
          name: "Deriv X",
          description: function () {
            return (0, d.localize)(
              "Trade FX and CFDs on a customisable, easy-to-use trading platform."
            );
          },
          link_to: _.routes.dxtrade,
        },
        {
          icon: "IcBrandSmarttrader",
          title: function () {
            return (0, d.localize)("SmartTrader");
          },
          name: "SmartTrader",
          description: function () {
            return (0, d.localize)(
              "Trade the world’s markets with our popular user-friendly platform"
            );
          },
          href: _.routes.smarttrader,
        },
      ];
      var H = n(19465),
        X = n.n(H);
      function G() {
        return (G =
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
      const Y = function (e) {
        return o.createElement(
          "div",
          { className: "account-signup-loader" },
          o.createElement(u.Loading, G({}, e, { is_fullscreen: !1 }))
        );
      };
      var K = n(44066);
      const q = function (e) {
        var t = e.onConfirm,
          n = e.onClose;
        return o.createElement(
          K.Formik,
          { initialValues: {}, onSubmit: t, validateOnMount: !0 },
          function (e) {
            var t = e.handleSubmit;
            return o.createElement(
              u.AutoHeightWrapper,
              { default_height: 200 },
              function (e) {
                var r = e.setRef,
                  a = e.height;
                return o.createElement(
                  "form",
                  { ref: r, onSubmit: t, className: "accept-risk__form" },
                  o.createElement(
                    u.Div100vhContainer,
                    {
                      className: "details-form",
                      height_offset: "40px",
                      is_disabled: (0, _.isDesktop)(),
                    },
                    o.createElement(
                      u.ThemedScrollbars,
                      { autoHide: !(window.innerHeight < 890), height: a - 77 },
                      o.createElement(
                        "div",
                        { className: "accept-risk__container" },
                        o.createElement(
                          "div",
                          { className: "accept-risk__header" },
                          o.createElement(
                            u.Text,
                            { weight: "bold", size: "xs" },
                            (0, d.localize)("Appropriateness Test, WARNING:")
                          )
                        ),
                        o.createElement(
                          u.Text,
                          { as: "p", size: "xs" },
                          o.createElement(d.Localize, {
                            i18n_default_text:
                              "In providing our services to you, we are required to obtain information from you in order to assess whether a given product or service is appropriate for you (that is, whether you possess the experience and knowledge to understand the risks involved).<0/><1/>",
                            components: [
                              o.createElement("br", { key: 0 }),
                              o.createElement("br", { key: 1 }),
                            ],
                          }),
                          o.createElement(d.Localize, {
                            i18n_default_text:
                              "On the basis of the information provided in relation to your knowledge and experience, we consider that the investments available via this website are not appropriate for you.<0/><1/>",
                            components: [
                              o.createElement("br", { key: 0 }),
                              o.createElement("br", { key: 1 }),
                            ],
                          }),
                          o.createElement(d.Localize, {
                            i18n_default_text:
                              "By clicking Accept below and proceeding with the Account Opening you should note that you may be exposing yourself to risks (which may be significant, including the risk of loss of the entire sum invested) that you may not have the knowledge and experience to properly assess or mitigate.",
                          })
                        )
                      )
                    )
                  ),
                  o.createElement(
                    u.Modal.Footer,
                    { has_separator: !0, is_bypassed: (0, _.isMobile)() },
                    o.createElement(u.FormSubmitButton, {
                      is_absolute: (0, _.isMobile)(),
                      label: (0, d.localize)("Accept"),
                      has_cancel: !0,
                      cancel_label: (0, d.localize)("Decline"),
                      onCancel: n,
                    })
                  )
                );
              }
            );
          }
        );
      };
      var J = n(84454),
        Q = n.n(J),
        ee = n(10318),
        te = n.n(ee),
        ne = n(54896),
        re = n.n(ne),
        ae = n(16680),
        oe = n.n(ae),
        ie = n(43321),
        ce = n.n(ie),
        le = n(46389),
        se = n.n(le),
        ue = n(44397),
        _e = n.n(ue),
        de = n(46491),
        me = n.n(de);
      const pe = (0, g.$j)(function (e) {
        var t = e.client,
          n = e.ui;
        return {
          currencies: t.currencies_list,
          has_currency: !!t.currency,
          has_real_account: t.has_active_real_account,
          legal_allowed_currencies: t.upgradeable_currencies,
          real_account_signup: n.real_account_signup,
          resetRealAccountSignupParams: n.resetRealAccountSignupParams,
          selectable_currencies: t.selectable_currencies,
          real_account_signup_target: n.real_account_signup_target,
          is_dxtrade_allowed: t.is_dxtrade_allowed,
        };
      })(me());
      var fe = n(4138),
        ge = n.n(fe);
      const he = (0, g.$j)(function (e) {
        var t = e.client;
        return {
          is_gb_residence: "gb" === t.residence,
          fetchStatesList: t.fetchStatesList,
          states_list: t.states_list,
        };
      })(ge());
      var ye = n(18608),
        be = n.n(ye);
      const ve = (0, g.$j)(function (e) {
        var t = e.client;
        return {
          is_gb_residence: "gb" === t.residence,
          fetchStatesList: t.fetchStatesList,
          states_list: t.states_list,
        };
      })(be());
      function Ee(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return we(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return we(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return we(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function we(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Se = function (e) {
          return "samoa" !== e.real_account_signup_target;
        },
        Ae = function (e) {
          return [].concat(
            Ee(Se(e) ? [Q()(e, pe)] : []),
            Ee(Se(e) ? [te()(e, se())] : []),
            Ee(Se(e) ? [re()(e, ve)] : []),
            Ee(
              "maltainvest" === e.real_account_signup_target
                ? [ce()(e, he)]
                : []
            ),
            [oe()(e, _e())]
          );
        };
      function xe() {
        return (xe =
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
      function ze(e, t) {
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
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ze(Object(n), !0).forEach(function (t) {
                Ce(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ze(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ce(e, t, n) {
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
      function ke(e, t, n, r, a, o, i) {
        try {
          var c = e[o](i),
            l = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function Ne(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Me(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          Ie(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Oe(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          Ie(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ie(e, t) {
        if (e) {
          if ("string" == typeof e) return Me(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Me(e, t)
              : void 0
          );
        }
      }
      function Me(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var De = function (e) {
          var t = e.has_target,
            n = e.has_real_account,
            r = e.has_currency,
            a = e.items,
            i = e.getCurrentStep,
            c = e.getTotalSteps,
            l = i() - 1,
            s = a[l].header.title;
          return o.createElement(
            o.Fragment,
            null,
            (!n || t) &&
              r &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  u.DesktopWrapper,
                  null,
                  o.createElement(u.FormProgress, { steps: a, current_step: l })
                ),
                o.createElement(
                  u.MobileWrapper,
                  null,
                  o.createElement(
                    "div",
                    { className: "account-wizard__header-steps" },
                    o.createElement(
                      u.Text,
                      {
                        as: "h4",
                        styles: {
                          lineHeight: "20px",
                          color: "var(--brand-red-coral)",
                        },
                        size: "xs",
                        weight: "bold",
                        className: "account-wizard__header-steps-title",
                      },
                      o.createElement(d.Localize, {
                        i18n_default_text:
                          "Step {{step}}: {{step_title}} ({{step}} of {{steps}})",
                        values: { step: l + 1, steps: c(), step_title: s },
                      })
                    )
                  )
                )
              ),
            o.createElement(
              u.DesktopWrapper,
              null,
              n &&
                (!t || !r) &&
                o.createElement(
                  "div",
                  { className: "account-wizard__set-currency" },
                  !r &&
                    o.createElement(
                      "p",
                      null,
                      o.createElement(d.Localize, {
                        i18n_default_text:
                          "You have an account that do not have currency assigned. Please choose a currency to trade with this account.",
                      })
                    ),
                  o.createElement(
                    u.Text,
                    { as: "h2", weight: "bold", align: "center" },
                    o.createElement(d.Localize, {
                      i18n_default_text: "Please choose your currency",
                    })
                  )
                )
            )
          );
        },
        Pe = function (e) {
          var t = Oe(o.useState(void 0), 1)[0],
            n = Oe(o.useState(!1), 2),
            r = n[0],
            a = n[1],
            i = Oe(o.useState(""), 2),
            c = i[0],
            l = i[1],
            s = Oe(o.useState([]), 2),
            d = s[0],
            m = s[1],
            p = Oe(o.useState([]), 2),
            f = p[0],
            g = p[1],
            h = Oe(o.useState(!1), 2),
            y = h[0],
            b = h[1],
            v = o.useRef(!1);
          o.useEffect(function () {
            e.fetchStatesList();
            var t = (0, _.makeCancellablePromise)(e.fetchResidenceList()),
              n = t.cancel,
              r = t.promise,
              o = (0, _.makeCancellablePromise)(e.fetchFinancialAssessment()),
              i = o.cancel,
              c = o.promise;
            return (
              Promise.all([r, c]).then(function () {
                g(function (t) {
                  return t.length ? t : Ae(e);
                }),
                  m(E()),
                  a(!0);
              }),
              function () {
                n(), i();
              }
            );
          }, []),
            o.useEffect(
              function () {
                if (d.length > 0) {
                  var e = Ne(f);
                  d.forEach(function (t, n) {
                    t instanceof Object && (e[n].form_value = t);
                  }),
                    g(e),
                    m([]);
                }
              },
              [d]
            ),
            o.useEffect(
              function () {
                if (e.residence_list.length) {
                  w(e.residence_list).then(function (t) {
                    var n, r;
                    (r = f.length ? f : Ae(e)).length > 1 &&
                      "phone" in
                        (null === (n = r[1]) || void 0 === n
                          ? void 0
                          : n.form_value) &&
                      ((r[1].form_value.phone =
                        r[1].form_value.phone || t || ""),
                      g(r));
                  });
                }
              },
              [e.residence_list]
            );
          var E = function () {
              var e = localStorage.getItem("real_account_signup_wizard");
              try {
                return JSON.parse(e) || [];
              } catch (e) {
                return [];
              } finally {
                localStorage.removeItem("real_account_signup_wizard");
              }
            },
            w = (function () {
              var t,
                n =
                  ((t = regeneratorRuntime.mark(function t(n) {
                    var r;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (r = n.find(function (t) {
                                return t.value === e.residence;
                              })) &&
                              r.phone_idd
                            ) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return", "");
                          case 3:
                            return t.abrupt("return", "+".concat(r.phone_idd));
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })),
                  function () {
                    var e = this,
                      n = arguments;
                    return new Promise(function (r, a) {
                      var o = t.apply(e, n);
                      function i(e) {
                        ke(o, r, a, i, c, "next", e);
                      }
                      function c(e) {
                        ke(o, r, a, i, c, "throw", e);
                      }
                      i(void 0);
                    });
                  });
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
            S = function () {
              return f
                .map(function (e) {
                  return e.form_value;
                })
                .reduce(function (t, n) {
                  var r = X()(new Map(Object.entries(n)));
                  return (
                    r.date_of_birth &&
                      (r.date_of_birth = (0, _.toMoment)(
                        r.date_of_birth
                      ).format("YYYY-MM-DD")),
                    r.place_of_birth &&
                      (r.place_of_birth = r.place_of_birth
                        ? (0, _.getLocation)(
                            e.residence_list,
                            r.place_of_birth,
                            "value"
                          )
                        : ""),
                    r.citizen &&
                      (r.citizen = r.citizen
                        ? (0, _.getLocation)(
                            e.residence_list,
                            r.citizen,
                            "value"
                          )
                        : ""),
                    r.tax_residence &&
                      (r.tax_residence = r.tax_residence
                        ? (0, _.getLocation)(
                            e.residence_list,
                            r.tax_residence,
                            "value"
                          )
                        : r.tax_residence),
                    Te(Te({}, t), r)
                  );
                });
            },
            x = function () {
              l("");
            },
            z = function (t, n) {
              t - 1 < 0 ? e.onClose() : (n(), x());
            },
            T = function (t, n, r, a) {
              C(t, n),
                x(),
                (!e.has_currency && e.has_real_account) || t + 1 >= f.length
                  ? N(r)
                  : a();
            },
            C = function (e, t) {
              var n = Object.assign([], f);
              (n[e].form_value = t), g(n);
            },
            k = function (e, t) {
              return e ? f[t][e] : f[t];
            },
            N = function (t) {
              var n;
              e.setLoading(!0),
                e.has_real_account && !e.has_currency
                  ? e
                      .setAccountCurrency(S().currency)
                      .then(function (t) {
                        e.onFinishSuccess(
                          t.echo_req.set_account_currency.toLowerCase()
                        );
                      })
                      .catch(function (e) {
                        l(e), t(!1);
                      })
                      .finally(function () {
                        return e.setLoading(!1);
                      })
                  : ((n = Te({}, S())),
                    null == n || delete n.tax_identification_confirm,
                    v.current && (n.accept_risk = 1),
                    e.realAccountSignup(n))
                      .then(function (t) {
                        "maltainvest" === e.real_account_signup_target
                          ? e.onFinishSuccess(
                              t.new_account_maltainvest.currency.toLowerCase()
                            )
                          : "samoa" === e.real_account_signup_target
                          ? e.onOpenWelcomeModal(
                              t.new_account_samoa.currency.toLowerCase()
                            )
                          : e.onFinishSuccess(
                              t.new_account_real.currency.toLowerCase()
                            );
                      })
                      .catch(function (t) {
                        "show risk disclaimer" === t.code
                          ? b(!0)
                          : e.onError(t, f);
                      })
                      .finally(function () {
                        return e.setLoading(!1);
                      });
            };
          if (e.is_loading) return o.createElement(Y, null);
          if (y)
            return o.createElement(q, {
              onConfirm: function () {
                (v.current = !0), N();
              },
              onClose: e.onClose,
            });
          if (!r) return null;
          if (!t) {
            var O = f.map(function (t, n) {
                var r = (function (t) {
                    var n = k("passthrough", t),
                      r = k("props", t) || {};
                    return (
                      n &&
                        n.length &&
                        (n.forEach(function (t) {
                          Object.assign(r, Ce({}, t, e[t]));
                        }),
                        (r.bypass_to_personal = d.length > 0)),
                      r
                    );
                  })(n),
                  a = t.body;
                return o.createElement(
                  a,
                  xe(
                    {
                      value: k("form_value", n),
                      index: n,
                      onSubmit: T,
                      onCancel: z,
                      onSave: C,
                      has_currency: e.has_currency,
                      form_error: c,
                    },
                    r,
                    { key: n }
                  )
                );
              }),
              I = o.createElement("div", null);
            return (
              "samoa" !== e.real_account_signup_target &&
                (I = o.createElement(De, {
                  has_real_account: e.has_real_account,
                  items: f,
                  has_currency: e.has_currency,
                  has_target: "manage" !== e.real_account_signup_target,
                })),
              o.createElement(
                u.Wizard,
                {
                  nav: I,
                  className: A()("account-wizard", {
                    "account-wizard--set-currency": !e.has_currency,
                    "account-wizard--deriv-crypto":
                      "samoa" === e.real_account_signup_target,
                  }),
                },
                O
              )
            );
          }
          var M = t;
          return o.createElement(M, null);
        };
      Pe.propTypes = {
        fetchResidenceList: a().func,
        has_currency: a().bool,
        has_real_account: a().bool,
        onError: a().func,
        onLoading: a().func,
        onFinishSuccess: a().func,
        onOpenWelcomeModal: a().func,
        realAccountSignup: a().func,
        residence: a().string,
        residence_list: a().array,
        setAccountCurrency: a().func,
      };
      const je = (0, g.$j)(function (e) {
        var t = e.client,
          n = e.ui;
        return {
          account_settings: t.account_settings,
          is_fully_authenticated: t.is_fully_authenticated,
          realAccountSignup: t.realAccountSignup,
          has_real_account: t.has_active_real_account,
          upgrade_info: t.upgrade_info,
          real_account_signup_target: n.real_account_signup_target,
          has_currency: !!t.currency,
          setAccountCurrency: t.setAccountCurrency,
          residence: t.residence,
          residence_list: t.residence_list,
          states_list: t.states_list,
          fetchStatesList: t.fetchStatesList,
          fetchResidenceList: t.fetchResidenceList,
          refreshNotifications: t.refreshNotifications,
          fetchFinancialAssessment: t.fetchFinancialAssessment,
          needs_financial_assessment: t.needs_financial_assessment,
          financial_assessment: t.financial_assessment,
        };
      })(Pe);
      var Le = n(58468),
        Re = n(39677),
        Fe = n.n(Re),
        We = n(57390),
        Ue = n.n(We),
        Be = function () {
          return [
            o.createElement(d.Localize, {
              key: 0,
              i18n_default_text: "Choose your preferred cryptocurrency",
            }),
            o.createElement(d.Localize, {
              key: 1,
              i18n_default_text:
                "You can open an account for each cryptocurrency.",
            }),
            o.createElement(d.Localize, {
              key: 2,
              i18n_default_text: "Add a real account",
            }),
            o.createElement(d.Localize, {
              key: 3,
              i18n_default_text:
                "Choose a currency you would like to trade with.",
            }),
          ];
        },
        $e = function (e) {
          var t = e.heading,
            n = e.subheading;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              u.Text,
              {
                as: "h1",
                color: "prominent",
                align: "center",
                weight: "bold",
                className: "add-crypto-currency__title",
              },
              t
            ),
            o.createElement(
              u.Text,
              {
                as: "h3",
                size: "xxs",
                color: "prominent",
                align: "center",
                className: "add-crypto-currency__sub-title",
              },
              n
            )
          );
        },
        Ze = "crypto",
        Ve = function (e) {
          var t = e.available_crypto_currencies,
            n = e.form_error,
            r = e.has_fiat,
            a = e.legal_allowed_currencies,
            i = e.onSubmit,
            c = e.should_show_crypto_only,
            l = e.should_show_fiat_only,
            s = e.value,
            m = e.hasNoAvailableCrypto,
            p = function () {
              return (0, _.reorderCurrencies)(
                a.filter(function (e) {
                  return "fiat" === e.type;
                })
              );
            },
            f = function () {
              return (0, _.reorderCurrencies)(
                a.filter(function (e) {
                  return e.type === Ze;
                }),
                Ze
              );
            },
            g = function () {
              return !r && !c;
            },
            h = function (e) {
              return (
                -1 ===
                t
                  .map(function (e) {
                    return e.value;
                  })
                  .indexOf(e.value)
              );
            };
          return o.createElement(
            K.Formik,
            {
              initialValues: { currency: s.currency },
              onSubmit: function (e, t) {
                i(!1, e, t.setSubmitting);
              },
            },
            function (e) {
              var r = e.handleSubmit,
                a = e.values,
                i = e.errors,
                c = e.touched,
                s = e.isSubmitting;
              return o.createElement(
                "form",
                { onSubmit: r },
                !g() &&
                  o.createElement($e, {
                    heading: Be()[0],
                    subheading: Be()[1],
                  }),
                g() &&
                  o.createElement($e, {
                    heading: Be()[2],
                    subheading: Be()[3],
                  }),
                g() &&
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      Fe(),
                      {
                        id: "fiat_currency",
                        is_fiat: !0,
                        className:
                          "currency-selector__radio-group currency-selector__radio-group--with-margin",
                        value: a.currency,
                        error: i.currency,
                        touched: c.currency,
                        is_title_enabled: g(),
                        item_count: p().length,
                      },
                      p().map(function (e) {
                        return o.createElement(K.Field, {
                          key: e.value,
                          component: Ue(),
                          name: "currency",
                          id: e.value,
                          label: e.name,
                        });
                      })
                    )
                  ),
                g() &&
                  o.createElement(
                    u.Text,
                    {
                      as: "p",
                      color: "prominent",
                      size: "xxs",
                      align: "center",
                      className: "currency-selector__deposit-warn",
                    },
                    o.createElement(d.Localize, {
                      i18n_default_text:
                        "You’ll not be able to change currency once you have made a deposit.",
                    })
                  ),
                m() &&
                  o.createElement(
                    "div",
                    { className: "account-wizard--disabled-message" },
                    o.createElement(
                      u.Text,
                      {
                        as: "p",
                        align: "center",
                        size: "xxs",
                        className:
                          "account-wizard--disabled-message-description",
                      },
                      (0, d.localize)(
                        "You already have an account for each of the cryptocurrencies available on {{deriv}}.",
                        { deriv: _.website_name }
                      )
                    )
                  ),
                !l &&
                  (0 !== t.length
                    ? o.createElement(
                        Fe(),
                        {
                          id: "crypto_currency",
                          className:
                            "currency-selector__radio-group currency-selector__radio-group--with-margin",
                          label: (0, d.localize)("Cryptocurrencies"),
                          value: a.currency,
                          error: i.currency,
                          touched: c.currency,
                          is_title_enabled: g(),
                          item_count: f().length,
                        },
                        f().map(function (e) {
                          return o.createElement(K.Field, {
                            key: e.value,
                            component: Ue(),
                            name: "currency",
                            id: e.value,
                            label: e.name,
                            selected: h(e),
                          });
                        })
                      )
                    : o.createElement(
                        Fe(),
                        {
                          id: "crypto_currency",
                          className:
                            "currency-selector__radio-group currency-selector__radio-group--with-margin",
                          label: (0, d.localize)("Cryptocurrencies"),
                          is_title_enabled: g(),
                          item_count: f().length,
                        },
                        f().map(function (e) {
                          return o.createElement(K.Field, {
                            key: e.value,
                            component: Ue(),
                            name: "currency",
                            id: e.value,
                            label: e.name,
                            selected: !0,
                          });
                        })
                      )),
                o.createElement(u.FormSubmitButton, {
                  className: "currency-selector__button",
                  is_disabled: s || !a.currency,
                  label: (0, d.localize)("Add account"),
                  is_absolute: !(0, _.isMobile)(),
                  form_error: n,
                })
              );
            }
          );
        };
      Ve.propTypes = {
        available_crypto_currencies: a().array,
        legal_allowed_currencies: a().array,
        has_fiat: a().bool,
        hasNoAvailableCrypto: a().func,
        form_error: a().string,
        onSubmit: a().func,
        should_show_crypto_only: a().bool,
        should_show_fiat_only: a().bool,
        value: a().shape({ crypto: a().string, fiat: a().string }),
      };
      const He = (0, g.$j)(function (e) {
        var t = e.client;
        return {
          available_crypto_currencies: t.available_crypto_currencies,
          legal_allowed_currencies: t.upgradeable_currencies,
          has_fiat: t.has_fiat,
        };
      })(Ve);
      var Xe = function (e) {
        var t,
          n = e.legal_allowed_currencies,
          r = e.value,
          a = e.onSubmit,
          i = e.form_error,
          c = e.can_change_fiat_currency,
          l = e.client_currency,
          s = e.current_currency_type,
          m = e.current_fiat_currency,
          p = e.is_dxtrade_allowed,
          f = function () {
            return (0, _.reorderCurrencies)(
              n.filter(function (e) {
                return "fiat" === e.type;
              })
            );
          },
          g = "fiat" === s,
          h = p
            ? o.createElement(d.Localize, {
                i18n_default_text:
                  "We can't change your account currency as you've either made a deposit into your {{currency}} account or created a real account on DMT5 or Deriv X.",
                values: { currency: (0, _.getCurrencyDisplayCode)(l) },
              })
            : o.createElement(d.Localize, {
                i18n_default_text:
                  "We can't change your account currency as you've either made a deposit into your {{currency}} account or created a real account on DMT5.",
                values: { currency: (0, _.getCurrencyDisplayCode)(l) },
              }),
          y = o.createElement(d.Localize, {
            i18n_default_text:
              "Please switch to your {{fiat_currency}} account to change currencies.",
            values: {
              fiat_currency:
                null == m || null === (t = m.toUpperCase) || void 0 === t
                  ? void 0
                  : t.call(m),
            },
          }),
          b = g ? h : y;
        return o.createElement(
          K.Formik,
          {
            initialValues: { fiat: r.fiat },
            onSubmit: function (e, t) {
              a(!1, e, t.setSubmitting);
            },
          },
          function (e) {
            var t = e.handleSubmit,
              n = e.values,
              r = e.errors,
              a = e.touched,
              s = e.isSubmitting;
            return o.createElement(
              "form",
              {
                onSubmit: function (e) {
                  e.preventDefault(), t();
                },
              },
              o.createElement(
                u.Text,
                {
                  as: "h1",
                  color: "prominent",
                  weight: "bold",
                  align: "center",
                  className: "change-currency__title",
                },
                o.createElement(d.Localize, {
                  i18n_default_text: "Change your currency",
                })
              ),
              o.createElement(
                u.Text,
                {
                  as: "h3",
                  size: "xxs",
                  align: "center",
                  className: "change-currency__sub-title",
                },
                o.createElement(d.Localize, {
                  i18n_default_text:
                    "Choose the currency you would like to trade with.",
                })
              ),
              !c &&
                o.createElement(
                  "div",
                  { className: "account-wizard--disabled-message" },
                  o.createElement(
                    u.Text,
                    {
                      as: "p",
                      align: "center",
                      size: "xxs",
                      className: "account-wizard--disabled-message-description",
                    },
                    b
                  )
                ),
              o.createElement(
                Fe(),
                {
                  id: "fiat",
                  label: (0, d.localize)("Cryptocurrencies"),
                  className:
                    "currency-selector__radio-group currency-selector__radio-group--with-margin",
                  value: n.fiat,
                  error: r.fiat,
                  touched: a.fiat,
                  is_title_enabled: !1,
                  item_count: f().length,
                },
                f().map(function (e) {
                  return o.createElement(K.Field, {
                    key: e.value,
                    component: Ue(),
                    name: "fiat",
                    id: e.value,
                    label: e.name,
                    selected: e.value === l,
                  });
                })
              ),
              o.createElement(u.FormSubmitButton, {
                className: "change-currency__button",
                is_disabled: s || !n.fiat,
                label: (0, d.localize)("Change currency"),
                is_absolute: !(0, _.isMobile)(),
                form_error: i,
              })
            );
          }
        );
      };
      Xe.propTypes = {
        legal_allowed_currencies: a().array,
        onSubmit: a().func,
        value: a().shape({ crypto: a().string, fiat: a().string }),
        form_error: a().string,
        can_change_fiat_currency: a().bool,
        currency: a().string,
        current_currency_type: a().string,
        current_fiat_currency: a().string,
        client_currency: a().string,
        is_dxtrade_allowed: a().bool,
      };
      const Ge = (0, g.$j)(function (e) {
        var t = e.client;
        return {
          legal_allowed_currencies: t.upgradeable_currencies,
          client_currency: t.currency,
          current_fiat_currency: t.current_fiat_currency,
          is_dxtrade_allowed: t.is_dxtrade_allowed,
        };
      })(Xe);
      function Ye(e, t, n, r, a, o, i) {
        try {
          var c = e[o](i),
            l = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function Ke(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return qe(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return qe(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function qe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Je = function (e) {
        var t = e.available_crypto_currencies,
          n = e.can_change_fiat_currency,
          r = e.createCryptoAccount,
          a = e.current_currency_type,
          i = e.has_fiat,
          c = e.is_eu,
          l = e.is_loading,
          s = e.manage_real_account_tab_index,
          m = e.onError,
          p = e.onSuccessSetAccountCurrency,
          f = e.setCurrency,
          g = e.setLoading,
          h = (null != s ? s : i && 0 === (null == t ? void 0 : t.length))
            ? 1
            : 0,
          y = Ke(o.useState(h), 2),
          b = y[0],
          v = y[1],
          E = Ke(o.useState(""), 1)[0],
          w = Ke(o.useState({ crypto: "", fiat: "" }), 1)[0];
        o.useEffect(function () {
          (function () {
            var e,
              t =
                ((e = regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return g(!0), (e.next = 3), Le.WS.mt5LoginList();
                        case 3:
                          g(!1);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (r, a) {
                    var o = e.apply(t, n);
                    function i(e) {
                      Ye(o, r, a, i, c, "next", e);
                    }
                    function c(e) {
                      Ye(o, r, a, i, c, "throw", e);
                    }
                    i(void 0);
                  });
                });
            return function () {
              return t.apply(this, arguments);
            };
          })()();
        }, []);
        var S = function (e, t, n) {
            !(function (e, t) {
              g(!0),
                Object.entries(e).map(function (e) {
                  var n = Ke(e, 2),
                    a = n[0],
                    o = n[1];
                  "fiat" === a
                    ? f(o)
                        .then(function (e) {
                          t(!1),
                            p(
                              e.passthrough.previous_currency,
                              e.echo_req.set_account_currency
                            );
                        })
                        .catch(function (e) {
                          m(e);
                        })
                        .finally(function () {
                          return g(!1);
                        })
                    : r(o)
                        .then(function () {
                          p("", o), t(!1);
                        })
                        .catch(function (e) {
                          m(e);
                        })
                        .finally(function () {
                          return g(!1);
                        });
                });
            })(t, n);
          },
          x = function () {
            return 0 === t.length && i;
          };
        if (l) return o.createElement(Y, null);
        var z =
          i &&
          o.createElement(
            "div",
            {
              className: A()("change-currency", {
                "account-wizard--disabled": !n,
              }),
            },
            o.createElement(Ge, {
              className: "account-wizard__body",
              onSubmit: S,
              value: w,
              form_error: E,
              can_change_fiat_currency: n,
              current_currency_type: a,
            })
          );
        return o.createElement(
          u.ThemedScrollbars,
          { is_bypassed: (0, _.isMobile)(), autohide: !1 },
          c && i
            ? z
            : o.createElement(
                u.Tabs,
                {
                  active_index: b,
                  className: "account-wizard add-or-manage tabs--desktop",
                  onTabItemClick: function (e) {
                    v(e);
                  },
                  top: !0,
                  header_fit_content: (0, _.isDesktop)(),
                },
                o.createElement(
                  "div",
                  { label: (0, d.localize)("Cryptocurrencies") },
                  o.createElement(
                    "div",
                    {
                      className: A()("add-crypto-currency", {
                        "account-wizard--disabled": x(),
                      }),
                    },
                    o.createElement(He, {
                      className: "account-wizard__body",
                      onSubmit: S,
                      value: w,
                      form_error: E,
                      should_show_crypto_only: !0,
                      hasNoAvailableCrypto: x,
                    })
                  )
                ),
                o.createElement(
                  "div",
                  { label: (0, d.localize)("Fiat currencies") },
                  i
                    ? z
                    : o.createElement(He, {
                        className: "account-wizard__body",
                        onSubmit: S,
                        value: w,
                        form_error: E,
                        should_show_fiat_only: !0,
                        hasNoAvailableCrypto: x,
                      })
                )
              )
        );
      };
      Je.propTypes = {
        available_crypto_currencies: a().arrayOf({
          fractional_digits: a().number,
          is_deposit_suspended: a().number,
          is_suspended: a().number,
          is_withdrawal_suspended: a().number,
          name: a().string,
          stake_default: a().number,
          transfer_between_accounts: a().object,
          type: a().string,
          value: a().string,
        }),
        onError: a().func,
        onLoading: a().func,
        onSuccessSetAccountCurrency: a().func,
        is_eu: a().bool,
        setCurrency: a().func,
        createCryptoAccount: a().func,
        has_fiat: a().bool,
        can_change_fiat_currency: a().bool,
        current_currency_type: a().string,
        is_loading: a().bool,
        setLoading: a().func,
      };
      const Qe = (0, g.$j)(function (e) {
        var t = e.client,
          n = e.ui;
        return {
          available_crypto_currencies: t.available_crypto_currencies,
          can_change_fiat_currency: t.can_change_fiat_currency,
          current_currency_type: t.current_currency_type,
          current_fiat_currency: t.current_fiat_currency,
          has_fiat: t.has_fiat,
          is_eu: t.is_eu,
          manage_real_account_tab_index: n.manage_real_account_tab_index,
          setCurrency: t.setAccountCurrency,
          createCryptoAccount: t.createCryptoAccount,
        };
      })(Je);
      function et() {
        return (et =
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
      function tt(e, t) {
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
      }
      const nt = (0, g.$j)(function (e) {
        var t = e.client;
        return {
          available_crypto_currencies: t.available_crypto_currencies,
          can_change_fiat_currency: t.can_change_fiat_currency,
          currency: t.currency,
          current_currency_type: t.current_currency_type,
          current_fiat_currency: t.current_fiat_currency,
          is_eu: t.is_eu,
          has_fiat: t.has_fiat,
          landing_company_shortcode: t.landing_company_shortcode,
          setCurrency: t.setAccountCurrency,
          createCryptoAccount: t.createCryptoAccount,
        };
      })(function (e) {
        var t = e.setLoading,
          n = e.onSuccessSetAccountCurrency,
          r = e.onError,
          a = e.available_crypto_currencies,
          i = e.has_fiat,
          c = e.landing_company_shortcode,
          l = e.is_loading,
          s = tt(e, [
            "setLoading",
            "onSuccessSetAccountCurrency",
            "onError",
            "available_crypto_currencies",
            "has_fiat",
            "landing_company_shortcode",
            "is_loading",
          ]),
          m = o.useState(""),
          p = o.useState({ currency: "" }),
          f = function () {
            return 0 === a.length && i;
          };
        return l
          ? o.createElement(Y, null)
          : o.createElement(
              "div",
              {
                className: A()("set-currency-modal", {
                  "set-currency-modal--disabled": f(),
                }),
              },
              f() &&
                o.createElement(
                  "div",
                  { className: "set-currency-modal--disabled-message" },
                  o.createElement(
                    "p",
                    null,
                    (0, d.localize)(
                      "You already have an account for each of the cryptocurrencies available on {{deriv}}.",
                      { deriv: _.website_name }
                    )
                  )
                ),
              o.createElement(
                "div",
                { className: "set-currency-modal__heading-container" },
                o.createElement(
                  u.Text,
                  {
                    as: "p",
                    size: "xs",
                    line_height: "s",
                    align: "center",
                    className:
                      "set-currency-modal__heading-container__main-heading",
                  },
                  (0, d.localize)(
                    "You have an account that do not have currency assigned. Please choose a currency to trade with this account."
                  )
                ),
                o.createElement(
                  u.Text,
                  {
                    as: "p",
                    weight: "bold",
                    align: "center",
                    className:
                      "set-currency-modal__heading-container__sub-heading",
                  },
                  (0, d.localize)("Please choose your currency")
                )
              ),
              o.createElement(
                pe,
                et(
                  {
                    className: "account-wizard__body",
                    onSubmit: function (e, a, o) {
                      !(function (e, a) {
                        t(!0);
                        var o = e.currency;
                        o &&
                          s
                            .setCurrency(o)
                            .then(function (e) {
                              a(!1), n("", e.echo_req.set_account_currency);
                            })
                            .catch(function (e) {
                              r(e);
                            })
                            .finally(function () {
                              return t(!1);
                            });
                      })(a, o);
                    },
                    value: p,
                    form_error: m,
                    set_currency: !0,
                    validate: (0, _.generateValidationFunction)(c, Q()),
                  },
                  s
                )
              )
            );
      });
      var rt = function (e) {
          var t = e.prev,
            n = e.current;
          return t
            ? o.createElement(d.Localize, {
                i18n_default_text:
                  "<0>You have successfully changed your currency to {{currency}}.</0><0>Make a deposit now to start trading.</0>",
                values: { currency: (0, _.getCurrencyDisplayCode)(n) },
                components: [
                  o.createElement(u.Text, {
                    as: "p",
                    align: "center",
                    className: "status-dialog__message-text",
                    color: "general",
                    size: "xs",
                    key: n,
                  }),
                ],
              })
            : o.createElement(d.Localize, {
                i18n_default_text:
                  "<0>You have added a {{currency}} account.</0><0> Make a deposit now to start trading.</0>",
                values: { currency: (0, _.getCurrencyDisplayCode)(n) },
                components: [
                  o.createElement(u.Text, {
                    as: "p",
                    align: "center",
                    className: "status-dialog__message-text",
                    color: "general",
                    size: "xs",
                    key: n,
                  }),
                ],
              });
        },
        at = function (e) {
          var t = e.current,
            n = e.onCancel,
            r = e.onSubmit,
            a = e.prev,
            i = function () {
              return a
                ? o.createElement(u.Icon, {
                    icon: "IcCurrency-".concat(a.toLowerCase()),
                    height: 120,
                    width: 90,
                  })
                : null;
            },
            c = function () {
              return o.createElement(u.Icon, {
                icon: "IcCurrency-".concat(t.toLowerCase()),
                height: 120,
                width: 90,
              });
            },
            l = function () {
              return a
                ? o.createElement(u.Icon, {
                    icon: "IcArrowPointerRight",
                    color: "red",
                    width: 50,
                    height: 20,
                  })
                : null;
            },
            s = function (e) {
              var t = e.className;
              return o.createElement(u.Icon, {
                className: t,
                icon: "IcCheckmarkCircle",
                color: "green",
              });
            };
          return o.createElement(
            u.Div100vhContainer,
            {
              className: "status-dialog",
              is_disabled: (0, _.isDesktop)(),
              height_offset: "40px",
            },
            o.createElement(
              "div",
              {
                className: A()("status-dialog__header", {
                  "status-dialog__header--center": (0, _.isMobile)(),
                  "status-dialog__header--set-currency": a,
                }),
              },
              o.createElement(i, null),
              o.createElement(l, null),
              o.createElement(c, null),
              o.createElement(s, { className: "bottom-right-overlay" })
            ),
            o.createElement(
              "div",
              {
                className: A()("status-dialog__body", {
                  "status-dialog__body--no-grow": (0, _.isMobile)(),
                }),
              },
              o.createElement(
                u.Text,
                {
                  as: "h2",
                  align: "center",
                  className: "status-dialog__message-header",
                  weight: "bold",
                },
                o.createElement(d.Localize, { i18n_default_text: "Success!" })
              ),
              o.createElement(rt, { prev: a, current: t })
            ),
            o.createElement(
              "div",
              { className: "status-dialog__footer" },
              o.createElement(u.Button, {
                onClick: r,
                text: (0, d.localize)("Deposit now"),
                primary: !0,
              }),
              o.createElement(u.Button, {
                onClick: n,
                text: (0, d.localize)("Maybe later"),
                secondary: !0,
              })
            )
          );
        };
      const ot = o.memo(at);
      var it = function (e) {
          switch (e.code) {
            case "InvalidPhone":
              return o.createElement(
                u.Text,
                { as: "h1", align: "center", weight: "bold" },
                o.createElement(d.Localize, {
                  i18n_default_text: "Let’s try that again",
                })
              );
            case "DuplicateAccount":
              return o.createElement(
                u.Text,
                { as: "h1", align: "center", weight: "bold" },
                o.createElement(d.Localize, {
                  i18n_default_text: "Already signed up?",
                })
              );
            default:
              return o.createElement(
                u.Text,
                { as: "h1", align: "center", weight: "bold" },
                o.createElement(d.Localize, {
                  i18n_default_text: "Something’s not right",
                })
              );
          }
        },
        ct = function (e) {
          var t = e.code,
            n = e.message;
          switch (t) {
            case "DuplicateAccount":
              return o.createElement(
                "p",
                null,
                o.createElement(d.Localize, {
                  i18n_default_text:
                    "An account with your details already exists.",
                }),
                o.createElement("br", null),
                o.createElement(d.Localize, {
                  i18n_default_text:
                    "If you're having trouble signing in, let us know via <0>chat</0>",
                  components: [
                    o.createElement("span", {
                      className: "chat-inline",
                      key: 0,
                      onClick: function () {
                        return window.LC_API.open_chat_window();
                      },
                    }),
                  ],
                })
              );
            default:
              return o.createElement("p", null, n);
          }
        },
        lt = function (e) {
          var t = e.text,
            n = e.onConfirm;
          return o.createElement(
            u.Button,
            { primary: !0, onClick: n, large: !0 },
            t
          );
        },
        st = function (e) {
          var t = e.code,
            n = e.onConfirm;
          switch (t) {
            case "CurrencyTypeNotAllowed":
              return o.createElement(lt, {
                text: (0, d.localize)("Try a different currency"),
                onConfirm: n,
              });
            case "InvalidPhone":
              return o.createElement(lt, {
                text: (0, d.localize)("Try a different phone number"),
                onConfirm: n,
              });
            case "DuplicateAccount":
              return null;
            default:
              return o.createElement(
                u.StaticUrl,
                {
                  href: "help-centre",
                  type: "button",
                  className: "dc-btn dc-btn--primary",
                },
                o.createElement(
                  u.Text,
                  { weight: "bold", color: "white", size: "xxs" },
                  o.createElement(d.Localize, { i18n_default_text: "OK" })
                )
              );
          }
        },
        ut = function (e) {
          var t = e.message,
            n = e.code,
            r = e.onConfirm;
          return o.createElement(
            "div",
            { className: "account-wizard--error" },
            o.createElement(u.Icon, { icon: "IcAccountError", size: 115 }),
            o.createElement(it, { code: n }),
            o.createElement(ct, { code: n, message: t }),
            o.createElement(st, { code: n, onConfirm: r })
          );
        };
      ut.propTypes = {
        code: a().string,
        message: a().string,
        onConfirm: a().func,
      };
      const _t = ut;
      var dt = n(78568),
        mt = function (e) {
          var t = e.status;
          return o.createElement(
            u.Text,
            {
              as: "h2",
              align: "center",
              className: "status-dialog__message-header",
              weight: "bold",
            },
            t === dt.FX.SUCCESS &&
              o.createElement(d.Localize, {
                i18n_default_text: "Your account is ready",
              }),
            t === dt.FX.WARN &&
              o.createElement(d.Localize, {
                i18n_default_text: "Please verify your address",
              }),
            t === dt.FX.DANGER &&
              o.createElement(d.Localize, {
                i18n_default_text: "Please verify your identity and address",
              }),
            t === dt.FX.PENDING &&
              o.createElement(d.Localize, {
                i18n_default_text: "We're processing your personal information",
              })
          );
        },
        pt = function (e) {
          var t = e.status;
          switch (e.landing_company_shortcode) {
            case "iom":
              return o.createElement(mt, { status: t });
            default:
              return o.createElement(
                u.Text,
                {
                  as: "h2",
                  align: "center",
                  className: "status-dialog__message-header",
                  weight: "bold",
                },
                o.createElement(d.Localize, {
                  i18n_default_text: "Your account is ready",
                })
              );
          }
        };
      pt.propTypes = {
        status: a().number.isRequired,
        landing_company_shortcode: a().string.isRequired,
      };
      var ft = function (e) {
        var t = e.status,
          n = void 0 === t ? dt.FX.SUCCESS : t,
          r = "";
        if ("maltainvest" === e.landing_company_shortcode)
          r = o.createElement(d.Localize, {
            i18n_default_text:
              "We need proofs of your identity and address before you can start trading.",
          });
        else
          switch (n) {
            case dt.FX.WARN:
              r = o.createElement(d.Localize, {
                i18n_default_text:
                  "To get trading, please confirm where you live.",
              });
              break;
            case dt.FX.DANGER:
              r = o.createElement(d.Localize, {
                i18n_default_text:
                  "To get trading, please confirm who you are, and where you live.",
              });
              break;
            case dt.FX.PENDING:
              r = o.createElement(d.Localize, {
                i18n_default_text:
                  "You'll be able to get trading as soon as verification is complete.",
              });
              break;
            default:
              r = o.createElement(d.Localize, {
                i18n_default_text: "Fund your account to start trading.",
              });
          }
        return o.createElement(
          u.Text,
          {
            as: "p",
            align: "center",
            className: "status-dialog__message-text",
            color: "general",
            size: "xs",
          },
          r
        );
      };
      ft.propTypes = {
        currency: a().string,
        is_isle_of_man_residence: a().bool,
        landing_company_shortcode: a().string,
        status: a().number,
      };
      var gt = function (e) {
          var t = (function (e) {
              var t = e.status,
                n = e.landing_company_shortcode,
                r = e.closeModal,
                a = e.closeModalAndOpenCashier,
                o = e.closeModalAndOpenPOI,
                i = e.closeModalAndOpenPOA;
              switch (n) {
                case "iom":
                  return t === dt.FX.DANGER
                    ? { label: (0, d.localize)("Submit proofs"), action: o }
                    : t === dt.FX.WARN
                    ? { label: (0, d.localize)("Submit proof"), action: i }
                    : t === dt.FX.PENDING
                    ? { label: (0, d.localize)("OK"), action: r }
                    : { label: (0, d.localize)("Deposit now"), action: a };
                case "maltainvest":
                  return { label: (0, d.localize)("Submit proof"), action: o };
                case "svg":
                case "malta":
                default:
                  return { label: (0, d.localize)("Deposit now"), action: a };
              }
            })({
              status: e.status,
              landing_company_shortcode: e.landing_company_shortcode,
              closeModal: e.closeModal,
              closeModalAndOpenCashier: e.closeModalAndOpenCashier,
              closeModalAndOpenPOI: e.closeModalAndOpenPOI,
              closeModalAndOpenPOA: e.closeModalAndOpenPOA,
            }),
            n = t.label,
            r = t.action;
          return o.createElement(u.Button, {
            primary: !0,
            text: n,
            onClick: r,
          });
        },
        ht = function (e) {
          var t = e.status,
            n = e.landing_company_shortcode,
            r = e.closeModal,
            a = e.switchToVirtual;
          if (e.is_bypassed) return null;
          var i = (function (e) {
              var t = e.status,
                n = e.landing_company_shortcode,
                r = e.closeModal,
                a = e.switchToVirtual;
              switch (n) {
                case "iom":
                  return t === dt.FX.SUCCESS
                    ? { label: (0, d.localize)("Maybe later"), action: r }
                    : t === dt.FX.WARN
                    ? {
                        label: (0, d.localize)("Trade on demo"),
                        action: function () {
                          r(), a();
                        },
                      }
                    : { label: (0, d.localize)("Maybe later"), action: r };
                default:
                  return { label: (0, d.localize)("Maybe later"), action: r };
              }
            })({
              status: t,
              landing_company_shortcode: n,
              closeModal: r,
              switchToVirtual: a,
            }),
            c = i.label,
            l = i.action;
          return o.createElement(u.Button, {
            secondary: !0,
            text: c,
            onClick: l,
          });
        },
        yt = function (e) {
          var t = e.status,
            n = e.landing_company_shortcode,
            r = e.closeModal,
            a = e.closeModalAndOpenCashier,
            i = e.closeModalAndOpenPOA,
            c = e.closeModalAndOpenPOI,
            l = e.switchToVirtual;
          return o.createElement(
            "div",
            { className: "status-dialog__footer" },
            o.createElement(ht, {
              closeModal: r,
              is_bypassed: t === dt.FX.PENDING,
              status: t,
              landing_company_shortcode: n,
              switchToVirtual: l,
            }),
            o.createElement(gt, {
              status: t,
              landing_company_shortcode: n,
              closeModal: r,
              closeModalAndOpenCashier: a,
              closeModalAndOpenPOI: c,
              closeModalAndOpenPOA: i,
            })
          );
        };
      yt.propTypes = {
        status: a().number,
        landing_company_shortcode: a().string,
        closeModal: a().func,
        closeModalAndOpenCashier: a().func,
        closeModalAndOpenPOI: a().func,
        switchToVirtual: a().func,
      };
      var bt = function (e) {
          var t = e.currency;
          return o.createElement(u.Icon, {
            icon: "IcCurrency-".concat(t.toLowerCase()),
            size: 120,
          });
        },
        vt = function (e) {
          var t = e.className;
          return o.createElement(u.Icon, {
            className: t,
            icon: "IcCheckmarkCircle",
            color: "green",
            size: 24,
          });
        },
        Et = function (e) {
          var t = e.className;
          return o.createElement(u.Icon, {
            className: t,
            icon: "IcAlertDanger",
            size: 24,
          });
        },
        wt = function (e) {
          var t = e.className;
          return o.createElement(u.Icon, {
            className: t,
            icon: "IcCrossCircle",
            size: 24,
            color: "red",
          });
        },
        St = function (e) {
          var t = e.closeModal;
          return o.createElement(
            "div",
            { onClick: t, className: "status-dialog__close" },
            o.createElement(u.Icon, { icon: "IcCross" })
          );
        },
        At = function (e) {
          var t = e.closeModal,
            n = e.currency,
            r = e.history,
            a = e.icon_size,
            i = e.is_age_verified,
            c = e.is_belgium_residence,
            l = e.is_fully_authenticated,
            s = e.is_isle_of_man_residence,
            d = e.landing_company_shortcode,
            m = e.switchToVirtual,
            p = function () {
              return (0, dt.Sj)({
                landing_company_shortcode: d,
                is_fully_authenticated: l,
                is_age_verified: i,
                is_isle_of_man_residence: s,
                is_belgium_residence: c,
              });
            };
          return o.createElement(
            u.Div100vhContainer,
            {
              className: "status-dialog",
              is_disabled: (0, _.isDesktop)(),
              height_offset: "40px",
            },
            (0, _.isDesktop)() && o.createElement(St, { closeModal: t }),
            o.createElement(
              "div",
              {
                className: A()("status-dialog__header", {
                  "status-dialog__header--large": "large" === a,
                  "status-dialog__header--xlarge": "xlarge" === a,
                }),
              },
              o.createElement(bt, { currency: n }),
              p() === dt.FX.SUCCESS &&
                o.createElement(vt, { className: "bottom-right-overlay" }),
              p() === dt.FX.WARN &&
                o.createElement(Et, { className: "bottom-right-overlay" }),
              p() === dt.FX.DANGER &&
                o.createElement(wt, { className: "bottom-right-overlay" })
            ),
            o.createElement(
              "div",
              {
                className: A()("status-dialog__body", {
                  "status-dialog__body--no-grow": (0, _.isMobile)(),
                }),
              },
              o.createElement(pt, {
                status: p(),
                landing_company_shortcode: d,
              }),
              o.createElement(ft, {
                status: p(),
                landing_company_shortcode: d,
                currency: n,
              })
            ),
            o.createElement(yt, {
              landing_company_shortcode: d,
              status: p(),
              closeModal: t,
              closeModalAndOpenPOI: function () {
                t(), r.push(_.routes.proof_of_identity);
              },
              closeModalAndOpenPOA: function () {
                t(), r.push(_.routes.proof_of_address);
              },
              closeModalAndOpenCashier: function () {
                t(), r.push(_.routes.cashier_deposit);
              },
              switchToVirtual: m,
            })
          );
        };
      (At.defaultProps = { icon_size: "large" }),
        (At.propTypes = {
          currency: a().string,
          closeModal: a().func,
          icon: a().object,
          icon_size: a().string,
          is_isle_of_man_residence: a().bool,
          is_belgium_residence: a().bool,
        });
      const xt = (0, g.$j)(function (e) {
        var t = e.client;
        return {
          landing_company_shortcode: t.landing_company_shortcode,
          is_fully_authenticated: t.is_fully_authenticated,
          is_age_verified: t.is_age_verified,
          is_isle_of_man_residence: "im" === t.residence,
          is_belgium_residence: "be" === t.residence,
          switchToVirtual: function () {
            return t.switchAccount(t.virtual_account_loginid);
          },
        };
      })((0, x.withRouter)(At));
      function zt(e) {
        return (zt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Tt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Ct(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Ct(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ct(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var kt = 0,
        Nt = 1,
        Ot = 2,
        It = 3,
        Mt = 4,
        Dt = 5,
        Pt = function (e) {
          var t = e.real_account_signup_target,
            n = e.currency,
            r = e.is_isle_of_man_residence,
            a = e.is_belgium_residence;
          if (!n && "maltainvest" !== t)
            return o.createElement(d.Localize, {
              i18n_default_text: "Set a currency for your real account",
            });
          if (("malta" === t && a) || "deposit_cash" === t)
            return o.createElement(d.Localize, {
              i18n_default_text: "Add a Deriv Synthetic account",
            });
          if ("iom" === t && r)
            return o.createElement(d.Localize, {
              i18n_default_text: "Add a Deriv account",
            });
          switch (t) {
            case "malta":
            case "iom":
              return o.createElement(d.Localize, {
                i18n_default_text: "Add a Deriv Synthetic Indices account",
              });
            case "maltainvest":
              return o.createElement(d.Localize, {
                i18n_default_text: "Add a Deriv Financial account",
              });
            case "samoa":
              return o.createElement(d.Localize, {
                i18n_default_text: "Terms of use",
              });
            default:
              return o.createElement(d.Localize, {
                i18n_default_text: "Add a Deriv account",
              });
          }
        };
      const jt = (0, g.$j)(function (e) {
        var t = e.ui,
          n = e.client,
          r = e.common;
        return {
          has_real_account: n.has_active_real_account,
          currency: n.currency,
          is_eu: n.is_eu,
          is_real_acc_signup_on: t.is_real_acc_signup_on,
          real_account_signup_target: t.real_account_signup_target,
          closeRealAccountSignup: t.closeRealAccountSignup,
          toggleWelcomeModal: t.toggleWelcomeModal,
          setParams: t.setRealAccountSignupParams,
          residence: n.residence,
          is_isle_of_man_residence: "im" === n.residence,
          is_belgium_residence: "be" === n.residence,
          state_value: t.real_account_signup,
          routing_history: r.app_routing_history,
          has_fiat: n.has_fiat,
          available_crypto_currencies: n.available_crypto_currencies,
        };
      })(
        (0, x.withRouter)(function (e) {
          var t = e.closeRealAccountSignup,
            n = e.currency,
            r = e.has_real_account,
            a = e.history,
            i = e.is_belgium_residence,
            c = e.is_isle_of_man_residence,
            l = e.is_eu,
            s = e.is_real_acc_signup_on,
            m = e.real_account_signup_target,
            p = e.routing_history,
            f = e.setParams,
            g = e.state_index,
            h = e.state_value,
            y = e.toggleWelcomeModal,
            b = e.has_fiat,
            v = e.available_crypto_currencies,
            E = Tt(o.useState(null), 2),
            w = E[0],
            S = E[1],
            x = Tt(o.useState(!1), 2),
            z = x[0],
            T = x[1],
            C = Tt(o.useState(null), 2),
            k = C[0],
            N = C[1],
            O = Tt(
              o.useState([
                {
                  action: "signup",
                  body: function (e) {
                    return o.createElement(je, {
                      onFinishSuccess: I,
                      onOpenWelcomeModal: M,
                      is_loading: e.is_loading,
                      setLoading: j,
                      onError: L,
                      onClose: R,
                    });
                  },
                  title: Pt,
                },
                {
                  action: "multi",
                  body: function (e) {
                    return o.createElement(Qe, {
                      onSuccessSetAccountCurrency: P,
                      is_loading: e.is_loading,
                      setLoading: j,
                      onError: L,
                    });
                  },
                  title: function (e) {
                    var t;
                    return e.has_fiat &&
                      0 ===
                        (null === (t = e.available_crypto_currencies) ||
                        void 0 === t
                          ? void 0
                          : t.length)
                      ? (0, d.localize)("Manage account")
                      : (0, d.localize)("Add or manage account");
                  },
                },
                {
                  body: function (e) {
                    return o.createElement(ot, {
                      prev: e.state_value.previous_currency,
                      current: e.state_value.current_currency,
                      onCancel: R,
                      onSubmit: D,
                    });
                  },
                  title: function (e) {
                    var t;
                    return e.has_fiat &&
                      0 ===
                        (null === (t = e.available_crypto_currencies) ||
                        void 0 === t
                          ? void 0
                          : t.length)
                      ? (0, d.localize)("Manage account")
                      : (0, d.localize)("Add or manage account");
                  },
                },
                {
                  body: function (e) {
                    return o.createElement(xt, {
                      currency: e.state_value.currency,
                      closeModal: R,
                    });
                  },
                },
                {
                  body: function (e) {
                    return o.createElement(nt, {
                      is_loading: e.is_loading,
                      setLoading: j,
                      onError: L,
                      onClose: R,
                      onSuccessSetAccountCurrency: P,
                    });
                  },
                  title: Pt,
                },
                {
                  body: function (e) {
                    return o.createElement(_t, {
                      message: e.state_value.error_message,
                      code: e.state_value.error_code,
                      onConfirm: F,
                    });
                  },
                  title: function () {
                    return (0, d.localize)("Add a real account");
                  },
                },
              ]),
              1
            )[0],
            I = function (e) {
              f({ active_modal_index: It, currency: e });
            },
            M = function (e) {
              t(),
                setTimeout(function () {
                  y({ is_visible: !0, should_persist: !0 });
                }, 300),
                f({ currency: e });
            },
            D = function () {
              t(), a.push(_.routes.cashier_deposit);
            },
            P = function (e, t) {
              f({
                previous_currency: e,
                current_currency: t,
                active_modal_index: Ot,
              });
            },
            j = function (e) {
              T(e);
            },
            L = function (e, t) {
              var n;
              t &&
                (function (e) {
                  localStorage.setItem(
                    "real_account_signup_wizard",
                    JSON.stringify(
                      e.map(function (e) {
                        return "object" === zt(e.form_value) && e.form_value;
                      })
                    )
                  );
                })(t),
                S(null === (n = O[W()]) || void 0 === n ? void 0 : n.action),
                N(e);
            };
          o.useEffect(
            function () {
              k &&
                f({
                  active_modal_index: Dt,
                  error_message: k.message,
                  error_code: k.code,
                });
            },
            [k]
          );
          var R = function (e) {
              "noopener noreferrer" ===
                (null == e ? void 0 : e.target.getAttribute("rel")) ||
                (null != e && e.target.closest(".redirect-notice")) ||
                (null != e && e.target.closest(".dc-popover__bubble")) ||
                (W() !== It &&
                  (sessionStorage.removeItem("post_real_account_signup"),
                  localStorage.removeItem("real_account_signup_wizard")),
                t(),
                (0, _.isNavigationFromPlatform)(p, _.routes.smarttrader) &&
                  (window.location = _.routes.smarttrader));
            },
            F = function () {
              f({ active_modal_index: "multi" === w ? Nt : kt });
            },
            W = function () {
              return -1 === h.active_modal_index
                ? r && n && "manage" === m
                  ? Nt
                  : n
                  ? kt
                  : Mt
                : h.active_modal_index;
            },
            U = O[W()],
            B = U.title,
            $ = U.body,
            Z = Ot,
            V = It,
            H = Dt,
            X = [kt, Nt, Mt, H].includes(W());
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              u.DesktopWrapper,
              null,
              o.createElement(
                u.Modal,
                {
                  id: "real_account_signup_modal",
                  className: A()("real-account-signup-modal", {
                    "dc-modal__container_real-account-signup-modal--error":
                      W() === H,
                    "dc-modal__container_real-account-signup-modal--success": [
                      Z,
                      V,
                    ].includes(W()),
                  }),
                  is_open: s,
                  has_close_icon: "samoa" !== m,
                  is_title_centered: "samoa" === m,
                  renderTitle: function () {
                    return B && ![Z, V].includes(W())
                      ? o.createElement(B, {
                          real_account_signup_target: m,
                          currency: n,
                          is_isle_of_man_residence: c,
                          is_belgium_residence: i,
                          is_eu: l,
                          has_fiat: b,
                          available_crypto_currencies: v,
                        })
                      : null;
                  },
                  toggleModal: R,
                  height:
                    W() === It
                      ? "auto"
                      : n
                      ? r && n
                        ? l && W() === Nt
                          ? "420px"
                          : W() === Ot
                          ? "auto"
                          : "644px"
                        : "740px"
                      : "688px",
                  width: X ? "904px" : "auto",
                },
                s &&
                  o.createElement($, {
                    state_value: h,
                    passthrough: g,
                    is_loading: z,
                  })
              )
            ),
            o.createElement(
              u.MobileWrapper,
              null,
              o.createElement(
                u.MobileDialog,
                {
                  portal_element_id: "modal_root",
                  wrapper_classname: "account-signup-mobile-dialog",
                  visible: s,
                  onClose: R,
                  renderTitle: function () {
                    return B
                      ? o.createElement(B, {
                          real_account_signup_target: m,
                          currency: n,
                          is_isle_of_man_residence: c,
                          is_belgium_residence: i,
                        })
                      : null;
                  },
                },
                s &&
                  o.createElement($, {
                    state_value: h,
                    passthrough: g,
                    is_loading: z,
                  })
              )
            )
          );
        })
      );
      var Lt = function (e) {
        var t = e.is_visible,
          n = e.is_virtual,
          r = e.setCurrency,
          a = e.toggleModal;
        return o.createElement(
          u.Modal,
          {
            id: "dt_set_account_currency_modal",
            has_close_icon: !1,
            is_open: t,
            small: !0,
            toggleModal: a,
            title: (0, d.localize)("You have an account that needs action"),
          },
          o.createElement(
            u.Modal.Body,
            null,
            (0, d.localize)(
              "Please set a currency for your existing real account before creating another account."
            )
          ),
          o.createElement(
            u.Modal.Footer,
            null,
            n
              ? o.createElement(u.Button, {
                  has_effect: !0,
                  text: (0, d.localize)("OK"),
                  onClick: a,
                  primary: !0,
                })
              : o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(u.Button, {
                    has_effect: !0,
                    text: (0, d.localize)("Cancel"),
                    onClick: a,
                    secondary: !0,
                  }),
                  o.createElement(u.Button, {
                    has_effect: !0,
                    text: (0, d.localize)("Set currency"),
                    onClick: function () {
                      a(),
                        setTimeout(function () {
                          r();
                        }, 250);
                    },
                    primary: !0,
                  })
                )
          )
        );
      };
      Lt.propTypes = {
        is_virtual: a().bool,
        is_visible: a().bool,
        setCurrency: a().func,
        toggleModal: a().func,
      };
      const Rt = (0, g.$j)(function (e) {
        var t = e.client,
          n = e.ui;
        return {
          is_virtual: t.is_virtual,
          toggleModal: n.toggleSetCurrencyModal,
          setCurrency: n.openRealAccountSignup,
          is_visible: n.is_set_currency_modal_visible,
        };
      })(Lt);
      const Ft = function (e) {
        var t = e.onUpdate;
        return (
          o.useEffect(function () {
            var e = function () {
                document.removeEventListener("UpdateAvailable", t);
              },
              n = function () {
                document.addEventListener("UpdateAvailable", t);
              };
            return (
              document.addEventListener("UpdateAvailable", t),
              document.addEventListener("IgnorePWAUpdate", e),
              document.addEventListener("ListenPWAUpdate", n),
              function () {
                document.removeEventListener("IgnorePWAUpdate", e),
                  document.removeEventListener("ListenPWAUpdate", n),
                  document.removeEventListener("UpdateAvailable", t);
              }
            );
          }, []),
          null
        );
      };
      var Wt = n(57798),
        Ut = n(95857),
        Bt = n(37781),
        $t = n(56609);
      function Zt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Vt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Vt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Vt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      const Ht = (0, g.$j)(function (e) {
        var t = e.client;
        return { balance: t.balance, currency: t.currency };
      })(function (e) {
        var t = e.balance,
          n = e.currency,
          r = Zt(o.useState(!1), 2),
          a = r[0],
          i = r[1];
        o.useEffect(function () {
          window.toggleTempAppSettings = function () {
            return i(!a);
          };
        }, []);
        var c = [
            {
              key: "trading_limits",
              title: (0, d.localize)("Trading limits"),
              component: $t.t6,
            },
            {
              key: "account_limits",
              title: (0, d.localize)("Account limits"),
              component: $t.J0,
            },
            {
              key: "api_token",
              title: (0, d.localize)("API Token"),
              component: $t.pQ,
            },
          ],
          l = function () {
            return i(!a);
          };
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(u.Popup, {
            active_tab_icon_color: "var(--text-general)",
            balance: parseFloat(t),
            close_icon_color: "var(--text-general)",
            Component: function (e) {
              var t = e.overlay_ref,
                n = e.setIsOverlayShown;
              return o.createElement(u.AppSettings, {
                menu_items: c,
                overlay_ref: t,
                setIsOverlayShown: n,
              });
            },
            currency: n,
            header_backgound_color: "var(--general-section-1)",
            header_big_text: (0, d.localize)("Settings"),
            header_contents_color: "var(--text-general)",
            header_icon: "IcBrandDerivApps",
            onHeaderButtonClick: l,
            should_show_popup: a,
            title: "Deriv Apps USD",
            togglePopupModal: l,
          })
        );
      });
      var Xt = function (e) {
        var t,
          n = e.acc_switcher_disabled_message,
          r = e.account_status,
          a = e.addNotificationMessage,
          i = e.should_allow_authentication,
          c = e.app_routing_history,
          l = e.balance,
          s = e.currency,
          d = e.disableApp,
          m = e.enableApp,
          p = e.header_extension,
          f = e.history,
          g = e.is_mf,
          h = e.is_acc_switcher_disabled,
          y = e.is_acc_switcher_on,
          b = e.is_app_disabled,
          v = e.is_dark_mode,
          E = e.is_logged_in,
          w = e.is_logging_in,
          S = e.is_mt5_allowed,
          x = e.is_dxtrade_allowed,
          z = e.is_notifications_visible,
          T = e.is_p2p_enabled,
          C = e.is_payment_agent_transfer_visible,
          k = e.is_onramp_tab_visible,
          N = e.is_payment_agent_visible,
          O = e.is_route_modal_on,
          I = e.is_virtual,
          M = e.location,
          D = e.logoutClient,
          P = e.menu_items,
          j = e.needs_financial_assessment,
          L = e.notifications_count,
          R = e.openRealAccountSignup,
          F = e.is_options_blocked,
          W = e.removeNotificationMessage,
          U = e.setDarkMode,
          B = e.toggleAccountsDialog,
          $ = e.toggleNotifications,
          H = o.useRef(null),
          X = o.useCallback(
            function () {
              return W({ key: "new_version_available" });
            },
            [W]
          );
        o.useEffect(
          function () {
            return (
              document.addEventListener("IgnorePWAUpdate", X),
              function () {
                return document.removeEventListener("IgnorePWAUpdate", X);
              }
            );
          },
          [X]
        );
        var G = function (e) {
          return e.filter(function (e) {
            return e.link_to === _.routes.mt5
              ? !E || S
              : e.link_to === _.routes.dxtrade
              ? x
              : (!g && !F) || e.href !== _.routes.smarttrader;
          });
        };
        return o.createElement(
          "header",
          { className: A()("header", { "header--is-disabled": b || O }) },
          o.createElement(
            "div",
            { className: "header__menu-items" },
            o.createElement(
              "div",
              { className: "header__menu-left" },
              o.createElement(
                u.DesktopWrapper,
                null,
                o.createElement(Z.Ls, {
                  app_routing_history: c,
                  platform_config: G(V),
                })
              ),
              o.createElement(
                u.MobileWrapper,
                null,
                o.createElement(Ut.Z, {
                  ref: H,
                  should_allow_authentication: i,
                  account_status: r,
                  enableApp: m,
                  disableApp: d,
                  location: M,
                  logoutClient: D,
                  is_dark_mode: v,
                  is_logged_in: E,
                  is_p2p_enabled: T,
                  is_payment_agent_transfer_visible: C,
                  is_onramp_tab_visible: k,
                  is_payment_agent_visible: N,
                  is_virtual: I,
                  needs_financial_assessment: j,
                  toggleTheme: U,
                  platform_header: (0, _.getPlatformInformation)(c).header,
                  platform_switcher: o.createElement(Z.Ls, {
                    app_routing_history: c,
                    is_mobile: !0,
                    platform_config: G(V),
                    toggleDrawer:
                      null === (t = H.current) || void 0 === t
                        ? void 0
                        : t.toggleDrawer,
                  }),
                }),
                p &&
                  E &&
                  o.createElement(
                    "div",
                    { className: "header__menu-left-extensions" },
                    p
                  )
              ),
              o.createElement(Z.IV, { is_logged_in: E, items: P })
            ),
            o.createElement(
              "div",
              {
                className: A()("header__menu-right", {
                  "header__menu-right--hidden": (0, _.isMobile)() && w,
                }),
              },
              w &&
                o.createElement(
                  "div",
                  {
                    id: "dt_core_header_acc-info-preloader",
                    className: A()("acc-info__preloader", {
                      "acc-info__preloader--no-currency": !s,
                      "acc-info__preloader--is-crypto":
                        (0, _.getDecimalPlaces)(s) > 2,
                    }),
                  },
                  o.createElement(Bt.vN, {
                    is_logged_in: E,
                    is_mobile: (0, _.isMobile)(),
                    speed: 3,
                  })
                ),
              o.createElement(
                "div",
                {
                  id: "dt_core_header_acc-info-container",
                  className: "acc-info__container",
                },
                o.createElement(Z.bF, {
                  acc_switcher_disabled_message: n,
                  balance: l,
                  currency: s,
                  disableApp: d,
                  enableApp: m,
                  is_acc_switcher_on: y,
                  is_acc_switcher_disabled: h,
                  is_notifications_visible: z,
                  is_logged_in: E,
                  is_virtual: I,
                  onClickDeposit: function () {
                    return f.push(_.routes.cashier_deposit);
                  },
                  notifications_count: L,
                  toggleAccountsDialog: B,
                  toggleNotifications: $,
                  openRealAccountSignup: R,
                })
              )
            )
          ),
          o.createElement(jt, null),
          o.createElement(Rt, null),
          o.createElement(Ft, {
            onUpdate: function () {
              return a((0, Wt.G$)().new_version_available);
            },
          }),
          o.createElement(Ht, null)
        );
      };
      Xt.propTypes = {
        acc_switcher_disabled_message: a().string,
        should_allow_authentication: a().bool,
        account_status: a().object,
        addNotificationMessage: a().func,
        app_routing_history: a().array,
        balance: a().string,
        currency: a().string,
        disableApp: a().func,
        enableApp: a().func,
        header_extension: a().any,
        is_acc_switcher_disabled: a().bool,
        is_acc_switcher_on: a().bool,
        is_app_disabled: a().bool,
        is_dark_mode: a().bool,
        is_loading: a().bool,
        is_logged_in: a().bool,
        is_logging_in: a().bool,
        is_mt5_allowed: a().bool,
        is_dxtrade_allowed: a().bool,
        is_notifications_visible: a().bool,
        is_route_modal_on: a().bool,
        is_virtual: a().bool,
        logoutClient: a().func,
        needs_financial_assessment: a().bool,
        notifications_count: a().number,
        openRealAccountSignup: a().func,
        removeNotificationMessage: a().func,
        setDarkMode: a().func,
        toggleAccountsDialog: a().func,
        toggleNotifications: a().func,
      };
      const Gt = (0, g.$j)(function (e) {
        var t = e.client,
          n = e.common,
          r = e.ui,
          a = e.menu,
          o = e.modules;
        return {
          acc_switcher_disabled_message: r.account_switcher_disabled_message,
          account_status: t.account_status,
          should_allow_authentication: t.should_allow_authentication,
          addNotificationMessage: r.addNotificationMessage,
          app_routing_history: n.app_routing_history,
          balance: t.balance,
          is_mf: "maltainvest" === t.landing_company_shortcode,
          currency: t.currency,
          disableApp: r.disableApp,
          enableApp: r.enableApp,
          header_extension: r.header_extension,
          is_acc_switcher_disabled: r.is_account_switcher_disabled,
          is_acc_switcher_on: !!r.is_accounts_switcher_on,
          is_app_disabled: r.is_app_disabled,
          is_dark_mode: r.is_dark_mode_on,
          is_loading: r.is_loading,
          is_logged_in: t.is_logged_in,
          is_logging_in: t.is_logging_in,
          is_mt5_allowed: t.is_mt5_allowed,
          is_dxtrade_allowed: t.is_dxtrade_allowed,
          is_notifications_visible: r.is_notifications_visible,
          is_p2p_enabled: o.cashier.is_p2p_enabled,
          is_payment_agent_transfer_visible:
            o.cashier.is_payment_agent_transfer_visible,
          is_onramp_tab_visible: o.cashier.onramp.is_onramp_tab_visible,
          is_payment_agent_visible: o.cashier.is_payment_agent_visible,
          is_route_modal_on: r.is_route_modal_on,
          is_virtual: t.is_virtual,
          logoutClient: t.logout,
          menu_items: a.extensions,
          needs_financial_assessment: t.needs_financial_assessment,
          notifications_count: r.filtered_notifications.length,
          openRealAccountSignup: r.openRealAccountSignup,
          is_options_blocked: t.is_options_blocked,
          removeNotificationMessage: r.removeNotificationMessage,
          setDarkMode: r.setDarkMode,
          toggleAccountsDialog: r.toggleAccountsDialog,
          toggleNotifications: r.toggleNotificationsModal,
        };
      })((0, x.withRouter)(Xt));
      var Yt = n(32577),
        Kt = function () {
          return o.createElement("div", {
            className: "dashboard-platform-header__divider",
          });
        },
        qt = function () {
          var e = (0, x.useHistory)();
          return o.createElement(
            "div",
            {
              className: "dashboard-platform-header__my-apps",
              onClick: function () {
                return e.push(_.routes.dashboard);
              },
            },
            o.createElement(u.Icon, { icon: "IcWalletMyApps", size: 16 }),
            o.createElement(
              u.Text,
              {
                size: "s",
                line_height: "xxl",
                weight: "bold",
                className: "dashboard-platform-header__my-apps--title",
              },
              (0, d.localize)("My apps")
            ),
            o.createElement(Kt, null)
          );
        },
        Jt = function (e) {
          var t = e.app_routing_history;
          return o.createElement(
            "div",
            { className: "dashboard-platform-header__platform-information" },
            o.createElement(u.Icon, {
              className:
                "dashboard-platform-header__platform-information--icon",
              icon: (0, _.getPlatformInformation)(t).icon,
              size: 24,
            }),
            o.createElement(
              u.Text,
              { size: "s", weight: "bold", line_height: "xxl" },
              (0, _.getPlatformInformation)(t).header
            )
          );
        },
        Qt = function () {
          return o.createElement(
            "div",
            { className: "dashboard-platform-header__report" },
            o.createElement(
              Yt.CG,
              {
                id: "db_reports_tab",
                key: "db_reports_tab",
                to: _.routes.reports,
              },
              o.createElement(u.Icon, { icon: "IcReports", size: 20 })
            )
          );
        },
        en = function (e) {
          var t = e.is_notifications_visible,
            n = e.notifications_count,
            r = e.toggleNotifications;
          return o.createElement(
            "div",
            { className: "dashboard-platform-header__notification" },
            o.createElement(Z.Rv, {
              count: n,
              is_visible: t,
              toggleDialog: r,
              tooltip_message: o.createElement(d.Localize, {
                i18n_default_text: "View notifications",
              }),
            })
          );
        },
        tn = function (e) {
          var t = e.toggleSettings;
          return o.createElement(
            "div",
            { className: "dashboard-platform-header__setting" },
            o.createElement(
              u.Popover,
              { alignment: "top" },
              o.createElement(
                "a",
                {
                  id: "dt_settings_toggle",
                  onClick: t,
                  className: "dashboard-platform-header__setting--icon",
                },
                o.createElement(u.Icon, { icon: "IcGearLight", size: 22 })
              )
            )
          );
        },
        nn = function (e) {
          var t = e.balance,
            n = e.currency;
          return o.createElement(
            "div",
            { className: "dashboard-platform-header__balance" },
            o.createElement(Kt, null),
            o.createElement(u.Icon, {
              icon: "IcWalletDerivApps",
              size: 28,
              className: "dashboard-platform-header__balance--icon",
            }),
            o.createElement(
              u.Text,
              {
                size: "s",
                line_height: "xxl",
                weight: "bold",
                color: "profit-success",
              },
              o.createElement(u.Money, {
                amount: t,
                currency: n,
                show_currency: !0,
              })
            )
          );
        },
        rn = function (e) {
          var t,
            n,
            r = e.account_status,
            a = e.app_routing_history,
            i = e.balance,
            c = e.currency,
            l = e.disableApp,
            s = e.enableApp,
            m = e.header_extension,
            p = e.is_dark_mode,
            f = e.is_logged_in,
            g = e.is_mt5_allowed,
            h = e.is_notifications_visible,
            y = e.is_onramp_tab_visible,
            b = e.is_p2p_enabled,
            v = e.is_payment_agent_transfer_visible,
            E = e.is_payment_agent_visible,
            w = e.is_settings_modal_on,
            S = e.is_virtual,
            A = e.location,
            z = e.logoutClient,
            T = e.needs_financial_assessment,
            C = e.notifications_count,
            k = e.setDarkMode,
            N = e.settings_extension,
            O = e.should_allow_authentication,
            I = e.toggleNotifications,
            M = e.toggleSettingsModal,
            D = o.useRef(null),
            P = (0, x.useHistory)();
          return o.createElement(
            "header",
            { className: "dashboard-platform-header" },
            o.createElement(
              "div",
              { className: "dashboard-platform-header__menu-left" },
              o.createElement(
                u.MobileWrapper,
                null,
                o.createElement(Ut.Z, {
                  ref: D,
                  should_allow_authentication: O,
                  account_status: r,
                  enableApp: s,
                  disableApp: l,
                  location: A,
                  logoutClient: z,
                  is_dark_mode: p,
                  is_logged_in: f,
                  is_p2p_enabled: b,
                  is_payment_agent_transfer_visible: v,
                  is_onramp_tab_visible: y,
                  is_payment_agent_visible: E,
                  is_virtual: S,
                  needs_financial_assessment: T,
                  toggleTheme: k,
                  platform_header: (0, _.getPlatformInformation)(a).header,
                  platform_switcher: o.createElement(Z.Ls, {
                    app_routing_history: a,
                    is_mobile: !0,
                    platform_config:
                      ((n = V),
                      n.filter(function (e) {
                        return e.link_to !== _.routes.mt5 || !f || g;
                      })),
                    toggleDrawer:
                      null === (t = D.current) || void 0 === t
                        ? void 0
                        : t.toggleDrawer,
                  }),
                }),
                m && f && o.createElement("div", null, m)
              ),
              o.createElement(
                u.DesktopWrapper,
                null,
                o.createElement(qt, null),
                o.createElement(Jt, { app_routing_history: a })
              )
            ),
            o.createElement(
              "div",
              { className: "dashboard-platform-header__menu-right" },
              o.createElement(
                u.DesktopWrapper,
                null,
                o.createElement(Qt, null)
              ),
              o.createElement(en, {
                is_notifications_visible: h,
                notifications_count: C,
                toggleNotifications: I,
              }),
              o.createElement(
                u.DesktopWrapper,
                null,
                o.createElement(tn, {
                  disableApp: l,
                  enableApp: s,
                  is_settings_modal_on: w,
                  toggleSettingsModal: M,
                  settings_extension: N,
                })
              ),
              o.createElement(nn, { balance: i, currency: c }),
              o.createElement(u.Button, {
                small: (0, _.isMobile)(),
                has_effect: !0,
                text: (0, d.localize)("Top up"),
                onClick: function () {
                  return P.push(_.routes.dashboard);
                },
                primary: !0,
                className: "dashboard-platform-header__button",
              })
            )
          );
        };
      rn.propTypes = {
        account_status: a().object,
        app_routing_history: a().array,
        balance: a().oneOfType([a().number, a().string]),
        currency: a().string,
        disableApp: a().func,
        enableApp: a().func,
        header_extension: a().any,
        is_dark_mode: a().bool,
        is_logged_in: a().bool,
        is_mt5_allowed: a().bool,
        is_notifications_visible: a().bool,
        is_onramp_tab_visible: a().bool,
        is_p2p_enabled: a().bool,
        is_payment_agent_transfer_visible: a().bool,
        is_payment_agent_visible: a().bool,
        is_virtual: a().bool,
        logoutClient: a().func,
        needs_financial_assessment: a().bool,
        notifications_count: a().number,
        setDarkMode: a().func,
        should_allow_authentication: a().bool,
        toggleNotifications: a().func,
      };
      const an = (0, g.$j)(function (e) {
        var t = e.client,
          n = e.common,
          r = e.modules,
          a = e.ui;
        return {
          account_status: t.account_status,
          app_routing_history: n.app_routing_history,
          balance: t.balance,
          currency: t.currency,
          disableApp: a.disableApp,
          enableApp: a.enableApp,
          header_extension: a.header_extension,
          is_dark_mode: a.is_dark_mode_on,
          is_logged_in: t.is_logged_in,
          is_mt5_allowed: t.is_mt5_allowed,
          is_notifications_visible: a.is_notifications_visible,
          is_onramp_tab_visible: r.cashier.onramp.is_onramp_tab_visible,
          is_p2p_enabled: r.cashier.is_p2p_enabled,
          is_payment_agent_transfer_visible:
            r.cashier.is_payment_agent_transfer_visible,
          is_payment_agent_visible: r.cashier.is_payment_agent_visible,
          is_virtual: t.is_virtual,
          logoutClient: t.logout,
          needs_financial_assessment: t.needs_financial_assessment,
          notifications_count: a.filtered_notifications.length,
          setDarkMode: a.setDarkMode,
          should_allow_authentication: t.should_allow_authentication,
          toggleNotifications: a.toggleNotificationsModal,
        };
      })((0, x.withRouter)(rn));
      var on = n(50483),
        cn = n(32682),
        ln = n(33192),
        sn = n(10142),
        un = n(2362),
        _n = n(83170),
        dn = n(6591),
        mn = n(37672),
        pn = function (e) {
          var t = e.is_dark_mode,
            n = (0, x.useHistory)();
          return o.createElement(
            "header",
            { className: "dashboard-header dashboard-header--logged-in" },
            o.createElement(
              "div",
              { className: "dashboard-header__left" },
              o.createElement(
                "div",
                {
                  onClick: function () {
                    return n.push(_.routes.dashboard);
                  },
                },
                (0, _.isDesktop)()
                  ? t
                    ? o.createElement(cn.Z, null)
                    : o.createElement(sn.Z, null)
                  : t
                  ? o.createElement(ln.Z, null)
                  : o.createElement(un.Z, null)
              )
            ),
            o.createElement(
              "div",
              { className: "dashboard-header__right--logged-in" },
              (0, _.isDesktop)()
                ? o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(u.Icon, {
                      icon: "IcProfile",
                      size: 32,
                      className: "dashboard-header__right--logged-in-icon",
                    }),
                    o.createElement(u.Icon, {
                      icon: "IcNotification",
                      size: 32,
                    })
                  )
                : o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(u.Icon, {
                      icon: "IcNotificationClear",
                      height: 20,
                      width: 17,
                    }),
                    o.createElement("div", {
                      className: "dashboard-header__right--logged-in-separator",
                    }),
                    o.createElement(Ut.Z, {
                      alignment: "right",
                      is_logged_in: !0,
                      should_allow_authentication: !0,
                      title: "",
                    })
                  )
            )
          );
        },
        fn = function () {
          var e = (0, x.useHistory)(),
            t = o.useContext(_.PlatformContext).is_dashboard;
          return o.createElement(
            "header",
            { className: "dashboard-header dashboard-header--logged-out" },
            o.createElement(
              "div",
              { className: "dashboard-header__left" },
              o.createElement(
                "div",
                {
                  onClick: function () {
                    return e.push(_.routes.dashboard);
                  },
                },
                (0, _.isDesktop)()
                  ? o.createElement(
                      o.Fragment,
                      null,
                      o.createElement(on.Z, {
                        className: "dashboard-header__left--desktop-logo",
                      }),
                      o.createElement(dn.Z, null)
                    )
                  : o.createElement(_n.Z, null)
              )
            ),
            o.createElement(
              "div",
              { className: "dashboard-header__middle--logged-out" },
              o.createElement(
                u.Text,
                {
                  color: "colored-background",
                  size: "s",
                  onClick: function () {
                    return e.push(_.routes.explore);
                  },
                },
                (0, d.localize)("Explore")
              ),
              o.createElement(
                u.Text,
                {
                  color: "colored-background",
                  size: "s",
                  onClick: function () {
                    return e.push(_.routes.about_us);
                  },
                },
                (0, d.localize)("About us")
              ),
              o.createElement(
                u.Text,
                {
                  color: "colored-background",
                  size: "s",
                  onClick: function () {
                    return e.push(_.routes.resources);
                  },
                },
                (0, d.localize)("Resources")
              )
            ),
            o.createElement(
              "div",
              { className: "dashboard-header__right--logged-out" },
              o.createElement(
                u.Button.Group,
                null,
                o.createElement(u.Button, {
                  alternate: !0,
                  has_effect: !0,
                  text: (0, d.localize)("Log in"),
                  onClick: function () {
                    return (0, _.redirectToLogin)(!1, (0, d.getLanguage)());
                  },
                }),
                o.createElement(u.Button, {
                  className: "dashboard-header__right--create-button",
                  primary: !0,
                  text: (0, d.localize)("Create free demo account"),
                  onClick: function () {
                    return (0, _.redirectToSignUp)({ is_dashboard: t });
                  },
                })
              ),
              (0, _.isMobile)() &&
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement("div", {
                    className: "dashboard-header__right--logged-out-separator",
                  }),
                  o.createElement(Ut.Z, {
                    alignment: "right",
                    should_allow_authentication: !0,
                    title: "",
                  })
                )
            )
          );
        },
        gn = function () {
          return o.createElement(
            "div",
            { className: "dashboard-header__preloader" },
            o.createElement(mn.Z, { speed: 3 })
          );
        },
        hn = function (e) {
          var t = e.is_dark_mode,
            n = e.is_logged_in;
          return e.is_logging_in
            ? o.createElement(gn, null)
            : n
            ? o.createElement(pn, { is_dark_mode: t })
            : o.createElement(fn, null);
        };
      hn.propTypes = {
        is_dark_mode: a().bool,
        is_logged_in: a().bool,
        is_logging_in: a().bool,
      };
      const yn = (0, g.$j)(function (e) {
        var t = e.client;
        return {
          is_dark_mode: e.ui.is_dark_mode_on,
          is_logged_in: t.is_logged_in,
          is_logging_in: t.is_logging_in,
        };
      })(hn);
      const bn = function () {
        return o.useContext(_.PlatformContext).is_dashboard
          ? /myapps.deriv/.test(window.location.pathname)
            ? o.createElement(an, null)
            : o.createElement(yn, null)
          : o.createElement(Gt, null);
      };
      var vn = n(81472),
        En = n(4390),
        wn = n(24387);
      function Sn(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return An(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return An(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function An(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var xn = function (e) {
          var t = e.children;
          return (0, _.isMobile)()
            ? i.createPortal(t, document.getElementById("deriv_app"))
            : t;
        },
        zn = function (e) {
          var t = e.style,
            n = e.notifications,
            r = e.removeNotificationMessage;
          return o.createElement(
            "div",
            { className: "notification-messages", style: t },
            o.createElement(
              vn.Z,
              { component: "div" },
              n.map(function (e, t) {
                return o.createElement(
                  En.Z,
                  {
                    appear: !0,
                    key: t,
                    in: !!e.header,
                    timeout: 150,
                    classNames: {
                      appear: "notification--enter",
                      enter: "notification--enter",
                      enterDone: "notification--enter-done",
                      exit: "notification--exit",
                    },
                    unmountOnExit: !0,
                  },
                  o.createElement(wn.ZP, {
                    data: e,
                    removeNotificationMessage: r,
                  })
                );
              })
            )
          );
        },
        Tn = function (e) {
          var t = e.marked_notifications,
            n = e.notification_messages,
            r = e.removeNotificationMessage,
            a = Sn(o.useState({}), 2),
            i = a[0],
            c = a[1],
            l = Sn(o.useState(null), 2),
            s = l[0],
            u = l[1];
          o.useEffect(
            function () {
              if (s && (0, _.isMobile)()) {
                var e = s.parentElement.getBoundingClientRect();
                c({ top: e.top + 8 });
              }
            },
            [s]
          );
          var d = n.filter(function (e) {
              var n = !t.includes(e.key),
                r =
                  !(0, _.isMobile)() ||
                  ["unwelcome", "contract_sold", "dp2p", "tnc"].includes(e.key);
              return n && r;
            }),
            m = (0, _.isMobile)() ? wn.fh : wn.S_,
            p = d.slice(0, m);
          return p.length
            ? o.createElement(
                "div",
                {
                  ref: function (e) {
                    return u(e);
                  },
                  className: "notification-messages-bounds",
                },
                o.createElement(
                  xn,
                  null,
                  o.createElement(zn, {
                    notifications: p,
                    style: i,
                    removeNotificationMessage: r,
                  })
                )
              )
            : null;
        };
      Tn.propTypes = {
        marked_notifications: a().array,
        notification_messages: a().arrayOf(
          a().shape({
            closeOnClick: a().func,
            delay: a().number,
            header: a().string,
            is_auto_close: a().bool,
            message: a().oneOfType([a().node, a().string]),
            size: a().oneOf(["small"]),
            type: a().oneOf([
              "warning",
              "info",
              "success",
              "danger",
              "contract_sold",
              "news",
              "announce",
            ]),
          })
        ),
        removeNotificationMessage: a().func,
      };
      const Cn = (0, g.$j)(function (e) {
        var t = e.ui;
        return {
          marked_notifications: t.marked_notifications,
          notification_messages: t.notification_messages,
          removeNotificationMessage: t.removeNotificationMessage,
        };
      })(Tn);
      var kn = n(240),
        Nn = n(59403),
        On = o.lazy(function () {
          return n.e(301).then(n.bind(n, 23810));
        }),
        In = o.lazy(function () {
          return n.e(708).then(n.bind(n, 27381));
        }),
        Mn = o.lazy(function () {
          return n.e(864).then(n.bind(n, 27305));
        }),
        Dn = o.lazy(function () {
          return n.e(871).then(n.bind(n, 39692));
        }),
        Pn = o.lazy(function () {
          return n.e(530).then(n.bind(n, 69930));
        }),
        jn = o.lazy(function () {
          return n.e(0).then(n.bind(n, 72791));
        }),
        Ln = o.lazy(function () {
          return n.e(424).then(n.bind(n, 44084));
        }),
        Rn = o.lazy(function () {
          return n.e(30).then(n.bind(n, 13590));
        });
      const Fn = (0, g.$j)(function (e) {
        var t = e.client,
          n = e.ui;
        return {
          is_account_types_modal_visible: n.is_account_types_modal_visible,
          is_welcome_modal_visible: n.is_welcome_modal_visible,
          is_account_needed_modal_on: n.is_account_needed_modal_on,
          is_set_residence_modal_visible: n.is_set_residence_modal_visible,
          is_real_acc_signup_on: n.is_real_acc_signup_on,
          is_eu: t.is_eu,
          is_logged_in: t.is_logged_in,
          is_reality_check_visible: t.is_reality_check_visible,
        };
      })(function (e) {
        var t = e.is_account_needed_modal_on,
          n = e.is_account_types_modal_visible,
          r = e.is_welcome_modal_visible,
          a = e.is_reality_check_visible,
          i = e.is_set_residence_modal_visible,
          c = e.is_eu,
          l = e.is_logged_in,
          s = null;
        switch (
          new URLSearchParams((0, x.useLocation)().search).get("action")
        ) {
          case "redirect_to_login":
            s = o.createElement(Dn, null);
            break;
          case "reset_password":
            s = o.createElement(In, null);
            break;
          case "trading_platform_password_reset":
            s = o.createElement(Mn, null);
            break;
          case "signup":
            s = o.createElement(On, null);
            break;
          default:
            i && (s = o.createElement(Pn, null));
        }
        return (
          n && (s = o.createElement(Ln, null)),
          r && (s = o.createElement(Rn, null)),
          t && (s = o.createElement(kn.Z, null)),
          a && (s = o.createElement(jn, null)),
          o.createElement(
            o.Fragment,
            null,
            o.createElement(Nn.Z, {
              is_logged_in: l,
              is_eu: c,
              portal_id: "popup_root",
            }),
            s
              ? o.createElement(
                  o.Suspense,
                  { fallback: o.createElement("div", null) },
                  s
                )
              : null
          )
        );
      });
      var Wn = n(16),
        Un = n(23942);
      function Bn(e, t) {
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
      function $n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Bn(Object(n), !0).forEach(function (t) {
                Zn(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Bn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Zn(e, t, n) {
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
      var Vn = n.n(Un)()({
          loader: function () {
            return Promise.resolve().then(n.bind(n, 62792));
          },
          loading: u.UILoader,
          render: function (e, t) {
            var n = e.default;
            return o.createElement(n, t);
          },
        }),
        Hn = function (e) {
          var t = e.addRouteHistoryItem,
            n = e.error,
            r = e.has_error,
            a = e.history,
            i = e.is_logged_in,
            c = e.is_logging_in,
            l = e.location,
            s = e.passthrough,
            u = e.setAppRouterHistory,
            m = e.setInitialRouteHistoryItem,
            p = o.useRef(null),
            f = o.useRef(null);
          o.useEffect(function () {
            return (
              f.current || p.current || (p.current = l.pathname),
              m(a.location),
              (f.current = a.listen(function (e, n) {
                ["PUSH", "POP"].includes(n) &&
                  t($n($n({}, e), {}, { action: n }));
              })),
              u(a),
              function () {
                "function" == typeof f.current &&
                  (f.current(), (f.current = null), (p.current = null));
              }
            );
          }, []);
          var g = (0, d.getLanguage)();
          return r
            ? o.createElement(Vn, n)
            : (/[?&]lang=/.test(l.search) ||
                "EN" === g ||
                window.history.replaceState(
                  {},
                  document.title,
                  (0, _.urlForLanguage)(g)
                ),
              o.createElement(Yt.ZP, {
                is_logged_in: i,
                is_logging_in: c,
                passthrough: s,
              }));
        };
      Hn.propTypes = {
        addRouteHistoryItem: a().func,
        error: Wn.PropTypes.objectOrObservableObject,
        has_error: a().bool,
        history: a().object,
        is_logged_in: a().bool,
        is_logging_in: a().bool,
        is_virtual: a().bool,
        setAppRouterHistory: a().func,
        setInitialRouteHistoryItem: a().func,
      };
      const Xn = (0, x.withRouter)(
        (0, g.$j)(function (e) {
          var t = e.client,
            n = e.common;
          return {
            is_logged_in: t.is_logged_in,
            is_logging_in: t.is_logging_in,
            error: n.error,
            has_error: n.has_error,
            setAppRouterHistory: n.setAppRouterHistory,
            addRouteHistoryItem: n.addRouteHistoryItem,
            setInitialRouteHistoryItem: n.setInitialRouteHistoryItem,
          };
        })(Hn)
      );
      var Gn = n(59001),
        Yn = n(28284),
        Kn = n(18880);
      (0, Gn.configure)({ enforceActions: "observed" });
      const qn = function (e) {
        var t = window.location.search;
        if ("signup" === new URLSearchParams(t).get("action")) {
          var n = localStorage.getItem("config.server_url"),
            r = localStorage.getItem("config.app_id");
          localStorage.clear(),
            n && localStorage.setItem("config.server_url", n),
            r && localStorage.setItem("config.app_id", r);
        }
        var a = new Kn.Z();
        return (
          (function (e) {
            window.addEventListener("storage", function (t) {
              switch (t.key) {
                case "client.accounts":
                  var n,
                    r,
                    a = e.client.loginid,
                    o =
                      null === (n = JSON.parse(t.newValue)[a]) || void 0 === n
                        ? void 0
                        : n.currency,
                    i =
                      null === (r = JSON.parse(t.oldValue)[a]) || void 0 === r
                        ? void 0
                        : r.currency;
                  document.hidden &&
                    o &&
                    i !== o &&
                    e.client.updateAccountCurrency(o, !1);
                  break;
                case "active_loginid":
                  document.hidden && window.location.reload();
                  break;
                case "reality_check_dismissed":
                  document.hidden &&
                    e.client.setVisibilityRealityCheck(!JSON.parse(t.newValue));
              }
            });
          })(a),
          Yn.Z.init(a),
          a.client.init(),
          a.ui.init(e),
          a.pushwoosh.init(),
          a
        );
      };
      var Jn = n(74495),
        Qn = n(46746);
      function er(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(r = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (a) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return tr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return tr(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function tr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var nr = function () {
          ar.modules.attachModule(
            "cashier",
            new (p())({ root_store: ar, WS: f.Z })
          );
        },
        rr = function (e) {
          var t = e.root_store,
            n = window.location,
            r = n.pathname.split("/")[1],
            a = /^\/(br_)/.test(n.pathname),
            i = er((0, d.useOnLoadTranslation)(), 1)[0];
          o.useEffect(nr, []),
            o.useEffect(function () {
              (0, _.checkAndSetEndpointFromUrl)(),
                (0, d.initializeTranslations)(),
                (0, _.setUrlLanguage)((0, d.getLanguage)()),
                (0, _.initFormErrorMessages)(Jn.U),
                (0, _.setSharedCFDText)(Qn.B),
                l();
            }, []);
          var l = o.useCallback(
            function () {
              if ((0, _.isTouchDevice)() && (0, _.isMobile)()) {
                var e = "Android" === (0, _.mobileOSDetect)(),
                  n = e ? screen.availWidth : window.innerWidth,
                  r = e ? screen.availHeight : window.innerHeight,
                  a = document.getElementById("landscape_blocker");
                n <= r
                  ? (t.ui.onOrientationChange({ is_landscape_orientation: !1 }),
                    a.classList.remove("landscape-blocker--visible"))
                  : (t.ui.onOrientationChange({ is_landscape_orientation: !0 }),
                    a.classList.add("landscape-blocker--visible"));
              }
            },
            [t.ui]
          );
          o.useEffect(
            function () {
              var e = s()(l, 400);
              return (
                window.addEventListener("resize", e),
                function () {
                  window.removeEventListener("resize", e);
                }
              );
            },
            [l]
          );
          var m = { root_store: t, WS: f.Z };
          return o.createElement(
            o.Fragment,
            null,
            i
              ? o.createElement(
                  c.BrowserRouter,
                  { basename: a ? "/".concat(r) : null },
                  o.createElement(
                    g.z1,
                    { store: t },
                    o.createElement(
                      j,
                      null,
                      o.createElement(bn, null),
                      o.createElement(
                        w.Z,
                        null,
                        o.createElement(
                          O,
                          null,
                          o.createElement(Xn, { passthrough: m })
                        )
                      ),
                      o.createElement(
                        u.DesktopWrapper,
                        null,
                        o.createElement($, null)
                      ),
                      o.createElement(Fn, null),
                      o.createElement(h.Z, null),
                      o.createElement(E, null)
                    )
                  )
                )
              : o.createElement(o.Fragment, null)
          );
        };
      rr.propTypes = { root_store: a().object };
      var ar = qn(Cn),
        or = document.getElementById("deriv_app");
      or && i.render(o.createElement(rr, { root_store: ar }), or);
    },
  },
]);
