(self.webpackChunk = self.webpackChunk || []).push([
  [90],
  {
    94271: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => j });
      var r,
        i,
        n,
        a,
        s,
        c = o(32735),
        u = o(59001),
        p = o(77395),
        l = o(20374),
        b = o(57573),
        y = o(39402);
      function _(e) {
        return (_ =
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
      function f(e, t, o, r) {
        o &&
          Object.defineProperty(e, t, {
            enumerable: o.enumerable,
            configurable: o.configurable,
            writable: o.writable,
            value: o.initializer ? o.initializer.call(r) : void 0,
          });
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function g(e, t) {
        for (var o = 0; o < t.length; o++) {
          var r = t[o];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function v(e, t) {
        return (v =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function h(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
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
          var o,
            r = O(e);
          if (t) {
            var i = O(this).constructor;
            o = Reflect.construct(r, arguments, i);
          } else o = r.apply(this, arguments);
          return m(this, o);
        };
      }
      function m(e, t) {
        return !t || ("object" !== _(t) && "function" != typeof t) ? w(e) : t;
      }
      function w(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function O(e) {
        return (O = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function P(e, t, o, r, i) {
        var n = {};
        return (
          Object.keys(r).forEach(function (e) {
            n[e] = r[e];
          }),
          (n.enumerable = !!n.enumerable),
          (n.configurable = !!n.configurable),
          ("value" in n || n.initializer) && (n.writable = !0),
          (n = o
            .slice()
            .reverse()
            .reduce(function (o, r) {
              return r(e, t, o) || o;
            }, n)),
          i &&
            void 0 !== n.initializer &&
            ((n.value = n.initializer ? n.initializer.call(i) : void 0),
            (n.initializer = void 0)),
          void 0 === n.initializer &&
            (Object.defineProperty(e, t, n), (n = null)),
          n
        );
      }
      var j =
        ((r = u.action.bound),
        (i = u.action.bound),
        (s = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && v(e, t);
          })(n, e);
          var t,
            o,
            r,
            i = h(n);
          function n() {
            var e;
            d(this, n);
            for (var t = arguments.length, o = new Array(t), r = 0; r < t; r++)
              o[r] = arguments[r];
            return (
              f((e = i.call.apply(i, [this].concat(o))), "extensions", a, w(e)),
              e
            );
          }
          return (
            (t = n),
            (o = [
              {
                key: "attach",
                value: function (e) {
                  if (!(e instanceof Object))
                    throw new TypeError("Menu is not an instance of object.");
                  this.extensions.push(e);
                },
              },
              {
                key: "detach",
                value: function (e) {
                  this.extensions = this.extensions.filter(function (t) {
                    return t.id !== e;
                  });
                },
              },
            ]) && g(t.prototype, o),
            r && g(t, r),
            n
          );
        })(y.Z)),
        (a = P((n = s).prototype, "extensions", [u.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return [
              {
                id: "dt_reports_tab",
                icon: c.createElement(p.Icon, {
                  icon: "IcReports",
                  className: "header__icon",
                }),
                text: function () {
                  return (0, l.localize)("Reports");
                },
                link_to: b.routes.reports,
                login_only: !0,
              },
            ];
          },
        })),
        P(
          n.prototype,
          "attach",
          [r],
          Object.getOwnPropertyDescriptor(n.prototype, "attach"),
          n.prototype
        ),
        P(
          n.prototype,
          "detach",
          [i],
          Object.getOwnPropertyDescriptor(n.prototype, "detach"),
          n.prototype
        ),
        n);
    },
    23088: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => O });
      var r,
        i,
        n,
        a,
        s,
        c,
        u = o(59001),
        p = o(60374),
        l = o(57573),
        b = o(20374),
        y = o(39402);
      function _(e) {
        return (_ =
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
      function f(e, t, o, r) {
        o &&
          Object.defineProperty(e, t, {
            enumerable: o.enumerable,
            configurable: o.configurable,
            writable: o.writable,
            value: o.initializer ? o.initializer.call(r) : void 0,
          });
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function g(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
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
          var o,
            r = m(e);
          if (t) {
            var i = m(this).constructor;
            o = Reflect.construct(r, arguments, i);
          } else o = r.apply(this, arguments);
          return v(this, o);
        };
      }
      function v(e, t) {
        return !t || ("object" !== _(t) && "function" != typeof t) ? h(e) : t;
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function w(e, t, o, r, i) {
        var n = {};
        return (
          Object.keys(r).forEach(function (e) {
            n[e] = r[e];
          }),
          (n.enumerable = !!n.enumerable),
          (n.configurable = !!n.configurable),
          ("value" in n || n.initializer) && (n.writable = !0),
          (n = o
            .slice()
            .reverse()
            .reduce(function (o, r) {
              return r(e, t, o) || o;
            }, n)),
          i &&
            void 0 !== n.initializer &&
            ((n.value = n.initializer ? n.initializer.call(i) : void 0),
            (n.initializer = void 0)),
          void 0 === n.initializer &&
            (Object.defineProperty(e, t, n), (n = null)),
          n
        );
      }
      var O =
        ((r = u.action.bound),
        (i = u.action.bound),
        (c = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && d(e, t);
          })(o, e);
          var t = g(o);
          function o(e) {
            var r;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, o),
              ((r = t.call(this, { root_store: e })).is_applicable =
                /^(30863|19111|24091|16303)$/.test((0, l.getAppId)())),
              (r.has_initialized = !1),
              (r.push_woosh = new p.Pushwoosh()),
              f(r, "init", a, h(r)),
              f(r, "sendTags", s, h(r)),
              r
            );
          }
          return o;
        })(y.Z)),
        (a = w((n = c).prototype, "init", [r], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            var e = this;
            return function () {
              (!e.is_applicable && e.has_initialized) ||
                (e.push_woosh.push([
                  "init",
                  {
                    logLevel: "error",
                    applicationCode: "DD293-35A19",
                    safariWebsitePushID: "web.com.deriv",
                    defaultNotificationTitle: "Deriv.com",
                    defaultNotificationImage: (0, l.urlForCurrentDomain)(
                      "https://deriv.com/favicons/favicon-192x192.png"
                    ),
                    autoSubscribe: !0,
                    serviceWorkerUrl: "/service-worker.js",
                  },
                ]),
                (e.has_initialized = !0),
                e.push_woosh.push([
                  "onReady",
                  function (t) {
                    e.push_woosh.isSubscribed().then(function (t) {
                      t || e.push_woosh.subscribe();
                    }),
                      e.sendTags(t);
                  },
                ]));
            };
          },
        })),
        (s = w(n.prototype, "sendTags", [i], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            var e = this;
            return function (t) {
              t.getTags()
                .then(function (o) {
                  return o.result["Login ID"] &&
                    o.result["Site Language"] &&
                    o.result.Residence
                    ? null
                    : t.setTags({
                        "Login ID": e.root_store.client.loginid,
                        "Site Language": (0, b.getLanguage)().toLowerCase(),
                        Residence: e.root_store.client.residence,
                      });
                })
                .catch(function (e) {
                  return console.error(e), null;
                });
            };
          },
        })),
        n);
    },
    33727: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => S });
      var r,
        i,
        n,
        a,
        s,
        c,
        u,
        p = o(59001),
        l = o(57573),
        b = o(20374),
        y = o(31508),
        _ = o.n(y),
        f = o(39402);
      function d(e) {
        return (d =
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
      function g(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(o), !0).forEach(function (t) {
                h(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : g(Object(o)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(o, t)
                );
              });
        }
        return e;
      }
      function h(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      function m(e, t, o, r, i, n, a) {
        try {
          var s = e[n](a),
            c = s.value;
        } catch (e) {
          return void o(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function w(e, t) {
        for (var o = 0; o < t.length; o++) {
          var r = t[o];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function O(e, t) {
        return (O =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function P(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
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
          var o,
            r = D(e);
          if (t) {
            var i = D(this).constructor;
            o = Reflect.construct(r, arguments, i);
          } else o = r.apply(this, arguments);
          return j(this, o);
        };
      }
      function j(e, t) {
        return !t || ("object" !== d(t) && "function" != typeof t) ? k(e) : t;
      }
      function k(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function D(e) {
        return (D = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function z(e, t, o, r, i) {
        var n = {};
        return (
          Object.keys(r).forEach(function (e) {
            n[e] = r[e];
          }),
          (n.enumerable = !!n.enumerable),
          (n.configurable = !!n.configurable),
          ("value" in n || n.initializer) && (n.writable = !0),
          (n = o
            .slice()
            .reverse()
            .reduce(function (o, r) {
              return r(e, t, o) || o;
            }, n)),
          i &&
            void 0 !== n.initializer &&
            ((n.value = n.initializer ? n.initializer.call(i) : void 0),
            (n.initializer = void 0)),
          void 0 === n.initializer &&
            (Object.defineProperty(e, t, n), (n = null)),
          n
        );
      }
      var S =
        ((r = p.action.bound),
        (i = p.action.bound),
        (n = p.action.bound),
        (a = p.action.bound),
        (u = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && O(e, t);
          })(n, e);
          var t,
            o,
            r,
            i = P(n);
          function n(e) {
            var t, o, r, a, s;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              ((t = i.call(this, { root_store: e })).is_applicable =
                /^(30863|19111|24091)$/.test((0, l.getAppId)())),
              (t.has_identified = !1),
              (t.current_page = ""),
              (o = t),
              (r = "identifyEvent"),
              (a = c),
              (s = k(t)),
              a &&
                Object.defineProperty(o, r, {
                  enumerable: a.enumerable,
                  configurable: a.configurable,
                  writable: a.writable,
                  value: a.initializer ? a.initializer.call(s) : void 0,
                }),
              t
            );
          }
          return (
            (t = n),
            (o = [
              {
                key: "pageView",
                value: function () {
                  var e = window.location.hostname + window.location.pathname;
                  this.is_applicable &&
                    this.root_store.client.is_logged_in &&
                    this.has_identified &&
                    e !== this.current_page &&
                    (window.rudderanalytics.page("Deriv App", e),
                    (this.current_page = e));
                },
              },
              {
                key: "reset",
                value: function () {
                  this.is_applicable &&
                    (window.rudderanalytics.reset(),
                    (this.has_identified = !1));
                },
              },
              {
                key: "track",
                value: function (e, t) {
                  this.is_applicable &&
                    this.has_identified &&
                    window.rudderanalytics.track(e, t);
                },
              },
            ]) && w(t.prototype, o),
            r && w(t, r),
            n
          );
        })(f.Z)),
        (c = z((s = u).prototype, "identifyEvent", [r], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            var e = this;
            return (function () {
              var t,
                o =
                  ((t = regeneratorRuntime.mark(function t(o) {
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt(
                              "return",
                              new Promise(function (t) {
                                e.is_applicable && !e.has_identified
                                  ? _()
                                      .wait("authorize")
                                      .then(function () {
                                        var r = e.root_store.client.user_id;
                                        r &&
                                          (window.rudderanalytics.identify(
                                            r,
                                            v(
                                              {
                                                language: (0,
                                                b.getLanguage)().toLowerCase(),
                                              },
                                              o
                                            )
                                          ),
                                          (e.has_identified = !0),
                                          e.pageView(),
                                          t()),
                                          t();
                                      })
                                  : t();
                              })
                            );
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })),
                  function () {
                    var e = this,
                      o = arguments;
                    return new Promise(function (r, i) {
                      var n = t.apply(e, o);
                      function a(e) {
                        m(n, r, i, a, s, "next", e);
                      }
                      function s(e) {
                        m(n, r, i, a, s, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function (e) {
                return o.apply(this, arguments);
              };
            })();
          },
        })),
        z(
          s.prototype,
          "pageView",
          [i],
          Object.getOwnPropertyDescriptor(s.prototype, "pageView"),
          s.prototype
        ),
        z(
          s.prototype,
          "reset",
          [n],
          Object.getOwnPropertyDescriptor(s.prototype, "reset"),
          s.prototype
        ),
        z(
          s.prototype,
          "track",
          [a],
          Object.getOwnPropertyDescriptor(s.prototype, "track"),
          s.prototype
        ),
        s);
    },
    56139: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => so });
      var r,
        i,
        n,
        a,
        s,
        c,
        u,
        p,
        l,
        b,
        y,
        _,
        f,
        d,
        g,
        v,
        h,
        m,
        w,
        O,
        P,
        j,
        k,
        D,
        z,
        S,
        M,
        A,
        R,
        x,
        T,
        N,
        E,
        C,
        L,
        I,
        B,
        U,
        W,
        H,
        F,
        K,
        V,
        Z,
        $,
        q,
        G,
        J,
        Q,
        X,
        Y,
        ee,
        te,
        oe,
        re,
        ie,
        ne,
        ae,
        se,
        ce,
        ue,
        pe,
        le,
        be,
        ye,
        _e,
        fe,
        de,
        ge,
        ve,
        he,
        me,
        we,
        Oe,
        Pe,
        je,
        ke,
        De,
        ze,
        Se,
        Me,
        Ae,
        Re,
        xe,
        Te,
        Ne,
        Ee,
        Ce,
        Le,
        Ie,
        Be,
        Ue,
        We,
        He,
        Fe,
        Ke,
        Ve,
        Ze,
        $e,
        qe,
        Ge,
        Je,
        Qe,
        Xe,
        Ye,
        et,
        tt,
        ot,
        rt,
        it,
        nt,
        at,
        st,
        ct,
        ut,
        pt,
        lt,
        bt,
        yt,
        _t,
        ft,
        dt,
        gt,
        vt,
        ht,
        mt,
        wt,
        Ot,
        Pt,
        jt,
        kt,
        Dt,
        zt,
        St,
        Mt,
        At,
        Rt,
        xt,
        Tt,
        Nt,
        Et,
        Ct,
        Lt,
        It,
        Bt,
        Ut = o(59001),
        Wt = o(57573),
        Ht = o(24387),
        Ft = o(65229),
        Kt = o(39402),
        Vt = o(57798);
      function Zt(e) {
        return (Zt =
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
      function $t(e, t, o, r, i, n, a) {
        try {
          var s = e[n](a),
            c = s.value;
        } catch (e) {
          return void o(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function qt(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function Gt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? qt(Object(o), !0).forEach(function (t) {
                Jt(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : qt(Object(o)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(o, t)
                );
              });
        }
        return e;
      }
      function Jt(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      function Qt(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Xt(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Xt(e, t);
            var o = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === o && e.constructor && (o = e.constructor.name);
            if ("Map" === o || "Set" === o) return Array.from(e);
            if (
              "Arguments" === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            )
              return Xt(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Xt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
        return r;
      }
      function Yt(e, t, o, r) {
        o &&
          Object.defineProperty(e, t, {
            enumerable: o.enumerable,
            configurable: o.configurable,
            writable: o.writable,
            value: o.initializer ? o.initializer.call(r) : void 0,
          });
      }
      function eo(e, t) {
        for (var o = 0; o < t.length; o++) {
          var r = t[o];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function to(e, t) {
        return (to =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function oo(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
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
          var o,
            r = no(e);
          if (t) {
            var i = no(this).constructor;
            o = Reflect.construct(r, arguments, i);
          } else o = r.apply(this, arguments);
          return ro(this, o);
        };
      }
      function ro(e, t) {
        return !t || ("object" !== Zt(t) && "function" != typeof t) ? io(e) : t;
      }
      function io(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function no(e) {
        return (no = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ao(e, t, o, r, i) {
        var n = {};
        return (
          Object.keys(r).forEach(function (e) {
            n[e] = r[e];
          }),
          (n.enumerable = !!n.enumerable),
          (n.configurable = !!n.configurable),
          ("value" in n || n.initializer) && (n.writable = !0),
          (n = o
            .slice()
            .reverse()
            .reduce(function (o, r) {
              return r(e, t, o) || o;
            }, n)),
          i &&
            void 0 !== n.initializer &&
            ((n.value = n.initializer ? n.initializer.call(i) : void 0),
            (n.initializer = void 0)),
          void 0 === n.initializer &&
            (Object.defineProperty(e, t, n), (n = null)),
          n
        );
      }
      var so =
        ((r = Ut.observable.shallow),
        (i = Ut.action.bound),
        (n = Ut.action.bound),
        (a = Ut.action.bound),
        (s = Ut.action.bound),
        (c = Ut.action.bound),
        (u = Ut.action.bound),
        (p = Ut.action.bound),
        (l = Ut.action.bound),
        (b = Ut.action.bound),
        (y = Ut.action.bound),
        (_ = Ut.action.bound),
        (f = Ut.action.bound),
        (d = Ut.action.bound),
        (g = Ut.action.bound),
        (v = Ut.action.bound),
        (h = Ut.action.bound),
        (m = Ut.action.bound),
        (w = Ut.action.bound),
        (O = Ut.action.bound),
        (P = Ut.action.bound),
        (j = Ut.action.bound),
        (k = Ut.action.bound),
        (D = Ut.action.bound),
        (z = Ut.action.bound),
        (S = Ut.action.bound),
        (M = Ut.action.bound),
        (A = Ut.action.bound),
        (R = Ut.action.bound),
        (x = Ut.action.bound),
        (T = Ut.action.bound),
        (N = Ut.action.bound),
        (E = Ut.action.bound),
        (C = Ut.action.bound),
        (L = Ut.action.bound),
        (I = Ut.action.bound),
        (B = Ut.action.bound),
        (U = Ut.action.bound),
        (W = Ut.action.bound),
        (H = Ut.action.bound),
        (F = Ut.action.bound),
        (K = Ut.action.bound),
        (V = Ut.action.bound),
        (Z = Ut.action.bound),
        ($ = Ut.action.bound),
        (q = Ut.action.bound),
        (G = Ut.action.bound),
        (J = Ut.action.bound),
        (Q = Ut.action.bound),
        (X = Ut.action.bound),
        (Y = Ut.action.bound),
        (ee = Ut.action.bound),
        (te = Ut.action.bound),
        (oe = Ut.action.bound),
        (re = Ut.action.bound),
        (ie = Ut.action.bound),
        (ne = Ut.action.bound),
        (ae = Ut.action.bound),
        (se = Ut.action.bound),
        (ce = Ut.action.bound),
        (ue = Ut.action.bound),
        (pe = Ut.action.bound),
        (le = Ut.action.bound),
        (be = Ut.action.bound),
        (ye = Ut.action.bound),
        (_e = Ut.action.bound),
        (fe = Ut.action.bound),
        (de = Ut.action.bound),
        (ge = Ut.action.bound),
        (ve = Ut.action.bound),
        (he = Ut.action.bound),
        (me = Ut.action.bound),
        (we = Ut.action.bound),
        (Oe = Ut.action.bound),
        (Pe = Ut.action.bound),
        (Bt = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && to(e, t);
          })(s, e);
          var t,
            o,
            r,
            i,
            n,
            a = oo(s);
          function s(e) {
            var t;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, s);
            return (
              Yt(
                (t = a.call(this, {
                  root_store: e,
                  local_storage_properties: [
                    "advanced_duration_unit",
                    "is_advanced_duration",
                    "advanced_expiry_type",
                    "simple_duration_unit",
                    "duration_t",
                    "duration_s",
                    "duration_m",
                    "duration_h",
                    "duration_d",
                    "is_account_settings_visible",
                    "is_chart_asset_info_visible",
                    "is_chart_countdown_visible",
                    "is_chart_layout_default",
                    "is_dark_mode_on",
                    "is_positions_drawer_on",
                    "is_reports_visible",
                    "should_show_cancellation_warning",
                  ],
                  store_name: "ui_store",
                })),
                "is_account_settings_visible",
                ke,
                io(t)
              ),
              Yt(t, "is_notifications_visible", De, io(t)),
              Yt(t, "is_positions_drawer_on", ze, io(t)),
              Yt(t, "is_reports_visible", Se, io(t)),
              Yt(t, "reports_route_tab_index", Me, io(t)),
              Yt(t, "is_cashier_visible", Ae, io(t)),
              Yt(t, "is_history_tab_active", Re, io(t)),
              Yt(t, "should_show_cancellation_warning", xe, io(t)),
              Yt(t, "footer_extensions", Te, io(t)),
              Yt(t, "header_extension", Ne, io(t)),
              Yt(t, "settings_extension", Ee, io(t)),
              Yt(t, "notification_messages_ui", Ce, io(t)),
              Yt(t, "is_dark_mode_on", Le, io(t)),
              Yt(t, "is_settings_modal_on", Ie, io(t)),
              Yt(t, "is_accounts_switcher_on", Be, io(t)),
              Yt(t, "account_switcher_disabled_message", Ue, io(t)),
              Yt(t, "has_only_forward_starting_contracts", We, io(t)),
              Yt(t, "is_services_error_visible", He, io(t)),
              Yt(t, "is_unsupported_contract_modal_visible", Fe, io(t)),
              Yt(t, "is_account_signup_modal_visible", Ke, io(t)),
              Yt(t, "is_set_residence_modal_visible", Ve, io(t)),
              Yt(t, "is_reset_password_modal_visible", Ze, io(t)),
              Yt(t, "is_reset_trading_password_modal_visible", $e, io(t)),
              Yt(t, "is_chart_countdown_visible", qe, io(t)),
              Yt(t, "is_chart_layout_default", Ge, io(t)),
              Yt(t, "pwa_prompt_event", Je, io(t)),
              Yt(t, "screen_width", Qe, io(t)),
              Yt(t, "screen_height", Xe, io(t)),
              Yt(t, "is_onscreen_keyboard_active", Ye, io(t)),
              Yt(t, "notifications", et, io(t)),
              Yt(t, "notification_messages", tt, io(t)),
              Yt(t, "marked_notifications", ot, io(t)),
              Yt(t, "push_notifications", rt, io(t)),
              Yt(t, "is_advanced_duration", it, io(t)),
              Yt(t, "advanced_duration_unit", nt, io(t)),
              Yt(t, "advanced_expiry_type", at, io(t)),
              Yt(t, "simple_duration_unit", st, io(t)),
              Yt(t, "duration_t", ct, io(t)),
              Yt(t, "duration_s", ut, io(t)),
              Yt(t, "duration_m", pt, io(t)),
              Yt(t, "duration_h", lt, io(t)),
              Yt(t, "duration_d", bt, io(t)),
              Yt(t, "purchase_states", yt, io(t)),
              Yt(t, "is_app_disabled", _t, io(t)),
              Yt(t, "is_route_modal_on", ft, io(t)),
              Yt(t, "is_real_acc_signup_on", dt, io(t)),
              Yt(t, "real_account_signup_target", gt, io(t)),
              Yt(t, "has_real_account_signup_ended", vt, io(t)),
              Yt(t, "is_account_types_modal_visible", ht, io(t)),
              Yt(t, "is_welcome_modal_visible", mt, io(t)),
              Yt(t, "is_set_currency_modal_visible", wt, io(t)),
              Yt(t, "show_positions_toggle", Ot, io(t)),
              Yt(t, "modal_index", Pt, io(t)),
              Yt(t, "is_top_up_virtual_open", jt, io(t)),
              Yt(t, "is_top_up_virtual_in_progress", kt, io(t)),
              Yt(t, "is_top_up_virtual_success", Dt, io(t)),
              Yt(t, "should_show_real_accounts_list", zt, io(t)),
              Yt(t, "real_account_signup", St, io(t)),
              Yt(t, "current_focus", Mt, io(t)),
              (t.mobile_toast_timeout = 3500),
              Yt(t, "toasts", At, io(t)),
              Yt(t, "is_cfd_page", Rt, io(t)),
              Yt(t, "is_nativepicker_visible", xt, io(t)),
              Yt(t, "is_landscape", Tt, io(t)),
              Yt(t, "prompt_when", Nt, io(t)),
              Yt(t, "promptFn", Et, io(t)),
              Yt(t, "is_account_needed_modal_on", Ct, io(t)),
              Yt(t, "account_needed_modal_props", Lt, io(t)),
              Yt(t, "manage_real_account_tab_index", It, io(t)),
              (t.getDurationFromUnit = function (e) {
                return t["duration_".concat(e)];
              }),
              (t.changeTheme = function () {
                var e = t.root_store.common.app_routing_history.slice();
                if (
                  (0, Wt.getPlatformInformation)(e).header ===
                  Wt.platform_name.DBot
                )
                  return (
                    document.body.classList.remove("theme--dark"),
                    void document.body.classList.add("theme--light")
                  );
                t.is_dark_mode_on
                  ? (document.body.classList.remove("theme--light"),
                    document.body.classList.add("theme--dark"))
                  : (document.body.classList.remove("theme--dark"),
                    document.body.classList.add("theme--light"));
              }),
              window.addEventListener("resize", t.handleResize),
              (0, Ut.autorun)(function () {
                t.changeTheme();
              }),
              t
            );
          }
          return (
            (t = s),
            (o = [
              {
                key: "init",
                value: function (e) {
                  this.notification_messages_ui = e;
                },
              },
              {
                key: "populateFooterExtensions",
                value: function (e) {
                  this.footer_extensions = e;
                },
              },
              {
                key: "populateHeaderExtensions",
                value: function (e) {
                  this.header_extension = e;
                },
              },
              {
                key: "populateSettingsExtensions",
                value: function (e) {
                  this.settings_extension = e;
                },
              },
              {
                key: "onChangeUiStore",
                value: function (e) {
                  var t = e.name,
                    o = e.value;
                  if (!(t in this))
                    throw new Error("Invalid Argument: ".concat(t));
                  this[t] = o;
                },
              },
              {
                key: "handleResize",
                value: function () {
                  (this.screen_width = window.innerWidth),
                    (this.screen_height = window.innerHeight);
                },
              },
              {
                key: "setPromptHandler",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : function () {};
                  (this.prompt_when = e), (this.promptFn = t);
                },
              },
              {
                key: "is_mobile",
                get: function () {
                  return this.screen_width <= Ft.C;
                },
              },
              {
                key: "is_tablet",
                get: function () {
                  return this.screen_width <= Ft.u;
                },
              },
              {
                key: "is_account_switcher_disabled",
                get: function () {
                  return !!this.account_switcher_disabled_message;
                },
              },
              {
                key: "filtered_notifications",
                get: function () {
                  return this.notifications.filter(function (e) {
                    return "news" !== e.type;
                  });
                },
              },
              {
                key: "filterNotificationMessages",
                value: function () {
                  var e = this;
                  "null" !== Wt.LocalStore.get("active_loginid") &&
                    this.root_store.client.resetVirtualBalanceNotification(
                      Wt.LocalStore.get("active_loginid")
                    ),
                    (this.notifications = this.notification_messages.filter(
                      function (t) {
                        return !(
                          void 0 !== t.platform &&
                          !t.platform.includes((0, Wt.getPathname)()) &&
                          (t.platform.includes((0, Wt.getPathname)()) ||
                            (t.is_disposable &&
                              (e.removeNotificationMessage({
                                key: t.key,
                                should_show_again: t.should_show_again,
                              }),
                              e.removeNotificationByKey({ key: t.key }))),
                          1)
                        );
                      }
                    ));
                },
              },
              {
                key: "setRouteModal",
                value: function () {
                  this.is_route_modal_on = !0;
                },
              },
              {
                key: "disableRouteModal",
                value: function () {
                  this.is_route_modal_on = !1;
                },
              },
              {
                key: "disableApp",
                value: function () {
                  this.is_app_disabled = !0;
                },
              },
              {
                key: "enableApp",
                value: function () {
                  this.is_app_disabled = !1;
                },
              },
              {
                key: "toggleAccountsDialog",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : !this.is_accounts_switcher_on;
                  this.is_accounts_switcher_on = e;
                },
              },
              {
                key: "setAccountSwitcherDisabledMessage",
                value: function (e) {
                  e
                    ? ((this.is_accounts_switcher_on = !1),
                      (this.account_switcher_disabled_message = e))
                    : (this.account_switcher_disabled_message = "");
                },
              },
              {
                key: "setPurchaseState",
                value: function (e) {
                  this.purchase_states[e] = !0;
                  var t = document.getElementsByClassName("btn-purchase");
                  t[e] && t[e].classList.add("btn-purchase--swoosh"),
                    setTimeout(function () {
                      [].forEach.bind(t, function (e) {
                        e.classList.add("btn-purchase--disabled");
                      })();
                    }, 250);
                },
              },
              {
                key: "resetPurchaseStates",
                value: function () {
                  this.purchase_states = [!1, !1];
                },
              },
              {
                key: "setChartLayout",
                value: function (e) {
                  this.is_chart_layout_default = e;
                },
              },
              {
                key: "setChartCountdown",
                value: function (e) {
                  this.is_chart_countdown_visible = e;
                },
              },
              {
                key: "setDarkMode",
                value: function (e) {
                  return (
                    this.is_dark_mode_on !== e &&
                      ((this.is_dark_mode_on = e),
                      this.root_store.gtm.pushDataLayer({
                        event: "switch theme",
                      })),
                    this.is_dark_mode_on
                  );
                },
              },
              {
                key: "toggleSetCurrencyModal",
                value: function () {
                  this.is_set_currency_modal_visible =
                    !this.is_set_currency_modal_visible;
                },
              },
              {
                key: "toggleCashier",
                value: function () {
                  this.is_cashier_visible = !this.is_cashier_visible;
                },
              },
              {
                key: "setModalIndex",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  this.modal_index = e;
                },
              },
              {
                key: "toggleSettingsModal",
                value: function () {
                  this.is_settings_modal_on = !this.is_settings_modal_on;
                },
              },
              {
                key: "openPositionsDrawer",
                value: function () {
                  this.is_positions_drawer_on = !0;
                },
              },
              {
                key: "openRealAccountSignup",
                value: function () {
                  var e,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null ===
                            (e =
                              this.root_store.client
                                .upgradeable_landing_companies) || void 0 === e
                        ? void 0
                        : e[0];
                  (this.is_real_acc_signup_on = !0),
                    (this.real_account_signup_target = t),
                    (this.is_accounts_switcher_on = !1);
                },
              },
              {
                key: "setManageRealAccountActiveTabIndex",
                value: function (e) {
                  this.manage_real_account_tab_index = e;
                },
              },
              {
                key: "closeRealAccountSignup",
                value: function () {
                  var e = this;
                  (this.is_real_acc_signup_on = !1),
                    (this.real_account_signup_target = ""),
                    setTimeout(function () {
                      e.resetRealAccountSignupParams(),
                        e.setRealAccountSignupEnd(!0);
                    }, 300);
                },
              },
              {
                key: "openAccountNeededModal",
                value: function (e, t, o) {
                  (this.is_account_needed_modal_on = !0),
                    (this.account_needed_modal_props = {
                      target: e,
                      target_label: t,
                      target_dmt5_label: o,
                    });
                },
              },
              {
                key: "closeAccountNeededModal",
                value: function () {
                  (this.is_account_needed_modal_on = !1),
                    (this.account_needed_modal_props = {
                      target: "",
                      target_label: "",
                      target_dmt5_label: "",
                    });
                },
              },
              {
                key: "togglePositionsDrawer",
                value: function () {
                  this.is_positions_drawer_on = !this.is_positions_drawer_on;
                },
              },
              {
                key: "toggleNotificationsModal",
                value: function () {
                  this.is_notifications_visible =
                    !this.is_notifications_visible;
                },
              },
              {
                key: "toggleAccountSettings",
                value: function (e) {
                  this.is_account_settings_visible = e;
                },
              },
              {
                key: "toggleReports",
                value: function (e) {
                  this.is_reports_visible = e;
                },
              },
              {
                key: "toggleServicesErrorModal",
                value: function (e) {
                  this.is_services_error_visible = e;
                },
              },
              {
                key: "removePWAPromptEvent",
                value: function () {
                  this.pwa_prompt_event = null;
                },
              },
              {
                key: "setPWAPromptEvent",
                value: function (e) {
                  this.pwa_prompt_event = e;
                },
              },
              {
                key: "updateNotifications",
                value: function (e) {
                  this.notifications = e.filter(function (e) {
                    return !Vt.rH.includes(e.key);
                  });
                },
              },
              {
                key: "removeNotifications",
                value: function (e) {
                  this.notifications = e
                    ? []
                    : Qt(
                        this.notifications.filter(function (e) {
                          return e.is_persistent;
                        })
                      );
                },
              },
              {
                key: "removeNotificationByKey",
                value: function (e) {
                  var t = e.key;
                  this.notifications = this.notifications.filter(function (e) {
                    return e.key !== t;
                  });
                },
              },
              {
                key: "removeNotificationMessageByKey",
                value: function (e) {
                  var t = e.key;
                  this.notification_messages =
                    this.notification_messages.filter(function (e) {
                      return e.key !== t;
                    });
                },
              },
              {
                key: "addNotificationMessageByKey",
                value: function (e) {
                  e && this.addNotificationMessage((0, Vt.G$)(this)[e]);
                },
              },
              {
                key: "markNotificationMessage",
                value: function (e) {
                  var t = e.key;
                  this.marked_notifications.push(t);
                },
              },
              {
                key: "addNotificationMessage",
                value: function (e) {
                  if (
                    e &&
                    !this.notification_messages.find(function (t) {
                      return t.header === e.header;
                    })
                  ) {
                    var t = Wt.LocalStore.get("active_loginid"),
                      o = Wt.LocalStore.getObject("notification_messages");
                    if (t) {
                      Array.isArray(o[t]) &&
                        o[t].includes(e.key) &&
                        this.markNotificationMessage({ key: e.key });
                      var r = (0, Wt.isMobile)() ? Ht.VL : Ht.JH;
                      (this.notification_messages = []
                        .concat(Qt(this.notification_messages), [e])
                        .sort(r)),
                        Vt.rH.includes(e.key) ||
                          this.updateNotifications(this.notification_messages);
                    }
                  }
                },
              },
              {
                key: "removeNotificationMessage",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.key,
                    o = e.should_show_again;
                  if (t) {
                    this.notification_messages =
                      this.notification_messages.filter(function (e) {
                        return e.key !== t;
                      });
                    var r = Wt.LocalStore.get("active_loginid");
                    if (!Vt.rH.includes(t) && r) {
                      var i = Wt.LocalStore.getObject("notification_messages");
                      if (i[r] && i[r].includes(t)) return;
                      var n = function () {
                        return Array.isArray(i[r]) ? (i[r].push(t), i[r]) : [t];
                      };
                      o ||
                        (Object.assign(i, Jt({}, r, n())),
                        Wt.LocalStore.setObject("notification_messages", i));
                    }
                  }
                },
              },
              {
                key: "removeAllNotificationMessages",
                value: function (e) {
                  this.notification_messages = e
                    ? []
                    : Qt(
                        this.notification_messages.filter(function (e) {
                          return e.is_persistent;
                        })
                      );
                },
              },
              {
                key: "setHasOnlyForwardingContracts",
                value: function (e) {
                  this.has_only_forward_starting_contracts = e;
                },
              },
              {
                key: "addNotificationBar",
                value: function (e) {
                  this.push_notifications.push(e),
                    (this.push_notifications = (0, Wt.unique)(
                      this.push_notifications,
                      "msg_type"
                    ));
                },
              },
              {
                key: "toggleUnsupportedContractModal",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : !this.is_unsupported_contract_modal_visible;
                  this.is_unsupported_contract_modal_visible = e;
                },
              },
              {
                key: "toggleAccountSignupModal",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : !this.is_account_signup_modal_visible;
                  this.is_account_signup_modal_visible = e;
                },
              },
              {
                key: "toggleSetResidenceModal",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : !this.is_set_residence_modal_visible;
                  this.is_set_residence_modal_visible = e;
                },
              },
              {
                key: "toggleCancellationWarning",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : !this.should_show_cancellation_warning;
                  this.should_show_cancellation_warning = e;
                },
              },
              {
                key: "toggleHistoryTab",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : !this.is_history_tab_active;
                  this.is_history_tab_active = e;
                },
              },
              {
                key: "setTopUpInProgress",
                value: function (e) {
                  this.is_top_up_virtual_in_progress = e;
                },
              },
              {
                key: "closeTopUpModal",
                value: function () {
                  this.is_top_up_virtual_open = !1;
                },
              },
              {
                key: "openTopUpModal",
                value: function () {
                  this.is_top_up_virtual_open = !0;
                },
              },
              {
                key: "closeSuccessTopUpModal",
                value: function () {
                  this.is_top_up_virtual_success = !1;
                },
              },
              {
                key: "toggleResetPasswordModal",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : !this.is_reset_password_modal_visible;
                  this.is_reset_password_modal_visible = e;
                },
              },
              {
                key: "setResetTradingPasswordModalOpen",
                value: function (e) {
                  this.is_reset_trading_password_modal_visible = e;
                },
              },
              {
                key: "setRealAccountSignupParams",
                value: function (e) {
                  this.real_account_signup = Gt(
                    Gt({}, this.real_account_signup),
                    e
                  );
                },
              },
              {
                key: "setRealAccountSignupEnd",
                value: function (e) {
                  this.has_real_account_signup_ended = e;
                },
              },
              {
                key: "resetRealAccountSignupParams",
                value: function () {
                  this.real_account_signup = {
                    active_modal_index: -1,
                    previous_currency: "",
                    current_currency: "",
                    success_message: "",
                    error_message: "",
                  };
                },
              },
              {
                key: "onOrientationChange",
                value: function (e) {
                  var t = e.is_landscape_orientation;
                  this.is_landscape = t;
                },
              },
              {
                key: "toggleOnScreenKeyboard",
                value: function () {
                  this.is_onscreen_keyboard_active =
                    null !== this.current_focus &&
                    this.is_mobile &&
                    (0, Wt.isTouchDevice)();
                },
              },
              {
                key: "setCurrentFocus",
                value: function (e) {
                  (this.current_focus = e), this.toggleOnScreenKeyboard();
                },
              },
              {
                key: "addToast",
                value: function (e) {
                  var t, o;
                  e.key = null !== (t = e.key) && void 0 !== t ? t : e.content;
                  var r = this.toasts.findIndex(function (t) {
                    return t.key === e.key;
                  });
                  r > -1 && this.toasts.splice(r, 1),
                    (e.timeout =
                      null !== (o = e.timeout) && void 0 !== o
                        ? o
                        : this.mobile_toast_timeout),
                    e.is_bottom ? this.toasts.push(e) : this.toasts.unshift(e);
                },
              },
              {
                key: "removeToast",
                value: function (e) {
                  var t = this.toasts.findIndex(function (t) {
                    return t.key === e;
                  });
                  t > -1 && this.toasts.splice(t, 1);
                },
              },
              {
                key: "setIsNativepickerVisible",
                value: function (e) {
                  this.is_nativepicker_visible = e;
                },
              },
              {
                key: "setReportsTabIndex",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  this.reports_route_tab_index = e;
                },
              },
              {
                key: "toggleAccountTypesModal",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : !this.is_account_types_modal_visible;
                  this.is_account_types_modal_visible = e;
                },
              },
              {
                key: "toggleWelcomeModal",
                value: function (e) {
                  var t = e.is_visible,
                    o = void 0 === t ? !this.is_welcome_modal_visible : t,
                    r = e.should_persist,
                    i = void 0 !== r && r;
                  (Wt.LocalStore.get("has_viewed_welcome_screen") && !i) ||
                    ((this.is_welcome_modal_visible = o),
                    o || Wt.LocalStore.set("has_viewed_welcome_screen", !0));
                },
              },
              {
                key: "showAccountTypesModalForEuropean",
                value: function () {
                  this.toggleAccountTypesModal(this.root_store.client.is_uk);
                },
              },
              {
                key: "notifyAppInstall",
                value: function (e) {
                  var t = this;
                  (this.deferred_prompt = e),
                    setTimeout(function () {
                      t.addNotificationMessageByKey("install_pwa");
                    }, 1e4);
                },
              },
              {
                key: "installWithDeferredPrompt",
                value:
                  ((i = regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this.deferred_prompt.prompt(),
                                (e.next = 3),
                                this.deferred_prompt.userChoice
                              );
                            case 3:
                              "accepted" === e.sent.outcome &&
                                this.removeNotificationByKey("install_pwa");
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })),
                  (n = function () {
                    var e = this,
                      t = arguments;
                    return new Promise(function (o, r) {
                      var n = i.apply(e, t);
                      function a(e) {
                        $t(n, o, r, a, s, "next", e);
                      }
                      function s(e) {
                        $t(n, o, r, a, s, "throw", e);
                      }
                      a(void 0);
                    });
                  }),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "toggleShouldShowRealAccountsList",
                value: function (e) {
                  this.should_show_real_accounts_list = e;
                },
              },
            ]) && eo(t.prototype, o),
            r && eo(t, r),
            s
          );
        })(Kt.Z)),
        (ke = ao(
          (je = Bt).prototype,
          "is_account_settings_visible",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          }
        )),
        (De = ao(je.prototype, "is_notifications_visible", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (ze = ao(je.prototype, "is_positions_drawer_on", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (Se = ao(je.prototype, "is_reports_visible", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (Me = ao(je.prototype, "reports_route_tab_index", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return 0;
          },
        })),
        (Ae = ao(je.prototype, "is_cashier_visible", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (Re = ao(je.prototype, "is_history_tab_active", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (xe = ao(
          je.prototype,
          "should_show_cancellation_warning",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !0;
            },
          }
        )),
        (Te = ao(je.prototype, "footer_extensions", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return [];
          },
        })),
        (Ne = ao(je.prototype, "header_extension", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {},
        })),
        (Ee = ao(je.prototype, "settings_extension", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {},
        })),
        (Ce = ao(je.prototype, "notification_messages_ui", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {},
        })),
        (Le = ao(je.prototype, "is_dark_mode_on", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            var e, t;
            return (
              (null === (e = window) ||
              void 0 === e ||
              null === (t = e.matchMedia) ||
              void 0 === t
                ? void 0
                : t.call(e, "(prefers-color-scheme: dark)").matches) &&
              (0, Wt.isMobile)()
            );
          },
        })),
        (Ie = ao(je.prototype, "is_settings_modal_on", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (Be = ao(je.prototype, "is_accounts_switcher_on", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (Ue = ao(
          je.prototype,
          "account_switcher_disabled_message",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return "";
            },
          }
        )),
        (We = ao(
          je.prototype,
          "has_only_forward_starting_contracts",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          }
        )),
        (He = ao(je.prototype, "is_services_error_visible", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (Fe = ao(
          je.prototype,
          "is_unsupported_contract_modal_visible",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          }
        )),
        (Ke = ao(
          je.prototype,
          "is_account_signup_modal_visible",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          }
        )),
        (Ve = ao(
          je.prototype,
          "is_set_residence_modal_visible",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          }
        )),
        (Ze = ao(
          je.prototype,
          "is_reset_password_modal_visible",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          }
        )),
        ($e = ao(
          je.prototype,
          "is_reset_trading_password_modal_visible",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          }
        )),
        (qe = ao(je.prototype, "is_chart_countdown_visible", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (Ge = ao(je.prototype, "is_chart_layout_default", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !0;
          },
        })),
        (Je = ao(je.prototype, "pwa_prompt_event", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return null;
          },
        })),
        (Qe = ao(je.prototype, "screen_width", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return window.innerWidth;
          },
        })),
        (Xe = ao(je.prototype, "screen_height", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return window.innerHeight;
          },
        })),
        (Ye = ao(je.prototype, "is_onscreen_keyboard_active", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (et = ao(je.prototype, "notifications", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return [];
          },
        })),
        (tt = ao(je.prototype, "notification_messages", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return [];
          },
        })),
        (ot = ao(je.prototype, "marked_notifications", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return [];
          },
        })),
        (rt = ao(je.prototype, "push_notifications", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return [];
          },
        })),
        (it = ao(je.prototype, "is_advanced_duration", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (nt = ao(je.prototype, "advanced_duration_unit", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return "t";
          },
        })),
        (at = ao(je.prototype, "advanced_expiry_type", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return "duration";
          },
        })),
        (st = ao(je.prototype, "simple_duration_unit", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return "t";
          },
        })),
        (ct = ao(je.prototype, "duration_t", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return 5;
          },
        })),
        (ut = ao(je.prototype, "duration_s", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return 15;
          },
        })),
        (pt = ao(je.prototype, "duration_m", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return 3;
          },
        })),
        (lt = ao(je.prototype, "duration_h", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return 1;
          },
        })),
        (bt = ao(je.prototype, "duration_d", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return 1;
          },
        })),
        (yt = ao(je.prototype, "purchase_states", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return [!1, !1];
          },
        })),
        (_t = ao(je.prototype, "is_app_disabled", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (ft = ao(je.prototype, "is_route_modal_on", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (dt = ao(je.prototype, "is_real_acc_signup_on", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (gt = ao(je.prototype, "real_account_signup_target", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {},
        })),
        (vt = ao(
          je.prototype,
          "has_real_account_signup_ended",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          }
        )),
        (ht = ao(
          je.prototype,
          "is_account_types_modal_visible",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          }
        )),
        (mt = ao(je.prototype, "is_welcome_modal_visible", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (wt = ao(
          je.prototype,
          "is_set_currency_modal_visible",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          }
        )),
        (Ot = ao(je.prototype, "show_positions_toggle", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !0;
          },
        })),
        (Pt = ao(je.prototype, "modal_index", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return 0;
          },
        })),
        (jt = ao(je.prototype, "is_top_up_virtual_open", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (kt = ao(
          je.prototype,
          "is_top_up_virtual_in_progress",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          }
        )),
        (Dt = ao(je.prototype, "is_top_up_virtual_success", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (zt = ao(
          je.prototype,
          "should_show_real_accounts_list",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return !1;
            },
          }
        )),
        (St = ao(je.prototype, "real_account_signup", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return {
              active_modal_index: -1,
              previous_currency: "",
              current_currency: "",
              success_message: "",
              error_message: "",
            };
          },
        })),
        (Mt = ao(je.prototype, "current_focus", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return null;
          },
        })),
        (At = ao(je.prototype, "toasts", [r], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return [];
          },
        })),
        (Rt = ao(je.prototype, "is_cfd_page", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (xt = ao(je.prototype, "is_nativepicker_visible", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (Tt = ao(je.prototype, "is_landscape", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (Nt = ao(je.prototype, "prompt_when", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (Et = ao(je.prototype, "promptFn", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return function () {};
          },
        })),
        (Ct = ao(je.prototype, "is_account_needed_modal_on", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return !1;
          },
        })),
        (Lt = ao(je.prototype, "account_needed_modal_props", [Ut.observable], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return { target: "", target_label: "", target_dmt5_label: "" };
          },
        })),
        (It = ao(
          je.prototype,
          "manage_real_account_tab_index",
          [Ut.observable],
          {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: function () {
              return 0;
            },
          }
        )),
        ao(
          je.prototype,
          "init",
          [i],
          Object.getOwnPropertyDescriptor(je.prototype, "init"),
          je.prototype
        ),
        ao(
          je.prototype,
          "populateFooterExtensions",
          [n],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "populateFooterExtensions"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "populateHeaderExtensions",
          [a],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "populateHeaderExtensions"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "populateSettingsExtensions",
          [s],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "populateSettingsExtensions"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "onChangeUiStore",
          [c],
          Object.getOwnPropertyDescriptor(je.prototype, "onChangeUiStore"),
          je.prototype
        ),
        ao(
          je.prototype,
          "handleResize",
          [u],
          Object.getOwnPropertyDescriptor(je.prototype, "handleResize"),
          je.prototype
        ),
        ao(
          je.prototype,
          "setPromptHandler",
          [p],
          Object.getOwnPropertyDescriptor(je.prototype, "setPromptHandler"),
          je.prototype
        ),
        ao(
          je.prototype,
          "is_mobile",
          [Ut.computed],
          Object.getOwnPropertyDescriptor(je.prototype, "is_mobile"),
          je.prototype
        ),
        ao(
          je.prototype,
          "is_tablet",
          [Ut.computed],
          Object.getOwnPropertyDescriptor(je.prototype, "is_tablet"),
          je.prototype
        ),
        ao(
          je.prototype,
          "is_account_switcher_disabled",
          [Ut.computed],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "is_account_switcher_disabled"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "filtered_notifications",
          [Ut.computed],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "filtered_notifications"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "filterNotificationMessages",
          [l],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "filterNotificationMessages"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "setRouteModal",
          [b],
          Object.getOwnPropertyDescriptor(je.prototype, "setRouteModal"),
          je.prototype
        ),
        ao(
          je.prototype,
          "disableRouteModal",
          [y],
          Object.getOwnPropertyDescriptor(je.prototype, "disableRouteModal"),
          je.prototype
        ),
        ao(
          je.prototype,
          "disableApp",
          [_],
          Object.getOwnPropertyDescriptor(je.prototype, "disableApp"),
          je.prototype
        ),
        ao(
          je.prototype,
          "enableApp",
          [f],
          Object.getOwnPropertyDescriptor(je.prototype, "enableApp"),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleAccountsDialog",
          [d],
          Object.getOwnPropertyDescriptor(je.prototype, "toggleAccountsDialog"),
          je.prototype
        ),
        ao(
          je.prototype,
          "setAccountSwitcherDisabledMessage",
          [g],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "setAccountSwitcherDisabledMessage"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "setPurchaseState",
          [v],
          Object.getOwnPropertyDescriptor(je.prototype, "setPurchaseState"),
          je.prototype
        ),
        ao(
          je.prototype,
          "resetPurchaseStates",
          [h],
          Object.getOwnPropertyDescriptor(je.prototype, "resetPurchaseStates"),
          je.prototype
        ),
        ao(
          je.prototype,
          "setChartLayout",
          [m],
          Object.getOwnPropertyDescriptor(je.prototype, "setChartLayout"),
          je.prototype
        ),
        ao(
          je.prototype,
          "setChartCountdown",
          [w],
          Object.getOwnPropertyDescriptor(je.prototype, "setChartCountdown"),
          je.prototype
        ),
        ao(
          je.prototype,
          "setDarkMode",
          [O],
          Object.getOwnPropertyDescriptor(je.prototype, "setDarkMode"),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleSetCurrencyModal",
          [P],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "toggleSetCurrencyModal"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleCashier",
          [j],
          Object.getOwnPropertyDescriptor(je.prototype, "toggleCashier"),
          je.prototype
        ),
        ao(
          je.prototype,
          "setModalIndex",
          [k],
          Object.getOwnPropertyDescriptor(je.prototype, "setModalIndex"),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleSettingsModal",
          [D],
          Object.getOwnPropertyDescriptor(je.prototype, "toggleSettingsModal"),
          je.prototype
        ),
        ao(
          je.prototype,
          "openPositionsDrawer",
          [z],
          Object.getOwnPropertyDescriptor(je.prototype, "openPositionsDrawer"),
          je.prototype
        ),
        ao(
          je.prototype,
          "openRealAccountSignup",
          [S],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "openRealAccountSignup"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "setManageRealAccountActiveTabIndex",
          [M],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "setManageRealAccountActiveTabIndex"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "closeRealAccountSignup",
          [A],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "closeRealAccountSignup"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "openAccountNeededModal",
          [R],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "openAccountNeededModal"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "closeAccountNeededModal",
          [x],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "closeAccountNeededModal"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "togglePositionsDrawer",
          [T],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "togglePositionsDrawer"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleNotificationsModal",
          [N],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "toggleNotificationsModal"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleAccountSettings",
          [E],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "toggleAccountSettings"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleReports",
          [C],
          Object.getOwnPropertyDescriptor(je.prototype, "toggleReports"),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleServicesErrorModal",
          [L],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "toggleServicesErrorModal"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "removePWAPromptEvent",
          [I],
          Object.getOwnPropertyDescriptor(je.prototype, "removePWAPromptEvent"),
          je.prototype
        ),
        ao(
          je.prototype,
          "setPWAPromptEvent",
          [B],
          Object.getOwnPropertyDescriptor(je.prototype, "setPWAPromptEvent"),
          je.prototype
        ),
        ao(
          je.prototype,
          "updateNotifications",
          [U],
          Object.getOwnPropertyDescriptor(je.prototype, "updateNotifications"),
          je.prototype
        ),
        ao(
          je.prototype,
          "removeNotifications",
          [W],
          Object.getOwnPropertyDescriptor(je.prototype, "removeNotifications"),
          je.prototype
        ),
        ao(
          je.prototype,
          "removeNotificationByKey",
          [H],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "removeNotificationByKey"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "removeNotificationMessageByKey",
          [F],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "removeNotificationMessageByKey"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "addNotificationMessageByKey",
          [K],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "addNotificationMessageByKey"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "markNotificationMessage",
          [V],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "markNotificationMessage"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "addNotificationMessage",
          [Z],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "addNotificationMessage"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "removeNotificationMessage",
          [$],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "removeNotificationMessage"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "removeAllNotificationMessages",
          [q],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "removeAllNotificationMessages"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "setHasOnlyForwardingContracts",
          [G],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "setHasOnlyForwardingContracts"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "addNotificationBar",
          [J],
          Object.getOwnPropertyDescriptor(je.prototype, "addNotificationBar"),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleUnsupportedContractModal",
          [Q],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "toggleUnsupportedContractModal"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleAccountSignupModal",
          [X],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "toggleAccountSignupModal"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleSetResidenceModal",
          [Y],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "toggleSetResidenceModal"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleCancellationWarning",
          [ee],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "toggleCancellationWarning"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleHistoryTab",
          [te],
          Object.getOwnPropertyDescriptor(je.prototype, "toggleHistoryTab"),
          je.prototype
        ),
        ao(
          je.prototype,
          "setTopUpInProgress",
          [oe],
          Object.getOwnPropertyDescriptor(je.prototype, "setTopUpInProgress"),
          je.prototype
        ),
        ao(
          je.prototype,
          "closeTopUpModal",
          [re],
          Object.getOwnPropertyDescriptor(je.prototype, "closeTopUpModal"),
          je.prototype
        ),
        ao(
          je.prototype,
          "openTopUpModal",
          [ie],
          Object.getOwnPropertyDescriptor(je.prototype, "openTopUpModal"),
          je.prototype
        ),
        ao(
          je.prototype,
          "closeSuccessTopUpModal",
          [ne],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "closeSuccessTopUpModal"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleResetPasswordModal",
          [ae],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "toggleResetPasswordModal"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "setResetTradingPasswordModalOpen",
          [se],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "setResetTradingPasswordModalOpen"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "setRealAccountSignupParams",
          [ce],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "setRealAccountSignupParams"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "setRealAccountSignupEnd",
          [ue],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "setRealAccountSignupEnd"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "resetRealAccountSignupParams",
          [pe],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "resetRealAccountSignupParams"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "onOrientationChange",
          [le],
          Object.getOwnPropertyDescriptor(je.prototype, "onOrientationChange"),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleOnScreenKeyboard",
          [be],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "toggleOnScreenKeyboard"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "setCurrentFocus",
          [ye],
          Object.getOwnPropertyDescriptor(je.prototype, "setCurrentFocus"),
          je.prototype
        ),
        ao(
          je.prototype,
          "addToast",
          [_e],
          Object.getOwnPropertyDescriptor(je.prototype, "addToast"),
          je.prototype
        ),
        ao(
          je.prototype,
          "removeToast",
          [fe],
          Object.getOwnPropertyDescriptor(je.prototype, "removeToast"),
          je.prototype
        ),
        ao(
          je.prototype,
          "setIsNativepickerVisible",
          [de],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "setIsNativepickerVisible"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "setReportsTabIndex",
          [ge],
          Object.getOwnPropertyDescriptor(je.prototype, "setReportsTabIndex"),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleAccountTypesModal",
          [ve],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "toggleAccountTypesModal"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleWelcomeModal",
          [he],
          Object.getOwnPropertyDescriptor(je.prototype, "toggleWelcomeModal"),
          je.prototype
        ),
        ao(
          je.prototype,
          "showAccountTypesModalForEuropean",
          [me],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "showAccountTypesModalForEuropean"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "notifyAppInstall",
          [we],
          Object.getOwnPropertyDescriptor(je.prototype, "notifyAppInstall"),
          je.prototype
        ),
        ao(
          je.prototype,
          "installWithDeferredPrompt",
          [Oe],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "installWithDeferredPrompt"
          ),
          je.prototype
        ),
        ao(
          je.prototype,
          "toggleShouldShowRealAccountsList",
          [Pe],
          Object.getOwnPropertyDescriptor(
            je.prototype,
            "toggleShouldShowRealAccountsList"
          ),
          je.prototype
        ),
        je);
    },
  },
]);
