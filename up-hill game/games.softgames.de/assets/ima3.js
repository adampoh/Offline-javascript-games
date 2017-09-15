/** @suppress {uselessCode} */
(function() {
    var CANARY_PERCENT = 0.01;
    var FORCE_CANARY = 'goog_lzm=1';
    var FORCE_PRODUCTION = 'goog_lzm=0';
    var forceCanary = window.location.search.indexOf(FORCE_CANARY) >= 0;
    var forceProduction = window.location.search.indexOf(FORCE_PRODUCTION) >= 0;
    if ((Math.random() <= CANARY_PERCENT || forceCanary) && !forceProduction) {
        // Copyright 2011 Google Inc. All Rights Reserved.
        (function() {
            var h, aa = function(a, b) {
                    function c() {}
                    c.prototype = b.prototype;
                    a.P = b.prototype;
                    a.prototype = new c;
                    a.prototype.constructor = a;
                    for (var d in b)
                        if (Object.defineProperties) {
                            var e = Object.getOwnPropertyDescriptor(b, d);
                            e && Object.defineProperty(a, d, e)
                        } else a[d] = b[d]
                },
                ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
                    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
                },
                ca = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
                da =
                function(a, b) {
                    if (b) {
                        var c = ca;
                        a = a.split(".");
                        for (var d = 0; d < a.length - 1; d++) {
                            var e = a[d];
                            e in c || (c[e] = {});
                            c = c[e]
                        }
                        a = a[a.length - 1];
                        d = c[a];
                        b = b(d);
                        b != d && null != b && ba(c, a, {
                            configurable: !0,
                            writable: !0,
                            value: b
                        })
                    }
                };
            da("Object.assign", function(a) {
                return a ? a : function(a, c) {
                    for (var b = 1; b < arguments.length; b++) {
                        var e = arguments[b];
                        if (e)
                            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (a[f] = e[f])
                    }
                    return a
                }
            });
            da("Array.prototype.fill", function(a) {
                return a ? a : function(a, c, d) {
                    var b = this.length || 0;
                    0 > c && (c = Math.max(0, b + c));
                    if (null == d || d > b) d = b;
                    d = Number(d);
                    0 > d && (d = Math.max(0, b + d));
                    for (c = Number(c || 0); c < d; c++) this[c] = a;
                    return this
                }
            });
            var m = this,
                p = function(a) {
                    return void 0 !== a
                },
                q = function(a) {
                    return "string" == typeof a
                },
                r = function(a) {
                    return "number" == typeof a
                },
                t = function(a, b, c) {
                    a = a.split(".");
                    c = c || m;
                    a[0] in c || !c.execScript || c.execScript("var " + a[0]);
                    for (var d; a.length && (d = a.shift());) !a.length && p(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
                },
                fa = function(a, b) {
                    a = a.split(".");
                    b = b || m;
                    for (var c; c = a.shift();)
                        if (null != b[c]) b = b[c];
                        else return null;
                    return b
                },
                ga = function() {},
                ha = function(a) {
                    a.Ub = void 0;
                    a.getInstance = function() {
                        return a.Ub ?
                            a.Ub : a.Ub = new a
                    }
                },
                ia = function(a) {
                    var b = typeof a;
                    if ("object" == b)
                        if (a) {
                            if (a instanceof Array) return "array";
                            if (a instanceof Object) return b;
                            var c = Object.prototype.toString.call(a);
                            if ("[object Window]" == c) return "object";
                            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                        } else return "null";
                    else if ("function" == b && "undefined" == typeof a.call) return "object";
                    return b
                },
                ka = function(a) {
                    return "array" == ia(a)
                },
                ma = function(a) {
                    var b = ia(a);
                    return "array" == b || "object" == b && "number" == typeof a.length
                },
                v = function(a) {
                    return "function" == ia(a)
                },
                na = function(a) {
                    var b = typeof a;
                    return "object" == b && null != a || "function" == b
                },
                oa = "closure_uid_" + (1E9 * Math.random() >>> 0),
                pa = 0,
                qa = function(a, b, c) {
                    return a.call.apply(a.bind, arguments)
                },
                ra = function(a, b, c) {
                    if (!a) throw Error();
                    if (2 < arguments.length) {
                        var d = Array.prototype.slice.call(arguments,
                            2);
                        return function() {
                            var c = Array.prototype.slice.call(arguments);
                            Array.prototype.unshift.apply(c, d);
                            return a.apply(b, c)
                        }
                    }
                    return function() {
                        return a.apply(b, arguments)
                    }
                },
                w = function(a, b, c) {
                    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w = qa : w = ra;
                    return w.apply(null, arguments)
                },
                sa = function(a, b) {
                    var c = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        var b = c.slice();
                        b.push.apply(b, arguments);
                        return a.apply(this, b)
                    }
                },
                ta = Date.now || function() {
                    return +new Date
                },
                x = function(a, b) {
                    function c() {}
                    c.prototype = b.prototype;
                    a.P = b.prototype;
                    a.prototype = new c;
                    a.prototype.constructor = a;
                    a.kl = function(a, c, f) {
                        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                        return b.prototype[c].apply(a, d)
                    }
                };
            var ua = document,
                y = window;
            var va;
            var wa = function(a) {
                    return /^[\s\xa0]*$/.test(a)
                },
                xa = String.prototype.trim ? function(a) {
                    return a.trim()
                } : function(a) {
                    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                },
                Fa = function(a) {
                    if (!ya.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(za, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Aa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ba, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ca, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Da, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ea, "&#0;"));
                    return a
                },
                za = /&/g,
                Aa = /</g,
                Ba = />/g,
                Ca = /"/g,
                Da = /'/g,
                Ea = /\x00/g,
                ya = /[\x00&<>"']/,
                Ga = function(a, b) {
                    a.length > b && (a = a.substring(0, b - 3) + "...");
                    return a
                },
                Ha = function(a, b) {
                    return -1 != a.toLowerCase().indexOf(b.toLowerCase())
                },
                Ia = String.prototype.repeat ? function(a, b) {
                    return a.repeat(b)
                } : function(a, b) {
                    return Array(b + 1).join(a)
                },
                Ja = function(a) {
                    return null == a ? "" : String(a)
                },
                Ma = function(a, b) {
                    var c = 0;
                    a = xa(String(a)).split(".");
                    b = xa(String(b)).split(".");
                    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                        var f = a[e] || "",
                            g = b[e] || "";
                        do {
                            f =
                                /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                            if (0 == f[0].length && 0 == g[0].length) break;
                            c = Ka(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ka(0 == f[2].length, 0 == g[2].length) || Ka(f[2], g[2]);
                            f = f[3];
                            g = g[3]
                        } while (0 == c)
                    }
                    return c
                },
                Ka = function(a, b) {
                    return a < b ? -1 : a > b ? 1 : 0
                },
                Na = 2147483648 * Math.random() | 0,
                Oa = function(a) {
                    var b = Number(a);
                    return 0 == b && wa(a) ? NaN : b
                },
                Pa = function(a) {
                    return String(a).replace(/\-([a-z])/g, function(a, c) {
                        return c.toUpperCase()
                    })
                },
                Qa = function(a) {
                    var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
                    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                        return b + e.toUpperCase()
                    })
                };
            var Ra = function(a, b) {
                    if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
                    for (var c = 0; c < a.length; c++)
                        if (c in a && a[c] === b) return c;
                    return -1
                },
                A = function(a, b, c) {
                    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
                },
                Sa = function(a, b, c) {
                    for (var d = a.length, e = [], f = 0, g = q(a) ? a.split("") : a, k = 0; k < d; k++)
                        if (k in g) {
                            var l = g[k];
                            b.call(c, l, k, a) && (e[f++] = l)
                        }
                    return e
                },
                Ta = function(a, b, c) {
                    for (var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
                    return e
                },
                Ua = function(a, b, c) {
                    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
                        if (f in e && b.call(c, e[f], f, a)) return !0;
                    return !1
                },
                Va = function(a, b) {
                    var c = 0;
                    A(a, function(a, e, f) {
                        b.call(void 0, a, e, f) && ++c
                    }, void 0);
                    return c
                },
                Xa = function(a, b, c) {
                    b = Wa(a, b, c);
                    return 0 > b ? null : q(a) ? a.charAt(b) : a[b]
                },
                Wa = function(a, b, c) {
                    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
                        if (f in e && b.call(c, e[f], f, a)) return f;
                    return -1
                },
                Ya = function(a, b) {
                    return 0 <= Ra(a, b)
                },
                $a = function() {
                    var a = Za;
                    if (!ka(a))
                        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
                    a.length = 0
                },
                ab = function(a, b) {
                    b = Ra(a, b);
                    var c;
                    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
                    return c
                },
                bb = function(a) {
                    return Array.prototype.concat.apply([], arguments)
                },
                cb = function(a) {
                    var b = a.length;
                    if (0 < b) {
                        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                        return c
                    }
                    return []
                },
                db = function(a, b, c) {
                    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
                },
                eb = function(a) {
                    for (var b = [], c = 0; c < a; c++) b[c] = 0;
                    return b
                },
                fb = function(a) {
                    for (var b = [], c = 0; c < arguments.length; c++) {
                        var d = arguments[c];
                        if (ka(d))
                            for (var e = 0; e < d.length; e += 8192)
                                for (var f = fb.apply(null, db(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
                        else b.push(d)
                    }
                    return b
                };
            var B;
            a: {
                var gb = m.navigator;
                if (gb) {
                    var ib = gb.userAgent;
                    if (ib) {
                        B = ib;
                        break a
                    }
                }
                B = ""
            }
            var C = function(a) {
                return -1 != B.indexOf(a)
            };
            var kb = function(a, b, c) {
                    for (var d in a) b.call(c, a[d], d, a)
                },
                lb = function(a, b) {
                    var c = {},
                        d;
                    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
                    return c
                },
                ob = function(a) {
                    var b = nb,
                        c;
                    for (c in b)
                        if (a.call(void 0, b[c], c, b)) return !0;
                    return !1
                },
                pb = function(a) {
                    var b = 0,
                        c;
                    for (c in a) b++;
                    return b
                },
                qb = function(a) {
                    var b = [],
                        c = 0,
                        d;
                    for (d in a) b[c++] = a[d];
                    return b
                },
                rb = function(a) {
                    var b = [],
                        c = 0,
                        d;
                    for (d in a) b[c++] = d;
                    return b
                },
                sb = function(a, b) {
                    for (var c = ma(b), d = c ? b : arguments, c = c ? 0 : 1; c < d.length && (a = a[d[c]], p(a)); c++);
                    return a
                },
                tb = function(a, b) {
                    return null !== a && b in a
                },
                wb = function(a) {
                    var b = vb,
                        c;
                    for (c in b)
                        if (a.call(void 0, b[c], c, b)) return c
                },
                xb = function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                yb = function(a, b, c) {
                    return null !== a && b in a ? a[b] : c
                },
                zb = function(a) {
                    var b = {},
                        c;
                    for (c in a) b[c] = a[c];
                    return b
                },
                Ab = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
                Bb = function(a, b) {
                    for (var c, d, e = 1; e < arguments.length; e++) {
                        d = arguments[e];
                        for (c in d) a[c] = d[c];
                        for (var f = 0; f < Ab.length; f++) c =
                            Ab[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
                    }
                };
            var Db = function() {
                    return C("Safari") && !(Cb() || C("Coast") || C("Opera") || C("Edge") || C("Silk") || C("Android"))
                },
                Cb = function() {
                    return (C("Chrome") || C("CriOS")) && !C("Edge")
                };
            var Eb = function() {
                    return C("iPhone") && !C("iPod") && !C("iPad")
                },
                Fb = function() {
                    return Eb() || C("iPad") || C("iPod")
                };
            var Gb = function(a) {
                Gb[" "](a);
                return a
            };
            Gb[" "] = ga;
            var Hb = function(a, b) {
                    try {
                        return Gb(a[b]), !0
                    } catch (c) {}
                    return !1
                },
                Jb = function(a, b) {
                    var c = Ib;
                    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
                };
            var Kb = C("Opera"),
                D = C("Trident") || C("MSIE"),
                Lb = C("Edge"),
                Ob = C("Gecko") && !(Ha(B, "WebKit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
                Pb = Ha(B, "WebKit") && !C("Edge"),
                Qb = C("Macintosh"),
                Rb = C("Windows"),
                Sb = C("Android"),
                Tb = Eb(),
                Ub = C("iPad"),
                Vb = C("iPod"),
                Wb = Fb(),
                Xb = function() {
                    var a = m.document;
                    return a ? a.documentMode : void 0
                },
                Yb;
            a: {
                var $b = "",
                    ac = function() {
                        var a = B;
                        if (Ob) return /rv\:([^\);]+)(\)|;)/.exec(a);
                        if (Lb) return /Edge\/([\d\.]+)/.exec(a);
                        if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                        if (Pb) return /WebKit\/(\S+)/.exec(a);
                        if (Kb) return /(?:Version)[ \/]?(\S+)/.exec(a)
                    }();
                ac && ($b = ac ? ac[1] : "");
                if (D) {
                    var bc = Xb();
                    if (null != bc && bc > parseFloat($b)) {
                        Yb = String(bc);
                        break a
                    }
                }
                Yb = $b
            }
            var cc = Yb,
                Ib = {},
                E = function(a) {
                    return Jb(a, function() {
                        return 0 <= Ma(cc, a)
                    })
                },
                dc;
            var ec = m.document;
            dc = ec && D ? Xb() || ("CSS1Compat" == ec.compatMode ? parseInt(cc, 10) : 5) : void 0;
            var F = function(a, b) {
                this.x = p(a) ? a : 0;
                this.y = p(b) ? b : 0
            };
            F.prototype.clone = function() {
                return new F(this.x, this.y)
            };
            var fc = function(a, b) {
                return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
            };
            F.prototype.floor = function() {
                this.x = Math.floor(this.x);
                this.y = Math.floor(this.y);
                return this
            };
            F.prototype.round = function() {
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
                return this
            };
            F.prototype.scale = function(a, b) {
                b = r(b) ? b : a;
                this.x *= a;
                this.y *= b;
                return this
            };
            var gc = !D || 9 <= Number(dc);
            !Ob && !D || D && 9 <= Number(dc) || Ob && E("1.9.1");
            D && E("9");
            var hc = D || Kb || Pb;
            var ic = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            };
            var kc = function() {
                this.g = "";
                this.h = jc
            };
            kc.prototype.Ia = !0;
            kc.prototype.Ga = function() {
                return this.g
            };
            kc.prototype.toString = function() {
                return "Const{" + this.g + "}"
            };
            var lc = function(a) {
                    return a instanceof kc && a.constructor === kc && a.h === jc ? a.g : "type_error:Const"
                },
                jc = {},
                mc = function(a) {
                    var b = new kc;
                    b.g = a;
                    return b
                };
            mc("");
            var oc = function() {
                this.g = "";
                this.h = nc
            };
            oc.prototype.Ia = !0;
            var nc = {};
            oc.prototype.Ga = function() {
                return this.g
            };
            var pc = function(a) {
                    var b = new oc;
                    b.g = a;
                    return b
                },
                qc = pc(""),
                rc = /^([-,."'%_!# a-zA-Z0-9]+|(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\))$/;
            var tc = function() {
                this.g = "";
                this.h = sc
            };
            tc.prototype.Ia = !0;
            tc.prototype.Ga = function() {
                return this.g
            };
            tc.prototype.Tb = !0;
            tc.prototype.fb = function() {
                return 1
            };
            var sc = {},
                uc = function(a) {
                    var b = new tc;
                    b.g = a;
                    return b
                };
            var wc = function() {
                this.g = "";
                this.h = vc
            };
            wc.prototype.Ia = !0;
            wc.prototype.Ga = function() {
                return this.g
            };
            wc.prototype.Tb = !0;
            wc.prototype.fb = function() {
                return 1
            };
            var xc = function(a) {
                    if (a instanceof wc && a.constructor === wc && a.h === vc) return a.g;
                    ia(a);
                    return "type_error:SafeUrl"
                },
                yc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
                Bc = function(a) {
                    if (a instanceof wc) return a;
                    a = a.Ia ? a.Ga() : String(a);
                    yc.test(a) || (a = "about:invalid#zClosurez");
                    return Ac(a)
                },
                vc = {},
                Ac = function(a) {
                    var b = new wc;
                    b.g = a;
                    return b
                };
            Ac("about:blank");
            var Dc = function() {
                this.g = "";
                this.l = Cc;
                this.h = null
            };
            Dc.prototype.Tb = !0;
            Dc.prototype.fb = function() {
                return this.h
            };
            Dc.prototype.Ia = !0;
            Dc.prototype.Ga = function() {
                return this.g
            };
            var Ec = function(a) {
                    if (a instanceof Dc && a.constructor === Dc && a.l === Cc) return a.g;
                    ia(a);
                    return "type_error:SafeHtml"
                },
                Gc = function(a) {
                    if (a instanceof Dc) return a;
                    var b = null;
                    a.Tb && (b = a.fb());
                    a = Fa(a.Ia ? a.Ga() : String(a));
                    return Fc(a, b)
                },
                Hc = /^[a-zA-Z0-9-]+$/,
                Ic = {
                    action: !0,
                    cite: !0,
                    data: !0,
                    formaction: !0,
                    href: !0,
                    manifest: !0,
                    poster: !0,
                    src: !0
                },
                Jc = function(a) {
                    var b = 0,
                        c = "",
                        d = function(a) {
                            ka(a) ? A(a, d) : (a = Gc(a), c += Ec(a), a = a.fb(), 0 == b ? b = a : 0 != a && b != a && (b = null))
                        };
                    A(arguments, d);
                    return Fc(c, b)
                },
                Cc = {},
                Fc = function(a, b) {
                    var c =
                        new Dc;
                    c.g = a;
                    c.h = b;
                    return c
                },
                Kc = function(a, b, c) {
                    var d = null,
                        e = "";
                    if (b)
                        for (V in b) {
                            if (!Hc.test(V)) throw Error('Invalid attribute name "' + V + '".');
                            var f = b[V];
                            if (null != f) {
                                var g = a;
                                var k = V;
                                var l = f;
                                if (l instanceof kc) l = lc(l);
                                else if ("style" == k.toLowerCase()) {
                                    f = void 0;
                                    g = l;
                                    if (!na(g)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof g + " given: " + g);
                                    if (!(g instanceof oc)) {
                                        l = "";
                                        for (f in g) {
                                            if (!/^[-_a-zA-Z0-9]+$/.test(f)) throw Error("Name allows only [-_a-zA-Z0-9], got: " +
                                                f);
                                            var n = g[f];
                                            if (null != n) {
                                                if (n instanceof kc) n = lc(n);
                                                else if (rc.test(n)) {
                                                    for (var u = !0, z = !0, N = 0; N < n.length; N++) {
                                                        var Z = n.charAt(N);
                                                        "'" == Z && z ? u = !u : '"' == Z && u && (z = !z)
                                                    }
                                                    u && z || (n = "zClosurez")
                                                } else n = "zClosurez";
                                                l += f + ":" + n + ";"
                                            }
                                        }
                                        g = l ? pc(l) : qc
                                    }
                                    g instanceof oc && g.constructor === oc && g.h === nc ? f = g.g : (ia(g), f = "type_error:SafeStyle");
                                    l = f
                                } else {
                                    if (/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + l + '" given.');
                                    if (k.toLowerCase() in Ic)
                                        if (l instanceof tc) l instanceof tc && l.constructor ===
                                            tc && l.h === sc ? l = l.g : (ia(l), l = "type_error:TrustedResourceUrl");
                                        else if (l instanceof wc) l = xc(l);
                                    else if (q(l)) l = Bc(l).Ga();
                                    else throw Error('Attribute "' + k + '" on tag "' + g + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + l + '" given.');
                                }
                                l.Ia && (l = l.Ga());
                                k = k + '="' + Fa(String(l)) + '"';
                                e += " " + k
                            }
                        }
                    var V = "<" + a + e;
                    null != c ? ka(c) || (c = [c]) : c = [];
                    !0 === ic[a.toLowerCase()] ? V += ">" : (d = Jc(c), V += ">" + Ec(d) + "</" + a + ">", d = d.fb());
                    (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
                    return Fc(V, d)
                },
                Lc = function(a,
                    b, c) {
                    var d = {},
                        e;
                    for (e in a) d[e] = a[e];
                    for (e in b) d[e] = b[e];
                    for (e in c) {
                        var f = e.toLowerCase();
                        if (f in a) throw Error('Cannot override "' + f + '" attribute, got "' + e + '" with value "' + c[e] + '"');
                        f in b && delete d[f];
                        d[e] = c[e]
                    }
                    return d
                };
            Fc("<!DOCTYPE html>", 0);
            Fc("", 0);
            Fc("<br>", 0);
            var G = function(a, b) {
                this.width = a;
                this.height = b
            };
            h = G.prototype;
            h.clone = function() {
                return new G(this.width, this.height)
            };
            h.sa = function() {
                return this.width * this.height
            };
            h.isEmpty = function() {
                return !this.sa()
            };
            h.floor = function() {
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this
            };
            h.round = function() {
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this
            };
            h.scale = function(a, b) {
                b = r(b) ? b : a;
                this.width *= a;
                this.height *= b;
                return this
            };
            var Sc = function(a) {
                    return a ? new Qc(Rc(a)) : va || (va = new Qc)
                },
                Uc = function(a, b) {
                    kb(b, function(b, d) {
                        b && b.Ia && (b = b.Ga());
                        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Tc.hasOwnProperty(d) ? a.setAttribute(Tc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
                    })
                },
                Tc = {
                    cellpadding: "cellPadding",
                    cellspacing: "cellSpacing",
                    colspan: "colSpan",
                    frameborder: "frameBorder",
                    height: "height",
                    maxlength: "maxLength",
                    nonce: "nonce",
                    role: "role",
                    rowspan: "rowSpan",
                    type: "type",
                    usemap: "useMap",
                    valign: "vAlign",
                    width: "width"
                },
                Vc = function(a) {
                    a = a.document;
                    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
                    return new G(a.clientWidth, a.clientHeight)
                },
                Wc = function(a) {
                    var b = a.scrollingElement ? a.scrollingElement : Pb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
                    a = a.parentWindow || a.defaultView;
                    return D && E("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
                },
                H = function(a) {
                    return a ?
                        a.parentWindow || a.defaultView : window
                },
                Yc = function(a, b, c) {
                    var d = arguments,
                        e = document,
                        f = String(d[0]),
                        g = d[1];
                    if (!gc && g && (g.name || g.type)) {
                        f = ["<", f];
                        g.name && f.push(' name="', Fa(g.name), '"');
                        if (g.type) {
                            f.push(' type="', Fa(g.type), '"');
                            var k = {};
                            Bb(k, g);
                            delete k.type;
                            g = k
                        }
                        f.push(">");
                        f = f.join("")
                    }
                    f = e.createElement(f);
                    g && (q(g) ? f.className = g : ka(g) ? f.className = g.join(" ") : Uc(f, g));
                    2 < d.length && Xc(e, f, d);
                    return f
                },
                Xc = function(a, b, c) {
                    function d(c) {
                        c && b.appendChild(q(c) ? a.createTextNode(c) : c)
                    }
                    for (var e = 2; e < c.length; e++) {
                        var f =
                            c[e];
                        !ma(f) || na(f) && 0 < f.nodeType ? d(f) : A(Zc(f) ? cb(f) : f, d)
                    }
                },
                $c = function(a) {
                    for (var b; b = a.firstChild;) a.removeChild(b)
                },
                ad = function(a) {
                    a && a.parentNode && a.parentNode.removeChild(a)
                },
                bd = function(a, b) {
                    if (!a || !b) return !1;
                    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
                    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
                    for (; b && a != b;) b = b.parentNode;
                    return b == a
                },
                Rc = function(a) {
                    return 9 == a.nodeType ? a : a.ownerDocument || a.document
                },
                cd = function(a) {
                    try {
                        return a.contentWindow ||
                            (a.contentDocument ? H(a.contentDocument) : null)
                    } catch (b) {}
                    return null
                },
                Zc = function(a) {
                    if (a && "number" == typeof a.length) {
                        if (na(a)) return "function" == typeof a.item || "string" == typeof a.item;
                        if (v(a)) return "function" == typeof a.item
                    }
                    return !1
                },
                Qc = function(a) {
                    this.g = a || m.document || document
                };
            Qc.prototype.Fa = function(a) {
                return q(a) ? this.g.getElementById(a) : a
            };
            Qc.prototype.createElement = function(a) {
                return this.g.createElement(String(a))
            };
            Qc.prototype.appendChild = function(a, b) {
                a.appendChild(b)
            };
            Qc.prototype.contains = bd;
            var I = function(a, b, c, d) {
                this.top = a;
                this.right = b;
                this.bottom = c;
                this.left = d
            };
            h = I.prototype;
            h.tb = function() {
                return this.right - this.left
            };
            h.sb = function() {
                return this.bottom - this.top
            };
            h.clone = function() {
                return new I(this.top, this.right, this.bottom, this.left)
            };
            h.contains = function(a) {
                return this && a ? a instanceof I ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
            };
            h.floor = function() {
                this.top = Math.floor(this.top);
                this.right = Math.floor(this.right);
                this.bottom = Math.floor(this.bottom);
                this.left = Math.floor(this.left);
                return this
            };
            h.round = function() {
                this.top = Math.round(this.top);
                this.right = Math.round(this.right);
                this.bottom = Math.round(this.bottom);
                this.left = Math.round(this.left);
                return this
            };
            var dd = function(a, b, c) {
                b instanceof F ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, r(c) && (a.top += c, a.bottom += c));
                return a
            };
            I.prototype.scale = function(a, b) {
                b = r(b) ? b : a;
                this.left *= a;
                this.right *= a;
                this.top *= b;
                this.bottom *= b;
                return this
            };
            var ed = function(a, b, c, d) {
                this.left = a;
                this.top = b;
                this.width = c;
                this.height = d
            };
            ed.prototype.clone = function() {
                return new ed(this.left, this.top, this.width, this.height)
            };
            var fd = function(a) {
                return new I(a.top, a.left + a.width, a.top + a.height, a.left)
            };
            ed.prototype.contains = function(a) {
                return a instanceof F ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
            };
            ed.prototype.floor = function() {
                this.left = Math.floor(this.left);
                this.top = Math.floor(this.top);
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this
            };
            ed.prototype.round = function() {
                this.left = Math.round(this.left);
                this.top = Math.round(this.top);
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this
            };
            ed.prototype.scale = function(a, b) {
                b = r(b) ? b : a;
                this.left *= a;
                this.width *= a;
                this.top *= b;
                this.height *= b;
                return this
            };
            var gd = {},
                hd = function(a, b) {
                    var c = gd[b];
                    if (!c) {
                        var d = Pa(b),
                            c = d;
                        void 0 === a.style[d] && (d = (Pb ? "Webkit" : Ob ? "Moz" : D ? "ms" : Kb ? "O" : null) + Qa(d), void 0 !== a.style[d] && (c = d));
                        gd[b] = c
                    }
                    return c
                },
                id = function(a, b) {
                    var c = a.style[Pa(b)];
                    return "undefined" !== typeof c ? c : a.style[hd(a, b)] || ""
                },
                kd = function(a, b) {
                    if (b instanceof F) {
                        var c = b.x;
                        b = b.y
                    } else c = b, b = void 0;
                    a.style.left = jd(c, !1);
                    a.style.top = jd(b, !1)
                },
                ld = function(a) {
                    return new F(a.offsetLeft, a.offsetTop)
                },
                md = function(a) {
                    try {
                        var b = a.getBoundingClientRect()
                    } catch (c) {
                        return {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        }
                    }
                    D && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
                    return b
                },
                nd = function(a) {
                    var b = Rc(a),
                        c = new F(0, 0);
                    var d = b ? Rc(b) : document;
                    d = !D || 9 <= Number(dc) || "CSS1Compat" == Sc(d).g.compatMode ? d.documentElement : d.body;
                    if (a == d) return c;
                    a = md(a);
                    b = Wc(Sc(b).g);
                    c.x = a.left + b.x;
                    c.y = a.top + b.y;
                    return c
                },
                od = function(a, b) {
                    var c = new F(0, 0),
                        d = H(Rc(a));
                    if (!Hb(d, "parent")) return c;
                    do {
                        if (d == b) var e = nd(a);
                        else e = md(a), e = new F(e.left, e.top);
                        c.x += e.x;
                        c.y += e.y
                    } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
                    return c
                },
                pd = function(a, b, c) {
                    if (b instanceof G) c = b.height, b = b.width;
                    else if (void 0 == c) throw Error("missing height argument");
                    a.style.width = jd(b, !0);
                    a.style.height = jd(c, !0)
                },
                jd = function(a, b) {
                    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
                    return a
                },
                qd = function(a) {
                    var b = a.offsetWidth,
                        c = a.offsetHeight,
                        d = Pb && !b && !c;
                    return p(b) && !d || !a.getBoundingClientRect ? new G(b, c) : (a = md(a), new G(a.right -
                        a.left, a.bottom - a.top))
                };
            var rd = function(a) {
                    try {
                        return !!a && null != a.location.href && Hb(a, "foo")
                    } catch (b) {
                        return !1
                    }
                },
                sd = function(a, b) {
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
                },
                ud = function() {
                    var a = [];
                    sd(td, function(b) {
                        a.push(b)
                    });
                    return a
                },
                vd = /https?:\/\/[^\/]+/,
                wd = function() {
                    var a = m;
                    try {
                        for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                            case "https:":
                                return !0;
                            case "file:":
                                return !1;
                            case "http:":
                                return !1
                        }
                    } catch (c) {}
                    return !0
                },
                yd = function() {
                    var a = xd;
                    if (!a) return "";
                    var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
                    try {
                        var c = b.exec(decodeURIComponent(a));
                        if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
                    } catch (d) {}
                    return ""
                };
            var zd = function() {
                    var a = !1;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                a = !0
                            }
                        });
                        m.addEventListener("test", null, b)
                    } catch (c) {}
                    return a
                }(),
                Ad = function(a, b, c, d) {
                    a.addEventListener ? a.addEventListener(b, c, zd ? d : d ? d.capture || !1 : !1) : a.attachEvent && a.attachEvent("on" + b, c)
                },
                Bd = function(a, b, c) {
                    a.removeEventListener ? a.removeEventListener(b, c, zd ? void 0 : !1) : a.detachEvent && a.detachEvent("on" + b, c)
                };
            var Cd = function(a) {
                a = a || m;
                var b = a.context;
                if (!b) try {
                    b = a.parent.context
                } catch (c) {}
                try {
                    if (b && "pageViewId" in b && "canonicalUrl" in b) return b
                } catch (c) {}
                return null
            };
            var Dd = function(a, b, c) {
                a.google_image_requests || (a.google_image_requests = []);
                var d = a.document.createElement("img");
                if (c) {
                    var e = function(a) {
                        c(a);
                        Bd(d, "load", e);
                        Bd(d, "error", e)
                    };
                    Ad(d, "load", e);
                    Ad(d, "error", e)
                }
                d.src = b;
                a.google_image_requests.push(d)
            };
            var Ed = !!window.google_async_iframe_id,
                Fd = Ed && window.parent || window,
                Gd = function() {
                    if (Ed && !rd(Fd)) {
                        var a = "." + ua.domain;
                        try {
                            for (; 2 < a.split(".").length && !rd(Fd);) ua.domain = a = a.substr(a.indexOf(".") + 1), Fd = window.parent
                        } catch (b) {}
                        rd(Fd) || (Fd = window)
                    }
                    return Fd
                };
            var Hd = function(a, b, c) {
                c = void 0 === c ? {} : c;
                this.error = a;
                this.context = b.context;
                this.line = b.line || -1;
                this.msg = b.message || "";
                this.file = b.file || "";
                this.id = b.id || "jserror";
                this.meta = c
            };
            var Nd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
                Od = function(a, b) {
                    if (a) {
                        a = a.split("&");
                        for (var c = 0; c < a.length; c++) {
                            var d = a[c].indexOf("="),
                                e = null;
                            if (0 <= d) {
                                var f = a[c].substring(0, d);
                                e = a[c].substring(d + 1)
                            } else f = a[c];
                            b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                        }
                    }
                },
                Pd = function(a, b, c) {
                    if (ka(b))
                        for (var d = 0; d < b.length; d++) Pd(a, String(b[d]), c);
                    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
                },
                Qd = function(a,
                    b) {
                    var c = [];
                    for (b = b || 0; b < a.length; b += 2) Pd(a[b], a[b + 1], c);
                    return c.join("&")
                },
                Rd = function(a, b) {
                    var c = 2 == arguments.length ? Qd(arguments[1], 0) : Qd(arguments, 1);
                    if (c) {
                        var d = a.indexOf("#");
                        0 > d && (d = a.length);
                        var e = a.indexOf("?");
                        if (0 > e || e > d) {
                            e = d;
                            var f = ""
                        } else f = a.substring(e + 1, d);
                        d = [a.substr(0, e), f, a.substr(d)];
                        e = d[1];
                        d[1] = c ? e ? e + "&" + c : c : e;
                        c = d[0] + (d[1] ? "?" + d[1] : "") + d[2]
                    } else c = a;
                    return c
                },
                Sd = /#|$/,
                Td = function(a, b) {
                    var c = a.search(Sd);
                    a: {
                        var d = 0;
                        for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                            var f = a.charCodeAt(d -
                                1);
                            if (38 == f || 63 == f)
                                if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                            d += e + 1
                        }
                        d = -1
                    }
                    if (0 > d) return null;
                    e = a.indexOf("&", d);
                    if (0 > e || e > c) e = c;
                    d += b.length + 1;
                    return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
                };
            var Ud = function(a, b) {
                    this.g = a;
                    this.h = b
                },
                Vd = function(a, b, c) {
                    this.url = a;
                    this.lc = b;
                    this.Oc = !!c;
                    this.depth = r(void 0) ? void 0 : null
                },
                Xd = function(a) {
                    a = a ? a : Wd();
                    for (var b = new Vd(m.location.href, m, !1), c = a.length - 1, d = c; 0 <= d; --d) {
                        var e = a[d];
                        if (e.url && !e.Oc) {
                            b = e;
                            break
                        }
                    }
                    d = null;
                    e = a.length && a[c].url;
                    0 != b.depth && e && (d = a[c]);
                    return new Ud(b, d)
                },
                Wd = function() {
                    var a = m,
                        b = [],
                        c = null;
                    do {
                        var d = a;
                        if (rd(d)) {
                            var e = d.location.href;
                            c = d.document && d.document.referrer || null
                        } else e = c, c = null;
                        b.push(new Vd(e || "", d));
                        try {
                            a = d.parent
                        } catch (f) {
                            a =
                                null
                        }
                    } while (a && d != a);
                    a = 0;
                    for (d = b.length - 1; a <= d; ++a) b[a].depth = d - a;
                    d = m;
                    if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
                        for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.Oc = !0);
                    return b
                };
            var Yd = function(a, b, c, d, e) {
                    this.C = c || 4E3;
                    this.l = a || "&";
                    this.A = b || ",$";
                    this.o = p(d) ? d : "trn";
                    this.B = e || null;
                    this.w = !1;
                    this.h = {};
                    this.G = 0;
                    this.g = []
                },
                Zd = function(a, b) {
                    var c = {};
                    c[a] = b;
                    return [c]
                },
                ae = function(a, b, c, d, e) {
                    var f = [];
                    sd(a, function(a, k) {
                        (a = $d(a, b, c, d, e)) && f.push(k + "=" + a)
                    });
                    return f.join(b)
                },
                $d = function(a, b, c, d, e) {
                    if (null == a) return "";
                    b = b || "&";
                    c = c || ",$";
                    "string" == typeof c && (c = c.split(""));
                    if (a instanceof Array) {
                        if (d = d || 0, d < c.length) {
                            for (var f = [], g = 0; g < a.length; g++) f.push($d(a[g], b, c, d + 1, e));
                            return f.join(c[d])
                        }
                    } else if ("object" ==
                        typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ae(a, b, c, d, e + 1)) : "...";
                    return encodeURIComponent(String(a))
                },
                be = function(a, b, c, d) {
                    a.g.push(b);
                    a.h[b] = Zd(c, d)
                },
                de = function(a, b, c, d) {
                    b = b + "//" + c + d;
                    var e = ce(a) - d.length - 0;
                    if (0 > e) return "";
                    a.g.sort(function(a, b) {
                        return a - b
                    });
                    d = null;
                    c = "";
                    for (var f = 0; f < a.g.length; f++)
                        for (var g = a.g[f], k = a.h[g], l = 0; l < k.length; l++) {
                            if (!e) {
                                d = null == d ? g : d;
                                break
                            }
                            var n = ae(k[l], a.l, a.A);
                            if (n) {
                                n = c + n;
                                if (e >= n.length) {
                                    e -= n.length;
                                    b += n;
                                    c = a.l;
                                    break
                                } else a.w && (c = e, n[c - 1] == a.l && --c, b += n.substr(0,
                                    c), c = a.l, e = 0);
                                d = null == d ? g : d
                            }
                        }
                    f = "";
                    a.o && null != d && (f = c + a.o + "=" + (a.B || d));
                    return b + f + ""
                },
                ce = function(a) {
                    if (!a.o) return a.C;
                    var b = 1,
                        c;
                    for (c in a.h) b = c.length > b ? c.length : b;
                    return a.C - a.o.length - b - a.l.length - 1
                };
            var ee = function(a, b, c, d, e) {
                if (Math.random() < (d || a.g)) try {
                    if (c instanceof Yd) var f = c;
                    else f = new Yd, sd(c, function(a, b) {
                        var c = f,
                            d = c.G++;
                        a = Zd(b, a);
                        c.g.push(d);
                        c.h[d] = a
                    });
                    var g = de(f, a.o, a.h, a.l + b + "&");
                    g && ("undefined" === typeof e ? Dd(m, g) : Dd(m, g, e))
                } catch (k) {}
            };
            var fe = function(a) {
                    this.h = {};
                    this.g = {};
                    a = a || [];
                    for (var b = 0, c = a.length; b < c; ++b) this.g[a[b]] = ""
                },
                he = function() {
                    var a = ge(),
                        b = new fe;
                    sd(a.h, function(a, d) {
                        b.h[d] = a
                    });
                    sd(a.g, function(a, d) {
                        b.g[d] = a
                    });
                    return b
                };
            var je = function(a, b) {
                var c = ie();
                this.label = a;
                this.type = b;
                this.value = c;
                this.duration = 0;
                this.uniqueId = this.label + "_" + this.type + "_" + Math.random()
            };
            var ke = function(a, b) {
                this.events = [];
                this.h = b || m;
                var c = null;
                b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
                a: {
                    try {
                        var d = (this.h || m).top.location.hash;
                        if (d) {
                            var e = d.match(/\bdeid=([\d,]+)/);
                            var f = e && e[1] || "";
                            break a
                        }
                    } catch (g) {}
                    f = ""
                }
                b = f;
                b = b.indexOf && 0 <= b.indexOf("1337");
                this.g = (this.g = null != c ? c : Math.random() < a) || b;
                a = this.h.performance;
                this.l = !!(a && a.mark && a.clearMarks && b)
            };
            ke.prototype.o = function(a) {
                if (a && this.l) {
                    var b = this.h.performance;
                    b.clearMarks("goog_" + a.uniqueId + "_start");
                    b.clearMarks("goog_" + a.uniqueId + "_end")
                }
            };
            ke.prototype.start = function(a, b) {
                if (!this.g) return null;
                a = new je(a, b);
                this.l && this.h.performance.mark("goog_" + a.uniqueId + "_start");
                return a
            };
            var ie = function() {
                var a = m.performance;
                return a && a.now ? a.now() : ta()
            };
            var le = function(a, b, c, d) {
                    this.o = a;
                    this.C = b;
                    this.l = c;
                    this.w = this.h;
                    this.g = void 0 === d ? null : d
                },
                ne = function(a, b, c, d, e) {
                    try {
                        if (a.g && a.g.g) {
                            var f = a.g.start(b.toString(), 3);
                            var g = c();
                            var k = a.g;
                            c = f;
                            k.g && (c.duration = ie() - c.value, k.l && k.h.performance.mark("goog_" + c.uniqueId + "_end"), k.g && k.events.push(c))
                        } else g = c()
                    } catch (n) {
                        k = a.l;
                        try {
                            a.g && f && a.g.o(f);
                            var l = me(n),
                                k = (e || a.w).call(a, b, l, void 0, d)
                        } catch (u) {
                            a.h(217, u)
                        }
                        if (!k) throw n;
                    }
                    return g
                },
                pe = function(a, b, c, d) {
                    var e = oe;
                    return function(f) {
                        for (var g = [], k = 0; k < arguments.length; ++k) g[k -
                            0] = arguments[k];
                        return ne(e, a, function() {
                            return b.apply(c, g)
                        }, d, void 0)
                    }
                };
            le.prototype.h = function(a, b, c, d, e) {
                e = e || this.C;
                try {
                    var f = new Yd;
                    f.w = !0;
                    be(f, 1, "context", a);
                    b.error && b.meta && b.id || (b = me(b));
                    b.msg && be(f, 2, "msg", b.msg.substring(0, 512));
                    b.file && be(f, 3, "file", b.file);
                    0 < b.line && be(f, 4, "line", b.line);
                    var g = b.meta || {};
                    if (d) try {
                        d(g)
                    } catch (l) {}
                    b = [g];
                    f.g.push(5);
                    f.h[5] = b;
                    var k = Xd();
                    k.h && be(f, 6, "top", k.h.url || "");
                    be(f, 7, "url", k.g.url || "");
                    ee(this.o, e, f, c)
                } catch (l) {
                    try {
                        ee(this.o, e, {
                            context: "ecmserr",
                            rctx: a,
                            msg: qe(l),
                            url: k.g.url
                        }, c)
                    } catch (n) {}
                }
                return this.l
            };
            var me = function(a) {
                    return new re(qe(a), a.fileName, a.lineNumber)
                },
                qe = function(a) {
                    var b = a.toString();
                    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
                    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
                    if (a.stack) {
                        a = a.stack;
                        var c = b;
                        try {
                            -1 == a.indexOf(c) && (a = c + "\n" + a);
                            for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                            b = a.replace(/\n */g, "\n")
                        } catch (e) {
                            b = c
                        }
                    }
                    return b
                },
                re = function(a, b, c) {
                    Hd.call(this, Error(a), {
                        message: a,
                        file: void 0 === b ? "" : b,
                        line: void 0 === c ? -1 : c
                    })
                };
            aa(re, Hd);
            var se, oe, te = Gd(),
                ue = new ke(1, te),
                ve = function() {
                    te.google_measure_js_timing || (ue.events != ue.h.google_js_reporting_queue && (ue.events.length = 0, ue.l && A(ue.events, ue.o, ue)), ue.g = !1)
                };
            se = new function() {
                this.o = "http:" === y.location.protocol ? "http:" : "https:";
                this.h = "pagead2.googlesyndication.com";
                this.l = "/pagead/gen_204?id=";
                this.g = .01
            };
            oe = new le(se, "jserror", !0, ue);
            "complete" == te.document.readyState ? ve() : ue.g && Ad(te, "load", function() {
                ve()
            });
            var xe = function(a, b) {
                    return ne(oe, a, b, void 0, we)
                },
                ye = function(a, b, c, d) {
                    return pe(a, b, c, d)
                },
                we = oe.h,
                ze = function(a, b) {
                    oe.h(a, b, void 0, void 0)
                };
            var Ae = function(a) {
                for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, rd(a) && (c = a, b = d);
                return {
                    lc: c,
                    level: b
                }
            };
            var Be = function(a) {
                fe.call(this, a);
                this.dfltBktExt = this.h;
                this.lrsExt = this.g
            };
            x(Be, fe);
            var Ce = function() {
                    this.S = {}
                },
                Ee = function() {
                    if (De) return De;
                    var a;
                    (a = Cd()) ? (a = a.master, a = rd(a) ? a : null) : a = null;
                    a = a || Gd();
                    var b = a.google_persistent_state_async;
                    return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? De = b : a.google_persistent_state_async = De = new Ce
                },
                De = null,
                Fe = {
                    8: "google_prev_ad_formats_by_region",
                    9: "google_prev_ad_slotnames_by_region"
                };
            var td = {
                    bi: 5,
                    Kh: 7,
                    ji: 17,
                    lh: 19,
                    Vg: 41,
                    Gh: 48,
                    Tj: 55,
                    Cg: 59,
                    Qj: 61,
                    Pj: 62,
                    oj: 67,
                    Kj: 69,
                    Nh: 70,
                    hi: 74,
                    hj: 75,
                    Rj: 77,
                    Hk: 79,
                    jl: 80,
                    ni: 81,
                    Uj: 82,
                    Vj: 83,
                    Zk: 84,
                    rk: 86,
                    yj: 87,
                    ak: 88,
                    bh: 89,
                    zj: 90,
                    Ik: 92,
                    Dg: 93,
                    Oj: 94,
                    al: 95,
                    Eg: 96,
                    $k: 97,
                    Sh: 98
                },
                Ge = null,
                He = function(a) {
                    try {
                        return !!a && Gb(!0)
                    } catch (b) {
                        return !1
                    }
                },
                Ie = function() {
                    if (He(Ge)) return !0;
                    var a = Ee();
                    var b = Fe[3] || "google_ps_3";
                    var a = a.S,
                        c = a[b];
                    b = void 0 === c ? a[b] = null : c;
                    b && (b && b.dfltBktExt && b.lrsExt ? (a = new Be, a.h = b.dfltBktExt, a.dfltBktExt = a.h, a.g = b.lrsExt, a.lrsExt = a.g, b = a) : b = null,
                        b || (b = new Be, a = {
                            context: "ps::gpes::cf",
                            url: Gd().location.href
                        }, ee(se, "jserror", a, void 0, void 0)));
                    return He(b) ? (Ge = b, !0) : !1
                },
                ge = function() {
                    if (Ie()) return Ge;
                    var a = Ee(),
                        b = new Be(ud());
                    return Ge = a.S[Fe[3] || "google_ps_3"] = b
                },
                Je = null;
            var Ke = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
            var Le = function(a, b, c) {
                this.l = b;
                this.h = c;
                this.o = a
            };
            x(Le, Error);
            h = Le.prototype;
            h.se = function() {
                return this.g
            };
            h.te = function() {
                return this.l
            };
            h.re = function() {
                return this.h
            };
            h.Od = function() {
                return 1E3 > this.h ? this.h : 900
            };
            h.ue = function() {
                return this.o
            };
            h.toString = function() {
                return "AdError " + this.h + ": " + this.l + (null != this.g ? " Caused by: " + this.g : "")
            };
            var Me = function() {
                this.Y = this.Y;
                this.N = this.N
            };
            Me.prototype.Y = !1;
            Me.prototype.O = function() {
                this.Y || (this.Y = !0, this.L())
            };
            var Ne = function(a, b) {
                a.Y ? p(void 0) ? b.call(void 0) : b() : (a.N || (a.N = []), a.N.push(p(void 0) ? w(b, void 0) : b))
            };
            Me.prototype.L = function() {
                if (this.N)
                    for (; this.N.length;) this.N.shift()()
            };
            var J = function(a) {
                a && "function" == typeof a.O && a.O()
            };
            var K = function(a, b) {
                this.type = a;
                this.h = this.o = b;
                this.l = !1;
                this.dd = !0
            };
            K.prototype.C = function() {
                this.l = !0
            };
            K.prototype.w = function() {
                this.dd = !1
            };
            var Oe = function(a) {
                a.C()
            };
            var Pe = function(a, b) {
                K.call(this, "adError");
                this.g = a;
                this.A = b ? b : null
            };
            x(Pe, K);
            Pe.prototype.G = function() {
                return this.g
            };
            Pe.prototype.B = function() {
                return this.A
            };
            var L = function(a, b, c) {
                K.call(this, a);
                this.G = b;
                this.A = null != c ? c : null
            };
            x(L, K);
            L.prototype.D = function() {
                return this.G
            };
            L.prototype.F = function() {
                return this.A
            };
            var Qe = function(a) {
                    this.g = a
                },
                Te = function() {
                    var a = Re(M);
                    return Se(a, "disableExperiments")
                },
                Se = function(a, b) {
                    return tb(a.g, b) && (a = a.g[b], "boolean" == typeof a) ? a : !1
                },
                Ue = function(a) {
                    if (tb(a.g, "forceExperimentIds")) {
                        a = a.g.forceExperimentIds;
                        var b = [],
                            c = 0;
                        ka(a) && A(a, function(a) {
                            r(a) && (b[c++] = a)
                        });
                        return b
                    }
                    return null
                };
            var Ve = function(a) {
                    return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
                },
                Xe = function(a) {
                    a = String(a);
                    if (Ve(a)) try {
                        return eval("(" + a + ")")
                    } catch (b) {}
                    throw Error("Invalid JSON string: " + a);
                },
                ff = function(a) {
                    var b = [];
                    df(new ef, a, b);
                    return b.join("")
                },
                ef = function() {},
                df = function(a,
                    b, c) {
                    if (null == b) c.push("null");
                    else {
                        if ("object" == typeof b) {
                            if (ka(b)) {
                                var d = b;
                                b = d.length;
                                c.push("[");
                                for (var e = "", f = 0; f < b; f++) c.push(e), df(a, d[f], c), e = ",";
                                c.push("]");
                                return
                            }
                            if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                            else {
                                c.push("{");
                                e = "";
                                for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), gf(d, c), c.push(":"), df(a, f, c), e = ","));
                                c.push("}");
                                return
                            }
                        }
                        switch (typeof b) {
                            case "string":
                                gf(b, c);
                                break;
                            case "number":
                                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                                break;
                            case "boolean":
                                c.push(String(b));
                                break;
                            case "function":
                                c.push("null");
                                break;
                            default:
                                throw Error("Unknown type: " + typeof b);
                        }
                    }
                },
                hf = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "/": "\\/",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t",
                    "\x0B": "\\u000b"
                },
                jf = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
                gf = function(a, b) {
                    b.push('"', a.replace(jf, function(a) {
                        var b = hf[a];
                        b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), hf[a] = b);
                        return b
                    }), '"')
                };
            var kf = function(a) {
                return function() {
                    return a
                }
            };
            var lf = "StopIteration" in m ? m.StopIteration : {
                    message: "StopIteration",
                    stack: ""
                },
                mf = function() {};
            mf.prototype.next = function() {
                throw lf;
            };
            mf.prototype.La = function() {
                return this
            };
            var nf = function(a) {
                    if (a instanceof mf) return a;
                    if ("function" == typeof a.La) return a.La(!1);
                    if (ma(a)) {
                        var b = 0,
                            c = new mf;
                        c.next = function() {
                            for (;;) {
                                if (b >= a.length) throw lf;
                                if (b in a) return a[b++];
                                b++
                            }
                        };
                        return c
                    }
                    throw Error("Not implemented");
                },
                of = function(a, b, c) {
                    if (ma(a)) try {
                        A(a, b, c)
                    } catch (d) {
                        if (d !== lf) throw d;
                    } else {
                        a = nf(a);
                        try {
                            for (;;) b.call(c, a.next(), void 0, a)
                        } catch (d) {
                            if (d !== lf) throw d;
                        }
                    }
                };
            var pf = function(a, b) {
                this.h = {};
                this.g = [];
                this.o = this.l = 0;
                var c = arguments.length;
                if (1 < c) {
                    if (c % 2) throw Error("Uneven number of arguments");
                    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
                } else if (a) {
                    a instanceof pf ? (c = a.Oa(), d = a.ca()) : (c = rb(a), d = qb(a));
                    for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
                }
            };
            h = pf.prototype;
            h.Ea = function() {
                return this.l
            };
            h.ca = function() {
                qf(this);
                for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
                return a
            };
            h.Oa = function() {
                qf(this);
                return this.g.concat()
            };
            h.isEmpty = function() {
                return 0 == this.l
            };
            h.clear = function() {
                this.h = {};
                this.o = this.l = this.g.length = 0
            };
            h.Va = function(a) {
                return rf(this.h, a) ? (delete this.h[a], this.l--, this.o++, this.g.length > 2 * this.l && qf(this), !0) : !1
            };
            var qf = function(a) {
                var b, c;
                if (a.l != a.g.length) {
                    for (b = c = 0; c < a.g.length;) {
                        var d = a.g[c];
                        rf(a.h, d) && (a.g[b++] = d);
                        c++
                    }
                    a.g.length = b
                }
                if (a.l != a.g.length) {
                    var e = {};
                    for (b = c = 0; c < a.g.length;) d = a.g[c], rf(e, d) || (a.g[b++] = d, e[d] = 1), c++;
                    a.g.length = b
                }
            };
            h = pf.prototype;
            h.get = function(a, b) {
                return rf(this.h, a) ? this.h[a] : b
            };
            h.set = function(a, b) {
                rf(this.h, a) || (this.l++, this.g.push(a), this.o++);
                this.h[a] = b
            };
            h.forEach = function(a, b) {
                for (var c = this.Oa(), d = 0; d < c.length; d++) {
                    var e = c[d],
                        f = this.get(e);
                    a.call(b, f, e, this)
                }
            };
            h.clone = function() {
                return new pf(this)
            };
            h.La = function(a) {
                qf(this);
                var b = 0,
                    c = this.o,
                    d = this,
                    e = new mf;
                e.next = function() {
                    if (c != d.o) throw Error("The map has changed since the iterator was created");
                    if (b >= d.g.length) throw lf;
                    var e = d.g[b++];
                    return a ? e : d.h[e]
                };
                return e
            };
            var rf = function(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            };
            var sf = function(a) {
                if (a.ca && "function" == typeof a.ca) return a.ca();
                if (q(a)) return a.split("");
                if (ma(a)) {
                    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                    return b
                }
                return qb(a)
            };
            var tf = function(a, b) {
                this.g = this.G = this.l = "";
                this.A = null;
                this.w = this.C = "";
                this.o = !1;
                var c;
                a instanceof tf ? (this.o = p(b) ? b : a.o, uf(this, a.l), this.G = a.G, this.g = a.g, vf(this, a.A), this.C = a.C, wf(this, a.h.clone()), this.w = a.w) : a && (c = String(a).match(Nd)) ? (this.o = !!b, uf(this, c[1] || "", !0), this.G = xf(c[2] || ""), this.g = xf(c[3] || "", !0), vf(this, c[4]), this.C = xf(c[5] || "", !0), wf(this, c[6] || "", !0), this.w = xf(c[7] || "")) : (this.o = !!b, this.h = new yf(null, 0, this.o))
            };
            tf.prototype.toString = function() {
                var a = [],
                    b = this.l;
                b && a.push(zf(b, Af, !0), ":");
                var c = this.g;
                if (c || "file" == b) a.push("//"), (b = this.G) && a.push(zf(b, Af, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.A, null != c && a.push(":", String(c));
                if (c = this.C) this.g && "/" != c.charAt(0) && a.push("/"), a.push(zf(c, "/" == c.charAt(0) ? Bf : Cf, !0));
                (c = this.h.toString()) && a.push("?", c);
                (c = this.w) && a.push("#", zf(c, Df));
                return a.join("")
            };
            tf.prototype.clone = function() {
                return new tf(this)
            };
            var uf = function(a, b, c) {
                    a.l = c ? xf(b, !0) : b;
                    a.l && (a.l = a.l.replace(/:$/, ""))
                },
                vf = function(a, b) {
                    if (b) {
                        b = Number(b);
                        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                        a.A = b
                    } else a.A = null
                },
                wf = function(a, b, c) {
                    b instanceof yf ? (a.h = b, Ef(a.h, a.o)) : (c || (b = zf(b, Ff)), a.h = new yf(b, 0, a.o))
                },
                xf = function(a, b) {
                    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
                },
                zf = function(a, b, c) {
                    return q(a) ? (a = encodeURI(a).replace(b, Gf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
                },
                Gf = function(a) {
                    a = a.charCodeAt(0);
                    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
                },
                Af = /[#\/\?@]/g,
                Cf = /[\#\?:]/g,
                Bf = /[\#\?]/g,
                Ff = /[\#\?@]/g,
                Df = /#/g,
                yf = function(a, b, c) {
                    this.h = this.g = null;
                    this.l = a || null;
                    this.o = !!c
                },
                Hf = function(a) {
                    a.g || (a.g = new pf, a.h = 0, a.l && Od(a.l, function(b, c) {
                        b = decodeURIComponent(b.replace(/\+/g, " "));
                        Hf(a);
                        a.l = null;
                        b = If(a, b);
                        var d = a.g.get(b);
                        d || a.g.set(b, d = []);
                        d.push(c);
                        a.h += 1
                    }))
                };
            yf.prototype.Ea = function() {
                Hf(this);
                return this.h
            };
            var Jf = function(a, b) {
                Hf(a);
                b = If(a, b);
                rf(a.g.h, b) && (a.l = null, a.h -= a.g.get(b).length, a.g.Va(b))
            };
            yf.prototype.clear = function() {
                this.g = this.l = null;
                this.h = 0
            };
            yf.prototype.isEmpty = function() {
                Hf(this);
                return 0 == this.h
            };
            var Kf = function(a, b) {
                Hf(a);
                b = If(a, b);
                return rf(a.g.h, b)
            };
            h = yf.prototype;
            h.forEach = function(a, b) {
                Hf(this);
                this.g.forEach(function(c, d) {
                    A(c, function(c) {
                        a.call(b, c, d, this)
                    }, this)
                }, this)
            };
            h.Oa = function() {
                Hf(this);
                for (var a = this.g.ca(), b = this.g.Oa(), c = [], d = 0; d < b.length; d++)
                    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
                return c
            };
            h.ca = function(a) {
                Hf(this);
                var b = [];
                if (q(a)) Kf(this, a) && (b = bb(b, this.g.get(If(this, a))));
                else {
                    a = this.g.ca();
                    for (var c = 0; c < a.length; c++) b = bb(b, a[c])
                }
                return b
            };
            h.set = function(a, b) {
                Hf(this);
                this.l = null;
                a = If(this, a);
                Kf(this, a) && (this.h -= this.g.get(a).length);
                this.g.set(a, [b]);
                this.h += 1;
                return this
            };
            h.get = function(a, b) {
                a = a ? this.ca(a) : [];
                return 0 < a.length ? String(a[0]) : b
            };
            h.toString = function() {
                if (this.l) return this.l;
                if (!this.g) return "";
                for (var a = [], b = this.g.Oa(), c = 0; c < b.length; c++)
                    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ca(d), f = 0; f < d.length; f++) {
                        var g = e;
                        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                        a.push(g)
                    }
                return this.l = a.join("&")
            };
            h.clone = function() {
                var a = new yf;
                a.l = this.l;
                this.g && (a.g = this.g.clone(), a.h = this.h);
                return a
            };
            var If = function(a, b) {
                    b = String(b);
                    a.o && (b = b.toLowerCase());
                    return b
                },
                Ef = function(a, b) {
                    b && !a.o && (Hf(a), a.l = null, a.g.forEach(function(a, b) {
                        var c = b.toLowerCase();
                        b != c && (Jf(this, b), Jf(this, c), 0 < a.length && (this.l = null, this.g.set(If(this, c), cb(a)), this.h += a.length))
                    }, a));
                    a.o = b
                };
            var Mf = function(a) {
                    var b = a || Wd();
                    a = b.length - 1;
                    var c = Xd(b),
                        b = c.g,
                        d = c.h,
                        c = [];
                    d ? (b && c.push(Lf(a, [d.url, 2], 0, [b.url, 0], b.depth)), c.push(Lf(a, [d.url, 2], 0))) : b.url && (c.push(Lf(a, void 0, void 0, [b.url, 0], b.depth)), (d = (d = vd.exec(b.url)) && d[0] || "") && c.push(Lf(a, [d, 1], b.depth)));
                    c.push(Lf(a));
                    return c
                },
                Lf = function(a, b, c, d, e) {
                    a = [a];
                    if (p(b) && p(c)) {
                        for (var f = 0; f < c; f++) a.push("");
                        a.push(b)
                    }
                    if (p(d) && p(e)) {
                        b = e - a.length + 1;
                        for (f = 0; f < b; f++) a.push("");
                        a.push(d)
                    }
                    return a
                },
                Nf = function() {
                    var a = Mf();
                    return Ta(a, function(a) {
                        return $d(a)
                    })
                };
            var O = function() {
                    this.A = "always";
                    this.F = 4;
                    this.I = 1;
                    this.o = !0;
                    this.l = this.T = this.g = !1;
                    this.C = "en";
                    this.K = this.D = !1;
                    this.H = this.B = "";
                    this.N = null;
                    this.G = !1;
                    this.M = this.J = -1;
                    this.h = !1;
                    try {
                        this.V = Mf(void 0)[0]
                    } catch (a) {}
                },
                Of = "af am ar bg bn ca cs da de el en en_gb es es_419 et eu fa fi fil fr fr_ca gl gu he hi hr hu id in is it iw ja kn ko lt lv ml mr ms nb nl no pl pt_br pt_pt ro ru sk sl sr sv sw ta te th tr uk ur vi zh_cn zh_hk zh_tw zu".split(" "),
                Pf = function(a) {
                    a = Ja(a);
                    wa(a) || (a = a.substring(0, 20));
                    return a
                };
            h = O.prototype;
            h.wf = function(a) {
                this.A = a
            };
            h.lf = function() {
                return this.A
            };
            h.Bf = function(a) {
                this.F = a
            };
            h.pf = function() {
                return this.F
            };
            h.Ff = function(a) {
                this.Y = a
            };
            h.sf = function() {
                return this.Y
            };
            h.If = function(a) {
                "boolean" == typeof a && (this.I = a ? 1 : 0)
            };
            h.Jf = function(a) {
                this.I = a
            };
            h.vf = function(a) {
                this.o = a
            };
            h.tf = function() {
                return this.o
            };
            h.Gf = function(a) {
                this.g = a
            };
            h.Sf = function() {
                return this.g
            };
            h.Za = function() {
                return this.T
            };
            h.ng = function() {
                return !0
            };
            h.la = function() {
                return !1
            };
            h.Nc = function() {
                return !1
            };
            h.zf = function(a) {
                this.D = a
            };
            h.uf = function() {
                return this.D
            };
            h.Af = function(a) {
                this.K = a
            };
            h.Wb = function() {
                return this.K
            };
            h.ma = function() {
                return !1
            };
            h.Vb = function() {
                return !1
            };
            h.ig = function() {
                return !1
            };
            h.kg = function(a) {
                if (null != a) {
                    a = a.toLowerCase().replace("-", "_");
                    if (!Ya(Of, a) && (a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "", !Ya(Of, a))) return;
                    this.C = a
                }
            };
            h.Md = function() {
                return this.C
            };
            h.Df = function(a) {
                this.B = Pf(a)
            };
            h.qf = function() {
                return this.B
            };
            h.Ef = function(a) {
                this.H = Pf(a)
            };
            h.rf = function() {
                return this.H
            };
            var Re = function(a) {
                if (null == a.N) {
                    var b = {};
                    var c = (new tf(H().location.href)).h;
                    if (Kf(c, "tcnfp")) try {
                        b = Xe(c.get("tcnfp"))
                    } catch (d) {}
                    a.N = new Qe(b)
                }
                return a.N
            };
            h = O.prototype;
            h.yf = function(a) {
                this.G = a
            };
            h.nf = function() {
                return this.G
            };
            h.og = function() {
                return !1
            };
            h.Cf = function(a) {
                this.J = a
            };
            h.Hf = function(a) {
                this.M = a
            };
            h.xf = function(a) {
                this.h = a
            };
            h.mf = function() {
                return this.h
            };
            var M = new O;
            window.console && "function" === typeof window.console.log && w(window.console.log, window.console);
            var Qf = function() {
                    return Math.round(ta() / 1E3)
                },
                Rf = function(a) {
                    var b = window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
                    return null != b ? b : null != a ? a : Qf()
                };
            var Sf = function(a) {
                for (var b = [], c = a = H(a.ownerDocument); c != a.top; c = c.parent)
                    if (c.frameElement) b.push(c.frameElement);
                    else break;
                return b
            };
            var Tf = null,
                Uf = function() {
                    this.g = {};
                    this.h = 0
                },
                Vf = function(a, b) {
                    this.C = a;
                    this.o = !0;
                    this.g = b
                };
            Vf.prototype.h = function() {
                return this.g
            };
            Vf.prototype.l = function() {
                return String(this.g)
            };
            var Wf = function(a, b) {
                Vf.call(this, String(a), b);
                this.w = a;
                this.g = !!b
            };
            x(Wf, Vf);
            Wf.prototype.l = function() {
                return this.g ? "1" : "0"
            };
            var Xf = function(a, b) {
                Vf.call(this, a, b)
            };
            x(Xf, Vf);
            Xf.prototype.l = function() {
                return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : ""
            };
            var Yf = function(a) {
                    if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
                        a = a.split(".");
                        var b = Number(a[0]),
                            c = Number(a[1]);
                        return new Xf("", new ed(c, b, Number(a[3]) - c, Number(a[2]) - b))
                    }
                    return new Xf("", new ed(0, 0, 0, 0))
                },
                Zf = function() {
                    Tf || (Tf = new Uf);
                    return Tf
                },
                $f = function(a, b) {
                    a.g[b.C] = b
                };
            var ag = function(a) {
                    var b = new ed(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                        c = new ed(0, 0, 0, 0);
                    if (!a || 0 == a.length) return c;
                    for (var d = 0; d < a.length; d++) {
                        a: {
                            var e = b;
                            var f = a[d],
                                g = Math.max(e.left, f.left),
                                k = Math.min(e.left + e.width, f.left + f.width);
                            if (g <= k) {
                                var l = Math.max(e.top, f.top),
                                    f = Math.min(e.top + e.height, f.top + f.height);
                                if (l <= f) {
                                    e.left = g;
                                    e.top = l;
                                    e.width = k - g;
                                    e.height = f - l;
                                    e = !0;
                                    break a
                                }
                            }
                            e = !1
                        }
                        if (!e) return c
                    }
                    return b
                },
                bg = function(a, b) {
                    var c = a.getBoundingClientRect();
                    a = od(a,
                        b);
                    return new ed(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
                },
                cg = function(a, b, c) {
                    if (b && c) {
                        a: {
                            var d = Math.max(b.left, c.left);
                            var e = Math.min(b.left + b.width, c.left + c.width);
                            if (d <= e) {
                                var f = Math.max(b.top, c.top),
                                    g = Math.min(b.top + b.height, c.top + c.height);
                                if (f <= g) {
                                    d = new ed(d, f, e - d, g - f);
                                    break a
                                }
                            }
                            d = null
                        }
                        e = d ? d.height * d.width : 0;
                        f = d ? b.height * b.width : 0;
                        d = d && f ? Math.round(e / f * 100) : 0;
                        $f(a, new Vf("vp", d));
                        d && 0 < d ? (e = fd(b), f = fd(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;
                        $f(a, new Wf(512,
                            e));
                        d && 0 < d ? (e = fd(b), f = fd(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;
                        $f(a, new Wf(1024, e));
                        d && 0 < d ? (e = fd(b), f = fd(c), e = e.left >= f.left && e.left < f.right) : e = !1;
                        $f(a, new Wf(2048, e));
                        d && 0 < d ? (b = fd(b), c = fd(c), c = b.right <= c.right && b.right > c.left) : c = !1;
                        $f(a, new Wf(4096, c))
                    }
                };
            var dg = !D || 9 <= Number(dc),
                eg = D && !E("9");
            !Pb || E("528");
            Ob && E("1.9b") || D && E("8") || Kb && E("9.5") || Pb && E("528");
            Ob && !E("8") || D && E("9");
            var fg = function(a) {
                    return Pb ? "webkit" + a : Kb ? "o" + a.toLowerCase() : a.toLowerCase()
                },
                gg = {
                    CLICK: "click",
                    $j: "rightclick",
                    jh: "dblclick",
                    Gi: "mousedown",
                    Mi: "mouseup",
                    Li: "mouseover",
                    Ki: "mouseout",
                    Ji: "mousemove",
                    Hi: "mouseenter",
                    Ii: "mouseleave",
                    fk: "selectionchange",
                    gk: "selectstart",
                    il: "wheel",
                    li: "keypress",
                    ki: "keydown",
                    mi: "keyup",
                    Pg: "blur",
                    Oh: "focus",
                    kh: "deactivate",
                    Ph: D ? "focusin" : "DOMFocusIn",
                    Qh: D ? "focusout" : "DOMFocusOut",
                    Tg: "change",
                    Wj: "reset",
                    ek: "select",
                    wk: "submit",
                    fi: "input",
                    Mj: "propertychange",
                    Ch: "dragstart",
                    xh: "drag",
                    zh: "dragenter",
                    Bh: "dragover",
                    Ah: "dragleave",
                    Dh: "drop",
                    yh: "dragend",
                    Mk: "touchstart",
                    Lk: "touchmove",
                    Kk: "touchend",
                    Jk: "touchcancel",
                    Ng: "beforeunload",
                    ah: "consolemessage",
                    eh: "contextmenu",
                    mh: "devicemotion",
                    nh: "deviceorientation",
                    rh: "DOMContentLoaded",
                    sd: "error",
                    Yh: "help",
                    ri: "load",
                    Ai: "losecapture",
                    nj: "orientationchange",
                    Sj: "readystatechange",
                    Xj: "resize",
                    bk: "scroll",
                    Tk: "unload",
                    Qg: "canplay",
                    Rg: "canplaythrough",
                    Eh: "durationchange",
                    Fh: "emptied",
                    ENDED: "ended",
                    ui: "loadeddata",
                    wi: "loadedmetadata",
                    Gb: "pause",
                    zd: "play",
                    PLAYING: "playing",
                    Nj: "ratechange",
                    ck: "seeked",
                    dk: "seeking",
                    sk: "stalled",
                    xk: "suspend",
                    Dk: "timeupdate",
                    dl: "volumechange",
                    gl: "waiting",
                    qk: "sourceopen",
                    pk: "sourceended",
                    nk: "sourceclosed",
                    rg: "abort",
                    Vk: "update",
                    Yk: "updatestart",
                    Wk: "updateend",
                    Xh: "hashchange",
                    wj: "pagehide",
                    xj: "pageshow",
                    Jj: "popstate",
                    gh: "copy",
                    Aj: "paste",
                    hh: "cut",
                    Ig: "beforecopy",
                    Jg: "beforecut",
                    Lg: "beforepaste",
                    lj: "online",
                    ij: "offline",
                    Ei: "message",
                    $g: "connect",
                    gi: "install",
                    sg: "activate",
                    Lh: "fetch",
                    Rh: "foreignfetch",
                    Fi: "messageerror",
                    tk: "statechange",
                    Xk: "updatefound",
                    fh: "controllerchange",
                    Hg: fg("AnimationStart"),
                    Fg: fg("AnimationEnd"),
                    Gg: fg("AnimationIteration"),
                    Nk: fg("TransitionEnd"),
                    Cj: "pointerdown",
                    Ij: "pointerup",
                    Bj: "pointercancel",
                    Fj: "pointermove",
                    Hj: "pointerover",
                    Gj: "pointerout",
                    Dj: "pointerenter",
                    Ej: "pointerleave",
                    Wh: "gotpointercapture",
                    Bi: "lostpointercapture",
                    Ri: "MSGestureChange",
                    Si: "MSGestureEnd",
                    Ti: "MSGestureHold",
                    Ui: "MSGestureStart",
                    Vi: "MSGestureTap",
                    Wi: "MSGotPointerCapture",
                    Xi: "MSInertiaStart",
                    Yi: "MSLostPointerCapture",
                    Zi: "MSPointerCancel",
                    $i: "MSPointerDown",
                    aj: "MSPointerEnter",
                    bj: "MSPointerHover",
                    cj: "MSPointerLeave",
                    dj: "MSPointerMove",
                    ej: "MSPointerOut",
                    fj: "MSPointerOver",
                    gj: "MSPointerUp",
                    zk: "text",
                    Ak: D ? "textinput" : "textInput",
                    Yg: "compositionstart",
                    Zg: "compositionupdate",
                    Xg: "compositionend",
                    Kg: "beforeinput",
                    Jh: "exit",
                    si: "loadabort",
                    ti: "loadcommit",
                    xi: "loadredirect",
                    yi: "loadstart",
                    zi: "loadstop",
                    Zj: "responsive",
                    kk: "sizechanged",
                    Uk: "unresponsive",
                    bl: "visibilitychange",
                    vk: "storage",
                    wh: "DOMSubtreeModified",
                    sh: "DOMNodeInserted",
                    uh: "DOMNodeRemoved",
                    vh: "DOMNodeRemovedFromDocument",
                    th: "DOMNodeInsertedIntoDocument",
                    ph: "DOMAttrModified",
                    qh: "DOMCharacterDataModified",
                    Mg: "beforeprint",
                    Bg: "afterprint"
                };
            var hg = function(a, b) {
                K.call(this, a ? a.type : "");
                this.relatedTarget = this.h = this.o = null;
                this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
                this.key = "";
                this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
                this.g = null;
                if (a) {
                    var c = this.type = a.type,
                        d = a.changedTouches ? a.changedTouches[0] : null;
                    this.o = a.target || a.srcElement;
                    this.h = b;
                    (b = a.relatedTarget) ? Ob && (Hb(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
                    this.relatedTarget = b;
                    null === d ? (this.clientX = void 0 !==
                        a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
                    this.button = a.button;
                    this.key = a.key || "";
                    this.ctrlKey = a.ctrlKey;
                    this.altKey = a.altKey;
                    this.shiftKey = a.shiftKey;
                    this.metaKey = a.metaKey;
                    this.g = a;
                    a.defaultPrevented && this.w()
                }
            };
            x(hg, K);
            hg.prototype.C = function() {
                hg.P.C.call(this);
                this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
            };
            hg.prototype.w = function() {
                hg.P.w.call(this);
                var a = this.g;
                if (a.preventDefault) a.preventDefault();
                else if (a.returnValue = !1, eg) try {
                    if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
                } catch (b) {}
            };
            var ig = "closure_listenable_" + (1E6 * Math.random() | 0),
                jg = function(a) {
                    return !(!a || !a[ig])
                },
                kg = 0;
            var lg = function(a, b, c, d, e) {
                    this.listener = a;
                    this.g = null;
                    this.src = b;
                    this.type = c;
                    this.capture = !!d;
                    this.ub = e;
                    this.key = ++kg;
                    this.Xa = this.ob = !1
                },
                mg = function(a) {
                    a.Xa = !0;
                    a.listener = null;
                    a.g = null;
                    a.src = null;
                    a.ub = null
                };
            var ng = function(a) {
                    this.src = a;
                    this.g = {};
                    this.h = 0
                },
                pg = function(a, b, c, d, e, f) {
                    var g = b.toString();
                    b = a.g[g];
                    b || (b = a.g[g] = [], a.h++);
                    var k = og(b, c, e, f); - 1 < k ? (a = b[k], d || (a.ob = !1)) : (a = new lg(c, a.src, g, !!e, f), a.ob = d, b.push(a));
                    return a
                },
                qg = function(a, b) {
                    var c = b.type;
                    c in a.g && ab(a.g[c], b) && (mg(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
                },
                rg = function(a, b, c, d, e) {
                    a = a.g[b.toString()];
                    b = -1;
                    a && (b = og(a, c, d, e));
                    return -1 < b ? a[b] : null
                },
                og = function(a, b, c, d) {
                    for (var e = 0; e < a.length; ++e) {
                        var f = a[e];
                        if (!f.Xa && f.listener == b &&
                            f.capture == !!c && f.ub == d) return e
                    }
                    return -1
                };
            var sg = "closure_lm_" + (1E6 * Math.random() | 0),
                tg = {},
                ug = 0,
                vg = function(a, b, c, d, e) {
                    if (ka(b)) {
                        for (var f = 0; f < b.length; f++) vg(a, b[f], c, d, e);
                        return null
                    }
                    c = wg(c);
                    return jg(a) ? a.h(b, c, d, e) : xg(a, b, c, !1, d, e)
                },
                xg = function(a, b, c, d, e, f) {
                    if (!b) throw Error("Invalid event type");
                    var g = !!e,
                        k = yg(a);
                    k || (a[sg] = k = new ng(a));
                    c = pg(k, b, c, d, e, f);
                    if (c.g) return c;
                    d = zg();
                    c.g = d;
                    d.src = a;
                    d.listener = c;
                    if (a.addEventListener) a.addEventListener(b.toString(), d, g);
                    else if (a.attachEvent) a.attachEvent(Ag(b.toString()), d);
                    else throw Error("addEventListener and attachEvent are unavailable.");
                    ug++;
                    return c
                },
                zg = function() {
                    var a = Bg,
                        b = dg ? function(c) {
                            return a.call(b.src, b.listener, c)
                        } : function(c) {
                            c = a.call(b.src, b.listener, c);
                            if (!c) return c
                        };
                    return b
                },
                Cg = function(a, b, c, d, e) {
                    if (ka(b)) {
                        for (var f = 0; f < b.length; f++) Cg(a, b[f], c, d, e);
                        return null
                    }
                    c = wg(c);
                    return jg(a) ? pg(a.G, String(b), c, !0, d, e) : xg(a, b, c, !0, d, e)
                },
                Dg = function(a, b, c, d, e) {
                    if (ka(b))
                        for (var f = 0; f < b.length; f++) Dg(a, b[f], c, d, e);
                    else c = wg(c), jg(a) ? a.C(b, c, d, e) : a && (a = yg(a)) && (b = rg(a, b, c, !!d, e)) && Eg(b)
                },
                Eg = function(a) {
                    if (!r(a) && a && !a.Xa) {
                        var b =
                            a.src;
                        if (jg(b)) qg(b.G, a);
                        else {
                            var c = a.type,
                                d = a.g;
                            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Ag(c), d);
                            ug--;
                            (c = yg(b)) ? (qg(c, a), 0 == c.h && (c.src = null, b[sg] = null)) : mg(a)
                        }
                    }
                },
                Ag = function(a) {
                    return a in tg ? tg[a] : tg[a] = "on" + a
                },
                Gg = function(a, b, c, d) {
                    var e = !0;
                    if (a = yg(a))
                        if (b = a.g[b.toString()])
                            for (b = b.concat(), a = 0; a < b.length; a++) {
                                var f = b[a];
                                f && f.capture == c && !f.Xa && (f = Fg(f, d), e = e && !1 !== f)
                            }
                    return e
                },
                Fg = function(a, b) {
                    var c = a.listener,
                        d = a.ub || a.src;
                    a.ob && Eg(a);
                    return c.call(d,
                        b)
                },
                Bg = function(a, b) {
                    if (a.Xa) return !0;
                    if (!dg) {
                        var c = b || fa("window.event");
                        b = new hg(c, this);
                        var d = !0;
                        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                            a: {
                                var e = !1;
                                if (0 == c.keyCode) try {
                                    c.keyCode = -1;
                                    break a
                                } catch (g) {
                                    e = !0
                                }
                                if (e || void 0 == c.returnValue) c.returnValue = !0
                            }
                            c = [];
                            for (e = b.h; e; e = e.parentNode) c.push(e);
                            for (var e = a.type, f = c.length - 1; !b.l && 0 <= f; f--) b.h = c[f],
                            a = Gg(c[f], e, !0, b),
                            d = d && a;
                            for (f = 0; !b.l && f < c.length; f++) b.h = c[f],
                            a = Gg(c[f], e, !1, b),
                            d = d && a
                        }
                        return d
                    }
                    return Fg(a, new hg(b, this))
                },
                yg = function(a) {
                    a = a[sg];
                    return a instanceof
                    ng ? a : null
                },
                Hg = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
                wg = function(a) {
                    if (v(a)) return a;
                    a[Hg] || (a[Hg] = function(b) {
                        return a.handleEvent(b)
                    });
                    return a[Hg]
                };
            var P = function() {
                Me.call(this);
                this.G = new ng(this);
                this.Mb = this;
                this.ha = null
            };
            x(P, Me);
            P.prototype[ig] = !0;
            P.prototype.bc = function(a) {
                this.ha = a
            };
            P.prototype.addEventListener = function(a, b, c, d) {
                vg(this, a, b, c, d)
            };
            P.prototype.removeEventListener = function(a, b, c, d) {
                Dg(this, a, b, c, d)
            };
            var Q = function(a, b) {
                var c, d = a.ha;
                if (d)
                    for (c = []; d; d = d.ha) c.push(d);
                a = a.Mb;
                d = b.type || b;
                if (q(b)) b = new K(b, a);
                else if (b instanceof K) b.o = b.o || a;
                else {
                    var e = b;
                    b = new K(d, a);
                    Bb(b, e)
                }
                var e = !0;
                if (c)
                    for (var f = c.length - 1; !b.l && 0 <= f; f--) {
                        var g = b.h = c[f];
                        e = Ig(g, d, !0, b) && e
                    }
                b.l || (g = b.h = a, e = Ig(g, d, !0, b) && e, b.l || (e = Ig(g, d, !1, b) && e));
                if (c)
                    for (f = 0; !b.l && f < c.length; f++) g = b.h = c[f], e = Ig(g, d, !1, b) && e
            };
            P.prototype.L = function() {
                P.P.L.call(this);
                if (this.G) {
                    var a = this.G,
                        b = 0,
                        c;
                    for (c in a.g) {
                        for (var d = a.g[c], e = 0; e < d.length; e++) ++b, mg(d[e]);
                        delete a.g[c];
                        a.h--
                    }
                }
                this.ha = null
            };
            P.prototype.h = function(a, b, c, d) {
                return pg(this.G, String(a), b, !1, c, d)
            };
            P.prototype.C = function(a, b, c, d) {
                var e = this.G;
                a = String(a).toString();
                if (a in e.g) {
                    var f = e.g[a];
                    b = og(f, b, c, d); - 1 < b ? (mg(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.h--), e = !0) : e = !1
                } else e = !1;
                return e
            };
            var Ig = function(a, b, c, d) {
                b = a.G.g[String(b)];
                if (!b) return !0;
                b = b.concat();
                for (var e = !0, f = 0; f < b.length; ++f) {
                    var g = b[f];
                    if (g && !g.Xa && g.capture == c) {
                        var k = g.listener,
                            l = g.ub || g.src;
                        g.ob && qg(a.G, g);
                        e = !1 !== k.call(l, d) && e
                    }
                }
                return e && 0 != d.dd
            };
            var Jg = function(a, b) {
                P.call(this);
                this.o = a || 1;
                this.l = b || m;
                this.A = w(this.D, this);
                this.B = ta()
            };
            x(Jg, P);
            Jg.prototype.w = !1;
            Jg.prototype.g = null;
            Jg.prototype.D = function() {
                if (this.w) {
                    var a = ta() - this.B;
                    0 < a && a < .8 * this.o ? this.g = this.l.setTimeout(this.A, this.o - a) : (this.g && (this.l.clearTimeout(this.g), this.g = null), Q(this, "tick"), this.w && (this.g = this.l.setTimeout(this.A, this.o), this.B = ta()))
                }
            };
            Jg.prototype.start = function() {
                this.w = !0;
                this.g || (this.g = this.l.setTimeout(this.A, this.o), this.B = ta())
            };
            var Kg = function(a) {
                a.w = !1;
                a.g && (a.l.clearTimeout(a.g), a.g = null)
            };
            Jg.prototype.L = function() {
                Jg.P.L.call(this);
                Kg(this);
                delete this.l
            };
            var Lg = function(a, b, c) {
                if (v(a)) c && (a = w(a, c));
                else if (a && "function" == typeof a.handleEvent) a = w(a.handleEvent, a);
                else throw Error("Invalid listener argument");
                return 2147483647 < Number(b) ? -1 : m.setTimeout(a, b || 0)
            };
            var Mg = function(a) {
                return Ta(a, function(a) {
                    a = a.toString(16);
                    return 1 < a.length ? a : "0" + a
                }).join("")
            };
            var Ng = C("Firefox"),
                Og = Eb() || C("iPod"),
                Pg = C("iPad"),
                Qg = C("Android") && !(Cb() || C("Firefox") || C("Opera") || C("Silk")),
                Rg = Cb(),
                Sg = Db() && !Fb();
            var Tg = null,
                Ug = null;
            var Vg = function() {
                this.h = -1
            };
            var Wg = function() {
                this.g = {};
                return this
            };
            Wg.prototype.set = function(a, b) {
                this.g[a] = b
            };
            var Xg = function(a, b) {
                a.g.eb = yb(a.g, "eb", 0) | b
            };
            Wg.prototype.get = function(a) {
                return yb(this.g, a, null)
            };
            var Yg = function(a, b) {
                var c = 0;
                sb(H(), "ima", "video", "client", "tagged") && (c = 1);
                var d = null;
                a && (d = a());
                if (d) {
                    a = Zf();
                    a.g = {};
                    var e = new Wf(32, !0);
                    e.o = !1;
                    $f(a, e);
                    e = H().document;
                    e = e.webkitVisibilityState || e.mozVisibilityState || e.visibilityState || e.msVisibilityState || "";
                    $f(a, new Wf(64, "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
                    try {
                        var f = H().top;
                        try {
                            var g = !!f.location.href || "" === f.location.href
                        } catch (u) {
                            g = !1
                        }
                        if (g) {
                            var k = Sf(d);
                            var l = k && 0 != k.length ? "1" : "0"
                        } else l = "2"
                    } catch (u) {
                        l = "2"
                    }
                    $f(a, new Wf(256,
                        "2" == l));
                    $f(a, new Wf(128, "1" == l));
                    k = g = H().top;
                    "2" == l && (k = H());
                    f = bg(d, k);
                    $f(a, new Xf("er", f));
                    try {
                        var n = k.document && !k.document.body ? null : Vc(k || window)
                    } catch (u) {
                        n = null
                    }
                    n ? (k = Wc(Sc(k.document).g), $f(a, new Wf(16384, !!k)), n = k ? new ed(k.x, k.y, n.width, n.height) : null) : n = null;
                    $f(a, new Xf("vi", n));
                    if (n && "1" == l) {
                        l = Sf(d);
                        d = [];
                        for (k = 0; k < l.length; k++)(e = bg(l[k], g)) && d.push(e);
                        d.push(n);
                        n = ag(d)
                    }
                    cg(a, f, n);
                    a.h && (l = Qf() - a.h, $f(a, new Vf("ts", l)));
                    a.h = Qf()
                } else a = Zf(), a.g = {}, a.h = Qf(), $f(a, new Wf(32, !1));
                this.l = a;
                this.g =
                    new Wg;
                this.g.set("ve", 4);
                c && Xg(this.g, 1);
                sb(H(), "ima", "video", "client", "crossdomainTag") && Xg(this.g, 4);
                sb(H(), "ima", "video", "client", "sdkTag") && Xg(this.g, 8);
                sb(H(), "ima", "video", "client", "jsTag") && Xg(this.g, 2);
                b && yb(b, "fullscreen", !1) && Xg(this.g, 16);
                this.h = b = null;
                if (c && (c = sb(H(), "ima", "video", "client"), c.getEData)) {
                    this.h = c.getEData();
                    if (c = sb(H(), "ima", "video", "client", "getLastSnapshotFromTop"))
                        if (a = c()) this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this.l, b = a.er, a = a.vi,
                            b && a && (b = Yf(b).h(), a = Yf(a).h(), l = null, yb(c.g, "er", null) && (l = yb(c.g, "er", null).h(), l.top += b.top, l.left += b.left, $f(c, new Xf("er", l))), yb(c.g, "vi", null) && (n = yb(c.g, "vi", null).h(), n.top += b.top, n.left += b.left, d = [], d.push(n), d.push(b), d.push(a), b = ag(d), cg(c, l, b), $f(c, new Xf("vi", a))));
                    a: {
                        if (this.h) {
                            if (this.h.getTagLoadTimestamp) {
                                b = this.h.getTagLoadTimestamp();
                                break a
                            }
                            if (this.h.getTimeSinceTagLoadSeconds) {
                                b = this.h.getTimeSinceTagLoadSeconds();
                                break a
                            }
                        }
                        b = null
                    }
                }
                this.g.set("td", Qf() - Rf(b))
            };
            var Zg = new Jg(200),
                $g = function(a, b) {
                    try {
                        var c = new Yg(a, b);
                        a = [];
                        var d = Number(c.g.get("eb")),
                            e = c.g.g;
                        "eb" in e && delete e.eb;
                        var f, g = c.g,
                            e = [],
                            k;
                        for (k in g.g) e.push(k + g.g[k]);
                        (f = e.join("_")) && a.push(f);
                        if (c.h) {
                            var l = c.h.serialize();
                            l && a.push(l)
                        }
                        var n, u = c.l;
                        f = d;
                        g = [];
                        f || (f = 0);
                        for (var z in u.g) {
                            var N = u.g[z];
                            if (N instanceof Wf) N.h() && (f |= N.w);
                            else {
                                var Z, V = u.g[z];
                                (Z = V.o ? V.l() : "") && g.push(z + Z)
                            }
                        }
                        g.push("eb" + String(f));
                        (n = g.join("_")) && a.push(n);
                        c.g.set("eb", d);
                        return a.join("_")
                    } catch (ea) {
                        return "tle;" + Ga(ea.name,
                            12) + ";" + Ga(ea.message, 40)
                    }
                },
                ah = function(a) {
                    vg(Zg, "tick", function() {
                        var b = $g(a),
                            c = fa("ima.common.updateEngagementDetectionValue");
                        c && v(c) && c(b)
                    });
                    Zg.start();
                    Q(Zg, "tick")
                };
            var bh = {
                    currentTime: 1,
                    duration: 2,
                    isVpaid: 4,
                    volume: 8,
                    isYouTube: 16,
                    isPlaying: 32
                },
                vb = {
                    pc: "start",
                    FIRST_QUARTILE: "firstquartile",
                    MIDPOINT: "midpoint",
                    THIRD_QUARTILE: "thirdquartile",
                    COMPLETE: "complete",
                    xd: "metric",
                    Gb: "pause",
                    Bd: "resume",
                    SKIPPED: "skip",
                    VIEWABLE_IMPRESSION: "viewable_impression",
                    yd: "mute",
                    Cd: "unmute",
                    FULLSCREEN: "fullscreen",
                    td: "exitfullscreen",
                    vd: "fully_viewable_audible_half_duration_impression",
                    wd: "measurable_impression",
                    nd: "abandon",
                    rd: "engagedview",
                    IMPRESSION: "impression",
                    qd: "creativeview",
                    LOADED: "loaded",
                    Lj: "progress",
                    Ug: "close",
                    Wg: "collapse",
                    rj: "overlay_resize",
                    sj: "overlay_unmeasurable_impression",
                    tj: "overlay_unviewable_impression",
                    vj: "overlay_viewable_immediate_impression",
                    uj: "overlay_viewable_end_of_session_impression"
                },
                ch = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
                dh = ["abandon"],
                eh = {
                    Sk: -1,
                    pc: 0,
                    FIRST_QUARTILE: 1,
                    MIDPOINT: 2,
                    THIRD_QUARTILE: 3,
                    COMPLETE: 4,
                    xd: 5,
                    Gb: 6,
                    Bd: 7,
                    SKIPPED: 8,
                    VIEWABLE_IMPRESSION: 9,
                    yd: 10,
                    Cd: 11,
                    FULLSCREEN: 12,
                    td: 13,
                    vd: 14,
                    wd: 15,
                    nd: 16,
                    rd: 17,
                    IMPRESSION: 18,
                    qd: 19,
                    LOADED: 20
                };
            var fh = function() {};
            fh.prototype.reset = function() {};
            var gh = function(a) {
                return {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4
                }[a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || ""] || 0
            };
            var hh = {},
                ih = null;
            hh.le = 0;
            hh.nt = 2;
            hh.Fr = 3;
            hh.Po = 5;
            hh.me = 1;
            hh.om = 4;
            var jh = function() {
                var a = y && y.document;
                hh.e = -1;
                hh.i = 6;
                hh.n = 7;
                hh.t = 8;
                if (!ih) {
                    var b = [];
                    sd(hh, function(a, c) {
                        b[a + 1] = c
                    });
                    var c = b.join("");
                    ih = (c = a && a[c]) && w(c, a)
                }
                return ih
            };
            var kh = !1,
                lh = "",
                mh = function(a) {
                    a = a.match(/[\d]+/g);
                    if (!a) return "";
                    a.length = 3;
                    return a.join(".")
                };
            (function() {
                if (navigator.plugins && navigator.plugins.length) {
                    var a = navigator.plugins["Shockwave Flash"];
                    if (a && (kh = !0, a.description)) {
                        lh = mh(a.description);
                        return
                    }
                    if (navigator.plugins["Shockwave Flash 2.0"]) {
                        kh = !0;
                        lh = "2.0.0.11";
                        return
                    }
                }
                if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], kh = !(!a || !a.enabledPlugin))) {
                    lh = mh(a.enabledPlugin.description);
                    return
                }
                try {
                    var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                    kh = !0;
                    lh = mh(b.GetVariable("$version"));
                    return
                } catch (c) {}
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    kh = !0;
                    lh = "6.0.21";
                    return
                } catch (c) {}
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), kh = !0, lh = mh(b.GetVariable("$version"))
                } catch (c) {}
            })();
            var nh = kh,
                oh = lh;
            var ph = function() {
                if (Rb) {
                    var a = /Windows NT ([0-9.]+)/;
                    return (a = a.exec(B)) ? a[1] : "0"
                }
                return Qb ? (a = /10[_.][0-9_.]+/, (a = a.exec(B)) ? a[0].replace(/_/g, ".") : "10") : Sb ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(B)) ? a[1] : "") : Tb || Ub || Vb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(B)) ? a[1].replace(/_/g, ".") : "") : ""
            }();
            var qh = function(a) {
                    return (a = a.exec(B)) ? a[1] : ""
                },
                rh = function() {
                    if (Ng) return qh(/Firefox\/([0-9.]+)/);
                    if (D || Lb || Kb) return cc;
                    if (Rg) return Fb() ? qh(/CriOS\/([0-9.]+)/) : qh(/Chrome\/([0-9.]+)/);
                    if (Sg && !Fb()) return qh(/Version\/([0-9.]+)/);
                    if (Og || Pg) {
                        var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(B);
                        if (a) return a[1] + "." + a[2]
                    } else if (Qg) return (a = qh(/Android\s+([0-9.]+)/)) ? a : qh(/Version\/([0-9.]+)/);
                    return ""
                }();
            var sh = function() {
                    var a;
                    !(a = D && 9 > cc || Ob) && (a = Qb && Sg) && (a = 0 <= Ma(rh, "6.0.1"));
                    return a ? !1 : 0 <= Ma(oh, "11")
                },
                th = function(a) {
                    a = a || !1;
                    var b;
                    if (b = Wb) b = 0 <= Ma(ph, 9);
                    var c = Sg && E(601);
                    return !a && (b || c)
                };
            var Eh = function() {
                    this.g = 0;
                    this.C = !1;
                    this.h = -1;
                    this.A = 0;
                    this.pa = !1
                },
                Fh = function(a) {
                    return a.pa ? .3 <= a.g : .5 <= a.g
                };
            var Gh = function(a, b) {
                    a = a || y;
                    null !== a && a.top != a && (a = a.top);
                    try {
                        return a.document && !a.document.body ? new G(-1, -1) : b ? (new G(a.innerWidth, a.innerHeight)).round() : Vc(a || window).round()
                    } catch (c) {
                        return new G(-12245933, -12245933)
                    }
                },
                Hh = 0,
                Nh = function(a) {
                    var b = 0 <= Ih ? Jh() - Ih : -1,
                        c = Kh ? Jh() - Lh : -1,
                        d = 0 <= Mh ? Jh() - Mh : -1;
                    if (79463068 == a) return 500;
                    if (947190538 == a) {
                        a = [4E3];
                        var e = [250, 1E3]
                    } else if (947190541 == a) a = [4E3], e = [100, 1E3];
                    else {
                        if (947190542 == a) return 100;
                        if (79463069 == a) return 200;
                        a = [2E3, 4E3];
                        e = [250, 500, 1E3]
                    }
                    var f =
                        b; - 1 != c && c < b && (f = c);
                    for (var g, b = 0; b < a.length; ++b)
                        if (f < a[b]) {
                            g = e[b];
                            break
                        }
                    void 0 === g && (g = e[a.length]);
                    return -1 != d && 1500 < d && 4E3 > d ? 500 : g
                },
                Oh = (new Date).getTime(),
                Ih = -1,
                Kh = !1,
                Lh = -1,
                Mh = -1,
                Jh = function() {
                    return (new Date).getTime() - Oh
                },
                Ph = function() {
                    var a = Yc("DIV");
                    a.style.cssText = "position:relative;left:0px;top:0px;width:0;height:0;";
                    return a
                },
                Sh = function(a) {
                    return Qh(a, function(a, c) {
                        return !(!Hb(c, "style") || !c.style || "none" !== id(c, "display"))
                    }, function(a) {
                        return a
                    }, !1) ? !0 : Rh(a)
                },
                Rh = function(a) {
                    var b = !D ||
                        E(8);
                    return Qh(a, function(a, d) {
                        a = Hb(d, "style") && d.style && id(d, "visibility");
                        return {
                            hidden: "hidden" === a,
                            visible: b && "visible" === a
                        }
                    }, function(a) {
                        return a.hidden || a.visible
                    }, {
                        hidden: !1,
                        visible: !1
                    }).hidden
                },
                Qh = function(a, b, c, d) {
                    if (!a) return d;
                    d = Th(a, b, c, d);
                    if (!d.done) try {
                        var e = Rc(a),
                            f = e && H(e);
                        return Qh(f && f.frameElement, b, c, d.value)
                    } catch (g) {}
                    return d.value
                },
                Th = function(a, b, c, d) {
                    if (!a) return {
                        value: d,
                        done: !1
                    };
                    d = b(d, a);
                    var e = c(d, a);
                    if (!e && Hb(a, "parentElement")) {
                        e = Th;
                        a: {
                            var f;
                            if (hc && !(D && E("9") && !E("10") &&
                                    m.SVGElement && a instanceof m.SVGElement) && (f = a.parentElement)) {
                                a = f;
                                break a
                            }
                            f = a.parentNode;
                            a = na(f) && 1 == f.nodeType ? f : null
                        }
                        b = e(a, b, c, d)
                    } else b = {
                        done: e,
                        value: d
                    };
                    return b
                },
                Uh = function(a) {
                    return new I(a.top, a.right, a.bottom, a.left)
                },
                Vh = function(a) {
                    return null != a && 0 <= a && 1 >= a
                };
            var Wh = function() {
                Eh.call(this);
                this.o = !1;
                this.volume = void 0;
                this.l = !1;
                this.w = -1
            };
            x(Wh, Eh);
            var Xh = function(a) {
                return Vh(a.volume) && .1 <= a.volume
            };
            var Yh = function() {
                this.ia = [0, 0, 0, 0, 0];
                this.J = [0, 0, 0, 0, 0];
                this.Z = [0, 0, 0, 0, 0];
                this.D = this.I = 0;
                this.aa = this.o = -1;
                this.ua = 1E3
            };
            Yh.prototype.Y = function(a, b, c, d, e, f) {
                e = Zh(c.g);
                var g = Zh(b.g),
                    g = -1 == e || -1 == g ? -1 : Math.max(e, g);
                e = d ? g : e;
                this.o = -1 != this.o ? Math.min(this.o, b.g) : b.g;
                f && (this.aa = Math.max(this.aa, b.g)); - 1 != e && (this.ia[e] += a);
                $h(this.Z, e, a);
                f = this.J;
                for (var g = this.Z, k = [0, 0, 0, 0, 0], l = 0; 4 >= l; l++) k[l] = Math.max(f[l], g[l]);
                this.J = k;
                f = this.Z;
                g = Zh(b.g);
                for (k = 0; 4 >= k; ++k)
                    if (k < g || b.C || -1 == g) f[k] = 0;
                if (d || c.pa != b.pa ? Fh(c) && Fh(b) : Fh(c)) this.D += a, this.I = Math.max(this.I, this.D);
                Fh(b) || (this.D = 0);
                return e
            };
            Yh.prototype.Ja = function() {
                return this.I >= this.ua
            };
            var $h = function(a, b, c) {
                    for (; 0 <= b && 4 >= b; b++) a[b] += c
                },
                Zh = function(a) {
                    var b = -1;
                    1 <= a ? b = 0 : .75 <= a ? b = 1 : .5 <= a ? b = 2 : .3 <= a ? b = 3 : 0 < a && (b = 4);
                    return b
                };
            var ai = function(a, b) {
                    this.l = null;
                    this.A = a;
                    this.B = b || 1;
                    this.h = "u"
                },
                bi = function(a, b) {
                    var c = b.right - b.left;
                    b = b.bottom - b.top;
                    var d = Math.floor(c / 2),
                        e = Math.floor(b / 2);
                    switch (a.B) {
                        case 4:
                            return a.A ? (a = Math.floor(.3 * c), d = Math.floor(.3 * b), [new F(a, d), new F(c - a, d), new F(a, b - d), new F(c - a, b - d)]) : [new F(d, 0), new F(0, e), new F(d, b - 1), new F(c - 1, e)];
                        case 3:
                            return [new F(c - 1, 0), new F(d, e), new F(0, b - 1)];
                        default:
                            return [new F(d, e)]
                    }
                },
                ci = function(a, b) {
                    try {
                        var c = b || a.l.getBoundingClientRect()
                    } catch (d) {
                        c = new I(0, 0, 0, 0)
                    }
                    a =
                        bi(a, c);
                    A(a, function(a) {
                        a.x += c.left;
                        a.y += c.top
                    });
                    return a
                },
                di = function(a, b) {
                    ai.call(this, a, b);
                    this.g = [];
                    this.G = !1;
                    this.o = -1;
                    this.w = this.C = 0
                };
            x(di, ai);
            var ei = function(a, b, c) {
                this.g = a;
                this.l = b;
                this.h = c
            };
            di.prototype.nb = function(a, b) {
                if (!(a && a.getBoundingClientRect && 0 <= Ma(oh, "11") && b) || D && 9 > cc || 0 < this.g.length) return !1;
                try {
                    var c = a.getBoundingClientRect()
                } catch (l) {
                    return !1
                }
                var d = "DIV" == a.tagName || "INS" == a.tagName,
                    e = Rc(a),
                    f = [];
                if (d) {
                    var g = Ph();
                    c = bi(this, c);
                    A(c, function(a, c) {
                        c = new fi("e", e, b, String(c));
                        this.g.push(c);
                        f.push(w(c.B, c, g, a))
                    }, this);
                    a.insertBefore(g, a.childNodes[0] || null)
                } else c = ci(this, c), A(c, function(c, d) {
                    d = new fi("e", e, b, String(d));
                    this.g.push(d);
                    f.push(w(d.G, d, a, c))
                }, this);
                var k = !0;
                A(f,
                    function(a) {
                        k = k && a()
                    });
                k ? (this.h = "l", this.l = a, this.G = !d) : (A(this.g, function(a) {
                    gi(a)
                }), this.g = []);
                return k
            };
            var ii = function(a) {
                    if (a.l && a.G) {
                        var b = ci(a);
                        A(b, function(a, b) {
                            this.g[b] && hi(this.g[b], a)
                        }, a)
                    }
                },
                ji = function(a) {
                    A(a.g, function(a) {
                        gi(a)
                    });
                    a.g = [];
                    a.h = "d"
                },
                pi = function(a) {
                    var b = ta(),
                        c = a.C ? b - a.C : 0,
                        d = -1,
                        e = Ta(a.g, function(a) {
                            return ki(a, b)
                        });
                    4 == a.g.length ? d = a.A ? li(e) : mi(e) : 3 == a.g.length ? d = ni(e) : 1 == a.g.length && (d = [-1, 0, 1, 2, 3, 5][ki(a.g[0], b) + 1]);
                    a.w = d == a.o ? a.w + c : 0;
                    c = new ei(d, a.o, c);
                    a.o = d;
                    a.C = b;
                    oi(a, d);
                    ii(a);
                    return c
                },
                ri = function(a) {
                    var b = eb(pb(qi));
                    A(a, function(a) {
                        0 <= a && ++b[a]
                    });
                    return b
                },
                mi = function(a) {
                    a =
                        ri(a);
                    return 4 == a[4] ? 6 : 3 <= a[4] ? 5 : 0 < a[4] ? 4 : 4 == a[2] ? 2 : 4 == a[1] ? 1 : 4 == a[0] ? 0 : 3
                },
                ni = function(a) {
                    var b = ri(a);
                    return 4 == a[0] && 4 == a[2] ? 6 : 4 == a[1] ? 5 : 0 < b[4] ? 4 : 3 == b[2] ? 2 : 3 == b[1] ? 1 : 3 == b[0] ? 0 : 3
                },
                li = function(a) {
                    a = ri(a);
                    return 3 <= a[4] ? 5 : 2 == a[4] ? 8 : 0 < a[4] ? 7 : 4 == a[2] ? 2 : 4 == a[1] ? 1 : 4 == a[0] ? 0 : 3
                },
                oi = function(a, b) {
                    if (0 == b && si(a)) a.h = "n";
                    else switch (b) {
                        case -1:
                            a.h = "d";
                            break;
                        case 0:
                            a.h = "l";
                            break;
                        case 1:
                            a.h = "f";
                            break;
                        case 2:
                            a.h = "c";
                            break;
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                            a.h = "r"
                    }
                },
                si = function(a) {
                    return "n" == a.h ? !0 : "l" == a.h && 3E3 <= a.w
                },
                fi = function(a, b, c, d) {
                    this.g = null;
                    this.A = a;
                    this.C = "e" == a ? String(c) + "~" + String(d) : "";
                    this.h = [];
                    this.l = -1;
                    this.w = 0;
                    this.o = eb(pb(ti));
                    this.F = eb(pb(qi));
                    "e" == this.A && (ui[this.C] = w(this.D, this));
                    D ? (a = b.createElement("div"), a.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" style="opacity:0;-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity=0)\';filter:alpha(opacity=0)"><param name="movie" value="' + vi(this, !0) + '"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="transparent"></param></object>',
                        a = a.firstChild, a.id = String(Math.random())) : a = wi(this, b);
                    a.width = 1;
                    a.height = 1;
                    a.style.zIndex = -999999;
                    this.g = a
                },
                qi = {
                    Rk: -1,
                    LOADING: 0,
                    ud: 1,
                    pd: 2,
                    ii: 3,
                    cl: 4
                },
                ti = {
                    LOADING: 0,
                    ud: 1,
                    pd: 2,
                    Gk: 3,
                    jj: 4,
                    Pk: 5,
                    Qk: 6,
                    Ok: 7,
                    mj: 8,
                    Fk: 9
                },
                ui = {},
                wi = function(a, b) {
                    var c = function(a, c, d) {
                        var e = b.createElement("param");
                        e.name = c;
                        e.value = d;
                        a.appendChild(e)
                    };
                    a = vi(a);
                    var d = b.createElement("object");
                    d.type = "application/x-shockwave-flash";
                    d.data = a;
                    c(d, "movie", a);
                    c(d, "allowscriptaccess", "always");
                    c(d, "wmode", "opaque");
                    d.style.visibility =
                        "hidden";
                    d.style.opacity = 0;
                    return d
                },
                vi = function(a, b) {
                    a = Rd("//pagead2.googlesyndication.com/osd/hbe.swf", "id", a.C);
                    b && (a = Rd(a, "delay", "1"));
                    return a
                };
            fi.prototype.B = function(a, b) {
                if (!this.g) return !1;
                this.g.style.position = "absolute";
                hi(this, b);
                b = !0;
                try {
                    a.appendChild(this.g)
                } catch (c) {
                    b = !1
                }
                return b
            };
            fi.prototype.G = function(a, b) {
                if (!this.g || !a.parentNode) return !1;
                this.g.style.position = "fixed";
                hi(this, b);
                b = !0;
                try {
                    a.parentNode && a.parentNode.insertBefore(this.g, a.nextSibling)
                } catch (c) {
                    b = !1
                }
                return b
            };
            var hi = function(a, b) {
                    a.g && !fc(b, ld(a.g)) && kd(a.g, b)
                },
                gi = function(a) {
                    if (a.g) try {
                        ad(a.g)
                    } catch (b) {}
                    a.g = null
                };
            fi.prototype.D = function(a) {
                this.l = a ? 3 : 4
            };
            var ki = function(a, b) {
                    if ("e" == a.A) {
                        b = null;
                        try {
                            b = a.g.it()
                        } catch (e) {}
                        null === b ? (b = 0, 0 < a.l && (b = 2)) : b = b ? 3 : 4;
                        ++a.F[b + 1];
                        a.l = b
                    } else {
                        var c = Number(b);
                        b = null;
                        try {
                            b = a.g.fc()
                        } catch (e) {}
                        var d = b;
                        xi(a, d, c);
                        b = a.h[a.h.length - 1];
                        if (null === d) {
                            if (d = c = 0, 0 < a.l || r(b.Cb)) d = c = 2
                        } else null === b.Cb || b.gc >= c ? (c = 10 <= d ? 4 : 0, d = 0) : d > b.Cb ? (b = (d - b.Cb) / (c - b.gc) * 1E3, c = 10 <= b ? 4 : 3, b = 0 == b ? 1 : 1 > b ? 3 : 4 > b ? 4 : 23 > b ? 6 : 26 > b ? 8 : 9, 6 == a.w && 6 == b && (b = 7), d = b) : d = c = 1;
                        6 == a.w && (--a.o[6], 4 == d || 8 == d ? ++a.o[5] : ++a.o[7]);
                        ++a.o[d];
                        a.l = c;
                        a.w = d
                    }
                    return a.l
                },
                xi = function(a,
                    b, c) {
                    var d = c - 1E3,
                        e = a.h.length;
                    A(a.h, function(a, b) {
                        a.gc <= d && (e = Math.min(e, b + 1))
                    });
                    var f = a.h.length - e;
                    0 < f && a.h.splice(e, f);
                    a.h.unshift({
                        Cb: b,
                        gc: c
                    })
                };
            t("gteh", ye(145, function(a, b) {
                a = ui[a];
                v(a) && a(b)
            }), void 0);
            var yi = function(a, b) {
                ai.call(this, a, b);
                this.g = [];
                this.C = !1;
                this.w = 0;
                this.o = -1
            };
            x(yi, ai);
            var zi = [3, 7, 8, 5, 5],
                Ai = [3, 4, 4, 5, 6],
                Bi = [3, 4, 5, 6],
                Ci = [3, 5],
                Gi = function(a, b) {
                    var c = b.getBoundingClientRect();
                    var d = "DIV" == b.tagName || "INS" == b.tagName,
                        e = Rc(b),
                        f = !0,
                        g = a.g;
                    if (d) {
                        var k = Ph();
                        c = bi(a, c);
                        b.insertBefore(k, b.childNodes[0] || null);
                        A(c, function(a) {
                            var b = new Di(e);
                            g.push(b);
                            var c;
                            if (c = f)
                                if (b.g) {
                                    b.g.style.position = "absolute";
                                    Ei(b, a);
                                    a = !0;
                                    try {
                                        k.appendChild(b.g)
                                    } catch (z) {
                                        a = !1
                                    }
                                    c = a
                                } else c = !1;
                            f = c
                        })
                    } else c = ci(a, c), A(c, function(a) {
                        var c = new Di(e);
                        g.push(c);
                        var d;
                        if (d = f)
                            if (c.g && b.parentNode) {
                                c.g.style.position =
                                    "fixed";
                                Ei(c, a);
                                a = !0;
                                try {
                                    b.parentNode && b.parentNode.insertBefore(c.g, b.nextSibling)
                                } catch (z) {
                                    a = !1
                                }
                                d = a
                            } else d = !1;
                        f = d
                    });
                    f ? (a.l = b, a.C = !d) : (A(g, function(a) {
                        Fi(a)
                    }), a.g = []);
                    return f
                },
                Hi = function(a) {
                    if (a.l && a.C) {
                        var b = ci(a);
                        A(b, function(a, b) {
                            this.g[b] && Ei(this.g[b], a)
                        }, a)
                    }
                },
                Ii = function(a) {
                    A(a.g, function(a) {
                        Fi(a)
                    });
                    a.g = []
                },
                Ji = function(a) {
                    var b = ta(),
                        c = a.w ? b - a.w : 0,
                        d = Va(a.g, function(a) {
                            return 50 > b - a.h - a.l
                        }),
                        d = 4 == a.g.length ? a.A ? zi[d] : Ai[d] : 3 == a.g.length ? Bi[d] : 1 == a.g.length ? Ci[d] : -1,
                        c = new ei(d, a.o, c);
                    a.o = d;
                    a.w =
                        b;
                    Hi(a);
                    return c
                },
                Di = function(a) {
                    this.g = null;
                    this.l = this.h = 0;
                    Ki(this, a)
                },
                Ki = function(a, b) {
                    var c = b.createElement("iframe");
                    c.srcdoc = "";
                    c.frameBorder = 0;
                    c.style.width = "1px";
                    c.style.height = "1px";
                    c.style.opacity = "0";
                    c.style.zIndex = -999999;
                    a.g = c;
                    var d = pe(245, a.o, a, void 0);
                    c.addEventListener("load", ye(244, function() {
                        c.contentWindow.requestAnimationFrame(d)
                    }))
                };
            Di.prototype.o = function(a) {
                this.g && this.g.contentWindow && (this.g.contentWindow.requestAnimationFrame(pe(245, this.o, this, void 0)), this.h || (this.h = ta() - a), this.l = a)
            };
            var Ei = function(a, b) {
                    a.g && !fc(b, ld(a.g)) && kd(a.g, b)
                },
                Fi = function(a) {
                    try {
                        ad(a.g)
                    } catch (b) {}
                    a.g = null
                };
            if (ua && ua.URL) {
                var xd = ua.URL,
                    Li = !(xd && 0 < yd().length);
                oe.l = Li
            }
            var Mi = function(a, b, c, d) {
                c = pe(d, c, void 0, void 0);
                Ad(a, b, c, {
                    capture: void 0
                });
                return c
            };
            var Ni = function() {};
            ha(Ni);
            var R = function() {
                    this.D = !1;
                    this.C = void 0;
                    this.h = !rd(y.top);
                    var a = Wd();
                    a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(Nd)[3] || null) ? decodeURI(a) : a) || "" : "";
                    this.domain = a;
                    this.o = this.G = this.A = this.g = null;
                    this.F = 0;
                    this.l = !1;
                    this.w = new I(0, 0, 0, 0);
                    this.B = 0;
                    this.R = "geo";
                    this.xc = new fh
                },
                Oi = function(a, b) {
                    b && (b = b.split("-"), 4 == b.length && (a.w = new I(Oa(b[0]), Oa(b[3]), Oa(b[2]), Oa(b[1]))))
                };
            ha(R);
            var Qi = function(a, b, c) {
                    this.position = Pi.clone();
                    this.sa = 0;
                    this.Yb = this.rb();
                    this.Xb = -2;
                    this.lg = ta();
                    this.gd = -1;
                    this.Qa = b;
                    this.Na = -1 != b;
                    this.Eb = null;
                    this.opacity = -1;
                    this.bd = c;
                    this.hd = this.Zb = ga;
                    this.Aa = this.element = a;
                    this.Ra = this.fa = null;
                    this.kb = 1;
                    this.jc = this.Wa = this.qb = !1;
                    this.Lb = 1;
                    this.ec = !0;
                    this.xa = !1;
                    this.Dd = R.getInstance().F++;
                    this.domain = null;
                    this.Rc = 0;
                    this.ba = this.Nb();
                    this.fd = -1;
                    this.Fb = new I(0, 0, 0, 0);
                    this.xc = new fh
                },
                Pi = new I(0, 0, 0, 0),
                Ri = {
                    threshold: [0, .3, .5, .75, 1]
                },
                Si = function(a, b) {
                    return null ===
                        a || null === b ? Pi.clone() : new I(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left))
                };
            Qi.prototype.rb = function() {
                return new Yh
            };
            Qi.prototype.va = function() {
                return this.Yb
            };
            var Ti = function(a, b, c, d, e) {
                    if (a.Na) {
                        var f = y.innerWidth,
                            g = y.innerHeight,
                            k = new I(Math.round(y.mozInnerScreenY), Math.round(y.mozInnerScreenX + f), Math.round(y.mozInnerScreenY + g), Math.round(y.mozInnerScreenX));
                        c = new I(y.screenY + d, y.screenX + c.width, y.screenY + c.height, y.screenX);
                        e || (d = new I(k.top - c.top, k.right - c.left, k.bottom - c.top, k.left - c.left), d.top > a.position.top ? a.position = d : (a.position.right = a.position.left + f, a.position.bottom = a.position.top + g), a.sa = f * g);
                        a.Da(k, c, b, e, !0, !0)
                    }
                },
                Wi = function(a, b, c) {
                    var d;
                    if (a.Na && (d = jh())) {
                        c || Ui(a, y, !0);
                        if (a.pa() || a.jc) {
                            d = Vi(a, d);
                            var e = !0
                        } else {
                            e = Math.floor((a.position.left + a.position.right) / 2);
                            var f = Math.floor((a.position.top + a.position.bottom) / 2),
                                g = Wc(document);
                            d = d(e - g.x, f - g.y) ? .5 : 0;
                            e = !1
                        }
                        a.Da(a.position, d, b, c, !0, e)
                    }
                },
                Xi = function(a, b, c) {
                    if (c(b)) return b;
                    for (;;) {
                        var d = Math.floor((a + b) / 2);
                        if (d == a || d == b) return a;
                        c(d) ? a = d : b = d
                    }
                },
                Vi = function(a, b) {
                    var c = Wc(document),
                        d = a.Lb,
                        e = Math.floor(a.position.left - c.x) + 1,
                        f = Math.floor(a.position.top - c.y) + 1,
                        g = Math.floor(a.position.right -
                            c.x) - d,
                        k = Math.floor(a.position.bottom - c.y) - d;
                    a = (k - f) * (g - e);
                    if (f > k || e > g) return 0;
                    c = !!b(e, f);
                    d = !!b(g, k);
                    if (c && d) return 1;
                    var l = !!b(g, f),
                        n = !!b(e, k);
                    if (c) k = Xi(f, k, function(a) {
                        return !!b(e, a)
                    }), g = Xi(e, g, function(a) {
                        return !!b(a, f)
                    });
                    else if (l) k = Xi(f, k, function(a) {
                        return !!b(g, a)
                    }), e = Xi(g, e, function(a) {
                        return !!b(a, f)
                    });
                    else if (n) f = Xi(k, f, function(a) {
                        return !!b(e, a)
                    }), g = Xi(e, g, function(a) {
                        return !!b(a, k)
                    });
                    else if (d) f = Xi(k, f, function(a) {
                        return !!b(g, a)
                    }), e = Xi(g, e, function(a) {
                        return !!b(a, k)
                    });
                    else {
                        var u = Math.floor((e +
                                g) / 2),
                            z = Math.floor((f + k) / 2);
                        if (!b(u, z)) return 0;
                        f = Xi(z, f, function(a) {
                            return !!b(u, a)
                        });
                        k = Xi(z, k, function(a) {
                            return !!b(u, a)
                        });
                        e = Xi(u, e, function(a) {
                            return !!b(a, z)
                        });
                        g = Xi(u, g, function(a) {
                            return !!b(a, z)
                        })
                    }
                    return (k - f) * (g - e) / a
                },
                Yi = function(a, b, c, d, e) {
                    a.Na && (d || Ui(a, y, e), a.Da(a.position, c, b, d, !1, !0))
                };
            Qi.prototype.Uc = ga;
            Qi.prototype.Tc = ga;
            Qi.prototype.Cc = ga;
            Qi.prototype.Db = ga;
            var Zi = function(a, b, c) {
                    if (a.Na) {
                        var d = c ? a.ba.g : a.Rc,
                            e;
                        if (e = a.Fb) {
                            e = a.Fb;
                            var f = new I(0, 0, 0, 0);
                            e = !(e == f || e && f && e.top == f.top && e.right == f.right && e.bottom == f.bottom && e.left == f.left)
                        }
                        e && (d = dd(a.Fb.clone(), a.position.left, a.position.top));
                        a.Da(a.position, d, b, c, !0, !0)
                    }
                },
                $i = function(a, b) {
                    a.R = b.create(y, a.xc);
                    a.R.o(a.Aa)
                },
                aj = function(a, b, c) {
                    if (a.Na && a.R) {
                        var d = Gd(),
                            e = R.getInstance();
                        Ui(a, d, e.h);
                        d = a.R.g();
                        a.Da(a.position, d.g(), b, c, !0, d.h() || d.l())
                    }
                };
            h = Qi.prototype;
            h.Da = function(a, b, c, d, e, f, g) {
                var k = g || {};
                g = this.Ac(c, k);
                k = this.Jb(a, b, d, k);
                r(b) || (this.Eb = new G(b.right - b.left, b.bottom - b.top));
                e = e && this.ba.g >= (this.pa() ? .3 : .5);
                this.hc(g, k, e, f);
                this.Qa = c;
                0 < k.g && -1 === this.fd && (this.fd = c); - 1 == this.gd && this.Ja() && (this.gd = c);
                if (-2 == this.Xb) try {
                    a: {
                        var l = r(b) ? null : b;
                        if (a && a != Pi && 0 != this.sa) {
                            if (!l) {
                                if (!this.Eb) {
                                    var n = -1;
                                    break a
                                }
                                l = new I(0, this.Eb.width, this.Eb.height, 0)
                            }
                            n = l.tb && 0 < l.tb() && l.sb && 0 < l.sb() ? this.ab(a, l) : -1
                        } else n = -1
                    }
                    this.Xb = n
                }
                catch (u) {
                    ze(207, u)
                }
                this.ba = k;
                d &&
                    (this.ba.g = 0);
                this.Zb(this)
            };
            h.hc = function(a, b, c, d) {
                this.va().Y(a, b, this.ba, c, this.pa() ? .3 : .5, d)
            };
            h.Nb = function() {
                return new Eh
            };
            h.Jb = function(a, b, c) {
                var d = this.Nb();
                d.C = c;
                c = gh(ua);
                d.h = 0 == c ? -1 : 1 == c ? 0 : 1;
                if (r(b)) d.g = this.ab(b);
                else {
                    var e = b;
                    d.g = this.ab(a, e)
                }(a = e || null) ? (a = (a.bottom - a.top) * (a.right - a.left), a = 0 < a ? Math.min(this.sa * d.g / a, 1) : 0) : a = 0;
                d.A = a;
                d.pa = this.pa();
                return d
            };
            h.Ac = function(a) {
                if (-1 == this.Qa) return 0;
                a = a - this.Qa || 1;
                return 1E4 < a ? 1 : a
            };
            h.ab = function(a, b) {
                return r(a) ? a : b ? (a = Si(a, b), 0 >= this.sa || 0 >= a.tb() || 0 >= a.sb() ? 0 : (a.bottom - a.top) * (a.right - a.left) / this.sa) : 0
            };
            h.pa = function() {
                return !1
            };
            h.nb = function(a) {
                if (this.fa) return !0;
                if (this.qb) return !1;
                var b = this.pa();
                this.kb = b ? 4 : a || 1;
                if (!this.Aa || !sh()) return this.qb = !0, !1;
                a = new di(b, this.kb);
                (b = a.nb(this.Aa, String(this.Dd))) ? this.fa = a: this.qb = !0;
                return b
            };
            var Ui = function(a, b, c, d) {
                if (d) a.position = d;
                else {
                    b = c ? b : b.top;
                    try {
                        var e = Pi.clone(),
                            f = new F(0, 0);
                        if (a.Aa) {
                            var g = 1 == a.bd;
                            !c && g && Sh(a.Aa) || (e = a.Aa.getBoundingClientRect());
                            f = od(a.Aa, b)
                        }
                        var k = f.x,
                            l = f.y;
                        a.position = new I(Math.round(l), Math.round(k + (e.right - e.left)), Math.round(l + (e.bottom - e.top)), Math.round(k))
                    } catch (n) {
                        a.position = Pi.clone()
                    }
                }
                a.sa = (a.position.bottom - a.position.top) * (a.position.right - a.position.left)
            };
            Qi.prototype.wa = function() {
                return 0
            };
            Qi.prototype.Ja = function() {
                return this.Yb.Ja()
            };
            var bj = function(a, b) {
                    b = Math.pow(10, b);
                    return Math.floor(a * b) / b
                },
                cj = function(a) {
                    a.R || a.fa && ji(a.fa)
                },
                fj = function(a, b) {
                    var c = !1,
                        d = a.Aa;
                    b.document && b.document.body && 12 == a.bd && (d = b.document.body);
                    if (null === d) return !1;
                    xe(152, function() {
                        var e = new b.IntersectionObserver(function(c) {
                            try {
                                dj(b, c, a)
                            } catch (g) {
                                try {
                                    e.unobserve(d), ze("osd_adblock::nioc", g)
                                } catch (k) {}
                            }
                        }, Ri);
                        e.observe(d);
                        ej(d);
                        c = !0
                    });
                    return c
                },
                ej = function(a) {
                    if (a && (a = a.style)) {
                        var b = a.opacity;
                        a.opacity = .98;
                        a.opacity = .99;
                        a.opacity = b
                    }
                },
                gj = function(a,
                    b) {
                    var c = !1;
                    xe(151, function() {
                        var d = Cd(b).ml(function(c) {
                            try {
                                dj(b, c, a)
                            } catch (f) {
                                try {
                                    d(), ze("osd_adblock::aioc", f)
                                } catch (g) {}
                            }
                        });
                        c = !0
                    });
                    return c
                },
                dj = function(a, b, c) {
                    if (!b || !b.length || 0 >= b.length) var d = null;
                    else {
                        d = b[0];
                        for (var e = 1; e < b.length; e++) b[e].time > d.time && (d = b[e])
                    }
                    d && (b = Uh(d.boundingClientRect), e = Uh(d.intersectionRect), c.ba.g = Math.min(Math.max(d.intersectionRect.width * d.intersectionRect.height / (d.boundingClientRect.width * d.boundingClientRect.height), 0), 1), c.Rc = c.ba.g, Ui(c, a, !0, b), a = Si(b, e),
                        c.Fb = 0 >= c.sa || a.top >= a.bottom || a.left >= a.right ? new I(0, 0, 0, 0) : dd(a, -b.left, -b.top))
                };
            Qi.prototype.dc = function(a) {
                if (!this.Aa) return !1;
                var b = this.pa();
                a = a || 1;
                b && (a = 4);
                var b = new yi(b, a),
                    c = Gi(b, this.Aa);
                c && (this.kb = a, this.Ra = b);
                return c
            };
            var hj = function(a, b, c, d) {
                d && (a.hd = d);
                switch (c) {
                    case "nio":
                        return fj(a, b);
                    case "aio":
                        return gj(a, b);
                    case "swf":
                        return a.nb();
                    case "raf":
                        return a.dc();
                    case "geo":
                    case "xde":
                    case "iem":
                        return !0
                }
                return !1
            };
            var ij = function() {
                    var a = {};
                    this.h = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.cm = [128, 128], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a);
                    this.g = {};
                    for (var b in this.h) 0 < this.h[b][1] && (this.g[b] = 0);
                    this.l = 0
                },
                jj = function(a, b) {
                    var c = a.h[b],
                        d = c[1];
                    a.l += c[0];
                    0 < d && 0 == a.g[b] && (a.g[b] = 1)
                },
                lj = function(a) {
                    return kj(a, rb(a.h))
                },
                kj = function(a, b) {
                    var c = 0,
                        d;
                    for (d in a.g) Ya(b, d) && 1 == a.g[d] && (c +=
                        a.h[d][1], a.g[d] = 2);
                    return c
                },
                mj = function(a) {
                    var b = 0,
                        c;
                    for (c in a.g) {
                        var d = a.g[c];
                        if (1 == d || 2 == d) b += a.h[c][1]
                    }
                    return b
                };
            var nj = function() {
                this.g = []
            };
            ha(nj);
            var oj = function(a) {
                this.g = this.l = 0;
                this.o = a
            };
            oj.prototype.h = function() {
                return this.l
            };
            var pj = function(a, b, c) {
                b >= a.o || (a.g & 1 << b && !c ? a.l &= ~(1 << b) : a.g & 1 << b || !c || (a.l |= 1 << b), a.g |= 1 << b)
            };
            var qj = function() {
                Yh.call(this);
                this.ka = this.N = this.T = this.M = this.K = this.h = 0;
                this.w = -1;
                this.C = this.B = this.G = this.A = this.ha = this.ea = this.F = 0;
                this.V = [0, 0, 0, 0, 0];
                this.l = this.g = -1;
                this.H = this.$ = 0;
                this.ua = 2E3;
                this.ga = new oj(32);
                this.oa = new oj(32);
                this.na = new oj(32)
            };
            aa(qj, Yh);
            var rj = function(a, b, c) {
                var d = a.ka;
                Kh || c || -1 == a.w || (d += b - a.w);
                return d
            };
            qj.prototype.Y = function(a, b, c, d, e, f) {
                if (b.l) return -1;
                d = Yh.prototype.Y.call(this, a, b, c, d, e, f);
                e = Zh(e);
                e = -1 != d && d <= e;
                f = Xh(b) && Xh(c);
                Vh(b.volume) && (this.g = -1 != this.g ? Math.min(this.g, b.volume) : b.volume, this.l = Math.max(this.l, b.volume));
                e && (this.M += a, this.T += a);
                this.h += a;
                this.K += a;
                c.o && (this.$ += a, this.H += a);
                0 == d && (this.N += a);
                f && (this.ha += a, this.A += a, $h(this.V, d, a), 0 == d && (this.C += a), e ? (this.G += a, this.B += a) : this.F += a, this.ea = Math.max(this.F, this.ea));
                if (e || !Xh(b)) this.F = 0;
                a = Math.floor(b.w / 1E3);
                pj(this.ga,
                    a, Fh(b));
                pj(this.oa, a, 1 <= b.g);
                pj(this.na, a, Xh(b));
                return d
            };
            var sj = function(a, b, c, d) {
                Qi.call(this, b, c, d);
                this.T = 0;
                this.o = {};
                this.h = new ij;
                this.qc = {};
                this.Ya = this.da = "";
                this.Ma = !1;
                this.l = [];
                this.ia = this.kd = this.ld = this.C = !1;
                this.za = void 0;
                this.w = -1;
                this.Z = void 0;
                this.M = !1;
                this.N = this.H = 0;
                this.I = 1;
                this.Y = -1;
                this.ha = this.ga = !1;
                this.Ka = this.Ha = 0;
                this.$ = !1;
                this.na = this.oa = -1;
                this.J = this.F = this.g = 0;
                this.pe = this.bb = -1;
                this.Pb = 0;
                this.Ta = [0, 0, 0, 0, 0];
                this.G = this.aa = this.Mb = 0;
                this.B = -1;
                this.ea = 0;
                this.ka = !1;
                this.V = null;
                this.jd = !1;
                this.K = ga;
                this.D = [this.rb()];
                this.ua = !1;
                this.jc = !0;
                this.Lb = 2;
                b = R.getInstance();
                Ui(this, a, b.h);
                this.A = {};
                this.A.pause = "p";
                this.A.resume = "r";
                this.A.skip = "s";
                this.A.mute = "m";
                this.A.unmute = "um";
                this.A.exitfullscreen = "ef"
            };
            x(sj, Qi);
            var tj = function(a, b, c) {
                a.jd = !0;
                a.o = {};
                a.o.firstquartile = !1;
                a.o.midpoint = !1;
                a.o.thirdquartile = !1;
                a.o.complete = !1;
                a.o.pause = !1;
                a.o.skip = !1;
                a.o.viewable_impression = !1;
                a.T = 0;
                c || (a.va().w = b)
            };
            sj.prototype.dc = function(a) {
                R.getInstance();
                var b = nj.getInstance(),
                    c = Ya(b.g, 509445011);
                return Ya(b.g, 509445013) || c ? (this.ua = !0, sj.P.dc.call(this, a || 3)) : !1
            };
            sj.prototype.nb = function(a) {
                return sj.P.nb.call(this, a || 3)
            };
            sj.prototype.Uc = function(a) {
                if (!this.$ || 1E3 < a - this.oa) {
                    var b = fa("ima.bridge.getNativeViewability");
                    v(b) && (b(this.da, w(this.Sd, this)), this.$ = !0, this.oa = a)
                }
            };
            sj.prototype.Tc = function(a) {
                var b = R.getInstance();
                a - this.na > Nh(b.C) && (a = fa("ima.admob.getViewability"), v(a) && a(this.da))
            };
            var uj = function(a) {
                return p(a) ? Number(a) ? bj(a, 3) : 0 : a
            };
            h = sj.prototype;
            h.Sd = function(a) {
                this.$ = !1;
                xb(a) && this.ea++;
                this.Db(a)
            };
            h.Cc = function(a) {
                this.na = Jh();
                this.Db(a)
            };
            h.Db = function(a) {
                var b = a.opt_nativeViewBounds || {},
                    c = a.opt_nativeViewVisibleBounds || {},
                    d = a.opt_nativeTime || -1,
                    e = a.opt_nativeVolume,
                    f = a.opt_nativeViewAttached;
                a = a.opt_nativeViewHidden;
                void 0 !== f && (this.V = !!f);
                b = new I(b.top || 0, b.left + b.width || 0, b.top + b.height || 0, b.left || 0);
                c = a ? Pi.clone() : new I(c.top || 0, c.left + c.width || 0, c.top + c.height || 0, c.left || 0);
                f = void 0;
                "n" == this.za && (f = {}, f.volume = e);
                this.sa = (b.bottom - b.top) * (b.right - b.left);
                this.position = b;
                this.Da(b, c, d, !1, !0, !0, f)
            };
            h.Da = function(a, b, c, d, e, f, g) {
                var k = this.K(this) || {};
                Bb(k, g || {});
                this.w = k.duration || this.w;
                this.Z = k.isVpaid || this.Z;
                this.M = f;
                sj.P.Da.call(this, a, b, c, d, e, f, k)
            };
            h.hc = function(a, b, c, d) {
                sj.P.hc.call(this, a, b, c, d);
                this.D[this.D.length - 1].Y(a, b, this.ba, c, this.pa() ? .3 : .5, d);
                this.ha = Xh(this.ba) && Xh(b); - 1 == this.Y && this.ga && (this.Y = this.va().h);
                this.h.l = 0;
                a = this.ba;
                b = this.Ja();
                .5 <= a.g && jj(this.h, "vs");
                b && jj(this.h, "vw");
                Vh(a.volume) && jj(this.h, "am");
                this.ha && jj(this.h, "a");
                this.xa && jj(this.h, "f"); - 1 != a.h && (jj(this.h, "bm"), 1 == a.h && jj(this.h, "b"));
                this.ha && b && jj(this.h, "avw");
                this.M && jj(this.h, "cm");
                this.M && 0 < a.g && jj(this.h, "pv");
                vj(this, this.va().h, !0) && jj(this.h,
                    "gdr")
            };
            h.rb = function() {
                return new qj
            };
            h.va = function() {
                return this.Yb
            };
            h.Nb = function() {
                return new Wh
            };
            h.Jb = function(a, b, c, d) {
                a = sj.P.Jb.call(this, a, b, c, d);
                a.o = this.xa;
                a.l = this.C;
                a.volume = d.volume;
                Vh(a.volume) || (this.Ha++, b = this.ba, Vh(b.volume) && (a.volume = b.volume));
                d = d.currentTime;
                a.w = p(d) && 0 <= d ? d : -1;
                return a
            };
            h.Ac = function(a, b) {
                var c = p(b.currentTime) ? b.currentTime : this.H,
                    d = wj(this, a),
                    e = c - this.H,
                    f = b.isYouTube;
                b = p(b.isPlaying) ? b.isPlaying : !0;
                var g = 0;
                2 != this.I ? (0 <= e ? (this.N += d, this.G += Math.max(d - e, 0), g = Math.min(e, this.N)) : this.aa += Math.abs(e), 0 != e && (this.N = 0), -1 == this.B && 0 < e && (this.B = 0 <= Mh ? Jh() - Mh : -1)) : (b || this.C || (this.G += d), -1 == this.B && b && (this.B = 0 <= Mh ? Jh() - Mh : -1));
                this.H = c;
                if (f) {
                    if (1 == this.I) return g;
                    if (2 == this.I) return b ? d : 0
                }
                return wj(this, a)
            };
            var wj = function(a, b) {
                if (-1 == a.Qa) return 0;
                b = b - a.Qa || 1;
                var c = 1E4;
                p(a.w) && -1 != a.w && (c = Math.max(c, a.w / 3));
                return b > c ? 1 : b
            };
            sj.prototype.ab = function(a, b) {
                return this.ka ? 0 : this.xa ? 1 : sj.P.ab.call(this, a, b)
            };
            sj.prototype.wa = function() {
                return 1
            };
            var vj = function(a, b, c) {
                    return 15E3 <= b ? !0 : a.ga ? c ? !0 : -1 != a.w ? b >= a.w / 2 : -1 != a.Y ? b >= a.Y : !1 : !1
                },
                xj = function(a, b) {
                    for (var c = a.l, d = kf({
                            qg: 0,
                            yb: void 0
                        }), e = c.length; e < b + 1;) c.push(d()), e++;
                    a.l[b] = {
                        viewableArea: bj(a.ba.g, 2),
                        instantaneousState: a.h.l
                    }
                },
                zj = function(a, b) {
                    var c = a.qc[b];
                    if (null != c) return c;
                    a: if (Ya(dh, b)) c = !0;
                        else {
                            c = a.o[b];
                            if (p(c) && (a.o[b] = !0, !c)) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                    c = yj(a, c, c);
                    "fully_viewable_audible_half_duration_impression" == b && (c.std = "csm", c.ic = kj(a.h, ["gdr"]));
                    return c
                },
                yj = function(a, b, c) {
                    if (a.Wa) return {
                        "if": 0
                    };
                    var d = a.position.clone();
                    d.round();
                    var e = Ta(a.l, function(a) {
                            return 100 * a.qg | 0
                        }),
                        f = R.getInstance(),
                        g = a.va(),
                        k = {};
                    a.ua && (k.avms = "raf");
                    k["if"] = f.h ? 1 : void 0;
                    k.sdk = a.za ? a.za : void 0;
                    k.t = a.lg;
                    k.p = [d.top, d.left, d.bottom, d.right];
                    k.tos = g.ia;
                    k.mtos = g.J;
                    k.mcvt = g.I;
                    k.ps = void 0;
                    k.pt = e;
                    k.vht = rj(g, Jh(), !!a.C);
                    k.mut = g.ea;
                    k.a = uj(a.ba.volume);
                    k.mv = uj(g.l);
                    k.fs = a.xa ? 1 : 0;
                    k.ft = g.$;
                    k.at = g.ha;
                    k.as = .1 <= g.g ? 1 : 0;
                    k.atos = g.V;
                    k.uac = a.Ha;
                    k.vpt = g.h;
                    "nio" == f.R && (k.nio = 1, k.avms = "nio");
                    k.gmm = "4";
                    k.gdr = vj(a, g.h, !0) ? 1 : 0;
                    a.jc && (k.efpf =
                        a.Lb);
                    a.fa && (k.swf = a.fa.h, k.px = a.kb, k.avms = "swf");
                    0 < a.ea && (k.nnut = a.ea);
                    k.tcm = a.I;
                    k.nmt = a.aa;
                    k.bt = a.G;
                    k.pst = a.B;
                    k.vpaid = a.Z;
                    k.dur = a.w;
                    k.vmtime = a.H;
                    k.is = a.h.l;
                    1 <= a.l.length && (k.i0 = a.l[0].yb);
                    2 <= a.l.length && (k.i1 = a.l[1].yb);
                    3 <= a.l.length && (k.i2 = a.l[2].yb);
                    4 <= a.l.length && (k.i3 = a.l[3].yb);
                    k.cs = mj(a.h);
                    b && (k.ic = lj(a.h), k.dvpt = g.K, k.dvs = g.T, k.dfvs = g.N, k.davs = g.B, k.dafvs = g.C, c && (g.K = 0, g.T = 0, g.N = 0, g.B = 0, g.C = 0), a.Ja() && (k.dtos = g.M, k.dav = g.G, k.dtoss = a.T + 1, c && (g.M = 0, g.G = 0, a.T++)), k.dat = g.A, k.dft = g.H, c && (g.A =
                        0, g.H = 0));
                    f.o && (k.ps = [f.o.width, f.o.height]);
                    f.g && (k.bs = [f.g.width, f.g.height]);
                    f.A && (k.scs = [f.A.width, f.A.height]);
                    k.dom = f.domain;
                    a.qb && (k.fmf = "1", k.px = a.kb);
                    a.Ka && (k.vds = a.Ka);
                    a.g && (k.vmer = a.g);
                    a.F && (k.vmmk = a.F);
                    a.J && (k.vmiec = a.J);
                    a.R && (k.avms = a.R.l(), Bb(k, a.R.h()));
                    "exc" == f.R && (k.femt = a.bb, k.femvt = a.pe, k.emc = a.Pb, k.emb = a.Ta, k.emuc = a.Mb, k.avms = "exc");
                    Aj() ? (k.c = bj(a.ba.g, 2), k.ss = bj(Bj(a), 2)) : k.tth = Jh() - Hh;
                    k.mc = bj(g.aa, 2);
                    k.nc = bj(g.o, 2);
                    k.mv = uj(g.l);
                    k.nv = uj(g.g);
                    k.lte = bj(a.Xb, 2);
                    b = a.D[a.D.length -
                        1];
                    k.qmtos = b.J;
                    k.qnc = bj(b.o, 2);
                    k.qmv = uj(b.l);
                    k.qnv = uj(b.g);
                    k.qas = .1 <= b.g ? 1 : 0;
                    k.qi = a.da;
                    null !== a.V && (k.nvat = a.V ? 1 : 0);
                    k.avms || (k.avms = "geo");
                    k.psm = g.ga.g;
                    k.psv = g.ga.h();
                    k.psfv = g.oa.h();
                    k.psa = g.na.h();
                    return k
                },
                Bj = function(a) {
                    if (a.xa) return 1;
                    var b = y.screen.width * y.screen.height;
                    return 0 >= b ? -1 : Math.min(a.sa * a.ba.g / b, 1)
                };
            var Cj = function(a, b) {
                    this.h = a || 0;
                    this.g = b || ""
                },
                Dj = function(a) {
                    return !!a.h || !!a.g
                },
                Ej = function(a, b) {
                    a.h && (b[4] = a.h);
                    a.g && (b[12] = a.g)
                };
            Cj.prototype.match = function(a) {
                return Dj(this) && Dj(a) ? this.g || a.g ? this.g == a.g : this.h || a.h ? this.h == a.h : !1 : !1
            };
            Cj.prototype.toString = function() {
                var a = "" + this.h;
                this.g && (a += "-" + this.g);
                return a
            };
            var Fj = function(a) {
                    var b = [];
                    kb(a, function(a, d) {
                        d = encodeURIComponent(d);
                        q(a) && (a = encodeURIComponent(a));
                        b.push(d + "=" + a)
                    });
                    b.push("24=" + (new Date).getTime());
                    return b.join("\n")
                },
                Gj = 0,
                Hj = 0,
                Ij = function() {
                    var a = 0,
                        b = y;
                    try {
                        if (b && b.Goog_AdSense_getAdAdapterInstance) return b
                    } catch (c) {}
                    for (; b && 5 > a;) {
                        try {
                            if (b.google_osd_static_frame) return b
                        } catch (c) {}
                        try {
                            if (b.aswift_0 && b.aswift_0.google_osd_static_frame) return b.aswift_0
                        } catch (c) {}
                        a++;
                        b = b != b.parent ? b.parent : null
                    }
                    return null
                },
                Jj = function(a, b, c, d, e, f, g, k) {
                    g =
                        g || ga;
                    if (10 < Hj) y.clearInterval(Gj), g();
                    else if (++Hj, y.postMessage && Dj(b)) {
                        if (g = Ij()) {
                            var l = {};
                            Ej(b, l);
                            l[0] = "goog_request_monitoring";
                            l[6] = a;
                            c && (l[27] = c);
                            l[16] = !!d;
                            e && e.length && (l[17] = e.join(","));
                            f && (l[19] = f);
                            k && (l[28] = k);
                            try {
                                var n = Fj(l);
                                g.postMessage(n, "*")
                            } catch (u) {}
                        }
                    } else y.clearInterval(Gj), g()
                };
            var Kj = function(a) {
                var b = [],
                    c = [];
                kb(a, function(a, e) {
                    if (!(e in Object.prototype) && "undefined" != typeof a) switch (ka(a) && (a = a.join(",")), a = [e, "=", a].join(""), e) {
                        case "r":
                        case "tt":
                        case "error":
                        case "mtos":
                        case "tos":
                        case "p":
                        case "bs":
                        case "aio":
                        case "nio":
                        case "swf":
                        case "iem":
                            b.unshift(a);
                            break;
                        case "req":
                        case "url":
                        case "referrer":
                        case "iframe_loc":
                            c.push(a);
                            break;
                        default:
                            b.push(a)
                    }
                });
                return b.concat(c)
            };
            var Lj = function(a, b, c) {
                Me.call(this);
                this.o = null != c ? w(a, c) : a;
                this.l = b;
                this.h = w(this.eg, this);
                this.g = []
            };
            x(Lj, Me);
            h = Lj.prototype;
            h.Ab = !1;
            h.Ua = null;
            h.yc = function(a) {
                this.g = arguments;
                this.Ua ? this.Ab = !0 : Mj(this)
            };
            h.L = function() {
                Lj.P.L.call(this);
                this.Ua && (m.clearTimeout(this.Ua), this.Ua = null, this.Ab = !1, this.g = [])
            };
            h.eg = function() {
                this.Ua = null;
                this.Ab && (this.Ab = !1, Mj(this))
            };
            var Mj = function(a) {
                a.Ua = Lg(a.h, a.l);
                a.o.apply(null, a.g)
            };
            var Oj = function() {
                    return !Nj() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
                },
                Nj = function() {
                    return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
                };
            var Pj = null,
                Qj = null,
                Rj = null,
                Sj = null,
                Tj = null,
                Uj = !1,
                Vj = function() {
                    var a = R.getInstance().R;
                    return "nio" == a || "aio" == a
                },
                ak = function() {
                    if (!Uj) {
                        Uj = !0;
                        var a = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
                        if (!Pj && !Vj()) {
                            if (a) {
                                var b = pe(136, Wj, void 0, void 0);
                                var c = function() {
                                    a(function() {
                                        y.setTimeout(b, 0)
                                    })
                                }
                            } else c = Wj;
                            Qj = new Lj(pe(137, c, void 0, void 0), 100);
                            c = w(Qj.yc, Qj);
                            Pj = Mi(y, "scroll", c, 138)
                        }
                        if (!Rj && !Vj()) {
                            if (a) {
                                var d =
                                    pe(139, Xj, void 0, void 0);
                                c = function() {
                                    a(function() {
                                        y.setTimeout(d, 0)
                                    })
                                }
                            } else c = Xj;
                            Sj = new Lj(pe(140, c, void 0, void 0), 100);
                            c = w(Sj.yc, Sj);
                            Rj = Mi(y, "resize", c, 141)
                        }
                        Yj();
                        Zj()
                    }
                },
                Xj = function() {
                    bk(!1);
                    Wj()
                },
                Wj = function() {
                    ck(dk(), !1)
                },
                hk = function() {
                    var a = R.getInstance();
                    ek && !a.l && "exc" != a.R && (a.g = Gh(y, ek));
                    var b = new fk;
                    switch (a.R) {
                        case "xde":
                            var c = gk;
                            bk(!1);
                            var d = R.getInstance(),
                                e = d.G,
                                a = e.height - c;
                            0 >= a && (a = e.height, c = 0);
                            d.g = new G(e.width, a);
                            a = new fk;
                            a.l = d.g;
                            a.g = e;
                            a.o = c;
                            return a;
                        case "geo":
                            a: {
                                a = a.g;
                                b = new fk;
                                b.l = a;
                                if (null != a && -1 != a.width && -1 != a.height && -12245933 != a.width && -12245933 != a.height) {
                                    var f = R.getInstance();
                                    if (f.l) c = f.w;
                                    else try {
                                        var f = ek,
                                            g = y || y,
                                            g = g.top,
                                            d = a || Gh(g, f),
                                            e = Wc(Sc(g.document).g),
                                            c = -1 == d.width || -12245933 == d.width ? new I(d.width, d.width, d.width, d.width) : new I(e.y, e.x + d.width, e.y + d.height, e.x)
                                    } catch (k) {
                                        c = b;
                                        break a
                                    }
                                    b.h = c
                                }
                                c = b
                            }
                            return c;
                        default:
                            return b
                    }
                },
                ck = function(a, b, c) {
                    if (!ik)
                        if (window.clearTimeout(jk), jk = null, xe("osd::debugRemoveZombies", function() {
                                for (var b = a.length - 1; 0 <= b; b--);
                            }), 0 == a.length) b ||
                            kk();
                        else {
                            var d = hk(),
                                e = R.getInstance();
                            try {
                                var f = Jh();
                                if (null != Ni.getInstance().g)
                                    for (var g = 0; g < a.length; g++) aj(a[g], f, b);
                                else switch (e.R) {
                                    case "exc":
                                        for (g = 0; g < a.length; g++) Zi(a[g], f, b);
                                        break;
                                    case "nis":
                                        for (g = 0; g < a.length; g++) p(c) ? a[g].Db(c) : a[g].Uc(f);
                                        break;
                                    case "gsv":
                                        for (g = 0; g < a.length; g++) p(c) ? a[g].Cc(c) : a[g].Tc(f);
                                        break;
                                    case "aio":
                                    case "nio":
                                        for (g = 0; g < a.length; g++) Zi(a[g], f, b);
                                        break;
                                    case "xde":
                                        if (d.g)
                                            for (g = 0; g < a.length; g++) Ti(a[g], f, d.g, d.o, b);
                                        break;
                                    case "iem":
                                        for (g = 0; g < a.length; g++) Wi(a[g], f,
                                            b);
                                        break;
                                    case "swf":
                                        A(a, function(a) {
                                            if (b) {
                                                if (a.fa) {
                                                    var c = a.fa;
                                                    3 <= c.o && (c.o = 3);
                                                    a.ba.g = 0
                                                }
                                            } else if (a.fa && "d" != a.fa.h) {
                                                var c = pi(a.fa),
                                                    d = [0, 0, 0, 0, 0, .01, .5, 1, .01, .3],
                                                    e = d[c.g + 1];
                                                a.ba.g = d[c.l + 1];
                                                a.Da(a.position, e, a.Qa + c.h, !1, !0, !1);
                                                a.Ja() && 1 != a.wa() && !a.ec && a.fa && ji(a.fa);
                                                (c = 2 == c.g || si(a.fa)) || (c = a.fa, c = "f" == c.h && 3E3 <= c.w);
                                                c && (a.hd(a), a.ec = !1, a.fa && ji(a.fa))
                                            }
                                        });
                                        break;
                                    case "raf":
                                        A(a, function(a) {
                                            if (b) a.Ra && (a.Ra.o = 3, a.ba.g = 0);
                                            else if (a.Ra) {
                                                var c = Ji(a.Ra),
                                                    d = [0, 0, 0, 0, 0, .01, .5, 1, .01, .3],
                                                    e = d[c.g + 1];
                                                a.ba.g = d[c.l +
                                                    1];
                                                a.Da(a.position, e, a.Qa + c.h, !1, !0, !1);
                                                a.Ja() && 1 != a.wa() && !a.ec && a.Ra && Ii(a.Ra)
                                            }
                                        });
                                        break;
                                    case "geo":
                                        if (d.h)
                                            for (g = 0; g < a.length; g++) Yi(a[g], f, d.h, b, e.h)
                                }++lk
                            } finally {
                                b ? A(a, function(a) {
                                    a.ba.g = 0
                                }) : kk()
                            }
                        }
                },
                Yj = function() {
                    var a = Zj,
                        b;
                    ua.mozVisibilityState ? b = "mozvisibilitychange" : ua.webkitVisibilityState ? b = "webkitvisibilitychange" : ua.visibilityState && (b = "visibilitychange");
                    b && (Tj = Tj || Mi(ua, b, a, 142))
                },
                Zj = function() {
                    var a = Aj(),
                        b = Jh();
                    a ? (Kh || (Lh = b, A(mk, function(a) {
                            var c = a.va();
                            c.ka = rj(c, b, !!a.C)
                        })), Kh = !0, bk(!0)) :
                        (Kh = !1, Hh = b, A(mk, function(a) {
                            a.Na && (a.va().w = b)
                        }));
                    ck(dk(), !a)
                },
                Aj = function() {
                    if (nk()) return !0;
                    var a = gh(ua),
                        b = 1 === a,
                        a = 0 === a;
                    return R.getInstance(), b || a
                },
                kk = function() {
                    y && (jk = y.setTimeout(ye(143, function() {
                        ck(dk(), !1)
                    }), Nh(R.getInstance().C)))
                },
                ok = function(a) {
                    return null != a && Ua(mk, function(b) {
                        return b.element == a
                    })
                },
                pk = function(a) {
                    return Xa(mk, function(b) {
                        return b.da == a
                    })
                },
                mk = [],
                qk = [],
                dk = function() {
                    return 0 == mk.length ? qk : 0 == qk.length ? mk : bb(qk, mk)
                },
                ik = !1,
                jk = null,
                gk = 0,
                ek = Nj() || Oj(),
                lk = 0,
                bk = function(a) {
                    var b =
                        R.getInstance();
                    b.g = b.l ? (new G(b.w.tb(), b.w.sb())).round() : Gh(y, ek);
                    if (!a) {
                        b.G = y && y.outerWidth ? new G(y.outerWidth, y.outerHeight) : new G(-12245933, -12245933);
                        a = y;
                        null !== a && a.top != a && (a = a.top);
                        var c = 0,
                            d = 0,
                            e = R.getInstance().g;
                        try {
                            var f = a.document,
                                g = f.body,
                                k = f.documentElement;
                            if ("CSS1Compat" == f.compatMode && k.scrollHeight) c = k.scrollHeight != e.height ? k.scrollHeight : k.offsetHeight, d = k.scrollWidth != e.width ? k.scrollWidth : k.offsetWidth;
                            else {
                                var l = k.scrollHeight,
                                    n = k.scrollWidth,
                                    u = k.offsetHeight,
                                    z = k.offsetWidth;
                                k.clientHeight != u && (l = g.scrollHeight, n = g.scrollWidth, u = g.offsetHeight, z = g.offsetWidth);
                                l > e.height ? l > u ? (c = l, d = n) : (c = u, d = z) : l < u ? (c = l, d = n) : (c = u, d = z)
                            }
                            var N = new G(d, c)
                        } catch (Z) {
                            N = new G(-12245933, -12245933)
                        }
                        b.o = N
                    }
                },
                sk = function(a, b, c) {
                    if (a = rk(a, "swf", b, c)) R.getInstance().R = "swf", R.getInstance().R = "swf", A(b, function(a) {
                        a.fa || c(a)
                    });
                    return a
                },
                tk = function() {
                    var a = rk(y, "raf", dk());
                    a && (R.getInstance().R = "raf");
                    return a
                },
                rk = function(a, b, c, d) {
                    var e = !1;
                    A(c, function(c) {
                        hj(c, a, b, d) && (e = !0)
                    });
                    return e
                },
                uk = function(a) {
                    var b = [];
                    A(a, function(a) {
                        ok(a.element) || (mk.push(a), b.push(a))
                    })
                },
                vk = function(a) {
                    var b = [];
                    A(a, function(a) {
                        null == Xa(mk, function(b) {
                            return b.element == a.element && b.Ya == a.Ya
                        }) && (mk.push(a), b.push(a))
                    })
                },
                nk = function() {
                    return Ua(dk(), function(a) {
                        return a.xa
                    })
                },
                fk = function() {
                    this.g = this.l = null;
                    this.o = 0;
                    this.h = null
                },
                wk = function(a) {
                    var b = [];
                    kb(a, function(a, d) {
                        d in Object.prototype || "undefined" == typeof a || (ka(a) && (a = a.join(",")), b.push([d, "=", a].join("")))
                    });
                    return b.join("&")
                };
            var xk = function() {
                    var a = B;
                    return a ? Ua("AppleTV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;OMI/".split(";"), function(b) {
                        return Ha(a, b)
                    }) ? !0 : Ha(a, "Presto") && Ha(a, "Linux") && !Ha(a, "X11") && !Ha(a, "Android") && !Ha(a, "Mobi") : !1
                },
                yk = function() {
                    return Ha(B, "CrKey") || Ha(B, "PlayStation") || Ha(B, "Roku") || xk() || Ha(B, "Xbox")
                };
            var zk = null,
                Ak = "",
                Bk = !1,
                Ck = function(a) {
                    if (!a) return "";
                    var b = a.document,
                        c = [];
                    c.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
                    b && b.referrer && c.push("referrer=" + encodeURIComponent(b.referrer.substring(0, 512)));
                    return c.join("&")
                };
            var Dk = function(a) {
                    return function(b) {
                        return !p(b[a]) && p(0) ? 0 : b[a]
                    }
                },
                Fk = function() {
                    var a = [0, 2, 4];
                    return function(b) {
                        b = b.tos;
                        if (ka(b)) {
                            for (var c = Array(b.length), d = 0; d < b.length; d++) c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                            return p(a) ? Ek(c, a) : c
                        }
                    }
                },
                Gk = function(a, b) {
                    return function(c) {
                        c = c[a];
                        if (ka(c)) return Ek(c, b)
                    }
                },
                Ek = function(a, b) {
                    return Sa(a, function(a, d) {
                        return Ya(b, d)
                    })
                };
            var Hk = {
                    sv: "sv",
                    cb: "cb",
                    e: "e",
                    nas: "nas",
                    msg: "msg",
                    "if": "if",
                    sdk: "sdk",
                    p: "p",
                    tos: "tos",
                    mtos: "mtos",
                    mcvt: "mcvt",
                    ps: "ps",
                    scs: "scs",
                    bs: "bs",
                    pt: "pt",
                    vht: "vht",
                    mut: "mut",
                    a: "a",
                    ft: "ft",
                    dft: "dft",
                    at: "at",
                    dat: "dat",
                    as: "as",
                    vpt: "vpt",
                    gmm: "gmm",
                    std: "std",
                    efpf: "efpf",
                    swf: "swf",
                    nio: "nio",
                    px: "px",
                    nnut: "nnut",
                    vmer: "vmer",
                    vmmk: "vmmk",
                    vmiec: "vmiec",
                    nmt: "nmt",
                    tcm: "tcm",
                    bt: "bt",
                    pst: "pst",
                    vpaid: "vpaid",
                    dur: "dur",
                    vmtime: "vmtime",
                    dtos: "dtos",
                    dtoss: "dtoss",
                    dvs: "dvs",
                    dfvs: "dfvs",
                    dvpt: "dvpt",
                    fmf: "fmf",
                    vds: "vds",
                    is: "is",
                    i0: "i0",
                    i1: "i1",
                    i2: "i2",
                    i3: "i3",
                    ic: "ic",
                    cs: "cs",
                    c: "c",
                    mc: "mc",
                    nc: "nc",
                    mv: "mv",
                    nv: "nv",
                    qmt: "qmtos",
                    qnc: "qnc",
                    qmv: "qmv",
                    qnv: "qnv",
                    raf: "raf",
                    rafc: "rafc",
                    lte: "lte",
                    tth: "tth",
                    femt: "femt",
                    femvt: "femvt",
                    emc: "emc",
                    emuc: "emuc",
                    emb: "emb",
                    avms: "avms",
                    nvat: "nvat",
                    qi: "qi",
                    psm: "psm",
                    psv: "psv",
                    psfv: "psfv",
                    psa: "psa"
                },
                Ik = {
                    c: Dk("c"),
                    at: "at",
                    atos: Gk("atos", [0, 2, 4]),
                    ta: function(a, b) {
                        return function(c) {
                            if (!p(c[a])) return b
                        }
                    }("tth", "1"),
                    a: "a",
                    dur: "dur",
                    p: "p",
                    tos: Fk(),
                    j: "dom",
                    mtos: Gk("mtos", [0, 2, 4]),
                    gmm: "gmm",
                    gdr: "gdr",
                    ss: Dk("ss"),
                    vsv: kf("w2"),
                    t: "t"
                },
                Jk = {
                    atos: "atos",
                    avt: Gk("atos", [2]),
                    davs: "davs",
                    dafvs: "dafvs",
                    dav: "dav",
                    ss: Dk("ss"),
                    t: "t"
                },
                Kk = {
                    a: "a",
                    tos: Fk(),
                    at: "at",
                    c: Dk("c"),
                    mtos: Gk("mtos", [0, 2, 4]),
                    dur: "dur",
                    fs: "fs",
                    p: "p",
                    vpt: "vpt",
                    vsv: kf("ias_w2"),
                    dom: "dom",
                    gmm: "gmm",
                    gdr: "gdr",
                    t: "t"
                },
                Lk = {
                    tos: Fk(),
                    at: "at",
                    c: Dk("c"),
                    mtos: Gk("mtos", [0, 2, 4]),
                    p: "p",
                    vpt: "vpt",
                    vsv: kf("dv_w4"),
                    gmm: "gmm",
                    gdr: "gdr",
                    dom: "dom",
                    t: "t",
                    mv: "mv",
                    qmpt: Gk("qmtos", [0, 2, 4]),
                    qvs: function(a, b) {
                        return function(c) {
                            var d = c[a];
                            if (r(d)) return Ta(b, function(a) {
                                return 0 <
                                    d && d >= a ? 1 : 0
                            })
                        }
                    }("qnc", [1, .5, 0]),
                    qmv: "qmv",
                    qa: "qas",
                    a: "a"
                };
            var Mk = function() {
                this.w = this.F = !1;
                this.h = null;
                this.N = "";
                this.Y = "h";
                this.g = {};
                this.g.start = this.je;
                this.g.firstquartile = this.Zd;
                this.g.midpoint = this.de;
                this.g.thirdquartile = this.ke;
                this.g.complete = this.Vd;
                this.g.pause = this.fe;
                this.g.resume = this.he;
                this.g.skip = this.ie;
                this.g.viewable_impression = this.oe;
                this.g.mute = this.ee;
                this.g.unmute = this.ne;
                this.g.fullscreen = this.$d;
                this.g.exitfullscreen = this.Yd;
                this.g.fully_viewable_audible_half_duration_impression = this.ae;
                this.g.measurable_impression = this.ce;
                this.g.abandon = this.Ud;
                this.g.engagedview = this.Xd;
                this.g.impression = this.be;
                this.g.creativeview = this.Wd;
                this.g.progress = this.ge;
                this.l = {};
                this.l.overlay_resize = this.J;
                this.l.abandon = this.A;
                this.l.close = this.A;
                this.l.collapse = this.A;
                R.getInstance().B = 3
            };
            h = Mk.prototype;
            h.Ob = function() {};
            h.Dc = ga;
            h.$c = ga;
            h.ad = ga;
            h.uc = ga;
            h.rc = ga;
            var Nk = function(a, b, c) {
                c || (b = -1);
                return new sj(y, a, b, 7)
            };
            Mk.prototype.C = function(a) {
                window.clearTimeout(jk);
                jk = null;
                Ak = a;
                ik = !0
            };
            var Pk = function(a) {
                var b = R.getInstance(),
                    c = nj.getInstance(),
                    d = w(function() {
                        b.l = !1;
                        Ok(this)
                    }, a);
                if (a.h && Dj(a.h)) {
                    var e = y.document.domain;
                    Mi(y, "message", w(a.I, a), 179);
                    Gj = y.setInterval(pe(197, sa(Jj, 4, a.h, e, !1, c.g, a.N, d, void 0), void 0, void 0), 500)
                } else d()
            };
            Mk.prototype.I = function(a) {
                if (a && a.data && q(a.data)) {
                    var b = a.data;
                    if (q(b)) {
                        var c = {};
                        for (var b = b.split("\n"), d = 0; d < b.length; d++) {
                            var e = b[d].indexOf("=");
                            if (!(0 >= e)) {
                                var f = Number(b[d].substr(0, e)),
                                    e = b[d].substr(e + 1);
                                switch (f) {
                                    case 5:
                                    case 8:
                                    case 11:
                                    case 15:
                                    case 16:
                                    case 18:
                                    case 26:
                                        e = "true" == e;
                                        break;
                                    case 4:
                                    case 7:
                                    case 6:
                                    case 14:
                                    case 20:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 24:
                                    case 25:
                                        e = Number(e);
                                        break;
                                    case 3:
                                    case 19:
                                        if (v(decodeURIComponent)) try {
                                            e = decodeURIComponent(e)
                                        } catch (k) {
                                            throw Error("Error: URI malformed: " +
                                                e);
                                        }
                                        break;
                                    case 17:
                                        e = Ta(decodeURIComponent(e).split(","), Number)
                                }
                                c[f] = e
                            }
                        }
                        c = c[0] ? c : null
                    } else c = null;
                    if (c && (b = new Cj(c[4], c[12]), this.h && this.h.match(b)))
                        if (b = c[0], "goog_acknowledge_monitoring" == b) {
                            a = c;
                            y.clearInterval(Gj);
                            var g = R.getInstance();
                            a[8] ? (g.l = !1, Ok(this)) : (Oi(g, a[9]), ak())
                        } else if ("goog_get_mode" == b) {
                        b = {};
                        this.h && Ej(this.h, b);
                        b[0] = "goog_provide_mode";
                        b[6] = 4;
                        b[19] = this.N;
                        b[16] = !1;
                        try {
                            g = Fj(b), a.source.postMessage(g, a.origin)
                        } catch (k) {}
                        a = c[9];
                        Oi(R.getInstance(), a);
                        y.clearInterval(Gj)
                    } else if ("goog_update_data" ==
                        b || "goog_image_request" == b) a = c, g = R.getInstance(), b = c = 0, isNaN(a[22]) || isNaN(a[23]) || (c = a[22], b = a[23]), g.g = (new G(Number(c), Number(b))).round(), Oi(g, a[9])
                }
            };
            var Ok = function(a) {
                var b;
                if (b = null != y.IntersectionObserver)
                    if (b = rk(y, "nio", dk())) R.getInstance().R = "nio";
                if (b) ak();
                else if (th() && tk()) ak();
                else {
                    if (Ob && r(y.screenX) && r(y.mozInnerScreenX) && r(y.outerWidth)) {
                        b = y.navigator.userAgent;
                        var c = b.indexOf("Firefox/");
                        if (0 <= c) {
                            var c = Math.floor(b.substr(c + 8)) || -1,
                                d = b.indexOf("Mac OS X 10."),
                                e = -1;
                            0 <= d && (e = Number(b.substr(d + 12, 1)) || -1);
                            var f = 0 < e ? -1 : b.indexOf("Windows NT "),
                                d = -1;
                            0 <= f && (d = {
                                "6.0": 0,
                                "6.1": 1,
                                "6.2": 2
                            }[b.substr(f + 11, 3)] || -1);
                            b = 148;
                            5 <= e ? b = 4 <= c ? 108 : 3 <= c ?
                                127 : 108 : 0 <= d && (16 == c || 17 == c || 18 == c) && (b = [
                                    [146, 146, 146],
                                    [148, 147, 148],
                                    [131, 130, 136]
                                ][d][c - 16])
                        } else b = null;
                        null !== b && (gk = b, R.getInstance().R = "xde");
                        b = !0
                    } else b = !1;
                    b ? ak() : (D && E(8) && v(jh()) ? (R.getInstance().R = "iem", b = !0) : b = !1, b ? ak() : sh() && sk(y, mk, w(a.H, a)) ? ak() : a.C("i"))
                }
            };
            Mk.prototype.H = function(a) {
                a && (a.Wa = !0, 1 == a.wa() ? Qk(a, "fp") : 2 == a.wa() && this.$c(a), this.D(a))
            };
            var Qk = function(a, b) {
                if (!a.Ma) {
                    var c = zj(a, "start"),
                        c = Rk(c, Hk),
                        d = zk || y,
                        e = [];
                    e.push("v=589v");
                    e.push("r=" + b);
                    b = 0;
                    "swf" == R.getInstance().R && (b = 1);
                    e.push("efm=" + b);
                    e.push(c);
                    e.push(Ck(d));
                    Dd(y, ("//pagead2.googlesyndication.com/pagead/gen_204?id=lidarvf&" + e.join("&")).substring(0, 2E3), void 0);
                    a.Ma = !0
                }
            };
            h = Mk.prototype;
            h.je = function(a) {
                xj(a, 0);
                return zj(a, "start")
            };
            h.ge = function(a, b) {
                ck([a], !Aj(), b);
                return zj(a, "progress")
            };
            h.Zd = function(a, b) {
                return Sk(a, "firstquartile", 1, b)
            };
            h.de = function(a, b) {
                a.ga = !0;
                return Sk(a, "midpoint", 2, b)
            };
            h.ke = function(a, b) {
                return Sk(a, "thirdquartile", 3, b)
            };
            h.Vd = function(a, b) {
                b = Sk(a, "complete", 4, b);
                a.xa = !1;
                Tk(1, a.da);
                return b
            };
            var Sk = function(a, b, c, d) {
                ck([a], !Aj(), d);
                xj(a, c);
                b = zj(a, b);
                if (4 != c) {
                    d = a.D;
                    a = a.rb;
                    for (var e = d.length; e < c + 1;) d.push(a()), e++
                }
                return b
            };
            h = Mk.prototype;
            h.fe = function(a, b) {
                return Uk(a, "pause", b)
            };
            h.Ud = function(a, b) {
                return Uk(a, "abandon", b)
            };
            h.he = function(a, b) {
                var c = Aj();
                a.C && !c && (a.va().w = Jh());
                ck([a], !c, b);
                a.C = !1;
                return zj(a, "resume")
            };
            h.oe = function(a) {
                return zj(a, "viewable_impression")
            };
            h.ie = function(a, b) {
                var c = !Aj();
                ck([a], c, b);
                b = zj(a, "skip");
                a.xa = !1;
                Tk(1, a.da);
                return b
            };
            h.ee = function(a, b) {
                ck([a], !Aj(), b);
                return zj(a, "mute")
            };
            h.ne = function(a, b) {
                ck([a], !Aj(), b);
                return zj(a, "unmute")
            };
            h.$d = function(a, b) {
                a.xa = !0;
                ck([a], !Aj(), b);
                return zj(a, "fullscreen")
            };
            h.Yd = function(a, b) {
                a.xa = !1;
                ck([a], !Aj(), b);
                return zj(a, "exitfullscreen")
            };
            h.ae = function(a) {
                return zj(a, "fully_viewable_audible_half_duration_impression")
            };
            h.ce = function(a) {
                return zj(a, "measurable_impression")
            };
            h.Xd = function(a) {
                return zj(a, "engagedview")
            };
            h.be = function(a) {
                return zj(a, "impression")
            };
            h.Wd = function(a) {
                return zj(a, "creativeview")
            };
            var Uk = function(a, b, c) {
                var d = a.va();
                d.ka = rj(d, Jh(), !!a.C);
                d = !Aj();
                ck([a], d, c);
                a.C = !0;
                return zj(a, b)
            };
            Mk.prototype.J = function(a, b) {
                ck([a], !Aj(), b);
                return a.h()
            };
            Mk.prototype.A = function(a, b) {
                ck([a], !Aj(), b);
                Tk(2, a.da);
                return a.h()
            };
            var Vk = function(a, b, c) {
                    if (!b.jd) {
                        "i" != Ak && (ik = !1);
                        var d = Ni.getInstance();
                        null != d.g && $i(b, null != d.g ? d.g : null);
                        hj(b, y, R.getInstance().R, function(b) {
                            return a.H(b)
                        });
                        d = p(c) ? c.opt_nativeTime : void 0;
                        Mh = d = r(d) ? d : Jh();
                        b.Na = !0;
                        var e = Aj();
                        tj(b, d, e);
                        ck([b], !e, c)
                    }
                },
                Tk = function(a, b) {
                    if (q(b)) {
                        if (1 == a) var c = mk;
                        else if (2 == a) c = qk;
                        else return;
                        var d = Wa(c, function(c) {
                            return c.wa() != a ? !1 : c.da == b
                        });
                        0 <= d && (cj(c[d]), Array.prototype.splice.call(c, d, 1))
                    }
                },
                Xk = function(a, b, c) {
                    var d = Xa(mk, function(a) {
                        return a.element == c
                    });
                    null !==
                        d && d.da != b && (Tk(1, d.da), d = null);
                    d || (d = Wk(a, c), d.da = b, d.za = a.Y);
                    return d
                },
                Wk = function(a, b) {
                    b = Nk(b, Jh(), !1);
                    b.Zb = w(a.o, a);
                    R.getInstance().C = 79463069;
                    vk([b]);
                    ak();
                    return b
                };
            Mk.prototype.o = function(a) {
                a.Ja() && !a.ld && this.ad(a);
                1 == a.wa() && this.uc(a)
            };
            var Yk = function(a, b) {
                    var c = wb(function(b) {
                            return b == a
                        }),
                        c = {
                            sv: "589",
                            cb: "j",
                            e: eh[c]
                        },
                        d = zj(b, a);
                    Bb(c, d);
                    b.qc[a] = d;
                    return 2 == b.wa() ? Kj(c).join("&") : Rk(c, Hk)
                },
                Rk = function(a, b, c, d, e) {
                    var f = {};
                    if (p(a))
                        if (null != b)
                            for (var g in b) {
                                var k = b[g];
                                g in Object.prototype || null != k && (v(k) ? f[g] = k(a) : f[g] = a[k])
                            } else Bb(f, a);
                    p(c) && Bb(f, c);
                    a = wk(f);
                    0 != a.length && p(d) && p(e) && (e = e(a), a += "&" + d + "=" + e);
                    return a
                },
                $k = function(a, b) {
                    var c = {
                        sv: "589",
                        cb: "j"
                    };
                    c.nas = mk.length;
                    c.msg = a;
                    p(b) && (a = Zk(b)) && (c.e = eh[a]);
                    return c
                },
                Zk = function(a) {
                    var b =
                        a.toLowerCase();
                    return wb(function(a) {
                        return a == b
                    })
                };
            Mk.prototype.D = ga;
            var al = function(a, b) {
                var c = a[b];
                p(c) && (a[b] = Math.floor(1E3 * c))
            };
            var bl = (new Date).getTime(),
                cl = !1,
                dl = !1,
                el = !1,
                S = function(a) {
                    return !a || "function" !== typeof a || 0 > String(Function.prototype.toString).indexOf("[native code]") ? !1 : 0 <= String(a).indexOf("[native code]") && !0 || !1
                },
                fl = function(a) {
                    return !!(1 << a & bl)
                },
                gl = [
                    function(a) {
                        return !(!a.chrome || !a.chrome.webstore)
                    },
                    function(a) {
                        return !!a.document.documentMode
                    },
                    function(a) {
                        return !!a.document.fonts.ready
                    },
                    function() {
                        return fl(0)
                    },
                    function(a) {
                        return !!a.ActiveXObject
                    },
                    function(a) {
                        return !!a.chrome
                    },
                    function(a) {
                        return !!a.navigator.serviceWorker
                    },
                    function(a) {
                        return !!a.opera
                    },
                    function(a) {
                        return !!a.sidebar
                    },
                    function() {
                        return !+"\v1"
                    },
                    function() {
                        return fl(1)
                    },
                    function(a) {
                        return !a.ActiveXObject
                    },
                    function(a) {
                        return "-ms-ime-align" in a.document.documentElement.style
                    },
                    function(a) {
                        return "-ms-scroll-limit" in a.document.documentElement.style
                    },
                    function(a) {
                        return "-webkit-font-feature-settings" in a.document.body.style
                    },
                    function() {
                        return fl(2)
                    },
                    function(a) {
                        return "ActiveXObject" in a
                    },
                    function(a) {
                        return "MozAppearance" in a.document.documentElement.style
                    },
                    function(a) {
                        return "_phantom" in
                            a
                    },
                    function(a) {
                        return "callPhantom" in a
                    },
                    function(a) {
                        return "content" in a.document.createElement("template")
                    },
                    function(a) {
                        return "getEntriesByType" in a.performance
                    },
                    function() {
                        return fl(3)
                    },
                    function(a) {
                        return "image-rendering" in a.document.body.style
                    },
                    function(a) {
                        return "object-fit" in a.document.body.style
                    },
                    function(a) {
                        return "open" in a.document.createElement("details")
                    },
                    function(a) {
                        return "orientation" in a.screen
                    },
                    function(a) {
                        return "performance" in a
                    },
                    function(a) {
                        return "shape-image-threshold" in a.document.body.style
                    },
                    function() {
                        return fl(4)
                    },
                    function(a) {
                        return "srcset" in a.document.createElement("img")
                    },
                    function() {
                        return dl
                    },
                    function() {
                        return el
                    },
                    function() {
                        return fl(5)
                    },
                    function(a) {
                        a = a.document.createElement("div");
                        a.style.width = "1px";
                        a.style.width = "-webkit-min-content";
                        a.style.width = "min-content";
                        return "1px" != a.style.width
                    },
                    function(a) {
                        a = a.document.createElement("div");
                        a.style.width = "1px";
                        a.style.width = "calc(1px - 1px)";
                        a.style.width = "-webkit-calc(1px - 1px)";
                        return "1px" != a.style.width
                    },
                    function() {
                        var a = !1;
                        eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
                        try {
                            DummyFunction1()
                        } catch (b) {
                            a = !0
                        }
                        return a
                    },
                    function() {
                        var a = !1;
                        try {
                            DummyFunction2()
                        } catch (b) {
                            a = !0
                        }
                        return a
                    },
                    function() {
                        return !1
                    },
                    function() {
                        return fl(6)
                    },
                    function(a) {
                        var b = a.document.createElement("canvas");
                        b.width = b.height = 1;
                        b = b.getContext("2d");
                        b.globalCompositeOperation = "multiply";
                        b.fillStyle = "rgb(0,255,255)";
                        b.fillRect(0, 0, 1, 1);
                        b.fill();
                        b.fillStyle = "rgb(255,255,0)";
                        b.fillRect(0, 0, 1, 1);
                        b.fill();
                        b = b.getImageData(0, 0, 1, 1).data;
                        return b[0] == b[2] && b[1] == b[3] || S(a.navigator.vibrate)
                    },
                    function(a) {
                        a =
                            a.document.createElement("canvas");
                        a.width = a.height = 1;
                        a = a.getContext("2d");
                        a.globalCompositeOperation = "multiply";
                        a.fillStyle = "rgb(0,255,255)";
                        a.fillRect(0, 0, 1, 1);
                        a.fill();
                        a.fillStyle = "rgb(255,255,0)";
                        a.fillRect(0, 0, 1, 1);
                        a.fill();
                        a = a.getImageData(0, 0, 1, 1).data;
                        return a[0] == a[2] && a[1] == a[3]
                    },
                    function(a) {
                        return S(a.document.createElement("div").matches)
                    },
                    function(a) {
                        a = a.document.createElement("input");
                        a.setAttribute("type", "range");
                        return "text" !== a.type
                    },
                    function(a) {
                        return a.CSS.supports("image-rendering",
                            "pixelated")
                    },
                    function(a) {
                        return a.CSS.supports("object-fit", "contain")
                    },
                    function() {
                        return fl(7)
                    },
                    function(a) {
                        return a.CSS.supports("object-fit", "inherit")
                    },
                    function(a) {
                        return a.CSS.supports("shape-image-threshold", "0.9")
                    },
                    function(a) {
                        return a.CSS.supports("word-break", "keep-all")
                    },
                    function() {
                        return eval("1 == [for (item of [1,2,3]) item][0]")
                    },
                    function(a) {
                        return S(a.CSS.supports)
                    },
                    function() {
                        return S(Intl.Collator)
                    },
                    function(a) {
                        return S(a.document.createElement("dialog").show)
                    },
                    function() {
                        return fl(8)
                    },
                    function(a) {
                        return S(a.document.createElement("div").animate([{
                            transform: "scale(1)",
                            Id: "ease-in"
                        }, {
                            transform: "scale(1.3)",
                            Id: "ease-in"
                        }], {
                            duration: 1300,
                            ll: 1
                        }).reverse)
                    },
                    function(a) {
                        return S(a.document.createElement("div").animate)
                    },
                    function(a) {
                        return S(a.document.documentElement.webkitRequestFullScreen)
                    },
                    function(a) {
                        return S(a.navigator.getBattery)
                    },
                    function(a) {
                        return S(a.navigator.permissions.query)
                    },
                    function() {
                        return !1
                    },
                    function() {
                        return fl(9)
                    },
                    function() {
                        return S(webkitRequestAnimationFrame)
                    },
                    function(a) {
                        return S(a.BroadcastChannel.call)
                    },
                    function(a) {
                        return S(a.FontFace)
                    },
                    function(a) {
                        return S(a.Gamepad)
                    },
                    function() {
                        return fl(10)
                    },
                    function(a) {
                        return S(a.MutationEvent)
                    },
                    function(a) {
                        return S(a.MutationObserver)
                    },
                    function(a) {
                        return S(a.crypto.getRandomValues)
                    },
                    function(a) {
                        return S(a.document.body.createShadowRoot)
                    },
                    function(a) {
                        return S(a.document.body.webkitCreateShadowRoot)
                    },
                    function(a) {
                        return S(a.fetch)
                    },
                    function() {
                        return fl(11)
                    },
                    function(a) {
                        return S(a.navigator.serviceWorker.register)
                    },
                    function(a) {
                        return S(a.navigator.webkitGetGamepads)
                    },
                    function(a) {
                        return S(a.speechSynthesis.speak)
                    },
                    function(a) {
                        return S(a.webkitRTCPeerConnection)
                    },
                    function(a) {
                        return a.CSS.supports("--fake-var", "0")
                    },
                    function() {
                        return fl(12)
                    },
                    function(a) {
                        return a.CSS.supports("cursor", "grab")
                    },
                    function(a) {
                        return a.CSS.supports("cursor", "zoom-in")
                    },
                    function(a) {
                        return a.CSS.supports("image-orientation", "270deg")
                    },
                    function() {
                        return fl(13)
                    },
                    function(a) {
                        return a.CSS.supports("position", "sticky")
                    },
                    function(a) {
                        return void 0 ===
                            a.document.createElement("style").scoped
                    },
                    function(a) {
                        return a.performance.getEntriesByType("resource") instanceof Array
                    },
                    function() {
                        return "undefined" == typeof InstallTrigger
                    },
                    function() {
                        return "object" == typeof(new Intl.Collator).resolvedOptions()
                    },
                    function(a) {
                        return "boolean" == typeof a.navigator.onLine
                    },
                    function() {
                        return fl(14)
                    },
                    function(a) {
                        return "undefined" == typeof a.navigator.nl
                    },
                    function(a) {
                        return "number" == typeof a.performance.now()
                    },
                    function() {
                        return 0 == (new Uint16Array(1))[0]
                    },
                    function(a) {
                        return -1 ==
                            a.ActiveXObject.toString().indexOf("native")
                    },
                    function(a) {
                        return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")
                    }
                ],
                hl = [
                    function(a) {
                        a = a.document.createElement("div");
                        var b = null,
                            c = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                        try {
                            a.style.behavior = "url(#default#clientcaps)"
                        } catch (e) {}
                        for (var d = 0; d < c.length; d++) {
                            try {
                                b = a.getComponentVersion(c[d], "componentid").replace(/,/g, ".")
                            } catch (e) {}
                            if (b) return b.split(".")[0]
                        }
                        return !1
                    },
                    function() {
                        return (new Date).getTimezoneOffset()
                    },
                    function(a) {
                        return (a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth) / (a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight)
                    },
                    function(a) {
                        return (a.outerWidth || a.document && a.document.body && a.document.body.offsetWidth) / (a.outerHeight || a.document && a.document.body && a.document.body.offsetHeight)
                    },
                    function(a) {
                        return a.screen.availWidth / a.screen.availHeight
                    },
                    function(a) {
                        return a.screen.width /
                            a.screen.height
                    }
                ],
                il = [
                    function(a) {
                        return a.navigator.userAgent
                    },
                    function(a) {
                        return a.navigator.platform
                    },
                    function(a) {
                        return a.navigator.vendor
                    }
                ],
                kl = function() {
                    try {
                        jl()
                    } catch (d) {}
                    var a = "a=1&b=" + bl + "&",
                        b = [],
                        c = 99;
                    A(gl, function(a, c) {
                        var d = !1;
                        try {
                            d = a(y)
                        } catch (g) {}
                        b[c / 32 >>> 0] |= d << c % 32
                    });
                    A(b, function(b, e) {
                        a += String.fromCharCode(c + e) + "=" + (b >>> 0).toString(16) + "&"
                    });
                    c = 105;
                    A(hl, function(b) {
                        var d = "false";
                        try {
                            d = b(y)
                        } catch (f) {}
                        a += String.fromCharCode(c++) + "=" + d + "&"
                    });
                    A(il, function(b) {
                        var d = "";
                        try {
                            var f = b(y);
                            b = [];
                            for (var g = 0, k = 0; k < f.length; k++) {
                                for (var l = f.charCodeAt(k); 255 < l;) b[g++] = l & 255, l >>= 8;
                                b[g++] = l
                            }
                            if (!Tg)
                                for (Tg = {}, Ug = {}, f = 0; 65 > f; f++) Tg[f] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f), Ug[f] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(f);
                            f = Ug;
                            l = [];
                            for (g = 0; g < b.length; g += 3) {
                                var n = b[g],
                                    u = g + 1 < b.length,
                                    z = u ? b[g + 1] : 0,
                                    N = g + 2 < b.length,
                                    Z = N ? b[g + 2] : 0,
                                    k = n >> 2,
                                    V = (n & 3) << 4 | z >> 4,
                                    ea = (z & 15) << 2 | Z >> 6,
                                    Zb = Z & 63;
                                N || (Zb = 64, u || (ea = 64));
                                l.push(f[k], f[V], f[ea], f[Zb])
                            }
                            d =
                                l.join("")
                        } catch (zc) {}
                        a += String.fromCharCode(c++) + "=" + d + "&"
                    });
                    return a.slice(0, -1)
                },
                jl = function() {
                    if (!cl) {
                        var a = function() {
                            dl = !0;
                            y.document.removeEventListener("webdriver-evaluate", a, !0)
                        };
                        y.document.addEventListener("webdriver-evaluate", a, !0);
                        var b = function() {
                            el = !0;
                            y.document.removeEventListener("webdriver-evaluate-response", b, !0)
                        };
                        y.document.addEventListener("webdriver-evaluate-response", b, !0);
                        cl = !0
                    }
                };
            var ll = function() {
                this.h = 64;
                this.g = Array(4);
                this.w = Array(this.h);
                this.o = this.l = 0;
                this.reset()
            };
            x(ll, Vg);
            ll.prototype.reset = function() {
                this.g[0] = 1732584193;
                this.g[1] = 4023233417;
                this.g[2] = 2562383102;
                this.g[3] = 271733878;
                this.o = this.l = 0
            };
            var ml = function(a, b, c) {
                    c || (c = 0);
                    var d = Array(16);
                    if (q(b))
                        for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
                    else
                        for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
                    b = a.g[0];
                    c = a.g[1];
                    var e = a.g[2],
                        f = a.g[3];
                    var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
                    b = c + (g << 7 & 4294967295 | g >>> 25);
                    g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
                    f = b + (g << 12 & 4294967295 | g >>> 20);
                    g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
                    e = f + (g << 17 & 4294967295 | g >>> 15);
                    g = c + (b ^ e &
                        (f ^ b)) + d[3] + 3250441966 & 4294967295;
                    c = e + (g << 22 & 4294967295 | g >>> 10);
                    g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
                    b = c + (g << 7 & 4294967295 | g >>> 25);
                    g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
                    f = b + (g << 12 & 4294967295 | g >>> 20);
                    g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
                    e = f + (g << 17 & 4294967295 | g >>> 15);
                    g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
                    c = e + (g << 22 & 4294967295 | g >>> 10);
                    g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
                    b = c + (g << 7 & 4294967295 | g >>> 25);
                    g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
                    f = b + (g << 12 & 4294967295 | g >>> 20);
                    g =
                        e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
                    e = f + (g << 17 & 4294967295 | g >>> 15);
                    g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
                    c = e + (g << 22 & 4294967295 | g >>> 10);
                    g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
                    b = c + (g << 7 & 4294967295 | g >>> 25);
                    g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
                    f = b + (g << 12 & 4294967295 | g >>> 20);
                    g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
                    e = f + (g << 17 & 4294967295 | g >>> 15);
                    g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
                    c = e + (g << 22 & 4294967295 | g >>> 10);
                    g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
                    b = c + (g << 5 & 4294967295 |
                        g >>> 27);
                    g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
                    f = b + (g << 9 & 4294967295 | g >>> 23);
                    g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
                    e = f + (g << 14 & 4294967295 | g >>> 18);
                    g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
                    c = e + (g << 20 & 4294967295 | g >>> 12);
                    g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
                    b = c + (g << 5 & 4294967295 | g >>> 27);
                    g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
                    f = b + (g << 9 & 4294967295 | g >>> 23);
                    g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
                    e = f + (g << 14 & 4294967295 | g >>> 18);
                    g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
                    c = e + (g << 20 & 4294967295 |
                        g >>> 12);
                    g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
                    b = c + (g << 5 & 4294967295 | g >>> 27);
                    g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
                    f = b + (g << 9 & 4294967295 | g >>> 23);
                    g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
                    e = f + (g << 14 & 4294967295 | g >>> 18);
                    g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
                    c = e + (g << 20 & 4294967295 | g >>> 12);
                    g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
                    b = c + (g << 5 & 4294967295 | g >>> 27);
                    g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
                    f = b + (g << 9 & 4294967295 | g >>> 23);
                    g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
                    e = f + (g << 14 & 4294967295 |
                        g >>> 18);
                    g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
                    c = e + (g << 20 & 4294967295 | g >>> 12);
                    g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
                    b = c + (g << 4 & 4294967295 | g >>> 28);
                    g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
                    f = b + (g << 11 & 4294967295 | g >>> 21);
                    g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
                    e = f + (g << 16 & 4294967295 | g >>> 16);
                    g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
                    c = e + (g << 23 & 4294967295 | g >>> 9);
                    g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
                    b = c + (g << 4 & 4294967295 | g >>> 28);
                    g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
                    f = b + (g << 11 & 4294967295 | g >>> 21);
                    g = e + (f ^
                        b ^ c) + d[7] + 4139469664 & 4294967295;
                    e = f + (g << 16 & 4294967295 | g >>> 16);
                    g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
                    c = e + (g << 23 & 4294967295 | g >>> 9);
                    g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
                    b = c + (g << 4 & 4294967295 | g >>> 28);
                    g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
                    f = b + (g << 11 & 4294967295 | g >>> 21);
                    g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
                    e = f + (g << 16 & 4294967295 | g >>> 16);
                    g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
                    c = e + (g << 23 & 4294967295 | g >>> 9);
                    g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
                    b = c + (g << 4 & 4294967295 | g >>> 28);
                    g = f + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
                    f = b + (g << 11 & 4294967295 | g >>> 21);
                    g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
                    e = f + (g << 16 & 4294967295 | g >>> 16);
                    g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
                    c = e + (g << 23 & 4294967295 | g >>> 9);
                    g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
                    b = c + (g << 6 & 4294967295 | g >>> 26);
                    g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
                    f = b + (g << 10 & 4294967295 | g >>> 22);
                    g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
                    e = f + (g << 15 & 4294967295 | g >>> 17);
                    g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
                    c = e + (g << 21 & 4294967295 | g >>> 11);
                    g = b + (e ^ (c | ~f)) + d[12] + 1700485571 & 4294967295;
                    b = c +
                        (g << 6 & 4294967295 | g >>> 26);
                    g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
                    f = b + (g << 10 & 4294967295 | g >>> 22);
                    g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
                    e = f + (g << 15 & 4294967295 | g >>> 17);
                    g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
                    c = e + (g << 21 & 4294967295 | g >>> 11);
                    g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
                    b = c + (g << 6 & 4294967295 | g >>> 26);
                    g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
                    f = b + (g << 10 & 4294967295 | g >>> 22);
                    g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
                    e = f + (g << 15 & 4294967295 | g >>> 17);
                    g = c + (f ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
                    c = e + (g << 21 & 4294967295 | g >>> 11);
                    g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
                    b = c + (g << 6 & 4294967295 | g >>> 26);
                    g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
                    f = b + (g << 10 & 4294967295 | g >>> 22);
                    g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
                    e = f + (g << 15 & 4294967295 | g >>> 17);
                    g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
                    a.g[0] = a.g[0] + b & 4294967295;
                    a.g[1] = a.g[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
                    a.g[2] = a.g[2] + e & 4294967295;
                    a.g[3] = a.g[3] + f & 4294967295
                },
                nl = function(a, b) {
                    if (!p(c)) var c = b.length;
                    for (var d = c - a.h, e = a.w, f = a.l, g = 0; g < c;) {
                        if (0 ==
                            f)
                            for (; g <= d;) ml(a, b, g), g += a.h;
                        if (q(b))
                            for (; g < c;) {
                                if (e[f++] = b.charCodeAt(g++), f == a.h) {
                                    ml(a, e);
                                    f = 0;
                                    break
                                }
                            } else
                                for (; g < c;)
                                    if (e[f++] = b[g++], f == a.h) {
                                        ml(a, e);
                                        f = 0;
                                        break
                                    }
                    }
                    a.l = f;
                    a.o += c
                };
            var ol = function() {
                Mk.call(this);
                this.B = void 0;
                this.G = null
            };
            x(ol, Mk);
            ha(ol);
            ol.prototype.Ob = function(a, b) {
                switch (R.getInstance().R) {
                    case "nis":
                        var c = pk(a);
                        c || (c = pl(this, a, "n", b.opt_nativeTime || -1), c.ka = R.getInstance().D);
                        b = c;
                        break;
                    case "gsv":
                        (c = pk(a)) || (c = pl(this, a, "m", b.opt_nativeTime || -1));
                        b = c;
                        break;
                    case "exc":
                        (b = pk(a)) || (b = pl(this, a, "h", -1));
                        break;
                    default:
                        b.opt_adElement ? b = Xk(this, a, b.opt_adElement) : (b = ql(this, a, b.opt_sdkID || "")) || (b = pk(a) || void 0)
                }
                b && b.K == ga && (b.K = w(this.rc, this));
                return b
            };
            ol.prototype.rc = function(a) {
                var b = R.getInstance();
                a.g = 0;
                a.J = 0;
                if ("as" == a.za)
                    if (b = "getVideoMetadata" + a.Ya, v(a.element[b])) try {
                        var c = a.element[b]()
                    } catch (e) {
                        a.g |= 4
                    } else a.g |= 2;
                    else if ("h" == a.za || "n" == a.za)
                    if (b = fa("exc" == b.R || "nis" == b.R ? "ima.bridge.getVideoMetadata" : "ima.common.getVideoMetadata"), v(b)) try {
                        c = b(a.da)
                    } catch (e) {
                        a.g |= 4
                    } else a.g |= 2;
                    else if ("b" == a.za)
                    if (b = fa("yt.ads.bulleit.getVideoMetadata"), v(b)) try {
                        c = b(a.da)
                    } catch (e) {
                        a.g |= 4
                    } else a.g |= 2;
                    else a.g |= 1;
                a.g || (p(c) ? null === c ? a.g |= 16 : xb(c) ? a.g |=
                    32 : null != c.errorCode && (a.J = c.errorCode, a.g |= 64) : a.g |= 8);
                null != c || (c = {});
                b = c;
                a.F = 0;
                for (var d in bh) null == b[d] && (a.F |= bh[d]);
                al(b, "currentTime");
                al(b, "duration");
                Vh(c.volume) && Vh(this.B) && (c.volume *= this.B);
                return c
            };
            var pl = function(a, b, c, d) {
                    d = Nk(null, d, !0);
                    d.za = c;
                    d.Zb = w(a.o, a);
                    uk([d]);
                    d.da = b;
                    return d
                },
                ql = function(a, b, c) {
                    var d = Xa(mk, w(function(a) {
                        return a.element ? rl(a.element, c) == b && a.Ya == c : !1
                    }, a));
                    null !== d && d.da != b && (Tk(1, d.da), d = void 0);
                    if (d) return d;
                    d = sl(c);
                    if (d = Xa(d, w(function(a) {
                            return rl(a, c) == b
                        }, a))) return d = Wk(a, d), d.za = "as", d.da = b, d.Ya = c, d
                },
                sl = function(a) {
                    var b = y.document,
                        c = fb(Ta(["embed", "object"], function(a) {
                            return cb(b.getElementsByTagName(a))
                        })),
                        d = "metricID" + a;
                    return c = Sa(c, function(a) {
                        if (!a || !na(a) ||
                            1 != a.nodeType || !v(a.getBoundingClientRect)) return !1;
                        var b = a.getBoundingClientRect();
                        return 0 != b.width && 0 != b.height && a[d] && v(a[d]) ? !0 : !1
                    })
                },
                rl = function(a, b) {
                    b = "metricID" + b;
                    if (!a || !a[b] || !v(a[b])) return null;
                    try {
                        var c = a[b]()
                    } catch (d) {
                        return null
                    }
                    return c.queryID
                },
                tl = function(a, b) {
                    var c = R.getInstance();
                    switch (a.za) {
                        case "b":
                            var d = fa("yt.ads.bulleit.triggerExternalActivityEvent");
                            break;
                        case "h":
                            d = fa("exc" == c.R ? "ima.bridge.triggerExternalActivityEvent" : "ima.common.triggerExternalActivityEvent");
                            break;
                        case "m":
                            d = fa("ima.common.triggerExternalActivityEvent");
                            break;
                        case "n":
                            d = fa("ima.bridge.triggerExternalActivityEvent");
                            break;
                        case "as":
                            var e = "triggerExternalActivityEvent" + a.Ya;
                            a.element && v(a.element[e]) && (d = function(b, c, d) {
                                a.element[e](d)
                            });
                            break;
                        default:
                            return a.Ka |= 4, !1
                    }
                    if (v(d)) {
                        c = Yk(b, a);
                        try {
                            return d(a.da, c, b), !0
                        } catch (f) {
                            a.Ka |= 2
                        }
                    } else a.Ka |= 1;
                    return !1
                };
            ol.prototype.ad = function(a) {
                tl(a, "viewable_impression") && (a.ld = !0)
            };
            ol.prototype.uc = function(a) {
                vj(a, a.va().V[0]) && !a.ia && tl(a, "fully_viewable_audible_half_duration_impression") && (a.ia = !0)
            };
            ol.prototype.Dc = function(a) {
                a.kd || a.Wa || this.w || !tl(a, "measurable_impression") || (a.kd = !0)
            };
            ol.prototype.$c = function(a) {
                !a.g && a.Wa && tl(a, "overlay_unmeasurable_impression") && (a.g = !0)
            };
            var ul = function(a) {
                    return lb(zb(a || {}), function(a, c) {
                        return "qmtos" == c || "qnc" == c || "qmv" == c || "qnv" == c ? !1 : !0
                    })
                },
                wl = function(a, b, c) {
                    var d = {};
                    d.viewability = c ? Rk(b, Hk) : Rk(ul(b), Hk);
                    c = bl = (new Date).getTime();
                    var e = fl(5);
                    c = (dl ? !e : e) ? c | 2 : c & -3;
                    e = fl(2);
                    c = (el ? !e : e) ? c | 8 : c & -9;
                    c = {
                        s1: (c >>> 0).toString(16)
                    };
                    a.G || (a.G = kl());
                    d.moatInit = a.G;
                    d.moatViewability = Rk(b, Ik, c, "h", vl("kArwaWEsTs"));
                    d.integralAdsViewability = Rk(b, Kk, {}, "h", vl("b96YPMzfnx"));
                    d.doubleVerifyViewability = Rk(b, Lk, {}, "h", vl("yb8Wev6QDg"));
                    d.googleViewability =
                        Rk(b, Jk);
                    return d
                },
                vl = function(a) {
                    return function(b) {
                        var c = new ll;
                        nl(c, b + a);
                        var d = Array((56 > c.l ? c.h : 2 * c.h) - c.l);
                        d[0] = 128;
                        for (b = 1; b < d.length - 8; ++b) d[b] = 0;
                        var e = 8 * c.o;
                        for (b = d.length - 8; b < d.length; ++b) d[b] = e & 255, e /= 256;
                        nl(c, d);
                        d = Array(16);
                        for (b = e = 0; 4 > b; ++b)
                            for (var f = 0; 32 > f; f += 8) d[e++] = c.g[b] >>> f & 255;
                        return Mg(d).slice(-8)
                    }
                },
                xl = function(a, b, c) {
                    var d = ol.getInstance(),
                        e = {};
                    Bb(e, {
                        opt_adElement: void 0,
                        opt_fullscreen: void 0
                    }, c || {});
                    if (e.opt_bounds) a = wl(d, $k("ol", a), !1);
                    else {
                        b: {
                            if (Zk(a)) {
                                if (Bk) {
                                    e = $k("ue", a);
                                    break b
                                }
                                b = d.Ob(b, e);
                                if (!b) {
                                    e = $k("nf", a);
                                    break b
                                }
                                if (!d.F) {
                                    d.F = !0;
                                    try {
                                        var f = Jh(),
                                            g = R.getInstance();
                                        Ih = f;
                                        zk = Ae(y).lc;
                                        bk(!1);
                                        var k = R.getInstance();
                                        y.screen && (k.A = new G(y.screen.width, y.screen.height));
                                        if ("nis" != g.R && "gsv" != g.R) {
                                            var l = y.document;
                                            l.body && l.body.getBoundingClientRect ? (w(d.C, d), Ni.getInstance(), !g.h && th() && tk() ? ak() : g.h && "exc" != g.R ? g.l ? Pk(d) : Ok(d) : ak()) : Bk = !0
                                        }
                                    } catch (u) {
                                        throw mk = [], qk = [], u;
                                    }
                                }
                                "i" == Ak && (b.Wa = !0, d.D(b));
                                f = e.opt_fullscreen;
                                p(f) && (b.xa = !!f);
                                yk() ? g = !1 : (f = R.getInstance().R, g = y &&
                                    y.w || "nis" === f || "gsv" === f ? !1 : 0 === gh(ua));
                                g && (Qk(b, "pvu"), d.C("pvu"));
                                f = a.toLowerCase();
                                !g && Ya(ch, f) && (Vk(d, b, e), d.Dc(b));
                                (g = b.A[f]) && jj(b.h, g);
                                var n;
                                1 == b.wa() ? n = d.g[f] : 2 == b.wa() && (n = d.l[f]);
                                if (n && (e = n.call(d, b, e), p(e))) {
                                    n = $k(void 0, f);
                                    Bb(n, e);
                                    e = n;
                                    break b
                                }
                            }
                            e = void 0
                        }
                        a = wl(d, e, "firstquartile" == a || "midpoint" == a || "thirdquartile" == a || "complete" == a || "skip" == a || "abandon" == a ? !0 : !1)
                    }
                    return a
                };
            ol.prototype.o = function(a) {
                this.w ? yl(this, a) : ol.P.o.call(this, a)
            };
            ol.prototype.D = function(a) {
                this.w && 1 == a.wa() && yl(this, a)
            };
            var yl = function(a, b) {
                    var c = fa("ima.common.triggerViewabilityMeasurementUpdate");
                    if (v(c)) {
                        var d = {},
                            e = R.getInstance();
                        d.insideIframe = e.h;
                        d.unmeasurable = b.Wa;
                        d.position = b.position;
                        d.coverage = b.ba.g;
                        d.documentSize = e.o;
                        d.viewportSize = e.g;
                        d.nativeVolume = a.B;
                        c(b.da, d)
                    }
                },
                bm = function(a) {
                    ol.getInstance();
                    var b = nj.getInstance().g;
                    Ya(b, a) || b.push(a)
                };
            t("Goog_AdSense_Lidar_sendVastEvent", ye(193, xl, void 0, function() {
                return {
                    v: "589",
                    "if": R.getInstance().h ? "1" : "0",
                    nas: String(mk.length)
                }
            }), void 0);
            t("Goog_AdSense_Lidar_getViewability", ye(194, function(a, b) {
                var c = ol.getInstance();
                var d = {};
                Bb(d, {
                    opt_adElement: void 0,
                    opt_fullscreen: void 0
                }, b || {});
                d.opt_bounds ? c = wl(c, $k("ol"), !1) : (Bk ? a = $k("ue") : (a = c.Ob(a, d)) ? (b = $k(), Bb(b, yj(a, !0, !1)), a = b) : a = $k("nf"), c = wl(c, a, !0));
                return c
            }), void 0);
            t("Goog_AdSense_Lidar_getUrlSignalsArray", ye(195, function() {
                return Nf()
            }), void 0);
            t("Goog_AdSense_Lidar_getUrlSignalsList", ye(196, function() {
                return ff(Nf())
            }), void 0);
            t("Goog_AdSense_Lidar_addExperimentId", pe(249, bm, void 0, void 0), void 0);
            var cm = {
                ih: "application/dash+xml",
                Oi: "video/mp4",
                Qi: "video/mpeg",
                Ci: "application/x-mpegURL",
                kj: "video/ogg",
                Bk: "video/3gpp",
                hl: "video/webm",
                Ni: "audio/mpeg",
                Pi: "audio/mp4"
            };
            var dm = function() {};
            dm.prototype.allowCustom = !0;
            var em = {
                    ei: "Image",
                    Mh: "Flash",
                    od: "All"
                },
                fm = {
                    Zh: "Html",
                    ci: "IFrame",
                    uk: "Static",
                    od: "All"
                },
                gm = {
                    di: "IgnoreSize",
                    hk: "SelectExactMatch",
                    ik: "SelectNearMatch"
                },
                hm = {
                    oh: "DisallowResize",
                    Yj: "ResizeSmaller"
                };
            var im = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/sul www.google.com/pagead/xsul www.youtube.com/pagead/sul www.youtube.com/pagead/psul www.youtube.com/pagead/slav".split(" "),
                jm = /\bocr\b/,
                km = 0,
                lm = {},
                mm = function(a) {
                    return wa(Ja(a)) ? !1 : 0 <= a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&") ||
                        (new tf(a)).w.match(jm) ? !0 : null != Xa(im, function(b) {
                            return null != a.match(b)
                        })
                },
                qm = function(a, b) {
                    if (a && (a = nm(a), !wa(a))) {
                        var c = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
                        b ? om(function(b) {
                            pm(b ? c : 'javascript:"<body><object data=\\""+' + a + '+"\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')
                        }) : pm(c)
                    }
                },
                pm = function(a) {
                    var b = Yc("IFRAME", {
                        src: a,
                        style: "display:none"
                    });
                    a = Rc(b).body;
                    var c = Lg(function() {
                        Eg(d);
                        ad(b)
                    }, 15E3);
                    var d = Cg(b, ["load", "error"], function() {
                        Lg(function() {
                            m.clearTimeout(c);
                            ad(b)
                        }, 5E3)
                    });
                    a.appendChild(b)
                },
                om = function(a) {
                    var b = lm.imageLoadingEnabled;
                    if (null != b) a(b);
                    else {
                        var c = !1;
                        rm(function(b, e) {
                            delete lm[e];
                            c || (c = !0, null != lm.imageLoadingEnabled || (lm.imageLoadingEnabled = b), a(b))
                        })
                    }
                },
                rm = function(a) {
                    var b = new Image,
                        c = "" + km++;
                    lm[c] = b;
                    b.onload = function() {
                        clearTimeout(d);
                        a(!0, c)
                    };
                    var d = setTimeout(function() {
                        a(!1, c)
                    }, 300);
                    b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                },
                sm = function(a) {
                    if (a) {
                        var b = document.createElement("OBJECT");
                        b.data =
                            a;
                        b.width = "1";
                        b.height = "1";
                        b.style.visibility = "hidden";
                        var c = "" + km++;
                        lm[c] = b;
                        b.onload = b.onerror = function() {
                            delete lm[c]
                        };
                        document.body.appendChild(b)
                    }
                },
                tm = function(a) {
                    if (a) {
                        var b = new Image,
                            c = "" + km++;
                        lm[c] = b;
                        b.onload = b.onerror = function() {
                            delete lm[c]
                        };
                        b.src = a
                    }
                },
                um = function(a, b, c) {
                    if (a) {
                        if (c) try {
                            if (m.navigator && m.navigator.sendBeacon && m.navigator.sendBeacon(a, "")) return
                        } catch (d) {}
                        b ? om(function(b) {
                            b ? tm(a) : sm(a)
                        }) : tm(a)
                    }
                },
                nm = function(a) {
                    a = xc(Bc(a));
                    if ("about:invalid#zClosurez" === a) return "";
                    a = Ec(Gc(a));
                    return encodeURIComponent(String(ff(a)))
                };
            var vm = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g,
                wm = function(a, b) {
                    return a.replace(vm, function(a, d) {
                        try {
                            var c = yb(b, d);
                            if (null == c) return a;
                            c = c.toString();
                            if ("" == c || !wa(Ja(c))) return encodeURIComponent(c).replace(/%2C/g, ",")
                        } catch (f) {}
                        return a
                    })
                };
            var xm = function(a, b, c, d) {
                this.l = a;
                this.g = Math.min(Math.max(c || 0, 0), 1);
                this.h = null != d ? d : !0
            };
            xm.prototype.getId = function() {
                return this.l
            };
            var ym = function(a) {
                this.l = a;
                this.h = new pf;
                this.g = null
            };
            ym.prototype.getId = function() {
                return this.l
            };
            var zm = function(a) {
                var b = Math.random(),
                    c = 0,
                    d = a.h.ca();
                A(d, function(a) {
                    c += a.g
                }, a);
                var e = 1 < c ? c : 1;
                a.g = null;
                for (var f = 0, g = 0; g < d.length; ++g)
                    if (f += d[g].g, f / e >= b) {
                        a.g = d[g];
                        break
                    }
            };
            var Cm = function() {
                    this.h = null != m.G_testRunner;
                    this.g = new pf;
                    if (!M.ma()) {
                        T(this, "GvnExternalLayer", 31061774, .01);
                        T(this, "GvnExternalLayer", 31061775, .01);
                        T(this, "GvnExternalLayer", 41351088, .01);
                        T(this, "GvnExternalLayer", 41351089, .01);
                        T(this, "GvnExternalLayer", 420706008, .05);
                        T(this, "GvnExternalLayer", 420706009, .05);
                        T(this, "GvnExternalLayer", 420706024, .01);
                        T(this, "GvnExternalLayer", 420706025, .01);
                        T(this, "GvnExternalLayer", 420706029, .01);
                        T(this, "GvnExternalLayer", 634360101, 0);
                        T(this, "GvnExternalLayer",
                            634360102, 0);
                        T(this, "GvnExternalLayer", 21592082, .01);
                        T(this, "GvnExternalLayer", 420706068, .01);
                        T(this, "GvnExternalLayer", 420706069, .01);
                        T(this, "GvnExternalLayer", 324123020, .05);
                        T(this, "GvnExternalLayer", 324123021, .05);
                        T(this, "GvnExternalLayer", 420706081, .01);
                        T(this, "GvnExternalLayer", 420706082, .01);
                        var a = M.la();
                        th(a) && (rd(y.top) ? (T(this, "ActiveViewExternalLayer", 509445010, .01), T(this, "ActiveViewExternalLayer", 509445011, .01)) : (T(this, "ActiveViewExternalLayer", 509445012, .01), T(this, "ActiveViewExternalLayer",
                            509445013, .01)));
                        T(this, "ActiveViewExternalLayer", 495644001, .01);
                        T(this, "ActiveViewExternalLayer", 495644002, .01);
                        T(this, "GvnExternalLayer", 634360200, .01);
                        T(this, "GvnExternalLayer", 634360201, .01)
                    }
                    Am(this);
                    a = Re(M);
                    a = Ue(a);
                    null != a && (this.h = !1, Bm(this, a.map(String)))
                },
                Dm = ["ActiveViewExternalLayer"],
                Em = null,
                Fm = function() {
                    Em || (Em = new Cm);
                    return Em
                },
                T = function(a, b, c, d) {
                    wa(Ja(b)) || isNaN(c) || 0 >= c || (c = new xm(c, 0, d), Gm(a, b).h.set(c.getId(), c))
                },
                Am = function(a) {
                    Te() || M.Vb() || A(a.g.ca(), function(a) {
                        zm(a)
                    }, a)
                },
                Bm = function(a, b) {
                    A(b, function(a) {
                        var b = Number(a);
                        a = "FORCED_PUB_EXP_LAYER_" + a;
                        isNaN(b) || 0 >= b || wa(Ja(a)) || (Gm(this, a).g = new xm(b, 0, 0, !0))
                    }, a)
                },
                Hm = function() {
                    var a = Fm(),
                        b = {};
                    A(a.g.ca(), function(a) {
                        var c = a.g;
                        if (c) {
                            var e = {};
                            e.experimentId = c.getId();
                            e.shouldReport = c.h;
                            b[a.getId()] = e
                        } else b[a.getId()] = {}
                    });
                    return b
                },
                Im = function(a, b) {
                    return a.h ? !1 : Ua(a.g.ca(), function(a) {
                        return !!a.g && a.g.getId() == b
                    })
                },
                Jm = function() {
                    var a = Fm();
                    if (a.h) return "";
                    var b = [];
                    A(a.g.ca(), function(a) {
                        (a = a.g) && a.h && b.push(a.getId())
                    });
                    return b.sort().join(",")
                },
                Gm = function(a, b) {
                    var c = a.g.get(b);
                    null == c && (c = new ym(b), a.g.set(b, c));
                    return c
                },
                Km = function() {
                    var a = [],
                        b = Fm();
                    A(Dm, function(c) {
                        (c = (c = Gm(b, c)) ? c.g : null) && a.push(c.getId())
                    });
                    return a
                };
            var Lm = ["*.youtu.be", "*.youtube.com"],
                Mm = "ad.doubleclick.net bid.g.doubleclick.net corp.google.com ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
                Nm = ["c.googlesyndication.com"];

            function Om(a, b) {
                return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
            }

            function Pm(a) {
                try {
                    var b = (new tf(a)).g,
                        b = b.replace(/^www./i, "");
                    return Lm.some(function(a) {
                        return Qm(a, b)
                    })
                } catch (c) {
                    return !1
                }
            }

            function Qm(a, b) {
                if (wa(Ja(b))) return !1;
                a = a.toLowerCase();
                b = b.toLowerCase();
                return "*." == a.substr(0, 2) ? (a = a.substr(2), a.length > b.length ? !1 : b.substr(-a.length) == a && (b.length == a.length || "." == b.charAt(b.length - a.length - 1))) : a == b
            };
            var Rm = ["*.googlesyndication.com", "gcdn.2mdn.net"],
                Tm = function(a) {
                    try {
                        var b = (new tf(a)).g,
                            b = b.replace(/^www./i, "");
                        return Ua(Rm, function(a) {
                            return Sm(a, b)
                        })
                    } catch (c) {
                        return !1
                    }
                },
                Sm = function(a, b) {
                    if (wa(Ja(b))) return !1;
                    a = a.toLowerCase();
                    b = b.toLowerCase();
                    return "*." == a.substr(0, 2) ? (a = a.substr(2), a.length > b.length ? !1 : b.substr(-a.length) == a && (b.length == a.length || "." == b.charAt(b.length - a.length - 1))) : a == b
                };
            var Um = function(a) {
                try {
                    a: {
                        var b = a,
                            c = void 0,
                            d = b.length - 11 - 2;
                        if (!(-1 == b.indexOf("URL_SIGNALS") || 2048 <= d || !c && !window.Goog_AdSense_Lidar_getUrlSignalsArray))
                            for (var c = c || window.Goog_AdSense_Lidar_getUrlSignalsArray(), d = {}, e = 0; e < c.length; ++e) {
                                d.URL_SIGNALS = c[e];
                                var f = wm(b, d);
                                if (2048 > f.length) {
                                    a = f;
                                    break a
                                }
                            }
                        a = b
                    }
                }
                catch (u) {}
                try {
                    var f = a,
                        g = window.location.protocol,
                        g = void 0 === g ? window.location.protocol : g,
                        b = !1;
                    Om(f, Nm) ? b = !1 : null != f && Pm(f) ? b = !0 : "https:" == g && Om(f, Mm) && (b = !0);
                    if (b) {
                        var k = new tf(f);
                        "https" == k.l ?
                            a = f : (uf(k, "https"), a = k.toString())
                    } else a = f;
                    var l = Fm(),
                        n = !M.la() && (!M.ma() || Im(l, 41351089)),
                        g = !1;
                    M.la() || M.ma() || !Im(Fm(), 634360102) || (g = !0);
                    (k = a) && (mm(k) ? qm(k, n) : um(k, n, g))
                } catch (u) {}
            };
            var Vm = function(a, b) {
                    this.message = a;
                    this.g = b
                },
                Wm = new Vm("Invalid usage of the API. Cause: {0}", 900),
                Xm = new Vm("Failed to initialize ad playback element before starting ad playback.", 400),
                Ym = new Vm("The provided {0} information: {1} is invalid.", 1101),
                Zm = function(a, b, c) {
                    var d = b || null;
                    if (!(d instanceof Le)) {
                        var e = a.g,
                            f = a.message,
                            g = db(arguments, 2);
                        if (0 < g.length)
                            for (var k = 0; k < g.length; k++) f = f.replace(new RegExp("\\{" + k + "\\}", "ig"), g[k]);
                        e = new Le("adPlayError", f, e);
                        e.g = d;
                        d = e
                    }
                    return d
                };
            var an = function(a, b) {
                    if (null == a || 0 >= a.width || 0 >= a.height) throw Zm(Ym, null, "ad slot size", a.toString());
                    this.h = a;
                    this.g = null != b ? b : new dm;
                    this.w = $m(fm, this.g.resourceType) ? this.g.resourceType : "All";
                    this.o = $m(em, this.g.creativeType) ? this.g.creativeType : "All";
                    this.A = $m(gm, this.g.sizeCriteria) ? this.g.sizeCriteria : "SelectExactMatch";
                    this.G = $m(hm, this.g.g) ? this.g.g : "DisallowResize";
                    this.l = null != this.g.adSlotIds ? this.g.adSlotIds : [];
                    this.C = r(this.g.nearMatchPercent) && 0 < this.g.nearMatchPercent && 100 >= this.g.nearMatchPercent ?
                        this.g.nearMatchPercent : 90
                },
                dn = function(a, b) {
                    var c = [];
                    A(b, function(a) {
                        if (this.g.allowCustom || a.F) !wa(a.h) && (isNaN(a.C) || isNaN(a.w) || a.w == a.C) && bn(this, a) ? c.push(a) : (a = cn(this, a), null != a && !wa(a.h) && c.push(a))
                    }, a);
                    return c
                },
                bn = function(a, b) {
                    var c;
                    if (c = "Flash" != b.g || nh) {
                        if (c = "All" == a.w || a.w == b.D) c = b.g, c = null != c ? "All" == a.o || a.o == c : !0;
                        c && (c = b.H, c = 0 == a.l.length ? !0 : null != c ? 0 <= Ra(a.l, c) : !1)
                    }
                    if (c)
                        if (b = b.l, (c = "IgnoreSize" == a.A) || (c = a.h, c = c == b ? !0 : c && b ? c.width == b.width && c.height == b.height : !1), c) a = !0;
                        else {
                            if (c =
                                "SelectNearMatch" == a.A) "ResizeSmaller" != a.G || b.width <= a.h.width && b.height <= a.h.height || (c = a.h, c = Math.min(c.width / b.width, c.height / b.height), b = new G(c * b.width, c * b.height)), c = b.width, b = b.height, c = c > a.h.width || b > a.h.height || c < a.C / 100 * a.h.width || b < a.C / 100 * a.h.height ? !1 : !0;
                            a = c
                        }
                    else a = !1;
                    return a
                },
                cn = function(a, b) {
                    b = b.o;
                    return null != b ? Xa(b, function(a) {
                        return bn(this, a)
                    }, a) : null
                },
                $m = function(a, b) {
                    var c;
                    if (c = null != b) a: {
                        for (var d in a)
                            if (a[d] == b) {
                                c = !0;
                                break a
                            }
                        c = !1
                    }
                    return c
                };
            var en = function(a) {
                var b = {};
                A(a.split(","), function(a) {
                    var c = a.split("=");
                    2 == c.length && (a = xa(c[0]), c = xa(c[1]), 0 < a.length && (b[a] = c))
                });
                return b
            };
            var fn = function() {
                this.C = 1;
                this.l = -1;
                this.g = 1;
                this.w = this.o = 0;
                this.h = !1
            };
            h = fn.prototype;
            h.Ae = function() {
                return this.C
            };
            h.xe = function() {
                return this.l
            };
            h.ve = function() {
                return this.g
            };
            h.ye = function() {
                return this.o
            };
            h.ze = function() {
                return this.w
            };
            h.we = function() {
                return this.h
            };
            var gn = function(a) {
                this.h = a.content;
                this.g = a.contentType;
                this.F = a.isSynthetic;
                this.l = a.size;
                this.w = a.masterSequenceNumber;
                this.D = a.resourceType;
                this.C = a.sequenceNumber;
                this.H = a.adSlotId;
                this.o = [];
                a = a.backupCompanions;
                null != a && (this.o = Ta(a, function(a) {
                    return new gn(a)
                }))
            };
            gn.prototype.getContent = function() {
                return this.h
            };
            gn.prototype.A = function() {
                return this.g
            };
            gn.prototype.B = function() {
                return this.l.width
            };
            gn.prototype.G = function() {
                return this.l.height
            };
            var U = function(a) {
                this.g = a
            };
            U.prototype.h = function() {
                return this.g.adId
            };
            U.prototype.l = function() {
                return this.g.creativeAdId
            };
            U.prototype.o = function() {
                return this.g.creativeId
            };
            var hn = function(a) {
                return a.g.adQueryId
            };
            h = U.prototype;
            h.Ce = function() {
                return this.g.adSystem
            };
            h.De = function() {
                return this.g.advertiserName
            };
            h.Ee = function() {
                return this.g.apiFramework
            };
            h.Se = function() {
                return this.g.adWrapperIds
            };
            h.Ue = function() {
                return this.g.adWrapperCreativeIds
            };
            h.Te = function() {
                return this.g.adWrapperSystems
            };
            h.Ve = function() {
                return this.g.linear
            };
            h.We = function() {
                return this.g.skippable
            };
            h.Ge = function() {
                return this.g.contentType
            };
            h.Ld = function() {
                return this.g.description
            };
            h.Nd = function() {
                return this.g.title
            };
            h.Qb = function() {
                return this.g.duration
            };
            h.Qe = function() {
                return this.g.vastMediaWidth
            };
            h.Pe = function() {
                return this.g.vastMediaHeight
            };
            h.Re = function() {
                return this.g.width
            };
            h.Ie = function() {
                return this.g.height
            };
            h.Me = function() {
                return this.g.uiElements
            };
            h.Je = function() {
                return this.g.minSuggestedDuration
            };
            h.Be = function() {
                var a = this.g.adPodInfo,
                    b = new fn;
                b.o = a.podIndex;
                b.w = a.timeOffset;
                b.C = a.totalAds;
                b.g = a.adPosition;
                b.h = a.isBumper;
                b.l = a.maxDuration;
                return b
            };
            h.Fe = function(a, b, c) {
                var d = Ta(this.g.companions, function(a) {
                    return new gn(a)
                });
                return dn(new an(new G(a, b), c), d)
            };
            h.Le = function() {
                return en(Ja(this.g.traffickingParameters))
            };
            h.Fc = function() {
                return this.g.traffickingParameters
            };
            h.Ec = function() {
                return this.g.mediaUrl
            };
            h.Ke = function() {
                return this.g.surveyUrl
            };
            h.He = function() {
                return this.g.dealId
            };
            h.Oe = function() {
                return this.g.universalAdIdValue
            };
            h.Ne = function() {
                return this.g.universalAdIdRegistry
            };
            var W = function(a) {
                Me.call(this);
                this.w = a;
                this.l = {}
            };
            x(W, Me);
            var jn = [];
            W.prototype.h = function(a, b, c, d) {
                return kn(this, a, b, c, d)
            };
            var kn = function(a, b, c, d, e, f) {
                    ka(c) || (c && (jn[0] = c.toString()), c = jn);
                    for (var g = 0; g < c.length; g++) {
                        var k = vg(b, c[g], d || a.handleEvent, e || !1, f || a.w || a);
                        if (!k) break;
                        a.l[k.key] = k
                    }
                    return a
                },
                ln = function(a, b, c, d, e, f) {
                    if (ka(c))
                        for (var g = 0; g < c.length; g++) ln(a, b, c[g], d, e, f);
                    else(b = Cg(b, c, d || a.handleEvent, e, f || a.w || a)) && (a.l[b.key] = b)
                };
            W.prototype.C = function(a, b, c, d, e) {
                if (ka(b))
                    for (var f = 0; f < b.length; f++) this.C(a, b[f], c, d, e);
                else c = c || this.handleEvent, e = e || this.w || this, c = wg(c), d = !!d, b = jg(a) ? rg(a.G, String(b), c, d, e) : a ? (a = yg(a)) ? rg(a, b, c, d, e) : null : null, b && (Eg(b), delete this.l[b.key]);
                return this
            };
            var mn = function(a) {
                kb(a.l, function(a, c) {
                    this.l.hasOwnProperty(c) && Eg(a)
                }, a);
                a.l = {}
            };
            W.prototype.L = function() {
                W.P.L.call(this);
                mn(this)
            };
            W.prototype.handleEvent = function() {
                throw Error("EventHandler.handleEvent not implemented");
            };
            var nn = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
            var on = {},
                pn = "",
                qn = /OS (\S+) like/,
                rn = /Android ([\d\.]+)/,
                tn = function() {
                    return !sn() && (Oj() || Nj())
                },
                un = function() {
                    return Tb && !Ub || Ha(B, "iPod")
                },
                vn = function() {
                    return un() || Ub
                },
                xn = function(a) {
                    return vn() && wn(qn, a)
                },
                yn = function(a) {
                    return Sb && wn(rn, a)
                },
                wn = function(a, b) {
                    null == on[b] && (wa(pn) && (a = a.exec(B)) && (pn = a[1]), (a = pn) ? (a = a.replace(/_/g, "."), on[b] = 0 <= Ma(a, b)) : on[b] = !1);
                    return on[b]
                },
                sn = function() {
                    return M.la() || !1
                },
                zn = function() {
                    var a = B;
                    return a ? Ha(a, "Nintendo WiiU") : !1
                },
                An = function() {
                    return Qg || sn() &&
                        Sb && !yn(4.4)
                },
                Bn = function(a) {
                    return sn() || M.Wb() && tn() || vn() && !((Oj() || Nj()) && Db() && (Ub || xn(10) && M.h) && a) || Sb && !yn(4) || yk() ? !0 : !1
                },
                Cn = function() {
                    return !sn() && !M.Za() && tn() || sn() && Sb && !yn(4.2) || yk() ? !1 : !0
                };
            var Dn = function() {
                    this.l = -1;
                    this.g = null;
                    this.o = "";
                    this.h = null;
                    this.w = 0
                },
                En = new Dn;
            Dn.prototype.clear = function() {
                this.g = null;
                this.o = "";
                this.h = null
            };
            var Fn = function() {
                var a = "h." + En.o;
                null != En.h ? (a += "/n." + En.h, null != En.g && (a += "/" + En.g)) : M.la() && (a += "/o.0.0.0");
                return a
            };
            var Gn = function() {
                this.h = .01 > Math.random();
                this.g = Math.floor(4503599627370496 * Math.random())
            };
            ha(Gn);
            var Jn = function(a, b, c, d) {
                    if (a.h || d) {
                        c = c || {};
                        c.lid = b;
                        c.sdkv = Fn();
                        b = Jm();
                        wa(Ja(b)) || (c.e = b);
                        c = Hn(a, c);
                        var e = new tf("http://pagead2.googlesyndication.com/pagead/gen_204");
                        kb(c, function(a, b) {
                            e.h.set(b, null != a ? "boolean" == typeof a ? a ? "t" : "f" : "" + a : "")
                        }, a);
                        a = In();
                        uf(e, a.l);
                        M.Vb() || Um(e.toString())
                    }
                },
                Hn = function(a, b) {
                    b.id = "ima_html5";
                    var c = In();
                    b.c = a.g;
                    b.domain = c.g;
                    return b
                },
                In = function() {
                    var a = H(),
                        b = document;
                    return new tf(a.parent == a ? a.location.href : b.referrer)
                };
            var Kn = function() {
                P.call(this);
                this.g = null;
                this.H = new W(this);
                Ne(this, sa(J, this.H));
                this.l = new pf;
                this.A = new pf;
                this.D = this.B = !1;
                this.o = null;
                this.w = !1;
                this.F = null
            };
            x(Kn, P);
            var Ln = null,
                Mn = function() {
                    null != Ln || (Ln = new Kn);
                    return Ln
                };
            Kn.prototype.L = function() {
                this.H.C(this.g, "activityMonitor", this.I);
                this.w = !1;
                this.l.clear();
                Kn.P.L.call(this)
            };
            var Pn = function(a, b) {
                    a.w || (a.g = b || null, a.g && (a.H.h(a.g, "activityMonitor", a.I), Nn(a)), On(), M.ma() || M.D || (a.B = !0, ol.getInstance().w = !0), a.F = (v(null), null), M.la() && (R.getInstance().R = "gsv", R.getInstance().C = 79463068), a.w = !0, a = Km(), A(a, function(a) {
                        bm(a)
                    }))
                },
                Rn = function(a) {
                    if (null == a) return !1;
                    if (un() && null != a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
                    var b = window.screen.availWidth || window.screen.width,
                        c = window.screen.availHeight || window.screen.height;
                    a = Qn(a);
                    return 0 >= b - a.width && 42 >=
                        c - a.height
                },
                Qn = function(a) {
                    return v(a.getBoundingClientRect) && bd(Rc(a), a) ? a.getBoundingClientRect() : {
                        left: a.offsetLeft,
                        top: a.offsetTop,
                        width: a.offsetWidth,
                        height: a.offsetHeight
                    }
                },
                Sn = function(a, b, c, d, e) {
                    if (a.w) {
                        if (a.F) return a.F(b, c, e);
                        e = e || {};
                        if (a = d ? a.A.get(d) : M.w) null != e.opt_fullscreen || (e.opt_fullscreen = Rn(a)), null != e.opt_adElement || (e.opt_adElement = a);
                        return xe("lidar::handlevast_html5", sa(xl, b, c, e)) || {}
                    }
                    return {}
                };
            Kn.prototype.K = function(a) {
                this.D = a
            };
            Kn.prototype.J = function() {
                return this.D
            };
            Kn.prototype.M = function(a) {
                a ? this.o = new Cj(a.adk, a.awbidKey) : this.o = null
            };
            var Tn = function(a, b) {
                    var c = String(Math.floor(1E9 * Math.random()));
                    a.A.set(c, b);
                    if (Im(Fm(), 31061775)) try {
                        ah(function() {
                            return b
                        })
                    } catch (d) {}
                    return c
                },
                Un = function(a, b, c) {
                    c ? a.l.get(c) == b && a.l.Va(c) : (c = [], a.l.forEach(sa(function(a, b, c, g) {
                        c == b && a.push(g)
                    }, c, b)), A(c, a.l.Va, a.l))
                },
                Nn = function(a) {
                    if (v(window.Goog_AdSense_Lidar_getUrlSignalsArray)) {
                        var b = {};
                        b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                        Vn(a.g, "activityMonitor", "pageSignals", b)
                    }
                };
            Kn.prototype.I = function(a) {
                var b = a.U,
                    c = b.queryId,
                    d = {};
                d.eventId = b.eventId;
                switch (a.X) {
                    case "getPageSignals":
                        Nn(this);
                        break;
                    case "reportVastEvent":
                        var e = b.vastEvent;
                        a = b.osdId;
                        var f = {};
                        f.opt_fullscreen = b.isFullscreen;
                        b.isOverlay && (f.opt_bounds = b.overlayBounds);
                        d.viewabilityData = Sn(this, e, c, a, f);
                        Vn(this.g, "activityMonitor", "viewability", d);
                        break;
                    case "fetchAdTagUrl":
                        d = {}, d.eventId = b.eventId, a = b.osdId, c = null, tb(b, "isFullscreen") && (c = b.isFullscreen), tb(b, "loggingId") && (b = b.loggingId, d.loggingId = b, Jn(Gn.getInstance(),
                            43, {
                                step: "beforeLookup",
                                logid: b,
                                time: ta()
                            }, !0)), d.engagementString = Wn(this, a, c), Vn(this.g, "activityMonitor", "engagement", d)
                }
            };
            var On = function() {
                    if (!(m.ima && m.ima.video && m.ima.video.client && m.ima.video.client.tagged)) {
                        t("ima.video.client.sdkTag", !0, void 0);
                        var a = m.document,
                            b = a.createElement("script"),
                            c = a.location.protocol;
                        "http:" != c && "https:" != c && (c = "");
                        // b.src = c + "//s0.2mdn.net/instream/video/client.js";
                        b.src = "../assets/client.js";
                        b.async = !0;
                        b.type = "text/javascript";
                        a = a.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(b, a)
                    }
                },
                Wn = function(a, b, c) {
                    var d = b ? a.A.get(b) : M.w;
                    a = {};
                    null != c && (a.fullscreen = c);
                    c = "";
                    try {
                        c = $g(function() {
                            return d
                        }, a)
                    } catch (e) {
                        c =
                            "sdktle;" + Ga(e.name, 12) + ";" + Ga(e.message, 40)
                    }
                    return c
                };
            t("ima.common.getVideoMetadata", function(a) {
                a = Mn().l.get(a);
                return v(a) ? a() : {}
            }, void 0);
            t("ima.common.triggerViewEvent", function(a, b) {
                var c = {};
                c.queryId = a;
                c.viewabilityString = b;
                (a = Mn().g) ? Vn(a, "activityMonitor", "viewableImpression", c): Q(Mn(), new L("viewable_impression", null, c))
            }, void 0);
            t("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
                var c = Mn().g,
                    d = {};
                d.queryId = a;
                d.viewabilityData = b;
                c && Vn(c, "activityMonitor", "viewabilityMeasurement", d)
            }, void 0);
            t("ima.common.triggerMeasurableEvent", function(a, b) {
                var c = {};
                c.queryId = a;
                c.viewabilityString = b;
                (a = Mn().g) ? Vn(a, "activityMonitor", "measurableImpression", c): Q(Mn(), new L("measurable_impression", null, c))
            }, void 0);
            t("ima.common.triggerExternalActivityEvent", function(a, b, c) {
                var d = {};
                d.queryId = a;
                d.viewabilityString = b;
                d.eventName = c;
                (a = Mn().g) ? Vn(a, "activityMonitor", "externalActivityEvent", d): Q(Mn(), new L("externalActivityEvent", null, d))
            }, void 0);
            t("ima.common.updateEngagementDetectionValue", function(a) {
                var b = Mn().g;
                if (b) {
                    var c = {};
                    c.engagementString = a;
                    Vn(b, "activityMonitor", "engagementData", c)
                }
            }, void 0);
            var Xn = Mn();
            var Yn = function(a, b, c) {
                this.h = c;
                0 == b.length && (b = [
                    []
                ]);
                this.g = Ta(b, function(b) {
                    b = a.concat(b);
                    for (var c, d, g = [], k = 0, l = 0; k < b.length;) {
                        var n = b[k++];
                        if (128 > n) g[l++] = String.fromCharCode(n);
                        else if (191 < n && 224 > n) d = b[k++], g[l++] = String.fromCharCode((n & 31) << 6 | d & 63);
                        else if (239 < n && 365 > n) {
                            d = b[k++];
                            c = b[k++];
                            var u = b[k++];
                            c = ((n & 7) << 18 | (d & 63) << 12 | (c & 63) << 6 | u & 63) - 65536;
                            g[l++] = String.fromCharCode(55296 + (c >> 10));
                            g[l++] = String.fromCharCode(56320 + (c & 1023))
                        } else d = b[k++], c = b[k++], g[l++] = String.fromCharCode((n & 15) << 12 | (d &
                            63) << 6 | c & 63)
                    }
                    return new RegExp(g.join(""))
                })
            };
            Yn.prototype.match = function(a) {
                return Ua(this.g, function(b) {
                    b = a.match(b);
                    return null == b ? !1 : !this.h || 1 <= b.length && "3.171.2" == b[1] || 2 <= b.length && "3.171.2" == b[2] ? !0 : !1
                }, this)
            };
            var Zn = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
                $n = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47],
                ao = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 97, 100, 109, 111, 98, 47, 40, 115, 100,
                    107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47
                ],
                bo = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 99, 111, 114, 101, 47, 97, 100, 109, 111, 98, 47],
                co = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47],
                eo = [
                    [105, 109, 97, 51, 92, 46, 106, 115],
                    [105, 109, 97,
                        51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115
                    ],
                    [105, 109, 97, 51, 95, 116, 101, 115, 116, 92, 46, 106, 115],
                    [105, 109, 97, 51, 95, 108, 111, 97, 100, 101, 114, 92, 46, 106, 115],
                    [105, 109, 97, 51, 95, 108, 111, 97, 100, 101, 114, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
                ],
                fo = [
                    [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
                    [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103,
                        40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
                    ],
                    [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 116, 101, 115, 116, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
                    [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
                ],
                go = [
                    [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
                    [111, 117, 116, 115, 116, 114, 101, 97, 109,
                        95, 100, 101, 98, 117, 103, 92, 46, 106, 115
                    ]
                ],
                ho = [
                    [104, 116, 109, 108, 53, 95, 103, 97, 109, 101, 115, 92, 46, 106, 115],
                    [104, 116, 109, 108, 53, 95, 103, 97, 109, 101, 115, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
                ],
                io = new Yn(Zn, eo, !1),
                jo = new Yn(Zn, fo, !0),
                ko = new Yn($n, eo, !1),
                lo = new Yn($n, fo, !0),
                mo = new Yn(ao, [], !1),
                no = new Yn(ao, fo, !0),
                oo = new Yn(bo, fo, !1),
                po = new Yn(bo, [
                    [97, 112, 112, 95, 112, 114, 111, 109, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106,
                        115
                    ],
                    [97, 112, 112, 95, 112, 114, 111, 109, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 95, 99, 97, 110, 97, 114, 121, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115],
                    [118, 105, 100, 101, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115],
                    [118, 105, 100, 101, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 95, 99, 97, 110, 97, 114, 121, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50,
                        44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115
                    ]
                ], !1),
                qo = new Yn([104, 116, 116, 112, 115, 63, 58, 47, 47, 103, 111, 111, 103, 108, 101, 97, 100, 115, 92, 46, 103, 92, 46, 100, 111, 117, 98, 108, 101, 99, 108, 105, 99, 107, 92, 46, 110, 101, 116, 47, 109, 97, 100, 115, 47, 115, 116, 97, 116, 105, 99, 47], [], !1),
                ro = new Yn([104, 116, 116, 112, 115, 63, 58, 47, 47, 119, 119, 119, 92, 46, 103, 115, 116, 97, 116, 105, 99, 92, 46, 99, 111, 109, 47, 97, 100, 109, 111, 98, 47, 106, 115, 47], [], !1),
                so = new Yn([104, 116, 116, 112, 115, 63, 58, 47, 47, 109, 105, 110, 116, 45, 109, 97, 100, 92, 46, 115, 97, 110, 100, 98,
                    111, 120, 92, 46, 103, 111, 111, 103, 108, 101, 92, 46, 99, 111, 109, 47, 109, 97, 100, 115, 47, 115, 116, 97, 116, 105, 99, 47, 102, 111, 114, 109, 97, 116, 115, 47
                ], [], !1),
                to = new Yn([104, 116, 116, 112, 115, 63, 58, 47, 47, 118, 105, 100, 101, 111, 45, 97, 100, 45, 116, 101, 115, 116, 92, 46, 97, 112, 112, 115, 112, 111, 116, 92, 46, 99, 111, 109, 47], [], !1),
                uo = new Yn(co, eo, !1),
                vo = new Yn([104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103,
                    101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47
                ], [], !1),
                wo = new Yn(Zn, go, !1),
                xo = new Yn(co, go, !1),
                yo = new Yn(Zn, ho, !1),
                zo = new Yn(co, ho, !1),
                nb = {
                    Uh: io,
                    Th: jo,
                    pi: ko,
                    oi: lo,
                    yg: mo,
                    vg: no,
                    ug: oo,
                    wg: po,
                    zg: qo,
                    xg: ro,
                    tg: so,
                    Ag: to,
                    Vh: uo,
                    yk: vo,
                    pj: wo,
                    qj: xo,
                    $h: yo,
                    ai: zo
                };
            var Ao = function(a) {
                this.h = a
            };
            Ao.prototype.g = function() {
                return this.h
            };
            var Bo = function() {
                P.call(this);
                this.currentTime = 0
            };
            x(Bo, P);
            var Co = function(a) {
                Bo.call(this);
                this.currentTime = a.currentTime;
                if (!("currentTime" in a) || isNaN(a.currentTime)) throw Zm(Ym, null, "content", "currentTime");
                this.duration = "duration" in a && !isNaN(a.duration) ? a.duration : -1;
                this.l = a;
                this.g = new Jg(250);
                this.o = new W(this);
                kn(this.o, this.g, "tick", this.w, !1, this)
            };
            x(Co, Bo);
            Co.prototype.start = function() {
                this.g.start()
            };
            Co.prototype.L = function() {
                Co.P.L.call(this);
                this.o.O();
                this.g.O()
            };
            Co.prototype.w = function() {
                if ("currentTime" in this.l && !isNaN(this.l.currentTime)) {
                    var a = this.currentTime;
                    this.currentTime = this.l.currentTime;
                    a != this.currentTime && Q(this, new K("currentTimeUpdate"))
                } else Q(this, new K("contentWrapperError")), Kg(this.g)
            };
            var Do = function(a, b) {
                L.call(this, "adMetadata", a);
                this.g = b || null
            };
            x(Do, L);
            Do.prototype.B = function() {
                return this.g
            };
            var Fo = function() {
                this.loadVideoTimeout = Eo()
            };
            Fo.prototype.disableClickThrough = !1;
            Fo.prototype.mimeTypes = null;
            Fo.prototype.restoreCustomPlaybackStateOnAdBreakComplete = !1;
            Fo.prototype.loadVideoTimeout = 8E3;
            var Eo = function() {
                return M.ma() || M.la() || Im(Fm(), 420706082) ? 15E3 : 8E3
            };
            var Go = ["classid", "data", "movie", "type", "typemustmatch"],
                Ho = function(a, b) {
                    var c = function(a, b) {
                        for (var c in a)
                            for (var d = c.toLowerCase(), e = 0; e < Go.length; e++) {
                                var l = Go[e];
                                if (d == l) throw Error('Cannot override "' + l + '" ' + b + ', got "' + c + '" with value "' + a[c] + '"');
                            }
                    };
                    c(a, "attribute");
                    c(b, "param")
                };
            var Io = function() {};
            ha(Io);
            Io.prototype.g = 0;
            var Jo = function(a) {
                P.call(this);
                this.D = a || Sc();
                this.K = null;
                this.Pa = !1;
                this.g = null;
                this.w = void 0;
                this.A = this.B = this.l = null
            };
            x(Jo, P);
            h = Jo.prototype;
            h.qe = Io.getInstance();
            h.getId = function() {
                return this.K || (this.K = ":" + (this.qe.g++).toString(36))
            };
            h.Fa = function() {
                return this.g
            };
            h.bc = function(a) {
                if (this.l && this.l != a) throw Error("Method not supported");
                Jo.P.bc.call(this, a)
            };
            h.Bc = function() {
                this.g = this.D.createElement("DIV")
            };
            h.pb = function() {
                this.Pa = !0;
                Ko(this, function(a) {
                    !a.Pa && a.Fa() && a.pb()
                })
            };
            var Lo = function(a) {
                Ko(a, function(a) {
                    a.Pa && Lo(a)
                });
                a.w && mn(a.w);
                a.Pa = !1
            };
            Jo.prototype.L = function() {
                this.Pa && Lo(this);
                this.w && (this.w.O(), delete this.w);
                Ko(this, function(a) {
                    a.O()
                });
                this.g && ad(this.g);
                this.l = this.g = this.A = this.B = null;
                Jo.P.L.call(this)
            };
            var Ko = function(a, b) {
                a.B && A(a.B, b, void 0)
            };
            Jo.prototype.removeChild = function(a, b) {
                if (a) {
                    var c = q(a) ? a : a.getId();
                    a = this.A && c ? yb(this.A, c) || null : null;
                    if (c && a) {
                        var d = this.A;
                        c in d && delete d[c];
                        ab(this.B, a);
                        b && (Lo(a), a.g && ad(a.g));
                        b = a;
                        if (null == b) throw Error("Unable to set parent component");
                        b.l = null;
                        Jo.P.bc.call(b, null)
                    }
                }
                if (!a) throw Error("Child is not in parent component");
                return a
            };
            var Mo = function(a, b) {
                Jo.call(this, b);
                this.J = a;
                this.F = new W(this);
                this.o = new pf
            };
            x(Mo, Jo);
            h = Mo.prototype;
            h.oc = "window";
            h.Ib = "sameDomain";
            h.setSize = function(a, b) {
                this.I = q(a) ? a : Math.round(a) + "px";
                this.H = q(b) ? b : Math.round(b) + "px";
                this.Fa() && pd(this.Fa() ? this.Fa().firstChild : null, this.I, this.H);
                return this
            };
            h.pb = function() {
                Mo.P.pb.call(this);
                for (var a = this.Fa(), b = this.o.Oa(), c = this.o.ca(), d = [], e = 0; e < b.length; e++) {
                    var f = encodeURIComponent(String(b[e])),
                        g = encodeURIComponent(String(c[e]));
                    d.push(f + "=" + g)
                }
                var b = d.join("&");
                if (!D || 11 <= Number(dc)) {
                    var k = {
                        AllowScriptAccess: this.Ib,
                        allowFullScreen: "true",
                        allowNetworking: "all",
                        bgcolor: "#000000",
                        "class": "goog-ui-media-flash-object",
                        FlashVars: b,
                        id: this.getId(),
                        name: this.getId(),
                        quality: "high",
                        SeamlessTabbing: "false",
                        wmode: this.oc
                    };
                    k = Lc({
                        src: this.J,
                        type: "application/x-shockwave-flash",
                        pluginspage: "https://www.macromedia.com/go/getflashplayer"
                    }, {
                        allownetworking: "none",
                        allowscriptaccess: "never"
                    }, k);
                    k = Kc("embed", k)
                } else {
                    d = this.J;
                    c = {
                        allowFullScreen: "true",
                        AllowScriptAccess: this.Ib,
                        allowNetworking: "all",
                        bgcolor: "#000000",
                        FlashVars: b,
                        quality: "high",
                        SeamlessTabbing: "false",
                        wmode: this.oc
                    };
                    b = {
                        "class": "goog-ui-media-flash-object",
                        id: this.getId(),
                        name: this.getId()
                    };
                    Ho(b, c);
                    e = {
                        allownetworking: "none",
                        allowscriptaccess: "never",
                        movie: d
                    };
                    d = {};
                    for (k in e) d[k] = e[k];
                    for (k in c) f = k.toLowerCase(),
                        f in e && delete d[f], d[k] = c[k];
                    c = [];
                    for (k in d) c.push(Kc("param", {
                        name: k,
                        value: d[k]
                    }));
                    k = Lc({
                        classid: "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
                    }, {}, b);
                    k = Kc("object", k, c)
                }
                a.innerHTML = Ec(k);
                this.I && this.H && this.setSize(this.I, this.H);
                this.F.h(this.Fa(), qb(gg), Oe)
            };
            h.Bc = function() {
                if (null != this.M && !(0 <= Ma(oh, this.M))) throw Error("Method not supported");
                var a = this.D.createElement("DIV");
                a.className = "goog-ui-media-flash";
                this.g = a
            };
            h.L = function() {
                Mo.P.L.call(this);
                this.o = null;
                this.F.O();
                this.F = null
            };
            var No = function(a, b) {
                K.call(this, "vpaidEventType");
                this.g = a;
                this.data = b
            };
            x(No, K);
            var Oo = function(a) {
                P.call(this);
                this.B = a;
                this.l = null;
                this.w = -1;
                this.A = !1;
                this.o = "goog_" + Na++
            };
            x(Oo, P);
            var Po = uc(lc(mc("https://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf"))),
                Qo = uc(lc(mc("http://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));
            h = Oo.prototype;
            h.O = function() {
                this.g && (this.g.O(), this.l = null);
                window[this.o] && delete window[this.o];
                m.clearTimeout(this.w)
            };
            h.load = function(a, b, c, d) {
                window[this.o] = w(this.Jd, this);
                this.g = new Mo(M.Nc() ? Qo : Po);
                this.g.setSize(b, c);
                this.g.Ib = "always";
                this.g.oc = "transparent";
                this.g.o.set("vpaid", a);
                this.g.o.set("vpaidEventHandler", this.o);
                a = this.g;
                b = this.B;
                if (a.Pa) throw Error("Component already rendered");
                a.g || a.Bc();
                b ? b.insertBefore(a.g, null) : a.D.g.body.appendChild(a.g);
                a.l && !a.l.Pa || a.pb();
                a = this.g;
                this.l = a.Fa() ? a.Fa().firstChild : null;
                this.w = Lg(this.Xf, d, this)
            };
            h.Kb = function(a) {
                if (!this.l) return null;
                var b = Array.prototype.slice.call(arguments),
                    c = b.shift();
                if (!this.A && "handshakeVersion" != c && "initAd" != c) return null;
                try {
                    if (this.l[c]) return this.l[c].apply(this.l, b)
                } catch (d) {}
                return null
            };
            h.Jd = function(a, b) {
                "AdLoaded" == a && (m.clearTimeout(this.w), this.A = !0);
                Q(this, new No(a, b || null))
            };
            h.Xf = function() {
                Q(this, "loadError")
            };
            var Ro = function() {
                P.call(this);
                this.B = this.F = this.J = this.H = !1;
                this.l = 0;
                this.w = [];
                this.D = !1;
                this.M = this.K = Infinity;
                this.o = 0;
                this.A = new W(this);
                this.I = {}
            };
            x(Ro, P);
            Ro.prototype.Sa = function(a) {
                null == a || this.H || (this.g = a, So(this), this.H = !0)
            };
            Ro.prototype.ra = function() {
                null != this.g && this.H && (To(this), this.B = this.F = this.H = !1, this.l = 0, this.w = [], this.D = !1)
            };
            var So = function(a) {
                    To(a);
                    !(a.g instanceof P) && "ontouchstart" in document.documentElement && vn() ? (a.I = {
                        touchstart: w(a.aa, a),
                        touchmove: w(a.$, a),
                        touchend: w(a.Z, a)
                    }, kb(a.I, function(a, c) {
                        this.g.addEventListener(c, a, !1)
                    }, a)) : a.A.h(a.g, "click", a.V)
                },
                To = function(a) {
                    a.A.C(a.g, "click", a.V);
                    kb(a.I, function(a, c) {
                        this.g.removeEventListener(c, a, !1)
                    }, a);
                    a.I = {}
                };
            Ro.prototype.aa = function(a) {
                this.F = !0;
                this.l = a.touches.length;
                this.o && (window.clearTimeout(this.o), this.o = 0, this.J = !0);
                (this.D = Uo(this, a.touches) || 1 != a.touches.length) ? this.M = this.K = Infinity: (this.K = a.touches[0].clientX, this.M = a.touches[0].clientY);
                Vo(this, a.touches)
            };
            Ro.prototype.$ = function(a) {
                this.l = a.touches.length;
                if (!xn(8) || Math.pow(a.changedTouches[0].clientX - this.K, 2) + Math.pow(a.changedTouches[0].clientY - this.M, 2) > Math.pow(5, 2)) this.B = !0
            };
            Ro.prototype.Z = function(a) {
                !this.F || 1 != this.l || this.B || this.J || this.D || !Uo(this, a.changedTouches) || (this.o = window.setTimeout(w(this.T, this), 300));
                this.l = a.touches.length;
                0 == this.l && (this.B = this.F = !1, this.w = []);
                this.J = !1
            };
            Ro.prototype.V = function() {
                this.T()
            };
            var Vo = function(a, b) {
                    a.w = [];
                    A(b, function(a) {
                        var b = this.w;
                        a = a.identifier;
                        Ya(b, a) || b.push(a)
                    }, a)
                },
                Uo = function(a, b) {
                    return Ua(b, function(a) {
                        return Ya(this.w, a.identifier)
                    }, a)
                };
            Ro.prototype.T = function() {
                this.o = 0;
                Q(this, new K("click"))
            };
            Ro.prototype.L = function() {
                this.ra();
                this.A.O();
                this.A = null;
                Ro.P.L.call(this)
            };
            var Wo = function() {
                this.g = [];
                this.h = []
            };
            h = Wo.prototype;
            h.Ea = function() {
                return this.g.length + this.h.length
            };
            h.isEmpty = function() {
                return 0 == this.g.length && 0 == this.h.length
            };
            h.clear = function() {
                this.g = [];
                this.h = []
            };
            h.contains = function(a) {
                return Ya(this.g, a) || Ya(this.h, a)
            };
            h.ca = function() {
                for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
                for (var c = this.h.length, b = 0; b < c; ++b) a.push(this.h[b]);
                return a
            };
            var Xo = function(a) {
                if (wa(Ja(a))) return null;
                var b = a.match(/^https?:\/\/[^\/]*youtu\.be\/([a-zA-Z0-9_-]+)$/);
                if (null != b && 2 == b.length) return b[1];
                b = a.match(/^https?:\/\/[^\/]*youtube.com\/video\/([a-zA-Z0-9_-]+)$/);
                if (null != b && 2 == b.length) return b[1];
                b = a.match(/^https?:\/\/[^\/]*youtube.com\/watch\/([a-zA-Z0-9_-]+)$/);
                if (null != b && 2 == b.length) return b[1];
                a = (new tf(a)).h;
                return Kf(a, "v") ? a.get("v").toString() : Kf(a, "video_id") ? a.get("video_id").toString() : null
            };
            var Yo = function(a) {
                this.h = 0;
                this.l = a || 100;
                this.g = []
            };
            h = Yo.prototype;
            h.get = function(a) {
                a = Zo(this, a);
                return this.g[a]
            };
            h.set = function(a, b) {
                a = Zo(this, a);
                this.g[a] = b
            };
            h.Ea = function() {
                return this.g.length
            };
            h.isEmpty = function() {
                return 0 == this.g.length
            };
            h.clear = function() {
                this.h = this.g.length = 0
            };
            h.ca = function() {
                for (var a = this.Ea(), b = this.Ea(), c = [], a = this.Ea() - a; a < b; a++) c.push(this.get(a));
                return c
            };
            h.Oa = function() {
                for (var a = [], b = this.Ea(), c = 0; c < b; c++) a[c] = c;
                return a
            };
            var Zo = function(a, b) {
                if (b >= a.g.length) throw Error("Out of bounds exception");
                return a.g.length < a.l ? b : (a.h + Number(b)) % a.l
            };
            var $o = function() {
                P.call(this)
            };
            x($o, P);
            var ap = {
                Og: "beginFullscreen",
                CLICK: "click",
                Hh: "end",
                Ih: "endFullscreen",
                sd: "error",
                LOADED: "loaded",
                Di: "mediaLoadTimeout",
                Gb: "pause",
                zd: "play",
                lk: "skip",
                mk: "skipShown",
                jk: "shareClicked",
                pc: "start",
                Ek: "timeUpdate",
                Sg: "cardsStateChange",
                Ck: "timedMetadata",
                fl: "volumeChange"
            };
            $o.prototype.Pc = function() {
                return !0
            };
            $o.prototype.ua = ga;
            var bp = function(a) {
                P.call(this);
                this.g = a;
                this.Z = "";
                this.H = -1;
                this.$ = new Yo(4);
                this.o = 0;
                this.V = this.w = this.T = this.D = !1;
                this.K = this.ib();
                this.J = this.jb();
                this.aa = Eo();
                this.M = !1
            };
            x(bp, $o);
            h = bp.prototype;
            h.zc = function() {
                return Sa(qb(cm), function(a) {
                    return !wa(this.g.canPlayType(a))
                }, this)
            };
            h.cc = function(a) {
                this.aa = 0 < a.g ? a.g : Eo()
            };
            h.Sc = function(a) {
                this.g.seekable.length ? this.g.seekable.end(0) > this.H && (this.g.currentTime = this.H, a()) : setTimeout(w(this.Sc, this, a), 100)
            };
            h.ed = function() {
                this.Z = this.g.currentSrc;
                this.H = this.g.ended ? -1 : this.g.currentTime
            };
            h.cd = function(a) {
                if (0 <= this.H) {
                    var b = this;
                    this.g.addEventListener("loadedmetadata", function d() {
                        b.Sc(a);
                        b.g.removeEventListener("loadedmetadata", d, !1)
                    }, !1);
                    this.g.src = this.Z;
                    this.g.load()
                } else a()
            };
            h.load = function(a, b) {
                cp(this);
                b && M.la() && v(this.g.g) && this.g.g(b);
                a && (this.g.src = a);
                this.g.load()
            };
            h.xb = function(a) {
                this.g.volume = a;
                this.g.muted = 0 == a ? !0 : !1
            };
            h.Ic = function() {
                return this.g.volume
            };
            h.wb = function() {
                this.M = !1;
                this.g.play();
                this.I || (this.I = Lg(this.Fd, this.aa, this))
            };
            h.Kc = function() {
                this.M = !0;
                this.g.pause();
                dp(this)
            };
            h.Jc = function() {
                return this.g.paused ? vn() || Rg ? this.g.currentTime < this.g.duration : !0 : !1
            };
            h.wc = function() {
                un() && this.g.webkitDisplayingFullscreen && this.g.webkitExitFullscreen()
            };
            h.jb = function() {
                return Rn(this.g)
            };
            h.lb = function(a) {
                this.g.currentTime = a
            };
            h.Ba = function() {
                return this.g.currentTime
            };
            h.gb = function() {
                return isNaN(this.g.duration) ? -1 : this.g.duration
            };
            h.zb = function() {
                return this.g.ended
            };
            h.ib = function() {
                return new G(this.g.offsetWidth, this.g.offsetHeight)
            };
            h.L = function() {
                this.ra();
                bp.P.L.call(this)
            };
            h.Sa = function() {
                this.ra();
                this.l = new W(this);
                this.l.h(this.g, nn, this.ea);
                this.l.h(this.g, "canplay", this.Uf);
                this.l.h(this.g, "ended", this.Wf);
                this.l.h(this.g, "webkitbeginfullscreen", this.Sb);
                this.l.h(this.g, "webkitendfullscreen", this.Lc);
                this.l.h(this.g, "pause", this.$f);
                this.l.h(this.g, "playing", this.bg);
                this.l.h(this.g, "timeupdate", this.dg);
                this.l.h(this.g, "volumechange", this.hg);
                this.l.h(this.g, "error", this.Wc);
                this.l.h(this.g, An() || vn() && !xn(8) ? "loadeddata" : "canplay", this.Yf);
                this.B = new Ro;
                this.l.h(this.B,
                    "click", this.Kf);
                this.B.Sa(this.g);
                this.F = new Jg(1E3);
                this.l.h(this.F, "tick", this.Lf);
                this.F.start()
            };
            h.ra = function() {
                null != this.B && (this.B.ra(), this.B = null);
                null != this.F && this.F.O();
                null != this.l && (this.l.O(), this.l = null);
                cp(this)
            };
            var cp = function(a) {
                a.T = !1;
                a.w = !1;
                a.D = !1;
                a.o = 0;
                a.V = !1;
                a.$.clear();
                dp(a);
                J(a.A)
            };
            bp.prototype.ea = function(a) {
                Q(this, a.type)
            };
            var ep = function(a) {
                if (!a.w) {
                    a.w = !0;
                    dp(a);
                    Q(a, "start");
                    var b = v(a.g.getAttribute) && null != a.g.getAttribute("playsinline");
                    Fm();
                    (Tb && !Ub && xn(10) && M.ma(), !M.ma() && (Oj() || Nj()) && Db() && (Ub || xn(10) && M.h) && b) || !(un() && !sn() || Sb && !yn(4) || !M.ma() && yk()) || !Sb || yn(3) || un() && !xn(4) || a.Sb()
                }
            };
            h = bp.prototype;
            h.Uf = function() {
                var a;
                if (a = Sg) a = B, a = !(a && (Ha(a, "SMART-TV") || Ha(a, "SmartTV")));
                a && !this.V && (this.lb(.001), this.V = !0)
            };
            h.Yf = function() {
                this.T || (this.T = !0, Q(this, "loaded"))
            };
            h.bg = function() {
                Q(this, "play");
                vn() || An() || ep(this)
            };
            h.dg = function() {
                if (!this.w && (vn() || An())) {
                    if (0 >= this.Ba()) return;
                    if (An() && this.zb() && 1 == this.gb()) {
                        this.Wc();
                        return
                    }
                    ep(this)
                }
                if (vn() || zn()) {
                    if (1.5 < this.Ba() - this.o) {
                        this.D = !0;
                        this.lb(this.o);
                        return
                    }
                    this.D = !1;
                    this.Ba() > this.o && (this.o = this.Ba())
                }
                var a = this.$;
                a.g[a.h] = this.g.currentTime;
                a.h = (a.h + 1) % a.l;
                Q(this, "timeUpdate")
            };
            h.hg = function() {
                Q(this, "volumeChange")
            };
            h.$f = function() {
                if (this.w && vn() && !this.M && (2 > fp(this) || this.D)) {
                    this.A = new Jg(250);
                    this.l.h(this.A, "tick", this.Tf);
                    this.A.start();
                    var a = !0
                } else a = !1;
                a || Q(this, "pause")
            };
            h.Wf = function() {
                var a = !0;
                if (vn() || zn()) a = this.o >= this.g.duration - 1.5;
                !this.D && a && Q(this, "end")
            };
            h.Sb = function() {
                Q(this, "beginFullscreen")
            };
            h.Lc = function() {
                Q(this, "endFullscreen")
            };
            h.Wc = function() {
                dp(this);
                Q(this, "error")
            };
            h.Kf = function() {
                Q(this, "click")
            };
            h.Lf = function() {
                var a = this.ib(),
                    b = this.jb();
                if (a.width != this.K.width || a.height != this.K.height) !this.J && b ? this.Sb() : this.J && !b && this.Lc(), this.K = a, this.J = b
            };
            h.Fd = function() {
                if (!this.w) {
                    try {
                        Jn(Gn.getInstance(), 16)
                    } catch (a) {}
                    cp(this);
                    Q(this, "mediaLoadTimeout")
                }
            };
            h.Tf = function() {
                if (this.zb() || !this.Jc()) J(this.A);
                else {
                    var a = this.g.duration - this.g.currentTime,
                        b = fp(this);
                    0 < b && (2 <= b || 2 > a) && (J(this.A), this.wb())
                }
            };
            var fp = function(a) {
                    var b;
                    a: {
                        for (b = a.g.buffered.length - 1; 0 <= b;) {
                            if (a.g.buffered.start(b) <= a.g.currentTime) {
                                b = a.g.buffered.end(b);
                                break a
                            }
                            b--
                        }
                        b = 0
                    }
                    return b - a.g.currentTime
                },
                dp = function(a) {
                    a.I && (m.clearTimeout(a.I), a.I = null)
                };
            var hp = function() {
                P.call(this);
                this.l = new gp;
                this.g = new W(this);
                var a = Re(M);
                if (a) {
                    a: {
                        if (tb(a.g, "videoElementMockDuration") && (a = a.g.videoElementMockDuration, r(a))) break a;
                        a = NaN
                    }
                    this.duration = a
                }
            };
            x(hp, P);
            var ip = new pf,
                jp = function() {
                    var a = ["video/mp4"],
                        b = ["video/ogg"],
                        c = new hp;
                    c.canPlayType = function(c) {
                        return Ya(a, c) ? "probably" : Ya(b, c) ? "maybe" : ""
                    };
                    c.width = 0;
                    c.height = 0;
                    c.offsetWidth = 0;
                    c.offsetHeight = 0;
                    return c
                },
                kp = function() {},
                gp = function() {
                    this.length = 0;
                    this.g = []
                };
            gp.prototype.start = function() {
                return 0
            };
            h = hp.prototype;
            h.readyState = 0;
            h.currentTime = 0;
            h.duration = NaN;
            h.volume = 1;
            h.muted = !1;
            h.src = "";
            h.$a = null;
            h.Bb = null;
            h.load = function() {
                this.readyState = 0;
                Q(this, "loadstart");
                this.duration = Number(isNaN(this.duration) ? 10 + 20 * Math.random() : this.duration);
                Q(this, "durationchange");
                var a = this.l;
                a.g.push(new kp);
                a.length = a.g.length;
                Q(this, "loadedmetadata");
                0 < this.currentTime && Q(this, "timeupdate");
                Q(this, "loadeddata");
                Q(this, "canplay");
                Q(this, "canplaythrough");
                Q(this, "progress")
            };
            h.setAttribute = function(a, b) {
                null != a && ip.set(a, b)
            };
            h.L = function() {
                this.g.O()
            };
            h.gg = function(a) {
                var b = null,
                    c = null;
                switch (a.type) {
                    case "loadeddata":
                        b = "Loaded";
                        break;
                    case "playing":
                        b = "Playing";
                        c = "#00f";
                        break;
                    case "pause":
                        b = "Paused";
                        break;
                    case "ended":
                        b = "Ended", c = "#000"
                }
                b && this.Bb && (this.Bb.innerText = b);
                c && this.$a && (this.$a.style.backgroundColor = c)
            };
            D && E(8);
            var lp = function() {
                throw Error("Do not instantiate directly");
            };
            lp.prototype.g = null;
            lp.prototype.getContent = function() {
                return this.content
            };
            lp.prototype.toString = function() {
                return this.content
            };
            var mp = function() {
                lp.call(this)
            };
            x(mp, lp);
            (function(a) {
                function b(a) {
                    this.content = a
                }
                b.prototype = a.prototype;
                return function(a, d) {
                    a = new b(String(a));
                    void 0 !== d && (a.g = d);
                    return a
                }
            })(mp);
            var np = {},
                op = function(a, b) {
                    var c = "key_" + a + ":" + b,
                        d = np[c];
                    if (void 0 === d || 0 > d) np[c] = 0;
                    else if (0 == d) throw Error('Encountered two active delegates with the same priority ("' + a + ":" + b + '").');
                };
            (function(a) {
                function b(a) {
                    this.content = a
                }
                b.prototype = a.prototype;
                return function(a, d) {
                    a = String(a);
                    if (!a) return "";
                    a = new b(a);
                    void 0 !== d && (a.g = d);
                    return a
                }
            })(mp);
            op("a", "");
            op("a", "fixedDirectionality");
            op("a", "redesign2014q4");
            op("b", "");
            op("b", "redesign2014q4");
            op("b", "forcedlinebreak");
            var pp = function(a, b, c, d) {
                if (null == a || !bd(Rc(a), a)) throw Zm(Ym, null, "containerElement", "element");
                this.w = a;
                this.h = this.g = null;
                this.o = b;
                this.A = !d;
                this.C = c || !1;
                this.l = null;
                this.g = Yc("DIV", {
                    style: "display:none;"
                });
                this.w.appendChild(this.g);
                if (this.A) {
                    a = Re(M);
                    if (Se(a, "useVideoElementMock")) {
                        a = jp();
                        b = Yc("DIV", {
                            style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
                        });
                        for (e in a) b[e] = a[e];
                        a.$a = Yc("DIV", {
                            style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
                        });
                        a.Bb = Yc("P", {
                            style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
                        });
                        a.$a.appendChild(a.Bb);
                        b.appendChild(a.$a);
                        a.g.h(a, ["loadeddata", "playing", "pause", "ended"], a.gg);
                        var e = b
                    } else e = Yc("VIDEO", {
                        style: "background-color:#000;position:absolute;width:100%;height:100%;",
                        title: "Advertisement"
                    });
                    e.setAttribute("webkit-playsinline", !0);
                    e.setAttribute("playsinline", !0);
                    this.h = e;
                    this.g.appendChild(this.h)
                }
                this.o && (e = "display:none;position:absolute;width:100%;height:100%;", M.Za() || (e +=
                    "background-color:#000;"), e = Yc("DIV", {
                    id: this.o,
                    style: e
                }), this.g.appendChild(e));
                this.C && (this.l = Yc("DIV", {
                    style: "position:absolute;width:100%;height:100%;"
                }), this.g.appendChild(this.l))
            };
            x(pp, Me);
            pp.prototype.L = function() {
                ad(this.g);
                pp.P.L.call(this)
            };
            pp.prototype.show = function() {
                qp(this.g, !0)
            };
            var qp = function(a, b) {
                null != a && (a.style.display = b ? "block" : "none")
            };
            var rp = function(a, b, c, d) {
                Me.call(this);
                this.C = b || null;
                this.B = "*";
                this.o = c || null;
                this.l = null;
                this.h = d || null;
                this.H = !!a;
                this.A = w(this.D, this);
                window.addEventListener("message", this.A)
            };
            x(rp, Me);
            rp.prototype.D = function(a) {
                if (!("*" != this.o && a.origin != this.o || this.C && a.source != this.C) && q(a.data)) {
                    try {
                        var b = Xe(a.data)
                    } catch (c) {
                        return
                    }
                    if (!(null == b || this.H && (this.l && this.l != b.id || this.h && this.h != b.channel)) && b) switch (b.event) {
                        case "syn":
                            sp(this, a);
                            tp(this);
                            this.sendMessage({
                                event: "ack"
                            });
                            break;
                        case "ack":
                            sp(this, a);
                            tp(this);
                            break;
                        case "command":
                            a = b.func, a in this.g && this.g[a].apply(null, b.args)
                    }
                }
            };
            var sp = function(a, b) {
                "null" != b.origin && (a.o = a.B = b.origin);
                a.C = b.source
            };
            rp.prototype.sendMessage = function(a, b) {
                if (b = b || this.C) {
                    this.l && (a.id = this.l);
                    this.h && (a.channel = this.h);
                    try {
                        var c = ff(a);
                        b.postMessage(c, this.B)
                    } catch (d) {}
                }
            };
            rp.prototype.L = function() {
                window.removeEventListener("message", this.A);
                rp.P.L.call(this)
            };
            var up = function(a) {
                rp.call(this, !0);
                this.l = a;
                this.h = "remoteplayer";
                this.o = "*";
                this.g = {};
                this.w = [];
                this.G = !1
            };
            x(up, rp);
            up.prototype.F = function(a, b) {
                var c = {
                        event: "command",
                        func: a
                    },
                    d = Array.prototype.slice.call(arguments, 1);
                0 < d.length && (c.args = d);
                this.G ? this.sendMessage(c) : 100 > this.w.length && this.w.push(c)
            };
            var tp = function(a) {
                    a.G = !0;
                    A(a.w, function(a) {
                        this.sendMessage(a)
                    }, a);
                    a.w.length = 0
                },
                vp = function() {};
            var xp = function(a) {
                    this.g = new pf;
                    if (a) {
                        a = sf(a);
                        for (var b = a.length, c = 0; c < b; c++) {
                            var d = a[c];
                            this.g.set(wp(d), d)
                        }
                    }
                },
                wp = function(a) {
                    var b = typeof a;
                    return "object" == b && a || "function" == b ? "o" + (a[oa] || (a[oa] = ++pa)) : b.substr(0, 1) + a
                };
            h = xp.prototype;
            h.Ea = function() {
                return this.g.Ea()
            };
            h.clear = function() {
                this.g.clear()
            };
            h.isEmpty = function() {
                return this.g.isEmpty()
            };
            h.contains = function(a) {
                a = wp(a);
                return rf(this.g.h, a)
            };
            h.ca = function() {
                return this.g.ca()
            };
            h.clone = function() {
                return new xp(this)
            };
            h.La = function() {
                return this.g.La(!1)
            };
            var yp = function(a, b) {
                this.g = a;
                this.w = new xp;
                this.G = w(this.B, this);
                this.A = Math.floor(2147483646 * Math.random()) + 1;
                this.h = b || new up(this.A);
                Ne(this, sa(J, this.h));
                this.l = new W(this);
                Ne(this, sa(J, this.l));
                b = w(a.play, a);
                this.h.g.play = b;
                b = w(a.load, a);
                this.h.g.load = b;
                a = w(a.pause, a);
                this.h.g.pause = a;
                a = w(this.C, this);
                this.h.g.listen = a;
                a = w(this.D, this);
                this.h.g.unlisten = a;
                a = w(this.o, this, "src");
                this.h.g.setSource = a;
                a = w(this.o, this, "muted");
                this.h.g.setMuted = a;
                a = w(this.o, this, "volume");
                this.h.g.setVolume = a
            };
            x(yp, Me);
            yp.prototype.B = function(a) {
                a = a.type;
                var b = new vp;
                b.duration = this.g.duration;
                b.currentTime = this.g.currentTime;
                b.readyState = this.g.readyState;
                this.g.error && (b.h = this.g.error.code);
                b.muted = this.g.muted;
                b.l = this.g.paused;
                b.g = this.g.ended;
                b.volume = this.g.volume;
                this.h.F("notify", a, b)
            };
            yp.prototype.C = function(a) {
                this.w.g.set(wp(a), a);
                this.l.h(this.g, a, this.G)
            };
            yp.prototype.D = function(a) {
                this.w.g.Va(wp(a));
                this.l.C(this.g, a)
            };
            yp.prototype.o = function(a, b) {
                this.g[a] = b
            };
            var zp = function(a, b) {
                mn(a.l);
                a.g = b;
                A(a.w.ca(), a.C, a)
            };
            var Ap = function(a, b, c, d, e, f, g, k, l, n, u, z, N) {
                this.l = a;
                this.o = l;
                this.w = b;
                this.C = c;
                this.G = g;
                this.B = n;
                this.D = d;
                this.H = e;
                this.F = u;
                this.g = f;
                this.h = k;
                this.A = z;
                this.N = N
            };
            var Cp = function(a) {
                P.call(this);
                this.M = "ima-chromeless-video";
                var b = null;
                null != a && (q(a) ? this.M = a : b = a);
                this.T = new W(this);
                this.A = null;
                this.w = !1;
                this.ia = this.ib();
                this.ga = this.jb();
                this.I = -1;
                this.$ = !1;
                this.B = -1;
                this.l = this.Z = this.J = null;
                this.oa = "";
                this.o = !1;
                this.ea = null != b;
                this.na = this.K = this.aa = this.g = null;
                this.D = void 0;
                this.H = this.ka = null;
                this.F = 0;
                this.ea ? (this.o = !0, this.g = b, this.D = 2) : (a = w(this.Gd, this), Bp ? a() : (Za.push(a), a = document.createElement("script"), a.src = "https://www.youtube.com/iframe_api",
                    b = document.getElementsByTagName("script")[0], b.parentNode.insertBefore(a, b)))
            };
            x(Cp, $o);
            var Dp = {
                    el: "adunit",
                    controls: 0,
                    html5: 1,
                    playsinline: 1,
                    ps: "gvn",
                    showinfo: 0
                },
                Za = [],
                Bp = !1;
            h = Cp.prototype;
            h.cc = function(a) {
                this.l = a
            };
            h.load = function(a, b) {
                null !== a && (this.oa = a, this.o ? Ep(this, a, b) : (this.J = a, this.Z = b))
            };
            h.xb = function(a) {
                this.ea ? Q(this, "volumeChange") : this.o ? (a = Math.min(Math.max(100 * a, 0), 100), this.g.setVolume(a), this.B = -1, Q(this, "volumeChange")) : this.B = a
            };
            h.Ic = function() {
                return this.o ? this.g.getVolume() / 100 : this.B
            };
            h.wb = function() {
                if (!wa(Ja(this.oa))) {
                    if (!this.w) {
                        Fp(this);
                        var a = Eo();
                        null != this.l && 0 < this.l.g && (a = this.l.g);
                        this.Ma = Lg(this.bb, a, this)
                    }
                    this.o ? (this.$ = !1, !this.w && this.l && this.l.h ? this.g.loadVideoByPlayerVars(this.ka) : this.g.playVideo()) : this.$ = !0
                }
            };
            h.Kc = function() {
                this.o && this.w && this.g.pauseVideo()
            };
            h.Jc = function() {
                return this.o ? 2 == this.g.getPlayerState(this.D) : !1
            };
            h.wc = function() {};
            h.jb = function() {
                var a = document.getElementById(this.M);
                return a ? Rn(a) : !1
            };
            h.lb = function(a) {
                this.o ? this.g.seekTo(a, !1) : this.I = a
            };
            h.Ba = function(a) {
                return this.o ? this.g.getCurrentTime(a || this.D) : -1
            };
            h.gb = function() {
                return this.o && this.w ? this.g.getDuration(this.D) : -1
            };
            h.zc = function() {
                return qb(cm)
            };
            h.zb = function() {
                return this.o ? 0 == this.g.getPlayerState(this.D) : !1
            };
            h.ib = function() {
                var a = document.getElementById(this.M);
                return a ? new G(a.offsetWidth, a.offsetHeight) : new G(0, 0)
            };
            h.Pc = function() {
                return this.o ? 1 == this.g.getPlayerState(this.D) : !1
            };
            h.Mf = function() {
                var a = this.ib(),
                    b = this.jb();
                if (a.width != this.ia.width || a.height != this.ia.height) !this.ga && b ? Q(this, "beginFullscreen") : this.ga && !b && Q(this, "endFullscreen"), this.ia = a, this.ga = b
            };
            h.Sa = function() {
                this.aa = w(this.Xc, this);
                this.K = w(this.$b, this);
                this.na = w(this.Yc, this);
                this.Ta = w(this.cg, this);
                this.ea && (this.g.addEventListener("onAdStateChange", this.K), this.g.addEventListener("onReady", this.aa), this.g.addEventListener("onStateChange", this.K), this.g.addEventListener("onVolumeChange", this.na), this.g.addEventListener("onSharePanelOpened", this.Ta));
                this.V = new Jg(1E3);
                this.T.h(this.V, "tick", this.Mf);
                this.V.start()
            };
            h.ra = function() {
                this.ea && (this.g.removeEventListener("onAdStateChange", this.K), this.g.removeEventListener("onReady", this.aa), this.g.removeEventListener("onStateChange", this.K), this.g.removeEventListener("onVolumeChange", this.na), this.g.removeEventListener("onSharePanelOpened", this.Ta));
                null != this.V && this.V.O()
            };
            h.Gd = function() {
                var a = zb(Dp);
                M.Za() && (a.ps = "gvn", a.remoteve = En.w, a.remotevewin = "discover");
                var b = this.M,
                    a = {
                        playerVars: a,
                        events: {
                            cardstatechange: w(this.Vf, this),
                            onError: w(this.ag, this),
                            onReady: w(this.Xc, this),
                            onAdStateChange: w(this.$b, this),
                            onStateChange: w(this.$b, this),
                            onVolumeChange: w(this.Yc, this)
                        }
                    },
                    c = fa("YT");
                this.g = null != c && null != c.Player ? new c.Player(b, a) : null
            };
            var Ep = function(a, b, c) {
                var d = {
                    autoplay: "1"
                };
                M.Za() && (d.dash = 0);
                if (null != a.l) {
                    var e = a.l.w;
                    null != e && (d.agcid = e);
                    e = a.l.l;
                    null != e && (d.adformat = e);
                    e = a.l.o;
                    null != e && (d.ad_query_id = e);
                    (e = a.l.C) && (d.cta_conversion_urls = e);
                    (e = a.l.A) && (d.endscreen_ad_tracking_data = e);
                    (e = a.l.N) && (d.wait_for_vast_info_cards_xml = e);
                    a.l.B && (d.is_pharma = 1);
                    d.iv_load_policy = a.l.D ? 1 : 3;
                    a.l.G && (d.noiba = 1);
                    a.l.H && (d.utpsa = 1);
                    a.l.F && (d.autoplay = "1")
                }
                null != b ? Tm(b) ? (e = b.match(/yt_vid\/([a-zA-Z0-9_-]{11})/), e = null != e && 1 < e.length ? e[1] : null) :
                    e = null != b && Pm(b) ? Xo(b) : null : e = null;
                null === e ? (c = null === c ? "" : c, b = "url=" + encodeURIComponent(b) + "&type=" + encodeURIComponent(c), d.url_encoded_third_party_media = b) : d.videoId = e;
                !M.ma() && (d.enabled_engage_types = "3,4,5,6");
                a.w = !1;
                a.l && a.l.h ? (a.ka = d, a.g.preloadVideoByPlayerVars(a.ka)) : a.g.cueVideoByPlayerVars(d);
                Q(a, "loaded")
            };
            h = Cp.prototype;
            h.ag = function() {
                Q(this, "error")
            };
            h.Xc = function() {
                this.o = !0;
                this.H && this.ua(this.H.pg, this.H.Ed, this.H.mg); - 1 != this.B && (this.xb(this.B), this.B = -1);
                null != this.J && (Ep(this, this.J, this.Z), this.Z = this.J = null); - 1 != this.I && (this.lb(this.I), this.I = -1);
                this.$ && this.wb()
            };
            h.Vf = function() {
                Q(this, "cardsStateChange")
            };
            h.$b = function(a) {
                switch (a.data) {
                    case 0:
                        this.w ? Q(this, "end") : Q(this, "error");
                        break;
                    case 1:
                        this.w || (Fp(this), this.w = !0, this.F = 0, Q(this, "start"));
                        Q(this, "play");
                        Gp(this);
                        this.A = new Jg(100);
                        this.T.h(this.A, "tick", this.Ha);
                        this.A.start();
                        break;
                    case 2:
                        Q(this, "pause"), Gp(this)
                }
            };
            h.Yc = function() {
                Q(this, "volumeChange")
            };
            h.cg = function() {
                Q(this, "shareClicked")
            };
            var Gp = function(a) {
                    a.T.C(a.A, "tick", a.Ha);
                    null != a.A && (Kg(a.A), a.A = null)
                },
                Fp = function(a) {
                    null != a.Ma && m.clearTimeout(a.Ma)
                };
            Cp.prototype.Ha = function() {
                if (Og || zn()) {
                    if (1.5 < this.Ba() - this.F) {
                        this.o && this.g.seekTo(this.F, !0);
                        return
                    }
                    this.Ba() > this.F && (this.F = this.Ba())
                }
                Q(this, "timeUpdate")
            };
            Cp.prototype.bb = function() {
                Q(this, "mediaLoadTimeout")
            };
            Cp.prototype.ua = function(a, b, c) {
                if (b || c) this.o ? this.g.addInfoCardXml(a, b, c) : this.H = {
                    pg: a,
                    Ed: b,
                    mg: c
                }
            };
            Cp.prototype.L = function() {
                Gp(this);
                Fp(this);
                this.ra();
                this.o = !1;
                this.T.O();
                this.I = -1;
                this.Z = null;
                this.$ = !1;
                this.J = null;
                this.B = -1;
                this.aa = this.g = this.l = null;
                this.w = !1;
                this.oa = "";
                Cp.P.L.call(this)
            };
            t("onYouTubeIframeAPIReady", function() {
                Bp = !0;
                A(Za, function(a) {
                    a()
                });
                $a()
            }, window);
            var Hp = function(a) {
                P.call(this);
                this.g = a || "goog_" + Na++;
                this.o = []
            };
            x(Hp, P);
            Hp.prototype.l = !1;
            Hp.prototype.connect = function() {
                for (this.l = !0; 0 != this.o.length;) {
                    var a = this.o.shift();
                    this.sendMessage(a.name, a.type, a.data)
                }
            };
            var Vn = function(a, b, c, d) {
                    a.l ? a.sendMessage(b, c, d) : a.o.push({
                        name: b,
                        type: c,
                        data: d
                    })
                },
                Ip = function(a, b, c, d, e) {
                    K.call(this, a);
                    this.X = b;
                    this.U = c;
                    this.vb = d;
                    this.Zc = e
                };
            x(Ip, K);
            Ip.prototype.toString = function() {
                return ""
            };
            var Jp = function(a, b) {
                Hp.call(this, b);
                this.w = a;
                this.ya = null;
                this.A = new W(this);
                this.A.h(H(), "message", this.B)
            };
            x(Jp, Hp);
            var Kp = function(a) {
                if (null == a || !q(a) || 0 != a.lastIndexOf("ima://", 0)) return null;
                a = a.substr(6);
                try {
                    return Xe(a)
                } catch (b) {
                    return null
                }
            };
            Jp.prototype.sendMessage = function(a, b, c) {
                null != this.ya && null != this.ya.postMessage && this.ya.postMessage(Lp(this, a, b, c), "*");
                null != this.ya && null == this.ya.postMessage && Jn(Gn.getInstance(), 11)
            };
            Jp.prototype.L = function() {
                this.A.O();
                Jp.P.L.call(this)
            };
            Jp.prototype.B = function(a) {
                a = a.g;
                var b = Kp(a.data);
                if (Mp(this, b)) {
                    if (null == this.ya) this.ya = a.source, this.l || this.connect();
                    else if (this.ya != a.source) return;
                    Mp(this, b) && Q(this, new Ip(b.name, b.type, b.data || {}, b.sid, a.origin))
                }
            };
            var Lp = function(a, b, c, d) {
                    var e = {};
                    e.name = b;
                    e.type = c;
                    null != d && (e.data = d);
                    e.sid = a.g;
                    e.channel = a.w;
                    return "ima://" + ff(e)
                },
                Mp = function(a, b) {
                    if (null == b) return !1;
                    var c = b.channel;
                    if (null == c || c != a.w) return !1;
                    b = b.sid;
                    return null == b || "*" != a.g && b != a.g ? !1 : !0
                };
            var Np = function(a, b) {
                P.call(this);
                this.w = a;
                this.o = b;
                this.g = {};
                this.l = new W(this);
                this.l.h(H(), "message", this.A)
            };
            x(Np, P);
            var Op = function(a, b) {
                    var c = b.g;
                    a.g.hasOwnProperty(c) && Vn(a.g[c], b.type, b.X, b.U)
                },
                Qp = function(a, b, c, d) {
                    a.g.hasOwnProperty(b) || (c = new Jp(b, c), a.l.h(c, a.w, function(a) {
                        Q(this, new Pp(a.type, a.X, a.U, a.vb, a.Zc, b))
                    }), c.ya = d, c.connect(), a.g[b] = c)
                };
            Np.prototype.L = function() {
                this.l.O();
                for (var a in this.g) J(this.g[a]);
                Np.P.L.call(this)
            };
            Np.prototype.A = function(a) {
                a = a.g;
                var b = Kp(a.data);
                if (null != b) {
                    var c = b.channel;
                    if (this.o && !this.g.hasOwnProperty(c)) {
                        var d = b.sid;
                        Qp(this, c, d, a.source);
                        Q(this, new Pp(b.name, b.type, b.data || {}, d, a.origin, c))
                    }
                }
            };
            var Pp = function(a, b, c, d, e, f) {
                Ip.call(this, a, b, c, d, e);
                this.g = f
            };
            x(Pp, Ip);
            var Sp = function() {
                var a = fa("google.ima.gptProxyInstance", H());
                if (null != a) return a;
                W.call(this);
                this.o = new Np("gpt", !0);
                Ne(this, sa(J, this.o));
                this.h(this.o, "gpt", this.G);
                this.g = null;
                Rp() || H().top === H() || (this.g = new Np("gpt", !1), Ne(this, sa(J, this.g)), this.h(this.g, "gpt", this.A))
            };
            x(Sp, W);
            var Rp = function() {
                    return !!fa("googletag.cmd", H())
                },
                Tp = function() {
                    var a = fa("googletag.console", H());
                    return null != a ? a : null
                };
            Sp.prototype.G = function(a) {
                var b = a.Zc,
                    c = "//imasdk.googleapis.com".match(Nd),
                    b = b.match(Nd);
                if (c[3] == b[3] && c[4] == b[4])
                    if (null != this.g) Qp(this.g, a.g, a.vb, H().parent), null != this.g && Op(this.g, a);
                    else if (c = a.U, null != c && p(c.scope)) {
                    var b = c.scope,
                        c = c.args,
                        d;
                    if ("proxy" == b) c = a.X, "isGptPresent" == c ? d = Rp() : "isConsolePresent" == c && (d = null != Tp());
                    else if (Rp())
                        if ("pubads" == b || "companionAds" == b) {
                            d = a.X;
                            var e = H().googletag;
                            if (null != e && null != e[b] && (e = e[b](), null != e && (d = e[d], null != d))) try {
                                var f = d.apply(e, c)
                            } catch (g) {}
                            d =
                                f
                        } else if ("console" == b) {
                        if (e = a.X, f = Tp(), null != f && (e = f[e], null != e)) try {
                            e.apply(f, c)
                        } catch (g) {}
                    } else if (null === b) {
                        f = a.X;
                        d = H();
                        if (Ya(["googleGetCompanionAdSlots", "googleSetCompanionAdContents"], f) && (f = d[f], null != f)) try {
                            e = f.apply(d, c)
                        } catch (g) {}
                        d = e
                    }
                    p(d) && (a.U.returnValue = d, Op(this.o, a))
                }
            };
            Sp.prototype.A = function(a) {
                Op(this.o, a)
            };
            var Vp = function(a, b) {
                    var c = Array.prototype.slice.call(arguments),
                        d = c.shift();
                    if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
                    return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, l, n, u, z) {
                        if ("%" == n) return "%";
                        var e = c.shift();
                        if ("undefined" == typeof e) throw Error("[goog.string.format] Not enough arguments");
                        arguments[0] = e;
                        return Up[n].apply(null, arguments)
                    })
                },
                Up = {
                    s: function(a, b, c) {
                        return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                            a + Ia(" ", Number(c) - a.length) : Ia(" ", Number(c) - a.length) + a
                    },
                    f: function(a, b, c, d, e) {
                        d = a.toString();
                        isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
                        var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                        0 <= Number(a) && (d = f + d);
                        if (isNaN(c) || d.length >= Number(c)) return d;
                        d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                        a = Number(c) - d.length - f.length;
                        return d = 0 <= b.indexOf("-", 0) ? f + d + Ia(" ", a) : f + Ia(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
                    },
                    d: function(a, b, c, d, e, f, g, k) {
                        return Up.f(parseInt(a,
                            10), b, c, d, 0, f, g, k)
                    }
                };
            Up.i = Up.d;
            Up.u = Up.d;
            var Xp = function(a, b) {
                P.call(this);
                this.l = new W(this);
                this.H = !1;
                this.I = "goog_" + Na++;
                this.F = new pf;
                var c = this.I,
                    d = M.la() ? (wd() ? "https:" : "http:") + Vp("//imasdk.googleapis.com/js/core/admob/bridge_%s.html", M.C) : (wd() ? "https:" : "http:") + Vp("//imasdk.googleapis.com/js/core/bridge3.171.2_%s.html", M.C);
                a: {
                    var e = window;
                    try {
                        do {
                            try {
                                if (0 == e.location.href.indexOf(d) || 0 == e.document.referrer.indexOf(d)) {
                                    var f = !0;
                                    break a
                                }
                            } catch (g) {}
                            e = e.parent
                        } while (e != e.top)
                    } catch (g) {}
                    f = !1
                }
                f && (d += "?f=" + c);
                c = Yc("IFRAME", {
                    src: d + "#" + c,
                    allowFullscreen: !0,
                    style: "border:0; opacity:0; margin:0; padding:0; position:relative;"
                });
                ln(this.l, c, "load", this.Kd, void 0);
                a.appendChild(c);
                this.o = c;
                this.D = Wp(this);
                this.B = b;
                this.g = this.B.h;
                this.w = this.A = null;
                this.l.h(this.D, "mouse", this.J);
                this.l.h(this.D, "touch", this.M);
                null != this.g && (this.l.h(this.D, "displayContainer", this.Rd), this.l.h(this.D, "videoDisplay", this.K), this.l.h(this.D, "preloadVideoDisplay", this.Td), this.l.h(this.g, qb(ap), this.Ca), this.l.h(this.g, nn, this.Ca));
                a = H();
                b = fa("google.ima.gptProxyInstance",
                    a);
                null == b && (b = new Sp, t("google.ima.gptProxyInstance", b, a))
            };
            x(Xp, P);
            var Wp = function(a, b) {
                    b = b || "*";
                    var c = a.F.get(b);
                    null == c && (c = new Jp(a.I, b), a.H && (c.ya = cd(a.o), c.connect()), a.F.set(b, c));
                    return c
                },
                Yp = function(a, b) {
                    null != a.g && (a.l.C(a.g, qb(ap), a.Ca), a.l.C(a.g, nn, a.Ca));
                    a.g = b;
                    a.l.h(a.g, qb(ap), a.Ca);
                    a.l.h(a.g, nn, a.Ca)
                };
            Xp.prototype.L = function() {
                this.l.O();
                null !== this.w && (this.w.O(), this.w = null);
                of(this.F.La(!1), function(a) {
                    a.O()
                });
                this.F.clear();
                ad(this.o);
                Xp.P.L.call(this)
            };
            Xp.prototype.J = function(a) {
                var b = a.U,
                    c = nd(this.o),
                    d = document.createEvent("MouseEvent");
                d.initMouseEvent(a.X, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
                if (!Sg || vn() || 0 == document.webkitIsFullScreen) this.o.blur(), window.focus();
                this.o.dispatchEvent(d)
            };
            var Zp = function(a, b) {
                var c = nd(a.o),
                    d = !!("TouchEvent" in window && 0 < TouchEvent.length);
                a = Ta(b, function(a) {
                    return d ? new Touch({
                        identifier: a.identifier,
                        target: this.o,
                        clientX: a.clientX,
                        clientY: a.clientY,
                        screenX: a.screenX,
                        screenY: a.screenY,
                        pageX: a.pageX + c.x,
                        pageY: a.pageY + c.y
                    }) : document.createTouch(window, this.o, a.identifier, a.pageX + c.x, a.pageY + c.y, a.screenX, a.screenY)
                }, a);
                return document.createTouchList.apply(document, a)
            };
            Xp.prototype.M = function(a) {
                var b = a.U,
                    c = nd(this.o);
                if ("TouchEvent" in window && 0 < TouchEvent.length) {
                    var d = {
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                        detail: b.detail,
                        ctrlKey: b.ctrlKey,
                        altKey: b.altKey,
                        shiftKey: b.shiftKey,
                        metaKey: b.metaKey,
                        touches: Zp(this, b.touches),
                        targetTouches: Zp(this, b.targetTouches),
                        changedTouches: Zp(this, b.changedTouches)
                    };
                    d = new TouchEvent(a.X, d);
                    this.o.dispatchEvent(d)
                } else d = document.createEvent("TouchEvent"), d.initTouchEvent(a.X, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x,
                    b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, Zp(this, b.touches), Zp(this, b.targetTouches), Zp(this, b.changedTouches), b.scale, b.rotation), this.o.dispatchEvent(d)
            };
            Xp.prototype.K = function(a) {
                if (null != this.g) {
                    var b = a.U;
                    switch (a.X) {
                        case "startTracking":
                            this.g.Sa();
                            break;
                        case "stopTracking":
                            this.g.ra();
                            break;
                        case "exitFullscreen":
                            this.g.wc();
                            break;
                        case "play":
                            this.g.wb();
                            break;
                        case "pause":
                            this.g.Kc();
                            break;
                        case "load":
                            this.g.load(b.videoUrl, b.mimeType);
                            break;
                        case "setCurrentTime":
                            this.g.lb(b.currentTime);
                            break;
                        case "setPlaybackOptions":
                            this.g.cc($p(b));
                            break;
                        case "setVolume":
                            this.g.xb(b.volume)
                    }
                }
            };
            var $p = function(a) {
                a = a.playbackOptions;
                return new Ap(a.adFormat, a.adSenseAgcid, a.ctaAnnotationTrackingEvents, a.showAnnotations, a.viewCountsDisabled, a.loadVideoTimeout, a.ibaDisabled, a.enablePreloading, a.adQemId, a.isPharma, a.useAutoplayFlag, a.endscreenAdTracking, a.waitForVastInfoCardsXml)
            };
            h = Xp.prototype;
            h.Td = function(a) {
                if (null != this.A) {
                    var b = a.U;
                    switch (a.X) {
                        case "startTracking":
                            this.A.Sa();
                            break;
                        case "stopTracking":
                            this.A.ra();
                            break;
                        case "setPlaybackOptions":
                            this.A.cc($p(b));
                            break;
                        case "load":
                            this.A.load(b.videoUrl, b.mimeType)
                    }
                }
            };
            h.Ca = function(a) {
                var b = {};
                switch (a.type) {
                    case "beginFullscreen":
                        a = "fullscreen";
                        break;
                    case "endFullscreen":
                        a = "exitFullscreen";
                        break;
                    case "click":
                        a = "click";
                        break;
                    case "end":
                        a = "end";
                        break;
                    case "error":
                        a = "error";
                        break;
                    case "loaded":
                        a = "loaded";
                        break;
                    case "mediaLoadTimeout":
                        a = "mediaLoadTimeout";
                        break;
                    case "pause":
                        a = "pause";
                        b.ended = this.g.zb();
                        break;
                    case "play":
                        a = "play";
                        break;
                    case "skip":
                        a = "skip";
                        break;
                    case "start":
                        a = "start";
                        break;
                    case "timeUpdate":
                        a = "timeupdate";
                        b.currentTime = this.g.Ba();
                        b.duration = this.g.gb();
                        break;
                    case "volumeChange":
                        a = "volumeChange";
                        b.volume = this.g.Ic();
                        break;
                    case "loadedmetadata":
                        a = a.type;
                        b.duration = this.g.gb();
                        break;
                    case "abort":
                    case "canplay":
                    case "canplaythrough":
                    case "durationchange":
                    case "emptied":
                    case "loadstart":
                    case "loadeddata":
                    case "progress":
                    case "ratechange":
                    case "seeked":
                    case "seeking":
                    case "stalled":
                    case "suspend":
                    case "waiting":
                        a = a.type;
                        break;
                    default:
                        return
                }
                Vn(this.D, "videoDisplay", a, b)
            };
            h.Rd = function(a) {
                switch (a.X) {
                    case "showVideo":
                        null != this.w ? this.w.ra() : (this.w = new Ro, this.l.h(this.w, "click", this.fg));
                        this.w.Sa(aq(this.B));
                        a = this.B;
                        null != a.g && a.g.show();
                        break;
                    case "hide":
                        null !== this.w && (this.w.O(), this.w = null);
                        a = this.B;
                        null != a.g && qp(a.g.g, !1);
                        break;
                    case "getPreloadDisplay":
                        null != this.g && null == this.A && (this.A = this.B.G);
                        break;
                    case "swapVideoDisplays":
                        if (null != this.g && null != this.A) {
                            this.l.C(this.g, qb(ap), this.Ca);
                            this.l.C(this.g, nn, this.Ca);
                            a = this.B;
                            if (a.g && a.h && a.o && a.G) {
                                var b =
                                    a.h;
                                a.h = a.G;
                                a.G = b;
                                b = a.g;
                                a.g = a.o;
                                a.o = b;
                                a.F && a.h instanceof bp && zp(a.F, a.h.g);
                                null != a.A && Yp(a.A, a.h)
                            }
                            this.g = this.B.h;
                            this.A = this.B.G;
                            this.l.h(this.g, qb(ap), this.Ca);
                            this.l.h(this.g, nn, this.Ca)
                        }
                }
            };
            h.fg = function() {
                Vn(this.D, "displayContainer", "videoClick")
            };
            h.Kd = function() {
                of(this.F.La(!1), function(a) {
                    a.ya = cd(this.o);
                    a.connect()
                }, this);
                this.H = !0
            };
            var cq = function(a, b, c, d, e) {
                if (!(e || null != a && bd(Rc(a), a))) throw Zm(Ym, null, "containerElement", "element");
                this.J = !1;
                this.B = a;
                var f = null != b || null != d;
                if (!f && M.g) throw Zm(Wm, null, "Custom video element was not provided even though the setting restrictToCustomPlayback is set to true.");
                Im(Fm(), 136961005) && (M.l = !0);
                this.N = bq(b ? b : null);
                var g = f;
                e = !1;
                if (M.l) {
                    M.g || Bn(this.N) && f || (g = !1);
                    if (f = !g) f = M.l && !M.la() && !0 && !M.ma() && (tn() || M.g);
                    f && (M.T = !0);
                    Cn() && (e = !0)
                } else M.g || Bn(this.N) && f || (Cn() && (e = !0), g = !1);
                this.D =
                    g;
                this.Z = (this.ha = e) || g && null != d;
                g = Yc("DIV", {
                    style: "position:absolute"
                });
                a.insertBefore(g, a.firstChild);
                this.l = g;
                this.g = !this.D && this.l && tn() ? new pp(this.l, null, !0) : null;
                g = a = null;
                this.D ? b ? (a = new bp(b), g = b) : d && (a = new Cp(d)) : this.g && (a = new bp(this.g.h), g = this.g.h);
                f = null;
                g && M.Za() && e && (f = new yp(g));
                this.F = f;
                this.h = a;
                this.G = this.o = null;
                e = Sb && !yn(4);
                a = un() && tn();
                (M.la() || this.g && this.h && this.l && !this.D && M.o && !yk() && !e && !a) && this.l && (this.o = new pp(this.l, null, !0), this.G = new bp(this.o.h));
                this.C = this.h ?
                    c || null : null;
                this.Y = null != this.C;
                Jn(Gn.getInstance(), 8, {
                    enabled: this.D,
                    yt: null != d,
                    customClick: null != this.C
                });
                null === this.l ? (b = this.B, M.w = b) : this.D && b ? v(b.getBoundingClientRect) || (b = this.B, M.w = b) : b = this.l;
                this.I = b;
                this.A = null != this.l ? new Xp(this.l, this) : null;
                this.H = new G(0, 0)
            };
            cq.prototype.T = function() {
                this.J = !0;
                if (null != this.g) {
                    var a = this.g;
                    a.h && (a = a.h, tn() && a.load())
                }
                null != this.o && (a = this.o, a.h && (a = a.h, tn() && a.load()))
            };
            cq.prototype.M = function() {
                J(this.g);
                J(this.o);
                J(this.A);
                J(this.h);
                J(this.G);
                J(this.F);
                ad(this.l)
            };
            var aq = function(a) {
                return a.Y && a.C ? a.C : null != a.g ? a.g.l : null
            };
            cq.prototype.w = function() {
                return this.D
            };
            cq.prototype.V = function() {
                return this.ha
            };
            cq.prototype.K = function() {
                return this.Z
            };
            cq.prototype.setSize = function(a, b) {
                var c = this.l;
                null != c && (-1 == a ? (c.style.right = "0", c.style.left = "0") : c.style.width = a + "px", -1 == b ? (c.style.bottom = "0", c.style.top = "0") : c.style.height = b + "px");
                null != this.A && (c = this.A, c.o.width = -1 == a ? "100%" : a, c.o.height = -1 == b ? "100%" : b);
                this.H = new G(a, b)
            };
            var bq = function(a) {
                return null != a && v(a.getAttribute) && null != a.getAttribute("playsinline") ? !0 : !1
            };
            var dq = Pb && "srcdoc" in document.createElement("iframe"),
                eq = Ob || Pb || D && E(11),
                fq = function(a, b) {
                    a.open("text/html", "replace");
                    a.write(b);
                    a.close()
                },
                kq = function(a, b) {
                    D && E(7) && !E(10) && 6 > gq() && hq(b) && (b = iq(b));
                    var c = function() {
                            a.contentWindow.goog_content = b;
                            a.contentWindow.location.replace("javascript:window.goog_content")
                        },
                        d;
                    if (d = D) {
                        try {
                            var e = rd(a.contentWindow)
                        } catch (f) {
                            e = !1
                        }
                        d = !e
                    }
                    d ? jq(a, c) : c()
                },
                gq = function() {
                    var a = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
                    return a ? parseFloat(a[1]) : 0
                },
                lq = 0,
                jq = function(a, b) {
                    var c = "goog_rendering_callback" + lq++;
                    m[c] = b;
                    a.src = "javascript:'<script>(function() {document.domain = \"" + document.domain + '";var continuation = window.parent.' + c + ";window.parent." + c + " = null;continuation();})()\x3c/script>'"
                },
                hq = function(a) {
                    for (var b = 0; b < a.length; ++b)
                        if (127 < a.charCodeAt(b)) return !0;
                    return !1
                },
                iq = function(a) {
                    a = unescape(encodeURIComponent(a));
                    for (var b = Math.floor(a.length / 2), c = [], d = 0; d < b; ++d) c[d] = String.fromCharCode(256 * a.charCodeAt(2 * d + 1) + a.charCodeAt(2 * d));
                    1 == a.length %
                        2 && (c[b] = a.charAt(a.length - 1));
                    return c.join("")
                };
            var mq = function(a, b) {
                this.o = a;
                this.l = null;
                this.D = "";
                this.F = 0;
                this.w = this.g = null;
                this.J = b;
                this.B = null;
                this.A = ""
            };
            x(mq, P);
            mq.prototype.I = function(a) {
                try {
                    var b = a.g.data;
                    try {
                        var c = Xe(b)
                    } catch (Mc) {
                        return
                    }
                    var d = c.session;
                    if (null != d && this.A == d) {
                        if ("friendlyReady" == c.type) {
                            var e = nq(this);
                            if ((Oj() || Nj()) && null != e) {
                                this.l = e;
                                this.D = e.currentSrc;
                                this.F = e.currentTime;
                                var f = this.o;
                                null != f.g && f.g.show()
                            } else {
                                var g = this.o.B,
                                    k = this.o.H;
                                var l = "border: 0; margin: 0; padding: 0; position: absolute; " + ("width:" + k.width + "px; ");
                                l += "height:" + k.height + "px;";
                                this.l = Yc("VIDEO", {
                                    style: l
                                });
                                null != nq(this) && r(nq(this).volume) && (this.l.volume = nq(this).volume);
                                g.appendChild(this.l)
                            }
                            var n = this.o.B;
                            a = "border: 0; margin: 0; padding: 0;position: absolute; ";
                            var u = this.l;
                            b: {
                                var z = Rc(u);
                                if (z.defaultView && z.defaultView.getComputedStyle) {
                                    var N = z.defaultView.getComputedStyle(u, null);
                                    if (N) {
                                        var Z = N.display || N.getPropertyValue("display") || "";
                                        break b
                                    }
                                }
                                Z = ""
                            }
                            if ("none" != (Z || (u.currentStyle ? u.currentStyle.display : null) || u.style && u.style.display)) var V = qd(u);
                            else {
                                var ea = u.style,
                                    Zb = ea.display,
                                    zc = ea.visibility,
                                    Id = ea.position;
                                ea.visibility = "hidden";
                                ea.position = "absolute";
                                ea.display =
                                    "inline";
                                var We = qd(u);
                                ea.display = Zb;
                                ea.position = Id;
                                ea.visibility = zc;
                                V = We
                            }
                            a += "width:" + V.width + "px; ";
                            a += "height:" + V.height + "px;";
                            this.w = Yc("DIV", {
                                style: a
                            });
                            n.appendChild(this.w);
                            try {
                                this.g.contentWindow.loader.initFriendly(this.l, this.w)
                            } catch (Mc) {
                                oq(this)
                            }
                        }
                        Vn(this.J, "vpaid", "", b)
                    }
                } catch (Mc) {
                    oq(this)
                }
            };
            var oq = function(a) {
                    var b = {
                        type: "error"
                    };
                    b.session = a.A;
                    a = ff(b);
                    window.postMessage(a, "*")
                },
                nq = function(a) {
                    a = a.o.h;
                    return a instanceof bp && a.g instanceof HTMLVideoElement ? a.g : null
                };
            mq.prototype.L = function() {
                P.P.L.call(this);
                J(this.H);
                this.H = null;
                ad(this.w);
                this.w = null;
                ad(this.g);
                this.g = null;
                var a = nq(this);
                (Oj() || Nj()) && null != a ? (a.src = this.D, a.currentTime = this.F, a = this.o, null != a.g && qp(a.g.g, !1)) : (ad(this.l), this.l = null)
            };
            var X = function(a, b, c, d, e, f) {
                P.call(this);
                this.g = a;
                this.T = b;
                this.Ta = d;
                this.w = null;
                this.ga = f;
                this.Z = !1;
                this.M = 1;
                this.Ma = c;
                this.oa = this.ia = this.ea = -1;
                this.B = this.o = null;
                this.I = new Wo;
                this.Ha = !1;
                this.$ = new pf;
                this.aa = this.ua = !1;
                this.A = this.l = this.F = null;
                this.ka = e && null != this.g.C;
                this.V = w(this.Pd, this);
                this.K = new W(this);
                this.K.h(this.ga, "adsManager", this.bb)
            };
            x(X, P);
            X.prototype.bb = function(a) {
                switch (a.X) {
                    case "error":
                        pq(this, a.U);
                        break;
                    case "contentPauseRequested":
                        var b = this.g.h;
                        this.g.w() && null != this.w && this.w.restoreCustomPlaybackStateOnAdBreakComplete && null != b.ed && b.ed();
                        this.D(a.X, a.U);
                        break;
                    case "contentResumeRequested":
                        a = w(X.prototype.D, this, a.X, a.U);
                        b = this.g.h;
                        this.g.w() && null != this.w && this.w.restoreCustomPlaybackStateOnAdBreakComplete && null != b.cd ? b.cd(a) : a();
                        break;
                    case "remainingTime":
                        b = a.U;
                        this.ea = b.currentTime;
                        this.ia = b.duration;
                        this.oa = b.remainingTime;
                        break;
                    case "skip":
                        this.D(a.X, a.U);
                        break;
                    case "log":
                        var b = a.U,
                            c = b.adData;
                        this.D(a.X, c, b.logData);
                        break;
                    case "companionBackfill":
                        a = fa("window.google_show_companion_ad");
                        null != a && a();
                        break;
                    case "skipshown":
                        this.Z = !0;
                        this.D(a.X, a.U);
                        break;
                    case "interaction":
                        b = a.U;
                        c = b.adData;
                        this.D(a.X, c, b.interactionData);
                        break;
                    case "vpaidEvent":
                        try {
                            var d = a.U;
                            switch (d.vpaidEventType) {
                                case "createFriendlyIframe":
                                    b = this.F = new mq(this.g, this.ga);
                                    b.A = d.session;
                                    a = "about:self";
                                    D && (a = "");
                                    b.g = Yc("IFRAME", {
                                        src: a,
                                        allowtransparency: !0,
                                        background: "transparent"
                                    });
                                    c = b.g;
                                    a = {
                                        display: "none",
                                        width: "0",
                                        height: "0"
                                    };
                                    if (q(a)) {
                                        var e = hd(c, a);
                                        e && (c.style[e] = void 0)
                                    } else
                                        for (var f in a) {
                                            var e = c,
                                                g = a[f],
                                                k = hd(e, f);
                                            k && (e.style[k] = g)
                                        }
                                    var l = b.o.B;
                                    l.appendChild(b.g);
                                    var n = l.ownerDocument,
                                        u = n.defaultView || n.parentWindow;
                                    null == b.B && (b.B = new W(b));
                                    b.B.h(u, "message", b.I);
                                    // var z = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>' + ('loader = new VPAIDLoader(false, "' + b.A + '");') + "\x3c/script></body>";
                                    var z = '<body><script src="../assets/loader.js">\x3c/script><script>' + ('loader = new VPAIDLoader(false, "' + b.A + '");') + "\x3c/script></body>";
                                    if (Rg || Ng || Lb) {
                                        var N =
                                            b.g;
                                        eq ? fq(N.contentWindow.document, z) : kq(N, z)
                                    } else {
                                        var Z = b.g;
                                        dq ? Z.srcdoc = z : eq ? fq(Z.contentWindow.document, z) : kq(Z, z)
                                    }
                                    break;
                                case "destroyFriendlyIframe":
                                    null != this.F && (this.F.O(), this.F = null)
                            }
                        } catch (V) {
                            pq(this, V.U)
                        }
                        break;
                    case "skippableStateChanged":
                        b = a.U;
                        c = b.adData;
                        null != c.skippable && (this.Z = c.skippable);
                        this.D(a.X, a.U);
                        break;
                    case "initInsecureFlashVpaid":
                        this.o = a = null != a.U.adData ? new U(a.U.adData) : null;
                        a = a.Ec();
                        this.A = Yc("DIV", {
                            style: "position:absolute;visibility:visible;width:100%;height:100%;top:0;left:0;"
                        });
                        this.g.B.appendChild(this.A);
                        this.l = new Oo(this.A);
                        this.K.h(this.l, "loadError", this.Pb);
                        this.K.h(this.l, "vpaidEventType", this.na);
                        b = null != this.w ? this.w.loadVideoTimeout : Eo();
                        this.l.load(a, this.g.H.width, this.g.H.height, b);
                        break;
                    case "destroyInsecureFlashVpaid":
                        null !== this.l && (this.l.O(), this.l = null);
                        null !== this.A && ($c(this.A), this.A = null);
                        break;
                    case "callFlashVpaidMethod":
                        if (null !== this.l) {
                            b = [];
                            c = a.U.methodData;
                            a = c.methodName;
                            c = c.args;
                            b.push(a);
                            for (f = 0; f < c.length; f++) b.push(c[f]);
                            (b = this.l.Kb.apply(this.l,
                                b)) && this.na(new No("flashVpaidMethodResults", {
                                methodName: a,
                                result: b
                            }))
                        }
                        break;
                    case "cacheAbandonUrls":
                        break;
                    case "volumeChange":
                        b = a.U;
                        c = b.adData;
                        null != c && r(c.volume) && (this.M = c.volume);
                        this.D(a.X, a.U);
                        break;
                    default:
                        this.D(a.X, a.U)
                }
            };
            X.prototype.Pb = function() {
                this.na(new No("AdError", {
                    message: "Flash VPAID loader failed to load."
                }))
            };
            X.prototype.na = function(a) {
                var b = a.g;
                a = a.data;
                "flashReady" == b ? (this.l.Kb("handshakeVersion", "2.0"), this.l.Kb("initAd", this.g.H.width, this.g.H.height, "normal", -2, this.o.Fc())) : qq(this, "onFlashVpaidEvent", {
                    eventType: b,
                    data: a
                })
            };
            X.prototype.D = function(a, b, c) {
                if (null == b.companions) {
                    var d = this.$.get(b.adId);
                    b.companions = null != d ? d : []
                }
                this.o = d = null != b.adData ? new U(b.adData) : null;
                switch (a) {
                    case "adBreakReady":
                    case "trackingUrlPinged":
                    case "mediaUrlPinged":
                        a = new L(a, null, b);
                        break;
                    case "adMetadata":
                        a = null;
                        null != b.adCuePoints && (a = new Ao(b.adCuePoints));
                        a = new Do(d, a);
                        break;
                    case "allAdsCompleted":
                        this.o = null;
                        this.ua = !0;
                        a = new L(a, d);
                        break;
                    case "contentPauseRequested":
                        this.aa = !1;
                        a = new L(a, d);
                        break;
                    case "contentResumeRequested":
                        this.o =
                            null;
                        this.aa = !0;
                        a = new L(a, d);
                        break;
                    case "loaded":
                        this.ea = 0;
                        this.ia = d.Qb();
                        this.oa = d.Qb();
                        c = Mn();
                        var e = this.V,
                            f = this.Ta,
                            g = ol.getInstance();
                        c.l.set(hn(d), e);
                        c.D && c.o && (R.getInstance().l = !0, g.h = c.o);
                        c.B && Sn(c, "loaded", hn(d), f);
                        a = new L(a, d, b.adData);
                        break;
                    case "start":
                        this.$.set(b.adId, b.companions);
                        null != aq(this.g) && (null != this.B ? this.B.ra() : (this.B = new Ro, this.K.h(this.B, "click", this.Zf)), this.B.Sa(aq(this.g)));
                        a = new L(a, d);
                        break;
                    case "complete":
                        null != this.B && this.B.ra();
                        Un(Mn(), this.V, hn(d));
                        this.o =
                            null;
                        this.$.Va(b.adId);
                        a = new L(a, d);
                        break;
                    case "log":
                        b = null;
                        null != c && null != c.type ? (e = c.type, e = "adLoadError" == e || "adPlayError" == e) : e = !1;
                        e && (b = {
                            adError: rq(c)
                        });
                        a = new L(a, d, b);
                        break;
                    case "interaction":
                        a = new L(a, d, c);
                        break;
                    case "urlNavigationRequested":
                        a = new L(a, d, b.urlNavigationData);
                        break;
                    default:
                        a = new L(a, d)
                }
                Q(this, a);
                this.ua && this.aa && this.Gc()
            };
            var pq = function(a, b) {
                    var c = new Pe(rq(b));
                    a.Ha ? (Q(a, c), a.o && Un(Mn(), a.V, hn(a.o)), a.o = null) : a.I.h.push(c);
                    a = {
                        error: b.errorCode,
                        vis: gh(document)
                    };
                    Jn(Gn.getInstance(), 7, a, !0)
                },
                rq = function(a) {
                    var b = new Le(a.type, a.errorMessage, a.errorCode);
                    null != a.innerError && (b.g = Error(a.innerError));
                    return b
                },
                qq = function(a, b, c) {
                    Vn(a.ga, "adsManager", b, c)
                };
            h = X.prototype;
            h.Vc = function() {
                qq(this, "contentTimeUpdate", {
                    currentTime: this.H.currentTime
                })
            };
            h.df = function(a, b, c, d) {
                if (this.I.isEmpty()) {
                    var e = this.g;
                    null != d && (Jn(Gn.getInstance(), 54, {}, !0), e.N = bq(d), M.g || Bn(e.N) ? (e.D = !0, J(e.g), J(e.o), J(e.G), e.g = null, e.o = null, e.G = null, J(e.h), e.h = new bp(d), null !== e.l && (v(d.getBoundingClientRect) ? e.I = d : (e.I = e.B, M.w = e.I)), null != e.A && Yp(e.A, e.h), e.F && zp(e.F, d)) : e.D = !1);
                    this.Ha = !0;
                    this.Hc(a, b, c);
                    qq(this, "init", {
                        width: a,
                        height: b,
                        viewMode: c
                    })
                } else {
                    for (; !this.I.isEmpty();) b = a = this.I, 0 == b.g.length && (b.g = b.h, b.g.reverse(), b.h = []), a = a.g.pop(), Q(this, a);
                    this.O()
                }
            };
            h.Rf = function() {
                return this.g.w()
            };
            h.Qf = function() {
                return this.ka
            };
            h.bf = function() {
                return this.oa
            };
            h.Ze = function() {
                return this.Z
            };
            h.Hd = function() {
                qq(this, "discardAdBreak")
            };
            h.jg = function() {
                qq(this, "requestNextAdBreak")
            };
            h.kf = function(a) {
                null != a && (this.w = a, qq(this, "updateAdsRenderingSettings", {
                    adsRenderingSettings: sq(this)
                }))
            };
            h.Pd = function() {
                var a = null != this.o ? this.o.g.vpaid : !1,
                    b = this.g.h,
                    c = null != b ? b.Ba() : this.ea,
                    d = null != b ? b.gb() : this.ia;
                return {
                    currentTime: c,
                    duration: d,
                    isPlaying: null != b ? b.Pc() : !1,
                    isVpaid: a,
                    isYouTube: M.ma(),
                    volume: this.M
                }
            };
            h.hf = function() {
                qq(this, "skip")
            };
            h.start = function() {
                if (this.T && !M.la()) {
                    !un() || M.ma() || Jn(Gn.getInstance(), 50, {
                        customPlayback: this.g.w()
                    });
                    tn() && !this.g.J && Jn(Gn.getInstance(), 26, {
                        adtagurl: this.T,
                        customPlayback: this.g.w()
                    });
                    Sh(this.g.l) && Jn(Gn.getInstance(), 30, {
                        adtagurl: this.T,
                        customPlayback: this.g.w()
                    });
                    var a = this.g.C,
                        b = this.g.l,
                        c;
                    if (c = a && b && !Sh(a)) a = Qn(a), b = Qn(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
                    c && Jn(Gn.getInstance(), 31, {
                        adtagurl: this.T,
                        customPlayback: this.g.w()
                    })
                }
                if (tn() && !this.g.J && !this.g.w()) throw Zm(Xm);
                b = this.g;
                b.Y = this.ka && null != b.C;
                this.g.A.o.style.opacity = 1;
                null != this.H && 1 == this.M && ("boolean" == typeof this.H.muted && this.H.muted ? this.Rb(0) : r(this.H.volume) && (b = this.H.volume, 0 <= b && 1 >= b && this.Rb(this.H.volume)));
                qq(this, "start")
            };
            h.Zf = function() {
                if ((null == this.w || !this.w.disableClickThrough) && null != this.o) {
                    var a = this.o.g.clickThroughUrl;
                    null != a && (wa(Ja(a)) || window.open(a, "_blank"))
                }
            };
            h.Hc = function(a, b, c) {
                if (null !== this.l) {
                    var d = this.l;
                    d.g && d.g.setSize(a, b);
                    pd(this.A, a, b)
                }
                this.g.setSize(a, b);
                qq(this, "resize", {
                    width: a,
                    height: b,
                    viewMode: c
                })
            };
            h.jf = function() {
                qq(this, "stop")
            };
            h.Ye = function() {
                qq(this, "expand")
            };
            h.Xe = function() {
                qq(this, "collapse")
            };
            h.cf = function() {
                return this.M
            };
            h.Rb = function(a) {
                this.M = a;
                if (!M.la()) {
                    var b = this.g.h;
                    null != b && b.xb(a)
                }
                qq(this, "volume", {
                    volume: a
                })
            };
            h.ff = function() {
                qq(this, "pause")
            };
            h.gf = function() {
                qq(this, "resume")
            };
            h.Gc = function() {
                null != this.F && (this.F.O(), this.F = null);
                null !== this.l && (this.l.O(), this.l = null);
                null !== this.A && ($c(this.A), this.A = null);
                this.O()
            };
            h.$e = function() {
                return this.Ma
            };
            h.af = function() {
                return this.o
            };
            h.L = function() {
                qq(this, "destroy");
                null != this.B && this.B.O();
                this.K.O();
                this.I.clear();
                this.J && (Kg(this.J.g), this.J.O());
                Un(Mn(), this.V);
                X.P.L.call(this)
            };
            var sq = function(a) {
                var b = {};
                null != a.w && Bb(b, a.w);
                a.ka && (M.ma() ? b.useVideoAdUi = !1 : b.useClickElement = !1, b.disableClickThrough = !0);
                return b
            };
            var tq = function(a, b, c) {
                K.call(this, "adsManagerLoaded");
                this.g = a;
                this.A = b;
                this.F = c || ""
            };
            x(tq, K);
            tq.prototype.G = function(a, b) {
                var c = this.g;
                c.H = a;
                null != b && (c.w = b);
                null != a.currentTime && (c.J = new Co(a), c.J.h("currentTimeUpdate", c.Vc, !1, c), c.J.start(), c.Vc());
                qq(c, "configure", {
                    adsRenderingSettings: sq(c)
                });
                return this.g
            };
            tq.prototype.D = function() {
                return this.A
            };
            tq.prototype.B = function() {
                return this.F
            };
            var uq;
            if (uq = !ob(function(a) {
                    return a.match(H().location.href)
                })) {
                var vq = document;
                uq = null == Xa(vq.querySelectorAll && vq.querySelector ? vq.querySelectorAll("SCRIPT") : vq.getElementsByTagName("SCRIPT"), function(a) {
                    return ob(function(b) {
                        return b.match(a.src)
                    })
                })
            }
            if (uq) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
            var wq = function(a) {
                P.call(this);
                this.g = a;
                this.w = new pf;
                this.l = this.g.A;
                this.A = new W(this);
                this.l && (a = Mn(), Pn(a, Wp(this.l)), this.o = Tn(a, this.g.I));
                a: {
                    try {
                        var b = window.top.location.href
                    } catch (c) {
                        b = 2;
                        break a
                    }
                    b = null != b ? b == window.document.location.href ? 0 : 1 : 2
                }
                En.l = b
            };
            x(wq, P);
            h = wq.prototype;
            h.L = function() {
                this.A.O();
                Mn().A.Va(this.o);
                wq.P.L.call(this)
            };
            h.Of = function() {
                this.O()
            };
            h.Pf = function(a, b) {
                a.adTagUrl && Jn(Gn.getInstance(), 8, {
                    adtagurl: a.adTagUrl,
                    customPlayback: this.g.w(),
                    customClick: null != this.g.C,
                    restrict: M.g
                });
                var c = "",
                    d = Xd(),
                    e = d.h,
                    f = d.g;
                e && e.url ? c = e.url : f && f.url && (c = f.url);
                a.location = c;
                a.referrer = window.document.referrer;
                a.supportsYouTubeHosted = this.g.K();
                var g = a.adTagUrl,
                    k = this.g.B,
                    l = [],
                    n = "",
                    u = "";
                if (null != k) {
                    for (var z = k, N = [], Z = 0; z && 25 > Z; ++Z) {
                        a: {
                            if (z && z.nodeName && z.parentElement)
                                for (var V = z.nodeName.toString().toLowerCase(), ea = z.parentElement.childNodes, Zb = 0, zc =
                                        0; zc < ea.length; ++zc) {
                                    var Id = ea[zc];
                                    if (Id.nodeName && Id.nodeName.toString().toLowerCase() === V) {
                                        if (z === Id) {
                                            var We = "." + Zb;
                                            break a
                                        }++Zb
                                    }
                                }
                            We = ""
                        }
                        N.push((z.nodeName && z.nodeName.toString().toLowerCase()) + "" + We);
                        z = z.parentElement
                    }
                    n = N.join();
                    if (k) {
                        var Mc = k.ownerDocument,
                            Nc = Mc && (Mc.defaultView || Mc.parentWindow) || null,
                            zl = [];
                        if (Nc) try {
                            for (var Jd = Nc.parent, Al = 0; Jd && Jd !== Nc && 25 > Al; ++Al) {
                                for (var Bl = Jd.frames, Ye = 0; Ye < Bl.length; ++Ye)
                                    if (Nc === Bl[Ye]) {
                                        zl.push(Ye);
                                        break
                                    }
                                Nc = Jd;
                                Jd = Nc.parent
                            }
                        } catch (xq) {}
                        u = zl.join()
                    } else u =
                        ""
                }
                l.push(n, u);
                if (null != g) {
                    for (var uh = 0; uh < Ke.length - 1; ++uh) l.push(Td(g, Ke[uh]) || "");
                    var Cl = Td(g, "videoad_start_delay"),
                        Dl = "";
                    if (Cl) var El = parseInt(Cl, 10),
                        Dl = 0 > El ? "postroll" : 0 == El ? "preroll" : "midroll";
                    l.push(Dl)
                } else
                    for (var Fl = 0; Fl < Ke.length; ++Fl) l.push("");
                var Gl = l.join(":"),
                    Hl = Gl.length;
                if (0 == Hl) var Il = 0;
                else {
                    for (var Oc = 305419896, vh = 0; vh < Hl; vh++) Oc ^= (Oc << 5) + (Oc >> 2) + Gl.charCodeAt(vh) & 4294967295;
                    Il = 0 < Oc ? Oc : 4294967296 + Oc
                }
                a.videoAdKey = Il.toString();
                var Jl = a.adTagUrl;
                if (null != Jl && "ca-pub-6219811747049371" !=
                    Td(Jl, "client")) var Kl = null;
                else {
                    var Ll = fa("window.yt.util.activity.getTimeSinceActive");
                    Kl = null != Ll ? Ll().toString() : null
                }
                var Ml = Kl;
                null != Ml && (a.lastActivity = Ml);
                var Nl = a.adTagUrl;
                if (null == Nl) var Ol = !1;
                else {
                    var Pl = new tf(Nl),
                        Ql = Pl.C,
                        Rl = Pl.g,
                        wh = Rl.length - 27;
                    Ol = 0 <= wh && Rl.indexOf("googleads.g.doubleclick.net", wh) == wh && (wa(Ja(Ql)) ? !1 : /\/pagead\/(live\/)?ads/.test(Ql))
                }
                if (Ol) {
                    var ub = window,
                        la = Gd().document,
                        La = {};
                    var jb = Ae(ub).lc;
                    var Kd = jb.location.href;
                    if (jb == jb.top) var Sl = {
                        url: Kd,
                        Qc: !0
                    };
                    else {
                        var xh = !1,
                            yh = jb.document;
                        yh && yh.referrer && (Kd = yh.referrer, jb.parent == jb.top && (xh = !0));
                        var zh = jb.location.ancestorOrigins;
                        if (zh) {
                            var Ah = zh[zh.length - 1];
                            Ah && -1 == Kd.indexOf(Ah) && (xh = !1, Kd = Ah)
                        }
                        Sl = {
                            url: Kd,
                            Qc: xh
                        }
                    }
                    var yq = Sl;
                    a: {
                        var Mb = Gd(),
                            Tl = ub.o || Mb.o,
                            Ul = ub.l || Mb.l;
                        if (Mb && Mb.top == Mb) var Bh = !1;
                        else {
                            var Ze = la.documentElement;
                            if (Tl && Ul) {
                                var $e = 1,
                                    af = 1;
                                Mb.innerHeight ? ($e = Mb.innerWidth, af = Mb.innerHeight) : Ze && Ze.clientHeight ? ($e = Ze.clientWidth, af = Ze.clientHeight) : la.body && ($e = la.body.clientWidth, af = la.body.clientHeight);
                                if (af > 2 * Ul || $e > 2 * Tl) {
                                    Bh = !1;
                                    break a
                                }
                            }
                            Bh = !0
                        }
                    }
                    var Nb = Bh;
                    var zq = yq.Qc,
                        Ch = Gd(),
                        bf = Ch.top == Ch ? 0 : rd(Ch.top) ? 1 : 2,
                        Pc = 4;
                    Nb || 1 != bf ? Nb || 2 != bf ? Nb && 1 == bf ? Pc = 7 : Nb && 2 == bf && (Pc = 8) : Pc = 6 : Pc = 5;
                    zq && (Pc |= 16);
                    var Dh = !!ub.g;
                    La.iframing = "" + Pc;
                    if (!Dh && "ad.yieldmanager.com" == la.domain) {
                        for (var Ld = la.URL.substring(la.URL.lastIndexOf("http")); - 1 < Ld.indexOf("%");) try {
                            Ld = decodeURIComponent(Ld)
                        } catch (xq) {
                            break
                        }
                        ub.g = Ld;
                        Dh = !!Ld
                    }
                    Je || (Je = he());
                    var cf = Je;
                    var Vl = cf.g.hasOwnProperty(92) ? cf.g[92] : "";
                    Dh ? (La.page_url = ub.g, La.page_location =
                        (Nb ? la.referrer : la.URL) || "EMPTY") : Vl && Nb && rd(ub.top) && la.referrer && ub.top.document.referrer === la.referrer ? "21060298" === Vl ? (La.page_url = ub.top.document.URL, La.page_location = null, cf.h["21060300"] = !0) : (cf.h["21060299"] = !0, La.page_url = Nb ? la.referrer : la.URL, La.page_location = null) : (La.page_url = Nb ? la.referrer : la.URL, La.page_location = null);
                    La.last_modified_time = la.URL == La.page_url ? Date.parse(la.lastModified) / 1E3 : null;
                    if (jb == jb.top) var Wl = jb.document.referrer;
                    else {
                        var Xl = Cd();
                        Wl = (Xl ? Xl.referrer : null) || ""
                    }
                    La.referrer_url =
                        Wl;
                    a.adSenseParams = La
                }
                var Yl = "goog_" + Na++;
                this.w.set(Yl, b || null);
                var Md = {};
                Bb(Md, a);
                var Aq = this.W().o,
                    Bq = this.W().A,
                    Cq = this.W().J,
                    Dq = this.W().h,
                    Eq = this.W().G,
                    Fq = this.W().ng(),
                    Gq = this.W().la(),
                    Hq = this.W().Nc() || !1,
                    Iq = this.W().Vb(),
                    Jq = this.W().Wb(),
                    Kq = this.W().ma(),
                    Lq = this.W().F,
                    Mq = this.W().B,
                    Nq = this.W().H,
                    Oq = this.W().Y,
                    Pq = this.W().ig(),
                    Qq = Mn();
                Md.settings = {
                    autoPlayAdBreaks: Aq,
                    chromelessPlayer: !0,
                    companionBackfill: Bq,
                    pageCorrelator: Cq,
                    disableCustomPlaybackForIOS10Plus: Dq,
                    disableFlashAds: Eq,
                    enableTrvBillOnClick: !0,
                    engagementDetection: !0,
                    unloadAbandonPingEnabled: Fq,
                    cacheAbandonUrls: !1,
                    isAdMob: Gq,
                    isInChina: Hq,
                    isFunctionalTest: Iq,
                    isVpaidAdapter: Jq,
                    isYouTube: Kq,
                    numRedirects: Lq,
                    onScreenDetection: !0,
                    playbackQualityWindowMinimumLength: 3E3,
                    playerType: Mq,
                    playerVersion: Nq,
                    ppid: Oq,
                    preSkipFx: "",
                    reportMediaRequests: Pq,
                    activeViewPushUpdates: Qq.B,
                    restrictToCustomPlayback: this.W().g,
                    streamCorrelator: this.W().M,
                    urlSignals: this.W().V,
                    useCompanionsAsEndSlate: !1,
                    usePlaybackQualityWindow: this.W().og(),
                    vpaidMode: this.W().I,
                    useChromelessRemoteMode: this.W().Za(),
                    useRefactoredDelayLearnMore: !1,
                    useFixedDirectionality: !1,
                    remoteYtExperiment: this.W().l,
                    testingConfig: Re(this.W()).g
                };
                var Zl = this.g.h,
                    Rq = null != this.g.C,
                    Sq = En.l,
                    Tq = this.o,
                    Uq = null != Zl ? Zl.zc() : null,
                    Vq = this.g.V(),
                    Wq = this.g.w(),
                    Xq = this.g.K(),
                    $l = this.g;
                Md.videoEnvironment = {
                    customClickTrackingProvided: Rq,
                    iframeState: Sq,
                    osdId: Tq,
                    supportedMimeTypes: Uq,
                    usesChromelessPlayer: Vq,
                    usesCustomVideoPlayback: Wq,
                    usesYouTubePlayer: Xq,
                    usesInlinePlayback: this.g.N,
                    youTubeRendererId: $l.F ? $l.F.A : 0
                };
                Md.experimentState = Hm();
                var am = Wp(this.l, Yl);
                this.A.h(am, "adsLoader", this.Qd);
                Vn(am, "adsLoader", "requestAds", Md)
            };
            h.W = function() {
                return M
            };
            h.Nf = function() {
                Vn(Wp(this.l), "adsLoader", "contentComplete")
            };
            h.Qd = function(a) {
                var b = a.X;
                switch (b) {
                    case "adsLoaded":
                        b = a.U;
                        a = a.vb;
                        var c = new X(this.g, b.adTagUrl || "", b.adCuePoints, this.o, b.isCustomClickTrackingAllowed, Wp(this.l, a));
                        Q(this, new tq(c, this.w.get(a), b.response));
                        break;
                    case "error":
                        b = a.U;
                        a = a.vb;
                        c = new Le(b.type, b.errorMessage, b.errorCode);
                        null != b.innerError && (c.g = Error(b.innerError));
                        Q(this, new Pe(c, this.w.get(a)));
                        a = {
                            error: b.errorCode,
                            vis: gh(document)
                        };
                        Jn(Gn.getInstance(), 7, a, !0);
                        break;
                    case "trackingUrlPinged":
                        Q(this, new L(b, null, a.U))
                }
            };
            var Y = function() {};
            h = Y.prototype;
            h.clone = function() {
                var a = new Y;
                "auto" == this.videoPlayActivation ? a.ac(!0) : "click" == this.videoPlayActivation && a.ac(!1);
                a.adTagUrl = this.adTagUrl;
                a.adSenseParams = zb(this.adSenseParams);
                a.adsResponse = this.adsResponse;
                a.tc = this.tc;
                a.contentDuration = this.contentDuration;
                a.contentKeywords = this.contentKeywords ? cb(this.contentKeywords) : null;
                a.contentTitle = this.contentTitle;
                a.customMacros = zb(this.customMacros);
                a.g = this.g;
                a.location = this.location;
                a.referrer = this.referrer;
                a.lastActivity = this.lastActivity;
                a.language =
                    this.language;
                a.linearAdSlotWidth = this.linearAdSlotWidth;
                a.linearAdSlotHeight = this.linearAdSlotHeight;
                a.nonLinearAdSlotWidth = this.nonLinearAdSlotWidth;
                a.nonLinearAdSlotHeight = this.nonLinearAdSlotHeight;
                a.videoAdKey = this.videoAdKey;
                a.tagForChildDirectedContent = this.tagForChildDirectedContent;
                a.usePostAdRequests = this.usePostAdRequests;
                a.supportsYouTubeHosted = this.supportsYouTubeHosted;
                a.youTubeAdType = this.youTubeAdType;
                a.youTubeVideoAdStartTime = this.youTubeVideoAdStartTime;
                a.vc = this.vc;
                a.sc = this.sc;
                a.l = this.l;
                a.h = this.h;
                a.forceNonLinearFullSlot = this.forceNonLinearFullSlot;
                a.md = this.md;
                a.liveStreamPrefetchSeconds = this.liveStreamPrefetchSeconds;
                a.Mc = this.Mc;
                a.kc = this.kc;
                a.Hb = this.Hb ? this.Hb.clone() : null;
                return a
            };
            h.adSenseParams = null;
            h.tc = null;
            h.customMacros = null;
            h.videoPlayActivation = "unknown";
            h.liveStreamPrefetchSeconds = 0;
            h.linearAdSlotWidth = 0;
            h.linearAdSlotHeight = 0;
            h.nonLinearAdSlotWidth = 0;
            h.nonLinearAdSlotHeight = 0;
            h.forceNonLinearFullSlot = !1;
            h.videoAdKey = null;
            h.tagForChildDirectedContent = !1;
            h.usePostAdRequests = !1;
            h.supportsYouTubeHosted = !0;
            h.md = new function() {};
            h.youTubeVideoAdStartTime = 0;
            h.vc = null;
            h.sc = !1;
            h.ac = function(a) {
                this.videoPlayActivation = a ? "auto" : "click"
            };
            h.Mc = !0;
            h.kc = 5E3;
            h.Hb = null;
            U.prototype.getCompanionAds = U.prototype.Fe;
            U.prototype.isLinear = U.prototype.Ve;
            U.prototype.isSkippable = U.prototype.We;
            U.prototype.getAdId = U.prototype.h;
            U.prototype.getAdSystem = U.prototype.Ce;
            U.prototype.getAdvertiserName = U.prototype.De;
            U.prototype.getApiFramework = U.prototype.Ee;
            U.prototype.getContentType = U.prototype.Ge;
            U.prototype.getCreativeId = U.prototype.o;
            U.prototype.getCreativeAdId = U.prototype.l;
            U.prototype.getDescription = U.prototype.Ld;
            U.prototype.getTitle = U.prototype.Nd;
            U.prototype.getDuration = U.prototype.Qb;
            U.prototype.getHeight = U.prototype.Ie;
            U.prototype.getWidth = U.prototype.Re;
            U.prototype.getVastMediaHeight = U.prototype.Pe;
            U.prototype.getVastMediaWidth = U.prototype.Qe;
            U.prototype.getWrapperCreativeIds = U.prototype.Ue;
            U.prototype.getWrapperAdIds = U.prototype.Se;
            U.prototype.getWrapperAdSystems = U.prototype.Te;
            U.prototype.getTraffickingParameters = U.prototype.Le;
            U.prototype.getTraffickingParametersString = U.prototype.Fc;
            U.prototype.getAdPodInfo = U.prototype.Be;
            U.prototype.getUiElements = U.prototype.Me;
            U.prototype.getMinSuggestedDuration = U.prototype.Je;
            U.prototype.getMediaUrl = U.prototype.Ec;
            U.prototype.getSurveyUrl = U.prototype.Ke;
            U.prototype.getDealId = U.prototype.He;
            U.prototype.getUniversalAdIdValue = U.prototype.Oe;
            U.prototype.getUniversalAdIdRegistry = U.prototype.Ne;
            Ao.prototype.getCuePoints = Ao.prototype.g;
            t("google.ima.AdCuePoints.PREROLL", 0, window);
            t("google.ima.AdCuePoints.POSTROLL", -1, window);
            t("google.ima.AdDisplayContainer", cq, window);
            cq.prototype.initialize = cq.prototype.T;
            cq.prototype.destroy = cq.prototype.M;
            fn.prototype.getPodIndex = fn.prototype.ye;
            fn.prototype.getTimeOffset = fn.prototype.ze;
            fn.prototype.getTotalAds = fn.prototype.Ae;
            fn.prototype.getMaxDuration = fn.prototype.xe;
            fn.prototype.getAdPosition = fn.prototype.ve;
            fn.prototype.getIsBumper = fn.prototype.we;
            t("google.ima.AdError.ErrorCode.VIDEO_PLAY_ERROR", 400, window);
            t("google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS", 1005, window);
            t("google.ima.AdError.ErrorCode.REQUIRED_LISTENERS_NOT_ADDED", 900, window);
            t("google.ima.AdError.ErrorCode.VAST_LOAD_TIMEOUT", 301, window);
            t("google.ima.AdError.ErrorCode.VAST_NO_ADS_AFTER_WRAPPER", 303, window);
            t("google.ima.AdError.ErrorCode.VAST_MEDIA_LOAD_TIMEOUT", 402, window);
            t("google.ima.AdError.ErrorCode.VAST_TOO_MANY_REDIRECTS", 302, window);
            t("google.ima.AdError.ErrorCode.VAST_ASSET_MISMATCH", 403, window);
            t("google.ima.AdError.ErrorCode.VAST_LINEAR_ASSET_MISMATCH", 403, window);
            t("google.ima.AdError.ErrorCode.VAST_NONLINEAR_ASSET_MISMATCH", 503, window);
            t("google.ima.AdError.ErrorCode.VAST_ASSET_NOT_FOUND", 1007, window);
            t("google.ima.AdError.ErrorCode.VAST_UNSUPPORTED_VERSION", 102, window);
            t("google.ima.AdError.ErrorCode.VAST_SCHEMA_VALIDATION_ERROR", 101, window);
            t("google.ima.AdError.ErrorCode.VAST_TRAFFICKING_ERROR", 200, window);
            t("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_LINEARITY", 201, window);
            t("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_DURATION_ERROR", 202, window);
            t("google.ima.AdError.ErrorCode.VAST_WRAPPER_ERROR", 300, window);
            t("google.ima.AdError.ErrorCode.NONLINEAR_DIMENSIONS_ERROR", 501, window);
            t("google.ima.AdError.ErrorCode.COMPANION_REQUIRED_ERROR", 602, window);
            t("google.ima.AdError.ErrorCode.VAST_EMPTY_RESPONSE", 1009, window);
            t("google.ima.AdError.ErrorCode.UNSUPPORTED_LOCALE", 1011, window);
            t("google.ima.AdError.ErrorCode.INVALID_ADX_EXTENSION", 1105, window);
            t("google.ima.AdError.ErrorCode.INVALID_ARGUMENTS", 1101, window);
            t("google.ima.AdError.ErrorCode.UNKNOWN_AD_RESPONSE", 1010, window);
            t("google.ima.AdError.ErrorCode.UNKNOWN_ERROR", 900, window);
            t("google.ima.AdError.ErrorCode.OVERLAY_AD_PLAYING_FAILED", 500, window);
            t("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
            t("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
            t("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
            t("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
            t("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
            t("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
            t("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
            t("google.ima.AdError.Type.AD_LOAD", "adLoadError", window);
            t("google.ima.AdError.Type.AD_PLAY", "adPlayError", window);
            Le.prototype.getErrorCode = Le.prototype.re;
            Le.prototype.getVastErrorCode = Le.prototype.Od;
            Le.prototype.getInnerError = Le.prototype.se;
            Le.prototype.getMessage = Le.prototype.te;
            Le.prototype.getType = Le.prototype.ue;
            t("google.ima.AdErrorEvent.Type.AD_ERROR", "adError", window);
            Pe.prototype.getError = Pe.prototype.G;
            Pe.prototype.getUserRequestContext = Pe.prototype.B;
            t("google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED", "contentResumeRequested", window);
            t("google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED", "contentPauseRequested", window);
            t("google.ima.AdEvent.Type.CLICK", "click", window);
            t("google.ima.AdEvent.Type.DURATION_CHANGE", "durationChange", window);
            t("google.ima.AdEvent.Type.EXPANDED_CHANGED", "expandedChanged", window);
            t("google.ima.AdEvent.Type.STARTED", "start", window);
            t("google.ima.AdEvent.Type.IMPRESSION", "impression", window);
            t("google.ima.AdEvent.Type.PAUSED", "pause", window);
            t("google.ima.AdEvent.Type.RESUMED", "resume", window);
            t("google.ima.AdEvent.Type.FIRST_QUARTILE", "firstquartile", window);
            t("google.ima.AdEvent.Type.MIDPOINT", "midpoint", window);
            t("google.ima.AdEvent.Type.THIRD_QUARTILE", "thirdquartile", window);
            t("google.ima.AdEvent.Type.COMPLETE", "complete", window);
            t("google.ima.AdEvent.Type.USER_CLOSE", "userClose", window);
            t("google.ima.AdEvent.Type.LINEAR_CHANGED", "linearChanged", window);
            t("google.ima.AdEvent.Type.LOADED", "loaded", window);
            t("google.ima.AdEvent.Type.AD_CAN_PLAY", "adCanPlay", window);
            t("google.ima.AdEvent.Type.AD_METADATA", "adMetadata", window);
            t("google.ima.AdEvent.Type.AD_BREAK_READY", "adBreakReady", window);
            t("google.ima.AdEvent.Type.INTERACTION", "interaction", window);
            t("google.ima.AdEvent.Type.ALL_ADS_COMPLETED", "allAdsCompleted", window);
            t("google.ima.AdEvent.Type.SKIPPED", "skip", window);
            t("google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED", "skippableStateChanged", window);
            t("google.ima.AdEvent.Type.LOG", "log", window);
            t("google.ima.AdEvent.Type.VIEWABLE_IMPRESSION", "viewable_impression", window);
            t("google.ima.AdEvent.Type.VOLUME_CHANGED", "volumeChange", window);
            t("google.ima.AdEvent.Type.VOLUME_MUTED", "mute", window);
            L.prototype.type = L.prototype.type;
            L.prototype.getAd = L.prototype.D;
            L.prototype.getAdData = L.prototype.F;
            Do.prototype.getAdCuePoints = Do.prototype.B;
            t("google.ima.AdsLoader", wq, window);
            wq.prototype.getSettings = wq.prototype.W;
            wq.prototype.requestAds = wq.prototype.Pf;
            wq.prototype.contentComplete = wq.prototype.Nf;
            wq.prototype.destroy = wq.prototype.Of;
            t("google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED", "adsManagerLoaded", window);
            tq.prototype.getAdsManager = tq.prototype.G;
            tq.prototype.getUserRequestContext = tq.prototype.D;
            tq.prototype.getResponse = tq.prototype.B;
            t("google.ima.CompanionAdSelectionSettings", dm, window);
            t("google.ima.CompanionAdSelectionSettings.CreativeType.IMAGE", "Image", void 0);
            t("google.ima.CompanionAdSelectionSettings.CreativeType.FLASH", "Flash", void 0);
            t("google.ima.CompanionAdSelectionSettings.CreativeType.ALL", "All", void 0);
            t("google.ima.CompanionAdSelectionSettings.ResourceType.HTML", "Html", void 0);
            t("google.ima.CompanionAdSelectionSettings.ResourceType.IFRAME", "IFrame", void 0);
            t("google.ima.CompanionAdSelectionSettings.ResourceType.STATIC", "Static", void 0);
            t("google.ima.CompanionAdSelectionSettings.ResourceType.ALL", "All", void 0);
            t("google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE", "IgnoreSize", void 0);
            t("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_EXACT_MATCH", "SelectExactMatch", void 0);
            t("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_NEAR_MATCH", "SelectNearMatch", void 0);
            t("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
            t("ima.ImaSdkSettings", O, window);
            t("google.ima.settings", M, window);
            O.prototype.setCompanionBackfill = O.prototype.wf;
            O.prototype.getCompanionBackfill = O.prototype.lf;
            O.prototype.setAutoPlayAdBreaks = O.prototype.vf;
            O.prototype.isAutoPlayAdBreak = O.prototype.tf;
            O.prototype.setPpid = O.prototype.Ff;
            O.prototype.getPpid = O.prototype.sf;
            O.prototype.setVpaidAllowed = O.prototype.If;
            O.prototype.setVpaidMode = O.prototype.Jf;
            O.prototype.setIsVpaidAdapter = O.prototype.Af;
            O.prototype.isVpaidAdapter = O.prototype.Wb;
            O.prototype.setRestrictToCustomPlayback = O.prototype.Gf;
            O.prototype.isRestrictToCustomPlayback = O.prototype.Sf;
            O.prototype.setNumRedirects = O.prototype.Bf;
            O.prototype.getNumRedirects = O.prototype.pf;
            O.prototype.getLocale = O.prototype.Md;
            O.prototype.setLocale = O.prototype.kg;
            O.prototype.getPlayerType = O.prototype.qf;
            O.prototype.setPlayerType = O.prototype.Df;
            O.prototype.getDisableFlashAds = O.prototype.nf;
            O.prototype.setDisableFlashAds = O.prototype.yf;
            O.prototype.getPlayerVersion = O.prototype.rf;
            O.prototype.setPlayerVersion = O.prototype.Ef;
            O.prototype.setPageCorrelator = O.prototype.Cf;
            O.prototype.setStreamCorrelator = O.prototype.Hf;
            O.prototype.setIsOutstreamVideo = O.prototype.zf;
            O.prototype.isOutstreamVideo = O.prototype.uf;
            O.prototype.setDisableCustomPlaybackForIOS10Plus = O.prototype.xf;
            O.prototype.getDisableCustomPlaybackForIOS10Plus = O.prototype.mf;
            t("google.ima.ImaSdkSettings.CompanionBackfillMode.ALWAYS", "always", void 0);
            t("google.ima.ImaSdkSettings.CompanionBackfillMode.ON_MASTER_AD", "on_master_ad", void 0);
            t("google.ima.ImaSdkSettings.VpaidMode.DISABLED", 0, void 0);
            t("google.ima.ImaSdkSettings.VpaidMode.ENABLED", 1, void 0);
            t("google.ima.ImaSdkSettings.VpaidMode.INSECURE", 2, void 0);
            t("google.ima.common.adTrackingMonitor", Xn, window);
            Kn.prototype.setActiveViewUseOsdGeometry = Kn.prototype.K;
            Kn.prototype.getActiveViewUseOsdGeometry = Kn.prototype.J;
            Kn.prototype.setBlockId = Kn.prototype.M;
            t("google.ima.AdsRenderingSettings", Fo, window);
            t("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
            t("google.ima.AdsRequest", Y, window);
            Y.prototype.adTagUrl = Y.prototype.adTagUrl;
            Y.prototype.adsResponse = Y.prototype.adsResponse;
            Y.prototype.nonLinearAdSlotHeight = Y.prototype.nonLinearAdSlotHeight;
            Y.prototype.nonLinearAdSlotWidth = Y.prototype.nonLinearAdSlotWidth;
            Y.prototype.linearAdSlotHeight = Y.prototype.linearAdSlotHeight;
            Y.prototype.linearAdSlotWidth = Y.prototype.linearAdSlotWidth;
            Y.prototype.setAdWillAutoPlay = Y.prototype.ac;
            Y.prototype.contentDuration = Y.prototype.contentDuration;
            Y.prototype.contentKeywords = Y.prototype.contentKeywords;
            Y.prototype.contentTitle = Y.prototype.contentTitle;
            Y.prototype.singleAdLoadTimeoutMs = Y.prototype.kc;
            t("google.ima.VERSION", "3.171.2", void 0);
            t("google.ima.UiElements.AD_ATTRIBUTION", "adAttribution", void 0);
            t("google.ima.UiElements.COUNTDOWN", "countdown", void 0);
            t("google.ima.ViewMode.NORMAL", "normal", void 0);
            t("google.ima.ViewMode.FULLSCREEN", "fullscreen", void 0);
            X.prototype.isCustomPlaybackUsed = X.prototype.Rf;
            X.prototype.isCustomClickTrackingUsed = X.prototype.Qf;
            X.prototype.destroy = X.prototype.Gc;
            X.prototype.init = X.prototype.df;
            X.prototype.start = X.prototype.start;
            X.prototype.stop = X.prototype.jf;
            X.prototype.pause = X.prototype.ff;
            X.prototype.resume = X.prototype.gf;
            X.prototype.getCuePoints = X.prototype.$e;
            X.prototype.getCurrentAd = X.prototype.af;
            X.prototype.getRemainingTime = X.prototype.bf;
            X.prototype.expand = X.prototype.Ye;
            X.prototype.collapse = X.prototype.Xe;
            X.prototype.getAdSkippableState = X.prototype.Ze;
            X.prototype.resize = X.prototype.Hc;
            X.prototype.skip = X.prototype.hf;
            X.prototype.getVolume = X.prototype.cf;
            X.prototype.setVolume = X.prototype.Rb;
            X.prototype.discardAdBreak = X.prototype.Hd;
            X.prototype.requestNextAdBreak = X.prototype.jg;
            X.prototype.updateAdsRenderingSettings = X.prototype.kf;
            gn.prototype.getContent = gn.prototype.getContent;
            gn.prototype.getContentType = gn.prototype.A;
            gn.prototype.getHeight = gn.prototype.G;
            gn.prototype.getWidth = gn.prototype.B;
        })();

    } else {
        // Copyright 2011 Google Inc. All Rights Reserved.
        (function() {
            var h, aa = function(a, b) {
                    function c() {}
                    c.prototype = b.prototype;
                    a.N = b.prototype;
                    a.prototype = new c;
                    a.prototype.constructor = a;
                    for (var d in b)
                        if (Object.defineProperties) {
                            var e = Object.getOwnPropertyDescriptor(b, d);
                            e && Object.defineProperty(a, d, e)
                        } else a[d] = b[d]
                },
                ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
                    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
                },
                da = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
                ea =
                function(a, b) {
                    if (b) {
                        var c = da;
                        a = a.split(".");
                        for (var d = 0; d < a.length - 1; d++) {
                            var e = a[d];
                            e in c || (c[e] = {});
                            c = c[e]
                        }
                        a = a[a.length - 1];
                        d = c[a];
                        b = b(d);
                        b != d && null != b && ba(c, a, {
                            configurable: !0,
                            writable: !0,
                            value: b
                        })
                    }
                };
            ea("Object.assign", function(a) {
                return a ? a : function(a, c) {
                    for (var b = 1; b < arguments.length; b++) {
                        var e = arguments[b];
                        if (e)
                            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (a[f] = e[f])
                    }
                    return a
                }
            });
            ea("Array.prototype.fill", function(a) {
                return a ? a : function(a, c, d) {
                    var b = this.length || 0;
                    0 > c && (c = Math.max(0, b + c));
                    if (null == d || d > b) d = b;
                    d = Number(d);
                    0 > d && (d = Math.max(0, b + d));
                    for (c = Number(c || 0); c < d; c++) this[c] = a;
                    return this
                }
            });
            var m = this,
                p = function(a) {
                    return void 0 !== a
                },
                q = function(a) {
                    return "string" == typeof a
                },
                r = function(a) {
                    return "number" == typeof a
                },
                t = function(a, b, c) {
                    a = a.split(".");
                    c = c || m;
                    a[0] in c || !c.execScript || c.execScript("var " + a[0]);
                    for (var d; a.length && (d = a.shift());) !a.length && p(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
                },
                fa = function(a, b) {
                    a = a.split(".");
                    b = b || m;
                    for (var c; c = a.shift();)
                        if (null != b[c]) b = b[c];
                        else return null;
                    return b
                },
                ga = function() {},
                ha = function(a) {
                    a.Ub = void 0;
                    a.getInstance = function() {
                        return a.Ub ?
                            a.Ub : a.Ub = new a
                    }
                },
                ia = function(a) {
                    var b = typeof a;
                    if ("object" == b)
                        if (a) {
                            if (a instanceof Array) return "array";
                            if (a instanceof Object) return b;
                            var c = Object.prototype.toString.call(a);
                            if ("[object Window]" == c) return "object";
                            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                        } else return "null";
                    else if ("function" == b && "undefined" == typeof a.call) return "object";
                    return b
                },
                la = function(a) {
                    return "array" == ia(a)
                },
                ma = function(a) {
                    var b = ia(a);
                    return "array" == b || "object" == b && "number" == typeof a.length
                },
                u = function(a) {
                    return "function" == ia(a)
                },
                na = function(a) {
                    var b = typeof a;
                    return "object" == b && null != a || "function" == b
                },
                oa = "closure_uid_" + (1E9 * Math.random() >>> 0),
                pa = 0,
                qa = function(a, b, c) {
                    return a.call.apply(a.bind, arguments)
                },
                ra = function(a, b, c) {
                    if (!a) throw Error();
                    if (2 < arguments.length) {
                        var d = Array.prototype.slice.call(arguments,
                            2);
                        return function() {
                            var c = Array.prototype.slice.call(arguments);
                            Array.prototype.unshift.apply(c, d);
                            return a.apply(b, c)
                        }
                    }
                    return function() {
                        return a.apply(b, arguments)
                    }
                },
                v = function(a, b, c) {
                    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? v = qa : v = ra;
                    return v.apply(null, arguments)
                },
                sa = function(a, b) {
                    var c = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        var b = c.slice();
                        b.push.apply(b, arguments);
                        return a.apply(this, b)
                    }
                },
                ta = Date.now || function() {
                    return +new Date
                },
                x = function(a, b) {
                    function c() {}
                    c.prototype = b.prototype;
                    a.N = b.prototype;
                    a.prototype = new c;
                    a.prototype.constructor = a;
                    a.jl = function(a, c, f) {
                        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                        return b.prototype[c].apply(a, d)
                    }
                };
            var ua = document,
                y = window;
            var va;
            var wa = function(a) {
                    return /^[\s\xa0]*$/.test(a)
                },
                xa = String.prototype.trim ? function(a) {
                    return a.trim()
                } : function(a) {
                    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                },
                Fa = function(a) {
                    if (!ya.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(za, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Aa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ba, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ca, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Da, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ea, "&#0;"));
                    return a
                },
                za = /&/g,
                Aa = /</g,
                Ba = />/g,
                Ca = /"/g,
                Da = /'/g,
                Ea = /\x00/g,
                ya = /[\x00&<>"']/,
                Ga = function(a, b) {
                    a.length > b && (a = a.substring(0, b - 3) + "...");
                    return a
                },
                Ha = function(a, b) {
                    return -1 != a.toLowerCase().indexOf(b.toLowerCase())
                },
                Ia = String.prototype.repeat ? function(a, b) {
                    return a.repeat(b)
                } : function(a, b) {
                    return Array(b + 1).join(a)
                },
                Ka = function(a) {
                    return null == a ? "" : String(a)
                },
                Ma = function(a, b) {
                    var c = 0;
                    a = xa(String(a)).split(".");
                    b = xa(String(b)).split(".");
                    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                        var f = a[e] || "",
                            g = b[e] || "";
                        do {
                            f =
                                /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                            if (0 == f[0].length && 0 == g[0].length) break;
                            c = La(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || La(0 == f[2].length, 0 == g[2].length) || La(f[2], g[2]);
                            f = f[3];
                            g = g[3]
                        } while (0 == c)
                    }
                    return c
                },
                La = function(a, b) {
                    return a < b ? -1 : a > b ? 1 : 0
                },
                Na = 2147483648 * Math.random() | 0,
                Oa = function(a) {
                    var b = Number(a);
                    return 0 == b && wa(a) ? NaN : b
                },
                Pa = function(a) {
                    return String(a).replace(/\-([a-z])/g, function(a, c) {
                        return c.toUpperCase()
                    })
                },
                Qa = function(a) {
                    var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
                    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                        return b + e.toUpperCase()
                    })
                };
            var Ra = function(a, b) {
                    if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
                    for (var c = 0; c < a.length; c++)
                        if (c in a && a[c] === b) return c;
                    return -1
                },
                A = function(a, b, c) {
                    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
                },
                Sa = function(a, b, c) {
                    for (var d = a.length, e = [], f = 0, g = q(a) ? a.split("") : a, k = 0; k < d; k++)
                        if (k in g) {
                            var l = g[k];
                            b.call(c, l, k, a) && (e[f++] = l)
                        }
                    return e
                },
                Ta = function(a, b, c) {
                    for (var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
                    return e
                },
                Ua = function(a, b, c) {
                    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
                        if (f in e && b.call(c, e[f], f, a)) return !0;
                    return !1
                },
                Va = function(a, b) {
                    var c = 0;
                    A(a, function(a, e, f) {
                        b.call(void 0, a, e, f) && ++c
                    }, void 0);
                    return c
                },
                Xa = function(a, b, c) {
                    b = Wa(a, b, c);
                    return 0 > b ? null : q(a) ? a.charAt(b) : a[b]
                },
                Wa = function(a, b, c) {
                    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
                        if (f in e && b.call(c, e[f], f, a)) return f;
                    return -1
                },
                Ya = function(a, b) {
                    return 0 <= Ra(a, b)
                },
                $a = function() {
                    var a = Za;
                    if (!la(a))
                        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
                    a.length = 0
                },
                ab = function(a, b) {
                    b = Ra(a, b);
                    var c;
                    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
                    return c
                },
                bb = function(a) {
                    return Array.prototype.concat.apply([], arguments)
                },
                cb = function(a) {
                    var b = a.length;
                    if (0 < b) {
                        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                        return c
                    }
                    return []
                },
                db = function(a, b, c) {
                    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
                },
                eb = function(a) {
                    for (var b = [], c = 0; c < a; c++) b[c] = 0;
                    return b
                },
                fb = function(a) {
                    for (var b = [], c = 0; c < arguments.length; c++) {
                        var d = arguments[c];
                        if (la(d))
                            for (var e = 0; e < d.length; e += 8192)
                                for (var f = fb.apply(null, db(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
                        else b.push(d)
                    }
                    return b
                };
            var B;
            a: {
                var gb = m.navigator;
                if (gb) {
                    var ib = gb.userAgent;
                    if (ib) {
                        B = ib;
                        break a
                    }
                }
                B = ""
            }
            var C = function(a) {
                return -1 != B.indexOf(a)
            };
            var kb = function(a, b, c) {
                    for (var d in a) b.call(c, a[d], d, a)
                },
                lb = function(a, b) {
                    var c = {},
                        d;
                    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
                    return c
                },
                ob = function(a) {
                    var b = nb,
                        c;
                    for (c in b)
                        if (a.call(void 0, b[c], c, b)) return !0;
                    return !1
                },
                pb = function(a) {
                    var b = 0,
                        c;
                    for (c in a) b++;
                    return b
                },
                qb = function(a) {
                    var b = [],
                        c = 0,
                        d;
                    for (d in a) b[c++] = a[d];
                    return b
                },
                rb = function(a) {
                    var b = [],
                        c = 0,
                        d;
                    for (d in a) b[c++] = d;
                    return b
                },
                sb = function(a, b) {
                    for (var c = ma(b), d = c ? b : arguments, c = c ? 0 : 1; c < d.length && (a = a[d[c]], p(a)); c++);
                    return a
                },
                tb = function(a, b) {
                    return null !== a && b in a
                },
                wb = function(a) {
                    var b = vb,
                        c;
                    for (c in b)
                        if (a.call(void 0, b[c], c, b)) return c
                },
                xb = function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                yb = function(a, b, c) {
                    return null !== a && b in a ? a[b] : c
                },
                zb = function(a) {
                    var b = {},
                        c;
                    for (c in a) b[c] = a[c];
                    return b
                },
                Ab = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
                Bb = function(a, b) {
                    for (var c, d, e = 1; e < arguments.length; e++) {
                        d = arguments[e];
                        for (c in d) a[c] = d[c];
                        for (var f = 0; f < Ab.length; f++) c =
                            Ab[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
                    }
                };
            var Db = function() {
                    return C("Safari") && !(Cb() || C("Coast") || C("Opera") || C("Edge") || C("Silk") || C("Android"))
                },
                Cb = function() {
                    return (C("Chrome") || C("CriOS")) && !C("Edge")
                };
            var Eb = function() {
                    return C("iPhone") && !C("iPod") && !C("iPad")
                },
                Fb = function() {
                    return Eb() || C("iPad") || C("iPod")
                };
            var Gb = function(a) {
                Gb[" "](a);
                return a
            };
            Gb[" "] = ga;
            var Hb = function(a, b) {
                    try {
                        return Gb(a[b]), !0
                    } catch (c) {}
                    return !1
                },
                Jb = function(a, b) {
                    var c = Ib;
                    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
                };
            var Kb = C("Opera"),
                D = C("Trident") || C("MSIE"),
                Lb = C("Edge"),
                Ob = C("Gecko") && !(Ha(B, "WebKit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
                Pb = Ha(B, "WebKit") && !C("Edge"),
                Qb = C("Macintosh"),
                Rb = C("Windows"),
                Sb = C("Android"),
                Tb = Eb(),
                Ub = C("iPad"),
                Vb = C("iPod"),
                Wb = Fb(),
                Xb = function() {
                    var a = m.document;
                    return a ? a.documentMode : void 0
                },
                Yb;
            a: {
                var $b = "",
                    ac = function() {
                        var a = B;
                        if (Ob) return /rv\:([^\);]+)(\)|;)/.exec(a);
                        if (Lb) return /Edge\/([\d\.]+)/.exec(a);
                        if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                        if (Pb) return /WebKit\/(\S+)/.exec(a);
                        if (Kb) return /(?:Version)[ \/]?(\S+)/.exec(a)
                    }();
                ac && ($b = ac ? ac[1] : "");
                if (D) {
                    var bc = Xb();
                    if (null != bc && bc > parseFloat($b)) {
                        Yb = String(bc);
                        break a
                    }
                }
                Yb = $b
            }
            var cc = Yb,
                Ib = {},
                E = function(a) {
                    return Jb(a, function() {
                        return 0 <= Ma(cc, a)
                    })
                },
                dc;
            var ec = m.document;
            dc = ec && D ? Xb() || ("CSS1Compat" == ec.compatMode ? parseInt(cc, 10) : 5) : void 0;
            var F = function(a, b) {
                this.x = p(a) ? a : 0;
                this.y = p(b) ? b : 0
            };
            F.prototype.clone = function() {
                return new F(this.x, this.y)
            };
            var fc = function(a, b) {
                return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
            };
            F.prototype.floor = function() {
                this.x = Math.floor(this.x);
                this.y = Math.floor(this.y);
                return this
            };
            F.prototype.round = function() {
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
                return this
            };
            F.prototype.scale = function(a, b) {
                b = r(b) ? b : a;
                this.x *= a;
                this.y *= b;
                return this
            };
            var gc = !D || 9 <= Number(dc);
            !Ob && !D || D && 9 <= Number(dc) || Ob && E("1.9.1");
            D && E("9");
            var hc = D || Kb || Pb;
            var ic = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            };
            var kc = function() {
                this.g = "";
                this.h = jc
            };
            kc.prototype.Ia = !0;
            kc.prototype.Ga = function() {
                return this.g
            };
            kc.prototype.toString = function() {
                return "Const{" + this.g + "}"
            };
            var lc = function(a) {
                    return a instanceof kc && a.constructor === kc && a.h === jc ? a.g : "type_error:Const"
                },
                jc = {},
                mc = function(a) {
                    var b = new kc;
                    b.g = a;
                    return b
                };
            mc("");
            var oc = function() {
                this.g = "";
                this.h = nc
            };
            oc.prototype.Ia = !0;
            var nc = {};
            oc.prototype.Ga = function() {
                return this.g
            };
            var pc = function(a) {
                    var b = new oc;
                    b.g = a;
                    return b
                },
                qc = pc(""),
                rc = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;
            var tc = function() {
                this.g = "";
                this.h = sc
            };
            tc.prototype.Ia = !0;
            tc.prototype.Ga = function() {
                return this.g
            };
            tc.prototype.Tb = !0;
            tc.prototype.fb = function() {
                return 1
            };
            var sc = {},
                uc = function(a) {
                    var b = new tc;
                    b.g = a;
                    return b
                };
            var wc = function() {
                this.g = "";
                this.h = vc
            };
            wc.prototype.Ia = !0;
            wc.prototype.Ga = function() {
                return this.g
            };
            wc.prototype.Tb = !0;
            wc.prototype.fb = function() {
                return 1
            };
            var xc = function(a) {
                    if (a instanceof wc && a.constructor === wc && a.h === vc) return a.g;
                    ia(a);
                    return "type_error:SafeUrl"
                },
                zc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
                Bc = function(a) {
                    if (a instanceof wc) return a;
                    a = a.Ia ? a.Ga() : String(a);
                    zc.test(a) || (a = "about:invalid#zClosurez");
                    return Ac(a)
                },
                vc = {},
                Ac = function(a) {
                    var b = new wc;
                    b.g = a;
                    return b
                };
            Ac("about:blank");
            var Dc = function() {
                this.g = "";
                this.l = Cc;
                this.h = null
            };
            Dc.prototype.Tb = !0;
            Dc.prototype.fb = function() {
                return this.h
            };
            Dc.prototype.Ia = !0;
            Dc.prototype.Ga = function() {
                return this.g
            };
            var Ec = function(a) {
                    if (a instanceof Dc && a.constructor === Dc && a.l === Cc) return a.g;
                    ia(a);
                    return "type_error:SafeHtml"
                },
                Gc = function(a) {
                    if (a instanceof Dc) return a;
                    var b = null;
                    a.Tb && (b = a.fb());
                    a = Fa(a.Ia ? a.Ga() : String(a));
                    return Fc(a, b)
                },
                Hc = /^[a-zA-Z0-9-]+$/,
                Ic = {
                    action: !0,
                    cite: !0,
                    data: !0,
                    formaction: !0,
                    href: !0,
                    manifest: !0,
                    poster: !0,
                    src: !0
                },
                Jc = function(a) {
                    var b = 0,
                        c = "",
                        d = function(a) {
                            la(a) ? A(a, d) : (a = Gc(a), c += Ec(a), a = a.fb(), 0 == b ? b = a : 0 != a && b != a && (b = null))
                        };
                    A(arguments, d);
                    return Fc(c, b)
                },
                Cc = {},
                Fc = function(a, b) {
                    var c =
                        new Dc;
                    c.g = a;
                    c.h = b;
                    return c
                },
                Kc = function(a, b, c) {
                    var d = null,
                        e = "";
                    if (b)
                        for (V in b) {
                            if (!Hc.test(V)) throw Error('Invalid attribute name "' + V + '".');
                            var f = b[V];
                            if (null != f) {
                                var g = a;
                                var k = V;
                                var l = f;
                                if (l instanceof kc) l = lc(l);
                                else if ("style" == k.toLowerCase()) {
                                    f = void 0;
                                    g = l;
                                    if (!na(g)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof g + " given: " + g);
                                    if (!(g instanceof oc)) {
                                        l = "";
                                        for (f in g) {
                                            if (!/^[-_a-zA-Z0-9]+$/.test(f)) throw Error("Name allows only [-_a-zA-Z0-9], got: " +
                                                f);
                                            var n = g[f];
                                            if (null != n) {
                                                if (n instanceof kc) n = lc(n);
                                                else if (rc.test(n)) {
                                                    for (var w = !0, z = !0, N = 0; N < n.length; N++) {
                                                        var Z = n.charAt(N);
                                                        "'" == Z && z ? w = !w : '"' == Z && w && (z = !z)
                                                    }
                                                    w && z || (n = "zClosurez")
                                                } else n = "zClosurez";
                                                l += f + ":" + n + ";"
                                            }
                                        }
                                        g = l ? pc(l) : qc
                                    }
                                    g instanceof oc && g.constructor === oc && g.h === nc ? f = g.g : (ia(g), f = "type_error:SafeStyle");
                                    l = f
                                } else {
                                    if (/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + l + '" given.');
                                    if (k.toLowerCase() in Ic)
                                        if (l instanceof tc) l instanceof tc && l.constructor ===
                                            tc && l.h === sc ? l = l.g : (ia(l), l = "type_error:TrustedResourceUrl");
                                        else if (l instanceof wc) l = xc(l);
                                    else if (q(l)) l = Bc(l).Ga();
                                    else throw Error('Attribute "' + k + '" on tag "' + g + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + l + '" given.');
                                }
                                l.Ia && (l = l.Ga());
                                k = k + '="' + Fa(String(l)) + '"';
                                e += " " + k
                            }
                        }
                    var V = "<" + a + e;
                    null != c ? la(c) || (c = [c]) : c = [];
                    !0 === ic[a.toLowerCase()] ? V += ">" : (d = Jc(c), V += ">" + Ec(d) + "</" + a + ">", d = d.fb());
                    (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
                    return Fc(V, d)
                },
                Pc = function(a,
                    b, c) {
                    var d = {},
                        e;
                    for (e in a) d[e] = a[e];
                    for (e in b) d[e] = b[e];
                    for (e in c) {
                        var f = e.toLowerCase();
                        if (f in a) throw Error('Cannot override "' + f + '" attribute, got "' + e + '" with value "' + c[e] + '"');
                        f in b && delete d[f];
                        d[e] = c[e]
                    }
                    return d
                };
            Fc("<!DOCTYPE html>", 0);
            Fc("", 0);
            Fc("<br>", 0);
            var G = function(a, b) {
                this.width = a;
                this.height = b
            };
            h = G.prototype;
            h.clone = function() {
                return new G(this.width, this.height)
            };
            h.sa = function() {
                return this.width * this.height
            };
            h.isEmpty = function() {
                return !this.sa()
            };
            h.floor = function() {
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this
            };
            h.round = function() {
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this
            };
            h.scale = function(a, b) {
                b = r(b) ? b : a;
                this.width *= a;
                this.height *= b;
                return this
            };
            var Sc = function(a) {
                    return a ? new Qc(Rc(a)) : va || (va = new Qc)
                },
                Uc = function(a, b) {
                    kb(b, function(b, d) {
                        b && b.Ia && (b = b.Ga());
                        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Tc.hasOwnProperty(d) ? a.setAttribute(Tc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
                    })
                },
                Tc = {
                    cellpadding: "cellPadding",
                    cellspacing: "cellSpacing",
                    colspan: "colSpan",
                    frameborder: "frameBorder",
                    height: "height",
                    maxlength: "maxLength",
                    nonce: "nonce",
                    role: "role",
                    rowspan: "rowSpan",
                    type: "type",
                    usemap: "useMap",
                    valign: "vAlign",
                    width: "width"
                },
                Vc = function(a) {
                    a = a.document;
                    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
                    return new G(a.clientWidth, a.clientHeight)
                },
                Wc = function(a) {
                    var b = a.scrollingElement ? a.scrollingElement : Pb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
                    a = a.parentWindow || a.defaultView;
                    return D && E("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
                },
                H = function(a) {
                    return a ?
                        a.parentWindow || a.defaultView : window
                },
                Yc = function(a, b, c) {
                    var d = arguments,
                        e = document,
                        f = String(d[0]),
                        g = d[1];
                    if (!gc && g && (g.name || g.type)) {
                        f = ["<", f];
                        g.name && f.push(' name="', Fa(g.name), '"');
                        if (g.type) {
                            f.push(' type="', Fa(g.type), '"');
                            var k = {};
                            Bb(k, g);
                            delete k.type;
                            g = k
                        }
                        f.push(">");
                        f = f.join("")
                    }
                    f = e.createElement(f);
                    g && (q(g) ? f.className = g : la(g) ? f.className = g.join(" ") : Uc(f, g));
                    2 < d.length && Xc(e, f, d);
                    return f
                },
                Xc = function(a, b, c) {
                    function d(c) {
                        c && b.appendChild(q(c) ? a.createTextNode(c) : c)
                    }
                    for (var e = 2; e < c.length; e++) {
                        var f =
                            c[e];
                        !ma(f) || na(f) && 0 < f.nodeType ? d(f) : A(Zc(f) ? cb(f) : f, d)
                    }
                },
                $c = function(a) {
                    for (var b; b = a.firstChild;) a.removeChild(b)
                },
                ad = function(a) {
                    a && a.parentNode && a.parentNode.removeChild(a)
                },
                bd = function(a, b) {
                    if (!a || !b) return !1;
                    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
                    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
                    for (; b && a != b;) b = b.parentNode;
                    return b == a
                },
                Rc = function(a) {
                    return 9 == a.nodeType ? a : a.ownerDocument || a.document
                },
                cd = function(a) {
                    try {
                        return a.contentWindow ||
                            (a.contentDocument ? H(a.contentDocument) : null)
                    } catch (b) {}
                    return null
                },
                Zc = function(a) {
                    if (a && "number" == typeof a.length) {
                        if (na(a)) return "function" == typeof a.item || "string" == typeof a.item;
                        if (u(a)) return "function" == typeof a.item
                    }
                    return !1
                },
                Qc = function(a) {
                    this.g = a || m.document || document
                };
            Qc.prototype.Fa = function(a) {
                return q(a) ? this.g.getElementById(a) : a
            };
            Qc.prototype.createElement = function(a) {
                return this.g.createElement(String(a))
            };
            Qc.prototype.appendChild = function(a, b) {
                a.appendChild(b)
            };
            Qc.prototype.contains = bd;
            var I = function(a, b, c, d) {
                this.top = a;
                this.right = b;
                this.bottom = c;
                this.left = d
            };
            h = I.prototype;
            h.tb = function() {
                return this.right - this.left
            };
            h.sb = function() {
                return this.bottom - this.top
            };
            h.clone = function() {
                return new I(this.top, this.right, this.bottom, this.left)
            };
            h.contains = function(a) {
                return this && a ? a instanceof I ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
            };
            h.floor = function() {
                this.top = Math.floor(this.top);
                this.right = Math.floor(this.right);
                this.bottom = Math.floor(this.bottom);
                this.left = Math.floor(this.left);
                return this
            };
            h.round = function() {
                this.top = Math.round(this.top);
                this.right = Math.round(this.right);
                this.bottom = Math.round(this.bottom);
                this.left = Math.round(this.left);
                return this
            };
            var dd = function(a, b, c) {
                b instanceof F ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, r(c) && (a.top += c, a.bottom += c));
                return a
            };
            I.prototype.scale = function(a, b) {
                b = r(b) ? b : a;
                this.left *= a;
                this.right *= a;
                this.top *= b;
                this.bottom *= b;
                return this
            };
            var ed = function(a, b, c, d) {
                this.left = a;
                this.top = b;
                this.width = c;
                this.height = d
            };
            ed.prototype.clone = function() {
                return new ed(this.left, this.top, this.width, this.height)
            };
            var fd = function(a) {
                return new I(a.top, a.left + a.width, a.top + a.height, a.left)
            };
            ed.prototype.contains = function(a) {
                return a instanceof F ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
            };
            ed.prototype.floor = function() {
                this.left = Math.floor(this.left);
                this.top = Math.floor(this.top);
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this
            };
            ed.prototype.round = function() {
                this.left = Math.round(this.left);
                this.top = Math.round(this.top);
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this
            };
            ed.prototype.scale = function(a, b) {
                b = r(b) ? b : a;
                this.left *= a;
                this.width *= a;
                this.top *= b;
                this.height *= b;
                return this
            };
            var gd = {},
                hd = function(a, b) {
                    var c = gd[b];
                    if (!c) {
                        var d = Pa(b),
                            c = d;
                        void 0 === a.style[d] && (d = (Pb ? "Webkit" : Ob ? "Moz" : D ? "ms" : Kb ? "O" : null) + Qa(d), void 0 !== a.style[d] && (c = d));
                        gd[b] = c
                    }
                    return c
                },
                id = function(a, b) {
                    var c = a.style[Pa(b)];
                    return "undefined" !== typeof c ? c : a.style[hd(a, b)] || ""
                },
                kd = function(a, b) {
                    if (b instanceof F) {
                        var c = b.x;
                        b = b.y
                    } else c = b, b = void 0;
                    a.style.left = jd(c, !1);
                    a.style.top = jd(b, !1)
                },
                ld = function(a) {
                    return new F(a.offsetLeft, a.offsetTop)
                },
                md = function(a) {
                    try {
                        var b = a.getBoundingClientRect()
                    } catch (c) {
                        return {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        }
                    }
                    D && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
                    return b
                },
                nd = function(a) {
                    var b = Rc(a),
                        c = new F(0, 0);
                    var d = b ? Rc(b) : document;
                    d = !D || 9 <= Number(dc) || "CSS1Compat" == Sc(d).g.compatMode ? d.documentElement : d.body;
                    if (a == d) return c;
                    a = md(a);
                    b = Wc(Sc(b).g);
                    c.x = a.left + b.x;
                    c.y = a.top + b.y;
                    return c
                },
                od = function(a, b) {
                    var c = new F(0, 0),
                        d = H(Rc(a));
                    if (!Hb(d, "parent")) return c;
                    do {
                        if (d == b) var e = nd(a);
                        else e = md(a), e = new F(e.left, e.top);
                        c.x += e.x;
                        c.y += e.y
                    } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
                    return c
                },
                pd = function(a, b, c) {
                    if (b instanceof G) c = b.height, b = b.width;
                    else if (void 0 == c) throw Error("missing height argument");
                    a.style.width = jd(b, !0);
                    a.style.height = jd(c, !0)
                },
                jd = function(a, b) {
                    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
                    return a
                },
                qd = function(a) {
                    var b = a.offsetWidth,
                        c = a.offsetHeight,
                        d = Pb && !b && !c;
                    return p(b) && !d || !a.getBoundingClientRect ? new G(b, c) : (a = md(a), new G(a.right -
                        a.left, a.bottom - a.top))
                };
            var rd = function(a) {
                    try {
                        return !!a && null != a.location.href && Hb(a, "foo")
                    } catch (b) {
                        return !1
                    }
                },
                sd = function(a, b) {
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
                },
                ud = function() {
                    var a = [];
                    sd(td, function(b) {
                        a.push(b)
                    });
                    return a
                },
                vd = /https?:\/\/[^\/]+/,
                wd = function() {
                    var a = m;
                    try {
                        for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                            case "https:":
                                return !0;
                            case "file:":
                                return !1;
                            case "http:":
                                return !1
                        }
                    } catch (c) {}
                    return !0
                },
                yd = function() {
                    var a = xd;
                    if (!a) return "";
                    var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
                    try {
                        var c = b.exec(decodeURIComponent(a));
                        if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
                    } catch (d) {}
                    return ""
                };
            var zd = function() {
                    var a = !1;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                a = !0
                            }
                        });
                        m.addEventListener("test", null, b)
                    } catch (c) {}
                    return a
                }(),
                Ad = function(a, b, c, d) {
                    a.addEventListener ? a.addEventListener(b, c, zd ? d : d ? d.capture || !1 : !1) : a.attachEvent && a.attachEvent("on" + b, c)
                },
                Bd = function(a, b, c) {
                    a.removeEventListener ? a.removeEventListener(b, c, zd ? void 0 : !1) : a.detachEvent && a.detachEvent("on" + b, c)
                };
            var Cd = function(a) {
                a = a || m;
                var b = a.context;
                if (!b) try {
                    b = a.parent.context
                } catch (c) {}
                try {
                    if (b && "pageViewId" in b && "canonicalUrl" in b) return b
                } catch (c) {}
                return null
            };
            var Dd = function(a, b, c) {
                a.google_image_requests || (a.google_image_requests = []);
                var d = a.document.createElement("img");
                if (c) {
                    var e = function(a) {
                        c(a);
                        Bd(d, "load", e);
                        Bd(d, "error", e)
                    };
                    Ad(d, "load", e);
                    Ad(d, "error", e)
                }
                d.src = b;
                a.google_image_requests.push(d)
            };
            var Ed = !!window.google_async_iframe_id,
                Fd = Ed && window.parent || window,
                Gd = function() {
                    if (Ed && !rd(Fd)) {
                        var a = "." + ua.domain;
                        try {
                            for (; 2 < a.split(".").length && !rd(Fd);) ua.domain = a = a.substr(a.indexOf(".") + 1), Fd = window.parent
                        } catch (b) {}
                        rd(Fd) || (Fd = window)
                    }
                    return Fd
                };
            var Md = function(a, b, c) {
                c = void 0 === c ? {} : c;
                this.error = a;
                this.context = b.context;
                this.line = b.line || -1;
                this.msg = b.message || "";
                this.file = b.file || "";
                this.id = b.id || "jserror";
                this.meta = c
            };
            var Nd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
                Od = function(a, b) {
                    if (a) {
                        a = a.split("&");
                        for (var c = 0; c < a.length; c++) {
                            var d = a[c].indexOf("="),
                                e = null;
                            if (0 <= d) {
                                var f = a[c].substring(0, d);
                                e = a[c].substring(d + 1)
                            } else f = a[c];
                            b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                        }
                    }
                },
                Pd = function(a, b, c) {
                    if (la(b))
                        for (var d = 0; d < b.length; d++) Pd(a, String(b[d]), c);
                    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
                },
                Qd = function(a,
                    b) {
                    var c = [];
                    for (b = b || 0; b < a.length; b += 2) Pd(a[b], a[b + 1], c);
                    return c.join("&")
                },
                Rd = function(a, b) {
                    var c = 2 == arguments.length ? Qd(arguments[1], 0) : Qd(arguments, 1);
                    if (c) {
                        var d = a.indexOf("#");
                        0 > d && (d = a.length);
                        var e = a.indexOf("?");
                        if (0 > e || e > d) {
                            e = d;
                            var f = ""
                        } else f = a.substring(e + 1, d);
                        d = [a.substr(0, e), f, a.substr(d)];
                        e = d[1];
                        d[1] = c ? e ? e + "&" + c : c : e;
                        c = d[0] + (d[1] ? "?" + d[1] : "") + d[2]
                    } else c = a;
                    return c
                },
                Sd = /#|$/,
                Td = function(a, b) {
                    var c = a.search(Sd);
                    a: {
                        var d = 0;
                        for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                            var f = a.charCodeAt(d -
                                1);
                            if (38 == f || 63 == f)
                                if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                            d += e + 1
                        }
                        d = -1
                    }
                    if (0 > d) return null;
                    e = a.indexOf("&", d);
                    if (0 > e || e > c) e = c;
                    d += b.length + 1;
                    return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
                };
            var Ud = function(a, b) {
                    this.g = a;
                    this.h = b
                },
                Vd = function(a, b, c) {
                    this.url = a;
                    this.lc = b;
                    this.Oc = !!c;
                    this.depth = r(void 0) ? void 0 : null
                },
                Xd = function(a) {
                    a = a ? a : Wd();
                    for (var b = new Vd(m.location.href, m, !1), c = a.length - 1, d = c; 0 <= d; --d) {
                        var e = a[d];
                        if (e.url && !e.Oc) {
                            b = e;
                            break
                        }
                    }
                    d = null;
                    e = a.length && a[c].url;
                    0 != b.depth && e && (d = a[c]);
                    return new Ud(b, d)
                },
                Wd = function() {
                    var a = m,
                        b = [],
                        c = null;
                    do {
                        var d = a;
                        if (rd(d)) {
                            var e = d.location.href;
                            c = d.document && d.document.referrer || null
                        } else e = c, c = null;
                        b.push(new Vd(e || "", d));
                        try {
                            a = d.parent
                        } catch (f) {
                            a =
                                null
                        }
                    } while (a && d != a);
                    a = 0;
                    for (d = b.length - 1; a <= d; ++a) b[a].depth = d - a;
                    d = m;
                    if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
                        for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.Oc = !0);
                    return b
                };
            var Yd = function(a, b, c, d, e) {
                    this.C = c || 4E3;
                    this.l = a || "&";
                    this.A = b || ",$";
                    this.o = p(d) ? d : "trn";
                    this.B = e || null;
                    this.w = !1;
                    this.h = {};
                    this.G = 0;
                    this.g = []
                },
                Zd = function(a, b) {
                    var c = {};
                    c[a] = b;
                    return [c]
                },
                ae = function(a, b, c, d, e) {
                    var f = [];
                    sd(a, function(a, k) {
                        (a = $d(a, b, c, d, e)) && f.push(k + "=" + a)
                    });
                    return f.join(b)
                },
                $d = function(a, b, c, d, e) {
                    if (null == a) return "";
                    b = b || "&";
                    c = c || ",$";
                    "string" == typeof c && (c = c.split(""));
                    if (a instanceof Array) {
                        if (d = d || 0, d < c.length) {
                            for (var f = [], g = 0; g < a.length; g++) f.push($d(a[g], b, c, d + 1, e));
                            return f.join(c[d])
                        }
                    } else if ("object" ==
                        typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ae(a, b, c, d, e + 1)) : "...";
                    return encodeURIComponent(String(a))
                },
                be = function(a, b, c, d) {
                    a.g.push(b);
                    a.h[b] = Zd(c, d)
                },
                de = function(a, b, c, d) {
                    b = b + "//" + c + d;
                    var e = ce(a) - d.length - 0;
                    if (0 > e) return "";
                    a.g.sort(function(a, b) {
                        return a - b
                    });
                    d = null;
                    c = "";
                    for (var f = 0; f < a.g.length; f++)
                        for (var g = a.g[f], k = a.h[g], l = 0; l < k.length; l++) {
                            if (!e) {
                                d = null == d ? g : d;
                                break
                            }
                            var n = ae(k[l], a.l, a.A);
                            if (n) {
                                n = c + n;
                                if (e >= n.length) {
                                    e -= n.length;
                                    b += n;
                                    c = a.l;
                                    break
                                } else a.w && (c = e, n[c - 1] == a.l && --c, b += n.substr(0,
                                    c), c = a.l, e = 0);
                                d = null == d ? g : d
                            }
                        }
                    f = "";
                    a.o && null != d && (f = c + a.o + "=" + (a.B || d));
                    return b + f + ""
                },
                ce = function(a) {
                    if (!a.o) return a.C;
                    var b = 1,
                        c;
                    for (c in a.h) b = c.length > b ? c.length : b;
                    return a.C - a.o.length - b - a.l.length - 1
                };
            var ee = function(a, b, c, d, e) {
                if (Math.random() < (d || a.g)) try {
                    if (c instanceof Yd) var f = c;
                    else f = new Yd, sd(c, function(a, b) {
                        var c = f,
                            d = c.G++;
                        a = Zd(b, a);
                        c.g.push(d);
                        c.h[d] = a
                    });
                    var g = de(f, a.o, a.h, a.l + b + "&");
                    g && ("undefined" === typeof e ? Dd(m, g) : Dd(m, g, e))
                } catch (k) {}
            };
            var fe = function(a) {
                    this.h = {};
                    this.g = {};
                    a = a || [];
                    for (var b = 0, c = a.length; b < c; ++b) this.g[a[b]] = ""
                },
                he = function() {
                    var a = ge(),
                        b = new fe;
                    sd(a.h, function(a, d) {
                        b.h[d] = a
                    });
                    sd(a.g, function(a, d) {
                        b.g[d] = a
                    });
                    return b
                };
            var je = function(a, b) {
                var c = ie();
                this.label = a;
                this.type = b;
                this.value = c;
                this.duration = 0;
                this.uniqueId = this.label + "_" + this.type + "_" + Math.random()
            };
            var ke = function(a, b) {
                this.events = [];
                this.h = b || m;
                var c = null;
                b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
                a: {
                    try {
                        var d = (this.h || m).top.location.hash;
                        if (d) {
                            var e = d.match(/\bdeid=([\d,]+)/);
                            var f = e && e[1] || "";
                            break a
                        }
                    } catch (g) {}
                    f = ""
                }
                b = f;
                b = b.indexOf && 0 <= b.indexOf("1337");
                this.g = (this.g = null != c ? c : Math.random() < a) || b;
                a = this.h.performance;
                this.l = !!(a && a.mark && a.clearMarks && b)
            };
            ke.prototype.o = function(a) {
                if (a && this.l) {
                    var b = this.h.performance;
                    b.clearMarks("goog_" + a.uniqueId + "_start");
                    b.clearMarks("goog_" + a.uniqueId + "_end")
                }
            };
            ke.prototype.start = function(a, b) {
                if (!this.g) return null;
                a = new je(a, b);
                this.l && this.h.performance.mark("goog_" + a.uniqueId + "_start");
                return a
            };
            var ie = function() {
                var a = m.performance;
                return a && a.now ? a.now() : ta()
            };
            var le = function(a, b, c, d) {
                    this.o = a;
                    this.C = b;
                    this.l = c;
                    this.w = this.h;
                    this.g = void 0 === d ? null : d
                },
                ne = function(a, b, c, d, e) {
                    try {
                        if (a.g && a.g.g) {
                            var f = a.g.start(b.toString(), 3);
                            var g = c();
                            var k = a.g;
                            c = f;
                            k.g && (c.duration = ie() - c.value, k.l && k.h.performance.mark("goog_" + c.uniqueId + "_end"), k.g && k.events.push(c))
                        } else g = c()
                    } catch (n) {
                        k = a.l;
                        try {
                            a.g && f && a.g.o(f);
                            var l = me(n),
                                k = (e || a.w).call(a, b, l, void 0, d)
                        } catch (w) {
                            a.h(217, w)
                        }
                        if (!k) throw n;
                    }
                    return g
                },
                pe = function(a, b, c, d) {
                    var e = oe;
                    return function(f) {
                        for (var g = [], k = 0; k < arguments.length; ++k) g[k -
                            0] = arguments[k];
                        return ne(e, a, function() {
                            return b.apply(c, g)
                        }, d, void 0)
                    }
                };
            le.prototype.h = function(a, b, c, d, e) {
                e = e || this.C;
                try {
                    var f = new Yd;
                    f.w = !0;
                    be(f, 1, "context", a);
                    b.error && b.meta && b.id || (b = me(b));
                    b.msg && be(f, 2, "msg", b.msg.substring(0, 512));
                    b.file && be(f, 3, "file", b.file);
                    0 < b.line && be(f, 4, "line", b.line);
                    var g = b.meta || {};
                    if (d) try {
                        d(g)
                    } catch (l) {}
                    b = [g];
                    f.g.push(5);
                    f.h[5] = b;
                    var k = Xd();
                    k.h && be(f, 6, "top", k.h.url || "");
                    be(f, 7, "url", k.g.url || "");
                    ee(this.o, e, f, c)
                } catch (l) {
                    try {
                        ee(this.o, e, {
                            context: "ecmserr",
                            rctx: a,
                            msg: qe(l),
                            url: k.g.url
                        }, c)
                    } catch (n) {}
                }
                return this.l
            };
            var me = function(a) {
                    return new re(qe(a), a.fileName, a.lineNumber)
                },
                qe = function(a) {
                    var b = a.toString();
                    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
                    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
                    if (a.stack) {
                        a = a.stack;
                        var c = b;
                        try {
                            -1 == a.indexOf(c) && (a = c + "\n" + a);
                            for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                            b = a.replace(/\n */g, "\n")
                        } catch (e) {
                            b = c
                        }
                    }
                    return b
                },
                re = function(a, b, c) {
                    Md.call(this, Error(a), {
                        message: a,
                        file: void 0 === b ? "" : b,
                        line: void 0 === c ? -1 : c
                    })
                };
            aa(re, Md);
            var se, oe, te = Gd(),
                ue = new ke(1, te),
                ve = function() {
                    te.google_measure_js_timing || (ue.events != ue.h.google_js_reporting_queue && (ue.events.length = 0, ue.l && A(ue.events, ue.o, ue)), ue.g = !1)
                };
            se = new function() {
                this.o = "http:" === y.location.protocol ? "http:" : "https:";
                this.h = "pagead2.googlesyndication.com";
                this.l = "/pagead/gen_204?id=";
                this.g = .01
            };
            oe = new le(se, "jserror", !0, ue);
            "complete" == te.document.readyState ? ve() : ue.g && Ad(te, "load", function() {
                ve()
            });
            var xe = function(a, b) {
                    return ne(oe, a, b, void 0, we)
                },
                ye = function(a, b, c, d) {
                    return pe(a, b, c, d)
                },
                we = oe.h,
                ze = function(a, b) {
                    oe.h(a, b, void 0, void 0)
                };
            var Ae = function(a) {
                for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, rd(a) && (c = a, b = d);
                return {
                    lc: c,
                    level: b
                }
            };
            var Be = function(a) {
                fe.call(this, a);
                this.dfltBktExt = this.h;
                this.lrsExt = this.g
            };
            x(Be, fe);
            var Ce = function() {
                    this.S = {}
                },
                Ee = function() {
                    if (De) return De;
                    var a;
                    (a = Cd()) ? (a = a.master, a = rd(a) ? a : null) : a = null;
                    a = a || Gd();
                    var b = a.google_persistent_state_async;
                    return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? De = b : a.google_persistent_state_async = De = new Ce
                },
                De = null,
                Fe = {
                    8: "google_prev_ad_formats_by_region",
                    9: "google_prev_ad_slotnames_by_region"
                };
            var td = {
                    bi: 5,
                    Lh: 7,
                    ji: 17,
                    mh: 19,
                    Wg: 41,
                    Hh: 48,
                    Tj: 55,
                    Dg: 59,
                    Qj: 61,
                    Pj: 62,
                    oj: 67,
                    Kj: 69,
                    Oh: 70,
                    hi: 74,
                    hj: 75,
                    Rj: 77,
                    Hk: 79,
                    il: 80,
                    ni: 81,
                    Uj: 82,
                    Vj: 83,
                    Zk: 84,
                    rk: 86,
                    yj: 87,
                    ak: 88,
                    eh: 89,
                    zj: 90,
                    Ik: 92,
                    Eg: 93,
                    Oj: 94,
                    $k: 95,
                    Fg: 96
                },
                Ge = null,
                He = function(a) {
                    try {
                        return !!a && Gb(!0)
                    } catch (b) {
                        return !1
                    }
                },
                Ie = function() {
                    if (He(Ge)) return !0;
                    var a = Ee();
                    var b = Fe[3] || "google_ps_3";
                    var a = a.S,
                        c = a[b];
                    b = void 0 === c ? a[b] = null : c;
                    b && (b && b.dfltBktExt && b.lrsExt ? (a = new Be, a.h = b.dfltBktExt, a.dfltBktExt = a.h, a.g = b.lrsExt, a.lrsExt = a.g, b = a) : b = null, b || (b = new Be,
                        a = {
                            context: "ps::gpes::cf",
                            url: Gd().location.href
                        }, ee(se, "jserror", a, void 0, void 0)));
                    return He(b) ? (Ge = b, !0) : !1
                },
                ge = function() {
                    if (Ie()) return Ge;
                    var a = Ee(),
                        b = new Be(ud());
                    return Ge = a.S[Fe[3] || "google_ps_3"] = b
                },
                Je = null;
            var Ke = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
            var Le = function(a, b, c) {
                this.l = b;
                this.h = c;
                this.o = a
            };
            x(Le, Error);
            h = Le.prototype;
            h.re = function() {
                return this.g
            };
            h.se = function() {
                return this.l
            };
            h.qe = function() {
                return this.h
            };
            h.Nd = function() {
                return 1E3 > this.h ? this.h : 900
            };
            h.te = function() {
                return this.o
            };
            h.toString = function() {
                return "AdError " + this.h + ": " + this.l + (null != this.g ? " Caused by: " + this.g : "")
            };
            var Me = function() {
                this.Z = this.Z;
                this.O = this.O
            };
            Me.prototype.Z = !1;
            Me.prototype.P = function() {
                this.Z || (this.Z = !0, this.L())
            };
            var Ne = function(a, b) {
                a.Z ? p(void 0) ? b.call(void 0) : b() : (a.O || (a.O = []), a.O.push(p(void 0) ? v(b, void 0) : b))
            };
            Me.prototype.L = function() {
                if (this.O)
                    for (; this.O.length;) this.O.shift()()
            };
            var J = function(a) {
                a && "function" == typeof a.P && a.P()
            };
            var K = function(a, b) {
                this.type = a;
                this.h = this.o = b;
                this.l = !1;
                this.dd = !0
            };
            K.prototype.C = function() {
                this.l = !0
            };
            K.prototype.w = function() {
                this.dd = !1
            };
            var Oe = function(a) {
                a.C()
            };
            var Pe = function(a, b) {
                K.call(this, "adError");
                this.g = a;
                this.A = b ? b : null
            };
            x(Pe, K);
            Pe.prototype.G = function() {
                return this.g
            };
            Pe.prototype.B = function() {
                return this.A
            };
            var L = function(a, b, c) {
                K.call(this, a);
                this.G = b;
                this.A = null != c ? c : null
            };
            x(L, K);
            L.prototype.D = function() {
                return this.G
            };
            L.prototype.F = function() {
                return this.A
            };
            var Qe = function(a) {
                    this.g = a
                },
                Te = function() {
                    var a = Re(M);
                    return Se(a, "disableExperiments")
                },
                Se = function(a, b) {
                    return tb(a.g, b) && (a = a.g[b], "boolean" == typeof a) ? a : !1
                },
                Ue = function(a) {
                    if (tb(a.g, "forceExperimentIds")) {
                        a = a.g.forceExperimentIds;
                        var b = [],
                            c = 0;
                        la(a) && A(a, function(a) {
                            r(a) && (b[c++] = a)
                        });
                        return b
                    }
                    return null
                };
            var Ve = function(a) {
                    return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
                },
                Xe = function(a) {
                    a = String(a);
                    if (Ve(a)) try {
                        return eval("(" + a + ")")
                    } catch (b) {}
                    throw Error("Invalid JSON string: " + a);
                },
                ff = function(a) {
                    var b = [];
                    df(new ef, a, b);
                    return b.join("")
                },
                ef = function() {},
                df = function(a,
                    b, c) {
                    if (null == b) c.push("null");
                    else {
                        if ("object" == typeof b) {
                            if (la(b)) {
                                var d = b;
                                b = d.length;
                                c.push("[");
                                for (var e = "", f = 0; f < b; f++) c.push(e), df(a, d[f], c), e = ",";
                                c.push("]");
                                return
                            }
                            if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                            else {
                                c.push("{");
                                e = "";
                                for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), gf(d, c), c.push(":"), df(a, f, c), e = ","));
                                c.push("}");
                                return
                            }
                        }
                        switch (typeof b) {
                            case "string":
                                gf(b, c);
                                break;
                            case "number":
                                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                                break;
                            case "boolean":
                                c.push(String(b));
                                break;
                            case "function":
                                c.push("null");
                                break;
                            default:
                                throw Error("Unknown type: " + typeof b);
                        }
                    }
                },
                hf = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "/": "\\/",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t",
                    "\x0B": "\\u000b"
                },
                jf = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
                gf = function(a, b) {
                    b.push('"', a.replace(jf, function(a) {
                        var b = hf[a];
                        b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), hf[a] = b);
                        return b
                    }), '"')
                };
            var kf = function(a) {
                return function() {
                    return a
                }
            };
            var lf = "StopIteration" in m ? m.StopIteration : {
                    message: "StopIteration",
                    stack: ""
                },
                mf = function() {};
            mf.prototype.next = function() {
                throw lf;
            };
            mf.prototype.La = function() {
                return this
            };
            var nf = function(a) {
                    if (a instanceof mf) return a;
                    if ("function" == typeof a.La) return a.La(!1);
                    if (ma(a)) {
                        var b = 0,
                            c = new mf;
                        c.next = function() {
                            for (;;) {
                                if (b >= a.length) throw lf;
                                if (b in a) return a[b++];
                                b++
                            }
                        };
                        return c
                    }
                    throw Error("Not implemented");
                },
                of = function(a, b, c) {
                    if (ma(a)) try {
                        A(a, b, c)
                    } catch (d) {
                        if (d !== lf) throw d;
                    } else {
                        a = nf(a);
                        try {
                            for (;;) b.call(c, a.next(), void 0, a)
                        } catch (d) {
                            if (d !== lf) throw d;
                        }
                    }
                };
            var pf = function(a, b) {
                this.h = {};
                this.g = [];
                this.o = this.l = 0;
                var c = arguments.length;
                if (1 < c) {
                    if (c % 2) throw Error("Uneven number of arguments");
                    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
                } else if (a) {
                    a instanceof pf ? (c = a.Pa(), d = a.ca()) : (c = rb(a), d = qb(a));
                    for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
                }
            };
            h = pf.prototype;
            h.Ea = function() {
                return this.l
            };
            h.ca = function() {
                qf(this);
                for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
                return a
            };
            h.Pa = function() {
                qf(this);
                return this.g.concat()
            };
            h.isEmpty = function() {
                return 0 == this.l
            };
            h.clear = function() {
                this.h = {};
                this.o = this.l = this.g.length = 0
            };
            h.Va = function(a) {
                return rf(this.h, a) ? (delete this.h[a], this.l--, this.o++, this.g.length > 2 * this.l && qf(this), !0) : !1
            };
            var qf = function(a) {
                var b, c;
                if (a.l != a.g.length) {
                    for (b = c = 0; c < a.g.length;) {
                        var d = a.g[c];
                        rf(a.h, d) && (a.g[b++] = d);
                        c++
                    }
                    a.g.length = b
                }
                if (a.l != a.g.length) {
                    var e = {};
                    for (b = c = 0; c < a.g.length;) d = a.g[c], rf(e, d) || (a.g[b++] = d, e[d] = 1), c++;
                    a.g.length = b
                }
            };
            h = pf.prototype;
            h.get = function(a, b) {
                return rf(this.h, a) ? this.h[a] : b
            };
            h.set = function(a, b) {
                rf(this.h, a) || (this.l++, this.g.push(a), this.o++);
                this.h[a] = b
            };
            h.forEach = function(a, b) {
                for (var c = this.Pa(), d = 0; d < c.length; d++) {
                    var e = c[d],
                        f = this.get(e);
                    a.call(b, f, e, this)
                }
            };
            h.clone = function() {
                return new pf(this)
            };
            h.La = function(a) {
                qf(this);
                var b = 0,
                    c = this.o,
                    d = this,
                    e = new mf;
                e.next = function() {
                    if (c != d.o) throw Error("The map has changed since the iterator was created");
                    if (b >= d.g.length) throw lf;
                    var e = d.g[b++];
                    return a ? e : d.h[e]
                };
                return e
            };
            var rf = function(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            };
            var sf = function(a) {
                if (a.ca && "function" == typeof a.ca) return a.ca();
                if (q(a)) return a.split("");
                if (ma(a)) {
                    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                    return b
                }
                return qb(a)
            };
            var tf = function(a, b) {
                this.g = this.G = this.l = "";
                this.A = null;
                this.w = this.C = "";
                this.o = !1;
                var c;
                a instanceof tf ? (this.o = p(b) ? b : a.o, uf(this, a.l), this.G = a.G, this.g = a.g, vf(this, a.A), this.C = a.C, wf(this, a.h.clone()), this.w = a.w) : a && (c = String(a).match(Nd)) ? (this.o = !!b, uf(this, c[1] || "", !0), this.G = xf(c[2] || ""), this.g = xf(c[3] || "", !0), vf(this, c[4]), this.C = xf(c[5] || "", !0), wf(this, c[6] || "", !0), this.w = xf(c[7] || "")) : (this.o = !!b, this.h = new yf(null, 0, this.o))
            };
            tf.prototype.toString = function() {
                var a = [],
                    b = this.l;
                b && a.push(zf(b, Af, !0), ":");
                var c = this.g;
                if (c || "file" == b) a.push("//"), (b = this.G) && a.push(zf(b, Af, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.A, null != c && a.push(":", String(c));
                if (c = this.C) this.g && "/" != c.charAt(0) && a.push("/"), a.push(zf(c, "/" == c.charAt(0) ? Bf : Cf, !0));
                (c = this.h.toString()) && a.push("?", c);
                (c = this.w) && a.push("#", zf(c, Df));
                return a.join("")
            };
            tf.prototype.clone = function() {
                return new tf(this)
            };
            var uf = function(a, b, c) {
                    a.l = c ? xf(b, !0) : b;
                    a.l && (a.l = a.l.replace(/:$/, ""))
                },
                vf = function(a, b) {
                    if (b) {
                        b = Number(b);
                        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                        a.A = b
                    } else a.A = null
                },
                wf = function(a, b, c) {
                    b instanceof yf ? (a.h = b, Ef(a.h, a.o)) : (c || (b = zf(b, Ff)), a.h = new yf(b, 0, a.o))
                },
                xf = function(a, b) {
                    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
                },
                zf = function(a, b, c) {
                    return q(a) ? (a = encodeURI(a).replace(b, Gf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
                },
                Gf = function(a) {
                    a = a.charCodeAt(0);
                    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
                },
                Af = /[#\/\?@]/g,
                Cf = /[\#\?:]/g,
                Bf = /[\#\?]/g,
                Ff = /[\#\?@]/g,
                Df = /#/g,
                yf = function(a, b, c) {
                    this.h = this.g = null;
                    this.l = a || null;
                    this.o = !!c
                },
                Hf = function(a) {
                    a.g || (a.g = new pf, a.h = 0, a.l && Od(a.l, function(b, c) {
                        b = decodeURIComponent(b.replace(/\+/g, " "));
                        Hf(a);
                        a.l = null;
                        b = If(a, b);
                        var d = a.g.get(b);
                        d || a.g.set(b, d = []);
                        d.push(c);
                        a.h += 1
                    }))
                };
            yf.prototype.Ea = function() {
                Hf(this);
                return this.h
            };
            var Jf = function(a, b) {
                Hf(a);
                b = If(a, b);
                rf(a.g.h, b) && (a.l = null, a.h -= a.g.get(b).length, a.g.Va(b))
            };
            yf.prototype.clear = function() {
                this.g = this.l = null;
                this.h = 0
            };
            yf.prototype.isEmpty = function() {
                Hf(this);
                return 0 == this.h
            };
            var Kf = function(a, b) {
                Hf(a);
                b = If(a, b);
                return rf(a.g.h, b)
            };
            h = yf.prototype;
            h.forEach = function(a, b) {
                Hf(this);
                this.g.forEach(function(c, d) {
                    A(c, function(c) {
                        a.call(b, c, d, this)
                    }, this)
                }, this)
            };
            h.Pa = function() {
                Hf(this);
                for (var a = this.g.ca(), b = this.g.Pa(), c = [], d = 0; d < b.length; d++)
                    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
                return c
            };
            h.ca = function(a) {
                Hf(this);
                var b = [];
                if (q(a)) Kf(this, a) && (b = bb(b, this.g.get(If(this, a))));
                else {
                    a = this.g.ca();
                    for (var c = 0; c < a.length; c++) b = bb(b, a[c])
                }
                return b
            };
            h.set = function(a, b) {
                Hf(this);
                this.l = null;
                a = If(this, a);
                Kf(this, a) && (this.h -= this.g.get(a).length);
                this.g.set(a, [b]);
                this.h += 1;
                return this
            };
            h.get = function(a, b) {
                a = a ? this.ca(a) : [];
                return 0 < a.length ? String(a[0]) : b
            };
            h.toString = function() {
                if (this.l) return this.l;
                if (!this.g) return "";
                for (var a = [], b = this.g.Pa(), c = 0; c < b.length; c++)
                    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ca(d), f = 0; f < d.length; f++) {
                        var g = e;
                        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                        a.push(g)
                    }
                return this.l = a.join("&")
            };
            h.clone = function() {
                var a = new yf;
                a.l = this.l;
                this.g && (a.g = this.g.clone(), a.h = this.h);
                return a
            };
            var If = function(a, b) {
                    b = String(b);
                    a.o && (b = b.toLowerCase());
                    return b
                },
                Ef = function(a, b) {
                    b && !a.o && (Hf(a), a.l = null, a.g.forEach(function(a, b) {
                        var c = b.toLowerCase();
                        b != c && (Jf(this, b), Jf(this, c), 0 < a.length && (this.l = null, this.g.set(If(this, c), cb(a)), this.h += a.length))
                    }, a));
                    a.o = b
                };
            var Mf = function(a) {
                    var b = a || Wd();
                    a = b.length - 1;
                    var c = Xd(b),
                        b = c.g,
                        d = c.h,
                        c = [];
                    d ? (b && c.push(Lf(a, [d.url, 2], 0, [b.url, 0], b.depth)), c.push(Lf(a, [d.url, 2], 0))) : b.url && (c.push(Lf(a, void 0, void 0, [b.url, 0], b.depth)), (d = (d = vd.exec(b.url)) && d[0] || "") && c.push(Lf(a, [d, 1], b.depth)));
                    c.push(Lf(a));
                    return c
                },
                Lf = function(a, b, c, d, e) {
                    a = [a];
                    if (p(b) && p(c)) {
                        for (var f = 0; f < c; f++) a.push("");
                        a.push(b)
                    }
                    if (p(d) && p(e)) {
                        b = e - a.length + 1;
                        for (f = 0; f < b; f++) a.push("");
                        a.push(d)
                    }
                    return a
                },
                Nf = function() {
                    var a = Mf();
                    return Ta(a, function(a) {
                        return $d(a)
                    })
                };
            var O = function() {
                    this.A = "always";
                    this.F = 4;
                    this.I = 1;
                    this.o = !0;
                    this.l = this.U = this.g = !1;
                    this.C = "en";
                    this.K = this.D = !1;
                    this.H = this.B = "";
                    this.O = null;
                    this.G = !1;
                    this.M = this.J = -1;
                    this.h = !1;
                    try {
                        this.V = Mf(void 0)[0]
                    } catch (a) {}
                },
                Of = "af am ar bg bn ca cs da de el en en_gb es es_419 et eu fa fi fil fr fr_ca gl gu he hi hr hu id in is it iw ja kn ko lt lv ml mr ms nb nl no pl pt_br pt_pt ro ru sk sl sr sv sw ta te th tr uk ur vi zh_cn zh_hk zh_tw zu".split(" "),
                Pf = function(a) {
                    a = Ka(a);
                    wa(a) || (a = a.substring(0, 20));
                    return a
                };
            h = O.prototype;
            h.vf = function(a) {
                this.A = a
            };
            h.kf = function() {
                return this.A
            };
            h.Af = function(a) {
                this.F = a
            };
            h.nf = function() {
                return this.F
            };
            h.Ef = function(a) {
                this.Z = a
            };
            h.rf = function() {
                return this.Z
            };
            h.Hf = function(a) {
                "boolean" == typeof a && (this.I = a ? 1 : 0)
            };
            h.If = function(a) {
                this.I = a
            };
            h.uf = function(a) {
                this.o = a
            };
            h.sf = function() {
                return this.o
            };
            h.Ff = function(a) {
                this.g = a
            };
            h.Sf = function() {
                return this.g
            };
            h.Za = function() {
                return this.U
            };
            h.og = function() {
                return !0
            };
            h.ma = function() {
                return !1
            };
            h.Nc = function() {
                return !1
            };
            h.yf = function(a) {
                this.D = a
            };
            h.tf = function() {
                return this.D
            };
            h.zf = function(a) {
                this.K = a
            };
            h.Wb = function() {
                return this.K
            };
            h.ha = function() {
                return !1
            };
            h.Rf = function() {
                return !1
            };
            h.Vb = function() {
                return !1
            };
            h.jg = function() {
                return !1
            };
            h.lg = function(a) {
                if (null != a) {
                    a = a.toLowerCase().replace("-", "_");
                    if (!Ya(Of, a) && (a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "", !Ya(Of, a))) return;
                    this.C = a
                }
            };
            h.Ld = function() {
                return this.C
            };
            h.Cf = function(a) {
                this.B = Pf(a)
            };
            h.pf = function() {
                return this.B
            };
            h.Df = function(a) {
                this.H = Pf(a)
            };
            h.qf = function() {
                return this.H
            };
            var Re = function(a) {
                if (null == a.O) {
                    var b = {};
                    var c = (new tf(H().location.href)).h;
                    if (Kf(c, "tcnfp")) try {
                        b = Xe(c.get("tcnfp"))
                    } catch (d) {}
                    a.O = new Qe(b)
                }
                return a.O
            };
            h = O.prototype;
            h.xf = function(a) {
                this.G = a
            };
            h.mf = function() {
                return this.G
            };
            h.pg = function() {
                return !1
            };
            h.Bf = function(a) {
                this.J = a
            };
            h.Gf = function(a) {
                this.M = a
            };
            h.wf = function(a) {
                this.h = a
            };
            h.lf = function() {
                return this.h
            };
            var M = new O;
            window.console && "function" === typeof window.console.log && v(window.console.log, window.console);
            var Qf = function() {
                    return Math.round(ta() / 1E3)
                },
                Rf = function(a) {
                    var b = window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
                    return null != b ? b : null != a ? a : Qf()
                };
            var Sf = function(a) {
                for (var b = [], c = a = H(a.ownerDocument); c != a.top; c = c.parent)
                    if (c.frameElement) b.push(c.frameElement);
                    else break;
                return b
            };
            var Tf = null,
                Uf = function() {
                    this.g = {};
                    this.h = 0
                },
                Vf = function(a, b) {
                    this.C = a;
                    this.o = !0;
                    this.g = b
                };
            Vf.prototype.h = function() {
                return this.g
            };
            Vf.prototype.l = function() {
                return String(this.g)
            };
            var Wf = function(a, b) {
                Vf.call(this, String(a), b);
                this.w = a;
                this.g = !!b
            };
            x(Wf, Vf);
            Wf.prototype.l = function() {
                return this.g ? "1" : "0"
            };
            var Xf = function(a, b) {
                Vf.call(this, a, b)
            };
            x(Xf, Vf);
            Xf.prototype.l = function() {
                return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : ""
            };
            var Yf = function(a) {
                    if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
                        a = a.split(".");
                        var b = Number(a[0]),
                            c = Number(a[1]);
                        return new Xf("", new ed(c, b, Number(a[3]) - c, Number(a[2]) - b))
                    }
                    return new Xf("", new ed(0, 0, 0, 0))
                },
                Zf = function() {
                    Tf || (Tf = new Uf);
                    return Tf
                },
                $f = function(a, b) {
                    a.g[b.C] = b
                };
            var ag = function(a) {
                    var b = new ed(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                        c = new ed(0, 0, 0, 0);
                    if (!a || 0 == a.length) return c;
                    for (var d = 0; d < a.length; d++) {
                        a: {
                            var e = b;
                            var f = a[d],
                                g = Math.max(e.left, f.left),
                                k = Math.min(e.left + e.width, f.left + f.width);
                            if (g <= k) {
                                var l = Math.max(e.top, f.top),
                                    f = Math.min(e.top + e.height, f.top + f.height);
                                if (l <= f) {
                                    e.left = g;
                                    e.top = l;
                                    e.width = k - g;
                                    e.height = f - l;
                                    e = !0;
                                    break a
                                }
                            }
                            e = !1
                        }
                        if (!e) return c
                    }
                    return b
                },
                bg = function(a, b) {
                    var c = a.getBoundingClientRect();
                    a = od(a,
                        b);
                    return new ed(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
                },
                cg = function(a, b, c) {
                    if (b && c) {
                        a: {
                            var d = Math.max(b.left, c.left);
                            var e = Math.min(b.left + b.width, c.left + c.width);
                            if (d <= e) {
                                var f = Math.max(b.top, c.top),
                                    g = Math.min(b.top + b.height, c.top + c.height);
                                if (f <= g) {
                                    d = new ed(d, f, e - d, g - f);
                                    break a
                                }
                            }
                            d = null
                        }
                        e = d ? d.height * d.width : 0;
                        f = d ? b.height * b.width : 0;
                        d = d && f ? Math.round(e / f * 100) : 0;
                        $f(a, new Vf("vp", d));
                        d && 0 < d ? (e = fd(b), f = fd(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;
                        $f(a, new Wf(512,
                            e));
                        d && 0 < d ? (e = fd(b), f = fd(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;
                        $f(a, new Wf(1024, e));
                        d && 0 < d ? (e = fd(b), f = fd(c), e = e.left >= f.left && e.left < f.right) : e = !1;
                        $f(a, new Wf(2048, e));
                        d && 0 < d ? (b = fd(b), c = fd(c), c = b.right <= c.right && b.right > c.left) : c = !1;
                        $f(a, new Wf(4096, c))
                    }
                };
            var dg = !D || 9 <= Number(dc),
                eg = D && !E("9");
            !Pb || E("528");
            Ob && E("1.9b") || D && E("8") || Kb && E("9.5") || Pb && E("528");
            Ob && !E("8") || D && E("9");
            var fg = function(a) {
                    return Pb ? "webkit" + a : Kb ? "o" + a.toLowerCase() : a.toLowerCase()
                },
                gg = {
                    CLICK: "click",
                    $j: "rightclick",
                    kh: "dblclick",
                    Gi: "mousedown",
                    Mi: "mouseup",
                    Li: "mouseover",
                    Ki: "mouseout",
                    Ji: "mousemove",
                    Hi: "mouseenter",
                    Ii: "mouseleave",
                    fk: "selectionchange",
                    gk: "selectstart",
                    hl: "wheel",
                    li: "keypress",
                    ki: "keydown",
                    mi: "keyup",
                    Qg: "blur",
                    Ph: "focus",
                    lh: "deactivate",
                    Qh: D ? "focusin" : "DOMFocusIn",
                    Rh: D ? "focusout" : "DOMFocusOut",
                    Ug: "change",
                    Wj: "reset",
                    ek: "select",
                    wk: "submit",
                    fi: "input",
                    Mj: "propertychange",
                    Dh: "dragstart",
                    yh: "drag",
                    Ah: "dragenter",
                    Ch: "dragover",
                    Bh: "dragleave",
                    Eh: "drop",
                    zh: "dragend",
                    Mk: "touchstart",
                    Lk: "touchmove",
                    Kk: "touchend",
                    Jk: "touchcancel",
                    Og: "beforeunload",
                    bh: "consolemessage",
                    fh: "contextmenu",
                    nh: "devicemotion",
                    oh: "deviceorientation",
                    sh: "DOMContentLoaded",
                    rd: "error",
                    Yh: "help",
                    ri: "load",
                    Ai: "losecapture",
                    nj: "orientationchange",
                    Sj: "readystatechange",
                    Xj: "resize",
                    bk: "scroll",
                    Tk: "unload",
                    Rg: "canplay",
                    Sg: "canplaythrough",
                    Fh: "durationchange",
                    Gh: "emptied",
                    ENDED: "ended",
                    ui: "loadeddata",
                    wi: "loadedmetadata",
                    Gb: "pause",
                    yd: "play",
                    PLAYING: "playing",
                    Nj: "ratechange",
                    ck: "seeked",
                    dk: "seeking",
                    sk: "stalled",
                    xk: "suspend",
                    Dk: "timeupdate",
                    cl: "volumechange",
                    fl: "waiting",
                    qk: "sourceopen",
                    pk: "sourceended",
                    nk: "sourceclosed",
                    sg: "abort",
                    Vk: "update",
                    Yk: "updatestart",
                    Wk: "updateend",
                    Xh: "hashchange",
                    wj: "pagehide",
                    xj: "pageshow",
                    Jj: "popstate",
                    hh: "copy",
                    Aj: "paste",
                    ih: "cut",
                    Jg: "beforecopy",
                    Kg: "beforecut",
                    Mg: "beforepaste",
                    lj: "online",
                    ij: "offline",
                    Ei: "message",
                    ah: "connect",
                    gi: "install",
                    tg: "activate",
                    Mh: "fetch",
                    Sh: "foreignfetch",
                    Fi: "messageerror",
                    tk: "statechange",
                    Xk: "updatefound",
                    gh: "controllerchange",
                    Ig: fg("AnimationStart"),
                    Gg: fg("AnimationEnd"),
                    Hg: fg("AnimationIteration"),
                    Nk: fg("TransitionEnd"),
                    Cj: "pointerdown",
                    Ij: "pointerup",
                    Bj: "pointercancel",
                    Fj: "pointermove",
                    Hj: "pointerover",
                    Gj: "pointerout",
                    Dj: "pointerenter",
                    Ej: "pointerleave",
                    Wh: "gotpointercapture",
                    Bi: "lostpointercapture",
                    Ri: "MSGestureChange",
                    Si: "MSGestureEnd",
                    Ti: "MSGestureHold",
                    Ui: "MSGestureStart",
                    Vi: "MSGestureTap",
                    Wi: "MSGotPointerCapture",
                    Xi: "MSInertiaStart",
                    Yi: "MSLostPointerCapture",
                    Zi: "MSPointerCancel",
                    $i: "MSPointerDown",
                    aj: "MSPointerEnter",
                    bj: "MSPointerHover",
                    cj: "MSPointerLeave",
                    dj: "MSPointerMove",
                    ej: "MSPointerOut",
                    fj: "MSPointerOver",
                    gj: "MSPointerUp",
                    zk: "text",
                    Ak: D ? "textinput" : "textInput",
                    Zg: "compositionstart",
                    $g: "compositionupdate",
                    Yg: "compositionend",
                    Lg: "beforeinput",
                    Kh: "exit",
                    si: "loadabort",
                    ti: "loadcommit",
                    xi: "loadredirect",
                    yi: "loadstart",
                    zi: "loadstop",
                    Zj: "responsive",
                    kk: "sizechanged",
                    Uk: "unresponsive",
                    al: "visibilitychange",
                    vk: "storage",
                    xh: "DOMSubtreeModified",
                    th: "DOMNodeInserted",
                    vh: "DOMNodeRemoved",
                    wh: "DOMNodeRemovedFromDocument",
                    uh: "DOMNodeInsertedIntoDocument",
                    qh: "DOMAttrModified",
                    rh: "DOMCharacterDataModified",
                    Ng: "beforeprint",
                    Cg: "afterprint"
                };
            var hg = function(a, b) {
                K.call(this, a ? a.type : "");
                this.relatedTarget = this.h = this.o = null;
                this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
                this.key = "";
                this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
                this.g = null;
                if (a) {
                    var c = this.type = a.type,
                        d = a.changedTouches ? a.changedTouches[0] : null;
                    this.o = a.target || a.srcElement;
                    this.h = b;
                    (b = a.relatedTarget) ? Ob && (Hb(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
                    this.relatedTarget = b;
                    null === d ? (this.clientX = void 0 !==
                        a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
                    this.button = a.button;
                    this.key = a.key || "";
                    this.ctrlKey = a.ctrlKey;
                    this.altKey = a.altKey;
                    this.shiftKey = a.shiftKey;
                    this.metaKey = a.metaKey;
                    this.g = a;
                    a.defaultPrevented && this.w()
                }
            };
            x(hg, K);
            hg.prototype.C = function() {
                hg.N.C.call(this);
                this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
            };
            hg.prototype.w = function() {
                hg.N.w.call(this);
                var a = this.g;
                if (a.preventDefault) a.preventDefault();
                else if (a.returnValue = !1, eg) try {
                    if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
                } catch (b) {}
            };
            var ig = "closure_listenable_" + (1E6 * Math.random() | 0),
                jg = function(a) {
                    return !(!a || !a[ig])
                },
                kg = 0;
            var lg = function(a, b, c, d, e) {
                    this.listener = a;
                    this.g = null;
                    this.src = b;
                    this.type = c;
                    this.capture = !!d;
                    this.ub = e;
                    this.key = ++kg;
                    this.Xa = this.ob = !1
                },
                mg = function(a) {
                    a.Xa = !0;
                    a.listener = null;
                    a.g = null;
                    a.src = null;
                    a.ub = null
                };
            var ng = function(a) {
                    this.src = a;
                    this.g = {};
                    this.h = 0
                },
                pg = function(a, b, c, d, e, f) {
                    var g = b.toString();
                    b = a.g[g];
                    b || (b = a.g[g] = [], a.h++);
                    var k = og(b, c, e, f); - 1 < k ? (a = b[k], d || (a.ob = !1)) : (a = new lg(c, a.src, g, !!e, f), a.ob = d, b.push(a));
                    return a
                },
                qg = function(a, b) {
                    var c = b.type;
                    c in a.g && ab(a.g[c], b) && (mg(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
                },
                rg = function(a, b, c, d, e) {
                    a = a.g[b.toString()];
                    b = -1;
                    a && (b = og(a, c, d, e));
                    return -1 < b ? a[b] : null
                },
                og = function(a, b, c, d) {
                    for (var e = 0; e < a.length; ++e) {
                        var f = a[e];
                        if (!f.Xa && f.listener == b &&
                            f.capture == !!c && f.ub == d) return e
                    }
                    return -1
                };
            var sg = "closure_lm_" + (1E6 * Math.random() | 0),
                tg = {},
                ug = 0,
                vg = function(a, b, c, d, e) {
                    if (la(b)) {
                        for (var f = 0; f < b.length; f++) vg(a, b[f], c, d, e);
                        return null
                    }
                    c = wg(c);
                    return jg(a) ? a.h(b, c, d, e) : xg(a, b, c, !1, d, e)
                },
                xg = function(a, b, c, d, e, f) {
                    if (!b) throw Error("Invalid event type");
                    var g = !!e,
                        k = yg(a);
                    k || (a[sg] = k = new ng(a));
                    c = pg(k, b, c, d, e, f);
                    if (c.g) return c;
                    d = zg();
                    c.g = d;
                    d.src = a;
                    d.listener = c;
                    if (a.addEventListener) a.addEventListener(b.toString(), d, g);
                    else if (a.attachEvent) a.attachEvent(Ag(b.toString()), d);
                    else throw Error("addEventListener and attachEvent are unavailable.");
                    ug++;
                    return c
                },
                zg = function() {
                    var a = Bg,
                        b = dg ? function(c) {
                            return a.call(b.src, b.listener, c)
                        } : function(c) {
                            c = a.call(b.src, b.listener, c);
                            if (!c) return c
                        };
                    return b
                },
                Cg = function(a, b, c, d, e) {
                    if (la(b)) {
                        for (var f = 0; f < b.length; f++) Cg(a, b[f], c, d, e);
                        return null
                    }
                    c = wg(c);
                    return jg(a) ? pg(a.G, String(b), c, !0, d, e) : xg(a, b, c, !0, d, e)
                },
                Dg = function(a, b, c, d, e) {
                    if (la(b))
                        for (var f = 0; f < b.length; f++) Dg(a, b[f], c, d, e);
                    else c = wg(c), jg(a) ? a.C(b, c, d, e) : a && (a = yg(a)) && (b = rg(a, b, c, !!d, e)) && Eg(b)
                },
                Eg = function(a) {
                    if (!r(a) && a && !a.Xa) {
                        var b =
                            a.src;
                        if (jg(b)) qg(b.G, a);
                        else {
                            var c = a.type,
                                d = a.g;
                            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Ag(c), d);
                            ug--;
                            (c = yg(b)) ? (qg(c, a), 0 == c.h && (c.src = null, b[sg] = null)) : mg(a)
                        }
                    }
                },
                Ag = function(a) {
                    return a in tg ? tg[a] : tg[a] = "on" + a
                },
                Gg = function(a, b, c, d) {
                    var e = !0;
                    if (a = yg(a))
                        if (b = a.g[b.toString()])
                            for (b = b.concat(), a = 0; a < b.length; a++) {
                                var f = b[a];
                                f && f.capture == c && !f.Xa && (f = Fg(f, d), e = e && !1 !== f)
                            }
                    return e
                },
                Fg = function(a, b) {
                    var c = a.listener,
                        d = a.ub || a.src;
                    a.ob && Eg(a);
                    return c.call(d,
                        b)
                },
                Bg = function(a, b) {
                    if (a.Xa) return !0;
                    if (!dg) {
                        var c = b || fa("window.event");
                        b = new hg(c, this);
                        var d = !0;
                        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                            a: {
                                var e = !1;
                                if (0 == c.keyCode) try {
                                    c.keyCode = -1;
                                    break a
                                } catch (g) {
                                    e = !0
                                }
                                if (e || void 0 == c.returnValue) c.returnValue = !0
                            }
                            c = [];
                            for (e = b.h; e; e = e.parentNode) c.push(e);
                            for (var e = a.type, f = c.length - 1; !b.l && 0 <= f; f--) b.h = c[f],
                            a = Gg(c[f], e, !0, b),
                            d = d && a;
                            for (f = 0; !b.l && f < c.length; f++) b.h = c[f],
                            a = Gg(c[f], e, !1, b),
                            d = d && a
                        }
                        return d
                    }
                    return Fg(a, new hg(b, this))
                },
                yg = function(a) {
                    a = a[sg];
                    return a instanceof
                    ng ? a : null
                },
                Hg = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
                wg = function(a) {
                    if (u(a)) return a;
                    a[Hg] || (a[Hg] = function(b) {
                        return a.handleEvent(b)
                    });
                    return a[Hg]
                };
            var P = function() {
                Me.call(this);
                this.G = new ng(this);
                this.Mb = this;
                this.ia = null
            };
            x(P, Me);
            P.prototype[ig] = !0;
            P.prototype.bc = function(a) {
                this.ia = a
            };
            P.prototype.addEventListener = function(a, b, c, d) {
                vg(this, a, b, c, d)
            };
            P.prototype.removeEventListener = function(a, b, c, d) {
                Dg(this, a, b, c, d)
            };
            var Q = function(a, b) {
                var c, d = a.ia;
                if (d)
                    for (c = []; d; d = d.ia) c.push(d);
                a = a.Mb;
                d = b.type || b;
                if (q(b)) b = new K(b, a);
                else if (b instanceof K) b.o = b.o || a;
                else {
                    var e = b;
                    b = new K(d, a);
                    Bb(b, e)
                }
                var e = !0;
                if (c)
                    for (var f = c.length - 1; !b.l && 0 <= f; f--) {
                        var g = b.h = c[f];
                        e = Ig(g, d, !0, b) && e
                    }
                b.l || (g = b.h = a, e = Ig(g, d, !0, b) && e, b.l || (e = Ig(g, d, !1, b) && e));
                if (c)
                    for (f = 0; !b.l && f < c.length; f++) g = b.h = c[f], e = Ig(g, d, !1, b) && e
            };
            P.prototype.L = function() {
                P.N.L.call(this);
                if (this.G) {
                    var a = this.G,
                        b = 0,
                        c;
                    for (c in a.g) {
                        for (var d = a.g[c], e = 0; e < d.length; e++) ++b, mg(d[e]);
                        delete a.g[c];
                        a.h--
                    }
                }
                this.ia = null
            };
            P.prototype.h = function(a, b, c, d) {
                return pg(this.G, String(a), b, !1, c, d)
            };
            P.prototype.C = function(a, b, c, d) {
                var e = this.G;
                a = String(a).toString();
                if (a in e.g) {
                    var f = e.g[a];
                    b = og(f, b, c, d); - 1 < b ? (mg(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.h--), e = !0) : e = !1
                } else e = !1;
                return e
            };
            var Ig = function(a, b, c, d) {
                b = a.G.g[String(b)];
                if (!b) return !0;
                b = b.concat();
                for (var e = !0, f = 0; f < b.length; ++f) {
                    var g = b[f];
                    if (g && !g.Xa && g.capture == c) {
                        var k = g.listener,
                            l = g.ub || g.src;
                        g.ob && qg(a.G, g);
                        e = !1 !== k.call(l, d) && e
                    }
                }
                return e && 0 != d.dd
            };
            var Jg = function(a, b) {
                P.call(this);
                this.o = a || 1;
                this.l = b || m;
                this.A = v(this.D, this);
                this.B = ta()
            };
            x(Jg, P);
            Jg.prototype.w = !1;
            Jg.prototype.g = null;
            Jg.prototype.D = function() {
                if (this.w) {
                    var a = ta() - this.B;
                    0 < a && a < .8 * this.o ? this.g = this.l.setTimeout(this.A, this.o - a) : (this.g && (this.l.clearTimeout(this.g), this.g = null), Q(this, "tick"), this.w && (this.g = this.l.setTimeout(this.A, this.o), this.B = ta()))
                }
            };
            Jg.prototype.start = function() {
                this.w = !0;
                this.g || (this.g = this.l.setTimeout(this.A, this.o), this.B = ta())
            };
            var Kg = function(a) {
                a.w = !1;
                a.g && (a.l.clearTimeout(a.g), a.g = null)
            };
            Jg.prototype.L = function() {
                Jg.N.L.call(this);
                Kg(this);
                delete this.l
            };
            var Lg = function(a, b, c) {
                if (u(a)) c && (a = v(a, c));
                else if (a && "function" == typeof a.handleEvent) a = v(a.handleEvent, a);
                else throw Error("Invalid listener argument");
                return 2147483647 < Number(b) ? -1 : m.setTimeout(a, b || 0)
            };
            var Mg = function(a) {
                return Ta(a, function(a) {
                    a = a.toString(16);
                    return 1 < a.length ? a : "0" + a
                }).join("")
            };
            var Ng = C("Firefox"),
                Og = Eb() || C("iPod"),
                Pg = C("iPad"),
                Qg = C("Android") && !(Cb() || C("Firefox") || C("Opera") || C("Silk")),
                Rg = Cb(),
                Sg = Db() && !Fb();
            var Tg = null,
                Ug = null;
            var Vg = function() {
                this.h = -1
            };
            var Wg = function() {
                this.g = {};
                return this
            };
            Wg.prototype.set = function(a, b) {
                this.g[a] = b
            };
            var Xg = function(a, b) {
                a.g.eb = yb(a.g, "eb", 0) | b
            };
            Wg.prototype.get = function(a) {
                return yb(this.g, a, null)
            };
            var Yg = function(a, b) {
                var c = 0;
                sb(H(), "ima", "video", "client", "tagged") && (c = 1);
                var d = null;
                a && (d = a());
                if (d) {
                    a = Zf();
                    a.g = {};
                    var e = new Wf(32, !0);
                    e.o = !1;
                    $f(a, e);
                    e = H().document;
                    e = e.webkitVisibilityState || e.mozVisibilityState || e.visibilityState || e.msVisibilityState || "";
                    $f(a, new Wf(64, "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
                    try {
                        var f = H().top;
                        try {
                            var g = !!f.location.href || "" === f.location.href
                        } catch (w) {
                            g = !1
                        }
                        if (g) {
                            var k = Sf(d);
                            var l = k && 0 != k.length ? "1" : "0"
                        } else l = "2"
                    } catch (w) {
                        l = "2"
                    }
                    $f(a, new Wf(256,
                        "2" == l));
                    $f(a, new Wf(128, "1" == l));
                    k = g = H().top;
                    "2" == l && (k = H());
                    f = bg(d, k);
                    $f(a, new Xf("er", f));
                    try {
                        var n = k.document && !k.document.body ? null : Vc(k || window)
                    } catch (w) {
                        n = null
                    }
                    n ? (k = Wc(Sc(k.document).g), $f(a, new Wf(16384, !!k)), n = k ? new ed(k.x, k.y, n.width, n.height) : null) : n = null;
                    $f(a, new Xf("vi", n));
                    if (n && "1" == l) {
                        l = Sf(d);
                        d = [];
                        for (k = 0; k < l.length; k++)(e = bg(l[k], g)) && d.push(e);
                        d.push(n);
                        n = ag(d)
                    }
                    cg(a, f, n);
                    a.h && (l = Qf() - a.h, $f(a, new Vf("ts", l)));
                    a.h = Qf()
                } else a = Zf(), a.g = {}, a.h = Qf(), $f(a, new Wf(32, !1));
                this.l = a;
                this.g =
                    new Wg;
                this.g.set("ve", 4);
                c && Xg(this.g, 1);
                sb(H(), "ima", "video", "client", "crossdomainTag") && Xg(this.g, 4);
                sb(H(), "ima", "video", "client", "sdkTag") && Xg(this.g, 8);
                sb(H(), "ima", "video", "client", "jsTag") && Xg(this.g, 2);
                b && yb(b, "fullscreen", !1) && Xg(this.g, 16);
                this.h = b = null;
                if (c && (c = sb(H(), "ima", "video", "client"), c.getEData)) {
                    this.h = c.getEData();
                    if (c = sb(H(), "ima", "video", "client", "getLastSnapshotFromTop"))
                        if (a = c()) this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this.l, b = a.er, a = a.vi,
                            b && a && (b = Yf(b).h(), a = Yf(a).h(), l = null, yb(c.g, "er", null) && (l = yb(c.g, "er", null).h(), l.top += b.top, l.left += b.left, $f(c, new Xf("er", l))), yb(c.g, "vi", null) && (n = yb(c.g, "vi", null).h(), n.top += b.top, n.left += b.left, d = [], d.push(n), d.push(b), d.push(a), b = ag(d), cg(c, l, b), $f(c, new Xf("vi", a))));
                    a: {
                        if (this.h) {
                            if (this.h.getTagLoadTimestamp) {
                                b = this.h.getTagLoadTimestamp();
                                break a
                            }
                            if (this.h.getTimeSinceTagLoadSeconds) {
                                b = this.h.getTimeSinceTagLoadSeconds();
                                break a
                            }
                        }
                        b = null
                    }
                }
                this.g.set("td", Qf() - Rf(b))
            };
            var Zg = new Jg(200),
                $g = function(a, b) {
                    try {
                        var c = new Yg(a, b);
                        a = [];
                        var d = Number(c.g.get("eb")),
                            e = c.g.g;
                        "eb" in e && delete e.eb;
                        var f, g = c.g,
                            e = [],
                            k;
                        for (k in g.g) e.push(k + g.g[k]);
                        (f = e.join("_")) && a.push(f);
                        if (c.h) {
                            var l = c.h.serialize();
                            l && a.push(l)
                        }
                        var n, w = c.l;
                        f = d;
                        g = [];
                        f || (f = 0);
                        for (var z in w.g) {
                            var N = w.g[z];
                            if (N instanceof Wf) N.h() && (f |= N.w);
                            else {
                                var Z, V = w.g[z];
                                (Z = V.o ? V.l() : "") && g.push(z + Z)
                            }
                        }
                        g.push("eb" + String(f));
                        (n = g.join("_")) && a.push(n);
                        c.g.set("eb", d);
                        return a.join("_")
                    } catch (ca) {
                        return "tle;" + Ga(ca.name,
                            12) + ";" + Ga(ca.message, 40)
                    }
                },
                ah = function(a) {
                    vg(Zg, "tick", function() {
                        var b = $g(a),
                            c = fa("ima.common.updateEngagementDetectionValue");
                        c && u(c) && c(b)
                    });
                    Zg.start();
                    Q(Zg, "tick")
                };
            var bh = {
                    currentTime: 1,
                    duration: 2,
                    isVpaid: 4,
                    volume: 8,
                    isYouTube: 16,
                    isPlaying: 32
                },
                vb = {
                    pc: "start",
                    FIRST_QUARTILE: "firstquartile",
                    MIDPOINT: "midpoint",
                    THIRD_QUARTILE: "thirdquartile",
                    COMPLETE: "complete",
                    wd: "metric",
                    Gb: "pause",
                    zd: "resume",
                    SKIPPED: "skip",
                    VIEWABLE_IMPRESSION: "viewable_impression",
                    xd: "mute",
                    Bd: "unmute",
                    FULLSCREEN: "fullscreen",
                    sd: "exitfullscreen",
                    ud: "fully_viewable_audible_half_duration_impression",
                    vd: "measurable_impression",
                    md: "abandon",
                    qd: "engagedview",
                    IMPRESSION: "impression",
                    pd: "creativeview",
                    LOADED: "loaded",
                    Lj: "progress",
                    Vg: "close",
                    Xg: "collapse",
                    rj: "overlay_resize",
                    sj: "overlay_unmeasurable_impression",
                    tj: "overlay_unviewable_impression",
                    vj: "overlay_viewable_immediate_impression",
                    uj: "overlay_viewable_end_of_session_impression"
                },
                ch = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
                dh = ["abandon"],
                eh = {
                    Sk: -1,
                    pc: 0,
                    FIRST_QUARTILE: 1,
                    MIDPOINT: 2,
                    THIRD_QUARTILE: 3,
                    COMPLETE: 4,
                    wd: 5,
                    Gb: 6,
                    zd: 7,
                    SKIPPED: 8,
                    VIEWABLE_IMPRESSION: 9,
                    xd: 10,
                    Bd: 11,
                    FULLSCREEN: 12,
                    sd: 13,
                    ud: 14,
                    vd: 15,
                    md: 16,
                    qd: 17,
                    IMPRESSION: 18,
                    pd: 19,
                    LOADED: 20
                };
            var fh = function() {};
            fh.prototype.reset = function() {};
            var gh = function() {
                return {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4
                }[ua.webkitVisibilityState || ua.mozVisibilityState || ua.visibilityState || ""] || 0
            };
            var hh = {},
                ih = null;
            hh.le = 0;
            hh.nt = 2;
            hh.Fr = 3;
            hh.Po = 5;
            hh.me = 1;
            hh.om = 4;
            var jh = function() {
                var a = y && y.document;
                hh.e = -1;
                hh.i = 6;
                hh.n = 7;
                hh.t = 8;
                if (!ih) {
                    var b = [];
                    sd(hh, function(a, c) {
                        b[a + 1] = c
                    });
                    var c = b.join("");
                    ih = (c = a && a[c]) && v(c, a)
                }
                return ih
            };
            var kh = !1,
                lh = "",
                mh = function(a) {
                    a = a.match(/[\d]+/g);
                    if (!a) return "";
                    a.length = 3;
                    return a.join(".")
                };
            (function() {
                if (navigator.plugins && navigator.plugins.length) {
                    var a = navigator.plugins["Shockwave Flash"];
                    if (a && (kh = !0, a.description)) {
                        lh = mh(a.description);
                        return
                    }
                    if (navigator.plugins["Shockwave Flash 2.0"]) {
                        kh = !0;
                        lh = "2.0.0.11";
                        return
                    }
                }
                if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], kh = !(!a || !a.enabledPlugin))) {
                    lh = mh(a.enabledPlugin.description);
                    return
                }
                try {
                    var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                    kh = !0;
                    lh = mh(b.GetVariable("$version"));
                    return
                } catch (c) {}
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    kh = !0;
                    lh = "6.0.21";
                    return
                } catch (c) {}
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), kh = !0, lh = mh(b.GetVariable("$version"))
                } catch (c) {}
            })();
            var nh = kh,
                oh = lh;
            var ph = function() {
                if (Rb) {
                    var a = /Windows NT ([0-9.]+)/;
                    return (a = a.exec(B)) ? a[1] : "0"
                }
                return Qb ? (a = /10[_.][0-9_.]+/, (a = a.exec(B)) ? a[0].replace(/_/g, ".") : "10") : Sb ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(B)) ? a[1] : "") : Tb || Ub || Vb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(B)) ? a[1].replace(/_/g, ".") : "") : ""
            }();
            var qh = function(a) {
                    return (a = a.exec(B)) ? a[1] : ""
                },
                rh = function() {
                    if (Ng) return qh(/Firefox\/([0-9.]+)/);
                    if (D || Lb || Kb) return cc;
                    if (Rg) return Fb() ? qh(/CriOS\/([0-9.]+)/) : qh(/Chrome\/([0-9.]+)/);
                    if (Sg && !Fb()) return qh(/Version\/([0-9.]+)/);
                    if (Og || Pg) {
                        var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(B);
                        if (a) return a[1] + "." + a[2]
                    } else if (Qg) return (a = qh(/Android\s+([0-9.]+)/)) ? a : qh(/Version\/([0-9.]+)/);
                    return ""
                }();
            var sh = function() {
                    var a;
                    !(a = D && 9 > cc || Ob) && (a = Qb && Sg) && (a = 0 <= Ma(rh, "6.0.1"));
                    return a ? !1 : 0 <= Ma(oh, "11")
                },
                th = function(a) {
                    a = a || !1;
                    var b;
                    if (b = Wb) b = 0 <= Ma(ph, 9);
                    var c = Sg && E(601);
                    return !a && (b || c)
                };
            var uh = function() {
                    this.g = 0;
                    this.C = !1;
                    this.h = -1;
                    this.A = 0;
                    this.pa = !1
                },
                Fh = function(a) {
                    return a.pa ? .3 <= a.g : .5 <= a.g
                };
            var Gh = function(a, b) {
                    a = a || y;
                    null !== a && a.top != a && (a = a.top);
                    try {
                        return a.document && !a.document.body ? new G(-1, -1) : b ? (new G(a.innerWidth, a.innerHeight)).round() : Vc(a || window).round()
                    } catch (c) {
                        return new G(-12245933, -12245933)
                    }
                },
                Hh = 0,
                Nh = function(a) {
                    var b = 0 <= Ih ? Jh() - Ih : -1,
                        c = Kh ? Jh() - Lh : -1,
                        d = 0 <= Mh ? Jh() - Mh : -1;
                    if (79463068 == a) return 500;
                    if (947190538 == a) {
                        a = [4E3];
                        var e = [250, 1E3]
                    } else if (947190541 == a) a = [4E3], e = [100, 1E3];
                    else {
                        if (947190542 == a) return 100;
                        if (79463069 == a) return 200;
                        a = [2E3, 4E3];
                        e = [250, 500, 1E3]
                    }
                    var f =
                        b; - 1 != c && c < b && (f = c);
                    for (var g, b = 0; b < a.length; ++b)
                        if (f < a[b]) {
                            g = e[b];
                            break
                        }
                    void 0 === g && (g = e[a.length]);
                    return -1 != d && 1500 < d && 4E3 > d ? 500 : g
                },
                Oh = (new Date).getTime(),
                Ih = -1,
                Kh = !1,
                Lh = -1,
                Mh = -1,
                Jh = function() {
                    return (new Date).getTime() - Oh
                },
                Ph = function() {
                    var a = Yc("DIV");
                    a.style.cssText = "position:relative;left:0px;top:0px;width:0;height:0;";
                    return a
                },
                Sh = function(a) {
                    return Qh(a, function(a, c) {
                        return !(!Hb(c, "style") || !c.style || "none" !== id(c, "display"))
                    }, function(a) {
                        return a
                    }, !1) ? !0 : Rh(a)
                },
                Rh = function(a) {
                    var b = !D ||
                        E(8);
                    return Qh(a, function(a, d) {
                        a = Hb(d, "style") && d.style && id(d, "visibility");
                        return {
                            hidden: "hidden" === a,
                            visible: b && "visible" === a
                        }
                    }, function(a) {
                        return a.hidden || a.visible
                    }, {
                        hidden: !1,
                        visible: !1
                    }).hidden
                },
                Qh = function(a, b, c, d) {
                    if (!a) return d;
                    d = Th(a, b, c, d);
                    if (!d.done) try {
                        var e = Rc(a),
                            f = e && H(e);
                        return Qh(f && f.frameElement, b, c, d.value)
                    } catch (g) {}
                    return d.value
                },
                Th = function(a, b, c, d) {
                    if (!a) return {
                        value: d,
                        done: !1
                    };
                    d = b(d, a);
                    var e = c(d, a);
                    if (!e && Hb(a, "parentElement")) {
                        e = Th;
                        a: {
                            var f;
                            if (hc && !(D && E("9") && !E("10") &&
                                    m.SVGElement && a instanceof m.SVGElement) && (f = a.parentElement)) {
                                a = f;
                                break a
                            }
                            f = a.parentNode;
                            a = na(f) && 1 == f.nodeType ? f : null
                        }
                        b = e(a, b, c, d)
                    } else b = {
                        done: e,
                        value: d
                    };
                    return b
                },
                Uh = function(a) {
                    return new I(a.top, a.right, a.bottom, a.left)
                },
                Vh = function(a) {
                    return null != a && 0 <= a && 1 >= a
                };
            var Wh = function() {
                uh.call(this);
                this.o = !1;
                this.volume = void 0;
                this.l = !1;
                this.w = -1
            };
            x(Wh, uh);
            var Xh = function(a) {
                return Vh(a.volume) && .1 <= a.volume
            };
            var Yh = function() {
                this.ka = [0, 0, 0, 0, 0];
                this.J = [0, 0, 0, 0, 0];
                this.ia = [0, 0, 0, 0, 0];
                this.F = this.$ = 0;
                this.aa = this.o = -1;
                this.ua = 1E3
            };
            Yh.prototype.C = function(a, b, c, d, e, f) {
                e = Zh(c.g);
                var g = Zh(b.g);
                g = -1 == e || -1 == g ? -1 : Math.max(e, g);
                e = d ? g : e;
                this.o = -1 != this.o ? Math.min(this.o, b.g) : b.g;
                f && (this.aa = Math.max(this.aa, b.g)); - 1 != e && (this.ka[e] += a);
                $h(this.ia, e, a);
                f = this.J;
                g = this.ia;
                for (var k = [0, 0, 0, 0, 0], l = 0; 4 >= l; l++) k[l] = Math.max(f[l], g[l]);
                this.J = k;
                f = this.ia;
                g = Zh(b.g);
                for (k = 0; 4 >= k; ++k)
                    if (k < g || b.C || -1 == g) f[k] = 0;
                if (d || c.pa != b.pa ? Fh(c) && Fh(b) : Fh(c)) this.F += a, this.$ = Math.max(this.$, this.F);
                Fh(b) || (this.F = 0);
                return e
            };
            var $h = function(a, b, c) {
                    for (; 0 <= b && 4 >= b; b++) a[b] += c
                },
                Zh = function(a) {
                    var b = -1;
                    1 <= a ? b = 0 : .75 <= a ? b = 1 : .5 <= a ? b = 2 : .3 <= a ? b = 3 : 0 < a && (b = 4);
                    return b
                };
            Yh.prototype.Ja = function() {
                return this.$ >= this.ua
            };
            var ai = function(a, b) {
                    this.l = null;
                    this.A = a;
                    this.B = b || 1;
                    this.h = "u"
                },
                bi = function(a, b) {
                    var c = b.right - b.left;
                    b = b.bottom - b.top;
                    var d = Math.floor(c / 2),
                        e = Math.floor(b / 2);
                    switch (a.B) {
                        case 4:
                            return a.A ? (a = Math.floor(.3 * c), d = Math.floor(.3 * b), [new F(a, d), new F(c - a, d), new F(a, b - d), new F(c - a, b - d)]) : [new F(d, 0), new F(0, e), new F(d, b - 1), new F(c - 1, e)];
                        case 3:
                            return [new F(c - 1, 0), new F(d, e), new F(0, b - 1)];
                        default:
                            return [new F(d, e)]
                    }
                },
                ci = function(a, b) {
                    try {
                        var c = b || a.l.getBoundingClientRect()
                    } catch (d) {
                        c = new I(0, 0, 0, 0)
                    }
                    a =
                        bi(a, c);
                    A(a, function(a) {
                        a.x += c.left;
                        a.y += c.top
                    });
                    return a
                },
                di = function(a, b) {
                    ai.call(this, a, b);
                    this.g = [];
                    this.G = !1;
                    this.o = -1;
                    this.w = this.C = 0
                };
            x(di, ai);
            var ei = function(a, b, c) {
                this.g = a;
                this.l = b;
                this.h = c
            };
            di.prototype.nb = function(a, b) {
                if (!(a && a.getBoundingClientRect && 0 <= Ma(oh, "11") && b) || D && 9 > cc || 0 < this.g.length) return !1;
                try {
                    var c = a.getBoundingClientRect()
                } catch (l) {
                    return !1
                }
                var d = "DIV" == a.tagName || "INS" == a.tagName,
                    e = Rc(a),
                    f = [];
                if (d) {
                    var g = Ph();
                    c = bi(this, c);
                    A(c, function(a, c) {
                        c = new fi("e", e, b, String(c));
                        this.g.push(c);
                        f.push(v(c.B, c, g, a))
                    }, this);
                    a.insertBefore(g, a.childNodes[0] || null)
                } else c = ci(this, c), A(c, function(c, d) {
                    d = new fi("e", e, b, String(d));
                    this.g.push(d);
                    f.push(v(d.G, d, a, c))
                }, this);
                var k = !0;
                A(f,
                    function(a) {
                        k = k && a()
                    });
                k ? (this.h = "l", this.l = a, this.G = !d) : (A(this.g, function(a) {
                    gi(a)
                }), this.g = []);
                return k
            };
            var ii = function(a) {
                    if (a.l && a.G) {
                        var b = ci(a);
                        A(b, function(a, b) {
                            this.g[b] && hi(this.g[b], a)
                        }, a)
                    }
                },
                ji = function(a) {
                    A(a.g, function(a) {
                        gi(a)
                    });
                    a.g = [];
                    a.h = "d"
                },
                pi = function(a) {
                    var b = ta(),
                        c = a.C ? b - a.C : 0,
                        d = -1,
                        e = Ta(a.g, function(a) {
                            return ki(a, b)
                        });
                    4 == a.g.length ? d = a.A ? li(e) : mi(e) : 3 == a.g.length ? d = ni(e) : 1 == a.g.length && (d = [-1, 0, 1, 2, 3, 5][ki(a.g[0], b) + 1]);
                    a.w = d == a.o ? a.w + c : 0;
                    c = new ei(d, a.o, c);
                    a.o = d;
                    a.C = b;
                    oi(a, d);
                    ii(a);
                    return c
                },
                ri = function(a) {
                    var b = eb(pb(qi));
                    A(a, function(a) {
                        0 <= a && ++b[a]
                    });
                    return b
                },
                mi = function(a) {
                    a =
                        ri(a);
                    return 4 == a[4] ? 6 : 3 <= a[4] ? 5 : 0 < a[4] ? 4 : 4 == a[2] ? 2 : 4 == a[1] ? 1 : 4 == a[0] ? 0 : 3
                },
                ni = function(a) {
                    var b = ri(a);
                    return 4 == a[0] && 4 == a[2] ? 6 : 4 == a[1] ? 5 : 0 < b[4] ? 4 : 3 == b[2] ? 2 : 3 == b[1] ? 1 : 3 == b[0] ? 0 : 3
                },
                li = function(a) {
                    a = ri(a);
                    return 3 <= a[4] ? 5 : 2 == a[4] ? 8 : 0 < a[4] ? 7 : 4 == a[2] ? 2 : 4 == a[1] ? 1 : 4 == a[0] ? 0 : 3
                },
                oi = function(a, b) {
                    if (0 == b && si(a)) a.h = "n";
                    else switch (b) {
                        case -1:
                            a.h = "d";
                            break;
                        case 0:
                            a.h = "l";
                            break;
                        case 1:
                            a.h = "f";
                            break;
                        case 2:
                            a.h = "c";
                            break;
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                            a.h = "r"
                    }
                },
                si = function(a) {
                    return "n" == a.h ? !0 : "l" == a.h && 3E3 <= a.w
                },
                fi = function(a, b, c, d) {
                    this.g = null;
                    this.A = a;
                    this.C = "e" == a ? String(c) + "~" + String(d) : "";
                    this.h = [];
                    this.l = -1;
                    this.w = 0;
                    this.o = eb(pb(ti));
                    this.F = eb(pb(qi));
                    "e" == this.A && (ui[this.C] = v(this.D, this));
                    D ? (a = b.createElement("div"), a.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" style="opacity:0;-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity=0)\';filter:alpha(opacity=0)"><param name="movie" value="' + vi(this, !0) + '"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="transparent"></param></object>',
                        a = a.firstChild, a.id = String(Math.random())) : a = wi(this, b);
                    a.width = 1;
                    a.height = 1;
                    a.style.zIndex = -999999;
                    this.g = a
                },
                qi = {
                    Rk: -1,
                    LOADING: 0,
                    td: 1,
                    od: 2,
                    ii: 3,
                    bl: 4
                },
                ti = {
                    LOADING: 0,
                    td: 1,
                    od: 2,
                    Gk: 3,
                    jj: 4,
                    Pk: 5,
                    Qk: 6,
                    Ok: 7,
                    mj: 8,
                    Fk: 9
                },
                ui = {},
                wi = function(a, b) {
                    var c = function(a, c, d) {
                        var e = b.createElement("param");
                        e.name = c;
                        e.value = d;
                        a.appendChild(e)
                    };
                    a = vi(a);
                    var d = b.createElement("object");
                    d.type = "application/x-shockwave-flash";
                    d.data = a;
                    c(d, "movie", a);
                    c(d, "allowscriptaccess", "always");
                    c(d, "wmode", "opaque");
                    d.style.visibility =
                        "hidden";
                    d.style.opacity = 0;
                    return d
                },
                vi = function(a, b) {
                    a = Rd("//pagead2.googlesyndication.com/osd/hbe.swf", "id", a.C);
                    b && (a = Rd(a, "delay", "1"));
                    return a
                };
            fi.prototype.B = function(a, b) {
                if (!this.g) return !1;
                this.g.style.position = "absolute";
                hi(this, b);
                b = !0;
                try {
                    a.appendChild(this.g)
                } catch (c) {
                    b = !1
                }
                return b
            };
            fi.prototype.G = function(a, b) {
                if (!this.g || !a.parentNode) return !1;
                this.g.style.position = "fixed";
                hi(this, b);
                b = !0;
                try {
                    a.parentNode && a.parentNode.insertBefore(this.g, a.nextSibling)
                } catch (c) {
                    b = !1
                }
                return b
            };
            var hi = function(a, b) {
                    a.g && !fc(b, ld(a.g)) && kd(a.g, b)
                },
                gi = function(a) {
                    if (a.g) try {
                        ad(a.g)
                    } catch (b) {}
                    a.g = null
                };
            fi.prototype.D = function(a) {
                this.l = a ? 3 : 4
            };
            var ki = function(a, b) {
                    if ("e" == a.A) {
                        b = null;
                        try {
                            b = a.g.it()
                        } catch (e) {}
                        null === b ? (b = 0, 0 < a.l && (b = 2)) : b = b ? 3 : 4;
                        ++a.F[b + 1];
                        a.l = b
                    } else {
                        var c = Number(b);
                        b = null;
                        try {
                            b = a.g.fc()
                        } catch (e) {}
                        var d = b;
                        xi(a, d, c);
                        b = a.h[a.h.length - 1];
                        if (null === d) {
                            if (d = c = 0, 0 < a.l || r(b.Cb)) d = c = 2
                        } else null === b.Cb || b.gc >= c ? (c = 10 <= d ? 4 : 0, d = 0) : d > b.Cb ? (b = (d - b.Cb) / (c - b.gc) * 1E3, c = 10 <= b ? 4 : 3, b = 0 == b ? 1 : 1 > b ? 3 : 4 > b ? 4 : 23 > b ? 6 : 26 > b ? 8 : 9, 6 == a.w && 6 == b && (b = 7), d = b) : d = c = 1;
                        6 == a.w && (--a.o[6], 4 == d || 8 == d ? ++a.o[5] : ++a.o[7]);
                        ++a.o[d];
                        a.l = c;
                        a.w = d
                    }
                    return a.l
                },
                xi = function(a,
                    b, c) {
                    var d = c - 1E3,
                        e = a.h.length;
                    A(a.h, function(a, b) {
                        a.gc <= d && (e = Math.min(e, b + 1))
                    });
                    var f = a.h.length - e;
                    0 < f && a.h.splice(e, f);
                    a.h.unshift({
                        Cb: b,
                        gc: c
                    })
                };
            t("gteh", ye(145, function(a, b) {
                a = ui[a];
                u(a) && a(b)
            }), void 0);
            var yi = function(a, b) {
                ai.call(this, a, b);
                this.g = [];
                this.C = !1;
                this.w = 0;
                this.o = -1
            };
            x(yi, ai);
            var zi = [3, 7, 8, 5, 5],
                Ai = [3, 4, 4, 5, 6],
                Bi = [3, 4, 5, 6],
                Ci = [3, 5],
                Gi = function(a, b) {
                    var c = b.getBoundingClientRect();
                    var d = "DIV" == b.tagName || "INS" == b.tagName,
                        e = Rc(b),
                        f = !0,
                        g = a.g;
                    if (d) {
                        var k = Ph();
                        c = bi(a, c);
                        b.insertBefore(k, b.childNodes[0] || null);
                        A(c, function(a) {
                            var b = new Di(e);
                            g.push(b);
                            var c;
                            if (c = f)
                                if (b.g) {
                                    b.g.style.position = "absolute";
                                    Ei(b, a);
                                    a = !0;
                                    try {
                                        k.appendChild(b.g)
                                    } catch (z) {
                                        a = !1
                                    }
                                    c = a
                                } else c = !1;
                            f = c
                        })
                    } else c = ci(a, c), A(c, function(a) {
                        var c = new Di(e);
                        g.push(c);
                        var d;
                        if (d = f)
                            if (c.g && b.parentNode) {
                                c.g.style.position =
                                    "fixed";
                                Ei(c, a);
                                a = !0;
                                try {
                                    b.parentNode && b.parentNode.insertBefore(c.g, b.nextSibling)
                                } catch (z) {
                                    a = !1
                                }
                                d = a
                            } else d = !1;
                        f = d
                    });
                    f ? (a.l = b, a.C = !d) : (A(g, function(a) {
                        Fi(a)
                    }), a.g = []);
                    return f
                },
                Hi = function(a) {
                    if (a.l && a.C) {
                        var b = ci(a);
                        A(b, function(a, b) {
                            this.g[b] && Ei(this.g[b], a)
                        }, a)
                    }
                },
                Ii = function(a) {
                    A(a.g, function(a) {
                        Fi(a)
                    });
                    a.g = []
                },
                Ji = function(a) {
                    var b = ta(),
                        c = a.w ? b - a.w : 0,
                        d = Va(a.g, function(a) {
                            return 50 > b - a.h - a.l
                        }),
                        d = 4 == a.g.length ? a.A ? zi[d] : Ai[d] : 3 == a.g.length ? Bi[d] : 1 == a.g.length ? Ci[d] : -1,
                        c = new ei(d, a.o, c);
                    a.o = d;
                    a.w =
                        b;
                    Hi(a);
                    return c
                },
                Di = function(a) {
                    this.g = null;
                    this.l = this.h = 0;
                    Ki(this, a)
                },
                Ki = function(a, b) {
                    var c = b.createElement("iframe");
                    c.srcdoc = "";
                    c.frameBorder = 0;
                    c.style.width = "1px";
                    c.style.height = "1px";
                    c.style.opacity = "0";
                    c.style.zIndex = -999999;
                    a.g = c;
                    var d = pe(245, a.o, a, void 0);
                    c.addEventListener("load", ye(244, function() {
                        c.contentWindow.requestAnimationFrame(d)
                    }))
                };
            Di.prototype.o = function(a) {
                this.g && this.g.contentWindow && (this.g.contentWindow.requestAnimationFrame(pe(245, this.o, this, void 0)), this.h || (this.h = ta() - a), this.l = a)
            };
            var Ei = function(a, b) {
                    a.g && !fc(b, ld(a.g)) && kd(a.g, b)
                },
                Fi = function(a) {
                    try {
                        ad(a.g)
                    } catch (b) {}
                    a.g = null
                };
            if (ua && ua.URL) {
                var xd = ua.URL,
                    Li = !(xd && 0 < yd().length);
                oe.l = Li
            }
            var Mi = function(a, b, c, d) {
                c = pe(d, c, void 0, void 0);
                Ad(a, b, c, {
                    capture: void 0
                });
                return c
            };
            var Ni = function() {};
            ha(Ni);
            var R = function() {
                    this.D = !1;
                    this.C = void 0;
                    this.h = !rd(y.top);
                    var a = Wd();
                    a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(Nd)[3] || null) ? decodeURI(a) : a) || "" : "";
                    this.domain = a;
                    this.o = this.G = this.A = this.g = null;
                    this.F = 0;
                    this.l = !1;
                    this.w = new I(0, 0, 0, 0);
                    this.B = 0;
                    this.R = "geo";
                    this.xc = new fh
                },
                Oi = function(a, b) {
                    b && (b = b.split("-"), 4 == b.length && (a.w = new I(Oa(b[0]), Oa(b[3]), Oa(b[2]), Oa(b[1]))))
                };
            ha(R);
            var Qi = function(a, b, c) {
                    this.position = Pi.clone();
                    this.sa = 0;
                    this.Yb = this.rb();
                    this.Xb = -2;
                    this.mg = ta();
                    this.gd = -1;
                    this.Ra = b;
                    this.Oa = -1 != b;
                    this.Eb = null;
                    this.opacity = -1;
                    this.bd = c;
                    this.hd = this.Zb = ga;
                    this.za = this.element = a;
                    this.Sa = this.ea = null;
                    this.kb = 1;
                    this.jc = this.Wa = this.qb = !1;
                    this.Lb = 1;
                    this.ec = !0;
                    this.xa = !1;
                    this.Cd = R.getInstance().F++;
                    this.domain = null;
                    this.Rc = 0;
                    this.ba = this.Nb();
                    this.fd = -1;
                    this.Fb = new I(0, 0, 0, 0);
                    this.xc = new fh
                },
                Pi = new I(0, 0, 0, 0),
                Ri = {
                    threshold: [0, .3, .5, .75, 1]
                },
                Si = function(a, b) {
                    return null ===
                        a || null === b ? Pi.clone() : new I(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left))
                };
            Qi.prototype.rb = function() {
                return new Yh
            };
            Qi.prototype.va = function() {
                return this.Yb
            };
            var Ti = function(a, b, c, d, e) {
                    if (a.Oa) {
                        var f = y.innerWidth,
                            g = y.innerHeight,
                            k = new I(Math.round(y.mozInnerScreenY), Math.round(y.mozInnerScreenX + f), Math.round(y.mozInnerScreenY + g), Math.round(y.mozInnerScreenX));
                        c = new I(y.screenY + d, y.screenX + c.width, y.screenY + c.height, y.screenX);
                        e || (d = new I(k.top - c.top, k.right - c.left, k.bottom - c.top, k.left - c.left), d.top > a.position.top ? a.position = d : (a.position.right = a.position.left + f, a.position.bottom = a.position.top + g), a.sa = f * g);
                        a.Ca(k, c, b, e, !0, !0)
                    }
                },
                Wi = function(a, b, c) {
                    var d;
                    if (a.Oa && (d = jh())) {
                        c || Ui(a, y, !0);
                        if (a.pa() || a.jc) {
                            d = Vi(a, d);
                            var e = !0
                        } else {
                            e = Math.floor((a.position.left + a.position.right) / 2);
                            var f = Math.floor((a.position.top + a.position.bottom) / 2),
                                g = Wc(document);
                            d = d(e - g.x, f - g.y) ? .5 : 0;
                            e = !1
                        }
                        a.Ca(a.position, d, b, c, !0, e)
                    }
                },
                Xi = function(a, b, c) {
                    if (c(b)) return b;
                    for (;;) {
                        var d = Math.floor((a + b) / 2);
                        if (d == a || d == b) return a;
                        c(d) ? a = d : b = d
                    }
                },
                Vi = function(a, b) {
                    var c = Wc(document),
                        d = a.Lb,
                        e = Math.floor(a.position.left - c.x) + 1,
                        f = Math.floor(a.position.top - c.y) + 1,
                        g = Math.floor(a.position.right -
                            c.x) - d,
                        k = Math.floor(a.position.bottom - c.y) - d;
                    a = (k - f) * (g - e);
                    if (f > k || e > g) return 0;
                    c = !!b(e, f);
                    d = !!b(g, k);
                    if (c && d) return 1;
                    var l = !!b(g, f),
                        n = !!b(e, k);
                    if (c) k = Xi(f, k, function(a) {
                        return !!b(e, a)
                    }), g = Xi(e, g, function(a) {
                        return !!b(a, f)
                    });
                    else if (l) k = Xi(f, k, function(a) {
                        return !!b(g, a)
                    }), e = Xi(g, e, function(a) {
                        return !!b(a, f)
                    });
                    else if (n) f = Xi(k, f, function(a) {
                        return !!b(e, a)
                    }), g = Xi(e, g, function(a) {
                        return !!b(a, k)
                    });
                    else if (d) f = Xi(k, f, function(a) {
                        return !!b(g, a)
                    }), e = Xi(g, e, function(a) {
                        return !!b(a, k)
                    });
                    else {
                        var w = Math.floor((e +
                                g) / 2),
                            z = Math.floor((f + k) / 2);
                        if (!b(w, z)) return 0;
                        f = Xi(z, f, function(a) {
                            return !!b(w, a)
                        });
                        k = Xi(z, k, function(a) {
                            return !!b(w, a)
                        });
                        e = Xi(w, e, function(a) {
                            return !!b(a, z)
                        });
                        g = Xi(w, g, function(a) {
                            return !!b(a, z)
                        })
                    }
                    return (k - f) * (g - e) / a
                },
                Yi = function(a, b, c, d, e) {
                    a.Oa && (d || Ui(a, y, e), a.Ca(a.position, c, b, d, !1, !0))
                };
            Qi.prototype.Uc = ga;
            Qi.prototype.Tc = ga;
            Qi.prototype.Cc = ga;
            Qi.prototype.Db = ga;
            var Zi = function(a, b, c) {
                    if (a.Oa) {
                        var d = c ? a.ba.g : a.Rc,
                            e;
                        if (e = a.Fb) {
                            e = a.Fb;
                            var f = new I(0, 0, 0, 0);
                            e = !(e == f || e && f && e.top == f.top && e.right == f.right && e.bottom == f.bottom && e.left == f.left)
                        }
                        e && (d = dd(a.Fb.clone(), a.position.left, a.position.top));
                        a.Ca(a.position, d, b, c, !0, !0)
                    }
                },
                $i = function(a, b, c) {
                    if (a.Oa && a.R) {
                        var d = Gd(),
                            e = R.getInstance();
                        Ui(a, d, e.h);
                        d = a.R.h();
                        a.Ca(a.position, d.g(), b, c, !0, d.h() || d.l())
                    }
                };
            h = Qi.prototype;
            h.Ca = function(a, b, c, d, e, f, g) {
                var k = g || {};
                g = this.Ac(c, k);
                k = this.Jb(a, b, d, k);
                r(b) || (this.Eb = new G(b.right - b.left, b.bottom - b.top));
                e = e && this.ba.g >= (this.pa() ? .3 : .5);
                this.hc(g, k, e, f);
                this.Ra = c;
                0 < k.g && -1 === this.fd && (this.fd = c); - 1 == this.gd && this.Ja() && (this.gd = c);
                if (-2 == this.Xb) try {
                    a: {
                        var l = r(b) ? null : b;
                        if (a && a != Pi && 0 != this.sa) {
                            if (!l) {
                                if (!this.Eb) {
                                    var n = -1;
                                    break a
                                }
                                l = new I(0, this.Eb.width, this.Eb.height, 0)
                            }
                            n = l.tb && 0 < l.tb() && l.sb && 0 < l.sb() ? this.ab(a, l) : -1
                        } else n = -1
                    }
                    this.Xb = n
                }
                catch (w) {
                    ze(207, w)
                }
                this.ba = k;
                d &&
                    (this.ba.g = 0);
                this.Zb(this)
            };
            h.hc = function(a, b, c, d) {
                this.va().C(a, b, this.ba, c, this.pa() ? .3 : .5, d)
            };
            h.Nb = function() {
                return new uh
            };
            h.Jb = function(a, b, c) {
                var d = this.Nb();
                d.C = c;
                c = gh();
                d.h = 0 == c ? -1 : 1 == c ? 0 : 1;
                if (r(b)) d.g = this.ab(b);
                else {
                    var e = b;
                    d.g = this.ab(a, e)
                }(a = e || null) ? (a = (a.bottom - a.top) * (a.right - a.left), a = 0 < a ? Math.min(this.sa * d.g / a, 1) : 0) : a = 0;
                d.A = a;
                d.pa = this.pa();
                return d
            };
            h.Ac = function(a) {
                if (-1 == this.Ra) return 0;
                a = a - this.Ra || 1;
                return 1E4 < a ? 1 : a
            };
            h.ab = function(a, b) {
                return r(a) ? a : b ? (a = Si(a, b), 0 >= this.sa || 0 >= a.tb() || 0 >= a.sb() ? 0 : (a.bottom - a.top) * (a.right - a.left) / this.sa) : 0
            };
            h.pa = function() {
                return !1
            };
            h.nb = function(a) {
                if (this.ea) return !0;
                if (this.qb) return !1;
                var b = this.pa();
                this.kb = b ? 4 : a || 1;
                if (!this.za || !sh()) return this.qb = !0, !1;
                a = new di(b, this.kb);
                (b = a.nb(this.za, String(this.Cd))) ? this.ea = a: this.qb = !0;
                return b
            };
            var Ui = function(a, b, c, d) {
                if (d) a.position = d;
                else {
                    b = c ? b : b.top;
                    try {
                        var e = Pi.clone(),
                            f = new F(0, 0);
                        if (a.za) {
                            var g = 1 == a.bd;
                            !c && g && Sh(a.za) || (e = a.za.getBoundingClientRect());
                            f = od(a.za, b)
                        }
                        var k = f.x,
                            l = f.y;
                        a.position = new I(Math.round(l), Math.round(k + (e.right - e.left)), Math.round(l + (e.bottom - e.top)), Math.round(k))
                    } catch (n) {
                        a.position = Pi.clone()
                    }
                }
                a.sa = (a.position.bottom - a.position.top) * (a.position.right - a.position.left)
            };
            Qi.prototype.wa = function() {
                return 0
            };
            Qi.prototype.Ja = function() {
                return this.Yb.Ja()
            };
            var aj = function(a, b) {
                    b = Math.pow(10, b);
                    return Math.floor(a * b) / b
                },
                bj = function(a) {
                    a.R || a.ea && ji(a.ea)
                },
                ej = function(a, b) {
                    var c = !1,
                        d = a.za;
                    b.document && b.document.body && 12 == a.bd && (d = b.document.body);
                    if (null === d) return !1;
                    xe(152, function() {
                        var e = new b.IntersectionObserver(function(c) {
                            try {
                                cj(b, c, a)
                            } catch (g) {
                                try {
                                    e.unobserve(d), ze("osd_adblock::nioc", g)
                                } catch (k) {}
                            }
                        }, Ri);
                        e.observe(d);
                        dj(d);
                        c = !0
                    });
                    return c
                },
                dj = function(a) {
                    if (a && (a = a.style)) {
                        var b = a.opacity;
                        a.opacity = .98;
                        a.opacity = .99;
                        a.opacity = b
                    }
                },
                fj = function(a,
                    b) {
                    var c = !1;
                    xe(151, function() {
                        var d = Cd(b).ll(function(c) {
                            try {
                                cj(b, c, a)
                            } catch (f) {
                                try {
                                    d(), ze("osd_adblock::aioc", f)
                                } catch (g) {}
                            }
                        });
                        c = !0
                    });
                    return c
                },
                cj = function(a, b, c) {
                    if (!b || !b.length || 0 >= b.length) var d = null;
                    else {
                        d = b[0];
                        for (var e = 1; e < b.length; e++) b[e].time > d.time && (d = b[e])
                    }
                    d && (b = Uh(d.boundingClientRect), e = Uh(d.intersectionRect), c.ba.g = Math.min(Math.max(d.intersectionRect.width * d.intersectionRect.height / (d.boundingClientRect.width * d.boundingClientRect.height), 0), 1), c.Rc = c.ba.g, Ui(c, a, !0, b), a = Si(b, e),
                        c.Fb = 0 >= c.sa || a.top >= a.bottom || a.left >= a.right ? new I(0, 0, 0, 0) : dd(a, -b.left, -b.top))
                };
            Qi.prototype.dc = function(a) {
                if (!this.za) return !1;
                var b = this.pa();
                a = a || 1;
                b && (a = 4);
                var b = new yi(b, a),
                    c = Gi(b, this.za);
                c && (this.kb = a, this.Sa = b);
                return c
            };
            var gj = function(a, b, c, d) {
                d && (a.hd = d);
                switch (c) {
                    case "nio":
                        return ej(a, b);
                    case "aio":
                        return fj(a, b);
                    case "swf":
                        return a.nb();
                    case "raf":
                        return a.dc();
                    case "geo":
                    case "xde":
                    case "iem":
                        return !0
                }
                return !1
            };
            var hj = function() {
                    var a = {};
                    this.h = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.cm = [128, 128], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a);
                    this.g = {};
                    for (var b in this.h) 0 < this.h[b][1] && (this.g[b] = 0);
                    this.l = 0
                },
                ij = function(a, b) {
                    var c = a.h[b],
                        d = c[1];
                    a.l += c[0];
                    0 < d && 0 == a.g[b] && (a.g[b] = 1)
                },
                kj = function(a) {
                    return jj(a, rb(a.h))
                },
                jj = function(a, b) {
                    var c = 0,
                        d;
                    for (d in a.g) Ya(b, d) && 1 == a.g[d] && (c +=
                        a.h[d][1], a.g[d] = 2);
                    return c
                },
                lj = function(a) {
                    var b = 0,
                        c;
                    for (c in a.g) {
                        var d = a.g[c];
                        if (1 == d || 2 == d) b += a.h[c][1]
                    }
                    return b
                };
            var mj = function() {
                this.g = []
            };
            ha(mj);
            var nj = function(a) {
                this.g = this.l = 0;
                this.o = a
            };
            nj.prototype.h = function() {
                return this.l
            };
            var oj = function(a, b, c) {
                b >= a.o || (a.g & 1 << b && !c ? a.l &= ~(1 << b) : a.g & 1 << b || !c || (a.l |= 1 << b), a.g |= 1 << b)
            };
            var pj = function() {
                Yh.call(this);
                this.la = this.I = this.M = this.K = this.Z = this.h = 0;
                this.w = -1;
                this.A = this.D = this.B = this.G = this.V = this.da = this.H = 0;
                this.U = [0, 0, 0, 0, 0];
                this.l = this.g = -1;
                this.O = this.Y = 0;
                this.ua = 2E3;
                this.ga = new nj(32);
                this.oa = new nj(32);
                this.na = new nj(32)
            };
            x(pj, Yh);
            var qj = function(a, b, c) {
                var d = a.la;
                Kh || c || -1 == a.w || (d += b - a.w);
                return d
            };
            pj.prototype.C = function(a, b, c, d, e, f) {
                if (b.l) return -1;
                d = pj.N.C.call(this, a, b, c, d, e, f);
                e = Zh(e);
                e = -1 != d && d <= e;
                f = Xh(b) && Xh(c);
                Vh(b.volume) && (this.g = -1 != this.g ? Math.min(this.g, b.volume) : b.volume, this.l = Math.max(this.l, b.volume));
                e && (this.K += a, this.M += a);
                this.h += a;
                this.Z += a;
                c.o && (this.Y += a, this.O += a);
                0 == d && (this.I += a);
                f && (this.V += a, this.G += a, $h(this.U, d, a), 0 == d && (this.A += a), e ? (this.B += a, this.D += a) : this.H += a, this.da = Math.max(this.H, this.da));
                if (e || !Xh(b)) this.H = 0;
                a = Math.floor(b.w / 1E3);
                oj(this.ga, a, Fh(b));
                oj(this.oa, a, 1 <= b.g);
                oj(this.na, a, Xh(b));
                return d
            };
            var rj = function(a, b, c, d) {
                Qi.call(this, b, c, d);
                this.U = 0;
                this.o = {};
                this.h = new hj;
                this.qc = {};
                this.Ya = this.fa = "";
                this.Ma = !1;
                this.l = [];
                this.ka = this.jd = this.kd = this.C = !1;
                this.Da = void 0;
                this.w = -1;
                this.Y = void 0;
                this.M = !1;
                this.O = this.H = 0;
                this.I = 1;
                this.Z = -1;
                this.ia = this.ga = !1;
                this.Ka = this.Ha = 0;
                this.$ = !1;
                this.na = this.oa = -1;
                this.J = this.F = this.g = 0;
                this.Tf = this.Pb = -1;
                this.oe = 0;
                this.Mb = [0, 0, 0, 0, 0];
                this.G = this.aa = this.bb = 0;
                this.B = -1;
                this.da = 0;
                this.la = !1;
                this.V = null;
                this.Na = !1;
                this.K = ga;
                this.D = [this.rb()];
                this.ua = !1;
                this.jc = !0;
                this.Lb = 2;
                b = R.getInstance();
                Ui(this, a, b.h);
                this.A = {};
                this.A.pause = "p";
                this.A.resume = "r";
                this.A.skip = "s";
                this.A.mute = "m";
                this.A.unmute = "um";
                this.A.exitfullscreen = "ef"
            };
            x(rj, Qi);
            rj.prototype.dc = function(a) {
                R.getInstance();
                var b = mj.getInstance(),
                    c = Ya(b.g, 509445011);
                return Ya(b.g, 509445013) || c ? (this.ua = !0, rj.N.dc.call(this, a || 3)) : !1
            };
            rj.prototype.nb = function(a) {
                return rj.N.nb.call(this, a || 3)
            };
            rj.prototype.Uc = function(a) {
                if (!this.$ || 1E3 < a - this.oa) {
                    var b = fa("ima.bridge.getNativeViewability");
                    u(b) && (b(this.fa, v(this.Rd, this)), this.$ = !0, this.oa = a)
                }
            };
            rj.prototype.Tc = function(a) {
                var b = R.getInstance();
                a - this.na > Nh(b.C) && (a = fa("ima.admob.getViewability"), u(a) && a(this.fa))
            };
            var sj = function(a) {
                return p(a) ? Number(a) ? aj(a, 3) : 0 : a
            };
            h = rj.prototype;
            h.Rd = function(a) {
                this.$ = !1;
                xb(a) && this.da++;
                this.Db(a)
            };
            h.Cc = function(a) {
                this.na = Jh();
                this.Db(a)
            };
            h.Db = function(a) {
                var b = a.opt_nativeViewBounds || {},
                    c = a.opt_nativeViewVisibleBounds || {},
                    d = a.opt_nativeTime || -1,
                    e = a.opt_nativeVolume,
                    f = a.opt_nativeViewAttached;
                a = a.opt_nativeViewHidden;
                void 0 !== f && (this.V = !!f);
                b = new I(b.top || 0, b.left + b.width || 0, b.top + b.height || 0, b.left || 0);
                c = a ? Pi.clone() : new I(c.top || 0, c.left + c.width || 0, c.top + c.height || 0, c.left || 0);
                f = void 0;
                "n" == this.Da && (f = {}, f.volume = e);
                this.sa = (b.bottom - b.top) * (b.right - b.left);
                this.position = b;
                this.Ca(b, c, d, !1, !0, !0, f)
            };
            h.Ca = function(a, b, c, d, e, f, g) {
                var k = this.K(this) || {};
                Bb(k, g || {});
                this.w = k.duration || this.w;
                this.Y = k.isVpaid || this.Y;
                this.M = f;
                rj.N.Ca.call(this, a, b, c, d, e, f, k)
            };
            h.hc = function(a, b, c, d) {
                rj.N.hc.call(this, a, b, c, d);
                this.D[this.D.length - 1].C(a, b, this.ba, c, this.pa() ? .3 : .5, d);
                this.ia = Xh(this.ba) && Xh(b); - 1 == this.Z && this.ga && (this.Z = this.va().h);
                this.h.l = 0;
                a = this.ba;
                b = this.Ja();
                .5 <= a.g && ij(this.h, "vs");
                b && ij(this.h, "vw");
                Vh(a.volume) && ij(this.h, "am");
                this.ia && ij(this.h, "a");
                this.xa && ij(this.h, "f"); - 1 != a.h && (ij(this.h, "bm"), 1 == a.h && ij(this.h, "b"));
                this.ia && b && ij(this.h, "avw");
                this.M && ij(this.h, "cm");
                this.M && 0 < a.g && ij(this.h, "pv");
                tj(this, this.va().h, !0) && ij(this.h,
                    "gdr")
            };
            h.rb = function() {
                return new pj
            };
            h.va = function() {
                return this.Yb
            };
            h.Nb = function() {
                return new Wh
            };
            h.Jb = function(a, b, c, d) {
                a = rj.N.Jb.call(this, a, b, c, d);
                a.o = this.xa;
                a.l = this.C;
                a.volume = d.volume;
                Vh(a.volume) || (this.Ha++, b = this.ba, Vh(b.volume) && (a.volume = b.volume));
                d = d.currentTime;
                a.w = p(d) && 0 <= d ? d : -1;
                return a
            };
            h.Ac = function(a, b) {
                var c = p(b.currentTime) ? b.currentTime : this.H,
                    d = uj(this, a),
                    e = c - this.H,
                    f = b.isYouTube;
                b = p(b.isPlaying) ? b.isPlaying : !0;
                var g = 0;
                2 != this.I ? (0 <= e ? (this.O += d, this.G += Math.max(d - e, 0), g = Math.min(e, this.O)) : this.aa += Math.abs(e), 0 != e && (this.O = 0), -1 == this.B && 0 < e && (this.B = 0 <= Mh ? Jh() - Mh : -1)) : (b || this.C || (this.G += d), -1 == this.B && b && (this.B = 0 <= Mh ? Jh() - Mh : -1));
                this.H = c;
                if (f) {
                    if (1 == this.I) return g;
                    if (2 == this.I) return b ? d : 0
                }
                return uj(this, a)
            };
            var uj = function(a, b) {
                if (-1 == a.Ra) return 0;
                b = b - a.Ra || 1;
                var c = 1E4;
                p(a.w) && -1 != a.w && (c = Math.max(c, a.w / 3));
                return b > c ? 1 : b
            };
            rj.prototype.ab = function(a, b) {
                return this.la ? 0 : this.xa ? 1 : rj.N.ab.call(this, a, b)
            };
            rj.prototype.wa = function() {
                return 1
            };
            var tj = function(a, b, c) {
                    return 15E3 <= b ? !0 : a.ga ? c ? !0 : -1 != a.w ? b >= a.w / 2 : -1 != a.Z ? b >= a.Z : !1 : !1
                },
                vj = function(a, b) {
                    for (var c = a.l, d = kf({
                            rg: 0,
                            yb: void 0
                        }), e = c.length; e < b + 1;) c.push(d()), e++;
                    a.l[b] = {
                        viewableArea: aj(a.ba.g, 2),
                        instantaneousState: a.h.l
                    }
                },
                xj = function(a, b) {
                    var c = a.qc[b];
                    if (null != c) return c;
                    a: if (Ya(dh, b)) c = !0;
                        else {
                            c = a.o[b];
                            if (p(c) && (a.o[b] = !0, !c)) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                    c = wj(a, c, c);
                    "fully_viewable_audible_half_duration_impression" == b && (c.std = "csm", c.ic = jj(a.h, ["gdr"]));
                    return c
                },
                wj = function(a, b, c) {
                    if (a.Wa) return {
                        "if": 0
                    };
                    var d = a.position.clone();
                    d.round();
                    var e = Ta(a.l, function(a) {
                            return 100 * a.rg | 0
                        }),
                        f = R.getInstance(),
                        g = a.va(),
                        k = {};
                    a.ua && (k.avms = "raf");
                    k["if"] = f.h ? 1 : void 0;
                    k.sdk = a.Da ? a.Da : void 0;
                    k.t = a.mg;
                    k.p = [d.top, d.left, d.bottom, d.right];
                    k.tos = g.ka;
                    k.mtos = g.J;
                    k.ps = void 0;
                    k.pt = e;
                    k.vht = qj(g, Jh(), !!a.C);
                    k.mut = g.da;
                    k.a = sj(a.ba.volume);
                    k.mv = sj(g.l);
                    k.fs = a.xa ? 1 : 0;
                    k.ft = g.Y;
                    k.at = g.V;
                    k.as = .1 <= g.g ? 1 : 0;
                    k.atos = g.U;
                    k.uac = a.Ha;
                    k.vpt = g.h;
                    "nio" == f.R && (k.nio = 1, k.avms = "nio");
                    k.gmm = "4";
                    k.gdr = tj(a, g.h, !0) ? 1 : 0;
                    a.jc && (k.efpf = a.Lb);
                    a.ea &&
                        (k.swf = a.ea.h, k.px = a.kb, k.avms = "swf");
                    0 < a.da && (k.nnut = a.da);
                    k.tcm = a.I;
                    k.nmt = a.aa;
                    k.bt = a.G;
                    k.pst = a.B;
                    k.vpaid = a.Y;
                    k.dur = a.w;
                    k.vmtime = a.H;
                    k.is = a.h.l;
                    1 <= a.l.length && (k.i0 = a.l[0].yb);
                    2 <= a.l.length && (k.i1 = a.l[1].yb);
                    3 <= a.l.length && (k.i2 = a.l[2].yb);
                    4 <= a.l.length && (k.i3 = a.l[3].yb);
                    k.cs = lj(a.h);
                    b && (k.ic = kj(a.h), k.dvpt = g.Z, k.dvs = g.M, k.dfvs = g.I, k.davs = g.D, k.dafvs = g.A, c && (g.Z = 0, g.M = 0, g.I = 0, g.D = 0, g.A = 0), a.Ja() && (k.dtos = g.K, k.dav = g.B, k.dtoss = a.U + 1, c && (g.K = 0, g.B = 0, a.U++)), k.dat = g.G, k.dft = g.O, c && (g.G = 0, g.O = 0));
                    f.o &&
                        (k.ps = [f.o.width, f.o.height]);
                    f.g && (k.bs = [f.g.width, f.g.height]);
                    f.A && (k.scs = [f.A.width, f.A.height]);
                    k.dom = f.domain;
                    a.qb && (k.fmf = "1", k.px = a.kb);
                    a.Ka && (k.vds = a.Ka);
                    a.g && (k.vmer = a.g);
                    a.F && (k.vmmk = a.F);
                    a.J && (k.vmiec = a.J);
                    a.R && (k.avms = a.R.l(), Bb(k, a.R.g()));
                    "exc" == f.R && (k.femt = a.Pb, k.femvt = a.Tf, k.emc = a.oe, k.emb = a.Mb, k.emuc = a.bb, k.avms = "exc");
                    yj() ? (k.c = aj(a.ba.g, 2), k.ss = aj(zj(a), 2)) : k.tth = Jh() - Hh;
                    k.mc = aj(g.aa, 2);
                    k.nc = aj(g.o, 2);
                    k.mv = sj(g.l);
                    k.nv = sj(g.g);
                    k.lte = aj(a.Xb, 2);
                    b = a.D[a.D.length - 1];
                    k.qmtos = b.J;
                    k.qnc = aj(b.o, 2);
                    k.qmv = sj(b.l);
                    k.qnv = sj(b.g);
                    k.qas = .1 <= b.g ? 1 : 0;
                    k.qi = a.fa;
                    null !== a.V && (k.nvat = a.V ? 1 : 0);
                    k.avms || (k.avms = "geo");
                    k.psm = g.ga.g;
                    k.psv = g.ga.h();
                    k.psfv = g.oa.h();
                    k.psa = g.na.h();
                    return k
                },
                zj = function(a) {
                    if (a.xa) return 1;
                    var b = y.screen.width * y.screen.height;
                    return 0 >= b ? -1 : Math.min(a.sa * a.ba.g / b, 1)
                };
            var Aj = function(a, b) {
                    this.h = a || 0;
                    this.g = b || ""
                },
                Bj = function(a) {
                    return !!a.h || !!a.g
                },
                Cj = function(a, b) {
                    a.h && (b[4] = a.h);
                    a.g && (b[12] = a.g)
                };
            Aj.prototype.match = function(a) {
                return Bj(this) && Bj(a) ? this.g || a.g ? this.g == a.g : this.h || a.h ? this.h == a.h : !1 : !1
            };
            Aj.prototype.toString = function() {
                var a = "" + this.h;
                this.g && (a += "-" + this.g);
                return a
            };
            var Dj = function(a) {
                    var b = [];
                    kb(a, function(a, d) {
                        d = encodeURIComponent(d);
                        q(a) && (a = encodeURIComponent(a));
                        b.push(d + "=" + a)
                    });
                    b.push("24=" + (new Date).getTime());
                    return b.join("\n")
                },
                Ej = 0,
                Fj = 0,
                Gj = function() {
                    var a = 0,
                        b = y;
                    try {
                        if (b && b.Goog_AdSense_getAdAdapterInstance) return b
                    } catch (c) {}
                    for (; b && 5 > a;) {
                        try {
                            if (b.google_osd_static_frame) return b
                        } catch (c) {}
                        try {
                            if (b.aswift_0 && b.aswift_0.google_osd_static_frame) return b.aswift_0
                        } catch (c) {}
                        a++;
                        b = b != b.parent ? b.parent : null
                    }
                    return null
                },
                Hj = function(a, b, c, d, e, f, g, k) {
                    g =
                        g || ga;
                    if (10 < Fj) y.clearInterval(Ej), g();
                    else if (++Fj, y.postMessage && Bj(b)) {
                        if (g = Gj()) {
                            var l = {};
                            Cj(b, l);
                            l[0] = "goog_request_monitoring";
                            l[6] = a;
                            c && (l[27] = c);
                            l[16] = !!d;
                            e && e.length && (l[17] = e.join(","));
                            f && (l[19] = f);
                            k && (l[28] = k);
                            try {
                                var n = Dj(l);
                                g.postMessage(n, "*")
                            } catch (w) {}
                        }
                    } else y.clearInterval(Ej), g()
                };
            var Ij = function(a) {
                var b = [],
                    c = [];
                kb(a, function(a, e) {
                    if (!(e in Object.prototype) && "undefined" != typeof a) switch (la(a) && (a = a.join(",")), a = [e, "=", a].join(""), e) {
                        case "r":
                        case "tt":
                        case "error":
                        case "mtos":
                        case "tos":
                        case "p":
                        case "bs":
                        case "aio":
                        case "nio":
                        case "swf":
                        case "iem":
                            b.unshift(a);
                            break;
                        case "req":
                        case "url":
                        case "referrer":
                        case "iframe_loc":
                            c.push(a);
                            break;
                        default:
                            b.push(a)
                    }
                });
                return b.concat(c)
            };
            var Jj = function(a, b, c) {
                Me.call(this);
                this.o = null != c ? v(a, c) : a;
                this.l = b;
                this.h = v(this.fg, this);
                this.g = []
            };
            x(Jj, Me);
            h = Jj.prototype;
            h.Ab = !1;
            h.Ua = null;
            h.yc = function(a) {
                this.g = arguments;
                this.Ua ? this.Ab = !0 : Kj(this)
            };
            h.L = function() {
                Jj.N.L.call(this);
                this.Ua && (m.clearTimeout(this.Ua), this.Ua = null, this.Ab = !1, this.g = [])
            };
            h.fg = function() {
                this.Ua = null;
                this.Ab && (this.Ab = !1, Kj(this))
            };
            var Kj = function(a) {
                a.Ua = Lg(a.h, a.l);
                a.o.apply(null, a.g)
            };
            var Mj = function() {
                    return !Lj() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
                },
                Lj = function() {
                    return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
                };
            var Nj = null,
                Oj = null,
                Pj = null,
                Qj = null,
                Rj = null,
                Sj = !1,
                Tj = function() {
                    var a = R.getInstance().R;
                    return "nio" == a || "aio" == a
                },
                Yj = function() {
                    if (!Sj) {
                        Sj = !0;
                        var a = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
                        if (!Nj && !Tj()) {
                            if (a) {
                                var b = pe(136, Uj, void 0, void 0);
                                var c = function() {
                                    a(function() {
                                        y.setTimeout(b, 0)
                                    })
                                }
                            } else c = Uj;
                            Oj = new Jj(pe(137, c, void 0, void 0), 100);
                            c = v(Oj.yc, Oj);
                            Nj = Mi(y, "scroll", c, 138)
                        }
                        if (!Pj && !Tj()) {
                            if (a) {
                                var d =
                                    pe(139, Vj, void 0, void 0);
                                c = function() {
                                    a(function() {
                                        y.setTimeout(d, 0)
                                    })
                                }
                            } else c = Vj;
                            Qj = new Jj(pe(140, c, void 0, void 0), 100);
                            c = v(Qj.yc, Qj);
                            Pj = Mi(y, "resize", c, 141)
                        }
                        Wj();
                        Xj()
                    }
                },
                Vj = function() {
                    Zj(!1);
                    Uj()
                },
                Uj = function() {
                    ak(bk(), !1)
                },
                fk = function() {
                    var a = R.getInstance();
                    ck && !a.l && (a.g = Gh(y, ck));
                    var b = new dk;
                    switch (a.R) {
                        case "xde":
                            var c = ek;
                            Zj(!1);
                            var d = R.getInstance(),
                                e = d.G,
                                a = e.height - c;
                            0 >= a && (a = e.height, c = 0);
                            d.g = new G(e.width, a);
                            a = new dk;
                            a.l = d.g;
                            a.g = e;
                            a.o = c;
                            return a;
                        case "geo":
                            a: {
                                a = a.g;
                                b = new dk;
                                b.l = a;
                                if (null !=
                                    a && -1 != a.width && -1 != a.height && -12245933 != a.width && -12245933 != a.height) {
                                    var f = R.getInstance();
                                    if (f.l) c = f.w;
                                    else try {
                                        var f = ck,
                                            g = y || y,
                                            g = g.top,
                                            d = a || Gh(g, f),
                                            e = Wc(Sc(g.document).g),
                                            c = -1 == d.width || -12245933 == d.width ? new I(d.width, d.width, d.width, d.width) : new I(e.y, e.x + d.width, e.y + d.height, e.x)
                                    } catch (k) {
                                        c = b;
                                        break a
                                    }
                                    b.h = c
                                }
                                c = b
                            }
                            return c;
                        default:
                            return b
                    }
                },
                ak = function(a, b, c) {
                    if (!gk)
                        if (window.clearTimeout(hk), hk = null, xe("osd::debugRemoveZombies", function() {
                                for (var b = a.length - 1; 0 <= b; b--);
                            }), 0 == a.length) b || ik();
                        else {
                            var d = fk(),
                                e = R.getInstance();
                            try {
                                var f = Jh();
                                if (null != Ni.getInstance().g)
                                    for (var g = 0; g < a.length; g++) $i(a[g], f, b);
                                else switch (e.R) {
                                    case "exc":
                                        for (g = 0; g < a.length; g++) Zi(a[g], f, b);
                                        break;
                                    case "nis":
                                        for (g = 0; g < a.length; g++) p(c) ? a[g].Db(c) : a[g].Uc(f);
                                        break;
                                    case "gsv":
                                        for (g = 0; g < a.length; g++) p(c) ? a[g].Cc(c) : a[g].Tc(f);
                                        break;
                                    case "aio":
                                    case "nio":
                                        for (g = 0; g < a.length; g++) Zi(a[g], f, b);
                                        break;
                                    case "xde":
                                        if (d.g)
                                            for (g = 0; g < a.length; g++) Ti(a[g], f, d.g, d.o, b);
                                        break;
                                    case "iem":
                                        for (g = 0; g < a.length; g++) Wi(a[g], f, b);
                                        break;
                                    case "swf":
                                        A(a, function(a) {
                                            if (b) {
                                                if (a.ea) {
                                                    var c = a.ea;
                                                    3 <= c.o && (c.o = 3);
                                                    a.ba.g = 0
                                                }
                                            } else if (a.ea && "d" != a.ea.h) {
                                                var c = pi(a.ea),
                                                    d = [0, 0, 0, 0, 0, .01, .5, 1, .01, .3],
                                                    e = d[c.g + 1];
                                                a.ba.g = d[c.l + 1];
                                                a.Ca(a.position, e, a.Ra + c.h, !1, !0, !1);
                                                a.Ja() && 1 != a.wa() && !a.ec && a.ea && ji(a.ea);
                                                (c = 2 == c.g || si(a.ea)) || (c = a.ea, c = "f" == c.h && 3E3 <= c.w);
                                                c && (a.hd(a), a.ec = !1, a.ea && ji(a.ea))
                                            }
                                        });
                                        break;
                                    case "raf":
                                        A(a, function(a) {
                                            if (b) a.Sa && (a.Sa.o = 3, a.ba.g = 0);
                                            else if (a.Sa) {
                                                var c = Ji(a.Sa),
                                                    d = [0, 0, 0, 0, 0, .01, .5, 1, .01, .3],
                                                    e = d[c.g + 1];
                                                a.ba.g = d[c.l + 1];
                                                a.Ca(a.position,
                                                    e, a.Ra + c.h, !1, !0, !1);
                                                a.Ja() && 1 != a.wa() && !a.ec && a.Sa && Ii(a.Sa)
                                            }
                                        });
                                        break;
                                    case "geo":
                                        if (d.h)
                                            for (g = 0; g < a.length; g++) Yi(a[g], f, d.h, b, e.h)
                                }++jk
                            } finally {
                                b ? A(a, function(a) {
                                    a.ba.g = 0
                                }) : ik()
                            }
                        }
                },
                Wj = function() {
                    var a = Xj,
                        b;
                    ua.mozVisibilityState ? b = "mozvisibilitychange" : ua.webkitVisibilityState ? b = "webkitvisibilitychange" : ua.visibilityState && (b = "visibilitychange");
                    b && (Rj = Rj || Mi(ua, b, a, 142))
                },
                Xj = function() {
                    var a = yj(),
                        b = Jh();
                    a ? (Kh || (Lh = b, A(kk, function(a) {
                        var c = a.va();
                        c.la = qj(c, b, !!a.C)
                    })), Kh = !0, Zj(!0)) : (Kh = !1, Hh = b, A(kk,
                        function(a) {
                            a.Oa && (a.va().w = b)
                        }));
                    ak(bk(), !a)
                },
                yj = function() {
                    if (lk()) return !0;
                    var a = gh(),
                        b = 1 === a,
                        a = 0 === a;
                    return R.getInstance(), b || a
                },
                ik = function() {
                    y && (hk = y.setTimeout(ye(143, function() {
                        ak(bk(), !1)
                    }), Nh(R.getInstance().C)))
                },
                mk = function(a) {
                    return null != a && Ua(kk, function(b) {
                        return b.element == a
                    })
                },
                nk = function(a) {
                    return Xa(kk, function(b) {
                        return b.fa == a
                    })
                },
                kk = [],
                ok = [],
                bk = function() {
                    return 0 == kk.length ? ok : 0 == ok.length ? kk : bb(ok, kk)
                },
                gk = !1,
                hk = null,
                ek = 0,
                ck = Lj() || Mj(),
                jk = 0,
                Zj = function(a) {
                    var b = R.getInstance();
                    b.g = b.l ? (new G(b.w.tb(), b.w.sb())).round() : Gh(y, ck);
                    if (!a) {
                        b.G = y && y.outerWidth ? new G(y.outerWidth, y.outerHeight) : new G(-12245933, -12245933);
                        a = y;
                        null !== a && a.top != a && (a = a.top);
                        var c = 0,
                            d = 0,
                            e = R.getInstance().g;
                        try {
                            var f = a.document,
                                g = f.body,
                                k = f.documentElement;
                            if ("CSS1Compat" == f.compatMode && k.scrollHeight) c = k.scrollHeight != e.height ? k.scrollHeight : k.offsetHeight, d = k.scrollWidth != e.width ? k.scrollWidth : k.offsetWidth;
                            else {
                                var l = k.scrollHeight,
                                    n = k.scrollWidth,
                                    w = k.offsetHeight,
                                    z = k.offsetWidth;
                                k.clientHeight !=
                                    w && (l = g.scrollHeight, n = g.scrollWidth, w = g.offsetHeight, z = g.offsetWidth);
                                l > e.height ? l > w ? (c = l, d = n) : (c = w, d = z) : l < w ? (c = l, d = n) : (c = w, d = z)
                            }
                            var N = new G(d, c)
                        } catch (Z) {
                            N = new G(-12245933, -12245933)
                        }
                        b.o = N
                    }
                },
                qk = function(a, b, c) {
                    if (a = pk(a, "swf", b, c)) R.getInstance().R = "swf", R.getInstance().R = "swf", A(b, function(a) {
                        a.ea || c(a)
                    });
                    return a
                },
                rk = function() {
                    var a = pk(y, "raf", bk());
                    a && (R.getInstance().R = "raf");
                    return a
                },
                pk = function(a, b, c, d) {
                    var e = !1;
                    A(c, function(c) {
                        gj(c, a, b, d) && (e = !0)
                    });
                    return e
                },
                sk = function(a) {
                    var b = [];
                    A(a,
                        function(a) {
                            mk(a.element) || (kk.push(a), b.push(a))
                        })
                },
                tk = function(a) {
                    var b = [];
                    A(a, function(a) {
                        null == Xa(kk, function(b) {
                            return b.element == a.element && b.Ya == a.Ya
                        }) && (kk.push(a), b.push(a))
                    })
                },
                lk = function() {
                    return Ua(bk(), function(a) {
                        return a.xa
                    })
                },
                dk = function() {
                    this.g = this.l = null;
                    this.o = 0;
                    this.h = null
                },
                uk = function(a) {
                    var b = [];
                    kb(a, function(a, d) {
                        d in Object.prototype || "undefined" == typeof a || (la(a) && (a = a.join(",")), b.push([d, "=", a].join("")))
                    });
                    return b.join("&")
                };
            var vk = function() {
                    var a = B;
                    return a ? Ua("AppleTV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;OMI/".split(";"), function(b) {
                        return Ha(a, b)
                    }) ? !0 : Ha(a, "Presto") && Ha(a, "Linux") && !Ha(a, "X11") && !Ha(a, "Android") && !Ha(a, "Mobi") : !1
                },
                wk = function() {
                    return Ha(B, "CrKey") || Ha(B, "PlayStation") || Ha(B, "Roku") || vk() || Ha(B, "Xbox")
                };
            var xk = null,
                yk = "",
                zk = !1,
                Ak = function(a) {
                    if (!a) return "";
                    var b = a.document,
                        c = [];
                    c.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
                    b && b.referrer && c.push("referrer=" + encodeURIComponent(b.referrer.substring(0, 512)));
                    return c.join("&")
                };
            var Bk = function(a) {
                    return function(b) {
                        return !p(b[a]) && p(0) ? 0 : b[a]
                    }
                },
                Dk = function() {
                    var a = [0, 2, 4];
                    return function(b) {
                        b = b.tos;
                        if (la(b)) {
                            for (var c = Array(b.length), d = 0; d < b.length; d++) c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                            return p(a) ? Ck(c, a) : c
                        }
                    }
                },
                Ek = function(a, b) {
                    return function(c) {
                        c = c[a];
                        if (la(c)) return Ck(c, b)
                    }
                },
                Ck = function(a, b) {
                    return Sa(a, function(a, d) {
                        return Ya(b, d)
                    })
                };
            var Fk = {
                    sv: "sv",
                    cb: "cb",
                    e: "e",
                    nas: "nas",
                    msg: "msg",
                    "if": "if",
                    sdk: "sdk",
                    p: "p",
                    tos: "tos",
                    mtos: "mtos",
                    ps: "ps",
                    scs: "scs",
                    bs: "bs",
                    pt: "pt",
                    vht: "vht",
                    mut: "mut",
                    a: "a",
                    ft: "ft",
                    dft: "dft",
                    at: "at",
                    dat: "dat",
                    as: "as",
                    vpt: "vpt",
                    gmm: "gmm",
                    std: "std",
                    efpf: "efpf",
                    swf: "swf",
                    nio: "nio",
                    px: "px",
                    nnut: "nnut",
                    vmer: "vmer",
                    vmmk: "vmmk",
                    vmiec: "vmiec",
                    nmt: "nmt",
                    tcm: "tcm",
                    bt: "bt",
                    pst: "pst",
                    vpaid: "vpaid",
                    dur: "dur",
                    vmtime: "vmtime",
                    dtos: "dtos",
                    dtoss: "dtoss",
                    dvs: "dvs",
                    dfvs: "dfvs",
                    dvpt: "dvpt",
                    fmf: "fmf",
                    vds: "vds",
                    is: "is",
                    i0: "i0",
                    i1: "i1",
                    i2: "i2",
                    i3: "i3",
                    ic: "ic",
                    cs: "cs",
                    c: "c",
                    mc: "mc",
                    nc: "nc",
                    mv: "mv",
                    nv: "nv",
                    qmt: "qmtos",
                    qnc: "qnc",
                    qmv: "qmv",
                    qnv: "qnv",
                    raf: "raf",
                    rafc: "rafc",
                    lte: "lte",
                    tth: "tth",
                    femt: "femt",
                    femvt: "femvt",
                    emc: "emc",
                    emuc: "emuc",
                    emb: "emb",
                    avms: "avms",
                    nvat: "nvat",
                    qi: "qi",
                    psm: "psm",
                    psv: "psv",
                    psfv: "psfv",
                    psa: "psa"
                },
                Gk = {
                    c: Bk("c"),
                    at: "at",
                    atos: Ek("atos", [0, 2, 4]),
                    ta: function(a, b) {
                        return function(c) {
                            if (!p(c[a])) return b
                        }
                    }("tth", "1"),
                    a: "a",
                    dur: "dur",
                    p: "p",
                    tos: Dk(),
                    j: "dom",
                    mtos: Ek("mtos", [0, 2, 4]),
                    gmm: "gmm",
                    gdr: "gdr",
                    ss: Bk("ss"),
                    vsv: kf("w2"),
                    t: "t"
                },
                Hk = {
                    atos: "atos",
                    avt: Ek("atos", [2]),
                    davs: "davs",
                    dafvs: "dafvs",
                    dav: "dav",
                    ss: Bk("ss"),
                    t: "t"
                },
                Ik = {
                    a: "a",
                    tos: Dk(),
                    at: "at",
                    c: Bk("c"),
                    mtos: Ek("mtos", [0, 2, 4]),
                    dur: "dur",
                    fs: "fs",
                    p: "p",
                    vpt: "vpt",
                    vsv: kf("ias_w2"),
                    dom: "dom",
                    gmm: "gmm",
                    gdr: "gdr",
                    t: "t"
                },
                Jk = {
                    tos: Dk(),
                    at: "at",
                    c: Bk("c"),
                    mtos: Ek("mtos", [0, 2, 4]),
                    p: "p",
                    vpt: "vpt",
                    vsv: kf("dv_w4"),
                    gmm: "gmm",
                    gdr: "gdr",
                    dom: "dom",
                    t: "t",
                    mv: "mv",
                    qmpt: Ek("qmtos", [0, 2, 4]),
                    qvs: function(a, b) {
                        return function(c) {
                            var d = c[a];
                            if (r(d)) return Ta(b, function(a) {
                                return 0 < d && d >= a ? 1 :
                                    0
                            })
                        }
                    }("qnc", [1, .5, 0]),
                    qmv: "qmv",
                    qa: "qas",
                    a: "a"
                };
            var Kk = function() {
                this.w = this.F = !1;
                this.h = null;
                this.O = "";
                this.g = {};
                this.g.start = this.ie;
                this.g.firstquartile = this.Yd;
                this.g.midpoint = this.ce;
                this.g.thirdquartile = this.je;
                this.g.complete = this.Ud;
                this.g.pause = this.ee;
                this.g.resume = this.ge;
                this.g.skip = this.he;
                this.g.viewable_impression = this.ne;
                this.g.mute = this.de;
                this.g.unmute = this.ke;
                this.g.fullscreen = this.Zd;
                this.g.exitfullscreen = this.Xd;
                this.g.fully_viewable_audible_half_duration_impression = this.$d;
                this.g.measurable_impression = this.be;
                this.g.abandon =
                    this.Td;
                this.g.engagedview = this.Wd;
                this.g.impression = this.ae;
                this.g.creativeview = this.Vd;
                this.g.progress = this.fe;
                this.l = {};
                this.l.overlay_resize = this.J;
                this.l.abandon = this.A;
                this.l.close = this.A;
                this.l.collapse = this.A;
                R.getInstance().B = 3
            };
            h = Kk.prototype;
            h.Ob = function() {};
            h.Dc = ga;
            h.$c = ga;
            h.ad = ga;
            h.uc = ga;
            h.rc = ga;
            var Lk = function(a, b, c) {
                c || (b = -1);
                return new rj(y, a, b, 7)
            };
            Kk.prototype.C = function(a) {
                window.clearTimeout(hk);
                hk = null;
                yk = a;
                gk = !0
            };
            var Nk = function(a) {
                var b = R.getInstance(),
                    c = mj.getInstance(),
                    d = v(function() {
                        b.l = !1;
                        Mk(this)
                    }, a);
                if (a.h && Bj(a.h)) {
                    var e = y.document.domain;
                    Mi(y, "message", v(a.I, a), 179);
                    Ej = y.setInterval(pe(197, sa(Hj, 4, a.h, e, !1, c.g, a.O, d, void 0), void 0, void 0), 500)
                } else d()
            };
            Kk.prototype.I = function(a) {
                if (a && a.data && q(a.data)) {
                    var b = a.data;
                    if (q(b)) {
                        var c = {};
                        for (var b = b.split("\n"), d = 0; d < b.length; d++) {
                            var e = b[d].indexOf("=");
                            if (!(0 >= e)) {
                                var f = Number(b[d].substr(0, e)),
                                    e = b[d].substr(e + 1);
                                switch (f) {
                                    case 5:
                                    case 8:
                                    case 11:
                                    case 15:
                                    case 16:
                                    case 18:
                                    case 26:
                                        e = "true" == e;
                                        break;
                                    case 4:
                                    case 7:
                                    case 6:
                                    case 14:
                                    case 20:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 24:
                                    case 25:
                                        e = Number(e);
                                        break;
                                    case 3:
                                    case 19:
                                        if (u(decodeURIComponent)) try {
                                            e = decodeURIComponent(e)
                                        } catch (k) {
                                            throw Error("Error: URI malformed: " +
                                                e);
                                        }
                                        break;
                                    case 17:
                                        e = Ta(decodeURIComponent(e).split(","), Number)
                                }
                                c[f] = e
                            }
                        }
                        c = c[0] ? c : null
                    } else c = null;
                    if (c && (b = new Aj(c[4], c[12]), this.h && this.h.match(b)))
                        if (b = c[0], "goog_acknowledge_monitoring" == b) {
                            a = c;
                            y.clearInterval(Ej);
                            var g = R.getInstance();
                            a[8] ? (g.l = !1, Mk(this)) : (Oi(g, a[9]), Yj())
                        } else if ("goog_get_mode" == b) {
                        b = {};
                        this.h && Cj(this.h, b);
                        b[0] = "goog_provide_mode";
                        b[6] = 4;
                        b[19] = this.O;
                        b[16] = !1;
                        try {
                            g = Dj(b), a.source.postMessage(g, a.origin)
                        } catch (k) {}
                        a = c[9];
                        Oi(R.getInstance(), a);
                        y.clearInterval(Ej)
                    } else if ("goog_update_data" ==
                        b || "goog_image_request" == b) a = c, g = R.getInstance(), b = c = 0, isNaN(a[22]) || isNaN(a[23]) || (c = a[22], b = a[23]), g.g = (new G(Number(c), Number(b))).round(), Oi(g, a[9])
                }
            };
            var Mk = function(a) {
                var b;
                if (b = null != y.IntersectionObserver)
                    if (b = pk(y, "nio", bk())) R.getInstance().R = "nio";
                if (b) Yj();
                else if (th() && rk()) Yj();
                else {
                    if (Ob && r(y.screenX) && r(y.mozInnerScreenX) && r(y.outerWidth)) {
                        b = y.navigator.userAgent;
                        var c = b.indexOf("Firefox/");
                        if (0 <= c) {
                            var c = Math.floor(b.substr(c + 8)) || -1,
                                d = b.indexOf("Mac OS X 10."),
                                e = -1;
                            0 <= d && (e = Number(b.substr(d + 12, 1)) || -1);
                            var f = 0 < e ? -1 : b.indexOf("Windows NT "),
                                d = -1;
                            0 <= f && (d = {
                                "6.0": 0,
                                "6.1": 1,
                                "6.2": 2
                            }[b.substr(f + 11, 3)] || -1);
                            b = 148;
                            5 <= e ? b = 4 <= c ? 108 : 3 <= c ?
                                127 : 108 : 0 <= d && (16 == c || 17 == c || 18 == c) && (b = [
                                    [146, 146, 146],
                                    [148, 147, 148],
                                    [131, 130, 136]
                                ][d][c - 16])
                        } else b = null;
                        null !== b && (ek = b, R.getInstance().R = "xde");
                        b = !0
                    } else b = !1;
                    b ? Yj() : (D && E(8) && u(jh()) ? (R.getInstance().R = "iem", b = !0) : b = !1, b ? Yj() : sh() && qk(y, kk, v(a.H, a)) ? Yj() : a.C("i"))
                }
            };
            Kk.prototype.H = function(a) {
                a && (a.Wa = !0, 1 == a.wa() ? Ok(a, "fp") : 2 == a.wa() && this.$c(a), this.D(a))
            };
            var Ok = function(a, b) {
                if (!a.Ma) {
                    var c = xj(a, "start"),
                        c = Pk(c, Fk),
                        d = xk || y,
                        e = [];
                    e.push("v=585v");
                    e.push("r=" + b);
                    b = 0;
                    "swf" == R.getInstance().R && (b = 1);
                    e.push("efm=" + b);
                    e.push(c);
                    e.push(Ak(d));
                    Dd(y, ("//pagead2.googlesyndication.com/pagead/gen_204?id=lidarvf&" + e.join("&")).substring(0, 2E3), void 0);
                    a.Ma = !0
                }
            };
            h = Kk.prototype;
            h.ie = function(a) {
                vj(a, 0);
                return xj(a, "start")
            };
            h.fe = function(a, b) {
                ak([a], !yj(), b);
                return xj(a, "progress")
            };
            h.Yd = function(a, b) {
                return Qk(a, "firstquartile", 1, b)
            };
            h.ce = function(a, b) {
                a.ga = !0;
                return Qk(a, "midpoint", 2, b)
            };
            h.je = function(a, b) {
                return Qk(a, "thirdquartile", 3, b)
            };
            h.Ud = function(a, b) {
                b = Qk(a, "complete", 4, b);
                a.xa = !1;
                Rk(1, a.fa);
                return b
            };
            var Qk = function(a, b, c, d) {
                ak([a], !yj(), d);
                vj(a, c);
                b = xj(a, b);
                if (4 != c) {
                    d = a.D;
                    a = a.rb;
                    for (var e = d.length; e < c + 1;) d.push(a()), e++
                }
                return b
            };
            h = Kk.prototype;
            h.ee = function(a, b) {
                return Sk(a, "pause", b)
            };
            h.Td = function(a, b) {
                return Sk(a, "abandon", b)
            };
            h.ge = function(a, b) {
                var c = yj();
                a.C && !c && (a.va().w = Jh());
                ak([a], !c, b);
                a.C = !1;
                return xj(a, "resume")
            };
            h.ne = function(a) {
                return xj(a, "viewable_impression")
            };
            h.he = function(a, b) {
                var c = !yj();
                ak([a], c, b);
                b = xj(a, "skip");
                a.xa = !1;
                Rk(1, a.fa);
                return b
            };
            h.de = function(a, b) {
                ak([a], !yj(), b);
                return xj(a, "mute")
            };
            h.ke = function(a, b) {
                ak([a], !yj(), b);
                return xj(a, "unmute")
            };
            h.Zd = function(a, b) {
                a.xa = !0;
                ak([a], !yj(), b);
                return xj(a, "fullscreen")
            };
            h.Xd = function(a, b) {
                a.xa = !1;
                ak([a], !yj(), b);
                return xj(a, "exitfullscreen")
            };
            h.$d = function(a) {
                return xj(a, "fully_viewable_audible_half_duration_impression")
            };
            h.be = function(a) {
                return xj(a, "measurable_impression")
            };
            h.Wd = function(a) {
                return xj(a, "engagedview")
            };
            h.ae = function(a) {
                return xj(a, "impression")
            };
            h.Vd = function(a) {
                return xj(a, "creativeview")
            };
            var Sk = function(a, b, c) {
                var d = a.va();
                d.la = qj(d, Jh(), !!a.C);
                d = !yj();
                ak([a], d, c);
                a.C = !0;
                return xj(a, b)
            };
            Kk.prototype.J = function(a, b) {
                ak([a], !yj(), b);
                return a.h()
            };
            Kk.prototype.A = function(a, b) {
                ak([a], !yj(), b);
                Rk(2, a.fa);
                return a.h()
            };
            var Rk = function(a, b) {
                    if (q(b)) {
                        if (1 == a) var c = kk;
                        else if (2 == a) c = ok;
                        else return;
                        var d = Wa(c, function(c) {
                            return c.wa() != a ? !1 : c.fa == b
                        });
                        0 <= d && (bj(c[d]), Array.prototype.splice.call(c, d, 1))
                    }
                },
                Uk = function(a, b, c) {
                    var d = Xa(kk, function(a) {
                        return a.element == c
                    });
                    null !== d && d.fa != b && (Rk(1, d.fa), d = null);
                    d || (d = Tk(a, c), d.fa = b, d.Da = "h");
                    return d
                },
                Tk = function(a, b) {
                    b = Lk(b, Jh(), !1);
                    b.Zb = v(a.o, a);
                    R.getInstance().C = 79463069;
                    tk([b]);
                    Yj();
                    return b
                };
            Kk.prototype.o = function(a) {
                a.Ja() && !a.kd && this.ad(a);
                1 == a.wa() && this.uc(a)
            };
            var Vk = function(a, b) {
                    var c = wb(function(b) {
                            return b == a
                        }),
                        c = {
                            sv: "585",
                            cb: "j",
                            e: eh[c]
                        },
                        d = xj(b, a);
                    Bb(c, d);
                    b.qc[a] = d;
                    return 2 == b.wa() ? Ij(c).join("&") : Pk(c, Fk)
                },
                Pk = function(a, b, c, d, e) {
                    var f = {};
                    if (p(a))
                        if (null != b)
                            for (var g in b) {
                                var k = b[g];
                                g in Object.prototype || null != k && (u(k) ? f[g] = k(a) : f[g] = a[k])
                            } else Bb(f, a);
                    p(c) && Bb(f, c);
                    a = uk(f);
                    0 != a.length && p(d) && p(e) && (e = e(a), a += "&" + d + "=" + e);
                    return a
                },
                Xk = function(a, b) {
                    var c = {
                        sv: "585",
                        cb: "j"
                    };
                    c.nas = kk.length;
                    c.msg = a;
                    p(b) && (a = Wk(b)) && (c.e = eh[a]);
                    return c
                },
                Wk = function(a) {
                    var b =
                        a.toLowerCase();
                    return wb(function(a) {
                        return a == b
                    })
                };
            Kk.prototype.D = ga;
            var Yk = function(a, b) {
                var c = a[b];
                p(c) && (a[b] = Math.floor(1E3 * c))
            };
            var Zk = (new Date).getTime(),
                $k = !1,
                al = !1,
                bl = !1,
                S = function(a) {
                    return !a || "function" !== typeof a || 0 > String(Function.prototype.toString).indexOf("[native code]") ? !1 : 0 <= String(a).indexOf("[native code]") && !0 || !1
                },
                cl = function(a) {
                    return !!(1 << a & Zk)
                },
                dl = [
                    function(a) {
                        return !(!a.chrome || !a.chrome.webstore)
                    },
                    function(a) {
                        return !!a.document.documentMode
                    },
                    function(a) {
                        return !!a.document.fonts.ready
                    },
                    function() {
                        return cl(0)
                    },
                    function(a) {
                        return !!a.ActiveXObject
                    },
                    function(a) {
                        return !!a.chrome
                    },
                    function(a) {
                        return !!a.navigator.serviceWorker
                    },
                    function(a) {
                        return !!a.opera
                    },
                    function(a) {
                        return !!a.sidebar
                    },
                    function() {
                        return !+"\v1"
                    },
                    function() {
                        return cl(1)
                    },
                    function(a) {
                        return !a.ActiveXObject
                    },
                    function(a) {
                        return "-ms-ime-align" in a.document.documentElement.style
                    },
                    function(a) {
                        return "-ms-scroll-limit" in a.document.documentElement.style
                    },
                    function(a) {
                        return "-webkit-font-feature-settings" in a.document.body.style
                    },
                    function() {
                        return cl(2)
                    },
                    function(a) {
                        return "ActiveXObject" in a
                    },
                    function(a) {
                        return "MozAppearance" in a.document.documentElement.style
                    },
                    function(a) {
                        return "_phantom" in
                            a
                    },
                    function(a) {
                        return "callPhantom" in a
                    },
                    function(a) {
                        return "content" in a.document.createElement("template")
                    },
                    function(a) {
                        return "getEntriesByType" in a.performance
                    },
                    function() {
                        return cl(3)
                    },
                    function(a) {
                        return "image-rendering" in a.document.body.style
                    },
                    function(a) {
                        return "object-fit" in a.document.body.style
                    },
                    function(a) {
                        return "open" in a.document.createElement("details")
                    },
                    function(a) {
                        return "orientation" in a.screen
                    },
                    function(a) {
                        return "performance" in a
                    },
                    function(a) {
                        return "shape-image-threshold" in a.document.body.style
                    },
                    function() {
                        return cl(4)
                    },
                    function(a) {
                        return "srcset" in a.document.createElement("img")
                    },
                    function() {
                        return al
                    },
                    function() {
                        return bl
                    },
                    function() {
                        return cl(5)
                    },
                    function(a) {
                        a = a.document.createElement("div");
                        a.style.width = "1px";
                        a.style.width = "-webkit-min-content";
                        a.style.width = "min-content";
                        return "1px" != a.style.width
                    },
                    function(a) {
                        a = a.document.createElement("div");
                        a.style.width = "1px";
                        a.style.width = "calc(1px - 1px)";
                        a.style.width = "-webkit-calc(1px - 1px)";
                        return "1px" != a.style.width
                    },
                    function() {
                        var a = !1;
                        eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
                        try {
                            DummyFunction1()
                        } catch (b) {
                            a = !0
                        }
                        return a
                    },
                    function() {
                        var a = !1;
                        try {
                            DummyFunction2()
                        } catch (b) {
                            a = !0
                        }
                        return a
                    },
                    function() {
                        return !1
                    },
                    function() {
                        return cl(6)
                    },
                    function(a) {
                        var b = a.document.createElement("canvas");
                        b.width = b.height = 1;
                        b = b.getContext("2d");
                        b.globalCompositeOperation = "multiply";
                        b.fillStyle = "rgb(0,255,255)";
                        b.fillRect(0, 0, 1, 1);
                        b.fill();
                        b.fillStyle = "rgb(255,255,0)";
                        b.fillRect(0, 0, 1, 1);
                        b.fill();
                        b = b.getImageData(0, 0, 1, 1).data;
                        return b[0] == b[2] && b[1] == b[3] || S(a.navigator.vibrate)
                    },
                    function(a) {
                        a =
                            a.document.createElement("canvas");
                        a.width = a.height = 1;
                        a = a.getContext("2d");
                        a.globalCompositeOperation = "multiply";
                        a.fillStyle = "rgb(0,255,255)";
                        a.fillRect(0, 0, 1, 1);
                        a.fill();
                        a.fillStyle = "rgb(255,255,0)";
                        a.fillRect(0, 0, 1, 1);
                        a.fill();
                        a = a.getImageData(0, 0, 1, 1).data;
                        return a[0] == a[2] && a[1] == a[3]
                    },
                    function(a) {
                        return S(a.document.createElement("div").matches)
                    },
                    function(a) {
                        a = a.document.createElement("input");
                        a.setAttribute("type", "range");
                        return "text" !== a.type
                    },
                    function(a) {
                        return a.CSS.supports("image-rendering",
                            "pixelated")
                    },
                    function(a) {
                        return a.CSS.supports("object-fit", "contain")
                    },
                    function() {
                        return cl(7)
                    },
                    function(a) {
                        return a.CSS.supports("object-fit", "inherit")
                    },
                    function(a) {
                        return a.CSS.supports("shape-image-threshold", "0.9")
                    },
                    function(a) {
                        return a.CSS.supports("word-break", "keep-all")
                    },
                    function() {
                        return eval("1 == [for (item of [1,2,3]) item][0]")
                    },
                    function(a) {
                        return S(a.CSS.supports)
                    },
                    function() {
                        return S(Intl.Collator)
                    },
                    function(a) {
                        return S(a.document.createElement("dialog").show)
                    },
                    function() {
                        return cl(8)
                    },
                    function(a) {
                        return S(a.document.createElement("div").animate([{
                            transform: "scale(1)",
                            Hd: "ease-in"
                        }, {
                            transform: "scale(1.3)",
                            Hd: "ease-in"
                        }], {
                            duration: 1300,
                            kl: 1
                        }).reverse)
                    },
                    function(a) {
                        return S(a.document.createElement("div").animate)
                    },
                    function(a) {
                        return S(a.document.documentElement.webkitRequestFullScreen)
                    },
                    function(a) {
                        return S(a.navigator.getBattery)
                    },
                    function(a) {
                        return S(a.navigator.permissions.query)
                    },
                    function() {
                        return !1
                    },
                    function() {
                        return cl(9)
                    },
                    function() {
                        return S(webkitRequestAnimationFrame)
                    },
                    function(a) {
                        return S(a.BroadcastChannel.call)
                    },
                    function(a) {
                        return S(a.FontFace)
                    },
                    function(a) {
                        return S(a.Gamepad)
                    },
                    function() {
                        return cl(10)
                    },
                    function(a) {
                        return S(a.MutationEvent)
                    },
                    function(a) {
                        return S(a.MutationObserver)
                    },
                    function(a) {
                        return S(a.crypto.getRandomValues)
                    },
                    function(a) {
                        return S(a.document.body.createShadowRoot)
                    },
                    function(a) {
                        return S(a.document.body.webkitCreateShadowRoot)
                    },
                    function(a) {
                        return S(a.fetch)
                    },
                    function() {
                        return cl(11)
                    },
                    function(a) {
                        return S(a.navigator.serviceWorker.register)
                    },
                    function(a) {
                        return S(a.navigator.webkitGetGamepads)
                    },
                    function(a) {
                        return S(a.speechSynthesis.speak)
                    },
                    function(a) {
                        return S(a.webkitRTCPeerConnection)
                    },
                    function(a) {
                        return a.CSS.supports("--fake-var", "0")
                    },
                    function() {
                        return cl(12)
                    },
                    function(a) {
                        return a.CSS.supports("cursor", "grab")
                    },
                    function(a) {
                        return a.CSS.supports("cursor", "zoom-in")
                    },
                    function(a) {
                        return a.CSS.supports("image-orientation", "270deg")
                    },
                    function() {
                        return cl(13)
                    },
                    function(a) {
                        return a.CSS.supports("position", "sticky")
                    },
                    function(a) {
                        return void 0 ===
                            a.document.createElement("style").scoped
                    },
                    function(a) {
                        return a.performance.getEntriesByType("resource") instanceof Array
                    },
                    function() {
                        return "undefined" == typeof InstallTrigger
                    },
                    function() {
                        return "object" == typeof(new Intl.Collator).resolvedOptions()
                    },
                    function(a) {
                        return "boolean" == typeof a.navigator.onLine
                    },
                    function() {
                        return cl(14)
                    },
                    function(a) {
                        return "undefined" == typeof a.navigator.ml
                    },
                    function(a) {
                        return "number" == typeof a.performance.now()
                    },
                    function() {
                        return 0 == (new Uint16Array(1))[0]
                    },
                    function(a) {
                        return -1 ==
                            a.ActiveXObject.toString().indexOf("native")
                    },
                    function(a) {
                        return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")
                    }
                ],
                el = [
                    function(a) {
                        a = a.document.createElement("div");
                        var b = null,
                            c = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                        try {
                            a.style.behavior = "url(#default#clientcaps)"
                        } catch (e) {}
                        for (var d = 0; d < c.length; d++) {
                            try {
                                b = a.getComponentVersion(c[d], "componentid").replace(/,/g, ".")
                            } catch (e) {}
                            if (b) return b.split(".")[0]
                        }
                        return !1
                    },
                    function() {
                        return (new Date).getTimezoneOffset()
                    },
                    function(a) {
                        return (a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth) / (a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight)
                    },
                    function(a) {
                        return (a.outerWidth || a.document && a.document.body && a.document.body.offsetWidth) / (a.outerHeight || a.document && a.document.body && a.document.body.offsetHeight)
                    },
                    function(a) {
                        return a.screen.availWidth / a.screen.availHeight
                    },
                    function(a) {
                        return a.screen.width /
                            a.screen.height
                    }
                ],
                fl = [
                    function(a) {
                        return a.navigator.userAgent
                    },
                    function(a) {
                        return a.navigator.platform
                    },
                    function(a) {
                        return a.navigator.vendor
                    }
                ],
                hl = function() {
                    try {
                        gl()
                    } catch (d) {}
                    var a = "a=1&b=" + Zk + "&",
                        b = [],
                        c = 99;
                    A(dl, function(a, c) {
                        var d = !1;
                        try {
                            d = a(y)
                        } catch (g) {}
                        b[c / 32 >>> 0] |= d << c % 32
                    });
                    A(b, function(b, e) {
                        a += String.fromCharCode(c + e) + "=" + (b >>> 0).toString(16) + "&"
                    });
                    c = 105;
                    A(el, function(b) {
                        var d = "false";
                        try {
                            d = b(y)
                        } catch (f) {}
                        a += String.fromCharCode(c++) + "=" + d + "&"
                    });
                    A(fl, function(b) {
                        var d = "";
                        try {
                            var f = b(y);
                            b = [];
                            for (var g = 0, k = 0; k < f.length; k++) {
                                for (var l = f.charCodeAt(k); 255 < l;) b[g++] = l & 255, l >>= 8;
                                b[g++] = l
                            }
                            if (!Tg)
                                for (Tg = {}, Ug = {}, f = 0; 65 > f; f++) Tg[f] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f), Ug[f] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(f);
                            f = Ug;
                            l = [];
                            for (g = 0; g < b.length; g += 3) {
                                var n = b[g],
                                    w = g + 1 < b.length,
                                    z = w ? b[g + 1] : 0,
                                    N = g + 2 < b.length,
                                    Z = N ? b[g + 2] : 0,
                                    k = n >> 2,
                                    V = (n & 3) << 4 | z >> 4,
                                    ca = (z & 15) << 2 | Z >> 6,
                                    Zb = Z & 63;
                                N || (Zb = 64, w || (ca = 64));
                                l.push(f[k], f[V], f[ca], f[Zb])
                            }
                            d =
                                l.join("")
                        } catch (yc) {}
                        a += String.fromCharCode(c++) + "=" + d + "&"
                    });
                    return a.slice(0, -1)
                },
                gl = function() {
                    if (!$k) {
                        var a = function() {
                            al = !0;
                            y.document.removeEventListener("webdriver-evaluate", a, !0)
                        };
                        y.document.addEventListener("webdriver-evaluate", a, !0);
                        var b = function() {
                            bl = !0;
                            y.document.removeEventListener("webdriver-evaluate-response", b, !0)
                        };
                        y.document.addEventListener("webdriver-evaluate-response", b, !0);
                        $k = !0
                    }
                };
            var il = function() {
                this.h = 64;
                this.g = Array(4);
                this.w = Array(this.h);
                this.o = this.l = 0;
                this.reset()
            };
            x(il, Vg);
            il.prototype.reset = function() {
                this.g[0] = 1732584193;
                this.g[1] = 4023233417;
                this.g[2] = 2562383102;
                this.g[3] = 271733878;
                this.o = this.l = 0
            };
            var jl = function(a, b, c) {
                    c || (c = 0);
                    var d = Array(16);
                    if (q(b))
                        for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
                    else
                        for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
                    b = a.g[0];
                    c = a.g[1];
                    var e = a.g[2],
                        f = a.g[3];
                    var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
                    b = c + (g << 7 & 4294967295 | g >>> 25);
                    g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
                    f = b + (g << 12 & 4294967295 | g >>> 20);
                    g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
                    e = f + (g << 17 & 4294967295 | g >>> 15);
                    g = c + (b ^ e &
                        (f ^ b)) + d[3] + 3250441966 & 4294967295;
                    c = e + (g << 22 & 4294967295 | g >>> 10);
                    g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
                    b = c + (g << 7 & 4294967295 | g >>> 25);
                    g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
                    f = b + (g << 12 & 4294967295 | g >>> 20);
                    g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
                    e = f + (g << 17 & 4294967295 | g >>> 15);
                    g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
                    c = e + (g << 22 & 4294967295 | g >>> 10);
                    g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
                    b = c + (g << 7 & 4294967295 | g >>> 25);
                    g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
                    f = b + (g << 12 & 4294967295 | g >>> 20);
                    g =
                        e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
                    e = f + (g << 17 & 4294967295 | g >>> 15);
                    g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
                    c = e + (g << 22 & 4294967295 | g >>> 10);
                    g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
                    b = c + (g << 7 & 4294967295 | g >>> 25);
                    g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
                    f = b + (g << 12 & 4294967295 | g >>> 20);
                    g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
                    e = f + (g << 17 & 4294967295 | g >>> 15);
                    g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
                    c = e + (g << 22 & 4294967295 | g >>> 10);
                    g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
                    b = c + (g << 5 & 4294967295 |
                        g >>> 27);
                    g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
                    f = b + (g << 9 & 4294967295 | g >>> 23);
                    g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
                    e = f + (g << 14 & 4294967295 | g >>> 18);
                    g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
                    c = e + (g << 20 & 4294967295 | g >>> 12);
                    g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
                    b = c + (g << 5 & 4294967295 | g >>> 27);
                    g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
                    f = b + (g << 9 & 4294967295 | g >>> 23);
                    g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
                    e = f + (g << 14 & 4294967295 | g >>> 18);
                    g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
                    c = e + (g << 20 & 4294967295 |
                        g >>> 12);
                    g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
                    b = c + (g << 5 & 4294967295 | g >>> 27);
                    g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
                    f = b + (g << 9 & 4294967295 | g >>> 23);
                    g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
                    e = f + (g << 14 & 4294967295 | g >>> 18);
                    g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
                    c = e + (g << 20 & 4294967295 | g >>> 12);
                    g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
                    b = c + (g << 5 & 4294967295 | g >>> 27);
                    g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
                    f = b + (g << 9 & 4294967295 | g >>> 23);
                    g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
                    e = f + (g << 14 & 4294967295 |
                        g >>> 18);
                    g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
                    c = e + (g << 20 & 4294967295 | g >>> 12);
                    g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
                    b = c + (g << 4 & 4294967295 | g >>> 28);
                    g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
                    f = b + (g << 11 & 4294967295 | g >>> 21);
                    g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
                    e = f + (g << 16 & 4294967295 | g >>> 16);
                    g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
                    c = e + (g << 23 & 4294967295 | g >>> 9);
                    g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
                    b = c + (g << 4 & 4294967295 | g >>> 28);
                    g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
                    f = b + (g << 11 & 4294967295 | g >>> 21);
                    g = e + (f ^
                        b ^ c) + d[7] + 4139469664 & 4294967295;
                    e = f + (g << 16 & 4294967295 | g >>> 16);
                    g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
                    c = e + (g << 23 & 4294967295 | g >>> 9);
                    g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
                    b = c + (g << 4 & 4294967295 | g >>> 28);
                    g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
                    f = b + (g << 11 & 4294967295 | g >>> 21);
                    g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
                    e = f + (g << 16 & 4294967295 | g >>> 16);
                    g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
                    c = e + (g << 23 & 4294967295 | g >>> 9);
                    g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
                    b = c + (g << 4 & 4294967295 | g >>> 28);
                    g = f + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
                    f = b + (g << 11 & 4294967295 | g >>> 21);
                    g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
                    e = f + (g << 16 & 4294967295 | g >>> 16);
                    g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
                    c = e + (g << 23 & 4294967295 | g >>> 9);
                    g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
                    b = c + (g << 6 & 4294967295 | g >>> 26);
                    g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
                    f = b + (g << 10 & 4294967295 | g >>> 22);
                    g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
                    e = f + (g << 15 & 4294967295 | g >>> 17);
                    g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
                    c = e + (g << 21 & 4294967295 | g >>> 11);
                    g = b + (e ^ (c | ~f)) + d[12] + 1700485571 & 4294967295;
                    b = c +
                        (g << 6 & 4294967295 | g >>> 26);
                    g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
                    f = b + (g << 10 & 4294967295 | g >>> 22);
                    g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
                    e = f + (g << 15 & 4294967295 | g >>> 17);
                    g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
                    c = e + (g << 21 & 4294967295 | g >>> 11);
                    g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
                    b = c + (g << 6 & 4294967295 | g >>> 26);
                    g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
                    f = b + (g << 10 & 4294967295 | g >>> 22);
                    g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
                    e = f + (g << 15 & 4294967295 | g >>> 17);
                    g = c + (f ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
                    c = e + (g << 21 & 4294967295 | g >>> 11);
                    g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
                    b = c + (g << 6 & 4294967295 | g >>> 26);
                    g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
                    f = b + (g << 10 & 4294967295 | g >>> 22);
                    g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
                    e = f + (g << 15 & 4294967295 | g >>> 17);
                    g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
                    a.g[0] = a.g[0] + b & 4294967295;
                    a.g[1] = a.g[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
                    a.g[2] = a.g[2] + e & 4294967295;
                    a.g[3] = a.g[3] + f & 4294967295
                },
                kl = function(a, b) {
                    if (!p(c)) var c = b.length;
                    for (var d = c - a.h, e = a.w, f = a.l, g = 0; g < c;) {
                        if (0 ==
                            f)
                            for (; g <= d;) jl(a, b, g), g += a.h;
                        if (q(b))
                            for (; g < c;) {
                                if (e[f++] = b.charCodeAt(g++), f == a.h) {
                                    jl(a, e);
                                    f = 0;
                                    break
                                }
                            } else
                                for (; g < c;)
                                    if (e[f++] = b[g++], f == a.h) {
                                        jl(a, e);
                                        f = 0;
                                        break
                                    }
                    }
                    a.l = f;
                    a.o += c
                };
            var ll = function() {
                Kk.call(this);
                this.B = void 0;
                this.G = null
            };
            x(ll, Kk);
            ha(ll);
            ll.prototype.Ob = function(a, b) {
                switch (R.getInstance().R) {
                    case "nis":
                        var c = nk(a);
                        c || (c = ml(this, a, "n", b.opt_nativeTime || -1), c.la = R.getInstance().D);
                        b = c;
                        break;
                    case "gsv":
                        (c = nk(a)) || (c = ml(this, a, "m", b.opt_nativeTime || -1));
                        b = c;
                        break;
                    case "exc":
                        (b = nk(a)) || (b = ml(this, a, "h", -1));
                        break;
                    default:
                        b.opt_adElement ? b = Uk(this, a, b.opt_adElement) : (b = nl(this, a, b.opt_sdkID || "")) || (b = nk(a) || void 0)
                }
                b && b.K == ga && (b.K = v(this.rc, this));
                return b
            };
            ll.prototype.rc = function(a) {
                var b = R.getInstance();
                a.g = 0;
                a.J = 0;
                if ("as" == a.Da)
                    if (b = "getVideoMetadata" + a.Ya, u(a.element[b])) try {
                        var c = a.element[b]()
                    } catch (e) {
                        a.g |= 4
                    } else a.g |= 2;
                    else if ("h" == a.Da || "n" == a.Da)
                    if (b = fa("exc" == b.R || "nis" == b.R ? "ima.bridge.getVideoMetadata" : "ima.common.getVideoMetadata"), u(b)) try {
                        c = b(a.fa)
                    } catch (e) {
                        a.g |= 4
                    } else a.g |= 2;
                    else a.g |= 1;
                a.g || (p(c) ? null === c ? a.g |= 16 : xb(c) ? a.g |= 32 : null != c.errorCode && (a.J = c.errorCode, a.g |= 64) : a.g |= 8);
                null != c || (c = {});
                b = c;
                a.F = 0;
                for (var d in bh) null == b[d] &&
                    (a.F |= bh[d]);
                Yk(b, "currentTime");
                Yk(b, "duration");
                Vh(c.volume) && Vh(this.B) && (c.volume *= this.B);
                return c
            };
            var ml = function(a, b, c, d) {
                    d = Lk(null, d, !0);
                    d.Da = c;
                    d.Zb = v(a.o, a);
                    sk([d]);
                    d.fa = b;
                    return d
                },
                nl = function(a, b, c) {
                    var d = Xa(kk, v(function(a) {
                        return a.element ? ol(a.element, c) == b && a.Ya == c : !1
                    }, a));
                    null !== d && d.fa != b && (Rk(1, d.fa), d = void 0);
                    if (d) return d;
                    d = pl(c);
                    if (d = Xa(d, v(function(a) {
                            return ol(a, c) == b
                        }, a))) return d = Tk(a, d), d.Da = "as", d.fa = b, d.Ya = c, d
                },
                pl = function(a) {
                    var b = y.document,
                        c = fb(Ta(["embed", "object"], function(a) {
                            return cb(b.getElementsByTagName(a))
                        })),
                        d = "metricID" + a;
                    return c = Sa(c, function(a) {
                        if (!a || !na(a) ||
                            1 != a.nodeType || !u(a.getBoundingClientRect)) return !1;
                        var b = a.getBoundingClientRect();
                        return 0 != b.width && 0 != b.height && a[d] && u(a[d]) ? !0 : !1
                    })
                },
                ol = function(a, b) {
                    b = "metricID" + b;
                    if (!a || !a[b] || !u(a[b])) return null;
                    try {
                        var c = a[b]()
                    } catch (d) {
                        return null
                    }
                    return c.queryID
                },
                ql = function(a, b) {
                    var c = R.getInstance();
                    switch (a.Da) {
                        case "h":
                            var d = fa("exc" == c.R ? "ima.bridge.triggerExternalActivityEvent" : "ima.common.triggerExternalActivityEvent");
                            break;
                        case "m":
                            d = fa("ima.common.triggerExternalActivityEvent");
                            break;
                        case "n":
                            d =
                                fa("ima.bridge.triggerExternalActivityEvent");
                            break;
                        case "as":
                            var e = "triggerExternalActivityEvent" + a.Ya;
                            a.element && u(a.element[e]) && (d = function(b, c, d) {
                                a.element[e](d)
                            });
                            break;
                        default:
                            return a.Ka |= 4, !1
                    }
                    if (u(d)) {
                        c = Vk(b, a);
                        try {
                            return d(a.fa, c, b), !0
                        } catch (f) {
                            a.Ka |= 2
                        }
                    } else a.Ka |= 1;
                    return !1
                };
            ll.prototype.ad = function(a) {
                ql(a, "viewable_impression") && (a.kd = !0)
            };
            ll.prototype.uc = function(a) {
                tj(a, a.va().U[0]) && !a.ka && ql(a, "fully_viewable_audible_half_duration_impression") && (a.ka = !0)
            };
            ll.prototype.Dc = function(a) {
                a.jd || a.Wa || this.w || !ql(a, "measurable_impression") || (a.jd = !0)
            };
            ll.prototype.$c = function(a) {
                !a.g && a.Wa && ql(a, "overlay_unmeasurable_impression") && (a.g = !0)
            };
            var rl = function(a) {
                    return lb(zb(a || {}), function(a, c) {
                        return "qmtos" == c || "qnc" == c || "qmv" == c || "qnv" == c ? !1 : !0
                    })
                },
                tl = function(a, b, c) {
                    var d = {};
                    d.viewability = c ? Pk(b, Fk) : Pk(rl(b), Fk);
                    c = Zk = (new Date).getTime();
                    var e = cl(5);
                    c = (al ? !e : e) ? c | 2 : c & -3;
                    e = cl(2);
                    c = (bl ? !e : e) ? c | 8 : c & -9;
                    c = {
                        s1: (c >>> 0).toString(16)
                    };
                    a.G || (a.G = hl());
                    d.moatInit = a.G;
                    d.moatViewability = Pk(b, Gk, c, "h", sl("kArwaWEsTs"));
                    d.integralAdsViewability = Pk(b, Ik, {}, "h", sl("b96YPMzfnx"));
                    d.doubleVerifyViewability = Pk(b, Jk, {}, "h", sl("yb8Wev6QDg"));
                    d.googleViewability =
                        Pk(b, Hk);
                    return d
                },
                sl = function(a) {
                    return function(b) {
                        var c = new il;
                        kl(c, b + a);
                        var d = Array((56 > c.l ? c.h : 2 * c.h) - c.l);
                        d[0] = 128;
                        for (b = 1; b < d.length - 8; ++b) d[b] = 0;
                        var e = 8 * c.o;
                        for (b = d.length - 8; b < d.length; ++b) d[b] = e & 255, e /= 256;
                        kl(c, d);
                        d = Array(16);
                        for (b = e = 0; 4 > b; ++b)
                            for (var f = 0; 32 > f; f += 8) d[e++] = c.g[b] >>> f & 255;
                        return Mg(d).slice(-8)
                    }
                },
                ul = function(a, b, c) {
                    var d = ll.getInstance(),
                        e = {};
                    Bb(e, {
                        opt_adElement: void 0,
                        opt_fullscreen: void 0
                    }, c || {});
                    if (e.opt_bounds) a = tl(d, Xk("ol", a), !1);
                    else {
                        b: {
                            if (Wk(a)) {
                                if (zk) {
                                    e = Xk("ue", a);
                                    break b
                                }
                                b = d.Ob(b, e);
                                if (!b) {
                                    e = Xk("nf", a);
                                    break b
                                }
                                if (!d.F) {
                                    d.F = !0;
                                    try {
                                        var f = Jh(),
                                            g = R.getInstance();
                                        Ih = f;
                                        xk = Ae(y).lc;
                                        Zj(!1);
                                        var k = R.getInstance();
                                        y.screen && (k.A = new G(y.screen.width, y.screen.height));
                                        if ("nis" != g.R && "gsv" != g.R) {
                                            var l = y.document;
                                            l.body && l.body.getBoundingClientRect ? (v(d.C, d), Ni.getInstance(), !g.h && th() && rk() ? Yj() : g.h && "exc" != g.R ? g.l ? Nk(d) : Mk(d) : Yj()) : zk = !0
                                        }
                                    } catch (w) {
                                        throw kk = [], ok = [], w;
                                    }
                                }
                                "i" == yk && (b.Wa = !0, d.D(b));
                                f = e.opt_fullscreen;
                                p(f) && (b.xa = !!f);
                                wk() ? g = !1 : (f = R.getInstance().R, g = y &&
                                    y.w || "nis" === f || "gsv" === f ? !1 : 0 === gh());
                                g && (Ok(b, "pvu"), d.C("pvu"));
                                f = a.toLowerCase();
                                !g && Ya(ch, f) && (b.Na || ("i" != yk && (gk = !1), g = Ni.getInstance(), null != g.g && (g = null != g.g ? new g.g.constructor : null, b.R = g, b.R.o(y, b.za, b.xc)), gj(b, y, R.getInstance().R, v(d.H, d)), g = p(e) ? e.opt_nativeTime : void 0, Mh = g = r(g) ? g : Jh(), b.Oa = !0, k = yj(), b.Na = !0, b.o = {}, b.o.firstquartile = !1, b.o.midpoint = !1, b.o.thirdquartile = !1, b.o.complete = !1, b.o.pause = !1, b.o.skip = !1, b.o.viewable_impression = !1, b.U = 0, k || (b.va().w = g), ak([b], !k, e)), d.Dc(b));
                                (g = b.A[f]) && ij(b.h, g);
                                var n;
                                1 == b.wa() ? n = d.g[f] : 2 == b.wa() && (n = d.l[f]);
                                if (n && (e = n.call(d, b, e), p(e))) {
                                    n = Xk(void 0, f);
                                    Bb(n, e);
                                    e = n;
                                    break b
                                }
                            }
                            e = void 0
                        }
                        a = tl(d, e, "firstquartile" == a || "midpoint" == a || "thirdquartile" == a || "complete" == a || "skip" == a || "abandon" == a ? !0 : !1)
                    }
                    return a
                };
            ll.prototype.o = function(a) {
                this.w ? vl(this, a) : ll.N.o.call(this, a)
            };
            ll.prototype.D = function(a) {
                this.w && 1 == a.wa() && vl(this, a)
            };
            var vl = function(a, b) {
                    var c = fa("ima.common.triggerViewabilityMeasurementUpdate");
                    if (u(c)) {
                        var d = {},
                            e = R.getInstance();
                        d.insideIframe = e.h;
                        d.unmeasurable = b.Wa;
                        d.position = b.position;
                        d.coverage = b.ba.g;
                        d.documentSize = e.o;
                        d.viewportSize = e.g;
                        d.nativeVolume = a.B;
                        c(b.fa, d)
                    }
                },
                wl = function(a) {
                    ll.getInstance();
                    var b = mj.getInstance().g;
                    Ya(b, a) || b.push(a)
                };
            t("Goog_AdSense_Lidar_sendVastEvent", ye(193, ul, void 0, function() {
                return {
                    v: "585",
                    "if": R.getInstance().h ? "1" : "0",
                    nas: String(kk.length)
                }
            }), void 0);
            t("Goog_AdSense_Lidar_getViewability", ye(194, function(a, b) {
                var c = ll.getInstance();
                var d = {};
                Bb(d, {
                    opt_adElement: void 0,
                    opt_fullscreen: void 0
                }, b || {});
                d.opt_bounds ? c = tl(c, Xk("ol"), !1) : (zk ? a = Xk("ue") : (a = c.Ob(a, d)) ? (b = Xk(), Bb(b, wj(a, !0, !1)), a = b) : a = Xk("nf"), c = tl(c, a, !0));
                return c
            }), void 0);
            t("Goog_AdSense_Lidar_getUrlSignalsArray", ye(195, function() {
                return Nf()
            }), void 0);
            t("Goog_AdSense_Lidar_getUrlSignalsList", ye(196, function() {
                return ff(Nf())
            }), void 0);
            t("Goog_AdSense_Lidar_addExperimentId", pe(249, wl, void 0, void 0), void 0);
            var xl = {
                jh: "application/dash+xml",
                Oi: "video/mp4",
                Qi: "video/mpeg",
                Ci: "application/x-mpegURL",
                kj: "video/ogg",
                Bk: "video/3gpp",
                gl: "video/webm",
                Ni: "audio/mpeg",
                Pi: "audio/mp4"
            };
            var yl = function() {};
            yl.prototype.allowCustom = !0;
            var bm = {
                    ei: "Image",
                    Nh: "Flash",
                    nd: "All"
                },
                cm = {
                    Zh: "Html",
                    ci: "IFrame",
                    uk: "Static",
                    nd: "All"
                },
                dm = {
                    di: "IgnoreSize",
                    hk: "SelectExactMatch",
                    ik: "SelectNearMatch"
                },
                em = {
                    ph: "DisallowResize",
                    Yj: "ResizeSmaller"
                };
            var fm = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/sul www.google.com/pagead/xsul www.youtube.com/pagead/sul www.youtube.com/pagead/psul www.youtube.com/pagead/slav".split(" "),
                gm = /\bocr\b/,
                hm = 0,
                im = {},
                jm = function(a) {
                    return wa(Ka(a)) ? !1 : 0 <= a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&") ||
                        (new tf(a)).w.match(gm) ? !0 : null != Xa(fm, function(b) {
                            return null != a.match(b)
                        })
                },
                nm = function(a, b) {
                    if (a && (a = km(a), !wa(a))) {
                        var c = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
                        b ? lm(function(b) {
                            mm(b ? c : 'javascript:"<body><object data=\\""+' + a + '+"\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')
                        }) : mm(c)
                    }
                },
                mm = function(a) {
                    var b = Yc("IFRAME", {
                        src: a,
                        style: "display:none"
                    });
                    a = Rc(b).body;
                    var c = Lg(function() {
                        Eg(d);
                        ad(b)
                    }, 15E3);
                    var d = Cg(b, ["load", "error"], function() {
                        Lg(function() {
                            m.clearTimeout(c);
                            ad(b)
                        }, 5E3)
                    });
                    a.appendChild(b)
                },
                lm = function(a) {
                    var b = im.imageLoadingEnabled;
                    if (null != b) a(b);
                    else {
                        var c = !1;
                        om(function(b, e) {
                            delete im[e];
                            c || (c = !0, null != im.imageLoadingEnabled || (im.imageLoadingEnabled = b), a(b))
                        })
                    }
                },
                om = function(a) {
                    var b = new Image,
                        c = "" + hm++;
                    im[c] = b;
                    b.onload = function() {
                        clearTimeout(d);
                        a(!0, c)
                    };
                    var d = setTimeout(function() {
                        a(!1, c)
                    }, 300);
                    b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                },
                pm = function(a) {
                    if (a) {
                        var b = document.createElement("OBJECT");
                        b.data =
                            a;
                        b.width = "1";
                        b.height = "1";
                        b.style.visibility = "hidden";
                        var c = "" + hm++;
                        im[c] = b;
                        b.onload = b.onerror = function() {
                            delete im[c]
                        };
                        document.body.appendChild(b)
                    }
                },
                qm = function(a) {
                    if (a) {
                        var b = new Image,
                            c = "" + hm++;
                        im[c] = b;
                        b.onload = b.onerror = function() {
                            delete im[c]
                        };
                        b.src = a
                    }
                },
                rm = function(a, b, c) {
                    if (a) {
                        if (c) try {
                            if (m.navigator && m.navigator.sendBeacon && m.navigator.sendBeacon(a, "")) return
                        } catch (d) {}
                        b ? lm(function(b) {
                            b ? qm(a) : pm(a)
                        }) : qm(a)
                    }
                },
                km = function(a) {
                    a = xc(Bc(a));
                    if ("about:invalid#zClosurez" === a) return "";
                    a = Ec(Gc(a));
                    return encodeURIComponent(String(ff(a)))
                };
            var sm = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g,
                tm = function(a, b) {
                    return a.replace(sm, function(a, d) {
                        try {
                            var c = yb(b, d);
                            if (null == c) return a;
                            c = c.toString();
                            if ("" == c || !wa(Ka(c))) return encodeURIComponent(c).replace(/%2C/g, ",")
                        } catch (f) {}
                        return a
                    })
                };
            var um = function(a, b, c, d) {
                this.l = a;
                this.g = Math.min(Math.max(c || 0, 0), 1);
                this.h = null != d ? d : !0
            };
            um.prototype.getId = function() {
                return this.l
            };
            var vm = function(a) {
                this.l = a;
                this.h = new pf;
                this.g = null
            };
            vm.prototype.getId = function() {
                return this.l
            };
            var wm = function(a) {
                var b = Math.random(),
                    c = 0,
                    d = a.h.ca();
                A(d, function(a) {
                    c += a.g
                }, a);
                var e = 1 < c ? c : 1;
                a.g = null;
                for (var f = 0, g = 0; g < d.length; ++g)
                    if (f += d[g].g, f / e >= b) {
                        a.g = d[g];
                        break
                    }
            };
            var zm = function() {
                    this.h = null != m.G_testRunner;
                    this.g = new pf;
                    if (!M.ha()) {
                        T(this, "GvnExternalLayer", 31061774, .01);
                        T(this, "GvnExternalLayer", 31061775, .01);
                        T(this, "GvnExternalLayer", 41351088, .01);
                        T(this, "GvnExternalLayer", 41351089, .01);
                        T(this, "GvnExternalLayer", 420706008, .05);
                        T(this, "GvnExternalLayer", 420706009, .05);
                        T(this, "GvnExternalLayer", 420706024, .01);
                        T(this, "GvnExternalLayer", 420706025, .01);
                        T(this, "GvnExternalLayer", 420706029, .01);
                        T(this, "GvnExternalLayer", 634360101, 0);
                        T(this, "GvnExternalLayer",
                            634360102, 0);
                        T(this, "GvnExternalLayer", 21592082, .01);
                        T(this, "GvnExternalLayer", 420706068, .01);
                        T(this, "GvnExternalLayer", 420706069, .01);
                        T(this, "GvnExternalLayer", 324123020, .05);
                        T(this, "GvnExternalLayer", 324123021, .05);
                        T(this, "GvnExternalLayer", 420706081, .01);
                        T(this, "GvnExternalLayer", 420706082, .01);
                        var a = M.ma();
                        th(a) && (rd(y.top) ? (T(this, "ActiveViewExternalLayer", 509445010, .01), T(this, "ActiveViewExternalLayer", 509445011, .01)) : (T(this, "ActiveViewExternalLayer", 509445012, .01), T(this, "ActiveViewExternalLayer",
                            509445013, .01)));
                        T(this, "ActiveViewExternalLayer", 495644001, .01);
                        T(this, "ActiveViewExternalLayer", 495644002, .01);
                        T(this, "GvnExternalLayer", 634360200, .01);
                        T(this, "GvnExternalLayer", 634360201, .01)
                    }
                    xm(this);
                    a = Re(M);
                    a = Ue(a);
                    null != a && (this.h = !1, ym(this, a.map(String)))
                },
                Am = ["ActiveViewExternalLayer"],
                Bm = null,
                Cm = function() {
                    Bm || (Bm = new zm);
                    return Bm
                },
                T = function(a, b, c, d) {
                    wa(Ka(b)) || isNaN(c) || 0 >= c || (c = new um(c, 0, d), Dm(a, b).h.set(c.getId(), c))
                },
                xm = function(a) {
                    Te() || M.Vb() || A(a.g.ca(), function(a) {
                        wm(a)
                    }, a)
                },
                ym = function(a, b) {
                    A(b, function(a) {
                        var b = Number(a);
                        a = "FORCED_PUB_EXP_LAYER_" + a;
                        isNaN(b) || 0 >= b || wa(Ka(a)) || (Dm(this, a).g = new um(b, 0, 0, !0))
                    }, a)
                },
                Em = function() {
                    var a = Cm(),
                        b = {};
                    A(a.g.ca(), function(a) {
                        var c = a.g;
                        if (c) {
                            var e = {};
                            e.experimentId = c.getId();
                            e.shouldReport = c.h;
                            b[a.getId()] = e
                        } else b[a.getId()] = {}
                    });
                    return b
                },
                Fm = function(a, b) {
                    return a.h ? !1 : Ua(a.g.ca(), function(a) {
                        return !!a.g && a.g.getId() == b
                    })
                },
                Gm = function() {
                    var a = Cm();
                    if (a.h) return "";
                    var b = [];
                    A(a.g.ca(), function(a) {
                        (a = a.g) && a.h && b.push(a.getId())
                    });
                    return b.sort().join(",")
                },
                Dm = function(a, b) {
                    var c = a.g.get(b);
                    null == c && (c = new vm(b), a.g.set(b, c));
                    return c
                },
                Hm = function() {
                    var a = [],
                        b = Cm();
                    A(Am, function(c) {
                        (c = (c = Dm(b, c)) ? c.g : null) && a.push(c.getId())
                    });
                    return a
                };
            var Im = ["*.googlesyndication.com", "gcdn.2mdn.net"],
                Jm = ["*.youtu.be", "*.youtube.com"],
                Km = "ad.doubleclick.net bid.g.doubleclick.net corp.google.com ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
                Lm = ["c.googlesyndication.com"],
                Nm = function(a, b) {
                    try {
                        var c = (new tf(b)).g,
                            c = c.replace(/^www./i, "");
                        return Ua(a, function(a) {
                            return Mm(a, c)
                        })
                    } catch (d) {
                        return !1
                    }
                },
                Mm = function(a, b) {
                    if (wa(Ka(b))) return !1;
                    a = a.toLowerCase();
                    b = b.toLowerCase();
                    return "*." == a.substr(0, 2) ? (a = a.substr(2), a.length > b.length ? !1 : b.substr(-a.length) == a && (b.length == a.length || "." == b.charAt(b.length - a.length - 1))) : a == b
                },
                Om = function(a, b) {
                    return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
                };
            var Pm = function(a) {
                try {
                    a: {
                        var b = a,
                            c = void 0,
                            d = b.length - 11 - 2;
                        if (!(-1 == b.indexOf("URL_SIGNALS") || 2048 <= d || !c && !window.Goog_AdSense_Lidar_getUrlSignalsArray))
                            for (var c = c || window.Goog_AdSense_Lidar_getUrlSignalsArray(), d = {}, e = 0; e < c.length; ++e) {
                                d.URL_SIGNALS = c[e];
                                var f = tm(b, d);
                                if (2048 > f.length) {
                                    a = f;
                                    break a
                                }
                            }
                        a = b
                    }
                }
                catch (n) {}
                try {
                    f = a;
                    b = !1;
                    Om(f, Lm) ? b = !1 : null != f && Nm(Jm, f) ? b = !0 : "https:" == window.location.protocol && (Om(f, Km) || M.ha()) && (b = !0);
                    if (b) {
                        var g = new tf(f);
                        "https" == g.l ? a = f : (uf(g, "https"), a = g.toString())
                    } else a =
                        f;
                    var k = Cm(),
                        l = !M.ma() && (!M.ha() || Fm(k, 41351089)),
                        g = !1;
                    M.ma() || M.ha() || !Fm(Cm(), 634360102) || (g = !0);
                    (k = a) && (jm(k) ? nm(k, l) : rm(k, l, g))
                } catch (n) {}
            };
            var Qm = function(a, b) {
                    this.message = a;
                    this.g = b
                },
                Rm = new Qm("Invalid usage of the API. Cause: {0}", 900),
                Sm = new Qm("Failed to initialize ad playback element before starting ad playback.", 400),
                Tm = new Qm("The provided {0} information: {1} is invalid.", 1101),
                Um = function(a, b, c) {
                    var d = b || null;
                    if (!(d instanceof Le)) {
                        var e = a.g,
                            f = a.message,
                            g = db(arguments, 2);
                        if (0 < g.length)
                            for (var k = 0; k < g.length; k++) f = f.replace(new RegExp("\\{" + k + "\\}", "ig"), g[k]);
                        e = new Le("adPlayError", f, e);
                        e.g = d;
                        d = e
                    }
                    return d
                };
            var Wm = function(a, b) {
                    if (null == a || 0 >= a.width || 0 >= a.height) throw Um(Tm, null, "ad slot size", a.toString());
                    this.h = a;
                    this.g = null != b ? b : new yl;
                    this.w = Vm(cm, this.g.resourceType) ? this.g.resourceType : "All";
                    this.o = Vm(bm, this.g.creativeType) ? this.g.creativeType : "All";
                    this.A = Vm(dm, this.g.sizeCriteria) ? this.g.sizeCriteria : "SelectExactMatch";
                    this.G = Vm(em, this.g.g) ? this.g.g : "DisallowResize";
                    this.l = null != this.g.adSlotIds ? this.g.adSlotIds : [];
                    this.C = r(this.g.nearMatchPercent) && 0 < this.g.nearMatchPercent && 100 >= this.g.nearMatchPercent ?
                        this.g.nearMatchPercent : 90
                },
                Zm = function(a, b) {
                    var c = [];
                    A(b, function(a) {
                        if (this.g.allowCustom || a.F) !wa(a.h) && (isNaN(a.C) || isNaN(a.w) || a.w == a.C) && Xm(this, a) ? c.push(a) : (a = Ym(this, a), null != a && !wa(a.h) && c.push(a))
                    }, a);
                    return c
                },
                Xm = function(a, b) {
                    var c;
                    if (c = "Flash" != b.g || nh) {
                        if (c = "All" == a.w || a.w == b.D) c = b.g, c = null != c ? "All" == a.o || a.o == c : !0;
                        c && (c = b.H, c = 0 == a.l.length ? !0 : null != c ? 0 <= Ra(a.l, c) : !1)
                    }
                    if (c)
                        if (b = b.l, (c = "IgnoreSize" == a.A) || (c = a.h, c = c == b ? !0 : c && b ? c.width == b.width && c.height == b.height : !1), c) a = !0;
                        else {
                            if (c =
                                "SelectNearMatch" == a.A) "ResizeSmaller" != a.G || b.width <= a.h.width && b.height <= a.h.height || (c = a.h, c = Math.min(c.width / b.width, c.height / b.height), b = new G(c * b.width, c * b.height)), c = b.width, b = b.height, c = c > a.h.width || b > a.h.height || c < a.C / 100 * a.h.width || b < a.C / 100 * a.h.height ? !1 : !0;
                            a = c
                        }
                    else a = !1;
                    return a
                },
                Ym = function(a, b) {
                    b = b.o;
                    return null != b ? Xa(b, function(a) {
                        return Xm(this, a)
                    }, a) : null
                },
                Vm = function(a, b) {
                    var c;
                    if (c = null != b) a: {
                        for (var d in a)
                            if (a[d] == b) {
                                c = !0;
                                break a
                            }
                        c = !1
                    }
                    return c
                };
            var $m = function(a) {
                var b = {};
                A(a.split(","), function(a) {
                    var c = a.split("=");
                    2 == c.length && (a = xa(c[0]), c = xa(c[1]), 0 < a.length && (b[a] = c))
                });
                return b
            };
            var an = function() {
                this.C = 1;
                this.l = -1;
                this.g = 1;
                this.w = this.o = 0;
                this.h = !1
            };
            h = an.prototype;
            h.ze = function() {
                return this.C
            };
            h.we = function() {
                return this.l
            };
            h.ue = function() {
                return this.g
            };
            h.xe = function() {
                return this.o
            };
            h.ye = function() {
                return this.w
            };
            h.ve = function() {
                return this.h
            };
            var bn = function(a) {
                this.h = a.content;
                this.g = a.contentType;
                this.F = a.isSynthetic;
                this.l = a.size;
                this.w = a.masterSequenceNumber;
                this.D = a.resourceType;
                this.C = a.sequenceNumber;
                this.H = a.adSlotId;
                this.o = [];
                a = a.backupCompanions;
                null != a && (this.o = Ta(a, function(a) {
                    return new bn(a)
                }))
            };
            bn.prototype.getContent = function() {
                return this.h
            };
            bn.prototype.A = function() {
                return this.g
            };
            bn.prototype.B = function() {
                return this.l.width
            };
            bn.prototype.G = function() {
                return this.l.height
            };
            var U = function(a) {
                this.g = a
            };
            U.prototype.h = function() {
                return this.g.adId
            };
            U.prototype.l = function() {
                return this.g.creativeAdId
            };
            U.prototype.o = function() {
                return this.g.creativeId
            };
            var cn = function(a) {
                return a.g.adQueryId
            };
            h = U.prototype;
            h.Be = function() {
                return this.g.adSystem
            };
            h.Ce = function() {
                return this.g.advertiserName
            };
            h.De = function() {
                return this.g.apiFramework
            };
            h.Re = function() {
                return this.g.adWrapperIds
            };
            h.Te = function() {
                return this.g.adWrapperCreativeIds
            };
            h.Se = function() {
                return this.g.adWrapperSystems
            };
            h.Ue = function() {
                return this.g.linear
            };
            h.Ve = function() {
                return this.g.skippable
            };
            h.Fe = function() {
                return this.g.contentType
            };
            h.Kd = function() {
                return this.g.description
            };
            h.Md = function() {
                return this.g.title
            };
            h.Qb = function() {
                return this.g.duration
            };
            h.Pe = function() {
                return this.g.vastMediaWidth
            };
            h.Oe = function() {
                return this.g.vastMediaHeight
            };
            h.Qe = function() {
                return this.g.width
            };
            h.He = function() {
                return this.g.height
            };
            h.Le = function() {
                return this.g.uiElements
            };
            h.Ie = function() {
                return this.g.minSuggestedDuration
            };
            h.Ae = function() {
                var a = this.g.adPodInfo,
                    b = new an;
                b.o = a.podIndex;
                b.w = a.timeOffset;
                b.C = a.totalAds;
                b.g = a.adPosition;
                b.h = a.isBumper;
                b.l = a.maxDuration;
                return b
            };
            h.Ee = function(a, b, c) {
                var d = Ta(this.g.companions, function(a) {
                    return new bn(a)
                });
                return Zm(new Wm(new G(a, b), c), d)
            };
            h.Ke = function() {
                return $m(Ka(this.g.traffickingParameters))
            };
            h.Fc = function() {
                return this.g.traffickingParameters
            };
            h.Ec = function() {
                return this.g.mediaUrl
            };
            h.Je = function() {
                return this.g.surveyUrl
            };
            h.Ge = function() {
                return this.g.dealId
            };
            h.Ne = function() {
                return this.g.universalAdIdValue
            };
            h.Me = function() {
                return this.g.universalAdIdRegistry
            };
            var W = function(a) {
                Me.call(this);
                this.w = a;
                this.l = {}
            };
            x(W, Me);
            var dn = [];
            W.prototype.h = function(a, b, c, d) {
                return en(this, a, b, c, d)
            };
            var en = function(a, b, c, d, e, f) {
                    la(c) || (c && (dn[0] = c.toString()), c = dn);
                    for (var g = 0; g < c.length; g++) {
                        var k = vg(b, c[g], d || a.handleEvent, e || !1, f || a.w || a);
                        if (!k) break;
                        a.l[k.key] = k
                    }
                    return a
                },
                fn = function(a, b, c, d, e, f) {
                    if (la(c))
                        for (var g = 0; g < c.length; g++) fn(a, b, c[g], d, e, f);
                    else(b = Cg(b, c, d || a.handleEvent, e, f || a.w || a)) && (a.l[b.key] = b)
                };
            W.prototype.C = function(a, b, c, d, e) {
                if (la(b))
                    for (var f = 0; f < b.length; f++) this.C(a, b[f], c, d, e);
                else c = c || this.handleEvent, e = e || this.w || this, c = wg(c), d = !!d, b = jg(a) ? rg(a.G, String(b), c, d, e) : a ? (a = yg(a)) ? rg(a, b, c, d, e) : null : null, b && (Eg(b), delete this.l[b.key]);
                return this
            };
            var gn = function(a) {
                kb(a.l, function(a, c) {
                    this.l.hasOwnProperty(c) && Eg(a)
                }, a);
                a.l = {}
            };
            W.prototype.L = function() {
                W.N.L.call(this);
                gn(this)
            };
            W.prototype.handleEvent = function() {
                throw Error("EventHandler.handleEvent not implemented");
            };
            var hn = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
            var jn = {},
                kn = "",
                ln = /OS (\S+) like/,
                mn = /Android ([\d\.]+)/,
                on = function() {
                    return !nn() && (Mj() || Lj())
                },
                pn = function() {
                    return Tb && !Ub || Ha(B, "iPod")
                },
                qn = function() {
                    return pn() || Ub
                },
                sn = function(a) {
                    return qn() && rn(ln, a)
                },
                tn = function(a) {
                    return Sb && rn(mn, a)
                },
                rn = function(a, b) {
                    null == jn[b] && (wa(kn) && (a = a.exec(B)) && (kn = a[1]), (a = kn) ? (a = a.replace(/_/g, "."), jn[b] = 0 <= Ma(a, b)) : jn[b] = !1);
                    return jn[b]
                },
                nn = function() {
                    return M.ma() || !1
                },
                un = function() {
                    var a = B;
                    return a ? Ha(a, "Nintendo WiiU") : !1
                },
                vn = function() {
                    return Qg || nn() &&
                        Sb && !tn(4.4)
                },
                wn = function(a) {
                    return nn() || M.Wb() && on() || qn() && !((Mj() || Lj()) && Db() && (Ub || sn(10) && M.h) && a) || Sb && !tn(4) || wk() ? !0 : !1
                },
                xn = function() {
                    return !nn() && !M.Za() && on() || nn() && Sb && !tn(4.2) || wk() ? !1 : !0
                };
            var yn = function() {
                    this.l = -1;
                    this.g = null;
                    this.o = "";
                    this.h = null;
                    this.w = 0
                },
                zn = new yn;
            yn.prototype.clear = function() {
                this.g = null;
                this.o = "";
                this.h = null
            };
            var An = function() {
                var a = "h." + zn.o;
                null != zn.h ? (a += "/n." + zn.h, null != zn.g && (a += "/" + zn.g)) : M.ma() && (a += "/o.0.0.0");
                return a
            };
            var Bn = function() {
                this.h = .01 > Math.random();
                this.g = Math.floor(4503599627370496 * Math.random())
            };
            ha(Bn);
            var En = function(a, b, c, d) {
                    if (a.h || d) {
                        c = c || {};
                        c.lid = b;
                        c.sdkv = An();
                        b = Gm();
                        wa(Ka(b)) || (c.e = b);
                        c = Cn(a, c);
                        var e = new tf("http://pagead2.googlesyndication.com/pagead/gen_204");
                        kb(c, function(a, b) {
                            e.h.set(b, null != a ? "boolean" == typeof a ? a ? "t" : "f" : "" + a : "")
                        }, a);
                        a = Dn();
                        uf(e, a.l);
                        M.Vb() || Pm(e.toString())
                    }
                },
                Cn = function(a, b) {
                    b.id = "ima_html5";
                    var c = Dn();
                    b.c = a.g;
                    b.domain = c.g;
                    return b
                },
                Dn = function() {
                    var a = H(),
                        b = document;
                    return new tf(a.parent == a ? a.location.href : b.referrer)
                };
            var Fn = function() {
                P.call(this);
                this.g = null;
                this.H = new W(this);
                Ne(this, sa(J, this.H));
                this.l = new pf;
                this.A = new pf;
                this.D = this.B = !1;
                this.o = null;
                this.w = !1;
                this.F = null
            };
            x(Fn, P);
            var Gn = null,
                Hn = function() {
                    null != Gn || (Gn = new Fn);
                    return Gn
                };
            Fn.prototype.L = function() {
                this.H.C(this.g, "activityMonitor", this.I);
                this.w = !1;
                this.l.clear();
                Fn.N.L.call(this)
            };
            var Kn = function(a, b) {
                    a.w || (a.g = b || null, a.g && (a.H.h(a.g, "activityMonitor", a.I), In(a)), Jn(), M.ha() || M.D || (a.B = !0, ll.getInstance().w = !0), a.F = (u(null), null), M.ma() && (R.getInstance().R = "gsv", R.getInstance().C = 79463068), a.w = !0, a = Hm(), A(a, function(a) {
                        wl(a)
                    }))
                },
                Mn = function(a) {
                    if (null == a) return !1;
                    if (pn() && null != a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
                    var b = window.screen.availWidth || window.screen.width,
                        c = window.screen.availHeight || window.screen.height;
                    a = Ln(a);
                    return 0 >= b - a.width && 42 >=
                        c - a.height
                },
                Ln = function(a) {
                    return u(a.getBoundingClientRect) && bd(Rc(a), a) ? a.getBoundingClientRect() : {
                        left: a.offsetLeft,
                        top: a.offsetTop,
                        width: a.offsetWidth,
                        height: a.offsetHeight
                    }
                },
                Nn = function(a, b, c, d, e) {
                    if (a.w) {
                        if (a.F) return a.F(b, c, e);
                        e = e || {};
                        if (a = d ? a.A.get(d) : M.w) null != e.opt_fullscreen || (e.opt_fullscreen = Mn(a)), null != e.opt_adElement || (e.opt_adElement = a);
                        return xe("lidar::handlevast_html5", sa(ul, b, c, e)) || {}
                    }
                    return {}
                };
            Fn.prototype.K = function(a) {
                this.D = a
            };
            Fn.prototype.J = function() {
                return this.D
            };
            Fn.prototype.M = function(a) {
                a ? this.o = new Aj(a.adk, a.awbidKey) : this.o = null
            };
            var On = function(a, b) {
                    var c = String(Math.floor(1E9 * Math.random()));
                    a.A.set(c, b);
                    if (Fm(Cm(), 31061775)) try {
                        ah(function() {
                            return b
                        })
                    } catch (d) {}
                    return c
                },
                Pn = function(a, b, c) {
                    c ? a.l.get(c) == b && a.l.Va(c) : (c = [], a.l.forEach(sa(function(a, b, c, g) {
                        c == b && a.push(g)
                    }, c, b)), A(c, a.l.Va, a.l))
                },
                In = function(a) {
                    if (u(window.Goog_AdSense_Lidar_getUrlSignalsArray)) {
                        var b = {};
                        b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                        Qn(a.g, "activityMonitor", "pageSignals", b)
                    }
                };
            Fn.prototype.I = function(a) {
                var b = a.T,
                    c = b.queryId,
                    d = {};
                d.eventId = b.eventId;
                switch (a.X) {
                    case "getPageSignals":
                        In(this);
                        break;
                    case "reportVastEvent":
                        var e = b.vastEvent;
                        a = b.osdId;
                        var f = {};
                        f.opt_fullscreen = b.isFullscreen;
                        b.isOverlay && (f.opt_bounds = b.overlayBounds);
                        d.viewabilityData = Nn(this, e, c, a, f);
                        Qn(this.g, "activityMonitor", "viewability", d);
                        break;
                    case "fetchAdTagUrl":
                        d = {}, d.eventId = b.eventId, a = b.osdId, c = null, tb(b, "isFullscreen") && (c = b.isFullscreen), tb(b, "loggingId") && (b = b.loggingId, d.loggingId = b, En(Bn.getInstance(),
                            43, {
                                step: "beforeLookup",
                                logid: b,
                                time: ta()
                            }, !0)), d.engagementString = Rn(this, a, c), Qn(this.g, "activityMonitor", "engagement", d)
                }
            };
            var Jn = function() {
                    if (!(m.ima && m.ima.video && m.ima.video.client && m.ima.video.client.tagged)) {
                        t("ima.video.client.sdkTag", !0, void 0);
                        var a = m.document,
                            b = a.createElement("script"),
                            c = a.location.protocol;
                        // "http:" != c && "https:" != c && (c = "");
                        // b.src = c + "//s0.2mdn.net/instream/video/client.js";
                        b.src = "../assets/client.js";
                        b.async = !0;
                        b.type = "text/javascript";
                        a = a.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(b, a)
                    }
                },
                Rn = function(a, b, c) {
                    var d = b ? a.A.get(b) : M.w;
                    a = {};
                    null != c && (a.fullscreen = c);
                    c = "";
                    try {
                        c = $g(function() {
                            return d
                        }, a)
                    } catch (e) {
                        c =
                            "sdktle;" + Ga(e.name, 12) + ";" + Ga(e.message, 40)
                    }
                    return c
                };
            t("ima.common.getVideoMetadata", function(a) {
                a = Hn().l.get(a);
                return u(a) ? a() : {}
            }, void 0);
            t("ima.common.triggerViewEvent", function(a, b) {
                var c = {};
                c.queryId = a;
                c.viewabilityString = b;
                (a = Hn().g) ? Qn(a, "activityMonitor", "viewableImpression", c): Q(Hn(), new L("viewable_impression", null, c))
            }, void 0);
            t("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
                var c = Hn().g,
                    d = {};
                d.queryId = a;
                d.viewabilityData = b;
                c && Qn(c, "activityMonitor", "viewabilityMeasurement", d)
            }, void 0);
            t("ima.common.triggerMeasurableEvent", function(a, b) {
                var c = {};
                c.queryId = a;
                c.viewabilityString = b;
                (a = Hn().g) ? Qn(a, "activityMonitor", "measurableImpression", c): Q(Hn(), new L("measurable_impression", null, c))
            }, void 0);
            t("ima.common.triggerExternalActivityEvent", function(a, b, c) {
                var d = {};
                d.queryId = a;
                d.viewabilityString = b;
                d.eventName = c;
                (a = Hn().g) ? Qn(a, "activityMonitor", "externalActivityEvent", d): Q(Hn(), new L("externalActivityEvent", null, d))
            }, void 0);
            t("ima.common.updateEngagementDetectionValue", function(a) {
                var b = Hn().g;
                if (b) {
                    var c = {};
                    c.engagementString = a;
                    Qn(b, "activityMonitor", "engagementData", c)
                }
            }, void 0);
            var Sn = Hn();
            var Tn = function(a, b, c) {
                this.h = c;
                0 == b.length && (b = [
                    []
                ]);
                this.g = Ta(b, function(b) {
                    b = a.concat(b);
                    for (var c, d, g = [], k = 0, l = 0; k < b.length;) {
                        var n = b[k++];
                        if (128 > n) g[l++] = String.fromCharCode(n);
                        else if (191 < n && 224 > n) d = b[k++], g[l++] = String.fromCharCode((n & 31) << 6 | d & 63);
                        else if (239 < n && 365 > n) {
                            d = b[k++];
                            c = b[k++];
                            var w = b[k++];
                            c = ((n & 7) << 18 | (d & 63) << 12 | (c & 63) << 6 | w & 63) - 65536;
                            g[l++] = String.fromCharCode(55296 + (c >> 10));
                            g[l++] = String.fromCharCode(56320 + (c & 1023))
                        } else d = b[k++], c = b[k++], g[l++] = String.fromCharCode((n & 15) << 12 | (d &
                            63) << 6 | c & 63)
                    }
                    return new RegExp(g.join(""))
                })
            };
            Tn.prototype.match = function(a) {
                return Ua(this.g, function(b) {
                    b = a.match(b);
                    return null == b ? !1 : !this.h || 1 <= b.length && "3.170.0" == b[1] || 2 <= b.length && "3.170.0" == b[2] ? !0 : !1
                }, this)
            };
            var Un = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
                Vn = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47],
                Wn = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 97, 100, 109, 111, 98, 47, 40, 115, 100,
                    107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47
                ],
                Xn = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 99, 111, 114, 101, 47, 97, 100, 109, 111, 98, 47],
                Yn = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47],
                Zn = [
                    [105, 109, 97, 51, 92, 46, 106, 115],
                    [105, 109, 97,
                        51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115
                    ],
                    [105, 109, 97, 51, 95, 116, 101, 115, 116, 92, 46, 106, 115],
                    [105, 109, 97, 51, 95, 108, 111, 97, 100, 101, 114, 92, 46, 106, 115],
                    [105, 109, 97, 51, 95, 108, 111, 97, 100, 101, 114, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
                ],
                $n = [
                    [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
                    [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103,
                        40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
                    ],
                    [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 116, 101, 115, 116, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
                    [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
                ],
                ao = [
                    [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
                    [111, 117, 116, 115, 116, 114, 101, 97, 109,
                        95, 100, 101, 98, 117, 103, 92, 46, 106, 115
                    ]
                ],
                bo = [
                    [104, 116, 109, 108, 53, 95, 103, 97, 109, 101, 115, 92, 46, 106, 115],
                    [104, 116, 109, 108, 53, 95, 103, 97, 109, 101, 115, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
                ],
                co = new Tn(Un, Zn, !1),
                eo = new Tn(Un, $n, !0),
                fo = new Tn(Vn, Zn, !1),
                go = new Tn(Vn, $n, !0),
                ho = new Tn(Wn, [], !1),
                io = new Tn(Wn, $n, !0),
                jo = new Tn(Xn, $n, !1),
                ko = new Tn(Xn, [
                    [97, 112, 112, 95, 112, 114, 111, 109, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106,
                        115
                    ],
                    [97, 112, 112, 95, 112, 114, 111, 109, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 95, 99, 97, 110, 97, 114, 121, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115],
                    [118, 105, 100, 101, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115],
                    [118, 105, 100, 101, 111, 95, 105, 110, 116, 101, 114, 115, 116, 105, 116, 105, 97, 108, 95, 99, 97, 110, 97, 114, 121, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50,
                        44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 106, 115
                    ]
                ], !1),
                lo = new Tn([104, 116, 116, 112, 115, 63, 58, 47, 47, 103, 111, 111, 103, 108, 101, 97, 100, 115, 92, 46, 103, 92, 46, 100, 111, 117, 98, 108, 101, 99, 108, 105, 99, 107, 92, 46, 110, 101, 116, 47, 109, 97, 100, 115, 47, 115, 116, 97, 116, 105, 99, 47], [], !1),
                mo = new Tn([104, 116, 116, 112, 115, 63, 58, 47, 47, 119, 119, 119, 92, 46, 103, 115, 116, 97, 116, 105, 99, 92, 46, 99, 111, 109, 47, 97, 100, 109, 111, 98, 47, 106, 115, 47], [], !1),
                no = new Tn([104, 116, 116, 112, 115, 63, 58, 47, 47, 109, 105, 110, 116, 45, 109, 97, 100, 92, 46, 115, 97, 110, 100, 98,
                    111, 120, 92, 46, 103, 111, 111, 103, 108, 101, 92, 46, 99, 111, 109, 47, 109, 97, 100, 115, 47, 115, 116, 97, 116, 105, 99, 47, 102, 111, 114, 109, 97, 116, 115, 47
                ], [], !1),
                oo = new Tn([104, 116, 116, 112, 115, 63, 58, 47, 47, 118, 105, 100, 101, 111, 45, 97, 100, 45, 116, 101, 115, 116, 92, 46, 97, 112, 112, 115, 112, 111, 116, 92, 46, 99, 111, 109, 47], [], !1),
                po = new Tn(Yn, Zn, !1),
                qo = new Tn([104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103,
                    101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47
                ], [], !1),
                ro = new Tn(Un, ao, !1),
                so = new Tn(Yn, ao, !1),
                to = new Tn(Un, bo, !1),
                uo = new Tn(Yn, bo, !1),
                nb = {
                    Uh: co,
                    Th: eo,
                    pi: fo,
                    oi: go,
                    zg: ho,
                    wg: io,
                    vg: jo,
                    xg: ko,
                    Ag: lo,
                    yg: mo,
                    ug: no,
                    Bg: oo,
                    Vh: po,
                    yk: qo,
                    pj: ro,
                    qj: so,
                    $h: to,
                    ai: uo
                };
            var vo = function(a) {
                this.h = a
            };
            vo.prototype.g = function() {
                return this.h
            };
            var wo = function() {
                P.call(this);
                this.currentTime = 0
            };
            x(wo, P);
            var xo = function(a) {
                wo.call(this);
                this.currentTime = a.currentTime;
                if (!("currentTime" in a) || isNaN(a.currentTime)) throw Um(Tm, null, "content", "currentTime");
                this.duration = "duration" in a && !isNaN(a.duration) ? a.duration : -1;
                this.l = a;
                this.g = new Jg(250);
                this.o = new W(this);
                en(this.o, this.g, "tick", this.w, !1, this)
            };
            x(xo, wo);
            xo.prototype.start = function() {
                this.g.start()
            };
            xo.prototype.L = function() {
                xo.N.L.call(this);
                this.o.P();
                this.g.P()
            };
            xo.prototype.w = function() {
                if ("currentTime" in this.l && !isNaN(this.l.currentTime)) {
                    var a = this.currentTime;
                    this.currentTime = this.l.currentTime;
                    a != this.currentTime && Q(this, new K("currentTimeUpdate"))
                } else Q(this, new K("contentWrapperError")), Kg(this.g)
            };
            var yo = function(a, b) {
                L.call(this, "adMetadata", a);
                this.g = b || null
            };
            x(yo, L);
            yo.prototype.B = function() {
                return this.g
            };
            var Ao = function() {
                this.loadVideoTimeout = zo()
            };
            Ao.prototype.disableClickThrough = !1;
            Ao.prototype.mimeTypes = null;
            Ao.prototype.restoreCustomPlaybackStateOnAdBreakComplete = !1;
            Ao.prototype.loadVideoTimeout = 8E3;
            var zo = function() {
                return M.ha() || M.ma() || Fm(Cm(), 420706082) ? 15E3 : 8E3
            };
            var Bo = ["classid", "data", "movie", "type", "typemustmatch"],
                Co = function(a, b) {
                    var c = function(a, b) {
                        for (var c in a)
                            for (var d = c.toLowerCase(), e = 0; e < Bo.length; e++) {
                                var l = Bo[e];
                                if (d == l) throw Error('Cannot override "' + l + '" ' + b + ', got "' + c + '" with value "' + a[c] + '"');
                            }
                    };
                    c(a, "attribute");
                    c(b, "param")
                };
            var Do = function() {};
            ha(Do);
            Do.prototype.g = 0;
            var Eo = function(a) {
                P.call(this);
                this.D = a || Sc();
                this.K = null;
                this.Qa = !1;
                this.g = null;
                this.w = void 0;
                this.A = this.B = this.l = null
            };
            x(Eo, P);
            h = Eo.prototype;
            h.pe = Do.getInstance();
            h.getId = function() {
                return this.K || (this.K = ":" + (this.pe.g++).toString(36))
            };
            h.Fa = function() {
                return this.g
            };
            h.bc = function(a) {
                if (this.l && this.l != a) throw Error("Method not supported");
                Eo.N.bc.call(this, a)
            };
            h.Bc = function() {
                this.g = this.D.createElement("DIV")
            };
            h.pb = function() {
                this.Qa = !0;
                Fo(this, function(a) {
                    !a.Qa && a.Fa() && a.pb()
                })
            };
            var Go = function(a) {
                Fo(a, function(a) {
                    a.Qa && Go(a)
                });
                a.w && gn(a.w);
                a.Qa = !1
            };
            Eo.prototype.L = function() {
                this.Qa && Go(this);
                this.w && (this.w.P(), delete this.w);
                Fo(this, function(a) {
                    a.P()
                });
                this.g && ad(this.g);
                this.l = this.g = this.A = this.B = null;
                Eo.N.L.call(this)
            };
            var Fo = function(a, b) {
                a.B && A(a.B, b, void 0)
            };
            Eo.prototype.removeChild = function(a, b) {
                if (a) {
                    var c = q(a) ? a : a.getId();
                    a = this.A && c ? yb(this.A, c) || null : null;
                    if (c && a) {
                        var d = this.A;
                        c in d && delete d[c];
                        ab(this.B, a);
                        b && (Go(a), a.g && ad(a.g));
                        b = a;
                        if (null == b) throw Error("Unable to set parent component");
                        b.l = null;
                        Eo.N.bc.call(b, null)
                    }
                }
                if (!a) throw Error("Child is not in parent component");
                return a
            };
            var Ho = function(a, b) {
                Eo.call(this, b);
                this.J = a;
                this.F = new W(this);
                this.o = new pf
            };
            x(Ho, Eo);
            h = Ho.prototype;
            h.oc = "window";
            h.Ib = "sameDomain";
            h.setSize = function(a, b) {
                this.I = q(a) ? a : Math.round(a) + "px";
                this.H = q(b) ? b : Math.round(b) + "px";
                this.Fa() && pd(this.Fa() ? this.Fa().firstChild : null, this.I, this.H);
                return this
            };
            h.pb = function() {
                Ho.N.pb.call(this);
                for (var a = this.Fa(), b = this.o.Pa(), c = this.o.ca(), d = [], e = 0; e < b.length; e++) d.push(encodeURIComponent(String(b[e])) + "=" + encodeURIComponent(String(c[e])));
                var b = d.join("&");
                if (!D || 11 <= Number(dc)) {
                    var f = {
                        AllowScriptAccess: this.Ib,
                        allowFullScreen: "true",
                        allowNetworking: "all",
                        bgcolor: "#000000",
                        "class": "goog-ui-media-flash-object",
                        FlashVars: b,
                        id: this.getId(),
                        name: this.getId(),
                        quality: "high",
                        SeamlessTabbing: "false",
                        wmode: this.oc
                    };
                    f = Pc({
                        src: this.J,
                        type: "application/x-shockwave-flash",
                        pluginspage: "https://www.macromedia.com/go/getflashplayer"
                    }, {
                        allownetworking: "none",
                        allowscriptaccess: "never"
                    }, f);
                    f = Kc("embed", f)
                } else {
                    d = this.J;
                    c = {
                        allowFullScreen: "true",
                        AllowScriptAccess: this.Ib,
                        allowNetworking: "all",
                        bgcolor: "#000000",
                        FlashVars: b,
                        quality: "high",
                        SeamlessTabbing: "false",
                        wmode: this.oc
                    };
                    b = {
                        "class": "goog-ui-media-flash-object",
                        id: this.getId(),
                        name: this.getId()
                    };
                    Co(b, c);
                    e = {
                        allownetworking: "none",
                        allowscriptaccess: "never",
                        movie: d
                    };
                    d = {};
                    for (f in e) d[f] = e[f];
                    for (f in c) {
                        var g = f.toLowerCase();
                        g in e && delete d[g];
                        d[f] = c[f]
                    }
                    c = [];
                    for (f in d) c.push(Kc("param", {
                        name: f,
                        value: d[f]
                    }));
                    f = Pc({
                        classid: "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
                    }, {}, b);
                    f = Kc("object", f, c)
                }
                a.innerHTML = Ec(f);
                this.I && this.H && this.setSize(this.I, this.H);
                this.F.h(this.Fa(), qb(gg), Oe)
            };
            h.Bc = function() {
                if (null != this.M && !(0 <= Ma(oh, this.M))) throw Error("Method not supported");
                var a = this.D.createElement("DIV");
                a.className = "goog-ui-media-flash";
                this.g = a
            };
            h.L = function() {
                Ho.N.L.call(this);
                this.o = null;
                this.F.P();
                this.F = null
            };
            var Io = function(a, b) {
                K.call(this, "vpaidEventType");
                this.g = a;
                this.data = b
            };
            x(Io, K);
            var Jo = function(a) {
                P.call(this);
                this.B = a;
                this.l = null;
                this.w = -1;
                this.A = !1;
                this.o = "goog_" + Na++
            };
            x(Jo, P);
            var Ko = uc(lc(mc("https://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf"))),
                Lo = uc(lc(mc("http://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));
            h = Jo.prototype;
            h.P = function() {
                this.g && (this.g.P(), this.l = null);
                window[this.o] && delete window[this.o];
                m.clearTimeout(this.w)
            };
            h.load = function(a, b, c, d) {
                window[this.o] = v(this.Id, this);
                this.g = new Ho(M.Nc() ? Lo : Ko);
                this.g.setSize(b, c);
                this.g.Ib = "always";
                this.g.oc = "transparent";
                this.g.o.set("vpaid", a);
                this.g.o.set("vpaidEventHandler", this.o);
                a = this.g;
                b = this.B;
                if (a.Qa) throw Error("Component already rendered");
                a.g || a.Bc();
                b ? b.insertBefore(a.g, null) : a.D.g.body.appendChild(a.g);
                a.l && !a.l.Qa || a.pb();
                a = this.g;
                this.l = a.Fa() ? a.Fa().firstChild : null;
                this.w = Lg(this.Yf, d, this)
            };
            h.Kb = function(a) {
                if (!this.l) return null;
                var b = Array.prototype.slice.call(arguments),
                    c = b.shift();
                if (!this.A && "handshakeVersion" != c && "initAd" != c) return null;
                try {
                    if (this.l[c]) return this.l[c].apply(this.l, b)
                } catch (d) {}
                return null
            };
            h.Id = function(a, b) {
                "AdLoaded" == a && (m.clearTimeout(this.w), this.A = !0);
                Q(this, new Io(a, b || null))
            };
            h.Yf = function() {
                Q(this, "loadError")
            };
            var Mo = function() {
                P.call(this);
                this.B = this.F = this.J = this.H = !1;
                this.l = 0;
                this.w = [];
                this.D = !1;
                this.M = this.K = Infinity;
                this.o = 0;
                this.A = new W(this);
                this.I = {}
            };
            x(Mo, P);
            Mo.prototype.Ta = function(a) {
                null == a || this.H || (this.g = a, No(this), this.H = !0)
            };
            Mo.prototype.ra = function() {
                null != this.g && this.H && (Oo(this), this.B = this.F = this.H = !1, this.l = 0, this.w = [], this.D = !1)
            };
            var No = function(a) {
                    Oo(a);
                    !(a.g instanceof P) && "ontouchstart" in document.documentElement && qn() ? (a.I = {
                        touchstart: v(a.aa, a),
                        touchmove: v(a.$, a),
                        touchend: v(a.Y, a)
                    }, kb(a.I, function(a, c) {
                        this.g.addEventListener(c, a, !1)
                    }, a)) : a.A.h(a.g, "click", a.V)
                },
                Oo = function(a) {
                    a.A.C(a.g, "click", a.V);
                    kb(a.I, function(a, c) {
                        this.g.removeEventListener(c, a, !1)
                    }, a);
                    a.I = {}
                };
            Mo.prototype.aa = function(a) {
                this.F = !0;
                this.l = a.touches.length;
                this.o && (window.clearTimeout(this.o), this.o = 0, this.J = !0);
                (this.D = Po(this, a.touches) || 1 != a.touches.length) ? this.M = this.K = Infinity: (this.K = a.touches[0].clientX, this.M = a.touches[0].clientY);
                Qo(this, a.touches)
            };
            Mo.prototype.$ = function(a) {
                this.l = a.touches.length;
                if (!sn(8) || Math.pow(a.changedTouches[0].clientX - this.K, 2) + Math.pow(a.changedTouches[0].clientY - this.M, 2) > Math.pow(5, 2)) this.B = !0
            };
            Mo.prototype.Y = function(a) {
                !this.F || 1 != this.l || this.B || this.J || this.D || !Po(this, a.changedTouches) || (this.o = window.setTimeout(v(this.U, this), 300));
                this.l = a.touches.length;
                0 == this.l && (this.B = this.F = !1, this.w = []);
                this.J = !1
            };
            Mo.prototype.V = function() {
                this.U()
            };
            var Qo = function(a, b) {
                    a.w = [];
                    A(b, function(a) {
                        var b = this.w;
                        a = a.identifier;
                        Ya(b, a) || b.push(a)
                    }, a)
                },
                Po = function(a, b) {
                    return Ua(b, function(a) {
                        return Ya(this.w, a.identifier)
                    }, a)
                };
            Mo.prototype.U = function() {
                this.o = 0;
                Q(this, new K("click"))
            };
            Mo.prototype.L = function() {
                this.ra();
                this.A.P();
                this.A = null;
                Mo.N.L.call(this)
            };
            var Ro = function() {
                this.g = [];
                this.h = []
            };
            h = Ro.prototype;
            h.Ea = function() {
                return this.g.length + this.h.length
            };
            h.isEmpty = function() {
                return 0 == this.g.length && 0 == this.h.length
            };
            h.clear = function() {
                this.g = [];
                this.h = []
            };
            h.contains = function(a) {
                return Ya(this.g, a) || Ya(this.h, a)
            };
            h.ca = function() {
                for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
                for (var c = this.h.length, b = 0; b < c; ++b) a.push(this.h[b]);
                return a
            };
            var So = function(a) {
                if (wa(Ka(a))) return null;
                var b = a.match(/^https?:\/\/[^\/]*youtu\.be\/([a-zA-Z0-9_-]+)$/);
                if (null != b && 2 == b.length) return b[1];
                b = a.match(/^https?:\/\/[^\/]*youtube.com\/video\/([a-zA-Z0-9_-]+)$/);
                if (null != b && 2 == b.length) return b[1];
                b = a.match(/^https?:\/\/[^\/]*youtube.com\/watch\/([a-zA-Z0-9_-]+)$/);
                if (null != b && 2 == b.length) return b[1];
                a = (new tf(a)).h;
                return Kf(a, "v") ? a.get("v").toString() : Kf(a, "video_id") ? a.get("video_id").toString() : null
            };
            var To = function(a) {
                this.h = 0;
                this.l = a || 100;
                this.g = []
            };
            h = To.prototype;
            h.get = function(a) {
                a = Uo(this, a);
                return this.g[a]
            };
            h.set = function(a, b) {
                a = Uo(this, a);
                this.g[a] = b
            };
            h.Ea = function() {
                return this.g.length
            };
            h.isEmpty = function() {
                return 0 == this.g.length
            };
            h.clear = function() {
                this.h = this.g.length = 0
            };
            h.ca = function() {
                for (var a = this.Ea(), b = this.Ea(), c = [], a = this.Ea() - a; a < b; a++) c.push(this.get(a));
                return c
            };
            h.Pa = function() {
                for (var a = [], b = this.Ea(), c = 0; c < b; c++) a[c] = c;
                return a
            };
            var Uo = function(a, b) {
                if (b >= a.g.length) throw Error("Out of bounds exception");
                return a.g.length < a.l ? b : (a.h + Number(b)) % a.l
            };
            var Vo = function() {
                P.call(this)
            };
            x(Vo, P);
            var Wo = {
                Pg: "beginFullscreen",
                CLICK: "click",
                Ih: "end",
                Jh: "endFullscreen",
                rd: "error",
                LOADED: "loaded",
                Di: "mediaLoadTimeout",
                Gb: "pause",
                yd: "play",
                lk: "skip",
                mk: "skipShown",
                jk: "shareClicked",
                pc: "start",
                Ek: "timeUpdate",
                Tg: "cardsStateChange",
                Ck: "timedMetadata",
                dl: "volumeChange"
            };
            Vo.prototype.Pc = function() {
                return !0
            };
            Vo.prototype.ua = ga;
            var Xo = function(a) {
                P.call(this);
                this.g = a;
                this.Y = "";
                this.H = -1;
                this.$ = new To(4);
                this.o = 0;
                this.V = this.w = this.U = this.D = !1;
                this.K = this.ib();
                this.J = this.jb();
                this.aa = zo();
                this.M = !1
            };
            x(Xo, Vo);
            h = Xo.prototype;
            h.zc = function() {
                return Sa(qb(xl), function(a) {
                    return !wa(this.g.canPlayType(a))
                }, this)
            };
            h.cc = function(a) {
                this.aa = 0 < a.g ? a.g : zo()
            };
            h.Sc = function(a) {
                this.g.seekable.length ? this.g.seekable.end(0) > this.H && (this.g.currentTime = this.H, a()) : setTimeout(v(this.Sc, this, a), 100)
            };
            h.ed = function() {
                this.Y = this.g.currentSrc;
                this.H = this.g.ended ? -1 : this.g.currentTime
            };
            h.cd = function(a) {
                if (0 <= this.H) {
                    var b = this;
                    this.g.addEventListener("loadedmetadata", function d() {
                        b.Sc(a);
                        b.g.removeEventListener("loadedmetadata", d, !1)
                    }, !1);
                    this.g.src = this.Y;
                    this.g.load()
                } else a()
            };
            h.load = function(a, b) {
                Yo(this);
                b && M.ma() && u(this.g.g) && this.g.g(b);
                a && (this.g.src = a);
                this.g.load()
            };
            h.xb = function(a) {
                this.g.volume = a;
                this.g.muted = 0 == a ? !0 : !1
            };
            h.Ic = function() {
                return this.g.volume
            };
            h.wb = function() {
                this.M = !1;
                this.g.play();
                this.I || (this.I = Lg(this.Ed, this.aa, this))
            };
            h.Kc = function() {
                this.M = !0;
                this.g.pause();
                Zo(this)
            };
            h.Jc = function() {
                return this.g.paused ? qn() || Rg ? this.g.currentTime < this.g.duration : !0 : !1
            };
            h.wc = function() {
                pn() && this.g.webkitDisplayingFullscreen && this.g.webkitExitFullscreen()
            };
            h.jb = function() {
                return Mn(this.g)
            };
            h.lb = function(a) {
                this.g.currentTime = a
            };
            h.Aa = function() {
                return this.g.currentTime
            };
            h.gb = function() {
                return isNaN(this.g.duration) ? -1 : this.g.duration
            };
            h.zb = function() {
                return this.g.ended
            };
            h.ib = function() {
                return new G(this.g.offsetWidth, this.g.offsetHeight)
            };
            h.L = function() {
                this.ra();
                Xo.N.L.call(this)
            };
            h.Ta = function() {
                this.ra();
                this.l = new W(this);
                this.l.h(this.g, hn, this.da);
                this.l.h(this.g, "canplay", this.Vf);
                this.l.h(this.g, "ended", this.Xf);
                this.l.h(this.g, "webkitbeginfullscreen", this.Sb);
                this.l.h(this.g, "webkitendfullscreen", this.Lc);
                this.l.h(this.g, "pause", this.ag);
                this.l.h(this.g, "playing", this.cg);
                this.l.h(this.g, "timeupdate", this.eg);
                this.l.h(this.g, "volumechange", this.ig);
                this.l.h(this.g, "error", this.Wc);
                this.l.h(this.g, vn() || qn() && !sn(8) ? "loadeddata" : "canplay", this.Zf);
                this.B = new Mo;
                this.l.h(this.B,
                    "click", this.Jf);
                this.B.Ta(this.g);
                this.F = new Jg(1E3);
                this.l.h(this.F, "tick", this.Kf);
                this.F.start()
            };
            h.ra = function() {
                null != this.B && (this.B.ra(), this.B = null);
                null != this.F && this.F.P();
                null != this.l && (this.l.P(), this.l = null);
                Yo(this)
            };
            var Yo = function(a) {
                a.U = !1;
                a.w = !1;
                a.D = !1;
                a.o = 0;
                a.V = !1;
                a.$.clear();
                Zo(a);
                J(a.A)
            };
            Xo.prototype.da = function(a) {
                Q(this, a.type)
            };
            var $o = function(a) {
                if (!a.w) {
                    a.w = !0;
                    Zo(a);
                    Q(a, "start");
                    var b = u(a.g.getAttribute) && null != a.g.getAttribute("playsinline");
                    Cm();
                    (Tb && !Ub && sn(10) && M.ha(), !M.ha() && (Mj() || Lj()) && Db() && (Ub || sn(10) && M.h) && b) || !(pn() && !nn() || Sb && !tn(4) || !M.ha() && wk()) || !Sb || tn(3) || pn() && !sn(4) || a.Sb()
                }
            };
            h = Xo.prototype;
            h.Vf = function() {
                var a;
                if (a = Sg) a = B, a = !(a && (Ha(a, "SMART-TV") || Ha(a, "SmartTV")));
                a && !this.V && (this.lb(.001), this.V = !0)
            };
            h.Zf = function() {
                this.U || (this.U = !0, Q(this, "loaded"))
            };
            h.cg = function() {
                Q(this, "play");
                qn() || vn() || $o(this)
            };
            h.eg = function() {
                if (!this.w && (qn() || vn())) {
                    if (0 >= this.Aa()) return;
                    if (vn() && this.zb() && 1 == this.gb()) {
                        this.Wc();
                        return
                    }
                    $o(this)
                }
                if (qn() || un()) {
                    if (1.5 < this.Aa() - this.o) {
                        this.D = !0;
                        this.lb(this.o);
                        return
                    }
                    this.D = !1;
                    this.Aa() > this.o && (this.o = this.Aa())
                }
                var a = this.$;
                a.g[a.h] = this.g.currentTime;
                a.h = (a.h + 1) % a.l;
                Q(this, "timeUpdate")
            };
            h.ig = function() {
                Q(this, "volumeChange")
            };
            h.ag = function() {
                if (this.w && qn() && !this.M && (2 > ap(this) || this.D)) {
                    this.A = new Jg(250);
                    this.l.h(this.A, "tick", this.Uf);
                    this.A.start();
                    var a = !0
                } else a = !1;
                a || Q(this, "pause")
            };
            h.Xf = function() {
                var a = !0;
                if (qn() || un()) a = this.o >= this.g.duration - 1.5;
                !this.D && a && Q(this, "end")
            };
            h.Sb = function() {
                Q(this, "beginFullscreen")
            };
            h.Lc = function() {
                Q(this, "endFullscreen")
            };
            h.Wc = function() {
                Zo(this);
                Q(this, "error")
            };
            h.Jf = function() {
                Q(this, "click")
            };
            h.Kf = function() {
                var a = this.ib(),
                    b = this.jb();
                if (a.width != this.K.width || a.height != this.K.height) !this.J && b ? this.Sb() : this.J && !b && this.Lc(), this.K = a, this.J = b
            };
            h.Ed = function() {
                if (!this.w) {
                    try {
                        En(Bn.getInstance(), 16)
                    } catch (a) {}
                    Yo(this);
                    Q(this, "mediaLoadTimeout")
                }
            };
            h.Uf = function() {
                if (this.zb() || !this.Jc()) J(this.A);
                else {
                    var a = this.g.duration - this.g.currentTime,
                        b = ap(this);
                    0 < b && (2 <= b || 2 > a) && (J(this.A), this.wb())
                }
            };
            var ap = function(a) {
                    var b;
                    a: {
                        for (b = a.g.buffered.length - 1; 0 <= b;) {
                            if (a.g.buffered.start(b) <= a.g.currentTime) {
                                b = a.g.buffered.end(b);
                                break a
                            }
                            b--
                        }
                        b = 0
                    }
                    return b - a.g.currentTime
                },
                Zo = function(a) {
                    a.I && (m.clearTimeout(a.I), a.I = null)
                };
            var cp = function() {
                P.call(this);
                this.l = new bp;
                this.g = new W(this);
                var a = Re(M);
                if (a) {
                    a: {
                        if (tb(a.g, "videoElementMockDuration") && (a = a.g.videoElementMockDuration, r(a))) break a;
                        a = NaN
                    }
                    this.duration = a
                }
            };
            x(cp, P);
            var dp = new pf,
                ep = function() {
                    var a = ["video/mp4"],
                        b = ["video/ogg"],
                        c = new cp;
                    c.canPlayType = function(c) {
                        return Ya(a, c) ? "probably" : Ya(b, c) ? "maybe" : ""
                    };
                    c.width = 0;
                    c.height = 0;
                    c.offsetWidth = 0;
                    c.offsetHeight = 0;
                    return c
                },
                fp = function() {},
                bp = function() {
                    this.length = 0;
                    this.g = []
                };
            bp.prototype.start = function() {
                return 0
            };
            h = cp.prototype;
            h.readyState = 0;
            h.currentTime = 0;
            h.duration = NaN;
            h.volume = 1;
            h.muted = !1;
            h.src = "";
            h.$a = null;
            h.Bb = null;
            h.load = function() {
                this.readyState = 0;
                Q(this, "loadstart");
                this.duration = Number(isNaN(this.duration) ? 10 + 20 * Math.random() : this.duration);
                Q(this, "durationchange");
                var a = this.l;
                a.g.push(new fp);
                a.length = a.g.length;
                Q(this, "loadedmetadata");
                0 < this.currentTime && Q(this, "timeupdate");
                Q(this, "loadeddata");
                Q(this, "canplay");
                Q(this, "canplaythrough");
                Q(this, "progress")
            };
            h.setAttribute = function(a, b) {
                null != a && dp.set(a, b)
            };
            h.L = function() {
                this.g.P()
            };
            h.hg = function(a) {
                var b = null,
                    c = null;
                switch (a.type) {
                    case "loadeddata":
                        b = "Loaded";
                        break;
                    case "playing":
                        b = "Playing";
                        c = "#00f";
                        break;
                    case "pause":
                        b = "Paused";
                        break;
                    case "ended":
                        b = "Ended", c = "#000"
                }
                b && this.Bb && (this.Bb.innerText = b);
                c && this.$a && (this.$a.style.backgroundColor = c)
            };
            D && E(8);
            var gp = function() {
                throw Error("Do not instantiate directly");
            };
            gp.prototype.g = null;
            gp.prototype.getContent = function() {
                return this.content
            };
            gp.prototype.toString = function() {
                return this.content
            };
            var hp = function() {
                gp.call(this)
            };
            x(hp, gp);
            (function(a) {
                function b(a) {
                    this.content = a
                }
                b.prototype = a.prototype;
                return function(a, d) {
                    a = new b(String(a));
                    void 0 !== d && (a.g = d);
                    return a
                }
            })(hp);
            var ip = {},
                jp = function(a, b) {
                    var c = "key_" + a + ":" + b,
                        d = ip[c];
                    if (void 0 === d || 0 > d) ip[c] = 0;
                    else if (0 == d) throw Error('Encountered two active delegates with the same priority ("' + a + ":" + b + '").');
                };
            (function(a) {
                function b(a) {
                    this.content = a
                }
                b.prototype = a.prototype;
                return function(a, d) {
                    a = String(a);
                    if (!a) return "";
                    a = new b(a);
                    void 0 !== d && (a.g = d);
                    return a
                }
            })(hp);
            jp("a", "");
            jp("a", "fixedDirectionality");
            jp("a", "redesign2014q4");
            jp("b", "");
            jp("b", "redesign2014q4");
            jp("b", "forcedlinebreak");
            var kp = function(a, b, c, d) {
                if (null == a || !bd(Rc(a), a)) throw Um(Tm, null, "containerElement", "element");
                this.w = a;
                this.h = this.g = null;
                this.o = b;
                this.A = !d;
                this.C = c || !1;
                this.l = null;
                this.g = Yc("DIV", {
                    style: "display:none;"
                });
                this.w.appendChild(this.g);
                if (this.A) {
                    a = Re(M);
                    if (Se(a, "useVideoElementMock")) {
                        a = ep();
                        b = Yc("DIV", {
                            style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
                        });
                        for (e in a) b[e] = a[e];
                        a.$a = Yc("DIV", {
                            style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
                        });
                        a.Bb = Yc("P", {
                            style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
                        });
                        a.$a.appendChild(a.Bb);
                        b.appendChild(a.$a);
                        a.g.h(a, ["loadeddata", "playing", "pause", "ended"], a.hg);
                        var e = b
                    } else e = Yc("VIDEO", {
                        style: "background-color:#000;position:absolute;width:100%;height:100%;",
                        title: "Advertisement"
                    });
                    e.setAttribute("webkit-playsinline", !0);
                    e.setAttribute("playsinline", !0);
                    this.h = e;
                    this.g.appendChild(this.h)
                }
                this.o && (e = "display:none;position:absolute;width:100%;height:100%;", M.Za() || (e +=
                    "background-color:#000;"), e = Yc("DIV", {
                    id: this.o,
                    style: e
                }), this.g.appendChild(e));
                this.C && (this.l = Yc("DIV", {
                    style: "position:absolute;width:100%;height:100%;"
                }), this.g.appendChild(this.l))
            };
            x(kp, Me);
            kp.prototype.L = function() {
                ad(this.g);
                kp.N.L.call(this)
            };
            kp.prototype.show = function() {
                lp(this.g, !0)
            };
            var lp = function(a, b) {
                null != a && (a.style.display = b ? "block" : "none")
            };
            var mp = function(a, b, c, d) {
                Me.call(this);
                this.C = b || null;
                this.B = "*";
                this.o = c || null;
                this.l = null;
                this.h = d || null;
                this.H = !!a;
                this.A = v(this.D, this);
                window.addEventListener("message", this.A)
            };
            x(mp, Me);
            mp.prototype.D = function(a) {
                if (!("*" != this.o && a.origin != this.o || this.C && a.source != this.C) && q(a.data)) {
                    try {
                        var b = Xe(a.data)
                    } catch (c) {
                        return
                    }
                    if (!(null == b || this.H && (this.l && this.l != b.id || this.h && this.h != b.channel)) && b) switch (b.event) {
                        case "syn":
                            np(this, a);
                            op(this);
                            this.sendMessage({
                                event: "ack"
                            });
                            break;
                        case "ack":
                            np(this, a);
                            op(this);
                            break;
                        case "command":
                            a = b.func, a in this.g && this.g[a].apply(null, b.args)
                    }
                }
            };
            var np = function(a, b) {
                "null" != b.origin && (a.o = a.B = b.origin);
                a.C = b.source
            };
            mp.prototype.sendMessage = function(a, b) {
                if (b = b || this.C) {
                    this.l && (a.id = this.l);
                    this.h && (a.channel = this.h);
                    try {
                        var c = ff(a);
                        b.postMessage(c, this.B)
                    } catch (d) {}
                }
            };
            mp.prototype.L = function() {
                window.removeEventListener("message", this.A);
                mp.N.L.call(this)
            };
            var pp = function(a) {
                mp.call(this, !0);
                this.l = a;
                this.h = "remoteplayer";
                this.o = "*";
                this.g = {};
                this.w = [];
                this.G = !1
            };
            x(pp, mp);
            pp.prototype.F = function(a, b) {
                var c = {
                        event: "command",
                        func: a
                    },
                    d = Array.prototype.slice.call(arguments, 1);
                0 < d.length && (c.args = d);
                this.G ? this.sendMessage(c) : 100 > this.w.length && this.w.push(c)
            };
            var op = function(a) {
                    a.G = !0;
                    A(a.w, function(a) {
                        this.sendMessage(a)
                    }, a);
                    a.w.length = 0
                },
                qp = function() {};
            var sp = function(a) {
                    this.g = new pf;
                    if (a) {
                        a = sf(a);
                        for (var b = a.length, c = 0; c < b; c++) {
                            var d = a[c];
                            this.g.set(rp(d), d)
                        }
                    }
                },
                rp = function(a) {
                    var b = typeof a;
                    return "object" == b && a || "function" == b ? "o" + (a[oa] || (a[oa] = ++pa)) : b.substr(0, 1) + a
                };
            h = sp.prototype;
            h.Ea = function() {
                return this.g.Ea()
            };
            h.clear = function() {
                this.g.clear()
            };
            h.isEmpty = function() {
                return this.g.isEmpty()
            };
            h.contains = function(a) {
                a = rp(a);
                return rf(this.g.h, a)
            };
            h.ca = function() {
                return this.g.ca()
            };
            h.clone = function() {
                return new sp(this)
            };
            h.La = function() {
                return this.g.La(!1)
            };
            var tp = function(a, b) {
                this.g = a;
                this.w = new sp;
                this.G = v(this.B, this);
                this.A = Math.floor(2147483646 * Math.random()) + 1;
                this.h = b || new pp(this.A);
                Ne(this, sa(J, this.h));
                this.l = new W(this);
                Ne(this, sa(J, this.l));
                b = v(a.play, a);
                this.h.g.play = b;
                b = v(a.load, a);
                this.h.g.load = b;
                a = v(a.pause, a);
                this.h.g.pause = a;
                a = v(this.C, this);
                this.h.g.listen = a;
                a = v(this.D, this);
                this.h.g.unlisten = a;
                a = v(this.o, this, "src");
                this.h.g.setSource = a;
                a = v(this.o, this, "muted");
                this.h.g.setMuted = a;
                a = v(this.o, this, "volume");
                this.h.g.setVolume = a
            };
            x(tp, Me);
            tp.prototype.B = function(a) {
                a = a.type;
                var b = new qp;
                b.duration = this.g.duration;
                b.currentTime = this.g.currentTime;
                b.readyState = this.g.readyState;
                this.g.error && (b.h = this.g.error.code);
                b.muted = this.g.muted;
                b.l = this.g.paused;
                b.g = this.g.ended;
                b.volume = this.g.volume;
                this.h.F("notify", a, b)
            };
            tp.prototype.C = function(a) {
                this.w.g.set(rp(a), a);
                this.l.h(this.g, a, this.G)
            };
            tp.prototype.D = function(a) {
                this.w.g.Va(rp(a));
                this.l.C(this.g, a)
            };
            tp.prototype.o = function(a, b) {
                this.g[a] = b
            };
            var up = function(a, b) {
                gn(a.l);
                a.g = b;
                A(a.w.ca(), a.C, a)
            };
            var vp = function(a, b, c, d, e, f, g, k, l, n, w, z, N) {
                this.l = a;
                this.o = l;
                this.w = b;
                this.C = c;
                this.G = g;
                this.B = n;
                this.D = d;
                this.H = e;
                this.F = w;
                this.g = f;
                this.h = k;
                this.A = z;
                this.O = N
            };
            var xp = function(a) {
                P.call(this);
                this.M = "ima-chromeless-video";
                var b = null;
                null != a && (q(a) ? this.M = a : b = a);
                this.U = new W(this);
                this.A = null;
                this.w = !1;
                this.ka = this.ib();
                this.ga = this.jb();
                this.I = -1;
                this.$ = !1;
                this.B = -1;
                this.l = this.Y = this.J = null;
                this.oa = "";
                this.o = !1;
                this.da = null != b;
                this.na = this.K = this.aa = this.g = null;
                this.D = void 0;
                this.H = this.la = null;
                this.F = 0;
                this.da ? (this.o = !0, this.g = b, this.D = 2) : (a = v(this.Fd, this), wp ? a() : (Za.push(a), a = document.createElement("script"), a.src = "https://www.youtube.com/iframe_api",
                    b = document.getElementsByTagName("script")[0], b.parentNode.insertBefore(a, b)))
            };
            x(xp, Vo);
            var yp = {
                    el: "adunit",
                    controls: 0,
                    html5: 1,
                    playsinline: 1,
                    ps: "gvn",
                    showinfo: 0
                },
                Za = [],
                wp = !1;
            h = xp.prototype;
            h.cc = function(a) {
                this.l = a
            };
            h.load = function(a, b) {
                null !== a && (this.oa = a, this.o ? zp(this, a, b) : (this.J = a, this.Y = b))
            };
            h.xb = function(a) {
                this.da ? Q(this, "volumeChange") : this.o ? (a = Math.min(Math.max(100 * a, 0), 100), this.g.setVolume(a), this.B = -1, Q(this, "volumeChange")) : this.B = a
            };
            h.Ic = function() {
                return this.o ? this.g.getVolume() / 100 : this.B
            };
            h.wb = function() {
                if (!wa(Ka(this.oa))) {
                    if (!this.w) {
                        Ap(this);
                        var a = zo();
                        null != this.l && 0 < this.l.g && (a = this.l.g);
                        this.Ma = Lg(this.bb, a, this)
                    }
                    this.o ? (this.$ = !1, !this.w && this.l && this.l.h ? this.g.loadVideoByPlayerVars(this.la) : this.g.playVideo()) : this.$ = !0
                }
            };
            h.Kc = function() {
                this.o && this.w && this.g.pauseVideo()
            };
            h.Jc = function() {
                return this.o ? 2 == this.g.getPlayerState(this.D) : !1
            };
            h.wc = function() {};
            h.jb = function() {
                var a = document.getElementById(this.M);
                return a ? Mn(a) : !1
            };
            h.lb = function(a) {
                this.o ? this.g.seekTo(a, !1) : this.I = a
            };
            h.Aa = function(a) {
                return this.o ? this.g.getCurrentTime(a || this.D) : -1
            };
            h.gb = function() {
                return this.o && this.w ? this.g.getDuration(this.D) : -1
            };
            h.zc = function() {
                return qb(xl)
            };
            h.zb = function() {
                return this.o ? 0 == this.g.getPlayerState(this.D) : !1
            };
            h.ib = function() {
                var a = document.getElementById(this.M);
                return a ? new G(a.offsetWidth, a.offsetHeight) : new G(0, 0)
            };
            h.Pc = function() {
                return this.o ? 1 == this.g.getPlayerState(this.D) : !1
            };
            h.Lf = function() {
                var a = this.ib(),
                    b = this.jb();
                if (a.width != this.ka.width || a.height != this.ka.height) !this.ga && b ? Q(this, "beginFullscreen") : this.ga && !b && Q(this, "endFullscreen"), this.ka = a, this.ga = b
            };
            h.Ta = function() {
                this.aa = v(this.Xc, this);
                this.K = v(this.$b, this);
                this.na = v(this.Yc, this);
                this.Na = v(this.dg, this);
                this.da && (this.g.addEventListener("onAdStateChange", this.K), this.g.addEventListener("onReady", this.aa), this.g.addEventListener("onStateChange", this.K), this.g.addEventListener("onVolumeChange", this.na), this.g.addEventListener("onSharePanelOpened", this.Na));
                this.V = new Jg(1E3);
                this.U.h(this.V, "tick", this.Lf);
                this.V.start()
            };
            h.ra = function() {
                this.da && (this.g.removeEventListener("onAdStateChange", this.K), this.g.removeEventListener("onReady", this.aa), this.g.removeEventListener("onStateChange", this.K), this.g.removeEventListener("onVolumeChange", this.na), this.g.removeEventListener("onSharePanelOpened", this.Na));
                null != this.V && this.V.P()
            };
            h.Fd = function() {
                var a = zb(yp);
                M.Za() && (a.ps = "gvn", a.remoteve = zn.w, a.remotevewin = "discover");
                var b = this.M,
                    a = {
                        playerVars: a,
                        events: {
                            cardstatechange: v(this.Wf, this),
                            onError: v(this.bg, this),
                            onReady: v(this.Xc, this),
                            onAdStateChange: v(this.$b, this),
                            onStateChange: v(this.$b, this),
                            onVolumeChange: v(this.Yc, this)
                        }
                    },
                    c = fa("YT");
                this.g = null != c && null != c.Player ? new c.Player(b, a) : null
            };
            var zp = function(a, b, c) {
                var d = {
                    autoplay: "1"
                };
                M.Za() && (d.dash = 0);
                if (null != a.l) {
                    var e = a.l.w;
                    null != e && (d.agcid = e);
                    e = a.l.l;
                    null != e && (d.adformat = e);
                    e = a.l.o;
                    null != e && (d.ad_query_id = e);
                    (e = a.l.C) && (d.cta_conversion_urls = e);
                    (e = a.l.A) && (d.endscreen_ad_tracking_data = e);
                    (e = a.l.O) && (d.wait_for_vast_info_cards_xml = e);
                    a.l.B && (d.is_pharma = 1);
                    d.iv_load_policy = a.l.D ? 1 : 3;
                    a.l.G && (d.noiba = 1);
                    a.l.H && (d.utpsa = 1);
                    a.l.F && (d.autoplay = "1")
                }
                null != b ? Nm(Im, b) ? (e = b.match(/yt_vid\/([a-zA-Z0-9_-]{11})/), e = null != e && 1 < e.length ? e[1] :
                    null) : e = null != b && Nm(Jm, b) ? So(b) : null : e = null;
                null === e ? d.url_encoded_third_party_media = "url=" + encodeURIComponent(b) + "&type=" + encodeURIComponent(null === c ? "" : c) : d.videoId = e;
                !M.ha() && (d.enabled_engage_types = "3,4,5,6");
                a.w = !1;
                a.l && a.l.h ? (a.la = d, a.g.preloadVideoByPlayerVars(a.la)) : a.g.cueVideoByPlayerVars(d);
                Q(a, "loaded")
            };
            h = xp.prototype;
            h.bg = function() {
                Q(this, "error")
            };
            h.Xc = function() {
                this.o = !0;
                this.H && this.ua(this.H.qg, this.H.Dd, this.H.ng); - 1 != this.B && (this.xb(this.B), this.B = -1);
                null != this.J && (zp(this, this.J, this.Y), this.Y = this.J = null); - 1 != this.I && (this.lb(this.I), this.I = -1);
                this.$ && this.wb()
            };
            h.Wf = function() {
                Q(this, "cardsStateChange")
            };
            h.$b = function(a) {
                switch (a.data) {
                    case 0:
                        this.w ? Q(this, "end") : Q(this, "error");
                        break;
                    case 1:
                        this.w || (Ap(this), this.w = !0, this.F = 0, Q(this, "start"));
                        Q(this, "play");
                        Bp(this);
                        this.A = new Jg(100);
                        this.U.h(this.A, "tick", this.Ha);
                        this.A.start();
                        break;
                    case 2:
                        Q(this, "pause"), Bp(this)
                }
            };
            h.Yc = function() {
                Q(this, "volumeChange")
            };
            h.dg = function() {
                Q(this, "shareClicked")
            };
            var Bp = function(a) {
                    a.U.C(a.A, "tick", a.Ha);
                    null != a.A && (Kg(a.A), a.A = null)
                },
                Ap = function(a) {
                    null != a.Ma && m.clearTimeout(a.Ma)
                };
            xp.prototype.Ha = function() {
                if (Og || un()) {
                    if (1.5 < this.Aa() - this.F) {
                        this.o && this.g.seekTo(this.F, !0);
                        return
                    }
                    this.Aa() > this.F && (this.F = this.Aa())
                }
                Q(this, "timeUpdate")
            };
            xp.prototype.bb = function() {
                Q(this, "mediaLoadTimeout")
            };
            xp.prototype.ua = function(a, b, c) {
                if (b || c) this.o ? this.g.addInfoCardXml(a, b, c) : this.H = {
                    qg: a,
                    Dd: b,
                    ng: c
                }
            };
            xp.prototype.L = function() {
                Bp(this);
                Ap(this);
                this.ra();
                this.o = !1;
                this.U.P();
                this.I = -1;
                this.Y = null;
                this.$ = !1;
                this.J = null;
                this.B = -1;
                this.aa = this.g = this.l = null;
                this.w = !1;
                this.oa = "";
                xp.N.L.call(this)
            };
            t("onYouTubeIframeAPIReady", function() {
                wp = !0;
                A(Za, function(a) {
                    a()
                });
                $a()
            }, window);
            var Cp = function(a) {
                P.call(this);
                this.g = a || "goog_" + Na++;
                this.o = []
            };
            x(Cp, P);
            Cp.prototype.l = !1;
            Cp.prototype.connect = function() {
                for (this.l = !0; 0 != this.o.length;) {
                    var a = this.o.shift();
                    this.sendMessage(a.name, a.type, a.data)
                }
            };
            var Qn = function(a, b, c, d) {
                    a.l ? a.sendMessage(b, c, d) : a.o.push({
                        name: b,
                        type: c,
                        data: d
                    })
                },
                Dp = function(a, b, c, d, e) {
                    K.call(this, a);
                    this.X = b;
                    this.T = c;
                    this.vb = d;
                    this.Zc = e
                };
            x(Dp, K);
            Dp.prototype.toString = function() {
                return ""
            };
            var Ep = function(a, b) {
                Cp.call(this, b);
                this.w = a;
                this.ya = null;
                this.A = new W(this);
                this.A.h(H(), "message", this.B)
            };
            x(Ep, Cp);
            var Fp = function(a) {
                if (null == a || !q(a) || 0 != a.lastIndexOf("ima://", 0)) return null;
                a = a.substr(6);
                try {
                    return Xe(a)
                } catch (b) {
                    return null
                }
            };
            Ep.prototype.sendMessage = function(a, b, c) {
                null != this.ya && null != this.ya.postMessage && this.ya.postMessage(Gp(this, a, b, c), "*");
                null != this.ya && null == this.ya.postMessage && En(Bn.getInstance(), 11)
            };
            Ep.prototype.L = function() {
                this.A.P();
                Ep.N.L.call(this)
            };
            Ep.prototype.B = function(a) {
                a = a.g;
                var b = Fp(a.data);
                if (Hp(this, b)) {
                    if (null == this.ya) this.ya = a.source, this.l || this.connect();
                    else if (this.ya != a.source) return;
                    Hp(this, b) && Q(this, new Dp(b.name, b.type, b.data || {}, b.sid, a.origin))
                }
            };
            var Gp = function(a, b, c, d) {
                    var e = {};
                    e.name = b;
                    e.type = c;
                    null != d && (e.data = d);
                    e.sid = a.g;
                    e.channel = a.w;
                    return "ima://" + ff(e)
                },
                Hp = function(a, b) {
                    if (null == b) return !1;
                    var c = b.channel;
                    if (null == c || c != a.w) return !1;
                    b = b.sid;
                    return null == b || "*" != a.g && b != a.g ? !1 : !0
                };
            var Ip = function(a, b) {
                P.call(this);
                this.w = a;
                this.o = b;
                this.g = {};
                this.l = new W(this);
                this.l.h(H(), "message", this.A)
            };
            x(Ip, P);
            var Jp = function(a, b) {
                    var c = b.g;
                    a.g.hasOwnProperty(c) && Qn(a.g[c], b.type, b.X, b.T)
                },
                Lp = function(a, b, c, d) {
                    a.g.hasOwnProperty(b) || (c = new Ep(b, c), a.l.h(c, a.w, function(a) {
                        Q(this, new Kp(a.type, a.X, a.T, a.vb, a.Zc, b))
                    }), c.ya = d, c.connect(), a.g[b] = c)
                };
            Ip.prototype.L = function() {
                this.l.P();
                for (var a in this.g) J(this.g[a]);
                Ip.N.L.call(this)
            };
            Ip.prototype.A = function(a) {
                a = a.g;
                var b = Fp(a.data);
                if (null != b) {
                    var c = b.channel;
                    if (this.o && !this.g.hasOwnProperty(c)) {
                        var d = b.sid;
                        Lp(this, c, d, a.source);
                        Q(this, new Kp(b.name, b.type, b.data || {}, d, a.origin, c))
                    }
                }
            };
            var Kp = function(a, b, c, d, e, f) {
                Dp.call(this, a, b, c, d, e);
                this.g = f
            };
            x(Kp, Dp);
            var Np = function() {
                var a = fa("google.ima.gptProxyInstance", H());
                if (null != a) return a;
                W.call(this);
                this.o = new Ip("gpt", !0);
                Ne(this, sa(J, this.o));
                this.h(this.o, "gpt", this.G);
                this.g = null;
                Mp() || H().top === H() || (this.g = new Ip("gpt", !1), Ne(this, sa(J, this.g)), this.h(this.g, "gpt", this.A))
            };
            x(Np, W);
            var Mp = function() {
                    return !!fa("googletag.cmd", H())
                },
                Op = function() {
                    var a = fa("googletag.console", H());
                    return null != a ? a : null
                };
            Np.prototype.G = function(a) {
                var b = a.Zc,
                    c = "//imasdk.googleapis.com".match(Nd),
                    b = b.match(Nd);
                if (c[3] == b[3] && c[4] == b[4])
                    if (null != this.g) Lp(this.g, a.g, a.vb, H().parent), null != this.g && Jp(this.g, a);
                    else if (c = a.T, null != c && p(c.scope)) {
                    var b = c.scope,
                        c = c.args,
                        d;
                    if ("proxy" == b) c = a.X, "isGptPresent" == c ? d = Mp() : "isConsolePresent" == c && (d = null != Op());
                    else if (Mp())
                        if ("pubads" == b || "companionAds" == b) {
                            d = a.X;
                            var e = H().googletag;
                            if (null != e && null != e[b] && (e = e[b](), null != e && (d = e[d], null != d))) try {
                                var f = d.apply(e, c)
                            } catch (g) {}
                            d =
                                f
                        } else if ("console" == b) {
                        if (e = a.X, f = Op(), null != f && (e = f[e], null != e)) try {
                            e.apply(f, c)
                        } catch (g) {}
                    } else if (null === b) {
                        f = a.X;
                        d = H();
                        if (Ya(["googleGetCompanionAdSlots", "googleSetCompanionAdContents"], f) && (f = d[f], null != f)) try {
                            e = f.apply(d, c)
                        } catch (g) {}
                        d = e
                    }
                    p(d) && (a.T.returnValue = d, Jp(this.o, a))
                }
            };
            Np.prototype.A = function(a) {
                Jp(this.o, a)
            };
            var Qp = function(a, b) {
                    var c = Array.prototype.slice.call(arguments),
                        d = c.shift();
                    if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
                    return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, l, n, w, z) {
                        if ("%" == n) return "%";
                        var e = c.shift();
                        if ("undefined" == typeof e) throw Error("[goog.string.format] Not enough arguments");
                        arguments[0] = e;
                        return Pp[n].apply(null, arguments)
                    })
                },
                Pp = {
                    s: function(a, b, c) {
                        return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                            a + Ia(" ", Number(c) - a.length) : Ia(" ", Number(c) - a.length) + a
                    },
                    f: function(a, b, c, d, e) {
                        d = a.toString();
                        isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
                        var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                        0 <= Number(a) && (d = f + d);
                        if (isNaN(c) || d.length >= Number(c)) return d;
                        d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                        a = Number(c) - d.length - f.length;
                        return d = 0 <= b.indexOf("-", 0) ? f + d + Ia(" ", a) : f + Ia(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
                    },
                    d: function(a, b, c, d, e, f, g, k) {
                        return Pp.f(parseInt(a,
                            10), b, c, d, 0, f, g, k)
                    }
                };
            Pp.i = Pp.d;
            Pp.u = Pp.d;
            var Sp = function(a, b) {
                P.call(this);
                this.l = new W(this);
                this.H = !1;
                this.I = "goog_" + Na++;
                this.F = new pf;
                var c = this.I,
                    d = M.ma() ? (wd() ? "https:" : "http:") + Qp("//imasdk.googleapis.com/js/core/admob/bridge_%s.html", M.C) : (wd() ? "https:" : "http:") + Qp("//imasdk.googleapis.com/js/core/bridge3.170.0_%s.html", M.C);
                a: {
                    var e = window;
                    try {
                        do {
                            try {
                                if (0 == e.location.href.indexOf(d) || 0 == e.document.referrer.indexOf(d)) {
                                    var f = !0;
                                    break a
                                }
                            } catch (g) {}
                            e = e.parent
                        } while (e != e.top)
                    } catch (g) {}
                    f = !1
                }
                f && (d += "?f=" + c);
                c = Yc("IFRAME", {
                    src: d + "#" + c,
                    allowFullscreen: !0,
                    style: "border:0; opacity:0; margin:0; padding:0; position:relative;"
                });
                fn(this.l, c, "load", this.Jd, void 0);
                a.appendChild(c);
                this.o = c;
                this.D = Rp(this);
                this.B = b;
                this.g = this.B.h;
                this.w = this.A = null;
                this.l.h(this.D, "mouse", this.J);
                this.l.h(this.D, "touch", this.M);
                null != this.g && (this.l.h(this.D, "displayContainer", this.Qd), this.l.h(this.D, "videoDisplay", this.K), this.l.h(this.D, "preloadVideoDisplay", this.Sd), this.l.h(this.g, qb(Wo), this.Ba), this.l.h(this.g, hn, this.Ba));
                a = H();
                b = fa("google.ima.gptProxyInstance",
                    a);
                null == b && (b = new Np, t("google.ima.gptProxyInstance", b, a))
            };
            x(Sp, P);
            var Rp = function(a, b) {
                    b = b || "*";
                    var c = a.F.get(b);
                    null == c && (c = new Ep(a.I, b), a.H && (c.ya = cd(a.o), c.connect()), a.F.set(b, c));
                    return c
                },
                Tp = function(a, b) {
                    null != a.g && (a.l.C(a.g, qb(Wo), a.Ba), a.l.C(a.g, hn, a.Ba));
                    a.g = b;
                    a.l.h(a.g, qb(Wo), a.Ba);
                    a.l.h(a.g, hn, a.Ba)
                };
            Sp.prototype.L = function() {
                this.l.P();
                null !== this.w && (this.w.P(), this.w = null);
                of(this.F.La(!1), function(a) {
                    a.P()
                });
                this.F.clear();
                ad(this.o);
                Sp.N.L.call(this)
            };
            Sp.prototype.J = function(a) {
                var b = a.T,
                    c = nd(this.o),
                    d = document.createEvent("MouseEvent");
                d.initMouseEvent(a.X, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
                if (!Sg || qn() || 0 == document.webkitIsFullScreen) this.o.blur(), window.focus();
                this.o.dispatchEvent(d)
            };
            var Up = function(a, b) {
                var c = nd(a.o),
                    d = !!("TouchEvent" in window && 0 < TouchEvent.length);
                a = Ta(b, function(a) {
                    return d ? new Touch({
                        identifier: a.identifier,
                        target: this.o,
                        clientX: a.clientX,
                        clientY: a.clientY,
                        screenX: a.screenX,
                        screenY: a.screenY,
                        pageX: a.pageX + c.x,
                        pageY: a.pageY + c.y
                    }) : document.createTouch(window, this.o, a.identifier, a.pageX + c.x, a.pageY + c.y, a.screenX, a.screenY)
                }, a);
                return document.createTouchList.apply(document, a)
            };
            Sp.prototype.M = function(a) {
                var b = a.T,
                    c = nd(this.o);
                if ("TouchEvent" in window && 0 < TouchEvent.length) {
                    var d = {
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                        detail: b.detail,
                        ctrlKey: b.ctrlKey,
                        altKey: b.altKey,
                        shiftKey: b.shiftKey,
                        metaKey: b.metaKey,
                        touches: Up(this, b.touches),
                        targetTouches: Up(this, b.targetTouches),
                        changedTouches: Up(this, b.changedTouches)
                    };
                    d = new TouchEvent(a.X, d);
                    this.o.dispatchEvent(d)
                } else d = document.createEvent("TouchEvent"), d.initTouchEvent(a.X, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x,
                    b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, Up(this, b.touches), Up(this, b.targetTouches), Up(this, b.changedTouches), b.scale, b.rotation), this.o.dispatchEvent(d)
            };
            Sp.prototype.K = function(a) {
                if (null != this.g) {
                    var b = a.T;
                    switch (a.X) {
                        case "startTracking":
                            this.g.Ta();
                            break;
                        case "stopTracking":
                            this.g.ra();
                            break;
                        case "exitFullscreen":
                            this.g.wc();
                            break;
                        case "play":
                            this.g.wb();
                            break;
                        case "pause":
                            this.g.Kc();
                            break;
                        case "load":
                            this.g.load(b.videoUrl, b.mimeType);
                            break;
                        case "setCurrentTime":
                            this.g.lb(b.currentTime);
                            break;
                        case "setPlaybackOptions":
                            this.g.cc(Vp(b));
                            break;
                        case "setVolume":
                            this.g.xb(b.volume)
                    }
                }
            };
            var Vp = function(a) {
                a = a.playbackOptions;
                return new vp(a.adFormat, a.adSenseAgcid, a.ctaAnnotationTrackingEvents, a.showAnnotations, a.viewCountsDisabled, a.loadVideoTimeout, a.ibaDisabled, a.enablePreloading, a.adQemId, a.isPharma, a.useAutoplayFlag, a.endscreenAdTracking, a.waitForVastInfoCardsXml)
            };
            h = Sp.prototype;
            h.Sd = function(a) {
                if (null != this.A) {
                    var b = a.T;
                    switch (a.X) {
                        case "startTracking":
                            this.A.Ta();
                            break;
                        case "stopTracking":
                            this.A.ra();
                            break;
                        case "setPlaybackOptions":
                            this.A.cc(Vp(b));
                            break;
                        case "load":
                            this.A.load(b.videoUrl, b.mimeType)
                    }
                }
            };
            h.Ba = function(a) {
                var b = {};
                switch (a.type) {
                    case "beginFullscreen":
                        a = "fullscreen";
                        break;
                    case "endFullscreen":
                        a = "exitFullscreen";
                        break;
                    case "click":
                        a = "click";
                        break;
                    case "end":
                        a = "end";
                        break;
                    case "error":
                        a = "error";
                        break;
                    case "loaded":
                        a = "loaded";
                        break;
                    case "mediaLoadTimeout":
                        a = "mediaLoadTimeout";
                        break;
                    case "pause":
                        a = "pause";
                        b.ended = this.g.zb();
                        break;
                    case "play":
                        a = "play";
                        break;
                    case "skip":
                        a = "skip";
                        break;
                    case "start":
                        a = "start";
                        break;
                    case "timeUpdate":
                        a = "timeupdate";
                        b.currentTime = this.g.Aa();
                        b.duration = this.g.gb();
                        break;
                    case "volumeChange":
                        a = "volumeChange";
                        b.volume = this.g.Ic();
                        break;
                    case "loadedmetadata":
                        a = a.type;
                        b.duration = this.g.gb();
                        break;
                    case "abort":
                    case "canplay":
                    case "canplaythrough":
                    case "durationchange":
                    case "emptied":
                    case "loadstart":
                    case "loadeddata":
                    case "progress":
                    case "ratechange":
                    case "seeked":
                    case "seeking":
                    case "stalled":
                    case "suspend":
                    case "waiting":
                        a = a.type;
                        break;
                    default:
                        return
                }
                Qn(this.D, "videoDisplay", a, b)
            };
            h.Qd = function(a) {
                switch (a.X) {
                    case "showVideo":
                        null != this.w ? this.w.ra() : (this.w = new Mo, this.l.h(this.w, "click", this.gg));
                        this.w.Ta(Wp(this.B));
                        a = this.B;
                        null != a.g && a.g.show();
                        break;
                    case "hide":
                        null !== this.w && (this.w.P(), this.w = null);
                        a = this.B;
                        null != a.g && lp(a.g.g, !1);
                        break;
                    case "getPreloadDisplay":
                        null != this.g && null == this.A && (this.A = this.B.G);
                        break;
                    case "swapVideoDisplays":
                        if (null != this.g && null != this.A) {
                            this.l.C(this.g, qb(Wo), this.Ba);
                            this.l.C(this.g, hn, this.Ba);
                            a = this.B;
                            if (a.g && a.h && a.o && a.G) {
                                var b =
                                    a.h;
                                a.h = a.G;
                                a.G = b;
                                b = a.g;
                                a.g = a.o;
                                a.o = b;
                                a.F && a.h instanceof Xo && up(a.F, a.h.g);
                                null != a.A && Tp(a.A, a.h)
                            }
                            this.g = this.B.h;
                            this.A = this.B.G;
                            this.l.h(this.g, qb(Wo), this.Ba);
                            this.l.h(this.g, hn, this.Ba)
                        }
                }
            };
            h.gg = function() {
                Qn(this.D, "displayContainer", "videoClick")
            };
            h.Jd = function() {
                of(this.F.La(!1), function(a) {
                    a.ya = cd(this.o);
                    a.connect()
                }, this);
                this.H = !0
            };
            var Yp = function(a, b, c, d, e) {
                if (!(e || null != a && bd(Rc(a), a))) throw Um(Tm, null, "containerElement", "element");
                this.J = !1;
                this.B = a;
                var f = null != b || null != d;
                if (!f && M.g) throw Um(Rm, null, "Custom video element was not provided even though the setting restrictToCustomPlayback is set to true.");
                Fm(Cm(), 136961005) && (M.l = !0);
                this.O = Xp(b ? b : null);
                var g = f;
                e = !1;
                if (M.l) {
                    M.g || wn(this.O) && f || (g = !1);
                    if (f = !g) f = M.l && !M.ma() && !0 && !M.ha() && (on() || M.g);
                    f && (M.U = !0);
                    xn() && (e = !0)
                } else M.g || wn(this.O) && f || (xn() && (e = !0), g = !1);
                this.D =
                    g;
                this.Y = (this.ia = e) || g && null != d;
                g = Yc("DIV", {
                    style: "position:absolute"
                });
                a.insertBefore(g, a.firstChild);
                this.l = g;
                this.g = !this.D && this.l && on() ? new kp(this.l, null, !0) : null;
                g = a = null;
                this.D ? b ? (a = new Xo(b), g = b) : d && (a = new xp(d)) : this.g && (a = new Xo(this.g.h), g = this.g.h);
                f = null;
                g && M.Za() && e && (f = new tp(g));
                this.F = f;
                this.h = a;
                this.G = this.o = null;
                e = Sb && !tn(4);
                a = pn() && on();
                (M.ma() || this.g && this.h && this.l && !this.D && M.o && !wk() && !e && !a) && this.l && (this.o = new kp(this.l, null, !0), this.G = new Xo(this.o.h));
                this.C = this.h ?
                    c || null : null;
                this.Z = null != this.C;
                En(Bn.getInstance(), 8, {
                    enabled: this.D,
                    yt: null != d,
                    customClick: null != this.C
                });
                null === this.l ? (b = this.B, M.w = b) : this.D && b ? u(b.getBoundingClientRect) || (b = this.B, M.w = b) : b = this.l;
                this.I = b;
                this.A = null != this.l ? new Sp(this.l, this) : null;
                this.H = new G(0, 0)
            };
            Yp.prototype.U = function() {
                this.J = !0;
                if (null != this.g) {
                    var a = this.g;
                    a.h && (a = a.h, on() && a.load())
                }
                null != this.o && (a = this.o, a.h && (a = a.h, on() && a.load()))
            };
            Yp.prototype.M = function() {
                J(this.g);
                J(this.o);
                J(this.A);
                J(this.h);
                J(this.G);
                J(this.F);
                ad(this.l)
            };
            var Wp = function(a) {
                return a.Z && a.C ? a.C : null != a.g ? a.g.l : null
            };
            Yp.prototype.w = function() {
                return this.D
            };
            Yp.prototype.V = function() {
                return this.ia
            };
            Yp.prototype.K = function() {
                return this.Y
            };
            Yp.prototype.setSize = function(a, b) {
                var c = this.l;
                null != c && (-1 == a ? (c.style.right = "0", c.style.left = "0") : c.style.width = a + "px", -1 == b ? (c.style.bottom = "0", c.style.top = "0") : c.style.height = b + "px");
                null != this.A && (c = this.A, c.o.width = -1 == a ? "100%" : a, c.o.height = -1 == b ? "100%" : b);
                this.H = new G(a, b)
            };
            var Xp = function(a) {
                return null != a && u(a.getAttribute) && null != a.getAttribute("playsinline") ? !0 : !1
            };
            var Zp = Pb && "srcdoc" in document.createElement("iframe"),
                $p = Ob || Pb || D && E(11),
                aq = function(a, b) {
                    a.open("text/html", "replace");
                    a.write(b);
                    a.close()
                },
                fq = function(a, b) {
                    D && E(7) && !E(10) && 6 > bq() && cq(b) && (b = dq(b));
                    var c = function() {
                            a.contentWindow.goog_content = b;
                            a.contentWindow.location.replace("javascript:window.goog_content")
                        },
                        d;
                    if (d = D) {
                        try {
                            var e = rd(a.contentWindow)
                        } catch (f) {
                            e = !1
                        }
                        d = !e
                    }
                    d ? eq(a, c) : c()
                },
                bq = function() {
                    var a = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
                    return a ? parseFloat(a[1]) : 0
                },
                gq = 0,
                eq = function(a, b) {
                    var c = "goog_rendering_callback" + gq++;
                    m[c] = b;
                    a.src = "javascript:'<script>(function() {document.domain = \"" + document.domain + '";var continuation = window.parent.' + c + ";window.parent." + c + " = null;continuation();})()\x3c/script>'"
                },
                cq = function(a) {
                    for (var b = 0; b < a.length; ++b)
                        if (127 < a.charCodeAt(b)) return !0;
                    return !1
                },
                dq = function(a) {
                    a = unescape(encodeURIComponent(a));
                    for (var b = Math.floor(a.length / 2), c = [], d = 0; d < b; ++d) c[d] = String.fromCharCode(256 * a.charCodeAt(2 * d + 1) + a.charCodeAt(2 * d));
                    1 == a.length %
                        2 && (c[b] = a.charAt(a.length - 1));
                    return c.join("")
                };
            var hq = function(a, b) {
                this.o = a;
                this.l = null;
                this.D = "";
                this.F = 0;
                this.w = this.g = null;
                this.J = b;
                this.B = null;
                this.A = ""
            };
            x(hq, P);
            hq.prototype.I = function(a) {
                try {
                    var b = a.g.data;
                    try {
                        var c = Xe(b)
                    } catch (Lc) {
                        return
                    }
                    var d = c.session;
                    if (null != d && this.A == d) {
                        if ("friendlyReady" == c.type) {
                            var e = iq(this);
                            if ((Mj() || Lj()) && null != e) {
                                this.l = e;
                                this.D = e.currentSrc;
                                this.F = e.currentTime;
                                var f = this.o;
                                null != f.g && f.g.show()
                            } else {
                                var g = this.o.B,
                                    k = this.o.H;
                                var l = "border: 0; margin: 0; padding: 0; position: absolute; " + ("width:" + k.width + "px; ");
                                l += "height:" + k.height + "px;";
                                this.l = Yc("VIDEO", {
                                    style: l
                                });
                                null != iq(this) && r(iq(this).volume) && (this.l.volume = iq(this).volume);
                                g.appendChild(this.l)
                            }
                            var n = this.o.B;
                            a = "border: 0; margin: 0; padding: 0;position: absolute; ";
                            var w = this.l;
                            b: {
                                var z = Rc(w);
                                if (z.defaultView && z.defaultView.getComputedStyle) {
                                    var N = z.defaultView.getComputedStyle(w, null);
                                    if (N) {
                                        var Z = N.display || N.getPropertyValue("display") || "";
                                        break b
                                    }
                                }
                                Z = ""
                            }
                            if ("none" != (Z || (w.currentStyle ? w.currentStyle.display : null) || w.style && w.style.display)) var V = qd(w);
                            else {
                                var ca = w.style,
                                    Zb = ca.display,
                                    yc = ca.visibility,
                                    Hd = ca.position;
                                ca.visibility = "hidden";
                                ca.position = "absolute";
                                ca.display =
                                    "inline";
                                var We = qd(w);
                                ca.display = Zb;
                                ca.position = Hd;
                                ca.visibility = yc;
                                V = We
                            }
                            a += "width:" + V.width + "px; ";
                            a += "height:" + V.height + "px;";
                            this.w = Yc("DIV", {
                                style: a
                            });
                            n.appendChild(this.w);
                            try {
                                this.g.contentWindow.loader.initFriendly(this.l, this.w)
                            } catch (Lc) {
                                jq(this)
                            }
                        }
                        Qn(this.J, "vpaid", "", b)
                    }
                } catch (Lc) {
                    jq(this)
                }
            };
            var jq = function(a) {
                    var b = {
                        type: "error"
                    };
                    b.session = a.A;
                    a = ff(b);
                    window.postMessage(a, "*")
                },
                iq = function(a) {
                    a = a.o.h;
                    return a instanceof Xo && a.g instanceof HTMLVideoElement ? a.g : null
                };
            hq.prototype.L = function() {
                P.N.L.call(this);
                J(this.H);
                this.H = null;
                ad(this.w);
                this.w = null;
                ad(this.g);
                this.g = null;
                var a = iq(this);
                (Mj() || Lj()) && null != a ? (a.src = this.D, a.currentTime = this.F, a = this.o, null != a.g && lp(a.g.g, !1)) : (ad(this.l), this.l = null)
            };
            var X = function(a, b, c, d, e, f) {
                P.call(this);
                this.g = a;
                this.U = b;
                this.Na = d;
                this.w = null;
                this.ga = f;
                this.Y = !1;
                this.M = 1;
                this.Ma = c;
                this.oa = this.ka = this.da = -1;
                this.B = this.o = null;
                this.I = new Ro;
                this.Ha = !1;
                this.$ = new pf;
                this.aa = this.ua = !1;
                this.A = this.l = this.F = null;
                this.la = e && null != this.g.C;
                this.V = v(this.Od, this);
                this.K = new W(this);
                this.K.h(this.ga, "adsManager", this.bb)
            };
            x(X, P);
            X.prototype.bb = function(a) {
                switch (a.X) {
                    case "error":
                        kq(this, a.T);
                        break;
                    case "contentPauseRequested":
                        var b = this.g.h;
                        this.g.w() && null != this.w && this.w.restoreCustomPlaybackStateOnAdBreakComplete && null != b.ed && b.ed();
                        this.D(a.X, a.T);
                        break;
                    case "contentResumeRequested":
                        a = v(X.prototype.D, this, a.X, a.T);
                        b = this.g.h;
                        this.g.w() && null != this.w && this.w.restoreCustomPlaybackStateOnAdBreakComplete && null != b.cd ? b.cd(a) : a();
                        break;
                    case "remainingTime":
                        b = a.T;
                        this.da = b.currentTime;
                        this.ka = b.duration;
                        this.oa = b.remainingTime;
                        break;
                    case "skip":
                        this.D(a.X, a.T);
                        break;
                    case "log":
                        var b = a.T,
                            c = b.adData;
                        this.D(a.X, c, b.logData);
                        break;
                    case "companionBackfill":
                        a = fa("window.google_show_companion_ad");
                        null != a && a();
                        break;
                    case "skipshown":
                        this.Y = !0;
                        this.D(a.X, a.T);
                        break;
                    case "interaction":
                        b = a.T;
                        c = b.adData;
                        this.D(a.X, c, b.interactionData);
                        break;
                    case "vpaidEvent":
                        try {
                            var d = a.T;
                            switch (d.vpaidEventType) {
                                case "createFriendlyIframe":
                                    b = this.F = new hq(this.g, this.ga);
                                    b.A = d.session;
                                    a = "about:self";
                                    D && (a = "");
                                    b.g = Yc("IFRAME", {
                                        src: a,
                                        allowtransparency: !0,
                                        background: "transparent"
                                    });
                                    c = b.g;
                                    a = {
                                        display: "none",
                                        width: "0",
                                        height: "0"
                                    };
                                    if (q(a)) {
                                        var e = hd(c, a);
                                        e && (c.style[e] = void 0)
                                    } else
                                        for (var f in a) {
                                            var e = c,
                                                g = a[f],
                                                k = hd(e, f);
                                            k && (e.style[k] = g)
                                        }
                                    var l = b.o.B;
                                    l.appendChild(b.g);
                                    var n = l.ownerDocument,
                                        w = n.defaultView || n.parentWindow;
                                    null == b.B && (b.B = new W(b));
                                    b.B.h(w, "message", b.I);
                                    var z = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>' + ('loader = new VPAIDLoader(false, "' + b.A + '");') + "\x3c/script></body>";
                                    if (Rg || Ng || Lb) {
                                        var N =
                                            b.g;
                                        $p ? aq(N.contentWindow.document, z) : fq(N, z)
                                    } else {
                                        var Z = b.g;
                                        Zp ? Z.srcdoc = z : $p ? aq(Z.contentWindow.document, z) : fq(Z, z)
                                    }
                                    break;
                                case "destroyFriendlyIframe":
                                    null != this.F && (this.F.P(), this.F = null)
                            }
                        } catch (V) {
                            kq(this, V.T)
                        }
                        break;
                    case "skippableStateChanged":
                        b = a.T;
                        c = b.adData;
                        null != c.skippable && (this.Y = c.skippable);
                        this.D(a.X, a.T);
                        break;
                    case "initInsecureFlashVpaid":
                        this.o = a = null != a.T.adData ? new U(a.T.adData) : null;
                        a = a.Ec();
                        this.A = Yc("DIV", {
                            style: "position:absolute;visibility:visible;width:100%;height:100%;top:0;left:0;"
                        });
                        this.g.B.appendChild(this.A);
                        this.l = new Jo(this.A);
                        this.K.h(this.l, "loadError", this.Pb);
                        this.K.h(this.l, "vpaidEventType", this.na);
                        b = null != this.w ? this.w.loadVideoTimeout : zo();
                        this.l.load(a, this.g.H.width, this.g.H.height, b);
                        break;
                    case "destroyInsecureFlashVpaid":
                        null !== this.l && (this.l.P(), this.l = null);
                        null !== this.A && ($c(this.A), this.A = null);
                        break;
                    case "callFlashVpaidMethod":
                        if (null !== this.l) {
                            b = [];
                            c = a.T.methodData;
                            a = c.methodName;
                            c = c.args;
                            b.push(a);
                            for (f = 0; f < c.length; f++) b.push(c[f]);
                            (b = this.l.Kb.apply(this.l,
                                b)) && this.na(new Io("flashVpaidMethodResults", {
                                methodName: a,
                                result: b
                            }))
                        }
                        break;
                    case "cacheAbandonUrls":
                        break;
                    case "volumeChange":
                        b = a.T;
                        c = b.adData;
                        null != c && r(c.volume) && (this.M = c.volume);
                        this.D(a.X, a.T);
                        break;
                    default:
                        this.D(a.X, a.T)
                }
            };
            X.prototype.Pb = function() {
                this.na(new Io("AdError", {
                    message: "Flash VPAID loader failed to load."
                }))
            };
            X.prototype.na = function(a) {
                var b = a.g;
                a = a.data;
                "flashReady" == b ? (this.l.Kb("handshakeVersion", "2.0"), this.l.Kb("initAd", this.g.H.width, this.g.H.height, "normal", -2, this.o.Fc())) : lq(this, "onFlashVpaidEvent", {
                    eventType: b,
                    data: a
                })
            };
            X.prototype.D = function(a, b, c) {
                if (null == b.companions) {
                    var d = this.$.get(b.adId);
                    b.companions = null != d ? d : []
                }
                this.o = d = null != b.adData ? new U(b.adData) : null;
                switch (a) {
                    case "adBreakReady":
                    case "trackingUrlPinged":
                    case "mediaUrlPinged":
                        a = new L(a, null, b);
                        break;
                    case "adMetadata":
                        a = null;
                        null != b.adCuePoints && (a = new vo(b.adCuePoints));
                        a = new yo(d, a);
                        break;
                    case "allAdsCompleted":
                        this.o = null;
                        this.ua = !0;
                        a = new L(a, d);
                        break;
                    case "contentPauseRequested":
                        this.aa = !1;
                        a = new L(a, d);
                        break;
                    case "contentResumeRequested":
                        this.o =
                            null;
                        this.aa = !0;
                        a = new L(a, d);
                        break;
                    case "loaded":
                        this.da = 0;
                        this.ka = d.Qb();
                        this.oa = d.Qb();
                        c = Hn();
                        var e = this.V,
                            f = this.Na,
                            g = ll.getInstance();
                        c.l.set(cn(d), e);
                        c.D && c.o && (R.getInstance().l = !0, g.h = c.o);
                        c.B && Nn(c, "loaded", cn(d), f);
                        a = new L(a, d, b.adData);
                        break;
                    case "start":
                        this.$.set(b.adId, b.companions);
                        null != Wp(this.g) && (null != this.B ? this.B.ra() : (this.B = new Mo, this.K.h(this.B, "click", this.$f)), this.B.Ta(Wp(this.g)));
                        a = new L(a, d);
                        break;
                    case "complete":
                        null != this.B && this.B.ra();
                        Pn(Hn(), this.V, cn(d));
                        this.o =
                            null;
                        this.$.Va(b.adId);
                        a = new L(a, d);
                        break;
                    case "log":
                        b = null;
                        null != c && null != c.type ? (e = c.type, e = "adLoadError" == e || "adPlayError" == e) : e = !1;
                        e && (b = {
                            adError: mq(c)
                        });
                        a = new L(a, d, b);
                        break;
                    case "interaction":
                        a = new L(a, d, c);
                        break;
                    case "urlNavigationRequested":
                        a = new L(a, d, b.urlNavigationData);
                        break;
                    default:
                        a = new L(a, d)
                }
                Q(this, a);
                this.ua && this.aa && this.Gc()
            };
            var kq = function(a, b) {
                    var c = new Pe(mq(b));
                    a.Ha ? (Q(a, c), a.o && Pn(Hn(), a.V, cn(a.o)), a.o = null) : a.I.h.push(c);
                    En(Bn.getInstance(), 7, {
                        error: b.errorCode
                    }, !0)
                },
                mq = function(a) {
                    var b = new Le(a.type, a.errorMessage, a.errorCode);
                    null != a.innerError && (b.g = Error(a.innerError));
                    return b
                },
                lq = function(a, b, c) {
                    Qn(a.ga, "adsManager", b, c)
                };
            h = X.prototype;
            h.Vc = function() {
                lq(this, "contentTimeUpdate", {
                    currentTime: this.H.currentTime
                })
            };
            h.cf = function(a, b, c, d) {
                if (this.I.isEmpty()) {
                    var e = this.g;
                    null != d && (En(Bn.getInstance(), 54, {}, !0), e.O = Xp(d), M.g || wn(e.O) ? (e.D = !0, J(e.g), J(e.o), J(e.G), e.g = null, e.o = null, e.G = null, J(e.h), e.h = new Xo(d), null !== e.l && (u(d.getBoundingClientRect) ? e.I = d : (e.I = e.B, M.w = e.I)), null != e.A && Tp(e.A, e.h), e.F && up(e.F, d)) : e.D = !1);
                    this.Ha = !0;
                    this.Hc(a, b, c);
                    lq(this, "init", {
                        width: a,
                        height: b,
                        viewMode: c
                    })
                } else {
                    for (; !this.I.isEmpty();) b = a = this.I, 0 == b.g.length && (b.g = b.h, b.g.reverse(), b.h = []), a = a.g.pop(), Q(this, a);
                    this.P()
                }
            };
            h.Qf = function() {
                return this.g.w()
            };
            h.Pf = function() {
                return this.la
            };
            h.af = function() {
                return this.oa
            };
            h.Ye = function() {
                return this.Y
            };
            h.Gd = function() {
                lq(this, "discardAdBreak")
            };
            h.kg = function() {
                lq(this, "requestNextAdBreak")
            };
            h.jf = function(a) {
                null != a && (this.w = a, lq(this, "updateAdsRenderingSettings", {
                    adsRenderingSettings: nq(this)
                }))
            };
            h.Od = function() {
                var a = null != this.o ? this.o.g.vpaid : !1,
                    b = this.g.h,
                    c = null != b ? b.Aa() : this.da,
                    d = null != b ? b.gb() : this.ka;
                return {
                    currentTime: c,
                    duration: d,
                    isPlaying: null != b ? b.Pc() : !1,
                    isVpaid: a,
                    isYouTube: M.ha(),
                    volume: this.M
                }
            };
            h.gf = function() {
                lq(this, "skip")
            };
            h.start = function() {
                if (this.U && !M.ma()) {
                    !pn() || M.ha() || En(Bn.getInstance(), 50, {
                        customPlayback: this.g.w()
                    });
                    on() && !this.g.J && En(Bn.getInstance(), 26, {
                        adtagurl: this.U,
                        customPlayback: this.g.w()
                    });
                    Sh(this.g.l) && En(Bn.getInstance(), 30, {
                        adtagurl: this.U,
                        customPlayback: this.g.w()
                    });
                    var a = this.g.C,
                        b = this.g.l,
                        c;
                    if (c = a && b && !Sh(a)) a = Ln(a), b = Ln(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
                    c && En(Bn.getInstance(), 31, {
                        adtagurl: this.U,
                        customPlayback: this.g.w()
                    })
                }
                if (on() && !this.g.J && !this.g.w()) throw Um(Sm);
                b = this.g;
                b.Z = this.la && null != b.C;
                this.g.A.o.style.opacity = 1;
                null != this.H && 1 == this.M && ("boolean" == typeof this.H.muted && this.H.muted ? this.Rb(0) : r(this.H.volume) && (b = this.H.volume, 0 <= b && 1 >= b && this.Rb(this.H.volume)));
                lq(this, "start")
            };
            h.$f = function() {
                if ((null == this.w || !this.w.disableClickThrough) && null != this.o) {
                    var a = this.o.g.clickThroughUrl;
                    null != a && (wa(Ka(a)) || window.open(a, "_blank"))
                }
            };
            h.Hc = function(a, b, c) {
                if (null !== this.l) {
                    var d = this.l;
                    d.g && d.g.setSize(a, b);
                    pd(this.A, a, b)
                }
                this.g.setSize(a, b);
                lq(this, "resize", {
                    width: a,
                    height: b,
                    viewMode: c
                })
            };
            h.hf = function() {
                lq(this, "stop")
            };
            h.Xe = function() {
                lq(this, "expand")
            };
            h.We = function() {
                lq(this, "collapse")
            };
            h.bf = function() {
                return this.M
            };
            h.Rb = function(a) {
                this.M = a;
                if (!M.ma()) {
                    var b = this.g.h;
                    null != b && b.xb(a)
                }
                lq(this, "volume", {
                    volume: a
                })
            };
            h.df = function() {
                lq(this, "pause")
            };
            h.ff = function() {
                lq(this, "resume")
            };
            h.Gc = function() {
                null != this.F && (this.F.P(), this.F = null);
                null !== this.l && (this.l.P(), this.l = null);
                null !== this.A && ($c(this.A), this.A = null);
                this.P()
            };
            h.Ze = function() {
                return this.Ma
            };
            h.$e = function() {
                return this.o
            };
            h.L = function() {
                lq(this, "destroy");
                null != this.B && this.B.P();
                this.K.P();
                this.I.clear();
                this.J && (Kg(this.J.g), this.J.P());
                Pn(Hn(), this.V);
                X.N.L.call(this)
            };
            var nq = function(a) {
                var b = {};
                null != a.w && Bb(b, a.w);
                a.la && (M.ha() ? b.useVideoAdUi = !1 : b.useClickElement = !1, b.disableClickThrough = !0);
                return b
            };
            var oq = function(a, b, c) {
                K.call(this, "adsManagerLoaded");
                this.g = a;
                this.A = b;
                this.F = c || ""
            };
            x(oq, K);
            oq.prototype.G = function(a, b) {
                var c = this.g;
                c.H = a;
                null != b && (c.w = b);
                null != a.currentTime && (c.J = new xo(a), c.J.h("currentTimeUpdate", c.Vc, !1, c), c.J.start(), c.Vc());
                lq(c, "configure", {
                    adsRenderingSettings: nq(c)
                });
                return this.g
            };
            oq.prototype.D = function() {
                return this.A
            };
            oq.prototype.B = function() {
                return this.F
            };
            var pq;
            if (pq = !ob(function(a) {
                    return a.match(H().location.href)
                })) {
                var qq = document;
                pq = null == Xa(qq.querySelectorAll && qq.querySelector ? qq.querySelectorAll("SCRIPT") : qq.getElementsByTagName("SCRIPT"), function(a) {
                    return ob(function(b) {
                        return b.match(a.src)
                    })
                })
            }
            if (pq) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
            var rq = function(a) {
                P.call(this);
                this.g = a;
                this.w = new pf;
                this.l = this.g.A;
                this.A = new W(this);
                this.l && (a = Hn(), Kn(a, Rp(this.l)), this.o = On(a, this.g.I));
                a: {
                    try {
                        var b = window.top.location.href
                    } catch (c) {
                        b = 2;
                        break a
                    }
                    b = null != b ? b == window.document.location.href ? 0 : 1 : 2
                }
                zn.l = b
            };
            x(rq, P);
            h = rq.prototype;
            h.L = function() {
                this.A.P();
                Hn().A.Va(this.o);
                rq.N.L.call(this)
            };
            h.Nf = function() {
                this.P()
            };
            h.Of = function(a, b) {
                a.adTagUrl && En(Bn.getInstance(), 8, {
                    adtagurl: a.adTagUrl,
                    customPlayback: this.g.w(),
                    customClick: null != this.g.C,
                    restrict: M.g
                });
                var c = "",
                    d = Xd(),
                    e = d.h,
                    f = d.g;
                e && e.url ? c = e.url : f && f.url && (c = f.url);
                a.location = c;
                a.referrer = window.document.referrer;
                a.supportsYouTubeHosted = this.g.K();
                var g = a.adTagUrl,
                    k = this.g.B,
                    l = [],
                    n = "",
                    w = "";
                if (null != k) {
                    for (var z = k, N = [], Z = 0; z && 25 > Z; ++Z) {
                        a: {
                            if (z && z.nodeName && z.parentElement)
                                for (var V = z.nodeName.toString().toLowerCase(), ca = z.parentElement.childNodes, Zb = 0, yc =
                                        0; yc < ca.length; ++yc) {
                                    var Hd = ca[yc];
                                    if (Hd.nodeName && Hd.nodeName.toString().toLowerCase() === V) {
                                        if (z === Hd) {
                                            var We = "." + Zb;
                                            break a
                                        }++Zb
                                    }
                                }
                            We = ""
                        }
                        N.push((z.nodeName && z.nodeName.toString().toLowerCase()) + "" + We);
                        z = z.parentElement
                    }
                    n = N.join();
                    if (k) {
                        var Lc = k.ownerDocument,
                            Mc = Lc && (Lc.defaultView || Lc.parentWindow) || null,
                            zl = [];
                        if (Mc) try {
                            for (var Id = Mc.parent, Al = 0; Id && Id !== Mc && 25 > Al; ++Al) {
                                for (var Bl = Id.frames, Ye = 0; Ye < Bl.length; ++Ye)
                                    if (Mc === Bl[Ye]) {
                                        zl.push(Ye);
                                        break
                                    }
                                Mc = Id;
                                Id = Mc.parent
                            }
                        } catch (sq) {}
                        w = zl.join()
                    } else w =
                        ""
                }
                l.push(n, w);
                if (null != g) {
                    for (var vh = 0; vh < Ke.length - 1; ++vh) l.push(Td(g, Ke[vh]) || "");
                    var Cl = Td(g, "videoad_start_delay"),
                        Dl = "";
                    if (Cl) var El = parseInt(Cl, 10),
                        Dl = 0 > El ? "postroll" : 0 == El ? "preroll" : "midroll";
                    l.push(Dl)
                } else
                    for (var Fl = 0; Fl < Ke.length; ++Fl) l.push("");
                var Gl = l.join(":"),
                    Hl = Gl.length;
                if (0 == Hl) var Il = 0;
                else {
                    for (var Nc = 305419896, wh = 0; wh < Hl; wh++) Nc ^= (Nc << 5) + (Nc >> 2) + Gl.charCodeAt(wh) & 4294967295;
                    Il = 0 < Nc ? Nc : 4294967296 + Nc
                }
                a.videoAdKey = Il.toString();
                var Jl = a.adTagUrl;
                if (null != Jl && "ca-pub-6219811747049371" !=
                    Td(Jl, "client")) var Kl = null;
                else {
                    var Ll = fa("window.yt.util.activity.getTimeSinceActive");
                    Kl = null != Ll ? Ll().toString() : null
                }
                var Ml = Kl;
                null != Ml && (a.lastActivity = Ml);
                var Nl = a.adTagUrl;
                if (null == Nl) var Ol = !1;
                else {
                    var Pl = new tf(Nl),
                        Ql = Pl.C,
                        Rl = Pl.g,
                        xh = Rl.length - 27;
                    Ol = 0 <= xh && Rl.indexOf("googleads.g.doubleclick.net", xh) == xh && (wa(Ka(Ql)) ? !1 : /\/pagead\/(live\/)?ads/.test(Ql))
                }
                if (Ol) {
                    var ub = window,
                        ka = Gd().document,
                        Ja = {};
                    var jb = Ae(ub).lc;
                    var Jd = jb.location.href;
                    if (jb == jb.top) var Sl = {
                        url: Jd,
                        Qc: !0
                    };
                    else {
                        var yh = !1,
                            zh = jb.document;
                        zh && zh.referrer && (Jd = zh.referrer, jb.parent == jb.top && (yh = !0));
                        var Ah = jb.location.ancestorOrigins;
                        if (Ah) {
                            var Bh = Ah[Ah.length - 1];
                            Bh && -1 == Jd.indexOf(Bh) && (yh = !1, Jd = Bh)
                        }
                        Sl = {
                            url: Jd,
                            Qc: yh
                        }
                    }
                    var tq = Sl;
                    a: {
                        var Mb = Gd(),
                            Tl = ub.o || Mb.o,
                            Ul = ub.l || Mb.l;
                        if (Mb && Mb.top == Mb) var Ch = !1;
                        else {
                            var Ze = ka.documentElement;
                            if (Tl && Ul) {
                                var $e = 1,
                                    af = 1;
                                Mb.innerHeight ? ($e = Mb.innerWidth, af = Mb.innerHeight) : Ze && Ze.clientHeight ? ($e = Ze.clientWidth, af = Ze.clientHeight) : ka.body && ($e = ka.body.clientWidth, af = ka.body.clientHeight);
                                if (af > 2 * Ul || $e > 2 * Tl) {
                                    Ch = !1;
                                    break a
                                }
                            }
                            Ch = !0
                        }
                    }
                    var Nb = Ch;
                    var uq = tq.Qc,
                        Dh = Gd(),
                        bf = Dh.top == Dh ? 0 : rd(Dh.top) ? 1 : 2,
                        Oc = 4;
                    Nb || 1 != bf ? Nb || 2 != bf ? Nb && 1 == bf ? Oc = 7 : Nb && 2 == bf && (Oc = 8) : Oc = 6 : Oc = 5;
                    uq && (Oc |= 16);
                    var Eh = !!ub.g;
                    Ja.iframing = "" + Oc;
                    if (!Eh && "ad.yieldmanager.com" == ka.domain) {
                        for (var Kd = ka.URL.substring(ka.URL.lastIndexOf("http")); - 1 < Kd.indexOf("%");) try {
                            Kd = decodeURIComponent(Kd)
                        } catch (sq) {
                            break
                        }
                        ub.g = Kd;
                        Eh = !!Kd
                    }
                    Je || (Je = he());
                    var cf = Je;
                    var Vl = cf.g.hasOwnProperty(92) ? cf.g[92] : "";
                    Eh ? (Ja.page_url = ub.g, Ja.page_location =
                        (Nb ? ka.referrer : ka.URL) || "EMPTY") : Vl && Nb && rd(ub.top) && ka.referrer && ub.top.document.referrer === ka.referrer ? "21060298" === Vl ? (Ja.page_url = ub.top.document.URL, Ja.page_location = null, cf.h["21060300"] = !0) : (cf.h["21060299"] = !0, Ja.page_url = Nb ? ka.referrer : ka.URL, Ja.page_location = null) : (Ja.page_url = Nb ? ka.referrer : ka.URL, Ja.page_location = null);
                    Ja.last_modified_time = ka.URL == Ja.page_url ? Date.parse(ka.lastModified) / 1E3 : null;
                    if (jb == jb.top) var Wl = jb.document.referrer;
                    else {
                        var Xl = Cd();
                        Wl = (Xl ? Xl.referrer : null) || ""
                    }
                    Ja.referrer_url =
                        Wl;
                    a.adSenseParams = Ja
                }
                var Yl = "goog_" + Na++;
                this.w.set(Yl, b || null);
                var Ld = {};
                Bb(Ld, a);
                var vq = this.W().o,
                    wq = this.W().A,
                    xq = this.W().J,
                    yq = this.W().h,
                    zq = this.W().G,
                    Aq = this.W().og(),
                    Bq = this.W().ma(),
                    Cq = this.W().Nc() || !1,
                    Dq = this.W().Vb(),
                    Eq = this.W().Wb(),
                    Fq = this.W().ha(),
                    Gq = this.W().Rf(),
                    Hq = this.W().F,
                    Iq = this.W().B,
                    Jq = this.W().H,
                    Kq = this.W().Z,
                    Lq = this.W().jg(),
                    Mq = Hn();
                Ld.settings = {
                    autoPlayAdBreaks: vq,
                    chromelessPlayer: !0,
                    companionBackfill: wq,
                    pageCorrelator: xq,
                    disableCustomPlaybackForIOS10Plus: yq,
                    disableFlashAds: zq,
                    enableTrvBillOnClick: !0,
                    engagementDetection: !0,
                    unloadAbandonPingEnabled: Aq,
                    cacheAbandonUrls: !1,
                    isAdMob: Bq,
                    isInChina: Cq,
                    isFunctionalTest: Dq,
                    isVpaidAdapter: Eq,
                    isYouTube: Fq,
                    isKevlar: Gq,
                    numRedirects: Hq,
                    onScreenDetection: !0,
                    playbackQualityWindowMinimumLength: 3E3,
                    playerType: Iq,
                    playerVersion: Jq,
                    ppid: Kq,
                    preSkipFx: "",
                    reportMediaRequests: Lq,
                    activeViewPushUpdates: Mq.B,
                    restrictToCustomPlayback: this.W().g,
                    streamCorrelator: this.W().M,
                    urlSignals: this.W().V,
                    useCompanionsAsEndSlate: !1,
                    usePlaybackQualityWindow: this.W().pg(),
                    vpaidMode: this.W().I,
                    useChromelessRemoteMode: this.W().Za(),
                    useRefactoredDelayLearnMore: !1,
                    useFixedDirectionality: !1,
                    remoteYtExperiment: this.W().l,
                    testingConfig: Re(this.W()).g
                };
                var Zl = this.g.h,
                    Nq = null != this.g.C,
                    Oq = zn.l,
                    Pq = this.o,
                    Qq = null != Zl ? Zl.zc() : null,
                    Rq = this.g.V(),
                    Sq = this.g.w(),
                    Tq = this.g.K(),
                    $l = this.g;
                Ld.videoEnvironment = {
                    customClickTrackingProvided: Nq,
                    iframeState: Oq,
                    osdId: Pq,
                    supportedMimeTypes: Qq,
                    usesChromelessPlayer: Rq,
                    usesCustomVideoPlayback: Sq,
                    usesYouTubePlayer: Tq,
                    usesInlinePlayback: this.g.O,
                    youTubeRendererId: $l.F ? $l.F.A : 0
                };
                Ld.experimentState = Em();
                var am = Rp(this.l, Yl);
                this.A.h(am, "adsLoader", this.Pd);
                Qn(am, "adsLoader", "requestAds", Ld)
            };
            h.W = function() {
                return M
            };
            h.Mf = function() {
                Qn(Rp(this.l), "adsLoader", "contentComplete")
            };
            h.Pd = function(a) {
                var b = a.X;
                switch (b) {
                    case "adsLoaded":
                        b = a.T;
                        a = a.vb;
                        var c = new X(this.g, b.adTagUrl || "", b.adCuePoints, this.o, b.isCustomClickTrackingAllowed, Rp(this.l, a));
                        Q(this, new oq(c, this.w.get(a), b.response));
                        break;
                    case "error":
                        b = a.T;
                        a = a.vb;
                        c = new Le(b.type, b.errorMessage, b.errorCode);
                        null != b.innerError && (c.g = Error(b.innerError));
                        Q(this, new Pe(c, this.w.get(a)));
                        En(Bn.getInstance(), 7, {
                            error: b.errorCode
                        }, !0);
                        break;
                    case "trackingUrlPinged":
                        Q(this, new L(b, null, a.T))
                }
            };
            var Y = function() {};
            h = Y.prototype;
            h.clone = function() {
                var a = new Y;
                "auto" == this.videoPlayActivation ? a.ac(!0) : "click" == this.videoPlayActivation && a.ac(!1);
                a.adTagUrl = this.adTagUrl;
                a.adSenseParams = zb(this.adSenseParams);
                a.adsResponse = this.adsResponse;
                a.tc = this.tc;
                a.contentDuration = this.contentDuration;
                a.contentKeywords = this.contentKeywords ? cb(this.contentKeywords) : null;
                a.contentTitle = this.contentTitle;
                a.customMacros = zb(this.customMacros);
                a.g = this.g;
                a.location = this.location;
                a.referrer = this.referrer;
                a.lastActivity = this.lastActivity;
                a.language =
                    this.language;
                a.linearAdSlotWidth = this.linearAdSlotWidth;
                a.linearAdSlotHeight = this.linearAdSlotHeight;
                a.nonLinearAdSlotWidth = this.nonLinearAdSlotWidth;
                a.nonLinearAdSlotHeight = this.nonLinearAdSlotHeight;
                a.videoAdKey = this.videoAdKey;
                a.tagForChildDirectedContent = this.tagForChildDirectedContent;
                a.usePostAdRequests = this.usePostAdRequests;
                a.supportsYouTubeHosted = this.supportsYouTubeHosted;
                a.youTubeAdType = this.youTubeAdType;
                a.youTubeVideoAdStartTime = this.youTubeVideoAdStartTime;
                a.vc = this.vc;
                a.sc = this.sc;
                a.l = this.l;
                a.h = this.h;
                a.forceNonLinearFullSlot = this.forceNonLinearFullSlot;
                a.ld = this.ld;
                a.liveStreamPrefetchSeconds = this.liveStreamPrefetchSeconds;
                a.Mc = this.Mc;
                a.kc = this.kc;
                a.Hb = this.Hb ? this.Hb.clone() : null;
                return a
            };
            h.adSenseParams = null;
            h.tc = null;
            h.customMacros = null;
            h.videoPlayActivation = "unknown";
            h.liveStreamPrefetchSeconds = 0;
            h.linearAdSlotWidth = 0;
            h.linearAdSlotHeight = 0;
            h.nonLinearAdSlotWidth = 0;
            h.nonLinearAdSlotHeight = 0;
            h.forceNonLinearFullSlot = !1;
            h.videoAdKey = null;
            h.tagForChildDirectedContent = !1;
            h.usePostAdRequests = !1;
            h.supportsYouTubeHosted = !0;
            h.ld = new function() {};
            h.youTubeVideoAdStartTime = 0;
            h.vc = null;
            h.sc = !1;
            h.ac = function(a) {
                this.videoPlayActivation = a ? "auto" : "click"
            };
            h.Mc = !0;
            h.kc = 5E3;
            h.Hb = null;
            U.prototype.getCompanionAds = U.prototype.Ee;
            U.prototype.isLinear = U.prototype.Ue;
            U.prototype.isSkippable = U.prototype.Ve;
            U.prototype.getAdId = U.prototype.h;
            U.prototype.getAdSystem = U.prototype.Be;
            U.prototype.getAdvertiserName = U.prototype.Ce;
            U.prototype.getApiFramework = U.prototype.De;
            U.prototype.getContentType = U.prototype.Fe;
            U.prototype.getCreativeId = U.prototype.o;
            U.prototype.getCreativeAdId = U.prototype.l;
            U.prototype.getDescription = U.prototype.Kd;
            U.prototype.getTitle = U.prototype.Md;
            U.prototype.getDuration = U.prototype.Qb;
            U.prototype.getHeight = U.prototype.He;
            U.prototype.getWidth = U.prototype.Qe;
            U.prototype.getVastMediaHeight = U.prototype.Oe;
            U.prototype.getVastMediaWidth = U.prototype.Pe;
            U.prototype.getWrapperCreativeIds = U.prototype.Te;
            U.prototype.getWrapperAdIds = U.prototype.Re;
            U.prototype.getWrapperAdSystems = U.prototype.Se;
            U.prototype.getTraffickingParameters = U.prototype.Ke;
            U.prototype.getTraffickingParametersString = U.prototype.Fc;
            U.prototype.getAdPodInfo = U.prototype.Ae;
            U.prototype.getUiElements = U.prototype.Le;
            U.prototype.getMinSuggestedDuration = U.prototype.Ie;
            U.prototype.getMediaUrl = U.prototype.Ec;
            U.prototype.getSurveyUrl = U.prototype.Je;
            U.prototype.getDealId = U.prototype.Ge;
            U.prototype.getUniversalAdIdValue = U.prototype.Ne;
            U.prototype.getUniversalAdIdRegistry = U.prototype.Me;
            vo.prototype.getCuePoints = vo.prototype.g;
            t("google.ima.AdCuePoints.PREROLL", 0, window);
            t("google.ima.AdCuePoints.POSTROLL", -1, window);
            t("google.ima.AdDisplayContainer", Yp, window);
            Yp.prototype.initialize = Yp.prototype.U;
            Yp.prototype.destroy = Yp.prototype.M;
            an.prototype.getPodIndex = an.prototype.xe;
            an.prototype.getTimeOffset = an.prototype.ye;
            an.prototype.getTotalAds = an.prototype.ze;
            an.prototype.getMaxDuration = an.prototype.we;
            an.prototype.getAdPosition = an.prototype.ue;
            an.prototype.getIsBumper = an.prototype.ve;
            t("google.ima.AdError.ErrorCode.VIDEO_PLAY_ERROR", 400, window);
            t("google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS", 1005, window);
            t("google.ima.AdError.ErrorCode.REQUIRED_LISTENERS_NOT_ADDED", 900, window);
            t("google.ima.AdError.ErrorCode.VAST_LOAD_TIMEOUT", 301, window);
            t("google.ima.AdError.ErrorCode.VAST_NO_ADS_AFTER_WRAPPER", 303, window);
            t("google.ima.AdError.ErrorCode.VAST_MEDIA_LOAD_TIMEOUT", 402, window);
            t("google.ima.AdError.ErrorCode.VAST_TOO_MANY_REDIRECTS", 302, window);
            t("google.ima.AdError.ErrorCode.VAST_ASSET_MISMATCH", 403, window);
            t("google.ima.AdError.ErrorCode.VAST_LINEAR_ASSET_MISMATCH", 403, window);
            t("google.ima.AdError.ErrorCode.VAST_NONLINEAR_ASSET_MISMATCH", 503, window);
            t("google.ima.AdError.ErrorCode.VAST_ASSET_NOT_FOUND", 1007, window);
            t("google.ima.AdError.ErrorCode.VAST_UNSUPPORTED_VERSION", 102, window);
            t("google.ima.AdError.ErrorCode.VAST_SCHEMA_VALIDATION_ERROR", 101, window);
            t("google.ima.AdError.ErrorCode.VAST_TRAFFICKING_ERROR", 200, window);
            t("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_LINEARITY", 201, window);
            t("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_DURATION_ERROR", 202, window);
            t("google.ima.AdError.ErrorCode.VAST_WRAPPER_ERROR", 300, window);
            t("google.ima.AdError.ErrorCode.NONLINEAR_DIMENSIONS_ERROR", 501, window);
            t("google.ima.AdError.ErrorCode.COMPANION_REQUIRED_ERROR", 602, window);
            t("google.ima.AdError.ErrorCode.VAST_EMPTY_RESPONSE", 1009, window);
            t("google.ima.AdError.ErrorCode.UNSUPPORTED_LOCALE", 1011, window);
            t("google.ima.AdError.ErrorCode.INVALID_ADX_EXTENSION", 1105, window);
            t("google.ima.AdError.ErrorCode.INVALID_ARGUMENTS", 1101, window);
            t("google.ima.AdError.ErrorCode.UNKNOWN_AD_RESPONSE", 1010, window);
            t("google.ima.AdError.ErrorCode.UNKNOWN_ERROR", 900, window);
            t("google.ima.AdError.ErrorCode.OVERLAY_AD_PLAYING_FAILED", 500, window);
            t("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
            t("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
            t("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
            t("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
            t("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
            t("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
            t("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
            t("google.ima.AdError.Type.AD_LOAD", "adLoadError", window);
            t("google.ima.AdError.Type.AD_PLAY", "adPlayError", window);
            Le.prototype.getErrorCode = Le.prototype.qe;
            Le.prototype.getVastErrorCode = Le.prototype.Nd;
            Le.prototype.getInnerError = Le.prototype.re;
            Le.prototype.getMessage = Le.prototype.se;
            Le.prototype.getType = Le.prototype.te;
            t("google.ima.AdErrorEvent.Type.AD_ERROR", "adError", window);
            Pe.prototype.getError = Pe.prototype.G;
            Pe.prototype.getUserRequestContext = Pe.prototype.B;
            t("google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED", "contentResumeRequested", window);
            t("google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED", "contentPauseRequested", window);
            t("google.ima.AdEvent.Type.CLICK", "click", window);
            t("google.ima.AdEvent.Type.DURATION_CHANGE", "durationChange", window);
            t("google.ima.AdEvent.Type.EXPANDED_CHANGED", "expandedChanged", window);
            t("google.ima.AdEvent.Type.STARTED", "start", window);
            t("google.ima.AdEvent.Type.IMPRESSION", "impression", window);
            t("google.ima.AdEvent.Type.PAUSED", "pause", window);
            t("google.ima.AdEvent.Type.RESUMED", "resume", window);
            t("google.ima.AdEvent.Type.FIRST_QUARTILE", "firstquartile", window);
            t("google.ima.AdEvent.Type.MIDPOINT", "midpoint", window);
            t("google.ima.AdEvent.Type.THIRD_QUARTILE", "thirdquartile", window);
            t("google.ima.AdEvent.Type.COMPLETE", "complete", window);
            t("google.ima.AdEvent.Type.USER_CLOSE", "userClose", window);
            t("google.ima.AdEvent.Type.LINEAR_CHANGED", "linearChanged", window);
            t("google.ima.AdEvent.Type.LOADED", "loaded", window);
            t("google.ima.AdEvent.Type.AD_CAN_PLAY", "adCanPlay", window);
            t("google.ima.AdEvent.Type.AD_METADATA", "adMetadata", window);
            t("google.ima.AdEvent.Type.AD_BREAK_READY", "adBreakReady", window);
            t("google.ima.AdEvent.Type.INTERACTION", "interaction", window);
            t("google.ima.AdEvent.Type.ALL_ADS_COMPLETED", "allAdsCompleted", window);
            t("google.ima.AdEvent.Type.SKIPPED", "skip", window);
            t("google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED", "skippableStateChanged", window);
            t("google.ima.AdEvent.Type.LOG", "log", window);
            t("google.ima.AdEvent.Type.VIEWABLE_IMPRESSION", "viewable_impression", window);
            t("google.ima.AdEvent.Type.VOLUME_CHANGED", "volumeChange", window);
            t("google.ima.AdEvent.Type.VOLUME_MUTED", "mute", window);
            L.prototype.type = L.prototype.type;
            L.prototype.getAd = L.prototype.D;
            L.prototype.getAdData = L.prototype.F;
            yo.prototype.getAdCuePoints = yo.prototype.B;
            t("google.ima.AdsLoader", rq, window);
            rq.prototype.getSettings = rq.prototype.W;
            rq.prototype.requestAds = rq.prototype.Of;
            rq.prototype.contentComplete = rq.prototype.Mf;
            rq.prototype.destroy = rq.prototype.Nf;
            t("google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED", "adsManagerLoaded", window);
            oq.prototype.getAdsManager = oq.prototype.G;
            oq.prototype.getUserRequestContext = oq.prototype.D;
            oq.prototype.getResponse = oq.prototype.B;
            t("google.ima.CompanionAdSelectionSettings", yl, window);
            t("google.ima.CompanionAdSelectionSettings.CreativeType.IMAGE", "Image", void 0);
            t("google.ima.CompanionAdSelectionSettings.CreativeType.FLASH", "Flash", void 0);
            t("google.ima.CompanionAdSelectionSettings.CreativeType.ALL", "All", void 0);
            t("google.ima.CompanionAdSelectionSettings.ResourceType.HTML", "Html", void 0);
            t("google.ima.CompanionAdSelectionSettings.ResourceType.IFRAME", "IFrame", void 0);
            t("google.ima.CompanionAdSelectionSettings.ResourceType.STATIC", "Static", void 0);
            t("google.ima.CompanionAdSelectionSettings.ResourceType.ALL", "All", void 0);
            t("google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE", "IgnoreSize", void 0);
            t("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_EXACT_MATCH", "SelectExactMatch", void 0);
            t("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_NEAR_MATCH", "SelectNearMatch", void 0);
            t("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
            t("ima.ImaSdkSettings", O, window);
            t("google.ima.settings", M, window);
            O.prototype.setCompanionBackfill = O.prototype.vf;
            O.prototype.getCompanionBackfill = O.prototype.kf;
            O.prototype.setAutoPlayAdBreaks = O.prototype.uf;
            O.prototype.isAutoPlayAdBreak = O.prototype.sf;
            O.prototype.setPpid = O.prototype.Ef;
            O.prototype.getPpid = O.prototype.rf;
            O.prototype.setVpaidAllowed = O.prototype.Hf;
            O.prototype.setVpaidMode = O.prototype.If;
            O.prototype.setIsVpaidAdapter = O.prototype.zf;
            O.prototype.isVpaidAdapter = O.prototype.Wb;
            O.prototype.setRestrictToCustomPlayback = O.prototype.Ff;
            O.prototype.isRestrictToCustomPlayback = O.prototype.Sf;
            O.prototype.setNumRedirects = O.prototype.Af;
            O.prototype.getNumRedirects = O.prototype.nf;
            O.prototype.getLocale = O.prototype.Ld;
            O.prototype.setLocale = O.prototype.lg;
            O.prototype.getPlayerType = O.prototype.pf;
            O.prototype.setPlayerType = O.prototype.Cf;
            O.prototype.getDisableFlashAds = O.prototype.mf;
            O.prototype.setDisableFlashAds = O.prototype.xf;
            O.prototype.getPlayerVersion = O.prototype.qf;
            O.prototype.setPlayerVersion = O.prototype.Df;
            O.prototype.setPageCorrelator = O.prototype.Bf;
            O.prototype.setStreamCorrelator = O.prototype.Gf;
            O.prototype.setIsOutstreamVideo = O.prototype.yf;
            O.prototype.isOutstreamVideo = O.prototype.tf;
            O.prototype.setDisableCustomPlaybackForIOS10Plus = O.prototype.wf;
            O.prototype.getDisableCustomPlaybackForIOS10Plus = O.prototype.lf;
            t("google.ima.ImaSdkSettings.CompanionBackfillMode.ALWAYS", "always", void 0);
            t("google.ima.ImaSdkSettings.CompanionBackfillMode.ON_MASTER_AD", "on_master_ad", void 0);
            t("google.ima.ImaSdkSettings.VpaidMode.DISABLED", 0, void 0);
            t("google.ima.ImaSdkSettings.VpaidMode.ENABLED", 1, void 0);
            t("google.ima.ImaSdkSettings.VpaidMode.INSECURE", 2, void 0);
            t("google.ima.common.adTrackingMonitor", Sn, window);
            Fn.prototype.setActiveViewUseOsdGeometry = Fn.prototype.K;
            Fn.prototype.getActiveViewUseOsdGeometry = Fn.prototype.J;
            Fn.prototype.setBlockId = Fn.prototype.M;
            t("google.ima.AdsRenderingSettings", Ao, window);
            t("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
            t("google.ima.AdsRequest", Y, window);
            Y.prototype.adTagUrl = Y.prototype.adTagUrl;
            Y.prototype.adsResponse = Y.prototype.adsResponse;
            Y.prototype.nonLinearAdSlotHeight = Y.prototype.nonLinearAdSlotHeight;
            Y.prototype.nonLinearAdSlotWidth = Y.prototype.nonLinearAdSlotWidth;
            Y.prototype.linearAdSlotHeight = Y.prototype.linearAdSlotHeight;
            Y.prototype.linearAdSlotWidth = Y.prototype.linearAdSlotWidth;
            Y.prototype.setAdWillAutoPlay = Y.prototype.ac;
            Y.prototype.contentDuration = Y.prototype.contentDuration;
            Y.prototype.contentKeywords = Y.prototype.contentKeywords;
            Y.prototype.contentTitle = Y.prototype.contentTitle;
            Y.prototype.singleAdLoadTimeoutMs = Y.prototype.kc;
            t("google.ima.VERSION", "3.170.0", void 0);
            t("google.ima.UiElements.AD_ATTRIBUTION", "adAttribution", void 0);
            t("google.ima.UiElements.COUNTDOWN", "countdown", void 0);
            t("google.ima.ViewMode.NORMAL", "normal", void 0);
            t("google.ima.ViewMode.FULLSCREEN", "fullscreen", void 0);
            X.prototype.isCustomPlaybackUsed = X.prototype.Qf;
            X.prototype.isCustomClickTrackingUsed = X.prototype.Pf;
            X.prototype.destroy = X.prototype.Gc;
            X.prototype.init = X.prototype.cf;
            X.prototype.start = X.prototype.start;
            X.prototype.stop = X.prototype.hf;
            X.prototype.pause = X.prototype.df;
            X.prototype.resume = X.prototype.ff;
            X.prototype.getCuePoints = X.prototype.Ze;
            X.prototype.getCurrentAd = X.prototype.$e;
            X.prototype.getRemainingTime = X.prototype.af;
            X.prototype.expand = X.prototype.Xe;
            X.prototype.collapse = X.prototype.We;
            X.prototype.getAdSkippableState = X.prototype.Ye;
            X.prototype.resize = X.prototype.Hc;
            X.prototype.skip = X.prototype.gf;
            X.prototype.getVolume = X.prototype.bf;
            X.prototype.setVolume = X.prototype.Rb;
            X.prototype.discardAdBreak = X.prototype.Gd;
            X.prototype.requestNextAdBreak = X.prototype.kg;
            X.prototype.updateAdsRenderingSettings = X.prototype.jf;
            bn.prototype.getContent = bn.prototype.getContent;
            bn.prototype.getContentType = bn.prototype.A;
            bn.prototype.getHeight = bn.prototype.G;
            bn.prototype.getWidth = bn.prototype.B;
        })();

    }
})();