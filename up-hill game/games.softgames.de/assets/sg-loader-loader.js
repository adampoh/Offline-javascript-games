! function(a) {
    "use strict";
    debugger;

    function b() {
        var a = "/" + e,
            b = f.getElementsByTagName("script");
        if (!b || b.length < 1) throw new Error("No scripts found");
        for (var c = null, d = 0; d < b.length; d++) {
            var g = b[d],
                h = g.src || "";
            if (-1 !== h.indexOf(a)) { c = h; break }
        }
        if (!c) throw new Error("Script url not found");
        return c.substr(0, c.lastIndexOf(a))
    }

    function c() { try { return b() + "/sg-loader.js" } catch (a) { return g.error("Failed to get loader url", a), d } }
    var d = "../assets/sg-loader.js",
        e = "sg-loader-loader.js",
        f = a.document,
        g = a.console;
    try {
        var h = f.createElement("script");
        h.type = "text/javascript", h.async = !0, h.src = c() + "?_v=v1.2.9";
        var i = f.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(h, i)
    } catch (j) { g && g.error && g.error(j) }
}(window);