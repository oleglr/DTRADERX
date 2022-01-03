(self.webpackChunk_deriv_trader = self.webpackChunk_deriv_trader || []).push([
  ["cfd"],
  {
    "./Modules/CFD/index.js": (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          CFDPasswordModal: () => k,
          CFDServerErrorDialog: () => L,
          default: () => ba,
        });
      var n = a("../../../node_modules/formik/dist/formik.esm.js"),
        r = a("../../../node_modules/prop-types/index.js"),
        o = a.n(r),
        i = a("react"),
        c = a("react-router"),
        l = a("react-router-dom"),
        s = a("@deriv/account/dist/js/sent-email-modal"),
        d = a.n(s),
        u = a("@deriv/components"),
        _ = a("@deriv/shared"),
        m = a("@deriv/translations"),
        p = a("../../../node_modules/classnames/index.js"),
        f = a.n(p),
        g = function (e) {
          var t = e.className;
          return i.createElement(u.Icon, {
            className: t,
            icon: "IcCheckmarkCircle",
            custom_color: "var(--status-success)",
            size: 24,
          });
        },
        h = function (e) {
          var t = e.classNameMessage,
            a = void 0 === t ? void 0 : t,
            n = e.has_cancel,
            r = e.has_submit,
            o = e.icon,
            c = e.message,
            l = e.onCancel,
            s = e.onSubmit,
            d = e.heading,
            _ = e.icon_size,
            p = e.text_submit,
            h = e.text_cancel,
            b = e.is_open,
            v = e.toggleModal,
            y = e.title,
            w = e.has_close_icon,
            E = e.width,
            z = void 0 === E ? void 0 : E;
          return i.createElement(
            u.Modal,
            {
              className: "cfd-success-dialog",
              is_open: b,
              toggleModal: v,
              has_close_icon: w,
              small: !y,
              title: y,
              width: z,
            },
            i.createElement(
              u.Modal.Body,
              null,
              i.createElement(
                "div",
                {
                  className: f()("success-change__icon-area", {
                    "success-change__icon-area--large": "large" === _,
                    "success-change__icon-area--xlarge": "xlarge" === _,
                  }),
                },
                o,
                i.createElement(g, { className: "bottom-right-overlay" })
              ),
              !d &&
                i.createElement(
                  u.Text,
                  {
                    as: "h2",
                    weight: "bold",
                    size: "s",
                    className: "dc-modal-header__title",
                  },
                  i.createElement(m.Localize, { i18n_default_text: "Success!" })
                ),
              d && d,
              i.isValidElement(c) && c,
              !i.isValidElement(c) && i.createElement("p", { className: a }, c)
            ),
            i.createElement(
              u.Modal.Footer,
              null,
              n &&
                i.createElement(u.Button, {
                  onClick: l,
                  has_effect: !0,
                  text: h || (0, m.localize)("Maybe later"),
                  secondary: !0,
                  large: !0,
                }),
              r &&
                i.createElement(u.Button, {
                  has_effect: !0,
                  onClick: s,
                  text: p,
                  primary: !0,
                  large: !0,
                })
            )
          );
        };
      (h.defaultProps = { icon_size: "large", has_cancel: !1, has_submit: !0 }),
        (h.propTypes = {
          classNameMessage: o().string,
          has_cancel: o().bool,
          has_submit: o().bool,
          heading: o().oneOfType([o().string, o().object]),
          icon: o().object,
          icon_size: o().string,
          icon_type: o().string,
          message: o().oneOfType([o().string, o().object]),
          onCancel: o().func,
          onSubmit: o().func,
          text_submit: o().string,
        });
      const b = h;
      var v = a("./Services/ws-methods.js"),
        y = a("./Stores/connect.js");
      function w(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var a = [],
                n = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(n = (i = c.next()).done) &&
                  (a.push(i.value), !t || a.length !== t);
                  n = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  n || null == c.return || c.return();
                } finally {
                  if (r) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          S(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function E(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(a), !0).forEach(function (t) {
                x(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : E(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function x(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function S(e, t) {
        if (e) {
          if ("string" == typeof e) return M(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === a && e.constructor && (a = e.constructor.name),
            "Map" === a || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? M(e, t)
              : void 0
          );
        }
      }
      function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      function T() {
        return (T =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var D = function (e) {
          var t = e.should_set_trading_password,
            a = e.has_mt5_account,
            n = e.children,
            r = e.platform,
            o = e.is_dxtrade_allowed;
          return t && a
            ? i.createElement(
                "div",
                { className: "mt5-trading-password-required" },
                i.createElement(u.Icon, {
                  icon: "IcMt5OnePassword",
                  size: "128",
                }),
                i.createElement(
                  u.Text,
                  { as: "h2", size: "s", line_height: "24", weight: "bold" },
                  i.createElement(m.Localize, {
                    i18n_default_text: "Set your trading password",
                  })
                ),
                i.createElement(
                  u.Text,
                  { as: "p", size: "xs", align: "center" },
                  o
                    ? i.createElement(m.Localize, {
                        i18n_default_text:
                          "A trading password can be used to sign into any of your {{platform1}} (and {{platform2}}) accounts. ",
                        values: {
                          platform1:
                            r === _.CFD_PLATFORMS.MT5 ? "DMT5" : "Deriv X",
                          platform2:
                            r === _.CFD_PLATFORMS.MT5 ? "Deriv X" : "DMT5",
                        },
                      })
                    : i.createElement(m.Localize, {
                        i18n_default_text:
                          "You can now create one secure password to log into all your DMT5 accounts.",
                      })
                ),
                i.createElement(
                  l.NavLink,
                  {
                    to: _.routes.passwords,
                    className: "dc-btn dc-btn--primary dc-btn__large",
                  },
                  i.createElement(
                    u.Text,
                    { color: "colored-background", weight: "bold", size: "xs" },
                    i.createElement(m.Localize, {
                      i18n_default_text: "Set your trading password",
                    })
                  )
                )
              )
            : n;
        },
        O = function (e) {
          var t = e.should_set_trading_password,
            a = e.should_show_server_form,
            n = e.account_title,
            r = e.is_password_reset_error,
            o = e.has_mt5_account;
          if (t && o) return null;
          var c = (0, _.isMobile)() ? "p" : "span",
            l = (0, _.isMobile)() ? "center" : "left",
            s = (0, _.isMobile)() ? "xs" : "s",
            d = (0, _.isMobile)() ? { paddingTop: "2rem" } : {};
          return i.createElement(
            u.Text,
            {
              styles: d,
              as: c,
              line_height: "24",
              weight: "bold",
              size: s,
              align: l,
            },
            !a &&
              t &&
              !r &&
              i.createElement(m.Localize, {
                i18n_default_text: "Set a trading password",
              }),
            !a &&
              !t &&
              !r &&
              i.createElement(m.Localize, {
                i18n_default_text: "Enter your trading password",
              }),
            !a &&
              r &&
              i.createElement(m.Localize, {
                i18n_default_text: "Too many attempts",
              }),
            a &&
              i.createElement(m.Localize, {
                i18n_default_text:
                  "Choose a region for your DMT5 {{ account_type }} account",
                values: { account_type: n },
              })
          );
        },
        A = function (e, t, a) {
          return "real" === t
            ? (0, m.localize)(
                "You have created a {{platform}} {{account_title}} account. To start trading, transfer funds from your Deriv account into this account.",
                {
                  account_title: e,
                  platform: a === _.CFD_PLATFORMS.DXTRADE ? "Deriv X" : "DMT5",
                }
              )
            : (0, m.localize)(
                "You have created a {{platform}} {{account_title}} account.",
                {
                  account_title: e,
                  platform: a === _.CFD_PLATFORMS.DXTRADE ? "Deriv X" : "DMT5",
                }
              );
        },
        N = i.memo(function (e) {
          var t = e.platform,
            a = e.type;
          if (t === _.CFD_PLATFORMS.DXTRADE) {
            if ("synthetic" === a)
              return i.createElement(u.Icon, {
                icon: "IcDxtradeSyntheticPlatform",
                size: 128,
              });
            if ("financial" === a)
              return i.createElement(u.Icon, {
                icon: "IcDxtradeFinancialPlatform",
                size: 128,
              });
          }
          switch (a) {
            case "synthetic":
              return i.createElement(u.Icon, {
                icon: "IcMt5SyntheticPlatform",
                size: 128,
              });
            case "financial":
              return i.createElement(u.Icon, {
                icon: "IcMt5FinancialPlatform",
                size: 128,
              });
            default:
              return i.createElement(u.Icon, {
                icon: "IcMt5FinancialStpPlatform",
                size: 128,
              });
          }
        });
      N.displayName = "IconType";
      var P = function (e) {
          var t,
            a,
            r,
            o,
            c = i.useMemo(
              function () {
                return e.should_show_server_form
                  ? (0, m.localize)("Next")
                  : !e.should_show_server_form && e.should_set_trading_password
                  ? (0, m.localize)("Set trading password")
                  : "PasswordReset" === e.error_type
                  ? (0, m.localize)("Try later")
                  : (0, m.localize)("Add account");
              },
              [
                e.should_show_server_form,
                e.should_set_trading_password,
                e.error_type,
              ]
            ),
            l =
              e.should_show_server_form ||
              !(0, _.isDesktop)() ||
              !e.should_set_trading_password ||
              "PasswordReset" === e.error_type,
            s =
              ((a = (t = e).should_set_trading_password),
              (r = t.error_type),
              (o = t.should_show_server_form),
              a && "PasswordReset" !== r
                ? (0, _.isDesktop)()
                  ? null
                  : (0, m.localize)("Cancel")
                : o
                ? (0, m.localize)("Back")
                : (0, m.localize)("Forgot password?")),
            d = function () {
              if (l)
                return e.should_set_trading_password
                  ? e.onCancel()
                  : e.onForgotPassword();
            };
          return "PasswordReset" === e.error_type
            ? i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "div",
                  { className: "cfd-password-reset" },
                  i.createElement(
                    "div",
                    {
                      className:
                        "cfd-password-modal__content cfd-password-modal__content--password-reset",
                    },
                    i.createElement(
                      u.Text,
                      { as: "p", line_height: "24", size: "xs" },
                      i.createElement(m.Localize, {
                        i18n_default_text: "Please try again in a minute.",
                      })
                    )
                  ),
                  i.createElement(
                    n.J9,
                    { onSubmit: e.closeModal, initialValues: {} },
                    function (e) {
                      var t = e.handleSubmit;
                      return i.createElement(
                        "form",
                        { onSubmit: t },
                        i.createElement(u.FormSubmitButton, {
                          has_cancel: l,
                          cancel_label: s,
                          onCancel: d,
                          is_absolute: (0, _.isMobile)(),
                          label: c,
                        })
                      );
                    }
                  )
                )
              )
            : i.createElement(
                n.J9,
                {
                  initialValues: { password: "" },
                  enableReinitialize: !0,
                  validate: e.validatePassword,
                  onSubmit: e.submitPassword,
                },
                function (t) {
                  var a = t.errors,
                    n = t.isSubmitting,
                    r = t.handleBlur,
                    o = t.handleChange,
                    p = t.handleSubmit,
                    f = t.setFieldTouched,
                    g = t.touched,
                    h = t.values;
                  return i.createElement(
                    "form",
                    { onSubmit: p },
                    i.createElement(
                      "div",
                      {
                        className:
                          "cfd-password-modal__content dc-modal__container_cfd-password-modal__body",
                      },
                      i.createElement(
                        "div",
                        { className: "input-element" },
                        i.createElement(
                          u.PasswordMeter,
                          {
                            input: h.password,
                            has_error:
                              !(!g.password || !a.password) ||
                              !!e.error_message,
                            custom_feedback_messages: (0, _.getErrorMessages)()
                              .password_warnings,
                          },
                          function () {
                            return i.createElement(u.PasswordInput, {
                              autoComplete: "new-password",
                              label: (0, m.localize)("Trading password"),
                              error:
                                (g.password && a.password) ||
                                (0 === h.password.length
                                  ? e.error_message
                                  : ""),
                              name: "password",
                              value: h.password,
                              onBlur: r,
                              onChange: function (e) {
                                f("password", !0), o(e);
                              },
                            });
                          }
                        )
                      ),
                      e.is_real_financial_stp &&
                        !e.is_bvi &&
                        i.createElement(
                          "div",
                          {
                            className:
                              "dc-modal__container_cfd-password-modal__description",
                          },
                          i.createElement(m.Localize, {
                            i18n_default_text:
                              "Your MT5 Financial STP account will be opened through Deriv (FX) Ltd. All trading in this account is subject to the regulations and guidelines of the Labuan Financial Service Authority (LFSA). None of your other accounts, including your Deriv account, is subject to the regulations and guidelines of the Labuan Financial Service Authority (LFSA).",
                          })
                        ),
                      e.should_set_trading_password &&
                        i.createElement(
                          u.Text,
                          { size: "xs", as: "p" },
                          e.is_dxtrade_allowed
                            ? i.createElement(m.Localize, {
                                i18n_default_text:
                                  "Use this to log in and trade on DMT5 and Deriv X.",
                              })
                            : i.createElement(m.Localize, {
                                i18n_default_text:
                                  "Use this to log in and trade on DMT5.",
                              })
                        ),
                      e.is_real_financial_stp &&
                        e.is_bvi &&
                        i.createElement(
                          "div",
                          {
                            className:
                              "dc-modal__container_cfd-password-modal__description",
                          },
                          i.createElement(m.Localize, {
                            i18n_default_text:
                              "Your MT5 Financial STP account will be opened through Deriv (BVI) Ltd. All trading in this account is subject to the regulations and guidelines of the British Virgin Islands Financial Services Commission (BVIFSC). None of your other accounts, including your Deriv account, is subject to the regulations and guidelines of the British Virgin Islands Financial Services Commission (BVIFSC).",
                          })
                        ),
                      "PasswordError" === e.error_type &&
                        i.createElement(
                          u.Text,
                          {
                            size: "xs",
                            as: "p",
                            className:
                              "dc-modal__container_mt5-password-modal__hint",
                          },
                          i.createElement(m.Localize, {
                            i18n_default_text:
                              "Hint: You may have chosen a different trading password from your Deriv log in password.",
                          })
                        )
                    ),
                    i.createElement(u.FormSubmitButton, {
                      is_disabled: !h.password || Object.keys(a).length > 0,
                      has_cancel: l,
                      cancel_label: s,
                      onCancel: d,
                      is_absolute: (0, _.isMobile)(),
                      is_loading: n,
                      label: c,
                      form_error: e.form_error,
                    })
                  );
                }
              );
        },
        F = function (e) {
          var t,
            a,
            r = T({}, e),
            o = i.useMemo(
              function () {
                return (function (e) {
                  return (
                    (function (e) {
                      if (Array.isArray(e)) return M(e);
                    })(e) ||
                    (function (e) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(e)
                      )
                        return Array.from(e);
                    })(e) ||
                    S(e) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  );
                })(r.trading_servers)
                  .map(function (e) {
                    return z(z({}, e), {
                      label: ""
                        .concat(e.geolocation.region, " ")
                        .concat(
                          1 === e.geolocation.sequence
                            ? ""
                            : e.geolocation.sequence,
                          " "
                        )
                        .concat(
                          e.disabled ? "(".concat(e.message_to_client, ")") : ""
                        ),
                      value: e.id,
                      disabled: e.disabled,
                    });
                  })
                  .sort(function (e, t) {
                    return e.recommended ? e : t;
                  })
                  .sort(function (e, t) {
                    return e.disabled - t.disabled;
                  });
              },
              [r.trading_servers]
            );
          return i.createElement(
            n.J9,
            {
              initialValues: {
                server:
                  null !==
                    (t =
                      null ===
                        (a = r.trading_servers.find(function (e) {
                          return !e.disabled;
                        })) || void 0 === a
                        ? void 0
                        : a.id) && void 0 !== t
                    ? t
                    : "",
              },
              validate: r.validateServer,
              onSubmit: function (e) {
                return r.submitMt5Server(e.server);
              },
            },
            function (e) {
              var t,
                a = e.handleSubmit,
                n = e.setFieldValue,
                c = e.errors,
                l = e.values,
                s = e.isSubmitting;
              return i.createElement(
                "form",
                { onSubmit: a },
                i.createElement(
                  "div",
                  { className: "cfd-password-modal__content" },
                  i.createElement(
                    "div",
                    {
                      className: "dc-modal__container_cfd-password-modal__body",
                    },
                    i.createElement(
                      "div",
                      { className: "input-element" },
                      i.createElement(
                        u.RadioGroup,
                        {
                          className: "cfd-password-modal__radio",
                          name: "server",
                          required: !0,
                          selected:
                            null ===
                              (t = r.trading_servers.find(function (e) {
                                return !e.disabled;
                              })) || void 0 === t
                              ? void 0
                              : t.id,
                          onToggle: function (e) {
                            e.persist(), n("server", e.target.value);
                          },
                        },
                        o.map(function (e) {
                          return i.createElement(u.RadioGroup.Item, {
                            key: e.value,
                            label: e.label,
                            value: e.value,
                            disabled: e.disabled,
                          });
                        })
                      )
                    )
                  )
                ),
                i.createElement(u.FormSubmitButton, {
                  is_disabled: s || !l.server || Object.keys(c).length > 0,
                  has_cancel: !0,
                  cancel_label: (0, m.localize)("Cancel"),
                  onCancel: r.closeModal,
                  is_absolute: (0, _.isMobile)(),
                  is_loading: s,
                  label: (0, m.localize)("Next"),
                  form_error: r.form_error,
                })
              );
            }
          );
        },
        C = function (e) {
          var t,
            a,
            n = e.account_title,
            r = e.account_type,
            o = e.account_status,
            c = e.disableCFDPasswordModal,
            l = e.email,
            s = e.error_message,
            p = e.error_type,
            f = e.form_error,
            g = e.history,
            h = e.is_eu,
            y = e.is_eu_country,
            E = e.is_logged_in,
            x = e.is_cfd_password_modal_enabled,
            S = e.is_cfd_success_dialog_enabled,
            M = e.is_dxtrade_allowed,
            T = e.platform,
            C = e.has_cfd_error,
            k = e.landing_companies,
            j = e.mt5_login_list,
            L = e.cfd_new_account,
            R = e.setCFDSuccessDialog,
            I = e.setMt5Error,
            B = e.submitMt5Password,
            W = e.submitCFDPassword,
            U = e.trading_servers,
            X = w(i.useState(""), 2),
            q = X[0],
            V = X[1],
            $ =
              "bvi" ===
              (null == k ||
              null === (t = k.mt_financial_company) ||
              void 0 === t ||
              null === (a = t.financial_stp) ||
              void 0 === a
                ? void 0
                : a.shortcode),
            H = Boolean(null == j ? void 0 : j.length),
            Y =
              Array.isArray(o.status) &&
              o.status.includes("trading_password_required"),
            K = "PasswordError" === p,
            G = "PasswordReset" === p,
            J = w(i.useState(!1), 2),
            Z = J[0],
            Q = J[1],
            ee = function () {
              R(!1), I(!1), V("");
            },
            te = function () {
              ee(), c();
            },
            ae = function () {
              te(),
                v.WS.verifyEmail(l, "trading_platform_password_reset"),
                Q(!0);
            },
            ne = x && !S && (!C || K || G),
            re = !C && S && x,
            oe = "real_financial_stp" === [r.category, r.type].join("_"),
            ie = "real_synthetic" === [r.category, r.type].join("_"),
            ce = i.useMemo(
              function () {
                return (
                  (E ? !h : !y) &&
                  ie &&
                  j.some(function (e) {
                    return (
                      "real" === e.account_type &&
                      ("gaming" === e.market_type ||
                        "synthetic" === e.market_type)
                    );
                  }) &&
                  !q &&
                  T === _.CFD_PLATFORMS.MT5
                );
              },
              [h, y, E, ie, q, j, T]
            );
          i.useEffect(
            function () {
              ((!K && !G && C) || S) && V("");
            },
            [C, S, K, G]
          );
          var le = i.createElement(P, {
              is_bvi: $,
              account_title: n,
              closeModal: te,
              error_type: p,
              error_message: s,
              has_mt5_account: H,
              form_error: f,
              should_set_trading_password: Y,
              is_real_financial_stp: oe,
              validatePassword: function (e) {
                var t = {};
                return (
                  (0, _.validLength)(e.password, { min: 8, max: 25 })
                    ? (0, _.validPassword)(e.password) ||
                      (t.password = (0, _.getErrorMessages)().password())
                    : (t.password = (0, m.localize)(
                        "You should enter {{min_number}}-{{max_number}} characters.",
                        { min_number: 8, max_number: 25 }
                      )),
                  e.password.toLowerCase() === l.toLowerCase() &&
                    (t.password = (0, m.localize)(
                      "Your password cannot be the same as your email address."
                    )),
                  t
                );
              },
              should_show_server_form: ce,
              onForgotPassword: ae,
              submitPassword: function (e, t) {
                T === _.CFD_PLATFORMS.MT5
                  ? B(z(z({}, e), {}, { server: q }), t)
                  : ((e.platform = T), W(e, t));
              },
              platform: T,
              is_dxtrade_allowed: M,
              onCancel: te,
            }),
            se = i.createElement(F, {
              trading_servers: U,
              mt5_login_list: j,
              account_title: n,
              closeModal: te,
              submitMt5Server: V,
            });
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              u.DesktopWrapper,
              null,
              i.createElement(
                u.Modal,
                {
                  className: "cfd-password-modal",
                  has_close_icon: !ce || Y,
                  is_open: ne,
                  toggleModal: te,
                  should_header_stick_body: !0,
                  renderTitle: function () {
                    return i.createElement(O, {
                      should_show_server_form: ce,
                      should_set_trading_password: Y,
                      account_title: n,
                      has_mt5_account: H,
                      is_password_reset_error: G,
                    });
                  },
                },
                i.createElement(
                  D,
                  {
                    has_mt5_account: H,
                    should_set_trading_password: Y,
                    platform: T,
                    is_dxtrade_allowed: M,
                  },
                  ce ? se : le
                )
              )
            ),
            i.createElement(
              u.MobileWrapper,
              null,
              i.createElement(
                u.MobileDialog,
                {
                  has_full_height: !0,
                  portal_element_id: "modal_root",
                  visible: ne,
                  onClose: te,
                  wrapper_classname: "cfd-password-modal",
                },
                i.createElement(O, {
                  should_show_server_form: ce,
                  should_set_trading_password: Y,
                  account_title: n,
                  has_mt5_account: H,
                  is_password_reset_error: G,
                }),
                i.createElement(
                  D,
                  {
                    has_mt5_account: H,
                    should_set_trading_password: Y,
                    platform: T,
                    is_dxtrade_allowed: M,
                  },
                  ce ? se : le
                )
              )
            ),
            i.createElement(b, {
              is_open: re,
              toggleModal: te,
              onCancel: te,
              onSubmit: function () {
                c(),
                  ee(),
                  "real" === r.category &&
                    (sessionStorage.setItem(
                      "cfd_transfer_to_login_id",
                      L.login
                    ),
                    g.push(_.routes.cashier_acc_transfer));
              },
              classNameMessage: "cfd-password-modal__message",
              message: A(n, r.category, T),
              icon: i.createElement(N, { platform: T, type: r.type }),
              icon_size: "xlarge",
              text_submit:
                "real" === r.category
                  ? (0, m.localize)("Transfer now")
                  : (0, m.localize)("OK"),
              has_cancel: "real" === r.category,
            }),
            i.createElement(d(), {
              is_open: Z,
              identifier_title: "trading_password",
              onClose: function () {
                return Q(!1);
              },
              onClickSendEmail: ae,
            })
          );
        };
      C.propTypes = {
        account_title: o().string,
        account_type: o().object,
        disableCFDPasswordModal: o().func,
        email: o().string,
        error_message: o().string,
        has_cfd_error: o().bool,
        is_eu: o().bool,
        is_eu_country: o().bool,
        is_logged_in: o().bool,
        is_cfd_password_modal_enabled: o().bool,
        is_cfd_success_dialog_enabled: o().bool,
        is_dxtrade_allowed: o().bool,
        platform: o().string,
        setMt5Error: o().func,
        setCFDSuccessDialog: o().func,
        submitMt5Password: o().func,
        submitCFDPassword: o().func,
        cfd_new_account: o().object,
      };
      const k = (0, y.$j)(function (e) {
        var t = e.client,
          a = e.modules;
        return {
          email: t.email,
          account_title: a.cfd.account_title,
          account_type: a.cfd.account_type,
          account_status: t.account_status,
          clearCFDError: a.cfd.clearCFDError,
          disableCFDPasswordModal: a.cfd.disableCFDPasswordModal,
          error_message: a.cfd.error_message,
          error_type: a.cfd.error_type,
          has_cfd_error: a.cfd.has_cfd_error,
          landing_companies: t.landing_companies,
          is_eu: t.is_eu,
          is_eu_country: t.is_eu_country,
          is_logged_in: t.is_logged_in,
          is_cfd_success_dialog_enabled: a.cfd.is_cfd_success_dialog_enabled,
          is_cfd_password_modal_enabled: a.cfd.is_cfd_password_modal_enabled,
          is_dxtrade_allowed: t.is_dxtrade_allowed,
          setMt5Error: a.cfd.setError,
          setCFDSuccessDialog: a.cfd.setCFDSuccessDialog,
          submitMt5Password: a.cfd.submitMt5Password,
          submitCFDPassword: a.cfd.submitCFDPassword,
          cfd_new_account: a.cfd.new_account_response,
          trading_servers: t.trading_servers,
          mt5_login_list: t.mt5_login_list,
        };
      })((0, c.withRouter)(C));
      var j = function (e) {
        var t = e.clearCFDError,
          a = e.disableApp,
          n = e.enableApp,
          r = e.error_message,
          o = e.error_type,
          c = e.has_cfd_error,
          l = e.is_cfd_success_dialog_enabled,
          s = c && !l && !["PasswordReset", "PasswordError"].includes(o);
        return i.createElement(
          u.Dialog,
          {
            title: (0, m.localize)("Something’s not right"),
            confirm_button_text: (0, m.localize)("OK"),
            onConfirm: t,
            disableApp: a,
            enableApp: n,
            is_visible: s,
          },
          r ||
            i.createElement(m.Localize, {
              i18n_default_text:
                "Sorry, an error occured while processing your request.",
            })
        );
      };
      j.propTypes = {
        clearCFDError: o().func,
        disableApp: o().func,
        enableApp: o().func,
        error_message: o().string,
        has_cfd_error: o().bool,
        is_cfd_success_dialog_enabled: o().bool,
      };
      const L = (0, y.$j)(function (e) {
        var t = e.ui,
          a = e.modules;
        return {
          clearCFDError: a.cfd.clearCFDError,
          disableApp: t.disableApp,
          enableApp: t.enableApp,
          error_message: a.cfd.error_message,
          error_type: a.cfd.error_type,
          has_cfd_error: a.cfd.has_cfd_error,
          is_cfd_success_dialog_enabled: a.cfd.is_cfd_success_dialog_enabled,
        };
      })(j);
      var R = a("./templates/_common/components/loading.jsx");
      const I = function () {
        return i.createElement(
          "div",
          { className: "cfd-real-accounts-display" },
          i.createElement(R.Z, null)
        );
      };
      var B = function (e) {
        var t = e.onClickSignup,
          a = e.platform;
        return i.createElement(
          "div",
          { className: "cfd-dashboard__missing-real" },
          i.createElement(
            "h1",
            { className: "cfd-dashboard__missing-real--heading" },
            a === _.CFD_PLATFORMS.MT5
              ? i.createElement(m.Localize, {
                  i18n_default_text:
                    "You need a real account (fiat currency or cryptocurrency) in Deriv to create a real DMT5 account.",
                })
              : i.createElement(m.Localize, {
                  i18n_default_text:
                    "To create a Deriv X real account, create a Deriv real account first.",
                })
          ),
          i.createElement(
            u.Button,
            {
              className: "cfd-dashboard__missing-real--button",
              onClick: t,
              type: "button",
              primary: !0,
            },
            i.createElement(
              "span",
              { className: "btn__text" },
              i.createElement(m.Localize, {
                i18n_default_text: "Create a Deriv account",
              })
            )
          )
        );
      };
      B.propTypes = { onClickSignup: o().func, platform: o().string };
      const W = B;
      var U = a("@deriv/account/dist/js/file-uploader-container"),
        X = a.n(U),
        q = a("@deriv/account/dist/js/form-sub-header"),
        V = a.n(q),
        $ = a("@deriv/account/dist/js/poa-expired"),
        H = a.n($),
        Y = a("@deriv/account/dist/js/poa-needs-review"),
        K = a.n(Y),
        G = a("@deriv/account/dist/js/poa-verified"),
        J = a.n(G),
        Z = a("@deriv/account/dist/js/poa-unverified"),
        Q = a.n(Z),
        ee = a("@deriv/account/dist/js/poa-submitted"),
        te = a.n(ee),
        ae = a("@deriv/account/dist/js/poa-status-codes"),
        ne = a.n(ae);
      function re(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function oe(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function ie(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var a = [],
                n = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(n = (i = c.next()).done) &&
                  (a.push(i.value), !t || a.length !== t);
                  n = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  n || null == c.return || c.return();
                } finally {
                  if (r) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ce(e, t);
              var a = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a
                  ? Array.from(e)
                  : "Arguments" === a ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                  ? ce(e, t)
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
      function ce(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      function le() {
        return (le =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function se(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var de = function (e) {
          var t = e.maxLength,
            a = e.name,
            r = e.optional,
            o = void 0 !== r && r,
            c = se(e, ["maxLength", "name", "optional"]);
          return i.createElement(n.gN, { name: a }, function (e) {
            var n = e.field,
              r = e.form,
              l = r.errors,
              s = r.touched;
            return i.createElement(
              u.Input,
              le(
                {
                  type: "text",
                  required: !o,
                  name: a,
                  autoComplete: "off",
                  maxLength: t || "30",
                  error: s[n.name] && l[n.name],
                },
                n,
                c
              )
            );
          });
        },
        ue = function (e) {
          var t,
            a,
            r = e.onSave,
            o = e.is_fully_authenticated,
            c = e.is_loading,
            l = e.landing_company,
            s = e.residence_list,
            d = e.onCancel,
            p = e.onSubmit,
            f = e.value,
            g = e.index,
            h = e.form_error,
            b = [
              { text: (0, m.localize)("Hedging"), value: "Hedging" },
              {
                text: (0, m.localize)("Income Earning"),
                value: "Income Earning",
              },
              { text: (0, m.localize)("Speculative"), value: "Speculative" },
              {
                text: (0, m.localize)("Peer-to-peer exchange"),
                value: "Peer-to-peer exchange",
              },
            ],
            v =
              null !==
                (t =
                  null == l || null === (a = l.config) || void 0 === a
                    ? void 0
                    : a.tax_details_required) &&
              void 0 !== t &&
              t,
            y = function (e) {
              r(g, e), d();
            };
          return 0 === s.length || c
            ? i.createElement(u.Loading, { is_fullscreen: !1 })
            : i.createElement(
                n.J9,
                {
                  initialValues: {
                    citizen: f.citizen,
                    tax_residence: f.tax_residence,
                    tax_identification_number: f.tax_identification_number,
                    account_opening_reason: f.account_opening_reason,
                  },
                  validateOnMount: !0,
                  validateOnChange: !0,
                  validateOnBlur: !0,
                  validate: function (e) {
                    return (function (e) {
                      var t,
                        a = e.values,
                        n = e.residence_list,
                        r = e.account_opening_reason,
                        o = e.is_tin_required,
                        c = ie(
                          n.filter(function (e) {
                            return e.text === a.tax_residence && e.tin_format;
                          }),
                          1
                        )[0],
                        l = ie(
                          null !== (t = null == c ? void 0 : c.tin_format) &&
                            void 0 !== t
                            ? t
                            : [],
                          1
                        )[0],
                        s = l || "^[A-Za-z0-9./s-]{0,25}$",
                        d = {
                          citizen: [
                            function (e) {
                              return !!e;
                            },
                            function (e) {
                              return n
                                .map(function (e) {
                                  return e.text;
                                })
                                .includes(e);
                            },
                          ],
                          tax_residence: [
                            function (e) {
                              return !!e;
                            },
                            function (e) {
                              return n
                                .map(function (e) {
                                  return e.text;
                                })
                                .includes(e);
                            },
                          ],
                          tax_identification_number: [
                            function (e) {
                              return !((!a.tax_residence && o) || l) || !!e;
                            },
                            function (e) {
                              return !s || e.match(s);
                            },
                          ],
                          account_opening_reason: [
                            function (e) {
                              return !!e;
                            },
                            function (e) {
                              return r
                                .map(function (e) {
                                  return e.value;
                                })
                                .includes(e);
                            },
                          ],
                        },
                        u = {
                          citizen: (0, m.localize)("Citizenship"),
                          tax_residence: (0, m.localize)("Tax residence"),
                          tax_identification_number: (0, m.localize)(
                            "Tax identification number"
                          ),
                          account_opening_reason: (0, m.localize)(
                            "Account opening reason"
                          ),
                        },
                        _ = {};
                      return (
                        Object.entries(d).forEach(function (e) {
                          var t,
                            n = ie(e, 2),
                            r = n[0],
                            o = n[1].findIndex(function (e) {
                              return !e(a[r]);
                            });
                          -1 !== o &&
                            (_[r] = i.createElement(
                              i.Fragment,
                              null,
                              ((t = u[r]),
                              [
                                (0, m.localize)("{{field_name}} is required", {
                                  field_name: t,
                                }),
                                (0, m.localize)(
                                  "{{field_name}} is not properly formatted.",
                                  { field_name: t }
                                ),
                              ])[o]
                            ));
                        }),
                        _
                      );
                    })({
                      values: e,
                      residence_list: s,
                      account_opening_reason: b,
                      is_tin_required: v,
                    });
                  },
                  onSubmit: function (e, t) {
                    return (function (e, t, a, n, r, o) {
                      var i = e.citizen,
                        c = e.tax_residence,
                        l = se(e, ["citizen", "tax_residence"]),
                        s = (function (e, t, a) {
                          var n, r;
                          return (
                            a.forEach(function (a) {
                              a.text === e && (n = a), a.text === t && (r = a);
                            }),
                            { citizen: n, tax_residence: r }
                          );
                        })(i, c, o),
                        d = s.citizen,
                        u = s.tax_residence;
                      n(
                        a,
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? re(Object(a), !0).forEach(function (t) {
                                  oe(e, t, a[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(a)
                                )
                              : re(Object(a)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(a, t)
                                  );
                                });
                          }
                          return e;
                        })(
                          {
                            citizen: void 0 !== d ? d.value : "",
                            tax_residence: void 0 !== u ? u.value : "",
                          },
                          l
                        ),
                        t.setSubmitting,
                        r
                      );
                    })(e, t, g, p, !(0, _.isDeepEqual)(f, e), s);
                  },
                },
                function (e) {
                  var t = e.handleSubmit,
                    a = e.isSubmitting,
                    r = e.handleChange,
                    c = e.handleBlur,
                    l = e.errors,
                    d = e.touched,
                    p = e.values,
                    g = e.setFieldValue,
                    v = e.isValid;
                  return i.createElement(
                    u.AutoHeightWrapper,
                    {
                      default_height: 200,
                      height_offset: (0, _.isDesktop)() ? 148 : null,
                    },
                    function (e) {
                      var w = e.height,
                        E = e.setRef;
                      return i.createElement(
                        "form",
                        {
                          className: "cfd-financial-stp-modal__form",
                          ref: E,
                          onSubmit: t,
                          autoComplete: "off",
                        },
                        i.createElement(
                          u.Div100vhContainer,
                          {
                            className: "details-form",
                            max_autoheight_offset: "179px",
                            is_disabled: (0, _.isDesktop)(),
                          },
                          i.createElement(
                            u.Text,
                            {
                              as: "p",
                              size: "xxxs",
                              align: "center",
                              className: "details-form__description",
                            },
                            i.createElement(m.Localize, {
                              i18n_default_text:
                                "Any information you provide is confidential and will be used for verification purposes only.",
                            })
                          ),
                          i.createElement(
                            u.ThemedScrollbars,
                            { height: w, is_bypassed: (0, _.isMobile)() },
                            i.createElement(
                              "div",
                              { className: "details-form__elements" },
                              i.createElement(V(), {
                                title: (0, m.localize)("Details"),
                              }),
                              i.createElement(
                                "fieldset",
                                { className: "account-form__fieldset" },
                                i.createElement(
                                  u.DesktopWrapper,
                                  null,
                                  i.createElement(
                                    n.gN,
                                    { name: "citizen" },
                                    function (e) {
                                      var t = e.field;
                                      return i.createElement(
                                        u.Autocomplete,
                                        le({}, t, {
                                          id: "real_mt5_citizenship",
                                          "data-lpignore": "true",
                                          autoComplete: "off",
                                          type: "text",
                                          label: (0, m.localize)("Citizenship"),
                                          error: d.citizen && l.citizen,
                                          disabled: f.citizen && o,
                                          list_items: s,
                                          onItemSelection: function (e) {
                                            return g(
                                              "citizen",
                                              e.value ? e.text : "",
                                              !0
                                            );
                                          },
                                          list_portal_id: "modal_root",
                                          required: !0,
                                        })
                                      );
                                    }
                                  )
                                ),
                                i.createElement(
                                  u.MobileWrapper,
                                  null,
                                  i.createElement(u.SelectNative, {
                                    placeholder: (0, m.localize)(
                                      "Please select"
                                    ),
                                    label: (0, m.localize)("Citizenship"),
                                    value: p.citizen,
                                    list_items: s,
                                    error: d.citizen && l.citizen,
                                    disabled: f.citizen && o,
                                    use_text: !0,
                                    onChange: function (e) {
                                      return g("citizen", e.target.value, !0);
                                    },
                                    required: !0,
                                    should_hide_disabled_options: !1,
                                  })
                                )
                              ),
                              i.createElement(V(), {
                                title: (0, m.localize)("Tax information"),
                              }),
                              i.createElement(
                                "fieldset",
                                { className: "account-form__fieldset" },
                                i.createElement(
                                  u.DesktopWrapper,
                                  null,
                                  i.createElement(
                                    n.gN,
                                    { name: "tax_residence" },
                                    function (e) {
                                      var t = e.field;
                                      return i.createElement(
                                        u.Autocomplete,
                                        le(
                                          {
                                            id: "real_mt5_tax_residence",
                                            "data-lpignore": "true",
                                            type: "text",
                                            autoComplete: "off",
                                            label: (0, m.localize)(
                                              "Tax residence"
                                            ),
                                            error:
                                              d.tax_residence &&
                                              l.tax_residence,
                                            disabled: f.tax_residence && o,
                                            list_items: s,
                                            onItemSelection: function (e) {
                                              var t = e.value,
                                                a = e.text;
                                              return g(
                                                "tax_residence",
                                                t ? a : "",
                                                !0
                                              );
                                            },
                                            list_portal_id: "modal_root",
                                          },
                                          t
                                        )
                                      );
                                    }
                                  )
                                ),
                                i.createElement(
                                  u.MobileWrapper,
                                  null,
                                  i.createElement(u.SelectNative, {
                                    placeholder: (0, m.localize)(
                                      "Please select"
                                    ),
                                    label: (0, m.localize)("Tax residence"),
                                    value: p.tax_residence,
                                    error: d.tax_residence && l.tax_residence,
                                    disabled: f.tax_residence && o,
                                    list_items: s,
                                    use_text: !0,
                                    onChange: function (e) {
                                      return g(
                                        "tax_residence",
                                        e.target.value,
                                        !0
                                      );
                                    },
                                    required: !0,
                                  })
                                )
                              ),
                              i.createElement(
                                "fieldset",
                                { className: "account-form__fieldset" },
                                i.createElement(de, {
                                  id: "real_mt5_tax_identification_number",
                                  name: "tax_identification_number",
                                  label: (0, m.localize)(
                                    "Tax identification number"
                                  ),
                                  placeholder: (0, m.localize)(
                                    "Tax identification number"
                                  ),
                                  value: p.tax_identification_number,
                                  onBlur: c,
                                  optional: !0,
                                })
                              ),
                              i.createElement(V(), {
                                title: (0, m.localize)(
                                  "Account opening reason"
                                ),
                              }),
                              i.createElement(
                                n.gN,
                                { name: "account_opening_reason" },
                                function (e) {
                                  var t = e.field;
                                  return i.createElement(
                                    i.Fragment,
                                    null,
                                    i.createElement(
                                      u.DesktopWrapper,
                                      null,
                                      i.createElement(
                                        u.Dropdown,
                                        le(
                                          {
                                            placeholder: (0, m.localize)(
                                              "Account opening reason"
                                            ),
                                            is_align_text_left: !0,
                                            name: t.name,
                                            list: b,
                                            value: p.account_opening_reason,
                                            onChange: r,
                                            handleBlur: c,
                                            error:
                                              d.account_opening_reason &&
                                              l.account_opening_reason,
                                            list_portal_id: "modal_root",
                                          },
                                          t
                                        )
                                      )
                                    ),
                                    i.createElement(
                                      u.MobileWrapper,
                                      null,
                                      i.createElement(
                                        u.SelectNative,
                                        le(
                                          {
                                            placeholder: (0, m.localize)(
                                              "Please select"
                                            ),
                                            name: t.name,
                                            label: (0, m.localize)(
                                              "Account opening reason"
                                            ),
                                            list_items: b,
                                            value: p.account_opening_reason,
                                            error:
                                              d.account_opening_reason &&
                                              l.account_opening_reason,
                                            onChange: function (e) {
                                              r(e),
                                                g(
                                                  "account_opening_reason",
                                                  e.target.value,
                                                  !0
                                                );
                                            },
                                          },
                                          t
                                        )
                                      )
                                    )
                                  );
                                }
                              )
                            )
                          )
                        ),
                        i.createElement(
                          u.Modal.Footer,
                          { is_bypassed: (0, _.isMobile)() },
                          h &&
                            i.createElement(u.FormSubmitErrorMessage, {
                              message: h,
                            }),
                          i.createElement(u.FormSubmitButton, {
                            cancel_label: (0, m.localize)("Previous"),
                            is_disabled: a || !v,
                            is_absolute: (0, _.isMobile)(),
                            label: (0, m.localize)("Next"),
                            onCancel: function () {
                              return y(p);
                            },
                          })
                        )
                      );
                    }
                  );
                }
              );
        };
      ue.propTypes = {
        is_fully_authenticated: o().bool,
        is_loading: o().bool,
        onCancel: o().func,
        onSave: o().func,
        onSubmit: o().func,
        residence_list: o().array,
        value: o().object,
        landing_company: o().object.isRequired,
      };
      const _e = ue;
      function me(e, t, a, n, r, o, i) {
        try {
          var c = e[o](i),
            l = c.value;
        } catch (e) {
          return void a(e);
        }
        c.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function pe(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? pe(Object(a), !0).forEach(function (t) {
                ge(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : pe(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function ge(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function he(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var a = [],
                n = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(n = (i = c.next()).done) &&
                  (a.push(i.value), !t || a.length !== t);
                  n = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  n || null == c.return || c.return();
                } finally {
                  if (r) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return be(e, t);
              var a = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a
                  ? Array.from(e)
                  : "Arguments" === a ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                  ? be(e, t)
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
      function be(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      function ve(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (a = o[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var ye,
        we = function (e) {
          var t = e.onSave,
            a = e.onCancel,
            r = e.index,
            o = e.onSubmit,
            c = e.refreshNotifications,
            l = ve(e, [
              "onSave",
              "onCancel",
              "index",
              "onSubmit",
              "refreshNotifications",
            ]),
            s = i.useRef(),
            d = he(i.useState(!0), 2),
            p = d[0],
            f = d[1],
            g = he(
              (0, u.useStateCallback)({
                poa_status: "none",
                resubmit_poa: !1,
                has_poi: !1,
                form_error: "",
              }),
              2
            ),
            h = g[0],
            b = g[1],
            y = he(
              (0, u.useStateCallback)({ files: [], error_message: null }),
              2
            ),
            w = y[0],
            E = y[1],
            z = he(i.useState({}), 2),
            x = z[0],
            S = z[1],
            M = function (e) {
              t(r, e), a();
            },
            T = (function () {
              var e,
                a =
                  ((e = regeneratorRuntime.mark(function e(a, n) {
                    var i, c, l, s, d, u, _, p, f, g, y, E, z, T, D;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                a.document_file,
                                (i = ve(a, ["document_file"])),
                                n.setSubmitting(!0),
                                (e.next = 4),
                                v.WS.setSettings(i)
                              );
                            case 4:
                              if (!(c = e.sent).error) {
                                e.next = 9;
                                break;
                              }
                              return (
                                b(
                                  fe(fe({}, h), { form_error: c.error.message })
                                ),
                                n.setSubmitting(!1),
                                e.abrupt("return")
                              );
                            case 9:
                              return (
                                (e.next = 11),
                                v.WS.authorized.storage.getSettings()
                              );
                            case 11:
                              if (
                                ((l = e.sent),
                                (s = l.error),
                                (d = l.get_settings),
                                !s)
                              ) {
                                e.next = 17;
                                break;
                              }
                              return (
                                b(fe(fe({}, h), { form_error: s.message })),
                                e.abrupt("return")
                              );
                            case 17:
                              return (
                                (u = d.address_line_1),
                                (_ = d.address_line_2),
                                (p = d.address_city),
                                (f = d.address_state),
                                (g = d.address_postcode),
                                S({
                                  address_line_1: u,
                                  address_line_2: _,
                                  address_city: p,
                                  address_postcode: g,
                                  address_state: f,
                                }),
                                b(fe(fe({}, h), { form_error: "" })),
                                (e.prev = 20),
                                (e.next = 23),
                                ye.current.upload()
                              );
                            case 23:
                              if (!(y = e.sent).warning) {
                                e.next = 28;
                                break;
                              }
                              return (
                                b(fe(fe({}, h), { form_error: y.warning })),
                                n.setSubmitting(!1),
                                e.abrupt("return")
                              );
                            case 28:
                              return (
                                (e.next = 30),
                                v.WS.authorized.storage.getAccountStatus()
                              );
                            case 30:
                              if (
                                ((E = e.sent),
                                (z = E.error),
                                (T = E.get_account_status),
                                !z)
                              ) {
                                e.next = 37;
                                break;
                              }
                              return (
                                b(fe(fe({}, h), { form_error: s.message })),
                                n.setSubmitting(!1),
                                e.abrupt("return")
                              );
                            case 37:
                              (D = T.authentication.identity) &&
                              "none" === D.status
                                ? (b(
                                    fe(fe({}, h), {
                                      form_error: (0, m.localize)(
                                        "Identity confirmation failed. You will be redirected to the previous step."
                                      ),
                                    })
                                  ),
                                  setTimeout(function () {
                                    M(d);
                                  }, 3e3))
                                : (void 0,
                                  void 0,
                                  (O = w.files),
                                  (A = w.error_message),
                                  o(
                                    r,
                                    fe(fe(fe({}, x), h), {
                                      document_file: O,
                                      file_error_message: A,
                                    })
                                  )),
                                (e.next = 45);
                              break;
                            case 42:
                              (e.prev = 42),
                                (e.t0 = e.catch(20)),
                                b(fe(fe({}, h), { form_error: e.t0.message }));
                            case 45:
                              n.setSubmitting(!1),
                                t(r, a),
                                o(r, a, n.setSubmitting);
                            case 48:
                            case "end":
                              return e.stop();
                          }
                        var O, A;
                      },
                      e,
                      null,
                      [[20, 42]]
                    );
                  })),
                  function () {
                    var t = this,
                      a = arguments;
                    return new Promise(function (n, r) {
                      var o = e.apply(t, a);
                      function i(e) {
                        me(o, n, r, i, c, "next", e);
                      }
                      function c(e) {
                        me(o, n, r, i, c, "throw", e);
                      }
                      i(void 0);
                    });
                  });
              return function (e, t) {
                return a.apply(this, arguments);
              };
            })();
          i.useEffect(
            function () {
              v.WS.authorized.getAccountStatus().then(function (e) {
                v.WS.wait("states_list").then(function () {
                  var t = e.get_account_status.authentication,
                    a = t.document,
                    n = t.identity,
                    r = !(!n || "none" !== n.status);
                  b(
                    fe(fe({}, h), { poa_status: a.status, has_poi: r }),
                    function () {
                      f(!1), c();
                    }
                  );
                });
              });
            },
            [c, b]
          );
          var D = function (e, t) {
              return (
                h.poa_status !== ne().verified && 0 !== Object.keys(t).length
              );
            },
            O = function () {
              b(fe(fe({}, h), { resubmit_poa: !0 }));
            },
            A = l.states_list,
            N = l.value,
            P = N.address_line_1,
            F = N.address_line_2,
            C = N.address_city,
            k = N.address_state,
            j = N.address_postcode,
            L = h.form_error,
            R = h.has_poi,
            I = h.poa_status,
            B = h.resubmit_poa,
            W = h.submitted_poa,
            U = !p && (B || I === ne().none);
          return i.createElement(
            n.J9,
            {
              initialValues: {
                address_line_1: P,
                address_line_2: F,
                address_city: C,
                address_state: k,
                address_postcode: j,
                document_file: w.files,
              },
              validateOnMount: !0,
              validate: function (e) {
                if ([ne().verified, ne().pending].includes(h.poa_status))
                  return {};
                var t = {
                    address_line_1: [
                      function (e) {
                        return !!e && !e.match(/^\s*$/);
                      },
                      function (e) {
                        return (0, _.validAddress)(e);
                      },
                      function (e) {
                        return (0, _.validLength)(e, { max: 70 });
                      },
                    ],
                    address_line_2: [
                      function (e) {
                        return !e || (0, _.validAddress)(e);
                      },
                      function (e) {
                        return (0, _.validLength)(e, { max: 70 });
                      },
                    ],
                    address_city: [
                      function (e) {
                        return !!e && !e.match(/^\s*$/);
                      },
                      function (e) {
                        return (0, _.validLength)(e, { min: 1, max: 35 });
                      },
                      function (e) {
                        return (0, _.validLetterSymbol)(e);
                      },
                    ],
                    address_state: [
                      function (e) {
                        return !!e && !e.match(/^\s*$/);
                      },
                      function (e) {
                        return !e || (0, _.validLength)(e, { min: 1, max: 35 });
                      },
                    ],
                    address_postcode: [
                      function (e) {
                        return !!e && !e.match(/^\s*$/);
                      },
                      function (e) {
                        return (0, _.validLength)(e, { min: 1, max: 20 });
                      },
                      function (e) {
                        return (0, _.validPostCode)(e);
                      },
                    ],
                  },
                  a = {
                    address_line_1: [
                      (0, m.localize)("First line of address is required"),
                      (0, m.localize)(
                        "First line of address is not in a proper format."
                      ),
                      (0, m.localize)(
                        "This should not exceed {{max}} characters.",
                        { max: 70 }
                      ),
                    ],
                    address_line_2: [
                      (0, m.localize)(
                        "Second line of address is not in a proper format."
                      ),
                      (0, m.localize)(
                        "This should not exceed {{max}} characters.",
                        { max: 70 }
                      ),
                    ],
                    address_city: [
                      (0, m.localize)("Town/City is required."),
                      (0, m.localize)(
                        "This should not exceed {{max_number}} characters.",
                        { max_number: 35 }
                      ),
                      (0, m.localize)("Town/City is not in a proper format."),
                    ],
                    address_state: [
                      (0, m.localize)("State/Province is required."),
                      (0, m.localize)(
                        "State/Province is not in a proper format."
                      ),
                    ],
                    address_postcode: [
                      (0, m.localize)("Postal/ZIP code is required"),
                      (0, m.localize)(
                        "This should not exceed {{max_number}} characters.",
                        { max_number: 20 }
                      ),
                      (0, m.localize)(
                        "Only letters, numbers, space, and hyphen are allowed."
                      ),
                    ],
                  },
                  n = {};
                return (
                  Object.entries(t).forEach(function (t) {
                    var r = he(t, 2),
                      o = r[0],
                      i = r[1].findIndex(function (t) {
                        return !t(e[o]);
                      });
                    -1 !== i && (n[o] = a[o][i]);
                  }),
                  n
                );
              },
              enableReinitialize: !0,
              onSubmit: T,
              innerRef: s,
            },
            function (e) {
              e.dirty;
              var a = e.errors,
                o = e.handleSubmit,
                c = e.isSubmitting,
                l = e.handleBlur,
                s = e.handleChange,
                d = e.setFieldTouched,
                f = e.setFieldValue,
                g = e.values,
                h = e.touched;
              return i.createElement(
                u.AutoHeightWrapper,
                { default_height: 200 },
                function (e) {
                  var b = e.setRef,
                    y = e.height;
                  return i.createElement(
                    "form",
                    { ref: b, onSubmit: o, className: "cfd-proof-of-address" },
                    i.createElement(
                      u.Div100vhContainer,
                      {
                        className: "details-form",
                        height_offset: "100px",
                        is_disabled: (0, _.isDesktop)(),
                      },
                      p && i.createElement(u.Loading, { is_fullscreen: !1 }),
                      U &&
                        i.createElement(
                          u.ThemedScrollbars,
                          {
                            autohide: !1,
                            height: "".concat(y - 77, "px"),
                            is_bypassed: (0, _.isMobile)(),
                          },
                          i.createElement(
                            "div",
                            { className: "cfd-proof-of-address__field-area" },
                            i.createElement(V(), {
                              subtitle: (0, m.localize)(
                                "(All fields are required)"
                              ),
                              title: (0, m.localize)("Address information"),
                            }),
                            i.createElement(de, {
                              name: "address_line_1",
                              maxLength: 255,
                              required: !0,
                              label: (0, m.localize)("First line of address*"),
                              placeholder: (0, m.localize)(
                                "First line of address*"
                              ),
                              onBlur: l,
                            }),
                            i.createElement(de, {
                              name: "address_line_2",
                              maxLength: 255,
                              label: (0, m.localize)(
                                "Second line of address (optional)"
                              ),
                              optional: !0,
                              placeholder: (0, m.localize)(
                                "Second line of address"
                              ),
                              onBlur: l,
                            }),
                            i.createElement(
                              "div",
                              {
                                className:
                                  "cfd-proof-of-address__inline-fields",
                              },
                              i.createElement(de, {
                                maxLength: 255,
                                name: "address_city",
                                required: !0,
                                label: (0, m.localize)("Town/City*"),
                                placeholder: (0, m.localize)("Town/City*"),
                                onBlur: l,
                              }),
                              i.createElement(
                                "fieldset",
                                { className: "address-state__fieldset" },
                                (null == A ? void 0 : A.length) > 0
                                  ? i.createElement(
                                      i.Fragment,
                                      null,
                                      i.createElement(
                                        u.DesktopWrapper,
                                        null,
                                        i.createElement(
                                          n.gN,
                                          { name: "address_state" },
                                          function (e) {
                                            var t = e.field;
                                            return i.createElement(u.Dropdown, {
                                              id: "address_state",
                                              required: !0,
                                              className:
                                                "address_state-dropdown",
                                              is_align_text_left: !0,
                                              list: A,
                                              error: h[t.name] && a[t.name],
                                              name: "address_state",
                                              value: g.address_state,
                                              onChange: s,
                                              placeholder: (0, m.localize)(
                                                "State/Province*"
                                              ),
                                              list_portal_id: "modal_root",
                                            });
                                          }
                                        )
                                      ),
                                      i.createElement(
                                        u.MobileWrapper,
                                        null,
                                        i.createElement(u.SelectNative, {
                                          label: (0, m.localize)(
                                            "State/Province*"
                                          ),
                                          value: g.address_state,
                                          list_items: A,
                                          error:
                                            h.address_state && a.address_state,
                                          onChange: function (e) {
                                            s(e),
                                              f(
                                                "address_state",
                                                e.target.value,
                                                !0
                                              );
                                          },
                                          required: !0,
                                        })
                                      )
                                    )
                                  : i.createElement(de, {
                                      name: "address_state",
                                      label: (0, m.localize)("State/Province*"),
                                      placeholder: (0, m.localize)(
                                        "State/Province*"
                                      ),
                                      value: g.address_state,
                                      required: !0,
                                      onBlur: l,
                                    })
                              ),
                              i.createElement(de, {
                                maxLength: 255,
                                name: "address_postcode",
                                label: (0, m.localize)("Postal/ZIP code*"),
                                placeholder: (0, m.localize)(
                                  "Postal/ZIP code*"
                                ),
                                onBlur: l,
                                required: !0,
                              })
                            ),
                            i.createElement(
                              "div",
                              {
                                className: "cfd-proof-of-address__file-upload",
                              },
                              i.createElement(X(), {
                                onRef: function (e) {
                                  return (ye = e);
                                },
                                getSocket: v.WS.getSocket,
                                onFileDrop: function (e) {
                                  return (function (e, a, n, o, i) {
                                    n("document_file", !0),
                                      o("document_file", e),
                                      E(
                                        { files: e, error_message: a },
                                        function () {
                                          "function" == typeof t &&
                                            t(
                                              r,
                                              fe(fe({}, i), {
                                                document_file: e,
                                              })
                                            );
                                        }
                                      );
                                  })(e.files, e.error_message, d, f, g);
                                },
                              })
                            )
                          )
                        ),
                      I !== ne().none &&
                        !B &&
                        i.createElement(
                          u.ThemedScrollbars,
                          { height: y, is_bypassed: (0, _.isMobile)() },
                          W &&
                            i.createElement(te(), {
                              is_description_enabled: !1,
                              has_poi: R,
                            }),
                          I === ne().pending &&
                            i.createElement(K(), {
                              is_description_enabled: !1,
                            }),
                          I === ne().verified &&
                            i.createElement(J(), {
                              is_description_enabled: !1,
                              has_poi: R,
                            }),
                          I === ne().expired &&
                            i.createElement(H(), { onClick: O }),
                          (I === ne().rejected || I === ne().suspected) &&
                            i.createElement(Q(), null)
                        ),
                      i.createElement(
                        u.Modal.Footer,
                        { is_bypassed: (0, _.isMobile)() },
                        (I === ne().verified || U) &&
                          i.createElement(u.FormSubmitButton, {
                            has_cancel: !0,
                            cancel_label: (0, m.localize)("Previous"),
                            is_disabled:
                              D(0, a) ||
                              (!(I === ne().verified) &&
                                w.files &&
                                w.files.length < 1) ||
                              !!w.error_message,
                            label:
                              I === ne().verified
                                ? (0, m.localize)("Submit")
                                : (0, m.localize)("Next"),
                            is_absolute: (0, _.isMobile)(),
                            is_loading: c,
                            form_error: L,
                            onCancel: function () {
                              return M(g);
                            },
                          })
                      )
                    )
                  );
                }
              );
            }
          );
        };
      we.propTypes = {
        onCancel: o().func,
        onSave: o().func,
        onSubmit: o().func,
        storeProofOfAddress: o().func,
        value: o().object,
      };
      const Ee = we;
      var ze = a("@deriv/account/dist/js/proof-of-identity-container"),
        xe = a.n(ze);
      function Se() {
        return (Se =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Me(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var Te = function (e) {
        var t = e.authentication_status,
          a = e.form_error,
          r = e.index,
          o = e.onCancel,
          c = e.onSubmit,
          l = e.value,
          s = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = (function (e, t) {
                if (null == e) return {};
                var a,
                  n,
                  r = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++)
                (a = o[n]),
                  t.indexOf(a) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, a) &&
                      (r[a] = e[a]));
            }
            return r;
          })(e, [
            "authentication_status",
            "form_error",
            "index",
            "onCancel",
            "onSubmit",
            "value",
          ]),
          d = t.identity_status,
          p = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                if (
                  "undefined" != typeof Symbol &&
                  Symbol.iterator in Object(e)
                ) {
                  var a = [],
                    n = !0,
                    r = !1,
                    o = void 0;
                  try {
                    for (
                      var i, c = e[Symbol.iterator]();
                      !(n = (i = c.next()).done) &&
                      (a.push(i.value), !t || a.length !== t);
                      n = !0
                    );
                  } catch (e) {
                    (r = !0), (o = e);
                  } finally {
                    try {
                      n || null == c.return || c.return();
                    } finally {
                      if (r) throw o;
                    }
                  }
                  return a;
                }
              })(e, t) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return Me(e, t);
                  var a = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === a && e.constructor && (a = e.constructor.name),
                    "Map" === a || "Set" === a
                      ? Array.from(e)
                      : "Arguments" === a ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                      ? Me(e, t)
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
          })(i.useState("none"), 2),
          f = p[0],
          g = p[1],
          h = i.useCallback(
            function () {
              var e = {};
              return (
                ["pending", "verified"].includes(f) ||
                  ["pending", "verified"].includes(d) ||
                  (e.poi_state = !0),
                e
              );
            },
            [f, d]
          ),
          b = !(
            ["pending", "verified"].includes(f) ||
            ["pending", "verified"].includes(d)
          );
        return i.createElement(
          n.J9,
          {
            initialValues: { poi_state: l.poi_state },
            validate: h,
            onSubmit: function (e, t) {
              return c(r, { poi_state: f }, t.setSubmitting);
            },
          },
          function (e) {
            var t = e.handleSubmit;
            return i.createElement(
              u.AutoHeightWrapper,
              { default_height: 200 },
              function (e) {
                var n = e.setRef,
                  r = e.height;
                return i.createElement(
                  "form",
                  { ref: n, className: "cfd-proof-of-identity", onSubmit: t },
                  i.createElement(
                    "div",
                    { className: "details-form" },
                    i.createElement("input", {
                      type: "hidden",
                      name: "poi_state",
                      value: f,
                      readOnly: !0,
                    }),
                    i.createElement(
                      u.Div100vhContainer,
                      {
                        className: "cfd-proof-of-identity__fields",
                        height_offset: "180px",
                        is_disabled: (0, _.isDesktop)(),
                      },
                      i.createElement(
                        xe(),
                        Se({}, s, {
                          serviceToken: v.WS.serviceToken,
                          notificationEvent: v.WS.notificationEvent,
                          getAccountStatus: v.WS.authorized.getAccountStatus,
                          height: r,
                          onStateChange: function (e) {
                            var t = e.status,
                              a = ["pending", "verified"].includes(d) ? d : t;
                            g(a);
                          },
                          is_trading_button_enabled: !1,
                          is_description_enabled: !1,
                          is_message_enabled: !1,
                        })
                      )
                    ),
                    i.createElement(
                      u.Modal.Footer,
                      { is_bypassed: (0, _.isMobile)() },
                      i.createElement(u.FormSubmitButton, {
                        has_cancel: !0,
                        cancel_label: (0, m.localize)("Previous"),
                        is_disabled: b,
                        is_absolute: (0, _.isMobile)(),
                        label: (0, m.localize)("Next"),
                        onCancel: o,
                        form_error: a,
                      })
                    )
                  )
                );
              }
            );
          }
        );
      };
      Te.propTypes = {
        authentication_status: o().object,
        form_error: o().string,
        index: o().number,
        onCancel: o().func,
        onSave: o().func,
        onSubmit: o().func,
        refreshNotifications: o().func,
        addNotificationByKey: o().func,
        removeNotificationMessage: o().func,
        value: o().object,
      };
      const De = Te;
      function Oe(e) {
        return (Oe =
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
      function Ae() {
        return (Ae =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Ne(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      function Pe(e, t, a, n, r, o, i) {
        try {
          var c = e[o](i),
            l = c.value;
        } catch (e) {
          return void a(e);
        }
        c.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function Fe(e) {
        return function () {
          var t = this,
            a = arguments;
          return new Promise(function (n, r) {
            var o = e.apply(t, a);
            function i(e) {
              Pe(o, n, r, i, c, "next", e);
            }
            function c(e) {
              Pe(o, n, r, i, c, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function Ce(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function ke(e, t) {
        return (ke =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function je(e, t) {
        return !t || ("object" !== Oe(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Le(e) {
        return (Le = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var Re = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && ke(e, t);
        })(r, e);
        var t,
          a,
          n = (function (e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var a,
                n = Le(e);
              if (t) {
                var r = Le(this).constructor;
                a = Reflect.construct(n, arguments, r);
              } else a = n.apply(this, arguments);
              return je(this, a);
            };
          })(r);
        function r(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
            ((t = n.call(this, e)).clearError = function () {
              t.setState({ form_error: "" });
            }),
            (t.nextStep = function () {
              t.clearError(), t.has_more_steps ? t.goNext() : t.finishWizard();
            }),
            (t.finishWizard = function () {
              t.props.openPendingDialog(), t.props.toggleModal();
            }),
            (t.prevStep = function () {
              t.setState({ step: t.state.step - 1, form_error: "" });
            }),
            (t.updateValue = (function () {
              var e = Fe(
                regeneratorRuntime.mark(function e(a, n, r) {
                  var o,
                    i = arguments;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (i.length > 3 && void 0 !== i[3] && !i[3]) ||
                            0 !== a
                          ) {
                            e.next = 10;
                            break;
                          }
                          return (e.next = 4), v.WS.setSettings(n);
                        case 4:
                          if (!(o = e.sent).error) {
                            e.next = 9;
                            break;
                          }
                          return (
                            t.setState({ form_error: o.error.message }),
                            r(!1),
                            e.abrupt("return")
                          );
                        case 9:
                          t.initiatePersonalDetails(r);
                        case 10:
                          if (0 !== a) {
                            e.next = 13;
                            break;
                          }
                          return (
                            (e.next = 13),
                            v.WS.triggerMt5DryRun({
                              email: t.props.client_email,
                            })
                          );
                        case 13:
                          t.saveFormData(a, n), t.nextStep(r);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, a, n) {
                return e.apply(this, arguments);
              };
            })()),
            (t.initiatePersonalDetails = (function () {
              var e = Fe(
                regeneratorRuntime.mark(function e(a) {
                  var n, r;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), v.WS.authorized.storage.getSettings()
                          );
                        case 2:
                          if (!(n = e.sent).error) {
                            e.next = 7;
                            break;
                          }
                          return (
                            t.setState({ form_error: n.error.message }),
                            "function" == typeof a && a(!1),
                            e.abrupt("return")
                          );
                        case 7:
                          (r = Object.assign([], t.state.items)),
                            n.get_settings.citizen &&
                              (r[0].form_value.citizen = t.transform(
                                n.get_settings.citizen
                              )),
                            n.get_settings.tax_residence &&
                              (r[0].form_value.tax_residence = t.transform(
                                n.get_settings.tax_residence
                              )),
                            n.get_settings.tax_identification_number &&
                              (r[0].form_value.tax_identification_number =
                                n.get_settings.tax_identification_number),
                            n.get_settings.account_opening_reason &&
                              (r[0].form_value.account_opening_reason =
                                n.get_settings.account_opening_reason),
                            t.setState(
                              { items: r },
                              t.props.refreshNotifications
                            );
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (t.transform = function (e) {
              var a = (function (e, t) {
                return (
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })(e) ||
                  (function (e, t) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    ) {
                      var a = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                      try {
                        for (
                          var i, c = e[Symbol.iterator]();
                          !(n = (i = c.next()).done) &&
                          (a.push(i.value), !t || a.length !== t);
                          n = !0
                        );
                      } catch (e) {
                        (r = !0), (o = e);
                      } finally {
                        try {
                          n || null == c.return || c.return();
                        } finally {
                          if (r) throw o;
                        }
                      }
                      return a;
                    }
                  })(e, t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return Ne(e, t);
                      var a = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === a &&
                          e.constructor &&
                          (a = e.constructor.name),
                        "Map" === a || "Set" === a
                          ? Array.from(e)
                          : "Arguments" === a ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                          ? Ne(e, t)
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
              })(
                t.props.residence_list.filter(function (t) {
                  return t.value === e;
                }),
                1
              )[0];
              return (0, _.getPropertyValue)(a, ["text"]) || e;
            }),
            (t.goNext = function () {
              t.setState({ step: t.state.step + 1 });
            }),
            (t.getCurrent = function (e) {
              return e
                ? t.state.items[t.state_index][e]
                : t.state.items[t.state_index];
            }),
            (t.saveFormData = function (e, a) {
              var n = Object.assign([], t.state.items);
              (n[e].form_value = a),
                0 === t.state_index &&
                  ((n[0].form_value.citizen = t.transform(a.citizen)),
                  (n[0].form_value.tax_residence = t.transform(
                    a.tax_residence
                  ))),
                t.setState({ items: n });
            }),
            (t.state = {
              finished: void 0,
              step: 0,
              form_error: "",
              is_loading: !1,
              items: [
                {
                  header: {
                    active_title: (0, m.localize)(
                      "Complete your personal details"
                    ),
                    title: (0, m.localize)("Personal details"),
                  },
                  body: _e,
                  form_value: {
                    citizen: "",
                    tax_residence: "",
                    tax_identification_number: "",
                    account_opening_reason: "",
                  },
                  props: [
                    "residence_list",
                    "is_fully_authenticated",
                    "landing_company",
                  ],
                },
                {
                  header: {
                    active_title: (0, m.localize)(
                      "Complete your proof of identity"
                    ),
                    title: (0, m.localize)("Proof of identity"),
                  },
                  body: De,
                  form_value: { poi_state: "unknown" },
                  props: [
                    "addNotificationByKey",
                    "authentication_status",
                    "refreshNotifications",
                    "removeNotificationMessage",
                    "removeNotificationByKey",
                  ],
                },
                {
                  header: {
                    active_title: (0, m.localize)(
                      "Complete your proof of address"
                    ),
                    title: (0, m.localize)("Proof of address"),
                  },
                  body: Ee,
                  form_value: {
                    address_line_1: e.get_settings.address_line_1,
                    address_line_2: e.get_settings.address_line_2,
                    address_city: e.get_settings.address_city,
                    address_state: e.get_settings.address_state,
                    address_postcode: e.get_settings.address_postcode,
                    upload_file: "",
                  },
                  props: [
                    "states_list",
                    "get_settings",
                    "storeProofOfAddress",
                    "refreshNotifications",
                  ],
                },
              ],
            }),
            t
          );
        }
        return (
          (t = r),
          (a = [
            {
              key: "state_index",
              get: function () {
                return this.state.step;
              },
            },
            {
              key: "has_more_steps",
              get: function () {
                return this.state.step + 1 < this.state.items.length;
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                0 === this.state_index &&
                  (this.setState({ is_loading: !0 }),
                  this.initiatePersonalDetails().then(function () {
                    e.setState({ is_loading: !1 });
                  }));
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.getCurrent("body"),
                  a = this.getCurrent("form_value"),
                  n = (this.getCurrent("props") || []).reduce(function (t, a) {
                    return Object.assign(
                      t,
                      ((n = {}),
                      (r = a),
                      (o = e.props[a]),
                      r in n
                        ? Object.defineProperty(n, r, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (n[r] = o),
                      n)
                    );
                    var n, r, o;
                  }, {}),
                  r = this.getCurrent("height") || "auto";
                return i.createElement(
                  u.Div100vhContainer,
                  {
                    className: "cfd-financial-stp-modal",
                    id: "real_mt5_financial_stp_account_opening",
                    is_disabled: (0, _.isDesktop)(),
                    height_offset: "40px",
                  },
                  i.createElement(
                    "div",
                    { className: "cfd-financial-stp-modal__heading" },
                    this.getCurrent() &&
                      i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(
                          u.DesktopWrapper,
                          null,
                          i.createElement(u.FormProgress, {
                            steps: this.state.items,
                            current_step: this.state.step,
                          })
                        ),
                        i.createElement(
                          u.MobileWrapper,
                          null,
                          i.createElement(
                            "div",
                            {
                              className:
                                "cfd-financial-stp-modal__header-steps",
                            },
                            i.createElement(
                              "h4",
                              {
                                className:
                                  "cfd-financial-stp-modal__header-steps-title",
                              },
                              i.createElement(m.Localize, {
                                i18n_default_text:
                                  "Step {{step}}: {{step_title}} ({{step}} of {{steps}})",
                                values: {
                                  step: this.state.step + 1,
                                  steps: this.state.items.length,
                                  step_title:
                                    this.state.items[this.state.step].header
                                      .title,
                                },
                              })
                            ),
                            this.state.items[this.state.step].header
                              .active_title &&
                              i.createElement(
                                "h4",
                                {
                                  className:
                                    "cfd-financial-stp-modal__header-steps-subtitle",
                                },
                                this.state.items[this.state.step].header
                                  .active_title
                              )
                          )
                        )
                      )
                  ),
                  i.createElement(
                    "div",
                    { className: "cfd-financial-stp-modal__body" },
                    i.createElement(
                      t,
                      Ae(
                        {
                          value: a,
                          index: this.state_index,
                          onSubmit: this.updateValue,
                          height: r,
                          is_loading: this.state.is_loading,
                          onCancel: this.prevStep,
                          onSave: this.saveFormData,
                          form_error: this.state.form_error,
                        },
                        n
                      )
                    )
                  )
                );
              },
            },
          ]) && Ce(t.prototype, a),
          r
        );
      })(i.Component);
      Re.propTypes = { openPendingDialog: o().func, toggleModal: o().func };
      const Ie = (0, y.$j)(function (e) {
          var t = e.client,
            a = e.modules.cfd,
            n = e.ui;
          return {
            addNotificationByKey: n.addNotificationMessageByKey,
            authentication_status: t.authentication_status,
            get_settings: t.account_settings,
            client_email: t.email,
            is_fully_authenticated: t.is_fully_authenticated,
            landing_company: t.landing_company,
            openPendingDialog: a.openPendingDialog,
            refreshNotifications: t.refreshNotifications,
            removeNotificationMessage: n.removeNotificationMessage,
            removeNotificationByKey: n.removeNotificationByKey,
            residence_list: t.residence_list,
            states_list: t.states_list,
            storeProofOfAddress: a.storeProofOfAddress,
          };
        })(Re),
        Be = (0, y.$j)(function (e) {
          var t = e.ui,
            a = e.modules;
          return {
            disableApp: t.disableApp,
            disableMt5FinancialStpModal: a.cfd.disableMt5FinancialStpModal,
            enableApp: t.enableApp,
            is_mt5_financial_stp_modal_open:
              a.cfd.is_mt5_financial_stp_modal_open,
          };
        })(function (e) {
          var t = e.disableApp,
            a = e.disableMt5FinancialStpModal,
            n = e.enableApp,
            r = e.is_mt5_financial_stp_modal_open;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              u.DesktopWrapper,
              null,
              i.createElement(
                u.Modal,
                {
                  id: "mt5_financial_stp_signup_modal",
                  className: "mt5-financial-stp-signup-modal",
                  disableApp: t,
                  width: "904px",
                  title: (0, m.localize)(
                    "Create a DMT5 real Financial STP account"
                  ),
                  enableApp: n,
                  is_open: r,
                  has_close_icon: !0,
                  height: "740px",
                  toggleModal: a,
                },
                i.createElement(Ie, { toggleModal: a })
              )
            ),
            i.createElement(
              u.MobileWrapper,
              null,
              i.createElement(
                u.MobileDialog,
                {
                  portal_element_id: "modal_root",
                  title: (0, m.localize)(
                    "Create a DMT5 real Financial STP account"
                  ),
                  wrapper_classname: "mt5-financial-stp-signup-modal",
                  visible: r,
                  onClose: a,
                },
                i.createElement(Ie, { toggleModal: a })
              )
            )
          );
        });
      function We(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function Ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? We(Object(a), !0).forEach(function (t) {
                Xe(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : We(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function Xe(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function qe(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var a = [],
                n = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(n = (i = c.next()).done) &&
                  (a.push(i.value), !t || a.length !== t);
                  n = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  n || null == c.return || c.return();
                } finally {
                  if (r) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Ve(e, t);
              var a = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a
                  ? Array.from(e)
                  : "Arguments" === a ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                  ? Ve(e, t)
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
      function Ve(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var $e = function (e) {
          var t,
            a,
            n,
            r = e.landing_companies,
            o = e.platform,
            i = e.is_logged_in,
            c = o === _.CFD_PLATFORMS.MT5 ? 3 : 2,
            l = i
              ? [
                  null == r ||
                  null === (t = r.mt_gaming_company) ||
                  void 0 === t
                    ? void 0
                    : t.financial,
                  null == r ||
                  null === (a = r.mt_financial_company) ||
                  void 0 === a
                    ? void 0
                    : a.financial,
                  (null == r ||
                  null === (n = r.mt_financial_company) ||
                  void 0 === n
                    ? void 0
                    : n.financial_stp) && o === _.CFD_PLATFORMS.MT5,
                ].filter(Boolean).length
              : c;
          return [
            {
              attribute: (0, m.localize)("Account currency"),
              mt5: {
                synthetic: (0, m.localize)("USD"),
                synthetic_eu: (0, m.localize)("EUR"),
                financial: (0, m.localize)("USD"),
                financial_au: (0, m.localize)("USD"),
                financial_eu: (0, m.localize)("EUR/GBP"),
                financial_stp: (0, m.localize)("USD"),
                footnote: null,
              },
              dxtrade: {
                synthetic: (0, m.localize)("USD"),
                synthetic_eu: (0, m.localize)("EUR"),
                financial: (0, m.localize)("USD"),
                financial_au: (0, m.localize)("USD"),
                financial_eu: (0, m.localize)("EUR/GBP"),
                footnote: null,
              },
            },
            {
              attribute: (0, m.localize)("Maximum leverage"),
              mt5: {
                synthetic: (0, m.localize)("Up to 1:1000"),
                synthetic_eu: (0, m.localize)("Up to 1:1000"),
                financial: (0, m.localize)("Up to 1:1000"),
                financial_au: (0, m.localize)("Up to 1:30"),
                financial_eu: (0, m.localize)("Up to 1:30"),
                financial_stp: (0, m.localize)("Up to 1:100"),
                footnote: (0, m.localize)(
                  "Leverage gives you the ability to trade a larger position using your existing capital. Leverage varies across different symbols."
                ),
              },
              dxtrade: {
                synthetic: (0, m.localize)("Up to 1:1000"),
                synthetic_eu: (0, m.localize)("Up to 1:1000"),
                financial: (0, m.localize)("Up to 1:1000"),
                financial_au: (0, m.localize)("Up to 1:30"),
                financial_eu: (0, m.localize)("Up to 1:30"),
                footnote: (0, m.localize)(
                  "Leverage gives you the ability to trade a larger position using your existing capital. Leverage varies across different symbols."
                ),
              },
            },
            {
              attribute: (0, m.localize)("Order execution"),
              mt5: {
                synthetic: (0, m.localize)("Market"),
                synthetic_eu: (0, m.localize)("Market"),
                financial: (0, m.localize)("Market"),
                financial_au: (0, m.localize)("Market"),
                financial_eu: (0, m.localize)("Market"),
                financial_stp: (0, m.localize)("Market"),
                footnote: (0, m.localize)(
                  "All {{count}} account types use market execution. This means you agree with the broker's price in advance and will place orders at the broker's price.",
                  { count: l }
                ),
              },
              dxtrade: {
                synthetic: (0, m.localize)("Market"),
                synthetic_eu: (0, m.localize)("Market"),
                financial: (0, m.localize)("Market"),
                financial_au: (0, m.localize)("Market"),
                financial_eu: (0, m.localize)("Market"),
                footnote: (0, m.localize)(
                  "All {{count}} account types use market execution. This means you agree with the broker's price in advance and will place orders at the broker's price.",
                  { count: l }
                ),
              },
            },
            {
              attribute: (0, m.localize)("Spread"),
              mt5: {
                synthetic: (0, m.localize)("Fixed/Variable"),
                synthetic_eu: (0, m.localize)("Fixed/Variable"),
                financial: (0, m.localize)("Variable"),
                financial_au: (0, m.localize)("Variable"),
                financial_eu: (0, m.localize)("Variable"),
                financial_stp: (0, m.localize)("Variable"),
                footnote: (0, m.localize)(
                  "The spread is the difference between the buy price and sell price. A variable spread means that the spread is constantly changing, depending on market conditions. A fixed spread remains constant but is subject to alteration, at the Broker's absolute discretion."
                ),
              },
              dxtrade: {
                synthetic: (0, m.localize)("Fixed/Variable"),
                synthetic_eu: (0, m.localize)("Fixed/Variable"),
                financial: (0, m.localize)("Variable"),
                financial_au: (0, m.localize)("Variable"),
                financial_eu: (0, m.localize)("Variable"),
                footnote: (0, m.localize)(
                  "The spread is the difference between the buy price and sell price. A variable spread means that the spread is constantly changing, depending on market conditions. A fixed spread remains constant but is subject to alteration, at the Broker's absolute discretion."
                ),
              },
            },
            {
              attribute: (0, m.localize)("Commission"),
              mt5: {
                synthetic: (0, m.localize)("No"),
                synthetic_eu: (0, m.localize)("No"),
                financial: (0, m.localize)("No"),
                financial_au: (0, m.localize)("No"),
                financial_eu: (0, m.localize)("No"),
                financial_stp: (0, m.localize)("No"),
                footnote: (0, m.localize)(
                  "Deriv charges no commission across all account types."
                ),
              },
              dxtrade: {
                synthetic: (0, m.localize)("No"),
                synthetic_eu: (0, m.localize)("No"),
                financial: (0, m.localize)("No"),
                financial_au: (0, m.localize)("No"),
                financial_eu: (0, m.localize)("No"),
                footnote: (0, m.localize)(
                  "Deriv charges no commission across all account types."
                ),
              },
            },
            {
              attribute: (0, m.localize)("Minimum deposit"),
              mt5: {
                synthetic: (0, m.localize)("No"),
                synthetic_eu: (0, m.localize)("No"),
                financial: (0, m.localize)("No"),
                financial_au: (0, m.localize)("No"),
                financial_eu: (0, m.localize)("No"),
                financial_stp: (0, m.localize)("No"),
                footnote: null,
              },
              dxtrade: {
                synthetic: (0, m.localize)("No"),
                synthetic_eu: (0, m.localize)("No"),
                financial: (0, m.localize)("No"),
                financial_au: (0, m.localize)("No"),
                financial_eu: (0, m.localize)("No"),
                footnote: null,
              },
            },
            {
              attribute: (0, m.localize)("Margin call"),
              mt5: {
                synthetic: (0, m.localize)("100%"),
                synthetic_eu: (0, m.localize)("100%"),
                financial: (0, m.localize)("150%"),
                financial_au: (0, m.localize)("100%"),
                financial_eu: (0, m.localize)("100%"),
                financial_stp: (0, m.localize)("150%"),
                footnote: (0, m.localize)(
                  "When the remaining funds in your account is deemed insufficient to cover the leverage or margin requirements, your account will be placed under margin call. To prevent a margin call escalating to a stop out level, you can deposit  additional funds into your account or close any open positions."
                ),
              },
              dxtrade: {
                synthetic: (0, m.localize)("100%"),
                synthetic_eu: (0, m.localize)("100%"),
                financial: (0, m.localize)("100%"),
                financial_au: (0, m.localize)("100%"),
                financial_eu: (0, m.localize)("100%"),
                footnote: (0, m.localize)(
                  "When the remaining funds in your account is deemed insufficient to cover the leverage or margin requirements, your account will be placed under margin call. To prevent a margin call escalating to a stop out level, you can deposit  additional funds into your account or close any open positions."
                ),
              },
            },
            {
              attribute: (0, m.localize)("Stop out level"),
              mt5: {
                synthetic: (0, m.localize)("50%"),
                synthetic_eu: (0, m.localize)("50%"),
                financial: (0, m.localize)("75%"),
                financial_au: (0, m.localize)("50%"),
                financial_eu: (0, m.localize)("50%"),
                financial_stp: (0, m.localize)("75%"),
                footnote: (0, m.localize)(
                  "When the remaining funds in your account is deemed insufficient to cover the leverage or margin requirements, your account will be placed under margin call. To prevent a margin call escalating to a stop out level, you can deposit  additional funds into your account or close any open positions."
                ),
              },
              dxtrade: {
                synthetic: (0, m.localize)("50%"),
                synthetic_eu: (0, m.localize)("50%"),
                financial: (0, m.localize)("50%"),
                financial_au: (0, m.localize)("50%"),
                financial_eu: (0, m.localize)("50%"),
                footnote: (0, m.localize)(
                  "When the remaining funds in your account is deemed insufficient to cover the leverage or margin requirements, your account will be placed under margin call. To prevent a margin call escalating to a stop out level, you can deposit  additional funds into your account or close any open positions."
                ),
              },
            },
            {
              attribute: (0, m.localize)("Negative Balance Protection"),
              dxtrade: {
                synthetic: (0, m.localize)("Available"),
                synthetic_eu: (0, m.localize)("Available"),
                financial: (0, m.localize)("N/A"),
                financial_au: (0, m.localize)("Required"),
                financial_eu: (0, m.localize)("Required"),
              },
            },
            {
              attribute: (0, m.localize)("Number of assets"),
              mt5: {
                synthetic: (0, m.localize)("10+"),
                synthetic_eu: (0, m.localize)("10+"),
                financial: (0, m.localize)("50+"),
                financial_au: (0, m.localize)("100+"),
                financial_eu: (0, m.localize)("50+"),
                financial_stp: (0, m.localize)("50+"),
                footnote: null,
              },
              dxtrade: {
                synthetic: (0, m.localize)("20+"),
                synthetic_eu: (0, m.localize)("20+"),
                financial: (0, m.localize)("100+"),
                financial_au: (0, m.localize)("100+"),
                financial_eu: (0, m.localize)("100+"),
                footnote: null,
              },
            },
            {
              attribute: (0, m.localize)("Cryptocurrency trading"),
              mt5: {
                synthetic: (0, m.localize)("N/A"),
                synthetic_eu: (0, m.localize)("N/A"),
                financial: (0, m.localize)("24/7"),
                financial_au: (0, m.localize)("24/7"),
                financial_eu: (0, m.localize)("24/7"),
                financial_stp: (0, m.localize)("24/7"),
                footnote: (0, m.localize)(
                  "Indicates the availability of cryptocurrency trading on a particular account."
                ),
              },
              dxtrade: {
                synthetic: (0, m.localize)("N/A"),
                synthetic_eu: (0, m.localize)("N/A"),
                financial: (0, m.localize)("24/7"),
                financial_au: (0, m.localize)("24/7"),
                financial_eu: (0, m.localize)("24/7"),
                footnote: (0, m.localize)(
                  "Indicates the availability of cryptocurrency trading on a particular account."
                ),
              },
            },
            {
              attribute: (0, m.localize)("Trading instruments"),
              mt5: {
                synthetic: (0, m.localize)("Synthetics"),
                synthetic_eu: (0, m.localize)("Synthetics"),
                financial: (0, m.localize)(
                  "FX-majors (standard/micro lots), FX-minors, Commodities, Cryptocurrencies, Stocks & Indices"
                ),
                financial_au: (0, m.localize)(
                  "FX-majors (standard/micro lots), FX-minors, Commodities, Cryptocurrencies, Stocks & Indices"
                ),
                financial_eu: (0, m.localize)(
                  "FX-majors (standard), FX-minors, Commodities, Cryptocurrencies, Stocks & Indices"
                ),
                financial_stp: (0, m.localize)(
                  "FX-majors, FX-minors, FX-exotics, Cryptocurrencies"
                ),
                footnote: null,
              },
              dxtrade: {
                synthetic: (0, m.localize)("Synthetics"),
                synthetic_eu: (0, m.localize)("Synthetics"),
                financial: (0, m.localize)(
                  "FX-majors (standard/micro lots), FX-minors, Smart-FX, Commodities, Cryptocurrencies"
                ),
                financial_au: (0, m.localize)(
                  "FX-majors (standard/micro lots), FX-minors, Commodities, Cryptocurrencies"
                ),
                financial_eu: (0, m.localize)(
                  "FX-majors (standard/micro lots), FX-minors, Commodities, Cryptocurrencies (except UK)"
                ),
                footnote: null,
              },
            },
          ];
        },
        He = function (e) {
          var t = e.name,
            a = e.counter,
            n = qe(i.useState(!1), 2),
            r = n[0],
            o = n[1];
          return a
            ? i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  u.Text,
                  {
                    as: "p",
                    weight: "bold",
                    size: "xs",
                    line_height: "s",
                    className: "cfd-attribute-describer",
                    onClick: function () {
                      return o(!r);
                    },
                  },
                  t,
                  i.createElement(
                    u.Text,
                    {
                      weight: "bold",
                      as: "span",
                      line_height: "x",
                      size: "xxxs",
                      className: "counter",
                    },
                    a
                  )
                )
              )
            : i.createElement(
                u.Text,
                {
                  as: "p",
                  weight: "bold",
                  size: "xs",
                  line_height: "s",
                  className: "cfd-attribute-describer",
                },
                t
              );
        },
        Ye = function (e) {
          var t = e.platform,
            a = e.show_risk_message,
            n = e.landing_companies,
            r = e.is_logged_in;
          return i.createElement(
            "div",
            { className: "cfd-compare-account--hint" },
            i.createElement(
              "div",
              { className: "cfd-compare-accounts__bullet-wrapper" },
              i.createElement("span", {
                className:
                  "cfd-compare-accounts__bullet cfd-compare-accounts__bullet--circle",
              }),
              i.createElement(m.Localize, {
                i18n_default_text:
                  "At bank rollover, liquidity in the forex markets is reduced and may increase the spread and processing time for client orders. This happens around 21:00 GMT during daylight saving time, and 22:00 GMT non-daylight saving time.",
              })
            ),
            a &&
              i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "div",
                  { className: "cfd-compare-accounts__bullet-wrapper" },
                  i.createElement("span", {
                    className:
                      "cfd-compare-accounts__bullet cfd-compare-accounts__bullet--circle",
                  }),
                  i.createElement(m.Localize, {
                    i18n_default_text:
                      "Margin call and stop out level will change from time to time based on market condition.",
                  })
                ),
                i.createElement(
                  "div",
                  { className: "cfd-compare-accounts__bullet-wrapper" },
                  i.createElement(
                    u.Text,
                    {
                      size: "xs",
                      line_height: "x",
                      weight: "bold",
                      className:
                        "cfd-compare-accounts__bullet cfd-compare-accounts__bullet--star cfd-compare-accounts__star",
                    },
                    "*"
                  ),
                  i.createElement(m.Localize, {
                    i18n_default_text:
                      "To protect your portfolio from adverse market movements due to the market opening gap, we reserve the right to decrease leverage on all offered symbols for financial accounts before market close and increase it again after market open. Please make sure that you have enough funds available in your {{platform}} account to support your positions at all times.",
                    values: {
                      platform:
                        t === _.CFD_PLATFORMS.MT5
                          ? (0, m.localize)("MT5")
                          : (0, m.localize)("Deriv X"),
                    },
                  })
                )
              ),
            $e({ landing_companies: n, platform: t, is_logged_in: r })
              .filter(function (e) {
                var a;
                return !(null === (a = e[t]) || void 0 === a || !a.footnote);
              })
              .map(function (e, a) {
                return i.createElement(
                  "div",
                  { key: a, className: "cfd-compare-accounts__bullet-wrapper" },
                  i.createElement(
                    u.Text,
                    {
                      size: "xs",
                      line_height: "x",
                      weight: "bold",
                      className:
                        "cfd-compare-accounts__bullet cfd-compare-accounts__bullet--star cfd-compare-accounts__star",
                    },
                    a + 1
                  ),
                  i.createElement(
                    "div",
                    { className: "cfd-compare-accounts__footnote" },
                    i.createElement(
                      u.Text,
                      {
                        as: "p",
                        size: "xs",
                        weight: "bold",
                        color: "prominent",
                        className: "cfd-compare-accounts__footnote-title",
                      },
                      e.attribute
                    ),
                    i.createElement(
                      u.Text,
                      { size: "xs", color: "prominent" },
                      e[t].footnote
                    )
                  )
                );
              })
          );
        },
        Ke = function (e) {
          var t,
            a,
            n,
            r = e.landing_companies,
            o = e.is_logged_in,
            c = e.platform,
            l = e.show_eu_related,
            s = e.residence,
            d = qe(i.useState([]), 2),
            p = d[0],
            f = d[1],
            g = qe(
              i.useState(
                c === _.CFD_PLATFORMS.DXTRADE
                  ? "1.5fr 1fr 2fr"
                  : "1.5fr 1fr 2fr 1fr"
              ),
              2
            ),
            h = g[0],
            b = g[1];
          i.useEffect(
            function () {
              var e, t, a;
              f(
                (function (e) {
                  var t = e.landing_companies,
                    a = e.is_logged_in,
                    n = e.show_eu_related,
                    r = e.platform,
                    o = "au" === e.residence;
                  return (function (e, t, a, n, r, o) {
                    var c = function (e, t, a) {
                        return o ? t : n ? a : e;
                      },
                      l = 0;
                    return t
                      .filter(function (e) {
                        return e[r];
                      })
                      .map(function (t) {
                        var o,
                          s,
                          d,
                          u = t.attribute,
                          m = t.mt5,
                          p = void 0 === m ? {} : m,
                          f = t.dxtrade,
                          g = void 0 === f ? {} : f,
                          h = r === _.CFD_PLATFORMS.MT5 ? p : g,
                          b = h.synthetic,
                          v = h.synthetic_eu,
                          y = h.financial_stp,
                          w = h.financial,
                          E = h.financial_au,
                          z = h.financial_eu,
                          x = h.footnote,
                          S = { synthetic: n ? v : b },
                          M = { financial: c(w, E, z) };
                        return a
                          ? Ue(
                              Ue(
                                Ue(
                                  {
                                    attribute: i.createElement(He, {
                                      name: u,
                                      counter: x ? ++l : null,
                                    }),
                                  },
                                  null != e &&
                                    null !== (o = e.mt_gaming_company) &&
                                    void 0 !== o &&
                                    o.financial
                                    ? S
                                    : {}
                                ),
                                null != e &&
                                  null !== (s = e.mt_financial_company) &&
                                  void 0 !== s &&
                                  s.financial
                                  ? M
                                  : {}
                              ),
                              null != e &&
                                null !== (d = e.mt_financial_company) &&
                                void 0 !== d &&
                                d.financial_stp &&
                                r === _.CFD_PLATFORMS.MT5
                                ? { financial_stp: y }
                                : {}
                            )
                          : r === _.CFD_PLATFORMS.DXTRADE
                          ? Ue(
                              Ue(
                                {
                                  attribute: i.createElement(He, {
                                    name: u,
                                    counter: x ? ++l : null,
                                  }),
                                },
                                S
                              ),
                              M
                            )
                          : Ue(
                              Ue(
                                Ue(
                                  {
                                    attribute: i.createElement(He, {
                                      name: u,
                                      counter: x ? ++l : null,
                                    }),
                                  },
                                  S
                                ),
                                M
                              ),
                              { financial_stp: y }
                            );
                      });
                  })(
                    t,
                    $e({ landing_companies: t, platform: r, is_logged_in: a }),
                    a,
                    n,
                    r,
                    o
                  );
                })({
                  landing_companies: r,
                  is_logged_in: o,
                  platform: c,
                  show_eu_related: l,
                  residence: s,
                })
              ),
                o &&
                  b(
                    "1.5fr "
                      .concat(
                        null != r &&
                          null !== (e = r.mt_gaming_company) &&
                          void 0 !== e &&
                          e.financial
                          ? "1fr"
                          : "",
                        " "
                      )
                      .concat(
                        null != r &&
                          null !== (t = r.mt_financial_company) &&
                          void 0 !== t &&
                          t.financial
                          ? "2fr"
                          : "",
                        " "
                      )
                      .concat(
                        null != r &&
                          null !== (a = r.mt_financial_company) &&
                          void 0 !== a &&
                          a.financial_stp &&
                          c === _.CFD_PLATFORMS.MT5
                          ? " 1fr "
                          : ""
                      )
                  );
            },
            [
              null == r ? void 0 : r.mt_financial_company,
              null == r ? void 0 : r.mt_gaming_company,
              o,
              r,
              c,
              l,
              s,
            ]
          );
          var v = c === _.CFD_PLATFORMS.MT5 || !l;
          return i.createElement(
            u.Div100vhContainer,
            { height_offset: "40px", is_bypassed: (0, _.isDesktop)() },
            i.createElement(
              u.ThemedScrollbars,
              {
                className: "cfd-compare-accounts",
                style: { "--cfd-compare-accounts-template-columns": h },
              },
              i.createElement(
                "div",
                { className: "cfd-compare-accounts__table-wrapper" },
                i.createElement(
                  u.Table,
                  { className: "cfd-compare-accounts__table" },
                  i.createElement(
                    u.Table.Header,
                    null,
                    i.createElement(
                      u.Table.Row,
                      { className: "cfd-compare-accounts__table-row" },
                      i.createElement(u.Table.Head, null),
                      o
                        ? i.createElement(
                            i.Fragment,
                            null,
                            (null == r ||
                            null === (t = r.mt_gaming_company) ||
                            void 0 === t
                              ? void 0
                              : t.financial) &&
                              i.createElement(
                                u.Table.Head,
                                null,
                                (0, m.localize)("Synthetic")
                              ),
                            (null == r ||
                            null === (a = r.mt_financial_company) ||
                            void 0 === a
                              ? void 0
                              : a.financial) &&
                              i.createElement(
                                u.Table.Head,
                                null,
                                (0, m.localize)("Financial"),
                                i.createElement(
                                  u.Text,
                                  {
                                    size: "s",
                                    weight: "bold",
                                    className: "cfd-compare-accounts__star",
                                  },
                                  "*"
                                )
                              ),
                            (null == r ||
                            null === (n = r.mt_financial_company) ||
                            void 0 === n
                              ? void 0
                              : n.financial_stp) &&
                              c === _.CFD_PLATFORMS.MT5 &&
                              i.createElement(
                                u.Table.Head,
                                null,
                                (0, m.localize)("Financial STP"),
                                i.createElement(
                                  u.Text,
                                  {
                                    size: "s",
                                    weight: "bold",
                                    className: "cfd-compare-accounts__star",
                                  },
                                  "*"
                                )
                              )
                          )
                        : i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(
                              u.Table.Head,
                              null,
                              (0, m.localize)("Synthetic")
                            ),
                            i.createElement(
                              u.Table.Head,
                              null,
                              (0, m.localize)("Financial"),
                              i.createElement(
                                u.Text,
                                {
                                  size: "s",
                                  weight: "bold",
                                  className: "cfd-compare-accounts__star",
                                },
                                "*"
                              )
                            ),
                            c === _.CFD_PLATFORMS.MT5 &&
                              i.createElement(
                                u.Table.Head,
                                null,
                                (0, m.localize)("Financial STP"),
                                i.createElement(
                                  u.Text,
                                  {
                                    size: "s",
                                    weight: "bold",
                                    className: "cfd-compare-accounts__star",
                                  },
                                  "*"
                                )
                              )
                          )
                    )
                  ),
                  i.createElement(
                    u.Table.Body,
                    null,
                    p.map(function (e, t) {
                      return i.createElement(
                        u.Table.Row,
                        {
                          key: t,
                          className: "cfd-compare-accounts__table-row",
                        },
                        Object.keys(e).map(function (t, a) {
                          return i.createElement(
                            u.Table.Cell,
                            { key: a, fixed: 0 === a },
                            e[t]
                          );
                        })
                      );
                    })
                  )
                )
              ),
              i.createElement(Ye, {
                platform: c,
                show_risk_message: v,
                landing_companies: r,
                is_logged_in: o,
              })
            )
          );
        };
      const Ge = (0, y.$j)(function (e) {
        var t = e.modules,
          a = e.ui,
          n = e.client;
        return {
          disableApp: a.disableApp,
          enableApp: a.enableApp,
          is_compare_accounts_visible: t.cfd.is_compare_accounts_visible,
          is_loading: n.is_populating_mt5_account_list,
          is_eu: n.is_eu,
          is_eu_country: n.is_eu_country,
          is_logged_in: n.is_logged_in,
          landing_companies: n.landing_companies,
          residence: n.residence,
          toggleCompareAccounts: t.cfd.toggleCompareAccountsModal,
        };
      })(function (e) {
        var t,
          a,
          n,
          r = e.disableApp,
          o = e.enableApp,
          c = e.is_compare_accounts_visible,
          l = e.landing_companies,
          s = e.is_loading,
          d = e.is_logged_in,
          p = e.is_eu,
          f = e.is_eu_country,
          g = e.platform,
          h = e.residence,
          b = e.toggleCompareAccounts,
          v = (d && p) || (!d && f),
          y =
            1 ===
            [
              null == l || null === (t = l.mt_gaming_company) || void 0 === t
                ? void 0
                : t.financial,
              null == l || null === (a = l.mt_financial_company) || void 0 === a
                ? void 0
                : a.financial,
              null == l || null === (n = l.mt_financial_company) || void 0 === n
                ? void 0
                : n.financial_stp,
            ].filter(Boolean).length
              ? (0, m.localize)("Account Information")
              : (0, m.localize)("Compare accounts");
        return i.createElement(
          "div",
          {
            className: "cfd-compare-accounts-modal__wrapper",
            style: {
              marginTop: g === _.CFD_PLATFORMS.DXTRADE ? "5rem" : "2.4rem",
            },
          },
          i.createElement(u.Button, {
            className: "cfd-dashboard__welcome-message--button",
            has_effect: !0,
            text: y,
            onClick: b,
            secondary: !0,
            disabled: s,
          }),
          i.createElement(
            i.Suspense,
            { fallback: i.createElement(u.UILoader, null) },
            i.createElement(
              u.DesktopWrapper,
              null,
              i.createElement(
                u.Modal,
                {
                  className: "cfd-dashboard__compare-accounts",
                  disableApp: r,
                  enableApp: o,
                  is_open: c,
                  title: y,
                  toggleModal: b,
                  type: "button",
                  height: "696px",
                  width: "903px",
                },
                i.createElement(Ke, {
                  is_logged_in: d,
                  landing_companies: l,
                  platform: g,
                  show_eu_related: v,
                  residence: h,
                })
              )
            ),
            i.createElement(
              u.MobileWrapper,
              null,
              i.createElement(
                u.MobileDialog,
                {
                  portal_element_id: "deriv_app",
                  title: (0, m.localize)("Compare accounts"),
                  wrapper_classname: "cfd-dashboard__compare-accounts",
                  visible: c,
                  onClose: b,
                },
                i.createElement(Ke, {
                  is_logged_in: d,
                  landing_companies: l,
                  platform: g,
                  show_eu_related: v,
                  residence: h,
                })
              )
            )
          )
        );
      });
      var Je = "https://apps.apple.com/us/app/deriv-x/id1563337503",
        Ze = "https://play.google.com/store/apps/details?id=com.deriv.dx",
        Qe = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : void 0;
          switch (e || (0, _.OSDetect)()) {
            case "ios":
              return Je;
            case "android":
              return Ze;
            default:
              return tt();
          }
        },
        et = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : void 0;
          switch (e || (0, _.OSDetect)()) {
            case "windows":
              return "https://download.mql5.com/cdn/web/deriv.limited/mt5/deriv5setup.exe";
            case "linux":
              return "https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux";
            case "macos":
              return "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg";
            case "ios":
              return "https://download.mql5.com/cdn/mobile/mt5/ios?server=Deriv-Demo,Deriv-Server";
            case "android":
              return "https://download.mql5.com/cdn/mobile/mt5/android?server=Deriv-Demo,Deriv-Server";
            default:
              return at({ category: "real" });
          }
        },
        tt = function (e) {
          return "real" === e
            ? "https://dx.deriv.com"
            : "https://dx-demo.deriv.com/";
        },
        at = function (e) {
          var t = e.category,
            a = e.loginid,
            n = e.server_name,
            r = "demo" === t ? "Deriv-Demo" : void 0 === n ? "Deriv-Server" : n,
            o = null != a ? a : "";
          return "https://trade.mql5.com/trade?servers="
            .concat(r, "&trade_server=")
            .concat(r)
            .concat(o && "&login=".concat(o));
        };
      const nt = function (e) {
        var t = e.platform,
          a = e.active_index,
          n = e.is_dark_mode_on;
        return i.createElement(
          "div",
          { className: "cfd-dashboard__download-center" },
          i.createElement(
            "h1",
            { className: "cfd-dashboard__download-center--heading" },
            (function (e) {
              return e === _.CFD_PLATFORMS.DXTRADE
                ? (0, m.localize)(
                    "Run Deriv X on your browser or download the mobile app"
                  )
                : e === _.CFD_PLATFORMS.MT5
                ? (0, m.localize)(
                    "Run MT5 from your browser or download the MT5 app for your devices"
                  )
                : "";
            })(t)
          ),
          i.createElement(
            "div",
            {
              className: "cfd-dashboard__download-center-options",
              style: {
                justifyContent:
                  t === _.CFD_PLATFORMS.DXTRADE ? "space-evenly" : null,
              },
            },
            i.createElement(
              "div",
              { className: "cfd-dashboard__download-center-options--desktop" },
              i.createElement(
                "div",
                {
                  className:
                    "cfd-dashboard__download-center-options--desktop-links",
                },
                i.createElement(
                  "div",
                  null,
                  i.createElement(
                    "div",
                    {
                      className:
                        "cfd-dashboard__download-center-options--desktop-row",
                    },
                    t === _.CFD_PLATFORMS.MT5 &&
                      i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(u.Icon, {
                          icon: "IcMt5DeviceDesktop",
                          width: 118,
                          height: 85,
                        }),
                        i.createElement(u.Icon, {
                          icon: "IcMt5DeviceLaptop",
                          width: 75,
                          height: 51,
                        })
                      ),
                    t === _.CFD_PLATFORMS.DXTRADE &&
                      i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(u.Icon, {
                          icon: n
                            ? "IcDxtradeDeviceDesktopLight"
                            : "IcDxtradeDeviceDesktop",
                          width: 128,
                          height: 83,
                        }),
                        i.createElement(u.Icon, {
                          icon: n
                            ? "IcDxtradeDeviceLaptopLight"
                            : "IcDxtradeDeviceLaptop",
                          width: 81,
                          height: 54,
                        })
                      )
                  ),
                  t === _.CFD_PLATFORMS.DXTRADE &&
                    i.createElement(
                      "div",
                      {
                        className:
                          "cfd-dashboard__download-center-options--desktop-download",
                      },
                      i.createElement(
                        "a",
                        {
                          className: "cfd-dashboard__dxtrade-download",
                          href: tt(0 === a ? "real" : "demo"),
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        i.createElement(u.Icon, {
                          className: "cfd-dashboard__dxtrade-download--icon",
                          icon: "IcBrandDxtrade",
                          width: 32,
                          height: 32,
                        }),
                        i.createElement(
                          "div",
                          { className: "cfd-dashboard__dxtrade-download-text" },
                          i.createElement(
                            u.Text,
                            {
                              className:
                                "cfd-dashboard__dxtrade-download--title",
                              color: "colored-background",
                              size: "xxs",
                              weight: "bold",
                            },
                            i.createElement(m.Localize, {
                              i18n_default_text: "Web terminal",
                            })
                          )
                        )
                      )
                    )
                ),
                t === _.CFD_PLATFORMS.MT5 &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "cfd-dashboard__download-center-options--desktop-download",
                    },
                    i.createElement(
                      "a",
                      {
                        href: et("windows"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      i.createElement(u.Icon, {
                        icon: "IcInstallationWindows",
                        width: 138,
                        height: 40,
                      })
                    ),
                    i.createElement(
                      "a",
                      {
                        href: et("macos"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      i.createElement(u.Icon, {
                        icon: "IcInstallationMacos",
                        width: 138,
                        height: 40,
                      })
                    ),
                    i.createElement(
                      "a",
                      {
                        href: et("linux"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      i.createElement(u.Icon, {
                        icon: "IcInstallationLinux",
                        width: 138,
                        height: 40,
                      })
                    )
                  )
              ),
              t === _.CFD_PLATFORMS.MT5 &&
                i.createElement(
                  u.Text,
                  {
                    as: "p",
                    align: "center",
                    size: "xxxs",
                    className: "cfd-dashboard__download-center--hint",
                  },
                  i.createElement(m.Localize, {
                    i18n_default_text:
                      "The MT5 desktop app is not supported by Windows XP, Windows 2003, and Windows Vista.",
                  })
                )
            ),
            i.createElement(
              "div",
              { className: "cfd-dashboard__download-center-options--mobile" },
              i.createElement(
                "div",
                {
                  className:
                    "cfd-dashboard__download-center-options--mobile-devices",
                },
                t === _.CFD_PLATFORMS.MT5 &&
                  i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(u.Icon, {
                      icon: "IcMt5DeviceTablet",
                      width: 133,
                      height: 106,
                    }),
                    i.createElement(u.Icon, {
                      icon: "IcMt5DevicePhone",
                      width: 48,
                      height: 74,
                    })
                  ),
                t === _.CFD_PLATFORMS.DXTRADE &&
                  i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(u.Icon, {
                      icon: n
                        ? "IcDxtradeDeviceTabletLight"
                        : "IcDxtradeDeviceTablet",
                      width: 133,
                      height: 106,
                    }),
                    i.createElement(u.Icon, {
                      icon: n
                        ? "IcDxtradeDevicePhoneLight"
                        : "IcDxtradeDevicePhone",
                      width: 48,
                      height: 74,
                    })
                  )
              ),
              i.createElement(
                "div",
                {
                  className:
                    "cfd-dashboard__download-center-options--mobile-links",
                },
                i.createElement(
                  "a",
                  {
                    className:
                      "cfd-dashboard__download-center-options--mobile-link",
                    href:
                      t === _.CFD_PLATFORMS.DXTRADE
                        ? Qe("android")
                        : et("android"),
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  i.createElement(u.Icon, {
                    icon: "IcInstallationGoogle",
                    width: 135,
                    height: 40,
                  })
                ),
                i.createElement(
                  "a",
                  {
                    className:
                      "cfd-dashboard__download-center-options--mobile-link",
                    href: t === _.CFD_PLATFORMS.DXTRADE ? Qe("ios") : et("ios"),
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  i.createElement(u.Icon, {
                    icon: "IcInstallationApple",
                    width: 120,
                    height: 40,
                  })
                )
              )
            )
          )
        );
      };
      var rt = a("./Stores/Modules/CFD/cfd-store.js");
      function ot(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function it(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ot(Object(a), !0).forEach(function (t) {
                ct(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ot(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function ct(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function lt(e, t, a, n, r, o, i) {
        try {
          var c = e[o](i),
            l = c.value;
        } catch (e) {
          return void a(e);
        }
        c.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function st() {
        return (st =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function dt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var a = [],
                n = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(n = (i = c.next()).done) &&
                  (a.push(i.value), !t || a.length !== t);
                  n = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  n || null == c.return || c.return();
                } finally {
                  if (r) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ut(e, t);
              var a = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a
                  ? Array.from(e)
                  : "Arguments" === a ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                  ? ut(e, t)
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
      function ut(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var _t = function (e) {
          var t = e.count_from,
            a = void 0 === t ? 60 : t,
            n = e.onTimeout,
            r = dt(i.useState(a), 2),
            o = r[0],
            c = r[1];
          return (
            i.useEffect(
              function () {
                if (0 !== o) {
                  var e = setTimeout(function () {
                    c(o - 1);
                  }, 1e3);
                  return function () {
                    return clearTimeout(e);
                  };
                }
                return n(), function () {};
              },
              [o]
            ),
            i.createElement("span", { className: "countdown" }, o)
          );
        },
        mt = function (e) {
          var t = e.sendVerifyEmail,
            a = e.account_type,
            n = e.account_group,
            r = e.server,
            o = e.password_type,
            c = dt(i.useState(!1), 2),
            l = c[0],
            s = c[1],
            d = dt(i.useState(!1), 2),
            _ = d[0],
            p = d[1];
          return (
            i.useEffect(function () {
              localStorage.setItem(
                "cfd_reset_password_intent",
                [r, n, a].join(".")
              ),
                localStorage.setItem("cfd_reset_password_type", o),
                t();
            }, []),
            i.createElement(
              "div",
              { className: "cfd-verification-email-sent" },
              i.createElement(u.Icon, { icon: "IcEmailSent", size: 128 }),
              i.createElement(
                "h2",
                { className: "cfd-verification-email-sent__title" },
                i.createElement(m.Localize, {
                  i18n_default_text: "We've sent you an email",
                })
              ),
              i.createElement(
                u.Text,
                { as: "p", size: "xs", align: "center" },
                i.createElement(m.Localize, {
                  i18n_default_text:
                    "Please click on the link in the email to reset your password.",
                })
              ),
              !l &&
                i.createElement(
                  u.Button,
                  {
                    className: "cfd-verification-email-sent__resend-button",
                    primary: !0,
                    onClick: function () {
                      s(!0);
                    },
                  },
                  i.createElement(m.Localize, {
                    i18n_default_text: "Didn't receive the email?",
                  })
                ),
              l &&
                i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(
                    u.Text,
                    {
                      as: "p",
                      size: "xs",
                      align: "center",
                      weight: "bold",
                      className: "cfd-verification-email-sent__title--sub",
                    },
                    i.createElement(m.Localize, {
                      i18n_default_text: "Didn't receive the email?",
                    })
                  ),
                  i.createElement(
                    u.Text,
                    { as: "p", size: "xs", align: "center" },
                    i.createElement(m.Localize, {
                      i18n_default_text:
                        "Check your spam or junk folder. If it's not there, try resending the email.",
                    })
                  ),
                  i.createElement(
                    u.Button,
                    {
                      className: "cfd-verification-email-sent__resend-button",
                      large: !0,
                      primary: !0,
                      disabled: _,
                      onClick: function () {
                        t(), p(!0);
                      },
                    },
                    !_ &&
                      i.createElement(m.Localize, {
                        i18n_default_text: "Resend email",
                      }),
                    _ &&
                      i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(m.Localize, {
                          i18n_default_text: "Resend in <0 /> seconds",
                          components: [
                            i.createElement(_t, {
                              key: 0,
                              onTimeout: function () {
                                return p(!1);
                              },
                              count_from: 60,
                            }),
                          ],
                        })
                      )
                  )
                )
            )
          );
        },
        pt = function (e) {
          var t = e.toggleModal,
            a = e.is_investor;
          return i.createElement(
            "div",
            { className: "cfd-password-manager__success" },
            i.createElement(u.Icon, { icon: "IcPasswordUpdated", size: 128 }),
            i.createElement(
              u.Text,
              { as: "p", size: "xxs", align: "center" },
              a
                ? i.createElement(m.Localize, {
                    i18n_default_text:
                      "Your investor password has been changed.",
                  })
                : i.createElement(m.Localize, {
                    i18n_default_text: "Your password has been changed.",
                  })
            ),
            i.createElement(
              u.Button,
              {
                onClick: t,
                className: "cfd-password-manager__success-btn",
                primary: !0,
                large: !0,
              },
              i.createElement(
                "p",
                { className: "dc-btn__text" },
                (0, m.localize)("OK")
              )
            )
          );
        },
        ft = function (e) {
          var t = e.multi_step_ref,
            a = e.steps;
          return i.createElement(u.MultiStep, {
            ref: t,
            steps: a,
            className: "cfd-password-manager",
            lbl_previous: (0, m.localize)("Back"),
          });
        },
        gt = function (e) {
          var t = e.status,
            a = e.platform,
            n = e.is_dxtrade_allowed,
            r = null == t ? void 0 : t.includes("trading_password_required");
          return i.createElement(
            "div",
            { className: "cfd-password-manager__trading-password-wrapper" },
            i.createElement(u.Icon, { icon: "IcMt5OnePassword", size: "128" }),
            i.createElement(
              u.Text,
              { as: "p", align: "center", size: "s", weight: "bold" },
              r
                ? i.createElement(m.Localize, {
                    i18n_default_text:
                      "Trading password — a new, easy way to sign in to your {{platform}} accounts",
                    values: {
                      platform: a === _.CFD_PLATFORMS.MT5 ? "DMT5" : "Deriv X",
                    },
                  })
                : i.createElement(m.Localize, {
                    i18n_default_text:
                      "You have a trading password for {{platform}}",
                    values: {
                      platform: a === _.CFD_PLATFORMS.MT5 ? "DMT5" : "Deriv X",
                    },
                  })
            ),
            i.createElement(
              u.Text,
              {
                as: "p",
                align: "center",
                className: "mt5-password-manager__trading-password-text",
                size: "xs",
              },
              !r &&
                i.createElement(
                  i.Fragment,
                  null,
                  n
                    ? i.createElement(m.Localize, {
                        i18n_default_text:
                          "Use your trading password to sign in to any of your {{platform1}} (and {{platform2}}) accounts.",
                        values: {
                          platform1:
                            a === _.CFD_PLATFORMS.MT5 ? "DMT5" : "Deriv X",
                          platform2:
                            a === _.CFD_PLATFORMS.MT5 ? "Deriv X" : "DMT5",
                        },
                      })
                    : i.createElement(m.Localize, {
                        i18n_default_text:
                          "Use your trading password to sign in to any of your DMT5 accounts.",
                      })
                ),
              r &&
                i.createElement(
                  i.Fragment,
                  null,
                  n
                    ? i.createElement(m.Localize, {
                        i18n_default_text:
                          "A trading password is used to sign in to any of your {{platform1}} (and {{platform2}}) accounts.",
                        values: {
                          platform1:
                            a === _.CFD_PLATFORMS.MT5 ? "DMT5" : "Deriv X",
                          platform2:
                            a === _.CFD_PLATFORMS.MT5 ? "Deriv X" : "DMT5",
                        },
                      })
                    : i.createElement(m.Localize, {
                        i18n_default_text:
                          "A trading password is used to sign in to any of your DMT5 accounts.",
                      })
                )
            ),
            i.createElement(
              l.NavLink,
              {
                to: _.routes.passwords,
                className:
                  "dc-btn dc-btn--primary dc-btn__large dc-modal__container_cfd-reset-password-modal__button",
              },
              i.createElement(
                u.Text,
                { size: "xs", weight: "bold", color: "colored-background" },
                r &&
                  i.createElement(m.Localize, {
                    i18n_default_text: "Set trading password",
                  }),
                !r &&
                  i.createElement(m.Localize, {
                    i18n_default_text: "Manage trading password",
                  })
              )
            )
          );
        },
        ht = function (e) {
          var t = e.error_message_investor,
            a = e.is_submit_success_investor,
            r = e.multi_step_ref,
            o = e.onSubmit,
            c = e.setPasswordType,
            l = e.toggleModal,
            s = e.validatePassword;
          return a
            ? i.createElement(pt, { toggleModal: l, is_investor: !0 })
            : i.createElement(
                "div",
                { className: "cfd-password-manager__investor-wrapper" },
                i.createElement(
                  u.Text,
                  {
                    as: "p",
                    size: "xs",
                    className: "cfd-password-manager--paragraph",
                  },
                  i.createElement(m.Localize, {
                    i18n_default_text:
                      "Use this password to grant viewing access to another user. While they may view your trading account, they will not be able to trade or take any other actions.",
                  })
                ),
                i.createElement(
                  u.Text,
                  {
                    as: "p",
                    size: "xs",
                    className: "cfd-password-manager--paragraph",
                  },
                  i.createElement(m.Localize, {
                    i18n_default_text:
                      "If this is the first time you try to create a password, or you have forgotten your password, please reset it.",
                  })
                ),
                t &&
                  i.createElement(
                    u.Text,
                    {
                      as: "p",
                      color: "loss-danger",
                      size: "xs",
                      className: "cfd-password-manager--error-message",
                    },
                    t
                  ),
                i.createElement(
                  n.J9,
                  {
                    initialValues: {
                      old_password: "",
                      new_password: "",
                      password_type: "investor",
                    },
                    validate: s,
                    onSubmit: o,
                  },
                  function (e) {
                    var t = e.isSubmitting,
                      a = e.errors,
                      o = e.setFieldTouched,
                      l = e.values,
                      s = e.touched;
                    return i.createElement(
                      n.l0,
                      {
                        className: "cfd-password-manager__investor-form",
                        noValidate: !0,
                      },
                      i.createElement(
                        n.gN,
                        { name: "old_password" },
                        function (e) {
                          var t = e.field;
                          return i.createElement(
                            u.PasswordInput,
                            st({}, t, {
                              autoComplete: "current-password",
                              label: (0, m.localize)(
                                "Current investor password"
                              ),
                              error: s.old_password && a.old_password,
                              required: !0,
                            })
                          );
                        }
                      ),
                      i.createElement(
                        n.gN,
                        { name: "new_password" },
                        function (e) {
                          var t = e.field;
                          return i.createElement(
                            u.PasswordMeter,
                            {
                              input: t.value,
                              has_error: !(!s.new_password || !a.new_password),
                              custom_feedback_messages: (0,
                              _.getErrorMessages)().password_warnings,
                            },
                            function (e) {
                              var n = e.has_warning;
                              return i.createElement(
                                u.PasswordInput,
                                st({}, t, {
                                  autoComplete: "new-password",
                                  label: (0, m.localize)(
                                    "New investor password"
                                  ),
                                  hint:
                                    !n &&
                                    (0, m.localize)(
                                      "Strong passwords contain at least 8 characters, combine uppercase and lowercase letters and numbers."
                                    ),
                                  error: s.new_password && a.new_password,
                                  onChange: function (e) {
                                    o("new_password", !0, !0), t.onChange(e);
                                  },
                                  className:
                                    "cfd-password-manager__new-password",
                                  required: !0,
                                })
                              );
                            }
                          );
                        }
                      ),
                      i.createElement(
                        "div",
                        { className: "cfd-password-manager__actions" },
                        i.createElement(u.Button, {
                          className: "cfd-password-manager--button",
                          is_disabled:
                            t ||
                            !l.old_password ||
                            !l.new_password ||
                            Object.keys(a).length > 0,
                          is_loading: t,
                          text: (0, m.localize)("Change investor password"),
                          primary: !0,
                          large: !0,
                        }),
                        i.createElement(u.Button, {
                          className: "cfd-password-manager--button",
                          type: "button",
                          onClick: function () {
                            var e;
                            c("investor"),
                              null === (e = r.current) ||
                                void 0 === e ||
                                e.goNextStep();
                          },
                          text: (0, m.localize)(
                            "Create or reset investor password"
                          ),
                          tertiary: !0,
                          large: !0,
                        })
                      )
                    );
                  }
                )
              );
        },
        bt = function (e) {
          var t = e.is_dxtrade_allowed,
            a = e.toggleModal,
            n = e.selected_login,
            r = e.email,
            o = e.setPasswordType,
            c = e.multi_step_ref,
            l = e.account_status,
            s = e.platform,
            d = dt(i.useState(0), 2),
            p = d[0],
            f = d[1],
            g = dt(i.useState(""), 2),
            h = g[0],
            b = g[1],
            v = dt(i.useState(!1), 2),
            y = v[0],
            w = v[1],
            E = dt(i.useState(""), 2),
            z = E[0],
            x = E[1],
            S = dt(i.useState(!1), 2),
            M = S[0],
            T = S[1],
            D = "calc(100vh - 84px - 5.6rem - 8.8rem - 4rem)",
            O = function (e) {
              var t = {};
              return (
                (0, _.validLength)(e.new_password, { min: 8, max: 25 })
                  ? (0, _.validPassword)(e.new_password)
                    ? e.new_password.toLowerCase() === r.toLowerCase() &&
                      (t.new_password = (0, m.localize)(
                        "Your password cannot be the same as your email address."
                      ))
                    : (t.new_password = (0, _.getErrorMessages)().password())
                  : (t.new_password = (0, m.localize)(
                      "You should enter {{min_number}}-{{max_number}} characters.",
                      { min_number: 8, max_number: 25 }
                    )),
                e.old_password ||
                  void 0 === e.old_password ||
                  (t.old_password = (0, m.localize)("This field is required")),
                t
              );
            },
            A = function (e) {
              "main" === e ? (b(""), w(!0)) : (x(""), T(!0));
            },
            N = i.useCallback(
              (function () {
                var e,
                  t =
                    ((e = regeneratorRuntime.mark(function e(t) {
                      var a;
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (n) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (e.next = 4),
                                rt.default.changePassword(it({ login: n }, t))
                              );
                            case 4:
                              (a = e.sent)
                                ? ((r = t.password_type),
                                  (o = a),
                                  "main" === r ? b(o) : x(o))
                                : A(t.password_type);
                            case 6:
                            case "end":
                              return e.stop();
                          }
                        var r, o;
                      }, e);
                    })),
                    function () {
                      var t = this,
                        a = arguments;
                      return new Promise(function (n, r) {
                        var o = e.apply(t, a);
                        function i(e) {
                          lt(o, n, r, i, c, "next", e);
                        }
                        function c(e) {
                          lt(o, n, r, i, c, "throw", e);
                        }
                        i(void 0);
                      });
                    });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [n]
            ),
            P = i.createElement(
              i.Fragment,
              null,
              i.createElement(
                u.DesktopWrapper,
                null,
                i.createElement(
                  u.ThemedScrollbars,
                  { height: D, is_bypassed: (0, _.isMobile)(), autohide: !1 },
                  i.createElement(gt, {
                    status: l.status,
                    platform: s,
                    is_dxtrade_allowed: t,
                  })
                )
              ),
              i.createElement(
                u.MobileWrapper,
                null,
                i.createElement(
                  u.Div100vhContainer,
                  {
                    className: "cfd-password-manager__scroll-wrapper",
                    height_offset: "120px",
                  },
                  i.createElement(gt, {
                    is_submit_success_main: y,
                    toggleModal: a,
                    onSubmit: N,
                    validatePassword: O,
                    error_message_main: h,
                    setPasswordType: o,
                    multi_step_ref: c,
                    status: l.status,
                    platform: s,
                    is_dxtrade_allowed: t,
                  })
                )
              )
            );
          return s === _.CFD_PLATFORMS.DXTRADE
            ? P
            : i.createElement(
                u.Tabs,
                {
                  active_index: p,
                  onTabItemClick: function (e) {
                    f(e), b(""), w(!1), x(""), T(!1);
                  },
                  top: !0,
                },
                i.createElement(
                  "div",
                  { label: (0, m.localize)("Trading password") },
                  P
                ),
                i.createElement(
                  "div",
                  { label: (0, m.localize)("Investor password") },
                  i.createElement(
                    u.DesktopWrapper,
                    null,
                    i.createElement(
                      u.ThemedScrollbars,
                      { height: D },
                      i.createElement(ht, {
                        is_submit_success_investor: M,
                        toggleModal: a,
                        error_message_investor: z,
                        validatePassword: O,
                        onSubmit: N,
                        setPasswordType: o,
                        multi_step_ref: c,
                      })
                    )
                  ),
                  i.createElement(
                    u.MobileWrapper,
                    null,
                    i.createElement(
                      u.Div100vhContainer,
                      {
                        className: "cfd-password-manager__scroll-wrapper",
                        height_offset: "120px",
                      },
                      i.createElement(ht, {
                        is_submit_success_investor: M,
                        toggleModal: a,
                        error_message_investor: z,
                        validatePassword: O,
                        onSubmit: N,
                        setPasswordType: o,
                        multi_step_ref: c,
                      })
                    )
                  )
                )
              );
        },
        vt = function (e) {
          var t = e.account_status,
            a = e.enableApp,
            n = e.email,
            r = e.disableApp,
            o = e.is_dxtrade_allowed,
            c = e.is_visible,
            l = e.platform,
            s = e.selected_login,
            d = e.selected_account,
            p = e.toggleModal,
            f = e.selected_account_type,
            g = e.selected_account_group,
            h = e.selected_server,
            b = e.sendVerifyEmail,
            v = i.useRef(),
            y = dt(i.useState("main"), 2),
            w = y[0],
            E = y[1];
          if (!s) return null;
          var z = [
            {
              component: i.createElement(bt, {
                account_status: t,
                email: n,
                selected_login: s,
                toggleModal: p,
                password_type: w,
                setPasswordType: E,
                multi_step_ref: v,
                is_dxtrade_allowed: o,
                platform: l,
              }),
            },
            {
              component: i.createElement(mt, {
                server: h,
                sendVerifyEmail: b,
                account_type: f,
                account_group: g,
                password_type: w,
              }),
            },
          ];
          return i.createElement(
            i.Suspense,
            { fallback: i.createElement(u.UILoader, null) },
            i.createElement(
              u.DesktopWrapper,
              null,
              i.createElement(
                u.Modal,
                {
                  className: "cfd-password-manager__modal",
                  disableApp: r,
                  enableApp: a,
                  is_open: c,
                  title:
                    "real" === g
                      ? (0, m.localize)(
                          "Manage {{platform}} Real {{account_title}} account password",
                          {
                            platform:
                              l === _.CFD_PLATFORMS.DXTRADE
                                ? "Deriv X"
                                : "DMT5",
                            account_title: d,
                          }
                        )
                      : (0, m.localize)(
                          "Manage {{platform}} Demo {{account_title}} account password",
                          {
                            platform:
                              l === _.CFD_PLATFORMS.DXTRADE
                                ? "Deriv X"
                                : "DMT5",
                            account_title: d,
                          }
                        ),
                  toggleModal: p,
                  height: "688px",
                  width: "904px",
                },
                i.createElement(ft, { steps: z, multi_step_ref: v })
              )
            ),
            i.createElement(
              u.MobileWrapper,
              null,
              i.createElement(
                u.PageOverlay,
                {
                  is_open: c,
                  portal_id: "deriv_app",
                  header: (0, m.localize)("Manage password"),
                  onClickClose: p,
                },
                i.createElement(ft, { steps: z, multi_step_ref: v })
              )
            )
          );
        };
      vt.propTypes = {
        email: o().string,
        is_dxtrade_allowed: o().bool,
        is_visible: o().bool,
        selected_account: o().string,
        selected_server: o().string,
        selected_login: o().string,
        toggleModal: o().func,
        platform: o().string,
      };
      const yt = (0, y.$j)(function (e) {
        var t = e.modules.cfd,
          a = e.client,
          n = e.ui;
        return {
          account_status: a.account_status,
          is_dxtrade_allowed: a.is_dxtrade_allowed,
          email: a.email,
          enableApp: n.enableApp,
          disableApp: n.disableApp,
          sendVerifyEmail: t.sendVerifyEmail,
        };
      })(vt);
      var wt = function (e) {
        var t = e.dxtrade_companies,
          a = e.mt5_companies,
          n = e.current_account,
          r = e.closeSuccessTopUpModal,
          o = e.closeTopUpModal,
          c = e.is_top_up_virtual_open,
          l = e.is_top_up_virtual_in_progress,
          s = e.is_top_up_virtual_success,
          d = e.platform,
          p = e.topUpVirtual,
          f = i.useCallback(
            function () {
              return (a || t) && n ? a[n.category][n.type].title : "";
            },
            [a, t, n]
          ),
          g = d === _.CFD_PLATFORMS.DXTRADE ? "Deriv X" : "DMT5";
        if ((!a && !t) || !n) return null;
        var h = "USD",
          v = 1e3,
          y = 1e4;
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            u.Modal,
            {
              toggleModal: o,
              is_open: c,
              className: "top-up-virtual",
              title: (0, m.localize)("Fund top up"),
              width: "384px",
            },
            i.createElement(
              "div",
              { className: "dc-modal__container_top-up-virtual__body" },
              i.createElement(
                u.Text,
                {
                  as: "p",
                  align: "center",
                  size: "xxs",
                  line_height: "xs",
                  className: "dc-modal__container_top-up-virtual__description",
                },
                i.createElement(m.Localize, {
                  i18n_default_text:
                    "You can top up your demo account with an additional <0></0> if your balance is <1></1> or less.",
                  components: [
                    i.createElement(u.Money, {
                      key: 0,
                      amount: y,
                      currency: h,
                      show_currency: !0,
                    }),
                    i.createElement(u.Money, {
                      key: 1,
                      amount: v,
                      currency: h,
                      show_currency: !0,
                    }),
                  ],
                })
              ),
              i.createElement(
                "h4",
                { className: "dc-modal__container_top-up-virtual--h4" },
                i.createElement(m.Localize, {
                  i18n_default_text:
                    "{{ platform }} {{ account_title }} account",
                  values: { platform: g, account_title: f() },
                })
              ),
              i.createElement(
                "div",
                null,
                i.createElement(
                  u.Text,
                  { as: "p", align: "center", size: "xxs" },
                  i.createElement(m.Localize, {
                    i18n_default_text: "Current balance",
                  })
                ),
                i.createElement(
                  "div",
                  { className: "dc-modal__container_top-up-virtual--balance" },
                  i.createElement(u.Money, {
                    amount: n.display_balance,
                    currency: n.currency,
                    has_sign: n.balance < 0,
                  })
                )
              ),
              i.createElement(
                "div",
                { className: "dc-modal__container_top-up-virtual--button" },
                i.createElement(
                  u.Button,
                  {
                    is_disabled: n.balance > 1e3 || l,
                    type: "button",
                    is_loading: l,
                    onClick: function () {
                      return p(d);
                    },
                    primary: !0,
                    large: !0,
                  },
                  !l &&
                    i.createElement(m.Localize, {
                      i18n_default_text: "Top up  <0></0>",
                      components: [
                        i.createElement(u.Money, {
                          key: 0,
                          amount: y,
                          currency: h,
                          show_currency: !0,
                        }),
                      ],
                    })
                )
              )
            )
          ),
          i.createElement(b, {
            is_open: s,
            toggleModal: function () {
              r();
            },
            has_close_icon: !0,
            title: (0, m.localize)("Fund top up"),
            icon: i.createElement(u.Icon, {
              icon: "IcCashierWallet",
              size: 128,
            }),
            heading: i.createElement(
              "h3",
              { className: "cfd-success-topup__heading" },
              i.createElement(m.Localize, {
                i18n_default_text:
                  "<0></0> has been credited into your {{platform}} {{title}} account.",
                values: { platform: g, title: f() },
                components: [
                  i.createElement(u.Money, {
                    key: 0,
                    amount: y,
                    currency: h,
                    show_currency: !0,
                  }),
                ],
              })
            ),
            message: i.createElement(
              "div",
              { className: "cfd-success-topup__description" },
              i.createElement(
                "p",
                null,
                i.createElement(m.Localize, {
                  i18n_default_text: "New current balance",
                })
              ),
              i.createElement(
                "div",
                { className: "dc-modal__container_top-up-virtual--balance" },
                i.createElement(u.Money, {
                  amount: n.balance,
                  currency: n.currency,
                })
              )
            ),
            icon_size: "large",
            has_cancel: !1,
            has_submit: !1,
            width: "384px",
          })
        );
      };
      wt.propTypes = {
        account_title: o().string,
        closeSuccessTopUpModal: o().func,
        closeTopUpVirtual: o().func,
        currency: o().string,
        display_balance: o().string,
        is_top_up_virtual_open: o().bool,
        is_top_up_virtual_in_progress: o().bool,
        is_top_up_virtual_success: o().bool,
        topUpVirtual: o().func,
      };
      const Et = (0, y.$j)(function (e) {
        var t = e.ui,
          a = e.modules;
        return {
          is_top_up_virtual_open: t.is_top_up_virtual_open,
          is_top_up_virtual_in_progress: t.is_top_up_virtual_in_progress,
          is_top_up_virtual_success: t.is_top_up_virtual_success,
          closeTopUpModal: t.closeTopUpModal,
          closeSuccessTopUpModal: t.closeSuccessTopUpModal,
          current_account: a.cfd.current_account,
          dxtrade_companies: a.cfd.dxtrade_companies,
          mt5_companies: a.cfd.mt5_companies,
          topUpVirtual: a.cfd.topUpVirtual,
        };
      })(wt);
      var zt = a("./Stores/Modules/CFD/Helpers/cfd-config.js");
      function xt(e) {
        return (xt =
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
      function St(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Mt(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function Tt(e, t) {
        return (Tt =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Dt(e, t) {
        return !t || ("object" !== xt(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Ot(e) {
        return (Ot = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function At(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function Nt(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function Pt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var a = [],
                n = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(n = (i = c.next()).done) &&
                  (a.push(i.value), !t || a.length !== t);
                  n = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  n || null == c.return || c.return();
                } finally {
                  if (r) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Ft(e, t);
              var a = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a
                  ? Array.from(e)
                  : "Arguments" === a ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                  ? Ft(e, t)
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
      function Ft(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var Ct = function (e) {
          var t,
            a,
            n,
            r,
            o,
            i = e.current_list,
            c = e.children,
            l = (function (e, t) {
              if (null == e) return {};
              var a,
                n,
                r = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    n,
                    r = {},
                    o = Object.keys(e);
                  for (n = 0; n < o.length; n++)
                    (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                  (a = o[n]),
                    t.indexOf(a) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, a) &&
                        (r[a] = e[a]));
              }
              return r;
            })(e, ["current_list", "children"]),
            s = localStorage.getItem("cfd_reset_password_intent"),
            d = localStorage.getItem("cfd_reset_password_type") || "main";
          if (
            s &&
            /(real|demo)\.(financial_stp|financial|synthetic)/.test(s) &&
            i
          ) {
            var u = Pt(s.split("."), 3);
            (o = u[0]),
              (t = u[1]),
              (a = u[2]),
              (n = i["mt5.".concat(t, ".").concat(a, "@").concat(o)].login),
              (r = (0, zt.o)()[t][a].title);
          } else if (i) {
            var _,
              m,
              p,
              f,
              g,
              h,
              b = Pt(Object.keys(i).pop().split("."), 3);
            (o = b[0]),
              (t = b[1]),
              (a = b[2]),
              (n =
                null !==
                  (_ =
                    null ===
                      (m = i["mt5.".concat(t, ".").concat(a, "@").concat(o)]) ||
                    void 0 === m
                      ? void 0
                      : m.login) && void 0 !== _
                  ? _
                  : ""),
              (r =
                null !==
                  (p =
                    null === (f = (0, zt.o)()) ||
                    void 0 === f ||
                    null === (g = f[t]) ||
                    void 0 === g ||
                    null === (h = g[a]) ||
                    void 0 === h
                      ? void 0
                      : h.title) && void 0 !== p
                  ? p
                  : "");
          } else (n = ""), (r = "");
          return c(
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? At(Object(a), !0).forEach(function (t) {
                      Nt(e, t, a[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(a)
                    )
                  : At(Object(a)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(a, t)
                      );
                    });
              }
              return e;
            })({ login: n, title: r, type: d }, l)
          );
        },
        kt = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Tt(e, t);
          })(o, e);
          var t,
            a,
            r = (function (e) {
              var t = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })();
              return function () {
                var a,
                  n = Ot(e);
                if (t) {
                  var r = Ot(this).constructor;
                  a = Reflect.construct(n, arguments, r);
                } else a = n.apply(this, arguments);
                return Dt(this, a);
              };
            })(o);
          function o() {
            var e;
            St(this, o);
            for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++)
              a[n] = arguments[n];
            return (
              ((e = r.call.apply(r, [this].concat(a))).state = {
                error_code: void 0,
                has_error: !1,
                error_message: void 0,
                is_finished: !1,
                changed_password_type: "",
              }),
              (e.renderErrorBox = function (t) {
                e.setState({
                  error_code: t.code,
                  has_error: !0,
                  error_message: t.message,
                });
              }),
              (e.clearAddressBar = function () {
                localStorage.removeItem("cfd_reset_password_intent"),
                  localStorage.removeItem("cfd_reset_password_type"),
                  localStorage.removeItem("cfd_reset_password_code"),
                  e.props.history.push("".concat(_.routes.mt5));
              }),
              (e.validatePassword = function (t) {
                var a = {};
                return (
                  (0, _.validLength)(t.new_password, { min: 8, max: 25 })
                    ? (0, _.validPassword)(t.new_password) ||
                      (a.new_password = (0, _.getErrorMessages)().password())
                    : (a.new_password = (0, m.localize)(
                        "You should enter {{min_number}}-{{max_number}} characters.",
                        { min_number: 8, max_number: 25 }
                      )),
                  t.new_password.toLowerCase() ===
                    e.props.email.toLowerCase() &&
                    (a.new_password = (0, m.localize)(
                      "Your password cannot be the same as your email address."
                    )),
                  a
                );
              }),
              (e.resetPassword = function (t, a, n, r) {
                var o = r.setSubmitting;
                o(!0);
                var i = {
                  account_id: n,
                  platform: _.CFD_PLATFORMS.MT5,
                  new_password: t.new_password,
                  verification_code: localStorage.getItem(
                    "cfd_reset_password_code"
                  ),
                };
                v.WS.tradingPlatformInvestorPasswordReset(i).then(function (t) {
                  t.error && "InvalidToken" === t.error.code
                    ? e.renderErrorBox(t.error)
                    : (e.setState({
                        is_finished: !0,
                        changed_password_type: a,
                      }),
                      e.clearAddressBar()),
                    o(!1);
                });
              }),
              e
            );
          }
          return (
            (t = o),
            (a = [
              {
                key: "is_list_fetched",
                get: function () {
                  return 0 !== Object.keys(this.props.current_list).length;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.is_cfd_reset_password_modal_enabled,
                    r = t.setCFDPasswordResetModal,
                    o = t.current_list,
                    c = t.platform;
                  return i.createElement(
                    u.Modal,
                    {
                      className: "cfd-reset-password-modal",
                      is_open: a,
                      toggleModal: function () {
                        return r(!1);
                      },
                      title:
                        c === _.CFD_PLATFORMS.DXTRADE
                          ? (0, m.localize)("Reset Deriv X investor password")
                          : (0, m.localize)("Reset DMT5 investor password"),
                    },
                    !this.is_list_fetched &&
                      !this.state.has_error &&
                      i.createElement(u.Loading, { is_fullscreen: !1 }),
                    this.is_list_fetched &&
                      !this.state.has_error &&
                      !this.state.is_finished &&
                      i.createElement(Ct, { current_list: o }, function (t) {
                        var a = t.type,
                          r = t.login;
                        return i.createElement(
                          n.J9,
                          {
                            initialValues: { new_password: "" },
                            validate: e.validatePassword,
                            onSubmit: function (t, n) {
                              return e.resetPassword(t, a, r, n);
                            },
                          },
                          function (e) {
                            var t = e.handleSubmit,
                              n = e.errors,
                              r = e.values,
                              o = e.isSubmitting,
                              c = e.handleChange,
                              l = e.handleBlur,
                              s = e.touched;
                            return i.createElement(
                              "form",
                              { autoComplete: "off", onSubmit: t },
                              i.createElement(
                                "div",
                                { className: "cfd-reset-password" },
                                i.createElement(
                                  "div",
                                  {
                                    className: "cfd-reset-password__container",
                                  },
                                  i.createElement(
                                    "div",
                                    {
                                      className:
                                        "cfd-reset-password__password-area",
                                    },
                                    i.createElement(
                                      u.PasswordMeter,
                                      {
                                        input: r.new_password,
                                        has_error: !(
                                          !s.new_password || !n.new_password
                                        ),
                                        custom_feedback_messages: (0,
                                        _.getErrorMessages)().password_warnings,
                                      },
                                      function (e) {
                                        var t = e.has_warning;
                                        return i.createElement(
                                          u.PasswordInput,
                                          {
                                            autoComplete: "new-password",
                                            className:
                                              "cfd-reset-password__password-field",
                                            name: "new_password",
                                            label: (0, m.localize)(
                                              "New {{type}} password",
                                              { type: a }
                                            ),
                                            onChange: c,
                                            onBlur: l,
                                            error:
                                              s.new_password && n.new_password,
                                            value: r.new_password,
                                            "data-lpignore": "true",
                                            required: !0,
                                            hint:
                                              !t &&
                                              (0, m.localize)(
                                                "Strong passwords contain at least 8 characters, combine uppercase and lowercase letters and numbers."
                                              ),
                                          }
                                        );
                                      }
                                    )
                                  ),
                                  o &&
                                    i.createElement(u.Loading, {
                                      is_fullscreen: !1,
                                    }),
                                  !o &&
                                    i.createElement(u.FormSubmitButton, {
                                      is_disabled:
                                        o ||
                                        !r.new_password ||
                                        Object.keys(n).length > 0,
                                      errors: n,
                                      is_center: !0,
                                      large: !0,
                                      label: (0, m.localize)(
                                        "Create {{type}} password",
                                        { type: a }
                                      ),
                                    })
                                )
                              )
                            );
                          }
                        );
                      }),
                    this.state.has_error &&
                      i.createElement(
                        "div",
                        { className: "cfd-reset-password__error" },
                        i.createElement(u.Icon, {
                          icon: "IcMt5Expired",
                          size: 128,
                        }),
                        i.createElement(
                          u.Text,
                          {
                            as: "p",
                            size: "xs",
                            weight: "bold",
                            align: "center",
                            className: "cfd-reset-password__heading",
                          },
                          this.state.error_message
                        ),
                        "InvalidToken" === this.state.error_code &&
                          i.createElement(
                            u.Text,
                            {
                              as: "p",
                              color: "prominent",
                              size: "xs",
                              align: "center",
                              className:
                                "cfd-reset-password__description--is-centered",
                            },
                            i.createElement(m.Localize, {
                              i18n_default_text:
                                "Please request a new password and check your email for the new token.",
                            })
                          ),
                        i.createElement(
                          u.Button,
                          {
                            primary: !0,
                            large: !0,
                            className: "cfd-reset-password__confirm-button",
                            onClick: function () {
                              e.clearAddressBar(), r(!1);
                            },
                          },
                          i.createElement(m.Localize, {
                            i18n_default_text: "Ok",
                          })
                        )
                      ),
                    this.state.is_finished &&
                      i.createElement(
                        "div",
                        { className: "cfd-reset-password__success" },
                        i.createElement(u.Icon, {
                          icon: "IcMt5PasswordUpdated",
                          size: 128,
                        }),
                        i.createElement(
                          "div",
                          { className: "cfd-reset-password__description" },
                          i.createElement(m.Localize, {
                            i18n_default_text:
                              "Your {{account_type}} password has been changed.",
                            values: {
                              account_type:
                                "main" === this.state.changed_password_type
                                  ? (0, m.localize)("main")
                                  : (0, m.localize)("investor"),
                            },
                          })
                        ),
                        i.createElement(
                          u.Button,
                          {
                            primary: !0,
                            large: !0,
                            onClick: function () {
                              return r(!1);
                            },
                          },
                          i.createElement(m.Localize, {
                            i18n_default_text: "Ok",
                          })
                        )
                      )
                  );
                },
              },
            ]) && Mt(t.prototype, a),
            o
          );
        })(i.Component);
      kt.propTypes = {
        email: r.string,
        is_cfd_reset_password_modal_enabled: r.any,
        setCFDPasswordResetModal: r.any,
        current_list: r.any,
      };
      const jt = (0, l.withRouter)(
          (0, y.$j)(function (e) {
            var t = e.modules.cfd;
            return {
              email: e.client.email,
              is_cfd_reset_password_modal_enabled:
                t.is_cfd_reset_password_modal_enabled,
              setCFDPasswordResetModal: t.setCFDPasswordResetModal,
              current_list: t.current_list,
            };
          })(kt)
        ),
        Lt = (0, y.$j)(function (e) {
          var t = e.ui,
            a = e.modules.cfd;
          return {
            enableApp: t.enableApp,
            disableApp: t.disableApp,
            toggleModal: a.closeCFDPendingDialog,
            is_cfd_pending_dialog_open: a.is_cfd_pending_dialog_open,
          };
        })(function (e) {
          var t = e.enableApp,
            a = e.disableApp,
            n = e.toggleModal,
            r = e.is_cfd_pending_dialog_open;
          return i.createElement(
            u.Modal,
            {
              title: (0, m.localize)("Thanks for submitting your documents!"),
              className: "cfd-pending-dialog",
              is_open: r,
              disableApp: a,
              enableApp: t,
              toggleModal: n,
              has_close_icon: !1,
              small: !0,
            },
            i.createElement(
              u.Modal.Body,
              null,
              i.createElement(m.Localize, {
                i18n_default_text:
                  "We’ll process your documents within 1-3 days. Once they are verified, we’ll notify you via email.",
              })
            ),
            i.createElement(
              u.Modal.Footer,
              null,
              i.createElement(u.Button, {
                has_effect: !0,
                text: (0, m.localize)("OK"),
                onClick: n,
                primary: !0,
              })
            )
          );
        });
      var Rt, It, Bt, Wt, Ut, Xt, qt, Vt, $t;
      function Ht(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      const Yt = {
        mt5: {
          real_synthetic_specs:
            ((Rt = {}),
            Ht(
              Rt,
              (0, m.localize)("Leverage"),
              (0, m.localize)("Up to 1:1000")
            ),
            Ht(Rt, (0, m.localize)("Margin call"), (0, m.localize)("100%")),
            Ht(Rt, (0, m.localize)("Stop out level"), (0, m.localize)("50%")),
            Ht(Rt, (0, m.localize)("Number of assets"), (0, m.localize)("10+")),
            Rt),
          real_financial_specs:
            ((It = {}),
            Ht(
              It,
              (0, m.localize)("Leverage"),
              (0, m.localize)("Up to 1:1000")
            ),
            Ht(It, (0, m.localize)("Margin call"), (0, m.localize)("150%")),
            Ht(It, (0, m.localize)("Stop out level"), (0, m.localize)("75%")),
            Ht(It, (0, m.localize)("Number of assets"), (0, m.localize)("50+")),
            It),
          eu_real_financial_specs:
            ((Bt = {}),
            Ht(Bt, (0, m.localize)("Leverage"), (0, m.localize)("Up to 1:30")),
            Ht(Bt, (0, m.localize)("Margin call"), (0, m.localize)("100%")),
            Ht(Bt, (0, m.localize)("Stop out level"), (0, m.localize)("50%")),
            Ht(Bt, (0, m.localize)("Number of assets"), (0, m.localize)("50+")),
            Bt),
          real_financial_stp_specs:
            ((Wt = {}),
            Ht(Wt, (0, m.localize)("Leverage"), (0, m.localize)("Up to 1:100")),
            Ht(Wt, (0, m.localize)("Margin call"), (0, m.localize)("150%")),
            Ht(Wt, (0, m.localize)("Stop out level"), (0, m.localize)("75%")),
            Ht(Wt, (0, m.localize)("Number of assets"), (0, m.localize)("50+")),
            Wt),
          au_real_financial_specs:
            ((Ut = {}),
            Ht(Ut, (0, m.localize)("Leverage"), (0, m.localize)("Up to 1:30")),
            Ht(Ut, (0, m.localize)("Margin call"), (0, m.localize)("100%")),
            Ht(Ut, (0, m.localize)("Stop out level"), (0, m.localize)("50%")),
            Ht(
              Ut,
              (0, m.localize)("Number of assets"),
              (0, m.localize)("100+")
            ),
            Ut),
        },
        dxtrade: {
          real_synthetic_specs:
            ((Xt = {}),
            Ht(
              Xt,
              (0, m.localize)("Leverage"),
              (0, m.localize)("Up to 1:1000")
            ),
            Ht(Xt, (0, m.localize)("Margin call"), (0, m.localize)("100%")),
            Ht(Xt, (0, m.localize)("Stop out level"), (0, m.localize)("50%")),
            Ht(Xt, (0, m.localize)("Number of assets"), (0, m.localize)("20+")),
            Xt),
          real_financial_specs:
            ((qt = {}),
            Ht(
              qt,
              (0, m.localize)("Leverage"),
              (0, m.localize)("Up to 1:1000")
            ),
            Ht(qt, (0, m.localize)("Margin call"), (0, m.localize)("100%")),
            Ht(qt, (0, m.localize)("Stop out level"), (0, m.localize)("50%")),
            Ht(
              qt,
              (0, m.localize)("Number of assets"),
              (0, m.localize)("100+")
            ),
            qt),
          eu_real_financial_specs:
            ((Vt = {}),
            Ht(Vt, (0, m.localize)("Leverage"), (0, m.localize)("Up to 1:30")),
            Ht(Vt, (0, m.localize)("Margin call"), (0, m.localize)("100%")),
            Ht(Vt, (0, m.localize)("Stop out level"), (0, m.localize)("50%")),
            Ht(
              Vt,
              (0, m.localize)("Number of assets"),
              (0, m.localize)("100+")
            ),
            Vt),
          au_real_financial_specs:
            (($t = {}),
            Ht($t, (0, m.localize)("Leverage"), (0, m.localize)("Up to 1:30")),
            Ht($t, (0, m.localize)("Margin call"), (0, m.localize)("100%")),
            Ht($t, (0, m.localize)("Stop out level"), (0, m.localize)("50%")),
            Ht(
              $t,
              (0, m.localize)("Number of assets"),
              (0, m.localize)("100+")
            ),
            $t),
        },
      };
      var Kt = a(
          "../../../node_modules/react-transition-group/esm/CSSTransition.js"
        ),
        Gt = function (e) {
          var t = e.text,
            a = e.className;
          return i.createElement(
            "div",
            { className: a },
            i.createElement(u.Clipboard, {
              text_copy: t,
              info_message: (0, _.isMobile)() ? "" : (0, m.localize)("copy"),
              success_message: (0, m.localize)("copied!"),
              popoverAlignment: (0, _.isMobile)() ? "left" : "bottom",
            })
          );
        };
      function Jt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var Zt = {
          mt5: {
            synthetic: "IcMt5SyntheticPlatform",
            financial: "IcMt5FinancialPlatform",
            financial_stp: "IcMt5FinancialStpPlatform",
          },
          dxtrade: {
            synthetic: "IcDxtradeSyntheticPlatform",
            financial: "IcDxtradeFinancialPlatform",
          },
        },
        Qt = i.forwardRef(function (e, t) {
          var a = e.onSelectAccount,
            n = e.is_disabled;
          return i.createElement(
            "div",
            {
              onClick: n ? null : a,
              className: f()("cfd-account-card__add-server", {
                "cfd-account-card__add-server--disabled": n,
              }),
              ref: t,
            },
            i.createElement(
              "span",
              { className: "cfd-account-card__add-server--icon" },
              "+"
            ),
            i.createElement(m.Localize, { i18n_default_text: "Add region" })
          );
        });
      Qt.displayName = "AddTradeServerButton";
      var ea = function (e) {
          var t = e.value,
            a = e.is_bold;
          return i.createElement(
            "div",
            { className: "cfd-account-card__spec-box" },
            i.createElement(
              u.Text,
              {
                size: "xs",
                weight: a ? "bold" : "",
                className: "cfd-account-card__spec-text",
              },
              t
            ),
            i.createElement(Gt, {
              text: t,
              className: "cfd-account-card__spec-copy",
            })
          );
        },
        ta = function (e) {
          var t = e.is_collapsed,
            a = e.setCollapsed;
          return i.createElement(
            "div",
            { className: "cfd-account-card__specification-title-wrapper" },
            i.createElement(
              u.Text,
              {
                className: "cfd-account-card__specification-title",
                size: "xxs",
                as: "div",
                align: "center",
                color: "less-prominent",
                onClick: function () {
                  a(function (e) {
                    return !e;
                  });
                },
              },
              (0, m.localize)("Specification"),
              i.createElement(u.Icon, {
                className: f()("cfd-account-card__specification-icon", {
                  "cfd-account-card__specification-icon--collapsed": t,
                }),
                icon: "IcChevronDown",
                color: "secondary",
                size: 12,
              })
            )
          );
        },
        aa = function (e) {
          var t = e.button_label,
            a = e.handleClickSwitchAccount,
            n = e.has_real_account,
            r = e.is_accounts_switcher_on,
            o = e.is_button_primary,
            c = e.is_disabled,
            l = e.is_virtual,
            s = e.onSelectAccount,
            d = e.type;
          if (
            l &&
            n &&
            "real" === d.category &&
            "financial_stp" === d.type &&
            "function" == typeof a
          )
            return i.createElement(
              "div",
              { className: "cfd-account-card__action-wrapper" },
              i.createElement(m.Localize, {
                i18n_default_text:
                  "<0>Switch to your real account</0><1> to create a DMT5 Financial STP account.</1>",
                components: [
                  i.createElement("a", {
                    className: f()(
                      "cfd-account-card__action-wrapper__link link link--orange",
                      { "cfd-account-card__action-wrapper__link--disabled": r }
                    ),
                    key: 0,
                    onClick: a,
                  }),
                  i.createElement(u.Text, {
                    key: 1,
                    line_height: "s",
                    size: "xxs",
                  }),
                ],
              })
            );
          var _ =
              "real" === d.category
                ? i.createElement(m.Localize, {
                    i18n_default_text: "Add real account",
                  })
                : i.createElement(m.Localize, {
                    i18n_default_text: "Add demo account",
                  }),
            p = t || _;
          return i.createElement(
            u.Button,
            {
              className: "cfd-account-card__account-selection",
              onClick: s,
              type: "button",
              is_disabled: c,
              primary: o,
              secondary: !o,
              large: !0,
            },
            p
          );
        },
        na = function (e) {
          var t = e.button_label,
            a = e.commission_message,
            n = e.descriptor,
            r = e.is_hovered,
            o = e.existing_data,
            c = e.has_banner,
            l = e.has_cfd_account,
            s = e.has_cfd_account_error,
            d = e.has_real_account,
            p = e.is_accounts_switcher_on,
            g = e.is_button_primary,
            h = e.is_disabled,
            b = e.is_logged_in,
            v = e.is_virtual,
            y = e.onHover,
            w = e.platform,
            E = e.specs,
            z = e.title,
            x = e.type,
            S = e.onSelectAccount,
            M = e.onClickFund,
            T = e.onPasswordManager,
            D = e.should_show_trade_servers,
            O = e.toggleAccountsDialog,
            A = e.toggleShouldShowRealAccountsList,
            N = x.type
              ? i.createElement(u.Icon, {
                  icon: Zt[x.platform][x.type],
                  size: 64,
                })
              : null,
            P = "synthetic" === x.type && "real" === x.category && !o,
            F = "demo" === x.category,
            C =
              b &&
              o &&
              "real" === x.category &&
              "synthetic" === x.type &&
              (null == o ? void 0 : o.server_info),
            k = i.useRef(),
            j = i.useRef(),
            L = i.useRef(),
            R = (function (e, t) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  ) {
                    var a = [],
                      n = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (
                        var i, c = e[Symbol.iterator]();
                        !(n = (i = c.next()).done) &&
                        (a.push(i.value), !t || a.length !== t);
                        n = !0
                      );
                    } catch (e) {
                      (r = !0), (o = e);
                    } finally {
                      try {
                        n || null == c.return || c.return();
                      } finally {
                        if (r) throw o;
                      }
                    }
                    return a;
                  }
                })(e, t) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return Jt(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === a &&
                        e.constructor &&
                        (a = e.constructor.name),
                      "Map" === a || "Set" === a
                        ? Array.from(e)
                        : "Arguments" === a ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                        ? Jt(e, t)
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
            })(i.useState(!0), 2),
            I = R[0],
            B = R[1];
          i.useEffect(
            function () {
              if (o) {
                var e,
                  t = function () {
                    null == y || y(o.group);
                  };
                return (
                  k.current.addEventListener("mouseenter", t),
                  null == L ||
                    null === (e = L.current) ||
                    void 0 === e ||
                    e.addEventListener("mouseenter", t),
                  function () {
                    var e;
                    k.current.removeEventListener("mouseenter", t),
                      null == L ||
                        null === (e = L.current) ||
                        void 0 === e ||
                        e.removeEventListener("mouseenter", function () {
                          return t;
                        });
                  }
                );
              }
              return function () {};
            },
            [y]
          );
          var W,
            U = i.useCallback(
              function (e) {
                return e
                  ? ""
                      .concat(e.server_info.geolocation.region, " ")
                      .concat(
                        1 === e.server_info.geolocation.sequence
                          ? ""
                          : e.server_info.geolocation.sequence
                      )
                  : "";
              },
              [o]
            ),
            X = (0, _.isMobile)() && w === _.CFD_PLATFORMS.DXTRADE;
          return i.createElement(
            "div",
            { ref: j, className: "cfd-account-card__wrapper" },
            i.createElement(
              "div",
              {
                className: f()("cfd-account-card", {
                  "cfd-account-card__logged-out": !b,
                }),
                ref: k,
              },
              P &&
                i.createElement(
                  "div",
                  { className: "cfd-account-card__banner" },
                  i.createElement(m.Localize, {
                    i18n_default_text: "Most popular",
                  })
                ),
              F &&
                i.createElement(
                  "div",
                  {
                    className:
                      "cfd-account-card__banner cfd-account-card__banner--demo",
                  },
                  i.createElement(m.Localize, { i18n_default_text: "DEMO" })
                ),
              C &&
                i.createElement(
                  "div",
                  {
                    className:
                      "cfd-account-card__banner cfd-account-card__banner--server",
                  },
                  U(o)
                ),
              i.createElement(
                "div",
                {
                  className: f()("cfd-account-card__type", {
                    "cfd-account-card__type--has-banner": c || P || C,
                  }),
                  id: ""
                    .concat(
                      w === _.CFD_PLATFORMS.DXTRADE
                        ? _.CFD_PLATFORMS.DXTRADE
                        : _.CFD_PLATFORMS.MT5,
                      "_"
                    )
                    .concat(x.category, "_")
                    .concat(x.type),
                },
                N,
                i.createElement(
                  "div",
                  { className: "cfd-account-card__type--description" },
                  i.createElement(
                    "h1",
                    { className: "cfd-account-card--heading" },
                    z
                  ),
                  (!o || !b) &&
                    i.createElement(
                      "p",
                      { className: "cfd-account-card--paragraph" },
                      n
                    ),
                  o &&
                    o.display_balance &&
                    b &&
                    i.createElement(
                      "p",
                      { className: "cfd-account-card--balance" },
                      i.createElement(u.Money, {
                        amount: o.display_balance,
                        currency: o.currency,
                        has_sign: o.balance < 0,
                        show_currency: !0,
                      })
                    )
                )
              ),
              i.createElement(
                "div",
                { className: "cfd-account-card__cta" },
                (null == o ? void 0 : o.login) &&
                  b &&
                  i.createElement(ta, { is_collapsed: I, setCollapsed: B }),
                i.createElement(
                  "div",
                  { className: "cfd-account-card__cta-wrapper" },
                  null != o && o.login && b
                    ? i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(
                          "div",
                          {
                            className: f()(
                              "cfd-account-card__specification-content",
                              {
                                "cfd-account-card__specification-content--is-collapsed":
                                  I,
                              }
                            ),
                          },
                          i.createElement(
                            "p",
                            {
                              className:
                                "cfd-account-card__specification-description",
                            },
                            n
                          ),
                          i.createElement(
                            "table",
                            {
                              className:
                                "cfd-account-card__specs-table cfd-account-card__specification-table",
                            },
                            i.createElement(
                              "tbody",
                              null,
                              Object.keys(E).map(function (e, t) {
                                return i.createElement(
                                  "tr",
                                  {
                                    key: t,
                                    className:
                                      "cfd-account-card__specs-table-row",
                                  },
                                  i.createElement(
                                    "td",
                                    {
                                      className:
                                        "cfd-account-card__specs-table-attribute",
                                    },
                                    i.createElement(
                                      "p",
                                      {
                                        className:
                                          "cfd-account-card--paragraph",
                                      },
                                      e
                                    )
                                  ),
                                  i.createElement(
                                    "td",
                                    {
                                      className:
                                        "cfd-account-card__specs-table-data",
                                    },
                                    i.createElement(
                                      "p",
                                      {
                                        className:
                                          "cfd-account-card--paragraph",
                                      },
                                      E[e]
                                    )
                                  )
                                );
                              })
                            )
                          )
                        ),
                        i.createElement(
                          "div",
                          { className: "cfd-account-card__login-specs" },
                          i.createElement(
                            u.Text,
                            {
                              as: "p",
                              color: "less-prominent",
                              size: "xxxs",
                              align: "left",
                            },
                            w === _.CFD_PLATFORMS.MT5
                              ? (0, m.localize)("Use below credential to login")
                              : (0, m.localize)(
                                  "Log in with this username and your trading password."
                                )
                          ),
                          i.createElement(
                            "table",
                            {
                              className: "cfd-account-card__login-specs-table",
                            },
                            i.createElement(
                              "tbody",
                              null,
                              w === _.CFD_PLATFORMS.MT5
                                ? i.createElement(
                                    i.Fragment,
                                    null,
                                    i.createElement(
                                      "tr",
                                      {
                                        className:
                                          "cfd-account-card__login-specs-table-row",
                                      },
                                      i.createElement(
                                        "td",
                                        {
                                          className:
                                            "cfd-account-card__login-specs-table-attribute",
                                        },
                                        i.createElement(
                                          "div",
                                          {
                                            className:
                                              "cfd-account-card--paragraph",
                                          },
                                          (0, m.localize)("Broker")
                                        )
                                      ),
                                      i.createElement(
                                        "td",
                                        {
                                          className:
                                            "cfd-account-card__login-specs-table-data",
                                        },
                                        i.createElement(
                                          "div",
                                          {
                                            className:
                                              "cfd-account-card--paragraph",
                                          },
                                          i.createElement(ea, {
                                            value: "Deriv Limited",
                                          })
                                        )
                                      )
                                    ),
                                    i.createElement(
                                      "tr",
                                      {
                                        className:
                                          "cfd-account-card__login-specs-table-row",
                                      },
                                      i.createElement(
                                        "td",
                                        {
                                          className:
                                            "cfd-account-card__login-specs-table-attribute",
                                        },
                                        i.createElement(
                                          "div",
                                          {
                                            className:
                                              "cfd-account-card--paragraph",
                                          },
                                          (0, m.localize)("Server")
                                        )
                                      ),
                                      i.createElement(
                                        "td",
                                        {
                                          className:
                                            "cfd-account-card__login-specs-table-data",
                                        },
                                        i.createElement(
                                          "div",
                                          {
                                            className:
                                              "cfd-account-card--paragraph",
                                          },
                                          i.createElement(ea, {
                                            value: o.server_info.environment,
                                          })
                                        )
                                      )
                                    ),
                                    i.createElement(
                                      "tr",
                                      {
                                        className:
                                          "cfd-account-card__login-specs-table-row",
                                      },
                                      i.createElement(
                                        "td",
                                        {
                                          className:
                                            "cfd-account-card__login-specs-table-attribute",
                                        },
                                        i.createElement(
                                          "div",
                                          {
                                            className:
                                              "cfd-account-card--paragraph",
                                          },
                                          (0, m.localize)("Login ID")
                                        )
                                      ),
                                      i.createElement(
                                        "td",
                                        {
                                          className:
                                            "cfd-account-card__login-specs-table-data",
                                        },
                                        i.createElement(
                                          "div",
                                          {
                                            className:
                                              "cfd-account-card--paragraph",
                                          },
                                          i.createElement(ea, {
                                            value: o.display_login,
                                          })
                                        )
                                      )
                                    )
                                  )
                                : i.createElement(
                                    i.Fragment,
                                    null,
                                    i.createElement(
                                      "tr",
                                      {
                                        className:
                                          "cfd-account-card__login-specs-table-row",
                                      },
                                      i.createElement(
                                        "td",
                                        {
                                          className:
                                            "cfd-account-card__login-specs-table-attribute",
                                        },
                                        i.createElement(
                                          "div",
                                          {
                                            className:
                                              "cfd-account-card--paragraph",
                                          },
                                          (0, m.localize)("Username")
                                        )
                                      ),
                                      i.createElement(
                                        "td",
                                        {
                                          className:
                                            "cfd-account-card__login-specs-table-data",
                                        },
                                        i.createElement(
                                          "div",
                                          {
                                            className:
                                              "cfd-account-card--paragraph",
                                          },
                                          i.createElement(ea, {
                                            value: o.login,
                                            is_bold: !0,
                                          })
                                        )
                                      )
                                    ),
                                    i.createElement(
                                      "tr",
                                      {
                                        className:
                                          "cfd-account-card__login-specs-table-row cfd-account-card__login-specs-table-row--account-id",
                                      },
                                      i.createElement(
                                        "td",
                                        {
                                          className:
                                            "cfd-account-card__login-specs-table-attribute",
                                        },
                                        i.createElement(
                                          "div",
                                          {
                                            className:
                                              "cfd-account-card--paragraph",
                                          },
                                          (0, m.localize)("Account ID:")
                                        )
                                      ),
                                      i.createElement(
                                        "td",
                                        {
                                          className:
                                            "cfd-account-card__login-specs-table-data",
                                        },
                                        i.createElement(
                                          "div",
                                          {
                                            className:
                                              "cfd-account-card--paragraph",
                                          },
                                          i.createElement(
                                            u.Text,
                                            { size: "xxs", weight: "bold" },
                                            o.display_login
                                          )
                                        )
                                      )
                                    )
                                  )
                            )
                          )
                        )
                      )
                    : i.createElement(
                        "div",
                        { className: "cfd-account-card__specs" },
                        i.createElement(
                          "table",
                          { className: "cfd-account-card__specs-table" },
                          i.createElement(
                            "tbody",
                            null,
                            Object.keys(E).map(function (e, t) {
                              return i.createElement(
                                "tr",
                                {
                                  key: t,
                                  className:
                                    "cfd-account-card__specs-table-row",
                                },
                                i.createElement(
                                  "td",
                                  {
                                    className:
                                      "cfd-account-card__specs-table-attribute",
                                  },
                                  i.createElement(
                                    "p",
                                    {
                                      className: "cfd-account-card--paragraph",
                                    },
                                    e
                                  )
                                ),
                                i.createElement(
                                  "td",
                                  {
                                    className:
                                      "cfd-account-card__specs-table-data",
                                  },
                                  i.createElement(
                                    "p",
                                    {
                                      className: "cfd-account-card--paragraph",
                                    },
                                    E[e]
                                  )
                                )
                              );
                            }),
                            C &&
                              o &&
                              "synthetic" === x.type &&
                              "real" === x.category &&
                              i.createElement(
                                "tr",
                                {
                                  key: o.server,
                                  className:
                                    "cfd-account-card__specs-table-row",
                                },
                                i.createElement(
                                  "td",
                                  {
                                    className:
                                      "cfd-account-card__specs-table-attribute",
                                  },
                                  i.createElement(
                                    "p",
                                    {
                                      className: "cfd-account-card--paragraph",
                                    },
                                    i.createElement(m.Localize, {
                                      i18n_default_text: "Trade server: ",
                                    })
                                  )
                                ),
                                i.createElement(
                                  "td",
                                  {
                                    className:
                                      "cfd-account-card__specs-table-data",
                                  },
                                  i.createElement(
                                    "p",
                                    {
                                      className: "cfd-account-card--paragraph",
                                    },
                                    U(o)
                                  )
                                )
                              )
                          )
                        )
                      ),
                  ((!o && a) || !b) &&
                    i.createElement(
                      "div",
                      { className: "cfd-account-card__commission" },
                      i.createElement(
                        u.Text,
                        {
                          as: "p",
                          color: "general",
                          size: "xs",
                          styles: { margin: "1.6rem auto" },
                        },
                        a
                      )
                    ),
                  o &&
                    b &&
                    i.createElement(
                      "div",
                      { className: "cfd-account-card__manage" },
                      i.createElement(
                        u.Button,
                        {
                          onClick: function () {
                            return M(o);
                          },
                          type: "button",
                          secondary: !0,
                        },
                        "real" === x.category &&
                          i.createElement(m.Localize, {
                            i18n_default_text: "Fund transfer",
                          }),
                        "demo" === x.category &&
                          i.createElement(m.Localize, {
                            i18n_default_text: "Fund top up",
                          })
                      ),
                      i.createElement(
                        u.Button,
                        {
                          onClick: function () {
                            T(o.login, z, x.category, x.type, o.server);
                          },
                          type: "button",
                          secondary: !0,
                        },
                        i.createElement(m.Localize, {
                          i18n_default_text: "Password",
                        })
                      )
                    ),
                  !o &&
                    l &&
                    i.createElement(
                      u.Button,
                      {
                        className: "cfd-account-card__account-selection",
                        onClick: S,
                        type: "button",
                      },
                      i.createElement(m.Localize, {
                        i18n_default_text: "Select",
                      })
                    ),
                  o &&
                    b &&
                    !X &&
                    i.createElement(
                      "a",
                      {
                        className:
                          "dc-btn cfd-account-card__account-selection cfd-account-card__account-selection--primary",
                        type: "button",
                        href:
                          w === _.CFD_PLATFORMS.DXTRADE
                            ? tt(x.category)
                            : at({
                                category: x.category,
                                loginid: o.display_login,
                                server_name: o.server_info.environment,
                              }),
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      i.createElement(m.Localize, {
                        i18n_default_text: "Trade on web terminal",
                      })
                    ),
                  o &&
                    b &&
                    X &&
                    i.createElement(
                      "a",
                      {
                        className:
                          "dc-btn cfd-account-card__account-selection cfd-account-card__account-selection--primary",
                        type: "button",
                        href:
                          ((W = (0, _.mobileOSDetect)()),
                          Qe("iOS" === W ? "ios" : "android")),
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      i.createElement(m.Localize, {
                        i18n_default_text: "Download the app",
                      })
                    ),
                  !o &&
                    !l &&
                    b &&
                    i.createElement(aa, {
                      button_label: t,
                      handleClickSwitchAccount: function () {
                        A(!0), O(!0);
                      },
                      has_real_account: d,
                      is_accounts_switcher_on: p,
                      is_button_primary: g,
                      is_disabled: h,
                      is_virtual: v,
                      onSelectAccount: S,
                      type: x,
                    })
                )
              ),
              i.createElement(
                i.Fragment,
                null,
                D &&
                  i.createElement(
                    u.MobileWrapper,
                    null,
                    i.createElement(Qt, {
                      ref: L,
                      onSelectAccount: S,
                      is_disabled: s,
                    })
                  )
              )
            ),
            i.createElement(
              u.DesktopWrapper,
              null,
              i.createElement(
                Kt.Z,
                {
                  in: r && D,
                  timeout: 0,
                  classNames: "cfd-account-card__add-server",
                  unmountOnExit: !0,
                },
                i.createElement(Qt, {
                  ref: L,
                  onSelectAccount: S,
                  is_disabled: s,
                })
              )
            )
          );
        };
      function ra(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      var oa = function (e) {
        var t,
          a,
          n,
          r,
          o = e.is_eu,
          c = e.is_eu_country,
          l = e.has_maltainvest_account,
          s = e.has_cfd_account_error,
          d = e.openAccountNeededModal,
          u = e.standpoint,
          p = e.is_loading,
          f = e.is_logged_in,
          g = e.landing_companies,
          h = e.onSelectAccount,
          b = e.openAccountTransfer,
          v = e.platform,
          y = e.current_list,
          w = e.has_cfd_account,
          E = e.openPasswordManager,
          z = e.residence,
          x = i.useMemo(
            function () {
              var e;
              return "au" === z
                ? Yt[v].au_real_financial_specs
                : o || c
                ? Yt[v].eu_real_financial_specs
                : (ra(
                    (e = {}),
                    (0, m.localize)("Leverage"),
                    (0, m.localize)("Up to 1:1000")
                  ),
                  ra(
                    e,
                    (0, m.localize)("Margin call"),
                    (0, m.localize)("150%")
                  ),
                  ra(
                    e,
                    (0, m.localize)("Stop out level"),
                    (0, m.localize)("75%")
                  ),
                  ra(
                    e,
                    (0, m.localize)("Number of assets"),
                    (0, m.localize)("50+")
                  ),
                  e);
            },
            [o, c, z, v]
          );
        return p
          ? i.createElement(
              "div",
              { className: "cfd-demo-accounts-display" },
              i.createElement(R.Z, null)
            )
          : i.createElement(
              "div",
              { className: "cfd-demo-accounts-display" },
              ((null == g || null === (t = g.mt_gaming_company) || void 0 === t
                ? void 0
                : t.financial) ||
                !f) &&
                i.createElement(na, {
                  has_cfd_account: w,
                  title: (0, m.localize)("Synthetic"),
                  type: { category: "demo", type: "synthetic", platform: v },
                  is_disabled: s,
                  is_logged_in: f,
                  existing_data:
                    y[
                      Object.keys(y).find(function (e) {
                        return e.startsWith("".concat(v, ".demo.synthetic"));
                      })
                    ],
                  commission_message: (0, m.localize)("No commission"),
                  onSelectAccount: function () {
                    return h({ category: "demo", type: "synthetic" });
                  },
                  onPasswordManager: E,
                  onClickFund: function () {
                    return b(
                      y[
                        Object.keys(y).find(function (e) {
                          return e.startsWith("".concat(v, ".demo.synthetic"));
                        })
                      ],
                      { category: "demo", type: "synthetic" }
                    );
                  },
                  platform: v,
                  descriptor: (0, m.localize)(
                    "Trade CFDs on our Synthetic Indices that simulate real-world market movement."
                  ),
                  specs: Yt[v].real_synthetic_specs,
                  has_banner: !0,
                }),
              ((null == g ||
              null === (a = g.mt_financial_company) ||
              void 0 === a
                ? void 0
                : a.financial) ||
                !f) &&
                i.createElement(na, {
                  has_cfd_account: w,
                  title: (0, m.localize)("Financial"),
                  is_disabled: s,
                  is_logged_in: f,
                  type: { category: "demo", type: "financial", platform: v },
                  existing_data:
                    y[
                      Object.keys(y).find(function (e) {
                        return e.startsWith("".concat(v, ".demo.financial@"));
                      })
                    ],
                  commission_message: (0, m.localize)("No commission"),
                  onSelectAccount: function () {
                    o && !l && u.iom
                      ? d(
                          "maltainvest",
                          (0, m.localize)("Deriv Financial"),
                          (0, m.localize)("DMT5 Demo Financial")
                        )
                      : h({ category: "demo", type: "financial" });
                  },
                  onPasswordManager: E,
                  onClickFund: function () {
                    return b(
                      y[
                        Object.keys(y).find(function (e) {
                          return e.startsWith("".concat(v, ".demo.financial@"));
                        })
                      ],
                      { category: "demo", type: "financial" }
                    );
                  },
                  platform: v,
                  descriptor: (0, m.localize)(
                    "Trade CFDs on forex, stocks & indices, commodities, and cryptocurrencies with leverage."
                  ),
                  specs: x,
                  has_banner: !0,
                }),
              ((null == g ||
              null === (n = g.mt_financial_company) ||
              void 0 === n
                ? void 0
                : n.financial_stp) ||
                !f) &&
                v === _.CFD_PLATFORMS.MT5 &&
                i.createElement(na, {
                  has_cfd_account: w,
                  title: (0, m.localize)("Financial STP"),
                  type: {
                    category: "demo",
                    type: "financial_stp",
                    platform: v,
                  },
                  is_disabled: s,
                  is_logged_in: f,
                  existing_data:
                    y[
                      Object.keys(y).find(function (e) {
                        return e.startsWith(
                          "".concat(v, ".demo.financial_stp@")
                        );
                      })
                    ],
                  commission_message: (0, m.localize)("No commission"),
                  onSelectAccount: function () {
                    return h({ category: "demo", type: "financial_stp" });
                  },
                  onPasswordManager: E,
                  onClickFund: function () {
                    return b(
                      y[
                        Object.keys(y).find(function (e) {
                          return e.startsWith(
                            "".concat(v, ".demo.financial_stp@")
                          );
                        })
                      ],
                      { category: "demo", type: "financial_stp" }
                    );
                  },
                  descriptor: (0, m.localize)(
                    "Trade popular currency pairs and cryptocurrencies with straight-through processing order (STP)."
                  ),
                  specs:
                    ((r = {}),
                    ra(
                      r,
                      (0, m.localize)("Leverage"),
                      (0, m.localize)("Up to 1:100")
                    ),
                    ra(
                      r,
                      (0, m.localize)("Margin call"),
                      (0, m.localize)("150%")
                    ),
                    ra(
                      r,
                      (0, m.localize)("Stop out level"),
                      (0, m.localize)("75%")
                    ),
                    ra(
                      r,
                      (0, m.localize)("Number of assets"),
                      (0, m.localize)("50+")
                    ),
                    r),
                  platform: v,
                  has_banner: !0,
                })
            );
      };
      function ia(e, t) {
        if (e) {
          if ("string" == typeof e) return ca(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === a && e.constructor && (a = e.constructor.name),
            "Map" === a || "Set" === a
              ? Array.from(e)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? ca(e, t)
              : void 0
          );
        }
      }
      function ca(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var la = function (e) {
        var t,
          a,
          n,
          r = e.has_real_account,
          o = e.is_accounts_switcher_on,
          c = e.is_eu,
          l = e.is_eu_country,
          s = e.has_malta_account,
          d = e.has_maltainvest_account,
          p = e.has_cfd_account_error,
          g = e.is_fully_authenticated,
          h = e.is_pending_authentication,
          b = e.is_virtual,
          v = e.landing_companies,
          y = e.onSelectAccount,
          w = e.openAccountTransfer,
          E = e.openPasswordModal,
          z = e.isAccountOfTypeDisabled,
          x = e.current_list,
          S = e.has_cfd_account,
          M = e.openPasswordManager,
          T = e.account_settings,
          D = e.openAccountNeededModal,
          O = e.platform,
          A = e.standpoint,
          N = e.is_logged_in,
          P = e.toggleAccountsDialog,
          F = e.toggleShouldShowRealAccountsList,
          C = e.can_have_more_real_synthetic_mt5,
          k = e.residence,
          j = e.residence_list,
          L = N && !c && r && C && O === _.CFD_PLATFORMS.MT5,
          R = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                if (
                  "undefined" != typeof Symbol &&
                  Symbol.iterator in Object(e)
                ) {
                  var a = [],
                    n = !0,
                    r = !1,
                    o = void 0;
                  try {
                    for (
                      var i, c = e[Symbol.iterator]();
                      !(n = (i = c.next()).done) &&
                      (a.push(i.value), !t || a.length !== t);
                      n = !0
                    );
                  } catch (e) {
                    (r = !0), (o = e);
                  } finally {
                    try {
                      n || null == c.return || c.return();
                    } finally {
                      if (r) throw o;
                    }
                  }
                  return a;
                }
              })(e, t) ||
              ia(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(i.useState(0), 2),
          I = R[0],
          B = R[1],
          W = i.useMemo(
            function () {
              var e,
                t,
                a = T.citizen,
                n = T.tax_identification_number,
                r = T.tax_residence;
              return (
                !!(a && n && r) ||
                (!(!a || !r) &&
                  ((null !==
                    (e =
                      null == v || null === (t = v.config) || void 0 === t
                        ? void 0
                        : t.tax_details_required) &&
                    void 0 !== e &&
                    e) ||
                    !j.filter(function (e) {
                      return e.value === r && e.tin_format;
                    }).length))
              );
            },
            [T, j, v]
          ),
          U = (function (e, t, a) {
            return e && a
              ? i.createElement(m.Localize, {
                  i18n_default_text: "Set your password",
                })
              : t
              ? i.createElement(m.Localize, {
                  i18n_default_text: "Pending verification",
                })
              : i.createElement(m.Localize, {
                  i18n_default_text: "Add real account",
                });
          })(g, h, W),
          X = !r || h,
          q = i.useMemo(
            function () {
              var e = (N && c) || (!N && l);
              return "au" === k
                ? Yt[O].au_real_financial_specs
                : e
                ? Yt[O].eu_real_financial_specs
                : Yt[O].real_financial_specs;
            },
            [k, N, c, l, O]
          ),
          V = function () {
            c && A.malta && !s
              ? D(
                  "malta",
                  (0, m.localize)("Deriv Synthetic"),
                  (0, m.localize)("DMT5 Synthetic")
                )
              : y({ type: "synthetic", category: "real" });
          },
          $ = function (e) {
            return w(x[(0, _.getAccountListKey)(e, O)], {
              category: e.account_type,
              type: (0, _.getCFDAccountKey)({
                market_type: e.market_type,
                sub_account_type: e.sub_account_type,
                platform: O,
              }),
            });
          },
          H = function (e) {
            var t = Object.keys(x).filter(function (e) {
              return e.startsWith("".concat(O, ".real.synthetic"));
            });
            B(
              t.findIndex(function (t) {
                return x[t].group === e;
              })
            );
          },
          Y = function (e) {
            if (p) return !0;
            if (c) {
              var t = (0, _.getAccountTypeFields)({
                category: "real",
                type: e,
              });
              return z(null == t ? void 0 : t.account_type);
            }
            switch (e) {
              case "synthetic":
              case "financial":
                return !r;
              case "financial_stp":
                return X;
              default:
                return !1;
            }
          },
          K =
            ((null == v || null === (t = v.mt_gaming_company) || void 0 === t
              ? void 0
              : t.financial) ||
              !N) &&
            (Object.keys(x).some(function (e) {
              return e.startsWith("".concat(O, ".real.synthetic"));
            })
              ? Object.keys(x)
                  .filter(function (e) {
                    return e.startsWith("".concat(O, ".real.synthetic"));
                  })
                  .reduce(function (e, t) {
                    return e.push(x[t]), e;
                  }, [])
                  .map(function (e, t) {
                    return i.createElement(na, {
                      key: t,
                      has_cfd_account: S,
                      has_cfd_account_error: p,
                      title: (0, m.localize)("Synthetic"),
                      is_hovered: t === I,
                      is_disabled: Y("synthetic"),
                      type: {
                        category: "real",
                        type: "synthetic",
                        platform: O,
                      },
                      is_logged_in: N,
                      should_show_trade_servers: L,
                      existing_data: e,
                      commission_message: (0, m.localize)("No commission"),
                      onSelectAccount: V,
                      onPasswordManager: M,
                      onClickFund: $,
                      platform: O,
                      descriptor: (0, m.localize)(
                        "Trade CFDs on our Synthetic Indices that simulate real-world market movement."
                      ),
                      specs: Yt[O].real_synthetic_specs,
                      onHover: H,
                    });
                  })
              : [
                  i.createElement(na, {
                    key: "real.synthetic",
                    has_cfd_account: S,
                    title: (0, m.localize)("Synthetic"),
                    is_disabled: Y("synthetic"),
                    type: { category: "real", type: "synthetic", platform: O },
                    is_logged_in: N,
                    should_show_trade_servers: L,
                    existing_data: void 0,
                    commission_message: (0, m.localize)("No commission"),
                    onSelectAccount: V,
                    onPasswordManager: M,
                    onClickFund: $,
                    platform: O,
                    descriptor: (0, m.localize)(
                      "Trade CFDs on our Synthetic Indices that simulate real-world market movement."
                    ),
                    specs: Yt[O].real_synthetic_specs,
                    onHover: H,
                  }),
                ]),
          G =
            ((null == v || null === (a = v.mt_financial_company) || void 0 === a
              ? void 0
              : a.financial_stp) ||
              !N) &&
            O === _.CFD_PLATFORMS.MT5 &&
            i.createElement(na, {
              key: "real.financial_stp",
              has_cfd_account: S,
              title: (0, m.localize)("Financial STP"),
              type: { category: "real", type: "financial_stp", platform: O },
              is_logged_in: N,
              existing_data:
                x[
                  Object.keys(x).find(function (e) {
                    return e.startsWith("".concat(O, ".real.financial_stp@"));
                  })
                ],
              commission_message: (0, m.localize)("No commission"),
              onSelectAccount: function () {
                var e = { category: "real", type: "financial_stp" };
                g && W ? E(e) : ((g || X) && W) || y(e);
              },
              button_label: U,
              is_button_primary: h,
              onPasswordManager: M,
              onClickFund: $,
              platform: O,
              descriptor: (0, m.localize)(
                "Trade popular currency pairs and cryptocurrencies with straight-through processing order (STP)."
              ),
              specs: Yt[O].real_financial_stp_specs,
              is_disabled: Y("financial_stp"),
              is_virtual: b,
              has_real_account: r,
              toggleAccountsDialog: P,
              toggleShouldShowRealAccountsList: F,
              is_accounts_switcher_on: o,
            }),
          J =
            ((null == v || null === (n = v.mt_financial_company) || void 0 === n
              ? void 0
              : n.financial) ||
              !N) &&
            i.createElement(na, {
              key: "real.financial",
              has_cfd_account: S,
              is_disabled: Y("financial"),
              title: (0, m.localize)("Financial"),
              type: { category: "real", type: "financial", platform: O },
              existing_data:
                x[
                  Object.keys(x).find(function (e) {
                    return e.startsWith("".concat(O, ".real.financial@"));
                  })
                ],
              commission_message: (0, m.localize)("No commission"),
              onSelectAccount: function () {
                c && !d
                  ? D(
                      "maltainvest",
                      (0, m.localize)("Deriv Financial"),
                      (0, m.localize)("DMT5 Real Financial")
                    )
                  : y({ type: "financial", category: "real" });
              },
              onPasswordManager: M,
              onClickFund: $,
              platform: O,
              descriptor: (0, m.localize)(
                "Trade CFDs on forex, stocks & indices, commodities, and cryptocurrencies with leverage."
              ),
              specs: q,
              is_logged_in: N,
            }),
          Z = []
            .concat(
              (function (e) {
                return (
                  (function (e) {
                    if (Array.isArray(e)) return ca(e);
                  })(e) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(e) ||
                  ia(e) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              })(K || []),
              [J, G]
            )
            .filter(Boolean);
        return i.createElement(
          "div",
          {
            className: f()("cfd-real-accounts-display", {
              "cfd-real-accounts-display--has-trade-servers": L,
            }),
          },
          i.createElement(
            u.DesktopWrapper,
            null,
            i.createElement(u.Carousel, {
              list: Z,
              width: 328,
              nav_position: "middle",
              show_bullet: !1,
              item_per_window: 3,
              is_mt5: !0,
            })
          ),
          i.createElement(
            u.MobileWrapper,
            null,
            Z.map(function (e) {
              return e;
            })
          )
        );
      };
      function sa(e) {
        return (sa =
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
      function da(e, t, a, n, r, o, i) {
        try {
          var c = e[o](i),
            l = c.value;
        } catch (e) {
          return void a(e);
        }
        c.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function ua(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function _a(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function ma(e, t) {
        return (ma =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function pa(e, t) {
        return !t || ("object" !== sa(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function fa(e) {
        return (fa = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var ga = function (e) {
          var t = e.children,
            a = e.is_loading,
            n = e.loading_component,
            r = (function (e, t) {
              if (null == e) return {};
              var a,
                n,
                r = (function (e, t) {
                  if (null == e) return {};
                  var a,
                    n,
                    r = {},
                    o = Object.keys(e);
                  for (n = 0; n < o.length; n++)
                    (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                  (a = o[n]),
                    t.indexOf(a) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, a) &&
                        (r[a] = e[a]));
              }
              return r;
            })(e, ["children", "is_loading", "loading_component"]),
            o = n;
          return a ? i.createElement(o, null) : i.createElement(u.Tabs, r, t);
        },
        ha = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && ma(e, t);
          })(c, e);
          var t,
            a,
            n,
            r,
            o = (function (e) {
              var t = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })();
              return function () {
                var a,
                  n = fa(e);
                if (t) {
                  var r = fa(this).constructor;
                  a = Reflect.construct(n, arguments, r);
                } else a = n.apply(this, arguments);
                return pa(this, a);
              };
            })(c);
          function c() {
            var e;
            ua(this, c);
            for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++)
              a[n] = arguments[n];
            return (
              ((e = o.call.apply(o, [this].concat(a))).state = {
                is_real_enabled: e.props.platform === _.CFD_PLATFORMS.MT5,
                active_index: e.props.platform === _.CFD_PLATFORMS.MT5 ? 0 : 1,
                is_account_needed_modal_open: !1,
                is_demo_tab: !0,
                required_account: {},
                password_manager: {
                  is_visible: !1,
                  selected_login: "",
                  selected_account: "",
                  selected_account_type: "",
                  selected_account_group: "",
                  selected_server: "",
                },
              }),
              (e.openResetPassword = function () {
                /reset-password/.test(e.props.location.hash) &&
                  e.props.setCFDPasswordResetModal(!0);
              }),
              (e.getIndexToSet = function () {
                return e.state.is_real_enabled
                  ? e.props.location.hash
                    ? /demo/.test(e.props.location.hash)
                      ? 1
                      : 0
                    : void 0
                  : 1;
              }),
              (e.updateActiveIndex = function (t) {
                var a = {};
                1 === t
                  ? (a.is_demo_tab = !0)
                  : 0 === t && (a.is_demo_tab = !1);
                var n = e.getIndexToSet();
                e.state.active_index !== n && (a.active_index = n),
                  (0, _.isEmptyObject)(a) || e.setState(a);
              }),
              (e.openAccountTransfer = function (t, a) {
                "real" === a.category
                  ? (sessionStorage.setItem(
                      "cfd_transfer_to_login_id",
                      t.login
                    ),
                    e.props.disableCFDPasswordModal(),
                    e.props.history.push(_.routes.cashier_acc_transfer))
                  : (e.props.setCurrentAccount(t, a), e.props.openTopUpModal());
              }),
              (e.togglePasswordManagerModal = function (t, a, n, r, o) {
                e.setState(function (e) {
                  return {
                    active_index: e.active_index,
                    password_manager: {
                      is_visible: !e.password_manager.is_visible,
                      selected_login: "string" == typeof t ? t : "",
                      selected_account: "string" == typeof a ? a : "",
                      selected_account_group: n,
                      selected_account_type: r,
                      selected_server: o,
                    },
                  };
                });
              }),
              (e.openRealPasswordModal = function (t) {
                e.props.setAccountType(t), e.props.openPasswordModal();
              }),
              e
            );
          }
          return (
            (t = c),
            (a = [
              {
                key: "componentDidMount",
                value:
                  ((n = regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              this.updateActiveIndex(this.getIndexToSet()),
                                this.openResetPassword(),
                                this.props.onMount();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })),
                  (r = function () {
                    var e = this,
                      t = arguments;
                    return new Promise(function (a, r) {
                      var o = n.apply(e, t);
                      function i(e) {
                        da(o, a, r, i, c, "next", e);
                      }
                      function c(e) {
                        da(o, a, r, i, c, "throw", e);
                      }
                      i(void 0);
                    });
                  }),
                  function () {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.onUnmount();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.updateActiveIndex(), this.props.checkShouldOpenAccount();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.account_settings,
                    a = e.account_status,
                    n = e.beginRealSignupForMt5,
                    r = e.country,
                    o = e.createCFDAccount,
                    c = e.current_list,
                    s = e.dxtrade_accounts_list_error,
                    d = e.isAccountOfTypeDisabled,
                    p = e.is_accounts_switcher_on,
                    f = e.is_dark_mode_on,
                    g = e.is_eu,
                    h = e.is_eu_country,
                    b = e.is_fully_authenticated,
                    v = e.is_loading,
                    y = e.is_logged_in,
                    w = e.is_logging_in,
                    E = e.is_mt5_allowed,
                    z = e.is_dxtrade_allowed,
                    x = e.is_pending_authentication,
                    S = e.is_virtual,
                    M = e.landing_companies,
                    T = e.has_malta_account,
                    D = e.has_maltainvest_account,
                    O = e.has_cfd_account,
                    A = e.has_mt5_account_error,
                    N = e.has_dxtrade_account_error,
                    P = e.mt5_disabled_signup_types,
                    F = e.dxtrade_disabled_signup_types,
                    C = e.has_real_account,
                    j = e.NotificationMessages,
                    R = e.platform,
                    B = e.openAccountNeededModal,
                    U = e.residence,
                    X = e.residence_list,
                    q = e.standpoint,
                    V = e.toggleAccountsDialog,
                    $ = e.toggleShouldShowRealAccountsList,
                    H = e.can_have_more_real_synthetic_mt5,
                    Y = e.upgradeable_landing_companies,
                    K = !g && y && !C && (null == Y ? void 0 : Y.length) > 0;
                  return (!r && y) || w || (y && !M)
                    ? i.createElement(u.Loading, null)
                    : R !== _.CFD_PLATFORMS.DXTRADE || z
                    ? i.createElement(
                        i.Fragment,
                        null,
                        E || R === _.CFD_PLATFORMS.DXTRADE || !y
                          ? i.createElement(
                              "div",
                              { className: "cfd-dashboard__container" },
                              i.createElement(j, null),
                              i.createElement(
                                "div",
                                { className: "cfd-dashboard" },
                                i.createElement(
                                  "div",
                                  {
                                    className: "cfd-dashboard__welcome-message",
                                  },
                                  i.createElement(
                                    "h1",
                                    {
                                      className:
                                        "cfd-dashboard__welcome-message--heading",
                                    },
                                    (function (e, t) {
                                      return t === _.CFD_PLATFORMS.DXTRADE
                                        ? e
                                          ? (0, m.localize)(
                                              "Welcome to your Deriv X dashboard"
                                            )
                                          : (0, m.localize)(
                                              "Welcome to Deriv X"
                                            )
                                        : t === _.CFD_PLATFORMS.MT5
                                        ? e
                                          ? (0, m.localize)(
                                              "Welcome to your Deriv MT5 (DMT5) dashboard"
                                            )
                                          : (0, m.localize)(
                                              "Welcome to Deriv MT5 (DMT5) dashboard"
                                            )
                                        : (0, m.localize)("");
                                    })(y, R)
                                  )
                                ),
                                (R === _.CFD_PLATFORMS.MT5 ? A : N || s) &&
                                  i.createElement(
                                    "div",
                                    {
                                      className:
                                        "cfd-dashboard__accounts-error",
                                    },
                                    i.createElement(
                                      u.Text,
                                      {
                                        as: "p",
                                        className:
                                          "cfd-dashboard__accounts-error-message",
                                        lineHeight: "l",
                                        size: "xxs",
                                        color: "prominent",
                                        weight: "normal",
                                        align: "center",
                                      },
                                      i.createElement(m.Localize, {
                                        i18n_default_text:
                                          "Due to an issue on our server, some of your {{platform}} accounts are unavailable at the moment. Please bear with us and thank you for your patience.",
                                        values: {
                                          platform:
                                            R === _.CFD_PLATFORMS.MT5
                                              ? "DMT5"
                                              : "Deriv X",
                                        },
                                      })
                                    )
                                  ),
                                i.createElement(
                                  "div",
                                  {
                                    className:
                                      "cfd-dashboard__accounts-display",
                                  },
                                  i.createElement(yt, {
                                    is_visible:
                                      this.state.password_manager.is_visible,
                                    platform: R,
                                    selected_login:
                                      this.state.password_manager
                                        .selected_login,
                                    selected_account:
                                      this.state.password_manager
                                        .selected_account,
                                    selected_account_group:
                                      this.state.password_manager
                                        .selected_account_group,
                                    selected_account_type:
                                      this.state.password_manager
                                        .selected_account_type,
                                    selected_server:
                                      this.state.password_manager
                                        .selected_server,
                                    toggleModal:
                                      this.togglePasswordManagerModal,
                                  }),
                                  i.createElement(
                                    ga,
                                    {
                                      active_index: this.state.active_index,
                                      top: !0,
                                      center: !0,
                                      is_loading: v,
                                      is_logged_in: y,
                                      loading_component: I,
                                      onTabItemClick: this.updateActiveIndex,
                                      should_update_hash: !0,
                                    },
                                    R === _.CFD_PLATFORMS.MT5 &&
                                      i.createElement(
                                        "div",
                                        {
                                          label: (0, m.localize)(
                                            "Real account"
                                          ),
                                          "data-hash": "real",
                                        },
                                        i.createElement(
                                          i.Fragment,
                                          null,
                                          K &&
                                            i.createElement(W, {
                                              onClickSignup: n,
                                              platform: R,
                                            }),
                                          i.createElement(la, {
                                            is_accounts_switcher_on: p,
                                            is_eu: g,
                                            is_eu_country: h,
                                            is_logged_in: y,
                                            has_maltainvest_account: D,
                                            has_malta_account: T,
                                            has_cfd_account_error:
                                              R === _.CFD_PLATFORMS.MT5
                                                ? P.demo
                                                : F.demo || !!s,
                                            openAccountNeededModal: B,
                                            current_list: c,
                                            account_status: a,
                                            has_cfd_account: O,
                                            onSelectAccount: o,
                                            account_settings: t,
                                            landing_companies: M,
                                            is_pending_authentication: x,
                                            is_fully_authenticated: b,
                                            is_virtual: S,
                                            openAccountTransfer:
                                              this.openAccountTransfer,
                                            openPasswordManager:
                                              this.togglePasswordManagerModal,
                                            openPasswordModal:
                                              this.openRealPasswordModal,
                                            platform: R,
                                            isAccountOfTypeDisabled: d,
                                            has_real_account: C,
                                            standpoint: q,
                                            toggleAccountsDialog: V,
                                            toggleShouldShowRealAccountsList: $,
                                            can_have_more_real_synthetic_mt5: H,
                                            residence: U,
                                            residence_list: X,
                                          })
                                        )
                                      ),
                                    i.createElement(
                                      "div",
                                      {
                                        label: (0, m.localize)("Demo account"),
                                        "data-hash": "demo",
                                      },
                                      i.createElement(oa, {
                                        is_eu: g,
                                        is_logged_in: y,
                                        has_maltainvest_account: D,
                                        has_cfd_account_error:
                                          R === _.CFD_PLATFORMS.MT5
                                            ? P.real
                                            : F.real || !!s,
                                        openAccountNeededModal: B,
                                        standpoint: q,
                                        is_loading: v,
                                        has_cfd_account: O,
                                        current_list: c,
                                        onSelectAccount: o,
                                        landing_companies: M,
                                        openAccountTransfer:
                                          this.openAccountTransfer,
                                        openPasswordManager:
                                          this.togglePasswordManagerModal,
                                        platform: R,
                                        residence: U,
                                      })
                                    )
                                  ),
                                  i.createElement(Ge, { platform: R }),
                                  i.createElement(
                                    "div",
                                    { className: "cfd-dashboard__maintenance" },
                                    i.createElement(u.Icon, {
                                      icon: "IcAlertWarning",
                                      size: (0, _.isMobile)() ? 28 : 16,
                                      className:
                                        "cfd-dashboard__maintenance-icon",
                                    }),
                                    i.createElement(
                                      "div",
                                      {
                                        className:
                                          "cfd-dashboard__maintenance-text",
                                      },
                                      R === _.CFD_PLATFORMS.DXTRADE &&
                                        i.createElement(m.Localize, {
                                          i18n_default_text:
                                            "Server maintenance starts at 06:00 GMT every Sunday and may last up to 2 hours. Service may be disrupted during this time.",
                                        }),
                                      R === _.CFD_PLATFORMS.MT5 &&
                                        i.createElement(m.Localize, {
                                          i18n_default_text:
                                            "Server maintenance starting 01:00 GMT every Sunday. This process may take up to 2 hours to complete. Service may be disrupted during this time.",
                                        })
                                    )
                                  )
                                ),
                                i.createElement(
                                  u.DesktopWrapper,
                                  null,
                                  i.createElement(nt, {
                                    platform: R,
                                    active_index: this.state.active_index,
                                    is_dark_mode_on: f,
                                  })
                                ),
                                i.createElement(
                                  u.MobileWrapper,
                                  null,
                                  i.createElement(
                                    "div",
                                    {
                                      className:
                                        "cfd-dashboard__download-center",
                                    },
                                    i.createElement(
                                      "h1",
                                      {
                                        className:
                                          "cfd-dashboard__download-center--heading",
                                      },
                                      R === _.CFD_PLATFORMS.MT5 &&
                                        i.createElement(m.Localize, {
                                          i18n_default_text:
                                            "Download the MT5 app",
                                        }),
                                      R === _.CFD_PLATFORMS.DXTRADE &&
                                        i.createElement(m.Localize, {
                                          i18n_default_text:
                                            "Download the Deriv X app",
                                        })
                                    ),
                                    i.createElement(
                                      "div",
                                      {
                                        className:
                                          "cfd-dashboard__download-center-options--mobile",
                                      },
                                      i.createElement(
                                        "div",
                                        {
                                          className:
                                            "cfd-dashboard__download-center-options--mobile-devices",
                                        },
                                        R === _.CFD_PLATFORMS.MT5 &&
                                          i.createElement(
                                            i.Fragment,
                                            null,
                                            i.createElement(u.Icon, {
                                              icon: "IcMt5DeviceTablet",
                                              width: 133,
                                              height: 106,
                                            }),
                                            i.createElement(u.Icon, {
                                              icon: "IcMt5DevicePhone",
                                              width: 48,
                                              height: 74,
                                            })
                                          ),
                                        R === _.CFD_PLATFORMS.DXTRADE &&
                                          i.createElement(
                                            i.Fragment,
                                            null,
                                            i.createElement(u.Icon, {
                                              icon: "IcDxtradeDeviceTablet",
                                              width: 133,
                                              height: 106,
                                            }),
                                            i.createElement(u.Icon, {
                                              icon: "IcDxtradeDevicePhone",
                                              width: 48,
                                              height: 74,
                                            })
                                          )
                                      ),
                                      i.createElement(
                                        "div",
                                        {
                                          className:
                                            "cfd-dashboard__download-center-options--mobile-links",
                                        },
                                        i.createElement(
                                          "a",
                                          {
                                            href:
                                              R === _.CFD_PLATFORMS.MT5
                                                ? et("android")
                                                : Qe("android"),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                          },
                                          i.createElement(u.Icon, {
                                            icon: "IcInstallationGoogle",
                                            width: 135,
                                            height: 40,
                                          })
                                        ),
                                        i.createElement(
                                          "a",
                                          {
                                            href:
                                              R === _.CFD_PLATFORMS.MT5
                                                ? et("ios")
                                                : Qe("ios"),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                          },
                                          i.createElement(u.Icon, {
                                            icon: "IcInstallationApple",
                                            width: 135,
                                            height: 40,
                                          })
                                        )
                                      )
                                    )
                                  )
                                ),
                                i.createElement(Et, { platform: R }),
                                i.createElement(k, { platform: R }),
                                i.createElement(L, null),
                                R === _.CFD_PLATFORMS.MT5 &&
                                  i.createElement(
                                    i.Fragment,
                                    null,
                                    i.createElement(Be, null),
                                    i.createElement(Lt, null)
                                  ),
                                i.createElement(jt, { platform: R })
                              )
                            )
                          : i.createElement(u.PageError, {
                              buttonSize: "medium",
                              header: i.createElement(m.Localize, {
                                i18n_default_text:
                                  "DMT5 is not available in {{country}}",
                                values: { country: t.residence },
                                components: [i.createElement("br", { key: 0 })],
                              }),
                              messages: [
                                i.createElement(m.Localize, {
                                  key: 0,
                                  i18n_default_text:
                                    "Please explore our other platforms.",
                                }),
                              ],
                              redirect_urls: [_.routes.trade, _.routes.bot],
                              redirect_labels: [
                                i.createElement(m.Localize, {
                                  key: 0,
                                  i18n_default_text: "Explore DTrader",
                                }),
                                i.createElement(m.Localize, {
                                  key: 1,
                                  i18n_default_text: "Explore DBot",
                                }),
                              ],
                            })
                      )
                    : i.createElement(l.Redirect, { to: _.routes.mt5 });
                },
              },
            ]) && _a(t.prototype, a),
            c
          );
        })(i.Component);
      const ba = (0, c.withRouter)(
        (0, y.$j)(function (e) {
          var t = e.client,
            a = e.modules,
            n = e.ui;
          return {
            beginRealSignupForMt5: a.cfd.beginRealSignupForMt5,
            checkShouldOpenAccount: a.cfd.checkShouldOpenAccount,
            country: t.account_settings.residence,
            client_email: t.email_address,
            createCFDAccount: a.cfd.createCFDAccount,
            current_list: a.cfd.current_list,
            landing_companies: t.landing_companies,
            isAccountOfTypeDisabled: t.isAccountOfTypeDisabled,
            is_logged_in: t.is_logged_in,
            is_logging_in: t.is_logging_in,
            is_eu: t.is_eu,
            is_eu_country: t.is_eu_country,
            is_virtual: t.is_virtual,
            is_mt5_allowed: t.is_mt5_allowed,
            is_dxtrade_allowed: t.is_dxtrade_allowed,
            mt5_disabled_signup_types: t.mt5_disabled_signup_types,
            dxtrade_disabled_signup_types: t.dxtrade_disabled_signup_types,
            has_maltainvest_account: t.has_maltainvest_account,
            has_malta_account: t.has_malta_account,
            can_upgrade_to: t.can_upgrade_to,
            account_settings: t.account_settings,
            disableCFDPasswordModal: a.cfd.disableCFDPasswordModal,
            dxtrade_accounts_list_error: t.dxtrade_accounts_list_error,
            is_pending_authentication: t.is_pending_authentication,
            is_compare_accounts_visible: a.cfd.is_compare_accounts_visible,
            is_fully_authenticated: t.is_fully_authenticated,
            openPasswordModal: a.cfd.enableCFDPasswordModal,
            openAccountNeededModal: n.openAccountNeededModal,
            is_loading: t.is_populating_mt5_account_list,
            residence: t.residence,
            residence_list: t.residence_list,
            has_cfd_account: a.cfd.has_cfd_account,
            has_mt5_account_error: t.has_account_error_in_mt5_list,
            has_dxtrade_account_error: t.has_account_error_in_dxtrade_list,
            has_real_account: t.has_active_real_account,
            setAccountType: a.cfd.setAccountType,
            setCFDPasswordResetModal: a.cfd.setCFDPasswordResetModal,
            setCurrentAccount: a.cfd.setCurrentAccount,
            standpoint: t.standpoint,
            toggleCompareAccounts: a.cfd.toggleCompareAccountsModal,
            is_accounts_switcher_on: n.is_accounts_switcher_on,
            openTopUpModal: n.openTopUpModal,
            NotificationMessages: n.notification_messages_ui,
            onMount: a.cfd.onMount,
            onUnmount: a.cfd.onUnmount,
            toggleAccountsDialog: n.toggleAccountsDialog,
            toggleShouldShowRealAccountsList:
              n.toggleShouldShowRealAccountsList,
            can_have_more_real_synthetic_mt5:
              t.can_have_more_real_synthetic_mt5,
            upgradeable_landing_companies: t.upgradeable_landing_companies,
            is_dark_mode_on: n.is_dark_mode_on,
          };
        })(ha)
      );
    },
    "./templates/_common/components/loading.jsx": (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => i });
      var n = a("../../../node_modules/classnames/index.js"),
        r = a.n(n),
        o = a("react");
      const i = function (e) {
        var t = e.className,
          a = e.is_invisible,
          n = e.theme,
          i = e.id;
        return o.createElement(
          "div",
          {
            id: i,
            className: r()(
              "barspinner",
              "barspinner--".concat(n || "dark"),
              { invisible: a },
              t
            ),
          },
          Array.from(new Array(5)).map(function (e, t) {
            return o.createElement("div", {
              key: t,
              className: "barspinner__rect barspinner__rect--"
                .concat(t + 1, " rect")
                .concat(t + 1),
            });
          })
        );
      };
    },
  },
]);
