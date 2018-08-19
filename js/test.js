(function () {
    "use strict";
    var t, e, n, i, o;
    t = window, e = console, i = t.location, t.self !== t.top && 0 !== (null != (o = i.pathname) ? o.indexOf("/studio/obsolete_paper/connect") : void 0) ? (n = "color: red; font-size: 2.5em; line-height: 2em; padding: 0.5em; background: yellow;", e.warn("%c鎮ㄦ墍浣跨敤鐨勯〉闈紝鐢辩绫虫彁渚�", n), e.warn("%c鎴戜滑娆㈣繋鍚堜綔锛屼絾璇锋偍涓庢垜浠仈绯伙紝鍛婄煡浣跨敤鏂瑰紡銆�", n), e.warn("%c鎴戜滑淇濈暀涓€鍒囨潈鍒┿€�", n), e.warn("%chttp://xiumi.us", n), e.warn("%cEmail: support@xiumi.us", n), e.warn("%cCopyright 漏 2014 绉€鐫夸俊鎭鎶€锛堜笂娴凤級鏈夐檺鍏徃. All rights reserved.", n)) : (n = "color: #0f0; font-size: 1.5em; line-height: 3em; padding: 1em; background: rgba(10, 10, 10, 1);", e.info("%c鍠滄鐮旂┒绉€绫崇殑浠ｇ爜锛岃繕鏄彂鐜颁簡浠€涔坆ug锛熷憡璇夋垜浠惂~ :)", n), e.info("%cEmail: support@xiumi.us", n), e.warn("%c浣嗘姄鍙栦唬鐮佸彟寤虹珯锛岄夯楹诲彲鏄鎵損p鐨勫摕銆�", n + "color: #f50;"), e.warn("%cCopyright 漏 2014 绉€鐫夸俊鎭鎶€锛堜笂娴凤級鏈夐檺鍏徃. All rights reserved.", n + "color: #f50;"))
}).call(this),
    function () {
        "use strict";
        window.namespace = {
            _ns: {},
            reg: function (t) {
                var e, n, i, o, s;
                for (i = this._ns, e = 0, n = (s = t.split(".")).length; e < n; e++) i = i[o = s[e]] = i[o] || {};
                return i
            },
            use: function (t) {
                var e, n, i, o;
                for (i = this._ns, e = 0, n = (o = t.split(".")).length; e < n && (i = i[o[e]]); e++);
                return i
            }
        }
    }.call(this),
    function (t, e, n) {
        "use strict";
        if (!e) throw Error("window.angular is not defined.");
        if (!n) throw Error("window.Hammer is not defined.");
        var i;
        e.injector(["ng"]).invoke(["$rootScope", function (t) {
            i = t.$new()
        }]);
        var o = e.module("hammer", []);
        ["hold", "tap", "doubletap", "drag", "dragstart", "dragend", "dragup", "dragdown", "dragleft", "dragright", "swipe", "swipeup", "swipedown", "swipeleft", "swiperight", "transform", "transformstart", "transformend", "rotate", "pinch", "pinchin", "pinchout", "touch", "release"].forEach(function (t) {
            var e = "hammer" + t[0].toUpperCase() + t.slice(1);
            o.directive(e, ["$parse", function (o) {
                return function (s, r, a) {
                    var l, c, u = i.$eval(a[e]);
                    void 0 === u ? l = o(a[e]) : (l = o(u.fn), delete u.fn, c = u), n(r[0], c).on(t, function (t) {
                        s.$apply(function () {
                            l(s, {
                                $event: t
                            })
                        })
                    })
                }
            }])
        })
    }(window, window.angular, window.Hammer),
    function () {
        var t, e, n, i, o, s, r, a, l, c, u, d, p, f, h, m, g, v, y, b, w, x, C, S, E, T, k, P, _ = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            },
            A = [].indexOf || function (t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            },
            $ = [].slice;
        for (v in g = !0, S = function (t) {
                return "undefined" != typeof console && null !== console && console.warn("OriDomi: Missing support for `" + t + "`."), g = !1
            }, T = function (t) {
                var e, n, i;
                for (n = 0, i = b.length; i > n; n++)
                    if ((e = b[n] + a(t)) in E.style) return e;
                return t in E.style && t
            }, n = function (t, e) {
                var n, i, o;
                for (n in i = "." + t + "{", e) o = e[n], n in u && ((n = u[n]).match(/^(webkit|moz|ms)/i) && (n = "-" + n)), i += n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() + ":" + o + ";";
                return C += i + "}"
            }, h = function (t) {
                return u.gradientProp + "(" + t + ", rgba(0, 0, 0, .5) 0%, rgba(255, 255, 255, .35) 100%)"
            }, a = function (t) {
                return t[0].toUpperCase() + t.slice(1)
            }, c = function (t) {
                var e;
                return (e = document.createElement("div")).className = f[t], e
            }, l = function (t, e, n) {
                var i;
                return (i = t.cloneNode(e)).classList.add(f[n]), i
            }, m = function (t) {
                return t.style[u.transform] = "translate3d(-99999px, 0, 0)"
            }, x = function (t) {
                return t.style[u.transform] = "translate3d(0, 0, 0)"
            }, w = function (t) {
                return function () {
                    var e, n, i, o, s, r;
                    if (this._touchStarted) return t.apply(this, arguments);
                    switch (e = arguments[0], n = arguments[1], i = arguments[2], r = {}, s = o = null, t.length) {
                        case 1:
                            if (r.callback = e, !this.isFoldedUp) return "function" == typeof r.callback ? r.callback() : void 0;
                            break;
                        case 2:
                            "function" == typeof e ? r.callback = e : (o = e, r.callback = n);
                            break;
                        case 3:
                            s = e, 2 === arguments.length ? "object" == typeof n ? r = n : "function" == typeof n ? r.callback = n : o = n : 3 === arguments.length && (o = n, "object" == typeof i ? r = i : "function" == typeof i && (r.callback = i))
                    }
                    return null == s && (s = this._lastOp.angle || 0), o || (o = this._lastOp.anchor), this._queue.push([t, this._normalizeAngle(s), this._getLonghandAnchor(o), r]), this._step(), this
                }
            }, p = function (t) {
                return setTimeout(t, 0)
            }, y = function () {}, t = ("undefined" != typeof window && null !== window && null != (P = window.$) ? P.data : void 0) ? window.$ : null, s = (i = ["left", "right", "top", "bottom"]).slice(0, 2), o = i.slice(2), E = document.createElement("div"), C = "", b = ["Webkit", "Moz", "ms"], r = "oridomi", f = {
                active: "active",
                clone: "clone",
                holder: "holder",
                stage: "stage",
                stageLeft: "stage-left",
                stageRight: "stage-right",
                stageTop: "stage-top",
                stageBottom: "stage-bottom",
                content: "content",
                mask: "mask",
                maskH: "mask-h",
                maskV: "mask-v",
                panel: "panel",
                panelH: "panel-h",
                panelV: "panel-v",
                shader: "shader",
                shaderLeft: "shader-left",
                shaderRight: "shader-right",
                shaderTop: "shader-top",
                shaderBottom: "shader-bottom"
            }) k = f[v], f[v] = r + "-" + k;
        u = new function () {
                var t, e, n, i;
                for (e = 0, n = (i = ["transform", "transformOrigin", "transformStyle", "transitionProperty", "transitionDuration", "transitionDelay", "transitionTimingFunction", "perspective", "perspectiveOrigin", "backfaceVisibility", "boxSizing", "mask"]).length; n > e; e++) this[t = i[e]] = t;
                return this
            },
            function () {
                var t, e, o, s, r, l, c, d, p, m;
                for (e in u)
                    if (l = u[e], u[e] = T(l), !u[e]) return S(l);
                if (o = "preserve-3d", E.style[u.transformStyle] = o, E.style[u.transformStyle] !== o) return S(o);
                for (v in u.gradientProp = function () {
                        var t, e, n;
                        for (e = 0, n = b.length; n > e; e++)
                            if (t = "-" + b[e].toLowerCase() + "-linear-gradient", E.style.backgroundImage = t + "(left, #000, #fff)", -1 !== E.style.backgroundImage.indexOf("gradient")) return t;
                        return "linear-gradient"
                    }(), p = function () {
                        var t, e, n, i, o;
                        for (i = 0, o = b.length; o > i; i++)
                            if (n = b[i], e = "grab", E.style.cursor = t = "-" + n.toLowerCase() + "-" + e, E.style.cursor === t) return [t, "-" + n.toLowerCase() + "-grabbing"];
                        return E.style.cursor = e, E.style.cursor === e ? [e, "grabbing"] : ["move", "move"]
                    }(), u.grab = p[0], u.grabbing = p[1], u.transformProp = (s = u.transform.match(/(\w+)Transform/i)) ? "-" + s[1].toLowerCase() + "-transform" : "transform", u.transitionEnd = function () {
                        switch (u.transitionProperty.toLowerCase()) {
                            case "transitionproperty":
                                return "transitionEnd";
                            case "webkittransitionproperty":
                                return "webkitTransitionEnd";
                            case "moztransitionproperty":
                                return "transitionend";
                            case "mstransitionproperty":
                                return "msTransitionEnd"
                        }
                    }(), n(f.active, {
                        backgroundColor: "transparent !important",
                        backgroundImage: "none !important",
                        boxSizing: "border-box !important",
                        border: "none !important",
                        outline: "none !important",
                        padding: "0 !important",
                        position: "relative",
                        transformStyle: o + " !important",
                        mask: "none !important"
                    }), n(f.clone, {
                        margin: "0 !important",
                        boxSizing: "border-box !important",
                        overflow: "hidden !important",
                        display: "block !important"
                    }), n(f.holder, {
                        width: "100%",
                        position: "absolute",
                        top: "0",
                        bottom: "0",
                        transformStyle: o
                    }), n(f.stage, {
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        transform: "translate3d(-9999px, 0, 0)",
                        margin: "0",
                        padding: "0",
                        transformStyle: o
                    }), m = {
                        Left: "0% 50%",
                        Right: "100% 50%",
                        Top: "50% 0%",
                        Bottom: "50% 100%"
                    }) k = m[v], n(f["stage" + v], {
                    perspectiveOrigin: k
                });
                for (n(f.shader, {
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        opacity: "0",
                        top: "0",
                        left: "0",
                        pointerEvents: "none",
                        transitionProperty: "opacity"
                    }), c = 0, d = i.length; d > c; c++) t = i[c], n(f["shader" + a(t)], {
                    background: h(t)
                });
                n(f.content, {
                    margin: "0 !important",
                    position: "relative !important",
                    float: "none !important",
                    boxSizing: "border-box !important",
                    overflow: "hidden !important"
                }), n(f.mask, {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    overflow: "hidden",
                    transform: "translate3d(0, 0, 0)",
                    outline: "1px solid transparent"
                }), n(f.panel, {
                    width: "100%",
                    height: "100%",
                    padding: "0",
                    position: "absolute",
                    transitionProperty: u.transformProp,
                    transformOrigin: "left",
                    transformStyle: o
                }), n(f.panelH, {
                    transformOrigin: "top"
                }), n(f.stageRight + " ." + f.panel, {
                    transformOrigin: "right"
                }), n(f.stageBottom + " ." + f.panel, {
                    transformOrigin: "bottom"
                }), (r = document.createElement("style")).type = "text/css", r.styleSheet ? r.styleSheet.cssText = C : r.appendChild(document.createTextNode(C)), document.head.appendChild(r)
            }(), d = {
                vPanels: 3,
                hPanels: 3,
                perspective: 1e3,
                shading: "hard",
                speed: 700,
                maxAngle: 90,
                ripple: 0,
                oriDomiClass: "oridomi",
                shadingIntensity: 1,
                easingMethod: "",
                gapNudge: 1,
                touchEnabled: !0,
                touchSensitivity: .25,
                touchStartCallback: y,
                touchMoveCallback: y,
                touchEndCallback: y
            }, e = function () {
                function e(t, n) {
                    var r, p, h, y, b, w, C, S, E, T, P, $, M, H, L, D, O, I, N, z, F, R, Y, X, B, q, W, j, U, G, V, Q, J, Z, K, tt, et, nt, it, ot, st, rt, at, lt, ct;
                    if (this.el = t, null == n && (n = {}), this._onMouseOut = _(this._onMouseOut, this), this._onTouchLeave = _(this._onTouchLeave, this), this._onTouchEnd = _(this._onTouchEnd, this), this._onTouchMove = _(this._onTouchMove, this), this._onTouchStart = _(this._onTouchStart, this), this._stageReset = _(this._stageReset, this), this._conclude = _(this._conclude, this), this._onTransitionEnd = _(this._onTransitionEnd, this), this._step = _(this._step, this), g) {
                        if (!(this instanceof e)) return new e(this.el, n);
                        if ("string" == typeof this.el && (this.el = document.querySelector(this.el)), !this.el || 1 !== this.el.nodeType) return void("undefined" != typeof console && null !== console && console.warn("OriDomi: First argument must be a DOM element"));
                        for (this._config = new function () {
                                for (v in d) k = d[v], this[v] = v in n ? n[v] : k;
                                return this
                            }, this._config.ripple = Number(this._config.ripple), this._queue = [], this._panels = {}, this._stages = {}, this._lastOp = {
                                anchor: i[0]
                            }, this._shading = this._config.shading, !0 === this._shading && (this._shading = "hard"), this._shading && (this._shaders = {}, X = {}, (Y = c("shader")).style[u.transitionDuration] = this._config.speed + "ms", Y.style[u.transitionTimingFunction] = this._config.easingMethod), (q = c("stage")).style[u.perspective] = this._config.perspective + "px", W = 0, V = i.length; V > W; W++)
                            if (p = i[W], this._panels[p] = [], this._stages[p] = l(q, !1, "stage" + a(p)), this._shading) {
                                if (this._shaders[p] = {}, A.call(s, p) >= 0)
                                    for (j = 0, Q = s.length; Q > j; j++) B = s[j], this._shaders[p][B] = [];
                                else
                                    for (U = 0, J = o.length; J > U; U++) B = o[U], this._shaders[p][B] = [];
                                X[p] = l(Y, !1, "shader" + a(p))
                            }
                        for (w = l(this.el, !0, "content"), (P = c("mask")).appendChild(w), (I = c("panel")).style[u.transitionDuration] = this._config.speed + "ms", I.style[u.transitionTimingFunction] = this._config.easingMethod, M = {
                                left: [],
                                top: []
                            }, G = 0, Z = (lt = ["x", "y"]).length; Z > G; G++) {
                            if ("x" === lt[G] ? (h = s, $ = "width", y = "V") : (h = o, $ = "height", y = "H"), "number" == typeof (L = this._config[D = y.toLowerCase() + "Panels"])) C = Math.abs(parseInt(L, 10)), N = 100 / C, L = this._config[D] = function () {
                                var t, e;
                                for (e = [], t = 0; C >= 0 ? C > t : t > C; C >= 0 ? t++ : t--) e.push(N);
                                return e
                            }();
                            else if (C = L.length, !(99 <= (ct = L.reduce(function (t, e) {
                                    return t + e
                                })) && 100.1 >= ct)) throw new Error("OriDomi: Panel percentages do not sum to 100");
                            if (T = l(P, !0, "mask" + y), this._shading)
                                for (it = 0, K = h.length; K > it; it++) p = h[it], T.appendChild(X[p]);
                            for ((F = l(I, !1, "panel" + y)).appendChild(T), R = ot = 0, tt = h.length; tt > ot; R = ++ot) {
                                for (p = h[R], O = st = 0; C >= 0 ? C > st : st > C; O = C >= 0 ? ++st : --st) {
                                    if ((b = (H = F.cloneNode(!0)).children[0].children[0]).style.width = b.style.height = "100%", R ? (H.style[u.origin] = p, z = (E = L.length - O - 1) + 1) : (z = (E = O) - 1, M[p].push(0 === O ? 0 : (M[p][z] - 100) * (L[z] / L[E]))), 0 === O ? (H.style[p] = "0", H.style[$] = L[E] + "%") : (H.style[p] = "100%", H.style[$] = L[E] / L[z] * 100 + "%"), this._shading)
                                        for (S = rt = 0, et = h.length; et > rt; S = ++rt) r = h[S], this._shaders[p][r][O] = H.children[0].children[S + 1];
                                    b.style[$] = b.style["max" + a($)] = C / L[E] * 1e4 / C + "%", b.style[h[0]] = M[h[0]][E] + "%", this._transformPanel(H, 0, p), this._panels[p][O] = H, 0 !== O && this._panels[p][O - 1].appendChild(H)
                                }
                                this._stages[p].appendChild(this._panels[p][0])
                            }
                        }
                        for (this._stageHolder = c("holder"), at = 0, nt = i.length; nt > at; at++) p = i[at], this._stageHolder.appendChild(this._stages[p]);
                        "absolute" === window.getComputedStyle(this.el).position && (this.el.style.position = "absolute"), this.el.classList.add(f.active), x(this._stages.left), this._cloneEl = l(this.el, !0, "clone"), this._cloneEl.classList.remove(f.active), m(this._cloneEl), this.el.innerHTML = "", this.el.appendChild(this._cloneEl), this.el.appendChild(this._stageHolder), this.el.parentNode.style[u.transformStyle] = "preserve-3d", this.accordion(0), this._config.ripple && this.setRipple(this._config.ripple), this._config.touchEnabled && this.enableTouch()
                    }
                }
                return e.prototype._step = function () {
                    var t, e, n, i, o, s, r;
                    if (!this._inTrans && this._queue.length) return this._inTrans = !0, s = this._queue.shift(), n = s[0], e = s[1], t = s[2], o = s[3], this.isFrozen && this.unfreeze(), r = this, i = function () {
                        var i;
                        return r._setCallback({
                            angle: e,
                            anchor: t,
                            options: o,
                            fn: n
                        }), i = [e, t, o], n.length < 3 && i.shift(), n.apply(r, i)
                    }, this.isFoldedUp ? 2 === n.length ? i() : this._unfold(i) : t !== this._lastOp.anchor ? this._stageReset(t, i) : i()
                }, e.prototype._isIdenticalOperation = function (t) {
                    var e, n, i, o, s;
                    if (!this._lastOp.fn) return !0;
                    if (this._lastOp.reset) return !1;
                    for (n = 0, i = (o = ["angle", "anchor", "fn"]).length; i > n; n++)
                        if (e = o[n], this._lastOp[e] !== t[e]) return !1;
                    for (v in s = t.options)
                        if ((k = s[v]) !== this._lastOp.options[v] && "callback" !== v) return !1;
                    return !0
                }, e.prototype._setCallback = function (t) {
                    return !this._config.speed || this._isIdenticalOperation(t) ? this._conclude(t.options.callback) : this._panels[this._lastOp.anchor][0].addEventListener(u.transitionEnd, this._onTransitionEnd, !1), (this._lastOp = t).reset = !1
                }, e.prototype._onTransitionEnd = function (t) {
                    return t.currentTarget.removeEventListener(u.transitionEnd, this._onTransitionEnd, !1), this._conclude(this._lastOp.options.callback, t)
                }, e.prototype._conclude = function (t, e) {
                    return p((n = this, function () {
                        return n._inTrans = !1, n._step(), "function" == typeof t ? t(e, n) : void 0
                    }));
                    var n
                }, e.prototype._transformPanel = function (t, e, n, i) {
                    var o, s, r, a;
                    switch (s = r = a = 0, n) {
                        case "left":
                            r = e, o = "X(-";
                            break;
                        case "right":
                            r = -e, o = "X(";
                            break;
                        case "top":
                            s = -e, o = "Y(-";
                            break;
                        case "bottom":
                            s = e, o = "Y("
                    }
                    return i && (s = r = a = e), t.style[u.transform] = "rotateX(" + s + "deg) rotateY(" + r + "deg) rotateZ(" + a + "deg) translate" + o + this._config.gapNudge + "px)"
                }, e.prototype._normalizeAngle = function (t) {
                    var e;
                    return t = parseFloat(t, 10), e = this._config.maxAngle, isNaN(t) ? 0 : t > e ? e : -e > t ? -e : t
                }, e.prototype._setTrans = function (t, e, n) {
                    return null == n && (n = this._lastOp.anchor), this._iterate(n, (i = this, function (o, s, r) {
                        return i._setPanelTrans.apply(i, [n].concat($.call(arguments), [t], [e]))
                    }));
                    var i
                }, e.prototype._setPanelTrans = function (t, e, n, i, r, a) {
                    var l, c, d, p, f, h;
                    if (l = function () {
                            switch (a) {
                                case 0:
                                    return 0;
                                case 1:
                                    return this._config.speed / i * n;
                                case 2:
                                    return this._config.speed / i * (i - n - 1)
                            }
                        }.call(this), e.style[u.transitionDuration] = r + "ms", e.style[u.transitionDelay] = l + "ms", this._shading)
                        for (p = 0, f = (h = A.call(s, t) >= 0 ? s : o).length; f > p; p++) d = h[p], (c = this._shaders[t][d][n]).style[u.transitionDuration] = r + "ms", c.style[u.transitionDelay] = l + "ms";
                    return l
                }, e.prototype._setShader = function (t, e, n) {
                    var i, o, r, a;
                    return a = (o = Math.abs(n)) / 90 * this._config.shadingIntensity, "hard" === this._shading ? (a *= .15, n = this._lastOp.angle < 0 ? o : -o) : a *= .4, A.call(s, e) >= 0 ? (0 > n ? (i = a, r = 0) : (i = 0, r = a), this._shaders[e].left[t].style.opacity = i, this._shaders[e].right[t].style.opacity = r) : (0 > n ? (i = 0, r = a) : (i = a, r = 0), this._shaders[e].top[t].style.opacity = i, this._shaders[e].bottom[t].style.opacity = r)
                }, e.prototype._showStage = function (t) {
                    return t !== this._lastOp.anchor ? (m(this._stages[this._lastOp.anchor]), this._lastOp.anchor = t, this._lastOp.reset = !0, this._stages[t].style[u.transform] = "translate3d(" + function () {
                        switch (t) {
                            case "left":
                                return "0, 0, 0)";
                            case "right":
                                return "-" + this._config.vPanels.length + "px, 0, 0)";
                            case "top":
                                return "0, 0, 0)";
                            case "bottom":
                                return "0, -" + this._config.hPanels.length + "px, 0)"
                        }
                    }.call(this)) : void 0
                }, e.prototype._stageReset = function (t, e) {
                    var n, i, o;
                    return o = this, n = function (i) {
                        return i && i.currentTarget.removeEventListener(u.transitionEnd, n, !1), o._showStage(t), p(e)
                    }, 0 === this._lastOp.angle ? n() : (this._panels[this._lastOp.anchor][0].addEventListener(u.transitionEnd, n, !1), this._iterate(this._lastOp.anchor, (i = this, function (t, e) {
                        return i._transformPanel(t, 0, i._lastOp.anchor), i._shading ? i._setShader(e, i._lastOp.anchor, 0) : void 0
                    })))
                }, e.prototype._getLonghandAnchor = function (t) {
                    switch (t.toString()) {
                        case "left":
                        case "l":
                        case "4":
                            return "left";
                        case "right":
                        case "r":
                        case "2":
                            return "right";
                        case "top":
                        case "t":
                        case "1":
                            return "top";
                        case "bottom":
                        case "b":
                        case "3":
                            return "bottom";
                        default:
                            return "left"
                    }
                }, e.prototype._setCursor = function (t) {
                    return null == t && (t = this._touchEnabled), this.el.style.cursor = t ? u.grab : "default"
                }, e.prototype._setTouch = function (t) {
                    var e, n, i, o, s, r, a, l, c;
                    if (t) {
                        if (this._touchEnabled) return this;
                        o = "addEventListener"
                    } else {
                        if (!this._touchEnabled) return this;
                        o = "removeEventListener"
                    }
                    this._touchEnabled = t, this._setCursor(), i = [
                        ["TouchStart", "MouseDown"],
                        ["TouchEnd", "MouseUp"],
                        ["TouchMove", "MouseMove"],
                        ["TouchLeave", "MouseLeave"]
                    ], s = "onmouseleave" in window;
                    for (r = 0, l = i.length; l > r; r++)
                        for (a = 0, c = (n = i[r]).length; c > a; a++) {
                            if ("TouchLeave" === (e = n[a]) && !s) {
                                this.el[o]("mouseout", this._onMouseOut, !1);
                                break
                            }
                            this.el[o](e.toLowerCase(), this["_on" + n[0]], !1)
                        }
                    return this
                }, e.prototype._onTouchStart = function (t) {
                    var e, n;
                    if (this._touchEnabled && !this.isFoldedUp) return t.preventDefault(), this.emptyQueue(), this._touchStarted = !0, this.el.style.cursor = u.grabbing, this._setTrans(0, 0), this._touchAxis = (n = this._lastOp.anchor, A.call(s, n) >= 0 ? "x" : "y"), this["_" + this._touchAxis + "Last"] = this._lastOp.angle, this[e = "_" + this._touchAxis + "1"] = "mousedown" === t.type ? t["page" + this._touchAxis.toUpperCase()] : t.targetTouches[0]["page" + this._touchAxis.toUpperCase()], this._config.touchStartCallback(this[e], t)
                }, e.prototype._onTouchMove = function (t) {
                    var e, n;
                    if (this._touchEnabled && this._touchStarted) return t.preventDefault(), n = (("mousemove" === t.type ? t["page" + this._touchAxis.toUpperCase()] : t.targetTouches[0]["page" + this._touchAxis.toUpperCase()]) - this["_" + this._touchAxis + "1"]) * this._config.touchSensitivity, this._lastOp.angle < 0 ? (e = "right" === this._lastOp.anchor || "bottom" === this._lastOp.anchor ? this["_" + this._touchAxis + "Last"] - n : this["_" + this._touchAxis + "Last"] + n) > 0 && (e = 0) : 0 > (e = "right" === this._lastOp.anchor || "bottom" === this._lastOp.anchor ? this["_" + this._touchAxis + "Last"] + n : this["_" + this._touchAxis + "Last"] - n) && (e = 0), this._lastOp.angle = e = this._normalizeAngle(e), this._lastOp.fn.call(this, e, this._lastOp.anchor, this._lastOp.options), this._config.touchMoveCallback(e, t)
                }, e.prototype._onTouchEnd = function (t) {
                    return this._touchEnabled ? (this._touchStarted = this._inTrans = !1, this.el.style.cursor = u.grab, this._setTrans(this._config.speed, this._config.ripple), this._config.touchEndCallback(this["_" + this._touchAxis + "Last"], t)) : void 0
                }, e.prototype._onTouchLeave = function (t) {
                    return this._touchEnabled && this._touchStarted ? this._onTouchEnd(t) : void 0
                }, e.prototype._onMouseOut = function (t) {
                    return this._touchEnabled && this._touchStarted && t.toElement && !this.el.contains(t.toElement) ? this._onTouchEnd(t) : void 0
                }, e.prototype._unfold = function (t) {
                    var e, n;
                    return this._inTrans = !0, e = this._lastOp.anchor, this._iterate(e, (n = this, function (i, o, s) {
                        var r, a, l, c;
                        return r = n._setPanelTrans.apply(n, [e].concat($.call(arguments), [n._config.speed], [1])), a = i, l = o, c = r, p(function () {
                            return n._transformPanel(a, 0, n._lastOp.anchor), setTimeout(function () {
                                return x(a.children[0]), l === s - 1 && (n._inTrans = n.isFoldedUp = !1, "function" == typeof t && t(), n._lastOp.fn = n.accordion, n._lastOp.angle = 0), p(function () {
                                    return a.style[u.transitionDuration] = n._config.speed
                                })
                            }, c + .25 * n._config.speed)
                        })
                    }))
                }, e.prototype._iterate = function (t, e) {
                    var n, i, o, s, r, a, l;
                    for (l = [], n = s = 0, r = (a = o = this._panels[t]).length; r > s; n = ++s) i = a[n], l.push(e.call(this, i, n, o.length));
                    return l
                }, e.prototype.enableTouch = function () {
                    return this._setTouch(!0)
                }, e.prototype.disableTouch = function () {
                    return this._setTouch(!1)
                }, e.prototype.setSpeed = function (t) {
                    var e, n, o;
                    for (n = 0, o = i.length; o > n; n++) e = i[n], this._setTrans(this._config.speed = t, this._config.ripple, e);
                    return this
                }, e.prototype.freeze = function (t) {
                    return this.isFrozen ? "function" == typeof t && t() : this._stageReset(this._lastOp.anchor, (e = this, function () {
                        return e.isFrozen = !0, m(e._stageHolder), x(e._cloneEl), e._setCursor(!1), "function" == typeof t ? t() : void 0
                    })), this;
                    var e
                }, e.prototype.unfreeze = function () {
                    return this.isFrozen && (this.isFrozen = !1, m(this._cloneEl), x(this._stageHolder), this._setCursor(), this._lastOp.angle = 0), this
                }, e.prototype.destroy = function (e) {
                    return this.freeze((n = this, function () {
                        return n._setTouch(!1), t && t.data(n.el, r, null), n.el.innerHTML = n._cloneEl.innerHTML, n.el.classList.remove(f.active), "function" == typeof e ? e() : void 0
                    })), null;
                    var n
                }, e.prototype.emptyQueue = function () {
                    return this._queue = [], p((t = this, function () {
                        return t._inTrans = !1
                    })), this;
                    var t
                }, e.prototype.setRipple = function (t) {
                    return null == t && (t = 1), this._config.ripple = Number(t), this.setSpeed(this._config.speed), this
                }, e.prototype.constrainAngle = function (t) {
                    return this._config.maxAngle = parseFloat(t, 10) || d.maxAngle, this
                }, e.prototype.wait = function (t) {
                    var e, n;
                    return n = this, e = function () {
                        return setTimeout(n._conclude, t)
                    }, this._inTrans ? this._queue.push([e, this._lastOp.angle, this._lastOp.anchor, this._lastOp.options]) : e(), this
                }, e.prototype.modifyContent = function (t) {
                    var e, n, o, s, r, a, l, c, u;
                    for ("function" != typeof t && (o = t, s = function (t, e, n) {
                            var i, o;
                            if (e && (t.innerHTML = e), n) {
                                for (i in n) o = n[i], t.style[i] = o;
                                return null
                            }
                        }, t = function (t) {
                            var e, n, i, r, a, l, c, u;
                            for (i in o)
                                if (e = r = null, "string" == typeof (a = o[i]) ? e = a : (e = a.content, r = a.style), "" !== i)
                                    for (l = 0, c = (u = t.querySelectorAll(i)).length; c > l; l++) n = u[l], s(n, e, r);
                                else s(t, e, r);
                            return null
                        }), r = 0, l = i.length; l > r; r++)
                        for (e = i[r], n = a = 0, c = (u = this._panels[e]).length; c > a; n = ++a) t(u[n].children[0].children[0], n, e);
                    return this
                }, e.prototype.accordion = w(function (t, e, n) {
                    return this._iterate(e, (i = this, function (o, s) {
                        var r;
                        return r = s % 2 == 0 || n.twist ? t : -t, n.sticky ? 0 === s ? r = 0 : (s > 1 || n.stairs) && (r *= 2) : 0 !== s && (r *= 2), n.stairs && (r *= -1), i._transformPanel(o, r, e, n.fracture), !i._shading || 0 === s && n.sticky || 180 === Math.abs(r) ? void 0 : i._setShader(s, e, r)
                    }));
                    var i
                }), e.prototype.curl = w(function (t, e, n) {
                    return t /= A.call(s, e) >= 0 ? this._config.vPanels.length : this._config.hPanels.length, this._iterate(e, (i = this, function (n, o) {
                        return i._transformPanel(n, t, e), i._shading ? i._setShader(o, e, 0) : void 0
                    }));
                    var i
                }), e.prototype.ramp = w(function (t, e, n) {
                    return this._transformPanel(this._panels[e][1], t, e), this._iterate(e, (i = this, function (t, n) {
                        return 1 !== n && i._transformPanel(t, 0, e), i._shading ? i._setShader(n, e, 0) : void 0
                    }));
                    var i
                }), e.prototype.foldUp = w(function (t, e) {
                    return this.isFoldedUp ? "function" == typeof e ? e() : void 0 : this._stageReset(t, (n = this, function () {
                        return n._inTrans = n.isFoldedUp = !0, n._iterate(t, function (i, o, s) {
                            var r, a, l, c, u;
                            return a = n._config.speed, 0 === o && (a /= 2), r = n._setPanelTrans.apply(n, [t].concat($.call(arguments), [a], [2])), l = i, c = o, u = r, p(function () {
                                return n._transformPanel(l, 0 === c ? 90 : 170, t), setTimeout(function () {
                                    return 0 === c ? (n._inTrans = !1, "function" == typeof e ? e() : void 0) : m(l.children[0])
                                }, u + .25 * n._config.speed)
                            })
                        })
                    }));
                    var n
                }), e.prototype.unfold = w(function (t) {
                    return this._unfold.apply(this, arguments)
                }), e.prototype.map = function (t) {
                    return w((e = this, function (n, i, o) {
                        return e._iterate(i, function (s, r, a) {
                            return e._transformPanel(s, t(n, r, a), i, o.fracture)
                        })
                    })).bind(this);
                    var e
                }, e.prototype.reset = function (t) {
                    return this.accordion(0, {
                        callback: t
                    })
                }, e.prototype.reveal = function (t, e, n) {
                    return null == n && (n = {}), n.sticky = !0, this.accordion(t, e, n)
                }, e.prototype.stairs = function (t, e, n) {
                    return null == n && (n = {}), n.stairs = n.sticky = !0, this.accordion(t, e, n)
                }, e.prototype.fracture = function (t, e, n) {
                    return null == n && (n = {}), n.fracture = !0, this.accordion(t, e, n)
                }, e.prototype.twist = function (t, e, n) {
                    return null == n && (n = {}), n.fracture = n.twist = !0, this.accordion(t / 10, e, n)
                }, e.prototype.collapse = function (t, e) {
                    return null == e && (e = {}), e.sticky = !1, this.accordion(-this._config.maxAngle, t, e)
                }, e.prototype.collapseAlt = function (t, e) {
                    return null == e && (e = {}), e.sticky = !1, this.accordion(this._config.maxAngle, t, e)
                }, e.VERSION = "1.1.0", e.isSupported = g, e
            }(), ("undefined" != typeof module && null !== module ? module.exports : void 0) ? module.exports = e : ("undefined" != typeof define && null !== define ? define.amd : void 0) ? define(function () {
                return e
            }) : window.OriDomi = e, t && (t.prototype.oriDomi = function (n) {
                var i, o, s, a, l, c, u, d;
                if (!g) return this;
                if (!0 === n) return t.data(this[0], r);
                if ("string" == typeof n) {
                    if (a = n, "function" != typeof (s = e.prototype[a])) return "undefined" != typeof console && null !== console && console.warn("OriDomi: No such method `" + a + "`"), this;
                    for (l = 0, u = this.length; u > l; l++) i = this[l], (o = t.data(i, r)) || (o = t.data(i, r, new e(i, n))), s.apply(o, Array.prototype.slice.call(arguments).slice(1))
                } else
                    for (c = 0, d = this.length; d > c; c++) i = this[c], (o = t.data(i, r)) || t.data(i, r, new e(i, n));
                return this
            })
    }.call(this),
    function () {
        "use strict";
        var t, e;
        (e = angular.module("triton.directives", [])).filter("unsafe", ["$sce", function (t) {
            return function (e, n) {
                return null != e ? t.trustAsHtml(e) : void 0
            }
        }]), e.filter("unsafeResource", ["$sce", function (t) {
            return function (e, n) {
                return null != e ? t.trustAsResourceUrl(e) : void 0
            }
        }]), e.constant("VIDEO_URL_WHITE_LIST", ["http://v.qq.com/", "https://v.qq.com/", "http://player.youku.com/", "https://player.youku.com/", "http://www.tudou.com/", "https://www.tudou.com/", "http://player.pptv.com/", "https://player.pptv.com/", "http://open.iqiyi.com/", "https://open.iqiyi.com/"]), e.filter("videoUriWhiteList", ["$log", "VIDEO_URL_WHITE_LIST", function (t, e) {
            return function (t) {
                var n, i, o;
                if (!t) return "";
                for (n = 0, i = e.length; n < i; n++)
                    if (o = e[n], 0 === t.indexOf(o)) return t;
                return ""
            }
        }]), e.filter("eol2br", [function () {
            return function (t) {
                return null != t ? t.replace(/(?:\r\n|\r|\n)/g, "<br>") : void 0
            }
        }]), e.filter("hitCountText", [function () {
            return function (t) {
                return null == t ? "[ 鏃犺褰� ]" : "number" != typeof t ? t.toString() : t <= 1e4 ? t.toString() : Math.floor(t / 1e4) + "涓�+"
            }
        }]), e.factory("formUploader", ["$http", function (t) {
            var e;
            return e = {
                "Content-Type": void 0
            }, {
                submit: function (n, i, o) {
                    var s, r, a;
                    for (r in null == o && (o = e), s = new FormData, i) a = i[r], s.append(r, a);
                    return t.post(n, s, {
                        transformRequest: angular.identity,
                        headers: o
                    })
                }
            }
        }]), e.directive("fileModel", ["$parse", function (t) {
            return {
                restrict: "A",
                link: function (e, n, i) {
                    var o, s;
                    return o = t(i.fileModel), s = o.assign, n.on("change", function () {
                        return e.$apply(function () {
                            return s(e, n[0].files[0])
                        }), n[0].value = null
                    })
                }
            }
        }]), e.directive("filesModel", ["$parse", function (t) {
            return {
                restrict: "A",
                link: function (e, n, i) {
                    var o, s;
                    return o = t(i.filesModel), s = o.assign, n.on("change", function () {
                        return e.$apply(function () {
                            var t, i, o, r, a;
                            for (i = [], o = 0, r = (a = n[0].files).length; o < r; o++) t = a[o], i.push(t);
                            return s(e, i)
                        }), n[0].value = null
                    })
                }
            }
        }]), e.directive("fileChange", [function () {
            return {
                restrict: "A",
                scope: {
                    fileChange: "&"
                },
                link: function (t, e) {
                    return e.on("change", function () {
                        return t.$apply(function () {
                            return t.fileChange()
                        })
                    })
                }
            }
        }]), e.directive("stopPropagation", [function () {
            return {
                restrict: "A",
                link: function (t, e, n) {
                    var i, o;
                    return o = null, i = function (t) {
                        return t.stopPropagation()
                    }, n.$observe("stopPropagation", function (t) {
                        return o && e.off(o, i), e.on(t, i), o = t
                    })
                }
            }
        }]), e.directive("tnEditContent", [function () {
            return {
                restrict: "A",
                require: "ngModel",
                link: function (t, e, n, i) {
                    var o, s;
                    return s = "true" === n.stripBr, o = function () {
                        var t, n, o;
                        return o = (n = e.get(0)).innerText || n.textContent, t = s ? "" : "\n", o = o.replace(/(?:\r\n|\r|\n)/g, t), i.$setViewValue(o), i.$render()
                    }, e.bind("blur", function () {
                        return t.$apply(o)
                    }), i.$render = function () {
                        var t, n, o;
                        return o = i.$viewValue || "", t = s ? "" : "<br>", n = o.replace(/(?:\r\n|\r|\n)/g, t), e.html(n)
                    }, i.$render()
                }
            }
        }]), e.directive("tnBorderColor", [function () {
            var t;
            return t = {
                L: /border-left(-color)?\s*:.*\!important\s*/gim,
                T: /border-top(-color)?\s*:.*\!important\s*/gim,
                R: /border-right(-color)?\s*:.*\!important\s*/gim,
                B: /border-bottom(-color)?\s*:.*\!important\s*/gim
            }, {
                restrict: "A",
                link: function (e, n, i) {
                    var o, s, r, a, l, c;
                    for (c = (null != (l = n.attr("style")) ? l.split(";") : void 0) || [], s = {
                            L: !1,
                            T: !1,
                            R: !1,
                            B: !1
                        }, o = 0, r = c.length; o < r; o++) a = c[o], s.L || (s.L = t.L.test(a)), s.T || (s.T = t.T.test(a)), s.R || (s.R = t.R.test(a)), s.B || (s.B = t.B.test(a));
                    return e.$watch(i.tnBorderColor, function (t, e) {
                        if (s.L || n.css("border-left-color", t), s.T || n.css("border-top-color", t), s.R || n.css("border-right-color", t), !s.B) return n.css("border-bottom-color", t)
                    })
                }
            }
        }]), e.directive("tnEditHtmlContent", [function () {
            return {
                restrict: "A",
                require: "ngModel",
                link: function (t, e, n, i) {
                    var o;
                    return o = function () {
                        return i.$setViewValue(e.html())
                    }, t.$on("$destroy", function (t) {
                        return e.off("blur paste")
                    }), e.off("blur paste"), e.on("blur", function () {
                        return t.$apply(o)
                    }), e.on("paste", function (t) {
                        var e, n, i;
                        return i = (e = t.clipboardData || (null != (n = t.originalEvent) ? n.clipboardData : void 0) || window.clipboardData).getData("text/plain") || e.getData("Text"), ("function" == typeof document.queryCommandSupported ? document.queryCommandSupported("insertText") : void 0) ? ("function" == typeof document.execCommand && document.execCommand("insertText", !1, i), t.preventDefault(), t.stopPropagation()) : ("function" == typeof document.queryCommandSupported ? document.queryCommandSupported("insertHTML") : void 0) ? ("function" == typeof document.execCommand && document.execCommand("insertHTML", !1, i), t.preventDefault(), t.stopPropagation()) : void 0
                    }), i.$render = function () {
                        var t, n;
                        return t = n = i.$viewValue || "", n.length > 0 && (0 !== n.indexOf("<section") && (t = "<section>" + n + "</section>"), t = t.replace(/(?:\r\n|\r|\n)/g, "<br>")), n && t !== n && i.$setViewValue(t), e.html(t)
                    }, i.$render()
                }
            }
        }]), e.directive("qrcode", [function () {
            return {
                restrict: "AE",
                scope: {
                    qrData: "="
                },
                link: function (t, e, n) {
                    var i, o, s, r, a, l;
                    return e.addClass("qrcode"), i = {
                        L: 1,
                        M: 0,
                        Q: 3,
                        H: 2
                    }, l = parseInt(n.qrSize) || 256, a = n.qrRender || "canvas", s = n.qrForeground || "black", o = n.qrBackground || "transparent", r = i[n.qrLevel || "M"], t.$watch("qrData", function (t) {
                        if (null != t) return e.empty(), e.qrcode({
                            text: t.toString(),
                            render: a,
                            width: l,
                            height: l,
                            typeNumber: -1,
                            correctLevel: r,
                            background: o,
                            foreground: s
                        })
                    })
                }
            }
        }]), e.directive("tnUeditor", ["$q", "$document", "$window", function (t, e, n) {
            var i, o, s, r;
            return !1, r = null, s = null, o = e.get(0), i = function () {
                var e;
                return e = t.defer(), angular.isDefined(n.UE) ? e.resolve(n.UE) : null != s ? $("#__ueditor__").on("load", function () {
                    return !0, e.resolve(n.UE)
                }) : ((r = o.createElement("script")).src = "/3rd/ueditor/20141210/ueditor.config.js", o.body.appendChild(r), (s = o.createElement("script")).src = "/3rd/ueditor/20141210/ueditor.all.min.js", s.id = "__ueditor__", o.body.appendChild(s), $("#__ueditor__").on("load", function () {
                    return !0, e.resolve(n.UE)
                })), e.promise
            }, {
                restrict: "AE",
                require: "ngModel",
                scope: {
                    editorReady: "&",
                    selectionChange: "&"
                },
                link: function (t, e, n, o) {
                    var s, r;
                    return r = Math.floor(1e6 * Math.random()).toString(), e.attr("id", r), s = function (e) {
                        var n;
                        return n = e.getEditor(r, {
                            initialFrameWidth: "100%"
                        }), window._ue = n, n.ready(function (e) {
                            var i;
                            return i = function () {
                                var e;
                                return e = n.getContent(), o.$setViewValue(e), "function" == typeof t.selectionChange ? t.selectionChange({
                                    ue: n
                                }) : void 0
                            }, n.addListener("selectionchange", function () {
                                return t.$apply(i)
                            }), o.$render = function () {
                                var t;
                                return t = o.$viewValue || "", n.setContent(t)
                            }, o.$render(), "function" == typeof t.editorReady ? t.editorReady({
                                ue: n
                            }) : void 0
                        })
                    }, i().then(function (t) {
                        return s(t)
                    })
                }
            }
        }]), (t = function (t, e, n) {
            return t.directive(e, [function () {
                return {
                    restrict: "A",
                    link: function (t, i, o) {
                        var s, r;
                        if (null != i[n]) return r = null, s = function (t) {
                            return "function" == typeof i[n] ? i[n]() : void 0
                        }, o.$observe(e, function (t) {
                            return r && i.off(r, s), i.on(t, s), r = t
                        })
                    }
                }
            }])
        })(e, "autoFocusOn", "focus"), t(e, "autoSelectOn", "select"), e.directive("focusMe", [function () {
            return {
                restrict: "A",
                link: function (t, e, n) {
                    return t.$watch(n.focusMe, function (t) {
                        if (!0 === t) return setTimeout(function () {
                            return e.select(), e.focus()
                        }, 0)
                    })
                }
            }
        }]), e.directive("actAsLink", [function () {
            return {
                restrict: "A",
                link: function (t, e, n) {
                    return e.on("click", function (t) {
                        var e, i;
                        if (e = n.actAsLink || n.href || n.value, i = n.target || "_blank", e) return window.open(e, i), t.preventDefault(), t.stopPropagation()
                    })
                }
            }
        }]), e.directive("aliasAs", [function () {
            return {
                restrict: "A",
                link: function (t, e, n) {
                    var i;
                    if ((i = jQuery(n.aliasAs)).css("cssText", "position  : fixed !important;\nleft      : -10000px !important;\nheight    : 0 !important;\nwidth     : 0 !important;\nopacity   : 0 !important;"), n.aliasEvent) return e.on(n.aliasEvent, function (t) {
                        return i.trigger(t.type)
                    })
                }
            }
        }]), e.directive("elementReady", [function () {
            return {
                priority: -1e3,
                restrict: "A",
                link: function (t, e, n) {
                    console.log(" -- Element ready!"), t.$eval(n.elementReady)
                }
            }
        }]), e.directive("finishRepeatWithEvent", ["$timeout", function (t) {
            return {
                restrict: "A",
                link: function (e, n, i) {
                    if (!0 === e.$last) return t(function () {
                        return e.$emit(i.finishRepeatWithEvent)
                    })
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        var EDT_EditingAttrs, EDT_EditingAttrs_Global, EDT_PresentationAttrs, createLocation, editablePage;
        createLocation = function () {
            return {
                left: NaN,
                top: NaN,
                leftToPage: NaN,
                topToPage: NaN,
                width: NaN,
                height: NaN
            }
        }, editablePage = angular.module("triton.editablePage", ["triton.directives"]), EDT_PresentationAttrs = {
            "ed-type-text": {
                "ng-style": " {\n  'font-size'       : eo.fontSize || 'inherit',\n  'font-family'     : eo.fontFamily || 'inherit',\n  'font-style'      : eo.fontStyle || 'inherit',\n  'font-weight'     : eo.fontWeight || 'inherit',\n  'text-align'      : eo.textAlign || 'inherit',\n  'text-decoration' : eo.textDecoration || 'inherit',\n  'color'           : (eo.color || theme.majorColor)\n} ",
                "ng-bind-html": "eo.text | eol2br | unsafe"
            },
            "ed-type-rich-text": {
                "ng-style": " {\n  'font-size'       : eo.fontSize || 'inherit',\n  'font-family'     : eo.fontFamily || 'inherit',\n  'font-style'      : eo.fontStyle || 'inherit',\n  'font-weight'     : eo.fontWeight || 'inherit',\n  'text-align'      : eo.textAlign || 'inherit',\n  'text-decoration' : eo.textDecoration || 'inherit',\n  'color'           : (eo.color || theme.majorColor),\n  'background-color': (eo.backgroundColor || theme.majorColor),\n  'border-color'    : (eo.borderColor || theme.majorColor)\n} "
            },
            "ed-type-bg": {
                "tn-style": " {\n  'background-image'  : 'url(\"' + eo.url + '\")',\n} ",
                "ng-style": " {\n  'background-position-x' : eo.posX || 'center',\n  'background-position-y' : eo.posY || 'center',\n  'background-repeat'     : 'no-repeat',\n  'background-size'       : eo.backgroundSize || 'cover',\n} "
            },
            "img-link": {
                "sell-link": "{{ eo.url }}",
                "tn-commodity-link": "",
                "ng-show": "eo.url"
            },
            "tel-link": {
                "ng-href": "{{ eo.url }}",
                "ng-show": "!!eo.url"
            },
            "aud-link": {
                "ng-src": "{{ eo.url | unsafeResource }}"
            },
            "ed-aud-link": {
                "ng-src": "{{ eo.url | unsafeResource }}"
            },
            image: {
                "ng-src": "{{ eo.url | unsafeResource }}"
            },
            "bg-color": {
                "ng-style": " {\n  'background-color' : (eo.backgroundColor || theme.textBgColor),\n} "
            },
            "border-color": {
                "tn-border-color": "eo.borderColor || theme.borderColor"
            },
            "text-color": {
                "ng-style": " {\n  'color' : (eo.color || theme.majorColor),\n} "
            }
        }, EDT_EditingAttrs = {
            "ed-type-text": {
                contenteditable: "true",
                placeholder: "{ 鐐瑰嚮缂栬緫 }",
                "ng-model": "eo.text",
                "tn-edit-html-content": "true",
                "stop-propagation": "click mousedown mouseup",
                "ng-bind-html": null,
                "ui-on-drop": "block($event)"
            },
            "ed-type-rich-text": {
                "stop-propagation": "click mousedown mouseup",
                "ui-on-drop": "block($event)"
            },
            "ed-type-bg": {
                "ui-on-drop": "onAssetDrop($event, $data)"
            },
            "img-link": {
                "tn-commodity-link": null,
                "ng-show": "true"
            },
            "tel-link": {
                "ng-href": null,
                "ng-show": "true"
            },
            "ed-aud-link": {
                "tn-auto-play": "{{ eo.autoPlay }}",
                "tn-loop": "{{ eo.loop }}",
                "tn-show-control": "{{ eo.showControl }}"
            },
            image: {
                "ui-on-drop": "onAssetDrop($event, $data)"
            }
        }, EDT_EditingAttrs_Global = {
            "ng-click": "onClick($event)"
        }, editablePage.directive("tnPageBox", [function () {
            return {
                restrict: "A",
                replace: !1,
                controller: ["$scope", "$element", function (t, e) {
                    return {
                        screenLocation: function () {
                            return e.offset()
                        }
                    }
                }],
                link: function (t, e) {
                    return e.css("cssText", "position: relative !important;"), e.addClass("tn-page-box")
                }
            }
        }]), editablePage.directive("tnSliceBusPropsEditable", [function () {
            return {
                restrict: "A",
                replace: !1,
                scope: {
                    onClickEditable: "&"
                },
                controller: ["$scope", "$element", function (t, e) {
                    return {
                        submitEditable: function (n, i, o) {
                            var s, r;
                            if (null != i) switch (i.type) {
                                case "bg-color":
                                case "border-color":
                                case "text-color":
                                    return (s = t.busPropEO.eoList)[n] || (s[n] = i), (r = t.busPropEO.elList)[n] || (r[n] = o), e.addClass("tn-page-editable")
                            }
                        }
                    }
                }],
                link: function (t, e) {
                    var n;
                    return t.busPropEO = {
                        type: "slice-bus-props",
                        eoList: {},
                        elList: {}
                    }, n = function () {
                        var n, i, o, s, r;
                        return o = e.parents("[tn-page-box]").offset() || {
                            left: 0,
                            top: 0
                        }, r = e.offset(), s = createLocation(), n = parseInt(e.css("border-left-width"), 10), i = parseInt(e.css("border-top-width"), 10), s.left = r.left - o.left + n, s.top = r.top - o.top + i, s.width = e.innerWidth(), s.height = e.innerHeight(), {
                            templateId: "",
                            editableId: "__slice-bus-props",
                            editableType: "tn-page-slice-bus-props",
                            editableObject: t.busPropEO,
                            notEditableAttrList: [],
                            editableLocation: s,
                            subEditables: []
                        }
                    }, e.on("click", function (i) {
                        if (Object.keys(t.busPropEO.eoList).length) return t.$apply(function () {
                            return "function" == typeof t.onClickEditable ? t.onClickEditable({
                                editableDesc: n(),
                                editableElem: e
                            }) : void 0
                        })
                    }), e.addClass("tn-page-slice-bus-props")
                }
            }
        }]), editablePage.filter("templateIdToPath", [function () {
            return function (t, e) {
                if (null != t) return e || console.error("tplPath is not set correctly!"), e + "/" + t + ".html"
            }
        }]), editablePage.filter("clr2theme", [function () {
            var t, e;
            return t = {}, e = function (t) {
                    return {
                        majorColor: t,
                        textBgColor: t,
                        borderColor: t
                    }
                },
                function (n) {
                    return n ? t[n] || (t[n] = e(n)) : null
                }
        }]), editablePage.directive("tnPageLoader", [function () {
            return {
                restrict: "AE",
                replace: !1,
                require: ["tnPageLoader", "?^tnPageBox"],
                scope: {
                    page: "=",
                    theme: "=",
                    templatePath: "@",
                    onClickEditable: "&",
                    onDropAssetToEditable: "&"
                },
                template: '<div class="tn-page"\n     ng-include="(page.templateId) | templateIdToPath: templatePath">\n</div>',
                controller: ["$scope", "$element", function (t, e) {
                    return {
                        calcPageBoxLocation: function (t) {
                            var n, i, o, s, r, a;
                            return o = e.parents("[tn-page-box]").offset() || {
                                left: 0,
                                top: 0
                            }, a = e.offset(), s = t.offset(), n = parseInt(t.css("border-left-width"), 10), i = parseInt(t.css("border-top-width"), 10), (r = createLocation()).left = s.left - o.left + n, r.top = s.top - o.top + i, r.leftToPage = s.left - a.left + n, r.topToPage = s.top - a.top + i, r.width = t.innerWidth(), r.height = t.innerHeight(), r
                        }
                    }
                }]
            }
        }]), editablePage.directive("tnPageShowWithTransition", ["$timeout", function (t) {
            return {
                restrict: "A",
                priority: 1e4,
                controller: function () {},
                link: function (e, n, i) {
                    return e.$on("$includeContentLoaded", function () {
                        var e, o;
                        if (o = "true" === i.tnPageShowWithTransition, null != (null != (e = n.find('[ng-controller="pageController"]').scope()) ? e.onPageShow : void 0)) return t(function () {
                            return e.onPageShow(o)
                        })
                    })
                }
            }
        }]), editablePage.directive("editableType", ["$compile", function (t) {
            return {
                restrict: "A",
                replace: !1,
                require: ["?^tnPageBox", "?^tnPageShowWithTransition"],
                priority: 1e3,
                terminal: !0,
                compile: function (e, n) {
                    return {
                        pre: function (t, e, n, i) {
                            var o, s, r, a;
                            if (s = n.editableType, e.removeAttr("editable-type"), e.attr("tn-page-editable-type", s), (o = function (t) {
                                    var n, i, o;
                                    for (n in null == t && (t = {}), o = [], t) i = t[n], o.push(e.attr(n, i));
                                    return o
                                })(EDT_PresentationAttrs[s]), r = i[0], a = i[1], null != r && (o(EDT_EditingAttrs_Global), o(EDT_EditingAttrs[s]), e.addClass("tn-page-" + s)), null != a && ("img-link" === s || "aud-link" === s)) return o(EDT_EditingAttrs[s])
                        },
                        post: function (e, n) {
                            return t(n)(e)
                        }
                    }
                }
            }
        }]), editablePage.directive("tnPageEditable", ["$window", function (t) {
            return {
                restrict: "A",
                replace: !1,
                require: ["^tnPageLoader", "?^tnPageBox", "?^tnSliceBusPropsEditable"],
                scope: !0,
                link: function (t, e, n, i) {
                    var o, s, r, a, l, c, u;
                    return s = function (t) {
                        return {
                            subEdIndex: t.attr("tn-sub-ed-index"),
                            editableWidth: t.width(),
                            editableHeight: t.height()
                        }
                    }, r = function () {
                        if (t.subEd = [], null != n.tnSetEditable) return e.find("[tn-sub-ed-index]").each(function () {
                            return t.subEd.push(s(jQuery(this)))
                        })
                    }, o = function () {
                        return {
                            templateId: t.templateId,
                            editableId: t.ei,
                            editableType: t.et,
                            editableObject: t.eo,
                            notEditableAttrList: t.neal,
                            editableLocation: null != c && "function" == typeof c.calcPageBoxLocation ? c.calcPageBoxLocation(e) : void 0,
                            subEditables: t.subEd
                        }
                    }, a = function () {
                        var i, o, s, a, c, d, p, f, h, m, g;
                        if (null == t.page && console.error("tnPageEditable: slice is null"), null == (null != (c = t.page) ? c.editables : void 0) && console.error("tnPageEditable: editables is null"), t.ei = n.tnPageEditable, t.et = n.tnPageEditableType, t.neal = [], null != n.tnNotEditableAttr && (t.neal = n.tnNotEditableAttr.split(" ")), null != n.tnSubEdIndex ? t.eo = null != (d = t.page) && null != (p = d.editables) ? (i = p[t.ei].set)[o = e.attr("tn-sub-ed-index")] || (i[o] = {
                                type: t.et
                            }) : void 0 : t.eo = null != (f = t.page) && null != (h = f.editables) ? h[s = t.ei] || (h[s] = {
                                type: t.et
                            }) : void 0, r(), e.addClass("tn-page-editable"), null == t.eo ? (a = t.$parent.$parent.$parent.$index, console.error("[Editable] editable object mismatch. at page '" + a + "'\n  '" + t.page.templateId + "' >> '" + t.ei + "' ( '" + t.et + "' )")) : (null != (m = t.eo) ? m.type : void 0) !== t.et && (a = t.$parent.$parent.$parent.$index, console.error("[Editable] editable object type mismatch. at page '" + a + "'\n  '" + t.page.templateId + "' >> '" + t.ei + "' ( '" + (null != (g = t.eo) ? g.type : void 0) + "' | '" + t.et + "' )")), null != l) return null != u ? u.submitEditable(t.ei, t.eo, e) : void 0
                    }, t.block = function (t) {
                        return t.preventDefault(), t.stopPropagation()
                    }, t.onClick = function (i) {
                        if ("border-color" !== n.tnPageEditableType && null == n.tnSubEdIndex && (null == n.tnSetEditable || null !== i.target.getAttribute("tn-sub-ed-index"))) return i.preventDefault(), i.stopPropagation(), "function" == typeof t.onClickEditable ? t.onClickEditable({
                            editableDesc: o(),
                            editableElem: e
                        }) : void 0
                    }, t.onAssetDrop = function (n, i) {
                        return n.preventDefault(), n.stopPropagation(), "function" == typeof t.onDropAssetToEditable ? t.onDropAssetToEditable({
                            editableDesc: o(),
                            editableElem: e,
                            asset: i
                        }) : void 0
                    }, c = i[0], l = i[1], u = i[2], a(), t.$watch(function () {
                        return e.attr("tn-sub-ed-index")
                    }, function () {
                        return a()
                    }), t.$watch("page", function (i, o) {
                        var s, r;
                        if ((null != i ? i.templateId : void 0) === (null != o ? o.templateId : void 0)) return null != n.tnSubEdIndex ? t.eo = null != i && null != (s = i.editables) ? s[t.ei].set[e.attr("tn-sub-ed-index")] : void 0 : t.eo = null != i && null != (r = i.editables) ? r[t.ei] : void 0
                    })
                }
            }
        }]), editablePage.directive("tnHideWhenEditing", [function () {
            return {
                restrict: "A",
                require: "?^tnPageBox",
                link: function (t, e, n, i) {
                    return e.addClass("tn-hide-when-editing")
                }
            }
        }]), editablePage.directive("tnShowWhenEditing", [function () {
            return {
                restrict: "A",
                require: "?^tnPageBox",
                link: function (t, e, n, i) {
                    if (i) return e.addClass("tn-show-when-editing")
                }
            }
        }]), editablePage.directive("tnHideWhenEnterEditing", [function () {
            return {
                restrict: "A",
                link: function (t, e, n) {
                    return t.$on("editingManager_enterEditing", function () {
                        return e.addClass("tn-hide-when-enter-editing")
                    }), t.$on("editingManager_exitEditing", function () {
                        return e.removeClass("tn-hide-when-enter-editing")
                    })
                }
            }
        }]), editablePage.directive("tnAutoPlay", [function () {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    return attrs.$observe("tnAutoPlay", function (tnAutoPlay) {
                        return eval(tnAutoPlay) ? element.attr("autoplay", "autoplay") : element.removeAttr("autoplay")
                    }, !0)
                }
            }
        }]), editablePage.directive("tnLoop", [function () {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    return attrs.$observe("tnLoop", function (tnLoop) {
                        return eval(tnLoop) ? element.attr("loop", "loop") : element.removeAttr("loop")
                    }, !0)
                }
            }
        }]), editablePage.directive("tnShowControl", [function () {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    return attrs.$observe("tnShowControl", function (tnShowControl) {
                        return eval(tnShowControl) ? element.css("display", "block") : element.css("display", "none")
                    }, !0)
                }
            }
        }]), editablePage.directive("tnRichTextContent", ["$compile", function (t) {
            return {
                restrict: "A",
                require: "?^tnPageBox",
                priority: 1010,
                terminal: !0,
                compile: function (e, n) {
                    return {
                        pre: function (t, e, n, i) {
                            return e.removeAttr("tn-rich-text-content"), i ? (e.attr("ng-bind-html", null), e.attr("contenteditable", "true"), e.attr("placeholder", "{ 鐐瑰嚮缂栬緫 }"), e.attr("ng-model", "eo.text"), e.attr("tn-edit-html-content", "true")) : e.attr("ng-bind-html", "eo.text | eol2br | unsafe"), e.addClass("tn-rich-text-content")
                        },
                        post: function (e, n) {
                            return t(n)(e)
                        }
                    }
                }
            }
        }]), editablePage.directive("tnDragHandlerNotInEditing", ["$compile", function (t) {
            return {
                restrict: "A",
                replace: !1,
                require: "?^tnPageBox",
                priority: 1e3,
                terminal: !0,
                compile: function (e, n) {
                    return {
                        pre: function (t, e, n, i) {
                            if (e.removeAttr("tn-drag-handler-not-in-editing"), null == i) return e.attr("hammer-dragstart", "onDragStart($event)"), e.attr("hammer-drag", "onDrag($event)"), e.attr("hammer-dragend", "onDragEnd($event)")
                        },
                        post: function (e, n) {
                            return t(n)(e)
                        }
                    }
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        var t;
        t = angular.module("triton.infrastructure", []), namespace.use("triton.toolbox"), t.directive("tnTransitionEnd", [function () {
            return {
                restrict: "AC",
                link: function (t, e, n) {
                    return e.on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", "*", function (t) {
                        return angular.element(this).trigger("tnTransitionEnd", t), t.stopPropagation()
                    })
                }
            }
        }]), t.factory("tnLinkRedirecter", [function () {
            return {
                redirectURI: function (t) {
                    return "data:text/html;charset=utf-8," + encodeURIComponent('<html lang="utf-8">\n<head><meta http-equiv="Refresh" Content="0; Url=' + t + '" /></head>\n<body></body>\n</html>')
                },
                redirectWeiboURI: function (t) {
                    return "http://api.weibo.com/t_short_url?outUrl=" + encodeURIComponent(t)
                }
            }
        }]), t.directive("tnCommodityLink", ["$document", "tnLinkRedirecter", function (t, e) {
            return {
                restrict: "A",
                link: function (t, n, i) {
                    return n.attr("href", "#"), i.$observe("sellLink", function (i) {
                        var o, s, r, a;
                        if (i) return t.wbLink = e.redirectWeiboURI(i), (o = -1 !== i.indexOf("taobao.com") || -1 !== i.indexOf("tmall.com")) && n.attr("href", e.redirectURI(i)), s = angular.element(".item-sell-link-prompt").hide(), 2e3, 800, r = function () {
                            return s.fadeIn(800, function () {
                                return setTimeout(function () {
                                    return s.fadeOut(800)
                                }, 2e3)
                            })
                        }, a = window.navigator.userAgent, /weibo/i.test(a) ? n.attr("href", t.wbLink) : /micromessenger/i.test(a) && o ? s ? n.on("click", function (t) {
                            return t.preventDefault(), r()
                        }) : void 0 : n.attr("href", i)
                    })
                }
            }
        }]), t.directive("tnStyle", [function () {
            return {
                restrict: "A",
                link: function (t, e, n) {
                    return t.$watch(n.tnStyle, function (t, n) {
                        var i;
                        if (null != n && t !== n)
                            for (i in n) e.css(i, "");
                        if (t) return e.css(t)
                    }, !0)
                }
            }
        }]), t.factory("messageCenter", ["$timeout", function (t) {
            var e, n;
            return e = null, n = {
                tipsText: "",
                showTips: !1,
                levelClass: "alert-warning"
            }, {
                messages: function () {
                    return n
                },
                pushMessage: function (i, o, s) {
                    return null == o && (o = "warning"), null == s && (s = 2e3), e && t.cancel(e), n.tipsText = i, n.showTips = !0, n.levelClass = "alert-" + o, e = t(function () {
                        return n.tipsText = "", n.showTips = !1, n.levelClass = "alert-warning", e = null
                    }, s)
                }
            }
        }]), t.factory("authManager", ["$rootScope", "$sce", "$http", "$window", "$interval", "$log", function (t, e, n, i, o, s) {
            var r, a, l, c, u, d, p, f, h, m, g;
            return l = i.location.origin, c = "callback_url=" + encodeURIComponent(l + "/auth/report/result/success"), a = "failed_callback_url=" + encodeURIComponent(l + "/auth/report/result/failed"), r = "/auth?" + c + "&" + a + "&delay_time=200", "XIUMI_Auth", "XIUMI_Auth#Result:success", "XIUMI_Auth#Result:failed", p = {
                loadingUserInfo: !1,
                signingIn: !1,
                signingOut: !1,
                userInfo: null
            }, d = null, u = null, g = function () {
                if (null != d && (d.close(), d = null), null != u) return o.cancel(u), u = null
            }, f = function (t) {
                return {
                    user_sid: t.user_sid,
                    nickname: t.nickname,
                    avatarUrl: e.trustAsUrl(t.avatar_url),
                    level: t.level,
                    levelLimit: t.levelLimit,
                    oemCustomer: t.oemCustomer
                }
            }, m = function (t) {
                return p.userInfo = f(t)
            }, h = function () {
                return p.userInfo = null
            }, {
                authStatus: function () {
                    return p
                },
                isUserReady: function () {
                    return null != p.userInfo
                },
                loadUser: function (t) {
                    return p.loadingUserInfo = !0, n.get("/auth/me").then(function (e) {
                        var n;
                        return n = e.data, m(n.data.user), "function" == typeof t ? t(null, p.userInfo) : void 0
                    }).catch(function (e) {
                        return "function" == typeof t ? t(e) : void 0
                    }).finally(function () {
                        return p.loadingUserInfo = !1
                    })
                },
                signIn: function (t) {
                    var e, s, a;
                    return e = function () {
                            return g(), h(), t(null, null), p.signingIn = !1
                        }, a = function () {
                            return g(), n.get("/auth/me").success(function (e) {
                                return m(e.data.user), t(null, p.userInfo), p.signingIn = !1
                            }).error(function (e) {
                                return h(), t(e), p.signingIn = !1
                            })
                        }, s = function () {
                            return g(), h(), t(null, null), p.signingIn = !1
                        },
                        function () {
                            return p.signingIn = !0, d = i.open(r, "XIUMI_Auth")
                        }(), u = o(function () {
                            return d.closed ? e() : "XIUMI_Auth#Result:success" === d.name ? a() : "XIUMI_Auth#Result:failed" === d.name ? s() : void 0
                        }, 1e3)
                },
                signOut: function (t) {
                    return p.signingOut = !0, n.get("/auth/logout").then(function (e) {
                        return "function" == typeof t ? t(null, null) : void 0
                    }).catch(function (e) {
                        return s.error("sign.out: error", e), "function" == typeof t ? t(e, null) : void 0
                    }).finally(function () {
                        return h(), p.signingOut = !1
                    })
                },
                exitSignIn: function (t) {
                    return p.signingIn = !1, p.signingOut = !1, g(), t(null, !0)
                }
            }
        }])
    }.call(this),
    function () {
        "use strict";
        var t, e, n;
        t = jQuery, n = function (t) {
            return "data:text/html;charset=utf-8," + encodeURIComponent('<html lang="utf-8">\n<head><meta http-equiv="Refresh" Content="0; Url=' + t + '" /></head>\n<body></body>\n</html>')
        }, e = function (e, i) {
            return t(e).each(function () {
                var e, o, s, r, a, l;
                if (r = (o = t(this)).attr("data-tb-link"), l = o.attr("data-wx-link"), o.attr("href", n(r)), e = t(i), s = function () {
                        return e.show(), setTimeout(function () {
                            return e.hide()
                        }, 2e3)
                    }, a = window.navigator.userAgent, /weibo/i.test(a)) return o.attr("href", r);
                if (/micromessenger/i.test(a)) {
                    if (l) return o.attr("href", l);
                    if (e.length > 0) return o.on("click", function (t) {
                        return t.preventDefault(), s()
                    })
                }
            })
        }, t(".item-sell-link, .item-sell-link-prompt").ready(function () {
            return e(".item-sell-link", ".item-sell-link-prompt")
        })
    }.call(this),
    function (t, e) {
        t._MountWXShare = function () {
            var n = {};
            t._WXShare2 = function (t, i, o, s, r, a, l, c, u, d) {
                null != t && 0 === t.indexOf("//") && (t = "http:" + t), n.img = t || e("meta[name='wx-image']").attr("content") || "", n.width = i || 120, n.height = o || 120, n.title = s || e("meta[name='wx-title']").attr("content") || document.title, n.desc = r || e("meta[name='wx-desc']").attr("content"), n.url = u || document.location.href, n.appid = d || "", n.timestamp = a || "", n.nonceStr = l || "", n.signature = c || "", wx.config({
                    debug: !1,
                    appId: n.appid,
                    timestamp: n.timestamp,
                    nonceStr: n.nonceStr,
                    signature: n.signature,
                    jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
                }), wx.ready(function () {
                    wx.checkJsApi({
                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"],
                        success: function (t) {
                            wx.onMenuShareAppMessage({
                                title: n.title,
                                desc: n.desc,
                                link: n.url,
                                imgUrl: n.img
                            }), wx.onMenuShareTimeline({
                                title: n.title,
                                link: n.url,
                                imgUrl: n.img
                            }), wx.onMenuShareQQ({
                                title: n.title,
                                desc: n.desc,
                                link: n.url,
                                imgUrl: n.img
                            }), wx.onMenuShareWeibo({
                                title: n.title,
                                desc: n.desc,
                                link: n.url,
                                imgUrl: n.img
                            })
                        }
                    })
                }), wx.error(function (t) {
                    console.error("wx.config error", t)
                })
            }, document.addEventListener("WeixinJSBridgeReady", function () {
                WeixinJSBridge.on("menu:share:appmessage", function (t) {
                    WeixinJSBridge.invoke("sendAppMessage", {
                        appid: n.appid,
                        img_url: n.img,
                        img_width: n.width,
                        img_height: n.height,
                        link: n.url,
                        desc: n.desc,
                        title: n.title
                    }, function (t) {
                        _report("send_msg", t.err_msg)
                    })
                }), WeixinJSBridge.on("menu:share:timeline", function (t) {
                    WeixinJSBridge.invoke("shareTimeline", {
                        img_url: n.img,
                        img_width: n.width,
                        img_height: n.height,
                        link: n.url,
                        desc: n.desc,
                        title: n.title
                    }, function (t) {
                        _report("timeline", t.err_msg)
                    })
                }), WeixinJSBridge.on("menu:share:weibo", function (t) {
                    WeixinJSBridge.invoke("shareWeibo", {
                        content: n.desc,
                        url: n.url
                    }, function (t) {
                        _report("weibo", t.err_msg)
                    })
                })
            }, !1)
        }
    }(window, window.jQuery);
var templateModule = angular.module("triton.xiumi.template", ["hammer"]);
templateModule.constant("xmiShowData", window.xmi_ShowData);
var pageHandlers = namespace.reg("triton.xiumi.pageHandlers"),
    globalHandlers = namespace.reg("triton.xiumi.globalHandlers");
templateModule.constant("pageHandlers", pageHandlers), templateModule.constant("globalHandlers", globalHandlers), templateModule.directive("finishRenderWithEvent", ["$timeout", function (t) {
    return {
        restrict: "A",
        link: function (e, n, i) {
            !0 === e.$last && t(function () {
                e.$emit("ngRepeatFinished")
            })
        }
    }
}]), templateModule.controller("pageController", ["$scope", "$rootScope", "$element", "$timeout", "$http", "pageHandlers", function (t, e, n, i, o, s) {
    var r = t.page.templateId;
    if (s[r]) {
        var a = !!e.isBooklet,
            l = new s[r](t, n, i, a, o);
        t.onPageShow = function (t) {
            l.onPageShow && l.onPageShow(t)
        }, t.onPageHide = function () {
            l.onPageHide && l.onPageHide()
        }
    } else console.error("Can't find page handler ", r, s)
}]), templateModule.controller("globalController", ["$scope", "$element", "$timeout", "$location", "xmiShowData", "globalHandlers", function (t, e, n, i, o, s) {
    new s[t.page.templateId](t, e, n, i, o)
}]);
var Swiper = function (t, e) {
    "use strict";

    function n(t, e) {
        return document.querySelectorAll ? (e || document).querySelectorAll(t) : jQuery(t, e)
    }

    function i() {
        var t = T - _;
        return e.freeMode && (t = T - _), e.slidesPerView > C.slides.length && !e.centeredSlides && (t = 0), 0 > t && (t = 0), t
    }

    function o() {
        var t, i = C.h.addEventListener;
        if (e.preventLinks) {
            var o = n("a", C.container);
            for (t = 0; t < o.length; t++) i(o[t], "click", d)
        }
        if (e.releaseFormElements) {
            var s = n("input, textarea, select", C.container);
            for (t = 0; t < s.length; t++) i(s[t], C.touchEvents.touchStart, p, !0)
        }
        if (e.onSlideClick)
            for (t = 0; t < C.slides.length; t++) i(C.slides[t], "click", l);
        if (e.onSlideTouch)
            for (t = 0; t < C.slides.length; t++) i(C.slides[t], C.touchEvents.touchStart, c)
    }

    function s() {
        var t, i = C.h.removeEventListener;
        if (e.onSlideClick)
            for (t = 0; t < C.slides.length; t++) i(C.slides[t], "click", l);
        if (e.onSlideTouch)
            for (t = 0; t < C.slides.length; t++) i(C.slides[t], C.touchEvents.touchStart, c);
        if (e.releaseFormElements) {
            var o = n("input, textarea, select", C.container);
            for (t = 0; t < o.length; t++) i(o[t], C.touchEvents.touchStart, p, !0)
        }
        if (e.preventLinks) {
            var s = n("a", C.container);
            for (t = 0; t < s.length; t++) i(s[t], "click", d)
        }
    }

    function r(t) {
        var e = t.keyCode || t.charCode;
        if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey)) {
            if (37 === e || 39 === e || 38 === e || 40 === e) {
                for (var n = !1, i = C.h.getOffset(C.container), o = C.h.windowScroll().left, s = C.h.windowScroll().top, r = C.h.windowWidth(), a = C.h.windowHeight(), l = [
                        [i.left, i.top],
                        [i.left + C.width, i.top],
                        [i.left, i.top + C.height],
                        [i.left + C.width, i.top + C.height]
                    ], c = 0; c < l.length; c++) {
                    var u = l[c];
                    u[0] >= o && u[0] <= o + r && u[1] >= s && u[1] <= s + a && (n = !0)
                }
                if (!n) return
            }
            H ? ((37 === e || 39 === e) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 39 === e && C.swipeNext(), 37 === e && C.swipePrev()) : ((38 === e || 40 === e) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 40 === e && C.swipeNext(), 38 === e && C.swipePrev())
        }
    }

    function a(t) {
        var n = C._wheelEvent,
            o = 0;
        if (t.detail) o = -t.detail;
        else if ("mousewheel" === n)
            if (e.mousewheelControlForceToAxis)
                if (H) {
                    if (!(Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY))) return;
                    o = t.wheelDeltaX
                } else {
                    if (!(Math.abs(t.wheelDeltaY) > Math.abs(t.wheelDeltaX))) return;
                    o = t.wheelDeltaY
                }
        else o = t.wheelDelta;
        else if ("DOMMouseScroll" === n) o = -t.detail;
        else if ("wheel" === n)
            if (e.mousewheelControlForceToAxis)
                if (H) {
                    if (!(Math.abs(t.deltaX) > Math.abs(t.deltaY))) return;
                    o = -t.deltaX
                } else {
                    if (!(Math.abs(t.deltaY) > Math.abs(t.deltaX))) return;
                    o = -t.deltaY
                }
        else o = Math.abs(t.deltaX) > Math.abs(t.deltaY) ? -t.deltaX : -t.deltaY;
        if (e.freeMode) {
            var s = C.getWrapperTranslate() + o;
            if (s > 0 && (s = 0), s < -i() && (s = -i()), C.setWrapperTransition(0), C.setWrapperTranslate(s), C.updateActiveSlide(s), 0 === s || s === -i()) return
        } else(new Date).getTime() - R > 60 && (0 > o ? C.swipeNext() : C.swipePrev()), R = (new Date).getTime();
        return e.autoplay && C.stopAutoplay(!0), t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
    }

    function l(t) {
        C.allowSlideClick && (u(t), C.fireCallback(e.onSlideClick, C, t))
    }

    function c(t) {
        u(t), C.fireCallback(e.onSlideTouch, C, t)
    }

    function u(t) {
        if (t.currentTarget) C.clickedSlide = t.currentTarget;
        else {
            var n = t.srcElement;
            do {
                if (n.className.indexOf(e.slideClass) > -1) break;
                n = n.parentNode
            } while (n);
            C.clickedSlide = n
        }
        C.clickedSlideIndex = C.slides.indexOf(C.clickedSlide), C.clickedSlideLoopIndex = C.clickedSlideIndex - (C.loopedSlides || 0)
    }

    function d(t) {
        return C.allowLinks ? void 0 : (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.preventLinksPropagation && "stopPropagation" in t && t.stopPropagation(), !1)
    }

    function p(t) {
        return t.stopPropagation ? t.stopPropagation() : t.returnValue = !1, !1
    }

    function f(t) {
        if (e.preventLinks && (C.allowLinks = !0), C.isTouched || e.onlyExternal) return !1;
        var n = t.target || t.srcElement;
        document.activeElement && document.activeElement !== n && document.activeElement.blur();
        var i = "input select textarea".split(" ");
        if (e.noSwiping && n && function (t) {
                var n = !1;
                for (; t.className.indexOf(e.noSwipingClass) > -1 && (n = !0), t = t.parentElement, !n && t.parentElement && -1 === t.className.indexOf(e.wrapperClass););
                return !n && t.className.indexOf(e.wrapperClass) > -1 && t.className.indexOf(e.noSwipingClass) > -1 && (n = !0), n
            }(n)) return !1;
        if (G = !1, C.isTouched = !0, !(U = "touchstart" === t.type) && "which" in t && 3 === t.which) return !1;
        if (!U || 1 === t.targetTouches.length) {
            C.callPlugins("onTouchStartBegin"), !U && !C.isAndroid && i.indexOf(n.tagName.toLowerCase()) < 0 && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
            var o = U ? t.targetTouches[0].pageX : t.pageX || t.clientX,
                s = U ? t.targetTouches[0].pageY : t.pageY || t.clientY;
            C.touches.startX = C.touches.currentX = o, C.touches.startY = C.touches.currentY = s, C.touches.start = C.touches.current = H ? o : s, C.setWrapperTransition(0), C.positions.start = C.positions.current = C.getWrapperTranslate(), C.setWrapperTranslate(C.positions.start), C.times.start = (new Date).getTime(), P = void 0, e.moveStartThreshold > 0 && (X = !1), e.onTouchStart && C.fireCallback(e.onTouchStart, C, t), C.callPlugins("onTouchStartEnd")
        }
    }

    function h(t) {
        if (C.isTouched && !e.onlyExternal && (!U || "mousemove" !== t.type)) {
            var n = U ? t.targetTouches[0].pageX : t.pageX || t.clientX,
                o = U ? t.targetTouches[0].pageY : t.pageY || t.clientY;
            if (void 0 === P && H && (P = !!(P || Math.abs(o - C.touches.startY) > Math.abs(n - C.touches.startX))), void 0 !== P || H || (P = !!(P || Math.abs(o - C.touches.startY) < Math.abs(n - C.touches.startX))), P) return void(C.isTouched = !1);
            if (H) {
                if (!e.swipeToNext && n < C.touches.startX || !e.swipeToPrev && n > C.touches.startX) return
            } else if (!e.swipeToNext && o < C.touches.startY || !e.swipeToPrev && o > C.touches.startY) return;
            if (t.assignedToSwiper) return void(C.isTouched = !1);
            if (t.assignedToSwiper = !0, e.preventLinks && (C.allowLinks = !1), e.onSlideClick && (C.allowSlideClick = !1), e.autoplay && C.stopAutoplay(!0), !U || 1 === t.touches.length) {
                var s;
                if (C.isMoved || (C.callPlugins("onTouchMoveStart"), e.loop && (C.fixLoop(), C.positions.start = C.getWrapperTranslate()), e.onTouchMoveStart && C.fireCallback(e.onTouchMoveStart, C)), C.isMoved = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1, C.touches.current = H ? n : o, C.positions.current = (C.touches.current - C.touches.start) * e.touchRatio + C.positions.start, C.positions.current > 0 && e.onResistanceBefore && C.fireCallback(e.onResistanceBefore, C, C.positions.current), C.positions.current < -i() && e.onResistanceAfter && C.fireCallback(e.onResistanceAfter, C, Math.abs(C.positions.current + i())), e.resistance && "100%" !== e.resistance)
                    if (C.positions.current > 0 && (s = 1 - C.positions.current / _ / 2, C.positions.current = .5 > s ? _ / 2 : C.positions.current * s), C.positions.current < -i()) {
                        var r = (C.touches.current - C.touches.start) * e.touchRatio + (i() + C.positions.start);
                        s = (_ + r) / _;
                        var a = C.positions.current - r * (1 - s) / 2,
                            l = -i() - _ / 2;
                        C.positions.current = l > a || 0 >= s ? l : a
                    }
                if (e.resistance && "100%" === e.resistance && (C.positions.current > 0 && (!e.freeMode || e.freeModeFluid) && (C.positions.current = 0), C.positions.current < -i() && (!e.freeMode || e.freeModeFluid) && (C.positions.current = -i())), !e.followFinger) return;
                if (e.moveStartThreshold)
                    if (Math.abs(C.touches.current - C.touches.start) > e.moveStartThreshold || X) {
                        if (!X) return X = !0, void(C.touches.start = C.touches.current);
                        C.setWrapperTranslate(C.positions.current)
                    } else C.positions.current = C.positions.start;
                else C.setWrapperTranslate(C.positions.current);
                return (e.freeMode || e.watchActiveIndex) && C.updateActiveSlide(C.positions.current), e.grabCursor && (C.container.style.cursor = "move", C.container.style.cursor = "grabbing", C.container.style.cursor = "-moz-grabbin", C.container.style.cursor = "-webkit-grabbing"), B || (B = C.touches.current), q || (q = (new Date).getTime()), C.velocity = (C.touches.current - B) / ((new Date).getTime() - q) / 2, Math.abs(C.touches.current - B) < 2 && (C.velocity = 0), B = C.touches.current, q = (new Date).getTime(), C.callPlugins("onTouchMoveEnd"), e.onTouchMove && C.fireCallback(e.onTouchMove, C, t), !1
            }
        }
    }

    function m(t) {
        if (P && C.swipeReset(), !e.onlyExternal && C.isTouched) {
            C.isTouched = !1, e.grabCursor && (C.container.style.cursor = "move", C.container.style.cursor = "grab", C.container.style.cursor = "-moz-grab", C.container.style.cursor = "-webkit-grab"), C.positions.current || 0 === C.positions.current || (C.positions.current = C.positions.start), e.followFinger && C.setWrapperTranslate(C.positions.current), C.times.end = (new Date).getTime(), C.touches.diff = C.touches.current - C.touches.start, C.touches.abs = Math.abs(C.touches.diff), C.positions.diff = C.positions.current - C.positions.start, C.positions.abs = Math.abs(C.positions.diff);
            var n = C.positions.diff,
                o = C.positions.abs,
                s = C.times.end - C.times.start;
            5 > o && 300 > s && !1 === C.allowLinks && (e.freeMode || 0 === o || C.swipeReset(), e.preventLinks && (C.allowLinks = !0), e.onSlideClick && (C.allowSlideClick = !0)), setTimeout(function () {
                null != C && (e.preventLinks && (C.allowLinks = !0), e.onSlideClick && (C.allowSlideClick = !0))
            }, 100);
            var r = i();
            if (!C.isMoved && e.freeMode) return C.isMoved = !1, e.onTouchEnd && C.fireCallback(e.onTouchEnd, C, t), void C.callPlugins("onTouchEnd");
            if (!C.isMoved || C.positions.current > 0 || C.positions.current < -r) return C.swipeReset(), e.onTouchEnd && C.fireCallback(e.onTouchEnd, C, t), void C.callPlugins("onTouchEnd");
            if (C.isMoved = !1, e.freeMode) {
                if (e.freeModeFluid) {
                    var a, l = 1e3 * e.momentumRatio,
                        c = C.velocity * l,
                        u = C.positions.current + c,
                        d = !1,
                        p = 20 * Math.abs(C.velocity) * e.momentumBounceRatio; - r > u && (e.momentumBounce && C.support.transitions ? (-p > u + r && (u = -r - p), a = -r, d = !0, G = !0) : u = -r), u > 0 && (e.momentumBounce && C.support.transitions ? (u > p && (u = p), a = 0, d = !0, G = !0) : u = 0), 0 !== C.velocity && (l = Math.abs((u - C.positions.current) / C.velocity)), C.setWrapperTranslate(u), C.setWrapperTransition(l), e.momentumBounce && d && C.wrapperTransitionEnd(function () {
                        G && (e.onMomentumBounce && C.fireCallback(e.onMomentumBounce, C), C.callPlugins("onMomentumBounce"), C.setWrapperTranslate(a), C.setWrapperTransition(300))
                    }), C.updateActiveSlide(u)
                }
                return (!e.freeModeFluid || s >= 300) && C.updateActiveSlide(C.positions.current), e.onTouchEnd && C.fireCallback(e.onTouchEnd, C, t), void C.callPlugins("onTouchEnd")
            }
            "toNext" === (k = 0 > n ? "toNext" : "toPrev") && 300 >= s && (30 > o || !e.shortSwipes ? C.swipeReset() : C.swipeNext(!0)), "toPrev" === k && 300 >= s && (30 > o || !e.shortSwipes ? C.swipeReset() : C.swipePrev(!0));
            var f = 0;
            if ("auto" === e.slidesPerView) {
                for (var h, m = Math.abs(C.getWrapperTranslate()), g = 0, v = 0; v < C.slides.length; v++)
                    if ((g += h = H ? C.slides[v].getWidth(!0, e.roundLengths) : C.slides[v].getHeight(!0, e.roundLengths)) > m) {
                        f = h;
                        break
                    }
                f > _ && (f = _)
            } else f = E * e.slidesPerView;
            "toNext" === k && s > 300 && (o >= f * e.longSwipesRatio ? C.swipeNext(!0) : C.swipeReset()), "toPrev" === k && s > 300 && (o >= f * e.longSwipesRatio ? C.swipePrev(!0) : C.swipeReset()), e.onTouchEnd && C.fireCallback(e.onTouchEnd, C, t), C.callPlugins("onTouchEnd")
        }
    }

    function g(t, e) {
        var n, i = document.createElement("div");
        return i.innerHTML = e, (n = i.firstChild).className += " " + t, n.outerHTML
    }

    function v(t, n, i) {
        var o = "to" === n && i.speed >= 0 ? i.speed : e.speed,
            s = +new Date;
        if (C.support.transitions || !e.DOMAnimation) C.setWrapperTranslate(t), C.setWrapperTransition(o);
        else {
            var r = C.getWrapperTranslate(),
                a = Math.ceil((t - r) / o * (1e3 / 60)),
                l = r > t ? "toNext" : "toPrev";
            if (C._DOMAnimating) return;
            ! function o() {
                var c = +new Date;
                r += a * (c - s) / (1e3 / 60), ("toNext" === l ? r > t : t > r) ? (C.setWrapperTranslate(Math.ceil(r)), C._DOMAnimating = !0, window.setTimeout(function () {
                    o()
                }, 1e3 / 60)) : (e.onSlideChangeEnd && ("to" === n ? !0 === i.runCallbacks && C.fireCallback(e.onSlideChangeEnd, C, l) : C.fireCallback(e.onSlideChangeEnd, C, l)), C.setWrapperTranslate(t), C._DOMAnimating = !1)
            }()
        }
        C.updateActiveSlide(t), e.onSlideNext && "next" === n && C.fireCallback(e.onSlideNext, C, t), e.onSlidePrev && "prev" === n && C.fireCallback(e.onSlidePrev, C, t), e.onSlideReset && "reset" === n && C.fireCallback(e.onSlideReset, C, t), ("next" === n || "prev" === n || "to" === n && !0 === i.runCallbacks) && function (t) {
            if (C.callPlugins("onSlideChangeStart"), e.onSlideChangeStart)
                if (e.queueStartCallbacks && C.support.transitions) {
                    if (C._queueStartCallbacks) return;
                    C._queueStartCallbacks = !0, C.fireCallback(e.onSlideChangeStart, C, t), C.wrapperTransitionEnd(function () {
                        C._queueStartCallbacks = !1
                    })
                } else C.fireCallback(e.onSlideChangeStart, C, t);
            if (e.onSlideChangeEnd)
                if (C.support.transitions)
                    if (e.queueEndCallbacks) {
                        if (C._queueEndCallbacks) return;
                        C._queueEndCallbacks = !0, C.wrapperTransitionEnd(function (n) {
                            C.fireCallback(e.onSlideChangeEnd, n, t)
                        })
                    } else C.wrapperTransitionEnd(function (n) {
                        C.fireCallback(e.onSlideChangeEnd, n, t)
                    });
            else e.DOMAnimation || setTimeout(function () {
                C.fireCallback(e.onSlideChangeEnd, C, t)
            }, 10)
        }(n)
    }

    function y() {
        var t = C.paginationButtons;
        if (t)
            for (var e = 0; e < t.length; e++) C.h.removeEventListener(t[e], "click", b)
    }

    function b(t) {
        for (var n, i = t.target || t.srcElement, o = C.paginationButtons, s = 0; s < o.length; s++) i === o[s] && (n = s);
        e.autoplay && C.stopAutoplay(!0), C.swipeTo(n)
    }

    function w() {
        W = setTimeout(function () {
            e.loop ? (C.fixLoop(), C.swipeNext(!0)) : C.swipeNext(!0) || (e.autoplayStopOnLast ? (clearTimeout(W), W = void 0) : C.swipeTo(0)), C.wrapperTransitionEnd(function () {
                void 0 !== W && w()
            })
        }, e.autoplay)
    }
    if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
        var x = HTMLElement.prototype;
        x.__defineGetter__ && x.__defineGetter__("outerHTML", function () {
            return (new XMLSerializer).serializeToString(this)
        })
    }
    if (window.getComputedStyle || (window.getComputedStyle = function (t) {
            return this.el = t, this.getPropertyValue = function (e) {
                var n = /(\-([a-z]){1})/g;
                return "float" === e && (e = "styleFloat"), n.test(e) && (e = e.replace(n, function () {
                    return arguments[2].toUpperCase()
                })), t.currentStyle[e] ? t.currentStyle[e] : null
            }, this
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
            for (var n = e || 0, i = this.length; i > n; n++)
                if (this[n] === t) return n;
            return -1
        }), (document.querySelectorAll || window.jQuery) && void 0 !== t && (t.nodeType || 0 !== n(t).length)) {
        var C = this;
        C.touches = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
            abs: 0
        }, C.positions = {
            start: 0,
            abs: 0,
            diff: 0,
            current: 0
        }, C.times = {
            start: 0,
            end: 0
        }, C.id = (new Date).getTime(), C.container = t.nodeType ? t : n(t)[0], C.isTouched = !1, C.isMoved = !1, C.activeIndex = 0, C.centerIndex = 0, C.activeLoaderIndex = 0, C.activeLoopIndex = 0, C.previousIndex = null, C.velocity = 0, C.snapGrid = [], C.slidesGrid = [], C.imagesToLoad = [], C.imagesLoaded = 0, C.wrapperLeft = 0, C.wrapperRight = 0, C.wrapperTop = 0, C.wrapperBottom = 0, C.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
        var S, E, T, k, P, _, A = {
            eventTarget: "wrapper",
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerViewFit: !0,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            longSwipesRatio: .5,
            moveStartThreshold: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            preventLinksPropagation: !1,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelControlForceToAxis: !1,
            useCSS3Transforms: !0,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            loop: !1,
            loopAdditionalSlides: 0,
            roundLengths: !1,
            calculateHeight: !1,
            cssWidthAndHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {
                slides: [],
                slidesHTMLType: "inner",
                surroundGroups: 1,
                logic: "reload",
                loadAllSlides: !1
            },
            swipeToPrev: !0,
            swipeToNext: !0,
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
        for (var $ in e = e || {}, A)
            if ($ in e && "object" == typeof e[$])
                for (var M in A[$]) M in e[$] || (e[$][M] = A[$][M]);
            else $ in e || (e[$] = A[$]);
        C.params = e, e.scrollContainer && (e.freeMode = !0, e.freeModeFluid = !0), e.loop && (e.resistance = "100%");
        var H = "horizontal" === e.mode,
            L = ["mousedown", "mousemove", "mouseup"];
        C.browser.ie10 && (L = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), C.browser.ie11 && (L = ["pointerdown", "pointermove", "pointerup"]), C.touchEvents = {
            touchStart: C.support.touch || !e.simulateTouch ? "touchstart" : L[0],
            touchMove: C.support.touch || !e.simulateTouch ? "touchmove" : L[1],
            touchEnd: C.support.touch || !e.simulateTouch ? "touchend" : L[2]
        };
        for (var D = C.container.childNodes.length - 1; D >= 0; D--)
            if (C.container.childNodes[D].className)
                for (var O = C.container.childNodes[D].className.split(/\s+/), I = 0; I < O.length; I++) O[I] === e.wrapperClass && (S = C.container.childNodes[D]);
        C.wrapper = S, C._extendSwiperSlide = function (t) {
            return t.append = function () {
                return e.loop ? t.insertAfter(C.slides.length - C.loopedSlides) : (C.wrapper.appendChild(t), C.reInit()), t
            }, t.prepend = function () {
                return e.loop ? (C.wrapper.insertBefore(t, C.slides[C.loopedSlides]), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()) : C.wrapper.insertBefore(t, C.wrapper.firstChild), C.reInit(), t
            }, t.insertAfter = function (n) {
                return void 0 !== n && (e.loop ? ((i = C.slides[n + 1 + C.loopedSlides]) ? C.wrapper.insertBefore(t, i) : C.wrapper.appendChild(t), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()) : (i = C.slides[n + 1], C.wrapper.insertBefore(t, i)), C.reInit(), t);
                var i
            }, t.clone = function () {
                return C._extendSwiperSlide(t.cloneNode(!0))
            }, t.remove = function () {
                C.wrapper.removeChild(t), C.reInit()
            }, t.html = function (e) {
                return void 0 === e ? t.innerHTML : (t.innerHTML = e, t)
            }, t.index = function () {
                for (var e, n = C.slides.length - 1; n >= 0; n--) t === C.slides[n] && (e = n);
                return e
            }, t.isActive = function () {
                return t.index() === C.activeIndex
            }, t.swiperSlideDataStorage || (t.swiperSlideDataStorage = {}), t.getData = function (e) {
                return t.swiperSlideDataStorage[e]
            }, t.setData = function (e, n) {
                return t.swiperSlideDataStorage[e] = n, t
            }, t.data = function (e, n) {
                return void 0 === n ? t.getAttribute("data-" + e) : (t.setAttribute("data-" + e, n), t)
            }, t.getWidth = function (e, n) {
                return C.h.getWidth(t, e, n)
            }, t.getHeight = function (e, n) {
                return C.h.getHeight(t, e, n)
            }, t.getOffset = function () {
                return C.h.getOffset(t)
            }, t
        }, C.calcSlides = function (t) {
            var n = !!C.slides && C.slides.length;
            C.slides = [], C.displaySlides = [];
            for (var i = 0; i < C.wrapper.childNodes.length; i++)
                if (C.wrapper.childNodes[i].className)
                    for (var r = C.wrapper.childNodes[i].className.split(/\s+/), a = 0; a < r.length; a++) r[a] === e.slideClass && C.slides.push(C.wrapper.childNodes[i]);
            for (i = C.slides.length - 1; i >= 0; i--) C._extendSwiperSlide(C.slides[i]);
            !1 !== n && (n !== C.slides.length || t) && (s(), o(), C.updateActiveSlide(), C.params.pagination && C.createPagination(), C.callPlugins("numberOfSlidesChanged"))
        }, C.createSlide = function (t, n, i) {
            n = n || C.params.slideClass, i = i || e.slideElement;
            var o = document.createElement(i);
            return o.innerHTML = t || "", o.className = n, C._extendSwiperSlide(o)
        }, C.appendSlide = function (t, e, n) {
            return t ? t.nodeType ? C._extendSwiperSlide(t).append() : C.createSlide(t, e, n).append() : void 0
        }, C.prependSlide = function (t, e, n) {
            return t ? t.nodeType ? C._extendSwiperSlide(t).prepend() : C.createSlide(t, e, n).prepend() : void 0
        }, C.insertSlideAfter = function (t, e, n, i) {
            return void 0 !== t && (e.nodeType ? C._extendSwiperSlide(e).insertAfter(t) : C.createSlide(e, n, i).insertAfter(t))
        }, C.removeSlide = function (t) {
            if (C.slides[t]) {
                if (e.loop) {
                    if (!C.slides[t + C.loopedSlides]) return !1;
                    C.slides[t + C.loopedSlides].remove(), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()
                } else C.slides[t].remove();
                return !0
            }
            return !1
        }, C.removeLastSlide = function () {
            return C.slides.length > 0 && (e.loop ? (C.slides[C.slides.length - 1 - C.loopedSlides].remove(), C.removeLoopedSlides(), C.calcSlides(), C.createLoop()) : C.slides[C.slides.length - 1].remove(), !0)
        }, C.removeAllSlides = function () {
            for (var t = C.slides.length - 1; t >= 0; t--) C.slides[t].remove()
        }, C.getSlide = function (t) {
            return C.slides[t]
        }, C.getLastSlide = function () {
            return C.slides[C.slides.length - 1]
        }, C.getFirstSlide = function () {
            return C.slides[0]
        }, C.activeSlide = function () {
            return C.slides[C.activeIndex]
        }, C.fireCallback = function () {
            var t = arguments[0];
            if ("[object Array]" === Object.prototype.toString.call(t))
                for (var n = 0; n < t.length; n++) "function" == typeof t[n] && t[n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            else "[object String]" === Object.prototype.toString.call(t) ? e["on" + t] && C.fireCallback(e["on" + t], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : t(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
        }, C.addCallback = function (t, e) {
            var n, i;
            return this.params["on" + t] ? (i = this.params["on" + t], "[object Array]" === Object.prototype.toString.apply(i) ? this.params["on" + t].push(e) : "function" == typeof this.params["on" + t] ? (n = this.params["on" + t], this.params["on" + t] = [], this.params["on" + t].push(n), this.params["on" + t].push(e)) : void 0) : (this.params["on" + t] = [], this.params["on" + t].push(e))
        }, C.removeCallbacks = function (t) {
            C.params["on" + t] && (C.params["on" + t] = null)
        };
        var N = [];
        for (var z in C.plugins)
            if (e[z]) {
                var F = C.plugins[z](C, e[z]);
                F && N.push(F)
            }
        C.callPlugins = function (t, e) {
            e || (e = {});
            for (var n = 0; n < N.length; n++) t in N[n] && N[n][t](e)
        }, !C.browser.ie10 && !C.browser.ie11 || e.onlyExternal || C.wrapper.classList.add("swiper-wp8-" + (H ? "horizontal" : "vertical")), e.freeMode && (C.container.className += " swiper-free-mode"), C.initialized = !1, C.init = function (t, n) {
            var i = C.h.getWidth(C.container, !1, e.roundLengths),
                o = C.h.getHeight(C.container, !1, e.roundLengths);
            if (i !== C.width || o !== C.height || t) {
                var s, r, a, l, c, u, d;
                C.width = i, C.height = o, _ = H ? i : o;
                var p = C.wrapper;
                if (t && C.calcSlides(n), "auto" === e.slidesPerView) {
                    var f = 0,
                        h = 0;
                    e.slidesOffset > 0 && (p.style.paddingLeft = "", p.style.paddingRight = "", p.style.paddingTop = "", p.style.paddingBottom = ""), p.style.width = "", p.style.height = "", e.offsetPxBefore > 0 && (H ? C.wrapperLeft = e.offsetPxBefore : C.wrapperTop = e.offsetPxBefore), e.offsetPxAfter > 0 && (H ? C.wrapperRight = e.offsetPxAfter : C.wrapperBottom = e.offsetPxAfter), e.centeredSlides && (H ? (C.wrapperLeft = (_ - this.slides[0].getWidth(!0, e.roundLengths)) / 2, C.wrapperRight = (_ - C.slides[C.slides.length - 1].getWidth(!0, e.roundLengths)) / 2) : (C.wrapperTop = (_ - C.slides[0].getHeight(!0, e.roundLengths)) / 2, C.wrapperBottom = (_ - C.slides[C.slides.length - 1].getHeight(!0, e.roundLengths)) / 2)), H ? (C.wrapperLeft >= 0 && (p.style.paddingLeft = C.wrapperLeft + "px"), C.wrapperRight >= 0 && (p.style.paddingRight = C.wrapperRight + "px")) : (C.wrapperTop >= 0 && (p.style.paddingTop = C.wrapperTop + "px"), C.wrapperBottom >= 0 && (p.style.paddingBottom = C.wrapperBottom + "px")), u = 0;
                    var m = 0;
                    for (C.snapGrid = [], C.slidesGrid = [], a = 0, d = 0; d < C.slides.length; d++) {
                        s = C.slides[d].getWidth(!0, e.roundLengths), r = C.slides[d].getHeight(!0, e.roundLengths), e.calculateHeight && (a = Math.max(a, r));
                        var g = H ? s : r;
                        if (e.centeredSlides) {
                            var v = d === C.slides.length - 1 ? 0 : C.slides[d + 1].getWidth(!0, e.roundLengths),
                                y = d === C.slides.length - 1 ? 0 : C.slides[d + 1].getHeight(!0, e.roundLengths),
                                b = H ? v : y;
                            if (g > _) {
                                if (e.slidesPerViewFit) C.snapGrid.push(u + C.wrapperLeft), C.snapGrid.push(u + g - _ + C.wrapperLeft);
                                else
                                    for (var w = 0; w <= Math.floor(g / (_ + C.wrapperLeft)); w++) C.snapGrid.push(0 === w ? u + C.wrapperLeft : u + C.wrapperLeft + _ * w);
                                C.slidesGrid.push(u + C.wrapperLeft)
                            } else C.snapGrid.push(m), C.slidesGrid.push(m);
                            m += g / 2 + b / 2
                        } else {
                            if (g > _)
                                if (e.slidesPerViewFit) C.snapGrid.push(u), C.snapGrid.push(u + g - _);
                                else if (0 !== _)
                                for (var x = 0; x <= Math.floor(g / _); x++) C.snapGrid.push(u + _ * x);
                            else C.snapGrid.push(u);
                            else C.snapGrid.push(u);
                            C.slidesGrid.push(u)
                        }
                        u += g, f += s, h += r
                    }
                    e.calculateHeight && (C.height = a), H ? (T = f + C.wrapperRight + C.wrapperLeft, p.style.width = f + "px", p.style.height = C.height + "px") : (T = h + C.wrapperTop + C.wrapperBottom, p.style.width = C.width + "px", p.style.height = h + "px")
                } else if (e.scrollContainer) p.style.width = "", p.style.height = "", l = C.slides[0].getWidth(!0, e.roundLengths), c = C.slides[0].getHeight(!0, e.roundLengths), T = H ? l : c, p.style.width = l + "px", p.style.height = c + "px", E = H ? l : c;
                else {
                    if (e.calculateHeight) {
                        for (a = 0, c = 0, H || (C.container.style.height = ""), p.style.height = "", d = 0; d < C.slides.length; d++) C.slides[d].style.height = "", a = Math.max(C.slides[d].getHeight(!0), a), H || (c += C.slides[d].getHeight(!0));
                        r = a, C.height = r, H ? c = r : (_ = r, C.container.style.height = _ + "px")
                    } else r = H ? C.height : C.height / e.slidesPerView, e.roundLengths && (r = Math.ceil(r)), c = H ? C.height : C.slides.length * r;
                    for (s = H ? C.width / e.slidesPerView : C.width, e.roundLengths && (s = Math.ceil(s)), l = H ? C.slides.length * s : C.width, E = H ? s : r, e.offsetSlidesBefore > 0 && (H ? C.wrapperLeft = E * e.offsetSlidesBefore : C.wrapperTop = E * e.offsetSlidesBefore), e.offsetSlidesAfter > 0 && (H ? C.wrapperRight = E * e.offsetSlidesAfter : C.wrapperBottom = E * e.offsetSlidesAfter), e.offsetPxBefore > 0 && (H ? C.wrapperLeft = e.offsetPxBefore : C.wrapperTop = e.offsetPxBefore), e.offsetPxAfter > 0 && (H ? C.wrapperRight = e.offsetPxAfter : C.wrapperBottom = e.offsetPxAfter), e.centeredSlides && (H ? (C.wrapperLeft = (_ - E) / 2, C.wrapperRight = (_ - E) / 2) : (C.wrapperTop = (_ - E) / 2, C.wrapperBottom = (_ - E) / 2)), H ? (C.wrapperLeft > 0 && (p.style.paddingLeft = C.wrapperLeft + "px"), C.wrapperRight > 0 && (p.style.paddingRight = C.wrapperRight + "px")) : (C.wrapperTop > 0 && (p.style.paddingTop = C.wrapperTop + "px"), C.wrapperBottom > 0 && (p.style.paddingBottom = C.wrapperBottom + "px")), T = H ? l + C.wrapperRight + C.wrapperLeft : c + C.wrapperTop + C.wrapperBottom, parseFloat(l) > 0 && (!e.cssWidthAndHeight || "height" === e.cssWidthAndHeight) && (p.style.width = l + "px"), parseFloat(c) > 0 && (!e.cssWidthAndHeight || "width" === e.cssWidthAndHeight) && (p.style.height = c + "px"), u = 0, C.snapGrid = [], C.slidesGrid = [], d = 0; d < C.slides.length; d++) C.snapGrid.push(u), C.slidesGrid.push(u), u += E, parseFloat(s) > 0 && (!e.cssWidthAndHeight || "height" === e.cssWidthAndHeight) && (C.slides[d].style.width = s + "px"), parseFloat(r) > 0 && (!e.cssWidthAndHeight || "width" === e.cssWidthAndHeight) && (C.slides[d].style.height = r + "px")
                }
                C.initialized ? (C.callPlugins("onInit"), e.onInit && C.fireCallback(e.onInit, C)) : (C.callPlugins("onFirstInit"), e.onFirstInit && C.fireCallback(e.onFirstInit, C)), C.initialized = !0
            }
        }, C.reInit = function (t) {
            C.init(!0, t)
        }, C.resizeFix = function (t) {
            C.callPlugins("beforeResizeFix"), C.init(e.resizeReInit || t), e.freeMode ? C.getWrapperTranslate() < -i() && (C.setWrapperTransition(0), C.setWrapperTranslate(-i())) : (C.swipeTo(e.loop ? C.activeLoopIndex : C.activeIndex, 0, !1), e.autoplay && (C.support.transitions && void 0 !== W ? void 0 !== W && (clearTimeout(W), W = void 0, C.startAutoplay()) : void 0 !== j && (clearInterval(j), j = void 0, C.startAutoplay()))), C.callPlugins("afterResizeFix")
        }, C.destroy = function () {
            var t = C.h.removeEventListener,
                n = "wrapper" === e.eventTarget ? C.wrapper : C.container;
            C.browser.ie10 || C.browser.ie11 ? (t(n, C.touchEvents.touchStart, f), t(document, C.touchEvents.touchMove, h), t(document, C.touchEvents.touchEnd, m)) : (C.support.touch && (t(n, "touchstart", f), t(n, "touchmove", h), t(n, "touchend", m)), e.simulateTouch && (t(n, "mousedown", f), t(document, "mousemove", h), t(document, "mouseup", m))), e.autoResize && t(window, "resize", C.resizeFix), s(), e.paginationClickable && y(), e.mousewheelControl && C._wheelEvent && t(C.container, C._wheelEvent, a), e.keyboardControl && t(document, "keydown", r), e.autoplay && C.stopAutoplay(), C.callPlugins("onDestroy"), C = null
        }, C.disableKeyboardControl = function () {
            e.keyboardControl = !1, C.h.removeEventListener(document, "keydown", r)
        }, C.enableKeyboardControl = function () {
            e.keyboardControl = !0, C.h.addEventListener(document, "keydown", r)
        };
        var R = (new Date).getTime();
        if (C.disableMousewheelControl = function () {
                return !!C._wheelEvent && (e.mousewheelControl = !1, C.h.removeEventListener(C.container, C._wheelEvent, a), !0)
            }, C.enableMousewheelControl = function () {
                return !!C._wheelEvent && (e.mousewheelControl = !0, C.h.addEventListener(C.container, C._wheelEvent, a), !0)
            }, e.grabCursor) {
            var Y = C.container.style;
            Y.cursor = "move", Y.cursor = "grab", Y.cursor = "-moz-grab", Y.cursor = "-webkit-grab"
        }
        C.allowSlideClick = !0, C.allowLinks = !0;
        var X, B, q, W, j, U = !1,
            G = !0;
        C.swipeNext = function (t) {
                !t && e.loop && C.fixLoop(), !t && e.autoplay && C.stopAutoplay(!0), C.callPlugins("onSwipeNext");
                var n = C.getWrapperTranslate(),
                    o = n;
                if ("auto" === e.slidesPerView) {
                    for (var s = 0; s < C.snapGrid.length; s++)
                        if (-n >= C.snapGrid[s] && -n < C.snapGrid[s + 1]) {
                            o = -C.snapGrid[s + 1];
                            break
                        }
                } else {
                    var r = E * e.slidesPerGroup;
                    o = -(Math.floor(Math.abs(n) / Math.floor(r)) * r + r)
                }
                return o < -i() && (o = -i()), o !== n && (v(o, "next"), !0)
            }, C.swipePrev = function (t) {
                !t && e.loop && C.fixLoop(), !t && e.autoplay && C.stopAutoplay(!0), C.callPlugins("onSwipePrev");
                var n, i = Math.ceil(C.getWrapperTranslate());
                if ("auto" === e.slidesPerView) {
                    n = 0;
                    for (var o = 1; o < C.snapGrid.length; o++) {
                        if (-i === C.snapGrid[o]) {
                            n = -C.snapGrid[o - 1];
                            break
                        }
                        if (-i > C.snapGrid[o] && -i < C.snapGrid[o + 1]) {
                            n = -C.snapGrid[o];
                            break
                        }
                    }
                } else {
                    var s = E * e.slidesPerGroup;
                    n = -(Math.ceil(-i / s) - 1) * s
                }
                return n > 0 && (n = 0), n !== i && (v(n, "prev"), !0)
            }, C.swipeReset = function () {
                C.callPlugins("onSwipeReset");
                var t, n = C.getWrapperTranslate(),
                    o = E * e.slidesPerGroup;
                if (i(), "auto" === e.slidesPerView) {
                    t = 0;
                    for (var s = 0; s < C.snapGrid.length; s++) {
                        if (-n === C.snapGrid[s]) return;
                        if (-n >= C.snapGrid[s] && -n < C.snapGrid[s + 1]) {
                            t = C.positions.diff > 0 ? -C.snapGrid[s + 1] : -C.snapGrid[s];
                            break
                        }
                    } - n >= C.snapGrid[C.snapGrid.length - 1] && (t = -C.snapGrid[C.snapGrid.length - 1]), n <= -i() && (t = -i())
                } else t = 0 > n ? Math.round(n / o) * o : 0, n <= -i() && (t = -i());
                return e.scrollContainer && (t = 0 > n ? n : 0), t < -i() && (t = -i()), e.scrollContainer && _ > E && (t = 0), t !== n && (v(t, "reset"), !0)
            }, C.swipeTo = function (t, n, o) {
                t = parseInt(t, 10), C.callPlugins("onSwipeTo", {
                    index: t,
                    speed: n
                }), e.loop && (t += C.loopedSlides);
                var s, r = C.getWrapperTranslate();
                if (!(t > C.slides.length - 1 || 0 > t)) return (s = "auto" === e.slidesPerView ? -C.slidesGrid[t] : -t * E) < -i() && (s = -i()), s !== r && (v(s, "to", {
                    index: t,
                    speed: n,
                    runCallbacks: o = !1 !== o
                }), !0)
            }, C._queueStartCallbacks = !1, C._queueEndCallbacks = !1, C.updateActiveSlide = function (t) {
                if (C.initialized && 0 !== C.slides.length) {
                    var n;
                    if (C.previousIndex = C.activeIndex, void 0 === t && (t = C.getWrapperTranslate()), t > 0 && (t = 0), "auto" === e.slidesPerView) {
                        if (C.activeIndex = C.slidesGrid.indexOf(-t), C.activeIndex < 0) {
                            for (n = 0; n < C.slidesGrid.length - 1 && !(-t > C.slidesGrid[n] && -t < C.slidesGrid[n + 1]); n++);
                            var i = Math.abs(C.slidesGrid[n] + t),
                                o = Math.abs(C.slidesGrid[n + 1] + t);
                            C.activeIndex = o >= i ? n : n + 1
                        }
                    } else C.activeIndex = Math[e.visibilityFullFit ? "ceil" : "round"](-t / E);
                    if (C.activeIndex === C.slides.length && (C.activeIndex = C.slides.length - 1), C.activeIndex < 0 && (C.activeIndex = 0), C.slides[C.activeIndex]) {
                        if (C.calcVisibleSlides(t), C.support.classList) {
                            var s;
                            for (n = 0; n < C.slides.length; n++)(s = C.slides[n]).classList.remove(e.slideActiveClass), C.visibleSlides.indexOf(s) >= 0 ? s.classList.add(e.slideVisibleClass) : s.classList.remove(e.slideVisibleClass);
                            C.slides[C.activeIndex].classList.add(e.slideActiveClass)
                        } else {
                            var r = new RegExp("\\s*" + e.slideActiveClass),
                                a = new RegExp("\\s*" + e.slideVisibleClass);
                            for (n = 0; n < C.slides.length; n++) C.slides[n].className = C.slides[n].className.replace(r, "").replace(a, ""), C.visibleSlides.indexOf(C.slides[n]) >= 0 && (C.slides[n].className += " " + e.slideVisibleClass);
                            C.slides[C.activeIndex].className += " " + e.slideActiveClass
                        }
                        if (e.loop) {
                            var l = C.loopedSlides;
                            C.activeLoopIndex = C.activeIndex - l, C.activeLoopIndex >= C.slides.length - 2 * l && (C.activeLoopIndex = C.slides.length - 2 * l - C.activeLoopIndex), C.activeLoopIndex < 0 && (C.activeLoopIndex = C.slides.length - 2 * l + C.activeLoopIndex), C.activeLoopIndex < 0 && (C.activeLoopIndex = 0)
                        } else C.activeLoopIndex = C.activeIndex;
                        e.pagination && C.updatePagination(t)
                    }
                }
            }, C.createPagination = function (t) {
                if (e.paginationClickable && C.paginationButtons && y(), C.paginationContainer = e.pagination.nodeType ? e.pagination : n(e.pagination)[0], e.createPagination) {
                    var i = "",
                        o = C.slides.length;
                    e.loop && (o -= 2 * C.loopedSlides);
                    for (var s = 0; o > s; s++) i += "<" + e.paginationElement + ' class="' + e.paginationElementClass + '"></' + e.paginationElement + ">";
                    C.paginationContainer.innerHTML = i
                }
                C.paginationButtons = n("." + e.paginationElementClass, C.paginationContainer), t || C.updatePagination(), C.callPlugins("onCreatePagination"), e.paginationClickable && function () {
                    var t = C.paginationButtons;
                    if (t)
                        for (var e = 0; e < t.length; e++) C.h.addEventListener(t[e], "click", b)
                }()
            }, C.updatePagination = function (t) {
                if (e.pagination && !(C.slides.length < 1) && n("." + e.paginationActiveClass, C.paginationContainer)) {
                    var i = C.paginationButtons;
                    if (0 !== i.length) {
                        for (var o = 0; o < i.length; o++) i[o].className = e.paginationElementClass;
                        var s = e.loop ? C.loopedSlides : 0;
                        if (e.paginationAsRange) {
                            C.visibleSlides || C.calcVisibleSlides(t);
                            var r, a = [];
                            for (r = 0; r < C.visibleSlides.length; r++) {
                                var l = C.slides.indexOf(C.visibleSlides[r]) - s;
                                e.loop && 0 > l && (l = C.slides.length - 2 * C.loopedSlides + l), e.loop && l >= C.slides.length - 2 * C.loopedSlides && (l = C.slides.length - 2 * C.loopedSlides - l, l = Math.abs(l)), a.push(l)
                            }
                            for (r = 0; r < a.length; r++) i[a[r]] && (i[a[r]].className += " " + e.paginationVisibleClass);
                            e.loop ? void 0 !== i[C.activeLoopIndex] && (i[C.activeLoopIndex].className += " " + e.paginationActiveClass) : i[C.activeIndex].className += " " + e.paginationActiveClass
                        } else e.loop ? i[C.activeLoopIndex] && (i[C.activeLoopIndex].className += " " + e.paginationActiveClass + " " + e.paginationVisibleClass) : i[C.activeIndex].className += " " + e.paginationActiveClass + " " + e.paginationVisibleClass
                    }
                }
            }, C.calcVisibleSlides = function (t) {
                var n = [],
                    i = 0,
                    o = 0,
                    s = 0;
                H && C.wrapperLeft > 0 && (t += C.wrapperLeft), !H && C.wrapperTop > 0 && (t += C.wrapperTop);
                for (var r = 0; r < C.slides.length; r++) {
                    s = (i += o) + (o = "auto" === e.slidesPerView ? H ? C.h.getWidth(C.slides[r], !0, e.roundLengths) : C.h.getHeight(C.slides[r], !0, e.roundLengths) : E);
                    var a = !1;
                    e.visibilityFullFit ? (i >= -t && -t + _ >= s && (a = !0), -t >= i && s >= -t + _ && (a = !0)) : (s > -t && -t + _ >= s && (a = !0), i >= -t && -t + _ > i && (a = !0), -t > i && s > -t + _ && (a = !0)), a && n.push(C.slides[r])
                }
                0 === n.length && (n = [C.slides[C.activeIndex]]), C.visibleSlides = n
            }, C.startAutoplay = function () {
                if (C.support.transitions) {
                    if (void 0 !== W) return !1;
                    if (!e.autoplay) return;
                    C.callPlugins("onAutoplayStart"), e.onAutoplayStart && C.fireCallback(e.onAutoplayStart, C), w()
                } else {
                    if (void 0 !== j) return !1;
                    if (!e.autoplay) return;
                    C.callPlugins("onAutoplayStart"), e.onAutoplayStart && C.fireCallback(e.onAutoplayStart, C), j = setInterval(function () {
                        e.loop ? (C.fixLoop(), C.swipeNext(!0)) : C.swipeNext(!0) || (e.autoplayStopOnLast ? (clearInterval(j), j = void 0) : C.swipeTo(0))
                    }, e.autoplay)
                }
            }, C.stopAutoplay = function (t) {
                if (C.support.transitions) {
                    if (!W) return;
                    W && clearTimeout(W), W = void 0, t && !e.autoplayDisableOnInteraction && C.wrapperTransitionEnd(function () {
                        w()
                    }), C.callPlugins("onAutoplayStop"), e.onAutoplayStop && C.fireCallback(e.onAutoplayStop, C)
                } else j && clearInterval(j), j = void 0, C.callPlugins("onAutoplayStop"), e.onAutoplayStop && C.fireCallback(e.onAutoplayStop, C)
            }, C.loopCreated = !1, C.removeLoopedSlides = function () {
                if (C.loopCreated)
                    for (var t = 0; t < C.slides.length; t++) !0 === C.slides[t].getData("looped") && C.wrapper.removeChild(C.slides[t])
            }, C.createLoop = function () {
                if (0 !== C.slides.length) {
                    C.loopedSlides = "auto" === e.slidesPerView ? e.loopedSlides || 1 : e.slidesPerView + e.loopAdditionalSlides, C.loopedSlides > C.slides.length && (C.loopedSlides = C.slides.length);
                    var t, n = "",
                        i = "",
                        o = "",
                        s = C.slides.length,
                        r = Math.floor(C.loopedSlides / s),
                        a = C.loopedSlides % s;
                    for (t = 0; r * s > t; t++) {
                        var l = t;
                        if (t >= s) l = t - s * Math.floor(t / s);
                        o += C.slides[l].outerHTML
                    }
                    for (t = 0; a > t; t++) i += g(e.slideDuplicateClass, C.slides[t].outerHTML);
                    for (t = s - a; s > t; t++) n += g(e.slideDuplicateClass, C.slides[t].outerHTML);
                    var c = n + o + S.innerHTML + o + i;
                    for (S.innerHTML = c, C.loopCreated = !0, C.calcSlides(), t = 0; t < C.slides.length; t++)(t < C.loopedSlides || t >= C.slides.length - C.loopedSlides) && C.slides[t].setData("looped", !0);
                    C.callPlugins("onCreateLoop")
                }
            }, C.fixLoop = function () {
                var t;
                C.activeIndex < C.loopedSlides ? (t = C.slides.length - 3 * C.loopedSlides + C.activeIndex, C.swipeTo(t, 0, !1)) : ("auto" === e.slidesPerView && C.activeIndex >= 2 * C.loopedSlides || C.activeIndex > C.slides.length - 2 * e.slidesPerView) && (t = -C.slides.length + C.activeIndex + C.loopedSlides, C.swipeTo(t, 0, !1))
            }, C.loadSlides = function () {
                var t = "";
                C.activeLoaderIndex = 0;
                for (var n = e.loader.slides, i = e.loader.loadAllSlides ? n.length : e.slidesPerView * (1 + e.loader.surroundGroups), o = 0; i > o; o++) t += "outer" === e.loader.slidesHTMLType ? n[o] : "<" + e.slideElement + ' class="' + e.slideClass + '" data-swiperindex="' + o + '">' + n[o] + "</" + e.slideElement + ">";
                C.wrapper.innerHTML = t, C.calcSlides(!0), e.loader.loadAllSlides || C.wrapperTransitionEnd(C.reloadSlides, !0)
            }, C.reloadSlides = function () {
                var t = e.loader.slides,
                    n = parseInt(C.activeSlide().data("swiperindex"), 10);
                if (!(0 > n || n > t.length - 1)) {
                    C.activeLoaderIndex = n;
                    var i, o = Math.max(0, n - e.slidesPerView * e.loader.surroundGroups),
                        s = Math.min(n + e.slidesPerView * (1 + e.loader.surroundGroups) - 1, t.length - 1);
                    if (n > 0) {
                        var r = -E * (n - o);
                        C.setWrapperTranslate(r), C.setWrapperTransition(0)
                    }
                    if ("reload" === e.loader.logic) {
                        C.wrapper.innerHTML = "";
                        var a = "";
                        for (i = o; s >= i; i++) a += "outer" === e.loader.slidesHTMLType ? t[i] : "<" + e.slideElement + ' class="' + e.slideClass + '" data-swiperindex="' + i + '">' + t[i] + "</" + e.slideElement + ">";
                        C.wrapper.innerHTML = a
                    } else {
                        var l = 1e3,
                            c = 0;
                        for (i = 0; i < C.slides.length; i++) {
                            var u = C.slides[i].data("swiperindex");
                            o > u || u > s ? C.wrapper.removeChild(C.slides[i]) : (l = Math.min(u, l), c = Math.max(u, c))
                        }
                        for (i = o; s >= i; i++) {
                            var d;
                            l > i && ((d = document.createElement(e.slideElement)).className = e.slideClass, d.setAttribute("data-swiperindex", i), d.innerHTML = t[i], C.wrapper.insertBefore(d, C.wrapper.firstChild)), i > c && ((d = document.createElement(e.slideElement)).className = e.slideClass, d.setAttribute("data-swiperindex", i), d.innerHTML = t[i], C.wrapper.appendChild(d))
                        }
                    }
                    C.reInit(!0)
                }
            }, C.calcSlides(), e.loader.slides.length > 0 && 0 === C.slides.length && C.loadSlides(), e.loop && C.createLoop(), C.init(),
            function () {
                var t, i, s = C.h.addEventListener,
                    l = "wrapper" === e.eventTarget ? C.wrapper : C.container;
                if (C.browser.ie10 || C.browser.ie11 ? (s(l, C.touchEvents.touchStart, f), s(document, C.touchEvents.touchMove, h), s(document, C.touchEvents.touchEnd, m)) : (C.support.touch && (s(l, "touchstart", f), s(l, "touchmove", h), s(l, "touchend", m)), e.simulateTouch && (s(l, "mousedown", f), s(document, "mousemove", h), s(document, "mouseup", m))), e.autoResize && s(window, "resize", C.resizeFix), o(), C._wheelEvent = !1, e.mousewheelControl) {
                    if (void 0 !== document.onmousewheel && (C._wheelEvent = "mousewheel"), !C._wheelEvent) try {
                        new WheelEvent("wheel"), C._wheelEvent = "wheel"
                    } catch (t) {}
                    C._wheelEvent || (C._wheelEvent = "DOMMouseScroll"), C._wheelEvent && s(C.container, C._wheelEvent, a)
                }
                if (e.keyboardControl && s(document, "keydown", r), e.updateOnImagesReady) {
                    C.imagesToLoad = n("img", C.container);
                    for (var c = 0; c < C.imagesToLoad.length; c++) t = C.imagesToLoad[c].getAttribute("src"), i = void 0, (i = new Image).onload = function () {
                        null != C && (void 0 !== C.imagesLoaded && C.imagesLoaded++, C.imagesLoaded === C.imagesToLoad.length && (C.reInit(), e.onImagesReady && C.fireCallback(e.onImagesReady, C)))
                    }, i.src = t
                }
            }(), e.pagination && C.createPagination(!0), e.loop || e.initialSlide > 0 ? C.swipeTo(e.initialSlide, 0, !1) : C.updateActiveSlide(0), e.autoplay && C.startAutoplay(), C.centerIndex = C.activeIndex, e.onSwiperCreated && C.fireCallback(e.onSwiperCreated, C), C.callPlugins("onSwiperCreated")
    }
};
Swiper.prototype = {
        plugins: {},
        wrapperTransitionEnd: function (t, e) {
            "use strict";

            function n(a) {
                if (a.target === s && (t(o), o.params.queueEndCallbacks && (o._queueEndCallbacks = !1), !e))
                    for (i = 0; i < r.length; i++) o.h.removeEventListener(s, r[i], n)
            }
            var i, o = this,
                s = o.wrapper,
                r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
            if (t)
                for (i = 0; i < r.length; i++) o.h.addEventListener(s, r[i], n)
        },
        getWrapperTranslate: function (t) {
            "use strict";
            var e, n, i, o, s = this.wrapper;
            return void 0 === t && (t = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (i = window.getComputedStyle(s, null), window.WebKitCSSMatrix ? o = new WebKitCSSMatrix("none" === i.webkitTransform ? "" : i.webkitTransform) : e = (o = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = window.WebKitCSSMatrix ? o.m41 : parseFloat(16 === e.length ? e[12] : e[4])), "y" === t && (n = window.WebKitCSSMatrix ? o.m42 : parseFloat(16 === e.length ? e[13] : e[5]))) : ("x" === t && (n = parseFloat(s.style.left, 10) || 0), "y" === t && (n = parseFloat(s.style.top, 10) || 0)), n || 0
        },
        setWrapperTranslate: function (t, e, n) {
            "use strict";
            var i, o = this.wrapper.style,
                s = {
                    x: 0,
                    y: 0,
                    z: 0
                };
            3 === arguments.length ? (s.x = t, s.y = e, s.z = n) : (void 0 === e && (e = "horizontal" === this.params.mode ? "x" : "y"), s[e] = t), this.support.transforms && this.params.useCSS3Transforms ? (i = this.support.transforms3d ? "translate3d(" + s.x + "px, " + s.y + "px, " + s.z + "px)" : "translate(" + s.x + "px, " + s.y + "px)", o.webkitTransform = o.MsTransform = o.msTransform = o.MozTransform = o.OTransform = o.transform = i) : (o.left = s.x + "px", o.top = s.y + "px"), this.callPlugins("onSetWrapperTransform", s), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, s)
        },
        setWrapperTransition: function (t) {
            "use strict";
            var e = this.wrapper.style;
            e.webkitTransitionDuration = e.MsTransitionDuration = e.msTransitionDuration = e.MozTransitionDuration = e.OTransitionDuration = e.transitionDuration = t / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {
                duration: t
            }), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, t)
        },
        h: {
            getWidth: function (t, e, n) {
                "use strict";
                var i = window.getComputedStyle(t, null).getPropertyValue("width"),
                    o = parseFloat(i);
                return (isNaN(o) || i.indexOf("%") > 0 || 0 > o) && (o = t.offsetWidth - parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-right"))), e && (o += parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-right"))), n ? Math.ceil(o) : o
            },
            getHeight: function (t, e, n) {
                "use strict";
                if (e) return t.offsetHeight;
                var i = window.getComputedStyle(t, null).getPropertyValue("height"),
                    o = parseFloat(i);
                return (isNaN(o) || i.indexOf("%") > 0 || 0 > o) && (o = t.offsetHeight - parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-bottom"))), e && (o += parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(t, null).getPropertyValue("padding-bottom"))), n ? Math.ceil(o) : o
            },
            getOffset: function (t) {
                "use strict";
                var e = t.getBoundingClientRect(),
                    n = document.body,
                    i = t.clientTop || n.clientTop || 0,
                    o = t.clientLeft || n.clientLeft || 0,
                    s = window.pageYOffset || t.scrollTop,
                    r = window.pageXOffset || t.scrollLeft;
                return document.documentElement && !window.pageYOffset && (s = document.documentElement.scrollTop, r = document.documentElement.scrollLeft), {
                    top: e.top + s - i,
                    left: e.left + r - o
                }
            },
            windowWidth: function () {
                "use strict";
                return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
            },
            windowHeight: function () {
                "use strict";
                return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
            },
            windowScroll: function () {
                "use strict";
                return "undefined" != typeof pageYOffset ? {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                } : document.documentElement ? {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                } : void 0
            },
            addEventListener: function (t, e, n, i) {
                "use strict";
                void 0 === i && (i = !1), t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
            },
            removeEventListener: function (t, e, n, i) {
                "use strict";
                void 0 === i && (i = !1), t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
            }
        },
        setTransform: function (t, e) {
            "use strict";
            var n = t.style;
            n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
        },
        setTranslate: function (t, e) {
            "use strict";
            var n = t.style,
                i = e.x || 0,
                o = e.y || 0,
                s = e.z || 0,
                r = this.support.transforms3d ? "translate3d(" + i + "px," + o + "px," + s + "px)" : "translate(" + i + "px," + o + "px)";
            n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = r, this.support.transforms || (n.left = i + "px", n.top = o + "px")
        },
        setTransition: function (t, e) {
            "use strict";
            var n = t.style;
            n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e + "ms"
        },
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || function () {
                "use strict";
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function () {
                "use strict";
                var t = document.createElement("div").style;
                return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
            }(),
            transforms: window.Modernizr && !0 === Modernizr.csstransforms || function () {
                "use strict";
                var t = document.createElement("div").style;
                return "transform" in t || "WebkitTransform" in t || "MozTransform" in t || "msTransform" in t || "MsTransform" in t || "OTransform" in t
            }(),
            transitions: window.Modernizr && !0 === Modernizr.csstransitions || function () {
                "use strict";
                var t = document.createElement("div").style;
                return "transition" in t || "WebkitTransition" in t || "MozTransition" in t || "msTransition" in t || "MsTransition" in t || "OTransition" in t
            }(),
            classList: function () {
                "use strict";
                return "classList" in document.createElement("div")
            }()
        },
        browser: {
            ie8: function () {
                "use strict";
                var t = -1;
                if ("Microsoft Internet Explorer" === navigator.appName) {
                    var e = navigator.userAgent;
                    null !== new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(e) && (t = parseFloat(RegExp.$1))
                }
                return -1 !== t && 9 > t
            }(),
            ie10: window.navigator.msPointerEnabled,
            ie11: window.navigator.pointerEnabled
        }
    }, (window.jQuery || window.Zepto) && function (t) {
        "use strict";
        t.fn.swiper = function (e) {
            var n;
            return this.each(function (i) {
                var o = t(this);
                if (!o.data("swiper")) {
                    var s = new Swiper(o[0], e);
                    i || (n = s), o.data("swiper", s)
                }
            }), n
        }
    }(window.jQuery || window.Zepto), "undefined" != typeof module && (module.exports = Swiper), "function" == typeof define && define.amd && define([], function () {
        "use strict";
        return Swiper
    }),
    function () {
        this.MooTools = {
            version: "1.4.5",
            build: "ab8ea8824dc3b24b6666867a2c4ed58ebb762cf0"
        };
        var t = this.typeOf = function (t) {
                if (null == t) return "null";
                if (null != t.$family) return t.$family();
                if (t.nodeName) {
                    if (1 == t.nodeType) return "element";
                    if (3 == t.nodeType) return /\S/.test(t.nodeValue) ? "textnode" : "whitespace"
                } else if ("number" == typeof t.length) {
                    if (t.callee) return "arguments";
                    if ("item" in t) return "collection"
                }
                return typeof t
            },
            e = (this.instanceOf = function (t, e) {
                if (null == t) return !1;
                for (var n = t.$constructor || t.constructor; n;) {
                    if (n === e) return !0;
                    n = n.parent
                }
                return !!t.hasOwnProperty && t instanceof e
            }, this.Function),
            n = !0;
        for (var i in {
                toString: 1
            }) n = null;
        n && (n = ["hasOwnProperty", "valueOf", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "constructor"]), e.prototype.overloadSetter = function (t) {
            var e = this;
            return function (i, o) {
                if (null == i) return this;
                if (t || "string" != typeof i) {
                    for (var s in i) e.call(this, s, i[s]);
                    if (n)
                        for (var r = n.length; r--;) s = n[r], i.hasOwnProperty(s) && e.call(this, s, i[s])
                } else e.call(this, i, o);
                return this
            }
        }, e.prototype.overloadGetter = function (t) {
            var e = this;
            return function (n) {
                var i, o;
                if ("string" != typeof n ? i = n : arguments.length > 1 ? i = arguments : t && (i = [n]), i) {
                    o = {};
                    for (var s = 0; s < i.length; s++) o[i[s]] = e.call(this, i[s])
                } else o = e.call(this, n);
                return o
            }
        }, e.prototype.extend = function (t, e) {
            this[t] = e
        }.overloadSetter(), e.prototype.implement = function (t, e) {
            this.prototype[t] = e
        }.overloadSetter();
        var o = Array.prototype.slice;
        e.from = function (e) {
            return "function" == t(e) ? e : function () {
                return e
            }
        }, Array.from = function (e) {
            return null == e ? [] : s.isEnumerable(e) && "string" != typeof e ? "array" == t(e) ? e : o.call(e) : [e]
        }, Number.from = function (t) {
            var e = parseFloat(t);
            return isFinite(e) ? e : null
        }, String.from = function (t) {
            return t + ""
        }, e.implement({
            hide: function () {
                return this.$hidden = !0, this
            },
            protect: function () {
                return this.$protected = !0, this
            }
        });
        var s = this.Type = function (e, n) {
                if (e) {
                    var i = e.toLowerCase();
                    s["is" + e] = function (e) {
                        return t(e) == i
                    }, null != n && (n.prototype.$family = function () {
                        return i
                    }.hide())
                }
                return null == n ? null : (n.extend(this), n.$constructor = s, n.prototype.$constructor = n, n)
            },
            r = Object.prototype.toString;
        s.isEnumerable = function (t) {
            return null != t && "number" == typeof t.length && "[object Function]" != r.call(t)
        };
        var a = {},
            l = function (e) {
                var n = t(e.prototype);
                return a[n] || (a[n] = [])
            },
            c = function (e, n) {
                if (!n || !n.$hidden) {
                    for (var i = l(this), s = 0; s < i.length; s++) {
                        var r = i[s];
                        "type" == t(r) ? c.call(r, e, n) : r.call(this, e, n)
                    }
                    var a = this.prototype[e];
                    null != a && a.$protected || (this.prototype[e] = n), null == this[e] && "function" == t(n) && u.call(this, e, function (t) {
                        return n.apply(t, o.call(arguments, 1))
                    })
                }
            },
            u = function (t, e) {
                if (!e || !e.$hidden) {
                    var n = this[t];
                    null != n && n.$protected || (this[t] = e)
                }
            };
        s.implement({
            implement: c.overloadSetter(),
            extend: u.overloadSetter(),
            alias: function (t, e) {
                c.call(this, t, this.prototype[e])
            }.overloadSetter(),
            mirror: function (t) {
                return l(this).push(t), this
            }
        }), new s("Type", s);
        var d = function (t, e, n) {
            var i = e != Object,
                o = e.prototype;
            i && (e = new s(t, e));
            for (var r = 0, a = n.length; r < a; r++) {
                var l = n[r],
                    c = e[l],
                    u = o[l];
                c && c.protect(), i && u && e.implement(l, u.protect())
            }
            if (i) {
                var p = o.propertyIsEnumerable(n[0]);
                e.forEachMethod = function (t) {
                    if (!p)
                        for (var e = 0, i = n.length; e < i; e++) t.call(o, o[n[e]], n[e]);
                    for (var s in o) t.call(o, o[s], s)
                }
            }
            return d
        };
        d("String", String, ["charAt", "charCodeAt", "concat", "indexOf", "lastIndexOf", "match", "quote", "replace", "search", "slice", "split", "substr", "substring", "trim", "toLowerCase", "toUpperCase"])("Array", Array, ["pop", "push", "reverse", "shift", "sort", "splice", "unshift", "concat", "join", "slice", "indexOf", "lastIndexOf", "filter", "forEach", "every", "map", "some", "reduce", "reduceRight"])("Number", Number, ["toExponential", "toFixed", "toLocaleString", "toPrecision"])("Function", e, ["apply", "call", "bind"])("RegExp", RegExp, ["exec", "test"])("Object", Object, ["create", "defineProperty", "defineProperties", "keys", "getPrototypeOf", "getOwnPropertyDescriptor", "getOwnPropertyNames", "preventExtensions", "isExtensible", "seal", "isSealed", "freeze", "isFrozen"])("Date", Date, ["now"]), Object.extend = u.overloadSetter(), Date.extend("now", function () {
            return +new Date
        }), new s("Boolean", Boolean), Number.prototype.$family = function () {
            return isFinite(this) ? "number" : "null"
        }.hide(), Number.extend("random", function (t, e) {
            return Math.floor(Math.random() * (e - t + 1) + t)
        });
        var p = Object.prototype.hasOwnProperty;
        Object.extend("forEach", function (t, e, n) {
            for (var i in t) p.call(t, i) && e.call(n, t[i], i, t)
        }), Object.each = Object.forEach, Array.implement({
            forEach: function (t, e) {
                for (var n = 0, i = this.length; n < i; n++) n in this && t.call(e, this[n], n, this)
            },
            each: function (t, e) {
                return Array.forEach(this, t, e), this
            }
        });
        var f = function (e) {
            switch (t(e)) {
                case "array":
                    return e.clone();
                case "object":
                    return Object.clone(e);
                default:
                    return e
            }
        };
        Array.implement("clone", function () {
            for (var t = this.length, e = new Array(t); t--;) e[t] = f(this[t]);
            return e
        });
        var h = function (e, n, i) {
            switch (t(i)) {
                case "object":
                    "object" == t(e[n]) ? Object.merge(e[n], i) : e[n] = Object.clone(i);
                    break;
                case "array":
                    e[n] = i.clone();
                    break;
                default:
                    e[n] = i
            }
            return e
        };
        Object.extend({
            merge: function (e, n, i) {
                if ("string" == t(n)) return h(e, n, i);
                for (var o = 1, s = arguments.length; o < s; o++) {
                    var r = arguments[o];
                    for (var a in r) h(e, a, r[a])
                }
                return e
            },
            clone: function (t) {
                var e = {};
                for (var n in t) e[n] = f(t[n]);
                return e
            },
            append: function (t) {
                for (var e = 1, n = arguments.length; e < n; e++) {
                    var i = arguments[e] || {};
                    for (var o in i) t[o] = i[o]
                }
                return t
            }
        }), ["Object", "WhiteSpace", "TextNode", "Collection", "Arguments"].each(function (t) {
            new s(t)
        });
        var m = Date.now();
        String.extend("uniqueID", function () {
            return (m++).toString(36)
        })
    }(), Array.implement({
        every: function (t, e) {
            for (var n = 0, i = this.length >>> 0; n < i; n++)
                if (n in this && !t.call(e, this[n], n, this)) return !1;
            return !0
        },
        filter: function (t, e) {
            for (var n, i = [], o = 0, s = this.length >>> 0; o < s; o++) o in this && (n = this[o], t.call(e, n, o, this) && i.push(n));
            return i
        },
        indexOf: function (t, e) {
            for (var n = this.length >>> 0, i = e < 0 ? Math.max(0, n + e) : e || 0; i < n; i++)
                if (this[i] === t) return i;
            return -1
        },
        map: function (t, e) {
            for (var n = this.length >>> 0, i = Array(n), o = 0; o < n; o++) o in this && (i[o] = t.call(e, this[o], o, this));
            return i
        },
        some: function (t, e) {
            for (var n = 0, i = this.length >>> 0; n < i; n++)
                if (n in this && t.call(e, this[n], n, this)) return !0;
            return !1
        },
        clean: function () {
            return this.filter(function (t) {
                return null != t
            })
        },
        invoke: function (t) {
            var e = Array.slice(arguments, 1);
            return this.map(function (n) {
                return n[t].apply(n, e)
            })
        },
        associate: function (t) {
            for (var e = {}, n = Math.min(this.length, t.length), i = 0; i < n; i++) e[t[i]] = this[i];
            return e
        },
        link: function (t) {
            for (var e = {}, n = 0, i = this.length; n < i; n++)
                for (var o in t)
                    if (t[o](this[n])) {
                        e[o] = this[n], delete t[o];
                        break
                    }
            return e
        },
        contains: function (t, e) {
            return -1 != this.indexOf(t, e)
        },
        append: function (t) {
            return this.push.apply(this, t), this
        },
        getLast: function () {
            return this.length ? this[this.length - 1] : null
        },
        getRandom: function () {
            return this.length ? this[Number.random(0, this.length - 1)] : null
        },
        include: function (t) {
            return this.contains(t) || this.push(t), this
        },
        combine: function (t) {
            for (var e = 0, n = t.length; e < n; e++) this.include(t[e]);
            return this
        },
        erase: function (t) {
            for (var e = this.length; e--;) this[e] === t && this.splice(e, 1);
            return this
        },
        empty: function () {
            return this.length = 0, this
        },
        flatten: function () {
            for (var t = [], e = 0, n = this.length; e < n; e++) {
                var i = typeOf(this[e]);
                "null" != i && (t = t.concat("array" == i || "collection" == i || "arguments" == i || instanceOf(this[e], Array) ? Array.flatten(this[e]) : this[e]))
            }
            return t
        },
        pick: function () {
            for (var t = 0, e = this.length; t < e; t++)
                if (null != this[t]) return this[t];
            return null
        },
        hexToRgb: function (t) {
            if (3 != this.length) return null;
            var e = this.map(function (t) {
                return 1 == t.length && (t += t), t.toInt(16)
            });
            return t ? e : "rgb(" + e + ")"
        },
        rgbToHex: function (t) {
            if (this.length < 3) return null;
            if (4 == this.length && 0 == this[3] && !t) return "transparent";
            for (var e = [], n = 0; n < 3; n++) {
                var i = (this[n] - 0).toString(16);
                e.push(1 == i.length ? "0" + i : i)
            }
            return t ? e : "#" + e.join("")
        }
    }), String.implement({
        test: function (t, e) {
            return ("regexp" == typeOf(t) ? t : new RegExp("" + t, e)).test(this)
        },
        contains: function (t, e) {
            return e ? (e + this + e).indexOf(e + t + e) > -1 : String(this).indexOf(t) > -1
        },
        trim: function () {
            return String(this).replace(/^\s+|\s+$/g, "")
        },
        clean: function () {
            return String(this).replace(/\s+/g, " ").trim()
        },
        camelCase: function () {
            return String(this).replace(/-\D/g, function (t) {
                return t.charAt(1).toUpperCase()
            })
        },
        hyphenate: function () {
            return String(this).replace(/[A-Z]/g, function (t) {
                return "-" + t.charAt(0).toLowerCase()
            })
        },
        capitalize: function () {
            return String(this).replace(/\b[a-z]/g, function (t) {
                return t.toUpperCase()
            })
        },
        escapeRegExp: function () {
            return String(this).replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1")
        },
        toInt: function (t) {
            return parseInt(this, t || 10)
        },
        toFloat: function () {
            return parseFloat(this)
        },
        hexToRgb: function (t) {
            var e = String(this).match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
            return e ? e.slice(1).hexToRgb(t) : null
        },
        rgbToHex: function (t) {
            var e = String(this).match(/\d{1,3}/g);
            return e ? e.rgbToHex(t) : null
        },
        substitute: function (t, e) {
            return String(this).replace(e || /\\?\{([^{}]+)\}/g, function (e, n) {
                return "\\" == e.charAt(0) ? e.slice(1) : null != t[n] ? t[n] : ""
            })
        }
    }), Number.implement({
        limit: function (t, e) {
            return Math.min(e, Math.max(t, this))
        },
        round: function (t) {
            return t = Math.pow(10, t || 0).toFixed(t < 0 ? -t : 0), Math.round(this * t) / t
        },
        times: function (t, e) {
            for (var n = 0; n < this; n++) t.call(e, n, this)
        },
        toFloat: function () {
            return parseFloat(this)
        },
        toInt: function (t) {
            return parseInt(this, t || 10)
        }
    }), Number.alias("each", "times"),
    function (t) {
        var e = {};
        ["abs", "acos", "asin", "atan", "atan2", "ceil", "cos", "exp", "floor", "log", "max", "min", "pow", "sin", "sqrt", "tan"].each(function (t) {
            Number[t] || (e[t] = function () {
                return Math[t].apply(null, [this].concat(Array.from(arguments)))
            })
        }), Number.implement(e)
    }(), Function.extend({
        attempt: function () {
            for (var t = 0, e = arguments.length; t < e; t++) try {
                return arguments[t]()
            } catch (t) {}
            return null
        }
    }), Function.implement({
        attempt: function (t, e) {
            try {
                return this.apply(e, Array.from(t))
            } catch (t) {}
            return null
        },
        bind: function (t) {
            var e = this,
                n = arguments.length > 1 ? Array.slice(arguments, 1) : null,
                i = function () {},
                o = function () {
                    var s = t,
                        r = arguments.length;
                    this instanceof o && (i.prototype = e.prototype, s = new i);
                    var a = n || r ? e.apply(s, n && r ? n.concat(Array.slice(arguments)) : n || arguments) : e.call(s);
                    return s == t ? a : s
                };
            return o
        },
        pass: function (t, e) {
            var n = this;
            return null != t && (t = Array.from(t)),
                function () {
                    return n.apply(e, t || arguments)
                }
        },
        delay: function (t, e, n) {
            return setTimeout(this.pass(null == n ? [] : n, e), t)
        },
        periodical: function (t, e, n) {
            return setInterval(this.pass(null == n ? [] : n, e), t)
        }
    }),
    function () {
        var t = Object.prototype.hasOwnProperty;
        Object.extend({
            subset: function (t, e) {
                for (var n = {}, i = 0, o = e.length; i < o; i++) {
                    var s = e[i];
                    s in t && (n[s] = t[s])
                }
                return n
            },
            map: function (e, n, i) {
                var o = {};
                for (var s in e) t.call(e, s) && (o[s] = n.call(i, e[s], s, e));
                return o
            },
            filter: function (e, n, i) {
                var o = {};
                for (var s in e) {
                    var r = e[s];
                    t.call(e, s) && n.call(i, r, s, e) && (o[s] = r)
                }
                return o
            },
            every: function (e, n, i) {
                for (var o in e)
                    if (t.call(e, o) && !n.call(i, e[o], o)) return !1;
                return !0
            },
            some: function (e, n, i) {
                for (var o in e)
                    if (t.call(e, o) && n.call(i, e[o], o)) return !0;
                return !1
            },
            keys: function (e) {
                var n = [];
                for (var i in e) t.call(e, i) && n.push(i);
                return n
            },
            values: function (e) {
                var n = [];
                for (var i in e) t.call(e, i) && n.push(e[i]);
                return n
            },
            getLength: function (t) {
                return Object.keys(t).length
            },
            keyOf: function (e, n) {
                for (var i in e)
                    if (t.call(e, i) && e[i] === n) return i;
                return null
            },
            contains: function (t, e) {
                return null != Object.keyOf(t, e)
            },
            toQueryString: function (t, e) {
                var n = [];
                return Object.each(t, function (t, i) {
                    var o;
                    switch (e && (i = e + "[" + i + "]"), typeOf(t)) {
                        case "object":
                            o = Object.toQueryString(t, i);
                            break;
                        case "array":
                            var s = {};
                            t.each(function (t, e) {
                                s[e] = t
                            }), o = Object.toQueryString(s, i);
                            break;
                        default:
                            o = i + "=" + encodeURIComponent(t)
                    }
                    null != t && n.push(o)
                }), n.join("&")
            }
        })
    }(),
    function () {
        var t, e, n, i = this.document,
            o = i.window = this,
            s = navigator.userAgent.toLowerCase(),
            r = navigator.platform.toLowerCase(),
            a = s.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0],
            l = "ie" == a[1] && i.documentMode,
            c = this.Browser = {
                extend: Function.prototype.extend,
                name: "version" == a[1] ? a[3] : a[1],
                version: l || parseFloat("opera" == a[1] && a[4] ? a[4] : a[2]),
                Platform: {
                    name: s.match(/ip(?:ad|od|hone)/) ? "ios" : (s.match(/(?:webos|android)/) || r.match(/mac|win|linux/) || ["other"])[0]
                },
                Features: {
                    xpath: !!i.evaluate,
                    air: !!o.runtime,
                    query: !!i.querySelector,
                    json: !!o.JSON
                },
                Plugins: {}
            };
        c[c.name] = !0, c[c.name + parseInt(c.version, 10)] = !0, c.Platform[c.Platform.name] = !0, c.Request = (t = function () {
            return new XMLHttpRequest
        }, e = function () {
            return new ActiveXObject("MSXML2.XMLHTTP")
        }, n = function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }, Function.attempt(function () {
            return t(), t
        }, function () {
            return e(), e
        }, function () {
            return n(), n
        })), c.Features.xhr = !!c.Request;
        var u = (Function.attempt(function () {
            return navigator.plugins["Shockwave Flash"].description
        }, function () {
            return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
        }) || "0 r0").match(/\d+/g);
        if (c.Plugins.Flash = {
                version: Number(u[0] || "0." + u[1]) || 0,
                build: Number(u[2]) || 0
            }, c.exec = function (t) {
                if (!t) return t;
                if (o.execScript) o.execScript(t);
                else {
                    var e = i.createElement("script");
                    e.setAttribute("type", "text/javascript"), e.text = t, i.head.appendChild(e), i.head.removeChild(e)
                }
                return t
            }, String.implement("stripScripts", function (t) {
                var e = "",
                    n = this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function (t, n) {
                        return e += n + "\n", ""
                    });
                return !0 === t ? c.exec(e) : "function" == typeOf(t) && t(e, n), n
            }), c.extend({
                Document: this.Document,
                Window: this.Window,
                Element: this.Element,
                Event: this.Event
            }), this.Window = this.$constructor = new Type("Window", function () {}), this.$family = Function.from("window").hide(), Window.mirror(function (t, e) {
                o[t] = e
            }), this.Document = i.$constructor = new Type("Document", function () {}), i.$family = Function.from("document").hide(), Document.mirror(function (t, e) {
                i[t] = e
            }), i.html = i.documentElement, i.head || (i.head = i.getElementsByTagName("head")[0]), i.execCommand) try {
            i.execCommand("BackgroundImageCache", !1, !0)
        } catch (t) {}
        if (this.attachEvent && !this.addEventListener) {
            var d = function () {
                this.detachEvent("onunload", d), i.head = i.html = i.window = null
            };
            this.attachEvent("onunload", d)
        }
        var p = Array.from;
        try {
            p(i.html.childNodes)
        } catch (t) {
            Array.from = function (t) {
                if ("string" != typeof t && Type.isEnumerable(t) && "array" != typeOf(t)) {
                    for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
                    return n
                }
                return p(t)
            };
            var f = Array.prototype,
                h = f.slice;
            ["pop", "push", "reverse", "shift", "sort", "splice", "unshift", "concat", "join", "slice"].each(function (t) {
                var e = f[t];
                Array[t] = function (t) {
                    return e.apply(Array.from(t), h.call(arguments, 1))
                }
            })
        }
    }(),
    function () {
        var t = {},
            e = this.DOMEvent = new Type("DOMEvent", function (e, n) {
                if (n || (n = window), (e = e || n.event).$extended) return e;
                this.event = e, this.$extended = !0, this.shift = e.shiftKey, this.control = e.ctrlKey, this.alt = e.altKey, this.meta = e.metaKey;
                for (var i = this.type = e.type, o = e.target || e.srcElement; o && 3 == o.nodeType;) o = o.parentNode;
                if (this.target = document.id(o), 0 == i.indexOf("key")) {
                    var s = this.code = e.which || e.keyCode;
                    this.key = t[s], "keydown" == i && (s > 111 && s < 124 ? this.key = "f" + (s - 111) : s > 95 && s < 106 && (this.key = s - 96)), null == this.key && (this.key = String.fromCharCode(s).toLowerCase())
                } else if ("click" == i || "dblclick" == i || "contextmenu" == i || "DOMMouseScroll" == i || 0 == i.indexOf("mouse")) {
                    var r = n.document;
                    if (r = r.compatMode && "CSS1Compat" != r.compatMode ? r.body : r.html, this.page = {
                            x: null != e.pageX ? e.pageX : e.clientX + r.scrollLeft,
                            y: null != e.pageY ? e.pageY : e.clientY + r.scrollTop
                        }, this.client = {
                            x: null != e.pageX ? e.pageX - n.pageXOffset : e.clientX,
                            y: null != e.pageY ? e.pageY - n.pageYOffset : e.clientY
                        }, "DOMMouseScroll" != i && "mousewheel" != i || (this.wheel = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3), this.rightClick = 3 == e.which || 2 == e.button, "mouseover" == i || "mouseout" == i) {
                        for (var a = e.relatedTarget || e[("mouseover" == i ? "from" : "to") + "Element"]; a && 3 == a.nodeType;) a = a.parentNode;
                        this.relatedTarget = document.id(a)
                    }
                } else if (0 == i.indexOf("touch") || 0 == i.indexOf("gesture")) {
                    this.rotation = e.rotation, this.scale = e.scale, this.targetTouches = e.targetTouches, this.changedTouches = e.changedTouches;
                    var l = this.touches = e.touches;
                    if (l && l[0]) {
                        var c = l[0];
                        this.page = {
                            x: c.pageX,
                            y: c.pageY
                        }, this.client = {
                            x: c.clientX,
                            y: c.clientY
                        }
                    }
                }
                this.client || (this.client = {}), this.page || (this.page = {})
            });
        e.implement({
            stop: function () {
                return this.preventDefault().stopPropagation()
            },
            stopPropagation: function () {
                return this.event.stopPropagation ? this.event.stopPropagation() : this.event.cancelBubble = !0, this
            },
            preventDefault: function () {
                return this.event.preventDefault ? this.event.preventDefault() : this.event.returnValue = !1, this
            }
        }), e.defineKey = function (e, n) {
            return t[e] = n, this
        }, e.defineKeys = e.defineKey.overloadSetter(!0), e.defineKeys({
            38: "up",
            40: "down",
            37: "left",
            39: "right",
            27: "esc",
            32: "space",
            8: "backspace",
            9: "tab",
            46: "delete",
            13: "enter"
        })
    }(),
    function () {
        var t = this.Class = new Type("Class", function (i) {
                instanceOf(i, Function) && (i = {
                    initialize: i
                });
                var o = function () {
                    if (n(this), o.$prototyping) return this;
                    this.$caller = null;
                    var t = this.initialize ? this.initialize.apply(this, arguments) : this;
                    return this.$caller = this.caller = null, t
                }.extend(this).implement(i);
                return o.$constructor = t, o.prototype.$constructor = o, o.prototype.parent = e, o
            }),
            e = function () {
                if (!this.$caller) throw new Error('The method "parent" cannot be called.');
                var t = this.$caller.$name,
                    e = this.$caller.$owner.parent,
                    n = e ? e.prototype[t] : null;
                if (!n) throw new Error('The method "' + t + '" has no parent.');
                return n.apply(this, arguments)
            },
            n = function (t) {
                for (var e in t) {
                    var i = t[e];
                    switch (typeOf(i)) {
                        case "object":
                            var o = function () {};
                            o.prototype = i, t[e] = n(new o);
                            break;
                        case "array":
                            t[e] = i.clone()
                    }
                }
                return t
            },
            i = function (e, n, i) {
                if (t.Mutators.hasOwnProperty(e) && null == (n = t.Mutators[e].call(this, n))) return this;
                if ("function" == typeOf(n)) {
                    if (n.$hidden) return this;
                    this.prototype[e] = i ? n : function (t, e, n) {
                        n.$origin && (n = n.$origin);
                        var i = function () {
                            if (n.$protected && null == this.$caller) throw new Error('The method "' + e + '" cannot be called.');
                            var t = this.caller,
                                o = this.$caller;
                            this.caller = o, this.$caller = i;
                            var s = n.apply(this, arguments);
                            return this.$caller = o, this.caller = t, s
                        }.extend({
                            $owner: t,
                            $origin: n,
                            $name: e
                        });
                        return i
                    }(this, e, n)
                } else Object.merge(this.prototype, e, n);
                return this
            };
        t.implement("implement", i.overloadSetter()), t.Mutators = {
            Extends: function (t) {
                this.parent = t, this.prototype = function (t) {
                    t.$prototyping = !0;
                    var e = new t;
                    return delete t.$prototyping, e
                }(t)
            },
            Implements: function (t) {
                Array.from(t).each(function (t) {
                    var e = new t;
                    for (var n in e) i.call(this, n, e[n], !0)
                }, this)
            }
        }
    }(),
    function () {
        this.Chain = new Class({
            $chain: [],
            chain: function () {
                return this.$chain.append(Array.flatten(arguments)), this
            },
            callChain: function () {
                return !!this.$chain.length && this.$chain.shift().apply(this, arguments)
            },
            clearChain: function () {
                return this.$chain.empty(), this
            }
        });
        var t = function (t) {
            return t.replace(/^on([A-Z])/, function (t, e) {
                return e.toLowerCase()
            })
        };
        this.Events = new Class({
            $events: {},
            addEvent: function (e, n, i) {
                return e = t(e), this.$events[e] = (this.$events[e] || []).include(n), i && (n.internal = !0), this
            },
            addEvents: function (t) {
                for (var e in t) this.addEvent(e, t[e]);
                return this
            },
            fireEvent: function (e, n, i) {
                e = t(e);
                var o = this.$events[e];
                return o ? (n = Array.from(n), o.each(function (t) {
                    i ? t.delay(i, this, n) : t.apply(this, n)
                }, this), this) : this
            },
            removeEvent: function (e, n) {
                e = t(e);
                var i = this.$events[e];
                if (i && !n.internal) {
                    var o = i.indexOf(n); - 1 != o && delete i[o]
                }
                return this
            },
            removeEvents: function (e) {
                var n;
                if ("object" == typeOf(e)) {
                    for (n in e) this.removeEvent(n, e[n]);
                    return this
                }
                for (n in e && (e = t(e)), this.$events)
                    if (!e || e == n)
                        for (var i = this.$events[n], o = i.length; o--;) o in i && this.removeEvent(n, i[o]);
                return this
            }
        }), this.Options = new Class({
            setOptions: function () {
                var t = this.options = Object.merge.apply(null, [{}, this.options].append(arguments));
                if (this.addEvent)
                    for (var e in t) "function" == typeOf(t[e]) && /^on[A-Z]/.test(e) && (this.addEvent(e, t[e]), delete t[e]);
                return this
            }
        })
    }(),
    function () {
        var t, e, n, i, o = {},
            s = {},
            r = /\\/g,
            a = function (n, r) {
                if (null == n) return null;
                if (!0 === n.Slick) return n;
                n = ("" + n).replace(/^\s+|\s+$/g, "");
                var l = (i = !!r) ? s : o;
                if (l[n]) return l[n];
                for (t = {
                        Slick: !0,
                        expressions: [],
                        raw: n,
                        reverse: function () {
                            return a(this.raw, !0)
                        }
                    }, e = -1; n != (n = n.replace(d, p)););
                return t.length = t.expressions.length, l[t.raw] = i ? c(t) : t
            },
            l = function (t) {
                return "!" === t ? " " : " " === t ? "!" : /^!/.test(t) ? t.replace(/^!/, "") : "!" + t
            },
            c = function (t) {
                for (var e = t.expressions, n = 0; n < e.length; n++) {
                    for (var i = e[n], o = {
                            parts: [],
                            tag: "*",
                            combinator: l(i[0].combinator)
                        }, s = 0; s < i.length; s++) {
                        var r = i[s];
                        r.reverseCombinator || (r.reverseCombinator = " "), r.combinator = r.reverseCombinator, delete r.reverseCombinator
                    }
                    i.reverse().push(o)
                }
                return t
            },
            u = function (t) {
                return t.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, function (t) {
                    return "\\" + t
                })
            },
            d = new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/, "[" + u(">+~`!@$%^&={}\\;</") + "]").replace(/<unicode>/g, "(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g, "(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])"));

        function p(o, s, a, c, d, p, f, h, m, g, v, y, b, w, x, C) {
            if ((s || -1 === e) && (t.expressions[++e] = [], n = -1, s)) return "";
            if (a || c || -1 === n) {
                a = a || " ";
                var S = t.expressions[e];
                i && S[n] && (S[n].reverseCombinator = l(a)), S[++n] = {
                    combinator: a,
                    tag: "*"
                }
            }
            var E = t.expressions[e][n];
            if (d) E.tag = d.replace(r, "");
            else if (p) E.id = p.replace(r, "");
            else if (f) f = f.replace(r, ""), E.classList || (E.classList = []), E.classes || (E.classes = []), E.classList.push(f), E.classes.push({
                value: f,
                regexp: new RegExp("(^|\\s)" + u(f) + "(\\s|$)")
            });
            else if (b) C = (C = C || x) ? C.replace(r, "") : null, E.pseudos || (E.pseudos = []), E.pseudos.push({
                key: b.replace(r, ""),
                value: C,
                type: 1 == y.length ? "class" : "element"
            });
            else if (h) {
                var T, k;
                switch (h = h.replace(r, ""), v = (v || "").replace(r, ""), m) {
                    case "^=":
                        k = new RegExp("^" + u(v));
                        break;
                    case "$=":
                        k = new RegExp(u(v) + "$");
                        break;
                    case "~=":
                        k = new RegExp("(^|\\s)" + u(v) + "(\\s|$)");
                        break;
                    case "|=":
                        k = new RegExp("^" + u(v) + "(-|$)");
                        break;
                    case "=":
                        T = function (t) {
                            return v == t
                        };
                        break;
                    case "*=":
                        T = function (t) {
                            return t && t.indexOf(v) > -1
                        };
                        break;
                    case "!=":
                        T = function (t) {
                            return v != t
                        };
                        break;
                    default:
                        T = function (t) {
                            return !!t
                        }
                }
                "" == v && /^[*$^]=$/.test(m) && (T = function () {
                    return !1
                }), T || (T = function (t) {
                    return t && k.test(t)
                }), E.attributes || (E.attributes = []), E.attributes.push({
                    key: h,
                    operator: m,
                    value: v,
                    test: T
                })
            }
            return ""
        }
        var f = this.Slick || {};
        f.parse = function (t) {
            return a(t)
        }, f.escapeRegExp = u, this.Slick || (this.Slick = f)
    }.apply("undefined" != typeof exports ? exports : this),
    function () {
        var t = {},
            e = {},
            n = Object.prototype.toString;
        t.isNativeCode = function (t) {
            return /\{\s*\[native code\]\s*\}/.test("" + t)
        }, t.isXML = function (t) {
            return !!t.xmlVersion || !!t.xml || "[object XMLDocument]" == n.call(t) || 9 == t.nodeType && "HTML" != t.documentElement.nodeName
        }, t.setDocument = function (t) {
            var n = t.nodeType;
            if (9 == n);
            else if (n) t = t.ownerDocument;
            else {
                if (!t.navigator) return;
                t = t.document
            }
            if (this.document !== t) {
                this.document = t;
                var i, o = t.documentElement,
                    s = this.getUIDXML(o),
                    r = e[s];
                if (r)
                    for (i in r) this[i] = r[i];
                else {
                    var a, l, c, u, d;
                    (r = e[s] = {}).root = o, r.isXMLDocument = this.isXML(t), r.brokenStarGEBTN = r.starSelectsClosedQSA = r.idGetsName = r.brokenMixedCaseQSA = r.brokenGEBCN = r.brokenCheckedQSA = r.brokenEmptyAttributeQSA = r.isHTMLDocument = r.nativeMatchesSelector = !1;
                    var p, f = "slick_uniqueid",
                        h = t.createElement("div"),
                        m = t.body || t.getElementsByTagName("body")[0] || o;
                    m.appendChild(h);
                    try {
                        h.innerHTML = '<a id="' + f + '"></a>', r.isHTMLDocument = !!t.getElementById(f)
                    } catch (t) {}
                    if (r.isHTMLDocument) {
                        h.style.display = "none", h.appendChild(t.createComment("")), l = h.getElementsByTagName("*").length > 1;
                        try {
                            h.innerHTML = "foo</foo>", a = (p = h.getElementsByTagName("*")) && !!p.length && "/" == p[0].nodeName.charAt(0)
                        } catch (t) {}
                        r.brokenStarGEBTN = l || a;
                        try {
                            h.innerHTML = '<a name="' + f + '"></a><b id="' + f + '"></b>', r.idGetsName = t.getElementById(f) === h.firstChild
                        } catch (t) {}
                        if (h.getElementsByClassName) {
                            try {
                                h.innerHTML = '<a class="f"></a><a class="b"></a>', h.getElementsByClassName("b").length, h.firstChild.className = "b", u = 2 != h.getElementsByClassName("b").length
                            } catch (t) {}
                            try {
                                h.innerHTML = '<a class="a"></a><a class="f b a"></a>', c = 2 != h.getElementsByClassName("a").length
                            } catch (t) {}
                            r.brokenGEBCN = u || c
                        }
                        if (h.querySelectorAll) {
                            try {
                                h.innerHTML = "foo</foo>", p = h.querySelectorAll("*"), r.starSelectsClosedQSA = p && !!p.length && "/" == p[0].nodeName.charAt(0)
                            } catch (t) {}
                            try {
                                h.innerHTML = '<a class="MiX"></a>', r.brokenMixedCaseQSA = !h.querySelectorAll(".MiX").length
                            } catch (t) {}
                            try {
                                h.innerHTML = '<select><option selected="selected">a</option></select>', r.brokenCheckedQSA = 0 == h.querySelectorAll(":checked").length
                            } catch (t) {}
                            try {
                                h.innerHTML = '<a class=""></a>', r.brokenEmptyAttributeQSA = 0 != h.querySelectorAll('[class*=""]').length
                            } catch (t) {}
                        }
                        try {
                            h.innerHTML = '<form action="s"><input id="action"/></form>', d = "s" != h.firstChild.getAttribute("action")
                        } catch (t) {}
                        if (r.nativeMatchesSelector = o.matchesSelector || o.mozMatchesSelector || o.webkitMatchesSelector, r.nativeMatchesSelector) try {
                            r.nativeMatchesSelector.call(o, ":slick"), r.nativeMatchesSelector = null
                        } catch (t) {}
                    }
                    try {
                        o.slick_expando = 1, delete o.slick_expando, r.getUID = this.getUIDHTML
                    } catch (t) {
                        r.getUID = this.getUIDXML
                    }
                    m.removeChild(h), h = p = m = null, r.getAttribute = r.isHTMLDocument && d ? function (t, e) {
                        var n = this.attributeGetters[e];
                        if (n) return n.call(t);
                        var i = t.getAttributeNode(e);
                        return i ? i.nodeValue : null
                    } : function (t, e) {
                        var n = this.attributeGetters[e];
                        return n ? n.call(t) : t.getAttribute(e)
                    }, r.hasAttribute = o && this.isNativeCode(o.hasAttribute) ? function (t, e) {
                        return t.hasAttribute(e)
                    } : function (t, e) {
                        return !(!(t = t.getAttributeNode(e)) || !t.specified && !t.nodeValue)
                    };
                    var g = o && this.isNativeCode(o.contains),
                        v = t && this.isNativeCode(t.contains);
                    for (i in r.contains = g && v ? function (t, e) {
                            return t.contains(e)
                        } : g && !v ? function (e, n) {
                            return e === n || (e === t ? t.documentElement : e).contains(n)
                        } : o && o.compareDocumentPosition ? function (t, e) {
                            return t === e || !!(16 & t.compareDocumentPosition(e))
                        } : function (t, e) {
                            if (e)
                                do {
                                    if (e === t) return !0
                                } while (e = e.parentNode);
                            return !1
                        }, r.documentSorter = o.compareDocumentPosition ? function (t, e) {
                            return t.compareDocumentPosition && e.compareDocumentPosition ? 4 & t.compareDocumentPosition(e) ? -1 : t === e ? 0 : 1 : 0
                        } : "sourceIndex" in o ? function (t, e) {
                            return t.sourceIndex && e.sourceIndex ? t.sourceIndex - e.sourceIndex : 0
                        } : t.createRange ? function (t, e) {
                            if (!t.ownerDocument || !e.ownerDocument) return 0;
                            var n = t.ownerDocument.createRange(),
                                i = e.ownerDocument.createRange();
                            return n.setStart(t, 0), n.setEnd(t, 0), i.setStart(e, 0), i.setEnd(e, 0), n.compareBoundaryPoints(Range.START_TO_END, i)
                        } : null, o = null, r) this[i] = r[i]
                }
            }
        };
        var i = /^([#.]?)((?:[\w-]+|\*))$/,
            o = /\[.+[*$^]=(?:""|'')?\]/,
            s = {};
        t.search = function (t, e, n, r) {
            var a = this.found = r ? null : n || [];
            if (!t) return a;
            if (t.navigator) t = t.document;
            else if (!t.nodeType) return a;
            var l, c, u, p, f, h, m, g, v, y, b, w, x = this.uniques = {},
                C = !(!n || !n.length),
                S = 9 == t.nodeType;
            if (this.document !== (S ? t : t.ownerDocument) && this.setDocument(t), C)
                for (c = a.length; c--;) x[this.getUID(a[c])] = !0;
            if ("string" == typeof e) {
                var E = e.match(i);
                t: if (E) {
                    var T, k, P = E[1],
                        _ = E[2];
                    if (P) {
                        if ("#" == P) {
                            if (!this.isHTMLDocument || !S) break t;
                            if (!(T = t.getElementById(_))) return a;
                            if (this.idGetsName && T.getAttributeNode("id").nodeValue != _) break t;
                            if (r) return T || null;
                            C && x[this.getUID(T)] || a.push(T)
                        } else if ("." == P) {
                            if (!this.isHTMLDocument || (!t.getElementsByClassName || this.brokenGEBCN) && t.querySelectorAll) break t;
                            if (t.getElementsByClassName && !this.brokenGEBCN) {
                                if (k = t.getElementsByClassName(_), r) return k[0] || null;
                                for (c = 0; T = k[c++];) C && x[this.getUID(T)] || a.push(T)
                            } else {
                                var A = new RegExp("(^|\\s)" + d.escapeRegExp(_) + "(\\s|$)");
                                for (k = t.getElementsByTagName("*"), c = 0; T = k[c++];)
                                    if (className = T.className, className && A.test(className)) {
                                        if (r) return T;
                                        C && x[this.getUID(T)] || a.push(T)
                                    }
                            }
                        }
                    } else {
                        if ("*" == _ && this.brokenStarGEBTN) break t;
                        if (k = t.getElementsByTagName(_), r) return k[0] || null;
                        for (c = 0; T = k[c++];) C && x[this.getUID(T)] || a.push(T)
                    }
                    return C && this.sort(a), r ? null : a
                }
                t: if (t.querySelectorAll) {
                    if (!this.isHTMLDocument || s[e] || this.brokenMixedCaseQSA || this.brokenCheckedQSA && e.indexOf(":checked") > -1 || this.brokenEmptyAttributeQSA && o.test(e) || !S && e.indexOf(",") > -1 || d.disableQSA) break t;
                    var $ = e,
                        M = t;
                    if (!S) {
                        var H = M.getAttribute("id"),
                            L = "slickid__";
                        M.setAttribute("id", L), $ = "#" + L + " " + $, t = M.parentNode
                    }
                    try {
                        if (r) return t.querySelector($) || null;
                        k = t.querySelectorAll($)
                    } catch (t) {
                        s[e] = 1;
                        break t
                    } finally {
                        S || (H ? M.setAttribute("id", H) : M.removeAttribute("id"), t = M)
                    }
                    if (this.starSelectsClosedQSA)
                        for (c = 0; T = k[c++];) !(T.nodeName > "@") || C && x[this.getUID(T)] || a.push(T);
                    else
                        for (c = 0; T = k[c++];) C && x[this.getUID(T)] || a.push(T);
                    return C && this.sort(a), a
                }
                if (!(l = this.Slick.parse(e)).length) return a
            } else {
                if (null == e) return a;
                if (!e.Slick) return this.contains(t.documentElement || t, e) ? (a ? a.push(e) : a = e, a) : a;
                l = e
            }
            this.posNTH = {}, this.posNTHLast = {}, this.posNTHType = {}, this.posNTHTypeLast = {}, this.push = !C && (r || 1 == l.length && 1 == l.expressions[0].length) ? this.pushArray : this.pushUID, null == a && (a = []);
            var D, O, I, N, z = l.expressions;
            t: for (c = 0; O = z[c]; c++)
                for (u = 0; I = O[u]; u++) {
                    if (!this[h = "combinator:" + I.combinator]) continue t;
                    if (m = this.isXMLDocument ? I.tag : I.tag.toUpperCase(), g = I.id, v = I.classList, y = I.classes, b = I.attributes, w = I.pseudos, N = u === O.length - 1, this.bitUniques = {}, N ? (this.uniques = x, this.found = a) : (this.uniques = {}, this.found = []), 0 === u) {
                        if (this[h](t, m, g, y, b, w, v), r && N && a.length) break t
                    } else if (r && N) {
                        for (p = 0, f = D.length; p < f; p++)
                            if (this[h](D[p], m, g, y, b, w, v), a.length) break t
                    } else
                        for (p = 0, f = D.length; p < f; p++) this[h](D[p], m, g, y, b, w, v);
                    D = this.found
                }
            return (C || l.expressions.length > 1) && this.sort(a), r ? a[0] || null : a
        }, t.uidx = 1, t.uidk = "slick-uniqueid", t.getUIDXML = function (t) {
            var e = t.getAttribute(this.uidk);
            return e || (e = this.uidx++, t.setAttribute(this.uidk, e)), e
        }, t.getUIDHTML = function (t) {
            return t.uniqueNumber || (t.uniqueNumber = this.uidx++)
        }, t.sort = function (t) {
            return this.documentSorter ? (t.sort(this.documentSorter), t) : t
        }, t.cacheNTH = {}, t.matchNTH = /^([+-]?\d*)?([a-z]+)?([+-]\d+)?$/, t.parseNTHArgument = function (t) {
            var e = t.match(this.matchNTH);
            if (!e) return !1;
            var n = e[2] || !1,
                i = e[1] || 1;
            "-" == i && (i = -1);
            var o = +e[3] || 0;
            return e = "n" == n ? {
                a: i,
                b: o
            } : "odd" == n ? {
                a: 2,
                b: 1
            } : "even" == n ? {
                a: 2,
                b: 0
            } : {
                a: 0,
                b: i
            }, this.cacheNTH[t] = e
        }, t.createNTHPseudo = function (t, e, n, i) {
            return function (o, s) {
                var r = this.getUID(o);
                if (!this[n][r]) {
                    var a = o.parentNode;
                    if (!a) return !1;
                    var l = a[t],
                        c = 1;
                    if (i)
                        for (var u = o.nodeName; l.nodeName == u && (this[n][this.getUID(l)] = c++), l = l[e];);
                    else
                        for (; 1 == l.nodeType && (this[n][this.getUID(l)] = c++), l = l[e];);
                }
                s = s || "n";
                var d = this.cacheNTH[s] || this.parseNTHArgument(s);
                if (!d) return !1;
                var p = d.a,
                    f = d.b,
                    h = this[n][r];
                if (0 == p) return f == h;
                if (p > 0) {
                    if (h < f) return !1
                } else if (f < h) return !1;
                return (h - f) % p == 0
            }
        }, t.pushArray = function (t, e, n, i, o, s) {
            this.matchSelector(t, e, n, i, o, s) && this.found.push(t)
        }, t.pushUID = function (t, e, n, i, o, s) {
            var r = this.getUID(t);
            !this.uniques[r] && this.matchSelector(t, e, n, i, o, s) && (this.uniques[r] = !0, this.found.push(t))
        }, t.matchNode = function (t, e) {
            if (this.isHTMLDocument && this.nativeMatchesSelector) try {
                return this.nativeMatchesSelector.call(t, e.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g, '[$1="$2"]'))
            } catch (t) {}
            var n = this.Slick.parse(e);
            if (!n) return !0;
            var i, o = n.expressions,
                s = 0;
            for (i = 0; currentExpression = o[i]; i++)
                if (1 == currentExpression.length) {
                    var r = currentExpression[0];
                    if (this.matchSelector(t, this.isXMLDocument ? r.tag : r.tag.toUpperCase(), r.id, r.classes, r.attributes, r.pseudos)) return !0;
                    s++
                }
            if (s == n.length) return !1;
            var a, l = this.search(this.document, n);
            for (i = 0; a = l[i++];)
                if (a === t) return !0;
            return !1
        }, t.matchPseudo = function (t, e, n) {
            var i = "pseudo:" + e;
            if (this[i]) return this[i](t, n);
            var o = this.getAttribute(t, e);
            return n ? n == o : !!o
        }, t.matchSelector = function (t, e, n, i, o, s) {
            if (e) {
                var r = this.isXMLDocument ? t.nodeName : t.nodeName.toUpperCase();
                if ("*" == e) {
                    if (r < "@") return !1
                } else if (r != e) return !1
            }
            if (n && t.getAttribute("id") != n) return !1;
            var a, l, c;
            if (i)
                for (a = i.length; a--;)
                    if (!(c = this.getAttribute(t, "class")) || !i[a].regexp.test(c)) return !1;
            if (o)
                for (a = o.length; a--;)
                    if ((l = o[a]).operator ? !l.test(this.getAttribute(t, l.key)) : !this.hasAttribute(t, l.key)) return !1;
            if (s)
                for (a = s.length; a--;)
                    if (l = s[a], !this.matchPseudo(t, l.key, l.value)) return !1;
            return !0
        };
        var r = {
            " ": function (t, e, n, i, o, s, r) {
                var a, l, c;
                if (this.isHTMLDocument) {
                    t: if (n) {
                        if (!(l = this.document.getElementById(n)) && t.all || this.idGetsName && l && l.getAttributeNode("id").nodeValue != n) {
                            if (!(c = t.all[n])) return;
                            for (c[0] || (c = [c]), a = 0; l = c[a++];) {
                                var u = l.getAttributeNode("id");
                                if (u && u.nodeValue == n) {
                                    this.push(l, e, null, i, o, s);
                                    break
                                }
                            }
                            return
                        }
                        if (!l) {
                            if (this.contains(this.root, t)) return;
                            break t
                        }
                        if (this.document !== t && !this.contains(t, l)) return;
                        return void this.push(l, e, null, i, o, s)
                    }t: if (i && t.getElementsByClassName && !this.brokenGEBCN) {
                        if (!(c = t.getElementsByClassName(r.join(" "))) || !c.length) break t;
                        for (a = 0; l = c[a++];) this.push(l, e, n, null, o, s);
                        return
                    }
                }
                if ((c = t.getElementsByTagName(e)) && c.length)
                    for (this.brokenStarGEBTN || (e = null), a = 0; l = c[a++];) this.push(l, e, n, i, o, s)
            },
            ">": function (t, e, n, i, o, s) {
                if (t = t.firstChild)
                    for (; 1 == t.nodeType && this.push(t, e, n, i, o, s), t = t.nextSibling;);
            },
            "+": function (t, e, n, i, o, s) {
                for (; t = t.nextSibling;)
                    if (1 == t.nodeType) {
                        this.push(t, e, n, i, o, s);
                        break
                    }
            },
            "^": function (t, e, n, i, o, s) {
                (t = t.firstChild) && (1 == t.nodeType ? this.push(t, e, n, i, o, s) : this["combinator:+"](t, e, n, i, o, s))
            },
            "~": function (t, e, n, i, o, s) {
                for (; t = t.nextSibling;)
                    if (1 == t.nodeType) {
                        var r = this.getUID(t);
                        if (this.bitUniques[r]) break;
                        this.bitUniques[r] = !0, this.push(t, e, n, i, o, s)
                    }
            },
            "++": function (t, e, n, i, o, s) {
                this["combinator:+"](t, e, n, i, o, s), this["combinator:!+"](t, e, n, i, o, s)
            },
            "~~": function (t, e, n, i, o, s) {
                this["combinator:~"](t, e, n, i, o, s), this["combinator:!~"](t, e, n, i, o, s)
            },
            "!": function (t, e, n, i, o, s) {
                for (; t = t.parentNode;) t !== this.document && this.push(t, e, n, i, o, s)
            },
            "!>": function (t, e, n, i, o, s) {
                (t = t.parentNode) !== this.document && this.push(t, e, n, i, o, s)
            },
            "!+": function (t, e, n, i, o, s) {
                for (; t = t.previousSibling;)
                    if (1 == t.nodeType) {
                        this.push(t, e, n, i, o, s);
                        break
                    }
            },
            "!^": function (t, e, n, i, o, s) {
                (t = t.lastChild) && (1 == t.nodeType ? this.push(t, e, n, i, o, s) : this["combinator:!+"](t, e, n, i, o, s))
            },
            "!~": function (t, e, n, i, o, s) {
                for (; t = t.previousSibling;)
                    if (1 == t.nodeType) {
                        var r = this.getUID(t);
                        if (this.bitUniques[r]) break;
                        this.bitUniques[r] = !0, this.push(t, e, n, i, o, s)
                    }
            }
        };
        for (var a in r) t["combinator:" + a] = r[a];
        var l = {
            empty: function (t) {
                var e = t.firstChild;
                return !(e && 1 == e.nodeType || (t.innerText || t.textContent || "").length)
            },
            not: function (t, e) {
                return !this.matchNode(t, e)
            },
            contains: function (t, e) {
                return (t.innerText || t.textContent || "").indexOf(e) > -1
            },
            "first-child": function (t) {
                for (; t = t.previousSibling;)
                    if (1 == t.nodeType) return !1;
                return !0
            },
            "last-child": function (t) {
                for (; t = t.nextSibling;)
                    if (1 == t.nodeType) return !1;
                return !0
            },
            "only-child": function (t) {
                for (var e = t; e = e.previousSibling;)
                    if (1 == e.nodeType) return !1;
                for (var n = t; n = n.nextSibling;)
                    if (1 == n.nodeType) return !1;
                return !0
            },
            "nth-child": t.createNTHPseudo("firstChild", "nextSibling", "posNTH"),
            "nth-last-child": t.createNTHPseudo("lastChild", "previousSibling", "posNTHLast"),
            "nth-of-type": t.createNTHPseudo("firstChild", "nextSibling", "posNTHType", !0),
            "nth-last-of-type": t.createNTHPseudo("lastChild", "previousSibling", "posNTHTypeLast", !0),
            index: function (t, e) {
                return this["pseudo:nth-child"](t, "" + (e + 1))
            },
            even: function (t) {
                return this["pseudo:nth-child"](t, "2n")
            },
            odd: function (t) {
                return this["pseudo:nth-child"](t, "2n+1")
            },
            "first-of-type": function (t) {
                for (var e = t.nodeName; t = t.previousSibling;)
                    if (t.nodeName == e) return !1;
                return !0
            },
            "last-of-type": function (t) {
                for (var e = t.nodeName; t = t.nextSibling;)
                    if (t.nodeName == e) return !1;
                return !0
            },
            "only-of-type": function (t) {
                for (var e = t, n = t.nodeName; e = e.previousSibling;)
                    if (e.nodeName == n) return !1;
                for (var i = t; i = i.nextSibling;)
                    if (i.nodeName == n) return !1;
                return !0
            },
            enabled: function (t) {
                return !t.disabled
            },
            disabled: function (t) {
                return t.disabled
            },
            checked: function (t) {
                return t.checked || t.selected
            },
            focus: function (t) {
                return this.isHTMLDocument && this.document.activeElement === t && (t.href || t.type || this.hasAttribute(t, "tabindex"))
            },
            root: function (t) {
                return t === this.root
            },
            selected: function (t) {
                return t.selected
            }
        };
        for (var c in l) t["pseudo:" + c] = l[c];
        var u = t.attributeGetters = {
            for: function () {
                return "htmlFor" in this ? this.htmlFor : this.getAttribute("for")
            },
            href: function () {
                return "href" in this ? this.getAttribute("href", 2) : this.getAttribute("href")
            },
            style: function () {
                return this.style ? this.style.cssText : this.getAttribute("style")
            },
            tabindex: function () {
                var t = this.getAttributeNode("tabindex");
                return t && t.specified ? t.nodeValue : null
            },
            type: function () {
                return this.getAttribute("type")
            },
            maxlength: function () {
                var t = this.getAttributeNode("maxLength");
                return t && t.specified ? t.nodeValue : null
            }
        };
        u.MAXLENGTH = u.maxLength = u.maxlength;
        var d = t.Slick = this.Slick || {};
        d.version = "1.1.7", d.search = function (e, n, i) {
            return t.search(e, n, i)
        }, d.find = function (e, n) {
            return t.search(e, n, null, !0)
        }, d.contains = function (e, n) {
            return t.setDocument(e), t.contains(e, n)
        }, d.getAttribute = function (e, n) {
            return t.setDocument(e), t.getAttribute(e, n)
        }, d.hasAttribute = function (e, n) {
            return t.setDocument(e), t.hasAttribute(e, n)
        }, d.match = function (e, n) {
            return !(!e || !n) && (!n || n === e || (t.setDocument(e), t.matchNode(e, n)))
        }, d.defineAttributeGetter = function (e, n) {
            return t.attributeGetters[e] = n, this
        }, d.lookupAttributeGetter = function (e) {
            return t.attributeGetters[e]
        }, d.definePseudo = function (e, n) {
            return t["pseudo:" + e] = function (t, e) {
                return n.call(t, e)
            }, this
        }, d.lookupPseudo = function (e) {
            var n = t["pseudo:" + e];
            return n ? function (t) {
                return n.call(this, t)
            } : null
        }, d.override = function (e, n) {
            return t.override(e, n), this
        }, d.isXML = t.isXML, d.uidOf = function (e) {
            return t.getUIDHTML(e)
        }, this.Slick || (this.Slick = d)
    }.apply("undefined" != typeof exports ? exports : this);
var Element = function (t, e) {
    var n = Element.Constructors[t];
    if (n) return n(e);
    if ("string" != typeof t) return document.id(t).set(e);
    if (e || (e = {}), !/^[\w-]+$/.test(t)) {
        var i = Slick.parse(t).expressions[0][0];
        t = "*" == i.tag ? "div" : i.tag, i.id && null == e.id && (e.id = i.id);
        var o = i.attributes;
        if (o)
            for (var s, r = 0, a = o.length; r < a; r++) null == e[(s = o[r]).key] && (null != s.value && "=" == s.operator ? e[s.key] = s.value : s.value || s.operator || (e[s.key] = !0));
        i.classList && null == e.class && (e.class = i.classList.join(" "))
    }
    return document.newElement(t, e)
};
Browser.Element && (Element.prototype = Browser.Element.prototype, Element.prototype._fireEvent = function (t) {
    return function (e, n) {
        return t.call(this, e, n)
    }
}(Element.prototype.fireEvent)), new Type("Element", Element).mirror(function (t) {
    if (!Array.prototype[t]) {
        var e = {};
        e[t] = function () {
            for (var e = [], n = arguments, i = !0, o = 0, s = this.length; o < s; o++) {
                var r = this[o],
                    a = e[o] = r[t].apply(r, n);
                i = i && "element" == typeOf(a)
            }
            return i ? new Elements(e) : e
        }, Elements.implement(e)
    }
}), Browser.Element || (Element.parent = Object, Element.Prototype = {
    $constructor: Element,
    $family: Function.from("element").hide()
}, Element.mirror(function (t, e) {
    Element.Prototype[t] = e
})), Element.Constructors = {};
var IFrame = new Type("IFrame", function () {
        var t, e = Array.link(arguments, {
                properties: Type.isObject,
                iframe: function (t) {
                    return null != t
                }
            }),
            n = e.properties || {};
        e.iframe && (t = document.id(e.iframe));
        var i = n.onload || function () {};
        delete n.onload, n.id = n.name = [n.id, n.name, t ? t.id || t.name : "IFrame_" + String.uniqueID()].pick(), t = new Element(t || "iframe", n);
        var o = function () {
            i.call(t.contentWindow)
        };
        return window.frames[n.id] ? o() : t.addListener("load", o), t
    }),
    Elements = this.Elements = function (t) {
        if (t && t.length)
            for (var e, n = {}, i = 0; e = t[i++];) {
                var o = Slick.uidOf(e);
                n[o] || (n[o] = !0, this.push(e))
            }
    };
Elements.prototype = {
        length: 0
    }, Elements.parent = Array, new Type("Elements", Elements).implement({
        filter: function (t, e) {
            return t ? new Elements(Array.filter(this, "string" == typeOf(t) ? function (e) {
                return e.match(t)
            } : t, e)) : this
        }.protect(),
        push: function () {
            for (var t = this.length, e = 0, n = arguments.length; e < n; e++) {
                var i = document.id(arguments[e]);
                i && (this[t++] = i)
            }
            return this.length = t
        }.protect(),
        unshift: function () {
            for (var t = [], e = 0, n = arguments.length; e < n; e++) {
                var i = document.id(arguments[e]);
                i && t.push(i)
            }
            return Array.prototype.unshift.apply(this, t)
        }.protect(),
        concat: function () {
            for (var t = new Elements(this), e = 0, n = arguments.length; e < n; e++) {
                var i = arguments[e];
                Type.isEnumerable(i) ? t.append(i) : t.push(i)
            }
            return t
        }.protect(),
        append: function (t) {
            for (var e = 0, n = t.length; e < n; e++) this.push(t[e]);
            return this
        }.protect(),
        empty: function () {
            for (; this.length;) delete this[--this.length];
            return this
        }.protect()
    }),
    function () {
        var t, e = Array.prototype.splice,
            n = {
                0: 0,
                1: 1,
                length: 2
            };
        e.call(n, 1, 1), 1 == n[1] && Elements.implement("splice", function () {
            for (var t = this.length, n = e.apply(this, arguments); t >= this.length;) delete this[t--];
            return n
        }.protect()), Array.forEachMethod(function (t, e) {
            Elements.implement(e, t)
        }), Array.mirror(Elements);
        try {
            t = "x" == document.createElement("<input name=x>").name
        } catch (t) {}
        var i = function (t) {
            return ("" + t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
        };
        Document.implement({
            newElement: function (e, n) {
                return n && null != n.checked && (n.defaultChecked = n.checked), t && n && (e = "<" + e, n.name && (e += ' name="' + i(n.name) + '"'), n.type && (e += ' type="' + i(n.type) + '"'), e += ">", delete n.name, delete n.type), this.id(this.createElement(e)).set(n)
            }
        })
    }(),
    function () {
        var t;
        Slick.uidOf(window), Slick.uidOf(document), Document.implement({
            newTextNode: function (t) {
                return this.createTextNode(t)
            },
            getDocument: function () {
                return this
            },
            getWindow: function () {
                return this.window
            },
            id: (t = {
                string: function (e, n, i) {
                    return (e = Slick.find(i, "#" + e.replace(/(\W)/g, "\\$1"))) ? t.element(e, n) : null
                },
                element: function (t, e) {
                    if (Slick.uidOf(t), !e && !t.$family && !/^(?:object|embed)$/i.test(t.tagName)) {
                        var n = t.fireEvent;
                        t._fireEvent = function (t, e) {
                            return n(t, e)
                        }, Object.append(t, Element.Prototype)
                    }
                    return t
                },
                object: function (e, n, i) {
                    return e.toElement ? t.element(e.toElement(i), n) : null
                }
            }, t.textnode = t.whitespace = t.window = t.document = function (t) {
                return t
            }, function (e, n, i) {
                if (e && e.$family && e.uniqueNumber) return e;
                var o = typeOf(e);
                return t[o] ? t[o](e, n, i || document) : null
            })
        }), null == window.$ && Window.implement("$", function (t, e) {
            return document.id(t, e, this.document)
        }), Window.implement({
            getDocument: function () {
                return this.document
            },
            getWindow: function () {
                return this
            }
        }), [Document, Element].invoke("implement", {
            getElements: function (t) {
                return Slick.search(this, t, new Elements)
            },
            getElement: function (t) {
                return document.id(Slick.find(this, t))
            }
        });
        var e = {
            contains: function (t) {
                return Slick.contains(this, t)
            }
        };
        document.contains || Document.implement(e), document.createElement("div").contains || Element.implement(e);
        var n = function (t, e) {
            if (!t) return e;
            for (var n = (t = Object.clone(Slick.parse(t))).expressions, i = n.length; i--;) n[i][0].combinator = e;
            return t
        };
        Object.forEach({
            getNext: "~",
            getPrevious: "!~",
            getParent: "!"
        }, function (t, e) {
            Element.implement(e, function (e) {
                return this.getElement(n(e, t))
            })
        }), Object.forEach({
            getAllNext: "~",
            getAllPrevious: "!~",
            getSiblings: "~~",
            getChildren: ">",
            getParents: "!"
        }, function (t, e) {
            Element.implement(e, function (e) {
                return this.getElements(n(e, t))
            })
        }), Element.implement({
            getFirst: function (t) {
                return document.id(Slick.search(this, n(t, ">"))[0])
            },
            getLast: function (t) {
                return document.id(Slick.search(this, n(t, ">")).getLast())
            },
            getWindow: function () {
                return this.ownerDocument.window
            },
            getDocument: function () {
                return this.ownerDocument
            },
            getElementById: function (t) {
                return document.id(Slick.find(this, "#" + ("" + t).replace(/(\W)/g, "\\$1")))
            },
            match: function (t) {
                return !t || Slick.match(this, t)
            }
        }), null == window.$$ && Window.implement("$$", function (t) {
            if (1 == arguments.length) {
                if ("string" == typeof t) return Slick.search(this.document, t, new Elements);
                if (Type.isEnumerable(t)) return new Elements(t)
            }
            return new Elements(arguments)
        });
        var i = {
            before: function (t, e) {
                var n = e.parentNode;
                n && n.insertBefore(t, e)
            },
            after: function (t, e) {
                var n = e.parentNode;
                n && n.insertBefore(t, e.nextSibling)
            },
            bottom: function (t, e) {
                e.appendChild(t)
            },
            top: function (t, e) {
                e.insertBefore(t, e.firstChild)
            }
        };
        i.inside = i.bottom;
        var o = {},
            s = {},
            r = {};
        Array.forEach(["type", "value", "defaultValue", "accessKey", "cellPadding", "cellSpacing", "colSpan", "frameBorder", "rowSpan", "tabIndex", "useMap"], function (t) {
            r[t.toLowerCase()] = t
        }), r.html = "innerHTML", r.text = null == document.createElement("div").textContent ? "innerText" : "textContent", Object.forEach(r, function (t, e) {
            s[e] = function (e, n) {
                e[t] = n
            }, o[e] = function (e) {
                return e[t]
            }
        });
        var a = {};
        Array.forEach(["compact", "nowrap", "ismap", "declare", "noshade", "checked", "disabled", "readOnly", "multiple", "selected", "noresize", "defer", "defaultChecked", "autofocus", "controls", "autoplay", "loop"], function (t) {
            var e = t.toLowerCase();
            a[e] = t, s[e] = function (e, n) {
                e[t] = !!n
            }, o[e] = function (e) {
                return !!e[t]
            }
        }), Object.append(s, {
            class: function (t, e) {
                "className" in t ? t.className = e || "" : t.setAttribute("class", e)
            },
            for: function (t, e) {
                "htmlFor" in t ? t.htmlFor = e : t.setAttribute("for", e)
            },
            style: function (t, e) {
                t.style ? t.style.cssText = e : t.setAttribute("style", e)
            },
            value: function (t, e) {
                t.value = null != e ? e : ""
            }
        }), o.class = function (t) {
            return "className" in t ? t.className || null : t.getAttribute("class")
        };
        var l = document.createElement("button");
        try {
            l.type = "button"
        } catch (t) {}
        "button" != l.type && (s.type = function (t, e) {
            t.setAttribute("type", e)
        }), l = null;
        var c = document.createElement("input");
        c.value = "t", c.type = "submit", "t" != c.value && (s.type = function (t, e) {
            var n = t.value;
            t.type = e, t.value = n
        }), c = null;
        var u, d = ((u = document.createElement("div")).random = "attribute", "attribute" == u.getAttribute("random"));
        Element.implement({
            setProperty: function (t, e) {
                var n = s[t.toLowerCase()];
                if (n) n(this, e);
                else {
                    if (d) var i = this.retrieve("$attributeWhiteList", {});
                    null == e ? (this.removeAttribute(t), d && delete i[t]) : (this.setAttribute(t, "" + e), d && (i[t] = !0))
                }
                return this
            },
            setProperties: function (t) {
                for (var e in t) this.setProperty(e, t[e]);
                return this
            },
            getProperty: function (t) {
                var e = o[t.toLowerCase()];
                if (e) return e(this);
                if (d) {
                    var n = this.getAttributeNode(t),
                        i = this.retrieve("$attributeWhiteList", {});
                    if (!n) return null;
                    if (n.expando && !i[t]) {
                        var s = this.outerHTML;
                        if (s.substr(0, s.search(/\/?['"]?>(?![^<]*<['"])/)).indexOf(t) < 0) return null;
                        i[t] = !0
                    }
                }
                var r = Slick.getAttribute(this, t);
                return r || Slick.hasAttribute(this, t) ? r : null
            },
            getProperties: function () {
                var t = Array.from(arguments);
                return t.map(this.getProperty, this).associate(t)
            },
            removeProperty: function (t) {
                return this.setProperty(t, null)
            },
            removeProperties: function () {
                return Array.each(arguments, this.removeProperty, this), this
            },
            set: function (t, e) {
                var n = Element.Properties[t];
                n && n.set ? n.set.call(this, e) : this.setProperty(t, e)
            }.overloadSetter(),
            get: function (t) {
                var e = Element.Properties[t];
                return e && e.get ? e.get.apply(this) : this.getProperty(t)
            }.overloadGetter(),
            erase: function (t) {
                var e = Element.Properties[t];
                return e && e.erase ? e.erase.apply(this) : this.removeProperty(t), this
            },
            hasClass: function (t) {
                return this.className.clean().contains(t, " ")
            },
            addClass: function (t) {
                return this.hasClass(t) || (this.className = (this.className + " " + t).clean()), this
            },
            removeClass: function (t) {
                return this.className = this.className.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)"), "$1"), this
            },
            toggleClass: function (t, e) {
                return null == e && (e = !this.hasClass(t)), e ? this.addClass(t) : this.removeClass(t)
            },
            adopt: function () {
                var t, e = this,
                    n = Array.flatten(arguments),
                    i = n.length;
                i > 1 && (e = t = document.createDocumentFragment());
                for (var o = 0; o < i; o++) {
                    var s = document.id(n[o], !0);
                    s && e.appendChild(s)
                }
                return t && this.appendChild(t), this
            },
            appendText: function (t, e) {
                return this.grab(this.getDocument().newTextNode(t), e)
            },
            grab: function (t, e) {
                return i[e || "bottom"](document.id(t, !0), this), this
            },
            inject: function (t, e) {
                return i[e || "bottom"](this, document.id(t, !0)), this
            },
            replaces: function (t) {
                return (t = document.id(t, !0)).parentNode.replaceChild(this, t), this
            },
            wraps: function (t, e) {
                return t = document.id(t, !0), this.replaces(t).grab(t, e)
            },
            getSelected: function () {
                return this.selectedIndex, new Elements(Array.from(this.options).filter(function (t) {
                    return t.selected
                }))
            },
            toQueryString: function () {
                var t = [];
                return this.getElements("input, select, textarea").each(function (e) {
                    var n = e.type;
                    if (e.name && !e.disabled && "submit" != n && "reset" != n && "file" != n && "image" != n) {
                        var i = "select" == e.get("tag") ? e.getSelected().map(function (t) {
                            return document.id(t).get("value")
                        }) : "radio" != n && "checkbox" != n || e.checked ? e.get("value") : null;
                        Array.from(i).each(function (n) {
                            void 0 !== n && t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(n))
                        })
                    }
                }), t.join("&")
            }
        });
        var p = {},
            f = {},
            h = function (t) {
                return f[t] || (f[t] = {})
            },
            m = function (t) {
                var e = t.uniqueNumber;
                return t.removeEvents && t.removeEvents(), t.clearAttributes && t.clearAttributes(), null != e && (delete p[e], delete f[e]), t
            },
            g = {
                input: "checked",
                option: "selected",
                textarea: "value"
            };
        Element.implement({
            destroy: function () {
                var t = m(this).getElementsByTagName("*");
                return Array.each(t, m), Element.dispose(this), null
            },
            empty: function () {
                return Array.from(this.childNodes).each(Element.dispose), this
            },
            dispose: function () {
                return this.parentNode ? this.parentNode.removeChild(this) : this
            },
            clone: function (t, e) {
                t = !1 !== t;
                var n, i = this.cloneNode(t),
                    o = [i],
                    s = [this];
                for (t && (o.append(Array.from(i.getElementsByTagName("*"))), s.append(Array.from(this.getElementsByTagName("*")))), n = o.length; n--;) {
                    var r = o[n],
                        a = s[n];
                    if (e || r.removeAttribute("id"), r.clearAttributes && (r.clearAttributes(), r.mergeAttributes(a), r.removeAttribute("uniqueNumber"), r.options))
                        for (var l = r.options, c = a.options, u = l.length; u--;) l[u].selected = c[u].selected;
                    var d = g[a.tagName.toLowerCase()];
                    d && a[d] && (r[d] = a[d])
                }
                if (Browser.ie) {
                    var p = i.getElementsByTagName("object"),
                        f = this.getElementsByTagName("object");
                    for (n = p.length; n--;) p[n].outerHTML = f[n].outerHTML
                }
                return document.id(i)
            }
        }), [Element, Window, Document].invoke("implement", {
            addListener: function (t, e) {
                if ("unload" == t) {
                    var n = e,
                        i = this;
                    e = function () {
                        i.removeListener("unload", e), n()
                    }
                } else p[Slick.uidOf(this)] = this;
                return this.addEventListener ? this.addEventListener(t, e, !!arguments[2]) : this.attachEvent("on" + t, e), this
            },
            removeListener: function (t, e) {
                return this.removeEventListener ? this.removeEventListener(t, e, !!arguments[2]) : this.detachEvent("on" + t, e), this
            },
            retrieve: function (t, e) {
                var n = h(Slick.uidOf(this)),
                    i = n[t];
                return null != e && null == i && (i = n[t] = e), null != i ? i : null
            },
            store: function (t, e) {
                return h(Slick.uidOf(this))[t] = e, this
            },
            eliminate: function (t) {
                return delete h(Slick.uidOf(this))[t], this
            }
        }), window.attachEvent && !window.addEventListener && window.addListener("unload", function () {
            Object.each(p, m), window.CollectGarbage && CollectGarbage()
        }), Element.Properties = {}, Element.Properties.style = {
            set: function (t) {
                this.style.cssText = t
            },
            get: function () {
                return this.style.cssText
            },
            erase: function () {
                this.style.cssText = ""
            }
        }, Element.Properties.tag = {
            get: function () {
                return this.tagName.toLowerCase()
            }
        }, Element.Properties.html = {
            set: function (t) {
                null == t ? t = "" : "array" == typeOf(t) && (t = t.join("")), this.innerHTML = t
            },
            erase: function () {
                this.innerHTML = ""
            }
        };
        var v = document.createElement("div");
        v.innerHTML = "<nav></nav>";
        var y = 1 == v.childNodes.length;
        if (!y)
            for (var b = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "), w = document.createDocumentFragment(), x = b.length; x--;) w.createElement(b[x]);
        v = null;
        var C = Function.attempt(function () {
                return document.createElement("table").innerHTML = "<tr><td></td></tr>", !0
            }),
            S = document.createElement("tr"),
            E = "<td></td>";
        S.innerHTML = E;
        var T, k, P = S.innerHTML == E;
        S = null, C && P && y || (Element.Properties.html.set = (T = Element.Properties.html.set, (k = {
            table: [1, "<table>", "</table>"],
            select: [1, "<select>", "</select>"],
            tbody: [2, "<table><tbody>", "</tbody></table>"],
            tr: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
        }).thead = k.tfoot = k.tbody, function (t) {
            var e = k[this.get("tag")];
            if (e || y || (e = [0, "", ""]), !e) return T.call(this, t);
            var n = e[0],
                i = document.createElement("div"),
                o = i;
            for (y || w.appendChild(i), i.innerHTML = [e[1], t, e[2]].flatten().join(""); n--;) o = o.firstChild;
            this.empty().adopt(o.childNodes), y || w.removeChild(i), i = null
        }));
        var _ = document.createElement("form");
        _.innerHTML = "<select><option>s</option></select>", "s" != _.firstChild.value && (Element.Properties.value = {
            set: function (t) {
                if ("select" != this.get("tag")) return this.setProperty("value", t);
                for (var e = this.getElements("option"), n = 0; n < e.length; n++) {
                    var i = e[n],
                        o = i.getAttributeNode("value");
                    if ((o && o.specified ? i.value : i.get("text")) == t) return i.selected = !0
                }
            },
            get: function () {
                var t = this,
                    e = t.get("tag");
                if ("select" != e && "option" != e) return this.getProperty("value");
                if ("select" == e && !(t = t.getSelected()[0])) return "";
                var n = t.getAttributeNode("value");
                return n && n.specified ? t.value : t.get("text")
            }
        }), _ = null, document.createElement("div").getAttributeNode("id") && (Element.Properties.id = {
            set: function (t) {
                this.id = this.getAttributeNode("id").value = t
            },
            get: function () {
                return this.id || null
            },
            erase: function () {
                this.id = this.getAttributeNode("id").value = ""
            }
        })
    }(),
    function () {
        var t = document.html,
            e = document.createElement("div");
        e.style.color = "red", e.style.color = null;
        var n = "red" == e.style.color;
        e = null, Element.Properties.styles = {
            set: function (t) {
                this.setStyles(t)
            }
        };
        var i = null != t.style.opacity,
            o = null != t.style.filter,
            s = /alpha\(opacity=([\d.]+)\)/i,
            r = i ? function (t, e) {
                t.style.opacity = e
            } : o ? function (t, e) {
                var n = t.style;
                t.currentStyle && t.currentStyle.hasLayout || (n.zoom = 1), e = null == e || 1 == e ? "" : "alpha(opacity=" + (100 * e).limit(0, 100).round() + ")";
                var i = n.filter || t.getComputedStyle("filter") || "";
                n.filter = s.test(i) ? i.replace(s, e) : i + e, n.filter || n.removeAttribute("filter")
            } : function (t, e) {
                t.store("$opacity", e), t.style.visibility = e > 0 || null == e ? "visible" : "hidden"
            },
            a = i ? function (t) {
                var e = t.style.opacity || t.getComputedStyle("opacity");
                return "" == e ? 1 : e.toFloat()
            } : o ? function (t) {
                var e, n = t.style.filter || t.getComputedStyle("filter");
                return n && (e = n.match(s)), null == e || null == n ? 1 : e[1] / 100
            } : function (t) {
                var e = t.retrieve("$opacity");
                return null == e && (e = "hidden" == t.style.visibility ? 0 : 1), e
            },
            l = null == t.style.cssFloat ? "styleFloat" : "cssFloat";
        Element.implement({
            getComputedStyle: function (t) {
                if (this.currentStyle) return this.currentStyle[t.camelCase()];
                var e = Element.getDocument(this).defaultView,
                    n = e ? e.getComputedStyle(this, null) : null;
                return n ? n.getPropertyValue(t == l ? "float" : t.hyphenate()) : null
            },
            setStyle: function (t, e) {
                if ("opacity" == t) return null != e && (e = parseFloat(e)), r(this, e), this;
                if (t = ("float" == t ? l : t).camelCase(), "string" != typeOf(e)) {
                    var i = (Element.Styles[t] || "@").split(" ");
                    e = Array.from(e).map(function (t, e) {
                        return i[e] ? "number" == typeOf(t) ? i[e].replace("@", Math.round(t)) : t : ""
                    }).join(" ")
                } else e == String(Number(e)) && (e = Math.round(e));
                return this.style[t] = e, ("" == e || null == e) && n && this.style.removeAttribute && this.style.removeAttribute(t), this
            },
            getStyle: function (t) {
                if ("opacity" == t) return a(this);
                t = ("float" == t ? l : t).camelCase();
                var e = this.style[t];
                if (!e || "zIndex" == t) {
                    for (var n in e = [], Element.ShortStyles)
                        if (t == n) {
                            for (var i in Element.ShortStyles[n]) e.push(this.getStyle(i));
                            return e.join(" ")
                        }
                    e = this.getComputedStyle(t)
                }
                if (e) {
                    var o = (e = String(e)).match(/rgba?\([\d\s,]+\)/);
                    o && (e = e.replace(o[0], o[0].rgbToHex()))
                }
                if (Browser.opera || Browser.ie) {
                    if (/^(height|width)$/.test(t) && !/px$/.test(e)) {
                        var s = 0;
                        return ("width" == t ? ["left", "right"] : ["top", "bottom"]).each(function (t) {
                            s += this.getStyle("border-" + t + "-width").toInt() + this.getStyle("padding-" + t).toInt()
                        }, this), this["offset" + t.capitalize()] - s + "px"
                    }
                    if (Browser.ie && /^border(.+)Width|margin|padding/.test(t) && isNaN(parseFloat(e))) return "0px"
                }
                return e
            },
            setStyles: function (t) {
                for (var e in t) this.setStyle(e, t[e]);
                return this
            },
            getStyles: function () {
                var t = {};
                return Array.flatten(arguments).each(function (e) {
                    t[e] = this.getStyle(e)
                }, this), t
            }
        }), Element.Styles = {
            left: "@px",
            top: "@px",
            bottom: "@px",
            right: "@px",
            width: "@px",
            height: "@px",
            maxWidth: "@px",
            maxHeight: "@px",
            minWidth: "@px",
            minHeight: "@px",
            backgroundColor: "rgb(@, @, @)",
            backgroundPosition: "@px @px",
            color: "rgb(@, @, @)",
            fontSize: "@px",
            letterSpacing: "@px",
            lineHeight: "@px",
            clip: "rect(@px @px @px @px)",
            margin: "@px @px @px @px",
            padding: "@px @px @px @px",
            border: "@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)",
            borderWidth: "@px @px @px @px",
            borderStyle: "@ @ @ @",
            borderColor: "rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)",
            zIndex: "@",
            zoom: "@",
            fontWeight: "@",
            textIndent: "@px",
            opacity: "@"
        }, Element.ShortStyles = {
            margin: {},
            padding: {},
            border: {},
            borderWidth: {},
            borderStyle: {},
            borderColor: {}
        }, ["Top", "Right", "Bottom", "Left"].each(function (t) {
            var e = Element.ShortStyles,
                n = Element.Styles;
            ["margin", "padding"].each(function (i) {
                var o = i + t;
                e[i][o] = n[o] = "@px"
            });
            var i = "border" + t;
            e.border[i] = n[i] = "@px @ rgb(@, @, @)";
            var o = i + "Width",
                s = i + "Style",
                r = i + "Color";
            e[i] = {}, e.borderWidth[o] = e[i][o] = n[o] = "@px", e.borderStyle[s] = e[i][s] = n[s] = "@", e.borderColor[r] = e[i][r] = n[r] = "rgb(@, @, @)"
        })
    }(),
    function () {
        if (Element.Properties.events = {
                set: function (t) {
                    this.addEvents(t)
                }
            }, [Element, Window, Document].invoke("implement", {
                addEvent: function (t, e) {
                    var n = this.retrieve("events", {});
                    if (n[t] || (n[t] = {
                            keys: [],
                            values: []
                        }), n[t].keys.contains(e)) return this;
                    n[t].keys.push(e);
                    var i = t,
                        o = Element.Events[t],
                        s = e,
                        r = this;
                    o && (o.onAdd && o.onAdd.call(this, e, t), o.condition && (s = function (n) {
                        return !o.condition.call(this, n, t) || e.call(this, n)
                    }), o.base && (i = Function.from(o.base).call(this, t)));
                    var a = function () {
                            return e.call(r)
                        },
                        l = Element.NativeEvents[i];
                    return l && (2 == l && (a = function (t) {
                        t = new DOMEvent(t, r.getWindow()), !1 === s.call(r, t) && t.stop()
                    }), this.addListener(i, a, arguments[2])), n[t].values.push(a), this
                },
                removeEvent: function (t, e) {
                    var n = this.retrieve("events");
                    if (!n || !n[t]) return this;
                    var i = n[t],
                        o = i.keys.indexOf(e);
                    if (-1 == o) return this;
                    var s = i.values[o];
                    delete i.keys[o], delete i.values[o];
                    var r = Element.Events[t];
                    return r && (r.onRemove && r.onRemove.call(this, e, t), r.base && (t = Function.from(r.base).call(this, t))), Element.NativeEvents[t] ? this.removeListener(t, s, arguments[2]) : this
                },
                addEvents: function (t) {
                    for (var e in t) this.addEvent(e, t[e]);
                    return this
                },
                removeEvents: function (t) {
                    var e;
                    if ("object" == typeOf(t)) {
                        for (e in t) this.removeEvent(e, t[e]);
                        return this
                    }
                    var n = this.retrieve("events");
                    if (!n) return this;
                    if (t) n[t] && (n[t].keys.each(function (e) {
                        this.removeEvent(t, e)
                    }, this), delete n[t]);
                    else {
                        for (e in n) this.removeEvents(e);
                        this.eliminate("events")
                    }
                    return this
                },
                fireEvent: function (t, e, n) {
                    var i = this.retrieve("events");
                    return i && i[t] ? (e = Array.from(e), i[t].keys.each(function (t) {
                        n ? t.delay(n, this, e) : t.apply(this, e)
                    }, this), this) : this
                },
                cloneEvents: function (t, e) {
                    var n = (t = document.id(t)).retrieve("events");
                    if (!n) return this;
                    if (e) n[e] && n[e].keys.each(function (t) {
                        this.addEvent(e, t)
                    }, this);
                    else
                        for (var i in n) this.cloneEvents(t, i);
                    return this
                }
            }), Element.NativeEvents = {
                click: 2,
                dblclick: 2,
                mouseup: 2,
                mousedown: 2,
                contextmenu: 2,
                mousewheel: 2,
                DOMMouseScroll: 2,
                mouseover: 2,
                mouseout: 2,
                mousemove: 2,
                selectstart: 2,
                selectend: 2,
                keydown: 2,
                keypress: 2,
                keyup: 2,
                orientationchange: 2,
                touchstart: 2,
                touchmove: 2,
                touchend: 2,
                touchcancel: 2,
                gesturestart: 2,
                gesturechange: 2,
                gestureend: 2,
                focus: 2,
                blur: 2,
                change: 2,
                reset: 2,
                select: 2,
                submit: 2,
                paste: 2,
                input: 2,
                load: 2,
                unload: 1,
                beforeunload: 2,
                resize: 1,
                move: 1,
                DOMContentLoaded: 1,
                readystatechange: 1,
                error: 1,
                abort: 1,
                scroll: 1
            }, Element.Events = {
                mousewheel: {
                    base: Browser.firefox ? "DOMMouseScroll" : "mousewheel"
                }
            }, "onmouseenter" in document.documentElement) Element.NativeEvents.mouseenter = Element.NativeEvents.mouseleave = 2;
        else {
            var t = function (t) {
                var e = t.relatedTarget;
                return null == e || !!e && (e != this && "xul" != e.prefix && "document" != typeOf(this) && !this.contains(e))
            };
            Element.Events.mouseenter = {
                base: "mouseover",
                condition: t
            }, Element.Events.mouseleave = {
                base: "mouseout",
                condition: t
            }
        }
        window.addEventListener || (Element.NativeEvents.propertychange = 2, Element.Events.change = {
            base: function () {
                var t = this.type;
                return "input" != this.get("tag") || "radio" != t && "checkbox" != t ? "change" : "propertychange"
            },
            condition: function (t) {
                return "radio" != this.type || "checked" == t.event.propertyName && this.checked
            }
        })
    }(),
    function () {
        var t = !!window.addEventListener;
        Element.NativeEvents.focusin = Element.NativeEvents.focusout = 2;
        var e = function (t, e, n, i, o) {
                for (; o && o != t;) {
                    if (e(o, i)) return n.call(o, i, o);
                    o = document.id(o.parentNode)
                }
            },
            n = {
                mouseenter: {
                    base: "mouseover"
                },
                mouseleave: {
                    base: "mouseout"
                },
                focus: {
                    base: "focus" + (t ? "" : "in"),
                    capture: !0
                },
                blur: {
                    base: t ? "blur" : "focusout",
                    capture: !0
                }
            },
            i = "$delegation:",
            o = function (t) {
                return {
                    base: "focusin",
                    remove: function (e, n) {
                        var o = e.retrieve(i + t + "listeners", {})[n];
                        if (o && o.forms)
                            for (var s = o.forms.length; s--;) o.forms[s].removeEvent(t, o.fns[s])
                    },
                    listen: function (n, o, s, r, a, l) {
                        var c = "form" == a.get("tag") ? a : r.target.getParent("form");
                        if (c) {
                            var u = n.retrieve(i + t + "listeners", {}),
                                d = u[l] || {
                                    forms: [],
                                    fns: []
                                },
                                p = d.forms,
                                f = d.fns;
                            if (-1 == p.indexOf(c)) {
                                p.push(c);
                                var h = function (t) {
                                    e(n, o, s, t, a)
                                };
                                c.addEvent(t, h), f.push(h), u[l] = d, n.store(i + t + "listeners", u)
                            }
                        }
                    }
                }
            },
            s = function (t) {
                return {
                    base: "focusin",
                    listen: function (n, i, o, s, r) {
                        var a = {
                            blur: function () {
                                this.removeEvents(a)
                            }
                        };
                        a[t] = function (t) {
                            e(n, i, o, t, r)
                        }, s.target.addEvents(a)
                    }
                }
            };
        t || Object.append(n, {
            submit: o("submit"),
            reset: o("reset"),
            change: s("change"),
            select: s("select")
        });
        var r = Element.prototype,
            a = r.addEvent,
            l = r.removeEvent,
            c = function (t, e) {
                return function (n, i, o) {
                    if (-1 == n.indexOf(":relay")) return t.call(this, n, i, o);
                    var s = Slick.parse(n).expressions[0][0];
                    if ("relay" != s.pseudos[0].key) return t.call(this, n, i, o);
                    var r = s.tag;
                    return s.pseudos.slice(1).each(function (t) {
                        r += ":" + t.key + (t.value ? "(" + t.value + ")" : "")
                    }), t.call(this, n, i), e.call(this, r, s.pseudos[0].value, i)
                }
            },
            u = {
                addEvent: function (t, i, o) {
                    var s = this.retrieve("$delegates", {}),
                        r = s[t];
                    if (r)
                        for (var l in r)
                            if (r[l].fn == o && r[l].match == i) return this;
                    var c = t,
                        u = i,
                        d = o,
                        p = n[t] || {};
                    t = p.base || c, i = function (t) {
                        return Slick.match(t, u)
                    };
                    var f = Element.Events[c];
                    if (f && f.condition) {
                        var h = i,
                            m = f.condition;
                        i = function (e, n) {
                            return h(e, n) && m.call(e, n, t)
                        }
                    }
                    var g = this,
                        v = String.uniqueID(),
                        y = p.listen ? function (t, e) {
                            !e && t && t.target && (e = t.target), e && p.listen(g, i, o, t, e, v)
                        } : function (t, n) {
                            !n && t && t.target && (n = t.target), n && e(g, i, o, t, n)
                        };
                    return r || (r = {}), r[v] = {
                        match: u,
                        fn: d,
                        delegator: y
                    }, s[c] = r, a.call(this, t, y, p.capture)
                },
                removeEvent: function (t, e, i, o) {
                    var s, r, a = this.retrieve("$delegates", {}),
                        c = a[t];
                    if (!c) return this;
                    if (o) {
                        var d = t,
                            p = c[o].delegator,
                            f = n[t] || {};
                        return t = f.base || d, f.remove && f.remove(this, o), delete c[o], a[d] = c, l.call(this, t, p)
                    }
                    if (i) {
                        for (s in c)
                            if ((r = c[s]).match == e && r.fn == i) return u.removeEvent.call(this, t, e, i, s)
                    } else
                        for (s in c)(r = c[s]).match == e && u.removeEvent.call(this, t, e, r.fn, s);
                    return this
                }
            };
        [Element, Window, Document].invoke("implement", {
            addEvent: c(a, u.addEvent),
            removeEvent: c(l, u.removeEvent)
        })
    }(),
    function () {
        var t = document.createElement("div"),
            e = document.createElement("div");
        t.style.height = "0", t.appendChild(e);
        var n = e.offsetParent === t;
        t = e = null;
        var i = function (t) {
                return "static" != s(t, "position") || u(t)
            },
            o = function (t) {
                return i(t) || /^(?:table|td|th)$/i.test(t.tagName)
            };
        Element.implement({
            scrollTo: function (t, e) {
                return u(this) ? this.getWindow().scrollTo(t, e) : (this.scrollLeft = t, this.scrollTop = e), this
            },
            getSize: function () {
                return u(this) ? this.getWindow().getSize() : {
                    x: this.offsetWidth,
                    y: this.offsetHeight
                }
            },
            getScrollSize: function () {
                return u(this) ? this.getWindow().getScrollSize() : {
                    x: this.scrollWidth,
                    y: this.scrollHeight
                }
            },
            getScroll: function () {
                return u(this) ? this.getWindow().getScroll() : {
                    x: this.scrollLeft,
                    y: this.scrollTop
                }
            },
            getScrolls: function () {
                for (var t = this.parentNode, e = {
                        x: 0,
                        y: 0
                    }; t && !u(t);) e.x += t.scrollLeft, e.y += t.scrollTop, t = t.parentNode;
                return e
            },
            getOffsetParent: n ? function () {
                var t = this;
                if (u(t) || "fixed" == s(t, "position")) return null;
                for (var e = "static" == s(t, "position") ? o : i; t = t.parentNode;)
                    if (e(t)) return t;
                return null
            } : function () {
                if (u(this) || "fixed" == s(this, "position")) return null;
                try {
                    return this.offsetParent
                } catch (t) {}
                return null
            },
            getOffsets: function () {
                if (this.getBoundingClientRect && !Browser.Platform.ios) {
                    var t = this.getBoundingClientRect(),
                        e = document.id(this.getDocument().documentElement),
                        n = e.getScroll(),
                        i = this.getScrolls(),
                        o = "fixed" == s(this, "position");
                    return {
                        x: t.left.toInt() + i.x + (o ? 0 : n.x) - e.clientLeft,
                        y: t.top.toInt() + i.y + (o ? 0 : n.y) - e.clientTop
                    }
                }
                var r = this,
                    d = {
                        x: 0,
                        y: 0
                    };
                if (u(this)) return d;
                for (; r && !u(r);) {
                    if (d.x += r.offsetLeft, d.y += r.offsetTop, Browser.firefox) {
                        a(r) || (d.x += c(r), d.y += l(r));
                        var p = r.parentNode;
                        p && "visible" != s(p, "overflow") && (d.x += c(p), d.y += l(p))
                    } else r != this && Browser.safari && (d.x += c(r), d.y += l(r));
                    r = r.offsetParent
                }
                return Browser.firefox && !a(this) && (d.x -= c(this), d.y -= l(this)), d
            },
            getPosition: function (t) {
                var e = this.getOffsets(),
                    n = this.getScrolls(),
                    i = {
                        x: e.x - n.x,
                        y: e.y - n.y
                    };
                if (t && (t = document.id(t))) {
                    var o = t.getPosition();
                    return {
                        x: i.x - o.x - c(t),
                        y: i.y - o.y - l(t)
                    }
                }
                return i
            },
            getCoordinates: function (t) {
                if (u(this)) return this.getWindow().getCoordinates();
                var e = this.getPosition(t),
                    n = this.getSize(),
                    i = {
                        left: e.x,
                        top: e.y,
                        width: n.x,
                        height: n.y
                    };
                return i.right = i.left + i.width, i.bottom = i.top + i.height, i
            },
            computePosition: function (t) {
                return {
                    left: t.x - r(this, "margin-left"),
                    top: t.y - r(this, "margin-top")
                }
            },
            setPosition: function (t) {
                return this.setStyles(this.computePosition(t))
            }
        }), [Document, Window].invoke("implement", {
            getSize: function () {
                var t = d(this);
                return {
                    x: t.clientWidth,
                    y: t.clientHeight
                }
            },
            getScroll: function () {
                var t = this.getWindow(),
                    e = d(this);
                return {
                    x: t.pageXOffset || e.scrollLeft,
                    y: t.pageYOffset || e.scrollTop
                }
            },
            getScrollSize: function () {
                var t = d(this),
                    e = this.getSize(),
                    n = this.getDocument().body;
                return {
                    x: Math.max(t.scrollWidth, n.scrollWidth, e.x),
                    y: Math.max(t.scrollHeight, n.scrollHeight, e.y)
                }
            },
            getPosition: function () {
                return {
                    x: 0,
                    y: 0
                }
            },
            getCoordinates: function () {
                var t = this.getSize();
                return {
                    top: 0,
                    left: 0,
                    bottom: t.y,
                    right: t.x,
                    height: t.y,
                    width: t.x
                }
            }
        });
        var s = Element.getComputedStyle;

        function r(t, e) {
            return s(t, e).toInt() || 0
        }

        function a(t) {
            return "border-box" == s(t, "-moz-box-sizing")
        }

        function l(t) {
            return r(t, "border-top-width")
        }

        function c(t) {
            return r(t, "border-left-width")
        }

        function u(t) {
            return /^(?:body|html)$/i.test(t.tagName)
        }

        function d(t) {
            var e = t.getDocument();
            return e.compatMode && "CSS1Compat" != e.compatMode ? e.body : e.html
        }
    }(), Element.alias({
        position: "setPosition"
    }), [Window, Document, Element].invoke("implement", {
        getHeight: function () {
            return this.getSize().y
        },
        getWidth: function () {
            return this.getSize().x
        },
        getScrollTop: function () {
            return this.getScroll().y
        },
        getScrollLeft: function () {
            return this.getScroll().x
        },
        getScrollHeight: function () {
            return this.getScrollSize().y
        },
        getScrollWidth: function () {
            return this.getScrollSize().x
        },
        getTop: function () {
            return this.getPosition().y
        },
        getLeft: function () {
            return this.getPosition().x
        }
    }),
    function () {
        var t = this.Fx = new Class({
            Implements: [Chain, Events, Options],
            options: {
                fps: 60,
                unit: !1,
                duration: 500,
                frames: null,
                frameSkip: !0,
                link: "ignore"
            },
            initialize: function (t) {
                this.subject = this.subject || this, this.setOptions(t)
            },
            getTransition: function () {
                return function (t) {
                    return -(Math.cos(Math.PI * t) - 1) / 2
                }
            },
            step: function (t) {
                if (this.options.frameSkip) {
                    var e = (null != this.time ? t - this.time : 0) / this.frameInterval;
                    this.time = t, this.frame += e
                } else this.frame++;
                if (this.frame < this.frames) {
                    var n = this.transition(this.frame / this.frames);
                    this.set(this.compute(this.from, this.to, n))
                } else this.frame = this.frames, this.set(this.compute(this.from, this.to, 1)), this.stop()
            },
            set: function (t) {
                return t
            },
            compute: function (e, n, i) {
                return t.compute(e, n, i)
            },
            check: function () {
                if (!this.isRunning()) return !0;
                switch (this.options.link) {
                    case "cancel":
                        return this.cancel(), !0;
                    case "chain":
                        return this.chain(this.caller.pass(arguments, this)), !1
                }
                return !1
            },
            start: function (e, n) {
                if (!this.check(e, n)) return this;
                this.from = e, this.to = n, this.frame = this.options.frameSkip ? 0 : -1, this.time = null, this.transition = this.getTransition();
                var o = this.options.frames,
                    s = this.options.fps,
                    r = this.options.duration;
                return this.duration = t.Durations[r] || r.toInt(), this.frameInterval = 1e3 / s, this.frames = o || Math.round(this.duration / this.frameInterval), this.fireEvent("start", this.subject), i.call(this, s), this
            },
            stop: function () {
                return this.isRunning() && (this.time = null, o.call(this, this.options.fps), this.frames == this.frame ? (this.fireEvent("complete", this.subject), this.callChain() || this.fireEvent("chainComplete", this.subject)) : this.fireEvent("stop", this.subject)), this
            },
            cancel: function () {
                return this.isRunning() && (this.time = null, o.call(this, this.options.fps), this.frame = this.frames, this.fireEvent("cancel", this.subject).clearChain()), this
            },
            pause: function () {
                return this.isRunning() && (this.time = null, o.call(this, this.options.fps)), this
            },
            resume: function () {
                return this.frame < this.frames && !this.isRunning() && i.call(this, this.options.fps), this
            },
            isRunning: function () {
                var t = e[this.options.fps];
                return t && t.contains(this)
            }
        });
        t.compute = function (t, e, n) {
            return (e - t) * n + t
        }, t.Durations = {
            short: 250,
            normal: 500,
            long: 1e3
        };
        var e = {},
            n = {},
            i = function (t) {
                var i = e[t] || (e[t] = []);
                i.push(this), n[t] || (n[t] = function () {
                    for (var t = Date.now(), e = this.length; e--;) {
                        var n = this[e];
                        n && n.step(t)
                    }
                }.periodical(Math.round(1e3 / t), i))
            },
            o = function (t) {
                var i = e[t];
                i && (i.erase(this), !i.length && n[t] && (delete e[t], n[t] = clearInterval(n[t])))
            }
    }(), Fx.CSS = new Class({
        Extends: Fx,
        prepare: function (t, e, n) {
            var i = (n = Array.from(n))[0],
                o = n[1];
            if (null == o) {
                o = i, i = t.getStyle(e);
                var s = this.options.unit;
                if (s && i.slice(-s.length) != s && 0 != parseFloat(i)) {
                    t.setStyle(e, o + s);
                    var r = t.getComputedStyle(e);
                    if (!/px$/.test(r) && null == (r = t.style[("pixel-" + e).camelCase()])) {
                        var a = t.style.left;
                        t.style.left = o + s, r = t.style.pixelLeft, t.style.left = a
                    }
                    i = (o || 1) / (parseFloat(r) || 1) * (parseFloat(i) || 0), t.setStyle(e, i + s)
                }
            }
            return {
                from: this.parse(i),
                to: this.parse(o)
            }
        },
        parse: function (t) {
            return (t = "string" == typeof (t = Function.from(t)()) ? t.split(" ") : Array.from(t)).map(function (t) {
                t = String(t);
                var e = !1;
                return Object.each(Fx.CSS.Parsers, function (n, i) {
                    if (!e) {
                        var o = n.parse(t);
                        (o || 0 === o) && (e = {
                            value: o,
                            parser: n
                        })
                    }
                }), e = e || {
                    value: t,
                    parser: Fx.CSS.Parsers.String
                }
            })
        },
        compute: function (t, e, n) {
            var i = [];
            return Math.min(t.length, e.length).times(function (o) {
                i.push({
                    value: t[o].parser.compute(t[o].value, e[o].value, n),
                    parser: t[o].parser
                })
            }), i.$family = Function.from("fx:css:value"), i
        },
        serve: function (t, e) {
            "fx:css:value" != typeOf(t) && (t = this.parse(t));
            var n = [];
            return t.each(function (t) {
                n = n.concat(t.parser.serve(t.value, e))
            }), n
        },
        render: function (t, e, n, i) {
            t.setStyle(e, this.serve(n, i))
        },
        search: function (t) {
            if (Fx.CSS.Cache[t]) return Fx.CSS.Cache[t];
            var e = {},
                n = new RegExp("^" + t.escapeRegExp() + "$");
            return Array.each(document.styleSheets, function (t, i) {
                var o = t.href;
                if (!o || !o.contains("://") || o.contains(document.domain)) {
                    var s = t.rules || t.cssRules;
                    Array.each(s, function (t, i) {
                        if (t.style) {
                            var o = t.selectorText ? t.selectorText.replace(/^\w+/, function (t) {
                                return t.toLowerCase()
                            }) : null;
                            o && n.test(o) && Object.each(Element.Styles, function (n, i) {
                                t.style[i] && !Element.ShortStyles[i] && (n = String(t.style[i]), e[i] = /^rgb/.test(n) ? n.rgbToHex() : n)
                            })
                        }
                    })
                }
            }), Fx.CSS.Cache[t] = e
        }
    }), Fx.CSS.Cache = {}, Fx.CSS.Parsers = {
        Color: {
            parse: function (t) {
                return t.match(/^#[0-9a-f]{3,6}$/i) ? t.hexToRgb(!0) : !!(t = t.match(/(\d+),\s*(\d+),\s*(\d+)/)) && [t[1], t[2], t[3]]
            },
            compute: function (t, e, n) {
                return t.map(function (i, o) {
                    return Math.round(Fx.compute(t[o], e[o], n))
                })
            },
            serve: function (t) {
                return t.map(Number)
            }
        },
        Number: {
            parse: parseFloat,
            compute: Fx.compute,
            serve: function (t, e) {
                return e ? t + e : t
            }
        },
        String: {
            parse: Function.from(!1),
            compute: function (t, e) {
                return e
            },
            serve: function (t) {
                return t
            }
        }
    }, Fx.Tween = new Class({
        Extends: Fx.CSS,
        initialize: function (t, e) {
            this.element = this.subject = document.id(t), this.parent(e)
        },
        set: function (t, e) {
            return 1 == arguments.length && (e = t, t = this.property || this.options.property), this.render(this.element, t, e, this.options.unit), this
        },
        start: function (t, e, n) {
            if (!this.check(t, e, n)) return this;
            var i = Array.flatten(arguments);
            this.property = this.options.property || i.shift();
            var o = this.prepare(this.element, this.property, i);
            return this.parent(o.from, o.to)
        }
    }), Element.Properties.tween = {
        set: function (t) {
            return this.get("tween").cancel().setOptions(t), this
        },
        get: function () {
            var t = this.retrieve("tween");
            return t || (t = new Fx.Tween(this, {
                link: "cancel"
            }), this.store("tween", t)), t
        }
    }, Element.implement({
        tween: function (t, e, n) {
            return this.get("tween").start(t, e, n), this
        },
        fade: function (t) {
            var e, n, i = this.get("tween"),
                o = ["opacity"].append(arguments);
            switch (null == o[1] && (o[1] = "toggle"), o[1]) {
                case "in":
                    e = "start", o[1] = 1;
                    break;
                case "out":
                    e = "start", o[1] = 0;
                    break;
                case "show":
                    e = "set", o[1] = 1;
                    break;
                case "hide":
                    e = "set", o[1] = 0;
                    break;
                case "toggle":
                    var s = this.retrieve("fade:flag", 1 == this.getStyle("opacity"));
                    e = "start", o[1] = s ? 0 : 1, this.store("fade:flag", !s), n = !0;
                    break;
                default:
                    e = "start"
            }
            n || this.eliminate("fade:flag"), i[e].apply(i, o);
            var r = o[o.length - 1];
            return "set" == e || 0 != r ? this.setStyle("visibility", 0 == r ? "hidden" : "visible") : i.chain(function () {
                this.element.setStyle("visibility", "hidden"), this.callChain()
            }), this
        },
        highlight: function (t, e) {
            e || (e = "transparent" == (e = this.retrieve("highlight:original", this.getStyle("background-color"))) ? "#fff" : e);
            var n = this.get("tween");
            return n.start("background-color", t || "#ffff88", e).chain(function () {
                this.setStyle("background-color", this.retrieve("highlight:original")), n.callChain()
            }.bind(this)), this
        }
    }), Fx.Morph = new Class({
        Extends: Fx.CSS,
        initialize: function (t, e) {
            this.element = this.subject = document.id(t), this.parent(e)
        },
        set: function (t) {
            for (var e in "string" == typeof t && (t = this.search(t)), t) this.render(this.element, e, t[e], this.options.unit);
            return this
        },
        compute: function (t, e, n) {
            var i = {};
            for (var o in t) i[o] = this.parent(t[o], e[o], n);
            return i
        },
        start: function (t) {
            if (!this.check(t)) return this;
            "string" == typeof t && (t = this.search(t));
            var e = {},
                n = {};
            for (var i in t) {
                var o = this.prepare(this.element, i, t[i]);
                e[i] = o.from, n[i] = o.to
            }
            return this.parent(e, n)
        }
    }), Element.Properties.morph = {
        set: function (t) {
            return this.get("morph").cancel().setOptions(t), this
        },
        get: function () {
            var t = this.retrieve("morph");
            return t || (t = new Fx.Morph(this, {
                link: "cancel"
            }), this.store("morph", t)), t
        }
    }, Element.implement({
        morph: function (t) {
            return this.get("morph").start(t), this
        }
    }), Fx.implement({
        getTransition: function () {
            var t = this.options.transition || Fx.Transitions.Sine.easeInOut;
            if ("string" == typeof t) {
                var e = t.split(":");
                t = (t = Fx.Transitions)[e[0]] || t[e[0].capitalize()], e[1] && (t = t["ease" + e[1].capitalize() + (e[2] ? e[2].capitalize() : "")])
            }
            return t
        }
    }), Fx.Transition = function (t, e) {
        e = Array.from(e);
        var n = function (n) {
            return t(n, e)
        };
        return Object.append(n, {
            easeIn: n,
            easeOut: function (n) {
                return 1 - t(1 - n, e)
            },
            easeInOut: function (n) {
                return (n <= .5 ? t(2 * n, e) : 2 - t(2 * (1 - n), e)) / 2
            }
        })
    }, Fx.Transitions = {
        linear: function (t) {
            return t
        }
    }, Fx.Transitions.extend = function (t) {
        for (var e in t) Fx.Transitions[e] = new Fx.Transition(t[e])
    }, Fx.Transitions.extend({
        Pow: function (t, e) {
            return Math.pow(t, e && e[0] || 6)
        },
        Expo: function (t) {
            return Math.pow(2, 8 * (t - 1))
        },
        Circ: function (t) {
            return 1 - Math.sin(Math.acos(t))
        },
        Sine: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        Back: function (t, e) {
            return e = e && e[0] || 1.618, Math.pow(t, 2) * ((e + 1) * t - e)
        },
        Bounce: function (t) {
            for (var e, n = 0, i = 1;; n += i, i /= 2)
                if (t >= (7 - 4 * n) / 11) {
                    e = i * i - Math.pow((11 - 6 * n - 11 * t) / 4, 2);
                    break
                }
            return e
        },
        Elastic: function (t, e) {
            return Math.pow(2, 10 * --t) * Math.cos(20 * t * Math.PI * (e && e[0] || 1) / 3)
        }
    }), ["Quad", "Cubic", "Quart", "Quint"].each(function (t, e) {
        Fx.Transitions[t] = new Fx.Transition(function (t) {
            return Math.pow(t, e + 2)
        })
    }),
    function () {
        var t = function () {},
            e = "onprogress" in new Browser.Request,
            n = this.Request = new Class({
                Implements: [Chain, Events, Options],
                options: {
                    url: "",
                    data: "",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "text/javascript, text/html, application/xml, text/xml, */*"
                    },
                    async: !0,
                    format: !1,
                    method: "post",
                    link: "ignore",
                    isSuccess: null,
                    emulation: !0,
                    urlEncoded: !0,
                    encoding: "utf-8",
                    evalScripts: !1,
                    evalResponse: !1,
                    timeout: 0,
                    noCache: !1
                },
                initialize: function (t) {
                    this.xhr = new Browser.Request, this.setOptions(t), this.headers = this.options.headers
                },
                onStateChange: function () {
                    var n = this.xhr;
                    4 == n.readyState && this.running && (this.running = !1, this.status = 0, Function.attempt(function () {
                        var t = n.status;
                        this.status = 1223 == t ? 204 : t
                    }.bind(this)), n.onreadystatechange = t, e && (n.onprogress = n.onloadstart = t), clearTimeout(this.timer), this.response = {
                        text: this.xhr.responseText || "",
                        xml: this.xhr.responseXML
                    }, this.options.isSuccess.call(this, this.status) ? this.success(this.response.text, this.response.xml) : this.failure())
                },
                isSuccess: function () {
                    var t = this.status;
                    return t >= 200 && t < 300
                },
                isRunning: function () {
                    return !!this.running
                },
                processScripts: function (t) {
                    return this.options.evalResponse || /(ecma|java)script/.test(this.getHeader("Content-type")) ? Browser.exec(t) : t.stripScripts(this.options.evalScripts)
                },
                success: function (t, e) {
                    this.onSuccess(this.processScripts(t), e)
                },
                onSuccess: function () {
                    this.fireEvent("complete", arguments).fireEvent("success", arguments).callChain()
                },
                failure: function () {
                    this.onFailure()
                },
                onFailure: function () {
                    this.fireEvent("complete").fireEvent("failure", this.xhr)
                },
                loadstart: function (t) {
                    this.fireEvent("loadstart", [t, this.xhr])
                },
                progress: function (t) {
                    this.fireEvent("progress", [t, this.xhr])
                },
                timeout: function () {
                    this.fireEvent("timeout", this.xhr)
                },
                setHeader: function (t, e) {
                    return this.headers[t] = e, this
                },
                getHeader: function (t) {
                    return Function.attempt(function () {
                        return this.xhr.getResponseHeader(t)
                    }.bind(this))
                },
                check: function () {
                    if (!this.running) return !0;
                    switch (this.options.link) {
                        case "cancel":
                            return this.cancel(), !0;
                        case "chain":
                            return this.chain(this.caller.pass(arguments, this)), !1
                    }
                    return !1
                },
                send: function (t) {
                    if (!this.check(t)) return this;
                    this.options.isSuccess = this.options.isSuccess || this.isSuccess, this.running = !0;
                    var n = typeOf(t);
                    "string" != n && "element" != n || (t = {
                        data: t
                    });
                    var i = this.options,
                        o = (t = Object.append({
                            data: i.data,
                            url: i.url,
                            method: i.method
                        }, t)).data,
                        s = String(t.url),
                        r = t.method.toLowerCase();
                    switch (typeOf(o)) {
                        case "element":
                            o = document.id(o).toQueryString();
                            break;
                        case "object":
                        case "hash":
                            o = Object.toQueryString(o)
                    }
                    if (this.options.format) {
                        var a = "format=" + this.options.format;
                        o = o ? a + "&" + o : a
                    }
                    if (this.options.emulation && !["get", "post"].contains(r)) {
                        var l = "_method=" + r;
                        o = o ? l + "&" + o : l, r = "post"
                    }
                    if (this.options.urlEncoded && ["post", "put"].contains(r)) {
                        var c = this.options.encoding ? "; charset=" + this.options.encoding : "";
                        this.headers["Content-type"] = "application/x-www-form-urlencoded" + c
                    }
                    s || (s = document.location.pathname);
                    var u = s.lastIndexOf("/");
                    u > -1 && (u = s.indexOf("#")) > -1 && (s = s.substr(0, u)), this.options.noCache && (s += (s.contains("?") ? "&" : "?") + String.uniqueID()), o && "get" == r && (s += (s.contains("?") ? "&" : "?") + o, o = null);
                    var d = this.xhr;
                    return e && (d.onloadstart = this.loadstart.bind(this), d.onprogress = this.progress.bind(this)), d.open(r.toUpperCase(), s, this.options.async, this.options.user, this.options.password), this.options.user && "withCredentials" in d && (d.withCredentials = !0), d.onreadystatechange = this.onStateChange.bind(this), Object.each(this.headers, function (t, e) {
                        try {
                            d.setRequestHeader(e, t)
                        } catch (n) {
                            this.fireEvent("exception", [e, t])
                        }
                    }, this), this.fireEvent("request"), d.send(o), this.options.async ? this.options.timeout && (this.timer = this.timeout.delay(this.options.timeout, this)) : this.onStateChange(), this
                },
                cancel: function () {
                    if (!this.running) return this;
                    this.running = !1;
                    var n = this.xhr;
                    return n.abort(), clearTimeout(this.timer), n.onreadystatechange = t, e && (n.onprogress = n.onloadstart = t), this.xhr = new Browser.Request, this.fireEvent("cancel"), this
                }
            }),
            i = {};
        ["get", "post", "put", "delete", "GET", "POST", "PUT", "DELETE"].each(function (t) {
            i[t] = function (e) {
                var n = {
                    method: t
                };
                return null != e && (n.data = e), this.send(n)
            }
        }), n.implement(i), Element.Properties.send = {
            set: function (t) {
                return this.get("send").cancel().setOptions(t), this
            },
            get: function () {
                var t = this.retrieve("send");
                return t || (t = new n({
                    data: this,
                    link: "cancel",
                    method: this.get("method") || "post",
                    url: this.get("action")
                }), this.store("send", t)), t
            }
        }, Element.implement({
            send: function (t) {
                var e = this.get("send");
                return e.send({
                    data: this,
                    url: t || e.options.url
                }), this
            }
        })
    }(), Request.HTML = new Class({
        Extends: Request,
        options: {
            update: !1,
            append: !1,
            evalScripts: !0,
            filter: !1,
            headers: {
                Accept: "text/html, application/xml, text/xml, */*"
            }
        },
        success: function (t) {
            var e = this.options,
                n = this.response;
            n.html = t.stripScripts(function (t) {
                n.javascript = t
            });
            var i = n.html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
            i && (n.html = i[1]);
            var o = new Element("div").set("html", n.html);
            if (n.tree = o.childNodes, n.elements = o.getElements(e.filter || "*"), e.filter && (n.tree = n.elements), e.update) {
                var s = document.id(e.update).empty();
                e.filter ? s.adopt(n.elements) : s.set("html", n.html)
            } else if (e.append) {
                var r = document.id(e.append);
                e.filter ? n.elements.reverse().inject(r) : r.adopt(o.getChildren())
            }
            e.evalScripts && Browser.exec(n.javascript), this.onSuccess(n.tree, n.elements, n.html, n.javascript)
        }
    }), Element.Properties.load = {
        set: function (t) {
            return this.get("load").cancel().setOptions(t), this
        },
        get: function () {
            var t = this.retrieve("load");
            return t || (t = new Request.HTML({
                data: this,
                link: "cancel",
                update: this,
                method: "get"
            }), this.store("load", t)), t
        }
    }, Element.implement({
        load: function () {
            return this.get("load").send(Array.link(arguments, {
                data: Type.isObject,
                url: Type.isString
            })), this
        }
    }), "undefined" == typeof JSON && (this.JSON = {}),
    function () {
        var special = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            escape = function (t) {
                return special[t] || "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            };
        JSON.validate = function (t) {
            return t = t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""), /^[\],:{}\s]*$/.test(t)
        }, JSON.encode = JSON.stringify ? function (t) {
            return JSON.stringify(t)
        } : function (t) {
            switch (t && t.toJSON && (t = t.toJSON()), typeOf(t)) {
                case "string":
                    return '"' + t.replace(/[\x00-\x1f\\"]/g, escape) + '"';
                case "array":
                    return "[" + t.map(JSON.encode).clean() + "]";
                case "object":
                case "hash":
                    var e = [];
                    return Object.each(t, function (t, n) {
                        var i = JSON.encode(t);
                        i && e.push(JSON.encode(n) + ":" + i)
                    }), "{" + e + "}";
                case "number":
                case "boolean":
                    return "" + t;
                case "null":
                    return "null"
            }
            return null
        }, JSON.decode = function (string, secure) {
            if (!string || "string" != typeOf(string)) return null;
            if (secure || JSON.secure) {
                if (JSON.parse) return JSON.parse(string);
                if (!JSON.validate(string)) throw new Error("JSON could not decode the input; security is enabled and the value is not secure.")
            }
            return eval("(" + string + ")")
        }
    }(), Request.JSON = new Class({
        Extends: Request,
        options: {
            secure: !0
        },
        initialize: function (t) {
            this.parent(t), Object.append(this.headers, {
                Accept: "application/json",
                "X-Request": "JSON"
            })
        },
        success: function (t) {
            var e;
            try {
                e = this.response.json = JSON.decode(t, this.options.secure)
            } catch (e) {
                return void this.fireEvent("error", [t, e])
            }
            null == e ? this.onFailure() : this.onSuccess(e, t)
        }
    });
var Cookie = new Class({
    Implements: Options,
    options: {
        path: "/",
        domain: !1,
        duration: !1,
        secure: !1,
        document: document,
        encode: !0
    },
    initialize: function (t, e) {
        this.key = t, this.setOptions(e)
    },
    write: function (t) {
        if (this.options.encode && (t = encodeURIComponent(t)), this.options.domain && (t += "; domain=" + this.options.domain), this.options.path && (t += "; path=" + this.options.path), this.options.duration) {
            var e = new Date;
            e.setTime(e.getTime() + 24 * this.options.duration * 60 * 60 * 1e3), t += "; expires=" + e.toGMTString()
        }
        return this.options.secure && (t += "; secure"), this.options.document.cookie = this.key + "=" + t, this
    },
    read: function () {
        var t = this.options.document.cookie.match("(?:^|;)\\s*" + this.key.escapeRegExp() + "=([^;]*)");
        return t ? decodeURIComponent(t[1]) : null
    },
    dispose: function () {
        return new Cookie(this.key, Object.merge({}, this.options, {
            duration: -1
        })).write(""), this
    }
});

function emptyFunc() {}
Cookie.write = function (t, e, n) {
        return new Cookie(t, n).write(e)
    }, Cookie.read = function (t) {
        return new Cookie(t).read()
    }, Cookie.dispose = function (t, e) {
        return new Cookie(t, e).dispose()
    },
    function (t, e) {
        var n, i, o, s, r = [],
            a = e.createElement("div"),
            l = function () {
                clearTimeout(s), n || (Browser.loaded = n = !0, e.removeListener("DOMContentLoaded", l).removeListener("readystatechange", c), e.fireEvent("domready"), t.fireEvent("domready"))
            },
            c = function () {
                for (var t = r.length; t--;)
                    if (r[t]()) return l(), !0;
                return !1
            },
            u = function () {
                clearTimeout(s), c() || (s = setTimeout(u, 10))
            };
        e.addListener("DOMContentLoaded", l);
        var d = function () {
            try {
                return a.doScroll(), !0
            } catch (t) {}
            return !1
        };
        a.doScroll && !d() && (r.push(d), o = !0), e.readyState && r.push(function () {
            var t = e.readyState;
            return "loaded" == t || "complete" == t
        }), "onreadystatechange" in e ? e.addListener("readystatechange", c) : o = !0, o && u(), Element.Events.domready = {
            onAdd: function (t) {
                n && t.call(this)
            }
        }, Element.Events.load = {
            base: "load",
            onAdd: function (e) {
                i && this == t && e.call(this)
            },
            condition: function () {
                return this == t && (l(), delete Element.Events.load), !0
            }
        }, t.addEvent("load", function () {
            i = !0
        })
    }(window, document),
    function () {
        var Swiff = this.Swiff = new Class({
            Implements: Options,
            options: {
                id: null,
                height: 1,
                width: 1,
                container: null,
                properties: {},
                params: {
                    quality: "high",
                    allowScriptAccess: "always",
                    wMode: "window",
                    swLiveConnect: !0
                },
                callBacks: {},
                vars: {}
            },
            toElement: function () {
                return this.object
            },
            initialize: function (t, e) {
                this.instance = "Swiff_" + String.uniqueID(), this.setOptions(e), e = this.options;
                var n = this.id = e.id || this.instance,
                    i = document.id(e.container);
                Swiff.CallBacks[this.instance] = {};
                var o = e.params,
                    s = e.vars,
                    r = e.callBacks,
                    a = Object.append({
                        height: e.height,
                        width: e.width
                    }, e.properties),
                    l = this;
                for (var c in r) Swiff.CallBacks[this.instance][c] = function (t) {
                    return function () {
                        return t.apply(l.object, arguments)
                    }
                }(r[c]), s[c] = "Swiff.CallBacks." + this.instance + "." + c;
                o.flashVars = Object.toQueryString(s), Browser.ie ? (a.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", o.movie = t) : a.type = "application/x-shockwave-flash", a.data = t;
                var u = '<object id="' + n + '"';
                for (var d in a) u += " " + d + '="' + a[d] + '"';
                for (var p in u += ">", o) o[p] && (u += '<param name="' + p + '" value="' + o[p] + '" />');
                u += "</object>", this.object = (i ? i.empty() : new Element("div")).set("html", u).firstChild
            },
            replaces: function (t) {
                return (t = document.id(t, !0)).parentNode.replaceChild(this.toElement(), t), this
            },
            inject: function (t) {
                return document.id(t, !0).appendChild(this.toElement()), this
            },
            remote: function () {
                return Swiff.remote.apply(Swiff, [this.toElement()].append(arguments))
            }
        });
        Swiff.CallBacks = {}, Swiff.remote = function (obj, fn) {
            var rs = obj.CallFunction('<invoke name="' + fn + '" returntype="javascript">' + __flash__argumentsToXML(arguments, 2) + "</invoke>");
            return eval(rs)
        }
    }();
var BLANK_URL = "about:blank",
    Neutron = window.Neutron || {};
Neutron.namespace = function (t) {
    if (!t || !t.length) return null;
    for (var e = t.split("."), n = Neutron, i = "Neutron" == e[0] ? 1 : 0; i < e.length; ++i) n[e[i]] = n[e[i]] || {}, n = n[e[i]];
    return n.__debug_ns_ = t, n
}, Neutron.getPackage = function (t) {
    if (!t || !t.length) return null;
    for (var e = t.split("."), n = Neutron, i = "Neutron" == e[0] ? 1 : 0; i < e.length && n; ++i) n = n[e[i]] || null;
    return n
}, Neutron.extend = function (t, e) {
    var n = function () {};
    n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t, t.superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e)
};
var MSG = {
    register: function (t, e, n) {
        var i = $(t);
        if (0 != i.length)
            for (var o in e) e[o] && i.on(o, n, e[o])
    },
    unregister: function (t, e, n) {
        var i = $(t);
        if (0 != i.length)
            for (var o in e) e[o] && i.off(o, n, e[o])
    }
};
String.format = function (t) {
    if (0 == arguments.length) return null;
    var e = Array.prototype.slice.call(arguments, 1);
    return t.replace(/\{(\d+)\}/g, function (t, n) {
        return e[n]
    })
}, Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
    e || (e = 0);
    var n = this.length;
    for (e < 0 && (e = n + e); e < n; e++)
        if (this[e] === t) return e;
    return -1
});
var Galaxy = window.Galaxy || function () {
    function t(e) {
        jQuery(e.data.host).off("load", t), e.data && e.data.entry && e.data.entry()
    }
    return {
        litSupernova: function (e, n) {
            var i = {
                entry: e,
                host: n || window
            };
            jQuery(i.host).on("load", i, t)
        }
    }
}();

function getAngle(t, e, n, i) {
    return 180 * Math.atan2(i - e, n - t) / Math.PI
}

function getMousePoint(t) {
    var e = {
        x: 0,
        y: 0
    };
    return void 0 !== window.pageYOffset ? (e.x = window.pageXOffset, e.y = window.pageYOffset) : void 0 !== document.compatMode && "BackCompat" != document.compatMode ? (e.x = document.documentElement.scrollLeft, e.y = document.documentElement.scrollTop) : void 0 !== document.body && (e.x = document.body.scrollLeft, e.y = document.body.scrollTop), e.x += t.clientX, e.y += t.clientY, e
}
String.isEmpty = function (t) {
    return /^\s*$/g.test(t)
};
var Utils = {
        makeNoUserSelect: function (t) {
            var e = $(t).is("iframe") ? $(t).contents().find("body") : $(t).find("body");
            0 == e.length && (e = $(t)), e.css({
                "-webkit-user-select": "none",
                "-moz-user-select": "none",
                "user-select": "none"
            })
        },
        makeNoUserSelect2: function (t, e) {
            t.on("selectstart", e || "", function () {
                return !1
            })
        },
        makeNoDragging: function (t, e) {
            t.on("dragstart", e || "", function () {
                return !1
            })
        },
        makeNoContextMenu: function (t, e) {
            t.on("contextmenu", e || "", function () {
                return !1
            })
        },
        dumpObject: function (t, e) {
            var n = "",
                i = "";
            e || (e = 0);
            for (var o = 0; o < e + 1; o++) i += "    ";
            if ("object" == typeof t)
                for (var s in t) {
                    var r = t[s];
                    null != r && "object" == typeof r ? (n += i + s + ": {\n", n += Utils.dumpObject(r, e + 1), n += i + "},\n") : n += i + s + ': "' + r + '",\n'
                } else n = "<" + t + "> (" + typeof t + ")";
            return n
        },
        mergeURL: function (t, e) {
            if ("./" == e.substring(0, 2)) {
                var n = Utils.parseURL(t),
                    i = n.source;
                return i.substring(0, i.lastIndexOf(n.file)) + e.substring(2, e.legth)
            }
            return e
        },
        parseURL: function (t) {
            var e = document.createElement("a");
            return e.href = t, {
                source: t,
                protocol: e.protocol.replace(":", ""),
                host: e.hostname,
                port: e.port,
                query: e.search,
                params: function () {
                    for (var t, n = {}, i = e.search.replace(/^\?/, "").split("&"), o = i.length, s = 0; s < o; s++) i[s] && (n[(t = i[s].split("="))[0]] = t[1]);
                    return n
                }(),
                file: (e.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
                hash: e.hash.replace("#", ""),
                path: e.pathname.replace(/^([^\/])/, "/$1"),
                relative: (e.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
                segments: e.pathname.replace(/^\//, "").split("/")
            }
        },
        getDictionaryLength: function (t) {
            var e = 0;
            for (var n in t) e++;
            return e
        },
        addCssByStyle: function (t, e) {
            var n = e || document,
                i = n.createElement("style");
            if (i.setAttribute("type", "text/css"), i.styleSheet) i.styleSheet.cssText = t;
            else {
                var o = n.createTextNode(t);
                i.appendChild(o)
            }
            var s = n.getElementsByTagName("head");
            return s.length ? s[0].appendChild(i) : n.documentElement.appendChild(i), i
        },
        logStackTrace: function (t) {
            var e = [],
                n = !1;
            try {
                o.dont.exist += 0
            } catch (t) {
                if (t.stack) {
                    for (var i = t.stack.split("\n"), o = 0, s = i.length; o < s; o++) e.push(i[o]);
                    e.shift(), n = !0
                } else if (window.opera && t.message) {
                    for (i = t.message.split("\n"), o = 0, s = i.length; o < s; o++)
                        if (i[o].match(/^\s*[A-Za-z0-9\-_\$]+\(/)) {
                            var r = i[o];
                            i[o + 1] && (r += " at " + i[o + 1], o++), e.push(r)
                        }
                    e.shift(), n = !0
                }
            }
            if (!n)
                for (var a = arguments.callee.caller; a;) {
                    var l = a.toString(),
                        c = l.substring(l.indexOf("function") + 8, l.indexOf("(")) || "anonymous";
                    e.push(c), a = a.caller
                }
            t ? console.log(e.slice(0, t).join("\n")) : console.log(e.join("\n"))
        },
        preImage: function (t, e, n) {
            (n = n || new Image).src = t, n.complete ? e.call(n) : (n.onload = function () {
                n.onload = null, e.call(n)
            }, n.onerror = function () {
                n.onerror = null, e.call(null)
            })
        },
        getSearchParamByName: function (t) {
            t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search);
            return null == e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
        }
    },
    CSSStyles = {
        cssNoRim: "\nhtml, body, applet, object, embed { \nmargin: 0;\npadding: 0;\nborder: 0;\n}\n",
        cssFontSize: function (t) {
            var e = "\n";
            return e += "body { font-size: " + t + "em !important; }\n", e += "h1, h2, h3, h4, h5, h6 { line-height: " + 1.2 * t + " !important; }\n", e += "h1 { font-size: 200% !important; }\n", e += "h2 { font-size: 160% !important; }\n", e += "h3 { font-size: 140% !important; }\n", e += "h4 { font-size: 120% !important; }\n", e += "h5 { font-size: 100% !important; }\n", e += "h6 { font-size: 90% !important; }\n"
        },
        cssNoTapHighlight: "* { -webkit-tap-highlight-color: rgba(0,0,0,0); }"
    },
    XGene = function () {
        var t = !1;
        return {
            isEnabled: function () {
                return t
            },
            enable: function () {
                t = !0
            },
            disable: function () {
                t = !1
            },
            notify: function (e) {
                if (t) {
                    for (var n = ["{XGene}", e], i = 1; i < arguments.length; i++) n.push(arguments[i].toString());
                    return window.prompt(n, null)
                }
                console.log("===================== XGen is NOT enabled! ===================")
            }
        }
    }();

function isXGeneEnv() {
    return -1 != navigator.userAgent.indexOf("XGene")
}
Vector3 = function (t, e, n) {
        this.x = t, this.y = e, this.z = n
    }, Vector3.prototype = {
        copy: function () {
            return new Vector3(this.x, this.y, this.z)
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        sqrLength: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        normalize: function () {
            var t = 1 / this.length();
            return new Vector3(this.x * t, this.y * t, this.z * t)
        },
        negate: function () {
            return new Vector3(-this.x, -this.y, -this.z)
        },
        add: function (t) {
            return new Vector3(this.x + t.x, this.y + t.y, this.z + t.z)
        },
        subtract: function (t) {
            return new Vector3(this.x - t.x, this.y - t.y, this.z - t.z)
        },
        multiply: function (t) {
            return new Vector3(this.x * t, this.y * t, this.z * t)
        },
        divide: function (t) {
            var e = 1 / t;
            return new Vector3(this.x * e, this.y * e, this.z * e)
        },
        dot: function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        cross: function (t) {
            return new Vector3(-this.z * t.y + this.y * t.z, this.z * t.x - this.x * t.z, -this.y * t.x + this.x * t.y)
        }
    }, Vector3.zero = new Vector3(0, 0, 0), Ray3 = function (t, e) {
        this.origin = t, this.direction = e
    }, Ray3.prototype = {
        getPoint: function (t) {
            return this.origin.add(this.direction.multiply(t))
        }
    }, Sphere = function (t, e) {
        this.center = t, this.radius = e
    }, Sphere.prototype = {
        copy: function () {
            return new Sphere(this.center.copy(), this.radius.copy())
        },
        initialize: function () {
            this.sqrRadius = this.radius * this.radius
        },
        intersect: function (t) {
            var e = t.origin.subtract(this.center),
                n = e.sqrLength() - this.sqrRadius,
                i = t.direction.dot(e);
            if (i <= 0) {
                var o = i * i - n;
                if (o >= 0) {
                    var s = new IntersectResult;
                    return s.geometry = this, s.distance = -i - Math.sqrt(o), s.position = t.getPoint(s.distance), s.normal = s.position.subtract(this.center).normalize(), s
                }
            }
            return IntersectResult.noHit
        }
    }, IntersectResult = function () {
        this.geometry = null, this.distance = 0, this.position = Vector3.zero, this.normal = Vector3.zero
    }, IntersectResult.noHit = new IntersectResult, PerspectiveCamera = function (t, e, n, i) {
        this.eye = t, this.front = e, this.refUp = n, this.fov = i
    }, PerspectiveCamera.prototype = {
        initialize: function () {
            this.right = this.front.cross(this.refUp), this.up = this.right.cross(this.front), this.fovScale = 2 * Math.tan(.5 * this.fov * Math.PI / 180)
        },
        generateRay: function (t, e) {
            var n = this.right.multiply((t - .5) * this.fovScale),
                i = this.up.multiply((e - .5) * this.fovScale);
            return new Ray3(this.eye, this.front.add(n).add(i).normalize())
        }
    }, jQuery && jQuery.noConflict(),
    function (t) {
        var e = function (e, n, i, o, s) {
            var r = {
                    sizeX: o,
                    sizeY: s
                },
                a = "storyopened",
                l = "storypuzzledone",
                c = {
                    fadeOpacity: .8,
                    puzzleContainerExtra: 42
                },
                u = "",
                d = 0,
                p = 0,
                f = 0,
                h = 0,
                m = 0,
                g = 0,
                v = 0,
                y = [],
                b = [],
                w = [],
                x = null,
                C = null,
                S = function () {
                    var t = null,
                        e = 0,
                        n = 0,
                        i = null,
                        o = 0,
                        s = 0,
                        r = !1,
                        a = !1,
                        u = 0,
                        g = 0,
                        C = x.getPosition(),
                        S = C.x,
                        E = C.y;

                    function T(t) {
                        var e = t.target;
                        w.contains(e) && e.setStyle("opacity", 1)
                    }

                    function k(t) {
                        var e = t.target;
                        w.contains(e) && e.setStyle("opacity", c.fadeOpacity)
                    }

                    function P(i) {
                        var r = i.target;
                        if (!t && w.contains(r)) {
                            r.getStyle("opacity") < 1 && r.setStyle("opacity", 1), n = r.getStyle("zIndex"), r.setStyle("zIndex", 5e3), t = r, e = r.posIndex, o = s = e;
                            var a = r.getPosition();
                            u = i.page.x - a.x, g = i.page.y - a.y, document.addEvent("mousemove", A), document.addEvent("touchmove", A), i.preventDefault(), i.stopPropagation()
                        }
                    }

                    function _(r) {
                        t && (t.setStyle("opacity", c.fadeOpacity), t.setStyle("zIndex", n), document.removeEvent("mousemove", A), a ? o != e ? M(t, o, $) : (M(t, e), t = null, i = null) : (M(t, e), t = null, i = null, o = s = e), r.preventDefault(), r.stopPropagation())
                    }

                    function A(n) {
                        var l = n.page.x,
                            c = n.page.y;
                        if (n.preventDefault(), n.stopPropagation(), t.setPosition({
                                x: l - u - S,
                                y: c - g - E
                            }), a = !(l <= S || l - S >= d || c <= E || c - E >= p)) {
                            var v = Math.ceil((l - S) / f),
                                y = Math.ceil((c - E) / h);
                            if ((o = (y - 1) * m + v) != s && (r = !0), r) {
                                if (s != e) {
                                    var b = i.posIndex;
                                    M(i, b)
                                }
                                i = w.filter(function (t, e) {
                                    return t.posIndex == o
                                })[0], o != e && M(i, e), r = !1, s = o
                            }
                        } else {
                            if (s != e) {
                                b = i.posIndex;
                                M(i, b)
                            }
                            s = e
                        }
                    }

                    function $() {
                        t.posIndex = o, i.posIndex = e, t.setStyle("zIndex", t.posIndex), i.setStyle("zIndex", i.posIndex), t = null, i = null, 0, w.every(function (t, e) {
                            var n = t.retrieve("puzzleIndex");
                            return t.posIndex == n
                        }) && function () {
                            x.removeEvent("mouseover", T), x.removeEvent("mouseout", k), x.removeEvent("mousedown", P), x.removeEvent("mouseup", _), x.removeEvent("touchleave", k), x.removeEvent("touchstart", P), x.removeEvent("touchend", _);
                            var t = 0,
                                e = function () {
                                    var i = w[t++];
                                    i.fade(1), t < v ? setTimeout(e, 50) : setTimeout(n, 50)
                                };

                            function n() {
                                jQuery(".puzzle").trigger({
                                    type: l
                                })
                            }
                            setTimeout(e, 50)
                        }()
                    }

                    function M(t, e, n) {
                        var i = y[e - 1],
                            o = b[e - 1],
                            s = t.posIndex;

                        function r() {
                            t.setStyle("zIndex", 1e3)
                        }
                        moveItemMorph = t.get("morph"), moveItemMorph.addEvent("start", r), moveItemMorph.addEvent("complete", function e() {
                            moveItemMorph.removeEvent("start", r);
                            moveItemMorph.removeEvent("complete", e);
                            t.setStyle("zIndex", s);
                            "function" == typeOf(n) && n()
                        }), t.morph({
                            left: i,
                            top: o
                        })
                    }! function () {
                        for (var t = 0, e = w.length; t < e; t++) {
                            w[t].set("morph", {
                                duration: 250
                            })
                        }
                    }(), x.addEvent("mouseover", T), x.addEvent("mouseout", k), x.addEvent("mousedown", P), x.addEvent("mouseup", _), x.addEvent("touchleave", k), x.addEvent("touchstart", P), x.addEvent("touchend", _)
                },
                E = {};
            C = t("puzzleSet");
            var T = i,
                k = T.css("background-image");
            u = k.substring(4, k.length - 1), d = T.innerWidth(), p = T.innerHeight();
            var P = T.css("background-size");
            "cover" === P ? e / n > d / p ? (E.sizeX = e / (n / p * d), E.sizeY = 1) : (E.sizeX = 1, E.sizeY = n / (e / d * p)) : "contain" === P ? e / n < d / p ? (E.sizeX = e / (n / p * d), E.sizeY = 1) : (E.sizeX = 1, E.sizeY = n / (e / d * p)) : (E.sizeX = parseFloat(P) / 100, E.sizeY = d * E.sizeX * n / e / p);
            var _ = T.css("background-position-x"),
                A = T.css("background-position-y");
            E.posX = "center" === _ ? .5 : parseFloat(_) / 100, E.posY = "center" === A ? .5 : parseFloat(A) / 100,
                function (t) {
                    var e = {
                            listContainer: "puzzle_container",
                            list: "puzzle_list",
                            item: "puzzle_item"
                        },
                        n = {
                            listContainer: {
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                margin: "0 auto"
                            },
                            list: {
                                width: "100%",
                                height: "100%"
                            },
                            item: {
                                position: "absolute",
                                width: "33.3333%",
                                height: "33.3333%"
                            }
                        };
                    f = d / (m = r.sizeX), h = p / (g = r.sizeY), v = m * g;
                    var i = [];
                    x = function (t) {
                            var o = new Element("div");
                            o.addClass(e.listContainer), o.setStyles(n.listContainer);
                            var s = new Element("ul");
                            s.addClass(e.list), s.setStyles(n.list);
                            for (var r = 0, a = v; r < a; r++) {
                                var l = new Element("li"),
                                    c = r + 1;
                                l.store("puzzleIndex", c), l.addClass(e.item), l.setStyles(n.item), l.id = "puzzle-item" + r, w.push(l)
                            }
                            var d = w.clone();
                            for (r = 0, a = v; r < a; r++) {
                                var p;
                                if (0 === r)
                                    for (;
                                        (p = d.getRandom()).id === w[r].id;);
                                else p = d.getRandom();
                                d.erase(p);
                                var x = r + 1;
                                p.posIndex = x;
                                var C = p.retrieve("puzzleIndex"),
                                    S = (C - 1) % m,
                                    E = Math.floor((C - 1) / m),
                                    T = Math.floor((x - 1) / m) * h,
                                    k = (x - 1) % m * f,
                                    P = (m * (t.sizeX - 1) * t.posX + S) / (m * t.sizeX - 1) * 100,
                                    _ = (g * (t.sizeY - 1) * t.posY + E) / (g * t.sizeY - 1) * 100,
                                    A = "url(" + u + ") " + P.toFixed(3) + "% " + _.toFixed(3) + "% no-repeat",
                                    $ = m * t.sizeX * 100 + "%";
                                p.setStyles({
                                    width: Math.ceil(f),
                                    height: Math.ceil(h),
                                    background: A,
                                    backgroundSize: $,
                                    left: k,
                                    top: T,
                                    zIndex: x
                                }), y.push(k), b.push(T), i.push(p)
                            }
                            return s.adopt(i), o.adopt(s), o
                        }(t),
                        function () {
                            for (var t = 0, e = 0, n = w.length; e < n; e++) w[e].setStyle("opacity", .5);
                            for (; C.firstChild;) C.removeChild(C.firstChild);
                            C.grab(x);
                            var o = function () {
                                var e = i[t++],
                                    n = parseInt(e.getStyle("top")),
                                    s = n - 0;
                                if (e.set("morph", {
                                        transition: Fx.Transitions.Quad.easeOut
                                    }), e.morph({
                                        top: [s, n],
                                        opacity: c.fadeOpacity
                                    }), t < v) {
                                    if (t == v - 1) {
                                        var r = e.get("morph"),
                                            l = function () {
                                                r.removeEvent("complete", l), S(), setTimeout(function () {
                                                    jQuery(".puzzle").trigger({
                                                        type: a
                                                    })
                                                }, 0)
                                            };
                                        r.addEvent("complete", l)
                                    }
                                    setTimeout(o, 10)
                                }
                            };
                            setTimeout(o, 10)
                        }()
                }(E)
        };
        window.puzzleGame = {}, puzzleGame.start = function (t, n, i, o, s) {
            e(t, n, i, o, s)
        }
    }(document.id),
    function (t, e) {
        "use strict";
        Neutron.namespace("triton.alchemist.Puzzle5");
        window.alchemistPuzzle = function (t, e, n, i) {
            var o = t,
                s = e;
            return {
                init: function () {
                    var t = o.find(".original");
                    Utils.preImage(t.get(0).src, function () {
                        setTimeout(function () {
                            puzzleGame.start(t[0].naturalWidth, t[0].naturalHeight, s, n, i)
                        }, 1e3)
                    }, t.get(0))
                }
            }
        }
    }(jQuery),
    function (t) {
        var e, n, i, o, s, r = 0,
            a = 10,
            l = .65,
            c = .3,
            u = .42,
            d = .51,
            p = .65,
            f = .37,
            h = .5,
            m = .52,
            g = .68,
            v = .42,
            y = .48,
            b = .61;

        function w(t, e, n) {
            setTimeout(function () {
                r = 1, s = setInterval(function () {
                    ! function (t, e, n) {
                        var i, o, w, x;
                        if (r <= a) i = ((u - l) * (r - 1) / a + l) * e, o = ((d - c) * (r - 1) / a + c) * n, w = ((u - l) * r / a + l) * e, x = ((d - c) * r / a + c) * n;
                        else if (r <= 2 * a) i = ((p - u) * (r - a - 1) / a + u) * e, o = ((f - d) * (r - a - 1) / a + d) * n, w = ((p - u) * (r - a) / a + u) * e, x = ((f - d) * (r - a) / a + d) * n;
                        else if (r <= 3 * a) i = ((h - p) * (r - 2 * a - 1) / a + p) * e, o = ((m - f) * (r - 2 * a - 1) / a + f) * n, w = ((h - p) * (r - 2 * a) / a + p) * e, x = ((m - f) * (r - 2 * a) / a + f) * n;
                        else if (r <= 4 * a) i = ((g - h) * (r - 3 * a - 1) / a + h) * e, o = ((v - m) * (r - 3 * a - 1) / a + m) * n, w = ((g - h) * (r - 3 * a) / a + h) * e, x = ((v - m) * (r - 3 * a) / a + m) * n;
                        else {
                            if (!(r <= 5 * a)) return void clearInterval(s);
                            i = ((y - g) * (r - 4 * a - 1) / a + g) * e, o = ((b - v) * (r - 4 * a - 1) / a + v) * n, w = ((y - g) * (r - 4 * a) / a + g) * e, x = ((b - v) * (r - 4 * a) / a + v) * n
                        }
                        t.beginPath(), t.moveTo(i, o), t.lineTo(w, x), t.stroke(), ++r
                    }(t, e, n)
                }, 20)
            }, 1e3)
        }
        var x = {
            init: function (s) {
                return this.each(function () {
                    var r = t(this),
                        a = r.data("eraser"),
                        l = r.children("img")[0];
                    if (!a) {
                        var c = function () {
                            var c, u, d, p, f, h = t("<canvas/>"),
                                m = h.get(0),
                                g = m.getContext("2d"),
                                v = (window.devicePixelRatio || 1) / (g.webkitBackingStorePixelRatio || g.mozBackingStorePixelRatio || g.msBackingStorePixelRatio || g.oBackingStorePixelRatio || g.backingStorePixelRatio || 1),
                                y = r.width(),
                                b = r.height(),
                                C = y * v,
                                S = b * v,
                                E = r.offset(),
                                T = (s && s.size ? s.size : 40) * v,
                                k = s && s.completeRatio ? s.completeRatio : .7,
                                P = s && s.completeFunction ? s.completeFunction : null,
                                _ = s && s.progressFunction ? s.progressFunction : null,
                                A = "auto" == r.css("z-index") ? 1 : r.css("z-index"),
                                $ = [],
                                M = Math.floor(C / T),
                                H = M * Math.floor(S / T),
                                L = H,
                                D = l;
                            for (c = D.naturalWidth, u = D.naturalHeight, f = 0, f = c / u > (d = y) / (p = b) ? p / u : d / c, e = Math.abs(c - d / f) / 2, n = Math.abs(u - p / f) / 2, i = d / f, o = p / f, r.after(h), m.id = r[0].id, m.className = r[0].className, m.width = C, m.height = S, m.style.width = y.toString() + "px", m.style.height = b.toString() + "px", g.drawImage(D, e, n, i, o, 0, 0, C, S), r.remove(), g.globalCompositeOperation = "destination-out", g.strokeStyle = "rgba(255,0,0,255)", g.lineWidth = T, g.lineCap = "round", h.bind("mousedown.eraser", x.mouseDown), h.bind("touchstart.eraser", x.touchStart), h.bind("touchmove.eraser", x.touchMove), h.bind("touchend.eraser", x.touchEnd); L--;) $.push(1);
                            a = {
                                posX: E.left,
                                posY: E.top,
                                touchDown: !1,
                                touchID: -999,
                                touchX: 0,
                                touchY: 0,
                                ptouchX: 0,
                                ptouchY: 0,
                                canvas: h,
                                ctx: g,
                                w: C,
                                h: S,
                                scaleRatio: v,
                                source: D,
                                size: T,
                                parts: $,
                                colParts: M,
                                numParts: H,
                                ratio: 0,
                                complete: !1,
                                completeRatio: k,
                                completeFunction: P,
                                progressFunction: _,
                                zIndex: A
                            }, h.data("eraser", a), t(window).resize(function () {
                                var t = h.offset();
                                a.posX = t.left, a.posY = t.top
                            }), w(g, C, S)
                        };
                        l.complete && l.naturalWidth > 0 ? c() : r.load(c)
                    }
                })
            },
            touchStart: function (e) {
                var n = t(this).data("eraser");
                if (!n.touchDown) {
                    var i = e.originalEvent.changedTouches[0],
                        o = i.pageX - n.posX,
                        s = i.pageY - n.posY;
                    o *= n.scaleRatio, s *= n.scaleRatio, x.evaluatePoint(n, o, s), n.touchDown = !0, n.touchID = i.identifier, n.touchX = o, n.touchY = s, e.preventDefault()
                }
            },
            touchMove: function (e) {
                var n = t(this),
                    i = n.data("eraser");
                if (i.touchDown)
                    for (var o = e.originalEvent.changedTouches, s = o.length; s--;)
                        if (o[s].identifier == i.touchID) {
                            var r = o[s].pageX - i.posX,
                                a = o[s].pageY - i.posY;
                            r *= i.scaleRatio, a *= i.scaleRatio, x.evaluatePoint(i, r, a), i.ctx.beginPath(), i.ctx.moveTo(i.touchX, i.touchY), i.touchX = r, i.touchY = a, i.ctx.lineTo(i.touchX, i.touchY), i.ctx.stroke(), n.css({
                                "z-index": n.css("z-index") == i.zIndex ? parseInt(i.zIndex) + 1 : i.zIndex
                            }), e.preventDefault();
                            break
                        }
            },
            touchEnd: function (e) {
                var n = t(this).data("eraser");
                if (n.touchDown)
                    for (var i = e.originalEvent.changedTouches, o = i.length; o--;)
                        if (i[o].identifier == n.touchID) {
                            n.touchDown = !1, e.preventDefault();
                            break
                        }
            },
            evaluatePoint: function (t, e, n) {
                var i = Math.floor(e / t.size) + Math.floor(n / t.size) * t.colParts;
                i >= 0 && i < t.numParts && (t.ratio += t.parts[i], t.parts[i] = 0, t.complete || ((i = t.ratio / t.numParts) >= t.completeRatio ? (t.complete = !0, null != t.completeFunction && t.completeFunction()) : null != t.progressFunction && t.progressFunction(i)))
            },
            mouseDown: function (e) {
                var n = t(this),
                    i = n.data("eraser"),
                    o = e.pageX - i.posX,
                    s = e.pageY - i.posY;
                o *= i.scaleRatio, s *= i.scaleRatio, x.evaluatePoint(i, o, s), i.touchDown = !0, i.touchX = o, i.touchY = s, i.ctx.beginPath(), i.ctx.moveTo(i.touchX - 1, i.touchY), i.ctx.lineTo(i.touchX, i.touchY), i.ctx.stroke(), n.bind("mousemove.eraser", x.mouseMove), t(document).bind("mouseup.eraser", i, x.mouseUp), e.preventDefault()
            },
            mouseMove: function (e) {
                var n = t(this),
                    i = n.data("eraser"),
                    o = e.pageX - i.posX,
                    s = e.pageY - i.posY;
                o *= i.scaleRatio, s *= i.scaleRatio, x.evaluatePoint(i, o, s), i.ctx.beginPath(), i.ctx.moveTo(i.touchX, i.touchY), i.touchX = o, i.touchY = s, i.ctx.lineTo(i.touchX, i.touchY), i.ctx.stroke(), n.css({
                    "z-index": n.css("z-index") == i.zIndex ? parseInt(i.zIndex) + 1 : i.zIndex
                }), e.preventDefault()
            },
            mouseUp: function (e) {
                var n = e.data,
                    i = n.canvas;
                n.touchDown = !1, i.unbind("mousemove.eraser"), t(document).unbind("mouseup.eraser"), e.preventDefault()
            },
            clear: function () {
                var e = t(this).data("eraser");
                if (e) {
                    e.ctx.clearRect(0, 0, e.w, e.h);
                    for (var n = e.numParts; n--;) e.parts[n] = 0;
                    e.ratio = e.numParts, e.complete = !0, null != e.completeFunction && e.completeFunction()
                }
            },
            size: function (e) {
                var n = t(this).data("eraser");
                n && e && (n.size = e, n.ctx.lineWidth = e)
            },
            reset: function () {
                var s = t(this).data("eraser");
                if (s) {
                    s.ctx.globalCompositeOperation = "source-over", s.ctx.drawImage(s.source, e, n, i, o, 0, 0, s.w, s.h), s.ctx.globalCompositeOperation = "destination-out";
                    for (var r = s.numParts; r--;) s.parts[r] = 1;
                    s.ratio = 0, s.complete = !1, s.touchDown = !1
                }
            },
            progress: function () {
                var e = t(this).data("eraser");
                return e ? e.ratio / e.numParts : 0
            }
        };
        t.fn.eraser = function (e) {
            return x[e] ? x[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not yet exist on jQuery.eraser") : x.init.apply(this, arguments)
        }
    }(jQuery),
    function (t) {
        var e, n = angular.module("showReader.services", []);
        n.service("showDataConverter", [function () {
            new RegExp(["鍙充笂瑙�", "&#x53F3;&#x4E0A;&#x89D2;", "鏈嬪弸鍦�", "&#x670B;&#x53CB;&#x5708;"].join("|"), "ig");

            function t(t) {
                var e = "http://" + globalConstants.boundHost,
                    n = "http://" + globalConstants.cdnBoundHost;
                return -1 == t.indexOf(e) ? t : t.replace(e, n)
            }

            function e(e) {
                if (e.url) e.url = t(e.url);
                else if (e.set)
                    for (var n in e.set) e.set[n].url && (e.set[n].url = t(e.set[n].url));
                return e
            }

            function n(t) {
                if ("img-link" == t.type && t.url && 0 == t.url.indexOf("http://mp.weixin.qq.com/mp/redirect?url=")) {
                    var e = t.url.replace("http://mp.weixin.qq.com/mp/redirect?url=", "");
                    e = decodeURIComponent(e), t.url = e.replace("#/rd", "")
                }
                return t
            }
            this.convertFromV0_1 = function (t) {
                if (t.desc || (t.desc = t.comments.shopName), !t.globals) return t.comments.templateId = "tpl-a-1/commentspanel", t.globals = [{
                    templateId: "tpl-a-1/global/arrow"
                }, {
                    templateId: "tpl-a-1/global/menu",
                    hasLink: !0,
                    hasComment: !0,
                    linkMenuBgColor: "rgba(145, 226, 250, 0.97)",
                    menuItems: [{
                        menuTitle: "棣栭〉",
                        menuBgColor: "rgba(4, 118, 155, 0.97)",
                        pageIndex: 0
                    }, {
                        menuTitle: "瀹濊礉鍙傛暟",
                        menuBgColor: "rgba(16, 147, 189, 0.97)",
                        pageIndex: 1
                    }, {
                        menuTitle: "瀹濊礉鏁堟灉",
                        menuBgColor: "rgba(40, 173, 215, 0.97)",
                        pageIndex: 2
                    }, {
                        menuTitle: "瀹濊礉缁嗚妭",
                        menuBgColor: "rgba(63, 198, 237, 0.97)",
                        pageIndex: 4
                    }, {
                        menuTitle: "璐墿椤荤煡",
                        menuBgColor: "rgba(102, 212, 244, 0.97)",
                        pageIndex: 6
                    }]
                }], t;
                for (var e, n = 0; n < t.globals.length; ++n) - 1 == t.globals[n].templateId.indexOf("/global/") && (t.globals[n].templateId = t.globals[n].templateId.replace("/", "/global/")), "tpl-a-1/global/menu" === t.globals[n].templateId && (e = t.globals[n]);
                if (!e) return t;
                e.hasLink = !0, e.hasComment = !0, e.linkMenuBgColor = "rgba(145, 226, 250, 0.97)", e.menuItems = [];
                var i = ["rgba(4, 118, 155, 0.97)", "rgba(16, 147, 189, 0.97)", "rgba(40, 173, 215, 0.97)", "rgba(63, 198, 237, 0.97)", "rgba(102, 212, 244, 0.97)"],
                    o = 0;
                for (n = 0; n < t.pages.length; ++n) t.pages[n].menuItem && (e.menuItems[o] = {
                    menuTitle: t.pages[n].menuTitle,
                    menuBgColor: t.pages[n].menuBgColor || i[o]
                }, ++o);
                return t
            }, this.handleEditable = function (i) {
                for (var o in i.cover && (i.cover = t(i.cover)), i.globals)
                    if (i.globals[o].editables)
                        for (var s in i.globals[o].editables) e(i.globals[o].editables[s]);
                for (var r in i.pages)
                    if (i.pages[r].editables)
                        for (var s in i.pages[r].editables) {
                            var a = i.pages[r].editables[s];
                            e(a), n(a)
                        }
                return i
            }, this.logoAdvCheck = function (t) {
                return !t.freeshow && !t.no_advert && t.cur_hits > t.points ? (t.showLogo = !1, t.showAdv = !0) : t.freeshow ? (t.showAdv = !1, t.showLogo = !1) : (t.showAdv = !1, t.showLogo = !t.no_logo), t
            }, this.fileQuaSwitch = function (t, e) {
                if (t.cur_hits > t.high_peak)
                    for (var n = 0; n < e.globals.length; n++)
                        if ("tpl-a-1/global/bgm" == e.globals[n].templateId) {
                            var i = e.globals[n].editables.aud0.url.replace("-qos_hi", "-qos_lo");
                            e.globals[n].editables.aud0.url = i;
                            break
                        }
                return e
            }
        }]), n.service("navMgr", ["$location", "$timeout", "$rootScope", "$http", "xmiShowData", "xmiShowInfo", function (e, n, i, o, s, r) {
            var a, l, c, u = this,
                d = s.pages,
                p = !1,
                f = !0,
                h = [],
                m = [],
                g = (r.show_url.split("/").pop(), !1);

            function v(t) {
                return t in d ? d[t] : null
            }

            function y() {
                p = !1, i.$broadcast("arrowAnimate", !0),
                    function () {
                        if (d[a].overlay) {
                            var e = l + 1 > 2 ? 0 : l + 1;
                            t("#idx-slide" + e).css({
                                transform: "translate3D(0, 0, 0)",
                                "z-index": "-10"
                            })
                        }
                    }()
            }

            function b() {
                return a == h.length - 1
            }
            this.mapPages = function () {
                h = [];
                for (var t = 0; t < d.length; ++t) h[t] = t.toString()
            }, this.mapPages(), m[0] = 0, t(document).on("touchmove", function (t) {
                t.preventDefault()
            }), t(document).on("touchstart", ".scrollable", function (t) {
                0 === t.currentTarget.scrollTop ? t.currentTarget.scrollTop = 1 : t.currentTarget.scrollHeight === t.currentTarget.scrollTop + t.currentTarget.offsetHeight && (t.currentTarget.scrollTop -= 1)
            }), t(document).on("touchmove", ".scrollable", function (e) {
                e.currentTarget.scrollHeight > t(e.currentTarget).innerHeight() && e.stopPropagation()
            }), t("#idx-slide0").on("tnTransitionEnd", function () {
                t("#idx-slide0").removeClass("idx-page-animate")
            }), t("#idx-slide1").on("tnTransitionEnd", function () {
                t("#idx-slide1").removeClass("idx-page-animate")
            }), t("#idx-slide2").on("tnTransitionEnd", function () {
                t("#idx-slide2").removeClass("idx-page-animate")
            }), t("#idx-slide-comment").on("tnTransitionEnd", function () {
                t("#idx-slide-comment").removeClass("idx-page-animate")
            }), t(document).one("touchstart", function () {
                i.$broadcast("firstTouch")
            }), this.showData = s, this.slidePages = new Array, this.commentPage = s.comments, this.isLastPage = function () {
                return b()
            }, this.enableSwipePage = function (t) {
                f = t
            };
            var w, x = "slide";

            function C(e, o, s) {
                function r() {
                    !g || d.length
                }
                w || (w = s), null == a && 0 != o && (o = 0);
                var c = h.indexOf(o); - 1 == c && (c = 0);
                var f = l,
                    S = l + 1 > 2 ? 0 : l + 1,
                    E = l - 1 < 0 ? 2 : l - 1;
                null == a ? (this.slidePages[1] = v(c), c < d.length - 1 && (this.slidePages[2] = v(c + 1)), c > 0 && (this.slidePages[0] = v(c - 1)), l = 1, a = c, r(), n(function () {
                    t("#idx-slide1 div div div").scope().onPageShow(!0), y()
                }, 1e3)) : c == a + 1 ? (p = !0, "overlay" === x ? (t("#idx-slide" + S).css("z-index", "0"), t("#idx-slide" + f).css({
                    transform: "translate3D(0, -100%, 0)"
                }), t("#idx-slide" + E).css("transform", "translate3D(0, 100%, 0)"), l = S, u.slidePages[E] = v(c + 1), u.slidePages[f] = v(c - 2), d.splice(a, 1), u.mapPages(), t("#idx-slide" + S + " div div div").scope().onPageShow(!0), y(), x = "slide", C(m[0], h[a])) : (t("#idx-slide" + f).addClass("idx-page-animate"), t("#idx-slide" + S).addClass("idx-page-animate"), t("#idx-slide" + f).css("transform", "translate3D(0, -100%, 0)"), t("#idx-slide" + S).css("transform", "translate3D(0, 0, 0)"), t("#idx-slide" + S).one("tnTransitionEnd", function () {
                    t("#idx-slide" + E).css("transform", "translate3D(0, 100%, 0)"), l = S, w.$apply(function () {
                        u.slidePages[E] = null, n(function () {
                            u.slidePages[E] = v(c + 1)
                        }, 0)
                    }), t("#idx-slide" + f + " div div div").scope().onPageHide(), t("#idx-slide" + S + " div div div").scope().onPageShow(!0), y()
                }), a = c, r())) : c == a - 1 ? (p = !0, t("#idx-slide" + f).addClass("idx-page-animate"), t("#idx-slide" + E).addClass("idx-page-animate"), t("#idx-slide" + f).css("transform", "translate3D(0, 100%, 0)"), t("#idx-slide" + E).css("transform", "translate3D(0, 0, 0)"), t("#idx-slide" + E).one("tnTransitionEnd", function () {
                    t("#idx-slide" + S).css("transform", "translate3D(0, -100%, 0)"), l = E, w.$apply(function () {
                        u.slidePages[S] = null, n(function () {
                            u.slidePages[S] = v(c - 1)
                        }, 0)
                    }), t("#idx-slide" + f + " div div div").scope().onPageHide(), t("#idx-slide" + E + " div div div").scope().onPageShow(!0), y()
                }), a = c, r()) : c > a ? (p = !0, this.slidePages[S] = v(c), t("#idx-slide" + f).addClass("idx-page-animate"), t("#idx-slide" + S).addClass("idx-page-animate"), t("#idx-slide" + f).css("transform", "translate3D(0, -100%, 0)"), t("#idx-slide" + S).css("transform", "translate3D(0, 0, 0)"), t("#idx-slide" + S).one("tnTransitionEnd", function () {
                    t("#idx-slide" + E).css("transform", "translate3D(0, 100%, 0)"), l = S, t("#idx-slide" + f + " div div div").scope().onPageHide(), t("#idx-slide" + S + " div div div").scope().onPageShow(!0), w.$apply(function () {
                        u.slidePages[E] = v(c + 1), u.slidePages[f] = v(c - 1)
                    }), y()
                }), a = c, r()) : c < a ? (p = !0, this.slidePages[E] = v(c), t("#idx-slide" + f).addClass("idx-page-animate"), t("#idx-slide" + E).addClass("idx-page-animate"), t("#idx-slide" + f).css("transform", "translate3D(0, 100%, 0)"), t("#idx-slide" + E).css("transform", "translate3D(0, 0, 0)"), t("#idx-slide" + E).one("tnTransitionEnd", function () {
                    t("#idx-slide" + S).css("transform", "translate3D(0, -100%, 0)"), l = E, t("#idx-slide" + f + " div div div").scope().onPageHide(), t("#idx-slide" + E + " div div div").scope().onPageShow(!0), w.$apply(function () {
                        u.slidePages[S] = v(c - 1), u.slidePages[f] = v(c + 1)
                    }), y()
                }), a = c, r()) : y(), n(function () {
                    i.$broadcast("pageChangeStart", b()), b() || i.$broadcast("hideSupportInfo")
                }, 500)
            }
            this.toNextPage = function (t) {
                !p && f && (a >= h.length - 1 || (x = t || "slide", C(m[0], h[a + 1])))
            }, this.toPrevPage = function () {
                !p && f && (a <= 0 || (x = "slide", C(m[0], h[a - 1])))
            }, this.refreshNextPage = function () {
                var t = l + 1 > 2 ? 0 : l + 1;
                this.slidePages[t] = v(a + 1)
            }, this.onRoute = C;
            var S = !1;
            this.onDragStart = function (t) {
                S = !1, c = t.gesture ? t.gesture.deltaY : 0, i.$broadcast("arrowAnimate", !1)
            }, this.onDrag = function (e) {
                if (!p && f) {
                    var n = (e.gesture ? e.gesture.deltaY : 0) - c;
                    if (0 != n) {
                        var i = l,
                            o = l + 1 > 2 ? 0 : l + 1;
                        if (n > 0) {
                            if (a <= 0) return void(S = !1);
                            t("#idx-slide" + (l - 1 < 0 ? 2 : l - 1)).css("transform", "translate3D(0, " + 100 * (n / window.innerHeight - 1) + "%, 0)")
                        } else {
                            if (a >= d.length - 1) return void(S = !1);
                            t("#idx-slide" + o).css("transform", "translate3D(0, " + 100 * (n / window.innerHeight + 1) + "%, 0)")
                        }
                        t("#idx-slide" + i).css("transform", "translate3D(0, " + n / window.innerHeight * 100 + "%, 0)"), S = !0
                    } else S = !1
                }
            }, this.onDragEnd = function (e) {
                if (!p && f) {
                    var n = (e.gesture ? e.gesture.deltaY : 0) - c;
                    if (0 != n && S)
                        if (Math.abs(n) < 100) {
                            var i = l,
                                o = l + 1 > 2 ? 0 : l + 1,
                                s = l - 1 < 0 ? 2 : l - 1;
                            p = !0, n < 0 ? (t("#idx-slide" + i).addClass("idx-page-animate"), t("#idx-slide" + o).addClass("idx-page-animate"), t("#idx-slide" + i).css("transform", "translate3D(0, 0, 0)"), t("#idx-slide" + o).css("transform", "translate3D(0, 100%, 0)"), t("#idx-slide" + o).one("tnTransitionEnd", function () {
                                y()
                            })) : (t("#idx-slide" + i).addClass("idx-page-animate"), t("#idx-slide" + s).addClass("idx-page-animate"), t("#idx-slide" + i).css("transform", "translate3D(0, 0, 0)"), t("#idx-slide" + s).css("transform", "translate3D(0, -100%, 0)"), t("#idx-slide" + s).one("tnTransitionEnd", function () {
                                y()
                            }))
                        } else n < 0 && a < d.length - 1 ? C(m[0], h[a + 1]) : n > 0 && a > 0 && C(m[0], h[a - 1]);
                    else y()
                }
            }, this.setAdv = function (t) {
                g = t
            }
        }]);
        var i = angular.module("showReader", ["ngRoute", "hammer", "triton.directives", "triton.editablePage", "triton.infrastructure", "showReader.services", "triton.xiumi.template"]);
        i.value("xmiShowData", window.xmi_ShowData), i.value("xmiShowInfo", window.globalConstants.showInfo), i.value("advertList", window.globalConstants.advertList), i.config(["$routeProvider", function (t) {
            e = t
        }]).run(["$rootScope", "$http", "$window", "$location", "showDataConverter", "navMgr", "xmiShowData", "xmiShowInfo", "advertList", "$route", function (t, n, i, o, s, r, a, l, c) {
            a.version < 1 && (a = s.convertFromV0_1(a)), l = s.logoAdvCheck(l), a = s.handleEditable(a), a = s.fileQuaSwitch(l, a), (l.showAdv || i.location.href.match("enable_adv")) && function () {
                if (c && c.length) {
                    for (var t = {
                            templateId: "tpl-adv/001-adv1",
                            editables: {
                                ads: {
                                    type: "advert",
                                    items: []
                                }
                            }
                        }, e = c, n = t.editables.ads.items, i = 0; i < e.length; i++) {
                        var o = e[i];
                        n.push({
                            advert_id: o.advert_id,
                            title: o.title,
                            desc: o.desc,
                            target_uri: o.target_uri,
                            thumb_uri: o.thumb_uri,
                            view_uri: o.view_uri
                        })
                    }
                    a.pages.push(t), r.setAdv(!0), r.refreshNextPage(), r.mapPages()
                }
            }(), e.when("/comments", {
                template: function () {
                    return t.$broadcast("routeEvent", "comments"), ""
                }
            }).otherwise({
                template: function () {
                    return t.$broadcast("routeEvent", 0, 0), ""
                }
            })
        }]), i.controller("containerController", ["$scope", "navMgr", function (t, e) {
            t.data = e.showData, t.slidePages = e.slidePages, t.commentPage = e.commentPage, t.$on("routeEvent", function (n, i, o) {
                e.onRoute(i, o, t)
            }), t.$on("openingShowStart", function () {
                e.enableSwipePage(!1)
            }), t.$on("openingShowFinish", function () {
                e.enableSwipePage(!0)
            }), t.$on("changeFromComments", function () {
                e.changeFromComments()
            }), t.onDragStart = function (t) {
                e.onDragStart(t)
            }, t.onDrag = function (t) {
                e.onDrag(t)
            }, t.onDragEnd = function (t) {
                e.onDragEnd(t)
            }
        }]), i.controller("readerController", ["$scope", "$rootScope", "$window", "$location", "xmiShowData", "navMgr", function (t, e, n, i, o, s) {
            e.pageTitle = o.title, t.wxCover = null != o.cover && 0 === o.cover.indexOf("//") ? "http:" + o.cover : o.cover;
            t.$on("openingShowStart", function () {
                t.$broadcast("showGlobals", !1, !1)
            }), t.$on("openingShowFinish", function () {
                t.$broadcast("showGlobals", !0, !1), s.isLastPage() && e.$broadcast("showSupportInfo")
            }), t.$on("enterEffectPage", function () {
                t.$broadcast("showGlobals", !1, !0)
            }), t.$on("exitEffectPage", function () {
                t.$broadcast("showGlobals", !0, !0), s.isLastPage() && e.$broadcast("showSupportInfo")
            }), t.$on("transitionStart", function () {
                t.$broadcast("arrowAnimate", !1)
            }), t.$on("transitionFinish", function () {
                t.$broadcast("arrowAnimate", !0)
            }), t.$on("toNextPage", function (t, e) {
                s.toNextPage(e)
            }), t.$on("toPrevPage", function () {
                s.toPrevPage()
            })
        }]), i.controller("globalsController", ["$scope", "xmiShowData", "xmiShowInfo", function (t, e, n) {
            t.globals = e.globals || [], t.showGlobals = !0;
            var i = function (t, e) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (i.templateId === e) return i
                }
                return null
            }(t.globals, "tpl-a-1/global/support-info");
            !n.showLogo && i ? t.globals.splice(t.globals.indexOf(i), 1) : n.showLogo && !i && t.globals.push({
                templateId: "tpl-a-1/global/support-info"
            }), t.$on("showGlobals", function (e, n, i) {
                i ? t.$apply(function () {
                    t.showGlobals = n
                }) : t.showGlobals = n
            })
        }])
    }(jQuery);
var pageHandlers = namespace.reg("triton.xiumi.pageHandlers"),
    globalHandlers = namespace.reg("triton.xiumi.globalHandlers");
! function (t, e, n) {
    var i = 60,
        o = 100,
        s = 100;

    function r(t, e, n) {
        var i = e.find(".pdt-mask"),
            o = e.find(".pdt-circle-out"),
            s = e.find(".pdt-circle-text1"),
            r = e.find(".pdt-circle-text2"),
            a = e.find(".pdt-circle-text3"),
            l = e.find(".pdt-circle-text4"),
            c = e.find(".pdt-circle-price"),
            u = e.find(".pdt-hint"),
            d = 1500,
            p = 500;

        function f() {
            i.removeClass("pdt-fadein-transition1"), u.removeClass("pdt-fadein-transition1"), o.removeClass("pdt-fadein-transition1"), s.removeClass("pdt-fadein-transition2"), r.removeClass("pdt-fadein-transition2"), a.removeClass("pdt-fadein-transition3"), l.removeClass("pdt-fadein-transition3"), c.removeClass("pdt-fadein-transition3"), i.css("opacity", "0"), o.css("opacity", "0"), s.css("opacity", "0"), r.css("opacity", "0"), a.css({
                opacity: "0",
                left: "45%"
            }), l.css({
                opacity: "0",
                left: "55%"
            }), c.css({
                top: "6em",
                opacity: "0"
            }), u.css("opacity", "0")
        }
        f(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), u.addClass("pdt-fadein-transition1"), o.addClass("pdt-fadein-transition1"), s.addClass("pdt-fadein-transition2"), r.addClass("pdt-fadein-transition2"), a.addClass("pdt-fadein-transition3"), l.addClass("pdt-fadein-transition3"), c.addClass("pdt-fadein-transition3"), n(function () {
                i.css("opacity", "1"), o.css("opacity", "1")
            }, p), n(function () {
                s.css("opacity", "1"), r.css("opacity", "1")
            }, p + d), n(function () {
                a.css({
                    opacity: "1",
                    left: "50%"
                }), l.css({
                    opacity: "1",
                    left: "50%"
                })
            }, p + 2 * d), n(function () {
                c.css({
                    top: "5.3em",
                    opacity: "1"
                })
            }, p + 2.5 * d), n(function () {
                u.css("opacity", "1"), t.$emit("openingShowFinish"), pageHandlers.openingShown = !0
            }, p + 3 * d)) : (i.css("opacity", "1"), o.css("opacity", "1"), s.css("opacity", "1"), r.css("opacity", "1"), a.css({
                opacity: "1",
                left: "50%"
            }), l.css({
                opacity: "1",
                left: "50%"
            }), c.css({
                top: "5.3em",
                opacity: "1"
            }), u.css("opacity", "1"))
        }, this.onPageHide = function () {
            f()
        }
    }

    function a(t, e, n) {
        var i = e.find(".circle-out");

        function o() {
            i.removeClass("pdt-fadein-transition1"), i.css("opacity", "0")
        }
        o(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), i.css("opacity", "1"), n(function () {
                t.$emit("openingShowFinish")
            }, 1500)) : i.css("opacity", "1")
        }, this.onPageHide = function () {
            o()
        }
    }

    function l(t, e, n) {
        var i = e.find(".pdt1-trapezoid"),
            o = e.find(".pdt1-trapezoid-container"),
            s = i.parent().innerWidth() + "px solid rgba(255, 255, 255, 0.8)";

        function r() {
            i.removeClass("pdt-fadein-transition1"), o.removeClass("pdt-fadein-transition1"), i.css("opacity", "0"), o.css("opacity", "0")
        }
        i.css("border-left", s), r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), o.addClass("pdt-fadein-transition1"), i.css("opacity", "1"), o.css("opacity", "1"), n(function () {
                t.$emit("openingShowFinish")
            }, 1500)) : (i.css("opacity", "1"), o.css("opacity", "1"))
        }, this.onPageHide = function () {
            r()
        }
    }

    function c(t, e) {
        this.onPageShow = function () {
            t.$emit("openingShowFinish")
        }
    }

    function u(t, e, n) {
        var i = e.find(".pic"),
            o = e.find(".text");

        function s() {
            i.removeClass("opening-show-logo-transition"), o.removeClass("opening-show-logo-transition"), i.css({
                opacity: "0",
                transform: "translateY(-400px)"
            }), o.css({
                opacity: "0",
                transform: "translateY(400px)"
            })
        }
        s(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("opening-show-logo-transition"), o.addClass("opening-show-logo-transition"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateY(0)"
                }), o.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                t.$emit("openingShowFinish")
            }, 800)) : (i.css({
                opacity: "1",
                transform: "translateY(0)"
            }), o.css({
                opacity: "1",
                transform: "translateY(0)"
            }))
        }, this.onPageHide = function () {
            s()
        }
    }

    function d(t, e, n) {
        var i = e.find(".sell-link-container"),
            o = e.find(".sell-link-hint");

        function s() {
            i.css({
                opacity: "0",
                transform: "scale(0.2)"
            }), o.css({
                opacity: "0",
                transform: "scale(0.2)"
            })
        }
        s(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("backcover-transition"), o.addClass("backcover-transition"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "scale(1)"
                }), o.css({
                    opacity: "1",
                    transform: "scale(1)"
                })
            }, 0), n(function () {
                t.$emit("openingShowFinish")
            }, 300)) : (i.css({
                opacity: "1",
                transform: "scale(1)"
            }), o.css({
                opacity: "1",
                transform: "scale(1)"
            }))
        }, this.onPageHide = function () {
            s()
        }
    }

    function p(t, e, n) {
        var i = e.find(".text-container");

        function o() {
            i.css({
                opacity: "0",
                transform: "translateY(50px)"
            })
        }
        o(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                t.$emit("openingShowFinish")
            }, 1500)) : i.css({
                opacity: "1",
                transform: "translateY(0)"
            })
        }, this.onPageHide = function () {
            o()
        }
    }

    function f(t, e, n) {
        var i = e.find(".text-container");

        function o() {
            i.css({
                opacity: "0",
                transform: "translateY(50px)"
            })
        }
        o(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                t.$emit("openingShowFinish")
            }, 1500)) : i.css({
                opacity: "1",
                transform: "translateY(0)"
            })
        }, this.onPageHide = function () {
            o()
        }
    }

    function h(t, e, n) {
        var i = e.find(".text-container");

        function o() {
            i.css({
                opacity: "0",
                transform: "translateY(50px)"
            })
        }
        o(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                t.$emit("openingShowFinish")
            }, 1500)) : i.css({
                opacity: "1",
                transform: "translateY(0)"
            })
        }, this.onPageHide = function () {
            o()
        }
    }

    function m(t, e, n) {
        var i = e.find(".img-top"),
            o = e.find(".text-bottom");

        function s() {
            i.css({
                opacity: "0",
                transform: "translateY(50px)"
            }), o.css({
                opacity: "0",
                transform: "translateY(50px)"
            })
        }
        s(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), o.addClass("pdt-fadein-transition1"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 450), n(function () {
                t.$emit("openingShowFinish")
            }, 1950)) : (i.css({
                opacity: "1",
                transform: "translateY(0)"
            }), o.css({
                opacity: "1",
                transform: "translateY(0)"
            }))
        }, this.onPageHide = function () {
            s()
        }
    }

    function g(t, e, n) {
        var i = e.find(".img-bottom"),
            o = e.find(".text-top");

        function s() {
            o.css({
                opacity: "0",
                transform: "translateY(50px)"
            }), i.css({
                opacity: "0",
                transform: "translateY(50px)"
            })
        }
        s(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), o.addClass("pdt-fadein-transition1"), i.addClass("pdt-fadein-transition1"), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 450), n(function () {
                t.$emit("openingShowFinish")
            }, 1950)) : (o.css({
                opacity: "1",
                transform: "translateY(0)"
            }), i.css({
                opacity: "1",
                transform: "translateY(0)"
            }))
        }, this.onPageHide = function () {
            s()
        }
    }

    function v(t, e, n) {
        var i = e.find(".img-top"),
            o = e.find(".img-bottom");

        function s() {
            i.css({
                opacity: "0",
                transform: "translateY(50px)"
            }), o.css({
                opacity: "0",
                transform: "translateY(50px)"
            })
        }
        s(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), o.addClass("pdt-fadein-transition1"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 450), n(function () {
                t.$emit("openingShowFinish")
            }, 1950)) : (i.css({
                opacity: "1",
                transform: "translateY(0)"
            }), o.css({
                opacity: "1",
                transform: "translateY(0)"
            }))
        }, this.onPageHide = function () {
            s()
        }
    }
    pageHandlers["tpl-a-1/001-product"] = r, pageHandlers["tpl-a-1/001-product-v1"] = r, pageHandlers["tpl-a-1/001-product-v2"] = r, pageHandlers["tpl-a-1/002-three-images"] = a, pageHandlers["tpl-a-1/002-three-images-v1"] = a, pageHandlers["tpl-a-1/002-three-images2"] = a, pageHandlers["tpl-a-1/002-three-images1"] = function (t, e) {
        var n = e.find(".circle-out"),
            i = e.find(".circle-text0"),
            o = e.find(".circle-text1");

        function s() {
            n.removeClass("pdt-fadein-transition1"), i.removeClass("pdt-fadein-transition1"), o.removeClass("pdt-fadein-transition1"), n.css("opacity", "0"), i.css({
                opacity: "0",
                transform: "rotate3d(1, 0 , 0, 90deg)"
            }), o.css({
                opacity: "0",
                transform: "rotate3d(1, 0 , 0, 90deg)"
            })
        }
        s(), this.onPageShow = function (t) {
            t ? (n.addClass("pdt-fadein-transition1"), i.addClass("pdt-fadein-transition1"), o.addClass("pdt-fadein-transition1"), $timeout(function () {
                n.css({
                    opacity: "0.5",
                    top: "200px"
                })
            }, 800), $timeout(function () {
                n.css({
                    opacity: "1",
                    top: "0px"
                })
            }, 1600), $timeout(function () {
                n.css({
                    opacity: "1",
                    top: "200px"
                })
            }, 2100), $timeout(function () {
                i.css({
                    opacity: "1",
                    transform: "rotate3d(0, 0, 0, 1deg)"
                })
            }, 3200), $timeout(function () {
                o.css({
                    opacity: "1",
                    transform: "rotate3d(0, 0, 0, 1deg)"
                })
            }, 4e3)) : (n.css("opacity", "1"), i.css({
                opacity: "1",
                transform: "rotate3d(1, 0 , 0, 1deg)"
            }), o.css({
                opacity: "1",
                transform: "rotate3d(1, 0 , 0, 1deg)"
            }))
        }, this.onPageHide = function () {
            s()
        }
    }, pageHandlers["tpl-a-1/003-product1"] = l, pageHandlers["tpl-a-1/003-product1-v1"] = l, pageHandlers["tpl-a-1/004-product2"] = function (t, e) {
        this.onPageShow = function () {
            t.$emit("openingShowFinish")
        }
    }, pageHandlers["tpl-a-1/005-product4"] = function (t, e, n) {
        var i = e.find(".pdt4-trapezoid"),
            o = e.find(".pdt4-trapezoid-container"),
            s = e.find(".circle-div-left"),
            r = e.find(".circle-div-right"),
            a = i.parent().innerWidth() + "px solid rgba(255, 255, 255, 0.8)";

        function l() {
            i.removeClass("pdt-fadein-transition1"), o.removeClass("pdt-fadein-transition1"), s.removeClass("pdt-fadein-transition1"), r.removeClass("pdt-fadein-transition1"), i.css("opacity", "0"), o.css("opacity", "0"), s.css("opacity", "0"), r.css("opacity", "0")
        }
        i.css("border-left", a), l(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), o.addClass("pdt-fadein-transition1"), s.addClass("pdt-fadein-transition1"), r.addClass("pdt-fadein-transition1"), i.css("opacity", "1"), o.css("opacity", "1"), n(function () {
                s.css("opacity", "1")
            }, 750), n(function () {
                r.css("opacity", "1")
            }, 1500), n(function () {
                t.$emit("openingShowFinish")
            }, 3e3)) : (i.css("opacity", "1"), o.css("opacity", "1"), s.css("opacity", "1"), r.css("opacity", "1"))
        }, this.onPageHide = function () {
            l()
        }
    }, pageHandlers["tpl-a-1/006-product5"] = function (t, e, n) {
        var i = e.find(".circle-div-left"),
            o = e.find(".circle-div-right");

        function s() {
            i.removeClass("pdt-fadein-transition1"), o.removeClass("pdt-fadein-transition1"), i.css("opacity", "0"), o.css("opacity", "0")
        }
        s(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), o.addClass("pdt-fadein-transition1"), i.css("opacity", "1"), n(function () {
                o.css("opacity", "1")
            }, 750), n(function () {
                t.$emit("openingShowFinish")
            }, 2250)) : (i.css("opacity", "1"), o.css("opacity", "1"))
        }, this.onPageHide = function () {
            s()
        }
    }, pageHandlers["tpl-a-1/007-full-screen-img"] = function (t, e) {
        this.onPageShow = function () {
            t.$emit("openingShowFinish")
        }
    }, pageHandlers["tpl-a-1/008-faq"] = c, pageHandlers["tpl-a-1/008-faq-v1"] = c, pageHandlers["tpl-a-1/008-faq-v2"] = c, pageHandlers["tpl-a-1/009-beibeixiong1"] = function (t, e, n) {
        var i = e.find(".circle-big"),
            o = e.find(".circle-small");

        function s() {
            i.css({
                opacity: "0",
                transform: "translate3d(-200px, -200px, 0) scale(0.2)",
                height: i.outerWidth() + 4 + "px"
            }), o.css({
                opacity: "0",
                transform: "translate3d(100px, 100px, 0) scale(0.2)",
                height: o.outerWidth() + "px"
            })
        }
        s(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("general-transition"), o.addClass("general-transition"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translate3d(0, 0, 0) scale(1)"
                })
            }, 0), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translate3d(0, 0, 0) scale(1)"
                })
            }, 300), n(function () {
                t.$emit("openingShowFinish")
            }, 600)) : (i.css({
                opacity: "1",
                transform: "translate3d(0, 0, 0) scale(1)"
            }), o.css({
                opacity: "1",
                transform: "translate3d(0, 0, 0) scale(1)"
            }))
        }, this.onPageHide = function () {
            s()
        }
    }, pageHandlers["tpl-a-1/010-beibeixiong2"] = function (t, e, n) {
        var i = e.find(".circle-big"),
            o = e.find(".circle-small");

        function s() {
            i.css({
                opacity: "0",
                transform: "translate3d(200px, -200px, 0) scale(0.2)",
                height: i.outerWidth() + 4 + "px"
            }), o.css({
                opacity: "0",
                transform: "translate3d(-100px, 100px, 0) scale(0.2)",
                height: o.outerWidth() + "px"
            })
        }
        s(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("general-transition"), o.addClass("general-transition"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translate3d(0, 0, 0) scale(1)"
                })
            }, 0), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translate3d(0, 0, 0) scale(1)"
                })
            }, 300), n(function () {
                t.$emit("openingShowFinish")
            }, 600)) : (i.css({
                opacity: "1",
                transform: "translate3d(0, 0, 0) scale(1)"
            }), o.css({
                opacity: "1",
                transform: "translate3d(0, 0, 0) scale(1)"
            }))
        }, this.onPageHide = function () {
            s()
        }
    }, pageHandlers["tpl-a-1/012-beibeixiong4"] = u, pageHandlers["tpl-a-1/012-beibeixiong4-v1"] = u, pageHandlers["tpl-a-1/013-beibeixiong5"] = d, pageHandlers["tpl-a-1/013-beibeixiong5-v1"] = d, pageHandlers["tpl-a-1/013-beibeixiong5-v2"] = d, pageHandlers["tpl-a-1/014-maka1"] = p, pageHandlers["tpl-a-1/014-floatup1"] = p, pageHandlers["tpl-a-1/014-floatup1-v1"] = p, pageHandlers["tpl-a-1/015-maka2"] = f, pageHandlers["tpl-a-1/015-floatup2"] = f, pageHandlers["tpl-a-1/015-floatup2-v1"] = f, pageHandlers["tpl-a-1/016-maka3"] = h, pageHandlers["tpl-a-1/016-floatup3"] = h, pageHandlers["tpl-a-1/016-floatup3-v1"] = h, pageHandlers["tpl-a-1/017-maka4"] = m, pageHandlers["tpl-a-1/017-floatup4"] = m, pageHandlers["tpl-a-1/017-floatup4-v1"] = m, pageHandlers["tpl-a-1/018-maka5"] = g, pageHandlers["tpl-a-1/018-floatup5"] = g, pageHandlers["tpl-a-1/018-floatup5-v1"] = g, pageHandlers["tpl-a-1/019-maka6"] = v, pageHandlers["tpl-a-1/019-floatup6"] = v;
    var y = !1,
        b = !1;

    function w(t, n, i) {
        e.requestAnimFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t) {
            e.$timeout(t, 1e3 / 60)
        };
        var o = n.find(".opening-show-canvas"),
            s = n.find(".opening-show-canvas")[0],
            r = s.getContext("2d");
        s.width = n.innerWidth(), s.height = n.innerHeight();
        var a, l, c = {
                basic: {
                    emission_rate: 50,
                    min_life: .1,
                    life_range: 2,
                    min_angle: 0,
                    angle_range: 360,
                    min_speed: 50,
                    speed_range: 15,
                    min_size: 3,
                    size_range: 2,
                    start_colours: [
                        [31, 255, 215, .6]
                    ],
                    end_colours: [
                        [31, 255, 215, 0]
                    ],
                    src_selector: ".left-ball"
                }
            },
            u = {
                basic: {
                    emission_rate: 50,
                    min_life: .1,
                    life_range: 2,
                    min_angle: 0,
                    angle_range: 360,
                    min_speed: 50,
                    speed_range: 15,
                    min_size: 3,
                    size_range: 2,
                    start_colours: [
                        [232, 77, 255, .6]
                    ],
                    end_colours: [
                        [232, 77, 255, 0]
                    ],
                    src_selector: ".right-ball"
                }
            },
            d = function (t, e, n, i, o, s, r, a) {
                this.pos = {
                    x: t || 0,
                    y: e || 0
                }, this.speed = i || 5, this.life = o || 1, this.size = s || 2, this.lived = 0;
                var l = n * Math.PI / 180;
                this.vel = {
                    x: Math.cos(l) * i,
                    y: -Math.sin(l) * i
                }, this.colour = r, this.colour_step = a
            },
            p = function (t, e, n) {
                this.pos = {
                    x: t,
                    y: e
                }, this.settings = n, this.emission_delay = 1e3 / n.emission_rate, this.last_update = 0, this.last_emission = 0, this.particles = []
            };

        function f() {
            b || (r.clearRect(0, 0, s.width, s.height), a.update(), l.update(), requestAnimFrame(f))
        }
        p.prototype.update = function () {
            if (this.last_update) {
                var t = n.find(this.settings.src_selector),
                    e = Date.now(),
                    i = e - this.last_update;
                if (this.last_emission += i, this.last_update = e, this.last_emission > this.emission_delay) {
                    var o = Math.floor(this.last_emission / this.emission_delay);
                    for (this.last_emission -= o * this.emission_delay; o--;) {
                        var s = this.settings.start_colours[Math.floor(this.settings.start_colours.length * Math.random())],
                            a = this.settings.end_colours[Math.floor(this.settings.end_colours.length * Math.random())],
                            l = this.settings.min_life + Math.random() * this.settings.life_range,
                            c = [(a[0] - s[0]) / l, (a[1] - s[1]) / l, (a[2] - s[2]) / l, (a[3] - s[3]) / l];
                        if (!y) {
                            var u = t.position().left,
                                p = t.position().top;
                            this.particles.push(new d(u, p, this.settings.min_angle + Math.random() * this.settings.angle_range, this.settings.min_speed + Math.random() * this.settings.speed_range, l, this.settings.min_size + Math.random() * this.settings.size_range, s.slice(), c))
                        }
                    }
                }
                i /= 1e3;
                for (o = this.particles.length; o--;) {
                    var f = this.particles[o];
                    if (f.dead) this.particles.splice(o, 1);
                    else if (f.lived += i, f.lived >= f.life) f.dead = !0;
                    else {
                        f.pos.x += f.vel.x * i, f.pos.y += f.vel.y * i, f.colour[0] += f.colour_step[0] * i, f.colour[1] += f.colour_step[1] * i, f.colour[2] += f.colour_step[2] * i, f.colour[3] += f.colour_step[3] * i, r.fillStyle = "rgba(" + Math.round(f.colour[0]) + "," + Math.round(f.colour[1]) + "," + Math.round(f.colour[2]) + "," + f.colour[3] + ")";
                        u = this.pos.x + f.pos.x, p = this.pos.y + f.pos.y;
                        r.beginPath(), r.arc(u, p, f.size, 0, 2 * Math.PI), r.fill()
                    }
                }
            } else this.last_update = Date.now()
        };
        var h = n.find(".left-ball"),
            m = n.find(".right-ball"),
            g = n.find(".bg-container"),
            v = n.find(".cover-logo"),
            w = n.find(".cover-slogan");

        function x() {
            g.removeClass("smooth-rebound-transition"), v.removeClass("logo-animate"), w.removeClass("slogan-animate"), y = !0, b = !0, g.css("opacity", "0"), o.show(), v.css({
                opacity: "0",
                transform: "scale(3)"
            }), w.css({
                opacity: "0",
                transform: "translateY(200px) scale(2)"
            })
        }
        x(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), h.css("opacity", "1"), m.css("opacity", "1"), h.addClass("glow-animate"), m.addClass("glow-animate"), g.addClass("smooth-rebound-transition"), y = !1, b = !1, i(function () {
                h.removeClass("glow-animate"), m.removeClass("glow-animate"), h.addClass("left-animate"), m.addClass("right-animate"), a = new p(0, 0, c.basic), l = new p(0, 0, u.basic), f()
            }, 1e3), i(function () {
                y = !0, h.css("opacity", "0"), m.css("opacity", "0"), h.removeClass("left-animate"), m.removeClass("right-animate")
            }, 4e3), i(function () {
                b = !0, o.hide(), t.$emit("openingShowFinish")
            }, 6e3), i(function () {
                v.addClass("logo-animate"), v.css({
                    opacity: "1",
                    transform: "scale(1)"
                })
            }, 3e3), i(function () {
                g.css({
                    opacity: "1"
                })
            }, 3500), i(function () {
                w.addClass("slogan-animate"), w.css({
                    opacity: "1",
                    transform: "translateY(0) scale(1)"
                })
            }, 3500)) : (h.css("opacity", "0"), m.css("opacity", "0"), v.css({
                opacity: "1",
                transform: "scale(1)"
            }), g.css({
                opacity: "1"
            }), o.hide(), w.css({
                opacity: "1",
                transform: "translateY(0) scale(1)"
            }))
        }, this.onPageHide = function () {
            x()
        }
    }

    function x(t, e, n) {
        var i = e.find(".page1-text-circle"),
            o = e.find(".page1-text1"),
            s = e.find(".page1-text2"),
            r = e.find(".page1-text3");

        function a() {
            i.removeClass("smooth-rebound-transition"), o.removeClass("smooth-rebound-transition"), s.removeClass("strong-rebound-transition"), r.removeClass("strong-rebound-transition"), i.css({
                opacity: "0",
                width: i.innerHeight() + "px",
                transform: "translateX(-300px) scale(0.2)"
            }), o.css({
                opacity: "0",
                transform: "translateX(-300px)"
            }), s.css({
                opacity: "0",
                transform: "rotate3d(1, 0 , 0, 90deg)"
            }), r.css({
                opacity: "0",
                transform: "rotate3d(1, 0, 0, 90deg)"
            })
        }
        a(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("smooth-rebound-transition"), o.addClass("smooth-rebound-transition"), s.addClass("strong-rebound-transition"), r.addClass("strong-rebound-transition"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateX(0) scale(1)"
                })
            }, 0), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translateX(0)"
                })
            }, 800), n(function () {
                s.css({
                    opacity: "1",
                    transform: "rotate3d(0, 0, 0, 1deg)"
                })
            }, 1600), n(function () {
                r.css({
                    opacity: "1",
                    transform: "rotate3d(0, 0, 0, 1deg)"
                })
            }, 2400), n(function () {
                t.$emit("openingShowFinish")
            }, 3200)) : (i.css({
                opacity: "1",
                transform: "translateX(0) scale(1)"
            }), o.css({
                opacity: "1",
                transform: "translateX(0)"
            }), s.css({
                opacity: "1",
                transform: "rotate3d(0, 0, 0, 1deg)"
            }), r.css({
                opacity: "1",
                transform: "rotate3d(0, 0, 0, 1deg)"
            }))
        }, this.onPageHide = function () {
            a()
        }
    }

    function C(t, e, n) {
        var i = e.find(".moving-brush"),
            o = e.find(".brush-bg"),
            s = e.find(".brush-bg-container"),
            r = e.find(".brush-circle"),
            a = e.find(".brush"),
            l = e.find(".brush-title"),
            c = e.find(".text-bottom");

        function u() {
            o.removeClass("quick-ease-in-out-transition"), s.removeClass("quick-ease-in-out-transition"), i.removeClass("quick-ease-in-out-transition"), r.removeClass("quick-smooth-rebound-transition"), a.removeClass("quick-smooth-rebound-transition"), l.removeClass("quick-smooth-rebound-transition"), c.removeClass("quick-ease-in-out-transition"), o.css("transform", "translateY(50px)"), s.css("width", "0"), i.css({
                opacity: "0",
                transform: "translateX(0) translateY(100px)"
            }), i.show(), r.css({
                opacity: "0",
                transform: "translateX(300px)"
            }), a.css({
                opacity: "0",
                transform: "translateX(300px)"
            }), l.css({
                opacity: "0",
                transform: "translateX(300px)"
            }), c.css({
                opacity: "0",
                transform: "translateY(50px)"
            })
        }
        var d = 800,
            p = d / 2;
        u(), this.onPageShow = function (u) {
            u ? (t.$emit("openingShowStart"), o.addClass("quick-ease-in-out-transition"), s.addClass("quick-ease-in-out-transition"), i.addClass("quick-ease-in-out-transition"), r.addClass("quick-smooth-rebound-transition"), a.addClass("quick-smooth-rebound-transition"), l.addClass("quick-smooth-rebound-transition"), c.addClass("quick-ease-in-out-transition"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                s.css("width", "100%"), i.css({
                    transform: "translateX(" + e.innerWidth() + "px)"
                })
            }, d), n(function () {
                r.css({
                    opacity: "1",
                    transform: "translateX(0)"
                }), i.hide()
            }, 2 * d), n(function () {
                a.css({
                    opacity: "1",
                    transform: "translateX(0)"
                })
            }, 2 * d + p), n(function () {
                l.css({
                    opacity: "1",
                    transform: "translateX(0)"
                })
            }, 2 * d + 2 * p), n(function () {
                o.css("transform", "translateY(0)")
            }, 3 * d + 2 * p), n(function () {
                c.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 3 * d + 3 * p), n(function () {
                t.$emit("openingShowFinish")
            }, 4 * d + 3 * p)) : (o.css("transform", "translateY(0)"), s.css("width", "100%"), i.hide(), r.css({
                opacity: "1",
                transform: "translateX(0)"
            }), a.css({
                opacity: "1",
                transform: "translateX(0)"
            }), l.css({
                opacity: "1",
                transform: "translateX(0)"
            }), c.css({
                opacity: "1",
                transform: "translateY(0)"
            }))
        }, this.onPageHide = function () {
            u()
        }
    }

    function S(t, e, n) {
        var i = e.find(".logo"),
            o = e.find(".text-bottom");

        function s() {
            i.removeClass("slow-ease-in-out-transition"), o.removeClass("slow-ease-in-out-transition"), i.css({
                opacity: "0",
                transform: "scale(5) translateY(20px)"
            }), o.css({
                opacity: "0",
                transform: "translateY(50px)"
            })
        }
        s(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("slow-ease-in-out-transition"), o.addClass("slow-ease-in-out-transition"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "scale(1) translateY(0)"
                })
            }, 0), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 1e3), n(function () {
                t.$emit("openingShowFinish")
            }, 3e3)) : (i.css({
                opacity: "1",
                transform: "scale(1) translateY(0)"
            }), o.css({
                opacity: "1",
                transform: "translateY(0)"
            }))
        }, this.onPageHide = function () {
            s()
        }
    }
    pageHandlers["tpl-a-1/020-showme1"] = w, pageHandlers["tpl-a-1/020-showme1-v1"] = w, pageHandlers["tpl-a-1/021-showme2"] = x, pageHandlers["tpl-a-1/021-showme2-v1"] = x, pageHandlers["tpl-a-1/022-showme3"] = C, pageHandlers["tpl-a-1/022-showme3-v1"] = C, pageHandlers["tpl-a-1/023-showme4"] = S, pageHandlers["tpl-a-1/023-showme4-v1"] = S;
    var E = !1;

    function T(t, e, n) {
        var i = e.find(".bg-img-top"),
            o = e.find(".content-top-h2"),
            s = e.find(".content-hr"),
            r = e.find(".content-p-footer");

        function a() {
            i.css("opacity", "0"), s.css({
                opacity: "0",
                transform: "translateX(-300px)"
            }), o.css("opacity", "0"), r.css("opacity", "0")
        }
        a(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), o.addClass("pdt-fadein-transition1"), s.addClass("pdt-fadein-transition1"), r.addClass("pdt-fadein-transition1"), n(function () {
                i.css("opacity", "1")
            }, 0), n(function () {
                o.css("opacity", "1")
            }, 500), n(function () {
                s.css({
                    opacity: "1",
                    transform: "translateX(0)"
                })
            }, 750), n(function () {
                r.css("opacity", "1")
            }, 1500), n(function () {
                i.removeClass("pdt-fadein-transition1"), o.removeClass("pdt-fadein-transition1"), s.removeClass("pdt-fadein-transition1"), r.removeClass("pdt-fadein-transition1"), t.$emit("openingShowFinish")
            }, 2800)) : (i.css("opacity", "1"), o.css("opacity", "1"), s.css({
                opacity: "1",
                transform: "translateX(0)"
            }), r.css("opacity", "1"))
        }, this.onPageHide = function () {
            a()
        }
    }

    function k(t, e, n) {
        var i = e.find(".content-top-h2"),
            o = e.find(".content-hr"),
            s = e.find(".content-p-footer");

        function r() {
            o.css({
                opacity: "0",
                transform: "translateY(-100px)"
            }), i.css({
                opacity: "0",
                transform: "translateY(-100px)"
            }), s.css({
                opacity: "0",
                transform: "translateY(-100px)"
            })
        }
        r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), o.addClass("pdt-fadein-transition1"), s.addClass("pdt-fadein-transition1"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 500), n(function () {
                s.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 750), n(function () {
                i.removeClass("pdt-fadein-transition1"), o.removeClass("pdt-fadein-transition1"), s.removeClass("pdt-fadein-transition1"), t.$emit("openingShowFinish")
            }, 2800)) : (i.css({
                opacity: "1",
                transform: "translateY(0)"
            }), o.css({
                opacity: "1",
                transform: "translateY(0)"
            }), s.css({
                opacity: "1",
                transform: "translateY(0)"
            }))
        }, this.onPageHide = function () {
            r()
        }
    }

    function P(t, e, n) {
        var i = e.find(".img-top"),
            o = e.find(".content-h2"),
            s = e.find(".content-p"),
            r = e.find(".img-bottom");

        function a() {
            i.css({
                opacity: "0",
                transform: "translateX(100px)"
            }), o.css({
                opacity: "0",
                transform: "translateX(-100px)"
            }), s.css({
                opacity: "0",
                transform: "translateX(-100px)"
            })
        }
        a(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), o.addClass("pdt-fadein-transition1"), s.addClass("pdt-fadein-transition1"), i.addClass("pdt-fadein-transition1"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateX(0)"
                })
            }, 0), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translateX(0)"
                }), s.css({
                    opacity: "1",
                    transform: "translateX(0)"
                })
            }, 375), n(function () {
                o.removeClass("pdt-fadein-transition1"), s.removeClass("pdt-fadein-transition1"), i.removeClass("pdt-fadein-transition1"), r.removeClass("pdt-fadein-transition1"), t.$emit("openingShowFinish")
            }, 1900)) : (i.css({
                opacity: "1",
                transform: "translateX(0)"
            }), o.css({
                opacity: "1",
                transform: "translateX(0)"
            }), s.css({
                opacity: "1",
                transform: "translateX(0)"
            }))
        }, this.onPageHide = function () {
            a()
        }
    }

    function _(t, e, n) {
        var i = e.find(".img-top-logo"),
            o = e.find(".logo-text-h2"),
            s = e.find(".logo-text-p");

        function r() {
            i.css({
                opacity: "0",
                transform: "translateX(-100px)"
            }), o.css({
                opacity: "0",
                transform: "translateX(200px)"
            }), s.css({
                opacity: "0",
                transform: "translateX(-100px)"
            })
        }
        r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), o.addClass("pdt-fadein-transition1"), s.addClass("pdt-fadein-transition1"), i.addClass("pdt-fadein-transition1"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateX(0)"
                })
            }, 0), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translateX(0)"
                })
            }, 500), n(function () {
                s.css({
                    opacity: "1",
                    transform: "translateX(0)"
                })
            }, 850), n(function () {
                o.removeClass("pdt-fadein-transition1"), s.removeClass("pdt-fadein-transition1"), i.removeClass("pdt-fadein-transition1"), t.$emit("openingShowFinish")
            }, 2900)) : (i.css({
                opacity: "1",
                transform: "translateX(0)"
            }), o.css({
                opacity: "1",
                transform: "translateX(0)"
            }), s.css({
                opacity: "1",
                transform: "translateX(0)"
            }))
        }, this.onPageHide = function () {
            r()
        }
    }

    function A(t, e, n) {
        var i = e.find(".text-h2-top"),
            o = e.find(".text-right"),
            s = e.find(".text-img-left"),
            r = e.find(".footer-img");

        function a() {
            i.css({
                opacity: "0",
                transform: "translateX(100px)"
            }), s.css({
                opacity: "0",
                transform: "translateX(-100px)",
                width: s.innerHeight() + "px"
            }), o.css({
                opacity: "0",
                transform: "translateX(300px)"
            }), r.css({
                opacity: "0",
                transform: "translateY(300px)"
            })
        }
        a(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), o.addClass("pdt-fadein-transition1"), s.addClass("pdt-fadein-transition1"), r.addClass("pdt-fadein-transition1"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateX(0)"
                }), s.css({
                    opacity: "1",
                    transform: "translateX(0)"
                }), o.css({
                    opacity: "1",
                    transform: "translateX(0)"
                }), r.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                i.removeClass("pdt-fadein-transition1"), o.removeClass("pdt-fadein-transition1"), s.removeClass("pdt-fadein-transition1"), r.removeClass("pdt-fadein-transition1"), t.$emit("openingShowFinish")
            }, 1550)) : (i.css({
                opacity: "1",
                transform: "translateX(0)"
            }), s.css({
                opacity: "1",
                transform: "translateX(0)"
            }), o.css({
                opacity: "1",
                transform: "translateX(0)"
            }), r.css({
                opacity: "1",
                transform: "translateY(0)"
            }))
        }, this.onPageHide = function () {
            a()
        }
    }

    function $(t, e, n) {
        var i = e.find(".bg-top-box"),
            o = e.find(".bg-top-box-content"),
            s = e.find(".text-h2"),
            r = e.find(".middle-hr"),
            a = e.find(".footer-p");

        function l() {
            i.css({
                opacity: "1",
                height: i.innerWidth() + "px"
            }), o.css({
                opacity: "0",
                transform: "scale(0.01) translate(0,0)"
            }), s.css("opacity", "0"), r.css({
                opacity: "0",
                transform: "translateX(-200px)"
            }), a.css({
                opacity: "0",
                transform: "translateY(200px)"
            })
        }
        l(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), o.addClass("pdt-fadein-transition3"), s.addClass("pdt-fadein-transition1"), r.addClass("pdt-fadein-transition1"), a.addClass("pdt-fadein-transition1"), n(function () {
                o.css({
                    opacity: "1",
                    transform: "scale(1) translate(0,0) "
                })
            }, 0), n(function () {
                s.css("opacity", "1")
            }, 750), n(function () {
                r.css({
                    opacity: "1",
                    transform: "translateX(0)"
                }), a.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 1050), n(function () {
                t.$emit("openingShowFinish"), o.removeClass("pdt-fadein-transition3"), s.removeClass("pdt-fadein-transition1"), r.removeClass("pdt-fadein-transition1"), a.removeClass("pdt-fadein-transition1")
            }, 3350)) : (i.css({
                opacity: "1",
                width: i.innerHeight() + "px"
            }), o.css({
                opacity: "1",
                transform: "scale(1) translate(0,0) "
            }), s.css({
                opacity: "1"
            }), r.css({
                opacity: "1",
                transform: "translateX(0)"
            }), a.css({
                opacity: "1",
                transform: "translateY(0)"
            }))
        }, this.onPageHide = function () {
            l()
        }
    }

    function M(t, e, n) {
        var i = e.find(".pdt1-trapezoid-container"),
            o = e.find(".pdt1-trapezoid-text-left"),
            s = e.find(".pdt1-trapezoid-text-right");

        function r() {
            i.removeClass("pdt-fadein-transition1"), o.removeClass("pdt-fadein-transition1"), s.removeClass("pdt-fadein-transition1"), o.css({
                opacity: "0",
                transform: "translateY(150px)"
            }), s.css({
                opacity: "0",
                transform: "translateY(150px)"
            })
        }
        r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), o.addClass("pdt-fadein-transition1"), s.addClass("pdt-fadein-transition1"), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                s.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 1500), n(function () {
                t.$emit("openingShowFinish")
            }, 3050)) : (o.css({
                opacity: "1",
                transform: "translateY(0)"
            }), s.css({
                opacity: "1",
                transform: "translateY(0)"
            }))
        }, this.onPageHide = function () {
            r()
        }
    }

    function H(t, e, n) {
        var i = e.find(".text"),
            s = e.find(".swiper-container"),
            r = e.find(".pagination"),
            a = null,
            l = 0,
            c = 0;

        function u() {
            i.removeClass("opening-show-logo-transition"), i.css({
                opacity: "0",
                transform: "translateY(400px)"
            })
        }
        t.onDragStart = function (t) {
            t.stopPropagation(), t.gesture ? (l = t.gesture.deltaX, c = t.gesture.deltaY) : (l = 0, c = 0)
        }, t.onDrag = function (t) {
            t.stopPropagation()
        }, t.onDragEnd = function (e) {
            e.stopPropagation();
            var n = e.gesture.deltaX - l,
                i = e.gesture.deltaY - c;
            l = 0, c = 0, Math.abs(n) < Math.abs(i) && Math.abs(i) > o && (i > 0 ? t.$emit("toPrevPage") : t.$emit("toNextPage"))
        }, u(), this.onPageShow = function (e) {
            e ? (null == a ? a = new Swiper(s[0], {
                pagination: r[0],
                paginationClickable: !0,
                autoResize: !1,
                loop: !0,
                autoplay: 3e3,
                autoplayDisableOnInteraction: !1
            }) : a.reInit(), t.$emit("openingShowStart"), i.addClass("opening-show-logo-transition"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                t.$emit("openingShowFinish")
            }, 800)) : (null == a ? a = new Swiper(s[0], {
                pagination: r[0],
                paginationClickable: !0,
                autoResize: !1
            }) : a.reInit(), i.css({
                opacity: "1",
                transform: "translateY(0)"
            }))
        }, this.onPageHide = function () {
            u()
        }
    }

    function L(t, e, n) {
        var i = e.find(".text-top"),
            o = e.find(".text-middle"),
            s = e.find(".text-bottom");

        function r() {
            o.removeClass("long-animate"), i.css({
                opacity: "0",
                transform: "scale(0.01) translate(0,0) "
            }), o.css({
                opacity: "0"
            }), s.css("opacity", "0")
        }
        r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("opening-show-circle-transition"), o.addClass("long-animate"), s.addClass("opening-show-circle-transition"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "scale(1) translate(0,0) "
                })
            }, 0), n(function () {
                s.css("opacity", "1")
            }, 1e3), n(function () {
                i.removeClass(".opening-show-circle-transition"), t.$emit("openingShowFinish")
            }, 2500)) : (i.css({
                opacity: "1",
                transform: "scale(1) translate(0,0) "
            }), o.css({
                opacity: "1"
            }), s.css("opacity", "1"))
        }, this.onPageHide = function () {
            r()
        }
    }

    function D(t, e, n) {
        var i = e.find(".text-one"),
            o = e.find(".text-two"),
            s = e.find(".text-three"),
            r = e.find(".text-line-a"),
            a = e.find(".text-line-b"),
            l = e.find(".img-one"),
            c = e.find(".img-two"),
            u = e.find(".img-three");

        function d() {
            i.css({
                opacity: "0",
                transform: "translateX(0px)"
            }), o.css({
                opacity: "0",
                transform: "translateX(0px)"
            }), s.css({
                opacity: "0",
                transform: "translateX(0px)"
            }), r.css({
                opacity: "0",
                transform: "translateX(0px)"
            }), a.css({
                opacity: "0",
                transform: "translateX(0px)"
            }), l.css({
                opacity: "0",
                transform: "translateY(300px)"
            }), c.css({
                opacity: "0",
                transform: "translateY(300px)"
            }), u.css({
                opacity: "0",
                transform: "translateY(300px)"
            }), i.removeClass("b14-text-animate"), r.removeClass("b14-text-animate"), o.removeClass("b14-text-animate"), a.removeClass("b14-text-animate"), s.removeClass("b14-text-animate"), l.removeClass("b14-img-out-transition"), c.removeClass("b14-img-out-transition "), u.removeClass("b14-img-out-transition ")
        }
        d(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("b14-text-animate"), r.addClass("b14-text-animate"), o.addClass("b14-text-animate"), a.addClass("b14-text-animate"), s.addClass("b14-text-animate"), l.addClass("b14-img-out-transition "), c.addClass("b14-img-out-transition"), u.addClass("b14-img-out-transition"), n(function () {
                l.css({
                    opacity: "1",
                    transform: "translateY(0px)"
                })
            }, 800 / 3), n(function () {
                c.css({
                    opacity: "1",
                    transform: "translateY(0px)"
                })
            }, 800), n(function () {
                u.css({
                    opacity: "1",
                    transform: "translateY(0px)"
                })
            }, 1200), n(function () {
                t.$emit("openingShowFinish")
            }, 2e3)) : (i.css({
                opacity: "1",
                transform: "translateX(0px)"
            }), o.css({
                opacity: "1",
                transform: "translateX(0px)"
            }), s.css({
                opacity: "1",
                transform: "translateX(0px)"
            }), r.css({
                opacity: "1",
                transform: "translateX(0px)"
            }), a.css({
                opacity: "1",
                transform: "translateX(0px)"
            }), l.css({
                opacity: "1",
                transform: "translateY(0px)"
            }), c.css({
                opacity: "1",
                transform: "translateY(0px)"
            }), u.css({
                opacity: "1",
                transform: "translateY(0px)"
            }))
        }, this.onPageHide = function () {
            d()
        }
    }

    function O(t, e, n) {
        var i = e.find(".bdc-top"),
            o = e.find(".bdc-top-content"),
            s = e.find(".contered"),
            r = e.find(".bulb-box"),
            a = e.find(".bulb"),
            l = e.find(".bulb-content");

        function c() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            }), a.css({
                opacity: "0"
            }), l.css({
                opacity: "0"
            }), r.css({
                opacity: "0"
            }), l.removeClass("b15-bulbBg1"), a.removeClass("b15-bulb"), s.removeClass("b15-text0"), i.removeClass("b15-bdcTop"), o.removeClass("b15-bdcCotent"), r.removeClass("pdt-fadein-transition1")
        }
        c(), this.onPageShow = function (e) {
            e ? (r.addClass("pdt-fadein-transition1"), t.$emit("openingShowStart"), a.addClass("b15-bulb"), l.addClass("b15-bulbBg1"), s.addClass("b15-text0"), i.addClass("b15-bdcTop"), o.addClass("b15-bdcCotent"), n(function () {
                r.css({
                    opacity: "1"
                })
            }, 800), n(function () {
                t.$emit("openingShowFinish")
            }, 3550)) : (r.css({
                opacity: "1"
            }), l.css({
                opacity: "1"
            }), a.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }), i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            c()
        }
    }

    function I(t, e, n) {
        var i = e.find(".r-img"),
            o = e.find(".l-img"),
            s = e.find(".b-bg"),
            r = e.find(".b-content-box");

        function a() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            }), r.css({
                opacity: "0"
            }), i.removeClass("b16-rimg"), o.removeClass("b16-limg"), s.removeClass("b16-b-bg"), r.removeClass("b16-b-box")
        }
        a(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("b16-rimg"), o.addClass("b16-limg"), s.addClass("b16-b-bg"), r.addClass("b16-b-box"), n(function () {
                t.$emit("openingShowFinish")
            }, 2650)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }), r.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            a()
        }
    }

    function N(t, e, n) {
        var i = e.find(".round-a"),
            o = e.find(".round-b"),
            s = e.find(".text-middle"),
            r = e.find(".content-top"),
            a = e.find(".content-bottom");

        function l() {
            s.css({
                opacity: "0"
            }), r.css({
                opacity: "0",
                transform: "translateY(300px) scale(0.1)"
            }), a.css({
                opacity: "0",
                transform: "translateY(300px) scale(0.1)"
            }), i.css({
                opacity: "0",
                transform: "trabslateY(300px) scale(1)"
            }), o.css({
                opacity: "0",
                transform: "trabslateY(300px) scale(1)"
            }), i.removeClass("b17-roundA"), o.removeClass("b17-roundB"), s.removeClass("b17-hands")
        }
        l(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), r.addClass("pdt-fadein-transitionb-17"), a.addClass("pdt-fadein-transitionb-17"), s.addClass("b17-hands"), i.addClass("b17-roundA"), o.addClass("b17-roundB"), n(function () {
                r.css({
                    opacity: "1",
                    transform: "translateY(0px) scale(1)"
                })
            }, 1780), n(function () {
                a.css({
                    opacity: "1",
                    transform: "translateY(0px) scale(1)"
                })
            }, 2280), n(function () {
                t.$emit("openingShowFinish"), r.removeClass("pdt-fadein-transitionb-17"), a.removeClass("pdt-fadein-transitionb-17")
            }, 2780)) : (s.css({
                opacity: "1"
            }), r.css({
                opacity: "1",
                transform: "translateY(0px) scale(1)"
            }), a.css({
                opacity: "1",
                transform: "translateY(0px) scale(1)"
            }), i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }))
        }, this.onPageHide = function () {
            l()
        }
    }

    function z(t, e, n) {
        var i = e.find(".round"),
            o = e.find(".text-middle"),
            s = e.find(".content-top"),
            r = e.find(".content-bottom");

        function a() {
            o.css({
                opacity: "0"
            }), s.css({
                opacity: "0",
                transform: "translateY(300px) scale(0.1)"
            }), r.css({
                opacity: "0",
                transform: "translateY(300px) scale(0.1)"
            }), i.css({
                opacity: "0"
            }), o.removeClass("b19-hands"), i.removeClass("b19-round")
        }
        a(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), o.addClass("b18-hands"), i.addClass("b18-round"), s.addClass("pdt-fadein-transitionb-17"), r.addClass("pdt-fadein-transitionb-17"), n(function () {
                s.css({
                    opacity: "1",
                    transform: "translateY(0px) scale(1)"
                })
            }, 2380), n(function () {
                r.css({
                    opacity: "1",
                    transform: "translateY(0px) scale(1)"
                })
            }, 2755), n(function () {
                t.$emit("openingShowFinish"), s.removeClass("pdt-fadein-transitionb-17"), r.removeClass("pdt-fadein-transitionb-17")
            }, 3505)) : (o.css({
                opacity: "1"
            }), s.css({
                opacity: "1",
                transform: "translateY(0px) scale(1)"
            }), r.css({
                opacity: "1",
                transform: "translateY(0px) scale(1)"
            }), i.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            a()
        }
    }

    function F(t, e, n) {
        var i = e.find(".big-round-blue"),
            o = e.find(".big-round-l_blue"),
            s = e.find(".big-round-green"),
            r = e.find(".big-round-white"),
            a = e.find(".big-round-yellow"),
            l = e.find(".small-round-blue"),
            c = e.find(".small-round-green"),
            u = e.find(".small-round-white"),
            d = e.find(".small-round-yellow"),
            p = e.find(".round"),
            f = e.find(".text-middle"),
            h = e.find(".content-top"),
            m = e.find(".content-bottom");

        function g() {
            i.css({
                opacity: "0",
                "transform-origin": "70px 70px 0",
                transform: "rotate(0deg)"
            }), o.css({
                opacity: "0",
                "transform-origin": "60px 60px 0",
                transform: "rotate(0deg)"
            }), s.css({
                opacity: "0",
                "transform-origin": "52px 52px 0",
                transform: "rotate(0deg)"
            }), r.css({
                opacity: "0",
                "transform-origin": "46px 46px 0",
                transform: "rotate(0deg)"
            }), a.css({
                opacity: "0",
                "transform-origin": "40px 40px 0",
                transform: "rotate(0deg)"
            }), l.css({
                opacity: "0",
                "transform-origin": "30px 30px 0",
                transform: "rotate(0deg)"
            }), c.css({
                opacity: "0",
                "transform-origin": "20px 20px 0",
                transform: "rotate(0deg)"
            }), u.css({
                opacity: "0",
                "transform-origin": "15px 15px 0",
                transform: "rotate(0deg)"
            }), d.css({
                opacity: "0",
                "transform-origin": "8px 8px 0",
                transform: "rotate(0deg)"
            }), f.css({
                opacity: "0"
            }), h.css({
                opacity: "0",
                transform: "translateY(300px) scale(0.1)"
            }), m.css({
                opacity: "0",
                transform: "translateY(300px) scale(0.1)"
            }), p.css({
                opacity: "0"
            }), f.removeClass("b19-hands"), p.removeClass("b19-round")
        }
        g(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("general-transition-b191"), o.addClass("general-transition-b191"), s.addClass("general-transition-b191"), r.addClass("general-transition-b191"), a.addClass("general-transition-b191"), l.addClass("general-transition-b191"), c.addClass("general-transition-b191"), u.addClass("general-transition-b191"), d.addClass("general-transition-b191"), h.addClass("pdt-fadein-transitionb-17"), m.addClass("pdt-fadein-transitionb-17"), n(function () {
                i.css({
                    opacity: "1",
                    "transform-origin": "70px 70px 0",
                    transform: "rotate(360deg)"
                })
            }, 0), n(function () {
                o.css({
                    opacity: "1",
                    "transform-origin": "60px 60px 0",
                    transform: "rotate(-360deg)"
                })
            }, 1e3 / 6), n(function () {
                s.css({
                    opacity: "1",
                    "transform-origin": "52px 52px 0",
                    transform: "rotate(360deg)"
                })
            }, 200), n(function () {
                r.css({
                    opacity: "1",
                    "transform-origin": "46px 46px 0",
                    transform: "rotate(-360deg)"
                })
            }, 250), n(function () {
                a.css({
                    opacity: "1",
                    "transform-origin": "40px 40px 0",
                    transform: "rotate(360deg)"
                })
            }, 1e3 / 3), n(function () {
                l.css({
                    opacity: "1",
                    "transform-origin": "30px 30px 0",
                    transform: "rotate(-360deg)"
                })
            }, 500), n(function () {
                c.css({
                    opacity: "1",
                    "transform-origin": "20px 20px 0",
                    transform: "rotate(360deg)"
                })
            }, 1e3), n(function () {
                u.css({
                    opacity: "1",
                    "transform-origin": "15px 15px 0",
                    transform: "rotate(-360deg)"
                })
            }, 1e3), n(function () {
                d.css({
                    opacity: "1",
                    "transform-origin": "8px 8px 0",
                    transform: "rotate(360deg)"
                })
            }, 1e3), n(function () {
                i.css({
                    opacity: "0",
                    "transform-origin": "70px 70px 0",
                    transform: "rotate(0deg)"
                }), o.css({
                    opacity: "0",
                    "transform-origin": "60px 60px 0",
                    transform: "rotate(0deg)"
                }), s.css({
                    opacity: "0",
                    "transform-origin": "52px 52px 0",
                    transform: "rotate(0deg)"
                }), r.css({
                    opacity: "0",
                    "transform-origin": "46px 46px 0",
                    transform: "rotate(0deg)"
                }), a.css({
                    opacity: "0",
                    "transform-origin": "40px 40px 0",
                    transform: "rotate(0deg)"
                }), l.css({
                    opacity: "0",
                    "transform-origin": "30px 30px 0",
                    transform: "rotate(0deg)"
                }), c.css({
                    opacity: "0",
                    "transform-origin": "20px 20px 0",
                    transform: "rotate(0deg)"
                }), u.css({
                    opacity: "0",
                    "transform-origin": "15px 15px 0",
                    transform: "rotate(0deg)"
                }), d.css({
                    opacity: "0",
                    "transform-origin": "8px 8px 0",
                    transform: "rotate(0deg)"
                })
            }, 1e3), p.addClass("b19-round"), f.addClass("b19-hands"), n(function () {
                h.css({
                    opacity: "1",
                    transform: "translateY(0px) scale(1)"
                })
            }, 2580), n(function () {
                m.css({
                    opacity: "1",
                    transform: "translateY(0px) scale(1)"
                })
            }, 3080), n(function () {
                i.removeClass("general-transition-b191"), o.removeClass("general-transition-b191"), s.removeClass("general-transition-b191"), r.removeClass("general-transition-b191"), a.removeClass("general-transition-b191"), l.removeClass("general-transition-b191"), c.removeClass("general-transition-b191"), u.removeClass("general-transition-b191"), d.removeClass("general-transition-b191"), h.removeClass("pdt-fadein-transitionb-17"), m.removeClass("pdt-fadein-transitionb-17"), t.$emit("openingShowFinish")
            }, 3580)) : (i.css({
                opacity: "0",
                "transform-origin": "70px 70px 0",
                transform: "rotate(0deg)"
            }), o.css({
                opacity: "0",
                "transform-origin": "60px 60px 0",
                transform: "rotate(0deg)"
            }), o.css({
                opacity: "0",
                "transform-origin": "60px 60px 0",
                transform: "rotate(0deg)"
            }), s.css({
                opacity: "0",
                "transform-origin": "52px 52px 0",
                transform: "rotate(0deg)"
            }), r.css({
                opacity: "0",
                "transform-origin": "46px 46px 0",
                transform: "rotate(0deg)"
            }), a.css({
                opacity: "0",
                "transform-origin": "40px 40px 0",
                transform: "rotate(0deg)"
            }), l.css({
                opacity: "0",
                "transform-origin": "30px 30px 0",
                transform: "rotate(0deg)"
            }), c.css({
                opacity: "0",
                "transform-origin": "20px 20px 0",
                transform: "rotate(0deg)"
            }), u.css({
                opacity: "0",
                "transform-origin": "15px 15px 0",
                transform: "rotate(0deg)"
            }), d.css({
                opacity: "0",
                "transform-origin": "8px 8px 0",
                transform: "rotate(0deg)"
            }), f.css({
                opacity: "1"
            }), h.css({
                opacity: "1",
                transform: "translateY(0px) scale(1)"
            }), m.css({
                opacity: "1",
                transform: "translateY(0px) scale(1)"
            }), p.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            g()
        }
    }
    pageHandlers["tpl-a-1/024-showme5"] = function (t, e, n) {
        var s = e.find(".pic-container"),
            r = [];
        r[0] = e.find(".pic1"), r[1] = e.find(".pic2"), r[2] = e.find(".pic3"), r[3] = e.find(".pic4");
        var a = [];
        a[0] = "rotateZ(-9deg)", a[1] = "rotateZ(-4deg)", a[2] = "rotateZ(1deg)", a[3] = "rotateZ(6deg)";
        var l, c, u = e.find(".multi-image-hint"),
            d = e.find(".hand-image"),
            p = !1,
            f = 1e3,
            h = 500,
            m = f / 2;

        function g(e) {
            p || (p = !0, e ? (r[l].css({
                transform: "translate3d(-300px, 0, 0)" + a[l % 4]
            }), r[(l + 3) % 4].css({
                transform: "translate3d(100px, 0, 0) " + a[(l + 3) % 4]
            }), r[(l + 2) % 4].css({
                transform: "translate3d(100px, 0, 0) " + a[(l + 2) % 4]
            }), r[(l + 1) % 4].css({
                transform: "translate3d(100px, 0, 0) " + a[(l + 1) % 4],
                "z-index": 100
            })) : (r[l].css({
                transform: "translate3d(300px, 0, 0)" + a[l % 4]
            }), r[(l + 3) % 4].css({
                transform: "translate3d(-100px, 0, 0) " + a[(l + 3) % 4]
            }), r[(l + 2) % 4].css({
                transform: "translate3d(-100px, 0, 0) " + a[(l + 2) % 4]
            }), r[(l + 1) % 4].css({
                transform: "translate3d(-100px, 0, 0) " + a[(l + 1) % 4],
                "z-index": 100
            })), n(function () {
                r[l].css({
                    transform: "translate3d(0, 0, 0)" + a[l % 4],
                    "z-index": 1
                }), r[(l + 3) % 4].css({
                    transform: "translate3d(0, 0, 0)" + a[(l + 3) % 4],
                    "z-index": 104
                }), r[(l + 2) % 4].css({
                    transform: "translate3d(0, 0, 0)" + a[(l + 2) % 4],
                    "z-index": 103
                }), r[(l + 1) % 4].css({
                    transform: "translate3d(0, 0, 0)" + a[(l + 1) % 4],
                    "z-index": 102
                })
            }, h), n(function () {
                t.page.editables.bgs0.set.length > t.page.editables.bgs0.minSubNum && t.$apply(function () {
                    console.log("page slide", l, c), r[l].attr("tn-sub-ed-index", c), c = (c + 1) % t.page.editables.bgs0.set.length
                }), l = (l + 3) % 4, p = !1
            }, 2 * h))
        }

        function v() {
            c = ((l = 3) + 1) % t.page.editables.bgs0.set.length, r[0].removeClass("quicker-ease-in-out-transition"), r[1].removeClass("quicker-ease-in-out-transition"), r[2].removeClass("quicker-ease-in-out-transition"), r[3].removeClass("quicker-ease-in-out-transition"), s.removeClass("ease-in-out-transition"), u.removeClass("ease-in-out-transition"), d.removeClass("quicker-ease-in-out-transition"), r[0].css({
                opacity: "0",
                transform: "translate3d(-200px, 100px, 0) scale(2) rotateZ(90deg)",
                "z-index": "1"
            }), r[1].css({
                opacity: "0",
                transform: "translate3d(-100px, 100px, 0) scale(2) rotateZ(90deg)",
                "z-index": "102"
            }), r[2].css({
                opacity: "0",
                transform: "translate3d(100px, 100px, 0) scale(2) rotateZ(-90deg)",
                "z-index": "103"
            }), r[3].css({
                opacity: "0",
                transform: "translate3d(200px, 100px, 0) scale(2) rotateZ(-90deg)",
                "z-index": "104"
            }), s.css("transform", "scale(1)"), u.css("opacity", 0), d.css({
                transform: "translateX(50px)"
            }), p = !1
        }
        var y = 0,
            b = 0;
        t.onDragStart = function (t) {
            t.stopPropagation(), y = t.gesture.deltaX, b = t.gesture.deltaY
        }, t.onDrag = function (t) {
            t.stopPropagation()
        }, t.onDragEnd = function (e) {
            e.stopPropagation();
            var n = e.gesture.deltaX - y,
                s = e.gesture.deltaY - b;
            y = 0, b = 0, p || (Math.abs(n) >= Math.abs(s) ? Math.abs(n) > i && g(!(n > 0)) : Math.abs(s) > o && (s > 0 ? t.$emit("toPrevPage") : t.$emit("toNextPage")))
        }, v(), this.onPageShow = function (e) {
            e ? (p = !0, t.$emit("openingShowStart"), r[0].addClass("ease-in-out-transition"), r[1].addClass("ease-in-out-transition"), r[2].addClass("ease-in-out-transition"), r[3].addClass("ease-in-out-transition"), s.addClass("ease-in-out-transition"), u.addClass("ease-in-out-transition"), d.addClass("quicker-ease-in-out-transition"), E || u.show(), n(function () {
                r[0].css({
                    opacity: "1",
                    transform: "translate3d(0, 0, 0) scale(1) rotateZ(-9deg)"
                })
            }, 0), n(function () {
                r[1].css({
                    opacity: "1",
                    transform: "translate3d(0, 0, 0) scale(1) rotateZ(-4deg)"
                })
            }, m), n(function () {
                r[2].css({
                    opacity: "1",
                    transform: "translate3d(0, 0, 0) scale(1) rotateZ(1deg)"
                })
            }, 2 * m), n(function () {
                r[3].css({
                    opacity: "1",
                    transform: "translate3d(0, 0, 0) scale(1) rotateZ(6deg)"
                })
            }, 3 * m), E ? n(function () {
                p = !1, r[0].removeClass("ease-in-out-transition"), r[1].removeClass("ease-in-out-transition"), r[2].removeClass("ease-in-out-transition"), r[3].removeClass("ease-in-out-transition"), r[0].addClass("quicker-ease-in-out-transition"), r[1].addClass("quicker-ease-in-out-transition"), r[2].addClass("quicker-ease-in-out-transition"), r[3].addClass("quicker-ease-in-out-transition"), t.$emit("openingShowFinish")
            }, f + 3 * m) : (n(function () {
                u.css("opacity", 1)
            }, f + 3 * m), n(function () {
                d.css({
                    transform: "translateX(-100px)"
                })
            }, 2 * f + 3 * m), n(function () {
                d.css({
                    transform: "translateX(50px)"
                })
            }, 2 * f + 3 * m + 1.5 * h), n(function () {
                u.css("opacity", 0)
            }, 2 * f + 3 * m + 3 * h), n(function () {
                u.hide(), p = !1, E = !0, r[0].removeClass("ease-in-out-transition"), r[1].removeClass("ease-in-out-transition"), r[2].removeClass("ease-in-out-transition"), r[3].removeClass("ease-in-out-transition"), r[0].addClass("quicker-ease-in-out-transition"), r[1].addClass("quicker-ease-in-out-transition"), r[2].addClass("quicker-ease-in-out-transition"), r[3].addClass("quicker-ease-in-out-transition"), t.$emit("openingShowFinish")
            }, 3 * f + 3 * m + 3 * h))) : (r[0].css({
                opacity: "1",
                transform: "translate3d(0, 0, 0) scale(1) rotateZ(-9deg)"
            }), r[1].css({
                opacity: "1",
                transform: "translate3d(0, 0, 0) scale(1) rotateZ(-4deg)"
            }), r[2].css({
                opacity: "1",
                transform: "translate3d(0, 0, 0) scale(1) rotateZ(1deg)"
            }), r[3].css({
                opacity: "1",
                transform: "translate3d(0, 0, 0) scale(1) rotateZ(6deg)"
            }))
        }, this.onPageHide = function () {
            v()
        }
    }, pageHandlers["tpl-a-1/b01-text-Layout"] = T, pageHandlers["tpl-a-1/b01-text-Layout-v1"] = T, pageHandlers["tpl-a-1/b01-text-LayoutB01"] = k, pageHandlers["tpl-a-1/b01-text-LayoutB01-v1"] = k, pageHandlers["tpl-a-1/b01-text-layoutb02"] = P, pageHandlers["tpl-a-1/b01-text-layoutb02-v1"] = P, pageHandlers["tpl-a-1/b01-text-layoutb03"] = _, pageHandlers["tpl-a-1/b01-text-layoutb03-v1"] = _, pageHandlers["tpl-a-1/b01-text-layoutb04"] = A, pageHandlers["tpl-a-1/b01-text-layoutb04-v1"] = A, pageHandlers["tpl-a-1/b01-text-layoutb05"] = $, pageHandlers["tpl-a-1/b01-text-layoutb05-v1"] = $, pageHandlers["tpl-a-1/b01-text-layoutb05-v2"] = $, pageHandlers["tpl-a-1/b01-text-layoutb06"] = function (t, e, n) {
        var i = e.find(".pdt1-quadrilateral-one"),
            o = e.find(".pdt1-quadrilateral-two"),
            s = e.find(".pdt1-quadrilateral-three"),
            r = e.find(".pdt1-quadrilateral-four");

        function a() {
            i.removeClass("layoub06Animation"), o.removeClass("layoub06Animation"), s.removeClass("layoub06Animation"), r.removeClass("layoub06Animation"), i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            }), r.css({
                opacity: "0"
            })
        }
        a(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("layoub06Animation"), o.addClass("layoub06Animation"), s.addClass("layoub06Animation"), r.addClass("layoub06Animation"), n(function () {
                t.$emit("openingShowFinish")
            }, 2200)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }), r.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            a()
        }
    }, pageHandlers["tpl-a-1/b01-text-layoutb07"] = M, pageHandlers["tpl-a-1/b01-text-layoutb07-v1"] = M, pageHandlers["tpl-a-1/030-multi-image-01"] = H, pageHandlers["tpl-a-1/030-multi-image-01-v1"] = H, pageHandlers["tpl-a-1/030-multi-image-02"] = function (t, e, n) {
        var i = e.find(".background"),
            o = e.find(".surface"),
            s = e.find(".contered"),
            r = e.find(".last-piece"),
            a = t.page.editables.bgs0.set.length;

        function l() {
            i.css({
                "background-color": "rgba(0, 0, 0, 0)"
            }), o.addClass("off"), s.addClass("off"), i.addClass("off general-transition")
        }
        r.css({
            width: 100 / a + "%"
        }), s.css({
            width: 80 * a + "%"
        }), l(), this.onPageShow = function (e) {
            ! function (e) {
                if (e) {
                    var r = t.page.editables.bgs0.set.length,
                        a = s.width() / r,
                        l = r * a / r,
                        c = 0,
                        u = function (e, n) {
                            s.removeClass("animate"), n ? (s.addClass("animate"), t.$emit("openingShowFinish")) : t.$emit("openingShowStart");
                            var i = "translate3d(" + e + "px,0,0)";
                            return s.css("transform", i)
                        },
                        d = function (t, e) {
                            return t = Math.max(0, Math.min(t, r - 1)), u(-a * (c = t), e)
                        };
                    o.hammer({
                        drag_lock_to_axis: !0,
                        drag_min_distance: 15
                    }).on("dragend", function (t) {
                        return Math.abs(t.gesture.deltaX) > .1 * o.width() ? "right" === t.gesture.direction ? d(c - 1, !0) : d(c + 1, !0) : d(c, !0)
                    }).on("dragleft dragright", function (t) {
                        var e, n, i, s;
                        return t.gesture.preventDefault(), s = -l * c, e = t.gesture.deltaX - a / o.width(), n = 0 === c && "right" === t.gesture.direction, i = c === r - 1 && "left" === t.gesture.direction, (n || i) && (e *= .4), u(e + s, !1)
                    }), d(0, !1), n(function () {
                        i.css({
                            "background-color": "rgba(0, 0, 0, 0.5)"
                        }), o.removeClass("off"), i.removeClass("off")
                    }, 1e3)
                } else i.css({
                    "background-color": "rgba(0, 0, 0, 0.5)"
                }), s.css({
                    "margin-left": "40%"
                }), o.removeClass("off"), s.removeClass("off"), i.addClass("off")
            }(e)
        }, this.onPageHide = function () {
            l()
        }
    }, pageHandlers["tpl-a-1/b01-text-layoutb08"] = L, pageHandlers["tpl-a-1/b01-text-layoutb08-v1"] = L, pageHandlers["tpl-a-1/b01-text-layoutb08-v2"] = L, pageHandlers["tpl-a-1/017-fb-page-01"] = function (t, e, n) {
        var i = e.find(".content-box"),
            o = e.find(".content-text"),
            s = e.find(".content-name");

        function r() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0",
                transform: "translateY(100px)"
            }), s.css({
                opacity: "0",
                transform: "translateY(100px)"
            })
        }
        r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), o.addClass("pdt-fadein-transition1"), s.addClass("pdt-fadein-transition1"), n(function () {
                i.css({
                    opacity: "1"
                }), o.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 300), n(function () {
                s.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 1050), n(function () {
                o.removeClass("pdt-fadein-transition1"), s.removeClass("pdt-fadein-transition1"), i.removeClass("pdt-fadein-transition1"), t.$emit("openingShowFinish")
            }, 2400)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1",
                transform: "translateY(0)"
            }), s.css({
                opacity: "1",
                transform: "translateY(0)"
            }))
        }, this.onPageHide = function () {
            r()
        }
    }, pageHandlers["tpl-a-1/011-three-round"] = function (t, e, n) {
        var i = e.find(".header"),
            o = e.find(".top_round"),
            s = e.find(".middle_round"),
            r = e.find(".img_round"),
            a = e.find(".top_round_text"),
            l = e.find(".middle_round_text");

        function c() {
            a.css({
                opacity: "0"
            }), l.css({
                opacity: "0"
            }), i.css({
                opacity: "0",
                transform: "translateX(300px)"
            }), o.css({
                opacity: "0",
                width: o.outerHeight() + "px"
            }), s.css({
                opacity: "0",
                width: s.outerHeight() + "px"
            }), r.css({
                opacity: "0",
                width: r.outerHeight() + "px"
            }), o.removeClass("round-animate"), s.removeClass("round-animate"), r.removeClass("round-animate ")
        }
        c(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition3"), o.addClass("round-animate"), s.addClass("round-animate"), r.addClass("round-animate"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translateX(0)"
                })
            }, 300), n(function () {
                a.css({
                    opacity: "1"
                })
            }, 1e3), n(function () {
                l.css({
                    opacity: "1"
                })
            }, 1300), n(function () {
                i.removeClass("pdt-fadein-transition3"), a.removeClass("pdt-fadein-transition1"), l.removeClass("pdt-fadein-transition1"), t.$emit("openingShowFinish")
            }, 2300)) : (i.css({
                opacity: "1",
                transform: "translateX(0)"
            }), o.css({
                opacity: "1",
                transform: "scale(1) translate(0,0) "
            }), s.css({
                opacity: "1",
                transform: "scale(1) translate(0,0) "
            }), r.css({
                opacity: "1",
                transform: "scale(1) translate(0,0) "
            }), a.css({
                opacity: "1"
            }), l.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            c()
        }
    }, pageHandlers["tpl-a-1/b12-schedule-01"] = function (t, e, n) {
        var i = e.find(".nav_text"),
            o = e.find(".border"),
            s = e.find(".time_a"),
            r = e.find(".time_b"),
            a = e.find(".time_c"),
            l = e.find(".time_d"),
            c = e.find(".content_a"),
            u = e.find(".content_b"),
            d = e.find(".content_c"),
            p = e.find(".content_d");

        function f() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0",
                transform: "translateY(-600px)"
            }), i.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            }), c.css({
                opacity: "0"
            }), r.css({
                opacity: "0"
            }), u.css({
                opacity: "0"
            }), a.css({
                opacity: "0"
            }), d.css({
                opacity: "0"
            }), l.css({
                opacity: "0"
            }), p.css({
                opacity: "0"
            }), i.removeClass("general-transition-b101"), o.removeClass("general-transition-b122"), s.removeClass("b12-scheduleTime"), r.removeClass("b12-scheduleTime"), a.removeClass("b12-scheduleTime"), l.removeClass("b12-scheduleTime"), c.removeClass("b12-scheduleAnimate"), u.removeClass("b12-scheduleAnimate"), d.removeClass("b12-scheduleAnimate"), p.removeClass("b12-scheduleAnimate")
        }
        f(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("general-transition-b101"), o.addClass("general-transition-b122"), s.addClass("b12-scheduleTime"), r.addClass("b12-scheduleTime"), a.addClass("b12-scheduleTime"), l.addClass("b12-scheduleTime"), c.addClass("b12-scheduleAnimate"), u.addClass("b12-scheduleAnimate"), d.addClass("b12-scheduleAnimate"), p.addClass("b12-scheduleAnimate"), n(function () {
                i.css({
                    opacity: "1"
                })
            }, 750), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translateY(0)"
                })
            }, 0), n(function () {
                t.$emit("openingShowFinish")
            }, 1800)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1",
                transform: "translateY(0)"
            }), s.css({
                opacity: "1"
            }), c.css({
                opacity: "1"
            }), r.css({
                opacity: "1"
            }), u.css({
                opacity: "1"
            }), a.css({
                opacity: "1"
            }), d.css({
                opacity: "1"
            }), l.css({
                opacity: "1"
            }), p.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            f()
        }
    }, pageHandlers["tpl-a-1/025-your-hands-01"] = function (t, e, n) {
        var i = e.find(".small-img"),
            o = e.find(".hands-img"),
            s = e.find(".hands-img_b");

        function r() {
            i.css({
                opacity: "0",
                transform: "translate(300px,-300px) rotate(0deg)"
            }), s.css({
                opacity: "0",
                transform: "scale(1.5) translate(-100px,100px)"
            }), o.css({
                opacity: "0",
                transform: "scale(1.5) translate(-100px,100px)"
            })
        }
        r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("general-transition-b14"), o.addClass("general-transition-b14"), s.addClass("general-transition-b14"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translate(0px,0px) rotate(360deg)"
                })
            }, 0), n(function () {
                s.css({
                    opacity: "1",
                    transform: "scale(1) translate(0px,0px)"
                }), o.css({
                    opacity: "1",
                    transform: "scale(1) translate(0px,0px)"
                })
            }, 0), n(function () {
                i.removeClass("general-transition-b14"), s.removeClass("general-transition-b14"), o.removeClass("general-transition-b14"), t.$emit("openingShowFinish")
            }, 600)) : (i.css({
                opacity: "1",
                transform: "translate(0px,0px) rotate(360deg)"
            }), o.css({
                opacity: "1",
                transform: "scale(1) translate(0px,0px)"
            }), s.css({
                opacity: "1",
                transform: "scale(1) translate(0px,0px)"
            }))
        }, this.onPageHide = function () {
            r()
        }
    }, pageHandlers["tpl-a-1/b14-text-img-01"] = D, pageHandlers["tpl-a-1/b14-text-img-01-v1"] = D, pageHandlers["tpl-a-1/b14-text-img-01-02-r"] = function (t, e, n) {
        var i = e.find(".text-one"),
            o = e.find(".text-two"),
            s = e.find(".text-three"),
            r = e.find(".text-line-a"),
            a = e.find(".text-line-b"),
            l = e.find(".img-one"),
            c = e.find(".img-two"),
            u = e.find(".img-three");

        function d() {
            i.css({
                opacity: "0",
                transform: "translateX(0px)"
            }), o.css({
                opacity: "0",
                transform: "translateX(0px)"
            }), s.css({
                opacity: "0",
                transform: "translateX(0px)"
            }), r.css({
                opacity: "0",
                transform: "translateX(0px)"
            }), a.css({
                opacity: "0",
                transform: "translateX(0px)"
            }), l.css({
                opacity: "0",
                transform: "translateY(300px)"
            }), c.css({
                opacity: "0",
                transform: "translateY(300px)"
            }), u.css({
                opacity: "0",
                transform: "translateY(300px)"
            }), i.removeClass("b14-text-animate-r"), r.removeClass("b14-text-animate-r"), o.removeClass("b14-text-animate-r"), a.removeClass("b14-text-animate-r"), s.removeClass("b14-text-animate-r"), l.removeClass("b14-img-out-transition"), c.removeClass("b14-img-out-transition "), u.removeClass("b14-img-out-transition ")
        }
        d(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("b14-text-animate-r"), r.addClass("b14-text-animate-r"), o.addClass("b14-text-animate-r"), a.addClass("b14-text-animate-r"), s.addClass("b14-text-animate-r"), l.addClass("b14-img-out-transition "), c.addClass("b14-img-out-transition"), u.addClass("b14-img-out-transition"), n(function () {
                l.css({
                    opacity: "1",
                    transform: "translateY(0px)"
                })
            }, 800 / 3), n(function () {
                c.css({
                    opacity: "1",
                    transform: "translateY(0px)"
                })
            }, 800), n(function () {
                u.css({
                    opacity: "1",
                    transform: "translateY(0px)"
                })
            }, 1200), n(function () {
                t.$emit("openingShowFinish")
            }, 2e3)) : (i.css({
                opacity: "1",
                transform: "translateX(0px)"
            }), o.css({
                opacity: "1",
                transform: "translateX(0px)"
            }), s.css({
                opacity: "1",
                transform: "translateX(0px)"
            }), r.css({
                opacity: "1",
                transform: "translateX(0px)"
            }), a.css({
                opacity: "1",
                transform: "translateX(0px)"
            }), l.css({
                opacity: "1",
                transform: "translateY(0px)"
            }), c.css({
                opacity: "1",
                transform: "translateY(0px)"
            }), u.css({
                opacity: "1",
                transform: "translateY(0px)"
            }))
        }, this.onPageHide = function () {
            d()
        }
    }, pageHandlers["tpl-a-1/b15-bulb-01"] = O, pageHandlers["tpl-a-1/b15-bulb-01-v1"] = O, pageHandlers["tpl-a-1/b16-timg-btext-01"] = I, pageHandlers["tpl-a-1/b16-timg-btext-01-v1"] = I, pageHandlers["tpl-a-1/b17-attention"] = N, pageHandlers["tpl-a-1/b17-attention-v1"] = N, pageHandlers["tpl-a-1/b18-attention-02"] = z, pageHandlers["tpl-a-1/b18-attention-02-v1"] = z, pageHandlers["tpl-a-1/b19-attention-03"] = F, pageHandlers["tpl-a-1/b19-attention-03-v1"] = F, pageHandlers["tpl-a-1/b20-multislider"] = function (t, e, n) {
        var r, a = ".slider-info-left-top",
            l = ".slider-info-right-top",
            c = ".slider-info-left-middle",
            u = ".slider-info-right-middle",
            d = ".slider-info-left-bottom",
            p = ".slider-info-right-bottom",
            f = e.find(a),
            h = e.find(l),
            m = e.find(c),
            g = e.find(u),
            v = e.find(d),
            y = e.find(p),
            b = {
                top: !1,
                middle: !1,
                bottom: !1
            };
        f.on("tnTransitionEnd", function () {
            f.removeClass("slider-animate"), f.removeClass("slider-animate-display"), b.top = !1
        }), h.on("tnTransitionEnd", function () {
            h.removeClass("slider-animate"), h.removeClass("slider-animate-display"), b.top = !1
        }), m.on("tnTransitionEnd", function () {
            m.removeClass("slider-animate"), m.removeClass("slider-animate-display"), b.middle = !1
        }), g.on("tnTransitionEnd", function () {
            g.removeClass("slider-animate"), g.removeClass("slider-animate-display"), b.middle = !1
        }), v.on("tnTransitionEnd", function () {
            v.removeClass("slider-animate"), v.removeClass("slider-animate-display"), b.bottom = !1
        }), y.on("tnTransitionEnd", function () {
            y.removeClass("slider-animate"), y.removeClass("slider-animate-display"), b.bottom = !1
        }), e.find(".lt-dragable").hammer({
            drag_lock_to_axis: !0,
            stop_browser_behavior: {
                userSelect: !1
            }
        }).on("dragstart", a, C).on("drag", a, function (t) {
            S(t, f, h, "top")
        }).on("dragend", a, function (t) {
            E(t, f, h, "top")
        }), e.find(".rt-dragable").hammer({
            drag_lock_to_axis: !0,
            stop_browser_behavior: {
                userSelect: !1
            }
        }).on("dragstart", l, C).on("drag", l, function (t) {
            S(t, h, f, "top")
        }).on("dragend", l, function (t) {
            E(t, h, f, "top")
        }), e.find(".lm-dragable").hammer({
            drag_lock_to_axis: !0,
            stop_browser_behavior: {
                userSelect: !1
            }
        }).on("dragstart", c, C).on("drag", c, function (t) {
            S(t, m, g, "middle")
        }).on("dragend", c, function (t) {
            E(t, m, g, "middle")
        }), e.find(".rm-dragable").hammer({
            drag_lock_to_axis: !0,
            stop_browser_behavior: {
                userSelect: !1
            }
        }).on("dragstart", u, C).on("drag", u, function (t) {
            S(t, g, m, "middle")
        }).on("dragend", u, function (t) {
            E(t, g, m, "middle")
        }), e.find(".lb-dragable").hammer({
            drag_lock_to_axis: !0,
            stop_browser_behavior: {
                userSelect: !1
            }
        }).on("dragstart", d, C).on("drag", d, function (t) {
            S(t, v, y, "bottom")
        }).on("dragend", d, function (t) {
            E(t, v, y, "bottom")
        }), e.find(".rb-dragable").hammer({
            drag_lock_to_axis: !0,
            stop_browser_behavior: {
                userSelect: !1
            }
        }).on("dragstart", p, C).on("drag", p, function (t) {
            S(t, y, v, "bottom")
        }).on("dragend", p, function (t) {
            E(t, y, v, "bottom")
        }), e.hammer({
            drag_lock_to_axis: !0,
            stop_browser_behavior: {
                userSelect: !1
            }
        }).on("dragstart", a, C).on("drag", a, function (t) {
            S(t, f, h, "top")
        }).on("dragend", a, function (t) {
            E(t, f, h, "top")
        }).on("dragstart", l, C).on("drag", l, function (t) {
            S(t, h, f, "top")
        }).on("dragend", l, function (t) {
            E(t, h, f, "top")
        }).on("dragstart", c, C).on("drag", c, function (t) {
            S(t, m, g, "middle")
        }).on("dragend", c, function (t) {
            E(t, m, g, "middle")
        }).on("dragstart", u, C).on("drag", u, function (t) {
            S(t, g, m, "middle")
        }).on("dragend", u, function (t) {
            E(t, g, m, "middle")
        }).on("dragstart", d, C).on("drag", d, function (t) {
            S(t, v, y, "bottom")
        }).on("dragend", d, function (t) {
            E(t, v, y, "bottom")
        }).on("dragstart", p, C).on("drag", p, function (t) {
            S(t, y, v, "bottom")
        }).on("dragend", p, function (t) {
            E(t, y, v, "bottom")
        }), T();
        var w = 0,
            x = 0;

        function C(e) {
            e.gesture && (w = e.gesture.deltaX, x = e.gesture.deltaY, r = (new Date).getTime(), t.$emit("transitionStart"), e.stopPropagation())
        }

        function S(t, e, n, i) {
            if (t.gesture && !b[i]) {
                var o = t.gesture.deltaX - w;
                e.css("transform", "translate3D(" + o / e.innerWidth() * 100 + "%, 0, 0)"), o > 0 ? n.css("transform", "translate3D(" + 100 * (o / e.innerWidth() - 1) + "%, 0, 0)") : o < 0 && n.css("transform", "translate3D(" + 100 * (o / e.innerWidth() + 1) + "%, 0, 0)"), t.stopPropagation()
            }
        }

        function E(e, a, l, c) {
            if (e.gesture && (n(function () {
                    t.$emit("multiSliderDragEnd")
                }, 50), !b[c])) {
                e.stopPropagation();
                var u = e.gesture.deltaX - w,
                    d = e.gesture.deltaY - x;
                w = 0, x = 0;
                var p = (new Date).getTime() - r;
                Math.abs(u) < Math.abs(d) && Math.abs(d) > o && (d > 0 ? t.$apply(function () {
                    t.$emit("toPrevPage")
                }) : t.$apply(function () {
                    t.$emit("toNextPage")
                })), b[c] = !0, Math.abs(u) > i && p < s ? u > 0 ? (a.addClass("slider-animate"), l.addClass("slider-animate"), a.css("transform", "translate3D(100%, 0, 0)"), l.css("transform", "translate3D(0, 0, 0)"), l.one("tnTransitionEnd", function () {
                    t.$emit("transitionFinish")
                })) : u < 0 ? (a.addClass("slider-animate"), l.addClass("slider-animate"), a.css("transform", "translate3D(-100%, 0, 0)"), l.css("transform", "translate3D(0, 0, 0)"), l.one("tnTransitionEnd", function () {
                    t.$emit("transitionFinish")
                })) : t.$emit("transitionFinish") : (a.addClass("slider-animate"), l.addClass("slider-animate"), u > .3 * a.innerWidth() ? (a.css("transform", "translate3D(100%, 0, 0)"), l.css("transform", "translate3D(0, 0, 0)")) : u > 0 ? (a.css("transform", "translate3D(0, 0, 0)"), l.css("transform", "translate3D(-100%, 0, 0)")) : u > -.3 * a.innerWidth() ? (a.css("transform", "translate3D(0, 0, 0)"), l.css("transform", "translate3D(100%, 0, 0)")) : (a.css("transform", "translate3D(-100%, 0, 0)"), l.css("transform", "translate3D(0, 0, 0)")), l.one("tnTransitionEnd", function () {
                    t.$emit("transitionFinish")
                }))
            }
        }

        function T() {
            f.css("transform", "translate3D(-50%, 0, 0)"), h.css("transform", "translate3D(50%, 0, 0)"), m.css("transform", "translate3D(-50%, 0, 0)"), g.css("transform", "translate3D(50%, 0, 0)"), v.css("transform", "translate3D(-50%, 0, 0)"), y.css("transform", "translate3D(50%, 0, 0)"), b.top = !0, b.middle = !0, b.bottom = !0
        }
        this.onPageShow = function () {
            b.top = !0, b.middle = !0, b.bottom = !0, f.addClass("slider-animate-display"), h.addClass("slider-animate-display"), m.addClass("slider-animate-display"), g.addClass("slider-animate-display"), v.addClass("slider-animate-display"), y.addClass("slider-animate-display"), h.css("transform", "translate3d(100%, 0, 0)"), f.css("transform", "translate3d(0, 0, 0)"), g.css("transform", "translate3d(0, 0, 0)"), m.css("transform", "translate3d(-100%, 0, 0)"), y.css("transform", "translate3d(100%, 0, 0)"), v.css("transform", "translate3d(0, 0, 0)")
        }, this.onPageHide = function () {
            T()
        }
    }, pageHandlers["tpl-a-1/b21-textimg"] = function (t, e, n) {
        var i = e.find(".main"),
            o = e.find(".text0"),
            s = e.find(".text1"),
            r = e.find(".text2"),
            a = e.find(".bg-img");

        function l() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            }), r.css({
                opacity: "0"
            }), a.css({
                opacity: "0"
            }), i.removeClass("b21img"), o.removeClass("b21text"), s.removeClass("b21text"), r.removeClass("b21text"), a.removeClass("b21img")
        }
        l(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("b21img"), o.addClass("b21text"), s.addClass("b21text"), r.addClass("b21text"), a.addClass("b21img"), n(function () {
                t.$emit("openingShowFinish")
            }, 2350)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }), r.css({
                opacity: "1"
            }), a.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            l()
        }
    }, pageHandlers["tpl-a-1/b22-waves"] = function (t, e, n) {
        var i = e.find(".text0"),
            o = e.find(".text1"),
            s = e.find(".text2"),
            r = e.find(".btom-content"),
            a = e.find(".lbtext3"),
            l = e.find(".bg-img");

        function c() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            }), r.css({
                opacity: "0"
            }), a.css({
                opacity: "0"
            }), l.css({
                opacity: "0"
            }), i.removeClass("b22text"), o.removeClass("b22text"), s.removeClass("b22text"), r.removeClass("b21text"), a.removeClass("pdt-fadein-transition1"), l.removeClass("b21img")
        }
        c(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("b22text"), o.addClass("b22text"), s.addClass("b22text"), r.addClass("b21text"), a.addClass("pdt-fadein-transition1"), l.addClass("b21img"), n(function () {
                a.css({
                    opacity: "1"
                })
            }, 2e3), n(function () {
                t.$emit("openingShowFinish")
            }, 2950)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }), r.css({
                opacity: "1"
            }), a.css({
                opacity: "1"
            }), l.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            c()
        }
    }, pageHandlers["tpl-a-1/b23-textimg"] = function (t, e, n) {
        var i = e.find(".title"),
            o = e.find(".c-img"),
            s = e.find(".btom-content"),
            r = e.find(".b-c-text");

        function a() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0",
                transform: "translateX(-300px)"
            }), r.css({
                opacity: "0"
            }), i.removeClass("pdt-fadein-transition1"), o.removeClass("b21img"), s.removeClass("pdt-fadein-transition1"), r.removeClass("pdt-fadein-transition1")
        }
        a(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("pdt-fadein-transition1"), o.addClass("b21img"), s.addClass("pdt-fadein-transition1"), r.addClass("pdt-fadein-transition1"), n(function () {
                i.css({
                    opacity: "1"
                })
            }, 1500), n(function () {
                s.css({
                    opacity: "1",
                    transform: "translateX(0px)"
                })
            }, 750), n(function () {
                r.css({
                    opacity: "1"
                })
            }, 1500), n(function () {
                t.$emit("openingShowFinish")
            }, 2250)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1",
                transform: "translateX(0px)"
            }), r.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            a()
        }
    }, pageHandlers["tpl-a-1/b25-textimg"] = function (t, e, n) {
        var i = e.find(".balloon"),
            o = e.find(".top-box"),
            s = e.find(".top-main"),
            r = e.find(".top-text-bg"),
            a = e.find(".top-text"),
            l = e.find(".content"),
            c = e.find(".left-round"),
            u = e.find(".text"),
            d = e.find(".right-round");

        function p() {
            i.removeClass("balloon-animation"), o.removeClass("general-transition"), r.removeClass("general-transition"), d.removeClass("general-transition"), c.removeClass("general-transition"), o.removeClass("general-transition-b191"), a.removeClass("general-transition"), u.removeClass("general-transition-b191"), l.removeClass("general-transition-b191"), i.css({
                opacity: "0"
            }), r.css({
                opacity: "0",
                transform: "scale3d(0,1,0)"
            }), l.css({
                opacity: "0",
                bottom: "5%"
            }), a.css({
                opacity: "0",
                transform: "scale3d(0.1,0.1,0.1)"
            }), d.css({
                opacity: "0"
            }), c.css({
                opacity: "0"
            }), u.css({
                opacity: "0"
            }), o.css({
                opacity: "0",
                top: "35%",
                transform: "scale(0.1) translate3d(0," + .1 * -e.innerHeight() + "px,0)"
            })
        }
        p(), this.onPageShow = function (p) {
            p ? (console.log(Math.floor(r.innerWidth() / 2), r.innerWidth() - Math.floor(r.innerWidth() / 2)), d.css({
                opacity: "1",
                transform: "translate3d(-" + Math.floor(r.innerWidth() / 2) + "px,0,0)"
            }), c.css({
                opacity: "1",
                transform: "translate3d(" + (r.innerWidth() - Math.floor(r.innerWidth() / 2)) + "px,0,0)"
            }), o.css({
                opacity: "0",
                transform: "scale(0.1) translate3d(0," + .3 * -e.innerHeight() + "px,0)"
            }), t.$emit("openingShowStart"), i.addClass("balloon-animation"), r.addClass("general-transition"), d.addClass("general-transition"), c.addClass("general-transition"), a.addClass("general-transition"), l.addClass("general-transition-b191"), u.addClass("general-transition-b191"), n(function () {
                o.addClass("general-transition"), o.css({
                    opacity: "1",
                    transform: "translate3d(0,0,0) scale(1)"
                })
            }, 1800), n(function () {
                r.css({
                    opacity: "1",
                    transform: "scale(1)"
                }), d.css({
                    opacity: "1",
                    transform: "translate3d(0,0,0)"
                }), c.css({
                    opacity: "1",
                    transform: "translate3d(0,0,0)"
                })
            }, 2500), n(function () {
                o.removeClass("general-transition"), o.addClass("top-main-animation")
            }, 1800), n(function () {
                a.css({
                    opacity: "1",
                    transform: "scale3d(1,1,1)"
                })
            }, 3800), n(function () {
                o.removeClass("top-main-animation"), o.addClass("general-transition-b191"), o.css({
                    opacity: "1",
                    top: "20%"
                })
            }, 4300), n(function () {
                l.css({
                    opacity: "1",
                    bottom: "20%"
                })
            }, 6300), n(function () {
                u.css({
                    opacity: "1"
                })
            }, 6800), n(function () {
                t.$emit("openingShowFinish"), l.removeClass("general-transition-b191")
            }, 7300)) : (s.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), a.css({
                opacity: "1",
                transform: "scale3d(1,1,1)"
            }), l.css({
                opacity: "1"
            }), r.css({
                opacity: "1",
                transform: "scale3d(1,1,1)"
            }), d.css({
                opacity: "1"
            }), u.css({
                opacity: "1"
            }), c.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            p()
        }
    }, pageHandlers["tpl-a-1/b26-textimg"] = function (t, e, n) {
        var i = e.find(".text-bg-a"),
            o = e.find(".text-bg-b"),
            s = e.find(".text-bg-c"),
            r = e.find(".text-bg-d");

        function a() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            }), r.css({
                opacity: "0"
            }), i.removeClass("left-right-animation"), o.removeClass("right-left-animation"), s.removeClass("left-right-animation"), r.removeClass("right-left-animation")
        }
        a(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("left-right-animation"), o.addClass("right-left-animation"), s.addClass("left-right-animation"), r.addClass("right-left-animation"), n(function () {
                t.$emit("openingShowFinish")
            }, 2300)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }), r.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            a()
        }
    }, pageHandlers["tpl-a-1/b27-textimg"] = function (t, e, n) {
        var i = e.find(".top-img"),
            o = e.find(".img-left"),
            s = e.find(".img-right"),
            r = e.find(".content");

        function a() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            }), r.css({
                opacity: "0"
            }), i.removeClass("up-down-animation"), o.removeClass("left-right-animation"), s.removeClass("right-left-animation"), r.removeClass("down-up-animation")
        }
        a(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("up-down-animation"), o.addClass("left-right-animation"), s.addClass("right-left-animation"), r.addClass("down-up-animation"), n(function () {
                t.$emit("openingShowFinish")
            }, 2900)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }), r.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            a()
        }
    }, pageHandlers["tpl-a-1/b28-textimg"] = function (t, e, n) {
        var i = e.find(".round-img"),
            o = e.find(".text-top"),
            s = e.find(".text");

        function r() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            }), i.removeClass("top-b28-animation"), o.removeClass("b21text"), s.removeClass("general-transition-b191")
        }
        r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("top-b28-animation"), s.addClass("general-transition-b191"), o.addClass("b21text"), n(function () {
                s.css({
                    opacity: "1"
                })
            }, 1750), n(function () {
                t.$emit("openingShowFinish")
            }, 2300)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            r()
        }
    }, pageHandlers["tpl-a-1/b29-textimg"] = function (t, e, n) {
        var i = e.find(".square-bg"),
            o = e.find(".square-img"),
            s = e.find(".text-top"),
            r = e.find(".text");

        function a() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0",
                transform: "translate3d(-300px,0,0) rotateZ(360deg)"
            }), s.css({
                opacity: "0"
            }), r.css({
                opacity: "0"
            }), o.removeClass("general-transition-b101"), i.removeClass("general-transition-b101"), s.removeClass("b21text"), r.removeClass("general-transition-b191")
        }
        a(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("general-transition-b101"), o.addClass("general-transition-b101"), r.addClass("general-transition-b191"), s.addClass("b21text"), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translate3d(0,0,0) rotateZ(-5deg)"
                })
            }, 750), n(function () {
                i.css({
                    opacity: "1"
                })
            }, 1500), n(function () {
                r.css({
                    opacity: "1"
                })
            }, 2250), n(function () {
                t.$emit("openingShowFinish")
            }, 1800)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1",
                transform: "translate3d(0,0,0) rotateZ(-5deg)"
            }), s.css({
                opacity: "1"
            }), r.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            a()
        }
    }, pageHandlers["tpl-a-1/b30-text-layout"] = function (t, e, n) {
        var i = e.find(".img-top"),
            o = e.find(".content-p"),
            s = e.find(".img-bottom");

        function r() {
            i.css({
                opacity: "0",
                transform: "translate3d(0,-200px,0)"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0",
                transform: "translate3d(0,200px,0)"
            }), o.removeClass("pdt-fadein-transition1"), i.removeClass("pdt-fadein-transition1"), s.removeClass("pdt-fadein-transition1")
        }
        r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), o.addClass("pdt-fadein-transition1"), i.addClass("pdt-fadein-transition1"), s.addClass("pdt-fadein-transition1"), n(function () {
                i.css({
                    opacity: "1",
                    transform: "translate3d(0,0,0)"
                })
            }, 0), n(function () {
                o.css({
                    opacity: "1"
                })
            }, 300), n(function () {
                s.css({
                    opacity: "1",
                    transform: "translate3d(0,0,0)"
                })
            }, 750), n(function () {
                t.$emit("openingShowFinish")
            }, 3e3)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            r()
        }
    }, pageHandlers["tpl-a-1/b31-text-layout"] = function (t, e, n) {
        var i = e.find(".img-top"),
            o = e.find(".content-t"),
            s = e.find(".content-b");

        function r() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0",
                transform: "translate3d(0,-100px,0)"
            }), s.css({
                opacity: "0"
            }), i.removeClass("down-up-animation15"), o.removeClass("pdt-fadein-transition1"), s.removeClass("up-down-animation15")
        }
        r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("down-up-animation15"), o.addClass("pdt-fadein-transition1"), s.addClass("up-down-animation15"), n(function () {
                o.css({
                    opacity: "1",
                    transform: "translate3d(0,0,0)"
                })
            }, 0), n(function () {
                t.$emit("openingShowFinish")
            }, 2300)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1",
                transform: "translate3d(0,0,0)"
            }), s.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            r()
        }
    }, pageHandlers["tpl-a-1/b32-text-layout"] = function (t, e, n) {
        var i = e.find(".img-top"),
            o = e.find(".content-t");

        function s() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), i.removeClass("up-down-animation15"), o.removeClass("pdt-fadein-transition1")
        }
        s(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("up-down-animation15"), o.addClass("pdt-fadein-transition1"), n(function () {
                o.css({
                    opacity: "1"
                })
            }, 1800), n(function () {
                t.$emit("openingShowFinish")
            }, 3300)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            s()
        }
    }, pageHandlers["tpl-a-1/b33-text-layout"] = function (t, e, n) {
        var i = e.find(".img-top"),
            o = e.find(".img-bottom"),
            s = e.find(".content-t");

        function r() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0",
                transform: "translate3d(0,-200px,0)"
            }), i.removeClass("quick-text-animate-r"), s.removeClass("pdt-fadein-transition1"), o.removeClass("quick-text-animate-l")
        }
        r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("quick-text-animate-r"), s.addClass("pdt-fadein-transition1"), o.addClass("quick-text-animate-l"), n(function () {
                s.css({
                    opacity: "1",
                    transform: "translate3d(0,0,0)"
                })
            }, 0), n(function () {
                t.$emit("openingShowFinish")
            }, 2e3)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1",
                transform: "translate3d(0,0,0)"
            }))
        }, this.onPageHide = function () {
            r()
        }
    }, pageHandlers["tpl-a-1/b34-text-layout"] = function (t, e, n) {
        var i = e.find(".img-top-logo"),
            o = e.find(".logo-text-h2"),
            s = e.find(".logo-text-p");

        function r() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            }), i.removeClass("b21img"), o.removeClass("b21img"), s.removeClass("b21img")
        }
        r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("b21img"), o.addClass("b21img"), s.addClass("b21img"), n(function () {
                t.$emit("openingShowFinish")
            }, 1600)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            r()
        }
    }, pageHandlers["tpl-a-1/b35-text-layout"] = function (t, e, n) {
        var i = e.find(".title"),
            o = e.find(".c-img"),
            s = e.find(".b-c-text-t"),
            r = e.find(".b-c-text-l"),
            a = e.find(".b-c-text-r");

        function l() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            }), r.css({
                opacity: "0"
            }), a.css({
                opacity: "0"
            }), i.removeClass("left-right-animation5"), o.removeClass("right-left-animation5"), s.removeClass("left-right-animation5"), r.removeClass("opacity-animation75"), a.removeClass("opacity-animation75")
        }
        l(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("left-right-animation5"), o.addClass("right-left-animation5"), s.addClass("left-right-animation5"), r.addClass("opacity-animation75"), a.addClass("opacity-animation75"), n(function () {
                t.$emit("openingShowFinish")
            }, 1750)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }), r.css({
                opacity: "1"
            }), a.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            l()
        }
    }, pageHandlers["tpl-a-1/b36-text-layout"] = function (t, e, n) {
        var i = e.find(".b-c-text-l"),
            o = e.find(".b-c-text-r"),
            s = e.find(".b-c-text-t"),
            r = e.find(".c-img"),
            a = e.find(".bottom-text");

        function l() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            }), r.css({
                opacity: "0"
            }), a.css({
                opacity: "0"
            }), i.removeClass("opacity-animation75"), o.removeClass("opacity-animation75"), s.removeClass("left-right-animation5"), r.removeClass("down-up-animation"), a.removeClass("down-up-animation")
        }
        l(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("opacity-animation75"), o.addClass("opacity-animation75"), s.addClass("left-right-animation5"), r.addClass("down-up-animation"), a.addClass("down-up-animation"), n(function () {
                t.$emit("openingShowFinish")
            }, 1750)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }), r.css({
                opacity: "1"
            }), a.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            l()
        }
    }, pageHandlers["tpl-a-1/b37-text-layout"] = function (t, e, n) {
        var i = e.find(".bg-top-box"),
            o = e.find(".bg-top-box-content"),
            s = e.find(".footer-p");

        function r() {
            i.css({
                opacity: "0"
            }), o.css({
                opacity: "0"
            }), s.css({
                opacity: "0"
            })
        }
        i.removeClass("scale-animaton"), o.removeClass("b21img"), s.removeClass("b21text"), r(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), i.addClass("scale-animaton"), o.addClass("b21img"), s.addClass("b21text"), n(function () {
                t.$emit("openingShowFinish")
            }, 1850)) : (i.css({
                opacity: "1"
            }), o.css({
                opacity: "1"
            }), s.css({
                opacity: "1"
            }))
        }, this.onPageHide = function () {
            r()
        }
    }, globalHandlers["tpl-a-1/global/arrow"] = function (t, e) {
        var n = e.find(".idx-arrow");
        t.showArrow = !0, t.$on("arrowAnimate", function (t, e) {
            e ? n.removeClass("no-animation") : n.addClass("no-animation")
        }), t.$on("pageChangeStart", function (e, n) {
            var i;
            i = !n, t.showArrow = i
        }), t.onArrowClick = function (e) {
            e.preventDefault(), e.stopPropagation(), t.$emit("toNextPage")
        }
    }, globalHandlers["tpl-a-1/global/bgm"] = function (t, e, n) {
        var i = !0,
            o = e.find(".player-button"),
            s = e.find(".audio-source");
        t.showBgm = !1, t.page.editables.aud0.url && (t.showBgm = !0, s[0].addEventListener("ended", function () {
            n(function () {
                s[0].currentTime = 0, s[0].play()
            }, 1e3)
        })), o.click(function () {
            1 == i ? (s[0].pause(), o.addClass("player-button-stop"), i = !1) : (s[0].play(), o.removeClass("player-button-stop"), i = !0)
        }), t.$on("firstTouch", function () {
            s[0].play(), o.removeClass("player-button-stop"), i = !0
        })
    }, globalHandlers["tpl-a-1/global/support-info"] = function (t, e, n) {
        var i = e,
            o = !1;

        function s(t) {
            t != o && (t ? (i.css("opacity", 0), i.css("display", "block"), i.addClass("linear-transition"), n(function () {
                i.css("opacity", 1)
            }, 1e3), n(function () {
                i.removeClass("linear-transition"), o = !0
            }, 2e3)) : (i.addClass("linear-transition"), i.css("opacity", 0), n(function () {
                i.removeClass("linear-transition"), i.css("display", "none"), o = !1
            }, 1e3)))
        }
        i.css("display", "none"), t.$on("hideSupportInfo", function () {
            s(!1)
        }), t.$on("showSupportInfo", function () {
            s(!0)
        })
    }
}(jQuery, window, document);
var phs = namespace.reg("triton.xiumi.pageHandlers");
jQuery, window, window.document, phs["tpl-adv/001-adv1"] = function (t, e, n, i, o) {
    this.onPageShow = function () {
        void 0 !== _hmt && _hmt.push(["_trackEvent", "adv", "adv pv", "page view"]);
        for (var e = t.page.editables.ads.items.length, n = 0; n < e; ++n) t.page.editables.ads.items[n].view_uri && o.get(t.page.editables.ads.items[n].view_uri)
    }, t.onFollowClick = function (t) {
        void 0 !== _hmt && _hmt.push(["_trackEvent", "adv", "adv click", "follow xiumi"])
    }, t.onAdvClick = function (e, n) {
        t.page.editables.ads.items[n] && void 0 !== _hmt && _hmt.push(["_trackEvent", "adv", "adv click", "adv id:" + t.page.editables.ads.items[n].advert_id])
    }
};
var pageHandlers = namespace.reg("triton.xiumi.pageHandlers"),
    globalHandlers = namespace.reg("triton.xiumi.globalHandlers");
! function (t, e, n) {
    pageHandlers["tpl-custom-1/01-cover2"] = function (t, e) {
        var n = e.find(".page1"),
            i = e.find(".page2"),
            o = e.find(".page-logo"),
            s = e.find(".page1-bottle"),
            r = e.find(".logo"),
            a = e.find(".slogen"),
            l = e.find(".title");

        function c() {
            n.removeClass("cover-transition"), i.removeClass("cover-transition"), o.removeClass("cover-transition"), s.removeClass("cover-transition"), r.removeClass("cover-transition"), a.removeClass("cover-transition"), l.removeClass("cover-transition"), n.css({
                opacity: 1,
                display: "block"
            }), s.css({
                opacity: 0,
                transform: "translate3d(0, 100px, 0)"
            }), o.css({
                opacity: 0,
                display: "block"
            }), r.css({
                transform: "scale(1)"
            }), a.css({
                opacity: 0,
                transform: "scale(0.5)"
            }), i.css({
                opacity: 0,
                display: "block"
            }), l.css({
                opacity: 0,
                transform: "translate3d(0, 100px, 0)"
            })
        }
        c(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), n.addClass("cover-transition"), i.addClass("cover-transition"), o.addClass("cover-transition"), s.addClass("cover-transition"), r.addClass("cover-transition"), a.addClass("cover-transition"), l.addClass("cover-transition"), setTimeout(function () {
                s.css({
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)"
                })
            }, 500), setTimeout(function () {
                o.css({
                    opacity: 1
                })
            }, 2500), setTimeout(function () {
                n.css({
                    opacity: 0
                }), r.css({
                    transform: "scale(1.5)"
                })
            }, 4500), setTimeout(function () {
                n.css("display", "none"), a.css({
                    opacity: 1,
                    transform: "scale(1)"
                })
            }, 6500), setTimeout(function () {
                o.css("opacity", 0), i.css("opacity", 1)
            }, 1e4), setTimeout(function () {
                o.css("diaplay", "none"), l.css({
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)"
                })
            }, 12e3), setTimeout(function () {
                t.$emit("openingShowFinish")
            }, 14e3)) : (n.css({
                opacity: 0,
                display: "none"
            }), s.css({
                opacity: 0,
                transform: "translate3d(0, 0, 0)"
            }), o.css({
                opacity: 0,
                display: "none"
            }), r.css({
                opacity: 0,
                transform: "scale(1)"
            }), a.css({
                opacity: 0,
                transform: "scale(1)"
            }), i.css({
                opacity: 1,
                display: "block"
            }), l.css({
                opacity: 1,
                transform: "translate3d(0, 0, 0)"
            }))
        }, this.onPageHide = function () {
            c()
        }
    }, pageHandlers["tpl-custom-1/02-newgif"] = function (t, e) {
        var n = e.find(".title");

        function i() {
            n.removeClass("smooth-rebound-transition"), n.css({
                transform: "translate3d(0, 100px, 0)",
                opacity: 0
            })
        }
        i(), this.onPageShow = function (e) {
            e ? (t.$emit("openingShowStart"), n.addClass("smooth-rebound-transition"), n.css({
                transform: "translate3d(0, 0, 0)",
                opacity: 1
            }), setTimeout(function () {
                t.$emit("openingShowFinish")
            }, 1e3)) : n.css({
                transform: "translate3d(0, 0, 0)",
                opacity: 1
            })
        }, this.onPageHide = function () {
            i()
        }
    }, pageHandlers["tpl-custom-1/06-newflip"] = function (t, e) {
        var n = e.find(".mask"),
            i = e.find("#flip-lt"),
            o = e.find("#flip-mt"),
            s = e.find("#flip-rt"),
            r = e.find("#flip-lm"),
            a = e.find("#flip-mm"),
            l = e.find("#flip-rm"),
            c = e.find("#flip-lb"),
            u = e.find("#flip-mb"),
            d = e.find("#flip-rb"),
            p = e.find("#flipper-lt"),
            f = e.find("#flipper-mt"),
            h = e.find("#flipper-rt"),
            m = e.find("#flipper-lm"),
            g = e.find("#flipper-mm"),
            v = e.find("#flipper-rm"),
            y = e.find("#flipper-lb"),
            b = e.find("#flipper-mb"),
            w = e.find("#flipper-rb");

        function x() {
            n.removeClass("flip-mask-transition"), n.css({
                opacity: 0,
                display: "none"
            }), i.css({
                transform: "translate3d(-30%, -15%, 0) scale3d(0.25, 0.25, 1)",
                "z-index": 0,
                opacity: 0
            }), o.css({
                transform: "translate3d(0, -15%, 0) scale3d(0.25, 0.25, 1)",
                "z-index": 0,
                opacity: 0
            }), s.css({
                transform: "translate3d(30%, -15%, 0) scale3d(0.25, 0.25, 1)",
                "z-index": 0,
                opacity: 0
            }), r.css({
                transform: "translate3d(-30%, 10%, 0) scale3d(0.25, 0.25, 1)",
                "z-index": 0,
                opacity: 0
            }), a.css({
                transform: "translate3d(0, 10%, 0) scale3d(0.25, 0.25, 1)",
                "z-index": 0,
                opacity: 0
            }), l.css({
                transform: "translate3d(30%, 10%, 0) scale3d(0.25, 0.25, 1)",
                "z-index": 0,
                opacity: 0
            }), c.css({
                transform: "translate3d(-30%, 35%, 0) scale3d(0.25, 0.25, 1)",
                "z-index": 0,
                opacity: 0
            }), u.css({
                transform: "translate3d(0, 35%, 0) scale3d(0.25, 0.25, 1)",
                "z-index": 0,
                opacity: 0
            }), d.css({
                transform: "translate3d(30%, 35%, 0) scale3d(0.25, 0.25, 1)",
                "z-index": 0,
                opacity: 0
            }), p.css("display", "none"), f.css("display", "none"), h.css("display", "none"), m.css("display", "none"), g.css("display", "none"), v.css("display", "none"), y.css("display", "none"), b.css("display", "none"), w.css("display", "none")
        }
        var C = !1;

        function S(e, i) {
            C || (t.$apply(function () {
                t.$emit("openingShowStart")
            }), C = !0, i.css("display", "block"), n.css("display", "block"), n.addClass("flip-mask-transition"), setTimeout(function () {
                n.css("opacity", 1)
            }, 0), e.addClass("linear-transition"), e.css({
                transform: "translate3d(0, 0, 0) scale3d(1, 1, 1)",
                "z-index": 100,
                opacity: 1
            }), setTimeout(function () {
                e.removeClass("linear-transition"), e.addClass("flip")
            }, 1e3))
        }
        x(), this.onPageShow = function (t) {
            t && (i.on("tap", function () {
                S(i, p)
            }), o.on("tap", function () {
                S(o, f)
            }), s.on("tap", function () {
                S(s, h)
            }), r.on("tap", function () {
                S(r, m)
            }), a.on("tap", function () {
                S(a, g)
            }), l.on("tap", function () {
                S(l, v)
            }), c.on("tap", function () {
                S(c, y)
            }), u.on("tap", function () {
                S(u, b)
            }), d.on("tap", function () {
                S(d, w)
            }))
        }, this.onPageHide = function () {
            x()
        }
    }, pageHandlers["tpl-custom-1/100-testiframe"] = function (n, i, o) {
        e.addEventListener("message", function (e) {
            if (console.log("receiveMessage", e), "heightChanged" === e.data.event) {
                var n = e.data.value;
                t(".tpl-custom1-testiframe iframe").each(function () {
                    if (-1 !== t(this)[0].src.indexOf(e.data.token)) {
                        var o = i.innerHeight();
                        t(this).css("height", o > n ? o : n)
                    }
                })
            }
        }, !1);
        var s = i.find(".container"),
            r = (i.find(".frame"), 60),
            a = !1,
            l = !1,
            c = (new Date).getTime(),
            u = 500,
            d = !1;

        function p(t) {
            var e = (new Date).getTime();
            d || (d = e - c >= u), c = e;
            var i = s.scrollTop();
            i <= r ? (o(function () {
                s.scrollTop(r)
            }, 200), console.log("top", a, d), d && (a && o(function () {
                n.$emit("toPrevPage")
            }, 500), d = !1), a = !0) : i + s.innerHeight() >= s[0].scrollHeight - r ? (o(function () {
                s.scrollTop(s[0].scrollHeight - r - s.innerHeight())
            }, 200), console.log("bottom", l, d), d && (l && o(function () {
                n.$emit("toNextPage")
            }, 500), d = !1), l = !0) : (a = !1, l = !1)
        }
        this.onPageShow = function (t) {
            var e = s.scrollTop();
            e < r ? (s.scrollTop(r), a = !0) : e > s[0].scrollHeight - r && (s.scrollTop(s[0].scrollHeight - r), l = !0), o(function () {
                s.on("scroll", p)
            }, 500)
        }, this.onPageHide = function () {
            o(function () {
                s.off("scroll", p)
            }, 500)
        }
    }, globalHandlers["tpl-custom-1/global/custom-arrow"] = function (t, e) {
        var n = e.find(".custom-arrow");
        t.showArrow = !0, t.$on("arrowAnimate", function (t, e) {
            e ? n.removeClass("no-animation") : n.addClass("no-animation")
        }), t.$on("pageChangeStart", function (e, n) {
            var i;
            i = !n, t.showArrow = i
        }), t.onArrowClick = function (e) {
            e.preventDefault(), e.stopPropagation(), t.$emit("toNextPage")
        }
    }
}(jQuery, window, document);
var pageHandlers = namespace.reg("triton.xiumi.pageHandlers");
! function (t, e, n) {
    var i = 100,
        o = 0;

    function s(t, e, n) {
        e ? (t.onDragStart = function (t) {
            var e;
            (e = t).stopPropagation(), o = e.gesture.deltaY
        }, t.onDrag = function (t) {
            t.stopPropagation()
        }, t.onDragEnd = function (e) {
            ! function (t, e, n) {
                if (t.stopPropagation(), e) {
                    var s = t.gesture.deltaY - o;
                    o = 0, s > i && n.$emit("toPrevPage")
                }
            }(e, n, t)
        }) : (t.onDragStart = null, t.onDrag = null, t.onDragEnd = null)
    }
    pageHandlers["tpl-effect-1/001-eraser"] = function (t, e, n) {
        t.showMask = !0;
        var i = e.find(".mask"),
            o = e.find(".effect-tpl-tab-thumbnail"),
            r = e.find(".effect-tpl-editing-hint");
        this.onPageShow = function (a) {
            if (a) {
                s(t, !0, !1), t.$emit("enterEffectPage");
                var l = i.find("img");
                l.one("load", function () {
                    i.eraser && (i.eraser({
                        progressFunction: function (e) {
                            e >= .5 && (i.eraser("clear"), n(function () {
                                s(t, !1), t.$emit("toNextPage", "overlay")
                            }, 1e3))
                        }
                    }), i = e.find(".mask"))
                }), l[0].complete && l.load()
            } else o.show(), r.hide()
        }, this.onPageHide = function () {
            s(t, !1), t.$emit("exitEffectPage")
        }
    }, pageHandlers["tpl-effect-1/002-fingerprint"] = function (t, e, n, i) {
        var o = e.find(".effect-tpl-tab-thumbnail"),
            r = e.find(".effect-tpl-editing-hint"),
            a = e.find(".fingerprint");
        t.onFingerprintTapped = function () {
            if (!i) {
                var o = e.find(".scan-line");
                o.css({
                    transform: "translate3d(0," + (a.innerHeight() - o.innerHeight()) + "px, 0)"
                }), o.show(), n(function () {
                    o.addClass("shadow-animation0"), o.addClass("scanline-transition"), o.css("transform", "translate3d(0, 0, 0)")
                }, 100), n(function () {
                    o.css("transform", "translate3d(0," + (a.innerHeight() - o.innerHeight()) + "px, 0)")
                }, 1600), n(function () {
                    e.addClass("linear-transition"), e.css("opacity", "0")
                }, 3100), n(function () {
                    s(t, !1), t.$emit("toNextPage", "overlay")
                }, 4100)
            }
        }, this.onPageShow = function (n) {
            n ? (s(t, !0, !1), t.$emit("enterEffectPage"), i || e.find(".fingerprint-cover").css({
                height: a.innerHeight() + "px",
                display: "block"
            })) : (o.show(), r.hide())
        }, this.onPageHide = function () {
            s(t, !1), t.$emit("exitEffectPage")
        }
    }, pageHandlers["tpl-effect-1/003-opendoor"] = function (t, e, n, i) {
        var o = e.find(".button"),
            r = e.find(".effect-tpl-tab-thumbnail"),
            a = e.find(".effect-tpl-editing-hint"),
            l = e.find(".bg-container"),
            c = e.find("#bg-lt"),
            u = e.find("#bg-rt"),
            d = e.find("#bg-lb"),
            p = e.find("#bg-rb");
        t.onTheAbove = function () {
            if (!i) {
                c.show(), u.show(), d.show(), p.show(), l.hide(), o.removeClass("animation");
                n(function () {
                    c.addClass("quick-ease-out-transition"), u.addClass("quick-ease-out-transition"), d.addClass("quick-ease-out-transition"), p.addClass("quick-ease-out-transition"), o.addClass("quick-ease-out-transition"), o.css("opacity", "0"), c.css("transform", "translate3d(-100%, 0, 0)")
                }, 0), n(function () {
                    u.css("transform", "translate3d(100%, 0, 0)")
                }, 225), n(function () {
                    d.css("transform", "translate3d(-100%, 0, 0)")
                }, 450), n(function () {
                    p.css("transform", "translate3d(100%, 0, 0)")
                }, 675), n(function () {
                    s(t, !1), t.$emit("toNextPage", "overlay")
                }, 1575)
            }
        }, this.onPageShow = function (n) {
            if (n) {
                s(t, !0, !1), t.$emit("enterEffectPage");
                var l = e.find(".button-cover");
                i ? o.addClass("animationOne") : (l.css({
                    height: o.innerHeight() + "px",
                    display: "block"
                }), o.addClass("animation"), l.addClass("animation"))
            } else r.show(), a.hide()
        }, this.onPageHide = function () {
            s(t, !1), t.$emit("exitEffectPage")
        }
    }, pageHandlers["tpl-effect-1/004-puzzle"] = function (t, n, i) {
        var o = n.find(".effect-tpl-tab-thumbnail"),
            r = n.find(".effect-tpl-editing-hint"),
            a = n.find(".box-container"),
            l = n.find("#bg-container");
        this.onPageShow = function (c) {
            c ? (s(t, !0, !1), t.$emit("enterEffectPage"), e.alchemistPuzzle && (e.alchemistPuzzle(a, l, 2, 2).init(), a.on("storypuzzledone", ".puzzle", function (e) {
                i(function () {
                    n.addClass("linear-transition"), n.css("opacity", "0")
                }, 1e3), i(function () {
                    s(t, !1), t.$emit("toNextPage", "overlay")
                }, 2e3)
            }))) : (o.show(), r.hide())
        }, this.onPageHide = function () {
            s(t, !1), t.$emit("exitEffectPage")
        }
    }, pageHandlers["tpl-effect-1/005-puzzle2"] = function (t, n, i) {
        var o = n.find(".effect-tpl-tab-thumbnail"),
            r = n.find(".effect-tpl-editing-hint"),
            a = n.find(".box-container"),
            l = n.find("#bg-container");
        this.onPageShow = function (c) {
            c ? (s(t, !0, !1), t.$emit("enterEffectPage"), e.alchemistPuzzle && (e.alchemistPuzzle(a, l, 2, 3).init(), a.on("storypuzzledone", ".puzzle", function (e) {
                i(function () {
                    n.addClass("linear-transition"), n.css("opacity", "0")
                }, 1e3), i(function () {
                    s(t, !1), t.$emit("toNextPage", "overlay")
                }, 2e3)
            }))) : (o.show(), r.hide())
        }, this.onPageHide = function () {
            s(t, !1), t.$emit("exitEffectPage")
        }
    }
}(jQuery, window, document),
function () {
    "use strict";
    var t, e, n;
    if (window.angular) {
        if (t = "tn-launch-app", e = angular.element("[" + t + "]"), !(n = e.attr(t))) return;
        e.ready(function () {
            return angular.bootstrap(e, [n])
        })
    }
}.call(this);
var _hmt = _hmt || [];
! function () {
    var t = document.createElement("script");
    t.src = "https://hm.baidu.com/hm.js?ffe6968809d7872701e07ea21cce5427";
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e)
}();