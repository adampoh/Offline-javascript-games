(function() {
    var h, k = this,
        l = function(a) { return void 0 !== a },
        m = function(a) { return "string" == typeof a },
        n = function(a) { return "number" == typeof a },
        p = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" ==
                        c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        r = function(a) { return "array" == p(a) },
        aa = function(a) { var b = p(a); return "array" == b || "object" == b && "number" == typeof a.length },
        t = function(a) { return "function" == p(a) },
        ba = function(a) { var b = typeof a; return "object" == b && null != a || "function" == b },
        ca = function(a, b, c) { return a.call.apply(a.bind, arguments) },
        da = function(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d); return a.apply(b, c) } } return function() { return a.apply(b, arguments) } },
        ea = function(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea = ca : ea = da; return ea.apply(null, arguments) },
        fa = Date.now || function() { return +new Date },
        u = function(a, b) {
            function c() {}
            c.prototype =
                b.prototype;
            a.L = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Pa = function(a, c, f) { for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e]; return b.prototype[c].apply(a, d) }
        };
    var v = function(a) { if (Error.captureStackTrace) Error.captureStackTrace(this, v);
        else { var b = Error().stack;
            b && (this.stack = b) }
        a && (this.message = String(a)) };
    u(v, Error);
    v.prototype.name = "CustomError";
    var ga = function(a, b) { for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift(); return d + c.join("%s") },
        ha = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") },
        pa = function(a) {
            if (!ia.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ja, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ka, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(la, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ma, "&quot;")); - 1 != a.indexOf("'") &&
                (a = a.replace(na, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(oa, "&#0;"));
            return a
        },
        ja = /&/g,
        ka = /</g,
        la = />/g,
        ma = /"/g,
        na = /'/g,
        oa = /\x00/g,
        ia = /[\x00&<>"']/,
        qa = function(a) { return null == a ? "" : String(a) },
        ra = function(a, b) { return a < b ? -1 : a > b ? 1 : 0 },
        sa = function(a) { return String(a).replace(/\-([a-z])/g, function(a, c) { return c.toUpperCase() }) },
        ta = function(a) {
            var b = m(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") +
                ")([a-z])", "g"), function(a, b, e) { return b + e.toUpperCase() })
        };
    var ua = function(a, b) { b.unshift(a);
        v.call(this, ga.apply(null, b));
        b.shift() };
    u(ua, v);
    ua.prototype.name = "AssertionError";
    var va = function(a, b, c, d) { var e = "Assertion failed"; if (c) { e += ": " + c; var f = d } else a && (e += ": " + a, f = b); throw new ua("" + e, f || []); },
        x = function(a, b, c) { a || va("", null, b, Array.prototype.slice.call(arguments, 2)) },
        wa = function(a, b) { throw new ua("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)); },
        y = function(a, b, c) { n(a) || va("Expected number but got %s: %s.", [p(a), a], b, Array.prototype.slice.call(arguments, 2)); return a };
    var xa = Array.prototype.indexOf ? function(a, b, c) { x(null != a.length); return Array.prototype.indexOf.call(a, b, c) } : function(a, b, c) { c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c; if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1; for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1 },
        ya = Array.prototype.forEach ? function(a, b, c) { x(null != a.length);
            Array.prototype.forEach.call(a, b, c) } : function(a, b, c) { for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a) },
        za = function(a) {
            return Array.prototype.concat.apply([],
                arguments)
        },
        Aa = function(a) { var b = a.length; if (0 < b) { for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]; return c } return [] };
    var z;
    a: { var Ba = k.navigator; if (Ba) { var Ca = Ba.userAgent; if (Ca) { z = Ca; break a } }
        z = "" }
    var A = function(a) { return -1 != z.indexOf(a) };
    var Ea = function(a, b, c) { for (var d in a) b.call(c, a[d], d, a) },
        Fa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Ga = function(a, b) { for (var c, d, e = 1; e < arguments.length; e++) { d = arguments[e]; for (c in d) a[c] = d[c]; for (var f = 0; f < Fa.length; f++) c = Fa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]) } };
    var Ha = function() { return (A("Chrome") || A("CriOS")) && !A("Edge") };
    var B = function() { return A("iPhone") && !A("iPod") && !A("iPad") };
    var Ia = function(a) { Ia[" "](a); return a };
    Ia[" "] = function() {};
    var Ja = function(a, b) { try { return Ia(a[b]), !0 } catch (c) {} return !1 },
        La = function(a, b) { var c = Ka; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
    var Ma = A("Opera"),
        C = A("Trident") || A("MSIE"),
        Na = A("Edge"),
        D = A("Gecko") && !(-1 != z.toLowerCase().indexOf("webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        Oa = -1 != z.toLowerCase().indexOf("webkit") && !A("Edge"),
        Pa = A("Macintosh"),
        Qa = A("Windows"),
        Ra = A("Android"),
        Sa = B(),
        Ta = A("iPad"),
        Ua = A("iPod"),
        Va = function() { var a = k.document; return a ? a.documentMode : void 0 },
        Wa;
    a: { var Xa = "",
            Ya = function() { var a = z; if (D) return /rv\:([^\);]+)(\)|;)/.exec(a); if (Na) return /Edge\/([\d\.]+)/.exec(a); if (C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (Oa) return /WebKit\/(\S+)/.exec(a); if (Ma) return /(?:Version)[ \/]?(\S+)/.exec(a) }();Ya && (Xa = Ya ? Ya[1] : ""); if (C) { var Za = Va(); if (null != Za && Za > parseFloat(Xa)) { Wa = String(Za); break a } }
        Wa = Xa }
    var $a = Wa,
        Ka = {},
        E = function(a) { return La(a, function() { for (var b = 0, c = ha(String($a)).split("."), d = ha(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) { var g = c[f] || "",
                        q = d[f] || "";
                    do { g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        q = /(\d*)(\D*)(.*)/.exec(q) || ["", "", "", ""]; if (0 == g[0].length && 0 == q[0].length) break;
                        b = ra(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || ra(0 == g[2].length, 0 == q[2].length) || ra(g[2], q[2]);
                        g = g[3];
                        q = q[3] } while (0 == b) } return 0 <= b }) },
        ab;
    var bb = k.document;
    ab = bb && C ? Va() || ("CSS1Compat" == bb.compatMode ? parseInt($a, 10) : 5) : void 0;
    var cb = !C || 9 <= Number(ab);
    !D && !C || C && 9 <= Number(ab) || D && E("1.9.1");
    C && E("9");
    var eb = function(a, b) { Ea(b, function(b, d) { b && b.Ra && (b = b.Qa()); "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : db.hasOwnProperty(d) ? a.setAttribute(db[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b }) },
        db = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" },
        gb = function(a, b, c) { var d = arguments,
                e = document,
                f = String(d[0]),
                g = d[1]; if (!cb && g && (g.name || g.type)) { f = ["<", f];
                g.name && f.push(' name="', pa(g.name), '"'); if (g.type) { f.push(' type="', pa(g.type), '"'); var q = {};
                    Ga(q, g);
                    delete q.type;
                    g = q }
                f.push(">");
                f = f.join("") }
            f = e.createElement(f);
            g && (m(g) ? f.className = g : r(g) ? f.className = g.join(" ") : eb(f, g));
            2 < d.length && fb(e, f, d); return f },
        fb = function(a, b, c) {
            function d(c) { c && b.appendChild(m(c) ? a.createTextNode(c) : c) }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !aa(f) || ba(f) && 0 < f.nodeType ?
                    d(f) : ya(hb(f) ? Aa(f) : f, d)
            }
        },
        hb = function(a) { if (a && "number" == typeof a.length) { if (ba(a)) return "function" == typeof a.item || "string" == typeof a.item; if (t(a)) return "function" == typeof a.item } return !1 };
    var ib = function(a) { return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")) },
        jb = function(a) { a = String(a); if (ib(a)) try { return eval("(" + a + ")") } catch (b) {}
            throw Error("Invalid JSON string: " + a); },
        mb = function(a) { var b = [];
            kb(new lb, a, b); return b.join("") },
        lb = function() {},
        kb = function(a,
            b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) { if (r(b)) { var d = b;
                        b = d.length;
                        c.push("["); for (var e = "", f = 0; f < b; f++) c.push(e), kb(a, d[f], c), e = ",";
                        c.push("]"); return } if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else { c.push("{");
                        e = ""; for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), nb(d, c), c.push(":"), kb(a, f, c), e = ","));
                        c.push("}"); return } }
                switch (typeof b) {
                    case "string":
                        nb(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) &&
                            !isNaN(b) ? String(b) : "null");
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
        ob = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b" },
        pb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        nb = function(a, b) { b.push('"', a.replace(pb, function(a) { var b = ob[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), ob[a] = b); return b }), '"') };
    var qb = function(a, b, c, d, e) { this.reset(a, b, c, d, e) };
    qb.prototype.a = null;
    var rb = 0;
    qb.prototype.reset = function(a, b, c, d, e) { "number" == typeof e || rb++;
        d || fa();
        this.b = b;
        delete this.a };
    var sb = function(a) { this.f = a;
            this.c = this.a = this.b = null },
        vb = function(a, b) { this.name = a;
            this.value = b };
    vb.prototype.toString = function() { return this.name };
    var wb = new vb("INFO", 800),
        xb = new vb("CONFIG", 700),
        yb = function(a) { if (a.a) return a.a; if (a.b) return yb(a.b);
            wa("Root logger has no level set."); return null };
    sb.prototype.log = function(a, b, c) { if (a.value >= yb(this).value)
            for (t(b) && (b = b()), a = new qb(a, String(b), this.f), c && (a.a = c), c = "log:" + a.b, k.console && (k.console.timeStamp ? k.console.timeStamp(c) : k.console.markTimeline && k.console.markTimeline(c)), k.msWriteProfilerMark && k.msWriteProfilerMark(c), c = this; c;) c = c.b };
    var zb = {},
        Ab = null,
        Bb = function(a) { Ab || (Ab = new sb(""), zb[""] = Ab, Ab.a = xb); var b; if (!(b = zb[a])) { b = new sb(a); var c = a.lastIndexOf("."),
                    d = a.substr(c + 1),
                    c = Bb(a.substr(0, c));
                c.c || (c.c = {});
                c.c[d] = b;
                b.b = c;
                zb[a] = b } return b };
    var Cb = function(a, b) { a = Bb(a);
        b && a && (a.a = b) };
    var Db = "StopIteration" in k ? k.StopIteration : { message: "StopIteration", stack: "" },
        Eb = function() {};
    Eb.prototype.next = function() { throw Db; };
    Eb.prototype.g = function() { return this };
    var F = function(a, b) { this.b = {};
        this.a = [];
        this.f = this.c = 0; var c = arguments.length; if (1 < c) { if (c % 2) throw Error("Uneven number of arguments"); for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]) } else if (a) { if (a instanceof F) { var e = a.o();
                d = a.l() } else { var c = [],
                    f = 0; for (e in a) c[f++] = e;
                e = c;
                c = [];
                f = 0; for (d in a) c[f++] = a[d];
                d = c } for (c = 0; c < e.length; c++) this.set(e[c], d[c]) } };
    F.prototype.l = function() { Fb(this); for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]); return a };
    F.prototype.o = function() { Fb(this); return this.a.concat() };
    var Fb = function(a) { var b, c; if (a.c != a.a.length) { for (b = c = 0; c < a.a.length;) { var d = a.a[c];
                G(a.b, d) && (a.a[b++] = d);
                c++ }
            a.a.length = b } if (a.c != a.a.length) { var e = {}; for (b = c = 0; c < a.a.length;) d = a.a[c], G(e, d) || (a.a[b++] = d, e[d] = 1), c++;
            a.a.length = b } };
    F.prototype.get = function(a, b) { return G(this.b, a) ? this.b[a] : b };
    F.prototype.set = function(a, b) { G(this.b, a) || (this.c++, this.a.push(a), this.f++);
        this.b[a] = b };
    F.prototype.forEach = function(a, b) { for (var c = this.o(), d = 0; d < c.length; d++) { var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this) } };
    F.prototype.g = function(a) { Fb(this); var b = 0,
            c = this.f,
            d = this,
            e = new Eb;
        e.next = function() { if (c != d.f) throw Error("The map has changed since the iterator was created"); if (b >= d.a.length) throw Db; var e = d.a[b++]; return a ? e : d.b[e] }; return e };
    var G = function(a, b) { return Object.prototype.hasOwnProperty.call(a, b) };
    var Gb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Hb = function(a, b) { if (a) { a = a.split("&"); for (var c = 0; c < a.length; c++) { var d = a[c].indexOf("="),
                        e = null; if (0 <= d) { var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1) } else f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "") } } };
    var Ib = function(a, b) { this.f = this.j = this.c = "";
        this.h = null;
        this.g = this.i = "";
        this.a = !1; if (a instanceof Ib) { this.a = l(b) ? b : a.a;
            Jb(this, a.c);
            this.j = a.j;
            this.f = a.f;
            Kb(this, a.h);
            this.i = a.i;
            b = a.b; var c = new H;
            c.c = b.c;
            b.a && (c.a = new F(b.a), c.b = b.b);
            Lb(this, c);
            this.g = a.g } else a && (c = String(a).match(Gb)) ? (this.a = !!b, Jb(this, c[1] || "", !0), this.j = I(c[2] || ""), this.f = I(c[3] || "", !0), Kb(this, c[4]), this.i = I(c[5] || "", !0), Lb(this, c[6] || "", !0), this.g = I(c[7] || "")) : (this.a = !!b, this.b = new H(null, 0, this.a)) };
    Ib.prototype.toString = function() { var a = [],
            b = this.c;
        b && a.push(J(b, Mb, !0), ":"); var c = this.f; if (c || "file" == b) a.push("//"), (b = this.j) && a.push(J(b, Mb, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c)); if (c = this.i) this.f && "/" != c.charAt(0) && a.push("/"), a.push(J(c, "/" == c.charAt(0) ? Nb : Ob, !0));
        (c = this.b.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", J(c, Pb)); return a.join("") };
    var Jb = function(a, b, c) { a.c = c ? I(b, !0) : b;
            a.c && (a.c = a.c.replace(/:$/, "")) },
        Kb = function(a, b) { if (b) { b = Number(b); if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.h = b } else a.h = null },
        Lb = function(a, b, c) { b instanceof H ? (a.b = b, Qb(a.b, a.a)) : (c || (b = J(b, Rb)), a.b = new H(b, 0, a.a)) },
        I = function(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "" },
        J = function(a, b, c) { return m(a) ? (a = encodeURI(a).replace(b, Sb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null },
        Sb = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Mb = /[#\/\?@]/g,
        Ob = /[\#\?:]/g,
        Nb = /[\#\?]/g,
        Rb = /[\#\?@]/g,
        Pb = /#/g,
        H = function(a, b, c) { this.b = this.a = null;
            this.c = a || null;
            this.f = !!c },
        K = function(a) { a.a || (a.a = new F, a.b = 0, a.c && Hb(a.c, function(b, c) { b = decodeURIComponent(b.replace(/\+/g, " "));
                K(a);
                a.c = null;
                b = L(a, b); var d = a.a.get(b);
                d || a.a.set(b, d = []);
                d.push(c);
                a.b = y(a.b) + 1 })) },
        Tb = function(a, b) {
            K(a);
            b = L(a, b);
            G(a.a.b, b) && (a.c = null, a.b = y(a.b) - a.a.get(b).length, a = a.a, G(a.b, b) && (delete a.b[b], a.c--, a.f++, a.a.length >
                2 * a.c && Fb(a)))
        },
        Ub = function(a, b) { K(a);
            b = L(a, b); return G(a.a.b, b) };
    h = H.prototype;
    h.forEach = function(a, b) { K(this);
        this.a.forEach(function(c, d) { ya(c, function(c) { a.call(b, c, d, this) }, this) }, this) };
    h.o = function() { K(this); for (var a = this.a.l(), b = this.a.o(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]); return c };
    h.l = function(a) { K(this); var b = []; if (m(a)) Ub(this, a) && (b = za(b, this.a.get(L(this, a))));
        else { a = this.a.l(); for (var c = 0; c < a.length; c++) b = za(b, a[c]) } return b };
    h.set = function(a, b) { K(this);
        this.c = null;
        a = L(this, a);
        Ub(this, a) && (this.b = y(this.b) - this.a.get(a).length);
        this.a.set(a, [b]);
        this.b = y(this.b) + 1; return this };
    h.get = function(a, b) { a = a ? this.l(a) : []; return 0 < a.length ? String(a[0]) : b };
    h.toString = function() { if (this.c) return this.c; if (!this.a) return ""; for (var a = [], b = this.a.o(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.l(d), f = 0; f < d.length; f++) { var g = e; "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g) }
        return this.c = a.join("&") };
    var L = function(a, b) { b = String(b);
            a.f && (b = b.toLowerCase()); return b },
        Qb = function(a, b) { b && !a.f && (K(a), a.c = null, a.a.forEach(function(a, b) { var c = b.toLowerCase();
                b != c && (Tb(this, b), Tb(this, c), 0 < a.length && (this.c = null, this.a.set(L(this, c), Aa(a)), this.b = y(this.b) + a.length)) }, a));
            a.f = b };
    var Vb = /https?:\/\/[^\/]+/;
    var Wb = function(a, b) { this.a = a;
            this.b = b },
        Xb = function(a, b) { this.url = a;
            this.K = !!b;
            this.depth = n(void 0) ? void 0 : null },
        Yb = function() {
            var a = k,
                b = [],
                c = null;
            do { var d = a; try { var e = !!d && null != d.location.href && Ja(d, "foo") } catch (g) { e = !1 } if (e) { var f = d.location.href;
                    c = d.document && d.document.referrer || null } else f = c, c = null;
                b.push(new Xb(f || "")); try { a = d.parent } catch (g) { a = null } } while (a && d != a);
            a = 0;
            for (d = b.length - 1; a <= d; ++a) b[a].depth = d - a;
            d = k;
            if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length ==
                b.length - 1)
                for (a = 1; a < b.length; ++a) f = b[a], f.url || (f.url = d.location.ancestorOrigins[a - 1] || "", f.K = !0);
            return b
        };
    var M = function(a, b, c, d, e) { x(l(b) == l(c));
        x(l(d) == l(e));
        a = [a]; if (l(b) && l(c)) { for (var f = 0; f < c; f++) a.push("");
            a.push(b) } if (l(d) && l(e)) { b = e - a.length + 1; for (f = 0; f < b; f++) a.push("");
            a.push(d) } return a };
    new function() { try { for (var a = Yb(), b = a.length - 1, c, d = a ? a : Yb(), e = new Xb(k.location.href, !1), f = d.length - 1, a = f; 0 <= a; --a) { var g = d[a]; if (g.url && !g.K) { e = g; break } } var g = null,
                q = d.length && d[f].url;
            0 != e.depth && q && (g = d[f]);
            c = new Wb(e, g); var w = c.a,
                Da = c.b;
            c = []; if (Da) w && c.push(M(b, [Da.url, 2], 0, [w.url, 0], w.depth)), c.push(M(b, [Da.url, 2], 0));
            else if (w.url) { c.push(M(b, void 0, void 0, [w.url, 0], w.depth)); var tb, ub = Vb.exec(w.url);
                (tb = ub && ub[0] || "") && c.push(M(b, [tb, 1], w.depth)) }
            c.push(M(b)) } catch (Rc) {} };
    var $b = function() { return !Zb() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile")) },
        Zb = function() { return A("iPad") || A("Android") && !A("Mobile") || A("Silk") };
    var ac = A("Firefox"),
        bc = B() || A("iPod"),
        cc = A("iPad"),
        dc = A("Android") && !(Ha() || A("Firefox") || A("Opera") || A("Silk")),
        ec = Ha(),
        fc = A("Safari") && !(Ha() || A("Coast") || A("Opera") || A("Edge") || A("Silk") || A("Android")) && !(B() || A("iPad") || A("iPod"));
    var N = function(a) { return (a = a.exec(z)) ? a[1] : "" };
    (function() { if (ac) return N(/Firefox\/([0-9.]+)/); if (C || Na || Ma) return $a; if (ec) return B() || A("iPad") || A("iPod") ? N(/CriOS\/([0-9.]+)/) : N(/Chrome\/([0-9.]+)/); if (fc && !(B() || A("iPad") || A("iPod"))) return N(/Version\/([0-9.]+)/); if (bc || cc) { var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(z); if (a) return a[1] + "." + a[2] } else if (dc) return (a = N(/Android\s+([0-9.]+)/)) ? a : N(/Version\/([0-9.]+)/); return "" })();
    (function() { var a = !1; try { var b = Object.defineProperty({}, "passive", { get: function() { a = !0 } });
            k.addEventListener("test", null, b) } catch (c) {} return a })();
    var O = !1,
        gc = function(a) { if (a = a.match(/[\d]+/g)) a.length = 3 };
    (function() {
        if (navigator.plugins && navigator.plugins.length) { var a = navigator.plugins["Shockwave Flash"]; if (a && (O = !0, a.description)) { gc(a.description); return } if (navigator.plugins["Shockwave Flash 2.0"]) { O = !0; return } }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], O = !(!a || !a.enabledPlugin))) { gc(a.enabledPlugin.description); return }
        try { var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            O = !0;
            gc(b.GetVariable("$version")); return } catch (c) {}
        try {
            b =
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            O = !0;
            return
        } catch (c) {}
        try { b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), O = !0, gc(b.GetVariable("$version")) } catch (c) {}
    })();
    (function() { if (Qa) { var a = /Windows NT ([0-9.]+)/; return (a = a.exec(z)) ? a[1] : "0" } return Pa ? (a = /10[_.][0-9_.]+/, (a = a.exec(z)) ? a[0].replace(/_/g, ".") : "10") : Ra ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(z)) ? a[1] : "") : Sa || Ta || Ua ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(z)) ? a[1].replace(/_/g, ".") : "") : "" })();
    var ic = function(a, b) { if (m(b))(b = hc(a, b)) && (a.style[b] = void 0);
            else
                for (var c in b) { var d = a,
                        e = b[c],
                        f = hc(d, c);
                    f && (d.style[f] = e) } },
        jc = {},
        hc = function(a, b) { var c = jc[b]; if (!c) { var d = sa(b),
                    c = d;
                void 0 === a.style[d] && (d = (Oa ? "Webkit" : D ? "Moz" : C ? "ms" : Ma ? "O" : null) + ta(d), void 0 !== a.style[d] && (c = d));
                jc[b] = c } return c };
    var P = function() { this.C = this.C;
        this.S = this.S };
    P.prototype.C = !1;
    var kc = !C || 9 <= Number(ab),
        lc = C && !E("9");
    !Oa || E("528");
    D && E("1.9b") || C && E("8") || Ma && E("9.5") || Oa && E("528");
    D && !E("8") || C && E("9");
    var Q = function(a, b) { this.type = a;
        this.a = this.b = b };
    Q.prototype.f = function() {};
    var R = function(a, b) {
        Q.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.b = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.c = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.b = a.target || a.srcElement;
            this.a = b;
            (b = a.relatedTarget) ? D && (Ja(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            null === d ? (this.clientX = void 0 !==
                a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.c = a;
            a.defaultPrevented && this.f()
        }
    };
    u(R, Q);
    R.prototype.f = function() { R.L.f.call(this); var a = this.c; if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, lc) try { if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1 } catch (b) {} };
    var S = "closure_listenable_" + (1E6 * Math.random() | 0),
        mc = 0;
    var nc = function(a, b, c, d, e) { this.listener = a;
            this.a = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.w = e;
            this.key = ++mc;
            this.m = this.v = !1 },
        oc = function(a) { a.m = !0;
            a.listener = null;
            a.a = null;
            a.src = null;
            a.w = null };
    var pc = function(a) { this.src = a;
            this.a = {};
            this.b = 0 },
        rc = function(a, b, c, d, e) { var f = b.toString();
            b = a.a[f];
            b || (b = a.a[f] = [], a.b++); var g = qc(b, c, d, e); - 1 < g ? (a = b[g], a.v = !1) : (a = new nc(c, a.src, f, !!d, e), a.v = !1, b.push(a)); return a },
        sc = function(a, b) { var c = b.type; if (c in a.a) { var d = a.a[c],
                    e = xa(d, b),
                    f; if (f = 0 <= e) x(null != d.length), Array.prototype.splice.call(d, e, 1);
                f && (oc(b), 0 == a.a[c].length && (delete a.a[c], a.b--)) } },
        tc = function(a, b, c, d, e) { a = a.a[b.toString()];
            b = -1;
            a && (b = qc(a, c, d, e)); return -1 < b ? a[b] : null },
        qc = function(a,
            b, c, d) { for (var e = 0; e < a.length; ++e) { var f = a[e]; if (!f.m && f.listener == b && f.capture == !!c && f.w == d) return e } return -1 };
    var uc = "closure_lm_" + (1E6 * Math.random() | 0),
        vc = {},
        wc = 0,
        xc = function(a, b, c, d, e) {
            if (r(b)) { for (var f = 0; f < b.length; f++) xc(a, b[f], c, d, e); return null }
            c = yc(c);
            if (a && a[S]) a = a.i(b, c, d, e);
            else {
                if (!b) throw Error("Invalid event type");
                var f = !!d,
                    g = T(a);
                g || (a[uc] = g = new pc(a));
                c = rc(g, b, c, d, e);
                if (!c.a) {
                    d = zc();
                    c.a = d;
                    d.src = a;
                    d.listener = c;
                    if (a.addEventListener) a.addEventListener(b.toString(), d, f);
                    else if (a.attachEvent) a.attachEvent(Ac(b.toString()), d);
                    else throw Error("addEventListener and attachEvent are unavailable.");
                    wc++
                }
                a = c
            }
            return a
        },
        zc = function() { var a = Bc,
                b = kc ? function(c) { return a.call(b.src, b.listener, c) } : function(c) { c = a.call(b.src, b.listener, c); if (!c) return c }; return b },
        Cc = function(a, b, c, d, e) { if (r(b))
                for (var f = 0; f < b.length; f++) Cc(a, b[f], c, d, e);
            else c = yc(c), a && a[S] ? a.B(b, c, d, e) : a && (a = T(a)) && (b = tc(a, b, c, !!d, e)) && Dc(b) },
        Dc = function(a) {
            if (!n(a) && a && !a.m) {
                var b = a.src;
                if (b && b[S]) sc(b.a, a);
                else {
                    var c = a.type,
                        d = a.a;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Ac(c), d);
                    wc--;
                    (c = T(b)) ? (sc(c, a), 0 == c.b && (c.src = null, b[uc] = null)) : oc(a)
                }
            }
        },
        Ac = function(a) { return a in vc ? vc[a] : vc[a] = "on" + a },
        Fc = function(a, b, c, d) { var e = !0; if (a = T(a))
                if (b = a.a[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) { var f = b[a];
                        f && f.capture == c && !f.m && (f = Ec(f, d), e = e && !1 !== f) }
                return e },
        Ec = function(a, b) { var c = a.listener,
                d = a.w || a.src;
            a.v && Dc(a); return c.call(d, b) },
        Bc = function(a, b) {
            if (a.m) return !0;
            if (!kc) {
                if (!b) a: { b = ["window", "event"]; for (var c = k, d; d = b.shift();)
                        if (null != c[d]) c = c[d];
                        else { b = null; break a }
                    b = c }
                d =
                    b;
                b = new R(d, this);
                c = !0;
                if (!(0 > d.keyCode || void 0 != d.returnValue)) { a: { var e = !1; if (0 == d.keyCode) try { d.keyCode = -1; break a } catch (g) { e = !0 }
                        if (e || void 0 == d.returnValue) d.returnValue = !0 }
                    d = []; for (e = b.a; e; e = e.parentNode) d.push(e); for (var e = a.type, f = d.length - 1; 0 <= f; f--) b.a = d[f], a = Fc(d[f], e, !0, b), c = c && a; for (f = 0; f < d.length; f++) b.a = d[f], a = Fc(d[f], e, !1, b), c = c && a }
                return c
            }
            return Ec(a, new R(b, this))
        },
        T = function(a) { a = a[uc]; return a instanceof pc ? a : null },
        Gc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        yc = function(a) {
            x(a,
                "Listener can not be null.");
            if (t(a)) return a;
            x(a.handleEvent, "An object listener must have handleEvent method.");
            a[Gc] || (a[Gc] = function(b) { return a.handleEvent(b) });
            return a[Gc]
        };
    var U = function(a) { P.call(this);
        this.G = a;
        this.D = {} };
    u(U, P);
    var Hc = [];
    U.prototype.i = function(a, b, c, d) { r(b) || (b && (Hc[0] = b.toString()), b = Hc); for (var e = 0; e < b.length; e++) { var f = xc(a, b[e], c || this.handleEvent, d || !1, this.G || this); if (!f) break;
            this.D[f.key] = f } return this };
    U.prototype.B = function(a, b, c, d, e) { if (r(b))
            for (var f = 0; f < b.length; f++) this.B(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.G || this, c = yc(c), d = !!d, b = a && a[S] ? tc(a.a, String(b), c, d, e) : a ? (a = T(a)) ? tc(a, b, c, d, e) : null : null, b && (Dc(b), delete this.D[b.key]); return this };
    U.prototype.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented"); };
    var V = function() { P.call(this);
        this.a = new pc(this);
        this.f = this };
    u(V, P);
    V.prototype[S] = !0;
    V.prototype.g = function(a, b, c, d) { xc(this, a, b, c, d) };
    V.prototype.removeEventListener = function(a, b, c, d) { Cc(this, a, b, c, d) };
    V.prototype.i = function(a, b, c, d) { Ic(this); return rc(this.a, String(a), b, c, d) };
    V.prototype.B = function(a, b, c, d) { var e = this.a;
        a = String(a).toString(); if (a in e.a) { var f = e.a[a];
            b = qc(f, b, c, d); - 1 < b ? (oc(f[b]), x(null != f.length), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1 } else e = !1; return e };
    var Jc = function(a, b, c, d) { if (b = a.a.a[String(b)]) { b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) { var g = b[f]; if (g && !g.m && g.capture == c) { var q = g.listener,
                            w = g.w || g.src;
                        g.v && sc(a.a, g);
                        e = !1 !== q.call(w, d) && e } } } },
        Ic = function(a) { x(a.a, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?") };
    Cb("ads.common.UrlMacrosSubstitutor", wb);
    Cb("imalib.common.hostUtils");
    Cb("ima.common.HostUtils");
    var Kc = { ta: "collapseAd", ua: "expandAd", va: "getAdIcons", wa: "getAdCompanions", xa: "getAdDuration", ya: "getAdExpanded", za: "getAdHeight", Aa: "getAdLinear", Ba: "getAdRemainingTime", Ca: "getAdSkippableState", Da: "getAdVolume", Ea: "getAdWidth", Fa: "handshakeVersion", INIT: "initAd", Ga: "pauseAd", Ha: "resizeAd", Ia: "resumeAd", Ka: "skipAd", La: "startAd", Ja: "setAdVolume", Ma: "stopAd", Na: "subscribe", Oa: "unsubscribe" };
    var Lc = function(a, b, c) { this.c = a;
        this.a = b;
        this.b = c };
    h = Lc.prototype;
    h.T = function(a, b, c) { var d = null; /^[\s\xa0]*$/.test(qa(a)) ? /^[\s\xa0]*$/.test(qa(this.b)) || (d = this.b) : d = a;
        c && null != d && (/^[\s\xa0]*$/.test(qa(d)) || window.open(d, "_blank"));
        W(this, "AdClickThru", { url: d, id: b }) };
    h.U = function() { var a = this.a.getAdDuration(),
            b = this.a.getAdRemainingTime(),
            c = {};
        c.duration = a;
        c.remainingTime = b;
        W(this, "AdDurationChange", c) };
    h.V = function(a) { W(this, "AdError", { message: a }) };
    h.W = function() { var a = {};
        a.expanded = this.a.getAdExpanded();
        W(this, "AdExpandedChange", a) };
    h.X = function() { W(this, "AdImpression") };
    h.Y = function(a) { W(this, "AdInteraction", { id: a }) };
    h.Z = function() { var a = {};
        a.isLinear = this.a.getAdLinear();
        W(this, "AdLinearChange", a) };
    h.$ = function() { var a = t(this.a.getAdCompanions) ? this.a.getAdCompanions() : "",
            b = {};
        b.companions = a;
        W(this, "AdLoaded", b) };
    h.aa = function(a) { W(this, "AdLog", { message: a }) };
    h.ba = function() { W(this, "AdPaused") };
    h.ca = function() { W(this, "AdPlaying") };
    h.da = function() { var a = this.a.getAdRemainingTime(),
            b = {};
        b.remainingTime = a;
        W(this, "AdRemainingTimeChange", b) };
    h.ea = function() { W(this, "AdSizeChange") };
    h.ga = function() { W(this, "AdSkipped") };
    h.ha = function() { W(this, "AdStarted") };
    h.ia = function() { W(this, "AdStopped") };
    h.fa = function() { W(this, "AdSkippableStateChange") };
    h.ja = function() { W(this, "AdUserAcceptInvitation") };
    h.ka = function() { W(this, "AdUserClose") };
    h.la = function() { W(this, "AdUserMinimize") };
    h.ma = function() { W(this, "AdVideoComplete") };
    h.na = function() { W(this, "AdVideoFirstQuartile") };
    h.oa = function() { W(this, "AdVideoMidpoint") };
    h.pa = function() { W(this, "AdVideoStart") };
    h.qa = function() { W(this, "AdVideoThirdQuartile") };
    h.ra = function() { var a = { volume: this.a.getAdVolume() };
        W(this, "AdVolumeChange", a) };
    h.sa = function(a) { W(this, "Ping", { url: a }) };
    var X = function(a, b, c) { a.a.subscribe(ea(b, a), c) },
        W = function(a, b, c) { c || (c = {});
            a = { type: b, session: a.c };
            Ga(a, c);
            window.parent != window && window.parent.postMessage(mb(a), "*") };
    var Y = function() { V.call(this);
        this.duration = this.currentTime = 0;
        this.type = this.src = "";
        this.playbackRate = 1;
        this.ended = !1;
        this.paused = !0;
        this.c = [];
        this.b = "" };
    u(Y, V);
    Y.prototype.j = function() { Mc({ type: "videoCall", func: "load", src: this.src, mimetype: this.type, session: this.b }) };
    Y.prototype.u = function() { this.paused = !1;
        Mc({ type: "videoCall", func: "play", src: this.src, mimetype: this.type, session: this.b }) };
    Y.prototype.s = function() { this.paused = !0;
        Mc({ type: "videoCall", func: "pause", session: this.b }) };
    var Mc = function(a) { window.parent != window && window.parent.postMessage(mb(a), "*") };
    Y.prototype.h = function(a) { return 0 <= xa(this.c, a) ? "maybe" : "" };
    Y.prototype.A = function(a, b) { 0 <= xa(["type", "src"], a) && (this[a] = b) };
    Y.prototype.removeEventListener = function(a, b, c, d) { null != b && Y.L.removeEventListener.call(this, a, b, c, d) };
    Y.prototype.removeEventListener = Y.prototype.removeEventListener;
    Y.prototype.addEventListener = Y.prototype.g;
    Y.prototype.canPlayType = Y.prototype.h;
    Y.prototype.load = Y.prototype.j;
    Y.prototype.pause = Y.prototype.s;
    Y.prototype.play = Y.prototype.u;
    Y.prototype.setAttribute = Y.prototype.A;
    var Z = function(a, b) { U.call(this);
        this.P = !!a;
        this.a = null;
        this.I = "";
        this.O = -2;
        this.g = this.A = "";
        this.J = null;
        this.s = new Y;
        this.b = this.c = null;
        this.H = [];
        this.M = "";
        this.u = this.j = 0;
        (this.f = null != b) ? this.i(window.parent, "message", this.F): this.i(window, "message", this.F);
        null != b && (this.f = !0, this.g = b, Nc(this, "friendlyReady")) };
    u(Z, U);
    Z.prototype.R = function(a, b) { this.c = a;
        this.b = b };
    var Nc = function(a, b, c) { c = c || {};
        window.parent != window && (c.type = b, c.session = a.g, window.parent.postMessage(mb(c), "*")) };
    Z.prototype.F = function(a) {
        try { var b = jb(a.c.data) } catch (e) { return }
        a = b.type;
        var c = b.session;
        if (!this.f && "initAd" == a) this.g = c, this.s.b = this.g;
        else if (this.g != c) return;
        switch (a) {
            case "wrapperCall":
                a = this.s;
                var c = b.messageType,
                    d = !1;
                switch (c) {
                    case "ended":
                        a.ended = !0;
                        break;
                    case "pause":
                        a.paused = !0;
                        break;
                    case "play":
                        a.paused = !1;
                        a.ended = !1;
                        break;
                    case "playing":
                        a.paused = !1;
                        a.ended = !1;
                        break;
                    case "supportedMimeTypes":
                        d = !0;
                        a.c = b.supportedMimeTypes;
                        break;
                    case "timeupdate":
                        a.duration = b.duration;
                        a.currentTime = b.currentTime;
                        break;
                    case "loadedmetadata":
                        a.duration = b.duration
                }
                d || (c = { type: c }, Ic(a), b = a.f, a = c, c = a.type || a, m(a) ? a = new Q(a, b) : a instanceof Q ? a.b = a.b || b : (d = a, a = new Q(c, b), Ga(a, d)), b = a.a = b, Jc(b, c, !0, a), Jc(b, c, !1, a));
                break;
            case "initAd":
                this.M = b.clickThroughUrl;
                this.I = b.viewMode;
                this.O = b.desiredBitrate;
                this.A = b.creativeData;
                this.P ? this.N() : (this.f ? a = b.adUrl : (a = new Ib(window.location.href), a = I(a.b.toString())), this.f && this.c && (this.c.volume = b.volume), b = gb("SCRIPT", { src: a, type: "text/javascript" }), this.i(b, "load", this.N),
                    this.i(b, "error", this.h), window.document.body.appendChild(b));
                break;
            case "getAdDuration":
                Oc(this, "getAdDuration", "returnDuration", "duration");
                break;
            case "getAdRemainingTime":
                Oc(this, "getAdRemainingTime", "returnRemainingTime", "remainingTime");
                break;
            case "setAdVolume":
                null != this.a && this.a.setAdVolume(b.value);
                break;
            case "resizeAd":
                a = b.width;
                c = b.height;
                b = b.viewMode;
                this.c && this.c.style && (this.c.style.width = a + "px", this.c.style.height = c + "px");
                !this.f && this.b && this.b.style && (this.j = c, this.u = a, this.b.style.height =
                    c + "px", this.b.style.width = a + "px");
                if (null != this.a) try { this.a.resizeAd(a, c, b) } catch (e) { this.h(e) }
                break;
            case "friendlyReady":
                break;
            case "becameLinear":
                this.c && this.f && !$b() && !Zb() && ic(this.c, { visibility: "visible" });
                break;
            case "becameNonlinear":
                this.c && this.f && !$b() && !Zb() && ic(this.c, { visibility: "hidden" });
                break;
            default:
                if (this.a) { if (t(this.a[a])) this.a[a]() } else this.H.push(a)
        }
    };
    Z.prototype.h = function(a) { Nc(this, "AdError", { message: null != a ? a.message : "" }) };
    var Pc = function(a) { Ea(Kc, function(a) { if ("getAdCompanions" != a && !(a in this.a && t(this.a[a]))) throw Error("missing functions " + a); }, a); if ("2.0" != a.a.handshakeVersion("2.0")) throw Error("version"); },
        Qc = function(a) { ya(a.H, function(a) { if (t(this.a[a])) this.a[a]() }, a) };
    Z.prototype.N = function() {
        var a = window.getVPAIDAd;
        try { this.a = a(), Pc(this), Qc(this) } catch (c) { this.h(c); return }
        if (null != this.a) {
            a = this.J = new Lc(this.g, this.a, this.M);
            X(a, a.T, "AdClickThru");
            X(a, a.U, "AdDurationChange");
            X(a, a.V, "AdError");
            X(a, a.W, "AdExpandedChange");
            X(a, a.X, "AdImpression");
            X(a, a.Y, "AdInteraction");
            X(a, a.Z, "AdLinearChange");
            X(a, a.$, "AdLoaded");
            X(a, a.aa, "AdLog");
            X(a, a.ba, "AdPaused");
            X(a, a.ca, "AdPlaying");
            X(a, a.da, "AdRemainingTimeChange");
            X(a, a.ea, "AdSizeChange");
            X(a, a.ga, "AdSkipped");
            X(a,
                a.ha, "AdStarted");
            X(a, a.ia, "AdStopped");
            X(a, a.fa, "AdSkippableStateChange");
            X(a, a.ja, "AdUserAcceptInvitation");
            X(a, a.ka, "AdUserClose");
            X(a, a.la, "AdUserMinimize");
            X(a, a.ma, "AdVideoComplete");
            X(a, a.na, "AdVideoFirstQuartile");
            X(a, a.oa, "AdVideoMidpoint");
            X(a, a.pa, "AdVideoStart");
            X(a, a.qa, "AdVideoThirdQuartile");
            X(a, a.ra, "AdVolumeChange");
            X(a, a.sa, "Ping");
            this.f ? a = { slot: this.b, videoSlot: this.c } : (this.b = document.getElementById("slot"), null == this.b ? a = window.document.body : (0 != window.innerHeight ? this.b.style.height =
                window.innerHeight + "px" : 0 != this.j && (this.b.style.height = this.j + "px"), 0 != window.innerWidth ? this.b.style.width = window.innerWidth + "px" : 0 != this.u && (this.b.style.width = this.u + "px"), a = this.b), a = { slot: a, videoSlot: this.s });
            var b = { AdParameters: this.A };
            try { this.a.initAd(this.f ? this.b.clientWidth : window.innerWidth, this.f ? this.b.clientHeight : window.innerHeight, this.I, this.O, b, a) } catch (c) { this.h(c) }
        } else this.h()
    };
    var Oc = function(a, b, c, d) { var e = -1; try { e = a.a[b]() } catch (f) {}
        n(e) || (e = -1);
        b = {};
        b[d] = e;
        Nc(a, c, b) };
    Z.prototype.initFriendly = Z.prototype.R;
    window.VPAIDLoader = Z;
}).call(this);