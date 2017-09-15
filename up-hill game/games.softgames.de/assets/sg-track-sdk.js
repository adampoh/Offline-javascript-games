! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) { var i = "function" == typeof require && require; if (!h && i) return i(g, !0); if (f) return f(g, !0); var j = new Error("Cannot find module '" + g + "'"); throw j.code = "MODULE_NOT_FOUND", j }
            var k = c[g] = { exports: {} };
            b[g][0].call(k.exports, function(a) { var c = b[g][1][a]; return e(c ? c : a) }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function(a, b, c) {
        "use strict";
        try {
            window.sgTrackSdk = function(a, b, c, d) {
                function e(a, b, d) { o && c && (d ? a >= 3 ? c.error(b, d) : c.log(b, d) : a >= 3 ? c.error(b) : c.log(b)) }

                function f(a) {
                    var b = a.client,
                        c = a.type;
                    if (!b) throw new d("no client given");
                    if ("" === b.trim()) throw new d("invalid client given");
                    if (!c) throw new d("no type given");
                    if ("" === c.trim()) throw new d("invalid type given")
                }

                function g(a) { var b = { client: a.client, type: a.type }; return a.countEqualValues && (b.countEqualValues = !0), a.data && (b.data = a.data), b }

                function h(b) {
                    if (!m) {
                        m = !0;
                        var c = a.createElement("script");
                        c.src = "https://code.jquery.com/jquery-2.1.3.min.js", c.async = !0, c.type = "text/javascript", c.onreadystatechange = c.onload = function() { this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (c.onreadystatechange = c.onload = null, b()) }, a.getElementsByTagName("head")[0].appendChild(c)
                    }
                }

                function i(a, c, h) {
                    c = "function" == typeof c ? c : function() {};
                    try {
                        a = Array.isArray(a) ? a : [a];
                        var i = [];
                        if (a.forEach(function(a) { f(a), i.push(g(a)) }), !n) { var j = new d("No jQuery loaded to track event"); throw j.data = a, j }
                        var k = "https:" === b.location.protocol,
                            l = (k ? "https:" : "http:") + "//t.sgc.io/tracking",
                            m = !h;
                        n.ajax({
                            method: "POST",
                            url: l,
                            async: m,
                            cache: !1,
                            data: JSON.stringify(i),
                            processData: !1,
                            dataType: "json",
                            contentType: "application/json",
                            error: function(a, b, f) {
                                var g = new d("Failed to track event due to error: " + f);
                                g.data = { url: l, data: i, textStatus: b, errorThrown: f }, e(3, g.message, g.data), c(g)
                            },
                            success: function(a) {
                                try {
                                    if (!a.status) { var b = new d("Failed to track event due to invalid response"); throw b.data = { postedData: i, response: a }, b }
                                    e(0, "Successfully tracked event", { postedData: i }), c()
                                } catch (f) { e(3, f.message, f.data), c(f) }
                            }
                        })
                    } catch (j) { e(3, "Failed to send event due to error: " + j.message, j.data), c(j) }
                }

                function j(a, b, c, d) { var e = { client: a, type: b }; return d && (e.countEqualValues = !0), c && (e.data = c), e }

                function k(a, c, d) { n ? i(a, c, d) : (l.push({ events: a, callback: c }), h(function() { n = b.jQuery, l.forEach(function(a) { i(a.events, a.callback, d) }), l = [] })) }
                var l = [],
                    m = !1,
                    n = b.jQuery;
                !n && b.SG_jQuery && (n = b.SG_jQuery);
                var o = !1;
                return {
                    createEvent: function(a, b, c, d) { return j(a, b, c, d) },
                    trackEvents: function(a, b, c) { try { k(a, b, c) } catch (d) { e(3, "Failed to send events due to error: " + d.message, d.data), b(d) } },
                    trackEvent: function(a, b, c, d, f, g) {
                        try {
                            f || ("function" == typeof c && (f = c, c = null), "function" == typeof d && (f = d, d = null));
                            var h = j(a, b, c, d);
                            k(h, f, g)
                        } catch (i) { e(3, "Failed to send event due to error: " + i.message, i.data), f(i) }
                    },
                    enableDebugging: function(a) { o = !!a }
                }
            }(document, window, console, Error)
        } catch (d) { console && console.error(d) }
    }, {}]
}, {}, [1]);