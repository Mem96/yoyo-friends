(function () {
  "use strict";
  var e = {
      9022: function (e, t, n) {
        var r = n(9242),
          o = n(3396);
        const i = (0, o._)(
          "div",
          { class: "title-container" },
          [(0, o._)("h1", { class: "supertitle" }, "Yoyo ~ Friends")],
          -1
        );
        function s(e, t) {
          const n = (0, o.up)("router-view");
          return (0, o.wg)(), (0, o.iD)(o.HY, null, [i, (0, o.Wm)(n)], 64);
        }
        var a = n(89);
        const u = {},
          c = (0, a.Z)(u, [["render", s]]);
        var l = c,
          d = n(678);
        const h = { class: "homepage-container" },
          f = { key: 0 };
        function v(e, t, n, i, s, a) {
          const u = (0, o.up)("video-list-element");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", h, [
              (0, o._)("div", null, [
                (0, o.wy)(
                  (0, o._)(
                    "input",
                    {
                      class: "searchBar",
                      ref: "searchBar",
                      "onUpdate:modelValue":
                        t[0] || (t[0] = (e) => (this.searchedItem = e)),
                      onKeyup:
                        t[1] ||
                        (t[1] = (0, r.D2)(
                          (...e) =>
                            this.filterListandPress &&
                            this.filterListandPress(...e),
                          ["enter"]
                        )),
                      onFocus:
                        t[2] || (t[2] = (e) => (this.noActiveSearch = !0)),
                      onInput:
                        t[3] ||
                        (t[3] = (...e) =>
                          this.filterList && this.filterList(...e)),
                    },
                    null,
                    544
                  ),
                  [[r.nr, this.searchedItem]]
                ),
                (0, o._)("button", {
                  onClick:
                    t[4] ||
                    (t[4] = (...e) =>
                      this.filterListandPress && this.filterListandPress(...e)),
                }),
              ]),
              (0, o._)("ul", null, [
                this.noResults
                  ? ((0, o.wg)(),
                    (0, o.iD)(
                      "span",
                      f,
                      "Sorry, couldn't find any result for this keyword"
                    ))
                  : (0, o.kq)("", !0),
                ((0, o.wg)(!0),
                (0, o.iD)(
                  o.HY,
                  null,
                  (0, o.Ko)(s.showOnSearch, (e) =>
                    (0, o.wy)(
                      ((0, o.wg)(),
                      (0, o.iD)("li", { key: e.id }, [
                        (0, o.Wm)(u, { videoData: e }, null, 8, ["videoData"]),
                      ])),
                      [[r.F8, !this.noActiveSearch]]
                    )
                  ),
                  128
                )),
                ((0, o.wg)(!0),
                (0, o.iD)(
                  o.HY,
                  null,
                  (0, o.Ko)(s.videosList, (e) =>
                    (0, o.wy)(
                      ((0, o.wg)(),
                      (0, o.iD)("li", { key: e.id }, [
                        (0, o.Wm)(u, { videoData: e }, null, 8, ["videoData"]),
                      ])),
                      [[r.F8, this.noActiveSearch]]
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        n(6699);
        var p = n(6265),
          m = n.n(p),
          y = n(7139);
        function g(e, t, n, r, i, s) {
          const a = (0, o.up)("router-link");
          return (
            (0, o.wg)(),
            (0, o.j4)(
              a,
              {
                to: {
                  name: "video",
                  params: {
                    id: n.videoData.youtubeId,
                    title: n.videoData.title,
                    author: n.videoData.author,
                  },
                },
              },
              {
                default: (0, o.w5)(() => [
                  (0, o._)("div", null, [
                    (0, o._)("h1", null, (0, y.zw)(n.videoData.title), 1),
                    (0, o._)("h2", null, (0, y.zw)(n.videoData.author), 1),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["to"]
            )
          );
        }
        var b = { name: "video-list-element", props: { videoData: Object } };
        const w = (0, a.Z)(b, [
          ["render", g],
          ["__scopeId", "data-v-3f65bdd2"],
        ]);
        var L = w,
          O = {
            name: "HomePage",
            components: { VideoListElement: L },
            data() {
              return {
                videosList: void 0,
                searchedItem: "",
                showOnSearch: [],
                noActiveSearch: !0,
                noResults: !1,
              };
            },
            methods: {
              getVideos() {
                m()
                  .get(
                    "https://ott-fogliata.github.io/vuejs-s2i-repository/yoyo.json"
                  )
                  .then((e) => (this.videosList = e.data))
                  .catch((e) => {
                    console.log(e), alert("An error has occured.");
                  });
              },
              filterList() {
                if (((this.noResults = !1), "" != this.searchedItem)) {
                  (this.noActiveSearch = !1), (this.showOnSearch = []);
                  for (let e in this.videosList) {
                    this.searchedItem = this.searchedItem.toLowerCase();
                    let t = this.searchedItem.split(" "),
                      n = `${this.videosList[e].title} ${this.videosList[e].author}`;
                    (n = n.toLowerCase()),
                      t.every((e) => n.includes(e)) &&
                        (this.showOnSearch.includes(this.videosList[e]) ||
                          this.showOnSearch.push(this.videosList[e]));
                  }
                  0 == this.showOnSearch.length && (this.noResults = !0);
                } else this.noActiveSearch = !0;
              },
              filterListandPress() {
                this.filterList(),
                  this.$refs.searchBar.blur(),
                  (this.searchedItem = "");
              },
            },
            beforeMount() {
              this.getVideos();
            },
          };
        const _ = (0, a.Z)(O, [
          ["render", v],
          ["__scopeId", "data-v-42bd6a0d"],
        ]);
        var k = _;
        const S = [
            { path: "/yoyo-friends/", name: "home", component: k },
            { path: "/", redirect: { name: "home" } },
            {
              path: "/yoyo-friends/video/:id/:author/:title",
              name: "video",
              component: () => n.e(221).then(n.bind(n, 5221)),
              props: !0,
            },
            {
              path: "/yoyo-friends/404",
              name: "not-found",
              component: () => n.e(913).then(n.bind(n, 964)),
            },
            { path: "/:catchAll(.*)", redirect: "/yoyo-friends/404" },
          ],
          D = (0, d.p7)({ history: (0, d.PO)(), routes: S });
        var A = D,
          j = n(3766);
        let C = (0, r.ri)(l);
        C.use(A)
          .use((0, j.WB)())
          .mount("#app");
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, r, o, i) {
        if (!r) {
          var s = 1 / 0;
          for (l = 0; l < e.length; l++) {
            (r = e[l][0]), (o = e[l][1]), (i = e[l][2]);
            for (var a = !0, u = 0; u < r.length; u++)
              (!1 & i || s >= i) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](r[u]);
              })
                ? r.splice(u--, 1)
                : ((a = !1), i < s && (s = i));
            if (a) {
              e.splice(l--, 1);
              var c = o();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        i = i || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
        e[l] = [r, o, i];
      };
    })(),
    (function () {
      n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return n.d(t, { a: t }), t;
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, r) {
              return n.f[r](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      n.u = function (e) {
        return (
          "js/" + e + "." + { 221: "62e202cf", 913: "5de2e42f" }[e] + ".js"
        );
      };
    })(),
    (function () {
      n.miniCssF = function (e) {
        return (
          "css/" + e + "." + { 221: "17c44eda", 913: "33ed7c35" }[e] + ".css"
        );
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "yoyo-friends:";
      n.l = function (r, o, i, s) {
        if (e[r]) e[r].push(o);
        else {
          var a, u;
          if (void 0 !== i)
            for (
              var c = document.getElementsByTagName("script"), l = 0;
              l < c.length;
              l++
            ) {
              var d = c[l];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + i
              ) {
                a = d;
                break;
              }
            }
          a ||
            ((u = !0),
            (a = document.createElement("script")),
            (a.charset = "utf-8"),
            (a.timeout = 120),
            n.nc && a.setAttribute("nonce", n.nc),
            a.setAttribute("data-webpack", t + i),
            (a.src = r)),
            (e[r] = [o]);
          var h = function (t, n) {
              (a.onerror = a.onload = null), clearTimeout(f);
              var o = e[r];
              if (
                (delete e[r],
                a.parentNode && a.parentNode.removeChild(a),
                o &&
                  o.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            f = setTimeout(
              h.bind(null, void 0, { type: "timeout", target: a }),
              12e4
            );
          (a.onerror = h.bind(null, a.onerror)),
            (a.onload = h.bind(null, a.onload)),
            u && document.head.appendChild(a);
        }
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      n.p = "/yoyo-friends/";
    })(),
    (function () {
      var e = function (e, t, n, r) {
          var o = document.createElement("link");
          (o.rel = "stylesheet"), (o.type = "text/css");
          var i = function (i) {
            if (((o.onerror = o.onload = null), "load" === i.type)) n();
            else {
              var s = i && ("load" === i.type ? "missing" : i.type),
                a = (i && i.target && i.target.href) || t,
                u = new Error(
                  "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                );
              (u.code = "CSS_CHUNK_LOAD_FAILED"),
                (u.type = s),
                (u.request = a),
                o.parentNode.removeChild(o),
                r(u);
            }
          };
          return (
            (o.onerror = o.onload = i),
            (o.href = t),
            document.head.appendChild(o),
            o
          );
        },
        t = function (e, t) {
          for (
            var n = document.getElementsByTagName("link"), r = 0;
            r < n.length;
            r++
          ) {
            var o = n[r],
              i = o.getAttribute("data-href") || o.getAttribute("href");
            if ("stylesheet" === o.rel && (i === e || i === t)) return o;
          }
          var s = document.getElementsByTagName("style");
          for (r = 0; r < s.length; r++) {
            (o = s[r]), (i = o.getAttribute("data-href"));
            if (i === e || i === t) return o;
          }
        },
        r = function (r) {
          return new Promise(function (o, i) {
            var s = n.miniCssF(r),
              a = n.p + s;
            if (t(s, a)) return o();
            e(r, a, o, i);
          });
        },
        o = { 143: 0 };
      n.f.miniCss = function (e, t) {
        var n = { 221: 1, 913: 1 };
        o[e]
          ? t.push(o[e])
          : 0 !== o[e] &&
            n[e] &&
            t.push(
              (o[e] = r(e).then(
                function () {
                  o[e] = 0;
                },
                function (t) {
                  throw (delete o[e], t);
                }
              ))
            );
      };
    })(),
    (function () {
      var e = { 143: 0 };
      (n.f.j = function (t, r) {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var i = new Promise(function (n, r) {
              o = e[t] = [n, r];
            });
            r.push((o[2] = i));
            var s = n.p + n.u(t),
              a = new Error(),
              u = function (r) {
                if (n.o(e, t) && ((o = e[t]), 0 !== o && (e[t] = void 0), o)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    s = r && r.target && r.target.src;
                  (a.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + s + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = i),
                    (a.request = s),
                    o[1](a);
                }
              };
            n.l(s, u, "chunk-" + t, t);
          }
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, r) {
          var o,
            i,
            s = r[0],
            a = r[1],
            u = r[2],
            c = 0;
          if (
            s.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in a) n.o(a, o) && (n.m[o] = a[o]);
            if (u) var l = u(n);
          }
          for (t && t(r); c < s.length; c++)
            (i = s[c]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(l);
        },
        r = (self["webpackChunkyoyo_friends"] =
          self["webpackChunkyoyo_friends"] || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = n.O(void 0, [998], function () {
    return n(9022);
  });
  r = n.O(r);
})();
//# sourceMappingURL=app.72ff9671.js.map
