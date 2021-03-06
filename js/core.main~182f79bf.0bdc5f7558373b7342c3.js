(() => {
  var t,
    e,
    n,
    r,
    a,
    o,
    i = {
      57573: (t, e, n) => {
        "use strict";
        n.r(e),
          n.d(e, {
            AMOUNT_MAX_LENGTH: () => Vt,
            CFD_PLATFORMS: () => v,
            CookieStorage: () => fn,
            CryptoConfig: () => ne,
            LocalStore: () => bn,
            MAX_MOBILE_WIDTH: () => ir,
            MAX_TABLET_WIDTH: () => cr,
            OSDetect: () => er,
            PlatformContext: () => A,
            SessionStore: () => _n,
            State: () => ln,
            TRACKING_STATUS_KEY: () => Z,
            addComma: () => qt,
            addDays: () => Ce,
            addMonths: () => ke,
            addWeeks: () => Ie,
            addYears: () => Me,
            calcDecimalPlaces: () => Kt,
            checkAndSetEndpointFromUrl: () => F,
            cloneObject: () => nt,
            cloneThorough: () => mt(),
            compareBigUnsignedInt: () => wr,
            compressImageFiles: () => Ye,
            convertDateFormat: () => He,
            convertToUnix: () => be,
            daysFromTodayTo: () => Se,
            deepFreeze: () => dt,
            default_title: () => $,
            deriv_urls: () => s,
            diffInMonths: () => De,
            domain_app_ids: () => I,
            epochToMoment: () => he,
            extractInfoFromShortcode: () => hr,
            filterByLandingCompany: () => qr,
            filterObjProperties: () => tt,
            findValueByKeyRecursively: () => ft,
            formatCurrency: () => Wt,
            formatDate: () => we,
            formatDuration: () => xe,
            formatMiliseconds: () => Be,
            formatMoney: () => Xt,
            formatTime: () => Oe,
            generateValidationFunction: () => Kr,
            getAccountListKey: () => Kn,
            getAccountTypeFields: () => Gn,
            getActivePlatform: () => D,
            getAppId: () => U,
            getCFDAccount: () => Wn,
            getCFDAccountDisplay: () => Xn,
            getCFDAccountKey: () => Yn,
            getCancellationPrice: () => _t,
            getContractPath: () => Hn,
            getContractUpdateConfig: () => Ft,
            getCurrencies: () => fe,
            getCurrencyDisplayCode: () => se,
            getCurrencyName: () => ue,
            getCurrentProductionDomain: () => k,
            getCurrentTick: () => At,
            getDebugServiceWorker: () => L,
            getDecimalPlaces: () => Jt,
            getDefaultFields: () => Wr,
            getDiffDuration: () => je,
            getDigitInfo: () => It,
            getDisplayStatus: () => Nt,
            getErrorMessages: () => zr,
            getFileExtension: () => Ve,
            getFinalPrice: () => vt,
            getFormattedText: () => Gt,
            getHostMap: () => Un,
            getIndicativePrice: () => bt,
            getKebabCase: () => Dr,
            getLastTickFromTickStream: () => Et,
            getLimitOrderAmount: () => Rt,
            getLocation: () => en,
            getMinPayout: () => le,
            getMinWithdrawal: () => re,
            getMinimumTransferFee: () => ie,
            getPaWithdrawalLimit: () => ce,
            getPath: () => Bn,
            getPathname: () => O,
            getPlatformFromUrl: () => p,
            getPlatformInformation: () => S,
            getPlatformRedirect: () => j,
            getPosition: () => de,
            getPreBuildDVRs: () => Zr,
            getPropertyValue: () => ct,
            getRoundedNumber: () => Yt,
            getSelectedRoute: () => ar,
            getSocketURL: () => N,
            getStartOfMonth: () => Le,
            getStaticUrl: () => Ln,
            getSupportedFiles: () => qe,
            getTimePercentage: () => Ut,
            getTotalProfit: () => kt,
            getTransferFee: () => oe,
            getTransferLimits: () => ae,
            getUrlBase: () => kn,
            getUrlSmartTrader: () => d,
            getValidationFunction: () => Qr,
            hasContractEntered: () => xt,
            hasCorrectDecimalPlaces: () => Qt,
            initFormErrorMessages: () => $r,
            isBot: () => b,
            isCryptoContract: () => Pt,
            isCryptocurrency: () => ee,
            isDXtrade: () => w,
            isDateValid: () => Ee,
            isDeepEqual: () => rt,
            isDesktop: () => lr,
            isDesktopOs: () => Qn,
            isDigitContract: () => Ct,
            isEmptyObject: () => et,
            isEnded: () => wt,
            isEqualArray: () => at,
            isEqualObject: () => ot,
            isForwardStarting: () => vr,
            isHighLow: () => gr,
            isHourValid: () => Pe,
            isMT5: () => _,
            isMinuteValid: () => Ae,
            isMobile: () => ur,
            isMobileOs: () => tr,
            isMultiplier: () => yr,
            isMultiplierContract: () => Tt,
            isNavigationFromP2P: () => T,
            isNavigationFromPlatform: () => x,
            isOpen: () => Ot,
            isProduction: () => M,
            isRouteVisible: () => or,
            isSafari: () => r,
            isStaging: () => m,
            isStorageSupported: () => cn,
            isTablet: () => fr,
            isTestLink: () => R,
            isTimeValid: () => Te,
            isTouchDevice: () => sr,
            isUserSold: () => St,
            isValidToCancel: () => Dt,
            isValidToSell: () => jt,
            legacyUrlForLanguage: () => Sn,
            livechat_client_id: () => C,
            livechat_license_id: () => E,
            loginUrl: () => zn,
            makeCancellablePromise: () => rr,
            matchStringByChar: () => Or,
            max_document_size: () => Xe,
            minDate: () => Fe,
            mobileOSDetect: () => nr,
            normalizePath: () => Pn,
            numberToString: () => Sr,
            padLeft: () => _r,
            param: () => Rn,
            params: () => xn,
            paramsHash: () => Tn,
            pick: () => lt,
            platform_name: () => y,
            readFiles: () => Ge,
            redirectToLogin: () => $n,
            redirectToSignUp: () => Zn,
            removeBranchName: () => Mn,
            removeCookies: () => vn,
            removeEmptyPropertiesFromObject: () => st,
            removeObjProperties: () => Q,
            reorderCurrencies: () => zt,
            reset: () => jn,
            resetStaticHost: () => Nn,
            routes: () => h,
            sequence: () => ut,
            setCurrencies: () => te,
            setSharedCFDText: () => qn,
            setTime: () => ve,
            setUrlLanguage: () => Fn,
            shouldShowCancellation: () => Bt,
            shouldShowExpiration: () => Lt,
            showDigitalOptionsUnavailableError: () => $e,
            subDays: () => Re,
            subMonths: () => Ue,
            subYears: () => Ne,
            supported_filetypes: () => We,
            systems: () => Jn,
            toGMTFormat: () => _e,
            toLocalFormat: () => ye,
            toMoment: () => ge,
            toTitleCase: () => br,
            truncateFileName: () => ze,
            unique: () => it,
            urlFor: () => An,
            urlForCurrentDomain: () => En,
            urlForLanguage: () => Dn,
            urlForStatic: () => Cn,
            useIsMounted: () => Ke,
            useNewRowTransition: () => tn,
            validAddress: () => xr,
            validLength: () => Cr,
            validLetterSymbol: () => Er,
            validNumber: () => Hr,
            validPassword: () => Ir,
            validPhone: () => Ar,
            validPostCode: () => Tr,
            validTaxID: () => Pr,
            websiteUrl: () => In,
            website_domain: () => B,
            website_name: () => H,
          });
        var r = function () {
            return (
              /constructor/i.test(window.HTMLElement) ||
              "[object SafariRemoteNotification]" ===
                (
                  !window.safari ||
                  ("undefined" != typeof safari &&
                    window.safari.pushNotification)
                ).toString()
            );
          },
          a = "deriv.com",
          o = [a, "deriv.me"],
          i =
            "undefined" != typeof window &&
            window.location.hostname.split("app.")[1],
          c = o.includes(i) ? i : a,
          s = Object.freeze({
            DERIV_HOST_NAME: c,
            DERIV_COM_PRODUCTION: "https://".concat(c),
            DERIV_COM_STAGING: "https://staging.deriv.com",
            DERIV_DASHBOARD_PRODUCTION: "https://myapps.".concat(c),
            DERIV_DASHBOARD_STAGING: "https://staging-myapps.deriv.com",
            DERIV_APP_PRODUCTION: "https://app.".concat(c),
            DERIV_APP_STAGING: "https://staging-app.deriv.com",
            SMARTTRADER_PRODUCTION: "https://smarttrader.".concat(c),
            SMARTTRADER_STAGING: "https://staging-smarttrader.deriv.com",
          });
        function u(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? u(Object(n), !0).forEach(function (e) {
                  f(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function f(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var d = function () {
            var t = p().is_staging_deriv_app,
              e = window.localStorage.getItem("i18n_language") || "en",
              n = "";
            return (
              (n = t ? s.SMARTTRADER_STAGING : s.SMARTTRADER_PRODUCTION),
              "".concat(n, "/").concat(e.toLowerCase(), "/trading.html")
            );
          },
          p = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : window.location.hostname,
              e = {
                is_staging_deriv_app: /^staging-app\.deriv\.com$/i.test(t),
                is_deriv_app: /^app\.deriv\.com$/i.test(t),
                is_test_link: /^(.*)\.binary\.sx$/i.test(t),
              };
            return l(l({}, e), {}, { is_staging: e.is_staging_deriv_app });
          },
          m = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : window.location.hostname,
              e = p(t),
              n = e.is_staging_deriv_app;
            return n;
          },
          h = {
            error404: "/404",
            account: "/account",
            financial_assessment: "/account/financial-assessment",
            personal_details: "/account/personal-details",
            proof_of_identity: "/account/proof-of-identity",
            proof_of_address: "/account/proof-of-address",
            passwords: "/account/passwords",
            deactivate_account: "/account/deactivate-account",
            account_deactivated: "/account-deactivated",
            account_limits: "/account/account-limits",
            connected_apps: "/account/connected-apps",
            api_token: "/account/api-token",
            login_history: "/account/login-history",
            two_factor_authentication: "/account/two-factor-authentication",
            self_exclusion: "/account/self-exclusion",
            account_password: "/settings/account_password",
            apps: "/settings/apps",
            cashier_password: "/settings/cashier_password",
            contract: "/contract/:contract_id",
            exclusion: "/settings/exclusion",
            financial: "/settings/financial",
            history: "/settings/history",
            index: "/index",
            limits: "/settings/limits",
            mt5: "/mt5",
            dxtrade: "/derivx",
            personal: "/settings/personal",
            positions: "/reports/positions",
            profit: "/reports/profit",
            reports: "/reports",
            root: "/",
            redirect: "/redirect",
            settings: "/settings",
            statement: "/reports/statement",
            token: "/settings/token",
            trade: "/",
            bot: "/bot",
            cashier: "/cashier",
            cashier_deposit: "/cashier/deposit",
            cashier_withdrawal: "/cashier/withdrawal",
            cashier_pa: "/cashier/payment-agent",
            cashier_acc_transfer: "/cashier/account-transfer",
            cashier_onramp: "/cashier/on-ramp",
            cashier_p2p: "/cashier/p2p",
            cashier_p2p_verification: "/cashier/p2p/verification",
            cashier_pa_transfer: "/cashier/payment-agent-transfer",
            smarttrader: d(),
            endpoint: "/endpoint",
            complaints_policy: "/complaints-policy",
            dashboard: "/dashboard",
            my_apps: "/dashboard/my-apps",
            about_us: "/dashboard/about-us",
            explore: "/dashboard/explore",
            resources: "/dashboard/resources",
            market_commodities: "/dashboard/markets/commodities",
            market_forex: "/dashboard/markets/forex",
            market_stock: "/dashboard/markets/stock",
            market_synthetic: "/dashboard/markets/synthetic",
            markets: "/dashboard/markets",
            platform_binary_bot: "/dashboard/platforms/binary-bot",
            platform_dbot: "/dashboard/platforms/dbot",
            platform_dmt5: "/dashboard/platforms/dmt5",
            platform_dmt5_financial: "/dashboard/platforms/dmt5-financial",
            platform_dmt5_financial_stp:
              "/dashboard/platforms/dmt5-financial-stp",
            platform_dmt5_synthetic: "/dashboard/platforms/dmt5-synthetic",
            platform_dtrader: "/dashboard/platforms/dtrader",
            platform_smarttrader: "/dashboard/platforms/smarttrader",
            platforms: "/dashboard/platforms",
            trade_type_cfds: "/dashboard/trade-types/cfds",
            trade_type_multipliers: "/dashboard/trade-types/multipliers",
            trade_type_options: "/dashboard/trade-types/options",
            trade_types: "/dashboard/trade-types",
            wallet_bank_wire: "/dashboard/wallets/bank-wire",
            wallet_cards: "/dashboard/wallets/cards",
            wallet_crypto: "/dashboard/wallets/crypto",
            wallet_ewallet: "/dashboard/wallets/ewallet",
            wallets: "/dashboard/wallets",
          };
        function g(t) {
          return (g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        var y = Object.freeze({
            DBot: "DBot",
            DTrader: "DTrader",
            DXtrade: "Deriv X",
            DMT5: "DMT5",
            SmartTrader: "SmartTrader",
          }),
          v = Object.freeze({ MT5: "mt5", DXTRADE: "dxtrade" }),
          b = function () {
            return (
              /^\/bot/.test(window.location.pathname) ||
              (/^\/(br_)/.test(window.location.pathname) &&
                "bot" === window.location.pathname.split("/")[2])
            );
          },
          _ = function () {
            return (
              /^\/mt5/.test(window.location.pathname) ||
              (/^\/(br_)/.test(window.location.pathname) &&
                window.location.pathname.split("/")[2] === v.MT5)
            );
          },
          w = function () {
            return (
              /^\/derivx/.test(window.location.pathname) ||
              (/^\/(br_)/.test(window.location.pathname) &&
                "derivx" === window.location.pathname.split("/")[2])
            );
          },
          O = function () {
            if (b()) return y.DBot;
            if (_()) return y.DMT5;
            if (w()) return y.DXtrade;
            switch (window.location.pathname.split("/")[1]) {
              case "":
                return y.DTrader;
              case "reports":
                return "Reports";
              case "cashier":
                return "Cashier";
              default:
                return y.SmartTrader;
            }
          },
          S = function (t) {
            return b() || x(t, h.bot)
              ? { header: y.DBot, icon: "IcBrandDbot" }
              : _() || x(t, h.mt5)
              ? { header: y.DMT5, icon: "IcBrandDmt5" }
              : w() || x(t, h.dxtrade)
              ? { header: y.DXtrade, icon: "IcBrandDxtrade" }
              : x(t, h.smarttrader)
              ? { header: y.SmartTrader, icon: "IcBrandSmarttrader" }
              : { header: y.DTrader, icon: "IcBrandDtrader" };
          },
          D = function (t) {
            return b() || x(t, h.bot)
              ? "DBot"
              : _() || x(t, h.mt5)
              ? "DMT5"
              : w() || x(t, h.dxtrade)
              ? "Deriv X"
              : x(t, h.smarttrader)
              ? "SmartTrader"
              : "DTrader";
          },
          j = function (t) {
            return b() || x(t, h.bot)
              ? { name: y.DBot, route: h.bot }
              : _() || x(t, h.mt5)
              ? { name: y.DMT5, route: h.mt5 }
              : w() || x(t, h.dxtrade)
              ? { name: y.DXtrade, route: h.dxtrade }
              : x(t, h.smarttrader)
              ? { name: y.SmartTrader, route: h.smarttrader }
              : T(t, h.cashier_p2p)
              ? { name: "P2P", route: h.cashier_p2p }
              : { name: y.DTrader, route: h.trade };
          },
          x = function (t, e) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (t.length > 0) {
              var r = (function () {
                for (
                  var r = function (t) {
                      return !/^http/.test(t) && t.split("/")[1];
                    },
                    a = 0;
                  a < t.length;
                  a++
                ) {
                  var o = t[a],
                    i = r(o.pathname),
                    c = t.length > a + 1 && t[a + 1];
                  if (i === r(e) || (n && o.pathname === e)) return { v: !0 };
                  if (!c) return { v: !1 };
                  if (i !== r(c.pathname))
                    if (
                      [h.mt5, h.dxtrade, h.bot, h.trade]
                        .map(function (t) {
                          return r(t);
                        })
                        .includes(i)
                    )
                      break;
                }
              })();
              if ("object" === g(r)) return r.v;
            }
            return !1;
          },
          T = function (t, e) {
            var n = t[t.length > 1 ? 1 : 0];
            return (null == n ? void 0 : n.pathname) === e;
          },
          P = n(32735),
          A = P.createContext({});
        A.displayName = "DerivDashboardPlatformContext";
        var E = 12049137,
          C = "66aa088aad5a414484c1fd1fa8a5ace7",
          I = {
            "deriv.app": 30863,
            "app.deriv.com": 30863,
            "myapps.deriv.com": 1411,
            "app.deriv.me": 1411,
            "binary.com": 1,
          },
          k = function () {
            return (
              !/^staging\./.test(window.location.hostname) &&
              Object.keys(I).find(function (t) {
                return window.location.hostname === t;
              })
            );
          },
          M = function () {
            var t = Object.keys(I).map(function (t) {
              return "(www\\.)?".concat(t.replace(".", "\\."));
            });
            return new RegExp("^(".concat(t.join("|"), ")$"), "i").test(
              window.location.hostname
            );
          },
          R = function () {
            return /^((.*)\.binary\.sx)$/i.test(window.location.hostname);
          },
          U = function () {
            var t = null,
              e = window.localStorage.getItem("config.app_id");
            if (e) t = e;
            else if ("".length)
              window.localStorage.setItem("config.default_app_id", ""),
                (t = "");
            else if (m())
              window.localStorage.removeItem("config.default_app_id"),
                (t = b() ? 19112 : 16303);
            else if (/localhost/i.test(window.location.hostname)) t = 17044;
            else {
              window.localStorage.removeItem("config.default_app_id");
              var n = k();
              t = (b() ? 19111 : I[n]) || 30863;
            }
            return t;
          },
          N = function () {
            var t,
              e = window.localStorage.getItem("config.server_url");
            if (e) return e;
            window.location.search &&
              (t = new URLSearchParams(
                document.location.search.substring(1)
              ).get("acct1"));
            var n = window.localStorage.getItem("active_loginid") || t,
              r = n && !/^VRT/.test(n);
            return "".concat(r ? "green" : "blue", ".binaryws.com");
          },
          F = function () {
            if (m() || R()) {
              var t = new URLSearchParams(location.search.slice(1));
              if (t.has("qa_server") && t.has("app_id")) {
                var e = t.get("qa_server"),
                  n = t.get("app_id");
                t.delete("qa_server"),
                  t.delete("app_id"),
                  /^(www\.binaryqa[0-9]{1,2}\.com|(.*)\.binaryws\.com)$/.test(
                    e
                  ) &&
                    /^[0-9]+$/.test(n) &&
                    (localStorage.setItem("config.app_id", n),
                    localStorage.setItem("config.server_url", e));
                var r = t.toString(),
                  a = location.hash;
                location.href = ""
                  .concat(location.protocol, "//")
                  .concat(location.hostname)
                  .concat(location.pathname)
                  .concat(r ? "?".concat(r) : "")
                  .concat(a || "");
              }
            }
          },
          L = function () {
            var t = window.localStorage.getItem("debug_service_worker");
            return !!t && !!parseInt(t);
          },
          B = "app.deriv.com",
          H = "Deriv",
          $ = H,
          Z = "tracking_status",
          z = n(53806),
          V = n.n(z);
        function Y(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function G(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function X(t) {
          return (X =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function W(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if (
                "undefined" == typeof Symbol ||
                !(Symbol.iterator in Object(t))
              )
                return;
              var n = [],
                r = !0,
                a = !1,
                o = void 0;
              try {
                for (
                  var i, c = t[Symbol.iterator]();
                  !(r = (i = c.next()).done) &&
                  (n.push(i.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (a = !0), (o = t);
              } finally {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (a) throw o;
                }
              }
              return n;
            })(t, e) ||
            (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return q(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return q(t, e);
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function q(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function K() {
          return (K =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
        }
        var J = n(57833),
          Q = function (t, e) {
            var n = K({}, e);
            return (
              t.forEach(function (t) {
                return delete n[t];
              }),
              n
            );
          },
          tt = function (t, e) {
            var n = K({}, t);
            return Object.fromEntries(
              Object.entries(n).filter(function (t) {
                var n = W(t, 2),
                  r = n[0];
                n[1];
                return e.includes(r);
              })
            );
          },
          et = function (t) {
            var e = !0;
            return (
              t &&
                t instanceof Object &&
                Object.keys(t).forEach(function (n) {
                  Object.prototype.hasOwnProperty.call(t, n) && (e = !1);
                }),
              e
            );
          },
          nt = function (t) {
            return et(t) ? t : J(!0, Array.isArray(t) ? [] : {}, t);
          },
          rt = function (t, e) {
            return (
              X(t) === X(e) &&
              (Array.isArray(t)
                ? at(t, e)
                : t && e && "object" === X(t)
                ? ot(t, e)
                : !(
                    "number" != typeof t ||
                    "number" != typeof e ||
                    !isNaN(t) ||
                    !isNaN(e)
                  ) || t === e)
            );
          },
          at = function (t, e) {
            return (
              t === e ||
              (t.length === e.length &&
                t.every(function (t, n) {
                  return rt(t, e[n]);
                }))
            );
          },
          ot = function (t, e) {
            return (
              t === e ||
              (Object.keys(t).length === Object.keys(e).length &&
                Object.keys(t).every(function (n) {
                  return rt(t[n], e[n]);
                }))
            );
          },
          it = function (t, e) {
            return t.filter(function (n, r) {
              return (
                t.findIndex(function (t, a) {
                  return t[e] ? t[e] === n[e] : a === r;
                }) === r
              );
            });
          },
          ct = function t(e, n) {
            var r = n;
            return (
              Array.isArray(r) || (r = [r]),
              !et(e) && r[0] in e && r && r.length > 1
                ? t(e[r[0]], r.slice(1))
                : e
                ? nt(e[r[0]])
                : void 0
            );
          },
          st = function (t) {
            var e = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? Y(Object(n), !0).forEach(function (e) {
                      G(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Y(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })({}, t);
            return (
              Object.getOwnPropertyNames(t).forEach(function (n) {
                t[n] || delete e[n];
              }),
              e
            );
          },
          ut = function (t) {
            return Array.from(Array(t).keys());
          },
          lt = function (t, e) {
            return e.reduce(function (e, n) {
              return (
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]), e
              );
            }, {});
          },
          ft = function t(e, n) {
            var r;
            return (
              Object.keys(e).some(function (a) {
                var o = e[a];
                if (a === n) return (r = e[n]), !0;
                if ("object" === X(o)) {
                  var i = t(o, n);
                  if (i) return (r = i), !0;
                }
                return !1;
              }),
              r
            );
          },
          dt = function t(e) {
            return (
              Object.getOwnPropertyNames(e).forEach(function (n) {
                var r = e[n];
                r && "object" === X(r) && !Object.isFrozen(r) && t(r);
              }),
              Object.freeze(e)
            );
          },
          pt = n(82915),
          mt = n.n(pt);
        function ht(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function gt(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var yt,
          vt = function (t) {
            return +(t.sell_price || t.bid_price);
          },
          bt = function (t) {
            return vt(t) && wt(t) ? vt(t) : +t.bid_price || null;
          },
          _t = function (t) {
            var e = t.cancellation,
              n = (e = void 0 === e ? {} : e).ask_price;
            return void 0 === n ? 0 : n;
          },
          wt = function (t) {
            return !!(
              (t.status && "open" !== t.status) ||
              t.is_expired ||
              t.is_settleable
            );
          },
          Ot = function (t) {
            return "open" === t.status;
          },
          St = function (t) {
            return "sold" === t.status;
          },
          Dt = function (t) {
            return !!t.is_valid_to_cancel;
          },
          jt = function (t) {
            return !wt(t) && !St(t) && 1 == +t.is_valid_to_sell;
          },
          xt = function (t) {
            return !!t.entry_spot;
          },
          Tt = function (t) {
            return /MULT/i.test(t);
          },
          Pt = function (t) {
            return /^cry/.test(t);
          },
          At = function (t) {
            var e = it(t.tick_stream, "epoch"),
              n = Ct(t.contract_type) ? e.length : e.length - 1;
            return !n || n < 0 ? 0 : n;
          },
          Et = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            return t[t.length - 1] || {};
          },
          Ct = function (t) {
            return /digit/i.test(t);
          },
          It = function (t, e) {
            var n = e.tick_stream,
              r = Et(n),
              a = r.tick_display_value,
              o = r.epoch;
            return a && o
              ? (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? ht(Object(n), !0).forEach(function (e) {
                          gt(t, e, n[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : ht(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(n, e)
                          );
                        });
                  }
                  return t;
                })({}, o in t ? {} : Mt(a, o))
              : {};
          },
          kt = function (t) {
            return t.bid_price - t.buy_price;
          },
          Mt = function (t, e) {
            return gt({}, +e, { digit: +"".concat(t).slice(-1), spot: t });
          },
          Rt = function (t) {
            if (!t) return { stop_loss: 0, take_profit: 0 };
            var e = t.stop_loss,
              n = (e = void 0 === e ? {} : e).order_amount,
              r = t.take_profit;
            return {
              stop_loss: n,
              take_profit: (r = void 0 === r ? {} : r).order_amount,
            };
          },
          Ut = function (t, e, n) {
            var r = V().duration(V().unix(n).diff(V().unix(e))),
              a =
                (V().duration(V().unix(n).diff(t)).asMilliseconds() /
                  r.asMilliseconds()) *
                100;
            return a < 0.5 ? (a = 0) : a > 100 && (a = 100), Math.round(a);
          },
          Nt = function (t) {
            var e = "purchased";
            return wt(t) && (e = kt(t) >= 0 ? "won" : "lost"), e;
          },
          Ft = function (t) {
            var e = t.contract_update,
              n = t.limit_order,
              r = Rt(n || e),
              a = r.stop_loss,
              o = r.take_profit;
            return {
              contract_update_stop_loss: a ? Math.abs(a).toString() : "",
              contract_update_take_profit: o ? o.toString() : "",
              has_contract_update_stop_loss: !!a,
              has_contract_update_take_profit: !!o,
            };
          },
          Lt = function (t) {
            return /^cry/.test(t);
          },
          Bt = function (t) {
            return !/^(cry|CRASH|BOOM|stpRNG)/.test(t);
          },
          Ht = {},
          $t = ["USD", "EUR", "GBP", "AUD"],
          Zt = [
            "BTC",
            "ETH",
            "LTC",
            "UST",
            "eUSDT",
            "BUSD",
            "DAI",
            "EURS",
            "IDK",
            "PAX",
            "TUSD",
            "USDC",
            "USDK",
          ],
          zt = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "fiat",
              n = "fiat" === e ? $t : Zt;
            return t.sort(function (t, e) {
              return n.indexOf(t.value) < n.indexOf(e.value)
                ? -1
                : n.indexOf(t.value) > n.indexOf(e.value)
                ? 1
                : 0;
            });
          },
          Vt = 10,
          Yt = function (t, e) {
            return Number(Number(t).toFixed(Jt(e)));
          },
          Gt = function (t, e) {
            return "".concat(qt(t, Jt(e), ee(e)), " ").concat(e);
          },
          Xt = function (t, e, n) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0,
              a =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0,
              o = e;
            o && (o = String(o).replace(/,/g, ""));
            var i = o && Number(o) < 0 ? "-" : "",
              c = r || Jt(t);
            if (
              ((o = isNaN(o) ? 0 : Math.abs(o)), "undefined" != typeof Intl)
            ) {
              var s = {
                minimumFractionDigits: a || c,
                maximumFractionDigits: c,
              };
              o = new Intl.NumberFormat("en", s).format(o);
            } else o = qt(o, c);
            return i + (n ? "" : Wt(t)) + o;
          },
          Wt = function (t) {
            return '<span class="symbols '.concat(
              (t || "").toLowerCase(),
              '"></span>'
            );
          },
          qt = function (t, e, n) {
            var r = String(t || 0).replace(/,/g, "");
            return (
              void 0 !== e && (r = (+r).toFixed(e)),
              n && (r = parseFloat(+r)),
              r.toString().replace(/(^|[^\w.])(\d{4,})/g, function (t, e, n) {
                return e + n.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
              })
            );
          },
          Kt = function (t) {
            return ee(t) ? ct(ne.get(), [t, "fractional_digits"]) : 2;
          },
          Jt = function (t) {
            return Ht[t] ? ct(Ht, [t, "fractional_digits"]) : Kt(t);
          },
          Qt = function (t, e) {
            var n = Jt(t),
              r = e.toString().split(".")[1];
            return ((r && r.length) || 0) <= n;
          },
          te = function (t) {
            Ht = t.currencies_config;
          },
          ee = function (t) {
            return /crypto/i.test(ct(Ht, [t, "type"])) || t in ne.get();
          },
          ne = {
            get: function () {
              return (
                yt ||
                  (yt = dt({
                    BTC: {
                      display_code: "BTC",
                      name: "Bitcoin",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 8,
                    },
                    BUSD: {
                      display_code: "BUSD",
                      name: "Binance USD",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 2,
                    },
                    DAI: {
                      display_code: "DAI",
                      name: "Multi-Collateral DAI",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 2,
                    },
                    EURS: {
                      display_code: "EURS",
                      name: "STATIS Euro",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 2,
                    },
                    IDK: {
                      display_code: "IDK",
                      name: "IDK",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 0,
                    },
                    PAX: {
                      display_code: "PAX",
                      name: "Paxos Standard",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 2,
                    },
                    TUSD: {
                      display_code: "TUSD",
                      name: "True USD",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 2,
                    },
                    USDC: {
                      display_code: "USDC",
                      name: "USD Coin",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 2,
                    },
                    USDK: {
                      display_code: "USDK",
                      name: "USDK",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 2,
                    },
                    eUSDT: {
                      display_code: "eUSDT",
                      name: "Tether ERC20",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 2,
                    },
                    BCH: {
                      display_code: "BCH",
                      name: "Bitcoin Cash",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 8,
                    },
                    ETH: {
                      display_code: "ETH",
                      name: "Ether",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 8,
                    },
                    ETC: {
                      display_code: "ETC",
                      name: "Ether Classic",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 8,
                    },
                    LTC: {
                      display_code: "LTC",
                      name: "Litecoin",
                      min_withdrawal: 0.002,
                      pa_max_withdrawal: 5,
                      pa_min_withdrawal: 0.002,
                      fractional_digits: 8,
                    },
                    UST: {
                      display_code: "USDT",
                      name: "Tether Omni",
                      min_withdrawal: 0.02,
                      pa_max_withdrawal: 2e3,
                      pa_min_withdrawal: 10,
                      fractional_digits: 2,
                    },
                  })),
                yt
              );
            },
          },
          re = function (t) {
            return ee(t) ? ct(ne.get(), [t, "min_withdrawal"]) || 0.002 : 1;
          },
          ae = function (t, e) {
            var n = ct(Ht, [t, "transfer_between_accounts", "limits"]) || re(t),
              r = Jt(t);
            return "max" === e
              ? n.max
                ? n.max.toFixed(r)
                : void 0
              : n.min
              ? n.min.toFixed(r)
              : void 0;
          },
          oe = function (t, e) {
            var n = ct(Ht, [t, "transfer_between_accounts", "fees", e]);
            return "".concat(void 0 === n ? "1" : n, "%");
          },
          ie = function (t) {
            var e = Jt(t);
            return "".concat(t, " ").concat((1 / Math.pow(10, e)).toFixed(e));
          },
          ce = function (t, e) {
            return ee(t)
              ? ct(ne.get(), [t, "pa_".concat(e, "_withdrawal")])
              : "max" === e
              ? 2e3
              : 10;
          },
          se = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return (
              "eUSDT" !== t && (t = t.toUpperCase()),
              ct(ne.get(), [t, "display_code"]) || t
            );
          },
          ue = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return "USDT" === t ? "Tether Omni" : ct(Ht, [t, "name"]) || "";
          },
          le = function (t) {
            return ct(Ht, [t, "stake_default"]);
          },
          fe = function () {
            return Ht;
          },
          de = function (t) {
            var e = t.preferred_alignment,
              n = void 0 === e ? "bottom" : e,
              r = t.child_el,
              a = t.parent_el,
              o = t.should_consider_parent_height,
              i = void 0 === o || o,
              c = a.getBoundingClientRect(),
              s = r.clientHeight,
              u = document.body.getBoundingClientRect(),
              l = c.top,
              f = c.bottom,
              d = c.left,
              p = c.width,
              m = (function (t) {
                var e = t.parent_rect,
                  n = t.child_height;
                return e.top + e.height + n;
              })({ parent_rect: c, child_height: s }),
              h = {
                bottom: u.bottom - (i ? l : f) + 8,
                left: d,
                width: p,
                transformOrigin: "bottom",
              },
              g = { top: i ? f : l, left: d, width: p, transformOrigin: "top" };
            if ("bottom" === n && m <= u.height)
              return { style: g, placement: "bottom" };
            var y = (function (t) {
              var e = t.parent_rect,
                n = t.child_height;
              return e.top - n;
            })({ parent_rect: c, child_height: s });
            return "top" === n && y >= 0
              ? { style: h, placement: "top" }
              : m - u.height < 0 - y
              ? { style: g, placement: "bottom" }
              : { style: h, placement: "top" };
          };
        function pe(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if (
                "undefined" == typeof Symbol ||
                !(Symbol.iterator in Object(t))
              )
                return;
              var n = [],
                r = !0,
                a = !1,
                o = void 0;
              try {
                for (
                  var i, c = t[Symbol.iterator]();
                  !(r = (i = c.next()).done) &&
                  (n.push(i.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (a = !0), (o = t);
              } finally {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (a) throw o;
                }
              }
              return n;
            })(t, e) ||
            (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return me(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return me(t, e);
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function me(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        V().createFromInputFallback = function (t) {
          t._d = new Date(NaN);
        };
        var he = function (t) {
            return V().unix(t).utc();
          },
          ge = function (t) {
            if (!t) return V()().utc();
            if (t instanceof V() && t.isValid() && t.isUTC()) return t;
            if ("number" == typeof t) return he(t);
            if (/invalid/i.test(V()(t))) {
              var e = V()();
              return t > e.utc().daysInMonth()
                ? V().utc(e.add(t, "d"), "DD MMM YYYY")
                : V().utc(t, "DD MMM YYYY");
            }
            return V().utc(t);
          },
          ye = function (t) {
            return V().utc(t).local().format("YYYY-MM-DD HH:mm:ss Z");
          },
          ve = function (t, e) {
            var n = pe(e ? e.split(":") : [0, 0, 0], 3),
              r = n[0],
              a = n[1],
              o = n[2];
            return (
              t
                .hour(r)
                .minute(a || 0)
                .second(o || 0),
              t
            );
          },
          be = function (t, e) {
            return ve(ge(t), e).unix();
          },
          _e = function (t) {
            return V()(t || void 0)
              .utc()
              .format("YYYY-MM-DD HH:mm:ss [GMT]");
          },
          we = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "YYYY-MM-DD";
            return ge(t).format(e);
          },
          Oe = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "HH:mm:ss [GMT]";
            return ge(t).format(e);
          },
          Se = function (t) {
            var e = ge(t).startOf("day").diff(ge().startOf("day"), "days");
            return !t || e < 0 ? "" : e;
          },
          De = function (t, e) {
            return e.diff(t, "month");
          },
          je = function (t, e) {
            return V().duration(V().unix(e).diff(V().unix(t)));
          },
          xe = function (t, e) {
            var n = Math.floor(t.asDays()),
              r = t.hours(),
              a = t.minutes(),
              o = t.seconds();
            return {
              days: n,
              timestamp: V()(0)
                .hour(r)
                .minute(a)
                .seconds(o)
                .format(e || "HH:mm:ss"),
            };
          },
          Te = function (t) {
            return /^([0-9]|[0-1][0-9]|2[0-3]):([0-9]|[0-5][0-9])(:([0-9]|[0-5][0-9]))?$/.test(
              t
            );
          },
          Pe = function (t) {
            return Te(t) && /^([01][0-9]|2[0-3])$/.test(t.split(":")[0]);
          },
          Ae = function (t) {
            return Te(t) && /^[0-5][0-9]$/.test(t.split(":")[1]);
          },
          Ee = function (t) {
            return V()(t, "DD MMM YYYY").isValid();
          },
          Ce = function (t, e) {
            return ge(t).clone().add(e, "day");
          },
          Ie = function (t, e) {
            return ge(t).clone().add(e, "week");
          },
          ke = function (t, e) {
            return ge(t).clone().add(e, "month");
          },
          Me = function (t, e) {
            return ge(t).clone().add(e, "year");
          },
          Re = function (t, e) {
            return ge(t).clone().subtract(e, "day");
          },
          Ue = function (t, e) {
            return ge(t).clone().subtract(e, "month");
          },
          Ne = function (t, e) {
            return ge(t).clone().subtract(e, "year");
          },
          Fe = function (t, e) {
            return V().min(ge(t), ge(e));
          },
          Le = function (t) {
            return ge(t).clone().startOf("month").format("YYYY-MM-DD");
          },
          Be = function (t, e) {
            return V().utc(t).format(e);
          },
          He = function (t, e, n) {
            return V()(t, e).format(n);
          },
          $e = function (t, e) {
            var n = e.title;
            t({
              message: e.text,
              header: n,
              redirect_label: e.link,
              redirectOnClick: null,
              should_show_refresh: !1,
              redirect_to: "/mt5",
              should_clear_error_on_click: !0,
            });
          },
          Ze = n(29735),
          ze = function (t, e) {
            var n,
              r = new RegExp("(.{".concat(e || 30, "})..+"));
            return null == t || null === (n = t.name) || void 0 === n
              ? void 0
              : n.replace(r, "$1???.".concat(Ve(t)));
          },
          Ve = function (t) {
            var e;
            return null == t || null === (e = t.type) || void 0 === e
              ? void 0
              : e.match(/[^/]+$/)[0];
          },
          Ye = function (t) {
            var e = [];
            return (
              t.forEach(function (t) {
                var n = new Promise(function (e) {
                  (0, Ze.isImageType)(t.type)
                    ? (0, Ze.convertToBase64)(t).then(function (n) {
                        (0, Ze.compressImg)(n).then(function (n) {
                          var r = t;
                          (r.file = n), e(r.file);
                        });
                      })
                    : e(t);
                });
                e.push(n);
              }),
              Promise.all(e)
            );
          },
          Ge = function (t, e) {
            var n = [];
            return (
              t.forEach(function (t) {
                var r = new FileReader(),
                  a = new Promise(function (n) {
                    (r.onload = function () {
                      var e = {
                        filename: t.name,
                        buffer: r.result,
                        documentType: "utility_bill",
                        documentFormat: (0, Ze.getFormatFromMIME)(t),
                        file_size: t.size,
                      };
                      n(e);
                    }),
                      (r.onerror = function () {
                        n({
                          message:
                            "function" == typeof e
                              ? e(t.name)
                              : "Unable to read file ".concat(t.name),
                        });
                      }),
                      r.readAsArrayBuffer(t);
                  });
                n.push(a);
              }),
              Promise.all(n)
            );
          },
          Xe = 8388608,
          We = "image/png, image/jpeg, image/jpg, image/gif, application/pdf",
          qe = function (t) {
            return /^.*\.(png|PNG|jpg|JPG|jpeg|JPEG|gif|GIF|pdf|PDF)$/.test(t);
          },
          Ke = function () {
            var t = P.useRef(!1);
            return (
              P.useEffect(function () {
                return (
                  (t.current = !0),
                  function () {
                    t.current = !1;
                  }
                );
              }, []),
              function () {
                return t.current;
              }
            );
          };
        function Je(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if (
                "undefined" == typeof Symbol ||
                !(Symbol.iterator in Object(t))
              )
                return;
              var n = [],
                r = !0,
                a = !1,
                o = void 0;
              try {
                for (
                  var i, c = t[Symbol.iterator]();
                  !(r = (i = c.next()).done) &&
                  (n.push(i.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (a = !0), (o = t);
              } finally {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (a) throw o;
                }
              }
              return n;
            })(t, e) ||
            (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return Qe(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Qe(t, e);
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Qe(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        var tn = function (t) {
            var e = Je(P.useState(!t), 2),
              n = e[0],
              r = e[1];
            return (
              P.useEffect(
                function () {
                  t && r(!0);
                },
                [t]
              ),
              { in_prop: n }
            );
          },
          en = function (t, e, n) {
            var r = t.find(function (t) {
              return (
                t["text" === n ? "value" : "text"].toLowerCase() ===
                e.toLowerCase()
              );
            });
            return r ? r[n] : "";
          },
          nn = n(49189),
          rn = n.n(nn),
          an = function (t) {
            return JSON.parse(this.getItem(t) || "{}");
          },
          on = function (t, e) {
            if (e && e instanceof Object)
              try {
                this.setItem(t, JSON.stringify(e));
              } catch (t) {}
          };
        "undefined" != typeof Storage &&
          ((Storage.prototype.getObject = an),
          (Storage.prototype.setObject = on));
        var cn = function (t) {
            if (void 0 === t) return !1;
            var e = "test";
            try {
              return t.setItem(e, "1"), t.removeItem(e), !0;
            } catch (t) {
              return !1;
            }
          },
          sn = function (t) {
            (this.storage = t),
              (this.storage.getObject = an),
              (this.storage.setObject = on);
          };
        sn.prototype = {
          get: function (t) {
            return this.storage.getItem(t) || void 0;
          },
          set: function (t, e) {
            void 0 !== e && this.storage.setItem(t, e);
          },
          getObject: function (t) {
            return "function" == typeof this.storage.getObject
              ? this.storage.getObject(t)
              : JSON.parse(this.storage.getItem(t) || "{}");
          },
          setObject: function (t, e) {
            "function" == typeof this.storage.setObject
              ? this.storage.setObject(t, e)
              : this.storage.setItem(t, JSON.stringify(e));
          },
          remove: function (t) {
            this.storage.removeItem(t);
          },
          clear: function () {
            this.storage.clear();
          },
        };
        var un = function (t) {
          this.store = void 0 !== t ? t : {};
        };
        un.prototype = {
          get: function (t) {
            return ct(this.store, t);
          },
          set: function (t, e) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.store,
              r = t;
            Array.isArray(r) || (r = [r]),
              r.length > 1
                ? ((r[0] in n && !et(n[r[0]])) || (n[r[0]] = {}),
                  this.set(r.slice(1), e, n[r[0]]))
                : (n[r[0]] = e);
          },
          getObject: function (t) {
            return JSON.parse(this.get(t) || "{}");
          },
          setObject: function (t, e) {
            this.set(t, JSON.stringify(e));
          },
          remove: function () {
            for (
              var t = this, e = arguments.length, n = new Array(e), r = 0;
              r < e;
              r++
            )
              n[r] = arguments[r];
            n.forEach(function (e) {
              delete t.store[e];
            });
          },
          clear: function () {
            this.store = {};
          },
          has: function (t) {
            return void 0 !== this.get(t);
          },
          keys: function () {
            return Object.keys(this.store);
          },
          call: function (t) {
            "function" == typeof this.get(t) && this.get(t)();
          },
        };
        var ln = new un();
        (ln.prototype = un.prototype),
          (ln.prototype.getResponse = function (t) {
            var e = t;
            if ("string" == typeof e) {
              var n = e.split(".");
              e = ["response", n[0]].concat(n);
            }
            return this.get(e);
          }),
          (ln.prototype.getByMsgType = ln.getResponse),
          ln.set("response", {});
        var fn = function (t, e) {
          var n = window.location.hostname;
          (this.initialized = !1),
            (this.cookie_name = t),
            (this.domain =
              e || (n.includes("binary.sx") ? "binary.sx" : s.DERIV_HOST_NAME)),
            (this.path = "/"),
            (this.expires = new Date("Thu, 1 Jan 2037 12:00:00 GMT")),
            (this.value = {});
        };
        fn.prototype = {
          read: function () {
            var t = rn().get(this.cookie_name);
            try {
              this.value = t ? JSON.parse(t) : {};
            } catch (t) {
              this.value = {};
            }
            this.initialized = !0;
          },
          write: function (t, e, n) {
            this.initialized || this.read(),
              (this.value = t),
              e && (this.expires = e),
              rn().set(this.cookie_name, this.value, {
                expires: this.expires,
                path: this.path,
                domain: this.domain,
                secure: !!n,
              });
          },
          get: function (t) {
            return this.initialized || this.read(), this.value[t];
          },
          set: function (t, e) {
            this.initialized || this.read(),
              (this.value[t] = e),
              rn().set(this.cookie_name, this.value, {
                expires: new Date(this.expires),
                path: this.path,
                domain: this.domain,
              });
          },
          remove: function () {
            rn().remove(this.cookie_name, {
              path: this.path,
              domain: this.domain,
            });
          },
        };
        var dn,
          pn,
          mn,
          hn,
          gn,
          yn,
          vn = function () {
            var t = [
                ".".concat(document.domain.split(".").slice(-2).join(".")),
                ".".concat(document.domain),
              ],
              e = window.location.pathname.split("/", 2)[1];
            "" !== e && (e = "/".concat(e));
            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
              r[a] = arguments[a];
            r.forEach(function (n) {
              rn().remove(n, { path: "/", domain: t[0] }),
                rn().remove(n, { path: "/", domain: t[1] }),
                rn().remove(n),
                new RegExp(n).test(document.cookie) &&
                  e &&
                  (rn().remove(n, { path: e, domain: t[0] }),
                  rn().remove(n, { path: e, domain: t[1] }),
                  rn().remove(n, { path: e }));
            });
          },
          bn = cn(window.localStorage) ? new sn(window.localStorage) : new un(),
          _n = cn(window.sessionStorage)
            ? new sn(window.sessionStorage)
            : new un(),
          wn = "binary.com",
          On = {
            "bot.binary.com": "www.binary.bot",
            "developers.binary.com": "developers.binary.com",
            "academy.binary.com": "academy.binary.com",
            "tech.binary.com": "tech.binary.com",
            "blog.binary.com": "blog.binary.com",
          },
          Sn = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : window.location.href;
            return e.replace(
              new RegExp("/".concat(mn, "/"), "i"),
              "/".concat((t || "EN").trim().toLowerCase(), "/")
            );
          },
          Dn = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : window.location.href,
              n = new URL(e);
            return (
              "EN" === t
                ? n.searchParams.delete("lang")
                : n.searchParams.set("lang", t),
              "".concat(n)
            );
          },
          jn = function () {
            var t, e;
            dn =
              null !==
                (t =
                  null === (e = window) || void 0 === e
                    ? void 0
                    : e.location) && void 0 !== t
                ? t
                : dn;
          },
          xn = function (t) {
            for (
              var e = [],
                n = ((t ? new URL(t) : dn).search || "").substr(1).split("&"),
                r = n.length;
              r--;

            ) {
              var a = n[r].split("=");
              e.push(a);
            }
            return e;
          },
          Tn = function (t) {
            for (var e = {}, n = xn(t), r = n.length; r--; )
              n[r][0] && (e[n[r][0]] = n[r][1] || "");
            return e;
          },
          Pn = function (t) {
            return t ? t.replace(/(^\/|\/$|[^a-zA-Z0-9-_./()])/g, "") : "";
          },
          An = function (t) {
            var e,
              n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { query_string: void 0, legacy: !1, language: void 0 },
              a = r.legacy,
              o = r.language,
              i = r.query_string;
            if (a && /^bot$/.test(t))
              return "https://".concat(On["bot.binary.com"]);
            var c =
                null !==
                  (e =
                    null == o || null === (n = o.toLowerCase) || void 0 === n
                      ? void 0
                      : n.call(o)) && void 0 !== e
                  ? e
                  : mn,
              s = "https://".concat(window.location.hostname, "/");
            a &&
              (s = p().is_staging_deriv_app
                ? s.replace(
                    /staging-app\.deriv\.com/,
                    "staging.binary.com/".concat(c || "en")
                  )
                : p().is_deriv_app
                ? s.replace(/app\.deriv\.com/, "binary.com/".concat(c || "en"))
                : "https://binary.com/".concat(c || "en", "/"));
            var u = ""
              .concat(s)
              .concat(Pn(t) || "home", ".html")
              .concat(i ? "?".concat(i) : "");
            return c && !a ? Dn(c, u) : a ? Sn(c, u) : u;
          },
          En = function (t) {
            var e = k();
            if (!e) return t;
            var n = new URL(t);
            if (Object.keys(On).includes(n.hostname))
              n.hostname = On[n.hostname];
            else {
              if (-1 === n.hostname.indexOf(wn)) return t;
              n.hostname = n.hostname.replace(
                new RegExp("\\.".concat(wn), "i"),
                ".".concat(e)
              );
            }
            return n.href;
          },
          Cn = function () {
            var t,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
            (pn && 0 !== pn.length) ||
              ((pn = document.querySelector('script[src*="vendor.min.js"]')) &&
                (pn = pn.getAttribute("src")),
              (pn =
                (null === (t = pn) || void 0 === t ? void 0 : t.length) > 0
                  ? pn.substr(0, pn.indexOf("/js/") + 1)
                  : In()));
            return pn + e.replace(/(^\/)/g, "");
          },
          In = function () {
            return ""
              .concat(location.protocol, "//")
              .concat(location.hostname, "/");
          },
          kn = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              e = window.location;
            return /^\/(br_)/.test(e.pathname)
              ? "/"
                  .concat(e.pathname.split("/")[1])
                  .concat(/^\//.test(t) ? t : "/".concat(t))
              : t;
          },
          Mn = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return t.replace(/^\/br_.*?\//, "/");
          },
          Rn = function (t) {
            return Tn()[t];
          },
          Un = function () {
            return On;
          },
          Nn = function () {
            pn = void 0;
          },
          Fn = function (t) {
            mn = t;
          },
          Ln = function () {
            var t,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { is_dashboard: !1 },
              r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              a = n.is_dashboard
                ? s.DERIV_DASHBOARD_PRODUCTION
                : s.DERIV_COM_PRODUCTION,
              o = null === (t = mn) || void 0 === t ? void 0 : t.toLowerCase();
            return (
              (o = o && "en" !== o ? "/".concat(o) : ""),
              r
                ? "".concat(a, "/").concat(Pn(e))
                : (a === s.DERIV_COM_PRODUCTION &&
                    o.includes("_") &&
                    (o = o.replace("_", "-")),
                  "".concat(a).concat(o, "/").concat(Pn(e)))
            );
          },
          Bn = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(e).reduce(function (t, n) {
              return t.replace(":".concat(n), e[n]);
            }, t);
          },
          Hn = function (t) {
            return Bn(h.contract, { contract_id: t });
          },
          $n = function (t, e) {
            var n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0;
            if (!t && cn(sessionStorage)) {
              var a = window.location,
                o = n
                  ? window.location.href
                  : ""
                      .concat(a.protocol, "//")
                      .concat(a.host)
                      .concat(a.pathname);
              sessionStorage.setItem("redirect_url", o),
                setTimeout(function () {
                  window.location.href = zn({ language: e });
                }, r);
            }
          },
          Zn = function (t) {
            var e = t.is_dashboard;
            window.open(Ln("/signup/", { is_dashboard: e }));
          },
          zn = function (t) {
            var e = t.language,
              n = bn.get("config.server_url"),
              r = new fn("signup_device").get("signup_device"),
              a = new fn("date_first_contact").get("date_first_contact"),
              o = ""
                .concat(r ? "&signup_device=".concat(r) : "")
                .concat(a ? "&date_first_contact=".concat(a) : ""),
              i = function () {
                return "https://oauth."
                  .concat(s.DERIV_HOST_NAME, "/oauth2/authorize?app_id=")
                  .concat(U(), "&l=")
                  .concat(e)
                  .concat(o, "&brand=deriv&affiliate_token=_GNu7pR6ifo50QQMXeD9If2Nd7ZgqdRLk/1/")
                  .concat(H.toLowerCase());
              };
            return n && /qa/.test(n)
              ? "https://"
                  .concat(n, "/oauth2/authorize?app_id=")
                  .concat(U(), "&l=")
                  .concat(e)
                  .concat(o, "&brand=deriv&affiliate_token=_GNu7pR6ifo50QQMXeD9If2Nd7ZgqdRLk/1/")
                  .concat(H.toLowerCase())
              : U() === I[window.location.hostname]
              ? i()
              : En(i());
          },
          Vn = {
            dxtrade: "Deriv X",
            mt5: "MT5",
            synthetic: "Synthetic",
            financial: "Financial",
            financial_stp: "Financial STP",
          },
          Yn = function (t) {
            var e = t.market_type,
              n = t.sub_account_type,
              r = t.platform;
            if (
              !(
                ("gaming" !== e && "synthetic" !== e) ||
                (r !== v.DXTRADE && "financial" !== n)
              )
            )
              return "synthetic";
            if ("financial" === e) {
              if (r === v.DXTRADE || "financial" === n) return "financial";
              if ("financial_stp" === n) return "financial_stp";
            }
          },
          Gn = function (t) {
            var e = t.category,
              n = t.type;
            return {
              real: {
                synthetic: { account_type: "gaming" },
                financial: {
                  account_type: "financial",
                  mt5_account_type: "financial",
                },
                financial_stp: {
                  account_type: "financial",
                  mt5_account_type: "financial_stp",
                },
              },
              demo: {
                synthetic: { account_type: "demo" },
                financial: {
                  account_type: "demo",
                  mt5_account_type: "financial",
                },
                financial_stp: {
                  account_type: "demo",
                  mt5_account_type: "financial_stp",
                },
              },
            }[e][n];
          },
          Xn = function (t) {
            var e = t.market_type,
              n = t.sub_account_type,
              r = t.platform,
              a = Yn({ market_type: e, sub_account_type: n, platform: r });
            if (a) return hn[a]();
          },
          Wn = function (t) {
            var e = t.market_type,
              n = t.sub_account_type,
              r = t.platform,
              a = Yn({ market_type: e, sub_account_type: n, platform: r });
            if (a) return Vn[a];
          },
          qn = function (t) {
            hn = t;
          },
          Kn = function (t, e) {
            return ""
              .concat(t.platform || e, ".")
              .concat(t.account_type, ".")
              .concat(
                Yn({
                  market_type: t.market_type,
                  sub_account_type: t.sub_account_type,
                  platform: e,
                }),
                "@"
              )
              .concat(e === v.DXTRADE ? t.market_type : t.server);
          },
          Jn = {
            mac: ["Mac68K", "MacIntel", "MacPPC"],
            linux: [
              "HP-UX",
              "Linux i686",
              "Linux amd64",
              "Linux i686 on x86_64",
              "Linux i686 X11",
              "Linux x86_64",
              "Linux x86_64 X11",
              "FreeBSD",
              "FreeBSD i386",
              "FreeBSD amd64",
              "X11",
            ],
            ios: [
              "iPhone",
              "iPod",
              "iPad",
              "iPhone Simulator",
              "iPod Simulator",
              "iPad Simulator",
            ],
            android: ["Android", "Linux armv7l", "Linux armv8l", null],
            windows: ["Win16", "Win32", "Win64", "WinCE"],
          },
          Qn = function () {
            var t = er();
            return !!["windows", "mac", "linux"].find(function (e) {
              return e === t;
            });
          },
          tr = function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            );
          },
          er = function () {
            return localStorage.getItem("config.os")
              ? localStorage.getItem("config.os")
              : "undefined" != typeof navigator && navigator.platform
              ? Object.keys(Jn)
                  .map(function (t) {
                    return (
                      !!Jn[t].some(function (t) {
                        return navigator.platform === t;
                      }) && t
                    );
                  })
                  .filter(function (t) {
                    return t;
                  })[0]
              : "Unknown OS";
          },
          nr = function () {
            var t = navigator.userAgent || navigator.vendor || window.opera;
            return /windows phone/i.test(t)
              ? "Windows Phone"
              : /android/i.test(t)
              ? "Android"
              : /iPad|iPhone|iPod/.test(t) && !window.MSStream
              ? "iOS"
              : "unknown";
          },
          rr = function (t) {
            var e = !1,
              n = function () {
                return (e = !0);
              };
            return {
              promise: new Promise(function (r, a) {
                (n = function () {
                  e || ((e = !0), a(new Error("Cancelled")));
                }),
                  t
                    .then(function (t) {
                      e && a(t), (e = !0), r(t);
                    })
                    .catch(function (t) {
                      (e = !0), a(t);
                    });
              }),
              cancel: n,
            };
          },
          ar = function (t) {
            var e = t.routes,
              n = t.pathname,
              r =
                e.find(function (t) {
                  return t.path === n;
                }) ||
                e.find(function (t) {
                  return t.default;
                }) ||
                e[0];
            return r || null;
          },
          or = function (t, e) {
            return !(t && t.is_authenticated && !e);
          },
          ir = 813,
          cr = 1023,
          sr = function () {
            return (
              "ontouchstart" in window ||
              "ontouchstart" in document.documentElement ||
              (window.DocumentTouch &&
                document instanceof window.DocumentTouch) ||
              navigator.maxTouchPoints > 0 ||
              window.navigator.msMaxTouchPoints > 0
            );
          },
          ur = function () {
            return window.innerWidth <= ir;
          },
          lr = function () {
            return fr() || window.innerWidth > cr;
          },
          fr = function () {
            return ir < window.innerWidth && window.innerWidth <= cr;
          },
          dr =
            "^([A-Z]+)_((?:1HZ[0-9-V]+)|(?:(?:CRASH|BOOM)[0-9\\d]+)|(?:cry_[A-Z]+)|(?:OTC_[A-Z0-9]+)|R_[\\d]{2,3}|[A-Z]+)_([\\d.]+)",
          pr = new RegExp("".concat(dr, "_(\\d+)_(\\d+)")),
          mr = new RegExp(
            "".concat(dr, "_([A-Z\\d]+)_([A-Z\\d]+)_?([A-Z\\d]+)?")
          ),
          hr = function (t) {
            var e = { category: "", underlying: "", barrier_1: "" },
              n = /^MULT/i.test(t),
              r = (n ? pr : mr).exec(t);
            return (
              null !== r &&
                ((e.category = r[1].toLowerCase()),
                (e.underlying = r[2]),
                n
                  ? ((e.multiplier = r[4]), (e.start_time = r[5]))
                  : (e.start_time = r[4]),
                /^(CALL|PUT)$/i.test(e.category) && (e.barrier_1 = r[6])),
              e
            );
          },
          gr = function (t) {
            var e = t.shortcode,
              n = void 0 === e ? "" : e,
              r = t.shortcode_info,
              a = void 0 === r ? "" : r,
              o = n ? hr(n) : a;
            return !(!o || !o.barrier_1) && !/^S0P$/.test(o.barrier_1);
          },
          yr = function (t) {
            var e = t.shortcode,
              n = void 0 === e ? "" : e,
              r = t.shortcode_info,
              a = void 0 === r ? "" : r,
              o = n ? hr(n) : a;
            return !(!o || !o.category) && /^mult(up|down)$/.test(o.category);
          },
          vr = function (t, e) {
            var n = hr(t);
            if (null != n && n.multiplier) return !1;
            var r = null == n ? void 0 : n.start_time;
            return r && e && +r != +e;
          },
          br = function (t) {
            return (t || "").replace(/\w[^\s/\\]*/g, function (t) {
              return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
            });
          },
          _r = function (t, e, n) {
            var r = String(t || "");
            return r.length >= e
              ? r
              : "".concat(Array(e - r.length + 1).join(n)).concat(r);
          },
          wr = function (t, e) {
            var n = Sr(t),
              r = Sr(e);
            if (!n || !r) return "";
            var a = Math.max(n.length, r.length),
              o = 0;
            return (
              (n = _r(n, a, "0")) !== (r = _r(r, a, "0")) &&
                (o = n > r ? 1 : -1),
              o
            );
          },
          Or = function (t, e) {
            if ((null == e ? void 0 : e.length) < 1) return !0;
            var n = e.split("").reduce(function (t, e) {
              return "".concat(t, "[^").concat(e, "]*").concat(e);
            });
            return RegExp(n, "i").test(t);
          },
          Sr = function (t) {
            return "number" == typeof t ? String(t) : t;
          },
          Dr = function (t) {
            return t
              ? t
                  .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                  .replace(/[\s]+/g, "-")
                  .toLowerCase()
              : t;
          },
          jr = function (t) {
            return null != t && String(t).replace(/\s/g, "").length > 0;
          },
          xr = function (t) {
            return !/[`~!$%^&*_=+[}{\]\\"?><|]+/.test(t);
          },
          Tr = function (t) {
            return "" === t || /^[A-Za-z0-9][A-Za-z0-9\s-]*$/.test(t);
          },
          Pr = function (t) {
            return /^[a-zA-Z0-9]*[\w-]*$/.test(t);
          },
          Ar = function (t) {
            return /^\+?((-|\s)*[0-9])*$/.test(t);
          },
          Er = function (t) {
            return !/[`~!@#$%^&*)(_=+[}{\]\\/";:?><,|\d]+/.test(t);
          },
          Cr = function (t, e) {
            return (
              (!e.min || t.length >= e.min) && (!e.max || t.length <= e.max)
            );
          },
          Ir = function (t) {
            return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+/.test(t);
          },
          kr = function (t) {
            return /^[+-]?\d+\.?\d*$/.test(t);
          },
          Mr = function (t) {
            return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/.test(t);
          },
          Rr = function (t) {
            return !/[`~!@#$%^&*)(_=+[}{\]\\/";:?><|]+/.test(t);
          },
          Ur = function (t, e) {
            return e.regex.test(t);
          },
          Nr = function (t) {
            return !0 === t;
          },
          Fr = function (t) {
            return !/p[.\s]+o[.\s]+box/i.test(t);
          },
          Lr = function (t) {
            return 8 === t.trim().length;
          },
          Br = function (t, e) {
            return "float" === e.type ? +t > +e.max : 1 === wr(t, e.max);
          },
          Hr = function (t, e) {
            var n = nt(e),
              r = null;
            if (n.allow_empty && 0 === t.length) return !0;
            var a = !0;
            if (
              ("min" in n && "function" == typeof n.min && (n.min = n.min()),
              "max" in n && "function" == typeof n.max && (n.max = n.max()),
              !("float" === n.type ? /^\d*(\.\d+)?$/ : /^\d+$/).test(t) ||
                isNaN(t))
            )
              (a = !1), (r = yn.number());
            else if (
              "float" === n.type &&
              n.decimals &&
              !new RegExp("^\\d+(\\.\\d{0,".concat(n.decimals, "})?$")).test(t)
            )
              (a = !1), (r = yn.decimalPlaces(n.decimals));
            else if (
              "min" in n &&
              "max" in n &&
              +n.min == +n.max &&
              +t != +n.min
            )
              (a = !1), (r = yn.value(qt(n.min)));
            else if (
              "min" in n &&
              "max" in n &&
              n.min > 0 &&
              (+t < +n.min || Br(t, n))
            ) {
              a = !1;
              var o = qt(n.min),
                i = qt(n.max);
              r = yn.betweenMinMax(o, i);
            } else if ("min" in n && +t < +n.min) {
              a = !1;
              var c = qt(n.min);
              r = yn.minNumber(c);
            } else if ("max" in n && Br(t, n)) {
              a = !1;
              var s = qt(n.max);
              r = yn.maxNumber(s);
            }
            return { is_ok: a, message: r };
          },
          $r = function (t) {
            gn ||
              (gn = {
                address: { func: xr, message: (yn = t).address },
                barrier: { func: kr, message: yn.barrier },
                email: { func: Mr, message: yn.email },
                general: { func: Rr, message: yn.general },
                length: { func: Cr, message: "" },
                letter_symbol: { func: Er, message: yn.letter_symbol },
                number: {
                  func: function () {
                    return Hr.apply(void 0, arguments);
                  },
                  message: yn.number,
                },
                password: { func: Ir, message: yn.password },
                phone: { func: Ar, message: yn.phone },
                po_box: { func: Fr, message: yn.po_box },
                postcode: { func: Tr, message: yn.postcode },
                regular: { func: Ur, message: "" },
                req: { func: jr, message: "" },
                confirm: { func: Nr, message: "" },
                signup_token: { func: Lr, message: yn.signup_token },
                tax_id: { func: Pr, message: yn.validTaxID },
              });
          },
          Zr = function () {
            return gn;
          },
          zr = function () {
            return yn;
          },
          Vr = n(19465),
          Yr = n.n(Vr);
        function Gr(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if (
                "undefined" == typeof Symbol ||
                !(Symbol.iterator in Object(t))
              )
                return;
              var n = [],
                r = !0,
                a = !1,
                o = void 0;
              try {
                for (
                  var i, c = t[Symbol.iterator]();
                  !(r = (i = c.next()).done) &&
                  (n.push(i.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (a = !0), (o = t);
              } finally {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (a) throw o;
                }
              }
              return n;
            })(t, e) ||
            (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return Xr(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Xr(t, e);
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Xr(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        var Wr = function (t, e) {
            var n = {};
            return (
              Object.entries(qr(t, e)).forEach(function (t) {
                var e = Gr(t, 2),
                  r = e[0],
                  a = e[1];
                n[r] = a.default_value;
              }),
              n
            );
          },
          qr = function (t, e) {
            return Yr()(
              Object.entries(e).filter(function (e) {
                return Gr(e, 2)[1].supported_in.includes(t);
              })
            );
          },
          Kr = function (t, e) {
            var n = qr(t, e),
              r = {};
            return (
              Object.entries(n).forEach(function (t) {
                var e = Gr(t, 2),
                  n = e[0],
                  a = e[1];
                r[n] = a.rules;
              }),
              function (t) {
                var e = {};
                return (
                  Object.entries(t).forEach(function (n) {
                    var a = Gr(n, 2),
                      o = a[0],
                      i = a[1];
                    o in r &&
                      r[o].some(function (n) {
                        var r = Gr(n, 3),
                          a = r[0],
                          c = r[1],
                          s = r[2];
                        return (
                          !!Jr({
                            field_name: o,
                            value: i,
                            rule: a,
                            options: s,
                            values: t,
                          }) &&
                          ((e[o] = "string" == typeof c ? ["error", c] : c), !0)
                        );
                      });
                  }),
                  e
                );
              }
            );
          },
          Jr = function (t) {
            var e = t.value,
              n = t.rule,
              r = t.options,
              a = t.values;
            return !Qr(n)(e, r, a);
          },
          Qr = function (t) {
            var e,
              n,
              r =
                null !==
                  (e =
                    null === (n = Zr()[t]) || void 0 === n ? void 0 : n.func) &&
                void 0 !== e
                  ? e
                  : t;
            if ("function" != typeof r)
              throw new Error(
                "validation rule "
                  .concat(t, " not found. Available validations are: ")
                  .concat(JSON.stringify(Object.keys(Zr())))
              );
            return function (t, e, n) {
              return !!r(t, e, n);
            };
          };
      },
      29735: (t, e, n) => {
        n(51038);
        t.exports = {
          compressImg: function (t) {
            return new Promise(function (e) {
              var n = new Image();
              (n.src = t.src),
                (n.onload = function () {
                  var r = document.createElement("canvas"),
                    a = r.getContext("2d");
                  if (n.naturalWidth > 2560) {
                    var o = 2560 / n.naturalWidth;
                    (r.width = 2560), (r.height = n.naturalHeight * o);
                  } else
                    (r.height = n.naturalHeight), (r.width = n.naturalWidth);
                  (a.fillStyle = "transparent"),
                    a.fillRect(0, 0, r.width, r.height),
                    a.save(),
                    a.drawImage(n, 0, 0, r.width, r.height),
                    r.toBlob(
                      function (n) {
                        var r = t.filename.replace(/\.[^/.]+$/, ".jpg"),
                          a = new Blob([n], { type: "image/jpeg" });
                        (a.lastModifiedDate = Date.now()), (a.name = r), e(a);
                      },
                      "image/jpeg",
                      0.9
                    );
                });
            });
          },
          convertToBase64: function (t) {
            return new Promise(function (e) {
              var n = new FileReader();
              n.readAsDataURL(t),
                (n.onloadend = function () {
                  var r = { src: n.result, filename: t.name };
                  e(r);
                });
            });
          },
          isImageType: function (t) {
            return /(gif|jpg|jpeg|tiff|png)$/i.test(t);
          },
          getFormatFromMIME: function (t) {
            return (
              t.type.split("/")[1] ||
              (t.name.match(/\.([\w\d]+)$/) || [])[1] ||
              ""
            ).toUpperCase();
          },
        };
      },
      82915: (t, e, n) => {
        function r(t) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        t = n.nmd(t);
        var a = (function () {
          function t(t, e) {
            return null != e && t instanceof e;
          }
          var e, n, a;
          try {
            e = Map;
          } catch (t) {
            e = function () {};
          }
          try {
            n = Set;
          } catch (t) {
            n = function () {};
          }
          try {
            a = Promise;
          } catch (t) {
            a = function () {};
          }
          function o(i, s, u, l, f) {
            "object" === r(s) &&
              ((u = s.depth),
              (l = s.prototype),
              (f = s.includeNonEnumerable),
              (s = s.circular));
            var d = [],
              p = [],
              m = "undefined" != typeof Buffer;
            return (
              void 0 === s && (s = !0),
              void 0 === u && (u = 1 / 0),
              (function i(u, h) {
                if (null === u) return null;
                if (0 === h) return u;
                var g, y;
                if ("object" !== r(u)) return u;
                if (t(u, e)) g = new e();
                else if (t(u, n)) g = new n();
                else if (t(u, a))
                  g = new a(function (t, e) {
                    u.then(
                      function (e) {
                        t(i(e, h - 1));
                      },
                      function (t) {
                        e(i(t, h - 1));
                      }
                    );
                  });
                else if (o.__isArray(u)) g = [];
                else if (o.__isRegExp(u))
                  (g = new RegExp(u.source, c(u))),
                    u.lastIndex && (g.lastIndex = u.lastIndex);
                else if (o.__isDate(u)) g = new Date(u.getTime());
                else {
                  if (m && Buffer.isBuffer(u))
                    return (
                      Buffer.from
                        ? (g = Buffer.from(u))
                        : ((g = new Buffer(u.length)), u.copy(g)),
                      g
                    );
                  t(u, Error)
                    ? (g = Object.create(u))
                    : void 0 === l
                    ? ((y = Object.getPrototypeOf(u)), (g = Object.create(y)))
                    : ((g = Object.create(l)), (y = l));
                }
                if (s) {
                  var v = d.indexOf(u);
                  if (-1 != v) return p[v];
                  d.push(u), p.push(g);
                }
                for (var b in (t(u, e) &&
                  u.forEach(function (t, e) {
                    var n = i(e, h - 1),
                      r = i(t, h - 1);
                    g.set(n, r);
                  }),
                t(u, n) &&
                  u.forEach(function (t) {
                    var e = i(t, h - 1);
                    g.add(e);
                  }),
                u)) {
                  if (Object.getOwnPropertyDescriptor(u, b)) {
                    if (Object.keys(u).indexOf(b) < 0) continue;
                    g[b] = i(u[b], h - 1);
                  }
                  try {
                    if (
                      "undefined" === Object.getOwnPropertyDescriptor(u, b).set
                    )
                      continue;
                    g[b] = i(u[b], h - 1);
                  } catch (t) {
                    if (t instanceof TypeError) continue;
                    if (t instanceof ReferenceError) continue;
                  }
                }
                if (Object.getOwnPropertySymbols) {
                  var _ = Object.getOwnPropertySymbols(u);
                  for (b = 0; b < _.length; b++) {
                    var w = _[b];
                    (!(S = Object.getOwnPropertyDescriptor(u, w)) ||
                      S.enumerable ||
                      f) &&
                      ((g[w] = i(u[w], h - 1)), Object.defineProperty(g, w, S));
                  }
                }
                if (f) {
                  var O = Object.getOwnPropertyNames(u);
                  for (b = 0; b < O.length; b++) {
                    var S,
                      D = O[b];
                    ((S = Object.getOwnPropertyDescriptor(u, D)) &&
                      S.enumerable) ||
                      ((g[D] = i(u[D], h - 1)), Object.defineProperty(g, D, S));
                  }
                }
                return g;
              })(i, u)
            );
          }
          function i(t) {
            return Object.prototype.toString.call(t);
          }
          function c(t) {
            var e = "";
            return (
              t.global && (e += "g"),
              t.ignoreCase && (e += "i"),
              t.multiline && (e += "m"),
              e
            );
          }
          return (
            (o.clonePrototype = function (t) {
              if (null === t) return null;
              var e = function () {};
              return (e.prototype = t), new e();
            }),
            (o.__objToStr = i),
            (o.__isDate = function (t) {
              return "object" === r(t) && "[object Date]" === i(t);
            }),
            (o.__isArray = function (t) {
              return "object" === r(t) && "[object Array]" === i(t);
            }),
            (o.__isRegExp = function (t) {
              return "object" === r(t) && "[object RegExp]" === i(t);
            }),
            (o.__getRegExpFlags = c),
            o
          );
        })();
        "object" === r(t) && t.exports && (t.exports = a);
      },
      20374: (t, e, n) => {
        "use strict";
        n.r(e),
          n.d(e, {
            Localize: () => k,
            changeLanguage: () => I,
            getAllLanguages: () => j,
            getLanguage: () => C,
            initializeTranslations: () => E,
            localize: () => M,
            useOnLoadTranslation: () => U,
          });
        var r = n(32735),
          a = n(36233),
          o = n(94645),
          i = n(77811),
          c = n(60216),
          s = n.n(c),
          u = n(62335);
        function l() {
          return (l =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
        }
        var f = function (t) {
          var e = t.i18n_default_text,
            n = t.values,
            a = t.components,
            o = t.options,
            i = t.i18n;
          return r.createElement(u.c, {
            i18n: i,
            defaults: e,
            values: n,
            components: a,
            tOptions: o,
          });
        };
        f.propTypes = {
          components: s().arrayOf(s().node),
          i18n: s().object.isRequired,
          i18n_default_text: s().string,
          values: s().object,
        };
        const d = function (t) {
          return function (e) {
            return r.createElement(f, l({ i18n: t }, e));
          };
        };
        function p(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              if (
                "undefined" == typeof Symbol ||
                !(Symbol.iterator in Object(t))
              )
                return;
              var n = [],
                r = !0,
                a = !1,
                o = void 0;
              try {
                for (
                  var i, c = t[Symbol.iterator]();
                  !(r = (i = c.next()).done) &&
                  (n.push(i.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (a = !0), (o = t);
              } finally {
                try {
                  r || null == c.return || c.return();
                } finally {
                  if (a) throw o;
                }
              }
              return n;
            })(t, e) ||
            (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return m(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return m(t, e);
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function m(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function h(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function g(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function y(t, e, n, r, a, o, i) {
          try {
            var c = t[o](i),
              s = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(s) : Promise.resolve(s).then(r, a);
        }
        function v(t) {
          return function () {
            var e = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = t.apply(e, n);
              function i(t) {
                y(o, r, a, i, c, "next", t);
              }
              function c(t) {
                y(o, r, a, i, c, "throw", t);
              }
              i(void 0);
            });
          };
        }
        var b = "i18n_language",
          _ = Object.freeze({
            ACH: "Translations",
            EN: "English",
            ES: "Espa??ol",
            FR: "Fran??ais",
            ID: "Indonesia",
            IT: "Italiano",
            PL: "Polish",
            PT: "Portugu??s",
            RU: "??????????????",
            VI: "Ti???ng Vi???t",
            ZH_CN: "????????????",
            ZH_TW: "????????????",
          }),
          w = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              e = window.location;
            return /^\/(br_)/.test(e.pathname)
              ? "/"
                  .concat(e.pathname.split("/")[1])
                  .concat(/^\//.test(t) ? t : "/".concat(t))
              : t;
          },
          O = function () {
            return /staging-app\.deriv\.com/i.test(window.location.hostname);
          },
          S = function () {
            return /localhost\.binary\.sx/i.test(window.location.hostname);
          },
          D = function (t) {
            if (!t) return !1;
            var e = t.toUpperCase();
            return "ACH" === e ? O() || S() : Object.keys(_).includes(e);
          },
          j = function () {
            return _;
          },
          x = function () {
            var t = new URLSearchParams(window.location.search).get("lang"),
              e = localStorage.getItem(b);
            if (t) {
              var n = t.toUpperCase();
              if (D(n)) return localStorage.setItem(b, n), n;
            }
            return e && D(e) ? e : "EN";
          },
          T = (function () {
            var t = v(
              regeneratorRuntime.mark(function t(e) {
                var n, r;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          o.Z.hasResourceBundle(e, "translations") ||
                          "EN" === e.toUpperCase()
                        ) {
                          t.next = 9;
                          break;
                        }
                        return (
                          (t.next = 3),
                          fetch(
                            w("/public/i18n/".concat(e.toLowerCase(), ".json"))
                          )
                        );
                      case 3:
                        return (n = t.sent), (t.next = 6), n.text();
                      case 6:
                        (r = t.sent),
                          o.Z.addResourceBundle(
                            e,
                            "translations",
                            JSON.parse(r)
                          ),
                          document.documentElement.setAttribute("lang", e);
                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          P = x(),
          A = {
            react: {
              hashTransKey: function (t) {
                return (0, a.str)(t);
              },
            },
            lng: P,
            fallbackLng: "EN",
            ns: ["translations"],
            defaultNS: "translations",
          };
        o.Z.use(i.Db).init(A);
        var E = (function () {
            var t = v(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (O() || S()) && R(), (t.next = 3), T(P);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          C = function () {
            return o.Z.language || P;
          },
          I = (function () {
            var t = v(
              regeneratorRuntime.mark(function t(e, n) {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!D(e)) {
                          t.next = 4;
                          break;
                        }
                        return (t.next = 3), T(e);
                      case 3:
                        o.Z.changeLanguage(e, function () {
                          localStorage.setItem(b, e), n(e);
                        });
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })(),
          k = d(o.Z),
          M = function (t, e) {
            return t
              ? o.Z.t(
                  (0, a.str)(t),
                  (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? h(Object(n), !0).forEach(function (e) {
                            g(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : h(Object(n)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                            );
                          });
                    }
                    return t;
                  })({ defaultValue: t }, e)
                )
              : "";
          },
          R = function () {
            if ("ACH" === C().toUpperCase()) {
              var t = document.createElement("script");
              (t.type = "text/javascript"),
                (t.text =
                  "\n            var _jipt = []; _jipt.push(['project', 'deriv-app']);\n            var crowdin = document.createElement(\"script\");\n            crowdin.setAttribute('src', '//cdn.crowdin.com/jipt/jipt.js');\n            document.head.appendChild(crowdin);\n        "),
                document.head.appendChild(t);
            }
          },
          U = function () {
            var t = p(r.useState(!1), 2),
              e = t[0],
              n = t[1];
            return (
              r.useEffect(function () {
                return (
                  o.Z.language || (o.Z.language = x()),
                  "EN" === o.Z.language
                    ? n(!0)
                    : o.Z.store.on("added", function () {
                        n(!0);
                      }),
                  function () {
                    return o.Z.store.off("added");
                  }
                );
              }, []),
              [e, n]
            );
          };
      },
    },
    c = {};
  function s(t) {
    if (c[t]) return c[t].exports;
    var e = (c[t] = { id: t, loaded: !1, exports: {} });
    return i[t].call(e.exports, e, e.exports, s), (e.loaded = !0), e.exports;
  }
  (s.m = i),
    (s.x = (t) => {}),
    (s.F = {}),
    (s.E = (t) => {
      Object.keys(s.F).map((e) => {
        s.F[e](t);
      });
    }),
    (s.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return s.d(e, { a: e }), e;
    }),
    (e = Object.getPrototypeOf
      ? (t) => Object.getPrototypeOf(t)
      : (t) => t.__proto__),
    (s.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var a = Object.create(null);
      s.r(a);
      var o = {};
      t = t || [null, e({}), e([]), e(e)];
      for (var i = 2 & r && n; "object" == typeof i && !~t.indexOf(i); i = e(i))
        Object.getOwnPropertyNames(i).forEach((t) => (o[t] = () => n[t]));
      return (o.default = () => n), s.d(a, o), a;
    }),
    (s.d = (t, e) => {
      for (var n in e)
        s.o(e, n) &&
          !s.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (s.f = {}),
    (s.e = (t) =>
      Promise.all(Object.keys(s.f).reduce((e, n) => (s.f[n](t, e), e), []))),
    (s.u = (t) =>
      "js/core." +
      ({
        0: "reality-check-modal",
        30: "welcome-modal",
        172: "bot",
        245: "trader~32aceb85",
        249: "settings-language",
        264: "settings-theme",
        301: "account-signup-modal",
        424: "account-types-modal",
        447: "trader~e46fc02a",
        521: "account-info",
        530: "set-residence-modal",
        708: "reset-or-unlink-password-modal",
        809: "account",
        856: "cashier",
        864: "reset-trading-password-modal",
        871: "reset-password-modal",
        880: "complaints-policy",
        930: "trader~886d9876",
        966: "dashboard",
      }[t] || t) +
      "." +
      {
        0: "90c5a262ff72bcf47df6",
        30: "28f0636d81c846074f42",
        172: "aa96d0f1344d6aeaebbc",
        190: "9de90a6bd75101e5cfcb",
        245: "a2ff7f6346e335949031",
        249: "59a0d028c4121263ef9b",
        264: "ceed15d55b456422238b",
        301: "5b294673c93df3681f1c",
        400: "c8268847295020872a65",
        424: "926d0407e4f76ad2b7c2",
        447: "fd155793fc3c30626d06",
        521: "cc418aff4387aa58ea7b",
        530: "274223e19a74b00cf728",
        605: "454a6ff6c05a41f31566",
        708: "f70fb2ace967544e04c7",
        809: "9a0f45844e374491bb34",
        856: "1915e72d55f55e153b50",
        864: "3e36cc53b197ed1b245b",
        871: "c367829065464d01a247",
        880: "a2e690bb96ea72c1f715",
        930: "9c8e321599bce36c87e9",
        966: "3f6e40a6d2e1c6adfc80",
      }[t] +
      ".js"),
    (s.miniCssF = (t) =>
      982 === t
        ? "css/coremain~85fa0c87.main.css"
        : 222 === t
        ? "css/coremain~a97549ed.main.css"
        : 542 === t
        ? "css/coremain~703a1da7.main.css"
        : 371 === t
        ? "css/coremain~9a8b795a.main.css"
        : "css/core." +
          {
            301: "account-signup-modal",
            424: "account-types-modal",
            530: "set-residence-modal",
            880: "complaints-policy",
          }[t] +
          "." +
          {
            301: "3ad7780a41f942db09b1",
            424: "9fb5789d54f10cb4b6e7",
            530: "8e89934bfa926e22a7cc",
            880: "534593bc10f7858d0094",
          }[t] +
          ".css"),
    (s.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n = {}),
    (s.l = (t, e, r, a) => {
      if (n[t]) n[t].push(e);
      else {
        var o, i;
        if (void 0 !== r)
          for (
            var c = document.getElementsByTagName("script"), u = 0;
            u < c.length;
            u++
          ) {
            var l = c[u];
            if (l.getAttribute("src") == t) {
              o = l;
              break;
            }
          }
        o ||
          ((i = !0),
          ((o = document.createElement("script")).charset = "utf-8"),
          (o.timeout = 120),
          s.nc && o.setAttribute("nonce", s.nc),
          (o.src = t)),
          (n[t] = [e]);
        var f = (e, r) => {
            (o.onerror = o.onload = null), clearTimeout(d);
            var a = n[t];
            if (
              (delete n[t],
              o.parentNode && o.parentNode.removeChild(o),
              a && a.forEach((t) => t(r)),
              e)
            )
              return e(r);
          },
          d = setTimeout(
            f.bind(null, void 0, { type: "timeout", target: o }),
            12e4
          );
        (o.onerror = f.bind(null, o.onerror)),
          (o.onload = f.bind(null, o.onload)),
          i && document.head.appendChild(o);
      }
    }),
    (s.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (s.p = "/"),
    (r = (t) =>
      new Promise((e, n) => {
        var r = s.miniCssF(t),
          a = s.p + r;
        if (
          ((t, e) => {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var a =
                (i = n[r]).getAttribute("data-href") || i.getAttribute("href");
              if ("stylesheet" === i.rel && (a === t || a === e)) return i;
            }
            var o = document.getElementsByTagName("style");
            for (r = 0; r < o.length; r++) {
              var i;
              if ((a = (i = o[r]).getAttribute("data-href")) === t || a === e)
                return i;
            }
          })(r, a)
        )
          return e();
        ((t, e, n, r) => {
          var a = document.createElement("link");
          (a.rel = "stylesheet"),
            (a.type = "text/css"),
            (a.onerror = a.onload =
              (o) => {
                if (((a.onerror = a.onload = null), "load" === o.type)) n();
                else {
                  var i = o && ("load" === o.type ? "missing" : o.type),
                    c = (o && o.target && o.target.href) || e,
                    s = new Error(
                      "Loading CSS chunk " + t + " failed.\n(" + c + ")"
                    );
                  (s.code = "CSS_CHUNK_LOAD_FAILED"),
                    (s.type = i),
                    (s.request = c),
                    a.parentNode.removeChild(a),
                    r(s);
                }
              }),
            (a.href = e),
            document.head.appendChild(a);
        })(t, a, e, n);
      })),
    (a = { 494: 0 }),
    (s.f.miniCss = (t, e) => {
      a[t]
        ? e.push(a[t])
        : 0 !== a[t] &&
          { 301: 1, 424: 1, 530: 1, 880: 1 }[t] &&
          e.push(
            (a[t] = r(t).then(
              () => {
                a[t] = 0;
              },
              (e) => {
                throw (delete a[t], e);
              }
            ))
          );
    }),
    (() => {
      var t = { 494: 0 },
        e = [
          [
            80259, 759, 268, 23, 935, 612, 554, 755, 806, 360, 532, 991, 598,
            733, 374, 828, 982, 215, 433, 745, 90, 287, 222, 542, 371,
          ],
        ];
      (s.f.j = (e, n) => {
        var r = s.o(t, e) ? t[e] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var a = new Promise((n, a) => {
              r = t[e] = [n, a];
            });
            n.push((r[2] = a));
            var o = s.p + s.u(e),
              i = new Error();
            s.l(
              o,
              (n) => {
                if (s.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0), r)) {
                  var a = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (i.message =
                    "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = a),
                    (i.request = o),
                    r[1](i);
                }
              },
              "chunk-" + e,
              e
            );
          }
      }),
        (s.F.j = (e) => {
          if (!s.o(t, e) || void 0 === t[e]) {
            t[e] = null;
            var n = document.createElement("link");
            s.nc && n.setAttribute("nonce", s.nc),
              (n.rel = "prefetch"),
              (n.as = "script"),
              (n.href = s.p + s.u(e)),
              document.head.appendChild(n);
          }
        });
      var n = (t) => {},
        r = (r, a) => {
          for (var o, i, [c, u, l, f] = a, d = 0, p = []; d < c.length; d++)
            (i = c[d]), s.o(t, i) && t[i] && p.push(t[i][0]), (t[i] = 0);
          for (o in u) s.o(u, o) && (s.m[o] = u[o]);
          for (l && l(s), r && r(a); p.length; ) p.shift()();
          return f && e.push.apply(e, f), n();
        },
        a = (self.webpackChunk = self.webpackChunk || []);
      function o() {
        for (var n, r = 0; r < e.length; r++) {
          for (var a = e[r], o = !0, i = 1; i < a.length; i++) {
            var c = a[i];
            0 !== t[c] && (o = !1);
          }
          o && (e.splice(r--, 1), (n = s((s.s = a[0]))));
        }
        return 0 === e.length && (s.x(), (s.x = (t) => {})), n;
      }
      a.forEach(r.bind(null, 0)), (a.push = r.bind(null, a.push.bind(a)));
      var i = s.x;
      s.x = () => ((s.x = i || ((t) => {})), (n = o)());
    })(),
    (o = s.x),
    (s.x = () => {
      var t = o();
      return s.E(249), s.E(264), t;
    });
  s.x();
})();
