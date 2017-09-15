window.sgGaTrackSdk = function(a) {
    "use strict";
    var b = a.console;
    // debugger;
    try {
        var c = a.document,
            d = function() {
                var a = Array.prototype.slice.call(arguments);
                b.log.apply(b, ["[sgGaTrackSdk]"].concat(a))
            };
        return new function() {
            function b() { return t }

            function e(b, c, e, g, h) {
                try {
                    // debugger;
                    if (d("Starting init ..."), B = g, C = h, u = b, !b) throw new Error("No code given");
                    if (c)
                        if (v = c, w = v.split(","), 1 === w.length) z.push(A);
                        else {
                            var i = 0;
                            w.forEach(function(a) { i += 1, z.push(A + i) })
                        }
                    e && (x = !0), a._gaq = a._gaq || [], f(F, function() { t = !0, d("... initiated!"), s() })
                } catch (j) { d("Failed to init", j) }
            }

            function f(a, b) {
                try {
                    var d = c.createElement("script");
                    d.type = "text/javascript", d.async = !0, d.onload = function() { try { b() } catch (a) { b(a) } }, d.src = a;
                    var e = c.getElementsByTagName("script")[0];
                    e.parentNode.insertBefore(d, e)
                } catch (f) { b(f) }
            }

            function g(b, c, e) {
                var f = b;
                e !== y && (f = e + "." + b);
                try { a._gaq.push([f, c]) } catch (g) { d(g) }
            }

            function h(a, b) { z.forEach(function(c) { g(a, b, c) }) }

            function i(b) {
                d("Track event: " + JSON.stringify(b));
                try {
                    var c = ["_trackEvent", b.category, b.action];
                    b.label && c.push(b.label), (b.value || 0 === b.value) && c.push(b.value), a._gaq.push(c)
                } catch (e) { d(e) }
            }

            function j(b) {
                try {
                    if (b = b || {}, d("Track page view: " + JSON.stringify(b)), b.custom && "object" == typeof b.custom) {
                        var c = 1;
                        Object.keys(b.custom).forEach(function(e) {
                            try {
                                var f = b.custom[e];
                                c <= 5 ? a._gaq.push(["_setCustomVar", c, e, f, 1]) : d("Too much custom variables [" + Object.keys(b.custom).length + "]. Only first 5 will be send."), c++
                            } catch (g) { d(g) }
                        })
                    }
                    h(b.action, b.params)
                } catch (e) { d("Failed to post page view", b), d(e) }
            }

            function k() {
                var a = E || [];
                E = [], a.forEach(function(a) { i(a) })
            }

            function l() {
                var a = D || [];
                D = [], a.forEach(function(a) { j(a) })
            }

            function m(a) { b() ? i(a) : E.push(a) }

            function n(a) { b() ? j(a) : D.push(a) }

            function o(a, b, c, e) { try { q(e), m({ category: a, action: b, label: c, value: e }) } catch (f) { d("Failed to track event", { game: a, action: b, param: c, value: e }), d(f) } }

            function p(a, b, c) { try { q(c), m({ category: "pg_" + B + "_" + C, action: a, label: b, value: c }) } catch (e) { d("Failed to track page event", { action: a, label: b, value: c }), d(e) } }

            function q(a) { var b = "Invalid value for analytics tracking given. Must be integer."; if (a) { if (a = Number(a), isNaN(a)) throw new Error(b); if (a % 1 != 0) throw new Error(b) } }

            function r(a, b) { var c = { action: "_trackPageview", params: a, custom: b }; try { n(c) } catch (e) { d("Failed to track page view", c), d(e) } }

            function s() {
                if (null !== u ? g("_setAccount", u, y) : d("Google Analytics Code is undefined"), null !== v)
                    if (1 === w.length) g("_setAccount", v, A), a._gaq.push([A + "._trackPageview"]);
                    else {
                        var b = 0;
                        w.forEach(function(c) { b += 1, g("_setAccount", c, A + b), a._gaq.push([A + b + "._trackPageview"]) })
                    }
                x && g("_anonymizeIp", void 0, "_gat"), k(), l()
            }
            var t = !1,
                u = null,
                v = null,
                w = null,
                x = !1,
                y = "",
                z = [y],
                A = "external",
                B = "unknown",
                C = "unknown",
                D = [],
                E = [],
                F = "../assets/dc.js";
            this.trackPageView = r, this.trackEvent = o, this.trackPgEvent = p, this.init = e
        }
    } catch (e) { b && b.error("[google-analytics] " + e.message, e.stack) }
}(window);