(self.webpackChunk = self.webpackChunk || []).push([
  [287],
  {
    40041: (n, e, t) => {
      "use strict";
      t.d(e, { D0: () => s, XX: () => a, $v: () => u });
      var r = t(3968),
        o = t(57573),
        i = t(20374),
        c = t(16789),
        a = (0, i.getLanguage)(),
        u = function () {
          var n = ["ACH"],
            e = Object.keys((0, i.getAllLanguages)())
              .filter(function (e) {
                return !n.includes(e);
              })
              .reduce(function (n, e) {
                return (n[e] = (0, i.getAllLanguages)()[e]), n;
              }, {});
          return (
            (0, o.isProduction)() &&
              (e = {
                EN: "English",
                ID: "Indonesia",
                PT: "Português",
                ES: "Español",
              }),
            e
          );
        },
        s = function (n) {
          var e = { set_settings: 1, preferred_language: n };
          c.clear(),
            "EN" === n && window.localStorage.setItem("i18n_language", n),
            r.Z.setSettings(e).then(function () {
              var e;
              window.location.replace(((e = n), (0, o.urlForLanguage)(e)));
            });
        };
    },
    58147: (n, e, t) => {
      "use strict";
      t.d(e, { Z: () => s });
      var r = t(57573),
        o = t(86104);
      function i(n, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      const c = (function () {
        function n() {
          !(function (n, e) {
            if (!(n instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (this.errors = {});
        }
        var e, t, r;
        return (
          (e = n),
          (t = [
            {
              key: "add",
              value: function (n, e) {
                this.has(n) || (this.errors[n] = []),
                  -1 === this.errors[n].indexOf(e) && this.errors[n].push(e);
              },
            },
            {
              key: "all",
              value: function () {
                return this.errors;
              },
            },
            {
              key: "first",
              value: function (n) {
                return this.has(n) ? this.errors[n][0] : null;
              },
            },
            {
              key: "get",
              value: function (n) {
                return this.has(n) ? this.errors[n] : [];
              },
            },
            {
              key: "has",
              value: function (n) {
                return Object.prototype.hasOwnProperty.call(this.errors, n);
              },
            },
          ]) && i(e.prototype, t),
          r && i(e, r),
          n
        );
      })();
      function a(n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(n, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      const s = (function () {
        function n(e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          a(this, n),
            (this.input = e),
            (this.rules = t),
            (this.store = r),
            (this.errors = new c()),
            (this.error_count = 0);
        }
        var e, t, i;
        return (
          (e = n),
          (i = [
            {
              key: "getRuleObject",
              value: function (n) {
                var e = "string" == typeof n,
                  t = { name: e ? n : n[0], options: e ? {} : n[1] || {} };
                return (
                  (t.validator =
                    "custom" === t.name
                      ? n[1].func
                      : (0, r.getPreBuildDVRs)()[t.name].func),
                  t
                );
              },
            },
          ]),
          (t = [
            {
              key: "addFailure",
              value: function (n, e) {
                var t =
                  e.options.message ||
                  (0, r.getPreBuildDVRs)()[e.name].message();
                "length" === e.name
                  ? (t = (0, o.template)(t, [
                      e.options.min === e.options.max
                        ? e.options.min
                        : "".concat(e.options.min, "-").concat(e.options.max),
                    ]))
                  : "min" === e.name
                  ? (t = (0, o.template)(t, [e.options.min]))
                  : "not_equal" === e.name &&
                    (t = (0, o.template)(t, [
                      e.options.name1,
                      e.options.name2,
                    ])),
                  this.errors.add(n, t),
                  this.error_count++;
              },
            },
            {
              key: "check",
              value: function () {
                var e = this;
                return (
                  Object.keys(this.input).forEach(function (t) {
                    Object.prototype.hasOwnProperty.call(e.rules, t) &&
                      e.rules[t].forEach(function (r) {
                        var o = n.getRuleObject(r);
                        (o.validator || "function" == typeof o.validator) &&
                          ((o.options.condition &&
                            !o.options.condition(e.store)) ||
                            ("" === e.input[t] && "req" !== o.name) ||
                            o.validator(
                              e.input[t],
                              o.options,
                              e.store,
                              e.input
                            ) ||
                            e.addFailure(t, o));
                      });
                  }),
                  !this.error_count
                );
              },
            },
            {
              key: "isPassed",
              value: function () {
                return this.check();
              },
            },
          ]) && u(e.prototype, t),
          i && u(e, i),
          n
        );
      })();
    },
    52397: (n, e, t) => {
      "use strict";
      t.d(e, { Z: () => a });
      var r,
        o = t(57573),
        i = 36e5;
      function c() {
        return function (n) {
          n.onupdatefound = function () {
            var e = n.installing;
            e.onstatechange = function () {
              "installed" === e.state &&
                navigator.serviceWorker.controller &&
                (console.log("New version is found, refreshing the page..."),
                clearInterval(r));
            };
          };
        };
      }
      function a() {
        "serviceWorker" in navigator &&
          window.addEventListener("load", function () {
            var n = ""
              .concat(window.location.origin)
              .concat((0, o.getUrlBase)("/service-worker.js"));
            navigator.serviceWorker
              .register(n)
              .then(function (n) {
                (r = setInterval(function () {
                  n.update().then(c);
                }, i)),
                  (n.onupdatefound = function () {
                    var e = n.installing;
                    e.onstatechange = function () {
                      if (
                        "installed" === e.state &&
                        navigator.serviceWorker.controller &&
                        performance.now() > i
                      ) {
                        var n = new Event("UpdateAvailable");
                        document.dispatchEvent(n);
                      }
                    };
                  });
              })
              .catch(function (n) {
                console.error("Error during service worker registration:", n);
              });
          });
      }
    },
    50146: (n) => {
      function e(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function t(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function r(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(n)))
              return;
            var t = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var c, a = n[Symbol.iterator]();
                !(r = (c = a.next()).done) &&
                (t.push(c.value), !e || t.length !== e);
                r = !0
              );
            } catch (n) {
              (o = !0), (i = n);
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (o) throw i;
              }
            }
            return t;
          })(n, e) ||
          (function (n, e) {
            if (!n) return;
            if ("string" == typeof n) return o(n, e);
            var t = Object.prototype.toString.call(n).slice(8, -1);
            "Object" === t && n.constructor && (t = n.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(n);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return o(n, e);
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function o(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function i(n, e) {
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      var c = (function () {
        function n(e) {
          !(function (n, e) {
            if (!(n instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (this.config = e),
            (this.debounced_calls = {});
        }
        var e, t, o;
        return (
          (e = n),
          (t = [
            {
              key: "sendWillBeCalled",
              value: function (n) {
                var e = r(n.args, 1)[0];
                this.config.wsEvent("send");
                var t = a(e);
                if (t in this.debounced_calls) return this.debounced_calls[t];
              },
            },
            {
              key: "sendIsCalled",
              value: function (n) {
                var e = this,
                  t = n.response_promise,
                  o = r(n.args, 2),
                  i = o[0],
                  c = o[1],
                  u = void 0 === c ? {} : c,
                  s = (function (n) {
                    return new Promise(function (e) {
                      n.then(e, e);
                    });
                  })(t),
                  l = a(i);
                return (
                  u.callback && s.then(u.callback),
                  (this.debounced_calls[l] = s),
                  s.then(function () {
                    delete e.debounced_calls[l];
                  }),
                  s
                );
              },
            },
          ]) && i(e.prototype, t),
          o && i(e, o),
          n
        );
      })();
      function a(n) {
        var r = (function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var o = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? e(Object(o), !0).forEach(function (e) {
                  t(n, e, o[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
              : e(Object(o)).forEach(function (e) {
                  Object.defineProperty(
                    n,
                    e,
                    Object.getOwnPropertyDescriptor(o, e)
                  );
                });
          }
          return n;
        })({}, n);
        return (
          delete r.passthrough,
          delete r.req_id,
          delete r.subscribe,
          JSON.stringify(r)
        );
      }
      n.exports = c;
    },
    35313: (n, e, t) => {
      function r(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function o(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var i = t(20374).localize,
        c = t(31508),
        a = (function () {
          var n,
            e = {
              online: { class: "online", tooltip: i("Online") },
              offline: { class: "offline", tooltip: i("Offline") },
              blinking: {
                class: "blinker",
                tooltip: i("Connecting to server"),
              },
            },
            t = function () {
              return navigator.onLine;
            },
            a = null;
          function u(n) {
            var e = n.timeout;
            clearTimeout(a),
              (a = setTimeout(function () {
                (a = null),
                  t() && c.hasReadyState(2, 3)
                    ? c.openNewConnection()
                    : c.send({ ping: 1 });
              }, e));
          }
          var s = {
              init: function () {
                return n(t() ? "blinking" : "offline");
              },
              open: function () {
                return n(t() ? "online" : "offline");
              },
              send: function () {},
              message: function () {
                return n("online");
              },
              close: function () {
                n(t() ? "blinking" : "offline"), u({ timeout: 5e3 });
              },
            },
            l = function (n) {
              s[n] && s[n]();
            };
          return {
            init: function (i, a, s) {
              var f, p;
              if (
                ((n = function (n) {
                  var r = t();
                  (n === f && r === p) || ((f = n), (p = r), a(e[n], r));
                }),
                "onLine" in navigator
                  ? (window.addEventListener("online", function () {
                      n("blinking"), u({ timeout: 500 });
                    }),
                    window.addEventListener("offline", function () {
                      c.close(), n("offline");
                    }))
                  : (navigator.onLine = !0),
                t())
              ) {
                var d = (function (n) {
                  for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? r(Object(t), !0).forEach(function (e) {
                          o(n, e, t[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          n,
                          Object.getOwnPropertyDescriptors(t)
                        )
                      : r(Object(t)).forEach(function (e) {
                          Object.defineProperty(
                            n,
                            e,
                            Object.getOwnPropertyDescriptor(t, e)
                          );
                        });
                  }
                  return n;
                })({ wsEvent: l, isOnline: t }, i);
                c.init({ options: d, client: s }), c.openNewConnection();
              }
              n(t() ? "blinking" : "offline");
            },
            wsEvent: l,
          };
        })();
      n.exports = a;
    },
    81250: (n, e, t) => {
      var r,
        o,
        i,
        c,
        a,
        u,
        s,
        l,
        f,
        p,
        d = t(53806),
        y = t(31508),
        b = t(86104).PromiseClass,
        v =
          ((u = !1),
          (s = new b()),
          (l = function (n) {
            u ||
              ((a = n),
              f(),
              clearInterval(i),
              (i = setInterval(f, 3e4)),
              (u = !0));
          }),
          (f = function () {
            (o = performance.now()), y.send({ time: 1 }).then(p);
          }),
          (p = function (n) {
            if (!n.error)
              if (u) {
                clearInterval(c);
                var e = n.time,
                  t = performance.now(),
                  i = 1e3 * e + (t - o),
                  f = function () {
                    var n = performance.now() - t;
                    (r = d(i + n).utc()), "function" == typeof a && a();
                  };
                f(), s.resolve(), (c = setInterval(f, 1e3));
              } else l();
          }),
          {
            init: l,
            get: function () {
              return r ? r.clone() : void 0;
            },
            timePromise: s.promise,
          });
      n.exports = v;
    },
    31508: (n, e, t) => {
      function r(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function o(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? r(Object(t), !0).forEach(function (e) {
                i(n, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
            : r(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  n,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return n;
      }
      function i(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function c(n) {
        return (
          (function (n) {
            if (Array.isArray(n)) return a(n);
          })(n) ||
          (function (n) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(n))
              return Array.from(n);
          })(n) ||
          (function (n, e) {
            if (!n) return;
            if ("string" == typeof n) return a(n, e);
            var t = Object.prototype.toString.call(n).slice(8, -1);
            "Object" === t && n.constructor && (t = n.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(n);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return a(n, e);
          })(n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function a(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function u(n) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (n) {
                return typeof n;
              }
            : function (n) {
                return n &&
                  "function" == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? "symbol"
                  : typeof n;
              })(n);
      }
      var s,
        l,
        f,
        p,
        d,
        y,
        b,
        v,
        g,
        m,
        h,
        _,
        w,
        O,
        j,
        P,
        k,
        S = t(68996),
        A = t(57573).getAppId,
        E = t(57573).getSocketURL,
        C = t(57573).cloneObject,
        x = t(57573).getPropertyValue,
        D = t(57573).State,
        I = t(20374).getLanguage,
        R = t(57573).website_name,
        T = t(16789),
        L = t(50146),
        B =
          ((p = {}),
          (d = 0),
          (y = !1),
          (b = !1),
          (v = !1),
          (m = function () {
            l.close();
          }),
          (j = function (n) {
            return !("authorize" === n && !f.is_logged_in);
          }),
          (k = function (n, e) {
            return s.subscribe(n).subscribe(e, e);
          }),
          {
            init: function (n) {
              var e = n.options,
                t = n.client;
              "object" === u(e) && p !== e && (p = e), (f = t);
            },
            openNewConnection: (_ = function () {
              d !== A() &&
                (v || p.wsEvent("init"),
                (l && !h(2, 3)) ||
                  ((y = !1),
                  (l = new WebSocket(
                    "wss://"
                      .concat(E(), "/websockets/v3?app_id=")
                      .concat(A(), "&l=")
                      .concat(I(), "&brand=")
                      .concat(R.toLowerCase())
                  )),
                  (s = new S({
                    connection: l,
                    storage: T,
                    middleware: new L(p),
                  }))),
                s.onOpen().subscribe(function () {
                  if (
                    (p.wsEvent("open"), P("website_status"), f.is_logged_in)
                  ) {
                    var n = f.getToken();
                    s.authorize(n);
                  }
                  "function" == typeof p.onOpen && p.onOpen(h(1)),
                    "function" == typeof p.onReconnect && b && p.onReconnect(),
                    b || (b = !0);
                }),
                s.onMessage().subscribe(function (n) {
                  var e = n.data,
                    t = e.msg_type;
                  D.set(["response", t], C(e)),
                    p.wsEvent("message"),
                    "InvalidAppID" === x(e, ["error", "code"]) && (d = A()),
                    "function" == typeof p.onMessage && p.onMessage(e);
                }),
                s.onClose().subscribe(function () {
                  v ? (v = !1) : p.wsEvent("close"),
                    d === A() ||
                      "function" != typeof p.onDisconnect ||
                      y ||
                      (p.onDisconnect(), (y = !0));
                }));
            }),
            forgetStream: function (n) {
              return s.forget(n);
            },
            wait: (P = function () {
              for (
                var n, e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              return (n = s).expectResponse.apply(n, c(t.filter(j)));
            }),
            availability: (g = { is_up: !0, is_updating: !1, is_down: !1 }),
            hasReadyState: (h = function () {
              for (
                var n = arguments.length, e = new Array(n), t = 0;
                t < n;
                t++
              )
                e[t] = arguments[t];
              return (
                l &&
                e.some(function (n) {
                  return l.readyState === n;
                })
              );
            }),
            isSiteDown: (O = function (n) {
              return /^down$/i.test(n);
            }),
            isSiteUpdating: (w = function (n) {
              return /^updating$/i.test(n);
            }),
            clear: function () {},
            sendBuffered: function () {},
            getSocket: function () {
              return l;
            },
            get: function () {
              return s;
            },
            getAvailability: function () {
              return g;
            },
            setOnDisconnect: function (n) {
              p.onDisconnect = n;
            },
            setOnReconnect: function (n) {
              p.onReconnect = n;
            },
            removeOnReconnect: function () {
              delete p.onReconnect;
            },
            removeOnDisconnect: function () {
              delete p.onDisconnect;
            },
            cache: M({}, function () {
              return s.cache;
            }),
            storage: M({}, function () {
              return s.storage;
            }),
            buy: function (n) {
              var e = n.proposal_id,
                t = n.price;
              return s.send({ buy: e, price: t });
            },
            buyAndSubscribe: function (n) {
              return new Promise(function (e) {
                var t = !1,
                  r = k(n, function (n) {
                    t || ((t = !0), r.unsubscribe(), e(n));
                  });
              });
            },
            sell: function (n, e) {
              return s.send({ sell: n, price: e });
            },
            cashier: function (n) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return s.send(o({ cashier: n }, e));
            },
            cancelContract: function (n) {
              return s.send({ cancel: n });
            },
            close: m,
            contractUpdate: function (n, e) {
              return s.send({
                contract_update: 1,
                contract_id: n,
                limit_order: e,
              });
            },
            contractUpdateHistory: function (n) {
              return s.send({ contract_update_history: 1, contract_id: n });
            },
            getFinancialAssessment: function () {
              return s.send({ get_financial_assessment: 1 });
            },
            mt5NewAccount: function (n) {
              return s.send(o({ mt5_new_account: 1 }, n));
            },
            newAccountVirtual: function (n, e, t, r, i) {
              return s.send(
                o(
                  {
                    new_account_virtual: 1,
                    verification_code: n,
                    client_password: e,
                    residence: t,
                    email_consent: r,
                  },
                  i
                )
              );
            },
            newAccountReal: function (n) {
              return s.send(o({ new_account_real: 1 }, n));
            },
            newAccountRealMaltaInvest: function (n) {
              return s.send(o({ new_account_maltainvest: 1 }, n));
            },
            p2pAdvertiserInfo: function () {
              return s.send({ p2p_advertiser_info: 1 });
            },
            p2pSubscribe: function (n, e) {
              return k(n, e);
            },
            profitTable: function (n, e, t) {
              return s.send(
                o({ profit_table: 1, description: 1, limit: n, offset: e }, t)
              );
            },
            statement: function (n, e, t) {
              return s.send(
                o({ statement: 1, description: 1, limit: n, offset: e }, t)
              );
            },
            verifyEmail: function (n, e) {
              return s.send({ verify_email: n, type: e });
            },
            tradingPlatformPasswordChange: function (n) {
              return s.send(o({ trading_platform_password_change: 1 }, n));
            },
            tradingPlatformPasswordReset: function (n) {
              return s.send(o({ trading_platform_password_reset: 1 }, n));
            },
            tradingPlatformInvestorPasswordChange: function (n) {
              return s.send(
                o({ trading_platform_investor_password_change: 1 }, n)
              );
            },
            tradingPlatformInvestorPasswordReset: function (n) {
              return s.send(
                o({ trading_platform_investor_password_reset: 1 }, n)
              );
            },
            activeSymbols: function () {
              var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "brief";
              return s.activeSymbols(n);
            },
            paymentAgentList: function (n, e) {
              return s.send(o({ paymentagent_list: n }, e && { currency: e }));
            },
            paymentAgentWithdraw: function (n) {
              var e = n.loginid,
                t = n.currency,
                r = n.amount,
                o = n.verification_code,
                i = n.dry_run,
                c = void 0 === i ? 0 : i;
              return s.send({
                amount: r,
                currency: t,
                verification_code: o,
                paymentagent_withdraw: 1,
                dry_run: c,
                paymentagent_loginid: e,
              });
            },
            paymentAgentTransfer: function (n) {
              var e = n.amount,
                t = n.currency,
                r = n.description,
                o = n.transfer_to,
                i = n.dry_run,
                c = void 0 === i ? 0 : i;
              return s.send({
                amount: e,
                currency: t,
                description: r,
                transfer_to: o,
                paymentagent_transfer: 1,
                dry_run: c,
              });
            },
            setAccountCurrency: function (n, e) {
              return s.send(
                o({ set_account_currency: n }, e && { passthrough: e })
              );
            },
            balanceAll: function () {
              return s.send({ balance: 1, account: "all" });
            },
            setAvailability: function (n) {
              (g.is_up = (function (n) {
                return /^up$/i.test(n);
              })(n)),
                (g.is_updating = w(n)),
                (g.is_down = O(n));
            },
            subscribeBalanceAll: function (n) {
              return k({ balance: 1, account: "all" }, n);
            },
            subscribeBalanceActiveAccount: function (n, e) {
              return k({ balance: 1, account: e }, n);
            },
            subscribeProposal: function (n, e) {
              return k(o({ proposal: 1 }, n), e);
            },
            subscribeProposalOpenContract: function () {
              var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                e = arguments.length > 1 ? arguments[1] : void 0;
              return k(
                o({ proposal_open_contract: 1 }, n && { contract_id: n }),
                e
              );
            },
            subscribeTicks: function (n, e) {
              return k({ ticks: n }, e);
            },
            subscribeTicksHistory: function (n, e) {
              return k(n, e);
            },
            subscribeTransaction: function (n) {
              return k({ transaction: 1 }, n);
            },
            subscribeWebsiteStatus: function (n) {
              return k({ website_status: 1 }, n);
            },
            tncApproval: function () {
              return s.send({ tnc_approval: "1" });
            },
            transferBetweenAccounts: function (n, e, t, r) {
              return s.send(
                o(
                  { transfer_between_accounts: 1, accounts: "all" },
                  n && {
                    account_from: n,
                    account_to: e,
                    currency: t,
                    amount: r,
                  }
                )
              );
            },
            fetchLoginHistory: function (n) {
              return s.send({ login_history: 1, limit: n });
            },
            closeAndOpenNewConnection: function () {
              m(), (v = !0), _();
            },
            accountStatistics: function () {
              return s.send({ account_statistics: 1 });
            },
            realityCheck: function () {
              return s.send({ reality_check: 1 });
            },
            tradingServers: function () {
              return s.send({ platform: "mt5", trading_servers: 1 });
            },
            tradingPlatformAccountsList: function (n) {
              return s.send({ trading_platform_accounts: 1, platform: n });
            },
            tradingPlatformNewAccount: function (n) {
              return s.send(o({ trading_platform_new_account: 1 }, n));
            },
            triggerMt5DryRun: function (n) {
              var e = n.email;
              return s.send({
                account_type: "financial",
                dry_run: 1,
                email: e,
                leverage: 100,
                mainPassword: "Test1234",
                mt5_account_type: "financial_stp",
                mt5_new_account: 1,
                name: "test real labuan financial stp",
              });
            },
          });
      function M(n, e) {
        return new Proxy(n, {
          get: function (n, t) {
            if (n[t]) return n[t];
            var r = "function" == typeof e ? e() : e;
            if (r) {
              var o = r[t];
              return o ? ("function" == typeof o ? o.bind(r) : o) : void 0;
            }
          },
        });
      }
      var N = M(B, function () {
        return B.get();
      });
      (B.authorized = (function n(e) {
        return new Proxy(e, {
          get: function (e, t) {
            return "function" != typeof e[t]
              ? n(e[t], N[t])
              : function () {
                  for (
                    var n = arguments.length, r = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o];
                  return B.wait("authorize").then(function () {
                    return e[t].apply(e, r);
                  });
                };
          },
        });
      })(N)),
        (n.exports = N);
    },
    16789: (n, e, t) => {
      function r(n) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (n) {
                return typeof n;
              }
            : function (n) {
                return n &&
                  "function" == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? "symbol"
                  : typeof n;
              })(n);
      }
      var o,
        i,
        c,
        a,
        u,
        s,
        l,
        f,
        p,
        d,
        y = t(53806),
        b = t(57573).isEmptyObject,
        v = t(57573).getPropertyValue,
        g = t(86104).getStaticHash,
        m = t(57573).LocalStore,
        h =
          ((o = {
            payout_currencies: { expire: 120 },
            proposal_open_contract: { expire: 10 },
            active_symbols: { expire: 10 },
            contracts_for: { expire: 10 },
            exchange_rates: { expire: 60 },
            trading_times: { expire: 120 },
          }),
          (i = "ws_cache"),
          (c = {}),
          (a = { history: "ticks_history", candles: "ticks_history" }),
          (u = function (n) {
            var e = !1;
            return (
              Array.isArray(n)
                ? n.length || (e = !0)
                : "object" ===
                    ("undefined" == typeof response_data
                      ? "undefined"
                      : r(response_data)) &&
                  (Object.keys(n).length || (e = !0)),
              e
            );
          }),
          (s = function () {
            (b(c) && ((c = m.getObject(i)), b(c))) ||
              (c.static_hash !== g() && d());
          }),
          (l = function (n) {
            return v(c, n) || {};
          }),
          {
            set: function (n, e) {
              var t = a[e.msg_type] || e.msg_type;
              if (
                (!e.subscription ||
                  ("proposal_open_contract" === t &&
                    e.proposal_open_contract.is_sold)) &&
                "latest" !== e.echo_req.end &&
                o[t]
              ) {
                var r = f(e.echo_req) || {},
                  s = r[t],
                  l = e[t],
                  p = e.error,
                  b = s && u(s) && !u(l),
                  v = s && u(l) && !u(s),
                  h = !u(r) && !r.error;
                if ((p || b || v) && h) d();
                else {
                  var _ = y().add(o[t].expire, "m").valueOf();
                  c.static_hash || (c.static_hash = g()),
                    (c[n] = { value: e, expires: _, msg_type: t }),
                    m.setObject(i, c);
                }
              }
            },
            get: (f = function (n) {
              s();
              var e,
                t = l(n);
              return y().isBefore(t.expires) ? (e = t.value) : p(n), e;
            }),
            getByMsgType: function (n) {
              s();
              var e = Object.keys(c).find(function (e) {
                return l(e).msg_type === n;
              });
              if (e) {
                var t,
                  r = l(e);
                return y().isBefore(r.expires) ? (t = r.value) : p(e), t;
              }
            },
            has: function (n) {
              return !!f(n);
            },
            remove: (p = function (n, e) {
              e
                ? Object.keys(c).forEach(function (e) {
                    -1 !== e.indexOf(n) && delete c[e];
                  })
                : n in c && delete c[n],
                m.setObject(i, c);
            }),
            clear: (d = function () {
              m.remove(i), (c = {});
            }),
          });
      n.exports = h;
    },
    78508: (n, e, t) => {
      "use strict";
      t.d(e, { m: () => u });
      var r = t(32735),
        o = t(23942),
        i = t.n(o),
        c = t(77395),
        a = function (n) {
          return n.pastDelay ? r.createElement(c.Loading, null) : null;
        },
        u = function (n) {
          return function (e) {
            return i().Map({
              loader: { ComponentModule: n },
              render: function (n, t) {
                var o = e
                  ? n.ComponentModule.default[e]
                  : n.ComponentModule.default;
                return r.createElement(o, t);
              },
              loading: a,
            });
          };
        };
    },
    86104: (n) => {
      var e,
        t = [
          "it",
          "de",
          "fr",
          "lu",
          "gr",
          "mf",
          "es",
          "sk",
          "lt",
          "nl",
          "at",
          "bg",
          "si",
          "cy",
          "be",
          "ro",
          "hr",
          "pt",
          "pl",
          "lv",
          "ee",
          "cz",
          "fi",
          "hu",
          "dk",
          "se",
          "ie",
          "im",
          "gb",
          "mt",
        ],
        r = ["sg", "de", "gr", "es", "au", "it", "lu"],
        o = ["au"];
      n.exports = {
        template: function (n, e) {
          var t = e;
          return (
            e && !Array.isArray(e) && (t = [e]),
            n.replace(/\[_(\d+)]/g, function (n, e) {
              return t[+e - 1];
            })
          );
        },
        createElement: function (n) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = document.createElement(n);
          return (
            Object.keys(e).forEach(function (n) {
              var r = e[n];
              "text" === n
                ? (t.textContent = r)
                : "html" === n
                ? t.html(r)
                : t.setAttribute(n, r);
            }),
            t
          );
        },
        getStaticHash: function () {
          return (e =
            e ||
            (
              document
                .querySelector('script[src*="main"]')
                .getAttribute("src") || ""
            ).split(".")[1]);
        },
        PromiseClass: function n() {
          var e = this;
          !(function (n, e) {
            if (!(n instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (this.promise = new Promise(function (n, t) {
              (e.reject = t), (e.resolve = n);
            }));
        },
        isEuCountry: function (n) {
          return t.includes(n);
        },
        isOptionsBlocked: function (n) {
          return o.includes(n);
        },
        isSyntheticsUnavailable: function (n) {
          return r.includes(n);
        },
        copyToClipboard: function (n) {
          var e = document.createElement("textarea");
          (e.innerText = n),
            document.body.appendChild(e),
            e.select(),
            document.execCommand("copy"),
            e.remove();
        },
      };
    },
  },
]);
