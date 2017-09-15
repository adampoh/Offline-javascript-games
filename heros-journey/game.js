(function(a, b) {
    function c(a, c, d) {
        if (d === b && 1 === a.nodeType)
            if (d = "data-" + c.replace(nc, "-$1").toLowerCase(), d = a.getAttribute(d), "string" == typeof d) {
                try { d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : oc.test(d) ? g.parseJSON(d) : d } catch (Md) {}
                g.data(a, c, d)
            } else d = b;
        return d
    }

    function d(a) {
        for (var b in a)
            if (!("data" === b && g.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function e() { return !1 }

    function f() { return !0 }

    function h(a) { return !a || !a.parentNode || 11 === a.parentNode.nodeType }

    function j(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a }

    function l(a, b, c) {
        b = b || 0;
        if (g.isFunction(b)) return g.grep(a, function(a, x) { return !!b.call(a, x, a) === c });
        if (b.nodeType) return g.grep(a, function(a) { return a === b === c });
        if ("string" == typeof b) {
            var d = g.grep(a, function(a) { return 1 === a.nodeType });
            if (qc.test(b)) return g.filter(b, d, !c);
            b = g.filter(b, d)
        }
        return g.grep(a, function(a) { return 0 <= g.inArray(a, b) === c })
    }

    function q(a) {
        var b = rb.split("|");
        a = a.createDocumentFragment();
        if (a.createElement)
            for (; b.length;) a.createElement(b.pop());
        return a
    }

    function m(a, b) {
        if (1 === b.nodeType && g.hasData(a)) {
            var c, d, e;
            d = g._data(a);
            var f = g._data(b, d),
                r = d.events;
            if (r)
                for (c in delete f.handle, f.events = {}, r) { d = 0; for (e = r[c].length; d < e; d++) g.event.add(b, c, r[c][d]) }
            f.data && (f.data = g.extend({}, f.data))
        }
    }

    function k(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), g.support.html5Clone && a.innerHTML && !g.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && sb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text), b.removeAttribute(g.expando))
    }

    function p(a) { return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : [] }

    function s(a) { sb.test(a.type) && (a.defaultChecked = a.checked) }

    function u(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, g = tb.length; g--;)
            if (b = tb[g] + c, b in a) return b;
        return d
    }

    function y(a, b) { return a = b || a, "none" === g.css(a, "display") || !g.contains(a.ownerDocument, a) }

    function v(a, b) {
        for (var c, d, e = [], f = 0, r = a.length; f < r; f++) c = a[f], c.style && (e[f] = g._data(c, "olddisplay"), b ? (!e[f] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && y(c) && (e[f] = g._data(c, "olddisplay", K(c.nodeName)))) : (d = L(c, "display"), !e[f] && "none" !== d && g._data(c, "olddisplay", d)));
        for (f = 0; f < r; f++)
            if (c = a[f], c.style && (!b || "none" === c.style.display || "" === c.style.display)) c.style.display = b ? e[f] || "" : "none";
        return a
    }

    function D(a, b, c) { return (a = rc.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b }

    function Sa(a, b, c, d) { b = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; for (var e = 0; 4 > b; b += 2) "margin" === c && (e += g.css(a, c + Z[b], !0)), d ? ("content" === c && (e -= parseFloat(L(a, "padding" + Z[b])) || 0), "margin" !== c && (e -= parseFloat(L(a, "border" + Z[b] + "Width")) || 0)) : (e += parseFloat(L(a, "padding" + Z[b])) || 0, "padding" !== c && (e += parseFloat(L(a, "border" + Z[b] + "Width")) || 0)); return e }

    function z(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight,
            e = !0,
            f = g.support.boxSizing && "border-box" === g.css(a, "boxSizing");
        if (0 >= d || null == d) {
            d = L(a, b);
            if (0 > d || null == d) d = a.style[b];
            if (ta.test(d)) return d;
            e = f && (g.support.boxSizingReliable || d === a.style[b]);
            d = parseFloat(d) || 0
        }
        return d + Sa(a, b, c || (f ? "border" : "content"), e) + "px"
    }

    function K(a) {
        if (Ta[a]) return Ta[a];
        var b = g("<" + a + ">").appendTo(t.body),
            c = b.css("display");
        b.remove();
        if ("none" === c || "" === c) {
            ga = t.body.appendChild(ga || g.extend(t.createElement("iframe"), { frameBorder: 0, width: 0, height: 0 }));
            if (!ha || !ga.createElement) ha = (ga.contentWindow || ga.contentDocument).document, ha.write("<!doctype html><html><body>"), ha.close();
            b = ha.body.appendChild(ha.createElement(a));
            c = L(b, "display");
            t.body.removeChild(ga)
        }
        return Ta[a] = c, c
    }

    function H(a, b, c, d) {
        var e;
        if (g.isArray(b)) g.each(b, function(b, C) { c || sc.test(a) ? d(a, C) : H(a + "[" + ("object" == typeof C ? b : "") + "]", C, c, d) });
        else if (!c && "object" === g.type(b))
            for (e in b) H(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }

    function ua(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e, f = b.toLowerCase().split(aa),
                r = 0,
                j = f.length;
            if (g.isFunction(c))
                for (; r < j; r++) d = f[r], (e = /^\+/.test(d)) && (d = d.substr(1) || "*"), d = a[d] = a[d] || [], d[e ? "unshift" : "push"](c)
        }
    }

    function ia(a, c, d, g, e, f) {
        e = e || c.dataTypes[0];
        f = f || {};
        f[e] = !0;
        var r;
        e = a[e];
        for (var j = 0, k = e ? e.length : 0, h = a === Ua; j < k && (h || !r); j++) r = e[j](c, d, g), "string" == typeof r && (!h || f[r] ? r = b : (c.dataTypes.unshift(r), r = ia(a, c, d, g, r, f)));
        return (h || !r) && !f["*"] && (r = ia(a, c, d, g, "*", f)), r
    }

    function na(a, c) {
        var d, e, f = g.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && g.extend(!0, a, e)
    }

    function ub() { try { return new a.XMLHttpRequest } catch (b) {} }

    function vb() { return setTimeout(function() { va = b }, 0), va = g.now() }

    function wb(a, b, c) {
        var d, e = 0,
            f = wa.length,
            r = g.Deferred().always(function() { delete j.elem }),
            j = function() { for (var b = va || vb(), b = Math.max(0, k.startTime + k.duration - b), c = 1 - (b / k.duration || 0), d = 0, C = k.tweens.length; d < C; d++) k.tweens[d].run(c); return r.notifyWith(a, [k, c, b]), 1 > c && C ? b : (r.resolveWith(a, [k]), !1) },
            k = r.promise({ elem: a, props: g.extend({}, b), opts: g.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: va || vb(), duration: c.duration, tweens: [], createTween: function(b, c) { var d = g.Tween(a, k.opts, b, c, k.opts.specialEasing[b] || k.opts.easing); return k.tweens.push(d), d }, stop: function(b) { for (var c = 0, d = b ? k.tweens.length : 0; c < d; c++) k.tweens[c].run(1); return b ? r.resolveWith(a, [k, b]) : r.rejectWith(a, [k, b]), this } });
        b = k.props;
        c = k.opts.specialEasing;
        var h, p, l, s;
        for (d in b)
            if (h = g.camelCase(d), p = c[h], l = b[d], g.isArray(l) && (p = l[1], l = b[d] = l[0]), d !== h && (b[h] = l, delete b[d]), (s = g.cssHooks[h]) && "expand" in s)
                for (d in l = s.expand(l), delete b[h], l) d in b || (b[d] = l[d], c[d] = p);
            else c[h] = p;
        for (; e < f; e++)
            if (d = wa[e].call(k, a, b, k.opts)) return d;
        var m = k;
        g.each(b, function(a, b) { for (var x = (oa[a] || []).concat(oa["*"]), c = 0, d = x.length; c < d && !x[c].call(m, a, b); c++); });
        return g.isFunction(k.opts.start) && k.opts.start.call(a, k), g.fx.timer(g.extend(j, { anim: k, queue: k.opts.queue, elem: a })), k.progress(k.opts.progress).done(k.opts.done, k.opts.complete).fail(k.opts.fail).always(k.opts.always)
    }

    function N(a, b, c, d, g) { return new N.prototype.init(a, b, c, d, g) }

    function xa(a, b) {
        var c, d = { height: a },
            g = 0;
        for (b = b ? 1 : 0; 4 > g; g += 2 - b) c = Z[g], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function xb(a) { return g.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }
    var yb, ya, t = a.document,
        uc = a.location,
        vc = a.navigator,
        wc = a.jQuery,
        xc = a.$,
        zb = Array.prototype.push,
        V = Array.prototype.slice,
        Ab = Array.prototype.indexOf,
        yc = Object.prototype.toString,
        Va = Object.prototype.hasOwnProperty,
        Wa = String.prototype.trim,
        g = function(a, b) { return new g.fn.init(a, b, yb) },
        za = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        zc = /\S/,
        aa = /\s+/,
        Ac = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Bc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Bb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Cc = /^[\],:{}\s]*$/,
        Dc = /(?:^|:|,)(?:\s*\[)+/g,
        Ec = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Fc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Gc = /^-ms-/,
        Hc = /-([\da-z])/gi,
        Ic = function(a, b) { return (b + "").toUpperCase() },
        Aa = function() { t.addEventListener ? (t.removeEventListener("DOMContentLoaded", Aa, !1), g.ready()) : "complete" === t.readyState && (t.detachEvent("onreadystatechange", Aa), g.ready()) },
        Cb = {};
    g.fn = g.prototype = {
        constructor: g,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
            if ("string" == typeof a) {
                "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? e = [null, a, null] : e = Bc.exec(a);
                if (e && (e[1] || !c)) {
                    if (e[1]) return c = c instanceof g ? c[0] : c, f = c && c.nodeType ? c.ownerDocument || c : t, a = g.parseHTML(e[1], f, !0), Bb.test(e[1]) && g.isPlainObject(c) && this.attr.call(a, c, !0), g.merge(this, a);
                    if ((c = t.getElementById(e[2])) && c.parentNode) {
                        if (c.id !== e[2]) return d.find(a);
                        this.length = 1;
                        this[0] = c
                    }
                    return this.context = t, this.selector = a, this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return g.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), g.makeArray(a, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() { return this.length },
        toArray: function() { return V.call(this) },
        get: function(a) { return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a] },
        pushStack: function(a, b, c) { a = g.merge(this.constructor(), a); return a.prevObject = this, a.context = this.context, "find" === b ? a.selector = this.selector + (this.selector ? " " : "") + c : b && (a.selector = this.selector + "." + b + "(" + c + ")"), a },
        each: function(a, b) { return g.each(this, a, b) },
        ready: function(a) { return g.ready.promise().done(a), this },
        eq: function(a) { return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        slice: function() { return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(",")) },
        map: function(a) { return this.pushStack(g.map(this, function(b, c) { return a.call(b, c, b) })) },
        end: function() { return this.prevObject || this.constructor(null) },
        push: zb,
        sort: [].sort,
        splice: [].splice
    };
    g.fn.init.prototype = g.fn;
    g.extend = g.fn.extend = function() {
        var a, c, d, e, f, G, r = arguments[0] || {},
            k = 1,
            j = arguments.length,
            h = !1;
        "boolean" == typeof r && (h = r, r = arguments[1] || {}, k = 2);
        "object" != typeof r && !g.isFunction(r) && (r = {});
        for (j === k && (r = this, --k); k < j; k++)
            if (null != (a = arguments[k]))
                for (c in a) d = r[c], e = a[c], r !== e && (h && e && (g.isPlainObject(e) || (f = g.isArray(e))) ? (f ? (f = !1, G = d && g.isArray(d) ? d : []) : G = d && g.isPlainObject(d) ? d : {}, r[c] = g.extend(h, G, e)) : e !== b && (r[c] = e));
        return r
    };
    g.extend({
        noConflict: function(b) { return a.$ === g && (a.$ = xc), b && a.jQuery === g && (a.jQuery = wc), g },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) { a ? g.readyWait++ : g.ready(!0) },
        ready: function(a) {
            if (!(!0 === a ? --g.readyWait : g.isReady)) {
                if (!t.body) return setTimeout(g.ready, 1);
                g.isReady = !0;
                !0 !== a && 0 < --g.readyWait || (ya.resolveWith(t, [g]), g.fn.trigger && g(t).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) { return "function" === g.type(a) },
        isArray: Array.isArray || function(a) { return "array" === g.type(a) },
        isWindow: function(a) { return null != a && a == a.window },
        isNumeric: function(a) { return !isNaN(parseFloat(a)) && isFinite(a) },
        type: function(a) { return null == a ? String(a) : Cb[yc.call(a)] || "object" },
        isPlainObject: function(a) { if (!a || "object" !== g.type(a) || a.nodeType || g.isWindow(a)) return !1; try { if (a.constructor && !Va.call(a, "constructor") && !Va.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } for (var d in a); return d === b || Va.call(a, d) },
        isEmptyObject: function(a) { for (var b in a) return !1; return !0 },
        error: function(a) { throw Error(a); },
        parseHTML: function(a, b, c) { var d; return !a || "string" != typeof a ? null : ("boolean" == typeof b && (c = b, b = 0), b = b || t, (d = Bb.exec(a)) ? [b.createElement(d[1])] : (d = g.buildFragment([a], b, c ? null : []), g.merge([], (d.cacheable ? g.clone(d.fragment) : d.fragment).childNodes))) },
        parseJSON: function(b) {
            if (!b || "string" != typeof b) return null;
            b = g.trim(b);
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
            if (Cc.test(b.replace(Ec, "@").replace(Fc, "]").replace(Dc, ""))) return (new Function("return " + b))();
            g.error("Invalid JSON: " + b)
        },
        parseXML: function(c) { var d, I; if (!c || "string" != typeof c) return null; try { a.DOMParser ? (I = new DOMParser, d = I.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c)) } catch (e) { d = b } return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && g.error("Invalid XML: " + c), d },
        noop: function() {},
        globalEval: function(b) { b && zc.test(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) },
        camelCase: function(a) { return a.replace(Gc, "ms-").replace(Hc, Ic) },
        nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
        each: function(a, c, d) {
            var e, f = 0,
                G = a.length,
                r = G === b || g.isFunction(a);
            if (d)
                if (r)
                    for (e in a) { if (!1 === c.apply(a[e], d)) break } else
                        for (; f < G && !1 !== c.apply(a[f++], d););
                else if (r)
                for (e in a) { if (!1 === c.call(a[e], e, a[e])) break } else
                    for (; f < G && !1 !== c.call(a[f], f, a[f++]););
            return a
        },
        trim: Wa && !Wa.call("\ufeff\u00a0") ? function(a) { return null == a ? "" : Wa.call(a) } : function(a) { return null == a ? "" : (a + "").replace(Ac, "") },
        makeArray: function(a, b) { var c, d = b || []; return null != a && (c = g.type(a), null == a.length || "string" === c || "function" === c || "regexp" === c || g.isWindow(a) ? zb.call(d, a) : g.merge(d, a)), d },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (Ab) return Ab.call(b, a, c);
                d = b.length;
                for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, c) {
            var d = c.length,
                g = a.length,
                e = 0;
            if ("number" == typeof d)
                for (; e < d; e++) a[g++] = c[e];
            else
                for (; c[e] !== b;) a[g++] = c[e++];
            return a.length = g, a
        },
        grep: function(a, b, c) {
            var d, g = [],
                e = 0,
                f = a.length;
            for (c = !!c; e < f; e++) d = !!b(a[e], e), c !== d && g.push(a[e]);
            return g
        },
        map: function(a, c, d) {
            var e, f, k = [],
                r = 0,
                j = a.length;
            if (a instanceof g || j !== b && "number" == typeof j && (0 < j && a[0] && a[j - 1] || 0 === j || g.isArray(a)))
                for (; r < j; r++) e = c(a[r], r, d), null != e && (k[k.length] = e);
            else
                for (f in a) e = c(a[f], f, d), null != e && (k[k.length] = e);
            return k.concat.apply([], k)
        },
        guid: 1,
        proxy: function(a, c) { var d, e, f; return "string" == typeof c && (d = a[c], c = a, a = d), g.isFunction(a) ? (e = V.call(arguments, 2), f = function() { return a.apply(c, e.concat(V.call(arguments))) }, f.guid = a.guid = a.guid || g.guid++, f) : b },
        access: function(a, c, d, e, f, k, r) {
            var j, h = null == d,
                p = 0,
                l = a.length;
            if (d && "object" == typeof d) {
                for (p in d) g.access(a, c, p, d[p], 1, k, e);
                f = 1
            } else if (e !== b) {
                j = r === b && g.isFunction(e);
                h && (j ? (j = c, c = function(a, b, c) { return j.call(g(a), c) }) : (c.call(a, e), c = null));
                if (c)
                    for (; p < l; p++) c(a[p], d, j ? e.call(a[p], p, c(a[p], d)) : e, r);
                f = 1
            }
            return f ? a : h ? c.call(a) : l ? c(a[0], d) : k
        },
        now: function() { return (new Date).getTime() }
    });
    g.ready.promise = function(b) {
        if (!ya)
            if (ya = g.Deferred(), "complete" === t.readyState) setTimeout(g.ready, 1);
            else if (t.addEventListener) t.addEventListener("DOMContentLoaded", Aa, !1), a.addEventListener("load", g.ready, !1);
        else {
            t.attachEvent("onreadystatechange", Aa);
            a.attachEvent("onload", g.ready);
            var c = !1;
            try { c = null == a.frameElement && t.documentElement } catch (d) {}
            c && c.doScroll && function pc() {
                if (!g.isReady) {
                    try { c.doScroll("left") } catch (a) { return setTimeout(pc, 50) }
                    g.ready()
                }
            }()
        }
        return ya.promise(b)
    };
    g.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) { Cb["[object " + b + "]"] = b.toLowerCase() });
    yb = g(t);
    var Db = {};
    g.Callbacks = function(a) {
        var c;
        if ("string" == typeof a) {
            if (!(c = Db[a])) {
                c = a;
                var d = Db[c] = {};
                c = (g.each(c.split(aa), function(a, b) { d[b] = !0 }), d)
            }
        } else c = g.extend({}, a);
        a = c;
        var e, f, k, r, j, h, p = [],
            l = !a.once && [],
            s = function(b) {
                e = a.memory && b;
                f = !0;
                h = r || 0;
                r = 0;
                j = p.length;
                for (k = !0; p && h < j; h++)
                    if (!1 === p[h].apply(b[0], b[1]) && a.stopOnFalse) { e = !1; break }
                k = !1;
                p && (l ? l.length && s(l.shift()) : e ? p = [] : m.disable())
            },
            m = {
                add: function() {
                    if (p) {
                        var b = p.length;
                        (function tc(b) { g.each(b, function(b, c) { var d = g.type(c); "function" === d && (!a.unique || !m.has(c)) ? p.push(c) : c && c.length && "string" !== d && tc(c) }) })(arguments);
                        k ? j = p.length : e && (r = b, s(e))
                    }
                    return this
                },
                remove: function() { return p && g.each(arguments, function(a, b) { for (var c; - 1 < (c = g.inArray(b, p, c));) p.splice(c, 1), k && (c <= j && j--, c <= h && h--) }), this },
                has: function(a) { return -1 < g.inArray(a, p) },
                empty: function() { return p = [], this },
                disable: function() { return p = l = e = b, this },
                disabled: function() { return !p },
                lock: function() { return l = b, e || m.disable(), this },
                locked: function() { return !l },
                fireWith: function(a, b) { return b = b || [], b = [a, b.slice ? b.slice() : b], p && (!f || l) && (k ? l.push(b) : s(b)), this },
                fire: function() { return m.fireWith(this, arguments), this },
                fired: function() { return !!f }
            };
        return m
    };
    g.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", g.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", g.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", g.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() { return c },
                    always: function() { return e.done(arguments).fail(arguments), this },
                    then: function() {
                        var a = arguments;
                        return g.Deferred(function(c) {
                            g.each(b, function(b, d) {
                                var x = d[0],
                                    C = a[b];
                                e[d[1]](g.isFunction(C) ? function() {
                                    var a = C.apply(this, arguments);
                                    a && g.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[x + "With"](this === e ? c : this, [a])
                                } : c[x])
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) { return null != a ? g.extend(a, d) : d }
                },
                e = {};
            return d.pipe = d.then, g.each(b, function(a, x) {
                var g = x[2],
                    f = x[3];
                d[x[1]] = g.add;
                f && g.add(function() { c = f }, b[a ^ 1][2].disable, b[2][2].lock);
                e[x[0]] = g.fire;
                e[x[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = V.call(arguments),
                d = c.length,
                e = 1 !== d || a && g.isFunction(a.promise) ? d : 0,
                f = 1 === e ? a : g.Deferred(),
                r = function(a, b, c) {
                    return function(d) {
                        b[a] = this;
                        c[a] = 1 < arguments.length ? V.call(arguments) : d;
                        c === k ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                    }
                },
                k, j, h;
            if (1 < d) {
                k = Array(d);
                j = Array(d);
                for (h = Array(d); b < d; b++) c[b] && g.isFunction(c[b].promise) ? c[b].promise().done(r(b, h, c)).fail(f.reject).progress(r(b, j, k)) : --e
            }
            return e || f.resolveWith(h, c), f.promise()
        }
    });
    var Jc = g,
        Xa;
    var J, Ba, ba, Ca, Da, O, ca, Ea, Ya, pa, Eb, E = t.createElement("div");
    E.setAttribute("className", "t");
    E.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ba = E.getElementsByTagName("*");
    ba = E.getElementsByTagName("a")[0];
    ba.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ba || !Ba.length) Xa = {};
    else {
        Ca = t.createElement("select");
        Da = Ca.appendChild(t.createElement("option"));
        O = E.getElementsByTagName("input")[0];
        J = { leadingWhitespace: 3 === E.firstChild.nodeType, tbody: !E.getElementsByTagName("tbody").length, htmlSerialize: !!E.getElementsByTagName("link").length, style: /top/.test(ba.getAttribute("style")), hrefNormalized: "/a" === ba.getAttribute("href"), opacity: /^0.5/.test(ba.style.opacity), cssFloat: !!ba.style.cssFloat, checkOn: "on" === O.value, optSelected: Da.selected, getSetAttribute: "t" !== E.className, enctype: !!t.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== t.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === t.compatMode, submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 };
        O.checked = !0;
        J.noCloneChecked = O.cloneNode(!0).checked;
        Ca.disabled = !0;
        J.optDisabled = !Da.disabled;
        try { delete E.test } catch (Nd) { J.deleteExpando = !1 }!E.addEventListener && E.attachEvent && E.fireEvent && (E.attachEvent("onclick", Eb = function() { J.noCloneEvent = !1 }), E.cloneNode(!0).fireEvent("onclick"), E.detachEvent("onclick", Eb));
        O = t.createElement("input");
        O.value = "t";
        O.setAttribute("type", "radio");
        J.radioValue = "t" === O.value;
        O.setAttribute("checked", "checked");
        O.setAttribute("name", "t");
        E.appendChild(O);
        ca = t.createDocumentFragment();
        ca.appendChild(E.lastChild);
        J.checkClone = ca.cloneNode(!0).cloneNode(!0).lastChild.checked;
        J.appendChecked = O.checked;
        ca.removeChild(O);
        ca.appendChild(E);
        if (E.attachEvent)
            for (Ya in { submit: !0, change: !0, focusin: !0 }) Ea = "on" + Ya, (pa = Ea in E) || (E.setAttribute(Ea, "return;"), pa = "function" == typeof E[Ea]), J[Ya + "Bubbles"] = pa;
        Xa = (g(function() {
            var b, c, d, e, g = t.getElementsByTagName("body")[0];
            g && (b = t.createElement("div"), b.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", g.insertBefore(b, g.firstChild), c = t.createElement("div"), b.appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d = c.getElementsByTagName("td"), d[0].style.cssText = "padding:0;margin:0;border:0;display:none", pa = 0 === d[0].offsetHeight, d[0].style.display = "", d[1].style.display = "none", J.reliableHiddenOffsets = pa && 0 === d[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", J.boxSizing = 4 === c.offsetWidth, J.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop, a.getComputedStyle && (J.pixelPosition = "1%" !== (a.getComputedStyle(c, null) || {}).top, J.boxSizingReliable = "4px" === (a.getComputedStyle(c, null) || { width: "4px" }).width, e = t.createElement("div"), e.style.cssText = c.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", e.style.marginRight = e.style.width = "0", c.style.width = "1px", c.appendChild(e), J.reliableMarginRight = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)), "undefined" != typeof c.style.zoom && (c.innerHTML = "", c.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", J.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.style.overflow = "visible", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", J.shrinkWrapBlocks = 3 !== c.offsetWidth, b.style.zoom = 1), g.removeChild(b))
        }), ca.removeChild(E), Ba = ba = Ca = Da = O = ca = E = null, J)
    }
    Jc.support = Xa;
    var oc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        nc = /([A-Z])/g;
    g.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (g.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
        hasData: function(a) { return a = a.nodeType ? g.cache[a[g.expando]] : a[g.expando], !!a && !d(a) },
        data: function(a, c, d, e) {
            if (g.acceptData(a)) {
                var f, k, r = g.expando,
                    j = "string" == typeof c,
                    h = a.nodeType,
                    p = h ? g.cache : a,
                    l = h ? a[r] : a[r] && r;
                if (l && p[l] && (e || p[l].data) || !(j && d === b)) {
                    l || (h ? a[r] = l = g.deletedIds.pop() || g.guid++ : l = r);
                    p[l] || (p[l] = {}, h || (p[l].toJSON = g.noop));
                    if ("object" == typeof c || "function" == typeof c) e ? p[l] = g.extend(p[l], c) : p[l].data = g.extend(p[l].data, c);
                    return f = p[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[g.camelCase(c)] = d), j ? (k = f[c], null == k && (k = f[g.camelCase(c)])) : k = f, k
                }
            }
        },
        removeData: function(a, b, c) {
            if (g.acceptData(a)) {
                var e, f, k, r = a.nodeType,
                    j = r ? g.cache : a,
                    h = r ? a[g.expando] : g.expando;
                if (j[h]) {
                    if (b && (e = c ? j[h] : j[h].data)) {
                        g.isArray(b) || (b in e ? b = [b] : (b = g.camelCase(b), b in e ? b = [b] : b = b.split(" ")));
                        f = 0;
                        for (k = b.length; f < k; f++) delete e[b[f]];
                        if (!(c ? d : g.isEmptyObject)(e)) return
                    }
                    if (!c && (delete j[h].data, !d(j[h]))) return;
                    r ? g.cleanData([a], !0) : g.support.deleteExpando || j != j.window ? delete j[h] : j[h] = null
                }
            }
        },
        _data: function(a, b, c) { return g.data(a, b, c, !0) },
        acceptData: function(a) { var b = a.nodeName && g.noData[a.nodeName.toLowerCase()]; return !b || !0 !== b && a.getAttribute("classid") === b }
    });
    g.fn.extend({
        data: function(a, d) {
            var e, f, k, j, r, h = this[0],
                p = 0,
                l = null;
            if (a === b) {
                if (this.length && (l = g.data(h), 1 === h.nodeType && !g._data(h, "parsedAttrs"))) {
                    k = h.attributes;
                    for (r = k.length; p < r; p++) j = k[p].name, j.indexOf("data-") || (j = g.camelCase(j.substring(5)), c(h, j, l[j]));
                    g._data(h, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof a ? this.each(function() { g.data(this, a) }) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", g.access(this, function(d) {
                if (d === b) return l = this.triggerHandler("getData" + f, [e[0]]), l === b && h && (l = g.data(h, a), l = c(h, a, l)), l === b && e[1] ? this.data(e[0]) : l;
                e[1] = d;
                this.each(function() {
                    var b = g(this);
                    b.triggerHandler("setData" + f, e);
                    g.data(this, a, d);
                    b.triggerHandler("changeData" +
                        f, e)
                })
            }, null, d, 1 < arguments.length, null, !1))
        },
        removeData: function(a) { return this.each(function() { g.removeData(this, a) }) }
    });
    g.extend({
        queue: function(a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = g._data(a, b), c && (!d || g.isArray(c) ? d = g._data(a, b, g.makeArray(c)) : d.push(c)), d || [] },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = g.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = g._queueHooks(a, b),
                r = function() { g.dequeue(a, b) };
            "inprogress" === e && (e = c.shift(), d--);
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, r, f));
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return g._data(a, c) || g._data(a, c, {
                empty: g.Callbacks("once memory").add(function() {
                    g.removeData(a, b + "queue", !0);
                    g.removeData(a, c, !0)
                })
            })
        }
    });
    g.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? g.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = g.queue(this, a, c);
                g._queueHooks(this, a);
                "fx" === a && "inprogress" !== b[0] && g.dequeue(this, a)
            })
        },
        dequeue: function(a) { return this.each(function() { g.dequeue(this, a) }) },
        delay: function(a, b) {
            return a = g.fx ? g.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() { clearTimeout(d) }
            })
        },
        clearQueue: function(a) { return this.queue(a || "fx", []) },
        promise: function(a, c) {
            var d, e = 1,
                f = g.Deferred(),
                k = this,
                r = this.length,
                j = function() {--e || f.resolveWith(k, [k]) };
            "string" != typeof a && (c = a, a = b);
            for (a = a || "fx"; r--;)(d = g._data(k[r], a + "queueHooks")) && d.empty && (e++, d.empty.add(j));
            return j(), f.promise(c)
        }
    });
    var W, Fb, Gb, Hb = /[\t\r\n]/g,
        Kc = /\r/g,
        Lc = /^(?:button|input)$/i,
        Mc = /^(?:button|input|object|select|textarea)$/i,
        Nc = /^a(?:rea|)$/i,
        Ib = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Jb = g.support.getSetAttribute;
    g.fn.extend({
        attr: function(a, b) { return g.access(this, g.attr, a, b, 1 < arguments.length) },
        removeAttr: function(a) { return this.each(function() { g.removeAttr(this, a) }) },
        prop: function(a, b) { return g.access(this, g.prop, a, b, 1 < arguments.length) },
        removeProp: function(a) { return a = g.propFix[a] || a, this.each(function() { try { this[a] = b, delete this[a] } catch (c) {} }) },
        addClass: function(a) {
            var b, c, d, e, f, r, k;
            if (g.isFunction(a)) return this.each(function(b) { g(this).addClass(a.call(this, b, this.className)) });
            if (a && "string" == typeof a) {
                b = a.split(aa);
                c = 0;
                for (d = this.length; c < d; c++)
                    if (e = this[c], 1 === e.nodeType)
                        if (!e.className && 1 === b.length) e.className = a;
                        else {
                            f = " " + e.className + " ";
                            r = 0;
                            for (k = b.length; r < k; r++) 0 > f.indexOf(" " + b[r] + " ") && (f += b[r] + " ");
                            e.className = g.trim(f)
                        }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, k, r, j;
            if (g.isFunction(a)) return this.each(function(b) { g(this).removeClass(a.call(this, b, this.className)) });
            if (a && "string" == typeof a || a === b) {
                c = (a || "").split(aa);
                r = 0;
                for (j = this.length; r < j; r++)
                    if (e = this[r], 1 === e.nodeType && e.className) {
                        d = (" " + e.className + " ").replace(Hb, " ");
                        f = 0;
                        for (k = c.length; f < k; f++)
                            for (; 0 <= d.indexOf(" " + c[f] + " ");) d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? g.trim(d) : ""
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return g.isFunction(a) ? this.each(function(c) { g(this).toggleClass(a.call(this, c, this.className, b), b) }) : this.each(function() {
                if ("string" === c)
                    for (var e, f = 0, r = g(this), k = b, j = a.split(aa); e = j[f++];) k = d ? k : !r.hasClass(e), r[k ? "addClass" : "removeClass"](e);
                else if ("undefined" === c || "boolean" === c) this.className && g._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : g._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0, c = this.length; b < c; b++)
                if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Hb, " ").indexOf(a)) return !0;
            return !1
        },
        val: function(a) { var c, d, e, f = this[0]; if (arguments.length) return e = g.isFunction(a), this.each(function(d) { var f, I = g(this); if (1 === this.nodeType && (e ? f = a.call(this, d, I.val()) : f = a, null == f ? f = "" : "number" == typeof f ? f += "" : g.isArray(f) && (f = g.map(f, function(a) { return null == a ? "" : a + "" })), c = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()], !c || !("set" in c) || c.set(this, f, "value") === b)) this.value = f }); if (f) return c = g.valHooks[f.type] || g.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(Kc, "") : null == d ? "" : d) }
    });
    g.extend({
        valHooks: {
            option: { get: function(a) { var b = a.attributes.value; return !b || b.specified ? a.value : a.text } },
            select: {
                get: function(a) {
                    var b, c, d = a.selectedIndex,
                        e = [],
                        f = a.options,
                        r = "select-one" === a.type;
                    if (0 > d) return null;
                    a = r ? d : 0;
                    for (c = r ? d + 1 : f.length; a < c; a++)
                        if (b = f[a], b.selected && (g.support.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !g.nodeName(b.parentNode, "optgroup"))) {
                            b = g(b).val();
                            if (r) return b;
                            e.push(b)
                        }
                    return r && !e.length && f.length ? g(f[d]).val() : e
                },
                set: function(a, b) { var c = g.makeArray(b); return g(a).find("option").each(function() { this.selected = 0 <= g.inArray(g(this).val(), c) }), c.length || (a.selectedIndex = -1), c }
            }
        },
        attrFn: {},
        attr: function(a, c, d, e) {
            var f, k, r = a.nodeType;
            if (a && !(3 === r || 8 === r || 2 === r)) {
                if (e && g.isFunction(g.fn[c])) return g(a)[c](d);
                if ("undefined" == typeof a.getAttribute) return g.prop(a, c, d);
                (e = 1 !== r || !g.isXMLDoc(a)) && (c = c.toLowerCase(), k = g.attrHooks[c] || (Ib.test(c) ? Fb : W));
                if (d !== b) { if (null === d) { g.removeAttr(a, c); return } return k && "set" in k && e && (f = k.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) }
                return k && "get" in k && e && null !== (f = k.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f)
            }
        },
        removeAttr: function(a, b) {
            var c, d, e, f, k = 0;
            if (b && 1 === a.nodeType)
                for (d = b.split(aa); k < d.length; k++)(e = d[k]) && (c = g.propFix[e] || e, f = Ib.test(e), f || g.attr(a, e, ""), a.removeAttribute(Jb ? e : c), f && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (Lc.test(a.nodeName) && a.parentNode) g.error("type property can't be changed");
                    else if (!g.support.radioValue && "radio" === b && g.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b }
                }
            },
            value: {
                get: function(a, b) { return W && g.nodeName(a, "button") ? W.get(a, b) : b in a ? a.value : null },
                set: function(a, b, c) {
                    if (W && g.nodeName(a, "button")) return W.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
        prop: function(a, c, d) { var e, f, k, r = a.nodeType; if (a && !(3 === r || 8 === r || 2 === r)) return k = 1 !== r || !g.isXMLDoc(a), k && (c = g.propFix[c] || c, f = g.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c] },
        propHooks: { tabIndex: { get: function(a) { var c = a.getAttributeNode("tabindex"); return c && c.specified ? parseInt(c.value, 10) : Mc.test(a.nodeName) || Nc.test(a.nodeName) && a.href ? 0 : b } } }
    });
    Fb = { get: function(a, c) { var d, e = g.prop(a, c); return !0 === e || "boolean" != typeof e && (d = a.getAttributeNode(c)) && !1 !== d.nodeValue ? c.toLowerCase() : b }, set: function(a, b, c) { var d; return !1 === b ? g.removeAttr(a, c) : (d = g.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c } };
    Jb || (Gb = { name: !0, id: !0, coords: !0 }, W = g.valHooks.button = { get: function(a, c) { var d; return d = a.getAttributeNode(c), d && (Gb[c] ? "" !== d.value : d.specified) ? d.value : b }, set: function(a, b, c) { var d = a.getAttributeNode(c); return d || (d = t.createAttribute(c), a.setAttributeNode(d)), d.value = b + "" } }, g.each(["width", "height"], function(a, b) { g.attrHooks[b] = g.extend(g.attrHooks[b], { set: function(a, c) { if ("" === c) return a.setAttribute(b, "auto"), c } }) }), g.attrHooks.contenteditable = {
        get: W.get,
        set: function(a, b, c) {
            "" === b && (b = "false");
            W.set(a, b, c)
        }
    });
    g.support.hrefNormalized || g.each(["href", "src", "width", "height"], function(a, c) { g.attrHooks[c] = g.extend(g.attrHooks[c], { get: function(a) { a = a.getAttribute(c, 2); return null === a ? b : a } }) });
    g.support.style || (g.attrHooks.style = { get: function(a) { return a.style.cssText.toLowerCase() || b }, set: function(a, b) { return a.style.cssText = b + "" } });
    g.support.optSelected || (g.propHooks.selected = g.extend(g.propHooks.selected, { get: function(a) { a = a.parentNode; return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null } }));
    g.support.enctype || (g.propFix.enctype = "encoding");
    g.support.checkOn || g.each(["radio", "checkbox"], function() { g.valHooks[this] = { get: function(a) { return null === a.getAttribute("value") ? "on" : a.value } } });
    g.each(["radio", "checkbox"], function() { g.valHooks[this] = g.extend(g.valHooks[this], { set: function(a, b) { if (g.isArray(b)) return a.checked = 0 <= g.inArray(g(a).val(), b) } }) });
    var Za = /^(?:textarea|input|select)$/i,
        Kb = /^([^\.]*|)(?:\.(.+)|)$/,
        Oc = /(?:^|\s)hover(\.\S+|)\b/,
        Pc = /^key/,
        Qc = /^(?:mouse|contextmenu)|click/,
        Lb = /^(?:focusinfocus|focusoutblur)$/,
        Mb = function(a) { return g.event.special.hover ? a : a.replace(Oc, "mouseenter$1 mouseleave$1") };
    g.event = {
        add: function(a, c, d, e, f) {
            var k, r, j, h, p, l, s, m, q;
            if (!(3 === a.nodeType || 8 === a.nodeType || !c || !d || !(k = g._data(a)))) {
                d.handler && (s = d, d = s.handler, f = s.selector);
                d.guid || (d.guid = g.guid++);
                (j = k.events) || (k.events = j = {});
                (r = k.handle) || (k.handle = r = function(a) { return "undefined" != typeof g && (!a || g.event.triggered !== a.type) ? g.event.dispatch.apply(r.elem, arguments) : b }, r.elem = a);
                c = g.trim(Mb(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    h = Kb.exec(c[k]) || [];
                    p = h[1];
                    l = (h[2] || "").split(".").sort();
                    q = g.event.special[p] || {};
                    p = (f ? q.delegateType : q.bindType) || p;
                    q = g.event.special[p] || {};
                    h = g.extend({ type: p, origType: h[1], data: e, handler: d, guid: d.guid, selector: f, needsContext: f && g.expr.match.needsContext.test(f), namespace: l.join(".") }, s);
                    m = j[p];
                    if (!m && (m = j[p] = [], m.delegateCount = 0, !q.setup || !1 === q.setup.call(a, e, l, r))) a.addEventListener ? a.addEventListener(p, r, !1) : a.attachEvent && a.attachEvent("on" + p, r);
                    q.add && (q.add.call(a, h), h.handler.guid || (h.handler.guid = d.guid));
                    f ? m.splice(m.delegateCount++, 0, h) : m.push(h);
                    g.event.global[p] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var f, k, j, h, p, l, s, m, q, u, y = g.hasData(a) && g._data(a);
            if (y && (s = y.events)) {
                b = g.trim(Mb(b || "")).split(" ");
                for (f = 0; f < b.length; f++)
                    if (k = Kb.exec(b[f]) || [], j = h = k[1], k = k[2], j) {
                        m = g.event.special[j] || {};
                        j = (d ? m.delegateType : m.bindType) || j;
                        q = s[j] || [];
                        p = q.length;
                        k = k ? RegExp("(^|\\.)" + k.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (l = 0; l < q.length; l++) u = q[l], (e || h === u.origType) && (!c || c.guid === u.guid) && (!k || k.test(u.namespace)) && (!d || d === u.selector || "**" === d && u.selector) && (q.splice(l--, 1), u.selector && q.delegateCount--, m.remove && m.remove.call(a, u));
                        0 === q.length && p !== q.length && ((!m.teardown || !1 === m.teardown.call(a, k, y.handle)) && g.removeEvent(a, j, y.handle), delete s[j])
                    } else
                        for (j in s) g.event.remove(a, j + b[f], c, d, !0);
                g.isEmptyObject(s) && (delete y.handle, g.removeData(a, "events", !0))
            }
        },
        customEvent: { getData: !0, setData: !0, changeData: !0 },
        trigger: function(c, d, e, f) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var k, j, r, h, p, l, s, m = c.type || c;
                h = [];
                if (!Lb.test(m + g.event.triggered) && (0 <= m.indexOf("!") && (m = m.slice(0, -1), k = !0), 0 <= m.indexOf(".") && (h = m.split("."), m = h.shift(), h.sort()), e && !g.event.customEvent[m] || g.event.global[m]))
                    if (c = "object" == typeof c ? c[g.expando] ? c : new g.Event(m, c) : new g.Event(m), c.type = m, c.isTrigger = !0, c.exclusive = k, c.namespace = h.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = 0 > m.indexOf(":") ? "on" + m : "", e) {
                        if (c.result = b, c.target || (c.target = e), d = null != d ? g.makeArray(d) : [], d.unshift(c), p = g.event.special[m] || {}, !(p.trigger && !1 === p.trigger.apply(e, d))) {
                            s = [
                                [e, p.bindType || m]
                            ];
                            if (!f && !p.noBubble && !g.isWindow(e)) {
                                j = p.delegateType || m;
                                k = Lb.test(j + m) ? e : e.parentNode;
                                for (r = e; k; k = k.parentNode) s.push([k, j]), r = k;
                                r === (e.ownerDocument || t) && s.push([r.defaultView || r.parentWindow || a, j])
                            }
                            for (j = 0; j < s.length && !c.isPropagationStopped(); j++) k = s[j][0], c.type = s[j][1], (l = (g._data(k, "events") || {})[c.type] && g._data(k, "handle")) && l.apply(k, d), (l = h && k[h]) && g.acceptData(k) && l.apply && !1 === l.apply(k, d) && c.preventDefault();
                            return c.type = m, !f && !c.isDefaultPrevented() && (!p._default || !1 === p._default.apply(e.ownerDocument, d)) && ("click" !== m || !g.nodeName(e, "a")) && g.acceptData(e) && h && e[m] && ("focus" !== m && "blur" !== m || 0 !== c.target.offsetWidth) && !g.isWindow(e) && (r = e[h], r && (e[h] = null), g.event.triggered = m, e[m](), g.event.triggered = b, r && (e[h] = r)), c.result
                        }
                    } else
                        for (j in e = g.cache, e) e[j].events && e[j].events[m] && g.event.trigger(c, d, e[j].handle.elem, !0)
            }
        },
        dispatch: function(c) {
            c = g.event.fix(c || a.event);
            var d, e, f, k, j, r, h = (g._data(this, "events") || {})[c.type] || [],
                p = h.delegateCount,
                l = V.call(arguments),
                s = !c.exclusive && !c.namespace,
                m = g.event.special[c.type] || {},
                q = [];
            l[0] = c;
            c.delegateTarget = this;
            if (!(m.preDispatch && !1 === m.preDispatch.call(this, c))) {
                if (p && (!c.button || "click" !== c.type))
                    for (e = c.target; e != this; e = e.parentNode || this)
                        if (!0 !== e.disabled || "click" !== c.type) {
                            k = {};
                            j = [];
                            for (d = 0; d < p; d++) f = h[d], r = f.selector, k[r] === b && (k[r] = f.needsContext ? 0 <= g(r, this).index(e) : g.find(r, this, null, [e]).length), k[r] && j.push(f);
                            j.length && q.push({ elem: e, matches: j })
                        }
                h.length > p && q.push({ elem: this, matches: h.slice(p) });
                for (d = 0; d < q.length && !c.isPropagationStopped(); d++) {
                    k = q[d];
                    c.currentTarget = k.elem;
                    for (e = 0; e < k.matches.length && !c.isImmediatePropagationStopped(); e++)
                        if (f = k.matches[e], s || !c.namespace && !f.namespace || c.namespace_re && c.namespace_re.test(f.namespace)) c.data = f.data, c.handleObj = f, f = ((g.event.special[f.origType] || {}).handle || f.handler).apply(k.elem, l), f !== b && (c.result = f, !1 === f && (c.preventDefault(), c.stopPropagation()))
                }
                return m.postDispatch && m.postDispatch.call(this, c), c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: ["char", "charCode", "key", "keyCode"], filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, g, f = c.button,
                    k = c.fromElement;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || t, e = d.documentElement, g = d.body, a.pageX = c.clientX + (e && e.scrollLeft || g && g.scrollLeft || 0) - (e && e.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || g && g.scrollTop || 0) - (e && e.clientTop || g && g.clientTop || 0)), !a.relatedTarget && k && (a.relatedTarget = k === a.target ? c.toElement : k), !a.which && f !== b && (a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[g.expando]) return a;
            var b, c, d = a,
                e = g.event.fixHooks[a.type] || {},
                f = e.props ? this.props.concat(e.props) : this.props;
            a = g.Event(d);
            for (b = f.length; b;) c = f[--b], a[c] = d[c];
            return a.target || (a.target = d.srcElement || t), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, d) : a
        },
        special: { load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function(a, b, c) { g.isWindow(this) && (this.onbeforeunload = c) }, teardown: function(a, b) { this.onbeforeunload === b && (this.onbeforeunload = null) } } },
        simulate: function(a, b, c, d) {
            a = g.extend(new g.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? g.event.trigger(a, null, b) : g.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    g.event.handle = g.event.dispatch;
    g.removeEvent = t.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function(a, b, c) {
        b = "on" + b;
        a.detachEvent && ("undefined" == typeof a[b] && (a[b] = null), a.detachEvent(b, c))
    };
    g.Event = function(a, b) {
        if (this instanceof g.Event) a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? f : e) : this.type = a, b && g.extend(this, b), this.timeStamp = a && a.timeStamp || g.now(), this[g.expando] = !0;
        else return new g.Event(a, b)
    };
    g.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = f;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = f;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = f;
            this.stopPropagation()
        },
        isDefaultPrevented: e,
        isPropagationStopped: e,
        isImmediatePropagationStopped: e
    };
    g.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(a, b) {
        g.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = a.relatedTarget,
                    x = a.handleObj;
                if (!d || d !== this && !g.contains(this, d)) a.type = x.origType, c = x.handler.apply(this, arguments), a.type = b;
                return c
            }
        }
    });
    g.support.submitBubbles || (g.event.special.submit = {
        setup: function() {
            if (g.nodeName(this, "form")) return !1;
            g.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = g.nodeName(a, "input") || g.nodeName(a, "button") ? a.form : b) && !g._data(a, "_submit_attached") && (g.event.add(a, "submit._submit", function(a) { a._submit_bubble = !0 }), g._data(a, "_submit_attached", !0))
            })
        },
        postDispatch: function(a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && g.event.simulate("submit", this.parentNode, a, !0)) },
        teardown: function() {
            if (g.nodeName(this, "form")) return !1;
            g.event.remove(this, "._submit")
        }
    });
    g.support.changeBubbles || (g.event.special.change = {
        setup: function() {
            if (Za.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) g.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), g.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1);
                    g.event.simulate("change", this, a, !0)
                });
                return !1
            }
            g.event.add(this, "beforeactivate._change", function(a) {
                a = a.target;
                Za.test(a.nodeName) && !g._data(a, "_change_attached") && (g.event.add(a, "change._change", function(a) { this.parentNode && !a.isSimulated && !a.isTrigger && g.event.simulate("change", this.parentNode, a, !0) }), g._data(a, "_change_attached", !0))
            })
        },
        handle: function(a) { var b = a.target; if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments) },
        teardown: function() { return g.event.remove(this, "._change"), !Za.test(this.nodeName) }
    });
    g.support.focusinBubbles || g.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = 0,
            d = function(a) { g.event.simulate(b, a.target, g.event.fix(a), !0) };
        g.event.special[b] = { setup: function() { 0 === c++ && t.addEventListener(a, d, !0) }, teardown: function() { 0 === --c && t.removeEventListener(a, d, !0) } }
    });
    g.fn.extend({
        on: function(a, c, d, f, k) {
            var j, r;
            if ("object" == typeof a) { "string" != typeof c && (d = d || c, c = b); for (r in a) this.on(r, c, d, a[r], k); return this }
            null == d && null == f ? (f = c, d = c = b) : null == f && ("string" == typeof c ? (f = d, d = b) : (f = d, d = c, c = b));
            if (!1 === f) f = e;
            else if (!f) return this;
            return 1 === k && (j = f, f = function(a) { return g().off(a), j.apply(this, arguments) }, f.guid = j.guid || (j.guid = g.guid++)), this.each(function() { g.event.add(this, a, f, d, c) })
        },
        one: function(a, b, c, d) { return this.on(a, b, c, d, 1) },
        off: function(a, c, d) { var f, k; if (a && a.preventDefault && a.handleObj) return f = a.handleObj, g(a.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this; if ("object" == typeof a) { for (k in a) this.off(k, c, a[k]); return this } if (!1 === c || "function" == typeof c) d = c, c = b; return !1 === d && (d = e), this.each(function() { g.event.remove(this, a, d, c) }) },
        bind: function(a, b, c) { return this.on(a, null, b, c) },
        unbind: function(a, b) { return this.off(a, null, b) },
        live: function(a, b, c) { return g(this.context).on(a, this.selector, b, c), this },
        die: function(a, b) { return g(this.context).off(a, this.selector || "**", b), this },
        delegate: function(a, b, c, d) { return this.on(b, a, c, d) },
        undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) },
        trigger: function(a, b) { return this.each(function() { g.event.trigger(a, b, this) }) },
        triggerHandler: function(a, b) { if (this[0]) return g.event.trigger(a, b, this[0], !0) },
        toggle: function(a) {
            var b = arguments,
                c = a.guid || g.guid++,
                d = 0,
                e = function(c) { var e = (g._data(this, "lastToggle" + a.guid) || 0) % d; return g._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1 };
            for (e.guid = c; d < b.length;) b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) }
    });
    g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        g.fn[b] = function(a, c) { return null == c && (c = a, a = null), 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b) };
        Pc.test(b) && (g.event.fixHooks[b] = g.event.keyHooks);
        Qc.test(b) && (g.event.fixHooks[b] = g.event.mouseHooks)
    });
    var Rc = a,
        w = function(a, b, c, d) {
            c = c || [];
            b = b || S;
            var e, g, f, k, j = b.nodeType;
            if (!a || "string" != typeof a) return c;
            if (1 !== j && 9 !== j) return [];
            f = Fa(b);
            if (!f && !d && (e = Sc.exec(a)))
                if (k = e[1])
                    if (9 === j) { g = b.getElementById(k); if (!g || !g.parentNode) return c; if (g.id === k) return c.push(g), c } else { if (b.ownerDocument && (g = b.ownerDocument.getElementById(k)) && Nb(b, g) && g.id === k) return c.push(g), c }
            else { if (e[2]) return ja.apply(c, ka.call(b.getElementsByTagName(a), 0)), c; if ((k = e[3]) && Ob && b.getElementsByClassName) return ja.apply(c, ka.call(b.getElementsByClassName(k), 0)), c }
            return $a(a.replace(Ga, "$1"), b, c, d, f)
        },
        qa = function(a) { return function(b) { return "input" === b.nodeName.toLowerCase() && b.type === a } },
        Pb = function(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } },
        da = function(a) { return T(function(b) { return b = +b, T(function(c, d) { for (var e, g = a([], c.length, b), f = g.length; f--;) c[e = g[f]] && (c[e] = !(d[e] = c[e])) }) }) },
        Ha = function(a, b, c) {
            if (a === b) return c;
            for (a = a.nextSibling; a;) {
                if (a === b) return -1;
                a = a.nextSibling
            }
            return 1
        },
        Ja = function(a, b) {
            var c, d, e, g, f, k, j;
            if (f = Qb[A][a]) return b ? 0 : f.slice(0);
            f = a;
            k = [];
            for (j = F.preFilter; f;) {
                if (!c || (d = Tc.exec(f))) d && (f = f.slice(d[0].length)), k.push(e = []);
                c = !1;
                if (d = Uc.exec(f)) e.push(c = new Rb(d.shift())), f = f.slice(c.length), c.type = d[0].replace(Ga, " ");
                for (g in F.filter)(d = Ia[g].exec(f)) && (!j[g] || (d = j[g](d, S, !0))) && (e.push(c = new Rb(d.shift())), f = f.slice(c.length), c.type = g, c.matches = d);
                if (!c) break
            }
            return b ? f.length : f ? w.error(a) : Qb(a, k).slice(0)
        },
        bb = function(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === b.dir,
                g = Vc++;
            return b.first ? function(b, c, g) {
                for (; b = b[d];)
                    if (e || 1 === b.nodeType) return a(b, c, g)
            } : function(b, c, f) {
                if (f)
                    for (; b = b[d];) { if ((e || 1 === b.nodeType) && a(b, c, f)) return b } else
                        for (var C, k = ra + " " + g + " ", j = k + ab; b = b[d];)
                            if (e || 1 === b.nodeType) {
                                if ((C = b[A]) === j) return b.sizset;
                                if ("string" == typeof C && 0 === C.indexOf(k)) { if (b.sizset) return b } else {
                                    b[A] = j;
                                    if (a(b, c, f)) return b.sizset = !0, b;
                                    b.sizset = !1
                                }
                            }
            }
        },
        cb = function(a) {
            return 1 < a.length ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        },
        Ka = function(a, b, c, d, e) {
            for (var g, f = [], k = 0, j = a.length, h = null != b; k < j; k++)
                if (g = a[k])
                    if (!c || c(g, d, e)) f.push(g), h && b.push(k);
            return f
        },
        db = function(a, b, c, d, e, g) {
            return d && !d[A] && (d = db(d)), e && !e[A] && (e = db(e, g)), T(function(g, f, k, j) {
                if (!g || !e) {
                    var h, p, l = [],
                        s = [],
                        m = f.length;
                    if (!(p = g)) {
                        p = b || "*";
                        var G = k.nodeType ? [k] : k,
                            q = [];
                        h = 0;
                        for (var u = G.length; h < u; h++) w(p, G[h], q, g);
                        p = q
                    }
                    G = a && (g || !b) ? Ka(p, l, a, k, j) : p;
                    q = c ? e || (g ? a : m || d) ? [] : f : G;
                    c && c(G, q, k, j);
                    if (d) {
                        p = Ka(q, s);
                        d(p, [], k, j);
                        for (k = p.length; k--;)
                            if (h = p[k]) q[s[k]] = !(G[s[k]] = h)
                    }
                    if (g)
                        for (k = a && q.length; k--;) { if (h = q[k]) g[l[k]] = !(f[l[k]] = h) } else q = Ka(q === f ? q.splice(m, q.length) : q), e ? e(null, f, q, j) : ja.apply(f, q)
                }
            })
        },
        eb = function(a) {
            var b, c, d, e = a.length,
                g = F.relative[a[0].type];
            c = g || F.relative[" "];
            for (var f = g ? 1 : 0, k = bb(function(a) { return a === b }, c, !0), j = bb(function(a) { return -1 < Sb.call(b, a) }, c, !0), h = [function(a, c, d) { return !g && (d || c !== La) || ((b = c).nodeType ? k(a, c, d) : j(a, c, d)) }]; f < e; f++)
                if (c = F.relative[a[f].type]) h = [bb(cb(h), c)];
                else {
                    c = F.filter[a[f].type].apply(null, a[f].matches);
                    if (c[A]) { for (d = ++f; d < e && !F.relative[a[d].type]; d++); return db(1 < f && cb(h), 1 < f && a.slice(0, f - 1).join("").replace(Ga, "$1"), c, f < d && eb(a.slice(f, d)), d < e && eb(a = a.slice(d)), d < e && a.join("")) }
                    h.push(c)
                }
            return cb(h)
        },
        $a = function(a, b, c, d, e) {
            var g, f, k, j, h = Ja(a);
            if (!d && 1 === h.length) {
                f = h[0] = h[0].slice(0);
                if (2 < f.length && "ID" === (k = f[0]).type && 9 === b.nodeType && !e && F.relative[f[1].type]) {
                    b = F.find.ID(k.matches[0].replace(ea, ""), b, e)[0];
                    if (!b) return c;
                    a = a.slice(f.shift().length)
                }
                for (g = Ia.POS.test(a) ? -1 : f.length - 1; 0 <= g; g--) {
                    k = f[g];
                    if (F.relative[j = k.type]) break;
                    if (j = F.find[j])
                        if (d = j(k.matches[0].replace(ea, ""), fb.test(f[0].type) && b.parentNode || b, e)) {
                            f.splice(g, 1);
                            a = d.length && f.join("");
                            if (!a) return ja.apply(c, ka.call(d, 0)), c;
                            break
                        }
                }
            }
            return gb(a, h)(d, b, e, c, fb.test(a)), c
        },
        Tb = function() {},
        ab, hb, F, Ma, Fa, Nb, gb, ib, sa, La, Ub = !0,
        A = ("sizcache" + Math.random()).replace(".", ""),
        Rb = String,
        S = Rc.document,
        R = S.documentElement,
        ra = 0,
        Vc = 0,
        Wc = [].pop,
        ja = [].push,
        ka = [].slice,
        Sb = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (this[b] === a) return b;
            return -1
        },
        T = function(a, b) { return a[A] = null == b || b, a },
        jb = function() {
            var a = {},
                b = [];
            return T(function(c, d) { return b.push(c) > F.cacheLength && delete a[b.shift()], a[c] = d }, a)
        },
        Vb = jb(),
        Qb = jb(),
        Wb = jb(),
        Xb = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        kb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + Xb + ")|[^:]|\\\\.)*|.*))\\)|)",
        Ga = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Tc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Uc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        Xc = RegExp(kb),
        Sc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        fb = /[\x20\t\r\n\f]*[+~]/,
        Yc = /h\d/i,
        Zc = /input|select|textarea|button/i,
        ea = /\\(?!\\)/g,
        Ia = { ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/, NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/, TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"), ATTR: RegExp("^" + Xb), PSEUDO: RegExp("^" + kb), POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i, CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i") },
        X = function(a) { var b = S.createElement("div"); try { return a(b) } catch (c) { return !1 } finally {} },
        $c = X(function(a) { return a.appendChild(S.createComment("")), !a.getElementsByTagName("*").length }),
        ad = X(function(a) { return a.innerHTML = "<a href='#'></a>", a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" === a.firstChild.getAttribute("href") }),
        bd = X(function(a) {
            a.innerHTML = "<select></select>";
            a = typeof a.lastChild.getAttribute("multiple");
            return "boolean" !== a && "string" !== a
        }),
        Ob = X(function(a) { return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) }),
        cd = X(function(a) {
            a.id = A + 0;
            a.innerHTML = "<a name='" + A + "'></a><div name='" + A + "'></div>";
            R.insertBefore(a, R.firstChild);
            var b = S.getElementsByName && S.getElementsByName(A).length === 2 + S.getElementsByName(A + 0).length;
            return hb = !S.getElementById(A), R.removeChild(a), b
        });
    try { ka.call(R.childNodes, 0)[0].nodeType } catch (Od) { ka = function(a) { for (var b, c = []; b = this[a]; a++) c.push(b); return c } }
    w.matches = function(a, b) { return w(a, null, null, b) };
    w.matchesSelector = function(a, b) { return 0 < w(b, null, null, [a]).length };
    Ma = w.getText = function(a) {
        var b, c = "",
            d = 0;
        if (b = a.nodeType)
            if (1 === b || 9 === b || 11 === b) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += Ma(a) } else { if (3 === b || 4 === b) return a.nodeValue }
        else
            for (; b = a[d]; d++) c += Ma(b);
        return c
    };
    Fa = w.isXML = function(a) { return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1 };
    Nb = w.contains = R.contains ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || !(1 === d.nodeType && c.contains && c.contains(d)))
    } : R.compareDocumentPosition ? function(a, b) { return b && !!(a.compareDocumentPosition(b) & 16) } : function(a, b) {
        for (; b = b.parentNode;)
            if (b === a) return !0;
        return !1
    };
    w.attr = function(a, b) { var c, d = Fa(a); return d || (b = b.toLowerCase()), (c = F.attrHandle[b]) ? c(a) : d || bd ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? "boolean" == typeof a[b] ? a[b] ? b : null : c.specified ? c.value : null : null) };
    F = w.selectors = {
        cacheLength: 50,
        createPseudo: T,
        match: Ia,
        attrHandle: ad ? {} : { href: function(a) { return a.getAttribute("href", 2) }, type: function(a) { return a.getAttribute("type") } },
        find: { ID: hb ? function(a, b, c) { if ("undefined" !== typeof b.getElementById && !c) return (a = b.getElementById(a)) && a.parentNode ? [a] : [] } : function(a, b, c) { if ("undefined" !== typeof b.getElementById && !c) return (b = b.getElementById(a)) ? b.id === a || "undefined" !== typeof b.getAttributeNode && b.getAttributeNode("id").value === a ? [b] : void 0 : [] }, TAG: $c ? function(a, b) { if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a) } : function(a, b) { var c = b.getElementsByTagName(a); if ("*" === a) { for (var d, e = [], g = 0; d = c[g]; g++) 1 === d.nodeType && e.push(d); return e } return c }, NAME: cd && function(a, b) { if ("undefined" !== typeof b.getElementsByName) return b.getElementsByName(name) }, CLASS: Ob && function(a, b, c) { if ("undefined" !== typeof b.getElementsByClassName && !c) return b.getElementsByClassName(a) } },
        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
        preFilter: {
            ATTR: function(a) { return a[1] = a[1].replace(ea, ""), a[3] = (a[4] || a[5] || "").replace(ea, ""), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) },
            CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1] ? (a[2] || w.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && w.error(a[0]), a },
            PSEUDO: function(a) {
                var b, c;
                if (Ia.CHILD.test(a[0])) return null;
                if (a[3]) a[2] = a[3];
                else if (b = a[4]) Xc.test(b) && (c = Ja(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b;
                return a.slice(0, 3)
            }
        },
        filter: {
            ID: hb ? function(a) {
                return a = a.replace(ea, ""),
                    function(b) { return b.getAttribute("id") === a }
            } : function(a) {
                return a = a.replace(ea, ""),
                    function(b) { return (b = "undefined" !== typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === a }
            },
            TAG: function(a) { return "*" === a ? function() { return !0 } : (a = a.replace(ea, "").toLowerCase(), function(b) { return b.nodeName && b.nodeName.toLowerCase() === a }) },
            CLASS: function(a) {
                var b = Vb[A][a];
                return b || (b = Vb(a, RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(a) { return b.test(a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "") }
            },
            ATTR: function(a, b, c) { return function(d) { d = w.attr(d, a); return null == d ? "!=" === b : b ? (d += "", "=" === b ? d === c : "!=" === b ? d !== c : "^=" === b ? c && 0 === d.indexOf(c) : "*=" === b ? c && -1 < d.indexOf(c) : "$=" === b ? c && d.substr(d.length - c.length) === c : "~=" === b ? -1 < (" " + d + " ").indexOf(c) : "|=" === b ? d === c || d.substr(0, c.length + 1) === c + "-" : !1) : !0 } },
            CHILD: function(a, b, c, d) {
                return "nth" === a ? function(a) {
                    var b, e;
                    b = a.parentNode;
                    if (1 === c && 0 === d) return !0;
                    if (b) { e = 0; for (b = b.firstChild; b && !(1 === b.nodeType && (e++, a === b)); b = b.nextSibling); }
                    return e -= d, e === c || 0 === e % c && 0 <= e / c
                } : function(b) {
                    var c = b;
                    switch (a) {
                        case "only":
                        case "first":
                            for (; c = c.previousSibling;)
                                if (1 === c.nodeType) return !1;
                            if ("first" === a) return !0;
                            c = b;
                        case "last":
                            for (; c = c.nextSibling;)
                                if (1 === c.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(a, b) { var c, d = F.pseudos[a] || F.setFilters[a.toLowerCase()] || w.error("unsupported pseudo: " + a); return d[A] ? d(b) : 1 < d.length ? (c = [a, a, "", b], F.setFilters.hasOwnProperty(a.toLowerCase()) ? T(function(a, c) { for (var e, g = d(a, b), f = g.length; f--;) e = Sb.call(a, g[f]), a[e] = !(c[e] = g[f]) }) : function(a) { return d(a, 0, c) }) : d }
        },
        pseudos: {
            not: T(function(a) {
                var b = [],
                    c = [],
                    d = gb(a.replace(Ga, "$1"));
                return d[A] ? T(function(a, b, c, e) {
                    e = d(a, null, e, []);
                    for (var g = a.length; g--;)
                        if (c = e[g]) a[g] = !(b[g] = c)
                }) : function(a, e, g) { return b[0] = a, d(b, null, g, c), !c.pop() }
            }),
            has: T(function(a) { return function(b) { return 0 < w(a, b).length } }),
            contains: T(function(a) { return function(b) { return -1 < (b.textContent || b.innerText || Ma(b)).indexOf(a) } }),
            enabled: function(a) { return !1 === a.disabled },
            disabled: function(a) { return !0 === a.disabled },
            checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
            selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected },
            parent: function(a) { return !F.pseudos.empty(a) },
            empty: function(a) {
                var b;
                for (a = a.firstChild; a;) {
                    if ("@" < a.nodeName || 3 === (b = a.nodeType) || 4 === b) return !1;
                    a = a.nextSibling
                }
                return !0
            },
            header: function(a) { return Yc.test(a.nodeName) },
            text: function(a) { var b, c; return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b) },
            radio: qa("radio"),
            checkbox: qa("checkbox"),
            file: qa("file"),
            password: qa("password"),
            image: qa("image"),
            submit: Pb("submit"),
            reset: Pb("reset"),
            button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
            input: function(a) { return Zc.test(a.nodeName) },
            focus: function(a) { var b = a.ownerDocument; return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href) },
            active: function(a) { return a === a.ownerDocument.activeElement },
            first: da(function() { return [0] }),
            last: da(function(a, b) { return [b - 1] }),
            eq: da(function(a, b, c) { return [0 > c ? c + b : c] }),
            even: da(function(a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }),
            odd: da(function(a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }),
            lt: da(function(a, b, c) { for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b); return a }),
            gt: da(function(a, b, c) { for (c = 0 > c ? c + b : c; ++c < b;) a.push(c); return a })
        }
    };
    ib = R.compareDocumentPosition ? function(a, b) { return a === b ? (sa = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1 } : function(a, b) {
        if (a === b) return sa = !0, 0;
        if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
        var c, d, e = [],
            g = [];
        c = a.parentNode;
        d = b.parentNode;
        var f = c;
        if (c === d) return Ha(a, b);
        if (!c) return -1;
        if (!d) return 1;
        for (; f;) e.unshift(f), f = f.parentNode;
        for (f = d; f;) g.unshift(f), f = f.parentNode;
        c = e.length;
        d = g.length;
        for (f = 0; f < c && f < d; f++)
            if (e[f] !== g[f]) return Ha(e[f], g[f]);
        return f === c ? Ha(a, g[f], -1) : Ha(e[f], b, 1)
    };
    [0, 0].sort(ib);
    Ub = !sa;
    w.uniqueSort = function(a) {
        var b, c = 1;
        sa = Ub;
        a.sort(ib);
        if (sa)
            for (; b = a[c]; c++) b === a[c - 1] && a.splice(c--, 1);
        return a
    };
    w.error = function(a) { throw Error("Syntax error, unrecognized expression: " + a); };
    gb = w.compile = function(a, b) {
        var c, d = [],
            e = [],
            g = Wb[A][a];
        if (!g) {
            b || (b = Ja(a));
            for (c = b.length; c--;) g = eb(b[c]), g[A] ? d.push(g) : e.push(g);
            var f = 0 < d.length,
                k = 0 < e.length,
                j = function(a, b, c, g, x) {
                    var h, C, p = [],
                        l = 0,
                        I = "0",
                        s = a && [],
                        m = null != x,
                        q = La,
                        G = a || k && F.find.TAG("*", x && b.parentNode || b),
                        u = ra += null == q ? 1 : Math.E;
                    for (m && (La = b !== S && b, ab = j.el); null != (x = G[I]); I++) {
                        if (k && x) {
                            for (h = 0; C = e[h]; h++)
                                if (C(x, b, c)) { g.push(x); break }
                            m && (ra = u, ab = ++j.el)
                        }
                        f && ((x = !C && x) && l--, a && s.push(x))
                    }
                    l += I;
                    if (f && I !== l) {
                        for (h = 0; C = d[h]; h++) C(s, p, b, c);
                        if (a) {
                            if (0 < l)
                                for (; I--;) !s[I] && !p[I] && (p[I] = Wc.call(g));
                            p = Ka(p)
                        }
                        ja.apply(g, p);
                        m && !a && 0 < p.length && 1 < l + d.length && w.uniqueSort(g)
                    }
                    return m && (ra = u, La = q), s
                };
            c = (j.el = 0, f ? T(j) : j);
            g = Wb(a, c)
        }
        return g
    };
    if (S.querySelectorAll) {
        var Yb, dd = $a,
            ed = /'|\\/g,
            fd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            U = [":focus"],
            Na = [":active", ":focus"],
            Oa = R.matchesSelector || R.mozMatchesSelector || R.webkitMatchesSelector || R.oMatchesSelector || R.msMatchesSelector;
        X(function(a) {
            a.innerHTML = "<select><option selected=''></option></select>";
            a.querySelectorAll("[selected]").length || U.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            a.querySelectorAll(":checked").length || U.push(":checked")
        });
        X(function(a) {
            a.innerHTML = "<p test=''></p>";
            a.querySelectorAll("[test^='']").length && U.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            a.innerHTML = "<input type='hidden'/>";
            a.querySelectorAll(":enabled").length || U.push(":enabled", ":disabled")
        });
        U = RegExp(U.join("|"));
        $a = function(a, b, c, d, e) {
            if (!d && !e && (!U || !U.test(a))) {
                var g, f, k = !0,
                    j = A;
                f = b;
                g = 9 === b.nodeType && a;
                if (1 === b.nodeType && "object" !== b.nodeName.toLowerCase()) {
                    g = Ja(a);
                    (k = b.getAttribute("id")) ? j = k.replace(ed, "\\$&"): b.setAttribute("id", j);
                    j = "[id='" + j + "'] ";
                    for (f = g.length; f--;) g[f] = j + g[f].join("");
                    f = fb.test(a) && b.parentNode || b;
                    g = g.join(",")
                }
                if (g) try { return ja.apply(c, ka.call(f.querySelectorAll(g), 0)), c } catch (h) {} finally { k || b.removeAttribute("id") }
            }
            return dd(a, b, c, d, e)
        };
        Oa && (X(function(a) { Yb = Oa.call(a, "div"); try { Oa.call(a, "[test!='']:sizzle"), Na.push("!=", kb) } catch (b) {} }), Na = RegExp(Na.join("|")), w.matchesSelector = function(a, b) {
            b = b.replace(fd, "='$1']");
            if (!Fa(a) && !Na.test(b) && (!U || !U.test(b))) try { var c = Oa.call(a, b); if (c || Yb || a.document && 11 !== a.document.nodeType) return c } catch (d) {}
            return 0 < w(b, null, null, [a]).length
        })
    }
    F.pseudos.nth = F.pseudos.eq;
    F.filters = Tb.prototype = F.pseudos;
    F.setFilters = new Tb;
    w.attr = g.attr;
    g.find = w;
    g.expr = w.selectors;
    g.expr[":"] = g.expr.pseudos;
    g.unique = w.uniqueSort;
    g.text = w.getText;
    g.isXMLDoc = w.isXML;
    g.contains = w.contains;
    var gd = /Until$/,
        hd = /^(?:parents|prev(?:Until|All))/,
        qc = /^.[^:#\[\.,]*$/,
        Zb = g.expr.match.needsContext,
        jd = { children: !0, contents: !0, next: !0, prev: !0 };
    g.fn.extend({
        find: function(a) {
            var b, c, d, e, f, k, j = this;
            if ("string" != typeof a) return g(a).filter(function() {
                b = 0;
                for (c = j.length; b < c; b++)
                    if (g.contains(j[b], this)) return !0
            });
            k = this.pushStack("", "find", a);
            b = 0;
            for (c = this.length; b < c; b++)
                if (d = k.length, g.find(a, this[b], k), 0 < b)
                    for (e = d; e < k.length; e++)
                        for (f = 0; f < d; f++)
                            if (k[f] === k[e]) { k.splice(e--, 1); break }
            return k
        },
        has: function(a) {
            var b, c = g(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++)
                    if (g.contains(this, c[b])) return !0
            })
        },
        not: function(a) { return this.pushStack(l(this, a, !1), "not", a) },
        filter: function(a) { return this.pushStack(l(this, a, !0), "filter", a) },
        is: function(a) { return !!a && ("string" == typeof a ? Zb.test(a) ? 0 <= g(a, this.context).index(this[0]) : 0 < g.filter(a, this).length : 0 < this.filter(a).length) },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], k = Zb.test(a) || "string" != typeof a ? g(a, b || this.context) : 0; d < e; d++)
                for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                    if (k ? -1 < k.index(c) : g.find.matchesSelector(c, a)) { f.push(c); break }
                    c = c.parentNode
                }
            return f = 1 < f.length ? g.unique(f) : f, this.pushStack(f, "closest", a)
        },
        index: function(a) { return a ? "string" == typeof a ? g.inArray(this[0], g(a)) : g.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1 },
        add: function(a, b) {
            var c = "string" == typeof a ? g(a, b) : g.makeArray(a && a.nodeType ? [a] : a),
                d = g.merge(this.get(), c);
            return this.pushStack(h(c[0]) || h(d[0]) ? d : g.unique(d))
        },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    });
    g.fn.andSelf = g.fn.addBack;
    g.each({ parent: function(a) { return (a = a.parentNode) && 11 !== a.nodeType ? a : null }, parents: function(a) { return g.dir(a, "parentNode") }, parentsUntil: function(a, b, c) { return g.dir(a, "parentNode", c) }, next: function(a) { return j(a, "nextSibling") }, prev: function(a) { return j(a, "previousSibling") }, nextAll: function(a) { return g.dir(a, "nextSibling") }, prevAll: function(a) { return g.dir(a, "previousSibling") }, nextUntil: function(a, b, c) { return g.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return g.dir(a, "previousSibling", c) }, siblings: function(a) { return g.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) { return g.sibling(a.firstChild) }, contents: function(a) { return g.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : g.merge([], a.childNodes) } }, function(a, b) { g.fn[a] = function(c, d) { var e = g.map(this, b, c); return gd.test(a) || (d = c), d && "string" == typeof d && (e = g.filter(d, e)), e = 1 < this.length && !jd[a] ? g.unique(e) : e, 1 < this.length && hd.test(a) && (e = e.reverse()), this.pushStack(e, a, V.call(arguments).join(",")) } });
    g.extend({ filter: function(a, b, c) { return c && (a = ":not(" + a + ")"), 1 === b.length ? g.find.matchesSelector(b[0], a) ? [b[0]] : [] : g.find.matches(a, b) }, dir: function(a, c, d) { var e = []; for (a = a[c]; a && 9 !== a.nodeType && (d === b || 1 !== a.nodeType || !g(a).is(d));) 1 === a.nodeType && e.push(a), a = a[c]; return e }, sibling: function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c } });
    var rb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        kd = / jQuery\d+="(?:null|\d+)"/g,
        lb = /^\s+/,
        $b = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ac = /<([\w:]+)/,
        ld = /<tbody/i,
        md = /<|&#?\w+;/,
        nd = /<(?:script|style|link)/i,
        od = /<(?:script|object|embed|option|style)/i,
        mb = RegExp("<(?:" + rb + ")[\\s/>]", "i"),
        sb = /^(?:checkbox|radio)$/,
        bc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pd = /\/(java|ecma)script/i,
        qd = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Q = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] },
        cc = q(t),
        nb = cc.appendChild(t.createElement("div"));
    Q.optgroup = Q.option;
    Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead;
    Q.th = Q.td;
    g.support.htmlSerialize || (Q._default = [1, "X<div>", "</div>"]);
    g.fn.extend({
        text: function(a) { return g.access(this, function(a) { return a === b ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || t).createTextNode(a)) }, null, a, arguments.length) },
        wrapAll: function(a) {
            if (g.isFunction(a)) return this.each(function(b) { g(this).wrapAll(a.call(this, b)) });
            if (this[0]) {
                var b = g(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() { for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild; return a }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return g.isFunction(a) ? this.each(function(b) { g(this).wrapInner(a.call(this, b)) }) : this.each(function() {
                var b = g(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) { var b = g.isFunction(a); return this.each(function(c) { g(this).wrapAll(b ? a.call(this, c) : a) }) },
        unwrap: function() { return this.parent().each(function() { g.nodeName(this, "body") || g(this).replaceWith(this.childNodes) }).end() },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() { if (!h(this[0])) return this.domManip(arguments, !1, function(a) { this.parentNode.insertBefore(a, this) }); if (arguments.length) { var a = g.clean(arguments); return this.pushStack(g.merge(a, this), "before", this.selector) } },
        after: function() { if (!h(this[0])) return this.domManip(arguments, !1, function(a) { this.parentNode.insertBefore(a, this.nextSibling) }); if (arguments.length) { var a = g.clean(arguments); return this.pushStack(g.merge(this, a), "after", this.selector) } },
        remove: function(a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)
                if (!a || g.filter(a, [c]).length) !b && 1 === c.nodeType && (g.cleanData(c.getElementsByTagName("*")), g.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                for (1 === a.nodeType && g.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return g.clone(this, a, b) }) },
        html: function(a) {
            return g.access(this, function(a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(kd, "") : b;
                if ("string" == typeof a && !nd.test(a) && (g.support.htmlSerialize || !mb.test(a)) && (g.support.leadingWhitespace || !lb.test(a)) && !Q[(ac.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace($b, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {}, 1 === c.nodeType && (g.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function(a) {
            return h(this[0]) ? this.length ? this.pushStack(g(g.isFunction(a) ? a() : a), "replaceWith", a) : this : g.isFunction(a) ? this.each(function(b) {
                var c = g(this),
                    d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = g(a).detach()), this.each(function() {
                var b = this.nextSibling,
                    c = this.parentNode;
                g(this).remove();
                b ? g(b).before(a) : g(c).append(a)
            }))
        },
        detach: function(a) { return this.remove(a, !0) },
        domManip: function(a, c, d) {
            a = [].concat.apply([], a);
            var e, f, k, j = 0,
                h = a[0],
                p = [],
                l = this.length;
            if (!g.support.checkClone && 1 < l && "string" == typeof h && bc.test(h)) return this.each(function() { g(this).domManip(a, c, d) });
            if (g.isFunction(h)) return this.each(function(e) {
                var f = g(this);
                a[0] = h.call(this, e, c ? f.html() : b);
                f.domManip(a, c, d)
            });
            if (this[0]) {
                e = g.buildFragment(a, this, p);
                k = e.fragment;
                f = k.firstChild;
                1 === k.childNodes.length && (k = f);
                if (f) { c = c && g.nodeName(f, "tr"); for (e = e.cacheable || l - 1; j < l; j++) d.call(c && g.nodeName(this[j], "table") ? this[j].getElementsByTagName("tbody")[0] || this[j].appendChild(this[j].ownerDocument.createElement("tbody")) : this[j], j === e ? k : g.clone(k, !0, !0)) }
                k = f = null;
                p.length && g.each(p, function(a, b) {
                    b.src ? g.ajax ? g.ajax({ url: b.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : g.error("no ajax") : g.globalEval((b.text || b.textContent || b.innerHTML || "").replace(qd, ""));
                    b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    });
    g.buildFragment = function(a, c, d) { var e, f, k, j = a[0]; return c = c || t, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, 1 === a.length && "string" == typeof j && 512 > j.length && c === t && "<" === j.charAt(0) && !od.test(j) && (g.support.checkClone || !bc.test(j)) && (g.support.html5Clone || !mb.test(j)) && (f = !0, e = g.fragments[j], k = e !== b), e || (e = c.createDocumentFragment(), g.clean(a, c, e, d), f && (g.fragments[j] = k && e)), { fragment: e, cacheable: f } };
    g.fragments = {};
    g.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) {
        g.fn[a] = function(c) {
            var d, e = 0,
                f = [];
            c = g(c);
            var k = c.length;
            d = 1 === this.length && this[0].parentNode;
            if ((null == d || d && 11 === d.nodeType && 1 === d.childNodes.length) && 1 === k) return c[b](this[0]), this;
            for (; e < k; e++) d = (0 < e ? this.clone(!0) : this).get(), g(c[e])[b](d), f = f.concat(d);
            return this.pushStack(f, a, c.selector)
        }
    });
    g.extend({
        clone: function(a, b, c) {
            var d, e, f, j;
            g.support.html5Clone || g.isXMLDoc(a) || !mb.test("<" + a.nodeName + ">") ? j = a.cloneNode(!0) : (nb.innerHTML = a.outerHTML, nb.removeChild(j = nb.firstChild));
            if ((!g.support.noCloneEvent || !g.support.noCloneChecked) && (1 === a.nodeType || 11 === a.nodeType) && !g.isXMLDoc(a)) {
                k(a, j);
                d = p(a);
                e = p(j);
                for (f = 0; d[f]; ++f) e[f] && k(d[f], e[f])
            }
            if (b && (m(a, j), c)) {
                d = p(a);
                e = p(j);
                for (f = 0; d[f]; ++f) m(d[f], e[f])
            }
            return j
        },
        clean: function(a, b, c, d) {
            var e, f, k, j, h, p, l, m = b === t && cc,
                u = [];
            if (!b || "undefined" == typeof b.createDocumentFragment) b = t;
            for (e = 0; null != (k = a[e]); e++)
                if ("number" == typeof k && (k += ""), k) {
                    if ("string" == typeof k)
                        if (md.test(k)) {
                            m = m || q(b);
                            p = b.createElement("div");
                            m.appendChild(p);
                            k = k.replace($b, "<$1></$2>");
                            f = (ac.exec(k) || ["", ""])[1].toLowerCase();
                            j = Q[f] || Q._default;
                            h = j[0];
                            for (p.innerHTML = j[1] + k + j[2]; h--;) p = p.lastChild;
                            if (!g.support.tbody) {
                                h = ld.test(k);
                                j = "table" === f && !h ? p.firstChild && p.firstChild.childNodes : "<table>" === j[1] && !h ? p.childNodes : [];
                                for (f = j.length - 1; 0 <= f; --f) g.nodeName(j[f], "tbody") && !j[f].childNodes.length && j[f].parentNode.removeChild(j[f])
                            }!g.support.leadingWhitespace && lb.test(k) && p.insertBefore(b.createTextNode(lb.exec(k)[0]), p.firstChild);
                            k = p.childNodes;
                            p.parentNode.removeChild(p)
                        } else k = b.createTextNode(k);
                    k.nodeType ? u.push(k) : g.merge(u, k)
                }
            p && (k = p = m = null);
            if (!g.support.appendChecked)
                for (e = 0; null != (k = u[e]); e++) g.nodeName(k, "input") ? s(k) : "undefined" != typeof k.getElementsByTagName && g.grep(k.getElementsByTagName("input"), s);
            if (c) {
                a = function(a) { if (!a.type || pd.test(a.type)) return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a) };
                for (e = 0; null != (k = u[e]); e++)
                    if (!g.nodeName(k, "script") || !a(k)) c.appendChild(k), "undefined" != typeof k.getElementsByTagName && (l = g.grep(g.merge([], k.getElementsByTagName("script")), a), u.splice.apply(u, [e + 1, 0].concat(l)), e += l.length)
            }
            return u
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, k = 0, j = g.expando, h = g.cache, p = g.support.deleteExpando, l = g.event.special; null != (e = a[k]); k++)
                if (b || g.acceptData(e))
                    if (c = (d = e[j]) && h[d]) {
                        if (c.events)
                            for (f in c.events) l[f] ? g.event.remove(e, f) : g.removeEvent(e, f, c.handle);
                        h[d] && (delete h[d], p ? delete e[j] : e.removeAttribute ? e.removeAttribute(j) : e[j] = null, g.deletedIds.push(d))
                    }
        }
    });
    var Pa, Y;
    g.uaMatch = function(a) {
        a = a.toLowerCase();
        a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return { browser: a[1] || "", version: a[2] || "0" }
    };
    Pa = g.uaMatch(vc.userAgent);
    Y = {};
    Pa.browser && (Y[Pa.browser] = !0, Y.version = Pa.version);
    Y.chrome ? Y.webkit = !0 : Y.webkit && (Y.safari = !0);
    g.browser = Y;
    g.sub = function() {
        function a(b, c) { return new a.fn.init(b, c) }
        g.extend(!0, a, this);
        a.superclass = this;
        a.fn = a.prototype = this();
        a.fn.constructor = a;
        a.sub = this.sub;
        a.fn.init = function(c, d) { return d && d instanceof g && !(d instanceof a) && (d = a(d)), g.fn.init.call(this, c, d, b) };
        a.fn.init.prototype = a.fn;
        var b = a(t);
        return a
    };
    var L, ga, ha, ob = /alpha\([^)]*\)/i,
        rd = /opacity=([^)]*)/,
        sd = /^(top|right|bottom|left)$/,
        td = /^(none|table(?!-c[ea]).+)/,
        dc = /^margin/,
        rc = RegExp("^(" + za + ")(.*)$", "i"),
        ta = RegExp("^(" + za + ")(?!px)[a-z%]+$", "i"),
        ud = RegExp("^([-+])=(" + za + ")", "i"),
        Ta = {},
        vd = { position: "absolute", visibility: "hidden", display: "block" },
        ec = { letterSpacing: 0, fontWeight: 400 },
        Z = ["Top", "Right", "Bottom", "Left"],
        tb = ["Webkit", "O", "Moz", "ms"],
        wd = g.fn.toggle;
    g.fn.extend({
        css: function(a, c) { return g.access(this, function(a, c, d) { return d !== b ? g.style(a, c, d) : g.css(a, c) }, a, c, 1 < arguments.length) },
        show: function() { return v(this, !0) },
        hide: function() { return v(this) },
        toggle: function(a, b) {
            var c = "boolean" == typeof a;
            return g.isFunction(a) && g.isFunction(b) ? wd.apply(this, arguments) : this.each(function() {
                (c ? a : y(this)) ? g(this).show(): g(this).hide()
            })
        }
    });
    g.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = L(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": g.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(a, c, d, e) {
            if (a && !(3 === a.nodeType || 8 === a.nodeType || !a.style)) {
                var f, k, j, h = g.camelCase(c),
                    p = a.style;
                c = g.cssProps[h] || (g.cssProps[h] = u(p, h));
                j = g.cssHooks[c] || g.cssHooks[h];
                if (d === b) return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f : p[c];
                k = typeof d;
                "string" === k && (f = ud.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(g.css(a, c)), k = "number");
                if (!(null == d || "number" === k && isNaN(d)))
                    if ("number" === k && !g.cssNumber[h] && (d += "px"), !j || !("set" in j) || (d = j.set(a, d, e)) !== b) try { p[c] = d } catch (l) {}
            }
        },
        css: function(a, c, d, e) { var f, k, j, h = g.camelCase(c); return c = g.cssProps[h] || (g.cssProps[h] = u(a.style, h)), j = g.cssHooks[c] || g.cssHooks[h], j && "get" in j && (f = j.get(a, !0, e)), f === b && (f = L(a, c)), "normal" === f && c in ec && (f = ec[c]), d || e !== b ? (k = parseFloat(f), d || g.isNumeric(k) ? k || 0 : f) : f },
        swap: function(a, b, c) {
            var d, e = {};
            for (d in b) e[d] = a.style[d], a.style[d] = b[d];
            c = c.call(a);
            for (d in b) a.style[d] = e[d];
            return c
        }
    });
    a.getComputedStyle ? L = function(b, c) {
        var d, e, f, k, j = a.getComputedStyle(b, null),
            h = b.style;
        return j && (d = j[c], "" === d && !g.contains(b.ownerDocument, b) && (d = g.style(b, c)), ta.test(d) && dc.test(c) && (e = h.width, f = h.minWidth, k = h.maxWidth, h.minWidth = h.maxWidth = h.width = d, d = j.width, h.width = e, h.minWidth = f, h.maxWidth = k)), d
    } : t.documentElement.currentStyle && (L = function(a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b],
            f = a.style;
        return null == e && f && f[b] && (e = f[b]), ta.test(e) && !sd.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), "" === e ? "auto" : e
    });
    g.each(["height", "width"], function(a, b) { g.cssHooks[b] = { get: function(a, c, d) { if (c) return 0 === a.offsetWidth && td.test(L(a, "display")) ? g.swap(a, vd, function() { return z(a, b, d) }) : z(a, b, d) }, set: function(a, c, d) { return D(a, c, d ? Sa(a, b, d, g.support.boxSizing && "border-box" === g.css(a, "boxSizing")) : 0) } } });
    g.support.opacity || (g.cssHooks.opacity = {
        get: function(a, b) { return rd.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = g.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (1 <= b && ("" === g.trim(f.replace(ob, "")) && c.removeAttribute) && (c.removeAttribute("filter"), d && !d.filter)) return;
            c.filter = ob.test(f) ? f.replace(ob, e) : f + " " + e
        }
    });
    g(function() { g.support.reliableMarginRight || (g.cssHooks.marginRight = { get: function(a, b) { return g.swap(a, { display: "inline-block" }, function() { if (b) return L(a, "marginRight") }) } });!g.support.pixelPosition && g.fn.position && g.each(["top", "left"], function(a, b) { g.cssHooks[b] = { get: function(a, c) { if (c) { var d = L(a, b); return ta.test(d) ? g(a).position()[b] + "px" : d } } } }) });
    g.expr && g.expr.filters && (g.expr.filters.hidden = function(a) { return 0 === a.offsetWidth && 0 === a.offsetHeight || !g.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || L(a, "display")) }, g.expr.filters.visible = function(a) { return !g.expr.filters.hidden(a) });
    g.each({ margin: "", padding: "", border: "Width" }, function(a, b) {
        g.cssHooks[a + b] = {
            expand: function(c) {
                var d = "string" == typeof c ? c.split(" ") : [c],
                    e = {};
                for (c = 0; 4 > c; c++) e[a + Z[c] + b] = d[c] || d[c - 2] || d[0];
                return e
            }
        };
        dc.test(a) || (g.cssHooks[a + b].set = D)
    });
    var xd = /%20/g,
        sc = /\[\]$/,
        fc = /\r?\n/g,
        yd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        zd = /^(?:select|textarea)/i;
    g.fn.extend({ serialize: function() { return g.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { return this.elements ? g.makeArray(this.elements) : this }).filter(function() { return this.name && !this.disabled && (this.checked || zd.test(this.nodeName) || yd.test(this.type)) }).map(function(a, b) { var c = g(this).val(); return null == c ? null : g.isArray(c) ? g.map(c, function(a) { return { name: b.name, value: a.replace(fc, "\r\n") } }) : { name: b.name, value: c.replace(fc, "\r\n") } }).get() } });
    g.param = function(a, c) {
        var d, e = [],
            f = function(a, b) {
                b = g.isFunction(b) ? b() : null == b ? "" : b;
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        c === b && (c = g.ajaxSettings && g.ajaxSettings.traditional);
        if (g.isArray(a) || a.jquery && !g.isPlainObject(a)) g.each(a, function() { f(this.name, this.value) });
        else
            for (d in a) H(d, a[d], c, f);
        return e.join("&").replace(xd, "+")
    };
    var la, fa, Ad = /#.*$/,
        Bd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Cd = /^(?:GET|HEAD)$/,
        Dd = /^\/\//,
        gc = /\?/,
        Ed = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Fd = /([?&])_=[^&]*/,
        hc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        ic = g.fn.load,
        Ua = {},
        jc = {},
        kc = ["*/"] + ["*"];
    try { fa = uc.href } catch (Pd) { fa = t.createElement("a"), fa.href = "", fa = fa.href }
    la = hc.exec(fa.toLowerCase()) || [];
    g.fn.load = function(a, c, d) {
        if ("string" != typeof a && ic) return ic.apply(this, arguments);
        if (!this.length) return this;
        var e, f, k, j = this,
            h = a.indexOf(" ");
        return 0 <= h && (e = a.slice(h, a.length), a = a.slice(0, h)), g.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), g.ajax({ url: a, type: f, dataType: "html", data: c, complete: function(a, b) { d && j.each(d, k || [a.responseText, b, a]) } }).done(function(a) {
            k = arguments;
            j.html(e ? g("<div>").append(a.replace(Ed, "")).find(e) : a)
        }), this
    };
    g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) { g.fn[b] = function(a) { return this.on(b, a) } });
    g.each(["get", "post"], function(a, c) { g[c] = function(a, d, e, f) { return g.isFunction(d) && (f = f || e, e = d, d = b), g.ajax({ type: c, url: a, data: d, success: e, dataType: f }) } });
    g.extend({
        getScript: function(a, c) { return g.get(a, b, c, "script") },
        getJSON: function(a, b, c) { return g.get(a, b, c, "json") },
        ajaxSetup: function(a, b) { return b ? na(a, g.ajaxSettings) : (b = a, a = g.ajaxSettings), na(a, b), a },
        ajaxSettings: { url: fa, isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(la[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": kc }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": a.String, "text html": !0, "text json": g.parseJSON, "text xml": g.parseXML }, flatOptions: { context: !0, url: !0 } },
        ajaxPrefilter: ua(Ua),
        ajaxTransport: ua(jc),
        ajax: function(a, c) {
            function d(a, c, k, p) {
                var s, x, C, I, G, v = c;
                if (2 !== z) {
                    z = 2;
                    h && clearTimeout(h);
                    j = b;
                    f = p || "";
                    B.readyState = 0 < a ? 4 : 0;
                    if (k) {
                        I = m;
                        p = B;
                        var P, M, w, E, F = I.contents,
                            H = I.dataTypes,
                            K = I.responseFields;
                        for (M in K) M in k && (p[K[M]] = k[M]);
                        for (;
                            "*" === H[0];) H.shift(), P === b && (P = I.mimeType || p.getResponseHeader("content-type"));
                        if (P)
                            for (M in F)
                                if (F[M] && F[M].test(P)) { H.unshift(M); break }
                        if (H[0] in k) w = H[0];
                        else {
                            for (M in k) {
                                if (!H[0] || I.converters[M + " " + H[0]]) { w = M; break }
                                E || (E = M)
                            }
                            w = w || E
                        }
                        k = w ? (w !== H[0] && H.unshift(w), k[w]) : void 0;
                        I = k
                    }
                    if (200 <= a && 300 > a || 304 === a)
                        if (m.ifModified && (G = B.getResponseHeader("Last-Modified"), G && (g.lastModified[e] = G), G = B.getResponseHeader("Etag"), G && (g.etag[e] = G)), 304 === a) v = "notmodified", s = !0;
                        else {
                            var A;
                            a: {
                                s = m;x = I;
                                var J, v = s.dataTypes.slice();k = v[0];P = {};M = 0;s.dataFilter && (x = s.dataFilter(x, s.dataType));
                                if (v[1])
                                    for (A in s.converters) P[A.toLowerCase()] = s.converters[A];
                                for (; C = v[++M];)
                                    if ("*" !== C) {
                                        if ("*" !== k && k !== C) {
                                            A = P[k + " " + C] || P["* " + C];
                                            if (!A)
                                                for (J in P)
                                                    if (G = J.split(" "), G[1] === C && (A = P[k + " " + G[0]] || P["* " + G[0]])) {!0 === A ? A = P[J] : !0 !== P[J] && (C = G[0], v.splice(M--, 0, C)); break }
                                            if (!0 !== A)
                                                if (A && s["throws"]) x = A(x);
                                                else try { x = A(x) } catch (L) { A = { state: "parsererror", error: A ? L : "No conversion from " + k + " to " + C }; break a }
                                        }
                                        k = C
                                    }
                                A = { state: "success", data: x }
                            }
                            s = A;
                            v = s.state;
                            x = s.data;
                            C = s.error;
                            s = !C
                        }
                    else if (C = v, !v || a) v = "error", 0 > a && (a = 0);
                    B.status = a;
                    B.statusText = (c || v) + "";
                    s ? y.resolveWith(q, [x, v, B]) : y.rejectWith(q, [B, v, C]);
                    B.statusCode(D);
                    D = b;
                    l && u.trigger("ajax" + (s ? "Success" : "Error"), [B, m, s ? x : C]);
                    t.fireWith(q, [B, v]);
                    l && (u.trigger("ajaxComplete", [B, m]), --g.active || g.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (c = a, a = b);
            c = c || {};
            var e, f, k, j, h, p, l, s, m = g.ajaxSetup({}, c),
                q = m.context || m,
                u = q !== m && (q.nodeType || q instanceof g) ? g(q) : g.event,
                y = g.Deferred(),
                t = g.Callbacks("once memory"),
                D = m.statusCode || {},
                v = {},
                w = {},
                z = 0,
                E = "canceled",
                B = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!z) {
                            var c = a.toLowerCase();
                            a = w[c] = w[c] || a;
                            v[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() { return 2 === z ? f : null },
                    getResponseHeader: function(a) {
                        var c;
                        if (2 === z) {
                            if (!k)
                                for (k = {}; c = Bd.exec(f);) k[c[1].toLowerCase()] = c[2];
                            c = k[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) { return z || (m.mimeType = a), this },
                    abort: function(a) { return a = a || E, j && j.abort(a), d(0, a), this }
                };
            y.promise(B);
            B.success = B.done;
            B.error = B.fail;
            B.complete = t.add;
            B.statusCode = function(a) {
                if (a) {
                    var b;
                    if (2 > z)
                        for (b in a) D[b] = [D[b], a[b]];
                    else b = a[B.status], B.always(b)
                }
                return this
            };
            m.url = ((a || m.url) + "").replace(Ad, "").replace(Dd, la[1] + "//");
            m.dataTypes = g.trim(m.dataType || "*").toLowerCase().split(aa);
            null == m.crossDomain && (p = hc.exec(m.url.toLowerCase()) || !1, m.crossDomain = p && p.join(":") + (p[3] ? "" : "http:" === p[1] ? 80 : 443) !== la.join(":") + (la[3] ? "" : "http:" === la[1] ? 80 : 443));
            m.data && m.processData && "string" != typeof m.data && (m.data = g.param(m.data, m.traditional));
            ia(Ua, m, c, B);
            if (2 === z) return B;
            l = m.global;
            m.type = m.type.toUpperCase();
            m.hasContent = !Cd.test(m.type);
            l && 0 === g.active++ && g.event.trigger("ajaxStart");
            if (!m.hasContent && (m.data && (m.url += (gc.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url, !1 === m.cache)) {
                p = g.now();
                var F = m.url.replace(Fd, "$1_=" + p);
                m.url = F + (F === m.url ? (gc.test(m.url) ? "&" : "?") + "_=" + p : "")
            }(m.data && m.hasContent && !1 !== m.contentType || c.contentType) && B.setRequestHeader("Content-Type", m.contentType);
            m.ifModified && (e = e || m.url, g.lastModified[e] && B.setRequestHeader("If-Modified-Since", g.lastModified[e]), g.etag[e] && B.setRequestHeader("If-None-Match", g.etag[e]));
            B.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + kc + "; q=0.01" : "") : m.accepts["*"]);
            for (s in m.headers) B.setRequestHeader(s, m.headers[s]);
            if (!m.beforeSend || !1 !== m.beforeSend.call(q, B, m) && 2 !== z) {
                E = "abort";
                for (s in { success: 1, error: 1, complete: 1 }) B[s](m[s]);
                if (j = ia(jc, m, c, B)) {
                    B.readyState = 1;
                    l && u.trigger("ajaxSend", [B, m]);
                    m.async && 0 < m.timeout && (h = setTimeout(function() { B.abort("timeout") }, m.timeout));
                    try { z = 1, j.send(v, d) } catch (H) {
                        if (2 > z) d(-1, H);
                        else throw H;
                    }
                } else d(-1, "No Transport");
                return B
            }
            return B.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var lc = [],
        Gd = /\?/,
        Qa = /(=)\?(?=&|$)|\?\?/,
        Hd = g.now();
    g.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = lc.pop() || g.expando + "_" + Hd++; return this[a] = !0, a } });
    g.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, k, j, h = c.data,
            p = c.url,
            l = !1 !== c.jsonp,
            m = l && Qa.test(p),
            s = l && !m && "string" == typeof h && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Qa.test(h);
        if ("jsonp" === c.dataTypes[0] || m || s) return f = c.jsonpCallback = g.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, k = a[f], m ? c.url = p.replace(Qa, "$1" + f) : s ? c.data = h.replace(Qa, "$1" + f) : l && (c.url += (Gd.test(p) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() { return j || g.error(f + " was not called"), j[0] }, c.dataTypes[0] = "json", a[f] = function() { j = arguments }, e.always(function() {
            a[f] = k;
            c[f] && (c.jsonpCallback = d.jsonpCallback, lc.push(f));
            j && g.isFunction(k) && k(j[0]);
            j = k = b
        }), "script"
    });
    g.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function(a) { return g.globalEval(a), a } } });
    g.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    g.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = t.head || t.getElementsByTagName("head")[0] || t.documentElement;
            return {
                send: function(e, f) {
                    c = t.createElement("script");
                    c.async = "async";
                    a.scriptCharset && (c.charset = a.scriptCharset);
                    c.src = a.url;
                    c.onload = c.onreadystatechange = function(a, e) { if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success") };
                    d.insertBefore(c, d.firstChild)
                },
                abort: function() { c && c.onload(0, 1) }
            }
        }
    });
    var ma, pb = a.ActiveXObject ? function() { for (var a in ma) ma[a](0, 1) } : !1,
        Id = 0;
    g.ajaxSettings.xhr = a.ActiveXObject ? function() {
        var b;
        if (!(b = !this.isLocal && ub())) a: {
            try { b = new a.ActiveXObject("Microsoft.XMLHTTP"); break a } catch (c) {}
            b = void 0
        }
        return b
    } : ub;
    var qb = g.ajaxSettings.xhr();
    g.extend(g.support, { ajax: !!qb, cors: !!qb && "withCredentials" in qb });
    g.support.ajax && g.ajaxTransport(function(c) {
        if (!c.crossDomain || g.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var k, j, h = c.xhr();
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields)
                        for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType);
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try { for (j in e) h.setRequestHeader(j, e[j]) } catch (p) {}
                    h.send(c.hasContent && c.data || null);
                    d = function(a, e) {
                        var j, p, l, m, s;
                        try {
                            if (d && (e || 4 === h.readyState))
                                if (d = b, k && (h.onreadystatechange = g.noop, pb && delete ma[k]), e) 4 !== h.readyState && h.abort();
                                else {
                                    j = h.status;
                                    l = h.getAllResponseHeaders();
                                    m = {};
                                    (s = h.responseXML) && s.documentElement && (m.xml = s);
                                    try { m.text = h.responseText } catch (q) {}
                                    try { p = h.statusText } catch (u) { p = "" }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : 1223 === j && (j = 204)
                                }
                        } catch (I) { e || f(-1, I) }
                        m && f(j, p, m, l)
                    };
                    c.async ? 4 === h.readyState ? setTimeout(d, 0) : (k = ++Id, pb && (ma || (ma = {}, g(a).unload(pb)), ma[k] = d), h.onreadystatechange = d) : d()
                },
                abort: function() { d && d(0, 1) }
            }
        }
    });
    var va, Ra, Jd = /^(?:toggle|show|hide)$/,
        Kd = RegExp("^(?:([-+])=|)(" + za + ")([a-z%]*)$", "i"),
        Ld = /queueHooks$/,
        wa = [function(a, b, c) {
            var d, e, f, k, j, h, p = this,
                l = a.style,
                m = {},
                s = [],
                q = a.nodeType && y(a);
            c.queue || (j = g._queueHooks(a, "fx"), null == j.unqueued && (j.unqueued = 0, h = j.empty.fire, j.empty.fire = function() { j.unqueued || h() }), j.unqueued++, p.always(function() {
                p.always(function() {
                    j.unqueued--;
                    g.queue(a, "fx").length || j.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [l.overflow, l.overflowX, l.overflowY], "inline" === g.css(a, "display") && "none" === g.css(a, "float") && (!g.support.inlineBlockNeedsLayout || "inline" === K(a.nodeName) ? l.display = "inline-block" : l.zoom = 1));
            c.overflow && (l.overflow = "hidden", g.support.shrinkWrapBlocks || p.done(function() {
                l.overflow = c.overflow[0];
                l.overflowX = c.overflow[1];
                l.overflowY = c.overflow[2]
            }));
            for (d in b) e = b[d], Jd.exec(e) && (delete b[d], e !== (q ? "hide" : "show") && s.push(d));
            if (e = s.length) {
                f = g._data(a, "fxshow") || g._data(a, "fxshow", {});
                q ? g(a).show() : p.done(function() { g(a).hide() });
                p.done(function() {
                    var b;
                    g.removeData(a, "fxshow", !0);
                    for (b in m) g.style(a, b, m[b])
                });
                for (d = 0; d < e; d++) b = s[d], k = p.createTween(b, q ? f[b] : 0), m[b] = f[b] || g.style(a, b), b in f || (f[b] = k.start, q && (k.end = k.start, k.start = "width" === b || "height" === b ? 1 : 0))
            }
        }],
        oa = {
            "*": [function(a, b) {
                var c, d, e = this.createTween(a, b),
                    f = Kd.exec(b),
                    k = e.cur(),
                    j = +k || 0,
                    h = 1,
                    p = 20;
                if (f) {
                    c = +f[2];
                    d = f[3] || (g.cssNumber[a] ? "" : "px");
                    if ("px" !== d && j) {
                        j = g.css(e.elem, a, !0) || c || 1;
                        do h = h || ".5", j /= h, g.style(e.elem, a, j + d); while (h !== (h = e.cur() / k) && 1 !== h && --p)
                    }
                    e.unit = d;
                    e.start = j;
                    e.end = f[1] ? j + (f[1] + 1) * c : c
                }
                return e
            }]
        };
    g.Animation = g.extend(wb, {
        tweener: function(a, b) {
            g.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], oa[c] = oa[c] || [], oa[c].unshift(b)
        },
        prefilter: function(a, b) { b ? wa.unshift(a) : wa.push(a) }
    });
    g.Tween = N;
    N.prototype = {
        constructor: N,
        init: function(a, b, c, d, e, f) {
            this.elem = a;
            this.prop = c;
            this.easing = e || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = f || (g.cssNumber[c] ? "" : "px")
        },
        cur: function() { var a = N.propHooks[this.prop]; return a && a.get ? a.get(this) : N.propHooks._default.get(this) },
        run: function(a) { var b, c = N.propHooks[this.prop]; return this.options.duration ? this.pos = b = g.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : N.propHooks._default.set(this), this }
    };
    N.prototype.init.prototype = N.prototype;
    N.propHooks = { _default: { get: function(a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = g.css(a.elem, a.prop, !1, ""), !b || "auto" === b ? 0 : b) : a.elem[a.prop] }, set: function(a) { g.fx.step[a.prop] ? g.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[g.cssProps[a.prop]] || g.cssHooks[a.prop]) ? g.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } };
    N.propHooks.scrollTop = N.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } };
    g.each(["toggle", "show", "hide"], function(a, b) {
        var c = g.fn[b];
        g.fn[b] = function(d, e, f) { return null == d || "boolean" == typeof d || !a && g.isFunction(d) && g.isFunction(e) ? c.apply(this, arguments) : this.animate(xa(b, !0), d, e, f) }
    });
    g.fn.extend({
        fadeTo: function(a, b, c, d) { return this.filter(y).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
        animate: function(a, b, c, d) {
            var e = g.isEmptyObject(a),
                f = g.speed(b, c, d);
            b = function() {
                var b = wb(this, g.extend({}, a), f);
                e && b.stop(!0)
            };
            return e || !1 === f.queue ? this.each(b) : this.queue(f.queue, b)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = g.timers,
                    k = g._data(this);
                if (c) k[c] && k[c].stop && e(k[c]);
                else
                    for (c in k) k[c] && k[c].stop && Ld.test(c) && e(k[c]);
                for (c = f.length; c--;) f[c].elem === this && (null == a || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && g.dequeue(this, a)
            })
        }
    });
    g.each({ slideDown: xa("show"), slideUp: xa("hide"), slideToggle: xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { g.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } });
    g.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? g.extend({}, a) : { complete: c || !c && b || g.isFunction(a) && a, duration: a, easing: c && b || b && !g.isFunction(b) && b };
        d.duration = g.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in g.fx.speeds ? g.fx.speeds[d.duration] : g.fx.speeds._default;
        if (null == d.queue || !0 === d.queue) d.queue = "fx";
        return d.old = d.complete, d.complete = function() {
            g.isFunction(d.old) && d.old.call(this);
            d.queue && g.dequeue(this, d.queue)
        }, d
    };
    g.easing = { linear: function(a) { return a }, swing: function(a) { return 0.5 - Math.cos(a * Math.PI) / 2 } };
    g.timers = [];
    g.fx = N.prototype.init;
    g.fx.tick = function() {
        for (var a, b = g.timers,
                c = 0; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        b.length || g.fx.stop()
    };
    g.fx.timer = function(a) { a() && g.timers.push(a) && !Ra && (Ra = setInterval(g.fx.tick, g.fx.interval)) };
    g.fx.interval = 13;
    g.fx.stop = function() {
        clearInterval(Ra);
        Ra = null
    };
    g.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    g.fx.step = {};
    g.expr && g.expr.filters && (g.expr.filters.animated = function(a) { return g.grep(g.timers, function(b) { return a === b.elem }).length });
    var mc = /^(?:body|html)$/i;
    g.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) { g.offset.setOffset(this, a, b) });
        var c, d, e, f, k, j, h, p = { top: 0, left: 0 },
            l = this[0],
            m = l && l.ownerDocument;
        if (m) return (d = m.body) === l ? g.offset.bodyOffset(l) : (c = m.documentElement, g.contains(c, l) ? ("undefined" != typeof l.getBoundingClientRect && (p = l.getBoundingClientRect()), e = xb(m), f = c.clientTop || d.clientTop || 0, k = c.clientLeft || d.clientLeft || 0, j = e.pageYOffset || c.scrollTop, h = e.pageXOffset || c.scrollLeft, { top: p.top + j - f, left: p.left + h - k }) : p)
    };
    g.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return g.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(g.css(a, "marginTop")) || 0, c += parseFloat(g.css(a, "marginLeft")) || 0), { top: b, left: c }
        },
        setOffset: function(a, b, c) {
            var d = g.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e = g(a),
                f = e.offset(),
                k = g.css(a, "top"),
                j = g.css(a, "left"),
                h = {},
                p = {},
                l, m;
            ("absolute" === d || "fixed" === d) && -1 < g.inArray("auto", [k, j]) ? (p = e.position(), l = p.top, m = p.left) : (l = parseFloat(k) || 0, m = parseFloat(j) || 0);
            g.isFunction(b) && (b = b.call(a, c, f));
            null != b.top && (h.top = b.top - f.top + l);
            null != b.left && (h.left = b.left - f.left + m);
            "using" in b ? b.using.call(a, h) : e.css(h)
        }
    };
    g.fn.extend({
        position: function() {
            if (this[0]) {
                var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = mc.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
                return c.top -= parseFloat(g.css(a, "marginTop")) || 0, c.left -= parseFloat(g.css(a, "marginLeft")) || 0, d.top += parseFloat(g.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(g.css(b[0], "borderLeftWidth")) || 0, { top: c.top - d.top, left: c.left - d.left }
            }
        },
        offsetParent: function() { return this.map(function() { for (var a = this.offsetParent || t.body; a && !mc.test(a.nodeName) && "static" === g.css(a, "position");) a = a.offsetParent; return a || t.body }) }
    });
    g.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, c) {
        var d = /Y/.test(c);
        g.fn[a] = function(e) {
            return g.access(this, function(a, e, f) {
                var k = xb(a);
                if (f === b) return k ? c in k ? k[c] : k.document.documentElement[e] : a[e];
                k ? k.scrollTo(d ? g(k).scrollLeft() : f, d ? f : g(k).scrollTop()) : a[e] = f
            }, a, e, arguments.length, null)
        }
    });
    g.each({ Height: "height", Width: "width" }, function(a, c) {
        g.each({
            padding: "inner" +
                a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            g.fn[e] = function(e, f) {
                var k = arguments.length && (d || "boolean" != typeof e),
                    j = d || (!0 === e || !0 === f ? "margin" : "border");
                return g.access(this, function(c, d, e) { var f; return g.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? g.css(c, d, e, j) : g.style(c, d, e, j) }, c, k ? e : b, k, null)
            }
        })
    });
    a.jQuery = a.$ = g;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() { return g })
})(window);
var _STRINGS = { Ad: { Mobile: { Preroll: { ReadyIn: "The game is ready in ", Loading: "Your game is loading...", Close: "Close" }, Header: { ReadyIn: "The game is ready in ", Loading: "Your game is loading...", Close: "Close" }, End: { ReadyIn: "Advertisement ends in ", Loading: "Please wait ...", Close: "Close" } } }, Loading: { Loading: "LOADING" }, Tutorial: "Tap on the monster to attack it!;Collect gold coins by tapping on it.;Watch out! Monsters will sometimes drop from above!;Use Shields Up to prevent damage for a short time.;You can also use Mega Slash to attack all visible monsters.;Skills like Mega Slash and Shields Up cannot be used again within a short time, as indicated by the Cooldown Bar.;Skills also use Energy. The Energy Potion is the only way to recover energy.;You are hurt. Tap on the Health Potion button to regain health.;Tap on the shop button to spend your gold and make your hero stronger.;Attack Upgrades will reduce the number of taps needed to defeat a monster.;Defence Upgrades increase the amount of damage you can take.;Look out, that's a Boss Monster! It can defeat you in ONE hit. Defeat it quickly before the timer runs out!;Tap on the Power Potion button to temporarily increase your attack power.;Now tap on the Boss Monster to attack it!;This is the end of the tutorial, have fun!".split(";"), UI: { PAUSED: "PAUSED", OK: "OK", NO: "NO", OPTIONS: "OPTIONS", SOUND: "SOUND", MUSIC: "MUSIC", "MAIN MENU": "MAIN MENU", TUTORIAL: "TUTORIAL", BACK: "BACK", CONTINUE: "CONTINUE", END: "END", SHOP: "SHOP", BUY: "BUY", "HEALTH POTION": "HEALTH POTION", "ENERGY POTION": "ENERGY POTION", "POWER POTION": "POWER POTION", "MEGA SLASH": "MEGA SLASH", "SHIELDS UP": "SHIELDS UP", HEALTH: "HEALTH", ENERGY: "ENERGY", POWER: "POWER", "ATTACK UP": "ATTACK UP", "DEFENCE UP": "DEFENCE UP", DEFEATED: "YOU HAVE BEEN DEFEATED", "PLAY AGAIN": "PLAY AGAIN", HERO: "HERO" }, UnitSpecs: { wave_min_time: 8, wave_max_time: 12, wave_max_monsters: 15, wave_boss_interval: 5, wave_size: 3, wave_size_rate: 0.25, tutorial_start_gold: 10, hero_start_gold: 0, hero_start_health: 15, hero_start_energy: 10, hero_start_damage: 2.5, hero_upgrade_health: 4, hero_upgrade_health_goldcost: 10, hero_upgrade_damage: 1.2, hero_upgrade_damage_goldcost: 10, hero_potion_health_goldcost: 50, hero_potion_health_cooldown: 5, hero_potion_health: 0.5, hero_potion_energy_goldcost: 50, hero_potion_energy_cooldown: 5, hero_potion_energy: 0.5, hero_potion_power_goldcost: 50, hero_potion_power_cooldown: 15, hero_potion_power: 2, hero_potion_power_duration: 8, hero_megaslash_cost: 5, hero_megaslash_cooldown: 25, hero_shieldsup_cost: 2, hero_shieldsup_duration: 6, hero_shieldsup_cooldown: 9, monster_start_health: 8, monster_health_rate: 0.15, monster_start_damage: 1, monster_damage_rate: 0.1, monster_move_speed_mult_rate: 0.0070, monster_attack_speed_mult_rate: 0.0070, boss_start_health: 80, boss_health_rate: 0.4, boss_start_attackduration: 30, boss_attackduration_rate: -0.0040, monster_pickup_base_droprate: 0.85, monster_pickup_gold_droprate: 0.95, monster_pickup_gold_amt: 10, boss_pickup_gold_amt: 50 } };
var _SETTINGS = { API: { Enabled: !0, Log: { Events: { InitializeGame: !0, EndGame: !0, Level: { Begin: !0, End: !0, Win: !0, Lose: !0, Draw: !0 } } } }, Ad: { Mobile: { Preroll: { Enabled: !0, Duration: 5, Width: 300, Height: 250, Rotation: { Enabled: !1, Weight: { MobileAdInGamePreroll: 40, MobileAdInGamePreroll2: 40, MobileAdInGamePreroll3: 20 } } }, Header: { Enabled: !1, Duration: 5, Width: 320, Height: 50, Rotation: { Enabled: !1, Weight: { MobileAdInGameHeader: 40, MobileAdInGameHeader2: 40, MobileAdInGameHeader3: 20 } } }, Footer: { Enabled: !1, Duration: 5, Width: 320, Height: 50, Rotation: { Enabled: !1, Weight: { MobileAdInGameFooter: 40, MobileAdInGameFooter2: 40, MobileAdInGameFooter3: 20 } } }, End: { Enabled: !1, Duration: 1, Width: 300, Height: 250, Rotation: { Enabled: !1, Weight: { MobileAdInGameEnd: 40, MobileAdInGameEnd2: 40, MobileAdInGameEnd3: 20 } } } } }, Language: { Default: "en" }, DeveloperBranding: { Splash: { Enabled: !0 }, Logo: { Enabled: !0, Link: "http://google.com", LinkEnabled: !0, NewWindow: !0, Width: 166, Height: 61 } }, Branding: { Splash: { Enabled: !1 }, Logo: { Enabled: !1, Link: "http://google.com", LinkEnabled: !0, NewWindow: !0, Width: 166, Height: 61 } }, MoreGames: { Enabled: !0, Link: "http://www.marketjs.com/game/links/mobile", NewWindow: !0 }, Gamecenter: { Enabled: !1 } };
var MobileAdInGameEnd = {
        ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
        ad_width: _SETTINGS.Ad.Mobile.End.Width,
        ad_height: _SETTINGS.Ad.Mobile.End.Height,
        ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
        loading: _STRINGS.Ad.Mobile.End.Loading,
        close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        Initialize: function() {
            if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
                var a = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
                    b = a.MobileAdInGameEnd,
                    c = b + a.MobileAdInGameEnd2,
                    a = c + a.MobileAdInGameEnd3,
                    d = Math.floor(100 * Math.random());
                console.log("seed: ", d);
                d <= b ? this.selectedOverlayName = "MobileAdInGameEnd" : d <= c ? this.selectedOverlayName = "MobileAdInGameEnd2" : d <= a && (this.selectedOverlayName = "MobileAdInGameEnd3");
                console.log("Ad rotating end enabled")
            } else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
            console.log("selected:", this.selectedOverlayName);
            this.overlay = $("#" + this.selectedOverlayName);
            this.box = $("#" + this.selectedOverlayName + "-Box");
            this.game = $("#game");
            this.boxContents = { footer: $("#" + this.selectedOverlayName + "-Box-Footer"), header: $("#" + this.selectedOverlayName + "-Box-Header"), close: $("#" + this.selectedOverlayName + "-Box-Close"), body: $("#" + this.selectedOverlayName + "-Box-Body") };
            this.box.width(this.ad_width);
            this.box.height(this.ad_height);
            this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
            this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
            this.overlay.show(this.Timer(this.ad_duration))
        },
        Timer: function(a) {
            var b = a,
                c = setInterval(function() {
                    MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + b + "...");
                    MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
                    b--;
                    0 > b && (clearInterval(c), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
                }, 1E3)
        },
        Close: function() {
            this.boxContents.close.hide();
            this.overlay.hide()
        }
    },
    MobileAdInGameFooter = {
        ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
        ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
        ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
        Initialize: function() {
            if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
                var a = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                    b = a.MobileAdInGameFooter,
                    c = b + a.MobileAdInGameFooter2,
                    a = c + a.MobileAdInGameFooter3,
                    d = Math.floor(100 * Math.random());
                console.log("seed: ", d);
                d <= b ? this.selectedOverlayName = "MobileAdInGameFooter" : d <= c ? this.selectedOverlayName = "MobileAdInGameFooter2" : d <= a && (this.selectedOverlayName = "MobileAdInGameFooter3");
                console.log("Ad rotating footer enabled")
            } else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
            this.div = $("#" + this.selectedOverlayName);
            this.game = $("#game");
            this.div.width(this.ad_width);
            this.div.height(this.ad_height);
            this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
            this.div.css("top", this.game.height() - this.div.height() - 5);
            this.div.show(this.Timer(this.ad_duration))
        },
        Timer: function(a) {
            var b = setInterval(function() {
                a--;
                0 > a && (MobileAdInGameFooter.div.hide(), clearInterval(b))
            }, 1E3)
        }
    },
    MobileAdInGameHeader = {
        ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
        ad_width: _SETTINGS.Ad.Mobile.Header.Width,
        ad_height: _SETTINGS.Ad.Mobile.Header.Height,
        Initialize: function() {
            if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
                var a = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
                    b = a.MobileAdInGameHeader,
                    c = b + a.MobileAdInGameHeader2,
                    a = c + a.MobileAdInGameHeader3,
                    d = Math.floor(100 * Math.random());
                console.log("seed: ", d);
                d <= b ? this.selectedOverlayName = "MobileAdInGameHeader" : d <= c ? this.selectedOverlayName = "MobileAdInGameHeader2" : d <= a && (this.selectedOverlayName = "MobileAdInGameHeader3");
                console.log("Ad rotating header enabled")
            } else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
            this.div = $("#" + this.selectedOverlayName);
            this.game = $("#game");
            this.div.width(this.ad_width);
            this.div.height(this.ad_height);
            this.div.css("left", this.game.position().left + (this.game.width() -
                this.div.width()) / 2);
            this.div.css("top", 0);
            this.div.show(this.Timer(this.ad_duration))
        },
        Timer: function(a) {
            var b = setInterval(function() {
                a--;
                0 > a && (MobileAdInGameHeader.div.hide(), clearInterval(b))
            }, 1E3)
        }
    },
    MobileAdInGamePreroll = {
        ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
        ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
        ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
        ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
        loading: _STRINGS.Ad.Mobile.Preroll.Loading,
        close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        Initialize: function() {
            if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
                var a = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
                    b = a.MobileAdInGamePreroll,
                    c = b + a.MobileAdInGamePreroll2,
                    a = c + a.MobileAdInGamePreroll3,
                    d = Math.floor(100 * Math.random());
                console.log("seed: ", d);
                d <= b ? this.selectedOverlayName = "MobileAdInGamePreroll" : d <= c ? this.selectedOverlayName = "MobileAdInGamePreroll2" : d <= a && (this.selectedOverlayName = "MobileAdInGamePreroll3");
                console.log("Ad rotating preroll enabled")
            } else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
            console.log("selected:", this.selectedOverlayName);
            this.overlay = $("#" + this.selectedOverlayName);
            this.box = $("#" + this.selectedOverlayName + "-Box");
            this.game = $("#game");
            this.boxContents = { footer: $("#" + this.selectedOverlayName + "-Box-Footer"), header: $("#" + this.selectedOverlayName + "-Box-Header"), close: $("#" + this.selectedOverlayName + "-Box-Close"), body: $("#" + this.selectedOverlayName + "-Box-Body") };
            this.box.width(this.ad_width);
            this.box.height(this.ad_height);
            this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
            this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
            this.overlay.show(this.Timer(this.ad_duration))
        },
        Timer: function(a) {
            var b = a,
                c = setInterval(function() {
                    MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + b + "...");
                    MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
                    b--;
                    0 > b && (clearInterval(c), MobileAdInGamePreroll.boxContents.close.css("left",
                        MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close), MobileAdInGamePreroll.boxContents.footer.text(""))
                }, 1E3)
        },
        Close: function() {
            this.boxContents.close.hide();
            this.overlay.hide()
        }
    };
this.jukebox = {};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(a) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var b in this.defaults) this.settings[b] = this.defaults[b];
    if ("[object Object]" === Object.prototype.toString.call(a))
        for (var c in a) this.settings[c] = a[c];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() { jukebox.Manager.loop() }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: { useFlash: !1, useGameLoop: !1 },
    __detectFeatures: function() {
        var a = window.Audio && new Audio;
        if (a && a.canPlayType && !1 === this.settings.useFlash) {
            for (var b = [{ e: "3gp", m: ["audio/3gpp", "audio/amr"] }, { e: "aac", m: ["audio/aac", "audio/aacp"] }, { e: "amr", m: ["audio/amr", "audio/3gpp"] }, { e: "caf", m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"'] }, { e: "m4a", m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{") }, { e: "mp3", m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"] }, { e: "mpga", m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"] }, { e: "mp4", m: ["audio/mp4", "video/mp4"] }, { e: "ogg", m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"'] }, { e: "wav", m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"] }, { e: "webm", m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"] }], c, d, e = 0, f = b.length; e < f; e++)
                if (d = b[e].e, b[e].m.length && "object" === typeof b[e].m)
                    for (var h = 0, j = b[e].m.length; h < j; h++)
                        if (c = b[e].m[h], "" !== a.canPlayType(c)) { this.codecs[d] = c; break } else this.codecs[d] || (this.codecs[d] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            a.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(a.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try { new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0 } catch (l) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(a) { return this.__players && void 0 !== this.__players[a] ? this.__players[a] : null },
    __getClone: function(a, b) {
        for (var c in this.__clones) { var d = this.__clones[c]; if (null === d.isPlaying && d.origin === a) return d }
        if ("[object Object]" === Object.prototype.toString.call(b)) {
            c = {};
            for (var e in b) c[e] = b[e];
            c.autoplay = !1;
            e = new jukebox.Player(c, a);
            e.isClone = !0;
            e.wasReady = !1;
            return this.__clones[e.id] = e
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length && this.__playersLength < this.features.channels) {
                var a = this.__queue[0],
                    b = this.__getPlayerById(a.origin);
                if (null !== b) {
                    var c = this.__getClone(a.origin, b.settings);
                    null !== c && (!0 === this.features.volume && (b = this.__players[a.origin]) && c.setVolume(b.getVolume()), this.add(c), c.play(a.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (c in this.__queue.length && 1 === this.features.channels && (a = this.__queue[0], b = this.__getPlayerById(a.origin), null !== b && b.play(a.pointer, !0), this.__queue.splice(0, 1)), this.__players) a = this.__players[c], b = a.getCurrentTime() || 0, a.isPlaying && !1 === a.wasReady ? a.wasReady = a.setCurrentTime(a.isPlaying.start) : a.isPlaying && !0 === a.wasReady ? b > a.isPlaying.end && (!0 === a.isPlaying.loop ? a.play(a.isPlaying.start, !0) : a.stop()) : a.isClone && null === a.isPlaying ? this.remove(a) : void 0 !== a.backgroundMusic && null === a.isPlaying && b > a.backgroundMusic.end && a.backgroundHackForiOS()
    },
    getPlayableResource: function(a) {
        "[object Array]" !== Object.prototype.toString.call(a) && (a = [a]);
        for (var b = 0, c = a.length; b < c; b++) {
            var d = a[b],
                e = d.match(/\.([^\.]*)$/)[1];
            if (e && this.codecs[e]) return d
        }
        return null
    },
    add: function(a) { return a instanceof jukebox.Player && void 0 === this.__players[a.id] ? (this.__playersLength++, this.__players[a.id] = a, !0) : !1 },
    remove: function(a) { return a instanceof jukebox.Player && void 0 !== this.__players[a.id] ? (this.__playersLength--, delete this.__players[a.id], !0) : !1 },
    addToQueue: function(a, b) { return ("string" === typeof a || "number" === typeof a) && void 0 !== this.__players[b] ? (this.__queue.push({ pointer: a, origin: b }), !0) : !1 }
};
jukebox.Player = function(a, b) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = b || null;
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(a))
        for (var d in a) this.settings[d] = a[d];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: { resources: [], autoplay: !1, spritemap: {}, flashMediaElement: "./swf/FlashMediaElement.swf", timeout: 1E3 },
    __addToManager: function() {!0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0) },
    __init: function() {
        var a = this,
            b = this.settings,
            c = {},
            d;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (c = jukebox.Manager.features);
        if (!0 === c.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var e = function(b) { a.__addToManager(b) };
                this.context.addEventListener("canplaythrough", e, !0);
                window.setTimeout(function() {
                    a.context.removeEventListener("canplaythrough", e, !0);
                    e("timeout")
                }, b.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (d in this.HTML5API) this[d] = this.HTML5API[d];
            1 < c.channels ? !0 === b.autoplay ? this.context.autoplay = !0 : void 0 !== b.spritemap[b.autoplay] && this.play(b.autoplay) : 1 === c.channels && void 0 !== b.spritemap[b.autoplay] && (this.backgroundMusic = b.spritemap[b.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(b.autoplay));
            1 == c.channels && !0 !== b.canPlayBackground && (window.addEventListener("pagehide", function() { null !== a.isPlaying && (a.pause(), a.__wasAutoPaused = !0) }), window.addEventListener("pageshow", function() { a.__wasAutoPaused && (a.resume(), delete a._wasAutoPaused) }))
        } else if (!0 === c.flashaudio) {
            for (d in this.FLASHAPI) this[d] = this.FLASHAPI[d];
            c = ["id=jukebox-flashstream-" + this.id, "autoplay=" + b.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(c);
            !0 === b.autoplay ? this.play(0) : b.spritemap[b.autoplay] && this.play(b.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(a) {
        var b, c = this.settings.flashMediaElement,
            d, e = { flashvars: a.join("&"), quality: "high", bgcolor: "#000000", wmode: "transparent", allowscriptaccess: "always", allowfullscreen: "true" };
        if (navigator.userAgent.match(/MSIE/)) {
            b = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(b);
            var f = document.createElement("object");
            f.id = "jukebox-flashstream-" + this.id;
            f.setAttribute("type", "application/x-shockwave-flash");
            f.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            f.setAttribute("width", "0");
            f.setAttribute("height", "0");
            e.movie = c + "?x=" + (Date.now ? Date.now() : +new Date);
            e.flashvars = a.join("&amp;");
            for (d in e) a = document.createElement("param"), a.setAttribute("name", d), a.setAttribute("value", e[d]), f.appendChild(a);
            b.outerHTML = f.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            b = document.createElement("embed");
            b.id = "jukebox-flashstream-" + this.id;
            b.setAttribute("type", "application/x-shockwave-flash");
            b.setAttribute("width", "100");
            b.setAttribute("height", "100");
            e.play = !1;
            e.loop = !1;
            e.src = c + "?x=" + (Date.now ? Date.now() : +new Date);
            for (d in e) b.setAttribute(d, e[d]);
            document.getElementsByTagName("body")[0].appendChild(b);
            this.context = b
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var a = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = a, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (a - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(a, b) {
        if (null !== this.isPlaying && !0 !== b) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(a, this.id);
        else {
            var c = this.settings.spritemap,
                d;
            if (void 0 !== c[a]) d = c[a].start;
            else if ("number" === typeof a) {
                d = a;
                for (var e in c)
                    if (d >= c[e].start && d <=
                        c[e].end) { a = e; break }
            }
            void 0 !== d && "[object Object]" === Object.prototype.toString.call(c[a]) && (this.isPlaying = this.settings.spritemap[a], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(d))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(a) {
        a = "number" === typeof a ? a : this.__lastPosition;
        if (null !== a) return this.play(a), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: { getVolume: function() { return this.context.volume || 1 }, setVolume: function(a) { this.context.volume = a; return 1E-4 > Math.abs(this.context.volume - a) ? !0 : !1 }, getCurrentTime: function() { return this.context.currentTime || 0 }, setCurrentTime: function(a) { try { return this.context.currentTime = a, !0 } catch (b) { return !1 } } },
    FLASHAPI: { getVolume: function() { return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1 }, setVolume: function(a) { return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(a), !0) : !1 }, getCurrentTime: function() { return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0 }, setCurrentTime: function(a) { return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(a) : !1 } }
};
(function() {
    var a = {},
        b = null,
        c = !0,
        d = !1;
    if ("undefined" !== typeof AudioContext) b = new AudioContext;
    else if ("undefined" !== typeof webkitAudioContext) b = new webkitAudioContext;
    else if ("undefined" !== typeof Audio) { c = !1; try { new Audio } catch (e) { d = !0 } } else c = !1, d = !0;
    if (c) {
        var f = "undefined" === typeof b.createGain ? b.createGainNode() : b.createGain();
        f.gain.value = 1;
        f.connect(b.destination)
    }
    var h = function() {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = c;
        this.noAudio = d;
        this._howls = []
    };
    h.prototype = {
        volume: function(a) {
            a = parseFloat(a);
            if (0 <= a && 1 >= a) {
                this._volume = a;
                c && (f.gain.value = a);
                for (var b in this._howls)
                    if (this._howls.hasOwnProperty(b) && !1 === this._howls[b]._webAudio)
                        for (a = 0; a < this._howls[b]._audioNode.length; a++) this._howls[b]._audioNode[a].volume = this._howls[b]._volume * this._volume;
                return this
            }
            return c ? f.gain.value : this._volume
        },
        mute: function() { this._setMuted(!0); return this },
        unmute: function() { this._setMuted(!1); return this },
        _setMuted: function(a) {
            this._muted = a;
            c && (f.gain.value = a ? 0 : this._volume);
            for (var b in this._howls)
                if (this._howls.hasOwnProperty(b) && !1 === this._howls[b]._webAudio)
                    for (var d = 0; d < this._howls[b]._audioNode.length; d++) this._howls[b]._audioNode[d].muted = a
        }
    };
    var j = new h,
        h = null;
    if (!d) var h = new Audio,
        l = { mp3: !!h.canPlayType("audio/mpeg;").replace(/^no$/, ""), opus: !!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""), ogg: !!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), wav: !!h.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), m4a: !!(h.canPlayType("audio/x-m4a;") || h.canPlayType("audio/aac;")).replace(/^no$/, ""), mp4: !!(h.canPlayType("audio/x-mp4;") || h.canPlayType("audio/aac;")).replace(/^no$/, ""), weba: !!h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") };
    var q = function(a) {
        this._autoplay = a.autoplay || !1;
        this._buffer = a.buffer || !1;
        this._duration = a.duration || 0;
        this._format = a.format || null;
        this._loop = a.loop || !1;
        this._loaded = !1;
        this._sprite = a.sprite || {};
        this._src = a.src || "";
        this._pos3d = a.pos3d || [0, 0, -0.5];
        this._volume = void 0 !== a.volume ? a.volume : 1;
        this._urls = a.urls || [];
        this._rate = a.rate || 1;
        this._onload = [a.onload || function() {}];
        this._onloaderror = [a.onloaderror || function() {}];
        this._onend = [a.onend || function() {}];
        this._onpause = [a.onpause || function() {}];
        this._onplay = [a.onplay || function() {}];
        this._onendTimer = [];
        this._webAudio = c && !this._buffer;
        this._audioNode = [];
        this._webAudio && this._setupAudioNode();
        j._howls.push(this);
        this.load()
    };
    q.prototype = {
        load: function() {
            var c = this,
                e = null;
            if (!d) {
                for (var f = 0; f < c._urls.length; f++) {
                    var h, q;
                    if (c._format) h = c._format;
                    else if (q = c._urls[f].toLowerCase().split("?")[0], h = (h = q.match(/.+\.([^?]+)(\?|$)/)) && 2 <= h.length ? h : q.match(/data\:audio\/([^?]+);/)) h = h[1];
                    else { c.on("loaderror"); return }
                    if (l[h]) { e = c._urls[f]; break }
                }
                if (e) {
                    c._src = e;
                    if (c._webAudio) {
                        var v = e;
                        if (v in a) c._duration = a[v].duration, m(c);
                        else {
                            var D = new XMLHttpRequest;
                            D.open("GET", v, !0);
                            D.responseType = "arraybuffer";
                            D.onload = function() { b.decodeAudioData(D.response, function(b) { b && (a[v] = b, m(c, b)) }, function() { c.on("loaderror") }) };
                            D.onerror = function() { c._webAudio && (c._buffer = !0, c._webAudio = !1, c._audioNode = [], delete c._gainNode, c.load()) };
                            try { D.send() } catch (Sa) { D.onerror() }
                        }
                    } else {
                        var z = new Audio;
                        c._audioNode.push(z);
                        z.src = e;
                        z._pos = 0;
                        z.preload = "auto";
                        z.volume = j._muted ? 0 : c._volume * j.volume();
                        a[e] = c;
                        var K = function() {
                            c._duration = Math.ceil(10 * z.duration) / 10;
                            0 === Object.getOwnPropertyNames(c._sprite).length && (c._sprite = { _default: [0, 1E3 * c._duration] });
                            c._loaded || (c._loaded = !0, c.on("load"));
                            c._autoplay && c.play();
                            z.removeEventListener("canplaythrough", K, !1)
                        };
                        z.addEventListener("canplaythrough", K, !1);
                        z.load()
                    }
                    return c
                }
            }
            c.on("loaderror")
        },
        urls: function(a) { return a ? (this.stop(), this._urls = "string" === typeof a ? [a] : a, this._loaded = !1, this.load(), this) : this._urls },
        play: function(c, d) {
            var e = this;
            "function" === typeof c && (d = c);
            if (!c || "function" === typeof c) c = "_default";
            if (!e._loaded) return e.on("load", function() { e.play(c, d) }), e;
            if (!e._sprite[c]) return "function" === typeof d && d(), e;
            e._inactiveNode(function(f) {
                f._sprite = c;
                var h = 0 < f._pos ? f._pos : e._sprite[c][0] / 1E3,
                    l = e._sprite[c][1] / 1E3 - f._pos,
                    m = !(!e._loop && !e._sprite[c][2]),
                    q = "string" === typeof d ? d : Math.round(Date.now() * Math.random()) + "",
                    z, K = { id: q, sprite: c, loop: m };
                z = setTimeout(function() {
                    !e._webAudio && m && e.stop(K.id, K.timer).play(c, K.id);
                    e._webAudio && !m && (e._nodeById(K.id).paused = !0, e._nodeById(K.id)._pos = 0);
                    !e._webAudio && !m && e.stop(K.id, K.timer);
                    e.on("end", q)
                }, 1E3 * l);
                e._onendTimer.push(z);
                K.timer = e._onendTimer[e._onendTimer.length - 1];
                if (e._webAudio) {
                    z = e._sprite[c][0] / 1E3;
                    var H = e._sprite[c][1] / 1E3;
                    f.id = q;
                    f.paused = !1;
                    z = [m, z, H];
                    H = e._nodeById(q);
                    H.bufferSource = b.createBufferSource();
                    H.bufferSource.buffer = a[e._src];
                    H.bufferSource.connect(H.panner);
                    H.bufferSource.loop = z[0];
                    z[0] && (H.bufferSource.loopStart = z[1], H.bufferSource.loopEnd = z[1] + z[2]);
                    H.bufferSource.playbackRate.value = e._rate;
                    e._playStart = b.currentTime;
                    f.gain.value = e._volume;
                    "undefined" === typeof f.bufferSource.start ? f.bufferSource.noteGrainOn(0, h, l) : f.bufferSource.start(0, h, l)
                } else if (4 === f.readyState) f.id = q, f.currentTime = h, f.muted = j._muted, f.volume = e._volume * j.volume(), setTimeout(function() { f.play() }, 0);
                else {
                    e._clearEndTimer(z);
                    var ua = c,
                        ia = d,
                        na = function() {
                            e.play(ua, ia);
                            f.removeEventListener("canplaythrough", na, !1)
                        };
                    f.addEventListener("canplaythrough", na, !1);
                    return e
                }
                e.on("play");
                "function" === typeof d && d(q);
                return e
            });
            return e
        },
        pause: function(a, b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() { c.pause(a) }), c;
            c._clearEndTimer(b || 0);
            var d = a ? c._nodeById(a) : c._activeNode();
            if (d)
                if (d._pos = c.pos(null, a), c._webAudio) {
                    if (!d.bufferSource || d.paused) return c;
                    d.paused = !0;
                    "undefined" === typeof d.bufferSource.stop ? d.bufferSource.noteOff(0) : d.bufferSource.stop(0)
                } else d.pause();
            c.on("pause");
            return c
        },
        stop: function(a, b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() { c.stop(a) }), c;
            c._clearEndTimer(b || 0);
            var d = a ? c._nodeById(a) : c._activeNode();
            if (d)
                if (d._pos = 0, c._webAudio) {
                    if (!d.bufferSource || d.paused) return c;
                    d.paused = !0;
                    "undefined" === typeof d.bufferSource.stop ? d.bufferSource.noteOff(0) : d.bufferSource.stop(0)
                } else d.pause(), d.currentTime = 0;
            return c
        },
        mute: function(a) {
            var b = this;
            if (!b._loaded) return b.on("play", function() { b.mute(a) }), b;
            var c = a ? b._nodeById(a) : b._activeNode();
            c && (b._webAudio ? c.gain.value = 0 : c.volume = 0);
            return b
        },
        unmute: function(a) {
            var b = this;
            if (!b._loaded) return b.on("play", function() { b.unmute(a) }), b;
            var c = a ? b._nodeById(a) : b._activeNode();
            c && (b._webAudio ? c.gain.value = b._volume : c.volume = b._volume);
            return b
        },
        volume: function(a, b) {
            var c = this;
            a = parseFloat(a);
            if (0 <= a && 1 >= a) {
                c._volume = a;
                if (!c._loaded) return c.on("play", function() { c.volume(a, b) }), c;
                var d = b ? c._nodeById(b) : c._activeNode();
                d && (c._webAudio ? d.gain.value = a : d.volume = a * j.volume());
                return c
            }
            return c._volume
        },
        loop: function(a) { return "boolean" === typeof a ? (this._loop = a, this) : this._loop },
        sprite: function(a) { return "object" === typeof a ? (this._sprite = a, this) : this._sprite },
        pos: function(a, c) {
            var d = this;
            if (!d._loaded) return d.on("load", function() { d.pos(a) }), "number" === typeof a ? d : d._pos || 0;
            a = parseFloat(a);
            var e = c ? d._nodeById(c) : d._activeNode();
            if (e) return 0 <= a ? (d.pause(c), e._pos = a, d.play(e._sprite, c), d) : d._webAudio ? e._pos + (b.currentTime - d._playStart) : e.currentTime;
            if (0 <= a) return d;
            for (e = 0; e < d._audioNode.length; e++)
                if (d._audioNode[e].paused && 4 === d._audioNode[e].readyState) return d._webAudio ? d._audioNode[e]._pos : d._audioNode[e].currentTime
        },
        pos3d: function(a, b, c, d) {
            var e = this;
            b = "undefined" === typeof b || !b ? 0 : b;
            c = "undefined" === typeof c || !c ? -0.5 : c;
            if (!e._loaded) return e.on("play", function() { e.pos3d(a, b, c, d) }), e;
            if (0 <= a || 0 > a) {
                if (e._webAudio) {
                    var f = d ? e._nodeById(d) : e._activeNode();
                    f && (e._pos3d = [a, b, c], f.panner.setPosition(a, b, c))
                }
            } else return e._pos3d;
            return e
        },
        fade: function(a, b, c, d, e) {
            var f = this,
                j = Math.abs(a - b),
                h = a > b ? "down" : "up",
                j = j / 0.01,
                l = c / j;
            if (!f._loaded) return f.on("load", function() { f.fade(a, b, c, d, e) }), f;
            f.volume(a, e);
            for (var m = 1; m <= j; m++)(function() {
                var a = Math.round(1E3 * (f._volume + ("up" === h ? 0.01 : -0.01) * m)) / 1E3;
                setTimeout(function() {
                    f.volume(a, e);
                    a === b && d && d()
                }, l * m)
            })()
        },
        fadeIn: function(a, b, c) { return this.volume(0).play().fade(0, a, b, c) },
        fadeOut: function(a, b, c, d) {
            var e = this;
            return e.fade(e._volume, a, b, function() {
                c && c();
                e.pause(d);
                e.on("end")
            }, d)
        },
        _nodeById: function(a) {
            for (var b =
                    this._audioNode[0], c = 0; c < this._audioNode.length; c++)
                if (this._audioNode[c].id === a) { b = this._audioNode[c]; break }
            return b
        },
        _activeNode: function() {
            for (var a = null, b = 0; b < this._audioNode.length; b++)
                if (!this._audioNode[b].paused) { a = this._audioNode[b]; break }
            this._drainPool();
            return a
        },
        _inactiveNode: function(a) {
            for (var b = null, c = 0; c < this._audioNode.length; c++)
                if (this._audioNode[c].paused && 4 === this._audioNode[c].readyState) {
                    a(this._audioNode[c]);
                    b = !0;
                    break
                }
            this._drainPool();
            if (!b) {
                var d;
                this._webAudio ? (d = this._setupAudioNode(), a(d)) : (this.load(), d = this._audioNode[this._audioNode.length - 1], d.addEventListener("loadedmetadata", function() { a(d) }))
            }
        },
        _drainPool: function() {
            var a = 0,
                b;
            for (b = 0; b < this._audioNode.length; b++) this._audioNode[b].paused && a++;
            for (b = this._audioNode.length - 1; 0 <= b && !(5 >= a); b--) this._audioNode[b].paused && (this._webAudio && this._audioNode[b].disconnect(0), a--, this._audioNode.splice(b, 1))
        },
        _clearEndTimer: function(a) {
            a = this._onendTimer.indexOf(a);
            a = 0 <= a ? a : 0;
            this._onendTimer[a] && (clearTimeout(this._onendTimer[a]), this._onendTimer.splice(a, 1))
        },
        _setupAudioNode: function() {
            var a = this._audioNode,
                c = this._audioNode.length;
            a[c] = "undefined" === typeof b.createGain ? b.createGainNode() : b.createGain();
            a[c].gain.value = this._volume;
            a[c].paused = !0;
            a[c]._pos = 0;
            a[c].readyState = 4;
            a[c].connect(f);
            a[c].panner = b.createPanner();
            a[c].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            a[c].panner.connect(a[c]);
            return a[c]
        },
        on: function(a, b) {
            var c = this["_on" + a];
            if ("function" === typeof b) c.push(b);
            else
                for (var d = 0; d < c.length; d++) b ? c[d].call(this, b) : c[d].call(this);
            return this
        },
        off: function(a, b) {
            for (var c = this["_on" + a], d = b.toString(), e = 0; e < c.length; e++)
                if (d === c[e].toString()) { c.splice(e, 1); break }
            return this
        },
        unload: function() {
            for (var b = this._audioNode, c = 0; c < this._audioNode.length; c++) b[c].paused || this.stop(b[c].id), this._webAudio ? b[c].disconnect(0) : b[c].src = "";
            b = j._howls.indexOf(this);
            null !== b && 0 <= b && j._howls.splice(b, 1);
            delete a[this._src]
        }
    };
    if (c) var m = function(a, b) {
        a._duration = b ? b.duration : a._duration;
        0 === Object.getOwnPropertyNames(a._sprite).length && (a._sprite = { _default: [0, 1E3 * a._duration] });
        a._loaded || (a._loaded = !0, a.on("load"));
        a._autoplay && a.play()
    };
    "function" === typeof define && define.amd && define(function() { return { Howler: j, Howl: q } });
    "undefined" !== typeof exports && (exports.Howler = j, exports.Howl = q);
    window.Howler = j;
    window.Howl = q
})();
(function(a) {
    Number.prototype.map = function(a, b, c, d) { return c + (d - c) * ((this - a) / (b - a)) };
    Number.prototype.limit = function(a, b) { return Math.min(b, Math.max(a, this)) };
    Number.prototype.round = function(a) { a = Math.pow(10, a || 0); return Math.round(this * a) / a };
    Number.prototype.floor = function() { return Math.floor(this) };
    Number.prototype.ceil = function() { return Math.ceil(this) };
    Number.prototype.toInt = function() { return this | 0 };
    Number.prototype.toRad = function() { return this / 180 * Math.PI };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(a) { for (var b = this.length; b--;) this[b] === a && this.splice(b, 1); return this };
    Array.prototype.random = function() { return this[Math.floor(Math.random() * this.length)] };
    Function.prototype.bind = Function.prototype.bind || function(a) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var b = Array.prototype.slice.call(arguments, 1),
            c = this,
            d = function() {},
            e = function() { return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments))) };
        d.prototype = this.prototype;
        e.prototype = new d;
        return e
    };
    a.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: a,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: a.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(a) { return "#" == a.charAt(0) ? document.getElementById(a.substr(1)) : document.getElementsByTagName(a) },
        $new: function(a) { return document.createElement(a) },
        copy: function(a) {
            if (!a || "object" != typeof a || a instanceof HTMLElement || a instanceof ig.Class) return a;
            if (a instanceof Array)
                for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = ig.copy(a[c]);
            else
                for (c in b = {}, a) b[c] = ig.copy(a[c]);
            return b
        },
        merge: function(a, b) {
            for (var c in b) {
                var d = b[c];
                if ("object" != typeof d || d instanceof HTMLElement || d instanceof ig.Class || null === d) a[c] = d;
                else {
                    if (!a[c] || "object" != typeof a[c]) a[c] = d instanceof Array ? [] : {};
                    ig.merge(a[c], d)
                }
            }
            return a
        },
        ksort: function(a) {
            if (!a || "object" != typeof a) return [];
            var b = [],
                c = [],
                d;
            for (d in a) b.push(d);
            b.sort();
            for (d = 0; d < b.length; d++) c.push(a[b[d]]);
            return c
        },
        setVendorAttribute: function(a, b, c) {
            var d = b.charAt(0).toUpperCase() + b.substr(1);
            a[b] = a["ms" + d] = a["moz" + d] = a["webkit" + d] = a["o" + d] = c
        },
        getVendorAttribute: function(a, b) { var c = b.charAt(0).toUpperCase() + b.substr(1); return a[b] || a["ms" + c] || a["moz" + c] || a["webkit" + c] || a["o" + c] },
        normalizeVendorAttribute: function(a, b) { var c = ig.getVendorAttribute(a, b);!a[b] && c && (a[b] = c) },
        getImagePixels: function(a, b, c, d, e) {
            var f = ig.$new("canvas");
            f.width = a.width;
            f.height = a.height;
            var h = f.getContext("2d");
            ig.System.SCALE.CRISP(f, h);
            var u = ig.getVendorAttribute(h, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(h, "getImageDataHD");
            var y = a.width / u,
                v = a.height / u;
            f.width = Math.ceil(y);
            f.height = Math.ceil(v);
            h.drawImage(a, 0, 0, y, v);
            return 1 === u ? h.getImageData(b, c, d, e) : h.getImageDataHD(b, c, d, e)
        },
        module: function(a) {
            if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
            if (ig.modules[a] && ig.modules[a].body) throw "Module '" + a + "' is already defined";
            ig._current = { name: a, requires: [], loaded: !1, body: null };
            ig.modules[a] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() { ig._current.requires = Array.prototype.slice.call(arguments); return ig },
        defines: function(a) {
            ig._current.body = a;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(a) { ig.resources.push(a) },
        setNocache: function(a) { ig.nocache = a ? "?" + Date.now() : "" },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(a, b) {
            ig.modules[a] = { name: a, requires: [], loaded: !1, body: null };
            ig._waitForOnload++;
            var c = ig.prefix + ig.lib + a.replace(/\./g, "/") + ".js" + ig.nocache,
                d = ig.$new("script");
            d.type = "text/javascript";
            d.src = c;
            d.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            d.onerror = function() { throw "Failed to load module " + a + " at " + c + " required from " + b; };
            ig.$("head")[0].appendChild(d)
        },
        _execModules: function() {
            for (var a = !1, b = 0; b < ig._loadQueue.length; b++) {
                for (var c = ig._loadQueue[b], d = !0, e = 0; e < c.requires.length; e++) {
                    var f = c.requires[e];
                    ig.modules[f] ? ig.modules[f].loaded || (d = !1) : (d = !1, ig._loadScript(f, c.name))
                }
                d && c.body && (ig._loadQueue.splice(b, 1), c.loaded = !0, c.body(), a = !0, b--)
            }
            if (a) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                a = [];
                for (b = 0; b < ig._loadQueue.length; b++) {
                    d = [];
                    f = ig._loadQueue[b].requires;
                    for (e = 0; e < f.length; e++) c = ig.modules[f[e]], (!c || !c.loaded) && d.push(f[e]);
                    a.push(ig._loadQueue[b].name + " (requires: " + d.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" +
                    a.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = a.devicePixelRatio || 1;
            ig.ua.viewport = { width: a.innerWidth, height: a.innerHeight };
            ig.ua.screen = { width: a.screen.availWidth * ig.ua.pixelRatio, height: a.screen.availHeight * ig.ua.pixelRatio };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.winPhone || /mobile/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in a || a.navigator.msMaxTouchPoints
        },
        _initDOMReady: function() { ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = { requires: [], loaded: !1, body: null }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), a.addEventListener("load", ig._DOMReady, !1))) }
    };
    ig.normalizeVendorAttribute(a, "requestAnimationFrame");
    if (a.requestAnimationFrame) {
        var b = 1,
            c = {};
        a.ig.setAnimation = function(d, e) {
            var f = b++;
            c[f] = !0;
            var h = function() { c[f] && (a.requestAnimationFrame(h, e), d()) };
            a.requestAnimationFrame(h, e);
            return f
        };
        a.ig.clearAnimation = function(a) { delete c[a] }
    } else a.ig.setAnimation = function(b) { return a.setInterval(b, 1E3 / 60) }, a.ig.clearAnimation = function(b) { a.clearInterval(b) };
    var d = !1,
        e = /xyz/.test(function() { xyz }) ? /\bparent\b/ : /.*/,
        f = 0;
    a.ig.Class = function() {};
    var h = function(a) {
        var b = this.prototype,
            c = {},
            d;
        for (d in a) "function" == typeof a[d] && "function" == typeof b[d] && e.test(a[d]) ? (c[d] = b[d], b[d] = function(a, b) {
            return function() {
                var d = this.parent;
                this.parent = c[a];
                var e = b.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(d, a[d])) : b[d] = a[d]
    };
    a.ig.Class.extend = function(b) {
        function c() {
            if (!d) {
                if (this.staticInstantiate) { var a = this.staticInstantiate.apply(this, arguments); if (a) return a }
                for (var b in this) "object" == typeof this[b] && (this[b] = ig.copy(this[b]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var q = this.prototype;
        d = !0;
        var m = new this;
        d = !1;
        for (var k in b) m[k] = "function" == typeof b[k] && "function" == typeof q[k] && e.test(b[k]) ? function(a, b) {
            return function() {
                var c = this.parent;
                this.parent = q[a];
                var d = b.apply(this, arguments);
                this.parent = c;
                return d
            }
        }(k, b[k]) : b[k];
        c.prototype = m;
        c.prototype.constructor = c;
        c.extend = a.ig.Class.extend;
        c.inject = h;
        c.classId = m.classId = ++f;
        return c
    };
    a.ImpactMixin && ig.merge(ig, a.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(a) { return ig.Image.cache[a] || null },
        init: function(a) {
            this.path = a;
            this.load()
        },
        load: function(a) { this.loaded ? a && a(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = a || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this) },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(a) {
            var b = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
                c = this.width * a,
                d = this.height * a,
                e = ig.$new("canvas");
            e.width = c;
            e.height = d;
            for (var f = e.getContext("2d"), h = f.getImageData(0, 0, c, d), j = 0; j < d; j++)
                for (var l = 0; l < c; l++) {
                    var q = 4 * (Math.floor(j / a) * this.width + Math.floor(l / a)),
                        m = 4 * (j * c + l);
                    h.data[m] = b.data[q];
                    h.data[m + 1] = b.data[q + 1];
                    h.data[m + 2] = b.data[q + 2];
                    h.data[m + 3] = b.data[q + 3]
                }
            f.putImageData(h, 0, 0);
            this.data = e
        },
        draw: function(a, b, c, d, e, f) {
            if (this.loaded) {
                var h = ig.system.scale;
                e = (e ? e : this.width) * h;
                f = (f ? f : this.height) * h;
                ig.system.context.drawImage(this.data, c ? c * h : 0, d ? d * h : 0, e, f, ig.system.getDrawPos(a), ig.system.getDrawPos(b), e, f);
                ig.Image.drawCount++
            }
        },
        drawTile: function(a, b, c, d, e, f, h) {
            e = e ? e : d;
            if (this.loaded && !(d > this.width || e > this.height)) {
                var j = ig.system.scale,
                    l = Math.floor(d * j),
                    q = Math.floor(e * j),
                    m = f ? -1 : 1,
                    k = h ? -1 : 1;
                if (f || h) ig.system.context.save(), ig.system.context.scale(m, k);
                ig.system.context.drawImage(this.data, Math.floor(c * d) % this.width * j, Math.floor(c * d / this.width) * e * j, l, q, ig.system.getDrawPos(a) * m - (f ? l : 0), ig.system.getDrawPos(b) * k - (h ? q : 0), l, q);
                (f || h) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() { for (var a in ig.Image.cache) ig.Image.cache[a].reload() }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(a) {
            this._loadMetrics(this.data);
            this.parent(a)
        },
        widthForString: function(a) { if (-1 !== a.indexOf("\n")) { a = a.split("\n"); for (var b = 0, c = 0; c < a.length; c++) b = Math.max(b, this._widthForLine(a[c])); return b } return this._widthForLine(a) },
        _widthForLine: function(a) {
            for (var b = 0, c = 0; c < a.length; c++) b += this.widthMap[a.charCodeAt(c) - this.firstChar] +
                this.letterSpacing;
            return b
        },
        heightForString: function(a) { return a.split("\n").length * (this.height + this.lineSpacing) },
        draw: function(a, b, c, d) {
            "string" != typeof a && (a = a.toString());
            if (-1 !== a.indexOf("\n")) { a = a.split("\n"); for (var e = this.height + this.lineSpacing, f = 0; f < a.length; f++) this.draw(a[f], b, c + f * e, d) } else {
                if (d == ig.Font.ALIGN.RIGHT || d == ig.Font.ALIGN.CENTER) f = this._widthForLine(a), b -= d == ig.Font.ALIGN.CENTER ? f / 2 : f;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (f = 0; f < a.length; f++) d = a.charCodeAt(f), b += this._drawChar(d - this.firstChar, b, c);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += a.length
            }
        },
        _drawChar: function(a, b, c) {
            if (!this.loaded || 0 > a || a >= this.indices.length) return 0;
            var d = ig.system.scale,
                e = this.widthMap[a] * d,
                f = (this.height - 2) * d;
            ig.system.context.drawImage(this.data, this.indices[a] * d, 0, e, f, ig.system.getDrawPos(b), ig.system.getDrawPos(c), e, f);
            return this.widthMap[a] + this.letterSpacing
        },
        _loadMetrics: function(a) {
            this.height = a.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var b = ig.getImagePixels(a, 0, a.height - 1, a.width, 1), c = 0, d = 0, e = 0; e < a.width; e++) {
                var f = 4 * e + 3;
                127 < b.data[f] ? d++ : 128 > b.data[f] && d && (this.widthMap.push(d), this.indices.push(e - d), c++, d = 0)
            }
            this.widthMap.push(d);
            this.indices.push(e - d)
        }
    });
    ig.Font.ALIGN = { LEFT: 0, RIGHT: 1, CENTER: 2 }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var a = new Audio, b = 0; b < ig.Sound.use.length; b++) { var c = ig.Sound.use[b]; if (a.canPlayType(c.mime)) { this.format = c; break } }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(a, b, c) {
            var d = ig.prefix + a.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[a]) {
                if (b && this.clips[a].length < ig.Sound.channels)
                    for (b = this.clips[a].length; b < ig.Sound.channels; b++) {
                        var e = new Audio(d);
                        e.load();
                        this.clips[a].push(e)
                    }
                return this.clips[a][0]
            }
            var f = new Audio(d);
            c && (f.addEventListener("canplaythrough", function j(b) {
                f.removeEventListener("canplaythrough", j, !1);
                c(a, !0, b)
            }, !1), f.addEventListener("error", function(b) { c(a, !1, b) }, !1));
            f.preload = "auto";
            f.load();
            this.clips[a] = [f];
            if (b)
                for (b = 1; b < ig.Sound.channels; b++) e = new Audio(d), e.load(), this.clips[a].push(e);
            return f
        },
        get: function(a) {
            a = this.clips[a];
            for (var b = 0, c; c = a[b++];)
                if (c.paused || c.ended) return c.ended && (c.currentTime = 0), c;
            a[0].pause();
            a[0].currentTime = 0;
            return a[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", { get: this.getVolume.bind(this), set: this.setVolume.bind(this) }), Object.defineProperty(this, "loop", { get: this.getLooping.bind(this), set: this.setLooping.bind(this) })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(a, b) {
            if (ig.Sound.enabled) {
                var c = ig.soundManager.load(a instanceof ig.Sound ? a.path : a, !1);
                c.loop = this._loop;
                c.volume = this._volume;
                c.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(c);
                b && (this.namedTracks[b] = c);
                this.currentTrack || (this.currentTrack = c)
            }
        },
        next: function() { this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play()) },
        pause: function() { this.currentTrack && this.currentTrack.pause() },
        stop: function() { this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0) },
        play: function(a) {
            if (a && this.namedTracks[a]) a = this.namedTracks[a], a != this.currentTrack && (this.stop(), this.currentTrack = a);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() { return this._loop },
        setLooping: function(a) { this._loop = a; for (var b in this.tracks) this.tracks[b].loop = a },
        getVolume: function() { return this._volume },
        setVolume: function(a) { this._volume = a.limit(0, 1); for (var b in this.tracks) this.tracks[b].volume = this._volume },
        fadeOut: function(a) { this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(a), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50)) },
        _fadeStep: function() {
            var a = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= a ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = a
        },
        _endedCallback: function() { this._loop ? this.play() : this.next() }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(a, b) {
            this.path = a;
            this.multiChannel = !1 !== b;
            this.load()
        },
        load: function(a) { ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, a) : ig.addResource(this) : a && a(this.path, !0) },
        play: function() { ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play()) },
        stop: function() { this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0) }
    });
    ig.Sound.FORMAT = { MP3: { ext: "mp3", mime: "audio/mpeg" }, M4A: { ext: "m4a", mime: "audio/mp4; codecs=mp4a" }, OGG: { ext: "ogg", mime: "audio/ogg; codecs=vorbis" }, WEBM: { ext: "webm", mime: "audio/webm; codecs=vorbis" }, CAF: { ext: "caf", mime: "audio/x-caf" } };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        _intervalLoad: null,
        loadIndex: 0,
        actualStatus: 0,
        init: function(a, b) {
            this.gameClass = a;
            this.resources = b;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var c = 0; c < this.resources.length; c++) this._unloaded.push(this.resources[c].path)
        },
        load: function() {
            ig.system.clear("#000");
            this.resources.length ? (this._intervalLoad = setInterval(this.loadRes.bind(this), 16), this._intervalId = setInterval(this.draw.bind(this), 16)) : this.end()
        },
        loadRes: function() { this.loadIndex > this.resources.length - 1 ? clearInterval(this._intervalLoad) : (this.loadResource(this.resources[this.loadIndex]), this.loadIndex++) },
        loadResource: function(a) { a.load(this._loadCallbackBound) },
        end: function() { this.done || (this.done = !0, clearInterval(this._intervalId), ig.system.setGame(this.gameClass)) },
        draw: function() {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            this._drawStatus < this.status && (this._drawStatus += (this.status - this._drawStatus) / 5);
            0.99 <= this._drawStatus && (0 == this._unloaded.length && (console.log("done"), setTimeout(this.end.bind(this), 150), clearInterval(this._intervalId)), this._drawStatus = 1);
            var a = ig.system.scale,
                b = 0.6 * ig.system.width,
                c = 0.1 * ig.system.height,
                d = 0.5 * ig.system.width - b / 2,
                e = 0.5 * ig.system.height - c / 2;
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(0, 0, 480, 320);
            ig.system.context.fillStyle = "#fff";
            ig.system.context.fillRect(d * a, e * a, b * a, c * a);
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(d * a + a, e * a + a, b * a - a - a, c * a - a - a);
            ig.system.context.fillStyle = "#fff";
            ig.system.context.fillRect(d * a, e * a, b * a * this._drawStatus, c * a)
        },
        _loadCallback: function(a, b) {
            if (b) this._unloaded.erase(a);
            else throw "Failed to load resource: " + a;
            this.status = 1 - this._unloaded.length / this.resources.length
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(a) {
            this.last = this.base = ig.Timer.time;
            this.target = a || 0
        },
        set: function(a) {
            this.target = a || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var a = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : a
        },
        delta: function() { return (this.pausedAt || ig.Timer.time) - this.base - this.target },
        pause: function() { this.pausedAt || (this.pausedAt = ig.Timer.time) },
        unpause: function() { this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0) }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var a = Date.now();
        ig.Timer.time += Math.min((a - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = a
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(a, b, c, d, e) {
            this.fps = b;
            this.clock = new ig.Timer;
            this.canvas = ig.$(a);
            this.resize(c, d, e);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(a, b, c) {
            this.width = a;
            this.height = b;
            this.scale = c || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(a) { this.running ? this.newGameClass = a : this.setGameNow(a) },
        setGameNow: function(a) {
            ig.game = new a;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(a) {
            if ("function" == typeof a.run) this.delegate = a, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(a) {
            this.context.fillStyle = a;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = { AUTHENTIC: function(a) { return Math.round(a) * this.scale }, SMOOTH: function(a) { return Math.round(a * this.scale) }, SUBPIXEL: function(a) { return a * this.scale } };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(a, b) {
            ig.setVendorAttribute(b, "imageSmoothingEnabled", !1);
            a.style.imageRendering = "-moz-crisp-edges";
            a.style.imageRendering = "-o-crisp-edges";
            a.style.imageRendering = "-webkit-optimize-contrast";
            a.style.imageRendering = "crisp-edges";
            a.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(a, b) {
            ig.setVendorAttribute(b, "imageSmoothingEnabled", !0);
            a.style.imageRendering = "";
            a.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = { MOUSE1: -1, MOUSE2: -3, MWHEEL_UP: -4, MWHEEL_DOWN: -5, BACKSPACE: 8, TAB: 9, ENTER: 13, PAUSE: 19, CAPS: 20, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT_ARROW: 37, UP_ARROW: 38, RIGHT_ARROW: 39, DOWN_ARROW: 40, INSERT: 45, DELETE: 46, _0: 48, _1: 49, _2: 50, _3: 51, _4: 52, _5: 53, _6: 54, _7: 55, _8: 56, _9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, NUMPAD_0: 96, NUMPAD_1: 97, NUMPAD_2: 98, NUMPAD_3: 99, NUMPAD_4: 100, NUMPAD_5: 101, NUMPAD_6: 102, NUMPAD_7: 103, NUMPAD_8: 104, NUMPAD_9: 105, MULTIPLY: 106, ADD: 107, SUBSTRACT: 109, DECIMAL: 110, DIVIDE: 111, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, SHIFT: 16, CTRL: 17, ALT: 18, PLUS: 187, COMMA: 188, MINUS: 189, PERIOD: 190 };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: { x: 0, y: 0 },
        accel: { x: 0, y: 0, z: 0 },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var a = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", a, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", a, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() { this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1)) },
        initAccelerometer: function() { this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1) },
        mousewheel: function(a) {
            var b = this.bindings[0 < (a.wheelDelta ? a.wheelDelta : -1 * a.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            b && (this.actions[b] = !0, this.presses[b] = !0, this.delayedKeyup[b] = !0, a.stopPropagation(), a.preventDefault())
        },
        mousemove: function(a) {
            var b = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                c = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                b = ig.system.scale * (b / ig.system.realWidth),
                c = ig.system.scale * (c / ig.system.realHeight),
                d = { left: 0, top: 0 };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            a = a.touches ? a.touches[0] : a;
            this.mouse.x = (a.clientX - d.left) / b;
            this.mouse.y = (a.clientY - d.top) / c
        },
        contextmenu: function(a) { this.bindings[ig.KEY.MOUSE2] && (a.stopPropagation(), a.preventDefault()) },
        keydown: function(a) {
            var b = a.target.tagName;
            if (!("INPUT" == b || "TEXTAREA" == b))
                if (b = "keydown" == a.type ? a.keyCode : 2 == a.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == a.type || "mousedown" == a.type) && this.mousemove(a), b = this.bindings[b]) this.actions[b] = !0, this.locks[b] || (this.presses[b] = !0, this.locks[b] = !0), a.stopPropagation(), a.preventDefault()
        },
        keyup: function(a) {
            var b = a.target.tagName;
            if (!("INPUT" == b || "TEXTAREA" == b))
                if (b = this.bindings["keyup" == a.type ? a.keyCode : 2 == a.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[b] = !0, a.stopPropagation(), a.preventDefault()
        },
        devicemotion: function(a) { this.accel = a.accelerationIncludingGravity },
        bind: function(a, b) {
            0 > a ? this.initMouse() : 0 < a && this.initKeyboard();
            this.bindings[a] = b
        },
        bindTouch: function(a, b) {
            var c = ig.$(a),
                d = this;
            c.addEventListener("touchstart", function(a) { d.touchStart(a, b) }, !1);
            c.addEventListener("touchend", function(a) { d.touchEnd(a, b) }, !1);
            c.addEventListener("MSPointerDown", function(a) { d.touchStart(a, b) }, !1);
            c.addEventListener("MSPointerUp", function(a) { d.touchEnd(a, b) }, !1)
        },
        unbind: function(a) {
            this.delayedKeyup[this.bindings[a]] = !0;
            this.bindings[a] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(a) { return this.actions[a] },
        pressed: function(a) { return this.presses[a] },
        released: function(a) { return !!this.delayedKeyup[a] },
        clearPressed: function() {
            for (var a in this.delayedKeyup) this.actions[a] = !1, this.locks[a] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(a, b) {
            this.actions[b] = !0;
            this.presses[b] = !0;
            a.stopPropagation();
            a.preventDefault();
            return !1
        },
        touchEnd: function(a, b) {
            this.delayedKeyup[b] = !0;
            a.stopPropagation();
            a.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(a, b, c, d, e, f, h) {
        ig.system = new ig.System(a, c, d, e, f || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new(h || ig.Loader)(b, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(a, b, c) {
            this.width = b;
            this.height = c;
            this.image = new ig.Image(a)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: { x: !1, y: !1 },
        pivot: { x: 0, y: 0 },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(a, b, c, d) {
            this.sheet = a;
            this.pivot = { x: a.width / 2, y: a.height / 2 };
            this.timer = new ig.Timer;
            this.frameTime = b;
            this.sequence = c;
            this.stop = !!d;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(a) {
            this.timer.set(this.frameTime * -a - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() { this.gotoFrame(Math.floor(Math.random() * this.sequence.length)) },
        update: function() {
            var a = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(a / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : a % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(a, b) {
            var c = Math.max(this.sheet.width, this.sheet.height);
            a > ig.system.width || (b > ig.system.height || 0 > a + c || 0 > b + c) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(a, b, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(a + this.pivot.x), ig.system.getDrawPos(b + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: { x: 16, y: 16 },
        offset: { x: 0, y: 0 },
        pos: { x: 0, y: 0 },
        last: { x: 0, y: 0 },
        vel: { x: 0, y: 0 },
        accel: { x: 0, y: 0 },
        friction: { x: 0, y: 0 },
        maxVel: { x: 100, y: 100 },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: { min: (44).toRad(), max: (136).toRad() },
        init: function(a, b, c) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = a;
            this.pos.y = this.last.y = b;
            ig.merge(this, c)
        },
        reset: function(a, b, c) {
            var d = this.constructor.prototype;
            this.pos.x = a;
            this.pos.y = b;
            this.last.x = a;
            this.last.y = b;
            this.vel.x = d.vel.x;
            this.vel.y = d.vel.y;
            this.accel.x = d.accel.x;
            this.accel.y = d.accel.y;
            this.health = d.health;
            this._killed = d._killed;
            this.standing = d.standing;
            this.type = d.type;
            this.checkAgainst = d.checkAgainst;
            this.collides = d.collides;
            ig.merge(this, c)
        },
        addAnim: function(a, b, c, d) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                a + " to.";
            b = new ig.Animation(this.animSheet, b, c, d);
            this.anims[a] = b;
            this.currentAnim || (this.currentAnim = b);
            return b
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var a = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(a);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(a, b, c, d) { return b ? (a + b * ig.system.tick).limit(-d, d) : c ? (b = c * ig.system.tick, 0 < a - b ? a - b : 0 > a + b ? a + b : 0) : a.limit(-d, d) },
        handleMovementTrace: function(a) {
            this.standing = !1;
            a.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            a.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (a.collision.slope) {
                var b = a.collision.slope;
                if (0 < this.bounciness) {
                    var c = this.vel.x * b.nx + this.vel.y * b.ny;
                    this.vel.x = (this.vel.x - 2 * b.nx * c) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * b.ny * c) * this.bounciness
                } else c = (this.vel.x * b.x + this.vel.y * b.y) / (b.x * b.x + b.y * b.y), this.vel.x = b.x * c, this.vel.y = b.y * c, b = Math.atan2(b.x, b.y), b > this.slopeStanding.min && b < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = a.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() { ig.game.removeEntity(this) },
        receiveDamage: function(a) {
            this.health -= a;
            0 >= this.health && this.kill()
        },
        touches: function(a) { return !(this.pos.x >= a.pos.x + a.size.x || this.pos.x + this.size.x <= a.pos.x || this.pos.y >= a.pos.y + a.size.y || this.pos.y + this.size.y <= a.pos.y) },
        distanceTo: function(a) {
            var b = this.pos.x + this.size.x / 2 - (a.pos.x + a.size.x / 2);
            a = this.pos.y + this.size.y / 2 - (a.pos.y + a.size.y / 2);
            return Math.sqrt(b * b + a * a)
        },
        angleTo: function(a) {
            return Math.atan2(a.pos.y +
                a.size.y / 2 - (this.pos.y + this.size.y / 2), a.pos.x + a.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = { NEVER: 0, LITE: 1, PASSIVE: 2, ACTIVE: 4, FIXED: 8 };
    ig.Entity.TYPE = { NONE: 0, A: 1, B: 2, BOTH: 3 };
    ig.Entity.checkPair = function(a, b) {
        a.checkAgainst & b.type && a.check(b);
        b.checkAgainst & a.type && b.check(a);
        a.collides && (b.collides && a.collides + b.collides > ig.Entity.COLLIDES.ACTIVE) && ig.Entity.solveCollision(a, b)
    };
    ig.Entity.solveCollision = function(a, b) {
        var c = null;
        if (a.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) c = a;
        else if (b.collides == ig.Entity.COLLIDES.LITE || a.collides == ig.Entity.COLLIDES.FIXED) c = b;
        a.last.x + a.size.x > b.last.x && a.last.x < b.last.x + b.size.x ? (a.last.y < b.last.y ? ig.Entity.seperateOnYAxis(a, b, c) : ig.Entity.seperateOnYAxis(b, a, c), a.collideWith(b, "y"), b.collideWith(a, "y")) : a.last.y + a.size.y > b.last.y && a.last.y < b.last.y + b.size.y && (a.last.x < b.last.x ? ig.Entity.seperateOnXAxis(a, b, c) : ig.Entity.seperateOnXAxis(b, a, c), a.collideWith(b, "x"), b.collideWith(a, "x"))
    };
    ig.Entity.seperateOnXAxis = function(a, b, c) {
        var d = a.pos.x + a.size.x - b.pos.x;
        c ? (c.vel.x = -c.vel.x * c.bounciness + (a === c ? b : a).vel.x, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, c == a ? -d : d, 0, c.size.x, c.size.y), c.pos.x = b.pos.x) : (c = (a.vel.x - b.vel.x) / 2, a.vel.x = -c, b.vel.x = c, c = ig.game.collisionMap.trace(a.pos.x, a.pos.y, -d / 2, 0, a.size.x, a.size.y), a.pos.x = Math.floor(c.pos.x), a = ig.game.collisionMap.trace(b.pos.x, b.pos.y, d / 2, 0, b.size.x, b.size.y), b.pos.x = Math.ceil(a.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(a, b, c) {
        var d = a.pos.y + a.size.y - b.pos.y;
        if (c) {
            b = a === c ? b : a;
            c.vel.y = -c.vel.y * c.bounciness + b.vel.y;
            var e = 0;
            c == a && Math.abs(c.vel.y - b.vel.y) < c.minBounceVelocity && (c.standing = !0, e = b.vel.x * ig.system.tick);
            a = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e, c == a ? -d : d, c.size.x, c.size.y);
            c.pos.y = a.pos.y;
            c.pos.x = a.pos.x
        } else ig.game.gravity && (b.standing || 0 < a.vel.y) ? (c = ig.game.collisionMap.trace(a.pos.x, a.pos.y, 0, -(a.pos.y + a.size.y - b.pos.y), a.size.x, a.size.y), a.pos.y = c.pos.y, 0 < a.bounciness && a.vel.y > a.minBounceVelocity ? a.vel.y *= -a.bounciness : (a.standing = !0, a.vel.y = 0)) : (c = (a.vel.y - b.vel.y) / 2, a.vel.y = -c, b.vel.y = c, e = b.vel.x * ig.system.tick, c = ig.game.collisionMap.trace(a.pos.x, a.pos.y, e, -d / 2, a.size.x, a.size.y), a.pos.y = c.pos.y, a = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, d / 2, b.size.x, b.size.y), b.pos.y = a.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(a, b) {
            this.tilesize = a;
            this.data = b;
            this.height = b.length;
            this.width = b[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(a, b) {
            var c = Math.floor(a / this.tilesize),
                d = Math.floor(b / this.tilesize);
            return 0 <= c && c < this.width && 0 <= d && d < this.height ? this.data[d][c] : 0
        },
        setTile: function(a, b, c) {
            a = Math.floor(a / this.tilesize);
            b = Math.floor(b /
                this.tilesize);
            0 <= a && a < this.width && (0 <= b && b < this.height) && (this.data[b][a] = c)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(a, b, e) {
            this.parent(a, b);
            this.tiledef = e || ig.CollisionMap.defaultTileDef;
            for (var f in this.tiledef) f | 0 > this.lastSlope && (this.lastSlope = f | 0)
        },
        trace: function(a, b, e, f, h, j) {
            var l = { collision: { x: !1, y: !1, slope: !1 }, pos: { x: a, y: b }, tile: { x: 0, y: 0 } },
                q = Math.ceil(Math.max(Math.abs(e), Math.abs(f)) / this.tilesize);
            if (1 < q)
                for (var m = e / q, k = f / q, p = 0; p < q && (m || k) && !(this._traceStep(l,
                        a, b, m, k, h, j, e, f, p), a = l.pos.x, b = l.pos.y, l.collision.x && (e = m = 0), l.collision.y && (f = k = 0), l.collision.slope); p++);
            else this._traceStep(l, a, b, e, f, h, j, e, f, 0);
            return l
        },
        _traceStep: function(a, b, e, f, h, j, l, q, m, k) {
            a.pos.x += f;
            a.pos.y += h;
            var p = 0;
            if (f) {
                var s = 0 < f ? j : 0,
                    u = 0 > f ? this.tilesize : 0,
                    p = Math.max(Math.floor(e / this.tilesize), 0),
                    y = Math.min(Math.ceil((e + l) / this.tilesize), this.height);
                f = Math.floor((a.pos.x + s) / this.tilesize);
                var v = Math.floor((b + s) / this.tilesize);
                if (0 < k || f == v || 0 > v || v >= this.width) v = -1;
                if (0 <= f && f < this.width)
                    for (var D =
                            p; D < y && !(-1 != v && (p = this.data[D][v], 1 < p && p <= this.lastSlope && this._checkTileDef(a, p, b, e, q, m, j, l, v, D))); D++)
                        if (p = this.data[D][f], 1 == p || p > this.lastSlope || 1 < p && this._checkTileDef(a, p, b, e, q, m, j, l, f, D)) {
                            if (1 < p && p <= this.lastSlope && a.collision.slope) break;
                            a.collision.x = !0;
                            a.tile.x = p;
                            b = a.pos.x = f * this.tilesize - s + u;
                            q = 0;
                            break
                        }
            }
            if (h) {
                s = 0 < h ? l : 0;
                h = 0 > h ? this.tilesize : 0;
                p = Math.max(Math.floor(a.pos.x / this.tilesize), 0);
                u = Math.min(Math.ceil((a.pos.x + j) / this.tilesize), this.width);
                D = Math.floor((a.pos.y + s) / this.tilesize);
                y = Math.floor((e + s) / this.tilesize);
                if (0 < k || D == y || 0 > y || y >= this.height) y = -1;
                if (0 <= D && D < this.height)
                    for (f = p; f < u && !(-1 != y && (p = this.data[y][f], 1 < p && p <= this.lastSlope && this._checkTileDef(a, p, b, e, q, m, j, l, f, y))); f++)
                        if (p = this.data[D][f], 1 == p || p > this.lastSlope || 1 < p && this._checkTileDef(a, p, b, e, q, m, j, l, f, D)) {
                            if (1 < p && p <= this.lastSlope && a.collision.slope) break;
                            a.collision.y = !0;
                            a.tile.y = p;
                            a.pos.y = D * this.tilesize - s + h;
                            break
                        }
            }
        },
        _checkTileDef: function(a, b, e, f, h, j, l, q, m, k) {
            var p = this.tiledef[b];
            if (!p) return !1;
            b = (p[2] -
                p[0]) * this.tilesize;
            var s = (p[3] - p[1]) * this.tilesize,
                u = p[4];
            l = e + h + (0 > s ? l : 0) - (m + p[0]) * this.tilesize;
            q = f + j + (0 < b ? q : 0) - (k + p[1]) * this.tilesize;
            if (0 < b * q - s * l) {
                if (0 > h * -s + j * b) return u;
                m = Math.sqrt(b * b + s * s);
                k = s / m;
                m = -b / m;
                var y = l * k + q * m,
                    p = k * y,
                    y = m * y;
                if (p * p + y * y >= h * h + j * j) return u || 0.5 > b * (q - j) - s * (l - h);
                a.pos.x = e + h - p;
                a.pos.y = f + j - y;
                a.collision.slope = { x: b, y: s, nx: k, ny: m };
                return !0
            }
            return !1
        }
    });
    var a = 1 / 3,
        b = 2 / 3;
    ig.CollisionMap.defaultTileDef = { 5: [0, 1, 1, b, !0], 6: [0, b, 1, a, !0], 7: [0, a, 1, 0, !0], 3: [0, 1, 1, 0.5, !0], 4: [0, 0.5, 1, 0, !0], 2: [0, 1, 1, 0, !0], 10: [0.5, 1, 1, 0, !0], 21: [0, 1, 0.5, 0, !0], 32: [b, 1, 1, 0, !0], 43: [a, 1, b, 0, !0], 54: [0, 1, a, 0, !0], 27: [0, 0, 1, a, !0], 28: [0, a, 1, b, !0], 29: [0, b, 1, 1, !0], 25: [0, 0, 1, 0.5, !0], 26: [0, 0.5, 1, 1, !0], 24: [0, 0, 1, 1, !0], 11: [0, 0, 0.5, 1, !0], 22: [0.5, 0, 1, 1, !0], 33: [0, 0, a, 1, !0], 44: [a, 0, b, 1, !0], 55: [b, 0, 1, 1, !0], 16: [1, a, 0, 0, !0], 17: [1, b, 0, a, !0], 18: [1, 1, 0, b, !0], 14: [1, 0.5, 0, 0, !0], 15: [1, 1, 0, 0.5, !0], 13: [1, 1, 0, 0, !0], 8: [0.5, 1, 0, 0, !0], 19: [1, 1, 0.5, 0, !0], 30: [a, 1, 0, 0, !0], 41: [b, 1, a, 0, !0], 52: [1, 1, b, 0, !0], 38: [1, b, 0, 1, !0], 39: [1, a, 0, b, !0], 40: [1, 0, 0, a, !0], 36: [1, 0.5, 0, 1, !0], 37: [1, 0, 0, 0.5, !0], 35: [1, 0, 0, 1, !0], 9: [1, 0, 0.5, 1, !0], 20: [0.5, 0, 0, 1, !0], 31: [1, 0, b, 1, !0], 42: [b, 0, a, 1, !0], 53: [a, 0, 0, 1, !0], 12: [0, 0, 1, 0, !1], 23: [1, 1, 0, 1, !1], 34: [1, 0, 1, 1, !1], 45: [0, 1, 0, 0, !1] };
    ig.CollisionMap.staticNoCollision = { trace: function(a, b, e, f) { return { collision: { x: !1, y: !1, slope: !1 }, pos: { x: a + e, y: b + f }, tile: { x: 0, y: 0 } } } }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: { x: 0, y: 0 },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(a, b, c) {
            this.parent(a, b);
            this.setTileset(c)
        },
        setTileset: function(a) {
            this.tilesetName = a instanceof ig.Image ? a.path : a;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(a, b) {
            this.scroll.x = a / this.distance;
            this.scroll.y = b / this.distance
        },
        preRenderMapToChunks: function() {
            var a = this.width * this.tilesize * ig.system.scale,
                b = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(a, b), this.chunkSize);
            var c = Math.ceil(a / this.chunkSize),
                d = Math.ceil(b / this.chunkSize);
            this.preRenderedChunks = [];
            for (var e = 0; e < d; e++) { this.preRenderedChunks[e] = []; for (var f = 0; f < c; f++) this.preRenderedChunks[e][f] = this.preRenderChunk(f, e, f == c - 1 ? a - f * this.chunkSize : this.chunkSize, e == d - 1 ? b - e * this.chunkSize : this.chunkSize) }
        },
        preRenderChunk: function(a, b, c, d) {
            var e = c / this.tilesize / ig.system.scale + 1,
                f = d / this.tilesize / ig.system.scale + 1,
                h = a * this.chunkSize / ig.system.scale % this.tilesize,
                j = b * this.chunkSize / ig.system.scale % this.tilesize;
            a = Math.floor(a * this.chunkSize / this.tilesize / ig.system.scale);
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            var l = ig.$new("canvas");
            l.width = c;
            l.height = d;
            l.retinaResolutionEnabled = !1;
            d = l.getContext("2d");
            ig.System.scaleMode(l, d);
            c = ig.system.context;
            ig.system.context = d;
            for (d = 0; d < e; d++)
                for (var q = 0; q < f; q++)
                    if (d + a < this.width && q + b < this.height) {
                        var m = this.data[q + b][d + a];
                        m && this.tiles.drawTile(d * this.tilesize - h, q * this.tilesize - j, m - 1, this.tilesize)
                    }
            ig.system.context = c;
            return l
        },
        draw: function() { this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled()) },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var a = ig.system.getDrawPos(this.scroll.x),
                b = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var c = this.width * this.tilesize * ig.system.scale,
                a = (a % c + c) % c,
                c = this.height * this.tilesize * ig.system.scale,
                b = (b % c + c) % c;
            var c = Math.max(Math.floor(a / this.chunkSize), 0),
                d = Math.max(Math.floor(b / this.chunkSize), 0),
                e = Math.ceil((a + ig.system.realWidth) / this.chunkSize),
                f = Math.ceil((b + ig.system.realHeight) / this.chunkSize),
                h = this.preRenderedChunks[0].length,
                j = this.preRenderedChunks.length;
            this.repeat || (e = Math.min(e, h), f = Math.min(f, j));
            for (var l = 0; d < f; d++) {
                for (var q = 0, m = c; m < e; m++) {
                    var k = this.preRenderedChunks[d % j][m % h],
                        p = -a + m * this.chunkSize - q,
                        s = -b + d * this.chunkSize - l;
                    ig.system.context.drawImage(k, p, s);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(p, s, this.chunkSize, this.chunkSize));
                    this.repeat && (k.width < this.chunkSize && p + k.width < ig.system.realWidth) && (q += this.chunkSize - k.width, e++)
                }
                this.repeat && (k.height < this.chunkSize && s + k.height < ig.system.realHeight) && (l += this.chunkSize - k.height, f++)
            }
        },
        drawTiled: function() {
            for (var a = 0, b = null, c = (this.scroll.x / this.tilesize).toInt(), d = (this.scroll.y / this.tilesize).toInt(), e = this.scroll.x % this.tilesize, f = this.scroll.y % this.tilesize, h = -e - this.tilesize, e = ig.system.width + this.tilesize - e, j = ig.system.height + this.tilesize - f, l = -1, f = -f - this.tilesize; f < j; l++, f += this.tilesize) {
                var q = l + d;
                if (q >= this.height || 0 > q) {
                    if (!this.repeat) continue;
                    q = (q % this.height + this.height) % this.height
                }
                for (var m = -1, k = h; k < e; m++, k += this.tilesize) {
                    a = m + c;
                    if (a >= this.width || 0 > a) {
                        if (!this.repeat) continue;
                        a = (a % this.width + this.width) % this.width
                    }
                    if (a = this.data[q][a])(b = this.anims[a -
                        1]) ? b.draw(k, f) : this.tiles.drawTile(k, f, a - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: { x: 0, y: 0 },
        _rscreen: { x: 0, y: 0 },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(a) {
            this.screen = { x: 0, y: 0 };
            this.entities = [];
            this.namedEntities = {};
            for (var b = 0; b < a.entities.length; b++) {
                var c = a.entities[b];
                this.spawnEntity(c.type, c.x, c.y, c.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (b = 0; b < a.layer.length; b++)
                if (c = a.layer[b], "collision" == c.name) this.collisionMap = new ig.CollisionMap(c.tilesize, c.data);
                else {
                    var d = new ig.BackgroundMap(c.tilesize, c.data, c.tilesetName);
                    d.anims = this.backgroundAnims[c.tilesetName] || {};
                    d.repeat = c.repeat;
                    d.distance = c.distance;
                    d.foreground = !!c.foreground;
                    d.preRender = !!c.preRender;
                    d.name = c.name;
                    this.backgroundMaps.push(d)
                }
            for (b = 0; b < this.entities.length; b++) this.entities[b].ready()
        },
        loadLevelDeferred: function(a) { this._levelToLoad = a },
        getMapByName: function(a) {
            if ("collision" == a) return this.collisionMap;
            for (var b = 0; b < this.backgroundMaps.length; b++)
                if (this.backgroundMaps[b].name == a) return this.backgroundMaps[b];
            return null
        },
        getEntityByName: function(a) { return this.namedEntities[a] },
        getEntitiesByType: function(a) {
            a = "string" === typeof a ? ig.global[a] : a;
            for (var b = [], c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                d instanceof a && !d._killed && b.push(d)
            }
            return b
        },
        spawnEntity: function(a, b, c, d) {
            var e = "string" === typeof a ? ig.global[a] : a;
            if (!e) throw "Can't spawn entity of type " + a;
            a = new e(b, c, d || {});
            this.entities.push(a);
            a.name && (this.namedEntities[a.name] = a);
            return a
        },
        sortEntities: function() { this.entities.sort(this.sortBy) },
        sortEntitiesDeferred: function() { this._doSortEntities = !0 },
        removeEntity: function(a) {
            a.name && delete this.namedEntities[a.name];
            a._killed = !0;
            a.type = ig.Entity.TYPE.NONE;
            a.checkAgainst = ig.Entity.TYPE.NONE;
            a.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(a)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var a = 0; a < this._deferredKill.length; a++) this._deferredKill[a].erase(), this.entities.erase(this._deferredKill[a]);
            this._deferredKill = [];
            if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var b in this.backgroundAnims) {
                var a = this.backgroundAnims[b],
                    c;
                for (c in a) a[c].update()
            }
        },
        updateEntities: function() {
            for (var a = 0; a < this.entities.length; a++) {
                var b = this.entities[a];
                b._killed || b.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var a;
            for (a = 0; a < this.backgroundMaps.length; a++) {
                var b =
                    this.backgroundMaps[a];
                if (b.foreground) break;
                b.setScreenPos(this.screen.x, this.screen.y);
                b.draw()
            }
            this.drawEntities();
            for (a; a < this.backgroundMaps.length; a++) b = this.backgroundMaps[a], b.setScreenPos(this.screen.x, this.screen.y), b.draw()
        },
        drawEntities: function() { for (var a = 0; a < this.entities.length; a++) this.entities[a].draw() },
        checkEntities: function() {
            for (var a = {}, b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                if (!(c.type == ig.Entity.TYPE.NONE && c.checkAgainst == ig.Entity.TYPE.NONE && c.collides == ig.Entity.COLLIDES.NEVER))
                    for (var d = {}, e = Math.floor(c.pos.y / this.cellSize), f = Math.floor((c.pos.x + c.size.x) / this.cellSize) + 1, h = Math.floor((c.pos.y + c.size.y) / this.cellSize) + 1, j = Math.floor(c.pos.x / this.cellSize); j < f; j++)
                        for (var l = e; l < h; l++)
                            if (a[j])
                                if (a[j][l]) {
                                    for (var q = a[j][l], m = 0; m < q.length; m++) c.touches(q[m]) && !d[q[m].id] && (d[q[m].id] = !0, ig.Entity.checkPair(c, q[m]));
                                    q.push(c)
                                } else a[j][l] = [c];
                else a[j] = {}, a[j][l] = [c]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(a, b) { return a.zIndex - b.zIndex },
        POS_X: function(a, b) {
            return a.pos.x + a.size.x - (b.pos.x +
                b.size.x)
        },
        POS_Y: function(a, b) { return a.pos.y + a.size.y - (b.pos.y + b.size.y) }
    }
});
ig.baked = !0;
ig.module("plugins.webkit-image-smoothing-patch").requires("impact.system").defines(function() {
    ig.System.SCALE = {
        CRISP: function(a, b) {
            b.imageSmoothingEnabled = b.msImageSmoothingEnabled = b.mozImageSmoothingEnabled = b.oImageSmoothingEnabled = !1;
            a.style.imageRendering = "-moz-crisp-edges";
            a.style.imageRendering = "-o-crisp-edges";
            a.style.imageRendering = "-webkit-optimize-contrast";
            a.style.imageRendering = "crisp-edges";
            a.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(a, b) {
            b.imageSmoothingEnabled = b.msImageSmoothingEnabled = b.mozImageSmoothingEnabled = b.oImageSmoothingEnabled = !0;
            a.style.imageRendering = "";
            a.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("plugins.windowfocus-onMouseDown-patch").requires("impact.input").defines(function() {
    ig.Input.keydown = function(a) {
        var b = a.target.tagName;
        if (!("INPUT" == b || "TEXTAREA" == b))
            if (b = "keydown" == a.type ? a.keyCode : 2 == a.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, 0 > b && window.focus(), ("touchstart" == a.type || "mousedown" == a.type) && this.mousemove(a), b = this.bindings[b]) this.actions[b] = !0, this.locks[b] || (this.presses[b] = !0, this.locks[b] = !0), a.stopPropagation(), a.preventDefault()
    }
});
ig.baked = !0;
ig.module("plugins.font-loaded-test").defines(function() {
    ig.FontLoadedTest = ig.Class.extend({
        testFont: function(a) {
            function b(a) {
                d.clearRect(0, 0, c.width, c.height);
                d.fillStyle = "rgba(0,0,0,1.0)";
                d.fillRect(0, 0, 40, 40);
                d.font = "20px " + a;
                d.textBaseline = "top";
                d.fillStyle = "rgba(255,255,255,1.0)";
                d.fillText("\u0630", 18, 5);
                return d.getImageData(0, 0, 40, 40)
            }
            if ("arial" == a.toLowerCase()) return !0;
            var c = ig.$new("canvas");
            c.width = 40;
            c.height = 40;
            var d = c.getContext("2d");
            a = b(a + ",arial");
            for (var e = b("arial"), f = !1, h = 0; h < a.data.length; h++)
                if (a.data[h] != e.data[h]) { f = !0; break }
            return !f ? !1 : !0
        }
    })
});
ig.baked = !0;
ig.module("game.loader.splash-loader").requires("impact.loader", "impact.animation", "plugins.font-loaded-test").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        bgImage: new ig.Image("media/game/graphics/game/loading/bg.png"),
        barbgImage: new ig.Image("media/game/graphics/game/loading/bar-bg.png"),
        barImage: new ig.Image("media/game/graphics/game/loading/bar.png"),
        font: "bachelorpadjl",
        loadingTextAlpha: 1,
        endTimeout: 500,
        statusPrecision: 0.99,
        statusDivisor: 5,
        fontPreloadTimeout: 100,
        loadingStage: 0,
        barRect: { x: 0, y: 0, w: 308, h: 45 },
        init: function(a, b) {
            this.parent(a, b);
            ig.apiHandler.run("MJSPreroll");
            this.barRect.x = (ig.system.width - this.barRect.w) / 2;
            this.barRect.y = ig.system.height - 240;
            this.fontTester = new ig.FontLoadedTest;
            addTextSpacing = !1;
            ig.ua.mobile || (addTextSpacing = !0)
        },
        end: function() {
            if (!this.done) {
                this.done = !0;
                clearInterval(this._intervalId);
                var a = 0 <= document.URL.indexOf("localhost") ? 250 : 750;
                window.setTimeout("ig.system.setGame(MyGame)", a)
            }
        },
        endFontPreload: function() { this.loadingStage = 2 },
        update: function() {
            this._drawStatus +=
                (this.status - this._drawStatus) / 5;
            this.actualStatus < this.status && (this.actualStatus += (this.status - this.actualStatus) / this.statusDivisor);
            this.actualStatus >= this.statusPrecision && (0 === this._unloaded.length && (setTimeout(this.end.bind(this), this.endTimeout), clearInterval(this._intervalId)), this.actualStatus = 1);
            if (0 == this.loadingStage) {
                ig.domHandler.show(ig.domHandler.getElementById("#ajaxbar"));
                if (!this.bgImage.loaded || !this.barbgImage.loaded || !this.barImage.loaded) return;
                this.loadingStage = 1
            }
            1 == this.loadingStage &&
                this.fontTester.testFont(this.font) && (this.loadingStage = 2, ig.domHandler.hide(ig.domHandler.getElementById("#ajaxbar")))
        },
        draw: function() {
            this.update();
            if (1 >= this.loadingStage) ig.system.context.font = "24px " + this.font, ig.system.context.fillText("", 0, 0);
            else {
                var a = ig.system.context;
                a.save();
                "undefined" != typeof $ && (a.fillStyle = $("body").css("background-color"), a.fillRect(0, 0, ig.system.width, ig.system.height));
                var b = 0;
                this.bgImage.width < ig.system.width ? a.scale(ig.system.width / this.bgImage.width, 1) : this.bgImage.width > ig.system.width && (b = -(this.bgImage.width - ig.system.width) / 2);
                this.bgImage.draw(b, 0);
                a.restore();
                var c;
                c = this.barRect.w;
                b = this.barRect.h;
                x0 = this.barRect.x;
                y0 = this.barRect.y;
                ig.system.context.save();
                a.translate(x0 + c / 2, y0);
                this.barbgImage.draw(-c / 2, -b / 2);
                c = this.barImage.width;
                var b = this.barImage.height,
                    d = this._drawStatus * c;
                a.drawImage(this.barImage.data, 0, 0, d, b, -c / 2 - 1, -b / 2 - 1, d, b);
                ig.system.context.font = "24px bachelorpadjl, Impact, Charcoal, sans-serif";
                d = _STRINGS.Loading.Loading;
                addTextSpacing && (d = d.split("").join(String.fromCharCode(8202)));
                c = ig.system.context.measureText("m").width;
                ig.system.context.lineWidth = 1;
                ig.system.context.strokeStyle = "rgba(0,0,0,0)";
                ig.system.context.globalAlpha = this.loadingTextAlpha;
                ig.system.context.textAlign = "center";
                ig.system.context.translate(0, b + c + 4 * c / 10 + 15);
                a = ig.system.context;
                this.loadTextLinGrad = a.createLinearGradient(0, -c, 0, 0);
                this.loadTextLinGrad.addColorStop(0, "#ffe400");
                this.loadTextLinGrad.addColorStop(1, "#fdac00");
                ig.system.context.fillStyle = this.loadTextLinGrad;
                ig.system.context.fillText(d, 0, 0);
                ig.system.context.restore()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (ig.domHandler.getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var a = ig.domHandler.getQueryVariable("webview");
            if (a) switch (a) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (a = ig.domHandler.getQueryVariable("debug")) switch (a) {
                case "true":
                    ig.game.showDebug(), console.log("debug mode")
            }
            switch (ig.domHandler.getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            ig.domHandler.getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("game.components.director").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(a, b) {
            this.game = a;
            this.levels = [];
            this.currentLevel = 0;
            this.append(b)
        },
        loadLevel: function(a) {
            for (var b in ig.sizeHandler.dynamicClickableEntityDivs) {
                var c = ig.domHandler.getElementById("#" + b);
                ig.domHandler.hide(c)
            }
            this.currentLevel = a;
            this.game.loadLevel(this.levels[a]);
            return !0
        },
        append: function(a) { newLevels = []; return "object" === typeof a ? (a.constructor === [].constructor ? newLevels = a : newLevels[0] = a, this.levels = this.levels.concat(newLevels), !0) : !1 },
        nextLevel: function() { return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1 },
        previousLevel: function() { return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1 },
        jumpTo: function(a) { var b = null; for (i = 0; i < this.levels.length; i++) this.levels[i] == a && (b = i); return 0 <= b ? this.loadLevel(b) : !1 },
        firstLevel: function() { return this.loadLevel(0) },
        lastLevel: function() { return this.loadLevel(this.levels.length - 1) },
        reloadLevel: function() { return this.loadLevel(this.currentLevel) }
    })
});
ig.baked = !0;
ig.module("game.components.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
        for (var b = 0; b < this.length; ++b)
            if (this[b] === a) return b;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var a = [], b = 0; b < this.tweens.length; b++) this.tweens[b].update(), this.tweens[b].complete || a.push(this.tweens[b]);
            this.tweens = a
        }
    };
    ig.Entity.prototype.tween = function(a, b, c) {
        a = new ig.Tween(this, a, b, c);
        this.tweens.push(a);
        return a
    };
    ig.Entity.prototype.pauseTweens = function() { for (var a = 0; a < this.tweens.length; a++) this.tweens[a].pause() };
    ig.Entity.prototype.resumeTweens = function() { for (var a = 0; a < this.tweens.length; a++) this.tweens[a].resume() };
    ig.Entity.prototype.stopTweens = function(a) { for (var b = 0; b < this.tweens.length; b++) this.tweens[b].stop(a) };
    ig.Tween = function(a, b, c, d) {
        var e = {},
            f = {},
            h = {},
            j = 0,
            l = !1,
            q = !1,
            m = !1;
        this.duration = c;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, d);
        this.loopNum = this.loopCount;
        this.chain = function(a) { m = a };
        this.initEnd = function(a, b, c) {
            if ("object" !== typeof b[a]) c[a] = b[a];
            else
                for (subprop in b[a]) c[a] || (c[a] = {}), this.initEnd(subprop, b[a], c[a])
        };
        this.initStart = function(a, b, c, d) {
            if ("object" !== typeof c[a]) "undefined" !== typeof b[a] && (d[a] = c[a]);
            else
                for (subprop in c[a]) d[a] || (d[a] = {}), "undefined" !== typeof b[a] && this.initStart(subprop, b[a], c[a], d[a])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            j = 0; - 1 == a.tweens.indexOf(this) && a.tweens.push(this);
            q = !0;
            l = new ig.Timer;
            for (var c in b) this.initEnd(c, b, f);
            for (c in f) this.initStart(c, f, a, e), this.initDelta(c, h, a, f)
        };
        this.initDelta = function(a, b, c, d) {
            if ("object" !== typeof d[a]) b[a] = d[a] - c[a];
            else
                for (subprop in d[a]) b[a] || (b[a] = {}), this.initDelta(subprop, b[a], c[a], d[a])
        };
        this.propUpdate = function(a, b, c, d, e) {
            if ("object" !== typeof c[a]) b[a] = "undefined" != typeof c[a] ? c[a] + d[a] * e : b[a];
            else
                for (subprop in c[a]) this.propUpdate(subprop, b[a], c[a], d[a], e)
        };
        this.propSet = function(a, b, c) {
            if ("object" !== typeof b[a]) c[a] = b[a];
            else
                for (subprop in b[a]) c[a] || (c[a] = {}), this.propSet(subprop, b[a], c[a])
        };
        this.update = function() {
            if (!q) return !1;
            if (this.delay) {
                if (l.delta() < this.delay) return;
                this.delay = 0;
                l.reset()
            }
            if (this.paused || this.complete) return !1;
            var b = (l.delta() + j) / this.duration,
                b = 1 < b ? 1 : b,
                c = this.easing(b);
            for (property in h) this.propUpdate(property, a, e, h, c);
            if (1 <= b) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    m && m.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in e) this.propSet(property, e, a);
                    j = 0;
                    l.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    b = {};
                    c = {};
                    ig.merge(b, f);
                    ig.merge(c, e);
                    ig.merge(e, b);
                    ig.merge(f, c);
                    for (property in f) this.initDelta(property, h, a, f);
                    j = 0;
                    l.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            j += l.delta()
        };
        this.resume = function() {
            this.paused = !1;
            l.reset()
        };
        this.stop = function(a) {
            a && (this.loop = this.complete = this.paused = !1, j += c, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = { Revert: 1, Reverse: 2 };
    ig.Tween.Easing = { Linear: {}, Quadratic: {}, Cubic: {}, Quartic: {}, Quintic: {}, Sinusoidal: {}, Exponential: {}, Circular: {}, Elastic: {}, Back: {}, Bounce: {} };
    ig.Tween.Easing.Linear.EaseNone = function(a) { return a };
    ig.Tween.Easing.Quadratic.EaseIn = function(a) { return a * a };
    ig.Tween.Easing.Quadratic.EaseOut = function(a) { return -a * (a - 2) };
    ig.Tween.Easing.Quadratic.EaseInOut = function(a) { return 1 > (a *= 2) ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1) };
    ig.Tween.Easing.Cubic.EaseIn = function(a) { return a * a * a };
    ig.Tween.Easing.Cubic.EaseOut = function(a) { return --a * a * a + 1 };
    ig.Tween.Easing.Cubic.EaseInOut = function(a) { return 1 > (a *= 2) ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2) };
    ig.Tween.Easing.Quartic.EaseIn = function(a) { return a * a * a * a };
    ig.Tween.Easing.Quartic.EaseOut = function(a) { return -(--a * a * a * a - 1) };
    ig.Tween.Easing.Quartic.EaseInOut = function(a) { return 1 > (a *= 2) ? 0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2) };
    ig.Tween.Easing.Quintic.EaseIn = function(a) { return a * a * a * a * a };
    ig.Tween.Easing.Quintic.EaseOut = function(a) { return (a -= 1) * a * a * a * a + 1 };
    ig.Tween.Easing.Quintic.EaseInOut = function(a) { return 1 > (a *= 2) ? 0.5 * a * a * a * a * a : 0.5 * ((a -= 2) * a * a * a * a + 2) };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(a) { return -Math.cos(a * Math.PI / 2) + 1 };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(a) { return Math.sin(a * Math.PI / 2) };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(a) { return -0.5 * (Math.cos(Math.PI * a) - 1) };
    ig.Tween.Easing.Exponential.EaseIn = function(a) { return 0 == a ? 0 : Math.pow(2, 10 * (a - 1)) };
    ig.Tween.Easing.Exponential.EaseOut = function(a) { return 1 == a ? 1 : -Math.pow(2, -10 * a) + 1 };
    ig.Tween.Easing.Exponential.EaseInOut = function(a) { return 0 == a ? 0 : 1 == a ? 1 : 1 > (a *= 2) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2) };
    ig.Tween.Easing.Circular.EaseIn = function(a) { return -(Math.sqrt(1 - a * a) - 1) };
    ig.Tween.Easing.Circular.EaseOut = function(a) { return Math.sqrt(1 - --a * a) };
    ig.Tween.Easing.Circular.EaseInOut = function(a) { return 1 > (a /= 0.5) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1) };
    ig.Tween.Easing.Elastic.EaseIn = function(a) {
        var b, c = 0.1,
            d = 0.4;
        if (0 == a) return 0;
        if (1 == a) return 1;
        d || (d = 0.3);
        !c || 1 > c ? (c = 1, b = d / 4) : b = d / (2 * Math.PI) * Math.asin(1 / c);
        return -(c * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - b) * 2 * Math.PI / d))
    };
    ig.Tween.Easing.Elastic.EaseOut = function(a) {
        var b, c = 0.1,
            d = 0.4;
        if (0 == a) return 0;
        if (1 == a) return 1;
        d || (d = 0.3);
        !c || 1 > c ? (c = 1, b = d / 4) : b = d / (2 * Math.PI) * Math.asin(1 / c);
        return c * Math.pow(2, -10 * a) * Math.sin((a - b) * 2 * Math.PI / d) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(a) {
        var b, c = 0.1,
            d = 0.4;
        if (0 == a) return 0;
        if (1 == a) return 1;
        d || (d = 0.3);
        !c || 1 > c ? (c = 1, b = d / 4) : b = d / (2 * Math.PI) * Math.asin(1 / c);
        return 1 > (a *= 2) ? -0.5 * c * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - b) * 2 * Math.PI / d) : 0.5 * c * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - b) * 2 * Math.PI / d) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(a) { return a * a * (2.70158 * a - 1.70158) };
    ig.Tween.Easing.Back.EaseOut = function(a) { return (a -= 1) * a * (2.70158 * a + 1.70158) + 1 };
    ig.Tween.Easing.Back.EaseInOut = function(a) { return 1 > (a *= 2) ? 0.5 * a * a * (3.5949095 * a - 2.5949095) : 0.5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2) };
    ig.Tween.Easing.Bounce.EaseIn = function(a) { return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - a) };
    ig.Tween.Easing.Bounce.EaseOut = function(a) { return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375 };
    ig.Tween.Easing.Bounce.EaseInOut = function(a) { return 0.5 > a ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * a) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * a - 1) + 0.5 }
});
ig.baked = !0;
ig.module("game.components.drawer").defines(function() {
    Drawer = ig.Class.extend({
        context: null,
        init: function(a) { this.context = a },
        fillRect: function(a, b, c, d, e) {
            this.setUsingOptions(e);
            this.context.fillRect(a, b, c, d)
        },
        roundRect: function(a, b, c, d, e, f) {
            this.setUsingOptions(f);
            d = c = !1;
            e = 5;
            "undefined" !== typeof f && ("undefined" !== typeof f.stroke && (d = f.stroke), "undefined" !== typeof f.fill && (c = f.fill), f.radius && !isNaN(f.radius) && (e = f.radius));
            if (d || c) this.context.beginPath(), this.context.moveTo(a + e, b), this.context.lineTo(a +
                width - e, b), this.context.quadraticCurveTo(a + width, b, a + width, b + e), this.context.lineTo(a + width, b + height - e), this.context.quadraticCurveTo(a + width, b + height, a + width - e, b + height), this.context.lineTo(a + e, b + height), this.context.quadraticCurveTo(a, b + height, a, b + height - e), this.context.lineTo(a, b + e), this.context.quadraticCurveTo(a, b, a + e, b), this.context.closePath(), d && this.context.stroke(), c && this.context.fill()
        },
        createGradient: function(a, b, c, d, e) { a = this.context.createLinearGradient(a, b, c, d); for (b = 0; b < e.length; b++) a.addColorStop(b, e[b]); return a },
        fillText: function(a, b, c, d) {
            this.setUsingOptions(d);
            a = a.split(/\r\n|\n\r|\n|\r|\\n/g);
            d = this.context.font.split("px");
            d = parseInt(d[0]);
            for (var e = 0; e < a.length; e++) this.context.fillText(a[e], b, c + e * d)
        },
        setUsingOptions: function(a) { a && (a.color && (this.context.fillStyle = a.color), a.font && (this.context.font = a.font), a.globalAlpha && (this.context.globalAlpha = a.globalAlpha)) }
    })
});
ig.baked = !0;
ig.module("game.sound.sound-list").defines(function() { SoundList = ig.Class.extend({ sfx: { kittyopeningSound: { path: "media/game/audio/opening/kittyopening" }, staticSound: { path: "media/game/audio/play/static" }, openingSound: { path: "media/game/audio/opening/opening" }, button: { path: "media/game/audio/sfx/release" }, monsterhit: { path: "media/game/audio/sfx/hit" }, monsterdied1: { path: "media/game/audio/sfx/juicy" }, monsterdied2: { path: "media/game/audio/sfx/juicy2" }, bossdied: { path: "media/game/audio/sfx/boom" }, herohit1: { path: "media/game/audio/sfx/fleshyhit" }, herohit2: { path: "media/game/audio/sfx/stabbing" }, herodied: { path: "media/game/audio/sfx/bighit" }, drop: { path: "media/game/audio/sfx/drop" }, potiondrink: { path: "media/game/audio/sfx/potion" }, fillup: { path: "media/game/audio/sfx/fillup" }, megaslash: { path: "media/game/audio/sfx/megaslash" }, shieldsup: { path: "media/game/audio/sfx/shieldhit" }, coinpickup: { path: "media/game/audio/sfx/coinpickup" }, pickup: { path: "media/game/audio/sfx/pickup" }, buy: { path: "media/game/audio/sfx/buy" } }, bgm: { background: { path: "media/game/audio/music/bgm", startOgg: 0, endOgg: 40, startMp3: 0, endMp3: 40 } } }) });
ig.baked = !0;
ig.module("game.sound.sound-player").defines(function() { SoundPlayer = ig.Class.extend({ tagName: "SoundPlayer", muteFlag: !1, debug: !1, init: function() { this.debug && console.log(this.tagName) }, play: function(a) { this.debug && console.log("play sound ", a) }, stop: function() { this.debug && console.log("stop sound ") }, volume: function() { this.debug && console.log("set volume") }, mute: function(a) { this.debug && console.log("mute"); "undefined" === typeof a ? this.muteFlag = !0 : a.flagChange && (this.muteFlag = !0) }, unmute: function(a) { this.debug && console.log("unmute"); "undefined" === typeof a ? this.muteFlag = !1 : a.flagChange && (this.muteFlag = !1) } }) });
ig.baked = !0;
ig.module("game.sound.impact-music-player").requires("game.sound.sound-player").defines(function() {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(a, b) {
            this.parent(a, b);
            for (var c in a) this.soundList[c] = c, ig.music.add(a[c].path + ".*", c);
            b && b.loop && (ig.music.loop = b.loop)
        },
        play: function(a) { this.muteFlag || (this.bgmPlaying = !0, "undefined" === typeof a ? ig.music.play(a) : ig.music.play()) },
        stop: function() {
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function(a) {
            console.log("impactmusic:", a);
            ig.music.volume = 0 > a ? 0 : isNaN(a) ? 1 : 1 < a ? 1 : a
        },
        getVolume: function() { return ig.music.volume },
        mute: function(a) {
            this.parent(a);
            this.bgmPlaying && this.stop()
        },
        unmute: function(a) {
            this.parent(a);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("game.sound.impact-sound-player").requires("game.sound.sound-player").defines(function() {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function(a, b) {
            this.parent(a, b);
            for (var c in a) {
                var d = new ig.Sound(a[c].path + ".*");
                this.soundList[c] = d
            }
        },
        play: function(a) { this.muteFlag || ("object" === typeof a ? (console.log(a + " exists"), a.play()) : "string" === typeof a && this.soundList[a].play()) },
        stop: function(a) {
            this.parent(a);
            a.stop()
        },
        volume: function(a) { ig.soundManager.volume = 0 > a ? 0 : isNaN(a) ? 1 : 1 < a ? 1 : a },
        getVolume: function() { return ig.soundManager.volume },
        mute: function(a) {
            this.parent(a);
            ig.Sound.enabled = !1
        },
        unmute: function(a) {
            this.parent(a);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("game.sound.howler-player").requires("game.sound.sound-player").defines(function() {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function(a, b) {
            this.parent(a, b);
            for (var c in a) {
                var d = a[c].path,
                    d = new Howl({ urls: [d + "." + ig.Sound.FORMAT.OGG.ext, d + "." + ig.Sound.FORMAT.MP3.ext] });
                this.soundList[c] = d
            }
        },
        play: function(a) { this.muteFlag || ("object" === typeof a ? a.play() : "string" === typeof a && this.soundList[a].play()) },
        stop: function(a) {
            this.parent(a);
            a.stop()
        },
        volume: function(a) {
            for (var b in this.soundList) {
                if (0 > a) { this.soundList[b].volume(0); break }
                isNaN(a) ? this.soundList[b].volume(1) : 1 < a ? this.soundList[b].volume(1) : this.soundList[b].volume(a)
            }
        },
        getVolume: function() { for (var a in this.soundList) return this.soundList[a].volume() },
        mute: function(a) {
            this.parent(a);
            Howler.mute()
        },
        unmute: function(a) {
            this.parent(a);
            Howler.unmute()
        }
    })
});
ig.baked = !0;
ig.module("game.sound.howler-music-player").requires("game.sound.sound-player").defines(function() {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(a, b) {
            this.parent(a, b);
            for (var c in a) {
                var d = a[c].path,
                    d = new Howl({
                        urls: [d + "." + ig.Sound.FORMAT.OGG.ext, d + "." + ig.Sound.FORMAT.MP3.ext],
                        loop: !0,
                        autoplay: !1,
                        onend: function() {
                            this.bgmPlaying = !1;
                            this.play()
                        }.bind(this)
                    });
                this.soundList[c] = d
            }
        },
        play: function(a) {
            if (!this.muteFlag && !this.bgmPlaying)
                if ("object" === typeof a) this.bgmPlaying = !0, a.play();
                else if ("string" === typeof a) this.bgmPlaying = !0, this.soundList[a].play();
            else
                for (var b in this.soundList) {
                    this.soundList[b].play();
                    this.bgmPlaying = !0;
                    break
                }
        },
        stop: function(a) {
            this.parent(a);
            if (this.bgmPlaying) {
                for (var b in this.soundList) this.soundList[b].stop();
                this.bgmPlaying = !1
            }
        },
        volume: function(a) {
            for (var b in this.soundList) {
                if (0 > a) { this.soundList[b].volume(0); break }
                isNaN(a) ? this.soundList[b].volume(1) : 1 < a ? this.soundList[b].volume(1) : this.soundList[b].volume(a)
            }
        },
        getVolume: function() { for (var a in this.soundList) return this.soundList[a].volume() },
        mute: function(a) {
            this.parent(a);
            Howler.mute()
        },
        unmute: function(a) {
            this.parent(a);
            Howler.unmute()
        }
    })
});
ig.baked = !0;
ig.module("game.sound.jukebox-player").requires("game.sound.sound-player").defines(function() {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.0010,
        init: function(a, b) {
            this.parent(a, b);
            for (var c in a) {
                this.soundList[c] = c;
                var d = a[c].path;
                this.jukeboxPlayer = new jukebox.Player({ resources: [d + "." + ig.Sound.FORMAT.OGG.ext, d + "." + ig.Sound.FORMAT.MP3.ext], autoplay: !1, spritemap: { music: { start: a[c].startMp3, end: a[c].endMp3, loop: !0 } } })
            }
        },
        play: function() { this.muteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume()) },
        stop: function() {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function(a) {
            console.log("jukebox:", a);
            0 >= a ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(a) ? this.jukeboxPlayer.setVolume(1) : 1 < a ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(a)
        },
        getVolume: function() { return this.jukeboxPlayer.getVolume() },
        mute: function(a) {
            this.parent(a);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.muteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function(a) {
            this.parent(a);
            this.muteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("game.sound.webaudio-music-player").requires("game.sound.sound-player").defines(function() {
    WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        pausedTime: 0,
        webaudio: null,
        soundList: {},
        init: function(a, b) {
            this.parent(a, b);
            this.webaudio = { compatibility: {}, gainNode: null, buffer: null, source_loop: {}, source_once: {} };
            try { this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, this.isSupported = !0 } catch (c) { console.log("Web Audio API not supported in this browser."); return }
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            var d = "start",
                e = "stop",
                f = this.webaudio.context.createBufferSource();
            "function" !== typeof f.start && (d = "noteOn");
            this.webaudio.compatibility.start = d;
            "function" !== typeof f.stop && (e = "noteOff");
            this.webaudio.compatibility.stop = e;
            for (var h in a) {
                this.soundList[h] = h;
                var e = a[h].path,
                    d = e + "." + ig.Sound.FORMAT.MP3.ext,
                    j = e + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS && (j = d) : (e = navigator.userAgent.toLowerCase(), -1 != e.indexOf("safari") && -1 >= e.indexOf("chrome") && (j = d));
                var l = new XMLHttpRequest;
                l.open("GET", j, !0);
                l.responseType = "arraybuffer";
                l.onload = function() {
                    this.webaudio.context.decodeAudioData(l.response, function(a) {
                        this.webaudio.buffer = a;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function() { console.log('Error decoding audio "' + j + '".') })
                }.bind(this);
                l.send();
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            var a = function() {
                var b = ig.soundHandler.bgmPlayer.webaudio.context,
                    c = b.createBuffer(1, 1, 22050),
                    d = b.createBufferSource();
                d.buffer = c;
                d.connect(b.destination);
                "undefined" === typeof d.start ? d.noteOn(0) : d.start(0);
                setTimeout(function() {
                    (d.playbackState === d.PLAYING_STATE || d.playbackState === d.FINISHED_STATE) && window.removeEventListener("touchend", a, !1)
                }, 0)
            };
            window.addEventListener("touchend", a, !1)
        },
        play: function() {
            if (this.isSupported)
                if (this.webaudio.buffer) {
                    if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                        this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                        this.webaudio.source_loop.buffer = this.webaudio.buffer;
                        this.webaudio.source_loop.loop = !0;
                        this.webaudio.source_loop.connect(this.webaudio.gainNode);
                        var a = 0;
                        this.pausedTime && (a = this.pausedTime);
                        this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                        if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, a, this.webaudio.buffer.duration - a), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration - a));
                        else this.webaudio.source_loop[this.webaudio.compatibility.start](0, a);
                        this.webaudio.source_loop._playing = !0
                    }
                } else this.bgmPlaying = !0
        },
        stop: function() { this.bgmPlaying = !1; if (this.isSupported && this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime = this.webaudio.context.currentTime % this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0) },
        volume: function(a) { this.isSupported && this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = a) },
        getVolume: function() { return !this.isSupported || !this.webaudio.gainNode ? 0 : this.webaudio.gainNode.gain.value },
        mute: function(a) {
            this.parent(a);
            this.bgmPlaying && this.stop()
        },
        unmute: function(a) {
            this.parent(a);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("game.handlers.sound-handler").requires("game.sound.impact-music-player", "game.sound.impact-sound-player", "game.sound.howler-player", "game.sound.howler-music-player", "game.sound.jukebox-player", "game.sound.webaudio-music-player").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        init: function(a) {
            console.log("Initiating sound handler");
            if ("undefined" === typeof a) throw "Sound List is undefined in SoundHandler.Please initialize with a sound list";
            this.initWindowHandler();
            ig.ua.mobile ? (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(a.bgm, { loop: !0 }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(a.bgm, { loop: !0 }))) : (this.bgmPlayer = new WebaudioMusicPlayer(a.bgm, { loop: !0 }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(a.bgm, { loop: !0 })));
            this.sfxPlayer = new HowlerPlayer(a.sfx)
        },
        checkBGM: function() { return this.bgmPlayer.muteFlag },
        checkSFX: function() { return this.sfxPlayer.muteFlag },
        muteAll: function(a) {
            this.bgmPlayer && this.bgmPlayer.mute({ flagChange: a });
            this.sfxPlayer && this.sfxPlayer.mute({ flagChange: a })
        },
        unmuteAll: function(a) {
            this.bgmPlayer && this.bgmPlayer.unmute({ flagChange: a });
            this.sfxPlayer && this.sfxPlayer.unmute({ flagChange: a })
        },
        forceMuteAll: function() {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function() { this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1) },
        initWindowHandler: function() { "true" === ig.domHandler.getQueryVariable("webview") && $(window).focus(function() { ig.soundHandler && ig.soundHandler.forceUnMuteAll() }) },
        forceUnMuteAll: function() { this.focusBlurMute && (this.unmuteAll(), this.focusBlurMute = !1) },
        initWindowHandler: function() {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
                ig.game && ig.game.resume();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function() {
                ig.game && ig.game.pause();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function() {
                ig.game && ig.game.resume();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function() {
                ig.game && ig.game.pause();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        },
        initPowerButtonFix: function() {
            var a = this.getHiddenProp();
            a && (a = a.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(a, this.visChange));
            window.addEventListener("pagehide", function() { ig.soundHandler && ig.soundHandler.forceMuteAll() }, !1);
            window.addEventListener("pageshow", function() { ig.soundHandler && ig.soundHandler.forceUnMuteAll() }, !1)
        },
        getHiddenProp: function() {
            var a = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var b = 0; b < a.length; b++)
                if (a[b] + "Hidden" in document) return a[b] + "Hidden";
            return null
        },
        isHidden: function() { var a = this.getHiddenProp(); return !a ? !1 : document[a] },
        visChange: function() { ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.soundHandler && ig.soundHandler.forceUnMuteAll() },
        saveVolume: function() {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function() {
            var a;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var b = this.bgmPlayer.jukeboxPlayer;
                if (b) {
                    null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
                    a = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var c = 0.1;
                    ig.ua.mobile && (c = 0.115, ig.ua.android && (c = 0.45, a && (c = 0.3)));
                    b.settings.spritemap.music && (a = b.settings.spritemap.music.end - c, b.getCurrentTime() >= a && (a = b.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (b.play(a, !0), this.forcelooped = !0, setTimeout(function() { ig.soundHandler.forcelooped = !1 }, c)) : b.setCurrentTime(a)))
                } else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), a = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), c = 0.1, ig.ua.mobile && (c = 0.115, ig.ua.android && (c = 0.45, a && (c = 0.3))), b = 0, "mp3" == ig.soundManager.format.ext && (b = 0.05), ig.music.currentTrack && (a = ig.music.currentTrack.duration -
                    c, ig.music.currentTrack.currentTime >= a && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = b, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() { ig.soundHandler.forcelooped = !1 }, c)) : ig.music.currentTrack.currentTime = b)))
            }
        }
    })
});
ig.baked = !0;
ig.module("game.handlers.dom-handler").defines(function() {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function() { this.JQUERYAVAILABLE = this._jqueryAvailable() },
        _jqueryAvailable: function() { return "undefined" !== typeof jQuery },
        addEvent: function(a, b, c, d) {
            if (this.JQUERYAVAILABLE) a.on(b, c);
            else a.addEventListener(b, c, d)
        },
        create: function(a) { return this.JQUERYAVAILABLE ? $("<" + a + ">") : ig.$new(a) },
        getElementByClass: function(a) { return this.JQUERYAVAILABLE ? $("." + a) : document.getElementsByClassName(a) },
        getElementById: function(a) { return this.JQUERYAVAILABLE ? 0 < $(a).length ? $(a) : null : ig.$(a) },
        appendChild: function(a, b) { this.JQUERYAVAILABLE ? a.append(b) : a.appendChild(b) },
        appendToBody: function(a) { this.JQUERYAVAILABLE ? $("body").append(a) : document.body.appendChild(a) },
        resize: function(a, b, c) {
            if (this.JQUERYAVAILABLE) a.width(b.toFixed(2)), a.height(c.toFixed(2));
            else {
                var d = a.style.visibility;
                b = "width:" + b.toFixed(2) + "px; height:" + c.toFixed(2) + "px;";
                this.attr(a, "style", b);
                a.style.visibility = d
            }
        },
        resizeOffsetLeft: function(a, b, c, d) {
            if (this.JQUERYAVAILABLE) a.width(b.toFixed(2)), a.height(c.toFixed(2)), a.css("left", d);
            else {
                var e = a.style.visibility;
                b = "width:" + b.toFixed(2) + "px; height:" + c.toFixed(2) + "px; left: " + d.toFixed(2) + "px;";
                this.attr(a, "style", b);
                a.style.visibility = e
            }
        },
        css: function(a, b) {
            if (this.JQUERYAVAILABLE) a.css(b);
            else {
                var c = "",
                    d;
                for (d in b) c += d + ":" + b[d] + ";";
                this.attr(a, "style", c)
            }
        },
        getOffsets: function(a) { return this.JQUERYAVAILABLE ? (a = a.offset(), { left: a.left, top: a.top }) : { left: a.offsetLeft, top: a.offsetTop } },
        attr: function(a, b, c) {
            if ("undefined" === typeof c) return this.JQUERYAVAILABLE ? a.attr(b) : a.getAttribute(b);
            this.JQUERYAVAILABLE ? a.attr(b, c) : a.setAttribute(b, c)
        },
        show: function(a) { this.JQUERYAVAILABLE ? (a.show(), a.css("visibility", "visible")) : a && (a.style ? a.style.visibility = "visible" : a[0] && (a[0].style.visibility = "visible")) },
        hide: function(a) { this.JQUERYAVAILABLE ? (a.hide(), a.css("visibility", "hidden")) : a && (a.style ? a.style.visibility = "hidden" : a[0] && (a[0].style.visibility = "hidden")) },
        getQueryVariable: function(a) { for (var b = window.location.search.substring(1).split("&"), c = 0; c < b.length; c++) { var d = b[c].split("="); if (decodeURIComponent(d[0]) == a) return decodeURIComponent(d[1]) } },
        forcedDeviceDetection: function() {
            var a = this.getQueryVariable("device");
            if (a) switch (a) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function() {
            var a = this.getQueryVariable("force-rotate");
            if (a) switch (a) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("game.data.vector").defines(function() { Vector2 = ig.Class.extend({ x: null, y: null, valType: "number", init: function(a, b) { typeof a === this.valType && typeof b === this.valType && (this.x = a, this.y = b) }, row: function(a) { typeof a === this.valType && (this.y = a); return this.y }, col: function(a) { typeof a === this.valType && (this.x = a); return this.x } }) });
ig.baked = !0;
ig.module("game.handlers.size-handler").requires("game.data.vector").defines(function() {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !0,
        desktop: { actualSize: new Vector2(window.innerWidth, window.innerHeight), actualResolution: new Vector2(480, 640) },
        mobile: { actualSize: new Vector2(window.innerWidth, window.innerHeight), actualResolution: new Vector2(480, 640) },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
            MobileAdInGamePreroll: { "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2, "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20 },
            MobileAdInGameEnd: { "box-width": _SETTINGS.Ad.Mobile.End.Width + 2, "box-height": _SETTINGS.Ad.Mobile.End.Height + 20 },
            MobileAdInGamePreroll2: { "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2, "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20 },
            MobileAdInGameEnd2: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width +
                    2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            },
            MobileAdInGamePreroll3: { "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2, "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20 },
            MobileAdInGameEnd3: { "box-width": _SETTINGS.Ad.Mobile.End.Width + 2, "box-height": _SETTINGS.Ad.Mobile.End.Height + 20 }
        },
        init: function(a) {
            this.domHandler = a;
            if ("undefined" === typeof a) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var a = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / a.x, this.mobile.actualSize.y / a.y);
                var b = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                this.mobile.actualSize.x = a.x * this.scaleRatioMultiplier.x;
                this.mobile.actualSize.y = a.y * this.scaleRatioMultiplier.y
            } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), a = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / a.x, this.desktop.actualSize.y / a.y), b = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.desktop.actualSize.x = a.x * b, this.desktop.actualSize.y = a.y * b;
            this.sizeRatio.x = window.innerWidth / this.mobile.actualResolution.x;
            this.sizeRatio.y = window.innerHeight / this.mobile.actualResolution.y
        },
        resizeLayers: function() {
            for (var a = 0; a < this.coreDivsToResize.length; a++) {
                var b = ig.domHandler.getElementById(this.coreDivsToResize[a]);
                ig.ua.mobile ? ig.domHandler.resize(b, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y)) : ig.domHandler.resizeOffsetLeft(b, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2))
            }
            for (var c in this.adsToResize) {
                var a = ig.domHandler.getElementById("#" +
                        c),
                    b = ig.domHandler.getElementById("#" + c + "-Box"),
                    d = (window.innerWidth - this.adsToResize[c]["box-width"]) / 2 + "px",
                    e = (window.innerHeight - this.adsToResize[c]["box-height"]) / 2 + "px";
                a && ig.domHandler.css(a, { width: window.innerWidth, height: window.innerHeight });
                b && ig.domHandler.css(b, { left: d, top: e })
            }
            for (c in this.dynamicClickableEntityDivs) {
                b = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                a = ig.domHandler.getElementById("#" + c);
                if (ig.ua.mobile) var f = this.dynamicClickableEntityDivs[c].entity_pos_x,
                    h = this.dynamicClickableEntityDivs[c].entity_pos_y,
                    e = this.dynamicClickableEntityDivs[c].width,
                    d = this.dynamicClickableEntityDivs[c].height,
                    j = Math.floor(f * this.scaleRatioMultiplier.x) + "px",
                    h = Math.floor(h * this.scaleRatioMultiplier.y) + "px",
                    e = Math.floor(e * this.scaleRatioMultiplier.x) + "px",
                    b = Math.floor(d * this.scaleRatioMultiplier.y) + "px";
                else var d = ig.domHandler.getElementById("#canvas"),
                    d = ig.domHandler.getOffsets(d),
                    j = d.left,
                    l = d.top,
                    f = this.dynamicClickableEntityDivs[c].entity_pos_x,
                    h = this.dynamicClickableEntityDivs[c].entity_pos_y,
                    e = this.dynamicClickableEntityDivs[c].width,
                    d = this.dynamicClickableEntityDivs[c].height,
                    j = Math.floor(j + f * b) + "px",
                    h = Math.floor(l + h * b) + "px",
                    e = Math.floor(e * b) + "px",
                    b = Math.floor(d * b) + "px";
                ig.domHandler.css(a, { "float": "left", position: "absolute", left: j, top: h, width: e, height: b, "z-index": 3 })
            }
        },
        resize: function() {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function() {
            if (ig.ua.mobile) {
                var a = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    b = this.domHandler.getElementById("#orientate"),
                    c = this.domHandler.getElementById("#canvas");
                a ? (this.domHandler.show(b), this.domHandler.hide(c)) : (this.domHandler.show(c), this.domHandler.hide(b))
            }
            ig.ua.mobile ? this.resizeAds() : this.resize()
        },
        resizeAds: function() {
            for (var a in this.adsToResize) {
                var b = ig.domHandler.getElementById("#" + a),
                    c = ig.domHandler.getElementById("#" + a + "-Box"),
                    d = (window.innerWidth - this.adsToResize[a]["box-width"]) / 2 + "px",
                    e = (window.innerHeight - this.adsToResize[a]["box-height"]) / 2 + "px";
                b && ig.domHandler.css(b, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                c && ig.domHandler.css(c, { left: d, top: e })
            }
        },
        samsungFix: function() { ig.ua.android && (!(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && !(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(a) { a.preventDefault(); return !1 }, !1), document.addEventListener("touchmove", function(a) { a.preventDefault(); return !1 }, !1), document.addEventListener("touchend", function(a) { a.preventDefault(); return !1 }, !1)) },
        eventListenerSetup: function() {
            window.addEventListener("resize", function() { this.reorient() }.bind(this), !1);
            window.addEventListener("orientationchange", function() { this.reorient() }.bind(this), !1);
            document.ontouchmove = function(a) {
                window.scrollTo(0, 1);
                a.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.io.storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() { return !ig.Storage.instance ? null : ig.Storage.instance },
        init: function() { ig.Storage.instance = this },
        isCapable: function() { return "undefined" !== typeof window.localStorage },
        isSet: function(a) { return null !== this.get(a) },
        initUnset: function(a, b) { null === this.get(a) && this.set(a, b) },
        get: function(a) { if (!this.isCapable()) return null; try { return JSON.parse(localStorage.getItem(a)) } catch (b) { return window.localStorage.getItem(a) } },
        getInt: function(a) { return ~~this.get(a) },
        getFloat: function(a) { return parseFloat(this.get(a)) },
        getBool: function(a) { return !!this.get(a) },
        key: function(a) { return this.isCapable() ? window.localStorage.key(a) : null },
        set: function(a, b) { if (!this.isCapable()) return null; try { window.localStorage.setItem(a, JSON.stringify(b)) } catch (c) { console.log(c) } },
        setHighest: function(a, b) { b > this.getFloat(a) && this.set(a, b) },
        remove: function(a) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(a)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("game.io.mouse").defines(function() {
    Mouse = ig.Class.extend({
        bindings: { click: [ig.KEY.MOUSE1] },
        init: function() { ig.input.initMouse(); for (var a in this.bindings) { this[a] = a; for (var b = 0; b < this.bindings[a].length; b++) ig.input.bind(this.bindings[a][b], a) } },
        getPos: function() {
            if (ig.ua.mobile) var a = ig.input.mouse.x,
                b = ig.input.mouse.y;
            else a = ig.input.mouse.x, b = ig.input.mouse.y;
            return new Vector2(a, b)
        }
    })
});
ig.baked = !0;
ig.module("game.io.keyboard").defines(function() { Keyboard = ig.Class.extend({ bindings: { jump: [ig.KEY.W, ig.KEY.UP_ARROW], moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW], moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW], shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE] }, init: function() { for (var a in this.bindings) { this[a] = a; for (var b = 0; b < this.bindings[a].length; b++) ig.input.bind(this.bindings[a][b], a) } } }) });
ig.baked = !0;
ig.module("game.io.gamepad-input").defines(function() {
    ig.PADKEY = { BUTTON_0: 0, PADBUTTON_1: 1, BUTTON_2: 2, BUTTON_3: 3, BUTTON_LEFT_BUMPER: 4, BUTTON_RIGHT_BUMPER: 5, BUTTON_LEFT_TRIGGER: 6, BUTTON_RIGHT_TRIGGER: 7, BUTTON_LEFT_JOYSTICK: 10, BUTTON_RIGHT_JOYSTICK: 11, BUTTON_DPAD_UP: 12, BUTTON_DPAD_DOWN: 13, BUTTON_DPAD_LEFT: 14, BUTTON_DPAD_RIGHT: 15, BUTTON_MENU: 16, AXIS_LEFT_JOYSTICK_X: 0, AXIS_LEFT_JOYSTICK_Y: 1, AXIS_RIGHT_JOYSTICK_X: 2, AXIS_RIGHT_JOYSTICK_Y: 3 };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: { x: 0, y: 0 },
        rightStick: { x: 0, y: 0 },
        start: function() {
            if (!this.isInit) {
                this.isInit = !0;
                var a = navigator.getGamepads || navigator.webkitGetGamepads;
                a && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = a
            }
        },
        isAvailable: function() { return this.isInit && this.isSupported },
        buttonPressed: function(a) { return "object" == typeof a ? a.pressed : 1 == a },
        buttonDown: function(a) { if (a = this.bindings[a]) this.states[a] = !0, this.downLocks[a] || (this.presses[a] = !0, this.downLocks[a] = !0) },
        buttonUp: function(a) { if ((a = this.bindings[a]) && this.downLocks[a] && !this.upLocks[a]) this.states[a] = !1, this.releases[a] = !0, this.upLocks[a] = !0 },
        clearPressed: function() {
            for (var a in this.releases) this.states[a] = !1, this.downLocks[a] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function(a, b) { this.bindings[a] = b },
        unbind: function(a) {
            this.releases[this.bindings[a]] = !0;
            this.bindings[a] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function(a) { return this.states[a] },
        pressed: function(a) { return this.presses[a] },
        released: function(a) { return this.releases[a] },
        clamp: function(a, b, c) { return a < b ? b : a > c ? c : a },
        pollGamepads: function() {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var a in this.bindings) {
                    for (var b = !1, c = 0; c < this.list.length; c++) { var d = this.list[c]; if (d && d.buttons && this.buttonPressed(d.buttons[a])) { b = !0; break } }
                    b ? this.buttonDown(a) : this.buttonUp(a)
                }
                for (c = 0; c < this.list.length; c++)
                    if ((d = this.list[c]) && d.axes) {
                        a = d.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var b = d.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            e = d.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            d = d.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(a) ? 0 : a;
                        this.leftStick.y += isNaN(b) ? 0 : b;
                        this.rightStick.x += isNaN(e) ? 0 : e;
                        this.rightStick.y += isNaN(d) ? 0 : d
                    }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("game.io.gamepad").requires("game.io.gamepad-input").defines(function() {
    Gamepad = ig.Class.extend({
        bindings: { padJump: [ig.PADKEY.BUTTON_0] },
        init: function() {
            ig.gamepadInput.start();
            for (var a in this.bindings)
                for (var b = 0; b < this.bindings[a].length; b++) ig.gamepadInput.bind(this.bindings[a][b], a)
        },
        press: function() {},
        held: function() {},
        release: function() {}
    })
});
ig.baked = !0;
ig.module("game.io.multitouch").defines(function() {
    Multitouch = ig.Class.extend({
        init: function() { ig.multitouchInput.start() },
        getTouchesPos: function() {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var a = [], b = 0; b < ig.multitouchInput.touches.length; b++) {
                        var c = ig.multitouchInput.touches[b];
                        a.push({ x: c.x, y: c.y })
                    }
                    return a
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("game.io.multitouch-input").defines(function() {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function() { this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1))) },
        touchmove: function(a) {
            if (ig.ua.touchDevice) {
                var b = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    c = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                    b = ig.system.scale * (b / ig.system.realWidth),
                    c = ig.system.scale * (c / ig.system.realHeight);
                if (a.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < a.touches.length && (this.multitouchCapable = !0);
                    var d = { left: 0, top: 0 };
                    ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                    for (var e = 0; e < a.touches.length; e++) {
                        var f = a.touches[e];
                        f && this.touches.push({ x: (f.clientX - d.left) / b, y: (f.clientY - d.top) / c })
                    }
                } else this.windowMove(a)
            }
        },
        touchdown: function(a) {
            var b =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                c = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                b = ig.system.scale * (b / ig.system.realWidth),
                c = ig.system.scale * (c / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(a);
            else if (ig.ua.touchDevice && a.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < a.touches.length && (this.multitouchCapable = !0);
                var d = { left: 0, top: 0 };
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                for (var e = 0; e < a.touches.length; e++) {
                    var f = a.touches[e];
                    f && this.touches.push({ x: (f.clientX - d.left) / b, y: (f.clientY - d.top) / c })
                }
            }
        },
        touchup: function(a) {
            var b = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            b = ig.system.scale * (b / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(a);
            else {
                this.lastEventUp = a;
                var c = { left: 0, top: 0 };
                ig.system.canvas.getBoundingClientRect && (c = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    a =
                        (a.changedTouches[0].clientX - c.left) / b;
                    for (b = 0; b < this.touches.length; b++) this.touches[b].x >= a - 40 && this.touches[b].x <= a + 40 && this.touches.splice(b, 1)
                }
            }
        },
        windowKeyDown: function(a) {
            var b = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                c = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                b = ig.system.scale * (b / ig.system.realWidth),
                c = ig.system.scale * (c / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var d = { left: 0, top: 0 };
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                a = a.changedTouches ? a.changedTouches : [a];
                for (var e = 0; e < a.length; ++e) {
                    for (var f = a[e], h = "undefined" != typeof f.identifier ? f.identifier : "undefined" != typeof f.pointerId ? f.pointerId : 1, j = (f.clientX - d.left) / b, f = (f.clientY - d.top) / c, l = 0; l < this.touches.length; ++l) this.touches[l].identifier == h && this.touches.splice(l, 1);
                    this.touches.push({ x: j, y: f, identifier: h })
                }
                for (b = 0; b < this.touches.length; b++);
            }
        },
        windowKeyUp: function(a) {
            a = "undefined" != typeof a.identifier ? a.identifier : "undefined" != typeof a.pointerId ? a.pointerId :
                1;
            for (var b = 0; b < this.touches.length; ++b) this.touches[b].identifier == a && this.touches.splice(b, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function(a) {
            var b = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                c = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                b = ig.system.scale * (b / ig.system.realWidth),
                c = ig.system.scale * (c / ig.system.realHeight),
                d = { left: 0, top: 0 };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var e = "undefined" != typeof a.identifier ? a.identifier : "undefined" != typeof a.pointerId ? a.pointerId : 1, f = 0; f < this.touches.length; ++f)
                    if (this.touches[f].identifier == e) {
                        var h = (a.clientY - d.top) / c;
                        this.touches[f].x = (a.clientX - d.left) / b;
                        this.touches[f].y = h
                    }
        }
    })
});
ig.baked = !0;
ig.module("game.io.io-manager").requires("game.io.storage", "game.io.mouse", "game.io.keyboard", "game.io.gamepad", "game.io.multitouch", "game.io.multitouch-input", "game.io.gamepad-input").defines(function() {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        gamekey: "",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function() {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function() {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function() { this._supportsLocalStorage() && (this.storage = new ig.Storage) },
        initMouse: function() { this.mouse = new Mouse },
        initKeyboard: function() { this.keyboard = new Keyboard },
        initMultitouch: function() { this.multitouch = new Multitouch },
        initGamepad: function() { this.gamepad = new Gamepad },
        press: function(a) { return ig.input.pressed(a) || this.gamepad.press(a) ? !0 : !1 },
        held: function(a) { return ig.input.state(a) || this.gamepad.state(a) ? !0 : !1 },
        release: function(a) { return ig.input.released(a) || this.gamepad.released(a) ? !0 : !1 },
        getClickPos: function() { return this.mouse.getPos() },
        getTouchesPos: function() { return this.multitouch.getTouchesPos() },
        checkOverlap: function(a, b, c, d, e) { return a.x > b + d || a.x < b || a.y > c + e || a.y < c ? !1 : !0 },
        _supportsLocalStorage: function() { try { return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage } catch (a) { return this.localStorageSupport } },
        storageIsSet: function(a) { return !this.localStorageSupport ? null : this.storage.isSet(a) },
        storageGet: function(a) { return !this.localStorageSupport ? null : this.storage.get(a) },
        storageSet: function(a, b) {
            if (!this.localStorageSupport) return null;
            this.storage.set(a, b)
        },
        assert: function(a, b, c) { if (b !== c) throw "actualValue:" + b + " not equal to testValue:" + c + " at " + a; }
    })
});
ig.baked = !0;
ig.module("integrations.client.api-handler").defines(function() { ig.ApiHandler = ig.Class.extend({ apiAvailable: { MJSPreroll: function() { ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize() }, MJSHeader: function() { ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize() }, MJSFooter: function() { ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize() }, MJSEnd: function() { ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize() } }, run: function(a, b) { if (this.apiAvailable[a]) this.apiAvailable[a](b) } }) });
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: { x: 48, y: 48 },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/game/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/game/graphics/opening/kittytitle.png"),
        init: function(a, b, c) { this.parent(a, b, c) },
        ready: function() { if (!ig.wm) { this.initTimer = new ig.Timer(0.1); try { ig.soundHandler.sfxPlayer.play("kittyopeningSound") } catch (a) { console.log(a) } } },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var a = ig.game.mainDrawer.createGradient(0, 0, 0, ig.system.height, ["#ffed94", "#ffcd85"]);
            ig.game.mainDrawer.fillRect(0, 0, ig.system.width, ig.system.height, { color: a });
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width / 2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width /
                2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() { LevelOpening = { entities: [{ type: "EntityOpeningKitty", x: 520, y: 212 }], layer: [] } });
ig.baked = !0;
ig.module("plugins.fade-transition").defines(function() {
    ig.FadeTransition = ig.Class.extend({
        targetOverlayAlpha: 1,
        overlayAlpha: 1,
        transitionDuration: 0.2,
        transitionTime: 0,
        transitionFadein: !1,
        transitionFadeout: !1,
        transitionEndFunction: null,
        init: function() {},
        draw: function() { this.drawTransition() },
        update: function() {
            if (this.transitionFadein) {
                var a = ig.system.clock.delta() - this.transitionTime,
                    a = 0 == this.transitionDuration ? 1 : a / this.transitionDuration;
                1 < a && (a = 1);
                this.overlayAlpha = this.targetOverlayAlpha * (1 - a);
                1 <= a && (this.transitionFadein = !1, this.transitionEndFunction && this.transitionEndFunction())
            } else this.transitionFadeout && (a = ig.system.clock.delta() - this.transitionTime, a = 0 == this.transitionDuration ? 1 : a / this.transitionDuration, 1 < a && (a = 1), this.overlayAlpha = this.targetOverlayAlpha * a, 1 <= a && (this.transitionFadeout = !1, this.transitionEndFunction && this.transitionEndFunction()))
        },
        drawTransition: function() { if (this.transitionFadein || this.transitionFadeout) this.overlayAlpha > this.targetOverlayAlpha && (this.overlayAlpha = this.targetOverlayAlpha), ig.system.context.globalAlpha = this.overlayAlpha, ig.system.context.fillStyle = "#000000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.globalAlpha = 1 },
        startFadeinTransition: function() { this.transitionFadein || (this.transitionFadein = !0, this.transitionTime = ig.system.clock.delta(), this.overlayAlpha = 1) },
        startFadeoutTransition: function() { this.transitionFadeout || (this.transitionFadeout = !0, this.transitionTime = ig.system.clock.delta(), this.overlayAlpha = 0) }
    })
});
ig.baked = !0;
ig.module("plugins.sat").defines(function() {
    ig.SAT = ig.Class.extend({
        init: function() {},
        mtvForShapeIntersect: function(a, b) {
            var c = 1E4,
                d = null,
                e = [],
                f = [];
            if (a.isCircle() && b.isCircle()) e.push(a.center.subtract(b.center).normalized());
            else if (b.isCircle() || a.isCircle()) {
                if (a.isCircle()) {
                    var h = b;
                    b = a;
                    a = h
                }
                for (var j = a.pointList[0], l = b.center.manhattanDistance(j), h = 1; h < a.pointList.length; h++) {
                    var q = a.pointList[h],
                        m = b.center.manhattanDistance(q);
                    m < l && (l = m, j = q)
                }
                f.push(b.center.subtract(j).normalized())
            } else e = a.getNormalizedAxes(), f = b.getNormalizedAxes();
            for (h = 0; h < e.length; h++) {
                var j = e[h],
                    m = a.project(j),
                    k = b.project(j);
                if (m.overlap(k)) {
                    l = m.getOverlap(k);
                    if (m.contains(k) || k.contains(m)) q = Math.abs(m.min - k.min), m = Math.abs(m.max - k.max), l = q < m ? l + q : l + m;
                    l < c && (c = l, d = j)
                } else return null
            }
            for (h = 0; h < f.length; h++)
                if (j = f[h], m = a.project(j), k = b.project(j), m.overlap(k)) {
                    l = m.getOverlap(k);
                    if (m.contains(k) || k.contains(m)) q = Math.abs(m.min - k.min), m = Math.abs(m.max - k.max), l = q < m ? l + q : l + m;
                    l < c && (c = l, d = j)
                } else return null;
            return new ig.SAT.MTV(d, c)
        },
        simpleShapeIntersect: function(a, b) {
            var c = [],
                d = [];
            if (a.isCircle() && b.isCircle()) c.push(a.center.subtract(b.center).normalized());
            else if (b.isCircle() || a.isCircle()) {
                if (a.isCircle()) {
                    var e = b;
                    b = a;
                    a = e
                }
                for (var f = a.pointList[0], h = b.center.manhattanDistance(f), e = 1; e < a.pointList.length; e++) {
                    var j = a.pointList[e],
                        l = b.center.manhattanDistance(j);
                    l < h && (h = l, f = j)
                }
                d.push(b.center.subtract(f).normalized())
            } else c = a.getNormalizedAxes(), d = b.getNormalizedAxes();
            for (e = 0; e < c.length; e++)
                if (h = c[e], f = a.project(h), h = b.project(h), !f.overlap(h)) return !1;
            for (e = 0; e < d.length; e++)
                if (h = d[e], f = a.project(h), h = b.project(h), !h.overlap(f)) return !1;
            return !0
        }
    });
    ig.SAT.Vector2D = ig.Class.extend({
        x: 0,
        y: 0,
        init: function(a, b) {
            this.x = a;
            this.y = b
        },
        subtract: function(a) { return new ig.SAT.Vector2D(this.x - a.x, this.y - a.y) },
        getNormal: function() { return new ig.SAT.Vector2D(-this.y, this.x) },
        getNormalizedNormal: function() { return (new ig.SAT.Vector2D(-this.y, this.x)).normalized() },
        normalized: function() { var a = Math.sqrt(this.x * this.x + this.y * this.y); return 0 == a ? new ig.SAT.Vector2D(0, 0) : new ig.SAT.Vector2D(this.x / a, this.y / a) },
        distance: function(a) {
            var b = a.x - this.x;
            a = a.y - this.y;
            return Math.sqrt(b * b + a * a)
        },
        manhattanDistance: function(a) {
            var b = a.x - this.x;
            a = a.y - this.y;
            return b * b + a * a
        },
        dotProduct: function(a) { return this.x * a.x + this.y * a.y },
        crossProduct: function(a) { return this.x * a.y - this.y * a.x },
        getAngle: function(a) { return Math.atan2(this.crossProduct(a), this.dotProduct(a)) }
    });
    ig.SAT.Shape = ig.Class.extend({
        pointList: [],
        center: null,
        init: function(a) {
            this.pointList = [];
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                this.pointList.push(new ig.SAT.Vector2D(c.x, c.y))
            }
        },
        isCircle: function() { return !1 },
        getAxes: function() {
            var a = [];
            if (1 >= this.pointList.length) return a;
            if (2 == this.pointList.length) {
                var b = this.pointList[0],
                    c = this.pointList[1],
                    b = b.subtract(c),
                    b = b.getNormal();
                (0 != b.x || 0 != b.y) && a.push(b);
                return a
            }
            for (var d = 0; d < this.pointList.length; d++) b = this.pointList[d], c = this.pointList[d + 1 == this.pointList.length ? 0 : d + 1], b = b.subtract(c), b = b.getNormal(), (0 != b.x || 0 != b.y) && a.push(b);
            return a
        },
        getNormalizedAxes: function() {
            for (var a = [], b = 0; b < this.pointList.length; b++) {
                var c = this.pointList[b].subtract(this.pointList[b + 1 == this.pointList.length ? 0 : b + 1]).getNormalizedNormal();
                (0 != c.x || 0 != c.y) && a.push(c)
            }
            return a
        },
        project: function(a) { return new ig.SAT.Projection(this.pointList, a) }
    });
    ig.SAT.Circle = ig.SAT.Shape.extend({
        center: null,
        radius: 0,
        init: function(a, b) {
            this.center = new ig.SAT.Vector2D(a.x, a.y);
            this.radius = b
        },
        isCircle: function() { return !0 },
        getAxes: function() { return [] },
        getNormalizedAxes: function() { return [] },
        project: function(a) {
            var b = new ig.SAT.Projection([], a);
            a = this.center.dotProduct(a);
            b.min = a - this.radius;
            b.max = a + this.radius;
            return b
        }
    });
    ig.SAT.Projection = ig.Class.extend({
        min: null,
        max: null,
        init: function(a, b) {
            if (!a || 0 >= a.length) return this;
            this.min = a[0].dotProduct(b);
            this.max = a[0].dotProduct(b);
            for (var c = 1; c < a.length; c++) {
                var d = a[c].dotProduct(b);
                this.min > d && (this.min = d);
                d > this.max && (this.max = d)
            }
        },
        overlap: function(a) { return !(this.max < a.min || a.max < this.min) },
        getOverlap: function(a) {
            var b = this.max - a.min;
            a = a.max - this.min;
            a < b && (b = a);
            return b
        },
        contains: function(a) {
            var b = this.max - this.min;
            if (a.max - a.min < b) {
                var c = this.max - a.min;
                0 >= c && (c = a.max - this.min);
                if (c >= b) return !0
            }
            return !1
        }
    });
    ig.SAT.MTV = ig.Class.extend({
        axis: null,
        overlapAmount: 0,
        init: function(a, b) {
            this.axis = a;
            this.overlapAmount = b
        }
    })
});
ig.baked = !0;
ig.module("plugins.button").requires("plugins.sat").defines(function() {
    ig.Button = ig.Class.extend({
        buttonType: 0,
        animSheet: null,
        upImage: null,
        downImage: null,
        hoverImage: null,
        upAnim: null,
        downAnim: null,
        hoverAnim: null,
        pos: { x: 0, y: 0 },
        rect: { x: 0, y: 0, w: 0, h: 0 },
        points: [],
        offset: { x: 0, y: 0 },
        scale: { x: 1, y: 1 },
        skew: { x: 0, y: 0 },
        angle: 0,
        alpha: 1,
        down: !1,
        over: !1,
        posRelativeTo: null,
        image: null,
        imageOffset: { x: 0, y: 0 },
        fillStyle: null,
        strokeStyle: null,
        strokeWidth: 0,
        roundedRadius: 5,
        edgeRadius: 5,
        downFillStyle: null,
        downStrokeStyle: null,
        overFillStyle: null,
        overStrokeStyle: null,
        text: null,
        textList: null,
        textFont: null,
        textFontSize: 24,
        textLineHeight: 24,
        textHeightAdjustment: 0,
        textOffset: { x: 0, y: 0 },
        textScale: { x: 1, y: 1 },
        textSkew: { x: 0, y: 0 },
        textAngle: 0,
        textAlpha: 1,
        textColor: { r: 255, g: 255, b: 255 },
        btnShadowImage: null,
        btnShadowOffset: { x: 0, y: 2 },
        btnShadowColor: "rgba(0,0,0,0.5)",
        textShadowOffset: { x: 0, y: 2 },
        textShadowColor: "rgba(0,0,0,0.5)",
        btnShadowDisabled: !0,
        textShadowDisabled: !0,
        textWrap: !0,
        textOnlyOnHover: !1,
        disabled: !1,
        hidden: !1,
        antialiasingEnabled: !1,
        clickStateName: "click",
        keyStateName: "",
        overOffset: { x: 0, y: 0 },
        downOffset: { x: 0, y: 1 },
        scaleMultiplier: 1,
        overScaleMultiplier: 1.01,
        downScaleMultiplier: 0.99,
        detectionRect: { x: 0, y: 0, w: 0, h: 0 },
        detectionPoints: [],
        parentEntity: null,
        init: function(a) {
            this.textFont = "Impact, Charcoal, sans-serif";
            this.textLineHeight = this.textFontSize = 24;
            this.parentEntity = a;
            this.sat = new ig.SAT
        },
        setPos: function(a, b) { a && (this.pos.x = a.x, this.pos.y = a.y, this.setPosRelativeTo(b)) },
        setPosRelativeTo: function(a, b) { if (a && a.pos && !(null == a.pos.x || null == a.pos.y)) this.posRelativeTo = a, this.setPos(b) },
        setRect: function(a) { a && (this.rect.x = a.x, this.rect.y = a.y, this.rect.w = 0 <= a.w ? a.w : 1, this.rect.h = 0 <= a.h ? a.h : 1, this.detectionRect.x = this.rect.x, this.detectionRect.y = this.rect.y, this.detectionRect.w = this.rect.w, this.detectionRect.h = this.rect.h) },
        setPoints: function(a) {
            if (a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    this.points.push({ x: c.x, y: c.y })
                }
                this.recalculateDetectionPoints()
            }
        },
        setAngle: function(a) {
            this.angle = a;
            this.recalculateDetectionRect();
            this.recalculateDetectionPoints()
        },
        setScale: function(a, b) { a && b && (this.scale.x = a, this.scale.y = b, this.recalculateDetectionRect(), this.recalculateDetectionPoints()) },
        setFont: function(a, b) {
            this.textFont = b;
            this.textLineHeight = this.textFontSize = a;
            this.textHeightAdjustment = this.textList ? 0.8 * this.textLineHeight - this.textList.length / 2 * this.textLineHeight : 0.8 * this.textLineHeight
        },
        setText: function(a) {
            isNaN(a) || (a = "" + a);
            this.text = a;
            this.textWrap && 1 <= this.rect.w ? (this.textList = this.wrapText(a, this.rect.w), this.textHeightAdjustment = 0.8 * this.textLineHeight -
                this.textList.length / 2 * this.textLineHeight) : (this.textList = null, this.textHeightAdjustment = 0.8 * this.textLineHeight)
        },
        setTextOffset: function(a) { a && (this.textOffset.x = a.x, this.textOffset.y = a.y) },
        setImage: function(a, b) {
            this.image = a;
            this.setImageOffset(b)
        },
        setImageOffset: function(a) { a && (this.imageOffset.x = a.x, this.imageOffset.y = a.y) },
        setUpImage: function(a) { if (this.upImage = a) this.buttonType = ig.BUTTONTYPE.IMAGE },
        setOverImage: function(a) { if (this.overImage = a) this.buttonType = ig.BUTTONTYPE.IMAGE },
        setDownImage: function(a) { if (this.downImage = a) this.buttonType = ig.BUTTONTYPE.IMAGE },
        setAnimSheet: function(a) {
            if (this.animSheet = a) {
                a = this.animSheet.image.width / this.animSheet.width;
                var b = this.animSheet.image.height / this.animSheet.height;
                a = Math.floor(a);
                b = Math.floor(b);
                3 == a * b ? (this.upAnim = new ig.Animation(this.animSheet, 1, [0]), this.overAnim = new ig.Animation(this.animSheet, 1, [1]), this.downAnim = new ig.Animation(this.animSheet, 1, [2]), this.buttonType = ig.BUTTONTYPE.ANIMSHEET) : 2 == a * b ? (this.upAnim = new ig.Animation(this.animSheet, 1, [0]), this.overAnim = null, this.downAnim = new ig.Animation(this.animSheet, 1, [1]), this.buttonType = ig.BUTTONTYPE.ANIMSHEET) : 1 == a * b && this.setUpImage(this.animSheet.image)
            }
        },
        draw: function() {
            if (!this.hidden) {
                this.btnShadowDisabled || this.drawBtnShadow();
                var a = ig.system.context,
                    b = this.pos.x + this.offset.x,
                    c = this.pos.y + this.offset.y;
                this.down ? (b += this.downOffset.x, c += this.downOffset.y) : this.over && (b += this.overOffset.x, c += this.overOffset.y);
                this.posRelativeTo && (b += this.posRelativeTo.pos.x, c += this.posRelativeTo.pos.y);
                this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c));
                a.save();
                a.globalAlpha = this.alpha;
                a.transform(this.scale.x * this.scaleMultiplier, this.skew.x, this.skew.y, this.scale.y * this.scaleMultiplier, b, c);
                a.rotate(this.angle);
                if (this.buttonType == ig.BUTTONTYPE.ROUNDED_RECT || this.buttonType == ig.BUTTONTYPE.SQUARE_RECT || this.buttonType == ig.BUTTONTYPE.OCTOGON || this.buttonType == ig.BUTTONTYPE.PILL || this.buttonType == ig.BUTTONTYPE.CIRCLE) {
                    b = this.strokeStyle;
                    c = this.fillStyle;
                    this.down ? (this.downStrokeStyle && (b = this.downStrokeStyle), this.downFillStyle && (c = this.downFillStyle)) : this.over && (this.overStrokeStyle && (b = this.overStrokeStyle), this.overFillStyle && (c = this.overFillStyle));
                    a.strokeStyle = b;
                    a.fillStyle = c;
                    var d = !1,
                        e = !1;
                    b && 0 < this.strokeWidth && (e = !0, a.lineWidth = this.strokeWidth);
                    c && (d = !0);
                    this.buttonType == ig.BUTTONTYPE.SQUARE_RECT ? (d && a.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h), e && a.strokeRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h)) : this.buttonType == ig.BUTTONTYPE.ROUNDED_RECT ? this.roundRect(a, this.rect.x, this.rect.y, this.rect.w, this.rect.h, this.roundedRadius, d, e) : this.buttonType == ig.BUTTONTYPE.OCTOGON ? this.octogon(a, this.rect.x, this.rect.y, this.rect.w, this.rect.h, this.edgeRadius, d, e) : this.buttonType == ig.BUTTONTYPE.PILL ? this.pill(a, this.rect.x, this.rect.y, this.rect.w, this.rect.h, d, e) : this.buttonType == ig.BUTTONTYPE.CIRCLE && this.circle(a, this.rect.x, this.rect.y, this.rect.w, this.rect.h, d, e)
                } else this.buttonType == ig.BUTTONTYPE.IMAGE && null != this.upImage ? (d = this.upImage, this.down && this.downImage ? d = this.downImage : this.over && this.overImage && (d = this.overImage), b = -d.width / 2, c = -d.height / 2, this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c)), d.draw(b, c)) : this.buttonType == ig.BUTTONTYPE.ANIMSHEET && null != this.upAnim && (d = this.upAnim, this.down && this.downAnim ? d = this.downAnim : this.over && this.overAnim && (d = this.overAnim), b = -this.animSheet.width / 2, c = -this.animSheet.height / 2, this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c)), d.draw(b, c));
                this.image ? (b = this.imageOffset.x - this.image.width /
                    2, c = this.imageOffset.y - this.image.height / 2, this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c)), this.image.draw(b, c)) : this.anim && (b = this.imageOffset.x - this.anim.sheet.width / 2, c = this.imageOffset.y - this.anim.sheet.height / 2, this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c)), this.anim.draw(b, c));
                d = !1;
                this.textOnlyOnHover && (!this.over && !this.down) && (d = !0);
                if (!d && this.textShadowDisabled && this.text && "" != this.text)
                    if (a.font = this.textFontSize + "px " + this.textFont, a.textAlign = "center", b = this.textOffset.x, c = this.textOffset.y, c += this.textHeightAdjustment, this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c)), a.transform(this.textScale.x, this.textSkew.x, this.textSkew.y, this.textScale.y, b, c), a.rotate(this.textAngle), this.textList)
                        for (c = b = 0; c < this.textList.length; c++) a.fillStyle = this.getTextColorStr(), a.fillText(this.textList[c], 0, b), b += this.textLineHeight;
                    else a.fillStyle = this.getTextColorStr(), a.fillText(this.text, 0, 0);
                a.restore();
                !d && !this.textShadowDisabled && this.drawTextShadow()
            }
        },
        drawDebug: function() {
            var a = ig.system.context;
            a.lineWidth = 2;
            a.strokeStyle = "rgb(255,0,0)";
            var b = this.pos.x + this.offset.x,
                c = this.pos.y + this.offset.y;
            this.down ? (b += this.downOffset.x, c += this.downOffset.y) : this.over && (b += this.overOffset.x, c += this.overOffset.y);
            this.posRelativeTo && (b += this.posRelativeTo.pos.x, c += this.posRelativeTo.pos.y);
            this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c));
            a.strokeRect(b + this.detectionRect.x, c + this.detectionRect.y, this.detectionRect.w, this.detectionRect.h);
            if (!(0 >= this.detectionPoints.length)) {
                a.save();
                a.lineWidth = 2;
                a.strokeStyle = "rgb(255,0,0)";
                a.beginPath();
                b = this.pos.x + this.offset.x;
                c = this.pos.y + this.offset.y;
                this.down ? (b += this.downOffset.x, c += this.downOffset.y) : this.over && (b += this.overOffset.x, c += this.overOffset.y);
                this.posRelativeTo && (b += this.posRelativeTo.pos.x, c += this.posRelativeTo.pos.y);
                this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c));
                a.moveTo(b + this.detectionPoints[0].x, c + this.detectionPoints[0].y);
                for (var d = 1; d < this.detectionPoints.length; d++) {
                    var e = this.detectionPoints[d];
                    a.lineTo(b + e.x, c + e.y)
                }
                a.closePath();
                a.stroke();
                a.restore()
            }
        },
        update: function() {
            if (!this.disabled)
                if (this.pointerInputOverlap() || this.keyInputReleased()) { if (this.over = this.down = !1, this.scaleMultiplier = 1, ig.ua.mobile || (this.over = !0, this.scaleMultiplier = this.overScaleMultiplier), this.clickInputDetected() && (this.down = !0, this.over = !1, this.scaleMultiplier = this.downScaleMultiplier), this.clickInputReleased() || this.keyInputReleased()) this.over = this.down = !1, this.scaleMultiplier = 1, ig.ua.mobile || (this.over = !0, this.scaleMultiplier = this.overScaleMultiplier), "function" === typeof this.clickedFunction && this.clickedFunction(this) } else this.over = this.down = !1, this.scaleMultiplier = 1
        },
        pointerInputOverlap: function() {
            var a = ig.game.inputPos;
            null == a && (a = this.getInputPos());
            if (this.sat && 0 < this.detectionPoints.length) {
                var b = [],
                    c = this.pos.x + this.offset.x,
                    d = this.pos.y + this.offset.y;
                this.down ? (c += this.downOffset.x, d += this.downOffset.y) : this.over && (c += this.overOffset.x, d += this.overOffset.y);
                this.posRelativeTo && (c += this.posRelativeTo.pos.x, d += this.posRelativeTo.pos.y);
                this.antialiasingEnabled || (c = this.bitwiseRound(c), d = this.bitwiseRound(d));
                for (var e = 0; e < this.detectionPoints.length; e++) {
                    var f = this.detectionPoints[e];
                    b.push({ x: c + f.x, y: d + f.y })
                }
                a = new ig.SAT.Shape([a]);
                b = new ig.SAT.Shape(b);
                result = this.sat.mtvForShapeIntersect(a, b);
                return null == result ? !1 : !0
            }
            b = {};
            b.x = a.x;
            b.y = a.y;
            b.w = 1;
            b.h = 1;
            a = {};
            a.x = this.pos.x + this.detectionRect.x;
            a.y = this.pos.y + this.detectionRect.y;
            a.w = this.detectionRect.w;
            a.h = this.detectionRect.h;
            this.posRelativeTo && (a.x += this.posRelativeTo.pos.x, a.y += this.posRelativeTo.pos.y);
            return this.aabbCheck(b, a) ? !0 : !1
        },
        keyInputReleased: function() { return ig.input.released(this.keyStateName) ? !0 : !1 },
        clickInputDetected: function() { return ig.input.state(this.clickStateName) ? !0 : !1 },
        clickInputReleased: function() { return ig.input.released(this.clickStateName) ? !0 : !1 },
        show: function() { this.hidden && (this.hidden = !1) },
        hide: function() { this.hidden || (this.hidden = !0) },
        enable: function() { this.disabled && (this.disabled = !1) },
        disable: function() { this.disabled || (this.disabled = !0) },
        recalculateDetectionRect: function() {
            var a = this.rect.w / 2 - Math.abs(Math.cos(this.angle) * (this.rect.w / 2)),
                b = Math.abs(Math.sin(this.angle) * (this.rect.w / 2)) - Math.abs(Math.sin(this.angle) * (this.rect.h / 2)),
                a = Math.abs(a),
                b = Math.abs(b);
            a > this.rect.w / 2 - this.rect.h / 2 && (a = this.rect.w / 2 - this.rect.h / 2);
            this.detectionRect.x = this.rect.x + a;
            this.detectionRect.y = this.rect.y - b;
            this.detectionRect.w = this.rect.w - 2 * a;
            this.detectionRect.h = this.rect.h + 2 * b;
            this.detectionRect.x = this.detectionRect.x + this.detectionRect.w / 2 - this.detectionRect.w / 2 * this.scale.x;
            this.detectionRect.y = this.detectionRect.y + this.detectionRect.h / 2 - this.detectionRect.h / 2 * this.scale.y;
            this.detectionRect.w *= this.scale.x;
            this.detectionRect.h *= this.scale.y;
            0 > this.detectionRect.w && (this.detectionRect.x += this.detectionRect.w, this.detectionRect.w *= -1);
            0 > this.detectionRect.h && (this.detectionRect.y += this.detectionRect.h, this.detectionRect.h *= -1)
        },
        recalculateDetectionPoints: function() {
            if (0 != this.points.length) {
                this.detectionPoints = [];
                for (var a = 0; a < this.points.length; a++) {
                    var b = this.rotatePointAroundOrigin(this.angle, this.points[a]);
                    b.x *= this.scale.x;
                    b.y *= this.scale.y;
                    this.detectionPoints.push(b)
                }
            }
        },
        rotatePointAroundOrigin: function(a, b) {
            var c = Math.sin(a),
                d = Math.cos(a);
            return { x: b.x * d + b.y * c, y: -b.x * c + b.y * d }
        },
        drawBtnShadow: function() {
            var a = ig.system.context,
                b = this.pos.x + this.offset.x + this.btnShadowOffset.x,
                c = this.pos.y + this.offset.y + this.btnShadowOffset.y;
            this.posRelativeTo && (b += this.posRelativeTo.pos.x, c += this.posRelativeTo.pos.y);
            this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c));
            a.save();
            a.globalAlpha = this.alpha;
            a.transform(this.scale.x, this.skew.x, this.skew.y, this.scale.y, b, c);
            a.rotate(this.angle);
            if (this.buttonType == ig.BUTTONTYPE.ROUNDED_RECT || this.buttonType == ig.BUTTONTYPE.SQUARE_RECT || this.buttonType == ig.BUTTONTYPE.OCTOGON || this.buttonType == ig.BUTTONTYPE.PILL || this.buttonType == ig.BUTTONTYPE.CIRCLE)
                if (a.strokeStyle = this.strokeStyle, a.fillStyle = this.btnShadowColor, c = b = !1, this.strokeStyle && 0 < this.strokeWidth && (c = !0, a.lineWidth = this.strokeWidth), this.fillStyle && (b = !0), this.buttonType == ig.BUTTONTYPE.SQUARE_RECT)
                    if (b && c) {
                        var c = this.rect.x - (this.strokeWidth - 1) / 2,
                            d = this.rect.y - (this.strokeWidth - 1) / 2,
                            e = this.rect.w + (this.strokeWidth - 1),
                            f = this.rect.h + (this.strokeWidth - 1);
                        this.antialiasingEnabled || (c = this.bitwiseRound(c), d = this.bitwiseRound(d), e = this.bitwiseRound(e), f = this.bitwiseRound(f));
                        a.fillRect(c, d, e, f)
                    } else b && !c ? a.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h) :
                        !b && c && a.strokeRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
            else this.buttonType == ig.BUTTONTYPE.ROUNDED_RECT ? (c = this.rect.x - (this.strokeWidth - 1) / 2, d = this.rect.y - (this.strokeWidth - 1) / 2, e = this.rect.w + (this.strokeWidth - 1), f = this.rect.h + (this.strokeWidth - 1), this.antialiasingEnabled || (c = this.bitwiseRound(c), d = this.bitwiseRound(d), e = this.bitwiseRound(e), f = this.bitwiseRound(f)), this.roundRect(a, c, d, e, f, 2 * this.roundedRadius, b, !1)) : this.buttonType == ig.BUTTONTYPE.OCTOGON ? (c = this.rect.x - (this.strokeWidth -
                1) / 2, d = this.rect.y - (this.strokeWidth - 1) / 2, e = this.rect.w + (this.strokeWidth - 1), f = this.rect.h + (this.strokeWidth - 1), this.antialiasingEnabled || (c = this.bitwiseRound(c), d = this.bitwiseRound(d), e = this.bitwiseRound(e), f = this.bitwiseRound(f)), this.octogon(a, c, d, e, f, 2 * this.edgeRadius, b, !1)) : this.buttonType == ig.BUTTONTYPE.PILL ? (c = this.rect.x - (this.strokeWidth - 1) / 2, d = this.rect.y - (this.strokeWidth - 1) / 2, e = this.rect.w + (this.strokeWidth - 1), f = this.rect.h + (this.strokeWidth - 1), this.antialiasingEnabled || (c = this.bitwiseRound(c),
                d = this.bitwiseRound(d), e = this.bitwiseRound(e), f = this.bitwiseRound(f)), this.pill(a, c, d, e, f, b, !1)) : this.buttonType == ig.BUTTONTYPE.CIRCLE && (c = this.rect.x - (this.strokeWidth - 1) / 2, d = this.rect.y - (this.strokeWidth - 1) / 2, e = this.rect.w + (this.strokeWidth - 1), f = this.rect.h + (this.strokeWidth - 1), this.antialiasingEnabled || (c = this.bitwiseRound(c), d = this.bitwiseRound(d), e = this.bitwiseRound(e), f = this.bitwiseRound(f)), this.circle(a, c, d, e, f, b, !1));
            a.restore()
        },
        drawTextShadow: function() {
            var a = ig.system.context,
                b = this.pos.x +
                this.offset.x + this.textShadowOffset.x,
                c = this.pos.y + this.offset.y + this.textShadowOffset.y;
            this.down ? (b += this.downOffset.x, c += this.downOffset.y) : this.over && (b += this.overOffset.x, c += this.overOffset.y);
            this.posRelativeTo && (b += this.posRelativeTo.pos.x, c += this.posRelativeTo.pos.y);
            this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c));
            a.save();
            a.globalAlpha = this.alpha;
            a.transform(this.scale.x * this.scaleMultiplier, this.skew.x, this.skew.y, this.scale.y * this.scaleMultiplier, b, c);
            a.rotate(this.angle);
            if (this.text && "" != this.text)
                if (a.font = this.textFontSize + "px " + this.textFont, a.textAlign = "center", b = this.textOffset.x, c = this.textOffset.y, c += this.textHeightAdjustment, this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c)), a.transform(this.textScale.x, this.textSkew.x, this.textSkew.y, this.textScale.y, b, c), a.rotate(this.textAngle), this.textList)
                    for (c = b = 0; c < this.textList.length; c++) a.fillStyle = this.textShadowColor, a.fillText(this.textList[c], 0, b), b += this.textLineHeight;
                else a.fillStyle = this.textShadowColor, a.fillText(this.text, 0, 0);
            a.restore();
            b = this.pos.x + this.offset.x;
            c = this.pos.y + this.offset.y;
            this.down ? (b += this.downOffset.x, c += this.downOffset.y) : this.over && (b += this.overOffset.x, c += this.overOffset.y);
            this.posRelativeTo && (b += this.posRelativeTo.pos.x, c += this.posRelativeTo.pos.y);
            this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c));
            a.save();
            a.globalAlpha = this.alpha;
            a.transform(this.scale.x * this.scaleMultiplier, this.skew.x, this.skew.y, this.scale.y * this.scaleMultiplier, b, c);
            a.rotate(this.angle);
            if (this.text && "" != this.text)
                if (a.font = this.textFontSize + "px " + this.textFont, a.textAlign = "center", b = this.textOffset.x, c = this.textOffset.y, c += this.textHeightAdjustment, this.antialiasingEnabled || (b = this.bitwiseRound(b), c = this.bitwiseRound(c)), a.transform(this.textScale.x, this.textSkew.x, this.textSkew.y, this.textScale.y, b, c), a.rotate(this.textAngle), this.textList)
                    for (c = b = 0; c < this.textList.length; c++) a.fillStyle = this.getTextColorStr(), a.fillText(this.textList[c], 0, b), b += this.textLineHeight;
                else a.fillStyle = this.getTextColorStr(), a.fillText(this.text, 0, 0);
            a.restore()
        },
        aabbCheck: function(a, b) { return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1 },
        wrapText: function(a, b) {
            var c = ig.system.context;
            c.font = this.textFontSize + "px " + this.textFont;
            var d = a.split(" "),
                e = "",
                f = [];
            if (1 == d.length)
                for (var h = 0; h < a.length; h++) {
                    var j = e + a[h],
                        l = c.measureText(j),
                        l = l.width;
                    l > b && 0 < h ? (f.push(e), e = a[h]) : e = j
                } else
                    for (h = 0; h < d.length; h++) j = e + d[h] + " ", l = c.measureText(j), l = l.width, l > b && 0 < h ? (f.push(e), e = d[h] + " ") : e = j;
            f.push(e);
            return f
        },
        roundRect: function(a, b, c, d, e, f, h, j) {
            "undefined" == typeof j && (j = !0);
            "undefined" === typeof f && (f = 5);
            a.beginPath();
            a.moveTo(b + f, c);
            a.lineTo(b + d - f, c);
            a.quadraticCurveTo(b + d, c, b + d, c + f);
            a.lineTo(b + d, c + e - f);
            a.quadraticCurveTo(b + d, c + e, b + d - f, c + e);
            a.lineTo(b + f, c + e);
            a.quadraticCurveTo(b, c + e, b, c + e - f);
            a.lineTo(b, c + f);
            a.quadraticCurveTo(b, c, b + f, c);
            a.closePath();
            j && a.stroke();
            h && a.fill()
        },
        octogon: function(a, b, c, d, e, f, h, j) {
            "undefined" == typeof j && (j = !0);
            "undefined" === typeof f && (f = 5);
            a.beginPath();
            a.moveTo(b + f, c);
            a.lineTo(b + d - f, c);
            a.lineTo(b + d, c + f);
            a.lineTo(b + d, c + e - f);
            a.lineTo(b + d - f, c + e);
            a.lineTo(b + f, c + e);
            a.lineTo(b, c + e - f);
            a.lineTo(b, c + f);
            a.lineTo(b + f, c);
            a.closePath();
            j && a.stroke();
            h && a.fill()
        },
        pill: function(a, b, c, d, e, f, h) {
            "undefined" == typeof h && (h = !0);
            var j = e / 2;
            a.beginPath();
            a.arc(b + j, c + j, j, 0.5 * Math.PI, 1.5 * Math.PI);
            a.lineTo(b + d - j, c);
            a.arc(b + d - j, c + j, j, 1.5 * Math.PI, 0.5 * Math.PI);
            a.lineTo(b + j, c + e);
            a.closePath();
            h && a.stroke();
            f && a.fill()
        },
        circle: function(a, b, c, d, e, f, h) {
            d = this.rect.h / 2;
            b = this.rect.x +
                this.rect.w / 2;
            c = this.rect.y + d;
            a.beginPath();
            a.arc(b, c, d, 0, 2 * Math.PI);
            a.closePath();
            h && a.stroke();
            f && a.fill()
        },
        bitwiseRound: function(a) { return 0.5 + a << 0 },
        getInputPos: function() { return ig.game.io.getClickPos() },
        getTextColorStr: function() { return "rgba(" + this.textColor.r + "," + this.textColor.g + "," + this.textColor.b + "," + this.textAlpha + ")" }
    });
    ig.BUTTONTYPE = { LABEL_ONLY: 0, SQUARE_RECT: 1, ROUNDED_RECT: 2, OCTOGON: 3, PILL: 4, CIRCLE: 5, IMAGE: 6, ANIMSHEET: 7 }
});
ig.baked = !0;
ig.module("game.components.clickable-div-layer").requires("game.data.vector").defines(function() {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/game/graphics/misc/invisible.png",
        init: function(a) {
            this.pos = new Vector2(a.pos.x, a.pos.y);
            this.size = new Vector2(a.size.x, a.size.y);
            var b = "more-games",
                c = "www.google.com",
                d = !1;
            a.div_layer_name && (b = a.div_layer_name);
            a.link && (c = a.link);
            a.newWindow && (d = a.newWindow);
            this.createClickableLayer(b, c, d)
        },
        createClickableLayer: function(a, b, c) {
            this.identifier = a;
            var d = ig.domHandler.getElementById("#" + a);
            d ? (ig.domHandler.show(d), ig.domHandler.attr(d, "href", b)) : this.createClickableOutboundLayer(a, b, this.invisImagePath, c)
        },
        update: function(a, b) { this.pos.x === a && this.pos.y === b || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y) },
        createClickableOutboundLayer: function(a, b, c, d) {
            console.log("create clickable outbound layer");
            var e = ig.domHandler.create("div");
            ig.domHandler.attr(e, "id", a);
            var f = ig.domHandler.create("a");
            d ? (ig.domHandler.attr(f, "href", b), ig.domHandler.attr(f, "target", "_blank")) : ig.domHandler.attr(f, "href", b);
            b = ig.domHandler.create("img");
            ig.domHandler.css(b, { width: "100%", height: "100%" });
            ig.domHandler.attr(b, "src", c);
            c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                d = Math.floor(this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                var h = Math.floor(this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px",
                    j = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                c = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px"
            } else d = ig.domHandler.getElementById("#canvas"), d = ig.domHandler.getOffsets(d), h = d.top, d = Math.floor(d.left + this.pos.x * c) + "px", h = Math.floor(h + this.pos.y * c) + "px", j = Math.floor(this.size.x * c) + "px", c = Math.floor(this.size.y * c) + "px";
            ig.domHandler.css(e, { "float": "left", position: "absolute", left: d, top: h, width: j, height: c, "z-index": 3 });
            ig.domHandler.addEvent(e, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(f, b);
            ig.domHandler.appendChild(e, f);
            ig.domHandler.appendToBody(e);
            ig.sizeHandler.dynamicClickableEntityDivs[a] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[a].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[a].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[a].entity_pos_x = this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[a].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity", "game.components.clickable-div-layer").defines(function() {
    EntityButtonMoreGames = ig.Entity.extend({
        size: { x: 270, y: 72 },
        zIndex: 750,
        type: ig.Entity.TYPE.B,
        image: new ig.Image("media/game/graphics/game/ui/more-games.png"),
        imageOffset: { x: 0, y: 0 },
        init: function(a, b, c) { this.parent(a, b, c) },
        ready: function() {
            this.pos.x = 420 - this.image.width / 2;
            this.pos.y = 580 - this.image.height / 2;
            this.size.x = this.image.width;
            this.size.y = this.image.height;
            setTimeout(this.spawnDiv(), 5)
        },
        spawnDiv: function() { _SETTINGS.MoreGames.Enabled ? (_SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.divLayerName = "more-games", this.clickableLayer = new ClickableDivLayer(this), this.show()) : this.kill() },
        hide: function() { this.divLayerName && (id = this.divLayerName, document.getElementById(id).style.visibility = "hidden", $("#" + id).hide()) },
        show: function() { this.divLayerName && (id = this.divLayerName, document.getElementById(id).style.visibility = "visible", $("#" + id).show()) },
        kill: function() {
            this.parent();
            this.hide()
        },
        draw: function() {
            var a = this.pos.x + this.imageOffset.x,
                b = this.pos.y + this.imageOffset.y;
            this.image && this.image.draw(a, b)
        }
    })
});
ig.baked = !0;
ig.module("game.classes.options-panel").requires("plugins.button").defines(function() {
    OptionsPanel = ig.Class.extend({
        pos: { x: 0, y: 0 },
        bgAlpha: 0,
        maxBgAlpha: 0.75,
        alpha: 1,
        transitionDuration: 0.2,
        transitionTime: 0,
        transitionIn: !1,
        transitionOut: !1,
        hidden: !0,
        offset: { x: 0, y: 0 },
        relStartPos: { x: 0, y: 0 },
        endPos: { x: 0, y: 0 },
        bgImage: new ig.Image("media/game/graphics/game/backgrounds/pop-up-bg.png"),
        bgImageOffset: { x: 0, y: 0 },
        backImage: new ig.Image("media/game/graphics/game/ui/cancel.png"),
        musicOnImage: new ig.Image("media/game/graphics/game/ui/music-on.png"),
        musicOffImage: new ig.Image("media/game/graphics/game/ui/music-off.png"),
        soundOnImage: new ig.Image("media/game/graphics/game/ui/sound-on.png"),
        soundOffImage: new ig.Image("media/game/graphics/game/ui/sound-off.png"),
        mainmenuImage: new ig.Image("media/game/graphics/game/ui/back.png"),
        tutorialImage: new ig.Image("media/game/graphics/game/ui/tutorial.png"),
        musicButton: null,
        soundButton: null,
        backButton: null,
        hasTutorialButton: !1,
        tutorialButton: null,
        hasMainmenuButton: !1,
        mainmenuButton: null,
        control: null,
        init: function(a) { this.control = a },
        ready: function() {
            "function" == typeof this.control.playTutorial && (this.hasTutorialButton = !0);
            this.relStartPos.y = -ig.system.height;
            this.endPos.x = ig.system.width / 2;
            this.endPos.y = ig.system.height / 2;
            this.pos.x = this.endPos.x + this.relStartPos.x;
            this.pos.y = this.endPos.y + this.relStartPos.y;
            this.bgImageOffset.x = -this.bgImage.width / 2;
            this.bgImageOffset.y = -this.bgImage.height / 2;
            var a = this.backImage,
                b = a.width,
                c = a.height,
                d = new ig.Button(this);
            d.setPos({ x: this.bgImage.width / 2 - 40, y: -this.bgImage.height / 2 + 60 });
            d.posRelativeTo = this;
            d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
            d.textOffset.x = 2;
            d.textColor = { r: 0, g: 0, b: 0 };
            d.clickedFunction = this.backButtonPressed.bind(this);
            d.downOffset = { x: 0, y: 1 };
            d.overOffset = { x: 0, y: -1 };
            d.overScaleMultiplier = 1;
            d.downScaleMultiplier = 1;
            d.buttonType = ig.BUTTONTYPE.IMAGE;
            d.setImage(a);
            this.backButton = d;
            b = this.musicOnImage.width;
            c = this.musicOnImage.height;
            d = new ig.Button(this);
            d.setPos({ x: 60, y: 27 });
            d.posRelativeTo = this;
            d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
            d.textColor = { r: 0, g: 0, b: 0 };
            d.setFont(14, "bachelorpadjl, Impact, Charcoal, sans-serif");
            b = _STRINGS.UI.MUSIC;
            addTextSpacing && (b = b.split("").join(String.fromCharCode(8202)));
            d.setText(b);
            d.textOffset.x = 2;
            d.textOffset.y = 60;
            d.textShadowDisabled = !1;
            d.textShadowColor = "rgba(255,255,255,0.5)";
            d.textShadowOffset = { x: 1, y: 1 };
            d.clickedFunction = this.musicButtonPressed.bind(this);
            d.downOffset = { x: 0, y: 1 };
            d.overOffset = { x: 0, y: -1 };
            d.overScaleMultiplier = 1;
            d.downScaleMultiplier = 1;
            d.buttonType = ig.BUTTONTYPE.IMAGE;
            d.setImage(this.musicOnImage);
            1 > ig.game.musicVolume && d.setImage(this.musicOffImage);
            this.musicButton = d;
            b = this.soundOnImage.width;
            c = this.soundOnImage.height;
            d = new ig.Button(this);
            d.setPos({ x: -60, y: 27 });
            d.posRelativeTo = this;
            d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
            d.textColor = { r: 0, g: 0, b: 0 };
            d.setFont(14, "bachelorpadjl, Impact, Charcoal, sans-serif");
            b = _STRINGS.UI.SOUND;
            addTextSpacing && (b = b.split("").join(String.fromCharCode(8202)));
            d.setText(b);
            d.textOffset.x = 2;
            d.textOffset.y = 60;
            d.textShadowDisabled = !1;
            d.textShadowColor = "rgba(255,255,255,0.5)";
            d.textShadowOffset = { x: 1, y: 1 };
            d.clickedFunction = this.soundButtonPressed.bind(this);
            d.downOffset = { x: 0, y: 1 };
            d.overOffset = { x: 0, y: -1 };
            d.overScaleMultiplier = 1;
            d.downScaleMultiplier = 1;
            d.buttonType = ig.BUTTONTYPE.IMAGE;
            d.setImage(this.soundOnImage);
            1 > ig.game.sfxVolume && d.setImage(this.soundOffImage);
            this.soundButton = d;
            this.hasTutorialButton ? (a = this.tutorialImage, b = a.width, c = a.height, d = new ig.Button(this), d.setPos({ x: -60, y: 27 }), d.posRelativeTo = this, d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c }), d.textColor = { r: 0, g: 0, b: 0 }, d.setFont(14, "bachelorpadjl, Impact, Charcoal, sans-serif"), b = _STRINGS.UI.TUTORIAL, addTextSpacing && (b = b.split("").join(String.fromCharCode(8202))), d.setText(b), d.textOffset.x = 2, d.textOffset.y = 60, d.textShadowDisabled = !1, d.textShadowColor = "rgba(255,255,255,0.5)", d.textShadowOffset = { x: 1, y: 1 }, d.clickedFunction = this.tutorialButtonPressed.bind(this), d.downOffset = { x: 0, y: 1 }, d.overOffset = { x: 0, y: -1 }, d.overScaleMultiplier = 1, d.downScaleMultiplier = 1, d.buttonType = ig.BUTTONTYPE.IMAGE, d.setImage(a), this.tutorialButton = d, this.tutorialButton.setPos({ x: -120, y: 27 }), this.soundButton.setPos({ x: 0, y: 27 }), this.musicButton.setPos({ x: 120, y: 27 })) : this.hasMainmenuButton && (a = this.mainmenuImage, b = a.width, c = a.height, d = new ig.Button(this), d.setPos({ x: -60, y: 27 }), d.posRelativeTo = this, d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c }), d.textColor = { r: 0, g: 0, b: 0 }, d.setFont(14, "bachelorpadjl, Impact, Charcoal, sans-serif"), b = _STRINGS.UI["MAIN MENU"], addTextSpacing && (b = b.split("").join(String.fromCharCode(8202))), d.setText(b), d.textOffset.x = 2, d.textOffset.y = 60, d.textShadowDisabled = !1, d.textShadowColor = "rgba(255,255,255,0.5)", d.textShadowOffset = { x: 1, y: 1 }, d.clickedFunction = this.mainmenuButtonPressed.bind(this), d.downOffset = { x: 0, y: 1 }, d.overOffset = { x: 0, y: -1 }, d.overScaleMultiplier = 1, d.downScaleMultiplier = 1, d.buttonType = ig.BUTTONTYPE.IMAGE, d.setImage(a), this.mainmenuButton = d, this.mainmenuButton.setPos({ x: -120, y: 27 }), this.soundButton.setPos({ x: 0, y: 27 }), this.musicButton.setPos({ x: 120, y: 27 }))
        },
        draw: function() {
            if (!this.hidden) {
                var a = ig.system.context;
                0 < this.bgAlpha && (a.save(), a.globalAlpha = this.bgAlpha, a.fillStyle = "#000000", a.fillRect(0, 0, ig.system.width, ig.system.height), a.restore());
                var b = this.pos.x + this.bgImageOffset.x,
                    c = this.pos.y + this.bgImageOffset.y;
                a.save();
                a.globalAlpha = this.alpha;
                this.bgImage.draw(b, c);
                a.restore();
                b = _STRINGS.UI.OPTIONS;
                addTextSpacing && (b = b.split("").join(String.fromCharCode(8202)));
                a.font = "30px bachelorpadjl, Impact, Charcoal, sans-serif";
                a.textAlign = "center";
                a.fillStyle = "#cccccc";
                a.fillText(b, this.pos.x + 1, c + 62 + 1);
                a.fillStyle = "#333333";
                a.fillText(b, this.pos.x, c + 62);
                this.tutorialButton && this.tutorialButton.draw();
                this.mainmenuButton && this.mainmenuButton.draw();
                this.backButton.draw();
                this.soundButton.draw();
                this.musicButton.draw()
            }
        },
        update: function() {
            if (!this.hidden) {
                if (this.transitionIn) {
                    var a = ig.system.clock.delta() - this.transitionTime,
                        a = a / this.transitionDuration;
                    1 < a && (a = 1);
                    this.alpha = a;
                    this.bgAlpha = this.maxBgAlpha * a;
                    if (0.8 > a) {
                        var b = a / 0.8;
                        this.offset.x = (1 - b) * this.relStartPos.x;
                        this.offset.y = (1 - b) * this.relStartPos.y
                    } else 1 > a ? (b = (a - 0.8) / 0.2 * Math.PI, this.offset.x = -0.05 * this.relStartPos.x * Math.sin(b), this.offset.y = -0.05 * this.relStartPos.y * Math.sin(b)) : (this.offset.x = 0, this.offset.y = 0);
                    1 <= a && (this.transitionIn = !1, this.showDone());
                    this.pos.x = this.endPos.x + this.offset.x;
                    this.pos.y = this.endPos.y + this.offset.y
                } else this.transitionOut && (a = ig.system.clock.delta() - this.transitionTime, a /= this.transitionDuration, 1 < a && (a = 1), this.alpha = 1 - a, this.bgAlpha = this.maxBgAlpha * (1 - a), 1 > a ? (this.offset.x = a * this.relStartPos.x, this.offset.y = a * this.relStartPos.y) : (this.offset.x = this.relStartPos.x, this.offset.y = this.relStartPos.y), 1 <= a && (this.transitionOut = !1, this.hideDone()), this.pos.x = this.endPos.x + this.offset.x, this.pos.y = this.endPos.y + this.offset.y);
                this.tutorialButton && this.tutorialButton.update();
                this.mainmenuButton && this.mainmenuButton.update();
                this.backButton.update();
                this.musicButton.update();
                this.soundButton.update()
            }
        },
        show: function() { this.hidden && !this.transitionIn && (this.transitionIn = !0, this.transitionTime = ig.system.clock.delta(), this.hidden = !1) },
        showDone: function() {},
        hide: function() {
            if (!this.hidden && !this.transitionOut)
                if (this.transitionOut = !0, this.transitionIn) {
                    this.transitionIn = !1;
                    var a = ig.system.clock.delta() - this.transitionTime;
                    this.transitionTime = ig.system.clock.delta() + (this.transitionDuration - a)
                } else this.transitionTime = ig.system.clock.delta()
        },
        hideDone: function() { this.hidden = !0 },
        muteAudio: function() {
            ig.game.muted = !0;
            this.setMusicVolume(0);
            this.setSfxVolume(0);
            ig.game.savePlayerStats()
        },
        unmuteAudio: function() {
            ig.game.muted = !1;
            this.setMusicVolume(ig.game.musicVolume);
            this.setSfxVolume(ig.game.sfxVolume);
            ig.game.savePlayerStats()
        },
        aabbCheck: function(a, b) { return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1 },
        musicButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            var a = 1;
            ig.ua.mobile && (a = 0.25);
            ig.game.musicVolume < a ? (this.setMusicVolume(a), this.musicButton.setImage(this.musicOnImage)) : (this.setMusicVolume(0), this.musicButton.setImage(this.musicOffImage))
        },
        soundButtonPressed: function() { 1 > ig.game.sfxVolume ? (this.setSfxVolume(1), this.soundButton.setImage(this.soundOnImage), ig.soundHandler.sfxPlayer.play("button")) : (this.setSfxVolume(0), this.soundButton.setImage(this.soundOffImage)) },
        backButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.control.hideOptions()
        },
        tutorialButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.control && "function" == typeof this.control.playTutorial && this.control.playTutorial()
        },
        mainmenuButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.control && "function" == typeof this.control.returnToMainMenu && this.control.returnToMainMenu()
        },
        setSfxVolume: function(a) {
            ig.soundHandler.sfxVolume = a;
            ig.soundHandler.sfxPlayer.volume(a);
            ig.game.sfxVolume = a;
            ig.game.savePlayerStats()
        },
        setMusicVolume: function(a) {
            ig.soundHandler.musicVolume = a;
            ig.soundHandler.bgmPlayer.volume(a);
            ig.soundHandler.bgmPlayer.bgmPlaying || ig.soundHandler.bgmPlayer.play();
            ig.game.musicVolume = a;
            ig.game.savePlayerStats()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.options-panel").requires("impact.entity", "game.classes.options-panel").defines(function() {
    EntityOptionsPanel = ig.Entity.extend({
        zIndex: 1E3,
        control: null,
        panel: null,
        init: function(a, b, c) { this.parent(a, b, c) },
        ready: function() {
            this.panel = new OptionsPanel(this.control);
            this.panel.ready()
        },
        draw: function() { this.panel.draw() },
        update: function() { this.panel.update() },
        show: function() { this.panel.show() },
        hide: function() { this.panel.hide() }
    })
});
ig.baked = !0;
ig.module("game.entities.home-control").requires("impact.entity", "plugins.fade-transition", "plugins.button", "game.entities.button-more-games", "game.entities.options-panel").defines(function() {
    EntityHomeControl = ig.Entity.extend({
        zIndex: 100,
        isHome: !0,
        bgImage: new ig.Image("media/game/graphics/game/backgrounds/mainbg.png"),
        bgOffset: { x: 0, y: 0 },
        bgScale: 1,
        time: 0,
        playButtonImage: new ig.Image("media/game/graphics/game/ui/play.png"),
        optionsButtonImage: new ig.Image("media/game/graphics/game/ui/settings.png"),
        playButton: null,
        optionsButton: null,
        moregames: null,
        options: null,
        fadeTransition: null,
        menuPaused: !1,
        mainMenuAlpha: 1,
        init: function(a, b, c) { this.parent(a, b, c) },
        ready: function() {
            if (!ig.global.wm) {
                ig.soundHandler.bgmPlayer.bgmPlaying || ig.soundHandler.bgmPlayer.play();
                this.moregames = ig.game.spawnEntity(EntityButtonMoreGames, 0, 0);
                this.moregames.ready();
                this.options = ig.game.spawnEntity(EntityOptionsPanel, 0, 0);
                this.options.control = this;
                this.options.ready();
                this.options.panel.hasTutorialButton = !0;
                var a = 0;
                this.bgImage.width < ig.system.width ? this.bgScale = ig.system.width / this.bgImage.width : this.bgImage.width > ig.system.width && (a = -(this.bgImage.width - ig.system.width) / 2);
                this.bgOffset.x = this.bitwiseRound(a);
                var a = this.playButtonImage,
                    b = a.width,
                    c = a.height,
                    d = new ig.Button(this);
                d.setPos({ x: ig.system.width / 2, y: 435 });
                d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
                d.posRelativeTo = this;
                d.clickedFunction = this.playButtonPressed.bind(this);
                d.downOffset = { x: 0, y: 1 };
                d.overOffset = { x: 0, y: -1 };
                d.overScaleMultiplier = 1;
                d.downScaleMultiplier = 1;
                d.buttonType =
                    ig.BUTTONTYPE.IMAGE;
                d.setImage(a);
                this.playButton = d;
                a = this.optionsButtonImage;
                b = a.width;
                c = a.height;
                d = new ig.Button(this);
                d.setPos({ x: 420, y: 510 });
                d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
                d.posRelativeTo = this;
                d.clickedFunction = this.optionsButtonPressed.bind(this);
                d.downOffset = { x: 0, y: 1 };
                d.overOffset = { x: 0, y: -1 };
                d.overScaleMultiplier = 1;
                d.downScaleMultiplier = 1;
                d.buttonType = ig.BUTTONTYPE.IMAGE;
                d.setImage(a);
                this.optionsButton = d;
                (!this.moregames || this.moregames._killed) && this.optionsButton.setPos({ x: 420, y: 580 });
                this.fadeTransition = new ig.FadeTransition;
                this.fadeTransition.startFadeinTransition()
            }
        },
        draw: function() {
            this.drawMainMenu();
            this.optionsButton.draw();
            this.playButton.draw();
            this.fadeTransition && this.fadeTransition.draw()
        },
        update: function() {
            this.fadeTransition && this.fadeTransition.update();
            this.time += ig.system.tick;
            this.menuPaused || (this.updateMainMenu(), this.optionsButton.update(), this.playButton.update())
        },
        playGame: function() {
            ig.input.clearPressed();
            this.moregames && this.moregames.hide();
            ig.game.firstrun ? (ig.game.doTutorialFlag = !0, ig.game.firstrun = !1, ig.game.savePlayerStats()) : ig.game.doTutorialFlag = !1;
            ig.game.director.jumpTo(LevelGame)
        },
        playTutorial: function() {
            ig.input.clearPressed();
            this.moregames && this.moregames.hide();
            ig.game.doTutorialFlag = !0;
            ig.game.firstrun = !1;
            ig.game.savePlayerStats();
            ig.game.director.jumpTo(LevelGame)
        },
        playButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.playGame()
        },
        optionsButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.showOptions()
        },
        showOptions: function() {
            this.moregames && this.moregames.hide();
            this.playButton.disable();
            this.optionsButton.disable();
            this.options.show()
        },
        hideOptions: function() {
            this.moregames && this.moregames.show();
            this.playButton.enable();
            this.optionsButton.enable();
            this.options.hide()
        },
        pause: function() {
            this.menuPaused = !0;
            this.moregames && this.moregames.hide()
        },
        unpause: function() {
            this.menuPaused = !1;
            this.moregames && this.moregames.show()
        },
        drawMainMenu: function() {
            var a = ig.system.context;
            a.save();
            1 != this.bgScale && a.scale(this.bgScale, 1);
            this.bgImage.draw(this.bgOffset.x, this.bgOffset.y);
            a.restore();
            0 != this.mainMenuAlpha && (a.globalAlpha = this.mainMenuAlpha)
        },
        updateMainMenu: function() {},
        bitwiseRound: function(a) { return 0.5 + a << 0 }
    })
});
ig.baked = !0;
ig.module("game.levels.home").requires("impact.image", "game.entities.home-control").defines(function() { LevelHome = { entities: [{ type: "EntityHomeControl", x: 0, y: 0 }], layer: [] } });
ig.baked = !0;
ig.module("plugins.number-anim").defines(function() {
    ig.NumberAnim = ig.Class.extend({
        minValue: 0,
        maxValue: 10,
        hasMin: !1,
        hasMax: !1,
        actualValue: 0,
        displayValue: 0,
        animStartTime: 0,
        animStartValue: 0,
        animDuration: 0.2,
        init: function(a) {
            if (!a || isNaN(a)) a = 0;
            this.setValue(a)
        },
        setValue: function(a) { this.displayValue = this.actualValue = a },
        add: function(a) { isNaN(a) || (this.actualValue += a, this.actualValue < this.minValue && (this.actualValue = this.minValue), this.actualValue >= this.maxValue && (this.actualValue = this.maxValue), this.animStartTime = ig.system.clock.delta(), this.animStartValue = this.displayValue) },
        setMin: function(a) {
            this.minValue = a;
            this.hasMin = !0
        },
        setMax: function(a) {
            this.maxValue = a;
            this.hasMax = !0
        },
        update: function() {
            if (0 != this.actualValue - this.displayValue) {
                var a = (ig.system.clock.delta() - this.animStartTime) / this.animDuration;
                this.displayValue = 1 <= a ? this.actualValue : this.displayValue = this.animStartValue + this.easeOutSine(a, this.actualValue - this.animStartValue)
            }
        },
        easeOutSine: function(a, b) { return b * Math.sin(a * (Math.PI / 2)) }
    })
});
ig.baked = !0;
ig.module("plugins.textwrapper").defines(function() {
    ig.Textwrapper = ig.Class.extend({
        textFontSize: 14,
        textFont: "Impact, Charcoal, sans-serif",
        textLineHeight: 14,
        init: function(a, b) {
            a && (this.textLineHeight = this.textSize = a);
            b && (this.textFont = b)
        },
        wrapText: function(a, b) {
            if (!a || "" == a || 0 >= b) return [];
            var c = ig.system.context;
            c.font = this.textFontSize + "px " + this.textFont;
            var d = a.split(" "),
                e = "",
                f = [];
            if (1 == d.length)
                for (var h = 0; h < a.length; h++) {
                    var j = e + a[h],
                        l = c.measureText(j),
                        l = l.width;
                    l > b && 0 < h ? (f.push(e), e = a[h]) : e = j
                } else
                    for (h = 0; h < d.length; h++) j = e + d[h] + " ", l = c.measureText(j), l = l.width, l > b && 0 < h ? (f.push(e), e = d[h] + " ") : e = j;
            f.push(e);
            return f
        },
        drawTextList: function(a, b, c) {
            if (a && a.length && !(0 >= a.length))
                for (var d = ig.system.context, e = 0, f = 0; f < a.length; f++) d.fillText(a[f], b, c + e), e += this.textLineHeight
        }
    })
});
ig.baked = !0;
ig.module("game.classes.ui").requires("plugins.button", "plugins.textwrapper").defines(function() {
    Ui = ig.Class.extend({
        settingsImage: new ig.Image("media/game/graphics/game/ui/setting.png"),
        shopImage: new ig.Image("media/game/graphics/game/ui/shop.png"),
        goldBgImage: new ig.Image("media/game/graphics/game/ui/gold.png"),
        goldRect: { x: 0, y: 0, w: 0, h: 0 },
        heroBgImage: new ig.Image("media/game/graphics/game/ui/herobar.png"),
        heroRect: { x: 0, y: 0, w: 0, h: 0 },
        heroHPBarRect: { x: 0, y: 0, w: 0, h: 0 },
        heroEnergyBarRect: { x: 0, y: 0, w: 0, h: 0 },
        heroNameRect: { x: 0, y: 0, w: 0, h: 0 },
        greenBgImage: new ig.Image("media/game/graphics/game/ui/green-bg.png"),
        greenRect: { x: 56, y: 62, w: 30, h: 30 },
        purpleSmallBgImage: new ig.Image("media/game/graphics/game/ui/green-small-bg.png#ff00ff^screen"),
        greenSmallBgImage: new ig.Image("media/game/graphics/game/ui/green-small-bg.png"),
        greenSmallRect: { x: 13, y: -35, w: 19, h: 19 },
        healthImage: new ig.Image("media/game/graphics/game/ui/abilities/health.png"),
        energyImage: new ig.Image("media/game/graphics/game/ui/abilities/energy.png"),
        powerImage: new ig.Image("media/game/graphics/game/ui/abilities/power.png"),
        swordImage: new ig.Image("media/game/graphics/game/ui/abilities/sword.png"),
        shieldImage: new ig.Image("media/game/graphics/game/ui/abilities/shield.png"),
        buyButtonImage: new ig.Image("media/game/graphics/game/ui/buy-button.png"),
        abilityBarRect: { x: 0, y: 0, w: 0, h: 100 },
        abilityButtonMetaList: [],
        abilityButtonList: [],
        abilityQuickbuyButtonList: [],
        control: null,
        optionsButton: null,
        shopButton: null,
        init: function(a) {
            var b = { id: 0 };
            b.image = this.healthImage;
            b.str = _STRINGS.UI["HEALTH POTION"];
            this.abilityButtonMetaList.push(b);
            b = { id: 1 };
            b.image = this.energyImage;
            b.str = _STRINGS.UI["ENERGY POTION"];
            this.abilityButtonMetaList.push(b);
            b = { id: 2 };
            b.image = this.powerImage;
            b.str = _STRINGS.UI["POWER POTION"];
            this.abilityButtonMetaList.push(b);
            b = { id: 3 };
            b.image = this.swordImage;
            b.str = _STRINGS.UI["MEGA SLASH"];
            this.abilityButtonMetaList.push(b);
            b = { id: 4 };
            b.image = this.shieldImage;
            b.str = _STRINGS.UI["SHIELDS UP"];
            this.abilityButtonMetaList.push(b);
            this.control = a;
            this.initButtons()
        },
        initButtons: function() {
            var a = this.settingsImage,
                b = a.width,
                c = a.height,
                d = new ig.Button(this);
            d.setPos({ x: ig.system.width - 25, y: 45 });
            d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
            d.textWrap = !1;
            d.textColor = { r: 255, g: 254, b: 162 };
            d.setFont(8, "bachelorpadjl, Impact, Charcoal, sans-serif");
            b = _STRINGS.UI.OPTIONS;
            addTextSpacing && (b = b.split("").join(String.fromCharCode(8202)));
            d.setText(b);
            d.textOffset.x = 0;
            d.textOffset.y = 22;
            d.textShadowDisabled = !1;
            d.textShadowColor = "rgba(0,0,0,0.5)";
            d.textShadowOffset = { x: 1, y: 1 };
            d.clickedFunction = this.optionsButtonPressed.bind(this);
            d.downOffset = { x: 0, y: 1 };
            d.overOffset = { x: 0, y: -1 };
            d.overScaleMultiplier = 1;
            d.downScaleMultiplier = 1;
            d.buttonType = ig.BUTTONTYPE.IMAGE;
            d.setImage(a);
            this.optionsButton = d;
            a = this.shopImage;
            b = a.width;
            c = a.height;
            d = new ig.Button(this);
            d.setPos({ x: ig.system.width - 67, y: 45 });
            d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
            d.textWrap = !1;
            d.textColor = { r: 255, g: 254, b: 162 };
            d.setFont(8, "bachelorpadjl, Impact, Charcoal, sans-serif");
            b = _STRINGS.UI.SHOP;
            addTextSpacing && (b = b.split("").join(String.fromCharCode(8202)));
            d.setText(b);
            d.textOffset.x = -2;
            d.textOffset.y = 22;
            d.textShadowDisabled = !1;
            d.textShadowColor = "rgba(0,0,0,0.5)";
            d.textShadowOffset = { x: 1, y: 1 };
            d.clickedFunction = this.shopButtonPressed.bind(this);
            d.downOffset = { x: 0, y: 1 };
            d.overOffset = { x: 0, y: -1 };
            d.overScaleMultiplier = 1;
            d.downScaleMultiplier = 1;
            d.buttonType = ig.BUTTONTYPE.IMAGE;
            d.setImage(a);
            this.shopButton = d;
            this.goldRect.x = ig.system.width - 200 + 47;
            this.goldRect.y = 36;
            this.goldRect.w = 50;
            this.goldRect.h = 15;
            this.heroRect.x = 14;
            this.heroRect.y = 3;
            this.heroRect.w = 210;
            this.heroRect.h = 96;
            this.heroNameRect.x = 102;
            this.heroNameRect.y = 30;
            this.heroNameRect.w = 73;
            this.heroNameRect.h = 11;
            this.heroHPBarRect.x = 104;
            this.heroHPBarRect.y = 44;
            this.heroHPBarRect.w = 69;
            this.heroHPBarRect.h = 5;
            this.heroEnergyBarRect.x = this.heroHPBarRect.x;
            this.heroEnergyBarRect.y = this.heroHPBarRect.y + 5;
            this.heroEnergyBarRect.w = 69;
            this.heroEnergyBarRect.h = 5;
            this.abilityBarRect.x = 0;
            this.abilityBarRect.y = ig.system.height - 100 - 33;
            this.abilityBarRect.w = ig.system.width;
            this.abilityBarRect.h = 100;
            this.abilityButtonList = [];
            for (var e = a = 0; e < this.abilityButtonMetaList.length; e++) {
                var f = this.abilityButtonMetaList[e];
                0 < e && (a += 25);
                a += f.image.width
            }
            for (var h = this.abilityBarRect.y + this.abilityBarRect.h / 2, j = this.abilityBarRect.x + this.abilityBarRect.w / 2 - a / 2, e = 0; e < this.abilityButtonMetaList.length; e++) f = this.abilityButtonMetaList[e], f.x = j + f.image.width / 2, f.y = h, this.abilityButtonMetaList[e] = f, a = f.image, b = a.width, c = a.height, d = new ig.Button(this), d.abilityId = f.id, d.setPos({ x: f.x, y: f.y }), d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c }), d.textColor = { r: 255, g: 254, b: 162 }, d.setFont(8, "bachelorpadjl, Impact, Charcoal, sans-serif"), b = f.str, addTextSpacing && (b = b.split("").join(String.fromCharCode(8202))), d.setText(b), d.textOffset.x = 2, d.textOffset.y = 45, d.textShadowDisabled = !1, d.textShadowColor = "rgba(0,0,0,0.5)", d.textShadowOffset = { x: 1, y: 1 }, d.clickedFunction = this.abilityButtonPressed.bind(this), d.downOffset = { x: 0, y: 1 }, d.overOffset = { x: 0, y: -1 }, d.overScaleMultiplier = 1, d.downScaleMultiplier = 1, d.buttonType = ig.BUTTONTYPE.IMAGE, d.setImage(a), f.button = d, this.abilityButtonList.push(d), a = this.buyButtonImage, b = a.width, c = a.height, d = new ig.Button(this), d.abilityId = f.id, d.setPos({ x: f.x, y: f.y + 65 }), d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c }), d.setScale(0.75, 0.75), d.textColor = { r: 0, g: 0, b: 0 }, d.setFont(18, "bachelorpadjl, Impact, Charcoal, sans-serif"), b = _STRINGS.UI.BUY, d.setText(b), d.textOffset.x = -2, d.textOffset.y = 0, d.textShadowDisabled = !1, d.textShadowColor = "rgba(255,255,255,0.5)", d.textShadowOffset = { x: 1, y: 1 }, d.clickedFunction = this.buyButtonPressed.bind(this), d.downOffset = { x: 0, y: 1 }, d.overOffset = { x: 0, y: -1 }, d.overScaleMultiplier = 1, d.downScaleMultiplier = 1, d.buttonType = ig.BUTTONTYPE.IMAGE, d.setImage(a), this.abilityQuickbuyButtonList.push(d), j += f.image.width + 25
        },
        draw: function() {
            this.drawWhiteout();
            this.drawTopBar();
            this.drawAbilityBar()
        },
        drawTopBar: function() {
            this.drawGold();
            this.drawHerobar();
            this.shopButton.draw();
            this.optionsButton.draw()
        },
        drawAbilityBar: function() { for (var a = 0; a < this.abilityButtonList.length; a++) this.drawButtonGlow(this.abilityButtonList[a]), this.abilityButtonList[a].draw(), this.drawAbilityCount(this.abilityButtonList[a]), this.drawAbilityCooldownBar(this.abilityButtonList[a]), this.control.abilities[a].buyCost <= this.control.gameGold.actualValue && this.abilityQuickbuyButtonList[a].draw() },
        update: function() {
            this.optionsButton.update();
            this.shopButton.update();
            if (!this.control.gameOver && this.control.shop.hidden && this.control.options.hidden) {
                for (var a = 0; a < this.abilityButtonList.length; a++) this.abilityButtonList[a].update(), this.control.abilities[a].buyCost <= this.control.gameGold.actualValue && (this.abilityQuickbuyButtonList[a].setText(_STRINGS.UI.BUY), !this.abilityButtonList[a].disabled && !this.shopButton.disabled && this.abilityQuickbuyButtonList[a].update());
                this.detectPlayerInput()
            }
        },
        drawFPS: function() { ig.game.fps && (ig.system.context.fillStyle = "#ffffff", ig.system.context.font = "18px Impact, Charcoal, sans-serif", ig.system.context.textAlign = "center", ig.system.context.fillText(ig.game.fps, 15, 20)) },
        drawWhiteout: function() { this.control.whiteoutFlag && (ig.system.context.globalAlpha = 0.5 * this.control.whiteoutAlpha, ig.system.context.fillStyle = "#ff0000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.globalAlpha = 1) },
        drawGold: function() {
            this.goldBgImage.draw(this.goldRect.x - 47, this.goldRect.y - 13);
            var a = this.goldRect.x + this.goldRect.w / 2,
                b = this.goldRect.y + this.goldRect.h - 2,
                c = "" + Math.floor(this.control.gameGold.displayValue),
                d = ig.system.context;
            d.fillStyle = "#fffea2";
            d.font = "14px bachelorpadjl, Impact, Charcoal, sans-serif";
            d.textAlign = "center";
            d.fillText(c, a, b)
        },
        drawHerobar: function() {
            var a = this.control.hero;
            this.heroBgImage.draw(this.heroRect.x, this.heroRect.y);
            var b = ig.system.context,
                c = a.getHealthDisplayPercentage(),
                d = this.heroRect.x + this.heroHPBarRect.x + 1,
                e = this.heroRect.y + this.heroHPBarRect.y + 1,
                f = this.heroHPBarRect.w - 2,
                h = this.heroHPBarRect.h - 2;
            b.fillStyle = "rgba(255,0,0,0.75)";
            b.fillRect(d, e, f * c, h);
            b.fillStyle = "rgba(255,0,0,1)";
            b.fillRect(d, e + 1, f * c, 1);
            c = a.getEnergyDisplayPercentage();
            d = this.heroRect.x + this.heroEnergyBarRect.x + 1;
            e = this.heroRect.y + this.heroEnergyBarRect.y + 1;
            f = this.heroEnergyBarRect.w - 2;
            h = this.heroEnergyBarRect.h - 2;
            b.fillStyle = "rgba(0,151,189,0.75)";
            b.fillRect(d, e, f * c, h);
            e += 1;
            b.fillStyle = "rgba(0,151,189,1)";
            b.fillRect(d, e, f * c, 1);
            c = _STRINGS.UI.HERO;
            addTextSpacing && (c = c.split("").join(String.fromCharCode(8202)));
            d = this.heroRect.x + this.heroNameRect.x + 1;
            e = this.heroRect.y + this.heroNameRect.y + this.heroNameRect.h - 1;
            b.fillStyle = "#260300";
            b.font = "12px bachelorpadjl, Impact, Charcoal, sans-serif";
            b.textAlign = "left";
            b.fillText(c, d, e);
            this.greenBgImage.draw(this.heroRect.x + this.greenRect.x, this.heroRect.y + this.greenRect.y);
            c = "" + a.level;
            d = this.heroRect.x + this.greenRect.x + this.greenRect.w / 2 - 1;
            e = this.heroRect.y + this.greenRect.y + this.greenRect.h / 2 + 5;
            b.fillStyle = "#260300";
            b.font = "14px bachelorpadjl, Impact, Charcoal, sans-serif";
            b.textAlign = "center";
            b.fillText(c, d, e)
        },
        drawButtonGlow: function(a) {
            if (!(0 > a.abilityId || this.control.abilities.length <= a.abilityId)) {
                var b = this.control.abilities[a.abilityId];
                if (!(0 >= b.count) && !b.onCooldown() && b.available) {
                    var b = a.pos.x,
                        c = a.pos.y;
                    a.down ? (b += a.downOffset.x, c += a.downOffset.y) : a.over && (b += a.overOffset.x, c += a.overOffset.y);
                    var d = a.rect.w;
                    a = a.rect.h;
                    var b = b - d / 2,
                        c = c - a / 2 + ig.system.height,
                        e = ig.system.context;
                    e.save();
                    e.shadowOffsetY = -ig.system.height;
                    e.shadowBlur = 10;
                    e.shadowColor = "rgba(255,254,226,0.67)";
                    e.fillStyle = "rgba(0,0,0,1)";
                    e.fillRect(b, c, d, a);
                    e.restore()
                }
            }
        },
        drawAbilityCount: function(a) {
            if (!(0 > a.abilityId || this.control.abilities.length <= a.abilityId)) {
                var b = this.control.abilities[a.abilityId];
                if (!(0 >= b.count)) {
                    var c = a.pos.x,
                        d = a.pos.y;
                    a.down ? (c += a.downOffset.x, d += a.downOffset.y) : a.over && (c += a.overOffset.x, d += a.overOffset.y);
                    var e = this.greenSmallBgImage;
                    if (3 == a.abilityId || 4 == a.abilityId) e = this.purpleSmallBgImage;
                    c += this.greenSmallRect.x;
                    d += this.greenSmallRect.y;
                    e.draw(c, d);
                    a = "9+";
                    9 >= b.count && (a = b.count);
                    c += this.greenSmallRect.w / 2;
                    d += 2 * this.greenSmallRect.h / 3;
                    b = ig.system.context;
                    b.fillStyle = "#260300";
                    b.font = "10px bachelorpadjl, Impact, Charcoal, sans-serif";
                    b.textAlign = "center";
                    b.fillText(a, c, d)
                }
            }
        },
        drawAbilityCooldownBar: function(a) {
            if (!(0 > a.abilityId || this.control.abilities.length <= a.abilityId)) {
                var b = this.control.abilities[a.abilityId];
                if (0 != b.count) {
                    var c = a.pos.x,
                        d = a.pos.y;
                    a.down ? (c += a.downOffset.x, d += a.downOffset.y) : a.over && (c += a.overOffset.x, d += a.overOffset.y);
                    a = 3;
                    var e = 46,
                        c = c - e / 2,
                        d = d + 30 - 3,
                        f = ig.system.context;
                    f.strokeStyle = "rgba(0,0,0,0.25)";
                    f.fillStyle = "rgba(0,0,0,0.4)";
                    f.beginPath();
                    f.moveTo(c + a, d);
                    f.lineTo(c + e - a, d);
                    f.quadraticCurveTo(c + e, d, c + e, d + a);
                    f.lineTo(c + e, d + 6 - a);
                    f.quadraticCurveTo(c + e, d + 6, c + e - a, d + 6);
                    f.lineTo(c + a, d + 6);
                    f.quadraticCurveTo(c, d + 6, c, d + 6 - a);
                    f.lineTo(c, d + a);
                    f.quadraticCurveTo(c, d, c + a, d);
                    f.closePath();
                    f.stroke();
                    f.fill();
                    b.onCooldown() && (e *= b.activateTime / b.cooldownDuration, a > e / 2 && (a = Math.floor(e / 2)));
                    f.globalAlpha = 1;
                    f.fillStyle = "rgb(" + b.color.r + "," + b.color.g + "," + b.color.b + ")";
                    f.beginPath();
                    f.moveTo(c + a, d);
                    f.lineTo(c + e - a, d);
                    f.quadraticCurveTo(c + e, d, c + e, d + a);
                    f.lineTo(c + e, d + 6 - a);
                    f.quadraticCurveTo(c + e, d + 6, c + e - a, d + 6);
                    f.lineTo(c + a, d + 6);
                    f.quadraticCurveTo(c, d + 6, c, d + 6 - a);
                    f.lineTo(c, d + a);
                    f.quadraticCurveTo(c, d, c + a, d);
                    f.closePath();
                    f.fill()
                }
            }
        },
        optionsButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.control.showOptions()
        },
        shopButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.control.showShop()
        },
        abilityButtonPressed: function(a) { this.control.activateAbility(a.abilityId) },
        buyButtonPressed: function(a) {
            ig.soundHandler.sfxPlayer.play("buy");
            this.control.upgradeAbility(a.abilityId)
        },
        detectPlayerInput: function() {
            if (ig.input.pressed("click")) {
                var a = { x: 0, y: 0, w: 0, h: 0 };
                a.x = this.goldRect.x - 47;
                a.y = this.goldRect.y - 13;
                a.w = this.goldBgImage.width;
                a.h = this.goldBgImage.height;
                var b = this.getInputPos(),
                    c = { x: 0, y: 0, w: 1, h: 1 };
                c.x = b.x;
                c.y = b.y;
                this.aabbCheck(a, c) && (this.shopButton.disabled || this.shopButtonPressed())
            }
        },
        getInputPos: function() { return ig.game.io.getClickPos() },
        aabbCheck: function(a, b) { return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1 }
    })
});
ig.baked = !0;
ig.module("plugins.tutorial-box").defines(function() {
    ig.TutorialBox = ig.Class.extend({
        pos: { x: 0, y: 0 },
        rect: { x: 0, y: 0, w: 0, h: 0 },
        alpha: 1,
        bgAlpha: 0,
        wrappedMessage: [],
        curStageId: 0,
        stages: [],
        textPos: { x: 0, y: 0 },
        textRect: { x: 0, y: 0, w: 0, h: 0 },
        textAlpha: 1,
        textColor: { r: 255, g: 255, b: 255 },
        textFont: null,
        textFontSize: 24,
        textLineHeight: 24,
        textHeightAdjustment: 0,
        textHScrollRate: 50,
        textHScrollPos: 0,
        textNext: "",
        textNextPos: { x: 0, y: 0 },
        textNextAlpha: 0,
        textNextAlign: "center",
        textNextFontSize: 18,
        bgTime: 0,
        textTime: 0,
        textNextTime: 0,
        textHScrollTime: 0,
        bgShowDuration: 0.5,
        bgHideDuration: 0.5,
        textShowDuration: 0,
        textHideDuration: 0.5,
        rtlFlag: !1,
        textWrap: !0,
        textShadowDisabled: !0,
        disabled: !1,
        hidden: !1,
        bgStateId: 0,
        bgStates: { hidden: 0, showing: 1, shown: 2, hiding: 3 },
        textStateId: 0,
        textStates: { hidden: 0, showing: 1, shown: 2, hiding: 3 },
        clickStateName: "click",
        keyStateName: "",
        stagesEnded: null,
        init: function() {
            this.textFont = "Impact, Charcoal, sans-serif";
            this.setTextFontSize(24)
        },
        setTextFontSize: function(a) { a && (this.textLineHeight = this.textFontSize = a) },
        setMessages: function(a) {
            if (a && a.length) {
                if ("string" == typeof a) {
                    var b = [];
                    b.push(a);
                    a = b
                }
                if (a.constructor === Array) {
                    for (var c = !0, b = 0; b < a.length; b++)
                        if ("string" != typeof a[b]) { c = !1; break }
                    if (c)
                        for (b = 0; b < a.length; b++) c = {}, c.message = a[b], this.textWrap && 0 < this.textRect.w && (c.wrappedMessage = this.wrapText(c.message, this.textRect.w, this.textFontSize, this.textFont)), c.continue = !0, this.stages.push(c)
                }
            }
        },
        draw: function() {
            this.bgStateId != this.bgStates.hidden && this.drawBgBox();
            this.textStateId != this.textStates.hidden && (this.drawScrollText(), this.drawNextText())
        },
        update: function() {
            if (this.bgStateId == this.bgStates.showing)
                if (this.bgTime < this.bgShowDuration) {
                    var a = this.bgTime / this.bgShowDuration;
                    this.bgAlpha = a;
                    this.bgTime += ig.system.tick
                } else this.bgTime = 0, this.bgAlpha = 1, this.bgStateId = this.bgStates.shown, this.textStateId = this.textStates.showing, this.textHScrollPos = 0;
            else this.bgStateId == this.bgStates.hiding && (this.bgTime < this.bgHideDuration ? (a = this.bgTime / this.bgHideDuration, this.bgAlpha = 1 - a, this.bgTime += ig.system.tick) : (this.bgAlpha = this.bgTime = 0, this.bgStateId = this.bgStates.hidden, this.curStageId >= this.stages.length - 1 && "function" == typeof this.stagesEnded && this.stagesEnded()));
            if (this.textStateId == this.textStates.showing)
                if (this.textTime < this.textShowDuration ? (this.textAlpha = a = this.textTime / this.textShowDuration, this.textTime += ig.system.tick) : this.textAlpha = 1, a = this.getCurStage(), a = a.message, this.textHScrollPos < a.length) {
                    if (this.textHScrollPos += this.textHScrollRate * ig.system.tick, this.detectPlayerInput()) {
                        var b = this.getInputPos(),
                            c = {};
                        c.x = b.x;
                        c.y = b.y;
                        c.w = 1;
                        c.h = 1;
                        b = {};
                        b.x = this.pos.x + this.rect.x;
                        b.y = this.pos.y + this.rect.y;
                        b.w = this.rect.w;
                        b.h = this.rect.h;
                        this.aabbCheck(c, b) && (this.textHScrollPos = a.length, 1 == this.textAlpha && (this.textTime = 0, this.textStateId = this.textStates.shown))
                    }
                } else this.textHScrollPos = a.length, 1 == this.textAlpha && (this.textTime = 0, this.textStateId = this.textStates.shown);
            else this.textStateId == this.textStates.shown ? (a = this.getCurStage(), a.continue && this.bgStateId == this.bgStates.shown && (this.textNextTime += ig.system.tick, this.textNextAlpha = this.textNextTime % 2, 1 < this.textNextAlpha && (this.textNextAlpha = 2 - this.textNextAlpha), this.detectPlayerInput() && (b = this.getInputPos(), c = {}, c.x = b.x, c.y = b.y, c.w = 1, c.h = 1, b = {}, b.x = this.pos.x + this.rect.x, b.y = this.pos.y + this.rect.y, b.w = this.rect.w, b.h = this.rect.h, this.aabbCheck(c, b) ? this.gotoNextStage() : (this.textStateId == this.textStates.showing || this.textStateId == this.textStates.shown) && 0.5 < this.textNextTime && this.gotoNextStage()))) : this.textStateId == this.textStates.hiding && (this.textTime < this.textHideDuration ? (a = this.textTime / this.textHideDuration, this.textAlpha = 1 - a, this.textTime += ig.system.tick) : (this.textAlpha = this.textTime = 0, this.textStateId = this.textStates.hidden, this.curStageId + 1 < this.stages.length ? (this.gotoNextStage(), this.textStateId = this.textStates.showing, this.textHScrollPos = 0) : this.bgStateId = this.bgStates.hiding))
        },
        getCurStage: function() { if (this.curStageId < this.stages.length) return this.stages[this.curStageId] },
        gotoNextStage: function() { this.textStateId == this.textStates.showing || this.textStateId == this.textStates.shown ? (this.textStateId = this.textStates.hiding, this.textNextTime = this.textNextAlpha = 0) : this.textStateId == this.textStates.hidden && this.curStageId + 1 < this.stages.length && (this.curStageId += 1) },
        show: function() { this.bgStateId == this.bgStates.hidden && (this.bgStateId = this.bgStates.showing, this.textNextTime = this.textNextAlpha = this.textHScrollPos = 0) },
        hide: function() { this.bgStateId == this.bgStates.shown && (this.bgStateId = this.bgStates.hiding) },
        drawBgBox: function() {
            var a = ig.system.context,
                b = this.pos.x,
                c = this.pos.y,
                d = this.alpha * this.bgAlpha;
            a.save();
            a.globalAlpha = d;
            a.fillStyle = "rgba(0,0,0,0.75)";
            a.translate(b, c);
            b = this.rect;
            this.roundRect(a, b.x, b.y, b.w, b.h, 5, !0, !1);
            a.restore()
        },
        drawScrollText: function() {
            if (this.textAlpha) {
                for (var a = ig.system.context, b = this.pos.x + this.rect.x + this.textPos.x + this.textRect.x, c = this.pos.y + this.rect.y + this.textPos.y, d = this.alpha * this.bgAlpha * this.textAlpha, e = this.getCurStage(), f = e.wrappedMessage, h = this.textHScrollPos, j = 0; j < f.length; j++) {
                    var l = f[j];
                    ig.game.rtl ? l.substr(l.length - h, h) : l.substr(0, h)
                }
                this.wrappedMessage = e.wrappedMessage;
                h = this.textHScrollPos;
                for (j = e = 0; j < this.wrappedMessage.length; j++) {
                    l = this.wrappedMessage[j];
                    e += 1;
                    if (h < l.length) break;
                    h -= l.length
                }
                this.textHeightAdjustment = 0.8 * this.textLineHeight - e / 2 * this.textLineHeight;
                c += this.textHeightAdjustment;
                a.save();
                a.font = this.textFontSize + "px " + this.textFont;
                a.textAlign = "left";
                ig.game.rtl && (a.textAlign = "right");
                a.globalAlpha = d;
                a.translate(b, c);
                a.fillStyle = "rgba(255,255,255,1)";
                h = this.textHScrollPos;
                for (j = b = 0; j < this.wrappedMessage.length && !(l = this.wrappedMessage[j], h < l.length && (l = ig.game.rtl ? l.substr(l.length - h, h) : l.substr(0, h)), a.fillText(l, 0, b), b += this.textLineHeight, h -= this.wrappedMessage[j].length, 0 > h); j++);
                a.restore()
            }
        },
        drawNextText: function() {
            if (this.textNextAlpha) {
                var a = this.textNext,
                    b = ig.system.context,
                    c = this.pos.x + this.rect.x + this.textNextPos.x,
                    d = this.pos.y + this.rect.y + this.textNextPos.y,
                    e = this.alpha * this.bgAlpha * this.textNextAlpha;
                b.save();
                b.font = this.textNextFontSize + "px " + this.textFont;
                b.textAlign = this.textNextAlign;
                b.globalAlpha = e;
                b.translate(c, d);
                b.fillStyle = "rgba(255,255,255,1)";
                b.fillText(a, 0, 0);
                b.restore()
            }
        },
        detectPlayerInput: function() { return ig.input.released(this.keyStateName) || ig.input.released(this.clickStateName) ? !0 : !1 },
        getInputPos: function() { return ig.game.io.getClickPos() },
        aabbCheck: function(a, b) { return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1 },
        roundRect: function(a, b, c, d, e, f, h, j) {
            "undefined" == typeof j && (j = !0);
            "undefined" === typeof f && (f = 5);
            a.beginPath();
            a.moveTo(b + f, c);
            a.lineTo(b + d - f, c);
            a.quadraticCurveTo(b + d, c, b + d, c + f);
            a.lineTo(b + d, c + e - f);
            a.quadraticCurveTo(b + d, c + e, b + d - f, c + e);
            a.lineTo(b + f, c + e);
            a.quadraticCurveTo(b, c + e, b, c + e - f);
            a.lineTo(b, c + f);
            a.quadraticCurveTo(b, c, b + f, c);
            a.closePath();
            j && a.stroke();
            h && a.fill()
        },
        wrapText: function(a, b, c, d) {
            var e = ig.system.context;
            e.font = c + "px " + d;
            c = a.split(" ");
            d = "";
            var f = [];
            if (1 == c.length)
                for (var h = 0; h < a.length; h++) {
                    var j = d + a[h],
                        l = e.measureText(j),
                        l = l.width;
                    l > b && 0 < h ? (f.push(d), d = a[h]) : d = j
                } else
                    for (h = 0; h < c.length; h++) j = d + c[h] + " ", l = e.measureText(j), l = l.width, l > b && 0 < h ? (f.push(d), d = c[h] + " ") : d = j;
            f.push(d);
            return f
        },
        getTextColorStr: function() { return "rgba(" + this.textColor.r + "," + this.textColor.g + "," + this.textColor.b + "," + this.textAlpha + ")" }
    })
});
ig.baked = !0;
ig.module("game.classes.tutorial").requires("plugins.button", "plugins.textwrapper", "plugins.tutorial-box").defines(function() {
    Tutorial = ig.Class.extend({
        control: null,
        tutorialBox: null,
        fingerPos: { x: 0, y: 0 },
        fingerOffset: { x: 0, y: 0 },
        fingerAlpha: 1,
        fingerTime: 0,
        fingerPriority: 1,
        showFingerFlag: !1,
        targetMonster: null,
        targetPickup: null,
        targetAbility: null,
        hidden: !0,
        init: function(a) {
            this.control = a;
            this.control.ui.shopButton.disable();
            for (a = 0; a < this.control.ui.abilityButtonList.length; a++) this.control.ui.abilityButtonList[a].disable();
            this.tutorialBox = new ig.TutorialBox;
            this.tutorialBox.pos.x = ig.system.width / 2;
            this.tutorialBox.pos.y = 225;
            this.tutorialBox.rect.w = 0.9 * ig.system.width;
            this.tutorialBox.rect.h = 0.15 * ig.system.height;
            this.tutorialBox.rect.x = -this.tutorialBox.rect.w / 2;
            this.tutorialBox.rect.y = -this.tutorialBox.rect.h / 2;
            this.tutorialBox.textPos.x = this.tutorialBox.rect.w / 2;
            this.tutorialBox.textPos.y = this.tutorialBox.rect.h / 2;
            this.tutorialBox.textRect.w = 0.9 * this.tutorialBox.rect.w;
            this.tutorialBox.textRect.h = 0.9 * this.tutorialBox.rect.h;
            this.tutorialBox.textRect.x = -this.tutorialBox.textRect.w / 2;
            this.tutorialBox.textRect.y = -this.tutorialBox.textRect.h / 2;
            this.tutorialBox.textNextPos.x = this.tutorialBox.rect.w - 7;
            this.tutorialBox.textNextPos.y = this.tutorialBox.rect.h - 5;
            this.tutorialBox.textNextFontSize = 18;
            this.tutorialBox.textNextAlign = "right";
            this.tutorialBox.textNext = "continue";
            this.tutorialBox.textFont = "bachelorpadjl, Impact, Charcoal, sans-serif";
            this.tutorialBox.setTextFontSize(20);
            this.tutorialBox.rtlFlag = ig.game.rtl;
            this.tutorialBox.setMessages(_STRINGS.Tutorial);
            this.tutorialBox.stages[0].continue = !1;
            this.tutorialBox.stages[1].continue = !1;
            this.tutorialBox.stages[3].continue = !1;
            this.tutorialBox.stages[4].continue = !1;
            this.tutorialBox.stages[6].continue = !1;
            this.tutorialBox.stages[7].continue = !1;
            this.tutorialBox.stages[8].continue = !1;
            this.tutorialBox.stages[9].continue = !1;
            this.tutorialBox.stages[10].continue = !1;
            this.tutorialBox.stages[12].continue = !1;
            this.tutorialBox.stages[13].continue = !1;
            this.spawnStartMonster();
            this.showFingerFlag = !1;
            this.tutorialBox.stagesEnded = this.end.bind(this)
        },
        draw: function() { this.hidden || (this.tutorialBox && this.tutorialBox.draw(), 1 == this.fingerPriority && this.drawFinger()) },
        drawBeforeEffects: function() { 0 == this.fingerPriority && this.drawFinger() },
        update: function() { this.hidden || (this.control.updateAbilities(), this.control.updateMonsterSpawns(), this.control.updateHero(), this.control.updateMonsters(), this.control.updatePickups(), this.tutorialBox && this.tutorialBox.update(), this.updateFinger(), this.updateStages()) },
        show: function() { this.hidden && (this.hidden = !1) },
        hide: function() { this.hidden || (this.hidden = !0) },
        start: function() {
            this.show();
            this.tutorialBox && this.tutorialBox.show()
        },
        end: function() {
            this.hide();
            this.tutorialBox && this.tutorialBox.hide();
            ig.game.doTutorialFlag = !1;
            this.control.restartGame()
        },
        drawFinger: function() {
            if (this.showFingerFlag) {
                var a = this.fingerPos.x + this.fingerOffset.x,
                    b = this.fingerPos.y + this.fingerOffset.y;
                this.fingerPos.dir ? 1 == this.fingerPos.dir ? this.drawArrow(a, b + 40, a, b, 20, 5) : 2 == this.fingerPos.dir ? this.drawArrow(a + 40, b, a, b, 20, 5) : 3 == this.fingerPos.dir && this.drawArrow(a - 40, b, a, b, 20, 5) : this.drawArrow(a, b - 40, a, b, 20, 5)
            }
        },
        updateFinger: function() {
            if (this.showFingerFlag) {
                var a = this.fingerTime % 1;
                0.5 < a && (a = 1 - a);
                !this.fingerPos.dir || 1 == this.fingerPos.dir ? (this.fingerOffset.x = 0, this.fingerOffset.y = -20 * a / 0.5) : (this.fingerOffset.x = -20 * a / 0.5, this.fingerOffset.y = 0);
                this.fingerTime += ig.system.tick
            }
        },
        updateStages: function() {
            if (0 == this.tutorialBox.curStageId) {
                if (this.targetMonster) {
                    var a = this.targetMonster;
                    this.fingerPos.x = a.pos.x -
                        5;
                    this.fingerPos.y = a.pos.y - 50 - 10;
                    this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && (this.showFingerFlag = !0, this.fingerPriority = 0);
                    if (ig.input.pressed("click") && a.stateId != a.states.dying && a.stateId != a.states.dead) {
                        var b = { x: 0, y: 0, w: 0, h: 0 };
                        b.x = a.pos.x + a.hitRect.x;
                        b.y = a.pos.y + a.hitRect.y;
                        b.w = a.hitRect.w;
                        b.h = a.hitRect.h;
                        var c = this.control.getInputPos(),
                            d = { x: 0, y: 0, w: 1, h: 1 };
                        d.x = c.x;
                        d.y = c.y;
                        this.control.aabbCheck(b, d) && (this.control.hero.attackMonsters([a]), this.control.addSlash(c.x, c.y))
                    }
                    a.stateId == a.states.dead && (this.tutorialBox.gotoNextStage(), this.showFingerFlag = !1, this.targetMonster = null)
                }
            } else if (1 == this.tutorialBox.curStageId)
                if (this.targetPickup) { if (this.fingerPos.x = this.targetPickup.pos.x, this.fingerPos.y = this.targetPickup.pos.y - 20 - 10, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && !this.showFingerFlag && (this.showFingerFlag = !0, this.fingerPriority = 1), ig.input.pressed("click") && (a = this.targetPickup, a.stateId == a.states.spawn || a.stateId == a.states.idle)) b = { x: 0, y: 0, w: 0, h: 0 }, b.x = a.pos.x + a.hitRect.x, b.y = a.pos.y + a.hitRect.y, b.w = a.hitRect.w, b.h = a.hitRect.h, c = this.control.getInputPos(), d = { x: 0, y: 0, w: 1, h: 1 }, d.x = c.x, d.y = c.y, this.control.aabbCheck(b, d) && (a.hit(), this.showFingerFlag = !1, this.targetPickup = null, this.tutorialBox.gotoNextStage(), this.spawnSurpriseMonsters()) } else 0 < this.control.pickups.length && (a = this.control.pickups[0], a.aliveDuration = 0, this.targetPickup = a);
            else if (2 != this.tutorialBox.curStageId)
                if (3 == this.tutorialBox.curStageId)
                    if (this.targetAbility && this.targetButton) {
                        if (this.fingerPos.x = this.targetButton.pos.x, this.fingerPos.y = this.targetButton.pos.y - 20 - 10, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && !this.showFingerFlag && (this.showFingerFlag = !0, this.fingerPriority = 1, this.targetButton.enable()), this.targetAbility.onCooldown()) {
                            this.targetButton.disable();
                            this.showFingerFlag = !1;
                            this.targetButton = this.targetAbility = null;
                            this.tutorialBox.gotoNextStage();
                            for (b = 0; b < this.control.monsters.length; b++) a = this.control.monsters[b], a.setStateId(a.states.attack)
                        }
                    } else this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && (a = 4, this.targetAbility = this.control.abilities[a], this.targetButton = this.control.ui.abilityButtonList[a]);
            else 4 == this.tutorialBox.curStageId ? this.targetAbility && this.targetButton ? (this.fingerPos.x = this.targetButton.pos.x, this.fingerPos.y = this.targetButton.pos.y - 20 - 10, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && !this.showFingerFlag && (this.showFingerFlag = !0, this.fingerPriority = 1, this.targetButton.enable()), this.targetAbility.onCooldown() && (this.targetButton.disable(), this.showFingerFlag = !1, this.targetButton = this.targetAbility = null, this.tutorialBox.gotoNextStage())) : this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && (a = 3, this.targetAbility = this.control.abilities[a], this.targetButton = this.control.ui.abilityButtonList[a]) : 5 == this.tutorialBox.curStageId ? this.targetAbility && this.targetButton ? (this.fingerPos.x = this.targetButton.pos.x, this.fingerPos.y = this.targetButton.pos.y + 25, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing ? this.showFingerFlag || (this.showFingerFlag = !0, this.fingerPriority = 1) : this.tutorialBox.textStateId == this.tutorialBox.textStates.hiding && (this.showFingerFlag = !1, this.targetButton = this.targetAbility = null)) : this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && (this.tutorialBox.pos.y = 325, a = 3, this.targetAbility = this.control.abilities[a], this.targetButton = this.control.ui.abilityButtonList[a]) : 6 == this.tutorialBox.curStageId ? this.targetAbility && this.targetButton ? (this.fingerPos.x = this.targetButton.pos.x, this.fingerPos.y = this.targetButton.pos.y - 20 - 10, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && !this.showFingerFlag && (this.showFingerFlag = !0, this.fingerPriority = 1, this.targetButton.enable()), this.targetAbility.onCooldown() && (this.targetButton.disable(), this.showFingerFlag = !1, this.targetButton = this.targetAbility = null, this.tutorialBox.gotoNextStage())) : this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && (this.control.addSpPotion(1), a = 1, this.targetAbility = this.control.abilities[a], this.targetButton = this.control.ui.abilityButtonList[a]) : 7 == this.tutorialBox.curStageId ? this.targetAbility && this.targetButton ? (this.fingerPos.x = this.targetButton.pos.x, this.fingerPos.y = this.targetButton.pos.y - 20 - 10, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && !this.showFingerFlag && (this.showFingerFlag = !0, this.fingerPriority = 1, this.targetButton.enable()), this.targetAbility.onCooldown() && (this.targetButton.disable(), this.showFingerFlag = !1, this.targetButton = this.targetAbility = null, this.tutorialBox.gotoNextStage())) : this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && (this.control.addHpPotion(1), a = 0, this.targetAbility = this.control.abilities[a], this.targetButton = this.control.ui.abilityButtonList[a]) : 8 == this.tutorialBox.curStageId ? this.targetButton ? (this.fingerPos.x = this.targetButton.pos.x, this.fingerPos.y = this.targetButton.pos.y + 20 + 10, this.fingerPos.dir = 1, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && !this.showFingerFlag && (this.showFingerFlag = !0, this.fingerPriority = 1, this.targetButton.enable()), this.control.shop.hidden || (this.targetButton = null, this.showFingerFlag = !1, this.tutorialBox.gotoNextStage())) : this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && (this.tutorialBox.pos.y = 175, this.targetButton = this.control.ui.shopButton, this.control.shop.selectedItemId = 3, this.control.shop.leftButton.disable(), this.control.shop.rightButton.disable(), this.control.shop.backButton.disable()) : 9 == this.tutorialBox.curStageId ? this.targetButton ? (this.fingerPos.x = this.control.shop.pos.x + this.targetButton.pos.x, this.fingerPos.y = this.control.shop.pos.y + this.targetButton.pos.y + 20 + 10, this.fingerPos.dir = 1, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && !this.showFingerFlag && (this.showFingerFlag = !0, this.fingerPriority = 1), 2 <= this.control.abilities[3].count && (this.control.ui.shopButton.disable(), this.showFingerFlag = !1, this.targetButton = null, this.tutorialBox.gotoNextStage(), this.control.shop.selectedItemId = 4)) : this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && (this.tutorialBox.pos.y = 125, this.targetButton = this.control.shop.buyButton) : 10 == this.tutorialBox.curStageId ? this.targetButton ? (this.fingerPos.x = this.control.shop.pos.x + this.targetButton.pos.x, this.fingerPos.y = this.control.shop.pos.y + this.targetButton.pos.y + 20 + 10, this.fingerPos.dir = 1, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && !this.showFingerFlag && (this.showFingerFlag = !0, this.fingerPriority = 1), 2 <= this.control.abilities[4].count && (this.control.hideShop(), this.control.ui.shopButton.disable(), this.showFingerFlag = !1, this.targetButton = null, this.tutorialBox.gotoNextStage())) : this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && (this.targetButton = this.control.shop.buyButton) : 11 == this.tutorialBox.curStageId ? this.targetMonster ? (this.fingerPos.x = 270 - this.targetMonster.healthBarWidth / 2 - 10, this.fingerPos.y = this.control.groundLevel + this.targetMonster.imageOffset.y - this.targetMonster.healthBarOffset.y + this.targetMonster.healthBarHeight / 2, this.fingerPos.dir = 3, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing ? this.showFingerFlag || (this.showFingerFlag = !0, this.fingerPriority = 1) : this.tutorialBox.textStateId == this.tutorialBox.textStates.hiding && (this.showFingerFlag = !1)) : this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && (a = new Boss0(this.control), a.attackDisabled = !0, this.control.boss = a, a.dropTo({ x: 270, y: this.control.groundLevel }), this.targetMonster = a, a.timerDisabled = !0, this.tutorialBox.pos.y = 125) : 12 == this.tutorialBox.curStageId ? this.targetAbility && this.targetButton ? (this.fingerPos.x = this.targetButton.pos.x, this.fingerPos.y = this.targetButton.pos.y - 20 - 10, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && !this.showFingerFlag && (this.showFingerFlag = !0, this.fingerPriority = 1, this.fingerPos.dir = 0, this.targetButton.enable()), this.targetAbility.onCooldown() && (this.targetButton.disable(), this.showFingerFlag = !1, this.targetButton = this.targetAbility = null, this.tutorialBox.gotoNextStage(), this.targetMonster.timerDisabled = !1)) : (this.showFingerFlag = !1, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && (this.control.addPowerPotion(1), a = 2, this.targetAbility = this.control.abilities[a], this.targetButton = this.control.ui.abilityButtonList[a])) : 13 == this.tutorialBox.curStageId && this.targetMonster && (this.fingerPos.x = this.targetMonster.pos.x - 30 - 10, this.fingerPos.y = this.targetMonster.pos.y - 150, this.fingerPos.dir = 3, this.tutorialBox.textStateId == this.tutorialBox.textStates.showing && !this.showFingerFlag && (this.showFingerFlag = !0, this.fingerPriority = 0), a = this.targetMonster, ig.input.pressed("click") && (a.stateId != a.states.dying && a.stateId != a.states.dead) && (b = { x: 0, y: 0, w: 0, h: 0 }, b.x = a.pos.x + a.hitRect.x, b.y = a.pos.y + a.hitRect.y, b.w = a.hitRect.w, b.h = a.hitRect.h, c = this.control.getInputPos(), d = { x: 0, y: 0, w: 1, h: 1 }, d.x = c.x, d.y = c.y, this.control.aabbCheck(b, d) && (this.control.hero.attackBoss(a), this.control.addSlash(c.x, c.y))), a.stateId == a.states.dead && (this.tutorialBox.gotoNextStage(), this.showFingerFlag = !1, this.targetMonster = null))
        },
        spawnSurpriseMonsters: function() {
            var a = 260,
                b = this.control.groundLevel,
                c = 260,
                d = this.control.groundLevel;
            if (mon = this.control.makeMonster(3)) mon.dropTo({ x: c, y: d }), mon.dropShake = 0.1, this.control.monsterSpawnQueue.push({ time: 2, monster: mon }), mon.attackOnce = !0, mon.forceDropId = -1, mon.damage = 3;
            c = 100;
            d = this.control.groundLevel;
            if (mon = this.control.makeMonster(4)) mon.dropTo({ x: c, y: d }), mon.dropShake = 0.1, this.control.monsterSpawnQueue.push({ time: 2, monster: mon }), mon.attackOnce = !0, mon.forceDropId = -1, mon.damage = 3;
            a = -50;
            b = 400;
            c = 80;
            d = 400;
            if (mon = this.control.makeMonster(1)) mon.setPos({ x: a, y: b }), mon.moveTo({ x: c, y: d }), this.control.monsters.push(mon), mon.attackOnce = !0, mon.forceDropId = -1, mon.damage = 3
        },
        spawnStartMonster: function() { var a = this.control.groundLevel; if (mon = this.control.makeMonster(2)) mon.setPos({ x: 320, y: a }), this.control.monsters.push(mon), this.targetMonster = mon, mon.attackDisabled = !0, mon.wanderDisabled = !0, mon.forceDropId = 0 },
        drawArrow: function(a, b, c, d, e, f) {
            e || (e = 10);
            null == f && (f = 5);
            var h, j;
            h = c - a;
            j = d - b;
            var l = Math.sqrt(h * h + j * j);
            if (0 != l) {
                h /= l;
                j /= l;
                var q, l = c - h * e;
                q = d - j * e;
                var m = ig.system.context,
                    k = e / 2;
                m.fillStyle = "#fffea2";
                m.strokeStyle = "#000000";
                m.lineWidth = "2px";
                var p;
                p = -j;
                var s, u;
                s = l - p * e;
                u = q - h * e;
                var y;
                y = l + p * e;
                e = q + h * e;
                var v, D;
                v = a - p * k;
                D = b - h * k;
                a += p * k;
                b += h * k;
                m.beginPath();
                m.moveTo(l - p * k, q - h * k);
                m.lineTo(v + h * f, D + j * f);
                m.quadraticCurveTo(v, D, v + p * f, D + h * f);
                m.lineTo(a - p * f, b - h * f);
                m.quadraticCurveTo(a, b, a + h * f, b + j * f);
                m.lineTo(l + p * k, q + h * k);
                m.lineTo(y, e);
                m.lineTo(c, d);
                m.lineTo(s, u);
                m.closePath();
                m.fill();
                m.stroke()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.classes.gameover-panel").requires("plugins.button").defines(function() {
    GameoverPanel = ig.Class.extend({
        pos: { x: 0, y: 0 },
        bgAlpha: 0,
        alpha: 1,
        transitionDuration: 0.2,
        transitionTime: 0,
        transitionIn: !1,
        transitionOut: !1,
        hidden: !0,
        disabled: !1,
        offset: { x: 0, y: 0 },
        relStartPos: { x: 0, y: 0 },
        endPos: { x: 0, y: 0 },
        bgImage: new ig.Image("media/game/graphics/game/backgrounds/losebg.png"),
        bgImageOffset: { x: 0, y: 0 },
        mainmenuImage: new ig.Image("media/game/graphics/game/ui/home.png"),
        replayImage: new ig.Image("media/game/graphics/game/ui/replay.png"),
        safetyTime: 0,
        safetyDuration: 2,
        mainmenuButton: null,
        replayButton: null,
        control: null,
        pointer: null,
        init: function(a) { this.control = a },
        ready: function() {
            this.relStartPos.y = -ig.system.height;
            this.endPos.x = ig.system.width / 2;
            this.endPos.y = ig.system.height / 2;
            this.pos.x = this.endPos.x + this.relStartPos.x;
            this.pos.y = this.endPos.y + this.relStartPos.y;
            this.bgImageOffset.x = -this.bgImage.width / 2 + 10;
            this.bgImageOffset.y = -this.bgImage.height / 2;
            var a = this.mainmenuImage,
                b = a.width,
                c = a.height,
                d = new ig.Button(this);
            d.setPos({ x: -50, y: 37 });
            d.posRelativeTo = this;
            d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
            d.textColor = { r: 0, g: 0, b: 0 };
            d.textWrap = !1;
            d.setFont(14, "bachelorpadjl, Impact, Charcoal, sans-serif");
            b = _STRINGS.UI["MAIN MENU"];
            addTextSpacing && (b = b.split("").join(String.fromCharCode(8202)));
            d.setText(b);
            d.textOffset.x = 2;
            d.textOffset.y = 40;
            d.textShadowDisabled = !1;
            d.textShadowColor = "rgba(255,255,255,0.5)";
            d.textShadowOffset = { x: 1, y: 1 };
            d.clickedFunction = this.mainmenuButtonPressed.bind(this);
            d.downOffset = { x: 0, y: 1 };
            d.overOffset = { x: 0, y: -1 };
            d.overScaleMultiplier = 1;
            d.downScaleMultiplier = 1;
            d.buttonType = ig.BUTTONTYPE.IMAGE;
            d.setImage(a);
            this.mainmenuButton = d;
            a = this.replayImage;
            b = a.width;
            c = a.height;
            d = new ig.Button(this);
            d.setPos({ x: 70, y: 37 });
            d.posRelativeTo = this;
            d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
            d.textColor = { r: 0, g: 0, b: 0 };
            d.textWrap = !1;
            d.setFont(14, "bachelorpadjl, Impact, Charcoal, sans-serif");
            b = _STRINGS.UI["PLAY AGAIN"];
            addTextSpacing && (b = b.split("").join(String.fromCharCode(8202)));
            d.setText(b);
            d.textOffset.x = 2;
            d.textOffset.y = 40;
            d.textShadowDisabled = !1;
            d.textShadowColor = "rgba(255,255,255,0.5)";
            d.textShadowOffset = { x: 1, y: 1 };
            d.clickedFunction = this.playagainButtonPressed.bind(this);
            d.downOffset = { x: 0, y: 1 };
            d.overOffset = { x: 0, y: -1 };
            d.overScaleMultiplier = 1;
            d.downScaleMultiplier = 1;
            d.buttonType = ig.BUTTONTYPE.IMAGE;
            d.setImage(a);
            this.replayButton = d
        },
        draw: function() {
            if (!this.hidden) {
                var a = ig.system.context;
                0 < this.bgAlpha && (a.save(), a.globalAlpha = this.bgAlpha, a.fillStyle = "#000000", a.fillRect(0, 0, ig.system.width, ig.system.height), a.restore());
                var b = this.pos.x + this.bgImageOffset.x,
                    c = this.pos.y + this.bgImageOffset.y;
                a.save();
                a.globalAlpha = this.alpha;
                this.bgImage.draw(b, c);
                a.restore();
                if (this.safetyTime >= this.safetyDuration) this.mainmenuButton.draw(), this.replayButton.draw();
                else {
                    b = (this.safetyTime - this.safetyDuration / 2) / (this.safetyDuration / 2);
                    1 < b && (b = 1);
                    0 > b && (b = 0);
                    var d = this.mainmenuButton.alpha;
                    this.mainmenuButton.alpha *= this.alpha * b;
                    this.replayButton.alpha *= this.alpha * b;
                    this.mainmenuButton.draw();
                    this.replayButton.draw();
                    this.mainmenuButton.alpha = d;
                    this.replayButton.alpha =
                        d
                }
                b = _STRINGS.UI.DEFEATED;
                a.font = "20px bachelorpadjl, Impact, Charcoal, sans-serif";
                a.textAlign = "center";
                a.fillStyle = "#000000";
                a.fillText(b, this.pos.x + 10 + 1, c + 110 + 1);
                a.fillStyle = "#fffea2";
                a.fillText(b, this.pos.x + 10, c + 110);
                this.control.gameScore > this.control.bestScore ? (b = _STRINGS.UI["NEW BEST"], a.fillStyle = "#ffffff", a.font = "20px bachelorpadjl, Impact, Charcoal, sans-serif", a.textAlign = "center", a.fillText(b, this.pos.x, c + 115)) : 0 < this.control.bestScore && (b = _STRINGS.UI.BEST, b += " " + this.control.bestScore, a.fillStyle = "#ffffff", a.font = "20px bachelorpadjl, Impact, Charcoal, sans-serif", a.textAlign = "center", a.fillText(b, this.pos.x, c + 115))
            }
        },
        update: function() {
            if (!this.hidden)
                if (this.transitionIn) {
                    var a = ig.system.clock.delta() - this.transitionTime,
                        a = a / this.transitionDuration;
                    1 < a && (a = 1);
                    this.alpha = a;
                    this.bgAlpha = 0.75 * a;
                    if (0.8 > a) {
                        var b = a / 0.8;
                        this.offset.x = (1 - b) * this.relStartPos.x;
                        this.offset.y = (1 - b) * this.relStartPos.y
                    } else 1 > a ? (b = (a - 0.8) / 0.2 * Math.PI, this.offset.x = -0.05 * this.relStartPos.x * Math.sin(b), this.offset.y = -0.05 * this.relStartPos.y * Math.sin(b)) : (this.offset.x = 0, this.offset.y = 0);
                    1 <= a && (this.transitionIn = !1, this.showDone());
                    this.pos.x = this.endPos.x + this.offset.x;
                    this.pos.y = this.endPos.y + this.offset.y
                } else this.transitionOut ? (a = ig.system.clock.delta() - this.transitionTime, a /= this.transitionDuration, 1 < a && (a = 1), this.alpha = 1 - a, this.bgAlpha = 0.75 * (1 - a), 1 > a ? (this.offset.x = a * this.relStartPos.x, this.offset.y = a * this.relStartPos.y) : (this.offset.x = this.relStartPos.x, this.offset.y = this.relStartPos.y), 1 <= a && (this.transitionOut = !1, this.hideDone()), this.pos.x = this.endPos.x + this.offset.x, this.pos.y = this.endPos.y + this.offset.y) : this.safetyTime >= this.safetyDuration ? (this.mainmenuButton.update(), this.replayButton.update()) : this.safetyTime += ig.system.tick
        },
        show: function() { this.hidden && !this.transitionIn && (this.transitionIn = !0, this.transitionTime = ig.system.clock.delta(), this.safetyTime = 0, this.hidden = !1) },
        showDone: function() {},
        hide: function() {!this.hidden && !this.transitionOut && (this.transitionOut = !0, this.transitionTime = ig.system.clock.delta()) },
        hideDone: function() { this.hidden = !0 },
        enable: function() {
            this.mainmenuButton.enable();
            this.replayButton.enable()
        },
        disable: function() {
            this.mainmenuButton.disable();
            this.replayButton.disable()
        },
        wrapText: function(a, b) {
            var c = ig.system.context;
            c.font = "24px GreatLakesNF, Helvetica, Verdana";
            for (var d = a.split(" "), e = "", f = [], h = 0; h < d.length; h++) {
                var j = e + d[h] + " ";
                c.measureText(j).width > b && 0 < h ? (f.push(e), e = d[h] + " ") : e = j
            }
            f.push(e);
            return f
        },
        playagainButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.control.restartGame()
        },
        mainmenuButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.control.returnToMainMenu()
        }
    })
});
ig.baked = !0;
ig.module("game.classes.shop-panel").requires("plugins.button").defines(function() {
    ShopPanel = ig.Class.extend({
        pos: { x: 0, y: 0 },
        bgAlpha: 0,
        maxBgAlpha: 0.6,
        alpha: 1,
        transitionDuration: 0.2,
        transitionTime: 0,
        transitionIn: !1,
        transitionOut: !1,
        hidden: !0,
        offset: { x: 0, y: 0 },
        relStartPos: { x: 0, y: 0 },
        endPos: { x: 0, y: 0 },
        bgImage: new ig.Image("media/game/graphics/game/backgrounds/shopbg.png"),
        bgImageOffset: { x: 0, y: 0 },
        backImage: new ig.Image("media/game/graphics/game/ui/cancel.png"),
        greenBgImage: new ig.Image("media/game/graphics/game/ui/green-bg.png"),
        healthImage: new ig.Image("media/game/graphics/game/ui/abilities/buy-health.png"),
        energyImage: new ig.Image("media/game/graphics/game/ui/abilities/buy-energy.png"),
        powerImage: new ig.Image("media/game/graphics/game/ui/abilities/buy-power.png"),
        swordImage: new ig.Image("media/game/graphics/game/ui/abilities/buy-sword.png"),
        shieldImage: new ig.Image("media/game/graphics/game/ui/abilities/buy-shield.png"),
        buyButtonImage: new ig.Image("media/game/graphics/game/ui/buy-button.png"),
        leftButtonImage: new ig.Image("media/game/graphics/game/ui/left-button.png"),
        rightButtonImage: new ig.Image("media/game/graphics/game/ui/right-button.png"),
        buyButton: null,
        leftButton: null,
        rightButton: null,
        itemList: [],
        selectedItemId: 0,
        control: null,
        pointer: null,
        init: function(a) {
            this.control = a;
            a = { id: 0 };
            a.image = this.healthImage;
            a.str = _STRINGS.UI.HEALTH;
            this.itemList.push(a);
            a = { id: 1 };
            a.image = this.energyImage;
            a.str = _STRINGS.UI.ENERGY;
            this.itemList.push(a);
            a = { id: 2 };
            a.image = this.powerImage;
            a.str = _STRINGS.UI.POWER;
            this.itemList.push(a);
            a = { id: 3 };
            a.image = this.swordImage;
            a.str = _STRINGS.UI["ATTACK UP"];
            this.itemList.push(a);
            a = { id: 4 };
            a.image = this.shieldImage;
            a.str = _STRINGS.UI["DEFENCE UP"];
            this.itemList.push(a)
        },
        ready: function() {
            this.relStartPos.y = -ig.system.height;
            this.endPos.x = ig.system.width / 2;
            this.endPos.y = ig.system.height / 2;
            this.pos.x = this.endPos.x + this.relStartPos.x;
            this.pos.y = this.endPos.y + this.relStartPos.y;
            this.bgImageOffset.x = -this.bgImage.width / 2;
            this.bgImageOffset.y = -this.bgImage.height / 2;
            var a = this.backImage,
                b = a.width,
                c = a.height,
                d = new ig.Button(this);
            d.setPos({
                x: this.bgImage.width / 2 -
                    40,
                y: -this.bgImage.height / 2 + 60
            });
            d.posRelativeTo = this;
            d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
            d.textOffset.x = 2;
            d.textColor = { r: 0, g: 0, b: 0 };
            d.clickedFunction = this.backButtonPressed.bind(this);
            d.downOffset = { x: 0, y: 1 };
            d.overOffset = { x: 0, y: -1 };
            d.overScaleMultiplier = 1;
            d.downScaleMultiplier = 1;
            d.buttonType = ig.BUTTONTYPE.IMAGE;
            d.setImage(a);
            this.backButton = d;
            a = this.buyButtonImage;
            b = a.width;
            c = a.height;
            d = new ig.Button(this);
            d.setPos({ x: 0, y: 107 });
            d.posRelativeTo = this;
            d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
            d.textColor = { r: 0, g: 0, b: 0 };
            d.setFont(18, "bachelorpadjl, Impact, Charcoal, sans-serif");
            d.setText(_STRINGS.UI.BUY);
            d.textOffset.x = -2;
            d.textOffset.y = 0;
            d.textShadowDisabled = !1;
            d.textShadowColor = "rgba(255,255,255,0.5)";
            d.textShadowOffset = { x: 1, y: 1 };
            d.clickedFunction = this.buyButtonPressed.bind(this);
            d.downOffset = { x: 0, y: 1 };
            d.overOffset = { x: 0, y: -1 };
            d.overScaleMultiplier = 1;
            d.downScaleMultiplier = 1;
            d.buttonType = ig.BUTTONTYPE.IMAGE;
            d.setImage(a);
            this.buyButton = d;
            a = this.leftButtonImage;
            b = a.width;
            c = a.height;
            d = new ig.Button(this);
            d.setPos({ x: -175, y: 20 });
            d.posRelativeTo = this;
            d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
            d.clickedFunction = this.leftButtonPressed.bind(this);
            d.downOffset = { x: 0, y: 1 };
            d.overOffset = { x: 0, y: -1 };
            d.overScaleMultiplier = 1;
            d.downScaleMultiplier = 1;
            d.buttonType = ig.BUTTONTYPE.IMAGE;
            d.setImage(a);
            this.leftButton = d;
            a = this.rightButtonImage;
            b = a.width;
            c = a.height;
            d = new ig.Button(this);
            d.setPos({ x: 172, y: 20 });
            d.posRelativeTo = this;
            d.setRect({ x: -b / 2, y: -c / 2, w: b, h: c });
            d.clickedFunction = this.rightButtonPressed.bind(this);
            d.downOffset = { x: 0, y: 1 };
            d.overOffset = { x: 0, y: -1 };
            d.overScaleMultiplier = 1;
            d.downScaleMultiplier = 1;
            d.buttonType = ig.BUTTONTYPE.IMAGE;
            d.setImage(a);
            this.rightButton = d
        },
        draw: function() {
            if (!this.hidden) {
                var a = ig.system.context;
                0 < this.bgAlpha && (a.save(), a.globalAlpha = this.bgAlpha, a.fillStyle = "#000000", a.fillRect(0, 0, ig.system.width, ig.system.height), a.restore());
                var b = this.pos.x + this.bgImageOffset.x,
                    c = this.pos.y + this.bgImageOffset.y;
                a.save();
                a.globalAlpha = this.alpha;
                this.bgImage.draw(b, c);
                a.restore();
                b = _STRINGS.UI.SHOP;
                addTextSpacing && (b = b.split("").join(String.fromCharCode(8202)));
                a.font = "30px bachelorpadjl, Impact, Charcoal, sans-serif";
                a.textAlign = "center";
                a.fillStyle = "#cccccc";
                a.fillText(b, this.pos.x + 1, c + 62 + 1);
                a.fillStyle = "#333333";
                a.fillText(b, this.pos.x, c + 62);
                this.drawItemCards();
                this.backButton.draw();
                this.buyButton.draw();
                this.leftButton.draw();
                this.rightButton.draw()
            }
        },
        update: function() {
            if (!this.hidden) {
                if (this.transitionIn) {
                    var a = ig.system.clock.delta() - this.transitionTime,
                        a = a / this.transitionDuration;
                    1 < a && (a = 1);
                    this.alpha = a;
                    this.bgAlpha = this.maxBgAlpha * a;
                    if (0.8 > a) {
                        var b = a / 0.8;
                        this.offset.x = (1 - b) * this.relStartPos.x;
                        this.offset.y = (1 - b) * this.relStartPos.y
                    } else 1 > a ? (b = (a - 0.8) / 0.2 * Math.PI, this.offset.x = -0.05 * this.relStartPos.x * Math.sin(b), this.offset.y = -0.05 * this.relStartPos.y * Math.sin(b)) : (this.offset.x = 0, this.offset.y = 0);
                    1 <= a && (this.transitionIn = !1, this.showDone());
                    this.pos.x = this.endPos.x + this.offset.x;
                    this.pos.y = this.endPos.y + this.offset.y
                } else this.transitionOut && (a = ig.system.clock.delta() - this.transitionTime,
                    a /= this.transitionDuration, 1 < a && (a = 1), this.alpha = 1 - a, this.bgAlpha = this.maxBgAlpha * (1 - a), 1 > a ? (this.offset.x = a * this.relStartPos.x, this.offset.y = a * this.relStartPos.y) : (this.offset.x = this.relStartPos.x, this.offset.y = this.relStartPos.y), 1 <= a && (this.transitionOut = !1, this.hideDone()), this.pos.x = this.endPos.x + this.offset.x, this.pos.y = this.endPos.y + this.offset.y);
                this.backButton.update();
                this.buyButton.update();
                this.leftButton.update();
                this.rightButton.update()
            }
        },
        show: function() { this.hidden && !this.transitionIn && (this.transitionIn = !0, this.transitionTime = ig.system.clock.delta(), this.hidden = !1) },
        showDone: function() {},
        hide: function() {!this.hidden && !this.transitionOut && (this.transitionOut = !0, this.transitionTime = ig.system.clock.delta()) },
        hideDone: function() { this.hidden = !0 },
        muteAudio: function() {
            ig.game.muted = !0;
            this.setMusicVolume(0);
            this.setSfxVolume(0);
            ig.game.savePlayerStats()
        },
        unmuteAudio: function() {
            ig.game.muted = !1;
            this.setMusicVolume(ig.game.musicVolume);
            this.setSfxVolume(ig.game.sfxVolume);
            ig.game.savePlayerStats()
        },
        aabbCheck: function(a, b) { return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1 },
        backButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.control.hideShop()
        },
        buyButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("buy");
            this.control.upgradeAbility(this.itemList[this.selectedItemId].id)
        },
        leftButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.selectedItemId -= 1;
            0 > this.selectedItemId && (this.selectedItemId = this.itemList.length - 1)
        },
        rightButtonPressed: function() {
            ig.soundHandler.sfxPlayer.play("button");
            this.selectedItemId += 1;
            this.selectedItemId >= this.itemList.length && (this.selectedItemId = 0)
        },
        drawItemCards: function() {
            var a = ig.system.context;
            if (!(0 > this.selectedItemId || this.selectedItemId >= this.control.abilities.length)) {
                var b = this.control.abilities[this.selectedItemId],
                    c = this.itemList[this.selectedItemId];
                if (c && c.image) {
                    var a = c.image,
                        d = this.pos.x - a.width / 2,
                        e = this.pos.y + 20 - a.height / 2;
                    a.draw(d, e);
                    a = this.greenBgImage;
                    d += 86;
                    e += 7;
                    a.draw(d, e);
                    var f = "9+";
                    9 >= b.count && (f = b.count);
                    a = ig.system.context;
                    a.fillStyle = "#260300";
                    a.font = "14px bachelorpadjl, Impact, Charcoal, sans-serif";
                    a.textAlign = "center";
                    a.fillText(f, d + 15, e + 20);
                    d = this.pos.x - 2;
                    e = this.pos.y + 20 + 33;
                    f = c.str;
                    a.font = "9px bachelorpadjl, Impact, Charcoal, sans-serif";
                    a.textAlign = "center";
                    a.fillStyle = "#cccccc";
                    a.fillText(f, d + 1, e + 1);
                    a.fillStyle = "#333333";
                    a.fillText(f, d, e);
                    d = this.pos.x - 3;
                    e = this.pos.y + 20 + 49;
                    f = "" + b.buyCost;
                    addTextSpacing && (f = f.split("").join(String.fromCharCode(8202)));
                    a.font = "10px bachelorpadjl, Impact, Charcoal, sans-serif";
                    a.textAlign = "center";
                    a.fillStyle = "#fffea2";
                    a.fillText(f, d, e)
                }
                a.globalAlpha = 0.25;
                var h = -100,
                    j = 0,
                    c = this.selectedItemId - 1;
                0 > c && (c = this.itemList.length - 1);
                b = this.control.abilities[c];
                if ((c = this.itemList[c]) && c.image) a = c.image, d = this.pos.x - a.width / 2 + h, e = this.pos.y + 20 - a.height / 2 + j, a.draw(d, e), a = this.greenBgImage, d += 86, e += 7, a.draw(d, e), f = "9+", 9 >= b.count && (f = b.count), d += 15, e += 20, a = ig.system.context, a.fillStyle = "#260300", a.font = "14px bachelorpadjl, Impact, Charcoal, sans-serif", a.textAlign = "center", a.fillText(f, d, e), d = this.pos.x -
                    2 + h, e = this.pos.y + 20 + 33 + j, f = c.str, a.font = "9px bachelorpadjl, Impact, Charcoal, sans-serif", a.textAlign = "center", a.fillStyle = "#333333", a.fillText(f, d, e), d = this.pos.x - 3 + h, e = this.pos.y + 20 + 49 + j, f = "" + b.buyCost, addTextSpacing && (f = f.split("").join(String.fromCharCode(8202))), a.font = "10px bachelorpadjl, Impact, Charcoal, sans-serif", a.textAlign = "center", a.fillStyle = "#fffea2", a.fillText(f, d, e);
                h = 100;
                j = 0;
                c = this.selectedItemId + 1;
                c >= this.itemList.length && (c = 0);
                b = this.control.abilities[c];
                if ((c = this.itemList[c]) && c.image) a = c.image, d = this.pos.x - a.width / 2 + h, e = this.pos.y + 20 - a.height / 2 + j, a.draw(d, e), a = this.greenBgImage, d += 86, e += 7, a.draw(d, e), f = "9+", 9 >= b.count && (f = b.count), d += 15, e += 20, a = ig.system.context, a.fillStyle = "#260300", a.font = "14px bachelorpadjl, Impact, Charcoal, sans-serif", a.textAlign = "center", a.fillText(f, d, e), d = this.pos.x - 2 + h, e = this.pos.y + 20 + 33 + j, f = c.str, a.font = "9px bachelorpadjl, Impact, Charcoal, sans-serif", a.textAlign = "center", a.fillStyle = "#333333", a.fillText(f, d, e), d = this.pos.x - 3 + h, e = this.pos.y +
                    20 + 49 + j, f = "" + b.buyCost, addTextSpacing && (f = f.split("").join(String.fromCharCode(8202))), a.font = "10px bachelorpadjl, Impact, Charcoal, sans-serif", a.textAlign = "center", a.fillStyle = "#fffea2", a.fillText(f, d, e);
                a.globalAlpha = 1
            }
        }
    })
});
ig.baked = !0;
ig.module("game.classes.ability").defines(function() {
    Ability = ig.Class.extend({
        id: 0,
        color: { r: 255, g: 255, b: 255 },
        count: 0,
        buyCost: 10,
        energyCost: 0,
        duration: 0,
        cooldownDuration: 3,
        activateTime: -1,
        init: function(a) { this.id = a },
        update: function() { 0 <= this.activateTime && (this.activateTime += ig.system.tick, this.activateTime >= this.cooldownDuration && (this.cooldownCompleted(), this.activateTime = -1)) },
        onCooldown: function() { return 0 <= this.activateTime ? !0 : !1 },
        activate: function() {
            if (this.onCooldown()) return !1;
            this.activateTime = 0;
            this.cooldownStarted()
        },
        cooldownStarted: function() {},
        cooldownCompleted: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.image-manipulation").requires("impact.image").defines(function() {
    ig.Image.inject({
        onload: function(a) {
            this.parent(a);
            var b = this.path.indexOf("#");
            a = this.path.indexOf("^");
            if (-1 !== b || -1 !== a) {
                this.convertToCanvas();
                var b = this.data.getContext("2d"),
                    c = b.getImageData(0, 0, this.data.width, this.data.height); - 1 !== a ? "grayscale" == this.path.substr(a + 1, 9) ? c = this.filter_grayscale(c) : "screen" == this.path.substr(a + 1, 6) ? c = this.filter_screen(c) : "overlay" == this.path.substr(a + 1, 7) ? c = this.filter_overlay(c) : "softlight" == this.path.substr(a + 1, 9) ? c = this.filter_softlight(c) : "multiply" == this.path.substr(a + 1, 8) && (c = this.filter_multiply(c)) : c = this.filter_multiply(c);
                b.putImageData(c, 0, 0)
            }
        },
        convertToCanvas: function() {
            if (!this.data.getContext) {
                var a = ig.$new("canvas");
                a.width = this.width;
                a.height = this.height;
                a.getContext("2d").drawImage(this.data, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
                this.data = a
            }
        },
        filter_grayscale: function(a) {
            for (var b = a.data, c = 0; c < b.length; c += 4) b[c] = b[c + 1] = b[c + 2] = 0.2126 * b[c] +
                0.7152 * b[c + 1] + 0.0722 * b[c + 2];
            return a
        },
        filter_multiply: function(a) {
            for (var b = this.path.indexOf("#"), c = a.data, d = c.length, e = parseInt(this.path.substr(b + 1, 2), 16) / 255, f = parseInt(this.path.substr(b + 3, 2), 16) / 255, h = parseInt(this.path.substr(b + 5, 2), 16) / 255, j = 0; j < d; j += 4) {
                var b = c[j + 3] / 255,
                    l = b + 1 - 1 * b,
                    q = c[j] / 255 * b,
                    m = c[j + 1] / 255 * b,
                    k = c[j + 2] / 255 * b,
                    p = 255 / l,
                    p = 255 / l;
                c[j] = (q * e + e * (1 - b)) * p;
                c[j + 1] = (m * f + f * (1 - b)) * p;
                c[j + 2] = (k * h + h * (1 - b)) * p
            }
            return a
        },
        filter_screen: function(a) {
            for (var b = this.path.indexOf("#"), c = a.data, d, e = c.length,
                    f = parseInt(this.path.substr(b + 1, 2), 16) / 255, h = parseInt(this.path.substr(b + 3, 2), 16) / 255, b = parseInt(this.path.substr(b + 5, 2), 16) / 255, j = 0; j < e; j += 4) {
                d = c[j + 3] / 255;
                var l = c[j] / 255 * d,
                    q = c[j + 1] / 255 * d,
                    m = c[j + 2] / 255 * d;
                d = 255 / (d + 1 - 1 * d);
                c[j] = (l + f - l * f) * d;
                c[j + 1] = (q + h - q * h) * d;
                c[j + 2] = (m + b - m * b) * d
            }
            return a
        },
        filter_overlay: function(a) {
            for (var b = this.path.indexOf("#"), c = a.data, d, e = c.length, f = parseInt(this.path.substr(b + 1, 2), 16), h = parseInt(this.path.substr(b + 3, 2), 16), b = parseInt(this.path.substr(b + 5, 2), 16), j = 0; j < e; j += 4) {
                d = c[j +
                    3] / 255;
                var l = 1 * d,
                    q = 1 - l;
                d -= l;
                var m = c[j],
                    k = c[j + 1],
                    p = c[j + 2];
                c[j] = l * this.Foverlay(f, m) + q * f + d * m;
                c[j + 1] = l * this.Foverlay(h, k) + q * h + d * k;
                c[j + 2] = l * this.Foverlay(b, p) + q * b + d * p
            }
            return a
        },
        filter_softlight: function(a) {
            for (var b = this.path.indexOf("#"), c = a.data, d, e = c.length, f = parseInt(this.path.substr(b + 1, 2), 16), h = parseInt(this.path.substr(b + 3, 2), 16), b = parseInt(this.path.substr(b + 5, 2), 16), j = 0; j < e; j += 4) {
                d = c[j + 3] / 255;
                var l = 1 * d,
                    q = 1 - l;
                d -= l;
                var m = c[j],
                    k = c[j + 1],
                    p = c[j + 2];
                c[j] = l * this.Fsoftlight(f, m) + q * f + d * m;
                c[j + 1] = l * this.Fsoftlight(h, k) + q * h + d * k;
                c[j + 2] = l * this.Fsoftlight(b, p) + q * b + d * p
            }
            return a
        },
        Foverlay: function(a, b) { return 128 > a ? a * b >> 7 : 255 - ((255 - b) * (255 - a) >> 7) },
        Fsoftlight: function(a, b) { var c = b << 1; return 128 > b ? a * (c + (a * (255 - c) >> 8)) >> 8 : a * (511 - c) + Math.sqrt(a << 8) * (c - 255) >> 8 }
    })
});
ig.baked = !0;
ig.module("plugins.rumbler").defines(function() {
    ig.Rumbler = ig.Class.extend({
        max_dx: 2,
        max_dy: 2,
        max_rot: 0.1,
        updateRate: 10,
        opacMin: 0.5,
        opacMax: 1,
        updateInterval: 0.016,
        updateTime: 0,
        rumble: { dx: 0, dy: 0, rot: 0, opac: 1 },
        init: function(a) {
            ig.merge(this, a);
            this.updateInterval = 0 == this.updateRate ? 0 : 1 / this.updateRate
        },
        update: function() {
            if (0 != this.updateInterval && (this.updateTime += ig.system.tick, !(this.updateTime < this.updateInterval))) {
                this.updateTime %= this.updateInterval;
                var a = this.max_dx,
                    b = this.max_dy,
                    c = this.max_rot,
                    d = this.opacMin,
                    e = Math.floor(Math.random() * a) - a / 2,
                    f = Math.floor(Math.random() * b) - b / 2,
                    c = Math.random() * c - c / 2,
                    d = Math.random() + d;
                1 < d && (d = 1);
                e = 0 === e && 0 !== a ? 0.5 > Math.random() ? 1 : -1 : e;
                f = 0 === f && 0 !== b ? 0.5 > Math.random() ? 1 : -1 : f;
                this.rumble.dx = e;
                this.rumble.dy = f;
                this.rumble.rot = c;
                this.rumble.opac = d
            }
        },
        getRumble: function() {
            var a = {};
            a.dx = this.rumble.dx;
            a.dy = this.rumble.dy;
            a.rot = this.rumble.rot;
            a.opac = this.rumble.opac;
            return a
        }
    })
});
ig.baked = !0;
ig.module("game.classes.character").requires("plugins.number-anim", "plugins.image-manipulation", "plugins.rumbler").defines(function() {
    Character = ig.Class.extend({
        id: 0,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        level: 1,
        health: null,
        maxHealth: 10,
        energy: null,
        maxEnergy: 10,
        damage: 2,
        hitMode: 0,
        idleMode: 0,
        prevStateId: 0,
        stateId: 0,
        states: { idle: 0, attack: 1, dying: 3, dead: 4 },
        gameEffects: [],
        shieldTime: -1,
        shieldEffectDuration: 6,
        shieldAlpha: 0.33,
        shieldScale: 1.1,
        attackTime: -1,
        attackHitDuration: 0.1,
        attackedMonstersArray: null,
        megaSlashTime: -1,
        slashEffectDuration: 0.1,
        idleAnimSheet: new ig.AnimationSheet("media/game/graphics/game/sprites/hero/hero-idle-10x1.png", 117, 118),
        attackAnimSheet: new ig.AnimationSheet("media/game/graphics/game/sprites/hero/hero-attack-9x1.png", 117, 118),
        shieldedIdleAnimSheet: new ig.AnimationSheet("media/game/graphics/game/sprites/hero/hero-idle-10x1.png#dddddd^screen", 117, 118),
        shieldedAttackAnimSheet: new ig.AnimationSheet("media/game/graphics/game/sprites/hero/hero-attack-9x1.png#dddddd^screen", 117, 118),
        poweredIdleAnimSheet: new ig.AnimationSheet("media/game/graphics/game/sprites/hero/hero-idle-10x1.png#dd00dd^screen", 117, 118),
        poweredAttackAnimSheet: new ig.AnimationSheet("media/game/graphics/game/sprites/hero/hero-attack-9x1.png#dd00dd^screen", 117, 118),
        hitIdleAnimSheet: new ig.AnimationSheet("media/game/graphics/game/sprites/hero/hero-idle-10x1.png#dd0000^screen", 117, 118),
        hitAttackAnimSheet: new ig.AnimationSheet("media/game/graphics/game/sprites/hero/hero-attack-9x1.png#dd0000^screen", 117, 118),
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bottomOffset: 12,
        faceDir: 1,
        hitEffectTime: -1,
        hitEffectDuration: 0.2,
        hitEffectAlpha: 1,
        hitEffectScale: 1,
        powerEffectTime: -1,
        powerEffectDuration: 5,
        powerEffectAlpha: 0.5,
        powerEffectScale: 1,
        dyingTime: -1,
        dyingDuration: 0.4,
        dyingAlpha: 1,
        hitRect: { x: 0, y: 0, w: 0, h: 0 },
        healthBarOffset: { x: 0, y: 0 },
        healthBarWidth: 80,
        healthBarHeight: 4,
        dropWeight: 50,
        dropVector: null,
        dropToDestination: null,
        dropShake: 1,
        dropShakeDuration: 0.2,
        jumpFlag: !1,
        jumpOffset: { x: 0, y: 0 },
        jumpVector: { x: 0, y: 0 },
        jumpWeight: 100,
        rumbler: null,
        init: function(a, b) {
            this.id = b;
            this.control = a;
            this.health = new ig.NumberAnim;
            this.health.setMin(0);
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth);
            this.energy = new ig.NumberAnim;
            this.energy.setMin(0);
            this.energy.setMax(this.maxEnergy);
            this.energy.setValue(this.maxEnergy);
            this.idleAnim = new ig.Animation(this.idleAnimSheet, 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], !1);
            this.attackAnim = new ig.Animation(this.attackAnimSheet, 0.02, [0, 1, 2, 3, 4, 5, 6, 7, 8], !0);
            this.imageOffset.x = -this.idleAnim.sheet.width / 2;
            this.imageOffset.y = -(this.idleAnim.sheet.height - this.bottomOffset);
            this.hitRect.w = this.idleAnim.sheet.width - 90;
            this.hitRect.h = this.idleAnim.sheet.height -
                50;
            this.hitRect.x = -this.hitRect.w / 2 - 10;
            this.hitRect.y = -(this.hitRect.h - this.bottomOffset);
            this.hitRect.h -= this.bottomOffset;
            this.maxHealth = _STRINGS.UnitSpecs.hero_start_health;
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth);
            this.maxEnergy = _STRINGS.UnitSpecs.hero_start_energy;
            this.energy.setMax(this.maxEnergy);
            this.energy.setValue(this.maxEnergy);
            this.damage = _STRINGS.UnitSpecs.hero_start_damage;
            this.shieldEffectDuration = _STRINGS.UnitSpecs.hero_shieldsup_duration;
            this.powerEffectDuration = _STRINGS.UnitSpecs.hero_potion_power_cooldown
        },
        update: function() {
            this.health.update();
            this.energy.update();
            this.stateId == this.states.attack ? (this.updateAnim(this.attackAnim), 1 <= this.attackAnim.loopCount && this.idle(), 0 <= this.hitEffectTime && this.updateHitEffect()) : this.stateId == this.states.idle ? (this.updateAnim(this.idleAnim), 0 <= this.hitEffectTime && this.updateHitEffect()) : this.stateId == this.states.dying && this.updateDying();
            0 <= this.powerEffectTime && (this.powerEffectTime += ig.system.tick, this.powerEffectTime >= this.powerEffectDuration && this.endPowerUp());
            0 <= this.shieldTime && (this.shieldTime += ig.system.tick, this.shieldTime >= this.shieldEffectDuration && this.endShieldsUp());
            0 <= this.megaSlashTime && (this.megaSlashTime += ig.system.tick, this.megaSlashTime >= this.slashEffectDuration ? (this.midMegaSlashDone || this.midMegaSlash(), this.endMegaSlash()) : this.megaSlashTime >= this.slashEffectDuration / 2 && this.midMegaSlash());
            0 <= this.attackTime && (this.attackTime += ig.system.tick, this.attackTime >= this.attackHitDuration && this.endAttackHit())
        },
        draw: function() {
            var a = ig.system.context,
                b = this.pos.x,
                c = this.pos.y;
            this.control && (b += this.control.screenshakeOffset.x, c += this.control.screenshakeOffset.y);
            this.stateId == this.states.attack ? (this.attackAnim.flip.x = 1 == this.faceDir ? !1 : !0, this.attackAnim.draw(b + this.imageOffset.x, c + this.imageOffset.y), 0 <= this.powerEffectTime && (this.attackAnim.sheet = this.poweredAttackAnimSheet, this.drawPowerAura(this.attackAnim), this.attackAnim.sheet = this.attackAnimSheet), 0 <= this.shieldTime ? (this.attackAnim.sheet = this.shieldedAttackAnimSheet, this.drawShieldAura(this.attackAnim), this.attackAnim.sheet = this.attackAnimSheet) : 0 <= this.hitEffectTime && (this.attackAnim.sheet = this.hitAttackAnimSheet, this.drawHitEffectAura(this.attackAnim), this.attackAnim.sheet = this.attackAnimSheet)) : this.stateId == this.states.idle ? (this.idleAnim.flip.x = 1 == this.faceDir ? !1 : !0, a.save(), a.translate(b, c), this.idleAnim.draw(this.imageOffset.x, this.imageOffset.y), a.restore(), 0 <= this.powerEffectTime && (this.idleAnim.sheet = this.poweredIdleAnimSheet, this.drawPowerAura(this.idleAnim), this.idleAnim.sheet = this.idleAnimSheet), 0 <= this.shieldTime ? (this.idleAnim.sheet = this.shieldedIdleAnimSheet, this.drawShieldAura(this.idleAnim), this.idleAnim.sheet = this.idleAnimSheet) : 0 <= this.hitEffectTime && (this.idleAnim.sheet = this.hitIdleAnimSheet, this.drawHitEffectAura(this.idleAnim), this.idleAnim.sheet = this.idleAnimSheet)) : this.stateId == this.states.dying && (this.idleAnim.flip.x = 1 == this.faceDir ? !1 : !0, a.save(), a.globalAlpha = this.dyingAlpha, a.translate(b, c), this.idleAnim.draw(this.imageOffset.x, this.imageOffset.y), a.restore())
        },
        drawHealthBar: function() {
            var a = this.pos.x + this.jumpOffset.x - this.healthBarWidth / 2 - 3,
                b = this.pos.y + this.jumpOffset.y + this.imageOffset.y - this.healthBarHeight + this.healthBarOffset.y;
            this.control && (a += this.control.screenshakeOffset.x, b += this.control.screenshakeOffset.y);
            var c = ig.system.context,
                d = this.healthBarWidth,
                e = this.healthBarHeight;
            c.fillStyle = "rgba(0,0,0,0.4)";
            c.fillRect(a, b, d, e);
            var f = this.getHealthDisplayPercentage();
            0 > f && (f = 0);
            1 < f && (f = 1);
            c.fillStyle = "rgba(255,0,0,0.75)";
            c.fillRect(a, b, d * f, e);
            b += e / 4;
            c.fillStyle = "rgba(255,0,0,1)";
            c.fillRect(a, b, d * f, e / 2)
        },
        drawEnergyBar: function() {
            var a = this.pos.x + this.jumpOffset.x - this.healthBarWidth / 2 - 3,
                b = this.pos.y + this.jumpOffset.y + this.imageOffset.y - this.healthBarHeight + this.healthBarOffset.y;
            this.control && (a += this.control.screenshakeOffset.x, b += this.control.screenshakeOffset.y);
            var b = b + this.healthBarHeight,
                c = ig.system.context,
                d = this.healthBarWidth,
                e = this.healthBarHeight;
            c.fillStyle = "rgba(0,0,0,0.4)";
            c.fillRect(a, b, d, e);
            var f = this.getEnergyDisplayPercentage();
            0 > f && (f = 0);
            1 < f && (f = 1);
            c.fillStyle = "rgba(0,151,189,0.75)";
            c.fillRect(a, b, d * f, e);
            b += e / 4;
            c.fillStyle = "rgba(0,151,189,1)";
            c.fillRect(a, b, d * f, e / 2)
        },
        getHealthPercentage: function() { return 0 >= this.maxHealth ? 0 : this.health.actualValue / this.maxHealth },
        getHealthDisplayPercentage: function() { return 0 >= this.maxHealth ? 0 : this.health.displayValue / this.maxHealth },
        getEnergyPercentage: function() { return 0 >= this.maxEnergy ? 0 : this.energy.actualValue / this.maxEnergy },
        getEnergyDisplayPercentage: function() { return 0 >= this.maxEnergy ? 0 : this.energy.displayValue / this.maxEnergy },
        updateAnim: function(a) {
            if (a) {
                null == a.time && (a.time = 0);
                a.time += ig.system.tick;
                var b = Math.floor(a.time / a.frameTime);
                a.loopCount = Math.floor(b / a.sequence.length);
                a.frame = a.stop && 0 < a.loopCount ? a.sequence.length - 1 : b % a.sequence.length;
                a.tile = a.sequence[a.frame]
            }
        },
        updateHitEffect: function() { 0 > this.hitEffectTime || (this.hitEffectTime += ig.system.tick, this.hitEffectTime >= this.hitEffectDuration ? (this.hitEffectTime %= this.hitEffectDuration, this.hitEffectTime = -1, this.hitEffectAlpha = 1) : this.hitEffectAlpha = 1 - this.hitEffectTime / this.hitEffectDuration) },
        updateDying: function() { 0 > this.dyingTime || (this.dyingTime += ig.system.tick, this.dyingTime >= this.dyingDuration ? (this.dyingTime %= this.dyingDuration, this.setStateId(this.states.dead), this.control.heroDied()) : this.dyingAlpha = 1 - this.dyingTime / this.dyingDuration) },
        endAttackHit: function() {
            this.attackTime = -1;
            for (var a = 0; a < this.attackedMonstersArray.length; a++) {
                var b = this.attackedMonstersArray[a];
                if (b) {
                    a = this.damage;
                    0 <= this.powerEffectTime && (a = 2 * this.damage);
                    b.takeDamage(a);
                    b.hit();
                    b.stateId == b.states.dying ? this.control.monsterDied(b) : this.control.monsterHit(b);
                    for (var c = "" + Math.floor(a), a = 0; a < this.attackedMonstersArray.length; a++) {
                        var b = this.attackedMonstersArray[a],
                            d = b.pos.x,
                            e = b.pos.y - 50;
                        b.isBoss && (e -= 200);
                        this.control.addFloatingText(d, e, c)
                    }
                }
            }
        },
        attack: function() { this.stateId == this.states.dying || this.stateId == this.states.dead || (this.setStateId(this.states.attack), this.attackAnim.time = 0, this.updateAnim(this.attackAnim)) },
        jump: function() { this.jumpFlag = !0 },
        idle: function() { this.stateId == this.states.dying || this.stateId == this.states.dead || (this.setStateId(this.states.idle), this.idleAnim.time = 0, this.updateAnim(this.idleAnim)) },
        hit: function() { this.stateId != this.states.dead && (this.hitEffectTime = 0) },
        die: function() { this.stateId == this.states.dying || this.stateId == this.states.dead || (this.setStateId(this.states.dying), this.dyingTime = 0) },
        powerUp: function() {
            this.powerEffectTime = 0;
            this.control.addFloatingText(this.pos.x, this.pos.y - 50, "POWER UP", "#fffea2")
        },
        endPowerUp: function() { this.powerEffectTime = -1 },
        shieldsUp: function() {
            this.shieldTime = 0;
            this.control.addFloatingText(this.pos.x, this.pos.y - 50, "SHIELDED", "#fffea2")
        },
        endShieldsUp: function() { this.shieldTime = -1 },
        megaSlash: function() {
            this.attack();
            this.jump(this.slashEffectDuration);
            this.megaSlashTime = 0;
            this.midMegaSlashDone = !1
        },
        midMegaSlash: function() { if (!this.midMegaSlashDone) { this.midMegaSlashDone = !0; for (var a = 0; a < this.control.monsters.length; a++) { var b = this.control.monsters[a];!b.isBoss && (-46 < b.pos.x && b.pos.x < ig.system.width + 46 && -46 < b.pos.y && b.pos.y < ig.system.height + 46) && (b.hit(), this.control.addSlash(b.pos.x, b.pos.y + b.imageOffset.y / 2)) } } },
        endMegaSlash: function() {
            this.megaSlashTime = -1;
            this.control.startScreenShake();
            this.control.screenshakeDuration = 0.5;
            for (var a = 0; a < this.control.monsters.length; a++) {
                var b = this.control.monsters[a];
                if (!b.isBoss && -46 < b.pos.x && b.pos.x < ig.system.width + 46 && -46 < b.pos.y && b.pos.y < ig.system.height + 46) {
                    var c = b.health.actualValue;
                    b.takeDamage(c);
                    this.control.addFloatingText(b.pos.x, b.pos.y - 50, "" + Math.floor(c))
                }
            }
        },
        attackMonsters: function(a) { 0 <= this.attackTime || (this.attack(), this.attackTime = 0, this.attackedMonstersArray = a) },
        attackBoss: function(a) { 0 <= this.attackTime || (this.attack(), this.attackTime = 0, this.attackedMonstersArray = [a]) },
        attackedByMonster: function(a) {
            this.hit();
            a && this.takeDamage(a.damage, a)
        },
        takeDamage: function(a, b) { if (!isNaN(a) && !(this.stateId == this.states.dying || this.stateId == this.states.dead) && !(0 <= this.shieldTime)) this.health.add(-a), 0 >= this.health.actualValue ? (this.die(), this.control.heroHitLethal(b)) : this.control.heroHit(b), this.control.addFloatingText(this.pos.x, this.pos.y - 50, "" + Math.floor(a), "#ff0000") },
        gainHealth: function(a) {
            if (isNaN(a) || (this.stateId == this.states.dying || this.stateId == this.states.dead) || this.health.actualValue >= this.health.maxValue) return !1;
            this.health.add(a);
            return !0
        },
        gainHealthPercentage: function(a) {
            if (isNaN(a) || (this.stateId == this.states.dying || this.stateId == this.states.dead) || this.health.actualValue >= this.health.maxValue) return !1;
            this.health.add(this.maxHealth * a);
            return !0
        },
        gainEnergy: function(a) {
            if (isNaN(a) || (this.stateId == this.states.dying || this.stateId == this.states.dead) || this.energy.actualValue >= this.energy.maxValue) return !1;
            this.energy.add(a);
            return !0
        },
        gainEnergyPercentage: function(a) {
            if (isNaN(a) || (this.stateId == this.states.dying || this.stateId == this.states.dead) || this.energy.actualValue >= this.energy.maxValue) return !1;
            this.energy.add(this.maxEnergy * a);
            return !0
        },
        useEnergy: function(a) {
            if (isNaN(a) || this.stateId == this.states.dying || this.stateId == this.states.dead) return !1;
            0 > a && (a = 0);
            return this.energy.actualValue >= a ? (this.energy.add(-a), !0) : !1
        },
        upgradeDamage: function(a) { this.damage += a },
        upgradeHealth: function(a) {
            this.maxHealth += a;
            this.health.maxValue = this.maxHealth;
            this.health.actualValue += a;
            this.health.displayValue = this.health.actualValue
        },
        drawShieldAura: function(a) {
            var b = ig.system.context,
                c = this.pos.x,
                d = this.pos.y;
            this.control && (c += this.control.screenshakeOffset.x, d += this.control.screenshakeOffset.y);
            var e = this.shieldScale,
                d = d + -(this.idleAnim.sheet.height / 2 - 12),
                f = 0,
                h = 0,
                f = this.imageOffset.x,
                h = -this.idleAnim.sheet.height / 2;
            b.save();
            b.globalAlpha = this.shieldAlpha;
            b.translate(c, d);
            b.scale(e, e);
            a.draw(f, h);
            b.restore()
        },
        drawHitEffectAura: function(a) {
            var b = ig.system.context,
                c = this.pos.x,
                d = this.pos.y;
            this.control && (c += this.control.screenshakeOffset.x, d += this.control.screenshakeOffset.y);
            var e = 0,
                f = 0,
                e = this.imageOffset.x,
                f = this.imageOffset.y,
                h = 0.5 * this.hitEffectAlpha;
            0 <= this.dyingTime && (h *= this.dyingAlpha);
            b.save();
            b.globalAlpha = h;
            b.translate(c, d);
            b.scale(-this.facing, 1);
            a.draw(e, f);
            b.restore()
        },
        drawPowerAura: function(a) {
            var b = ig.system.context,
                c = this.pos.x,
                d = this.pos.y;
            this.control && (c += this.control.screenshakeOffset.x, d += this.control.screenshakeOffset.y);
            var e = this.powerEffectScale,
                d = d + -(this.idleAnim.sheet.height / 2 - 12),
                f = 0,
                h = 0,
                f = this.imageOffset.x,
                h = -this.idleAnim.sheet.height / 2;
            b.save();
            b.globalAlpha = this.powerEffectAlpha;
            b.translate(c, d);
            b.scale(e, e);
            a.draw(f, h);
            b.restore()
        },
        setStateId: function(a) {
            this.prevStateId = this.stateId;
            this.stateId = a
        },
        getHitRect: function() {
            var a = {};
            a.x = this.hitRect.x;
            a.y = this.hitRect.y;
            a.w = this.hitRect.w;
            a.h = this.hitRect.h;
            0 == this.faceDir && (a.x = -this.hitRect.x - this.hitRect.w);
            return a
        }
    })
});
ig.baked = !0;
ig.module("game.classes.pickup").requires("plugins.image-manipulation", "plugins.rumbler").defines(function() {
    Pickup = ig.Class.extend({
        typeId: 0,
        name: "",
        hitMode: 0,
        idleMode: 0,
        prevStateId: 0,
        stateId: 0,
        states: { spawn: 0, idle: 1, hit: 2, despawn: 4, dead: 5 },
        idleImage: new ig.Image("media/game/graphics/game/sprites/item/gold.png"),
        hitImage: new ig.Image("media/game/graphics/game/sprites/item/gold.png#dddddd^screen"),
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bottomOffset: 12,
        shadowOffset: { x: 0, y: 0 },
        shadowWidth: 0,
        shadowHeight: 8,
        shadowMaxAltitude: 500,
        shadowAlpha: 0.33,
        bounceOffset: { x: 0, y: 0 },
        bounceAmount: 2,
        bounceTime: 0,
        bounceDuration: 0.5,
        hitEffectTime: -1,
        hitEffectDuration: 0.2,
        hitEffectAlpha: 1,
        hitEffectScale: 1,
        collectTime: -1,
        collectDuration: 0.25,
        collectAlpha: 1,
        collectScale: 1,
        spawnTime: -1,
        spawnDuration: 0.2,
        spawnAlpha: 1,
        spawnScale: 1,
        aliveTime: 0,
        aliveDuration: 7,
        despawnWarningAlpha: 1,
        despawnWarningDuration: 1.5,
        despawnTime: -1,
        despawnDuration: 0.2,
        despawnAlpha: 1,
        despawnScale: 1,
        hitRect: { x: 0, y: 0, w: 0, h: 0 },
        dropWeight: 25,
        dropVel: 0,
        spawnVector: { x: 0, y: 0 },
        rumbler: null,
        collectEndPos: null,
        init: function(a) {
            this.control = a;
            this.imageOffset.x = -this.idleImage.width / 2;
            this.imageOffset.y = -(this.idleImage.height - this.bottomOffset);
            this.hitRect.w = this.idleImage.width;
            this.hitRect.h = this.idleImage.height;
            this.hitRect.x = -this.hitRect.w / 2;
            this.hitRect.y = -(this.hitRect.h - this.bottomOffset);
            this.hitRect.h -= this.bottomOffset;
            this.bounceDuration = this.bounceDuration - 0.05 + 0.1 * Math.random();
            this.bounceTime = this.bounceDuration * Math.random();
            this.shadowWidth = 0.6 * this.hitRect.w;
            this.rumbler = new ig.Rumbler;
            this.rumbler.max_rot = 0.05;
            this.spawnTime = 0;
            this.setStateId(this.states.spawn)
        },
        setPos: function(a) { a && (!isNaN(a.x) && !isNaN(a.y)) && (this.pos.x = a.x, this.pos.y = a.y) },
        update: function() { this.stateId == this.states.spawn ? (this.updateSpawn(), this.updateDrop()) : this.stateId == this.states.idle ? (this.updateIdle(), this.updateDrop()) : this.stateId == this.states.hit ? this.updateHit() : this.stateId == this.states.despawn && this.updateDespawn() },
        draw: function() { this.stateId == this.states.spawn ? this.drawSpawn() : this.stateId == this.states.hit ? this.drawHitEffect() : this.stateId == this.states.idle ? this.drawIdle() : this.stateId == this.states.despawn && this.drawDespawn() },
        drawShadow: function() {
            if (this.stateId != this.states.dead && !(0 >= this.shadowWidth)) {
                var a = ig.system.context,
                    b = this.control.groundLevel - (this.pos.y + this.bounceOffset.y),
                    c = this.pos.x + this.bounceOffset.x,
                    d = this.control.groundLevel;
                this.control && (c += this.control.screenshakeOffset.x, d += this.control.screenshakeOffset.y);
                var c = c + this.shadowOffset.x,
                    d = d + this.shadowOffset.y,
                    e = this.shadowHeight / this.shadowWidth,
                    f = this.shadowWidth / 2,
                    h = this.shadowAlpha * this.spawnAlpha * this.despawnAlpha;
                b >= this.shadowMaxAltitude || 0 > b || (b = 1 - b / this.shadowMaxAltitude, h *= b, f *= b + 0.01 * this.bounceOffset.y, 0 >= f || (b = this.spawnScale, a.save(), a.globalAlpha = h, a.translate(c, d), a.scale(1 * b, e * b), a.beginPath(), a.arc(0, 0, f, 0, 2 * Math.PI), a.fillStyle = "#000000", a.fill(), a.restore()))
            }
        },
        drawSpawn: function() {
            var a = ig.system.context,
                b = this.pos.x + this.bounceOffset.x,
                c = this.pos.y + this.bounceOffset.y;
            this.control && (b += this.control.screenshakeOffset.x, c += this.control.screenshakeOffset.y);
            var d = this.spawnScale;
            a.save();
            a.globalAlpha = this.spawnAlpha;
            a.translate(b, c);
            a.scale(d, d);
            this.idleImage.draw(this.imageOffset.x, this.imageOffset.y);
            a.restore()
        },
        drawIdle: function() {
            var a = ig.system.context,
                b = this.pos.x + this.bounceOffset.x,
                c = this.pos.y + this.bounceOffset.y;
            this.control && (b += this.control.screenshakeOffset.x, c += this.control.screenshakeOffset.y);
            a.save();
            a.globalAlpha = this.despawnWarningAlpha;
            a.translate(b, c);
            this.idleImage.draw(this.imageOffset.x, this.imageOffset.y);
            a.restore()
        },
        drawDespawn: function() {
            var a = ig.system.context,
                b = this.pos.x + this.bounceOffset.x,
                c = this.pos.y + this.bounceOffset.y;
            this.control && (b += this.control.screenshakeOffset.x, c += this.control.screenshakeOffset.y);
            var d = this.spawnScale;
            a.save();
            a.globalAlpha = this.despawnAlpha;
            a.translate(b, c);
            a.scale(d, d);
            this.idleImage.draw(this.imageOffset.x, this.imageOffset.y);
            a.restore()
        },
        drawHitEffect: function() {
            var a = ig.system.context,
                b = this.pos.x + this.bounceOffset.x,
                c = this.pos.y + this.bounceOffset.y;
            this.control && (b += this.control.screenshakeOffset.x, c += this.control.screenshakeOffset.y);
            a.save();
            a.globalAlpha = this.hitEffectAlpha;
            a.translate(b, c);
            this.idleImage.draw(this.imageOffset.x, this.imageOffset.y);
            0 <= this.hitEffectTime && (a.globalAlpha = 0.5 * this.hitEffectAlpha, this.hitImage.draw(this.imageOffset.x, this.imageOffset.y));
            a.restore()
        },
        updateBounce: function() {
            this.bounceTime += ig.system.tick;
            this.bounceTime >= this.bounceDuration && (this.bounceTime %= this.bounceDuration);
            this.bounceOffset.y = -this.bounceAmount +
                this.bounceAmount * Math.cos(2 * Math.PI * (this.bounceTime / this.bounceDuration))
        },
        updateSpawn: function() {
            if (!(0 > this.spawnTime))
                if (this.spawnTime += ig.system.tick, this.spawnTime >= this.spawnDuration) this.spawnTime %= this.spawnDuration, this.spawnTime = -1, this.spawnScale = this.spawnAlpha = 1, this.setStateId(this.states.idle);
                else {
                    var a = this.spawnTime / this.spawnDuration;
                    this.spawnAlpha = a;
                    this.spawnScale = 1 - 0.5 * (1 - a)
                }
        },
        updateIdle: function() {
            this.updateBounce();
            if (0 < this.aliveDuration)
                if (this.aliveTime += ig.system.tick, this.aliveTime >= this.aliveDuration) this.setStateId(this.states.despawn), this.despawnTime = 0, this.despawnWarningAlpha = 1;
                else {
                    var a = this.aliveDuration - this.aliveTime;
                    a < this.despawnWarningDuration && (a = this.despawnWarningDuration - a, this.despawnWarningAlpha = 0, 0.125 < a % 0.25 && (this.despawnWarningAlpha = 1))
                }
        },
        updateHit: function() {
            this.updateCollect();
            this.updateHitEffect(); - 1 >= this.collectTime && (this.setStateId(this.states.dead), this.control.refreshPickupsList(), this.onCollect())
        },
        updateHitEffect: function() { 0 > this.hitEffectTime || (this.hitEffectTime += ig.system.tick, this.hitEffectTime >= this.hitEffectDuration ? (this.hitEffectTime %= this.hitEffectDuration, this.hitEffectTime = -1, this.hitEffectAlpha = 0.5) : this.hitEffectAlpha = 1 - 0.5 * (this.hitEffectTime / this.hitEffectDuration)) },
        updateCollect: function() {
            if (!(-1 >= this.collectTime) && (this.collectTime += ig.system.tick, !(0 > this.collectTime)))
                if (this.collectTime >= this.collectDuration) this.collectTime %= this.collectDuration, this.collectTime = -1, null != this.collectEndPos && (this.pos.x = this.collectEndPos.x, this.pos.y = this.collectEndPos.y);
                else {
                    var a = this.collectTime / this.collectDuration;
                    if (null != this.collectEndPos) {
                        if (null == this.collectVector) {
                            var b = this.pos.x + this.bounceOffset.x,
                                c = this.pos.y + this.bounceOffset.y;
                            this.collectVector = {};
                            this.collectVector.x = this.collectEndPos.x - b;
                            this.collectVector.y = this.collectEndPos.y - c;
                            this.collectStartPos = {};
                            this.collectStartPos.x = b;
                            this.collectStartPos.y = c
                        }
                        this.pos.x = this.collectStartPos.x + this.collectVector.x * a;
                        this.pos.y = this.collectStartPos.y +
                            this.collectVector.y * a
                    }
                }
        },
        updateDespawn: function() { 0 > this.despawnTime || (this.despawnTime += ig.system.tick, this.despawnTime >= this.despawnDuration ? (this.setStateId(this.states.dead), this.control.refreshPickupsList()) : this.despawnAlpha = 1 - this.despawnTime / this.despawnDuration) },
        updateDrop: function() {
            if (this.spawnVector) {
                var a = ig.system.tick;
                0 != this.spawnVector.x && (this.spawnVector.x *= Math.exp(-2 * a), this.pos.x += this.spawnVector.x * a, 3 > this.spawnVector.x && -3 < this.spawnVector.x && (this.spawnVector.x = 0), 0 > this.pos.x && (this.pos.x = 0), this.pos.x > ig.system.width && (this.pos.x = ig.system.width));
                0 != this.spawnVector.y && (this.spawnVector.y *= Math.exp(-2 * a), this.pos.y += this.spawnVector.y * a, 3 > this.spawnVector.y && -3 < this.spawnVector.y && (this.spawnVector.y = 0))
            }
            a = this.control.groundLevel;
            if (0 < a - this.pos.y) {
                if (this.dropVel += this.dropWeight * ig.system.tick, this.pos.y += this.dropVel, this.pos.y > a)
                    if (2 >= this.dropVel) this.dropVel = 0, this.pos.y = a;
                    else {
                        var b = this.pos.y - a;
                        this.dropVel *= -0.2;
                        this.pos.y = a - 0.2 * b
                    }
            } else this.pos.y = a
        },
        hit: function() { if ((!(id != this.states.despawn && id != this.states.dead) || !(this.stateId == this.states.despawn || this.stateId == this.states.dead)) && this.stateId != this.states.hit) this.setStateId(this.states.hit), this.hitEffectTime = 0, this.collectTime = -0.1, this.control.pickupHit(this) },
        idle: function() { this.stateId == this.states.despawn || this.stateId == this.states.dead || this.setStateId(this.states.idle) },
        onCollect: function() {},
        setStateId: function(a) { a != this.states.dead && (this.stateId == this.states.despawn || this.stateId == this.states.dead) || (this.prevStateId = this.stateId, this.stateId = a) },
        aabbCheck: function(a, b) { return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1 },
        bitwiseRound: function(a) { return 0.5 + a << 0 }
    })
});
ig.baked = !0;
ig.module("game.classes.hp-pickup").requires("game.classes.pickup").defines(function() { HpPickup = Pickup.extend({ typeId: 1, name: "", idleImage: new ig.Image("media/game/graphics/game/sprites/item/item_1.png"), hitImage: new ig.Image("media/game/graphics/game/sprites/item/item_1.png#dddddd^screen"), init: function(a) { this.parent(a) } }) });
ig.baked = !0;
ig.module("game.classes.sp-pickup").requires("game.classes.pickup").defines(function() { SpPickup = Pickup.extend({ typeId: 2, name: "", idleImage: new ig.Image("media/game/graphics/game/sprites/item/item_2.png"), hitImage: new ig.Image("media/game/graphics/game/sprites/item/item_2.png#dddddd^screen"), init: function(a) { this.parent(a) } }) });
ig.baked = !0;
ig.module("game.classes.power-pickup").requires("game.classes.pickup").defines(function() { PowerPickup = Pickup.extend({ typeId: 3, name: "", idleImage: new ig.Image("media/game/graphics/game/sprites/item/item_3.png"), hitImage: new ig.Image("media/game/graphics/game/sprites/item/item_3.png#dddddd^screen"), init: function(a) { this.parent(a) } }) });
ig.baked = !0;
ig.module("game.classes.slash").defines(function() {
    SlashNode = ig.Class.extend({
        x: 0,
        y: 0,
        time: 0,
        t: 0,
        prev: null,
        next: null,
        l: 0,
        w: 1,
        dx: 0,
        dy: 0,
        adx: 0,
        ady: 0,
        ndx: 0,
        ndy: 0,
        init: function(a, b, c) {
            this.x = a;
            this.y = b;
            this.time = c
        },
        setNext: function(a) {
            this.next = a;
            a = this.next.x - this.x;
            var b = this.next.y - this.y,
                c = Math.sqrt(a * a + b * b);
            this.l = c;
            this.next.l = c;
            this.next.dx = a / c;
            this.next.dy = b / c;
            this.next.ndx = -this.next.dy;
            this.next.ndy = this.next.dx;
            this.prev ? (this.adx = (this.dx + this.next.dx) / 2, this.ady = (this.dy + this.next.dy) / 2,
                this.ndx = -this.ady, this.ndy = this.adx) : (this.adx = this.next.dx, this.ady = this.next.dy, this.ndx = -this.ady, this.ndy = this.adx, this.dx = this.next.dx, this.dy = this.next.dy)
        },
        setPrev: function(a) { this.prev = a }
    });
    Slash = ig.Class.extend({
        nodeList: [],
        drawnNodeList: [],
        time: 0,
        duration: 2,
        nodeDuration: 0.2,
        hidden: !1,
        disabled: !1,
        killed: !1,
        control: null,
        init: function(a) { this.control = a },
        addNode: function(a, b, c) {
            a = new SlashNode(a, b, c);
            0 < this.nodeList.length && (b = this.nodeList[this.nodeList.length - 1], b.setNext(a), a.setPrev(b));
            this.nodeList.push(a)
        },
        update: function() { this.disabled || (this.time += ig.system.tick, this.time > this.duration ? this.kill() : this.refreshDrawnNodeList()) },
        draw: function() { this.hidden || this.drawLineFromNodeList(this.drawnNodeList) },
        kill: function() { this.killed || (this.disabled = this.hidden = this.killed = !0) },
        refreshDrawnNodeList: function() {
            this.drawnNodeList = [];
            for (var a = 0; a < this.nodeList.length;) {
                var b = this.nodeList[a],
                    c = this.time - b.time,
                    c = c / this.nodeDuration;
                1 < c ? (this.nodeList.splice(a, 1), 0 < this.nodeList.length && 0 == a && this.nodeList[a].setPrev(null)) : (0 <= c && (b.t = 1 - c, this.drawnNodeList.push(b)), a++)
            }
        },
        drawLineFromNodeList: function(a) {
            if (a && !(1 >= a.length)) {
                var b = ig.system.context;
                b.lineWidth = 2;
                b.strokeStyle = "rgba(255,255,255,0.5)";
                for (var c = 12, d = 0; d < a.length; d++) {
                    var e = a[d];
                    e.w = e.t * c
                }
                b.beginPath();
                var e = a[0],
                    f = e.x - e.dx * e.w,
                    e = e.y - e.dy * e.w;
                b.moveTo(f, e);
                for (d = 0; d < a.length - 1; d++) e = a[d], f = e.x + e.ndx * e.w, e = e.y + e.ndy * e.w, b.lineTo(f, e);
                e = a[a.length - 1];
                c > e.l && (c = e.l);
                f = e.x + e.ndx * e.w - e.dx * c;
                e = e.y + e.ndy * e.w - e.dy * c;
                b.lineTo(f, e);
                e = a[a.length - 1];
                f = e.x + e.dx * e.w;
                e = e.y + e.dy * e.w;
                b.lineTo(f, e);
                e = a[a.length - 1];
                f = e.x - e.ndx * e.w - e.dx * c;
                e = e.y - e.ndy * e.w - e.dy * c;
                b.lineTo(f, e);
                for (d = a.length - 2; 0 <= d; d--) e = a[d], f = e.x - e.ndx * e.w, e = e.y - e.ndy * e.w, b.lineTo(f, e);
                b.closePath();
                b.fillStyle = "rgba(127,127,127,0.75)";
                b.fill();
                c = 8;
                for (d = 0; d < a.length; d++) e = a[d], e.w = e.t * e.t * c;
                b.beginPath();
                e = a[0];
                f = e.x - e.dx * e.w;
                e = e.y - e.dy * e.w;
                b.moveTo(f, e);
                for (d = 0; d < a.length - 1; d++) e = a[d], f = e.x + e.ndx * e.w, e = e.y + e.ndy * e.w, b.lineTo(f, e);
                e = a[a.length - 1];
                c > e.l && (c = e.l);
                f = e.x + e.ndx * e.w - e.dx * c;
                e = e.y + e.ndy * e.w - e.dy * c;
                b.lineTo(f, e);
                e = a[a.length - 1];
                f = e.x + e.dx * e.w;
                e = e.y + e.dy * e.w;
                b.lineTo(f, e);
                e = a[a.length - 1];
                f = e.x - e.ndx * e.w - e.dx * c;
                e = e.y - e.ndy * e.w - e.dy * c;
                b.lineTo(f, e);
                for (d = a.length - 2; 0 <= d; d--) e = a[d], f = e.x - e.ndx * e.w, e = e.y - e.ndy * e.w, b.lineTo(f, e);
                b.closePath();
                b.fillStyle = "rgb(255,255,255)";
                b.fill()
            }
        },
        bitwiseRound: function(a) { return 0.5 + a << 0 }
    })
});
ig.baked = !0;
ig.module("game.classes.floating-text").defines(function() {
    FloatingText = ig.Class.extend({
        pos: { x: 0, y: 0 },
        alpha: 1,
        angle: 0,
        scale: 1,
        vector: { x: 0, y: -1 },
        vel: 50,
        text: "",
        textColor: "#ffffff",
        textAlign: "center",
        font: "12px bachelorpadjl, Impact, Charcoal, sans-serif",
        fadeDuration: 0.25,
        growDuration: 0.25,
        time: 0,
        duration: 1,
        hidden: !1,
        disabled: !1,
        killed: !1,
        control: null,
        init: function(a) { this.control = a },
        setPos: function(a, b) {
            this.pos.x = a;
            this.pos.y = b
        },
        setText: function(a) { this.text = a },
        update: function() { this.disabled || (this.time += ig.system.tick, this.time > this.duration ? this.kill() : (this.time > this.duration - this.fadeDuration && (this.alpha = 1 - (this.time - (this.duration - this.fadeDuration)) / this.fadeDuration), this.scale = this.time <= this.growDuration ? this.time / this.growDuration : 1)) },
        draw: function() { this.hidden || this.drawText() },
        kill: function() { this.killed || (this.disabled = this.hidden = this.killed = !0) },
        drawText: function() {
            var a = ig.system.context,
                b = this.pos.x,
                c = this.pos.y,
                b = b + this.vector.x * this.vel * this.time,
                c = c + this.vector.y *
                this.vel * this.time;
            this.control && (this.control.screenshakeOffset.x && this.control.screenshakeOffset.y) && (b += this.control.screenshakeOffset.x, c += this.control.screenshakeOffset.y);
            var d = this.angle,
                e = this.text;
            a.save();
            a.translate(b, c);
            a.rotate(d);
            a.scale(this.scale, this.scale);
            a.globalAlpha = this.alpha;
            a.fillStyle = this.textColor;
            a.font = this.font;
            a.textAlign = this.textAlign;
            a.fillText(e, 0, 0);
            a.restore()
        },
        bitwiseRound: function(a) { return 0.5 + a << 0 }
    })
});
ig.baked = !0;
ig.module("game.classes.monster").requires("plugins.number-anim", "plugins.image-manipulation", "plugins.rumbler").defines(function() {
    Monster = ig.Class.extend({
        typeId: 0,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        isBoss: !1,
        facing: -1,
        level: 1,
        health: null,
        maxHealth: 10,
        damage: 1,
        hitMode: 0,
        idleMode: 0,
        prevStateId: null,
        stateId: 0,
        states: { idle: 0, hit: 1, move: 2, wander: 3, moveAttack: 4, attack: 5, dying: 6, dead: 7, dropEntrance: 8 },
        idleAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_idle1_10x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_idle2_10x1.png", 92, 109)],
        hitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_hit1_10x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_hit2_10x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_hit3_5x1.png", 92, 109)],
        highlightHitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_hit1_10x1.png#ff0000^screen", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_hit2_10x1.png#ff0000^screen", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_hit3_5x1.png#ff0000^screen", 92, 109)],
        idleAnimFramerate: 0.05,
        hitAnimFramerate: 0.02,
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bottomOffset: 12,
        shadowOffset: { x: -4, y: 0 },
        shadowWidth: 0,
        shadowHeight: 8,
        shadowMaxAltitude: 500,
        shadowAlpha: 0.33,
        wanderMoveSpeed: 40,
        wanderPauseTime: -1,
        wanderPauseDuration: 5,
        wanderRange: 100,
        wanderRect: { x: 50, y: 50, w: 380, h: 306 },
        wanderDestination: null,
        wanderVector: null,
        wanderTime: null,
        wanderMaxDuration: 5,
        attackMoveSpeed: 60,
        flankMaxAmount: 50,
        flankAmount: 0,
        attackDestination: null,
        attackVector: null,
        attackPos: null,
        attackTime: null,
        attackRate: 2.5,
        attackDuration: 0.5,
        attackDamageDone: !1,
        moveSpeed: 60,
        moveToDestination: null,
        moveVector: null,
        bounceOffset: { x: 0, y: 0 },
        bounceAmount: 2,
        bounceTime: 0,
        bounceDuration: 0.5,
        dyingTime: -1,
        dyingDuration: 0.4,
        dyingAlpha: 1,
        deathSpawnFlag: !1,
        hitEffectTime: -1,
        hitEffectDuration: 0.2,
        hitEffectAlpha: 1,
        hitEffectScale: 1,
        hitRect: { x: 0, y: 0, w: 0, h: 0 },
        healthBarOffset: { x: 0, y: 18 },
        healthBarWidth: 70,
        healthBarHeight: 4,
        dropWeight: 50,
        dropVector: null,
        dropToDestination: null,
        dropShake: 1,
        dropShakeDuration: 0.2,
        rumbler: null,
        attackDisabled: !1,
        attackOnce: !1,
        wanderDisabled: !1,
        forceDropId: null,
        init: function(a) {
            this.control = a;
            this.setIdleMode(this.idleMode);
            this.setHitMode(this.hitMode);
            this.imageOffset.x = -this.idleAnim.sheet.width / 2;
            this.imageOffset.y = -(this.idleAnim.sheet.height - this.bottomOffset);
            this.hitRect.w = this.idleAnim.sheet.width;
            this.hitRect.h = this.idleAnim.sheet.height;
            this.hitRect.x = -this.hitRect.w / 2;
            this.hitRect.y = -(this.hitRect.h - this.bottomOffset);
            this.hitRect.y += this.healthBarOffset.y;
            this.hitRect.h -= this.healthBarOffset.y;
            this.hitRect.h -= this.bottomOffset;
            this.health = new ig.NumberAnim;
            this.health.setMin(0);
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth);
            this.bounceDuration = this.bounceDuration - 0.05 + 0.1 * Math.random();
            this.bounceTime = this.bounceDuration * Math.random();
            this.shadowWidth = 0.5 * this.hitRect.w;
            this.rumbler = new ig.Rumbler;
            this.rumbler.max_rot = 0.05;
            this.setStateId(this.states.idle);
            this.wanderPauseTime = Math.random() * this.wanderPauseDuration;
            this.wanderMaxDuration = 0
        },
        setPos: function(a) { a && (!isNaN(a.x) && !isNaN(a.y)) && (this.pos.x = a.x, this.pos.y = a.y, this.updateFacing()) },
        updateFacing: function() {
            if (this.control && this.control.hero) {
                var a = this.control.hero;
                a.pos.x < this.pos.x && (this.facing = -1);
                a.pos.x > this.pos.x && (this.facing = 1)
            }
        },
        update: function() { this.control.gameOver || (this.health.update(), this.stateId == this.states.hit ? (this.updateAnim(this.hitAnim), this.updateHitEffect(), this.updateHit()) : this.stateId == this.states.dying ? (this.updateDying(), this.updateAnim(this.hitAnim), this.updateHitEffect()) : this.stateId == this.states.idle ? (this.updateAnim(this.idleAnim), this.updateBounce(), this.wanderDisabled || this.setStateId(this.states.wander)) : this.stateId == this.states.moveAttack ? (this.updateMoveAttack(), this.updateAnim(this.idleAnim), this.updateBounce()) : this.stateId == this.states.move ? (this.updateMove(), this.updateAnim(this.idleAnim), this.updateBounce()) : this.stateId == this.states.dropEntrance ? (this.updateDropEntrance(), this.updateAnim(this.idleAnim), this.updateHitEffect()) : this.stateId == this.states.wander ? this.wanderDisabled ? this.setStateId(this.states.idle) : (this.updateWander(), this.updateAnim(this.idleAnim), this.updateBounce()) : this.stateId == this.states.attack && (this.updateAnim(this.idleAnim), this.updateAttack())) },
        draw: function() { this.stateId == this.states.hit ? this.drawHit() : this.stateId == this.states.idle || this.stateId == this.states.attack || this.stateId == this.states.wander || this.stateId == this.states.move || this.stateId == this.states.moveAttack || this.stateId == this.states.dropEntrance ? this.drawIdle() : this.stateId == this.states.dying && this.drawDying() },
        drawShadow: function() {
            if (this.stateId != this.states.dead && !(0 >= this.shadowWidth)) {
                var a = ig.system.context,
                    b = this.control.groundLevel - (this.pos.y + this.bounceOffset.y),
                    c = this.pos.x + this.bounceOffset.x,
                    d = this.control.groundLevel;
                this.control && (c += this.control.screenshakeOffset.x, d += this.control.screenshakeOffset.y);
                var c = c + this.shadowOffset.x * -this.facing,
                    d = d + this.shadowOffset.y,
                    e = this.shadowHeight / this.shadowWidth,
                    f = this.shadowWidth / 2,
                    h = this.shadowAlpha * this.dyingAlpha;
                b >= this.shadowMaxAltitude || 0 > b || (b = 1 - b / this.shadowMaxAltitude, h *= b, f *= b + 0.01 * this.bounceOffset.y, 0 >= f || (a.save(), a.globalAlpha = h, a.translate(c, d), a.scale(-this.facing, e), a.beginPath(), a.arc(0, 0, f, 0, 2 * Math.PI), a.fillStyle = "#000000", a.fill(), a.restore()))
            }
        },
        drawHealthBar: function() {
            var a = this.pos.x + this.bounceOffset.x - this.healthBarWidth / 2 - 3,
                b = this.pos.y + this.bounceOffset.y + this.imageOffset.y - this.healthBarHeight + this.healthBarOffset.y;
            this.control && (a += this.control.screenshakeOffset.x, b += this.control.screenshakeOffset.y);
            var c = ig.system.context,
                d = this.healthBarWidth,
                e = this.healthBarHeight;
            c.fillStyle = "rgba(0,0,0,0.4)";
            c.fillRect(a, b, d, e);
            var f = this.getHealthDisplayPercentage();
            0 > f && (f = 0);
            1 < f && (f = 1);
            c.fillStyle = "rgba(255,0,0,0.75)";
            c.fillRect(a, b, d * f, e);
            b += e / 4;
            c.fillStyle = "rgba(255,0,0,1)";
            c.fillRect(a, b, d * f, e / 2)
        },
        drawHitEffectAura: function(a) {
            var b = ig.system.context,
                c = this.pos.x + this.bounceOffset.x,
                d = this.pos.y + this.bounceOffset.y;
            this.control && (c += this.control.screenshakeOffset.x, d += this.control.screenshakeOffset.y);
            var e = 0,
                f = 0,
                e = this.imageOffset.x,
                f = this.imageOffset.y,
                h = 0.5 * this.hitEffectAlpha;
            0 <= this.dyingTime && (h *= this.dyingAlpha);
            if (this.control && !this.control.gameOver && !this.control.gamePaused) {
                this.rumbler.update();
                var c = c + this.rumbler.rumble.dx,
                    d = d + this.rumbler.rumble.dy,
                    j = this.rumbler.rumble.rot
            }
            b.save();
            b.globalAlpha = h;
            b.translate(c, d);
            j && b.rotate(j);
            b.scale(-this.facing, 1);
            a.draw(e, f);
            b.restore()
        },
        drawHit: function() {
            var a = ig.system.context,
                b = this.pos.x + this.bounceOffset.x,
                c = this.pos.y + this.bounceOffset.y;
            this.control && (b += this.control.screenshakeOffset.x, c += this.control.screenshakeOffset.y);
            if (this.control && !this.control.gameOver && !this.control.gamePaused) {
                this.rumbler.update();
                var b = b + this.rumbler.rumble.dx,
                    c = c + this.rumbler.rumble.dy,
                    d = this.rumbler.rumble.rot
            }
            a.save();
            a.translate(b, c);
            d && a.rotate(d);
            a.scale(-this.facing, 1);
            this.hitAnim.draw(this.imageOffset.x, this.imageOffset.y);
            a.restore();
            0 <= this.hitEffectTime && (this.hitAnim.sheet = this.highlightHitAnimSheets[this.hitMode], this.drawHitEffectAura(this.hitAnim), this.hitAnim.sheet = this.hitAnimSheets[this.hitMode])
        },
        drawIdle: function() {
            var a = ig.system.context,
                b = this.pos.x + this.bounceOffset.x,
                c = this.pos.y + this.bounceOffset.y;
            this.control && (b += this.control.screenshakeOffset.x, c += this.control.screenshakeOffset.y);
            a.save();
            a.translate(b, c);
            a.scale(-this.facing, 1);
            this.idleAnim.draw(this.imageOffset.x, this.imageOffset.y);
            a.restore()
        },
        drawDying: function() {
            var a = ig.system.context;
            a.globalAlpha = this.dyingAlpha;
            var b = this.pos.x + this.bounceOffset.x,
                c = this.pos.y + this.bounceOffset.y;
            this.control && (b += this.control.screenshakeOffset.x, c += this.control.screenshakeOffset.y);
            if (this.control && !this.control.gameOver && !this.control.gamePaused) {
                this.rumbler.update();
                var b = b + this.rumbler.rumble.dx,
                    c = c + this.rumbler.rumble.dy,
                    d = this.rumbler.rumble.rot
            }
            a.save();
            a.translate(b, c);
            d && a.rotate(d);
            a.scale(-this.facing, 1);
            this.hitAnim.draw(this.imageOffset.x, this.imageOffset.y);
            a.restore();
            0 <= this.hitEffectTime && (this.hitAnim.sheet = this.highlightHitAnimSheets[this.hitMode], this.drawHitEffectAura(this.hitAnim), this.hitAnim.sheet = this.hitAnimSheets[this.hitMode]);
            a.globalAlpha = 1
        },
        getHealthPercentage: function() { return 0 >= this.maxHealth ? 0 : this.health.actualValue / this.maxHealth },
        getHealthDisplayPercentage: function() { return 0 >= this.maxHealth ? 0 : this.health.displayValue / this.maxHealth },
        updateAnim: function(a) {
            if (a) {
                null == a.time && (a.time = 0);
                a.time += ig.system.tick;
                var b = Math.floor(a.time / a.frameTime);
                a.loopCount = Math.floor(b / a.sequence.length);
                a.frame = a.stop && 0 < a.loopCount ? a.sequence.length - 1 : b % a.sequence.length;
                a.tile = a.sequence[a.frame]
            }
        },
        updateBounce: function() {
            this.bounceTime += ig.system.tick;
            this.bounceTime >= this.bounceDuration && (this.bounceTime %= this.bounceDuration);
            this.bounceOffset.y = -this.bounceAmount + this.bounceAmount * Math.cos(2 * Math.PI * (this.bounceTime / this.bounceDuration))
        },
        updateDying: function() { 0 > this.dyingTime || (this.dyingTime += ig.system.tick, this.dyingTime >= this.dyingDuration / 2 && !this.deathSpawnFlag && (this.deathSpawnFlag = !0, this.onDeathSpawn()), this.dyingTime >= this.dyingDuration ? (this.setStateId(this.states.dead), this.control.refreshMonsterList()) : this.dyingAlpha = 1 - this.dyingTime / this.dyingDuration) },
        updateMove: function() {
            if (this.moveToDestination) {
                null == this.moveVector && (this.moveVector = { x: 0, y: 0 }, this.moveVector.x = this.moveToDestination.x - this.pos.x, this.moveVector.y = this.moveToDestination.y - this.pos.y, this.moveVector.l = Math.sqrt(this.moveVector.x * this.moveVector.x + this.moveVector.y * this.moveVector.y), 0 < this.moveVector.l && (this.moveVector.x /= this.moveVector.l, this.moveVector.y /= this.moveVector.l), this.moveVector.p = 0);
                var a = this.moveSpeed * ig.system.tick;
                this.moveVector.p += a;
                this.moveVector.p >= this.moveVector.l ? (this.pos.x = this.moveToDestination.x, this.pos.y = this.moveToDestination.y, this.moveVector = this.moveToDestination = null, this.setStateId(this.states.wander)) : (this.pos.x += this.moveVector.x * a, this.pos.y += this.moveVector.y * a)
            } else this.moveVector = null, this.setStateId(this.states.wander)
        },
        updateMoveAttack: function() {
            var a = this.control.hero;
            if (!a.stateId == a.states.dead && !a.stateId == a.states.dying) this.attackVector = null, this.setStateId(this.states.wander);
            else {
                null == this.attackVector && (this.attackVector = { x: 0, y: 0 }, this.attackVector.x = a.pos.x - this.pos.x, this.attackVector.y = a.pos.y - this.pos.y, this.attackVector.l = Math.sqrt(this.attackVector.x *
                    this.attackVector.x + this.attackVector.y * this.attackVector.y), 0 < this.attackVector.l && (this.attackVector.x /= this.attackVector.l, this.attackVector.y /= this.attackVector.l), this.attackVector.p = 0, this.updateFacing());
                var b = this.attackMoveSpeed * ig.system.tick;
                this.attackVector.p += b;
                this.attackVector.p >= this.attackVector.l ? (this.pos.x = a.pos.x, this.pos.y = a.pos.y, this.attackVector = null, this.setStateId(this.states.wander)) : (this.pos.x += this.attackVector.x * b, this.pos.y += this.attackVector.y * b);
                var c = a.getHitRect(),
                    b = {};
                b.x = a.pos.x + c.x;
                b.y = a.pos.y + c.y;
                b.w = c.w;
                b.h = c.h;
                a = {};
                a.x = this.pos.x + this.hitRect.x;
                a.y = this.pos.y + this.hitRect.y;
                a.w = this.hitRect.w;
                a.h = this.hitRect.h;
                this.aabbCheck(b, a) && (this.attackVector = null, this.setStateId(this.states.attack))
            }
        },
        updateWander: function() {
            this.wanderTime || (this.wanderTime = new ig.Timer);
            if (!this.attackDisabled && this.wanderTime.delta() >= this.wanderMaxDuration) this.setStateId(this.states.moveAttack), this.wanderDestination = this.wanderVector = this.wanderTime = null, this.wanderPauseTime = -1;
            else {
                if (0 <= this.wanderPauseTime)
                    if (this.wanderPauseTime += ig.system.tick, this.wanderPauseTime > this.wanderPauseDuration) this.wanderPauseTime = -1;
                    else return;
                if (null == this.wanderVector) {
                    null == this.wanderDestination && (this.wanderDestination = this.generateWanderDestination());
                    dx = this.wanderDestination.x - this.pos.x;
                    dy = this.wanderDestination.y - this.pos.y;
                    var a = Math.sqrt(dx * dx + dy * dy);
                    this.wanderVector = { x: 0, y: 0 };
                    0 < a && (this.wanderVector.x = dx / a, this.wanderVector.y = dy / a);
                    this.wanderVector.l = a;
                    this.wanderVector.p =
                        0;
                    0 > dx && (this.facing = -1);
                    0 < dx && (this.facing = 1)
                }
                a = this.wanderMoveSpeed * ig.system.tick;
                this.wanderVector.p += a;
                this.wanderVector.p > this.wanderVector.l && (a -= this.wanderVector.l - this.wanderVector.p);
                this.pos.x += this.wanderVector.x * a;
                this.pos.y += this.wanderVector.y * a;
                this.wanderVector.p >= this.wanderVector.l && (this.pos.x = this.wanderDestination.x, this.pos.y = this.wanderDestination.y, this.wanderVector = this.wanderDestination = null, this.wanderPauseTime = 0)
            }
        },
        updateDropEntrance: function() {
            if (this.dropToDestination) {
                null ==
                    this.dropVector && (this.dropVector = { x: 0, y: 0 }, this.dropVector.x = this.dropToDestination.x - this.pos.x, this.dropVector.y = this.dropToDestination.y - this.pos.y, this.dropVector.l = Math.sqrt(this.dropVector.x * this.dropVector.x + this.dropVector.y * this.dropVector.y), 0 < this.dropVector.l && (this.dropVector.x /= this.dropVector.l, this.dropVector.y /= this.dropVector.l), this.dropVector.p = 0, this.dropVector.vel = 0);
                this.dropVector.vel += this.dropWeight * ig.system.tick;
                var a = this.dropVector.vel;
                this.dropVector.p += a;
                this.dropVector.p >=
                    this.dropVector.l ? (this.pos.x = this.dropToDestination.x, this.pos.y = this.dropToDestination.y, this.dropVector = this.dropToDestination = null, this.setStateId(this.states.wander), this.control.startScreenShake(this.dropShake), this.control.screenshakeDuration = this.dropShakeDuration, this.control.monsterLanded(this)) : (this.pos.x += this.dropVector.x * a, this.pos.y += this.dropVector.y * a)
            } else this.dropVector = null, this.setStateId(this.states.wander), this.control.startScreenShake(this.dropShake), this.control.screenshakeDuration =
                this.dropShakeDuration
        },
        updateAttack: function() {
            var a = this.control.hero;
            if (!a.stateId == a.states.dead && !a.stateId == a.states.dying) this.attackTime = this.attackVector = null, this.setStateId(this.states.wander);
            else {
                null == this.attackVector && (this.attackVector = { x: 0, y: 0 }, this.attackVector.x = a.pos.x - this.pos.x, this.attackVector.y = a.pos.y - this.pos.y, this.attackVector.l = Math.sqrt(this.attackVector.x * this.attackVector.x + this.attackVector.y * this.attackVector.y), 0 < this.attackVector.l && (this.attackVector.x /= this.attackVector.l,
                    this.attackVector.y /= this.attackVector.l), this.attackPos = { x: this.pos.x, y: this.pos.y }, this.attackDamageDone = !1);
                var b = !1;
                null == this.attackTime && (this.attackTime = new ig.Timer);
                var c = this.attackTime.delta(),
                    d = 0;
                0 < this.attackDuration && 0 <= c && (d = c / this.attackDuration, b = !0);
                c > this.attackDuration && (this.attackTime = new ig.Timer(this.attackRate - (c - this.attackDuration)), this.pos.x = this.attackPos.x, this.pos.y = this.attackPos.y, this.attackDamageDone = b = !1, this.attackOnce && (this.attackTime = this.attackVector = null,
                    this.wanderDisabled = !0, this.setStateId(this.states.idle)));
                if (b) {
                    var e = 20 * this.attackVector.x,
                        b = 20 * this.attackVector.y,
                        c = d / 0.5;
                    0.5 < d && (c = 1 - (d - 0.5) / 0.5);
                    e *= c;
                    b *= c;
                    0.5 >= d && (b += -5 * Math.sin(2 * d * Math.PI));
                    this.pos.x = this.attackPos.x + e;
                    this.pos.y = this.attackPos.y + b;
                    !this.attackDamageDone && 0.5 <= d && (this.attackDamageDone = !0, a.attackedByMonster(this))
                } else this.updateBounce()
            }
        },
        updateHit: function() {
            1 <= this.hitAnim.loopCount && (this.idleAnim.time = 0, this.updateAnim(this.idleAnim), this.prevStateId == this.states.wander ?
                (this.setStateId(this.states.wander), this.wanderDestination = this.wanderVector = this.wanderTime = null, this.wanderPauseTime = -1) : this.prevStateId == this.states.moveAttack ? this.setStateId(this.states.moveAttack) : this.prevStateId == this.states.move ? this.setStateId(this.states.move) : this.prevStateId == this.states.attack ? (this.setStateId(this.states.attack), this.attackVector = null, this.attackTime = new ig.Timer(this.attackRate)) : this.stateId = this.states.idle)
        },
        updateHitEffect: function() {
            0 > this.hitEffectTime || (this.hitEffectTime +=
                ig.system.tick, this.hitEffectTime >= this.hitEffectDuration ? (this.hitEffectTime %= this.hitEffectDuration, this.hitEffectTime = -1, this.hitEffectAlpha = 1) : this.hitEffectAlpha = 1 - this.hitEffectTime / this.hitEffectDuration)
        },
        setIdleMode: function(a) {
            if (!(0 > a) && !(a >= this.idleAnimSheets.length)) {
                this.idleMode = a;
                a = this.idleAnimSheets[this.idleMode];
                for (var b = Math.floor(a.image.width / a.width), c = [], d = 0; d < b; d++) c.push(d);
                this.idleAnim = new ig.Animation(a, this.idleAnimFramerate, c, !1);
                this.idleAnim.time = 0;
                this.updateAnim(this.idleAnim)
            }
        },
        setHitMode: function(a) {
            if (!(0 > a) && !(a >= this.hitAnimSheets.length)) {
                this.hitMode = a;
                a = this.hitAnimSheets[this.hitMode];
                for (var b = Math.floor(a.image.width / a.width), c = [], d = 0; d < b; d++) c.push(d);
                this.hitAnim = new ig.Animation(a, this.hitAnimFramerate, c, !0);
                this.hitAnim.time = 0;
                this.updateAnim(this.hitAnim)
            }
        },
        takeDamage: function(a) {
            this.stateId == this.states.dying || this.stateId == this.states.dead || (this.health.add(-a), 0 >= this.health.actualValue && (this.die(), this.setHitMode(2)), 0.5 > Math.random() ? this.setHitMode(1) :
                this.setHitMode(0))
        },
        moveTo: function(a) { a && (this.moveToDestination = {}, this.moveToDestination.x = a.x, this.moveToDestination.y = a.y, this.moveVector = null, this.setStateId(this.states.move)) },
        dropTo: function(a) { a && (this.dropToDestination = {}, this.dropToDestination.x = a.x, this.dropToDestination.y = a.y, this.dropVector = null, this.pos.x = a.x, this.pos.y = -200, this.setStateId(this.states.dropEntrance)) },
        hit: function() {
            this.stateId != this.states.dead && (this.stateId == this.states.attack && this.attackPos && (this.pos.x = this.attackPos.x,
                this.pos.y = this.attackPos.y), this.stateId != this.states.dying && this.stateId != this.states.dropEntrance && this.setStateId(this.states.hit), this.hitAnim.time = 0, this.updateAnim(this.hitAnim), this.hitEffectTime = 0)
        },
        idle: function() { this.stateId == this.states.dying || this.stateId == this.states.dead || (this.setStateId(this.states.idle), this.idleAnim.time = 0, this.updateAnim(this.idleAnim)) },
        die: function() {
            this.stateId == this.states.dying || this.stateId == this.states.dead || (this.setStateId(this.states.dying), this.dyingTime =
                0)
        },
        onDeathSpawn: function() { this.control.spawnPickup(this.pos.x, this.pos.y, this.forceDropId) },
        generateWanderDestination: function() {
            var a = { x: 0, y: 0 },
                b = this.pos.x - this.wanderRange,
                c = this.pos.x + this.wanderRange;
            b < this.wanderRect.x && (b = this.wanderRect.x);
            c > this.wanderRect.x + this.wanderRect.w && (c = this.wanderRect.x + this.wanderRect.w);
            a.x = b + Math.random() * (c - b);
            a.y = this.pos.y;
            0 < this.wanderRect.h && (b = this.pos.y - this.wanderRange, c = this.pos.y + this.wanderRange, c > this.wanderRect.y + this.wanderRect.h && (c = this.wanderRect.y +
                this.wanderRect.h), a.y = b + Math.random() * (c - b));
            return a
        },
        setWanderDestination: function(a) { this.wanderDestination = a },
        setStateId: function(a) { if (!(a != this.states.dying && a != this.states.dead) || !(this.stateId == this.states.dying || this.stateId == this.states.dead)) a != this.prevStateId && (this.prevStateId = this.stateId), this.stateId = a },
        aabbCheck: function(a, b) { return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1 },
        bitwiseRound: function(a) { return 0.5 + a << 0 }
    })
});
ig.baked = !0;
ig.module("game.classes.monsters.monster0").requires("game.classes.monster").defines(function() {
    Monster0 = Monster.extend({
        typeId: 0,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        level: 1,
        health: null,
        maxHealth: 8,
        damage: 1.2,
        hitMode: 0,
        idleMode: 0,
        stateId: 0,
        idleAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_idle1_10x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_idle2_10x1.png", 92, 109)],
        hitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_hit1_10x1.png",
            92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_hit2_10x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_hit3_5x1.png", 92, 109)],
        highlightHitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_hit1_10x1.png#ff0000^screen", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_hit2_10x1.png#ff0000^screen", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster0/monster0_hit3_5x1.png#ff0000^screen",
            92, 109)],
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bounceAmount: 2,
        bounceDuration: 0.5,
        init: function(a) {
            this.parent(a);
            this.maxHealth = _STRINGS.UnitSpecs.monster_start_health;
            this.damage = _STRINGS.UnitSpecs.monster_start_damage;
            this.control.hero && (a = this.control.hero.level, this.maxHealth += this.maxHealth * a * _STRINGS.UnitSpecs.monster_health_rate, this.damage += this.damage * a * _STRINGS.UnitSpecs.monster_damage_rate, this.moveSpeed += this.moveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate, this.attackmoveSpeed +=
                this.attackmoveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate, this.wanderMoveSpeed += this.wanderMoveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate, this.attackRate /= 1 + a * _STRINGS.UnitSpecs.monster_attack_speed_mult_rate);
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth)
        }
    })
});
ig.baked = !0;
ig.module("game.classes.monsters.monster1").requires("game.classes.monster").defines(function() {
    Monster1 = Monster.extend({
        typeId: 1,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        level: 1,
        health: null,
        maxHealth: 10,
        damage: 1,
        hitMode: 0,
        idleMode: 0,
        stateId: 0,
        idleAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster1/monster1_idle1_9x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster1/monster1_idle2_10x1.png", 92, 109)],
        hitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster1/monster1_hit1_5x1.png",
            92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster1/monster1_hit2_6x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster1/monster1_hit3_6x1.png", 92, 109)],
        highlightHitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster1/monster1_hit1_5x1.png#ff0000^screen", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster1/monster1_hit2_6x1.png#ff0000^screen", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster1/monster1_hit3_6x1.png#ff0000^screen",
            92, 109)],
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bounceAmount: 2,
        bounceDuration: 0.5,
        init: function(a) {
            this.parent(a);
            this.maxHealth = _STRINGS.UnitSpecs.monster_start_health;
            this.damage = _STRINGS.UnitSpecs.monster_start_damage;
            this.control.hero && (a = this.control.hero.level, this.maxHealth += this.maxHealth * a * _STRINGS.UnitSpecs.monster_health_rate, this.damage += this.damage * a * _STRINGS.UnitSpecs.monster_damage_rate, this.moveSpeed += this.moveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate, this.attackmoveSpeed +=
                this.attackmoveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate, this.wanderMoveSpeed += this.wanderMoveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate, this.attackRate /= 1 + a * _STRINGS.UnitSpecs.monster_attack_speed_mult_rate);
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth)
        }
    })
});
ig.baked = !0;
ig.module("game.classes.monsters.monster2").requires("game.classes.monster").defines(function() {
    Monster2 = Monster.extend({
        typeId: 2,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        level: 1,
        health: null,
        maxHealth: 10,
        damage: 1,
        hitMode: 0,
        idleMode: 0,
        stateId: 0,
        idleAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster2/monster2_idle1_10x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster2/monster2_idle2_10x1.png", 92, 109)],
        hitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster2/monster2_hit1_4x1.png",
            92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster2/monster2_hit2_7x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster2/monster2_hit3_5x1.png", 92, 109)],
        highlightHitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster2/monster2_hit1_4x1.png#ff0000^screen", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster2/monster2_hit2_7x1.png#ff0000^screen", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster2/monster2_hit3_5x1.png#ff0000^screen",
            92, 109)],
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bottomOffset: 32,
        bounceAmount: 1,
        bounceDuration: 0.5,
        wanderRect: { x: 50, y: 50, w: 380, h: 0 },
        init: function(a) {
            this.parent(a);
            this.maxHealth = _STRINGS.UnitSpecs.monster_start_health;
            this.damage = _STRINGS.UnitSpecs.monster_start_damage;
            this.control.hero && (a = this.control.hero.level, this.maxHealth += this.maxHealth * a * _STRINGS.UnitSpecs.monster_health_rate, this.damage += this.damage * a * _STRINGS.UnitSpecs.monster_damage_rate, this.moveSpeed += this.moveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate,
                this.attackmoveSpeed += this.attackmoveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate, this.wanderMoveSpeed += this.wanderMoveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate, this.attackRate /= 1 + a * _STRINGS.UnitSpecs.monster_attack_speed_mult_rate);
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth)
        }
    })
});
ig.baked = !0;
ig.module("game.classes.monsters.monster3").requires("game.classes.monster").defines(function() {
    Monster3 = Monster.extend({
        typeId: 3,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        level: 1,
        health: null,
        maxHealth: 10,
        damage: 1,
        hitMode: 0,
        idleMode: 0,
        stateId: 0,
        idleAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster3/monster3_idle1_9x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster3/monster3_idle2_8x1.png", 92, 109)],
        hitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster3/monster3_hit1_6x1.png",
            92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster3/monster3_hit2_9x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster3/monster3_hit3_6x1.png", 92, 109)],
        highlightHitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster3/monster3_hit1_6x1.png#ff0000^screen", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster3/monster3_hit2_9x1.png#ff0000^screen", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster3/monster3_hit3_6x1.png#ff0000^screen",
            92, 109)],
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bottomOffset: 32,
        bounceAmount: 1,
        bounceDuration: 0.5,
        wanderRect: { x: 50, y: 50, w: 380, h: 0 },
        init: function(a) {
            this.parent(a);
            this.maxHealth = _STRINGS.UnitSpecs.monster_start_health;
            this.damage = _STRINGS.UnitSpecs.monster_start_damage;
            this.control.hero && (a = this.control.hero.level, this.maxHealth += this.maxHealth * a * _STRINGS.UnitSpecs.monster_health_rate, this.damage += this.damage * a * _STRINGS.UnitSpecs.monster_damage_rate, this.moveSpeed += this.moveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate,
                this.attackmoveSpeed += this.attackmoveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate, this.wanderMoveSpeed += this.wanderMoveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate, this.attackRate /= 1 + a * _STRINGS.UnitSpecs.monster_attack_speed_mult_rate);
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth)
        }
    })
});
ig.baked = !0;
ig.module("game.classes.monsters.monster4").requires("game.classes.monster").defines(function() {
    Monster4 = Monster.extend({
        typeId: 4,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        level: 1,
        health: null,
        maxHealth: 8,
        damage: 1.2,
        hitMode: 0,
        idleMode: 0,
        stateId: 0,
        idleAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster4/monster4_idle1_9x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster4/monster4_idle2_9x1.png", 92, 109)],
        hitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster4/monster4_hit1_9x1.png",
            92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster4/monster4_hit2_9x1.png", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster4/monster4_hit3_13x1.png", 92, 109)],
        highlightHitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster4/monster4_hit1_9x1.png#ff0000^screen", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster4/monster4_hit2_9x1.png#ff0000^screen", 92, 109), new ig.AnimationSheet("media/game/graphics/game/sprites/monster/monster4/monster4_hit3_13x1.png#ff0000^screen",
            92, 109)],
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bounceAmount: 1,
        bounceDuration: 0.5,
        wanderRect: { x: 50, y: 50, w: 380, h: 0 },
        init: function(a) {
            this.parent(a);
            this.maxHealth = _STRINGS.UnitSpecs.monster_start_health;
            this.damage = _STRINGS.UnitSpecs.monster_start_damage;
            this.control.hero && (a = this.control.hero.level, this.maxHealth += this.maxHealth * a * _STRINGS.UnitSpecs.monster_health_rate, this.damage += this.damage * a * _STRINGS.UnitSpecs.monster_damage_rate, this.moveSpeed += this.moveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate,
                this.attackmoveSpeed += this.attackmoveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate, this.wanderMoveSpeed += this.wanderMoveSpeed * a * _STRINGS.UnitSpecs.monster_move_speed_mult_rate, this.attackRate /= 1 + a * _STRINGS.UnitSpecs.monster_attack_speed_mult_rate);
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth)
        }
    })
});
ig.baked = !0;
ig.module("game.classes.boss").requires("game.classes.monster").defines(function() {
    Boss = Monster.extend({
        typeId: 0,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        isBoss: !0,
        level: 1,
        health: null,
        maxHealth: 100,
        damage: 100,
        attackTime: 0,
        attackDuration: 30,
        hitMode: 0,
        idleMode: 0,
        dropWeight: 100,
        stateId: 0,
        idleAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_idle1_4x2.png", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_idle2_5x2.png", 318, 332)],
        hitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_hit1_5x2.png",
            318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_hit2_3x2.png", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_hit3_4x2.png", 318, 332)],
        highlightHitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_hit1_5x2.png#ff0000^screen", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_hit2_3x2.png#ff0000^screen", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_hit3_4x2.png#ff0000^screen",
            318, 332)],
        idleAnimFramerate: 0.2,
        hitAnimFramerate: 0.1,
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bottomOffset: 12,
        vector: { x: 0, y: 0 },
        bounceOffset: { x: 0, y: 0 },
        bounceAmount: 0,
        bounceTime: 0,
        bounceDuration: 1,
        dyingTime: -1,
        dyingDuration: 0.4,
        dyingAlpha: 1,
        hitEffectTime: -1,
        hitEffectDuration: 0.2,
        hitEffectAlpha: 1,
        hitEffectScale: 1,
        hitRect: { x: 0, y: 0, w: 0, h: 0 },
        healthBarOffset: { x: 0, y: 0 },
        healthBarWidth: 150,
        healthBarHeight: 6,
        wanderRect: { x: 50, y: 50, w: 380, h: 0 },
        timerDisabled: !1,
        init: function(a) {
            this.parent(a);
            this.setStateId(this.states.idle)
        },
        setIdleMode: function(a) {
            if (!(0 > a) && !(a >= this.idleAnimSheets.length)) {
                this.idleMode = a;
                a = this.idleAnimSheets[this.idleMode];
                for (var b = Math.floor(a.image.width / a.width), c = [], d = 0; d < b; d++) c.push(d);
                for (d = b - 2; 0 < d; d--) c.push(d);
                this.idleAnim = new ig.Animation(a, this.idleAnimFramerate, c, !1);
                this.idleAnim.time = 0;
                this.updateAnim(this.idleAnim)
            }
        },
        update: function() {
            this.parent();
            this.updateBossAttack()
        },
        updateBossAttack: function() {
            if (!(this.stateId == this.states.dying || this.stateId == this.states.dead || this.stateId ==
                    this.states.dropEntrance) && !this.timerDisabled && 0 <= this.attackTime) this.attackTime += ig.system.tick, this.attackTime > this.attackDuration && (this.attackTime = -1, this.attackDisabled || this.control.bossAttack())
        },
        drawAttackBar: function() {
            if (this.attackDuration && !(0 > this.attackTime)) {
                var a = this.pos.x + this.bounceOffset.x - this.healthBarWidth / 2 - 3,
                    b = this.pos.y + this.bounceOffset.y + this.imageOffset.y - this.healthBarHeight + this.healthBarOffset.y;
                this.control && (a += this.control.screenshakeOffset.x, b += this.control.screenshakeOffset.y);
                var b = b + (this.healthBarHeight + 1),
                    c = ig.system.context,
                    d = this.healthBarWidth,
                    e = this.healthBarHeight;
                c.fillStyle = "rgba(0,0,0,0.4)";
                c.fillRect(a, b, d, e);
                var f = this.attackTime / this.attackDuration;
                0 > f && (f = 0);
                1 < f && (f = 1);
                f = 1 - f;
                c.fillStyle = "rgba(255,255,255,0.75)";
                c.fillRect(a, b, d * f, e);
                b += e / 4;
                c.fillStyle = "rgba(255,255,255,1)";
                c.fillRect(a, b, d * f, e / 2)
            }
        },
        updateWander: function() { this.setStateId(this.states.idle) },
        onDeathSpawn: function() { this.control.spawnBossPickup(this.pos.x, this.pos.y) }
    })
});
ig.baked = !0;
ig.module("game.classes.bosses.boss0").requires("game.classes.boss").defines(function() {
    Boss0 = Boss.extend({
        typeId: 0,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        level: 1,
        health: null,
        maxHealth: 100,
        damage: 100,
        attackTime: 0,
        attackDuration: 30,
        hitMode: 0,
        idleMode: 0,
        stateId: 0,
        idleAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_idle1_4x2.png", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_idle2_5x2.png", 318, 332)],
        hitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_hit1_5x2.png",
            318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_hit2_3x2.png", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_hit3_4x2.png", 318, 332)],
        highlightHitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_hit1_5x2.png#ff0000^screen", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_hit2_3x2.png#ff0000^screen", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss0/boss0_hit3_4x2.png#ff0000^screen",
            318, 332)],
        idleAnimFramerate: 0.2,
        hitAnimFramerate: 0.05,
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bottomOffset: 12,
        bounceAmount: 0,
        bounceDuration: 1,
        hitRect: { x: 0, y: 0, w: 0, h: 0 },
        healthBarOffset: { x: 0, y: 0 },
        healthBarWidth: 200,
        init: function(a) {
            this.parent(a);
            this.maxHealth = _STRINGS.UnitSpecs.boss_start_health;
            this.attackDuration = _STRINGS.UnitSpecs.boss_start_attackduration;
            this.control.hero && (a = this.control.hero.level, this.maxHealth += this.maxHealth * a * _STRINGS.UnitSpecs.boss_health_rate, this.attackDuration += this.attackDuration *
                a * _STRINGS.UnitSpecs.boss_attackduration_rate);
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth)
        },
        setIdleMode: function(a) {
            if (!(0 > a) && !(a >= this.idleAnimSheets.length)) {
                this.idleMode = a;
                a = this.idleAnimSheets[this.idleMode];
                for (var b = Math.floor(a.image.width / a.width), c = [], d = 0; d < b; d++) c.push(d);
                for (d = b - 2; 0 < d; d--) c.push(d);
                this.idleAnim = new ig.Animation(a, this.idleAnimFramerate, c, !1);
                this.idleAnim.time = 0;
                this.updateAnim(this.idleAnim)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.classes.bosses.boss1").requires("game.classes.boss").defines(function() {
    Boss1 = Boss.extend({
        typeId: 1,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        level: 1,
        health: null,
        maxHealth: 100,
        damage: 100,
        attackTime: 0,
        attackDuration: 30,
        hitMode: 0,
        idleMode: 0,
        stateId: 0,
        idleAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss1/boss1_idle1_5x2.png", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss1/boss1_idle2_5x2.png", 318, 332)],
        hitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss1/boss1_hit1_4x2.png",
            318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss1/boss1_hit2_3x2.png", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss1/boss1_hit3_4x2.png", 318, 332)],
        highlightHitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss1/boss1_hit1_4x2.png#ff0000^screen", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss1/boss1_hit2_3x2.png#ff0000^screen", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss1/boss1_hit3_4x2.png#ff0000^screen",
            318, 332)],
        idleAnimFramerate: 0.2,
        hitAnimFramerate: 0.05,
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bottomOffset: 22,
        bounceAmount: 0,
        bounceDuration: 1,
        hitRect: { x: 0, y: 0, w: 0, h: 0 },
        healthBarOffset: { x: 0, y: 10 },
        healthBarWidth: 200,
        init: function(a) {
            this.parent(a);
            this.maxHealth = _STRINGS.UnitSpecs.boss_start_health;
            this.attackDuration = _STRINGS.UnitSpecs.boss_start_attackduration;
            this.control.hero && (a = this.control.hero.level, this.maxHealth += this.maxHealth * a * _STRINGS.UnitSpecs.boss_health_rate, this.attackDuration += this.attackDuration *
                a * _STRINGS.UnitSpecs.boss_attackduration_rate);
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth)
        },
        setIdleMode: function(a) {
            if (!(0 > a) && !(a >= this.idleAnimSheets.length)) {
                this.idleMode = a;
                a = this.idleAnimSheets[this.idleMode];
                for (var b = Math.floor(a.image.width / a.width), c = [], d = 0; d < b; d++) c.push(d);
                for (d = b - 2; 0 < d; d--) c.push(d);
                this.idleAnim = new ig.Animation(a, this.idleAnimFramerate, c, !1);
                this.idleAnim.time = 0;
                this.updateAnim(this.idleAnim)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.classes.bosses.boss2").requires("game.classes.boss").defines(function() {
    Boss2 = Boss.extend({
        typeId: 2,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        level: 1,
        health: null,
        maxHealth: 100,
        damage: 100,
        attackTime: 0,
        attackDuration: 30,
        hitMode: 0,
        idleMode: 0,
        stateId: 0,
        idleAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss2/boss2_idle1_4x2.png", 245, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss2/boss2_idle2_4x2.png", 245, 332)],
        hitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss2/boss2_hit1_4x2.png",
            245, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss2/boss2_hit2_4x2.png", 245, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss2/boss2_hit3_4x2.png", 245, 332)],
        highlightHitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss2/boss2_hit1_4x2.png#ff0000^screen", 245, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss2/boss2_hit2_4x2.png#ff0000^screen", 245, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss2/boss2_hit3_4x2.png#ff0000^screen",
            245, 332)],
        idleAnimFramerate: 0.2,
        hitAnimFramerate: 0.05,
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bottomOffset: 0,
        bounceOffset: { x: 0, y: 0 },
        bounceDuration: 1,
        hitRect: { x: 0, y: 0, w: 0, h: 0 },
        healthBarOffset: { x: 0, y: 0 },
        healthBarWidth: 150,
        wanderRect: { x: 50, y: 50, w: 380, h: 306 },
        init: function(a) {
            this.parent(a);
            this.maxHealth = _STRINGS.UnitSpecs.boss_start_health;
            this.attackDuration = _STRINGS.UnitSpecs.boss_start_attackduration;
            this.control.hero && (a = this.control.hero.level, this.maxHealth += this.maxHealth * a * _STRINGS.UnitSpecs.boss_health_rate,
                this.attackDuration += this.attackDuration * a * _STRINGS.UnitSpecs.boss_attackduration_rate);
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth)
        },
        setIdleMode: function(a) {
            if (!(0 > a) && !(a >= this.idleAnimSheets.length)) {
                this.idleMode = a;
                a = this.idleAnimSheets[this.idleMode];
                for (var b = Math.floor(a.image.width / a.width), c = [], d = 0; d < b; d++) c.push(d);
                for (d = b - 2; 0 < d; d--) c.push(d);
                this.idleAnim = new ig.Animation(a, this.idleAnimFramerate, c, !1);
                this.idleAnim.time = 0;
                this.updateAnim(this.idleAnim)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.classes.bosses.boss3").requires("game.classes.boss").defines(function() {
    Boss3 = Boss.extend({
        typeId: 3,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        level: 1,
        health: null,
        maxHealth: 100,
        damage: 100,
        attackTime: 0,
        attackDuration: 30,
        hitMode: 0,
        idleMode: 0,
        stateId: 0,
        idleAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss3/boss3_idle1_3x2.png", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss3/boss3_idle2_5x2.png", 318, 332)],
        hitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss3/boss3_hit1_4x2.png", 318,
            332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss3/boss3_hit2_4x2.png", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss3/boss3_hit3_3x2.png", 318, 332)],
        highlightHitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss3/boss3_hit1_4x2.png#ff0000^screen", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss3/boss3_hit2_4x2.png#ff0000^screen", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss3/boss3_hit3_3x2.png#ff0000^screen",
            318, 332)],
        idleAnimFramerate: 0.2,
        hitAnimFramerate: 0.05,
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bottomOffset: 32,
        bounceAmount: 0,
        bounceDuration: 1,
        hitRect: { x: 0, y: 0, w: 0, h: 0 },
        healthBarOffset: { x: 0, y: 50 },
        healthBarWidth: 200,
        init: function(a) {
            this.parent(a);
            this.maxHealth = _STRINGS.UnitSpecs.boss_start_health;
            this.attackDuration = _STRINGS.UnitSpecs.boss_start_attackduration;
            this.control.hero && (a = this.control.hero.level, this.maxHealth += this.maxHealth * a * _STRINGS.UnitSpecs.boss_health_rate, this.attackDuration += this.attackDuration *
                a * _STRINGS.UnitSpecs.boss_attackduration_rate);
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth)
        },
        setIdleMode: function(a) {
            if (!(0 > a) && !(a >= this.idleAnimSheets.length)) {
                this.idleMode = a;
                a = this.idleAnimSheets[this.idleMode];
                for (var b = Math.floor(a.image.width / a.width), c = [], d = 0; d < b; d++) c.push(d);
                for (d = b - 2; 0 < d; d--) c.push(d);
                this.idleAnim = new ig.Animation(a, this.idleAnimFramerate, c, !1);
                this.idleAnim.time = 0;
                this.updateAnim(this.idleAnim)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.classes.bosses.boss4").requires("game.classes.boss").defines(function() {
    Boss4 = Boss.extend({
        typeId: 4,
        color: { r: 255, g: 255, b: 255 },
        name: "",
        level: 1,
        health: null,
        maxHealth: 100,
        damage: 100,
        attackTime: 0,
        attackDuration: 30,
        hitMode: 0,
        idleMode: 0,
        stateId: 0,
        idleAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss4/boss4_idle1_5x2.png", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss4/boss4_idle2_5x2.png", 318, 332)],
        hitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss4/boss4_hit1_3x2.png",
            318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss4/boss4_hit2_5x2.png", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss4/boss4_hit3_4x2.png", 318, 332)],
        highlightHitAnimSheets: [new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss4/boss4_hit1_3x2.png#ff0000^screen", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss4/boss4_hit2_5x2.png#ff0000^screen", 318, 332), new ig.AnimationSheet("media/game/graphics/game/sprites/boss/boss4/boss4_hit3_4x2.png#ff0000^screen",
            318, 332)],
        idleAnimFramerate: 0.2,
        hitAnimFramerate: 0.05,
        pos: { x: 0, y: 0 },
        imageOffset: { x: 0, y: 0 },
        bottomOffset: 42,
        bounceOffset: { x: 0, y: 0 },
        bounceDuration: 1,
        hitRect: { x: 0, y: 0, w: 0, h: 0 },
        healthBarOffset: { x: 0, y: 40 },
        healthBarWidth: 200,
        init: function(a) {
            this.parent(a);
            this.maxHealth = _STRINGS.UnitSpecs.boss_start_health;
            this.attackDuration = _STRINGS.UnitSpecs.boss_start_attackduration;
            this.control.hero && (a = this.control.hero.level, this.maxHealth += this.maxHealth * a * _STRINGS.UnitSpecs.boss_health_rate, this.attackDuration +=
                this.attackDuration * a * _STRINGS.UnitSpecs.boss_attackduration_rate);
            this.health.setMax(this.maxHealth);
            this.health.setValue(this.maxHealth)
        },
        setIdleMode: function(a) {
            if (!(0 > a) && !(a >= this.idleAnimSheets.length)) {
                this.idleMode = a;
                a = this.idleAnimSheets[this.idleMode];
                for (var b = Math.floor(a.image.width / a.width), c = [], d = 0; d < b; d++) c.push(d);
                for (d = b - 2; 0 < d; d--) c.push(d);
                this.idleAnim = new ig.Animation(a, this.idleAnimFramerate, c, !1);
                this.idleAnim.time = 0;
                this.updateAnim(this.idleAnim)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-control").requires("impact.entity", "plugins.fade-transition", "plugins.number-anim", "game.classes.ui", "game.classes.tutorial", "game.classes.gameover-panel", "game.classes.shop-panel", "game.classes.options-panel", "game.classes.ability", "game.classes.character", "game.classes.pickup", "game.classes.hp-pickup", "game.classes.sp-pickup", "game.classes.power-pickup", "game.classes.slash", "game.classes.floating-text", "game.classes.monsters.monster0", "game.classes.monsters.monster1",
    "game.classes.monsters.monster2", "game.classes.monsters.monster3", "game.classes.monsters.monster4", "game.classes.bosses.boss0", "game.classes.bosses.boss1", "game.classes.bosses.boss2", "game.classes.bosses.boss3", "game.classes.bosses.boss4").defines(function() {
    EntityGameControl = ig.Entity.extend({
        zIndex: 100,
        bgId: 0,
        bgImages: [new ig.Image("media/game/graphics/game/backgrounds/forest.png"), new ig.Image("media/game/graphics/game/backgrounds/snow.png"), new ig.Image("media/game/graphics/game/backgrounds/lava.png")],
        heroIdleFrames: [],
        bgImage: null,
        bgOffset: { x: 0, y: 0 },
        bgScale: 1,
        gameTime: 0,
        gameStarted: !1,
        gameOver: !1,
        gamePaused: !1,
        maxGold: 99999,
        minGold: 0,
        startGold: 0,
        gameGold: null,
        tutorialStartGold: 0,
        whiteoutFlag: !1,
        whiteoutTime: 0,
        whiteoutDuration: 0.8,
        whiteoutEndDelay: 2,
        whiteoutAlpha: 0,
        whiteoutClearFlag: !1,
        screenshakeFlag: !1,
        screenshakeOffset: { x: 0, y: 0 },
        screenshakeVector: { x: 0, y: 0 },
        screenshakeTime: 0,
        screenshakeDuration: 0.5,
        abilities: [],
        hero: null,
        monsters: [],
        boss: null,
        pickups: [],
        slashes: [],
        floatingTexts: [],
        groundLevel: 506,
        monsterSpawnQueue: [],
        lastBossType: null,
        waveCount: 0,
        waveTime: 0,
        waveNextTime: 0,
        waveMinTime: 5,
        waveMaxTime: 6,
        waveMaxMonsters: 15,
        waveBossInterval: 5,
        waveSize: 5,
        waveSizeRate: 0.2,
        tapTime: 0,
        tutorialMode: !1,
        tutorial: null,
        spawner: null,
        inputTrail: null,
        gameoverPanel: null,
        options: null,
        shop: null,
        ui: null,
        fadeTransition: null,
        bgFadeTransition: null,
        hasPlayedMonsterHitSfx: !1,
        hasPlayedMonsterDiedSfx: !1,
        hasPlayedMonsterLandedSfx: !1,
        hasPlayedPickupSfx: !1,
        hasPlayedHeroHitSfx: !1,
        init: function(a, b, c) {
            this.parent(a, b, c);
            ig.global.wm ||
                (this.waveMinTime = _STRINGS.UnitSpecs.wave_min_time, this.waveMaxTime = _STRINGS.UnitSpecs.wave_max_time, this.waveMaxMonsters = _STRINGS.UnitSpecs.wave_max_monsters, this.waveBossInterval = _STRINGS.UnitSpecs.wave_boss_interval, this.waveSize = _STRINGS.UnitSpecs.wave_size, this.waveSizeRate = _STRINGS.UnitSpecs.wave_size_rate, this.startGold = _STRINGS.UnitSpecs.hero_start_gold, this.tutorialStartGold = _STRINGS.UnitSpecs.tutorial_start_gold, this.setupAbilities(), this.bgImage = this.bgImages[0], this.gameGold = new ig.NumberAnim,
                    this.gameGold.setMin(0), this.gameGold.setMax(this.maxGold), this.gameGold.setValue(this.startGold))
        },
        ready: function() {
            ig.global.wm || (this.ui = new Ui(this), this.gameoverPanel = new GameoverPanel(this), this.gameoverPanel.ready(), this.options = new OptionsPanel(this), this.options.hasMainmenuButton = !0, this.options.ready(), this.shop = new ShopPanel(this), this.shop.ready(), this.spawnCharacter(), ig.game.doTutorialFlag ? (this.tutorialMode = !0, this.tutorial = new Tutorial(this), this.gameGold.setValue(this.tutorialStartGold)) :
                this.spawnMonsters(), ig.game.sortEntitiesDeferred(), this.fadeTransition = new ig.FadeTransition, this.fadeTransition.startFadeinTransition(), this.fadeTransition.transitionEndFunction = this.transitionEnded.bind(this), this.bgFadeTransition = new ig.FadeTransition)
        },
        draw: function() {
            var a = ig.system.context;
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            a.save();
            1 != this.bgScale && a.scale(this.bgScale, 1);
            this.bgImage.draw(this.bgOffset.x + this.screenshakeOffset.x,
                this.bgOffset.y + this.screenshakeOffset.y);
            a.restore();
            this.bgFadeTransition && this.bgFadeTransition.draw();
            this.drawHeroAndMonsters();
            this.tutorial && this.tutorial.drawBeforeEffects();
            this.drawSlashes();
            this.drawFloatingTexts();
            this.ui && this.ui.draw();
            this.gameoverPanel && this.gameoverPanel.draw();
            this.shop && this.shop.draw();
            this.tutorial && this.tutorial.draw();
            this.options && this.options.draw();
            this.fadeTransition && this.fadeTransition.draw()
        },
        update: function() {
            this.options && this.options.update();
            this.shop &&
                this.shop.update();
            this.gameoverPanel && this.gameoverPanel.update();
            this.ui && this.ui.update();
            this.fadeTransition && this.fadeTransition.update();
            this.bgFadeTransition && this.bgFadeTransition.update();
            this.hasPlayedHeroHitSfx = this.hasPlayedPickupSfx = this.hasPlayedMonsterLandedSfx = this.hasPlayedMonsterDiedSfx = this.hasPlayedMonsterHitSfx = !1;
            this.updateDisplayGold();
            ig.input.pressed("esc") && (this.options.hidden ? this.showOptions() : this.hideOptions());
            this.gamePaused || (ig.input.pressed("1") ? this.activateAbility(0) :
                ig.input.pressed("2") ? this.activateAbility(1) : ig.input.pressed("3") ? this.activateAbility(2) : ig.input.pressed("4") ? this.activateAbility(3) : ig.input.pressed("5") && this.activateAbility(4), this.updateWhiteout(), this.updateScreenShake(), this.tutorialMode ? this.tutorial && this.tutorial.update() : this.gameOver || (this.gameTime += ig.system.tick, this.updateAbilities(), this.updateMonsterSpawns(), this.updateHero(), this.updateMonsters(), this.updatePickups(), this.detectPlayerInput()))
        },
        togglePause: function() {
            this.gameOver ||
                (this.gamePaused ? this.unpause() : this.pause())
        },
        pause: function() { this.gamePaused || (this.gamePaused = !0) },
        unpause: function() { this.gamePaused && (this.gamePaused = !1) },
        startGame: function() { this.gameStarted || (this.gameStarted = !0) },
        endGame: function() { this.gameOver || (this.gameOver = !0, this.pause(), this.ui.optionsButton.disable(), this.ui.shopButton.disable(), this.showGameoverPanel()) },
        restartGame: function() {
            ig.input.clearPressed();
            this.fadeTransition.startFadeoutTransition();
            this.fadeTransition.transitionEndFunction =
                function() { ig.game.director.jumpTo(LevelGame) }
        },
        returnToMainMenu: function() {
            ig.input.clearPressed();
            this.fadeTransition.startFadeoutTransition();
            this.fadeTransition.transitionEndFunction = function() { ig.game.director.jumpTo(LevelHome) }
        },
        showOptions: function() { this.gameOver || (this.pause(), this.tutorial || this.shop.hidden || this.shop.hide(), this.options.show(), this.gameoverPanel.disable(), this.ui.optionsButton.disable(), this.ui.shopButton.disable()) },
        hideOptions: function() {
            this.options.hide();
            this.gameoverPanel.enable();
            this.gameOver || (this.ui.optionsButton.enable(), (!this.tutorial || this.tutorial.targetButton == this.ui.shopButton) && this.ui.shopButton.enable());
            this.unpause()
        },
        showShop: function() {
            (!this.tutorial || this.tutorial.targetButton != this.ui.shopButton) && this.pause();
            this.shop.show();
            this.ui.optionsButton.disable();
            this.ui.shopButton.disable()
        },
        hideShop: function() {
            this.shop.hide();
            this.ui.optionsButton.enable();
            (!this.tutorial || this.tutorial.targetButton == this.ui.shopButton) && this.ui.shopButton.enable();
            this.unpause()
        },
        transitionEnded: function() { this.tutorialMode && this.tutorial.start() },
        changeBackground: function() {
            this.bgFadeTransition.startFadeoutTransition();
            this.bgFadeTransition.transitionEndFunction = function() {
                this.bgId += 1;
                this.bgId >= this.bgImages.length && (this.bgId = 0);
                this.bgImage = this.bgImages[this.bgId];
                this.bgFadeTransition.startFadeinTransition();
                this.bgFadeTransition.transitionEndFunction = null
            }.bind(this)
        },
        addLevel: function() {
            this.hero.level += 1;
            2 < this.hero.level && 0 == (this.hero.level - 2) % 5 && this.changeBackground()
        },
        updateHero: function() { this.hero.update() },
        drawHeroAndMonsters: function() {
            this.boss && this.boss.drawShadow();
            for (var a = 0; a < this.pickups.length; a++) {
                var b = this.pickups[a];
                b.drawShadow()
            }
            for (a = 0; a < this.monsters.length; a++) b = this.monsters[a], b.drawShadow();
            this.boss && (this.boss.draw(), this.boss.drawHealthBar(), this.boss.drawAttackBar());
            this.hero.draw();
            this.hero.drawHealthBar();
            this.hero.drawEnergyBar();
            for (a = 0; a < this.monsters.length; a++) b = this.monsters[a], b.draw(), b.drawHealthBar();
            for (a = 0; a < this.pickups.length; a++) b =
                this.pickups[a], b.draw()
        },
        updateMonsters: function() { this.boss && this.boss.update(); for (var a = 0; a < this.monsters.length; a++) this.monsters[a].update() },
        updateMonsterSpawns: function() {
            if (0 == this.monsterSpawnQueue.length) {
                this.waveTime += ig.system.tick;
                var a = !1,
                    b = this.monsters.length;
                0 >= b ? a = !0 : b <= this.waveMaxMonsters && b <= 2 * this.waveSize && this.waveTime >= this.waveNextTime && (a = !0);
                this.tutorialMode && (a = !1);
                if (a) {
                    if (!this.boss || this.boss.stateId == this.boss.states.dead) this.waveCount += 1, this.addLevel(1);
                    this.waveTime =
                        0;
                    this.spawnMonsters();
                    if ((!this.boss || this.boss.stateId == this.boss.states.dead) && this.waveCount >= this.waveBossInterval) this.waveCount = 0, this.spawnBoss()
                }
            } else {
                for (var b = [], c = 0; c < this.monsterSpawnQueue.length; c++) a = this.monsterSpawnQueue[c], null == a.time || 0 >= a.time ? a.monster && this.monsters.push(a.monster) : (a.time -= ig.system.tick, b.push(a));
                this.monsterSpawnQueue = b;
                0 == this.monsterSpawnQueue.length && (this.waveTime = 0, this.waveNextTime = this.waveMinTime + (this.waveMaxTime - this.waveMinTime) * Math.random())
            }
        },
        updatePickups: function() { for (var a = 0; a < this.pickups.length; a++) this.pickups[a].update() },
        updateWhiteout: function() {
            if (this.whiteoutFlag) {
                if (this.gameOver || this.tutorialMode) this.whiteoutTime -= ig.system.tick;
                var a = this.gameTime - this.whiteoutTime,
                    b = this.whiteoutDuration;
                a > b + this.whiteoutEndDelay ? this.whiteoutFlag = !1 : a < b / 4 ? this.whiteoutAlpha = a / (b / 4) : a < 2 * b / 4 ? this.whiteoutAlpha = 1 : a < 3 * b / 4 ? (this.whiteoutClearFlag || (this.whiteoutClearFlag = !0), this.whiteoutAlpha = 1 - (a - 2 * b / 4) / (b / 4)) : a < b && (this.whiteoutAlpha =
                    0)
            }
        },
        startWhiteout: function() {
            this.whiteoutFlag = !0;
            this.whiteoutTime = this.gameTime
        },
        startScreenShake: function(a) {
            if (null == a || isNaN(a)) a = 1;
            0 != a && (this.screenshakeFlag = !0, this.screenshakeVector.x = -10 + 20 * Math.random(), this.screenshakeVector.y = 40, this.screenshakeVector.x *= a, this.screenshakeVector.y *= a, this.screenshakeTime = this.gameTime)
        },
        updateScreenShake: function() {
            if (this.screenshakeFlag) {
                if (this.gameOver || this.tutorialMode) this.screenshakeTime -= ig.system.tick;
                var a = this.gameTime - this.screenshakeTime,
                    b = this.screenshakeDuration;
                a > b ? (this.screenshakeOffset.x = 0, this.screenshakeOffset.y = 0, this.screenshakeFlag = !1) : (a /= b, this.screenshakeOffset.x += 3 * this.screenshakeVector.x * ig.system.tick, this.screenshakeOffset.y += 3 * this.screenshakeVector.y * ig.system.tick, this.screenshakeVector.x -= 0.2 * this.screenshakeOffset.x * a / ig.system.tick, this.screenshakeVector.y -= 0.2 * this.screenshakeOffset.y * a / ig.system.tick)
            }
        },
        addGameGold: function(a) { isNaN(a) || this.gameGold.add(a) },
        addHpPotion: function(a) {
            isNaN(a) || (this.abilities[0].count +=
                1)
        },
        addSpPotion: function(a) { isNaN(a) || (this.abilities[1].count += 1) },
        addPowerPotion: function(a) { isNaN(a) || (this.abilities[2].count += 1) },
        updateDisplayGold: function() { this.gameGold.update() },
        showGameoverPanel: function() { this.gameoverPanel.show() },
        setupAbilities: function() {
            var a = new Ability(0);
            a.buyCost = _STRINGS.UnitSpecs.hero_potion_health_goldcost;
            a.cooldownDuration = _STRINGS.UnitSpecs.hero_potion_health_cooldown;
            a.energyCost = -5;
            a.color = { r: 169, g: 8, b: 8 };
            this.abilities.push(a);
            a = new Ability(1);
            a.buyCost =
                _STRINGS.UnitSpecs.hero_potion_energy_goldcost;
            a.cooldownDuration = _STRINGS.UnitSpecs.hero_potion_energy_cooldown;
            a.energyCost = -5;
            a.color = { r: 105, g: 212, b: 255 };
            this.abilities.push(a);
            a = new Ability(2);
            a.buyCost = _STRINGS.UnitSpecs.hero_potion_power_goldcost;
            a.cooldownDuration = _STRINGS.UnitSpecs.hero_potion_power_cooldown;
            a.color = { r: 124, g: 64, b: 223 };
            this.abilities.push(a);
            a = new Ability(3);
            a.buyCost = _STRINGS.UnitSpecs.hero_upgrade_damage_goldcost;
            a.count = 1;
            a.cooldownDuration = _STRINGS.UnitSpecs.hero_megaslash_cooldown;
            a.energyCost = _STRINGS.UnitSpecs.hero_megaslash_cost;
            a.color = { r: 91, g: 104, b: 173 };
            this.abilities.push(a);
            a = new Ability(4);
            a.buyCost = _STRINGS.UnitSpecs.hero_upgrade_health_goldcost;
            a.count = 1;
            a.cooldownDuration = _STRINGS.UnitSpecs.hero_shieldsup_cooldown;
            a.energyCost = _STRINGS.UnitSpecs.hero_shieldsup_cost;
            a.color = { r: 161, g: 69, b: 23 };
            this.abilities.push(a)
        },
        updateAbilities: function() {
            for (var a = 0; a < this.abilities.length; a++) this.abilities[a].update(), this.abilities[a].available = !0;
            this.hero.health.actualValue >=
                this.hero.maxHealth && (this.abilities[0].available = !1);
            this.hero.energy.actualValue >= this.hero.maxEnergy && (this.abilities[1].available = !1);
            this.hero.energy.actualValue < this.abilities[3].energyCost && (this.abilities[3].available = !1);
            this.hero.energy.actualValue < this.abilities[4].energyCost && (this.abilities[4].available = !1)
        },
        upgradeAbility: function(a) {
            if (!(0 > a || a >= this.abilities.length))
                if (a = this.abilities[a], !(a.buyCost > this.gameGold.actualValue))
                    if (this.addGameGold(-a.buyCost), a.count += 1, 3 == a.id) {
                        var b =
                            _STRINGS.UnitSpecs.hero_upgrade_damage_goldcost,
                            c = Math.log(1 + a.count) / Math.log(2);
                        a.buyCost = Math.floor(b * a.count * c);
                        this.hero.upgradeDamage(_STRINGS.UnitSpecs.hero_upgrade_damage)
                    } else 4 == a.id && (b = _STRINGS.UnitSpecs.hero_upgrade_health_goldcost, c = Math.log(1 + a.count) / Math.log(2), a.buyCost = Math.floor(b * a.count * c), this.hero.upgradeHealth(_STRINGS.UnitSpecs.hero_upgrade_health))
        },
        activateAbility: function(a) {
            0 > a || a >= this.abilities.length || (a = this.abilities[a], a.onCooldown() || (0 == a.id || 1 == a.id || 2 == a.id ?
                (ig.soundHandler.sfxPlayer.play("potiondrink"), 0 < a.count && (0 == a.id ? this.hero.gainHealthPercentage(_STRINGS.UnitSpecs.hero_potion_health) && (ig.soundHandler.sfxPlayer.play("fillup"), a.count -= 1, a.activate()) : 1 == a.id ? this.hero.gainEnergyPercentage(_STRINGS.UnitSpecs.hero_potion_energy) && (ig.soundHandler.sfxPlayer.play("fillup"), a.count -= 1, a.activate()) : 2 == a.id && (this.hero.powerUp(), a.count -= 1, a.activate()))) : 3 == a.id ? this.hero.useEnergy(a.energyCost) && (ig.soundHandler.sfxPlayer.play("megaslash"), this.hero.megaSlash(),
                    a.activate()) : 4 == a.id && this.hero.useEnergy(a.energyCost) && (ig.soundHandler.sfxPlayer.play("shieldsup"), this.hero.shieldsUp(), a.activate())))
        },
        detectPlayerInput: function() {
            if (!this.gameOver)
                if (ig.input.state("click")) {
                    if (0 == this.tapTime) {
                        var a = this.getInputPos();
                        this.heroAttackPosition(a.x, a.y);
                        this.heroFacePosition(a.x, a.y)
                    }
                    this.tapTime += ig.system.tick;
                    0.33 < this.tapTime && (this.tapTime = 0)
                } else this.tapTime = 0
        },
        heroHitMonsters: function(a) { this.hero.attackMonsters(a) },
        heroHitBoss: function(a) { this.hero.attackBoss(a) },
        bossAttack: function() {
            this.hero.shieldTime = -1;
            this.hero.takeDamage(this.hero.maxHealth);
            this.hero.hit();
            this.startScreenShake();
            this.screenshakeDuration = 0.5;
            this.startWhiteout()
        },
        monsterLanded: function() { this.hasPlayedMonsterLandedSfx || (this.hasPlayedMonsterLandedSfx = !0, ig.soundHandler.sfxPlayer.play("drop")) },
        monsterHit: function() { this.hasPlayedMonsterHitSfx || (this.hasPlayedMonsterHitSfx = !0, ig.soundHandler.sfxPlayer.play("monsterhit")) },
        monsterDied: function(a) {
            this.hasPlayedMonsterDiedSfx || (this.hasPlayedMonsterDiedSfx = !0, a.isBoss ? ig.soundHandler.sfxPlayer.play("bossdied") : 0.5 > Math.random() ? ig.soundHandler.sfxPlayer.play("monsterdied1") : ig.soundHandler.sfxPlayer.play("monsterdied2"))
        },
        heroHit: function() { this.hasPlayedHeroHitSfx || (this.hasPlayedHeroHitSfx = !0, 0.5 > Math.random() ? ig.soundHandler.sfxPlayer.play("herohit1") : ig.soundHandler.sfxPlayer.play("herohit2")) },
        heroHitLethal: function() { this.hasPlayedHeroHitSfx || (this.hasPlayedHeroHitSfx = !0, ig.soundHandler.sfxPlayer.play("herodied")) },
        heroDied: function() { this.endGame() },
        pickupHit: function(a) { this.hasPlayedPickupSfx || (this.hasPlayedPickupSfx = !0, 0 == a.typeId ? ig.soundHandler.sfxPlayer.play("coinpickup") : ig.soundHandler.sfxPlayer.play("pickup")) },
        refreshMonsterList: function() {
            for (var a = [], b = 0; b < this.monsters.length; b++) {
                var c = this.monsters[b];
                c.stateId != c.states.dead && a.push(c)
            }
            this.monsters = a;
            this.boss && this.boss.stateId == this.boss.states.dead && (this.boss = null)
        },
        refreshPickupsList: function() {
            for (var a = [], b = 0; b < this.pickups.length; b++) {
                var c = this.pickups[b];
                c.stateId !=
                    c.states.dead && a.push(c)
            }
            this.pickups = a
        },
        makeMonster: function(a) {
            var b = null;
            switch (a) {
                case 0:
                    b = new Monster0(this);
                    break;
                case 1:
                    b = new Monster1(this);
                    break;
                case 2:
                    b = new Monster2(this);
                    break;
                case 3:
                    b = new Monster3(this);
                    break;
                case 4:
                    b = new Monster4(this)
            }
            return b
        },
        spawnCharacter: function() {
            this.hero = new Character(this, 0);
            this.hero.pos.x = 182;
            this.hero.pos.y = this.groundLevel
        },
        spawnMonsterFromTop: function() {
            var a = [0, 1],
                b = [2, 3, 4],
                c = !0;
            0.5 > Math.random() && (c = !1);
            var d = a.concat(b),
                d = d = null,
                e = 0,
                f = this.groundLevel,
                h = 0,
                j = this.groundLevel;
            if (c) { if (d = a, e = 100 + Math.random() * (ig.system.width - 200), h = 100 + Math.random() * (ig.system.width - 200), f = -100 - 300 * Math.random(), j = 100 + Math.random() * (this.groundLevel - 200), a = Math.floor(Math.random() * d.length), d = d[a], d = this.makeMonster(d)) d.setPos({ x: e, y: f }), d.moveTo({ x: h, y: j }), this.monsterSpawnQueue.push({ monster: d }) } else if (d = b, h = 100 + Math.random() * (ig.system.width - 200), j = this.groundLevel, a = Math.floor(Math.random() * d.length), d = d[a], d = this.makeMonster(d)) e = 1 + 2 * Math.random(), d.dropTo({
                x: h,
                y: j
            }), d.dropShake = 0.1, this.monsterSpawnQueue.push({ time: e, monster: d })
        },
        spawnMonsterFromLeft: function() {
            var a = [0, 1],
                b = [2, 3, 4],
                c = !0;
            0.5 > Math.random() && (c = !1);
            var d = a.concat(b),
                d = d = null,
                e = 0,
                f = this.groundLevel,
                h = 0,
                j = this.groundLevel,
                f = this.hero.pos.x,
                e = -100 - 300 * Math.random();
            c ? (d = a, h = 100 + Math.random() * (f - 200), f = -100 + Math.random() * (100 + (this.groundLevel - 200)), j = 100 + Math.random() * (this.groundLevel - 200)) : (d = b, h = 100 + Math.random() * (f - 200), j = f = this.groundLevel);
            a = Math.floor(Math.random() * d.length);
            d = d[a];
            if (d =
                this.makeMonster(d)) d.setPos({ x: e, y: f }), d.moveTo({ x: h, y: j }), this.monsterSpawnQueue.push({ monster: d })
        },
        spawnMonsterFromRight: function() {
            var a = [0, 1],
                b = [2, 3, 4],
                c = !0;
            0.5 > Math.random() && (c = !1);
            var d = a.concat(b),
                d = d = null,
                e = 0,
                f = this.groundLevel,
                h = 0,
                j = this.groundLevel,
                f = ig.system.width - this.hero.pos.x,
                e = ig.system.width + 100 + 300 * Math.random();
            c ? (d = a, h = ig.system.width - f + 100 + Math.random() * (f - 200), f = -100 + Math.random() * (100 + (this.groundLevel - 200)), j = 100 + Math.random() * (this.groundLevel - 200)) : (d = b, h = ig.system.width -
                f + 100 + Math.random() * (f - 200), j = f = this.groundLevel);
            a = Math.floor(Math.random() * d.length);
            d = d[a];
            if (d = this.makeMonster(d)) d.setPos({ x: e, y: f }), d.moveTo({ x: h, y: j }), this.monsterSpawnQueue.push({ monster: d })
        },
        spawnRandomMonster: function() {
            var a = [0, 1, 2],
                b = Math.floor(Math.random() * a.length),
                a = a[b];
            0 == a ? this.spawnMonsterFromTop() : 1 == a ? this.spawnMonsterFromLeft() : 2 == a && this.spawnMonsterFromRight()
        },
        spawnMonsters: function() { n = Math.floor(this.waveSize + this.hero.level * this.waveSizeRate); for (var a = 0; a < n; a++) this.spawnRandomMonster() },
        spawnBoss: function() {
            var a = 0;
            null != this.lastBossType && (a = this.lastBossType + 1, 5 <= a && (a = 0));
            this.lastBossType = a;
            var b = null;
            switch (a) {
                case 0:
                    b = new Boss0(this);
                    break;
                case 1:
                    b = new Boss1(this);
                    break;
                case 2:
                    b = new Boss2(this);
                    break;
                case 3:
                    b = new Boss3(this);
                    break;
                case 4:
                    b = new Boss4(this)
            }
            b && (this.boss = b, this.boss.dropTo({ x: 270, y: this.groundLevel }))
        },
        spawnPickup: function(a, b, c) {
            b > this.groundLevel && (b = this.groundLevel);
            var d = 0;
            if (null != c && !isNaN(c))
                if (0 <= c && 4 > c) d = c;
                else return;
            else {
                c = _STRINGS.UnitSpecs.monster_pickup_base_droprate;
                var d = _STRINGS.UnitSpecs.monster_pickup_gold_droprate,
                    e = Math.random();
                if (e < c) e = Math.random(), d = e < d ? 0 : 0.33 > Math.random() ? 1 : 0.67 < Math.random() ? 2 : 3;
                else return
            }
            if (0 == d) {
                var f = _STRINGS.UnitSpecs.monster_pickup_gold_amt;
                c = new Pickup(this);
                c.pos.x = a;
                c.pos.y = b;
                c.spawnVector.x = -80 + 160 * Math.random();
                c.spawnVector.y = -250 - 250 * Math.random();
                c.collectEndPos = {};
                c.collectEndPos.x = this.ui.goldRect.x - 21;
                c.collectEndPos.y = this.ui.goldRect.y;
                c.onCollect = function() { this.addGameGold(f) }.bind(this);
                this.pickups.push(c)
            } else 1 ==
                d ? (c = new HpPickup(this), c.pos.x = a, c.pos.y = b, c.spawnVector.x = -80 + 160 * Math.random(), c.spawnVector.y = -250 - 250 * Math.random(), c.collectEndPos = {}, c.collectEndPos.x = this.ui.abilityButtonList[0].pos.x, c.collectEndPos.y = this.ui.abilityButtonList[0].pos.y, c.onCollect = function() { this.addHpPotion(1) }.bind(this), this.pickups.push(c)) : 2 == d ? (c = new SpPickup(this), c.pos.x = a, c.pos.y = b, c.spawnVector.x = -80 + 160 * Math.random(), c.spawnVector.y = -250 - 250 * Math.random(), c.collectEndPos = {}, c.collectEndPos.x = this.ui.abilityButtonList[1].pos.x,
                    c.collectEndPos.y = this.ui.abilityButtonList[1].pos.y, c.onCollect = function() { this.addSpPotion(1) }.bind(this), this.pickups.push(c)) : 3 == d && (c = new PowerPickup(this), c.pos.x = a, c.pos.y = b, c.spawnVector.x = -80 + 160 * Math.random(), c.spawnVector.y = -250 - 250 * Math.random(), c.collectEndPos = {}, c.collectEndPos.x = this.ui.abilityButtonList[2].pos.x, c.collectEndPos.y = this.ui.abilityButtonList[2].pos.y, c.onCollect = function() { this.addPowerPotion(1) }.bind(this), this.pickups.push(c))
        },
        spawnBossPickup: function(a, b) {
            if (!this.tutorial) {
                b >
                    this.groundLevel && (b = this.groundLevel);
                var c = _STRINGS.UnitSpecs.boss_pickup_gold_amt,
                    d = new Pickup(this);
                d.pos.x = a;
                d.pos.y = b;
                d.spawnVector.x = -80 + 160 * Math.random();
                d.spawnVector.y = -250 - 250 * Math.random();
                d.collectEndPos = {};
                d.collectEndPos.x = this.ui.goldRect.x - 21;
                d.collectEndPos.y = this.ui.goldRect.y;
                d.onCollect = function() { this.addGameGold(c) }.bind(this);
                this.pickups.push(d)
            }
        },
        onBlur: function() {
            this.showOptions();
            this.options.bgAlpha = this.options.maxBgAlpha;
            this.draw()
        },
        heroAttackPosition: function(a, b) {
            for (var c = !1, d = [], e = 0; e < this.monsters.length; e++) {
                var f = this.monsters[e];
                if (!(f.stateId == f.states.dying || f.stateId == f.states.dead)) {
                    var h = { x: 0, y: 0, w: 0, h: 0 };
                    h.x = f.pos.x + f.hitRect.x;
                    h.y = f.pos.y + f.hitRect.y;
                    h.w = f.hitRect.w;
                    h.h = f.hitRect.h;
                    var j = { x: 0, y: 0, w: 1, h: 1 };
                    j.x = a;
                    j.y = b;
                    this.aabbCheck(h, j) && d.push(f)
                }
            }
            0 < d.length && (e = [], 0 <= this.hero.powerEffectTime ? e = d : e.push(d[d.length - 1]), this.heroHitMonsters(e), c || (this.addSlash(a, b), c = !0));
            0 == d.length && (this.boss && this.boss.stateId != this.boss.states.dying && this.boss.stateId !=
                this.boss.states.dead) && (h = { x: 0, y: 0, w: 0, h: 0 }, h.x = this.boss.pos.x + this.boss.hitRect.x, h.y = this.boss.pos.y + this.boss.hitRect.y, h.w = this.boss.hitRect.w, h.h = this.boss.hitRect.h, j = { x: 0, y: 0, w: 1, h: 1 }, j.x = a, j.y = b, this.aabbCheck(h, j) && (this.heroHitBoss(this.boss), c || this.addSlash(a, b)));
            for (e = this.pickups.length - 1; 0 <= e; e--)
                if (c = this.pickups[e], c.stateId == c.states.spawn || c.stateId == c.states.idle)
                    if (h = { x: 0, y: 0, w: 0, h: 0 }, h.x = c.pos.x + c.hitRect.x, h.y = c.pos.y + c.hitRect.y, h.w = c.hitRect.w, h.h = c.hitRect.h, j = {
                            x: 0,
                            y: 0,
                            w: 1,
                            h: 1
                        }, j.x = a, j.y = b, this.aabbCheck(h, j)) { c.hit(); break }
        },
        heroFacePosition: function(a) { this.hero.faceDir = this.hero.pos.x < a ? 1 : 0 },
        easeOutSine: function(a, b) { return b * Math.sin(a * (Math.PI / 2)) },
        roundRect: function(a, b, c, d, e, f, h, j) {
            "undefined" == typeof j && (j = !0);
            "undefined" === typeof f && (f = 5);
            a.beginPath();
            a.moveTo(b + f, c);
            a.lineTo(b + d - f, c);
            a.quadraticCurveTo(b + d, c, b + d, c + f);
            a.lineTo(b + d, c + e - f);
            a.quadraticCurveTo(b + d, c + e, b + d - f, c + e);
            a.lineTo(b + f, c + e);
            a.quadraticCurveTo(b, c + e, b, c + e - f);
            a.lineTo(b, c + f);
            a.quadraticCurveTo(b,
                c, b + f, c);
            a.closePath();
            j && a.stroke();
            h && a.fill()
        },
        bitwiseRound: function(a) { return 0.5 + a << 0 },
        getInputPos: function() { return ig.game.io.getClickPos() },
        aabbCheck: function(a, b) { return a.x + a.w > b.x && a.x < b.x + b.w && a.y + a.h > b.y && a.y < b.y + b.h ? !0 : !1 },
        addSlash: function(a, b) {
            var c = 50 - 100 * Math.random(),
                d = 50 - 100 * Math.random();
            25 > c && -25 < c ? (d = 50 - 25 * Math.random(), 0.5 > Math.random() && (d = -d)) : 25 > d && -25 < d && (c = 50 - 25 * Math.random(), 0.5 > Math.random() && (c = -c));
            var e = a - c,
                f = b - d,
                h = a - c / 2,
                j = b - d / 2,
                l = a + c / 2,
                q = b + d / 2,
                c = a + c,
                d = b + d,
                m = new Slash(this);
            m.addNode(e, f, 0);
            m.addNode(h, j, 0.017 * 1.5);
            m.addNode(a, b, 0.0495);
            m.addNode(l, q, 0.05 * 1.5);
            m.addNode(c, d, 0.1005);
            m.time = 0;
            m.refreshDrawnNodeList();
            this.slashes.push(m)
        },
        drawSlashes: function() {
            for (var a = 0; a < this.slashes.length; a++) {
                var b = this.slashes[a];
                b.draw();
                b.update()
            }
            this.cleanupSlashes()
        },
        cleanupSlashes: function() {
            for (var a = [], b = 0; b < this.slashes.length; b++) {
                var c = this.slashes[b];
                c.killed || a.push(c)
            }
            this.slashes = a
        },
        addFloatingText: function(a, b, c, d) {
            var e = -18 * Math.random(),
                f = -18 * Math.random(),
                h =
                new FloatingText(this);
            h.setPos(a + e, b + f);
            h.setText(c);
            d && (h.textColor = d);
            this.floatingTexts.push(h)
        },
        drawFloatingTexts: function() {
            for (var a = 0; a < this.floatingTexts.length; a++) {
                var b = this.floatingTexts[a];
                b.draw();
                b.update()
            }
            this.cleanupFloatingTexts()
        },
        cleanupFloatingTexts: function() {
            for (var a = [], b = 0; b < this.floatingTexts.length; b++) {
                var c = this.floatingTexts[b];
                c.killed || a.push(c)
            }
            this.floatingTexts = a
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.game-control").defines(function() { LevelGame = { entities: [{ type: "EntityGameControl", x: 0, y: 0 }], layer: [] } });
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("integrations.entities.branding-splash").requires("impact.impact", "impact.entity", "game.components.tween").defines(function() {
    EntityBrandingSplash = ig.Entity.extend({
        gravityFactor: 0,
        size: { x: 32, y: 32 },
        splash: new ig.Image("media/branding/graphics/splash1.png"),
        init: function(a, b, c) {
            this.parent(a, b, c);
            ig.global.wm || (320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240), this.pos.x = (ig.system.width - this.size.x) / 2, this.pos.y = -this.size.y - 200, this.endPosY = (ig.system.height -
                this.size.y) / 2, a = this.tween({ pos: { y: this.endPosY } }, 0.5, { easing: ig.Tween.Easing.Bounce.EaseIn }), b = this.tween({}, 2.5, { onComplete: function() { _SETTINGS.DeveloperBranding.Splash.Enabled ? ig.game.director.loadLevel(0) : ig.game.director.loadLevel(1) } }), a.chain(b), a.start(), this.currentAnim = this.anims.idle)
        },
        draw: function() {
            ig.global.wm ? ig.system.context.fillRect(this.pos.x, this.pos.x, this.size.x, this.size.y) : (ig.system.context.fillStyle = "#ffffff", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height),
                ig.system.context.fillStyle = "#000", ig.system.context.font = "12px Arial", 320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15), this.parent(), this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y))
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("integrations.levels.branding").requires("impact.image", "integrations.entities.branding-splash").defines(function() { LevelBranding = { entities: [{ type: "EntityBrandingSplash", x: 0, y: 0 }], layer: [] } });
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.webkit-image-smoothing-patch", "plugins.windowfocus-onMouseDown-patch", "game.loader.splash-loader", "plugins.url-parameters", "game.components.director", "game.components.tween", "game.components.drawer", "game.sound.sound-list", "game.handlers.sound-handler", "game.handlers.dom-handler", "game.handlers.size-handler", "game.io.io-manager", "integrations.client.api-handler", "game.levels.opening", "game.levels.home", "game.levels.game", "integrations.levels.branding").defines(function() {
    this.START_OBFUSCATION;
    this.FRAMEBREAKER;
    MyGame = ig.Game.extend({
        director: null,
        mainDrawer: null,
        io: null,
        paused: !1,
        prefix: "herosjourney",
        doTutorialFlag: !1,
        firstrun: !0,
        muted: !1,
        musicVolume: 0.5,
        sfxVolume: 1,
        bestScore: 0,
        rtl: !1,
        init: function() {
            this.hideDebug();
            this.io = new IoManager;
            this.mainDrawer = new Drawer(ig.system.context);
            ig.system.canvas.screencanvas = !0;
            this.urlParams = new ig.UrlParameters;
            ig.apiHandler.run("MJSGameCenter");
            this.setupLocalStorage();
            if (ig.ua.mobile) {
                var a = ig.domHandler.getElementById("#play");
                ig.domHandler.attr(a,
                    "onclick", "ig.soundHandler.sfxPlayer.play('staticSound');ig.game.splashClick();");
                ig.domHandler.show(a)
            } else this.start()
        },
        start: function() {
            ig.input.bind(ig.KEY._1, "1");
            ig.input.bind(ig.KEY._2, "2");
            ig.input.bind(ig.KEY._3, "3");
            ig.input.bind(ig.KEY._4, "4");
            ig.input.bind(ig.KEY._5, "5");
            ig.input.bind(ig.KEY.ESC, "esc");
            this.director = "undefined" !== typeof LevelBranding ? new ig.Director(this, [LevelOpening, LevelHome, LevelGame, LevelBranding]) : new ig.Director(this, [LevelOpening, LevelHome, LevelGame]);
            if (_SETTINGS.Branding.Splash.Enabled &&
                "undefined" !== typeof LevelBranding) try { this.director.jumpTo(LevelBranding) } catch (a) {
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) this.director.loadLevel(this.director.currentLevel);
                else {
                    var b = this.director.currentLevel + 1;
                    this.director.loadLevel(b)
                }
            } else _SETTINGS.DeveloperBranding.Splash.Enabled ? this.director.loadLevel(this.director.currentLevel) : (b = this.director.currentLevel + 1, this.director.loadLevel(b))
        },
        pause: function() {
            ig.game.paused = !0;
            var a = ig.game.getEntitiesByType(EntityGameControl);
            if (0 <
                a.length) a[0].onBlur()
        },
        resume: function() { ig.game.paused = !1 },
        truePause: function() { ig.system.stopRunLoop.call(ig.system) },
        trueResume: function() { ig.system.startRunLoop.call(ig.system) },
        splashClick: function() {
            var a = ig.domHandler.getElementById("#play");
            ig.domHandler.hide(a);
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");
            ig.game.start()
        },
        update: function() {
            this.countFps();
            this.paused ? this.pausedUpdate() : this.parent();
            ig.ua.mobile && ig.soundHandler && ig.soundHandler.forceLoopBGM()
        },
        draw: function() { this.parent() },
        pausedUpdate: function() { for (var a = 0; a < this.entities.length; a++) { var b = this.entities[a];!b._killed && b.ignorePause && b.update() } },
        showDebug: function() {
            console.log("showing debug menu ...");
            ig.Entity._debugShowBoxes = !0;
            ig.domHandler.show(ig.domHandler.getElementByClass("ig_debug"))
        },
        hideDebug: function() {
            console.log("showing debug menu ...");
            ig.Entity._debugShowBoxes = !1;
            ig.domHandler.hide(ig.domHandler.getElementByClass("ig_debug"))
        },
        setupLocalStorage: function() {
            this.storage = ig.game.io.storage;
            this.getPlayerStats()
        },
        savePlayerStats: function() { null != this.storage && (this.storage.set(this.prefix + ".musicVolume", this.musicVolume), this.storage.set(this.prefix + ".sfxVolume", this.sfxVolume), this.storage.set(this.prefix + ".muted", this.muted), this.storage.set(this.prefix + ".bestScore", this.bestScore), this.storage.set(this.prefix + ".firstrun", this.firstrun)) },
        getPlayerStats: function() {
            if (null != this.storage) {
                var a = this.storage.get(this.prefix + ".musicVolume");
                null != a && (this.musicVolume = a, ig.ua.mobile && 0.25 < this.musicVolume && (this.musicVolume =
                    0.25));
                ig.soundHandler.bgmPlayer.volume(this.musicVolume);
                a = this.storage.get(this.prefix + ".sfxVolume");
                null != a && (this.sfxVolume = a);
                ig.soundHandler.sfxPlayer.volume(this.sfxVolume);
                a = this.storage.get(this.prefix + ".muted");
                null != a && (this.muted = a);
                this.muted ? (ig.soundHandler.bgmPlayer.volume(0), ig.soundHandler.sfxPlayer.volume(0)) : (ig.soundHandler.bgmPlayer.volume(this.musicVolume), ig.soundHandler.sfxPlayer.volume(this.sfxVolume));
                a = this.storage.get(this.prefix + ".firstrun");
                null != a && (this.firstrun = a);
                a = this.storage.get(this.prefix + ".bestScore");
                null != a && (this.bestScore = a)
            }
        },
        countFps: function() {
            this.fpsTimer || (this.fpsTimer = new ig.Timer(1));
            this.fpsTimer && 0 > this.fpsTimer.delta() ? null != this.fpsCounter ? this.fpsCounter++ : this.fpsCounter = 0 : (ig.game.fps = this.fpsCounter, this.fpsCounter = 0, this.fpsTimer.reset())
        }
    });
    ig.domHandler = new ig.DomHandler;
    ig.apiHandler = new ig.ApiHandler;
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    ig.ua.mobile ?
        ig.main("#canvas", MyGame, 60, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader) : ig.main("#canvas", MyGame, 60, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
    ig.System.scaleMode = ig.System.SCALE.SMOOTH;
    ig.System.scaleMode(ig.system.canvas, ig.system.context);
    var a = ig.system.context;
    if (a) {
        var b = ig.domHandler.getElementById("body");
        b.css && (a.fillStyle = b.css("background-color"),
            a.fillRect(0, 0, ig.system.width, ig.system.height))
    }
    ig.sizeHandler.reorient();
    ig.domHandler.hide(ig.domHandler.getElementById("#ajaxbar"));
    ig.domHandler.hide(ig.domHandler.getElementById("#play"));
    ig.soundList = new SoundList;
    ig.soundHandler = new ig.SoundHandler(ig.soundList, { loop: !0 });
    this.END_OBFUSCATION
});