(self["webpackChunkyoyo_friends"] =
  self["webpackChunkyoyo_friends"] || []).push([
  [221],
  {
    2722: function (t, e, r) {
      r(1703),
        (function (e, n) {
          t.exports = n(r(6866));
        })("undefined" !== typeof self && self, function (t) {
          return (function (t) {
            var e = {};
            function r(n) {
              if (e[n]) return e[n].exports;
              var o = (e[n] = { i: n, l: !1, exports: {} });
              return (
                t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
              );
            }
            return (
              (r.m = t),
              (r.c = e),
              (r.d = function (t, e, n) {
                r.o(t, e) ||
                  Object.defineProperty(t, e, { enumerable: !0, get: n });
              }),
              (r.r = function (t) {
                "undefined" !== typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(t, "__esModule", { value: !0 });
              }),
              (r.t = function (t, e) {
                if ((1 & e && (t = r(t)), 8 & e)) return t;
                if (4 & e && "object" === typeof t && t && t.__esModule)
                  return t;
                var n = Object.create(null);
                if (
                  (r.r(n),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t,
                  }),
                  2 & e && "string" != typeof t)
                )
                  for (var o in t)
                    r.d(
                      n,
                      o,
                      function (e) {
                        return t[e];
                      }.bind(null, o)
                    );
                return n;
              }),
              (r.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t["default"];
                      }
                    : function () {
                        return t;
                      };
                return r.d(e, "a", e), e;
              }),
              (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (r.p = ""),
              r((r.s = "fb15"))
            );
          })({
            "00ee": function (t, e, r) {
              var n = r("b622"),
                o = n("toStringTag"),
                i = {};
              (i[o] = "z"), (t.exports = "[object z]" === String(i));
            },
            "0366": function (t, e, r) {
              var n = r("1c0b");
              t.exports = function (t, e, r) {
                if ((n(t), void 0 === e)) return t;
                switch (r) {
                  case 0:
                    return function () {
                      return t.call(e);
                    };
                  case 1:
                    return function (r) {
                      return t.call(e, r);
                    };
                  case 2:
                    return function (r, n) {
                      return t.call(e, r, n);
                    };
                  case 3:
                    return function (r, n, o) {
                      return t.call(e, r, n, o);
                    };
                }
                return function () {
                  return t.apply(e, arguments);
                };
              };
            },
            "06cf": function (t, e, r) {
              var n = r("83ab"),
                o = r("d1e7"),
                i = r("5c6c"),
                c = r("fc6a"),
                u = r("c04e"),
                a = r("5135"),
                s = r("0cfb"),
                f = Object.getOwnPropertyDescriptor;
              e.f = n
                ? f
                : function (t, e) {
                    if (((t = c(t)), (e = u(e, !0)), s))
                      try {
                        return f(t, e);
                      } catch (r) {}
                    if (a(t, e)) return i(!o.f.call(t, e), t[e]);
                  };
            },
            "0cfb": function (t, e, r) {
              var n = r("83ab"),
                o = r("d039"),
                i = r("cc12");
              t.exports =
                !n &&
                !o(function () {
                  return (
                    7 !=
                    Object.defineProperty(i("div"), "a", {
                      get: function () {
                        return 7;
                      },
                    }).a
                  );
                });
            },
            "159b": function (t, e, r) {
              var n = r("da84"),
                o = r("fdbc"),
                i = r("17c2"),
                c = r("9112");
              for (var u in o) {
                var a = n[u],
                  s = a && a.prototype;
                if (s && s.forEach !== i)
                  try {
                    c(s, "forEach", i);
                  } catch (f) {
                    s.forEach = i;
                  }
              }
            },
            "17c2": function (t, e, r) {
              "use strict";
              var n = r("b727").forEach,
                o = r("a640"),
                i = r("ae40"),
                c = o("forEach"),
                u = i("forEach");
              t.exports =
                c && u
                  ? [].forEach
                  : function (t) {
                      return n(
                        this,
                        t,
                        arguments.length > 1 ? arguments[1] : void 0
                      );
                    };
            },
            "19aa": function (t, e) {
              t.exports = function (t, e, r) {
                if (!(t instanceof e))
                  throw TypeError(
                    "Incorrect " + (r ? r + " " : "") + "invocation"
                  );
                return t;
              };
            },
            "1be4": function (t, e, r) {
              var n = r("d066");
              t.exports = n("document", "documentElement");
            },
            "1c0b": function (t, e) {
              t.exports = function (t) {
                if ("function" != typeof t)
                  throw TypeError(String(t) + " is not a function");
                return t;
              };
            },
            "1c7e": function (t, e, r) {
              var n = r("b622"),
                o = n("iterator"),
                i = !1;
              try {
                var c = 0,
                  u = {
                    next: function () {
                      return { done: !!c++ };
                    },
                    return: function () {
                      i = !0;
                    },
                  };
                (u[o] = function () {
                  return this;
                }),
                  Array.from(u, function () {
                    throw 2;
                  });
              } catch (a) {}
              t.exports = function (t, e) {
                if (!e && !i) return !1;
                var r = !1;
                try {
                  var n = {};
                  (n[o] = function () {
                    return {
                      next: function () {
                        return { done: (r = !0) };
                      },
                    };
                  }),
                    t(n);
                } catch (a) {}
                return r;
              };
            },
            "1cdc": function (t, e, r) {
              var n = r("342f");
              t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(n);
            },
            "1d80": function (t, e) {
              t.exports = function (t) {
                if (void 0 == t) throw TypeError("Can't call method on " + t);
                return t;
              };
            },
            2266: function (t, e, r) {
              var n = r("825a"),
                o = r("e95a"),
                i = r("50c4"),
                c = r("0366"),
                u = r("35a1"),
                a = r("9bdd"),
                s = function (t, e) {
                  (this.stopped = t), (this.result = e);
                },
                f = (t.exports = function (t, e, r, f, p) {
                  var l,
                    d,
                    y,
                    b,
                    h,
                    m,
                    v,
                    O = c(e, r, f ? 2 : 1);
                  if (p) l = t;
                  else {
                    if (((d = u(t)), "function" != typeof d))
                      throw TypeError("Target is not iterable");
                    if (o(d)) {
                      for (y = 0, b = i(t.length); b > y; y++)
                        if (
                          ((h = f ? O(n((v = t[y]))[0], v[1]) : O(t[y])),
                          h && h instanceof s)
                        )
                          return h;
                      return new s(!1);
                    }
                    l = d.call(t);
                  }
                  m = l.next;
                  while (!(v = m.call(l)).done)
                    if (
                      ((h = a(l, O, v.value, f)),
                      "object" == typeof h && h && h instanceof s)
                    )
                      return h;
                  return new s(!1);
                });
              f.stop = function (t) {
                return new s(!0, t);
              };
            },
            "23cb": function (t, e, r) {
              var n = r("a691"),
                o = Math.max,
                i = Math.min;
              t.exports = function (t, e) {
                var r = n(t);
                return r < 0 ? o(r + e, 0) : i(r, e);
              };
            },
            "23e7": function (t, e, r) {
              var n = r("da84"),
                o = r("06cf").f,
                i = r("9112"),
                c = r("6eeb"),
                u = r("ce4e"),
                a = r("e893"),
                s = r("94ca");
              t.exports = function (t, e) {
                var r,
                  f,
                  p,
                  l,
                  d,
                  y,
                  b = t.target,
                  h = t.global,
                  m = t.stat;
                if (
                  ((f = h ? n : m ? n[b] || u(b, {}) : (n[b] || {}).prototype),
                  f)
                )
                  for (p in e) {
                    if (
                      ((d = e[p]),
                      t.noTargetGet
                        ? ((y = o(f, p)), (l = y && y.value))
                        : (l = f[p]),
                      (r = s(h ? p : b + (m ? "." : "#") + p, t.forced)),
                      !r && void 0 !== l)
                    ) {
                      if (typeof d === typeof l) continue;
                      a(d, l);
                    }
                    (t.sham || (l && l.sham)) && i(d, "sham", !0),
                      c(f, p, d, t);
                  }
              };
            },
            "241c": function (t, e, r) {
              var n = r("ca84"),
                o = r("7839"),
                i = o.concat("length", "prototype");
              e.f =
                Object.getOwnPropertyNames ||
                function (t) {
                  return n(t, i);
                };
            },
            2626: function (t, e, r) {
              "use strict";
              var n = r("d066"),
                o = r("9bf2"),
                i = r("b622"),
                c = r("83ab"),
                u = i("species");
              t.exports = function (t) {
                var e = n(t),
                  r = o.f;
                c &&
                  e &&
                  !e[u] &&
                  r(e, u, {
                    configurable: !0,
                    get: function () {
                      return this;
                    },
                  });
              };
            },
            "2cf4": function (t, e, r) {
              var n,
                o,
                i,
                c = r("da84"),
                u = r("d039"),
                a = r("c6b6"),
                s = r("0366"),
                f = r("1be4"),
                p = r("cc12"),
                l = r("1cdc"),
                d = c.location,
                y = c.setImmediate,
                b = c.clearImmediate,
                h = c.process,
                m = c.MessageChannel,
                v = c.Dispatch,
                O = 0,
                g = {},
                w = "onreadystatechange",
                j = function (t) {
                  if (g.hasOwnProperty(t)) {
                    var e = g[t];
                    delete g[t], e();
                  }
                },
                P = function (t) {
                  return function () {
                    j(t);
                  };
                },
                S = function (t) {
                  j(t.data);
                },
                x = function (t) {
                  c.postMessage(t + "", d.protocol + "//" + d.host);
                };
              (y && b) ||
                ((y = function (t) {
                  var e = [],
                    r = 1;
                  while (arguments.length > r) e.push(arguments[r++]);
                  return (
                    (g[++O] = function () {
                      ("function" == typeof t ? t : Function(t)).apply(
                        void 0,
                        e
                      );
                    }),
                    n(O),
                    O
                  );
                }),
                (b = function (t) {
                  delete g[t];
                }),
                "process" == a(h)
                  ? (n = function (t) {
                      h.nextTick(P(t));
                    })
                  : v && v.now
                  ? (n = function (t) {
                      v.now(P(t));
                    })
                  : m && !l
                  ? ((o = new m()),
                    (i = o.port2),
                    (o.port1.onmessage = S),
                    (n = s(i.postMessage, i, 1)))
                  : !c.addEventListener ||
                    "function" != typeof postMessage ||
                    c.importScripts ||
                    u(x) ||
                    "file:" === d.protocol
                  ? (n =
                      w in p("script")
                        ? function (t) {
                            f.appendChild(p("script"))[w] = function () {
                              f.removeChild(this), j(t);
                            };
                          }
                        : function (t) {
                            setTimeout(P(t), 0);
                          })
                  : ((n = x), c.addEventListener("message", S, !1))),
                (t.exports = { set: y, clear: b });
            },
            "2d00": function (t, e, r) {
              var n,
                o,
                i = r("da84"),
                c = r("342f"),
                u = i.process,
                a = u && u.versions,
                s = a && a.v8;
              s
                ? ((n = s.split(".")), (o = n[0] + n[1]))
                : c &&
                  ((n = c.match(/Edge\/(\d+)/)),
                  (!n || n[1] >= 74) &&
                    ((n = c.match(/Chrome\/(\d+)/)), n && (o = n[1]))),
                (t.exports = o && +o);
            },
            "342f": function (t, e, r) {
              var n = r("d066");
              t.exports = n("navigator", "userAgent") || "";
            },
            "35a1": function (t, e, r) {
              var n = r("f5df"),
                o = r("3f8c"),
                i = r("b622"),
                c = i("iterator");
              t.exports = function (t) {
                if (void 0 != t) return t[c] || t["@@iterator"] || o[n(t)];
              };
            },
            "37e8": function (t, e, r) {
              var n = r("83ab"),
                o = r("9bf2"),
                i = r("825a"),
                c = r("df75");
              t.exports = n
                ? Object.defineProperties
                : function (t, e) {
                    i(t);
                    var r,
                      n = c(e),
                      u = n.length,
                      a = 0;
                    while (u > a) o.f(t, (r = n[a++]), e[r]);
                    return t;
                  };
            },
            "3bbe": function (t, e, r) {
              var n = r("861d");
              t.exports = function (t) {
                if (!n(t) && null !== t)
                  throw TypeError("Can't set " + String(t) + " as a prototype");
                return t;
              };
            },
            "3f8c": function (t, e) {
              t.exports = {};
            },
            4160: function (t, e, r) {
              "use strict";
              var n = r("23e7"),
                o = r("17c2");
              n(
                { target: "Array", proto: !0, forced: [].forEach != o },
                { forEach: o }
              );
            },
            "428f": function (t, e, r) {
              var n = r("da84");
              t.exports = n;
            },
            "44ad": function (t, e, r) {
              var n = r("d039"),
                o = r("c6b6"),
                i = "".split;
              t.exports = n(function () {
                return !Object("z").propertyIsEnumerable(0);
              })
                ? function (t) {
                    return "String" == o(t) ? i.call(t, "") : Object(t);
                  }
                : Object;
            },
            "44de": function (t, e, r) {
              var n = r("da84");
              t.exports = function (t, e) {
                var r = n.console;
                r &&
                  r.error &&
                  (1 === arguments.length ? r.error(t) : r.error(t, e));
              };
            },
            4840: function (t, e, r) {
              var n = r("825a"),
                o = r("1c0b"),
                i = r("b622"),
                c = i("species");
              t.exports = function (t, e) {
                var r,
                  i = n(t).constructor;
                return void 0 === i || void 0 == (r = n(i)[c]) ? e : o(r);
              };
            },
            4930: function (t, e, r) {
              var n = r("d039");
              t.exports =
                !!Object.getOwnPropertySymbols &&
                !n(function () {
                  return !String(Symbol());
                });
            },
            "4d64": function (t, e, r) {
              var n = r("fc6a"),
                o = r("50c4"),
                i = r("23cb"),
                c = function (t) {
                  return function (e, r, c) {
                    var u,
                      a = n(e),
                      s = o(a.length),
                      f = i(c, s);
                    if (t && r != r) {
                      while (s > f) if (((u = a[f++]), u != u)) return !0;
                    } else
                      for (; s > f; f++)
                        if ((t || f in a) && a[f] === r) return t || f || 0;
                    return !t && -1;
                  };
                };
              t.exports = { includes: c(!0), indexOf: c(!1) };
            },
            "50c4": function (t, e, r) {
              var n = r("a691"),
                o = Math.min;
              t.exports = function (t) {
                return t > 0 ? o(n(t), 9007199254740991) : 0;
              };
            },
            5135: function (t, e) {
              var r = {}.hasOwnProperty;
              t.exports = function (t, e) {
                return r.call(t, e);
              };
            },
            5692: function (t, e, r) {
              var n = r("c430"),
                o = r("c6cd");
              (t.exports = function (t, e) {
                return o[t] || (o[t] = void 0 !== e ? e : {});
              })("versions", []).push({
                version: "3.6.5",
                mode: n ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
              });
            },
            "56ef": function (t, e, r) {
              var n = r("d066"),
                o = r("241c"),
                i = r("7418"),
                c = r("825a");
              t.exports =
                n("Reflect", "ownKeys") ||
                function (t) {
                  var e = o.f(c(t)),
                    r = i.f;
                  return r ? e.concat(r(t)) : e;
                };
            },
            5899: function (t, e) {
              t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
            },
            "58a8": function (t, e, r) {
              var n = r("1d80"),
                o = r("5899"),
                i = "[" + o + "]",
                c = RegExp("^" + i + i + "*"),
                u = RegExp(i + i + "*$"),
                a = function (t) {
                  return function (e) {
                    var r = String(n(e));
                    return (
                      1 & t && (r = r.replace(c, "")),
                      2 & t && (r = r.replace(u, "")),
                      r
                    );
                  };
                };
              t.exports = { start: a(1), end: a(2), trim: a(3) };
            },
            "5c6c": function (t, e) {
              t.exports = function (t, e) {
                return {
                  enumerable: !(1 & t),
                  configurable: !(2 & t),
                  writable: !(4 & t),
                  value: e,
                };
              };
            },
            "65f0": function (t, e, r) {
              var n = r("861d"),
                o = r("e8b5"),
                i = r("b622"),
                c = i("species");
              t.exports = function (t, e) {
                var r;
                return (
                  o(t) &&
                    ((r = t.constructor),
                    "function" != typeof r || (r !== Array && !o(r.prototype))
                      ? n(r) && ((r = r[c]), null === r && (r = void 0))
                      : (r = void 0)),
                  new (void 0 === r ? Array : r)(0 === e ? 0 : e)
                );
              };
            },
            "69f3": function (t, e, r) {
              var n,
                o,
                i,
                c = r("7f9a"),
                u = r("da84"),
                a = r("861d"),
                s = r("9112"),
                f = r("5135"),
                p = r("f772"),
                l = r("d012"),
                d = u.WeakMap,
                y = function (t) {
                  return i(t) ? o(t) : n(t, {});
                },
                b = function (t) {
                  return function (e) {
                    var r;
                    if (!a(e) || (r = o(e)).type !== t)
                      throw TypeError(
                        "Incompatible receiver, " + t + " required"
                      );
                    return r;
                  };
                };
              if (c) {
                var h = new d(),
                  m = h.get,
                  v = h.has,
                  O = h.set;
                (n = function (t, e) {
                  return O.call(h, t, e), e;
                }),
                  (o = function (t) {
                    return m.call(h, t) || {};
                  }),
                  (i = function (t) {
                    return v.call(h, t);
                  });
              } else {
                var g = p("state");
                (l[g] = !0),
                  (n = function (t, e) {
                    return s(t, g, e), e;
                  }),
                  (o = function (t) {
                    return f(t, g) ? t[g] : {};
                  }),
                  (i = function (t) {
                    return f(t, g);
                  });
              }
              t.exports = { set: n, get: o, has: i, enforce: y, getterFor: b };
            },
            "6eeb": function (t, e, r) {
              var n = r("da84"),
                o = r("9112"),
                i = r("5135"),
                c = r("ce4e"),
                u = r("8925"),
                a = r("69f3"),
                s = a.get,
                f = a.enforce,
                p = String(String).split("String");
              (t.exports = function (t, e, r, u) {
                var a = !!u && !!u.unsafe,
                  s = !!u && !!u.enumerable,
                  l = !!u && !!u.noTargetGet;
                "function" == typeof r &&
                  ("string" != typeof e || i(r, "name") || o(r, "name", e),
                  (f(r).source = p.join("string" == typeof e ? e : ""))),
                  t !== n
                    ? (a ? !l && t[e] && (s = !0) : delete t[e],
                      s ? (t[e] = r) : o(t, e, r))
                    : s
                    ? (t[e] = r)
                    : c(e, r);
              })(Function.prototype, "toString", function () {
                return ("function" == typeof this && s(this).source) || u(this);
              });
            },
            7156: function (t, e, r) {
              var n = r("861d"),
                o = r("d2bb");
              t.exports = function (t, e, r) {
                var i, c;
                return (
                  o &&
                    "function" == typeof (i = e.constructor) &&
                    i !== r &&
                    n((c = i.prototype)) &&
                    c !== r.prototype &&
                    o(t, c),
                  t
                );
              };
            },
            7418: function (t, e) {
              e.f = Object.getOwnPropertySymbols;
            },
            7839: function (t, e) {
              t.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf",
              ];
            },
            "7b0b": function (t, e, r) {
              var n = r("1d80");
              t.exports = function (t) {
                return Object(n(t));
              };
            },
            "7c73": function (t, e, r) {
              var n,
                o = r("825a"),
                i = r("37e8"),
                c = r("7839"),
                u = r("d012"),
                a = r("1be4"),
                s = r("cc12"),
                f = r("f772"),
                p = ">",
                l = "<",
                d = "prototype",
                y = "script",
                b = f("IE_PROTO"),
                h = function () {},
                m = function (t) {
                  return l + y + p + t + l + "/" + y + p;
                },
                v = function (t) {
                  t.write(m("")), t.close();
                  var e = t.parentWindow.Object;
                  return (t = null), e;
                },
                O = function () {
                  var t,
                    e = s("iframe"),
                    r = "java" + y + ":";
                  return (
                    (e.style.display = "none"),
                    a.appendChild(e),
                    (e.src = String(r)),
                    (t = e.contentWindow.document),
                    t.open(),
                    t.write(m("document.F=Object")),
                    t.close(),
                    t.F
                  );
                },
                g = function () {
                  try {
                    n = document.domain && new ActiveXObject("htmlfile");
                  } catch (e) {}
                  g = n ? v(n) : O();
                  var t = c.length;
                  while (t--) delete g[d][c[t]];
                  return g();
                };
              (u[b] = !0),
                (t.exports =
                  Object.create ||
                  function (t, e) {
                    var r;
                    return (
                      null !== t
                        ? ((h[d] = o(t)),
                          (r = new h()),
                          (h[d] = null),
                          (r[b] = t))
                        : (r = g()),
                      void 0 === e ? r : i(r, e)
                    );
                  });
            },
            "7f9a": function (t, e, r) {
              var n = r("da84"),
                o = r("8925"),
                i = n.WeakMap;
              t.exports = "function" === typeof i && /native code/.test(o(i));
            },
            "825a": function (t, e, r) {
              var n = r("861d");
              t.exports = function (t) {
                if (!n(t)) throw TypeError(String(t) + " is not an object");
                return t;
              };
            },
            "83ab": function (t, e, r) {
              var n = r("d039");
              t.exports = !n(function () {
                return (
                  7 !=
                  Object.defineProperty({}, 1, {
                    get: function () {
                      return 7;
                    },
                  })[1]
                );
              });
            },
            "861d": function (t, e) {
              t.exports = function (t) {
                return "object" === typeof t
                  ? null !== t
                  : "function" === typeof t;
              };
            },
            8875: function (t, e, r) {
              var n, o, i;
              (function (r, c) {
                (o = []),
                  (n = c),
                  (i = "function" === typeof n ? n.apply(e, o) : n),
                  void 0 === i || (t.exports = i);
              })("undefined" !== typeof self && self, function () {
                function t() {
                  var e = Object.getOwnPropertyDescriptor(
                    document,
                    "currentScript"
                  );
                  if (
                    !e &&
                    "currentScript" in document &&
                    document.currentScript
                  )
                    return document.currentScript;
                  if (e && e.get !== t && document.currentScript)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (d) {
                    var r,
                      n,
                      o,
                      i = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
                      c = /@([^@]*):(\d+):(\d+)\s*$/gi,
                      u = i.exec(d.stack) || c.exec(d.stack),
                      a = (u && u[1]) || !1,
                      s = (u && u[2]) || !1,
                      f = document.location.href.replace(
                        document.location.hash,
                        ""
                      ),
                      p = document.getElementsByTagName("script");
                    a === f &&
                      ((r = document.documentElement.outerHTML),
                      (n = new RegExp(
                        "(?:[^\\n]+?\\n){0," +
                          (s - 2) +
                          "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                        "i"
                      )),
                      (o = r.replace(n, "$1").trim()));
                    for (var l = 0; l < p.length; l++) {
                      if ("interactive" === p[l].readyState) return p[l];
                      if (p[l].src === a) return p[l];
                      if (
                        a === f &&
                        p[l].innerHTML &&
                        p[l].innerHTML.trim() === o
                      )
                        return p[l];
                    }
                    return null;
                  }
                }
                return t;
              });
            },
            8925: function (t, e, r) {
              var n = r("c6cd"),
                o = Function.toString;
              "function" != typeof n.inspectSource &&
                (n.inspectSource = function (t) {
                  return o.call(t);
                }),
                (t.exports = n.inspectSource);
            },
            "8bbf": function (e, r) {
              e.exports = t;
            },
            "90e3": function (t, e) {
              var r = 0,
                n = Math.random();
              t.exports = function (t) {
                return (
                  "Symbol(" +
                  String(void 0 === t ? "" : t) +
                  ")_" +
                  (++r + n).toString(36)
                );
              };
            },
            9112: function (t, e, r) {
              var n = r("83ab"),
                o = r("9bf2"),
                i = r("5c6c");
              t.exports = n
                ? function (t, e, r) {
                    return o.f(t, e, i(1, r));
                  }
                : function (t, e, r) {
                    return (t[e] = r), t;
                  };
            },
            "94ca": function (t, e, r) {
              var n = r("d039"),
                o = /#|\.prototype\./,
                i = function (t, e) {
                  var r = u[c(t)];
                  return (
                    r == s || (r != a && ("function" == typeof e ? n(e) : !!e))
                  );
                },
                c = (i.normalize = function (t) {
                  return String(t).replace(o, ".").toLowerCase();
                }),
                u = (i.data = {}),
                a = (i.NATIVE = "N"),
                s = (i.POLYFILL = "P");
              t.exports = i;
            },
            "9bdd": function (t, e, r) {
              var n = r("825a");
              t.exports = function (t, e, r, o) {
                try {
                  return o ? e(n(r)[0], r[1]) : e(r);
                } catch (c) {
                  var i = t["return"];
                  throw (void 0 !== i && n(i.call(t)), c);
                }
              };
            },
            "9bf2": function (t, e, r) {
              var n = r("83ab"),
                o = r("0cfb"),
                i = r("825a"),
                c = r("c04e"),
                u = Object.defineProperty;
              e.f = n
                ? u
                : function (t, e, r) {
                    if ((i(t), (e = c(e, !0)), i(r), o))
                      try {
                        return u(t, e, r);
                      } catch (n) {}
                    if ("get" in r || "set" in r)
                      throw TypeError("Accessors not supported");
                    return "value" in r && (t[e] = r.value), t;
                  };
            },
            "9fab": function (t, e, r) {
              (function (e, r) {
                t.exports = r();
              })(0, function (t) {
                return function (t, e) {
                  if (
                    (void 0 == e && (e = { fuzzy: !0 }), /youtu\.?be/.test(t))
                  ) {
                    var r,
                      n = [
                        /youtu\.be\/([^#\&\?]{11})/,
                        /\?v=([^#\&\?]{11})/,
                        /\&v=([^#\&\?]{11})/,
                        /embed\/([^#\&\?]{11})/,
                        /\/v\/([^#\&\?]{11})/,
                      ];
                    for (r = 0; r < n.length; ++r)
                      if (n[r].test(t)) return n[r].exec(t)[1];
                    if (e.fuzzy) {
                      var o = t.split(/[\/\&\?=#\.\s]/g);
                      for (r = 0; r < o.length; ++r)
                        if (/^[^#\&\?]{11}$/.test(o[r])) return o[r];
                    }
                  }
                  return null;
                };
              });
            },
            a640: function (t, e, r) {
              "use strict";
              var n = r("d039");
              t.exports = function (t, e) {
                var r = [][t];
                return (
                  !!r &&
                  n(function () {
                    r.call(
                      null,
                      e ||
                        function () {
                          throw 1;
                        },
                      1
                    );
                  })
                );
              };
            },
            a691: function (t, e) {
              var r = Math.ceil,
                n = Math.floor;
              t.exports = function (t) {
                return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
              };
            },
            a9e3: function (t, e, r) {
              "use strict";
              var n = r("83ab"),
                o = r("da84"),
                i = r("94ca"),
                c = r("6eeb"),
                u = r("5135"),
                a = r("c6b6"),
                s = r("7156"),
                f = r("c04e"),
                p = r("d039"),
                l = r("7c73"),
                d = r("241c").f,
                y = r("06cf").f,
                b = r("9bf2").f,
                h = r("58a8").trim,
                m = "Number",
                v = o[m],
                O = v.prototype,
                g = a(l(O)) == m,
                w = function (t) {
                  var e,
                    r,
                    n,
                    o,
                    i,
                    c,
                    u,
                    a,
                    s = f(t, !1);
                  if ("string" == typeof s && s.length > 2)
                    if (
                      ((s = h(s)), (e = s.charCodeAt(0)), 43 === e || 45 === e)
                    ) {
                      if (((r = s.charCodeAt(2)), 88 === r || 120 === r))
                        return NaN;
                    } else if (48 === e) {
                      switch (s.charCodeAt(1)) {
                        case 66:
                        case 98:
                          (n = 2), (o = 49);
                          break;
                        case 79:
                        case 111:
                          (n = 8), (o = 55);
                          break;
                        default:
                          return +s;
                      }
                      for (i = s.slice(2), c = i.length, u = 0; u < c; u++)
                        if (((a = i.charCodeAt(u)), a < 48 || a > o))
                          return NaN;
                      return parseInt(i, n);
                    }
                  return +s;
                };
              if (i(m, !v(" 0o1") || !v("0b1") || v("+0x1"))) {
                for (
                  var j,
                    P = function (t) {
                      var e = arguments.length < 1 ? 0 : t,
                        r = this;
                      return r instanceof P &&
                        (g
                          ? p(function () {
                              O.valueOf.call(r);
                            })
                          : a(r) != m)
                        ? s(new v(w(e)), r, P)
                        : w(e);
                    },
                    S = n
                      ? d(v)
                      : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                          ","
                        ),
                    x = 0;
                  S.length > x;
                  x++
                )
                  u(v, (j = S[x])) && !u(P, j) && b(P, j, y(v, j));
                (P.prototype = O), (O.constructor = P), c(o, m, P);
              }
            },
            ae40: function (t, e, r) {
              var n = r("83ab"),
                o = r("d039"),
                i = r("5135"),
                c = Object.defineProperty,
                u = {},
                a = function (t) {
                  throw t;
                };
              t.exports = function (t, e) {
                if (i(u, t)) return u[t];
                e || (e = {});
                var r = [][t],
                  s = !!i(e, "ACCESSORS") && e.ACCESSORS,
                  f = i(e, 0) ? e[0] : a,
                  p = i(e, 1) ? e[1] : void 0;
                return (u[t] =
                  !!r &&
                  !o(function () {
                    if (s && !n) return !0;
                    var t = { length: -1 };
                    s ? c(t, 1, { enumerable: !0, get: a }) : (t[1] = 1),
                      r.call(t, f, p);
                  }));
              };
            },
            b041: function (t, e, r) {
              "use strict";
              var n = r("00ee"),
                o = r("f5df");
              t.exports = n
                ? {}.toString
                : function () {
                    return "[object " + o(this) + "]";
                  };
            },
            b575: function (t, e, r) {
              var n,
                o,
                i,
                c,
                u,
                a,
                s,
                f,
                p = r("da84"),
                l = r("06cf").f,
                d = r("c6b6"),
                y = r("2cf4").set,
                b = r("1cdc"),
                h = p.MutationObserver || p.WebKitMutationObserver,
                m = p.process,
                v = p.Promise,
                O = "process" == d(m),
                g = l(p, "queueMicrotask"),
                w = g && g.value;
              w ||
                ((n = function () {
                  var t, e;
                  O && (t = m.domain) && t.exit();
                  while (o) {
                    (e = o.fn), (o = o.next);
                    try {
                      e();
                    } catch (r) {
                      throw (o ? c() : (i = void 0), r);
                    }
                  }
                  (i = void 0), t && t.enter();
                }),
                O
                  ? (c = function () {
                      m.nextTick(n);
                    })
                  : h && !b
                  ? ((u = !0),
                    (a = document.createTextNode("")),
                    new h(n).observe(a, { characterData: !0 }),
                    (c = function () {
                      a.data = u = !u;
                    }))
                  : v && v.resolve
                  ? ((s = v.resolve(void 0)),
                    (f = s.then),
                    (c = function () {
                      f.call(s, n);
                    }))
                  : (c = function () {
                      y.call(p, n);
                    })),
                (t.exports =
                  w ||
                  function (t) {
                    var e = { fn: t, next: void 0 };
                    i && (i.next = e), o || ((o = e), c()), (i = e);
                  });
            },
            b622: function (t, e, r) {
              var n = r("da84"),
                o = r("5692"),
                i = r("5135"),
                c = r("90e3"),
                u = r("4930"),
                a = r("fdbf"),
                s = o("wks"),
                f = n.Symbol,
                p = a ? f : (f && f.withoutSetter) || c;
              t.exports = function (t) {
                return (
                  i(s, t) ||
                    (u && i(f, t) ? (s[t] = f[t]) : (s[t] = p("Symbol." + t))),
                  s[t]
                );
              };
            },
            b727: function (t, e, r) {
              var n = r("0366"),
                o = r("44ad"),
                i = r("7b0b"),
                c = r("50c4"),
                u = r("65f0"),
                a = [].push,
                s = function (t) {
                  var e = 1 == t,
                    r = 2 == t,
                    s = 3 == t,
                    f = 4 == t,
                    p = 6 == t,
                    l = 5 == t || p;
                  return function (d, y, b, h) {
                    for (
                      var m,
                        v,
                        O = i(d),
                        g = o(O),
                        w = n(y, b, 3),
                        j = c(g.length),
                        P = 0,
                        S = h || u,
                        x = e ? S(d, j) : r ? S(d, 0) : void 0;
                      j > P;
                      P++
                    )
                      if ((l || P in g) && ((m = g[P]), (v = w(m, P, O)), t))
                        if (e) x[P] = v;
                        else if (v)
                          switch (t) {
                            case 3:
                              return !0;
                            case 5:
                              return m;
                            case 6:
                              return P;
                            case 2:
                              a.call(x, m);
                          }
                        else if (f) return !1;
                    return p ? -1 : s || f ? f : x;
                  };
                };
              t.exports = {
                forEach: s(0),
                map: s(1),
                filter: s(2),
                some: s(3),
                every: s(4),
                find: s(5),
                findIndex: s(6),
              };
            },
            c04e: function (t, e, r) {
              var n = r("861d");
              t.exports = function (t, e) {
                if (!n(t)) return t;
                var r, o;
                if (
                  e &&
                  "function" == typeof (r = t.toString) &&
                  !n((o = r.call(t)))
                )
                  return o;
                if ("function" == typeof (r = t.valueOf) && !n((o = r.call(t))))
                  return o;
                if (
                  !e &&
                  "function" == typeof (r = t.toString) &&
                  !n((o = r.call(t)))
                )
                  return o;
                throw TypeError("Can't convert object to primitive value");
              };
            },
            c430: function (t, e) {
              t.exports = !1;
            },
            c6b6: function (t, e) {
              var r = {}.toString;
              t.exports = function (t) {
                return r.call(t).slice(8, -1);
              };
            },
            c6cd: function (t, e, r) {
              var n = r("da84"),
                o = r("ce4e"),
                i = "__core-js_shared__",
                c = n[i] || o(i, {});
              t.exports = c;
            },
            c8ba: function (t, e) {
              var r;
              r = (function () {
                return this;
              })();
              try {
                r = r || new Function("return this")();
              } catch (n) {
                "object" === typeof window && (r = window);
              }
              t.exports = r;
            },
            ca84: function (t, e, r) {
              var n = r("5135"),
                o = r("fc6a"),
                i = r("4d64").indexOf,
                c = r("d012");
              t.exports = function (t, e) {
                var r,
                  u = o(t),
                  a = 0,
                  s = [];
                for (r in u) !n(c, r) && n(u, r) && s.push(r);
                while (e.length > a)
                  n(u, (r = e[a++])) && (~i(s, r) || s.push(r));
                return s;
              };
            },
            cc12: function (t, e, r) {
              var n = r("da84"),
                o = r("861d"),
                i = n.document,
                c = o(i) && o(i.createElement);
              t.exports = function (t) {
                return c ? i.createElement(t) : {};
              };
            },
            cdf9: function (t, e, r) {
              var n = r("825a"),
                o = r("861d"),
                i = r("f069");
              t.exports = function (t, e) {
                if ((n(t), o(e) && e.constructor === t)) return e;
                var r = i.f(t),
                  c = r.resolve;
                return c(e), r.promise;
              };
            },
            ce4e: function (t, e, r) {
              var n = r("da84"),
                o = r("9112");
              t.exports = function (t, e) {
                try {
                  o(n, t, e);
                } catch (r) {
                  n[t] = e;
                }
                return e;
              };
            },
            d012: function (t, e) {
              t.exports = {};
            },
            d039: function (t, e) {
              t.exports = function (t) {
                try {
                  return !!t();
                } catch (e) {
                  return !0;
                }
              };
            },
            d066: function (t, e, r) {
              var n = r("428f"),
                o = r("da84"),
                i = function (t) {
                  return "function" == typeof t ? t : void 0;
                };
              t.exports = function (t, e) {
                return arguments.length < 2
                  ? i(n[t]) || i(o[t])
                  : (n[t] && n[t][e]) || (o[t] && o[t][e]);
              };
            },
            d1e7: function (t, e, r) {
              "use strict";
              var n = {}.propertyIsEnumerable,
                o = Object.getOwnPropertyDescriptor,
                i = o && !n.call({ 1: 2 }, 1);
              e.f = i
                ? function (t) {
                    var e = o(this, t);
                    return !!e && e.enumerable;
                  }
                : n;
            },
            d2bb: function (t, e, r) {
              var n = r("825a"),
                o = r("3bbe");
              t.exports =
                Object.setPrototypeOf ||
                ("__proto__" in {}
                  ? (function () {
                      var t,
                        e = !1,
                        r = {};
                      try {
                        (t = Object.getOwnPropertyDescriptor(
                          Object.prototype,
                          "__proto__"
                        ).set),
                          t.call(r, []),
                          (e = r instanceof Array);
                      } catch (i) {}
                      return function (r, i) {
                        return (
                          n(r), o(i), e ? t.call(r, i) : (r.__proto__ = i), r
                        );
                      };
                    })()
                  : void 0);
            },
            d3b7: function (t, e, r) {
              var n = r("00ee"),
                o = r("6eeb"),
                i = r("b041");
              n || o(Object.prototype, "toString", i, { unsafe: !0 });
            },
            d44e: function (t, e, r) {
              var n = r("9bf2").f,
                o = r("5135"),
                i = r("b622"),
                c = i("toStringTag");
              t.exports = function (t, e, r) {
                t &&
                  !o((t = r ? t : t.prototype), c) &&
                  n(t, c, { configurable: !0, value: e });
              };
            },
            da84: function (t, e, r) {
              (function (e) {
                var r = function (t) {
                  return t && t.Math == Math && t;
                };
                t.exports =
                  r("object" == typeof globalThis && globalThis) ||
                  r("object" == typeof window && window) ||
                  r("object" == typeof self && self) ||
                  r("object" == typeof e && e) ||
                  Function("return this")();
              }.call(this, r("c8ba")));
            },
            df75: function (t, e, r) {
              var n = r("ca84"),
                o = r("7839");
              t.exports =
                Object.keys ||
                function (t) {
                  return n(t, o);
                };
            },
            e2cc: function (t, e, r) {
              var n = r("6eeb");
              t.exports = function (t, e, r) {
                for (var o in e) n(t, o, e[o], r);
                return t;
              };
            },
            e667: function (t, e) {
              t.exports = function (t) {
                try {
                  return { error: !1, value: t() };
                } catch (e) {
                  return { error: !0, value: e };
                }
              };
            },
            e6cf: function (t, e, r) {
              "use strict";
              var n,
                o,
                i,
                c,
                u = r("23e7"),
                a = r("c430"),
                s = r("da84"),
                f = r("d066"),
                p = r("fea9"),
                l = r("6eeb"),
                d = r("e2cc"),
                y = r("d44e"),
                b = r("2626"),
                h = r("861d"),
                m = r("1c0b"),
                v = r("19aa"),
                O = r("c6b6"),
                g = r("8925"),
                w = r("2266"),
                j = r("1c7e"),
                P = r("4840"),
                S = r("2cf4").set,
                x = r("b575"),
                E = r("cdf9"),
                I = r("44de"),
                T = r("f069"),
                C = r("e667"),
                M = r("69f3"),
                k = r("94ca"),
                _ = r("b622"),
                A = r("2d00"),
                D = _("species"),
                R = "Promise",
                N = M.get,
                V = M.set,
                L = M.getterFor(R),
                U = p,
                F = s.TypeError,
                B = s.document,
                $ = s.process,
                Y = f("fetch"),
                H = T.f,
                z = H,
                G = "process" == O($),
                W = !!(B && B.createEvent && s.dispatchEvent),
                q = "unhandledrejection",
                K = "rejectionhandled",
                Z = 0,
                Q = 1,
                X = 2,
                J = 1,
                tt = 2,
                et = k(R, function () {
                  var t = g(U) !== String(U);
                  if (!t) {
                    if (66 === A) return !0;
                    if (!G && "function" != typeof PromiseRejectionEvent)
                      return !0;
                  }
                  if (a && !U.prototype["finally"]) return !0;
                  if (A >= 51 && /native code/.test(U)) return !1;
                  var e = U.resolve(1),
                    r = function (t) {
                      t(
                        function () {},
                        function () {}
                      );
                    },
                    n = (e.constructor = {});
                  return (n[D] = r), !(e.then(function () {}) instanceof r);
                }),
                rt =
                  et ||
                  !j(function (t) {
                    U.all(t)["catch"](function () {});
                  }),
                nt = function (t) {
                  var e;
                  return !(!h(t) || "function" != typeof (e = t.then)) && e;
                },
                ot = function (t, e, r) {
                  if (!e.notified) {
                    e.notified = !0;
                    var n = e.reactions;
                    x(function () {
                      var o = e.value,
                        i = e.state == Q,
                        c = 0;
                      while (n.length > c) {
                        var u,
                          a,
                          s,
                          f = n[c++],
                          p = i ? f.ok : f.fail,
                          l = f.resolve,
                          d = f.reject,
                          y = f.domain;
                        try {
                          p
                            ? (i ||
                                (e.rejection === tt && at(t, e),
                                (e.rejection = J)),
                              !0 === p
                                ? (u = o)
                                : (y && y.enter(),
                                  (u = p(o)),
                                  y && (y.exit(), (s = !0))),
                              u === f.promise
                                ? d(F("Promise-chain cycle"))
                                : (a = nt(u))
                                ? a.call(u, l, d)
                                : l(u))
                            : d(o);
                        } catch (b) {
                          y && !s && y.exit(), d(b);
                        }
                      }
                      (e.reactions = []),
                        (e.notified = !1),
                        r && !e.rejection && ct(t, e);
                    });
                  }
                },
                it = function (t, e, r) {
                  var n, o;
                  W
                    ? ((n = B.createEvent("Event")),
                      (n.promise = e),
                      (n.reason = r),
                      n.initEvent(t, !1, !0),
                      s.dispatchEvent(n))
                    : (n = { promise: e, reason: r }),
                    (o = s["on" + t])
                      ? o(n)
                      : t === q && I("Unhandled promise rejection", r);
                },
                ct = function (t, e) {
                  S.call(s, function () {
                    var r,
                      n = e.value,
                      o = ut(e);
                    if (
                      o &&
                      ((r = C(function () {
                        G ? $.emit("unhandledRejection", n, t) : it(q, t, n);
                      })),
                      (e.rejection = G || ut(e) ? tt : J),
                      r.error)
                    )
                      throw r.value;
                  });
                },
                ut = function (t) {
                  return t.rejection !== J && !t.parent;
                },
                at = function (t, e) {
                  S.call(s, function () {
                    G ? $.emit("rejectionHandled", t) : it(K, t, e.value);
                  });
                },
                st = function (t, e, r, n) {
                  return function (o) {
                    t(e, r, o, n);
                  };
                },
                ft = function (t, e, r, n) {
                  e.done ||
                    ((e.done = !0),
                    n && (e = n),
                    (e.value = r),
                    (e.state = X),
                    ot(t, e, !0));
                },
                pt = function (t, e, r, n) {
                  if (!e.done) {
                    (e.done = !0), n && (e = n);
                    try {
                      if (t === r) throw F("Promise can't be resolved itself");
                      var o = nt(r);
                      o
                        ? x(function () {
                            var n = { done: !1 };
                            try {
                              o.call(r, st(pt, t, n, e), st(ft, t, n, e));
                            } catch (i) {
                              ft(t, n, i, e);
                            }
                          })
                        : ((e.value = r), (e.state = Q), ot(t, e, !1));
                    } catch (i) {
                      ft(t, { done: !1 }, i, e);
                    }
                  }
                };
              et &&
                ((U = function (t) {
                  v(this, U, R), m(t), n.call(this);
                  var e = N(this);
                  try {
                    t(st(pt, this, e), st(ft, this, e));
                  } catch (r) {
                    ft(this, e, r);
                  }
                }),
                (n = function (t) {
                  V(this, {
                    type: R,
                    done: !1,
                    notified: !1,
                    parent: !1,
                    reactions: [],
                    rejection: !1,
                    state: Z,
                    value: void 0,
                  });
                }),
                (n.prototype = d(U.prototype, {
                  then: function (t, e) {
                    var r = L(this),
                      n = H(P(this, U));
                    return (
                      (n.ok = "function" != typeof t || t),
                      (n.fail = "function" == typeof e && e),
                      (n.domain = G ? $.domain : void 0),
                      (r.parent = !0),
                      r.reactions.push(n),
                      r.state != Z && ot(this, r, !1),
                      n.promise
                    );
                  },
                  catch: function (t) {
                    return this.then(void 0, t);
                  },
                })),
                (o = function () {
                  var t = new n(),
                    e = N(t);
                  (this.promise = t),
                    (this.resolve = st(pt, t, e)),
                    (this.reject = st(ft, t, e));
                }),
                (T.f = H =
                  function (t) {
                    return t === U || t === i ? new o(t) : z(t);
                  }),
                a ||
                  "function" != typeof p ||
                  ((c = p.prototype.then),
                  l(
                    p.prototype,
                    "then",
                    function (t, e) {
                      var r = this;
                      return new U(function (t, e) {
                        c.call(r, t, e);
                      }).then(t, e);
                    },
                    { unsafe: !0 }
                  ),
                  "function" == typeof Y &&
                    u(
                      { global: !0, enumerable: !0, forced: !0 },
                      {
                        fetch: function (t) {
                          return E(U, Y.apply(s, arguments));
                        },
                      }
                    ))),
                u({ global: !0, wrap: !0, forced: et }, { Promise: U }),
                y(U, R, !1, !0),
                b(R),
                (i = f(R)),
                u(
                  { target: R, stat: !0, forced: et },
                  {
                    reject: function (t) {
                      var e = H(this);
                      return e.reject.call(void 0, t), e.promise;
                    },
                  }
                ),
                u(
                  { target: R, stat: !0, forced: a || et },
                  {
                    resolve: function (t) {
                      return E(a && this === i ? U : this, t);
                    },
                  }
                ),
                u(
                  { target: R, stat: !0, forced: rt },
                  {
                    all: function (t) {
                      var e = this,
                        r = H(e),
                        n = r.resolve,
                        o = r.reject,
                        i = C(function () {
                          var r = m(e.resolve),
                            i = [],
                            c = 0,
                            u = 1;
                          w(t, function (t) {
                            var a = c++,
                              s = !1;
                            i.push(void 0),
                              u++,
                              r.call(e, t).then(function (t) {
                                s || ((s = !0), (i[a] = t), --u || n(i));
                              }, o);
                          }),
                            --u || n(i);
                        });
                      return i.error && o(i.value), r.promise;
                    },
                    race: function (t) {
                      var e = this,
                        r = H(e),
                        n = r.reject,
                        o = C(function () {
                          var o = m(e.resolve);
                          w(t, function (t) {
                            o.call(e, t).then(r.resolve, n);
                          });
                        });
                      return o.error && n(o.value), r.promise;
                    },
                  }
                );
            },
            e893: function (t, e, r) {
              var n = r("5135"),
                o = r("56ef"),
                i = r("06cf"),
                c = r("9bf2");
              t.exports = function (t, e) {
                for (var r = o(e), u = c.f, a = i.f, s = 0; s < r.length; s++) {
                  var f = r[s];
                  n(t, f) || u(t, f, a(e, f));
                }
              };
            },
            e8b5: function (t, e, r) {
              var n = r("c6b6");
              t.exports =
                Array.isArray ||
                function (t) {
                  return "Array" == n(t);
                };
            },
            e95a: function (t, e, r) {
              var n = r("b622"),
                o = r("3f8c"),
                i = n("iterator"),
                c = Array.prototype;
              t.exports = function (t) {
                return void 0 !== t && (o.Array === t || c[i] === t);
              };
            },
            f069: function (t, e, r) {
              "use strict";
              var n = r("1c0b"),
                o = function (t) {
                  var e, r;
                  (this.promise = new t(function (t, n) {
                    if (void 0 !== e || void 0 !== r)
                      throw TypeError("Bad Promise constructor");
                    (e = t), (r = n);
                  })),
                    (this.resolve = n(e)),
                    (this.reject = n(r));
                };
              t.exports.f = function (t) {
                return new o(t);
              };
            },
            f5df: function (t, e, r) {
              var n = r("00ee"),
                o = r("c6b6"),
                i = r("b622"),
                c = i("toStringTag"),
                u =
                  "Arguments" ==
                  o(
                    (function () {
                      return arguments;
                    })()
                  ),
                a = function (t, e) {
                  try {
                    return t[e];
                  } catch (r) {}
                };
              t.exports = n
                ? o
                : function (t) {
                    var e, r, n;
                    return void 0 === t
                      ? "Undefined"
                      : null === t
                      ? "Null"
                      : "string" == typeof (r = a((e = Object(t)), c))
                      ? r
                      : u
                      ? o(e)
                      : "Object" == (n = o(e)) && "function" == typeof e.callee
                      ? "Arguments"
                      : n;
                  };
            },
            f772: function (t, e, r) {
              var n = r("5692"),
                o = r("90e3"),
                i = n("keys");
              t.exports = function (t) {
                return i[t] || (i[t] = o(t));
              };
            },
            fb15: function (t, e, r) {
              "use strict";
              if (
                (r.r(e),
                r.d(e, "PlayerState", function () {
                  return f;
                }),
                "undefined" !== typeof window)
              ) {
                var n = window.document.currentScript,
                  o = r("8875");
                (n = o()),
                  "currentScript" in document ||
                    Object.defineProperty(document, "currentScript", {
                      get: o,
                    });
                var i = n && n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                i && (r.p = i[1]);
              }
              var c = r("8bbf");
              function u(t, e, r, n, o, i) {
                return (
                  Object(c["openBlock"])(),
                  Object(c["createBlock"])(
                    "div",
                    { style: t.wrapperStyle },
                    [
                      Object(c["createVNode"])(
                        "div",
                        { ref: "youtube", style: t.wrapperStyle },
                        null,
                        4
                      ),
                    ],
                    4
                  )
                );
              }
              r("4160"), r("a9e3"), r("d3b7"), r("e6cf"), r("159b");
              var a = r("9fab"),
                s = r.n(a),
                f = {
                  UNSTARTED: -1,
                  ENDED: 0,
                  PLAYING: 1,
                  PAUSED: 2,
                  BUFFERING: 3,
                  CUED: 5,
                },
                p = Object(c["defineComponent"])({
                  name: "YouTube",
                  props: {
                    src: { type: String, required: !0 },
                    height: { type: [Number, String], default: 360 },
                    width: { type: [Number, String], default: 640 },
                    host: { type: String, default: "https://www.youtube.com" },
                    vars: Object,
                  },
                  computed: {
                    id: function () {
                      return s()(this.src) || this.src;
                    },
                    wrapperStyle: function () {
                      return {
                        width: "".concat(this.width, "px"),
                        height: "".concat(this.height, "px"),
                        position: "relative",
                      };
                    },
                  },
                  data: function () {
                    var t = function () {},
                      e = new Promise(function (e) {
                        t = e;
                      }),
                      r = {
                        promise: e,
                        resolver: t,
                        player: null,
                        initiated: !1,
                        ready: !1,
                        iframeStyle: {
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                        },
                      };
                    return r;
                  },
                  mounted: function () {
                    var t = this;
                    window.onYouTubeIframeAPIReadyResolvers ||
                      (window.onYouTubeIframeAPIReadyResolvers = []),
                      window.onYouTubeIframeAPIReady ||
                        (window.onYouTubeIframeAPIReady = function () {
                          var t;
                          null ===
                            (t = window.onYouTubeIframeAPIReadyResolvers) ||
                            void 0 === t ||
                            t.forEach(function (t) {
                              t();
                            });
                        }),
                      this.promise.then(function () {
                        return t.initPlayer();
                      });
                    var e = "youtube-iframe-js-api-script",
                      r = document.getElementById(e);
                    if (r) this.resolver();
                    else {
                      var n;
                      null === (n = window.onYouTubeIframeAPIReadyResolvers) ||
                        void 0 === n ||
                        n.push(this.resolver),
                        (r = document.createElement("script")),
                        (r.id = e),
                        (r.src = "https://www.youtube.com/iframe_api");
                      var o = document.getElementsByTagName("script")[0];
                      o && o.parentNode && o.parentNode.insertBefore(r, o);
                    }
                  },
                  methods: {
                    initPlayer: function () {
                      var t = this;
                      (this.initiated = !0),
                        (this.player = new YT.Player(this.$refs.youtube, {
                          height: this.height,
                          width: this.width,
                          videoId: this.id,
                          host: this.host,
                          playerVars: this.vars,
                          events: {
                            onReady: function (e) {
                              (t.ready = !0),
                                setTimeout(function () {
                                  return t.$emit("ready", e);
                                });
                            },
                            onStateChange: function (e) {
                              return t.$emit("state-change", e);
                            },
                            onPlaybackQualityChange: function (e) {
                              return t.$emit("playback-quality-change", e);
                            },
                            onPlaybackRateChange: function (e) {
                              return t.$emit("playback-rate-change", e);
                            },
                            onError: function (e) {
                              return t.$emit("error", e);
                            },
                            onApiChange: function (e) {
                              return t.$emit("api-change", e);
                            },
                          },
                        }));
                    },
                    cueVideoById: function (t, e, r) {
                      var n;
                      null === (n = this.player) ||
                        void 0 === n ||
                        n.cueVideoById(t, e, r);
                    },
                    loadVideoById: function (t, e, r) {
                      var n;
                      null === (n = this.player) ||
                        void 0 === n ||
                        n.loadVideoById(t, e, r);
                    },
                    cueVideoByUrl: function (t, e, r) {
                      var n;
                      null === (n = this.player) ||
                        void 0 === n ||
                        n.cueVideoByUrl(t, e, r);
                    },
                    loadVideoByUrl: function (t, e, r) {
                      var n;
                      null === (n = this.player) ||
                        void 0 === n ||
                        n.loadVideoByUrl(t, e, r);
                    },
                    cuePlaylist: function (t, e, r, n) {
                      var o;
                      null === (o = this.player) ||
                        void 0 === o ||
                        o.cuePlaylist(t, e, r, n);
                    },
                    loadPlaylist: function (t, e, r, n) {
                      var o;
                      null === (o = this.player) ||
                        void 0 === o ||
                        o.loadPlaylist(t, e, r, n);
                    },
                    playVideo: function () {
                      var t;
                      null === (t = this.player) ||
                        void 0 === t ||
                        t.playVideo();
                    },
                    pauseVideo: function () {
                      var t;
                      null === (t = this.player) ||
                        void 0 === t ||
                        t.pauseVideo();
                    },
                    stopVideo: function () {
                      var t;
                      null === (t = this.player) ||
                        void 0 === t ||
                        t.stopVideo();
                    },
                    seekTo: function (t, e) {
                      var r;
                      null === (r = this.player) ||
                        void 0 === r ||
                        r.seekTo(t, e);
                    },
                    nextVideo: function () {
                      var t;
                      null === (t = this.player) ||
                        void 0 === t ||
                        t.nextVideo();
                    },
                    previousVideo: function () {
                      var t;
                      null === (t = this.player) ||
                        void 0 === t ||
                        t.previousVideo();
                    },
                    playVideoAt: function (t) {
                      var e;
                      null === (e = this.player) ||
                        void 0 === e ||
                        e.playVideoAt(t);
                    },
                    mute: function () {
                      var t;
                      null === (t = this.player) || void 0 === t || t.mute();
                    },
                    unMute: function () {
                      var t;
                      null === (t = this.player) || void 0 === t || t.unMute();
                    },
                    isMuted: function () {
                      return !!this.player && this.player.isMuted();
                    },
                    setVolume: function (t) {
                      var e;
                      null === (e = this.player) ||
                        void 0 === e ||
                        e.setVolume(t);
                    },
                    getVolume: function () {
                      return this.player ? this.player.getVolume() : 0;
                    },
                    getPlaybackRate: function () {
                      return this.player ? this.player.getPlaybackRate() : 0;
                    },
                    setPlaybackRate: function (t) {
                      var e;
                      null === (e = this.player) ||
                        void 0 === e ||
                        e.setPlaybackRate(t);
                    },
                    getAvailablePlaybackRates: function () {
                      return this.player
                        ? this.player.getAvailablePlaybackRates()
                        : [];
                    },
                    setLoop: function (t) {
                      var e;
                      null === (e = this.player) ||
                        void 0 === e ||
                        e.setLoop(t);
                    },
                    setShuffle: function (t) {
                      var e;
                      null === (e = this.player) ||
                        void 0 === e ||
                        e.setShuffle(t);
                    },
                    getVideoLoadedFraction: function () {
                      return this.player
                        ? this.player.getVideoLoadedFraction()
                        : 0;
                    },
                    getPlayerState: function () {
                      return this.player
                        ? this.player.getPlayerState()
                        : f.UNSTARTED;
                    },
                    getCurrentTime: function () {
                      return this.player ? this.player.getCurrentTime() : 0;
                    },
                    getPlaybackQuality: function () {
                      return this.player
                        ? this.player.getPlaybackQuality()
                        : "default";
                    },
                    setPlaybackQuality: function (t) {
                      var e;
                      null === (e = this.player) ||
                        void 0 === e ||
                        e.setPlaybackQuality(t);
                    },
                    getAvailableQualityLevels: function () {
                      return this.player
                        ? this.player.getAvailableQualityLevels()
                        : [];
                    },
                    getDuration: function () {
                      return this.player ? this.player.getDuration() : 0;
                    },
                    getVideoUrl: function () {
                      return this.player ? this.player.getVideoUrl() : "";
                    },
                    getVideoEmbedCode: function () {
                      return this.player ? this.player.getVideoEmbedCode() : "";
                    },
                    getPlaylist: function () {
                      return this.player ? this.player.getPlaylist() : [];
                    },
                    getPlaylistIndex: function () {
                      return this.player ? this.player.getPlaylistIndex() : 0;
                    },
                  },
                  watch: {
                    width: function () {
                      var t;
                      null === (t = this.player) ||
                        void 0 === t ||
                        t.setSize(+this.width, +this.height);
                    },
                    height: function () {
                      var t;
                      null === (t = this.player) ||
                        void 0 === t ||
                        t.setSize(+this.width, +this.height);
                    },
                    src: function () {
                      this.initiated &&
                        this.player &&
                        this.player.loadVideoById(this.id);
                    },
                  },
                  beforeUnmount: function () {
                    var t;
                    null === (t = this.player) || void 0 === t || t.destroy();
                  },
                }),
                l = p;
              l.render = u;
              var d = l;
              e["default"] = d;
            },
            fc6a: function (t, e, r) {
              var n = r("44ad"),
                o = r("1d80");
              t.exports = function (t) {
                return n(o(t));
              };
            },
            fdbc: function (t, e) {
              t.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0,
              };
            },
            fdbf: function (t, e, r) {
              var n = r("4930");
              t.exports =
                n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
            },
            fea9: function (t, e, r) {
              var n = r("da84");
              t.exports = n.Promise;
            },
          })["default"];
        });
    },
    6866: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          BaseTransition: function () {
            return n.P$;
          },
          Comment: function () {
            return n.sv;
          },
          EffectScope: function () {
            return n.Bj;
          },
          Fragment: function () {
            return n.HY;
          },
          KeepAlive: function () {
            return n.Ob;
          },
          ReactiveEffect: function () {
            return n.qq;
          },
          Static: function () {
            return n.qG;
          },
          Suspense: function () {
            return n.n4;
          },
          Teleport: function () {
            return n.lR;
          },
          Text: function () {
            return n.xv;
          },
          Transition: function () {
            return n.uT;
          },
          TransitionGroup: function () {
            return n.W3;
          },
          VueElement: function () {
            return n.a2;
          },
          callWithAsyncErrorHandling: function () {
            return n.$d;
          },
          callWithErrorHandling: function () {
            return n.KU;
          },
          camelize: function () {
            return n._A;
          },
          capitalize: function () {
            return n.kC;
          },
          cloneVNode: function () {
            return n.Ho;
          },
          compatUtils: function () {
            return n.ry;
          },
          compile: function () {
            return o;
          },
          computed: function () {
            return n.Fl;
          },
          createApp: function () {
            return n.ri;
          },
          createBlock: function () {
            return n.j4;
          },
          createCommentVNode: function () {
            return n.kq;
          },
          createElementBlock: function () {
            return n.iD;
          },
          createElementVNode: function () {
            return n._;
          },
          createHydrationRenderer: function () {
            return n.Eo;
          },
          createPropsRestProxy: function () {
            return n.p1;
          },
          createRenderer: function () {
            return n.Us;
          },
          createSSRApp: function () {
            return n.vr;
          },
          createSlots: function () {
            return n.Nv;
          },
          createStaticVNode: function () {
            return n.uE;
          },
          createTextVNode: function () {
            return n.Uk;
          },
          createVNode: function () {
            return n.Wm;
          },
          customRef: function () {
            return n.ZM;
          },
          defineAsyncComponent: function () {
            return n.RC;
          },
          defineComponent: function () {
            return n.aZ;
          },
          defineCustomElement: function () {
            return n.MW;
          },
          defineEmits: function () {
            return n.Bz;
          },
          defineExpose: function () {
            return n.WY;
          },
          defineProps: function () {
            return n.yb;
          },
          defineSSRCustomElement: function () {
            return n.Ah;
          },
          devtools: function () {
            return n.mW;
          },
          effect: function () {
            return n.cE;
          },
          effectScope: function () {
            return n.B;
          },
          getCurrentInstance: function () {
            return n.FN;
          },
          getCurrentScope: function () {
            return n.nZ;
          },
          getTransitionRawChildren: function () {
            return n.Q6;
          },
          guardReactiveProps: function () {
            return n.F4;
          },
          h: function () {
            return n.h;
          },
          handleError: function () {
            return n.S3;
          },
          hydrate: function () {
            return n.ZB;
          },
          initCustomFormatter: function () {
            return n.Mr;
          },
          initDirectivesForSSR: function () {
            return n.Nd;
          },
          inject: function () {
            return n.f3;
          },
          isMemoSame: function () {
            return n.nQ;
          },
          isProxy: function () {
            return n.X3;
          },
          isReactive: function () {
            return n.PG;
          },
          isReadonly: function () {
            return n.$y;
          },
          isRef: function () {
            return n.dq;
          },
          isRuntimeOnly: function () {
            return n.of;
          },
          isShallow: function () {
            return n.yT;
          },
          isVNode: function () {
            return n.lA;
          },
          markRaw: function () {
            return n.Xl;
          },
          mergeDefaults: function () {
            return n.u_;
          },
          mergeProps: function () {
            return n.dG;
          },
          nextTick: function () {
            return n.Y3;
          },
          normalizeClass: function () {
            return n.C_;
          },
          normalizeProps: function () {
            return n.vs;
          },
          normalizeStyle: function () {
            return n.j5;
          },
          onActivated: function () {
            return n.dl;
          },
          onBeforeMount: function () {
            return n.wF;
          },
          onBeforeUnmount: function () {
            return n.Jd;
          },
          onBeforeUpdate: function () {
            return n.Xn;
          },
          onDeactivated: function () {
            return n.se;
          },
          onErrorCaptured: function () {
            return n.d1;
          },
          onMounted: function () {
            return n.bv;
          },
          onRenderTracked: function () {
            return n.bT;
          },
          onRenderTriggered: function () {
            return n.Yq;
          },
          onScopeDispose: function () {
            return n.EB;
          },
          onServerPrefetch: function () {
            return n.vl;
          },
          onUnmounted: function () {
            return n.SK;
          },
          onUpdated: function () {
            return n.ic;
          },
          openBlock: function () {
            return n.wg;
          },
          popScopeId: function () {
            return n.Cn;
          },
          provide: function () {
            return n.JJ;
          },
          proxyRefs: function () {
            return n.WL;
          },
          pushScopeId: function () {
            return n.dD;
          },
          queuePostFlushCb: function () {
            return n.qb;
          },
          reactive: function () {
            return n.qj;
          },
          readonly: function () {
            return n.OT;
          },
          ref: function () {
            return n.iH;
          },
          registerRuntimeCompiler: function () {
            return n.Y1;
          },
          render: function () {
            return n.sY;
          },
          renderList: function () {
            return n.Ko;
          },
          renderSlot: function () {
            return n.WI;
          },
          resolveComponent: function () {
            return n.up;
          },
          resolveDirective: function () {
            return n.Q2;
          },
          resolveDynamicComponent: function () {
            return n.LL;
          },
          resolveFilter: function () {
            return n.eq;
          },
          resolveTransitionHooks: function () {
            return n.U2;
          },
          setBlockTracking: function () {
            return n.qZ;
          },
          setDevtoolsHook: function () {
            return n.ec;
          },
          setTransitionHooks: function () {
            return n.nK;
          },
          shallowReactive: function () {
            return n.Um;
          },
          shallowReadonly: function () {
            return n.YS;
          },
          shallowRef: function () {
            return n.XI;
          },
          ssrContextKey: function () {
            return n.Uc;
          },
          ssrUtils: function () {
            return n.G;
          },
          stop: function () {
            return n.sT;
          },
          toDisplayString: function () {
            return n.zw;
          },
          toHandlerKey: function () {
            return n.hR;
          },
          toHandlers: function () {
            return n.mx;
          },
          toRaw: function () {
            return n.IU;
          },
          toRef: function () {
            return n.Vh;
          },
          toRefs: function () {
            return n.BK;
          },
          transformVNodeArgs: function () {
            return n.C3;
          },
          triggerRef: function () {
            return n.oR;
          },
          unref: function () {
            return n.SU;
          },
          useAttrs: function () {
            return n.l1;
          },
          useCssModule: function () {
            return n.fb;
          },
          useCssVars: function () {
            return n.sj;
          },
          useSSRContext: function () {
            return n.Zq;
          },
          useSlots: function () {
            return n.Rr;
          },
          useTransitionState: function () {
            return n.Y8;
          },
          vModelCheckbox: function () {
            return n.e8;
          },
          vModelDynamic: function () {
            return n.YZ;
          },
          vModelRadio: function () {
            return n.G2;
          },
          vModelSelect: function () {
            return n.bM;
          },
          vModelText: function () {
            return n.nr;
          },
          vShow: function () {
            return n.F8;
          },
          version: function () {
            return n.i8;
          },
          warn: function () {
            return n.ZK;
          },
          watch: function () {
            return n.YP;
          },
          watchEffect: function () {
            return n.m0;
          },
          watchPostEffect: function () {
            return n.Rh;
          },
          watchSyncEffect: function () {
            return n.yX;
          },
          withAsyncContext: function () {
            return n.mv;
          },
          withCtx: function () {
            return n.w5;
          },
          withDefaults: function () {
            return n.b9;
          },
          withDirectives: function () {
            return n.wy;
          },
          withKeys: function () {
            return n.D2;
          },
          withMemo: function () {
            return n.MX;
          },
          withModifiers: function () {
            return n.iM;
          },
          withScopeId: function () {
            return n.HX;
          },
        });
      var n = r(9242);
      const o = () => {
        0;
      };
    },
    5221: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return gt;
          },
        });
      var n = r(3396),
        o = r(7139);
      const i = (0, n.Uk)("⇦");
      function c(t, e, r, c, u, a) {
        const s = (0, n.up)("router-link"),
          f = (0, n.up)("youtube-element"),
          p = (0, n.up)("comment-area");
        return (
          (0, n.wg)(),
          (0, n.iD)(
            n.HY,
            null,
            [
              (0, n._)("nav", null, [
                (0, n.Wm)(
                  s,
                  { to: "/" },
                  { default: (0, n.w5)(() => [i]), _: 1 }
                ),
              ]),
              (0, n._)("div", null, [
                (0, n._)("h1", null, (0, o.zw)(this.title), 1),
                (0, n._)("h2", null, (0, o.zw)(this.author), 1),
                (0, n.Wm)(
                  f,
                  {
                    id: "youtubeplayer",
                    ref: "youtubeplayer",
                    title: this.title,
                    author: this.author,
                    src: this.videoSource,
                  },
                  null,
                  8,
                  ["title", "author", "src"]
                ),
                (0, n.Wm)(p, { videoId: this.videoId }, null, 8, ["videoId"]),
              ]),
            ],
            64
          )
        );
      }
      const u = { class: "video-container" },
        a = { class: "controls" },
        s = { class: "duration-bar" };
      function f(t, e, r, i, c, f) {
        const p = (0, n.up)("YouTube");
        return (
          (0, n.wg)(),
          (0, n.iD)("div", null, [
            (0, n._)("div", u, [
              (0, n.Wm)(
                p,
                {
                  src: this.src,
                  ref: "youtube",
                  id: "youtube",
                  host: this.host,
                  vars: this.vars,
                  width: 350,
                  height: 200,
                  onReady: this.createDurationBar,
                  onError:
                    e[0] ||
                    (e[0] = () => {
                      t.alert("An error has occured.");
                    }),
                  onStateChange: this.playOrPauseManagement,
                },
                null,
                8,
                ["src", "host", "vars", "onReady", "onStateChange"]
              ),
            ]),
            (0, n._)("div", a, [
              (0, n._)(
                "p",
                s,
                (0, o.zw)(this.currentTime) +
                  "/" +
                  (0, o.zw)(this.totalDuration),
                1
              ),
              (0, n._)("button", {
                class: "btn very backward",
                onClick: e[1] || (e[1] = (e) => t.timeGo(-30)),
              }),
              (0, n._)("button", {
                class: "btn backward",
                onClick: e[2] || (e[2] = (e) => t.timeGo(-10)),
              }),
              (0, n._)(
                "button",
                {
                  class: "btn play",
                  onClick:
                    e[3] ||
                    (e[3] = (...e) => t.onPlayOrPause && t.onPlayOrPause(...e)),
                  ref: "playBtn",
                },
                null,
                512
              ),
              (0, n._)(
                "button",
                {
                  class: "btn mute",
                  onClick:
                    e[4] || (e[4] = (...e) => t.onMute && t.onMute(...e)),
                  ref: "muteBtn",
                },
                null,
                512
              ),
              (0, n._)("button", {
                class: "btn forward",
                onClick: e[5] || (e[5] = (e) => t.timeGo(10)),
              }),
              (0, n._)("button", {
                class: "btn very forward",
                onClick: e[6] || (e[6] = (e) => t.timeGo(30)),
              }),
            ]),
          ])
        );
      }
      var p = r(2722),
        l = r.n(p),
        d = (0, n.aZ)({
          components: { YouTube: l() },
          props: { title: String, author: String, src: String },
          data() {
            return {
              currentTimeInSec: void 0,
              currentTime: void 0,
              totalDuration: void 0,
              host: "https://www.youtube.com",
              activeState: !1,
              muteState: !1,
              vars: {
                controls: 0,
                modestbranding: 1,
                fs: 0,
                autoplay: 0,
                rel: 1,
                showInfo: 0,
              },
              myInterval: "",
              srcMute: "../assets/images/mute.png",
              srcUnmute: "../assets/images/unmute.png",
            };
          },
          methods: {
            timeManager(t) {
              let e = Math.floor(t % 60),
                r = Math.floor(t / 60),
                n = "";
              if (
                (r > 59 &&
                  ((n = `${Math.floor(r / 60)}:`), (r = Math.floor(r % 60))),
                r < 10)
              ) {
                let t = "0" + r;
                r = t;
              }
              if (e < 10) {
                let t = "0" + e;
                e = t;
              }
              return n + r + ":" + e;
            },
            retrieveCurrentTime() {
              (this.currentTimeInSec = this.$refs.youtube.getCurrentTime()),
                (this.currentTime = this.timeManager(this.currentTimeInSec));
            },
            setCurrentTime() {
              this.myInterval = setInterval(this.retrieveCurrentTime, 1e3);
            },
            createDurationBar() {
              (this.totalDuration = this.timeManager(
                this.$refs.youtube.getDuration()
              )),
                this.setCurrentTime();
            },
            onPlayOrPause() {
              1 == this.activeState
                ? this.$refs.youtube.pauseVideo()
                : this.$refs.youtube.playVideo();
            },
            onMute() {
              0 == this.muteState
                ? (this.$refs.youtube.mute(),
                  (this.muteState = !0),
                  this.$refs.muteBtn.classList.toggle("unmute"))
                : (this.$refs.youtube.unMute(),
                  (this.muteState = !1),
                  this.$refs.muteBtn.classList.toggle("unmute"));
            },
            playOrPauseManagement() {
              1 == this.activeState
                ? ((this.activeState = !1),
                  this.$refs.playBtn.classList.toggle("pause"))
                : ((this.activeState = !0),
                  this.$refs.playBtn.classList.toggle("pause"));
            },
            timeGo(t) {
              (this.currentTimeInSec = this.currentTimeInSec + Number(t)),
                this.$refs.youtube.seekTo(this.currentTimeInSec);
            },
            clearThisInterval() {
              clearInterval(this.myInterval);
            },
          },
          beforeUnmount() {
            this.clearThisInterval();
          },
        }),
        y = r(89);
      const b = (0, y.Z)(d, [
        ["render", f],
        ["__scopeId", "data-v-e1afde98"],
      ]);
      var h = b,
        m = r(4870),
        v = r(9242),
        O = r(3766);
      r(6699), r(2801), r(8675), r(3462), r(7380), r(1118), r(1703);
      var g;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const w = "undefined" !== typeof window,
        j = (Object.prototype.toString, (t) => "string" === typeof t),
        P = () => {};
      w &&
        (null == (g = null == window ? void 0 : window.navigator)
          ? void 0
          : g.userAgent) &&
        /iP(ad|hone|od)/.test(window.navigator.userAgent);
      function S(t, e) {
        function r(...r) {
          t(() => e.apply(this, r), { fn: e, thisArg: this, args: r });
        }
        return r;
      }
      const x = (t) => t();
      function E(t = x) {
        const e = (0, m.iH)(!0);
        function r() {
          e.value = !1;
        }
        function n() {
          e.value = !0;
        }
        const o = (...r) => {
          e.value && t(...r);
        };
        return { isActive: e, pause: r, resume: n, eventFilter: o };
      }
      function I(t) {
        return !!(0, m.nZ)() && ((0, m.EB)(t), !0);
      }
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      var T = Object.getOwnPropertySymbols,
        C = Object.prototype.hasOwnProperty,
        M = Object.prototype.propertyIsEnumerable,
        k = (t, e) => {
          var r = {};
          for (var n in t) C.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
          if (null != t && T)
            for (var n of T(t))
              e.indexOf(n) < 0 && M.call(t, n) && (r[n] = t[n]);
          return r;
        };
      function _(t, e, r = {}) {
        const o = r,
          { eventFilter: i = x } = o,
          c = k(o, ["eventFilter"]);
        return (0, n.YP)(t, S(i, e), c);
      }
      Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      var A = Object.defineProperty,
        D = Object.defineProperties,
        R = Object.getOwnPropertyDescriptors,
        N = Object.getOwnPropertySymbols,
        V = Object.prototype.hasOwnProperty,
        L = Object.prototype.propertyIsEnumerable,
        U = (t, e, r) =>
          e in t
            ? A(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        F = (t, e) => {
          for (var r in e || (e = {})) V.call(e, r) && U(t, r, e[r]);
          if (N) for (var r of N(e)) L.call(e, r) && U(t, r, e[r]);
          return t;
        },
        B = (t, e) => D(t, R(e)),
        $ = (t, e) => {
          var r = {};
          for (var n in t) V.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
          if (null != t && N)
            for (var n of N(t))
              e.indexOf(n) < 0 && L.call(t, n) && (r[n] = t[n]);
          return r;
        };
      function Y(t, e, r = {}) {
        const n = r,
          { eventFilter: o } = n,
          i = $(n, ["eventFilter"]),
          { eventFilter: c, pause: u, resume: a, isActive: s } = E(o),
          f = _(t, e, B(F({}, i), { eventFilter: c }));
        return { stop: f, pause: u, resume: a, isActive: s };
      }
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      function H(t) {
        var e;
        const r = (0, m.SU)(t);
        return null != (e = null == r ? void 0 : r.$el) ? e : r;
      }
      const z = w ? window : void 0;
      w && window.document, w && window.navigator, w && window.location;
      function G(...t) {
        let e, r, o, i;
        if ((j(t[0]) ? (([r, o, i] = t), (e = z)) : ([e, r, o, i] = t), !e))
          return P;
        let c = P;
        const u = (0, n.YP)(
            () => H(e),
            (t) => {
              c(),
                t &&
                  (t.addEventListener(r, o, i),
                  (c = () => {
                    t.removeEventListener(r, o, i), (c = P);
                  }));
            },
            { immediate: !0, flush: "post" }
          ),
          a = () => {
            u(), c();
          };
        return I(a), a;
      }
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const W =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof global
            ? global
            : "undefined" !== typeof self
            ? self
            : {},
        q = "__vueuse_ssr_handlers__";
      W[q] = W[q] || {};
      const K = W[q];
      function Z(t, e) {
        return K[t] || e;
      }
      function Q(t) {
        return null == t
          ? "any"
          : t instanceof Set
          ? "set"
          : t instanceof Map
          ? "map"
          : t instanceof Date
          ? "date"
          : "boolean" === typeof t
          ? "boolean"
          : "string" === typeof t
          ? "string"
          : "object" === typeof t || Array.isArray(t)
          ? "object"
          : Number.isNaN(t)
          ? "any"
          : "number";
      }
      const X = {
        boolean: { read: (t) => "true" === t, write: (t) => String(t) },
        object: { read: (t) => JSON.parse(t), write: (t) => JSON.stringify(t) },
        number: { read: (t) => Number.parseFloat(t), write: (t) => String(t) },
        any: { read: (t) => t, write: (t) => String(t) },
        string: { read: (t) => t, write: (t) => String(t) },
        map: {
          read: (t) => new Map(JSON.parse(t)),
          write: (t) => JSON.stringify(Array.from(t.entries())),
        },
        set: {
          read: (t) => new Set(JSON.parse(t)),
          write: (t) => JSON.stringify(Array.from(t)),
        },
        date: { read: (t) => new Date(t), write: (t) => t.toISOString() },
      };
      function J(t, e, r, n = {}) {
        var o;
        const {
            flush: i = "pre",
            deep: c = !0,
            listenToStorageChanges: u = !0,
            writeDefaults: a = !0,
            shallow: s,
            window: f = z,
            eventFilter: p,
            onError: l = (t) => {
              console.error(t);
            },
          } = n,
          d = (s ? m.XI : m.iH)(e);
        if (!r)
          try {
            r = Z("getDefaultStorage", () => {
              var t;
              return null == (t = z) ? void 0 : t.localStorage;
            })();
          } catch (P) {
            l(P);
          }
        if (!r) return d;
        const y = (0, m.SU)(e),
          b = Q(y),
          h = null != (o = n.serializer) ? o : X[b],
          { pause: v, resume: O } = Y(d, () => g(d.value), {
            flush: i,
            deep: c,
            eventFilter: p,
          });
        return f && u && G(f, "storage", j), j(), d;
        function g(e) {
          try {
            null == e ? r.removeItem(t) : r.setItem(t, h.write(e));
          } catch (P) {
            l(P);
          }
        }
        function w(e) {
          if (!e || e.key === t) {
            v();
            try {
              const n = e ? e.newValue : r.getItem(t);
              return null == n
                ? (a && null !== y && r.setItem(t, h.write(y)), y)
                : "string" !== typeof n
                ? n
                : h.read(n);
            } catch (P) {
              l(P);
            } finally {
              O();
            }
          }
        }
        function j(e) {
          (e && e.key !== t) || (d.value = w(e));
        }
      }
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      new Map();
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      var tt;
      (function (t) {
        (t["UP"] = "UP"),
          (t["RIGHT"] = "RIGHT"),
          (t["DOWN"] = "DOWN"),
          (t["LEFT"] = "LEFT"),
          (t["NONE"] = "NONE");
      })(tt || (tt = {}));
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const et = (0, O.Q_)({
          id: "comments",
          state: () => ({
            comments: J("comments", []),
            newComment: {
              time: "",
              videoid: "",
              username: "",
              commentText: "",
            },
            oldUsername: "",
          }),
          actions: {
            addNewComment() {
              this.comments.unshift(this.newComment), (this.newComment = {});
            },
          },
        }),
        rt = (t) => ((0, n.dD)("data-v-23002432"), (t = t()), (0, n.Cn)(), t),
        nt = { class: "comment-area" },
        ot = { class: "comment-container" },
        it = { key: 0, class: "single-comment" },
        ct = { class: "comment-infos" },
        ut = { class: "comment-content" },
        at = { class: "form-bars" },
        st = ["placeholder"],
        ft = { key: 0, class: "missing" },
        pt = rt(() => (0, n._)("em", null, "Write a comment first!", -1)),
        lt = [pt],
        dt = ["placeholder"],
        yt = {
          name: "CommentArea",
          props: { videoId: String },
          data() {
            return {
              usernamePlaceholder: "Username",
              commentPlaceholder: "Write your comment here",
              newComment: {
                time: "",
                videoId: this.videoId,
                username: "",
                commentText: "",
              },
              commentMissing: !1,
            };
          },
          methods: {
            onSubmit() {
              if ("" == this.newComment.commentText)
                return (
                  (this.commentMissing = !0),
                  setTimeout(() => {
                    this.commentMissing = !1;
                  }, 4e3),
                  !1
                );
              "" == this.newComment.username &&
                (this.newComment.username = "Anonymous user");
              let t = new Date(),
                e = t.getHours(),
                r = t.getMinutes();
              r < 10 && (r = "0" + r);
              let n = t.getFullYear().toString().slice(-2),
                o = t.getMonth();
              (o = o++), o < 10 && (o = "0" + o);
              let i = t.getDate();
              i < 10 && (i = "0" + i),
                (this.newComment.time = `${i}/${o}/${n} at ${e}:${r}`),
                (this.storeComments.newComment = this.newComment),
                (this.storeComments.oldUsername = this.newComment.username),
                this.storeComments.addNewComment(),
                "Anonymous user" == this.storeComments.oldUsername &&
                  (this.storeComments.oldUsername = ""),
                (this.newComment = {
                  time: "",
                  videoId: this.videoId,
                  username: this.storeComments.oldUsername,
                  commentText: "",
                });
            },
          },
        };
      var bt = Object.assign(yt, {
        setup(t) {
          const e = et();
          return (t, r) => (
            (0, n.wg)(),
            (0, n.iD)("div", nt, [
              (0, n._)("div", ot, [
                ((0, n.wg)(!0),
                (0, n.iD)(
                  n.HY,
                  null,
                  (0, n.Ko)(
                    (0, m.SU)(e).comments,
                    (t) => (
                      (0, n.wg)(),
                      (0, n.iD)("div", { key: t.id }, [
                        t.videoId == this.videoId
                          ? ((0, n.wg)(),
                            (0, n.iD)("div", it, [
                              (0, n._)("p", ct, [
                                (0, n._)(
                                  "span",
                                  null,
                                  (0, o.zw)(t.username),
                                  1
                                ),
                                (0, n.Uk)(
                                  " on " + (0, o.zw)(t.time) + " wrote:",
                                  1
                                ),
                              ]),
                              (0, n._)("p", ut, (0, o.zw)(t.commentText), 1),
                            ]))
                          : (0, n.kq)("", !0),
                      ])
                    )
                  ),
                  128
                )),
              ]),
              (0, n._)("form", null, [
                (0, n._)("div", at, [
                  (0, n.wy)(
                    (0, n._)(
                      "input",
                      {
                        class: "username-bar",
                        placeholder: this.usernamePlaceholder,
                        "onUpdate:modelValue":
                          r[0] ||
                          (r[0] = (t) => (this.newComment.username = t)),
                      },
                      null,
                      8,
                      st
                    ),
                    [[v.nr, this.newComment.username]]
                  ),
                  this.commentMissing
                    ? ((0, n.wg)(), (0, n.iD)("span", ft, lt))
                    : (0, n.kq)("", !0),
                  (0, n.wy)(
                    (0, n._)(
                      "textarea",
                      {
                        class: "comment-bar",
                        placeholder: this.commentPlaceholder,
                        "onUpdate:modelValue":
                          r[1] ||
                          (r[1] = (t) => (this.newComment.commentText = t)),
                      },
                      null,
                      8,
                      dt
                    ),
                    [[v.nr, this.newComment.commentText]]
                  ),
                  (0, n._)("button", {
                    onClick:
                      r[2] ||
                      (r[2] = (0, v.iM)(
                        (...t) => this.onSubmit && this.onSubmit(...t),
                        ["prevent"]
                      )),
                  }),
                ]),
              ]),
            ])
          );
        },
      });
      const ht = (0, y.Z)(bt, [["__scopeId", "data-v-23002432"]]);
      var mt = ht,
        vt = {
          name: "VideoPage",
          components: { YoutubeElement: h, CommentArea: mt },
          data() {
            return {
              title: this.$route.params.title,
              author: this.$route.params.author,
              videoSource: `https://www.youtube.com/embed/${this.$route.params.id}`,
              videoId: `${this.$route.params.id}`,
            };
          },
        };
      const Ot = (0, y.Z)(vt, [
        ["render", c],
        ["__scopeId", "data-v-7a452d27"],
      ]);
      var gt = Ot;
    },
  },
]);
//# sourceMappingURL=221.62e202cf.js.map
