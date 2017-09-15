window.sgLoader = window.sgLoader || function(a) {
    "use strict";

    function b() {
        try {
            var a = "/sg-loader.js",
                b = Eb.getElementsByTagName("script");
            if (!b || b.length < 1)
                throw new Error("No scripts found");
            for (var c = null, d = 0; d < b.length; d++) {
                var e = b[d],
                    f = e.src || "";
                if (-1 !== f.indexOf(a)) {
                    c = f;
                    break
                }
            }
            if (!c)
                throw new Error("Script url not found");
            return c.substr(0, c.lastIndexOf(a))
        } catch (g) {
            return ub("Failed to get base url", g),
                ".."
        }
    }

    function c(a, b) {
        return a ? (a = String(a),
            0 === a.indexOf("//") ? b + ":" + a : a) : a
    }

    function d() {
        return "true" === e(ac)
    }

    function e(a) {
        var b = Eb.getElementsByName(a);
        return b && b.length ? b[0].getAttribute("content") : null
    }

    function f() {
        return String(a.location)
    }

    function g() {
        var a = f();
        return a ? -1 !== a.indexOf("//" + rc) : (ub("Could not determine current url"), !1)
    }

    function h() {
        try {
            var a = R();
            return a ? -1 !== tc.indexOf(a) : (ub("Could not determine publisher"), !1)
        } catch (b) {
            return ub("Failed to determine if it is a gamesmedia publisher", b), !1
        }
    }

    function i() {
        try {
            var b = j(rc);
            if (!b)
                throw new Error("Failed to change domain");
            return b += -1 !== b.indexOf("?") ? "&" : "?",
                b += sc + "=true",
                a.location = b, !0
        } catch (c) {
            return ub("Failed to redirect to gamesmedia", c), !1
        }
    }

    function j(a) {
        var b = f();
        if (!b)
            return b;
        var c = b.split("/");
        if (c[1])
            throw new Error("Invalid url: " + b);
        return c[2] = a,
            c.join("/")
    }

    function k() {
        return !!U(sc)
    }

    function l() {
        try {
            var b = f();
            if (!b)
                throw new Error("No current url");
            var c = U(),
                d = b.split("?")[0],
                e = !1;
            return c && (delete c[sc],
                    e = Object.keys(c).length > 0),
                b = d + (e ? "?" + m(c) : ""),
                a.location = b, !0
        } catch (g) {
            return ub("Failed to execute second redirect to gamesmedia", g), !1
        }
    }

    function m(a) {
        var b = "";
        return Object.keys(a).forEach(function(c) {
                var d = a[c];
                b && (b += "&"),
                    b += c + (d ? "=" + d : "")
            }),
            b
    }

    function n(a, b) {
        b = b || function() {};
        var c = Eb.createElement("img");
        c.src = a,
            c.style.width = "100%",
            Eb.body.appendChild(c);
        var d = !1,
            e = setInterval(function() {
                var a = c.getBoundingClientRect();
                // debugger;
                0 !== a.height && (d = !0,
                    clearInterval(e),
                    dc = a.width / a.height,
                    c.parentNode.removeChild(c),
                    ub("found dynamic ratio of teaser: ", dc),
                    b())
            }, 10);
        setTimeout(function() {
            d || (clearInterval(e),
                ub("Failed to get dynamic ratio for teaser"),
                c.parentNode.removeChild(c),
                dc = 300 / 180,
                b())
        }, 500)
    }

    function o() {
        if (p()) {
            var b = a.innerWidth * fc;
            return {
                width: b,
                height: b * (1 / dc)
            }
        }
        var c = a.innerHeight * ec;
        return {
            height: c,
            width: c * dc
        }
    }

    function p() {
        return a.innerWidth < a.innerHeight && a.innerWidth < ic
    }

    function q() {
        return lc.height * hc
    }

    function r() {
        var b = lc.height * gc,
            c = 0;
        return p() ? {
            width: a.innerWidth - 2 * mc,
            height: b,
            padding: c
        } : {
            width: a.innerWidth - 3 * mc - lc.width - 2 * c,
            height: b,
            padding: c
        }
    }

    function s() {
        return p() ? {
            width: a.innerWidth - 2 * mc,
            height: a.innerHeight - (lc.height + 4 * mc + nc.height + 2 * nc.padding)
        } : {
            width: a.innerWidth - 2 * mc,
            height: a.innerHeight - (lc.height + 3 * mc)
        }
    }

    function t() {
        return {
            marginTop: lc.height / 2 - nc.height / 2,
            marginRight: mc
        }
    }

    function u(a, b) {
        function c(a) {
            h || (h = !0,
                b(a, f))
        }

        function d(a) {
            return function(b, d) {
                try {
                    if (i[a])
                        return void ub("Callback of step " + a + " called a second time");
                    if (i[a] = !0,
                        g++,
                        b)
                        throw b;
                    f[a] = d,
                        g === e && c()
                } catch (h) {
                    c(h)
                }
            }
        }
        var e = a.length,
            f = [],
            g = 0,
            h = !1,
            i = [];
        try {
            a.forEach(function(a, b) {
                a(d(b))
            })
        } catch (j) {
            c(j)
        }
    }

    function v(a) {
        w(Qb, function(b) {
            try {
                if (b)
                    throw b;
                z(a)
            } catch (c) {
                a(c)
            }
        })
    }

    function w(a, b) {
        try {
            d() || X() ? y(a, b) : x(a, b)
        } catch (c) {
            b(c)
        }
    }

    function x(a, b) {
        b = b || function() {};
        try {
            var c = Eb.getElementsByTagName("head")[0],
                d = Eb.createElement("link");
            d.id = "softgames-loader-css",
                d.rel = "stylesheet",
                d.type = "text/css",
                d.media = "all",
                d.onload = function() {
                    b()
                },
                d.href = a,
                c.appendChild(d)
        } catch (e) {
            b(e)
        }
    }

    function y(a, b) {
        b = b || function() {};
        try {
            var c = new Image;
            c.onerror = function() {
                    try {
                        x(a),
                            b()
                    } catch (c) {
                        b(c)
                    }
                },
                c.src = a
        } catch (d) {
            b(d)
        }
    }

    function z(a) {
        try {
            ub("Displaying teaser"),
                Eb.body ? A(a) : Eb.addEventListener("DOMContentLoaded", function() {
                    A(a)
                }, !1)
        } catch (b) {
            a(b)
        }
    }

    function A(b) {
        var c = C();
        ha(c.url, function() {
            var d = Eb.createElement("div");
            d.className = "sg-loader-teaser-overlay";
            var e = Eb.createElement("div");
            e.className = "sg-loader-teaser-overlay-content",
                e.style.width = a.innerWidth + "px";
            var f = Eb.createElement("div");
            f.className = W() ? "sg-loader-header-mobile" : "sg-loader-header",
                f.style.width = 2 * a.innerWidth + "px";
            var g = Eb.createElement("div"),
                h = "sg-loader-teaser";
            c.useSmallTeaser || (h += " sg-loader-big-teaser"),
                kc = E(c.useSmallTeaser);
            var i = -oc.height * jc;
            g.className = h,
                g.style.marginTop = i + "px",
                g.style.width = kc.width + "px",
                g.style.height = kc.height + "px";
            var j = Eb.createElement("img");
            j.className = "sg-loader-teaser-img",
                j.src = c.url;
            var k = Eb.createElement("img");
            k.className = "sg-loader-teaser-softgames",
                k.src = Yb;
            var l = Eb.createElement("div");
            l.className = "sg-loader-button-container",
                l.style.marginTop = p() ? mc / 2 + "px" : mc + "px";
            var m = Eb.createElement("img");
            m.className = "sg-loader-spinner",
                m.src = Vb;
            var n = Eb.createElement("div");
            n.className = "sg-loader-button",
                n.style.display = "none",
                n.style.marginTop = mc + "px",
                n.style.marginBottom = mc + "px";
            var o = Eb.createElement("div");
            o.className = "sg-loader-button-background";
            var q = Eb.createElement("div");
            q.className = "sg-loader-button-overlay";
            var r = Eb.createElement("div");
            r.className = "sg-loader-button-triangle";
            var s = Eb.createElement("div");
            s.className = "sg-loader-ad-container",
                s.style.width = oc.width + "px",
                s.style.height = oc.height + "px",
                s.style.margin = mc + "px",
                s.style.marginBottom = 0,
                s.style.opacity = 0,
                s.style.visibility = "hidden";
            var t = Eb.createElement("div");
            if (t.id = "sg-loader-ad-slot",
                t.className = "sg-loader-ad-slot",
                t.style.width = oc.width + "px",
                t.style.height = oc.height + "px",
                s.appendChild(t),
                n.appendChild(o),
                n.appendChild(q),
                n.appendChild(r),
                e.appendChild(f),
                e.appendChild(s),
                g.appendChild(j),
                B(k, j),
                Ab("TeaserDisplayed", {}),
                d.style.backgroundImage = "url(" + Wb + ")", !W()) {
                var u = Eb.createElement("div"),
                    v = kc.width + 2 * mc;
                u.className = "sg-loader-card sg-loader-shadow",
                    u.style.width = v + "px",
                    u.style.height = kc.height + 3 * mc + 88 + "px",
                    u.style.marginTop = i - mc + "px",
                    u.style.marginLeft = a.innerWidth / 2 - v / 2 + "px",
                    e.appendChild(u)
            }
            e.appendChild(g),
                l.appendChild(m),
                l.appendChild(n),
                e.appendChild(l),
                d.appendChild(e),
                Eb.body.appendChild(d),
                _c.overlay = d,
                _c.spinner = m,
                _c.button = n,
                _c.adContainer = s,
                _c.adSlot = t,
                _c.teaser = g,
                "function" == typeof b && b()
        })
    }

    function B(a, b) {
        b.parentNode.insertBefore(a, b.nextSibling)
    }

    function C(a) {
        var b = a || D();
        try {
            if (!Bc) {
                var c = b ? $b : _b,
                    d = Eb.getElementsByName(c);
                if (!d)
                    throw new Error(c + " not found");
                var e = d[0].getAttribute("content");
                if (!e)
                    throw new Error(c + " has no content");
                Bc = e
            }
            return {
                url: Bc,
                useSmallTeaser: b
            }
        } catch (f) {
            if (!b)
                return C(!0);
            throw f
        }
    }

    function D() {
        return a.innerWidth - 20 < 600 || a.innerHeight - 125 < 360
    }

    function E(a) {
        return a ? {
            width: 300,
            height: 300 / dc
        } : {
            width: 400,
            height: 400 / dc
        }
    }

    function F(b) {
        try {
            ub("Loading media controller..."),
                a.sgPlatformRestrictedHostname = O();
            G(a.sgPlatformRestrictedHostname ? Lb : Kb, function(a) {
                if (a)
                    return ub("... failed to load media controller"),
                        void b(a);
                ub("... media controller loaded"),
                    b()
            })
        } catch (c) {
            b(c)
        }
    }

    function G(a, b, c) {
        "function" == typeof b && (c = b,
                b = null),
            b = b || Mb;
        try {
            if (!a || !a.trim())
                throw new Error("No url given");
            Cc ? Cc.ajax({
                method: "GET",
                url: a,
                dataType: "script",
                timeout: b,
                crossDomain: !0,
                cache: !0,
                success: function(b, d, e) {
                    try {
                        if (200 !== e.status)
                            throw new Error("Failed to load script: " + a + "! Status: " + e.status);
                        c()
                    } catch (f) {
                        c(f)
                    }
                },
                error: function(b, d, e) {
                    c(new Error('Failed to load: "' + a + '" due to status: "' + d + '" and error "' + e + '"'))
                }
            }) : H(a, b, c)
        } catch (d) {
            c(d)
        }
    }

    function H(a, b, c) {
        b = b || Mb;
        var d = Eb.createElement("script"),
            e = null;
        d.type = "text/javascript",
            d.async = !0,
            d.onload = function() {
                try {
                    e && clearTimeout(e),
                        c()
                } catch (a) {
                    c(a),
                        ub(a)
                }
            },
            d.onerror = function() {
                e && clearTimeout(e),
                    c(new Error("Failed to load script: " + a))
            },
            d.src = a;
        var f = Eb.getElementsByTagName("script")[0];
        f.parentNode.insertBefore(d, f),
            e = setTimeout(function() {
                c(new Error("Failed to load script due to timeout: " + a))
            }, b)
    }

    function I(a) {
        try {
            ub("Loading jQuery..."),
                G(Ub, function(b) {
                    if (b)
                        return ub("... failed to load jQuery"),
                            void a(b);
                    ub("... jQuery loaded"),
                        a()
                })
        } catch (b) {
            a(b)
        }
    }

    function J(a) {
        try {
            u([K, L], a)
        } catch (b) {
            a(b)
        }
    }

    function K(a) {
        ub("Loading advertisement.js..."),
            G(Pb, function(b) {
                if (b)
                    return ub("... failed to load ad.js probably due to ad blocker"),
                        void a(b);
                H(Pb, 200, function(b) {
                    b ? ub("... failed to load ad.js probably due to ad blocker") : (ub("... loaded advertisement.js"),
                        a(b))
                })
            })
    }

    function L(a) {
        ub("Loading showAds.js..."),
            G(Ob, function(b) {
                if (b)
                    return ub("... failed to load ad.js probably due to ad blocker"),
                        void a(b);
                H(Ob, 200, function(b) {
                    b ? ub("... failed to load ad.js probably due to ad blocker") : (ub("... loaded showAds.js"),
                        a(b))
                })
            })
    }

    function M(b) {
        try {
            ub("Loading ga track js..."),
                G(Tb, function() {
                    Yc = a.sgGaTrackSdk,
                        ub("... Loading ga track js")
                }),
                b()
        } catch (c) {
            b(c)
        }
    }

    function N(a) {
        ub("Loading config ...");
        var b = !1,
            c = function(c, d) {
                b || (b = !0,
                    ub("... config Loaded"),
                    a(c, d))
            };
        try {
            debugger;
            var d = P(Q()),
                e = new XMLHttpRequest;
            d = "../assets/softgames.json";
            // e.setRequestHeader("Origin", "*");
            // e.setRequestHeader("Access-Control-Request-Method", "GET");
            // e.setRequestHeader("Access-Control-Request-Headers", "X-Requested-With");
            // e.setRequestHeader("Access-Control-Allow-Origin", "*");
            // e.setRequestHeader('Access-Control-Allow-Methods: GET, POST, PUT');
            // e.setRequestHeader("Access-Control-Allow-Headers: X-Requested-With, Content-Type");

            // e.setRequestHeader("Access-Control-Allow-Origin", "*");
            // e.setRequestHeader("Access-Control-Expose-Headers", "X-My-Custom-Header, X-Another-Custom-Header");
            // e.setRequestHeader("Access-Control-Allow-Credentials", true);
            // e.setRequestHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
            // e.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

            e.open("GET", d, !0),
                // e.setRequestHeader("Origin", "*"),
                // e.setRequestHeader("Access-Control-Request-Method", "GET"),
                // e.setRequestHeader("Access-Control-Request-Headers", "X-Requested-With"),
                // e.setRequestHeader("Access-Control-Allow-Origin", "*"),
                // e.setRequestHeader('Access-Control-Allow-Methods: GET, POST, PUT'),
                // e.setRequestHeader("Access-Control-Allow-Headers: X-Requested-With, Content-Type"),

                // e.setRequestHeader("Access-Control-Allow-Origin", "*"),
                // e.setRequestHeader("Access-Control-Expose-Headers", "X-My-Custom-Header, X-Another-Custom-Header"),
                // e.setRequestHeader("Access-Control-Allow-Credentials", true),
                // e.setRequestHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS"),
                // e.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"),

                // e.setRequestHeader("Access-Control-Allow-Origin", "*"),
                // e.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                // e.setRequestHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS"),
                // e.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"),
                // e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                // e.setRequestHeader("Access-Control-Allow-Credentials", "true"),
                // e.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"),
                // e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                // e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                e.onreadystatechange = function() {
                    try {
                        // if (e.status == 0) {
                        // e.status = 200;
                        // }
                        // 4 === e.readyState && (200 === e.status ? c(null, JSON.parse(e.responseText)) : c(new Error(e.statusText)))
                        4 === e.readyState && (c(null, JSON.parse(e.responseText)))
                    } catch (a) {
                        c(a)
                    }
                },
                e.send(null)
        } catch (f) {
            c(f)
        }
    }

    function O() {
        return uc.indexOf(Eb.location.hostname) > -1
    }

    function P(a) {
        var b = Hb;
        // debugger;
        O() && (b = Ib),
            a.publisherName && (b += "&publisherName={publisherName}"),
            // a.gameHost && (b += "&gameHost={gameHost}");
            a.gameHost && (b);
        for (var c in a)
            a.hasOwnProperty(c) && (b = b.replace("{" + c + "}", a[c]));
        var d = U("locale");
        return d && (b += "&locale=" + d),
            b
    }

    function Q() {
        return {
            gameSlug: T(),
            env: W() ? "mobile" : "desktop",
            publisherName: R(),
            gameHost: S()
        }
    }

    function R() {
        var a = e(cc);
        return a || (a = U("p") || U("host") || tb(wc) || null),
            a
    }

    function S() {
        return Eb.location.hostname
    }

    function T() {
        var b = Eb.getElementsByName(bc);
        if (b && b.length) {
            var c = b[0].getAttribute("content");
            if (c)
                return c
        }
        var d = U("game");
        if (d)
            return d;
        var e = a.location || {},
            f = /^\/(.*)\//.exec(e.pathname);
        if (f && (d = f[1]), !d)
            throw new Error("Could not determine game slug");
        return d
    }

    function U(a) {
        var b = {};
        return V().replace(/[?&]+([^=&]+)=([^&]*)/gi, function(a, c, d) {
                b[c] = d
            }),
            a ? b[a] : b
    }

    function V() {
        var b = a.location || {};
        return b.href || String(b)
    }

    function W() {
        var b = a.navigator || {},
            c = b.userAgent || b.vendor || a.opera;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c)
    }

    function X() {
        return (a.navigator || {}).userAgent.toLowerCase().indexOf("android") > -1
    }

    function Y() {
        try {
            if (Hc && Ic || la("loaderPageClosedBeforeFinish"),
                Hc)
                return;
            la("browserClosedDuringAdProcess", !0)
        } catch (a) {
            ub("Error during close window event handling: ", a)
        }
    }

    function Z() {
        try {
            a.addEventListener("beforeunload", Y)
        } catch (b) {
            ub("Could not add beforeunload event handler")
        }
    }

    function $() {
        try {
            a.removeEventListener("beforeunload", Y)
        } catch (b) {
            ub("Could not remove beforeunload event handler")
        }
    }

    function _() {
        try {
            return void 0 !== U(vc)
        } catch (a) {
            ub("Could not check redirect to pure game url flag")
        }
        return !1
    }

    function aa() {
        var a = new Date;
        a.setTime(a.getTime() + xc);
        var b = a.toUTCString();
        sb(wc, U("p"), {
            expires: b
        })
    }

    function ba() {
        try {
            return _()
        } catch (a) {
            ub("Could not check if should be redirected to pure game URL")
        }
        return !1
    }

    function ca() {
        try {
            var b = a.location.origin + a.location.pathname;
            a.location = b
        } catch (c) {
            ub("Cannot redirect to pure game URL:", c)
        }
    }

    function da() {
        return Math.ceil(10 * Math.random()) % 2
    }

    function ea(a) {
        try {
            return Ac.indexOf(a.gameSlug) > -1 && a.fastLoadingFlowEnabled ? Dc : a.fastLoadingFlowEnabled
        } catch (b) {
            ub.error("Error while checking if fast flow is enabeled", b)
        }
        return a.fastLoadingFlowEnabled
    }

    function fa(b, c) {
        try {
            // debugger;
            if (b)
                throw b;
            if (ub("First portion of requirements Loaded!"), !(Cc = a.jQuery))
                throw new Error("jQuery not yet loaded");
            if (!(Gc = c[2]))
                throw Gc = {},
                    new Error("No config given");
            if (ja(Gc),
                Db(yc, Gc),
                $c = ga(Gc),
                ea(Gc)) {
                if (ka("loaderDisplayed"),
                    la("loaderAdFlowStarted"),
                    Z(),
                    ua(),
                    w(Zb),
                    Vc = !0,
                    Gc.documentDomain) {
                    var d = String(Eb.domain);
                    Eb.domain = Gc.documentDomain,
                        ub("Changed document domain from " + d + " to " + Eb.domain)
                }
                if ($c)
                    return ub("Partner has ads disabled"),
                        la("loaderAdsDisabled"),
                        la("loaderAdFlowDone", "adsDisabled"),
                        void ma();
                J(function(b) {
                    b ? (Wc = !0,
                        ra(),
                        la("loaderAdBlocker"),
                        Gc.blockOnAdBlock ? (na(),
                            la("loaderAdFlowDone", "gameBlockedByAdBlocker")) : (ya(p(), za),
                            a.addEventListener("message", Ua),
                            gb(),
                            Hc = !0,
                            la("loaderAdFlowDone", "gameNotBlockedByAdBlocker"))) : F(ia)
                })
            } else
                Vc = !1,
                ub("Fast flow not enabled for partner: " + Gc.publisherName),
                gb()
        } catch (e) {
            ub("Failed loading requirements"),
                ub(e),
                xb()
        }
    }

    function ga(a) {
        if (a.skipAds)
            return !0;
        var b = Qa(a);
        return a.disablePrerollForNewUsers && b.isNew
    }

    function ha(a, b) {
        // debugger;
        n(a, function() {
            lc = o(),
                mc = q(),
                nc = r(),
                oc = s(),
                pc = t(),
                "function" == typeof b && b()
        })
    }

    function ia(b) {
        try {
            if (b)
                throw b;
            ub("All requirements Loaded!"),
                Fc = a.SG_MC,
                a.addEventListener("message", Ua),
                Oa(),
                W() || ya(p(), za)
        } catch (c) {
            ub("Error in requirementsLoadedHandler"),
                ub(c),
                wb()
        }
    }

    function ja(a) {
        try {
            // debugger;
            Yc ? Yc.init(a.gaCode, a.gaExternalCode, a.gaAnonymizeIp, a.publisherId, a.gameId) : ub("Track sdk not loaded")
        } catch (b) {
            ub("Failed to init tracking"),
                ub(b)
        }
    }

    function ka(a) {
        try {
            var b = Gc || {};
            Yc ? Yc.trackPageView("/kirk/" + (b.gameSlug || "undefined") + "/" + a, {
                subplatform: b.publisherName || "unknown",
                affiliate: U("aff")
            }) : ub("Track sdk not loaded to track action:", a)
        } catch (c) {
            ub("Failed to track action"),
                ub(c)
        }
    }

    function la(a, b, c) {
        try {
            var d = Gc || {};
            a = a || "",
                b = b || "",
                c = c || "",
                Yc ? Yc.trackEvent("kirk-" + d.gameSlug, String(a), String(b), String(c)) : ub("Track sdk not loaded to track event:", a)
        } catch (e) {
            ub("Failed to track event"),
                ub(e)
        }
    }

    function ma() {
        Hc = !0,
            Cc(_c.spinner).hide(),
            a.addEventListener("message", Ua),
            gb(),
            va(function() {
                var b = Cc(".sg-loader-logo-container");
                b.css({
                        width: kc.width / 2,
                        height: kc.height / 3
                    }),
                    b.css({
                        top: Cc(".sg-loader-teaser").offset().top + kc.height + mc,
                        left: Cc(a).width() / 2 - b.width() / 2
                    }),
                    wa()
            }),
            Ea(p()),
            Ka();
        var b = Cc(".sg-loader-loading-bar"),
            c = Cc(".sg-loader-loading-text");
        c.css({
                "font-size": p() ? "4vw" : "2.5vw"
            }),
            c.css({
                position: "absolute",
                top: Cc(a).height() - c.height() - b.height() - 1.5 * mc,
                "margin-left": Cc(a).width() / 2 - nc.width / 2,
                "text-align": "center"
            }),
            b.css({
                position: "absolute",
                "margin-top": 0,
                top: Cc(a).height() - b.height() - mc
            })
    }

    function na() {
        if (Cc(_c.spinner).hide(),
            W()) {
            sa(".sg-loader-teaser-overlay-content", !1, !0, !0);
            var b = Cc(".sg-loader-blocker-container");
            b.css({
                    position: "absolute",
                    top: mc,
                    width: Cc(a).width() - 2 * mc
                }).addClass("sg-loader-shadow"),
                b.css({
                    "margin-left": Cc(a).width() / 2 - b.width() / 2
                }),
                ya(!0, function() {
                    oa(),
                        pa()
                })
        } else
            sa(".sg-loader-teaser", !1, !1, !0),
            Cc(".sg-loader-blocker-container").css({
                "margin-left": Cc(".sg-loader-teaser").width() / 2 - Cc(".sg-loader-blocker-container").width() / 2
            })
    }

    function oa() {
        var a = Cc("<div>").addClass("sg-loader-blocker-refresh").append("Disable ad-blocker and refresh the browser.").css({
            "margin-top": Cc(".sg-loader-teaser").height() + mc
        });
        a.insertAfter(Cc(_c.teaser)),
            W && !p() && (a.css("margin-top", 0),
                Cc(".sg-loader-teaser").css("margin-top", -mc))
    }

    function pa() {
        Cc(".sg-loader-blocker-container, .sg-loader-blocker-refresh").animate({
            opacity: 1
        }, {
            duration: 500,
            complete: function() {}
        })
    }

    function qa() {
        Cc(".sg-loader-darkred").css({
            "line-height": Cc(".sg-loader-ad-blocker-image").height() + "px"
        })
    }

    function ra() {
        Wc && !Gc.blockOnAdBlock && sa(".sg-loader-ad-slot", !0, !1, !1)
    }

    function sa(a, b, c, d) {
        var e = oc.height - 2 * mc,
            f = oc.width - 2 * mc,
            g = Cc("<div>").addClass("sg-loader-blocker-container").css({
                width: f,
                height: e,
                opacity: c ? 0 : 1
            });
        W() && !p() && g.css("max-width", "300px");
        var h = Cc("<div>").addClass("sg-loader-ad-blocker-title sg-loader-padding").append("Oh-no, it seems you are using an Ad-blocker.").css("padding-top", mc),
            i = Cc("<div>").addClass("sg-loader-ad-blocker-paragraph sg-loader-padding").append(""),
            j = Cc("<div>").addClass("sg-loader-ad-blocker-image-row sg-loader-padding"),
            k = Cc("<div>").addClass("sg-loader-ad-blocker-image-container"),
            l = Cc("<div>").addClass("sg-loader-ad-blocker-bold sg-loader-darkred").append("DISABLE"),
            m = Cc("<img>").addClass("sg-loader-ad-blocker-image").attr("src", Xb).on("load", qa);
        k.append(m);
        var n = Cc("<div>").addClass("sg-loader-ad-blocker-bold sg-loader-darkred").append("ADBLOCK"),
            o = Cc("<div>").addClass("sg-loader-ad-blocker-paragraph sg-loader-red sg-loader-padding").append(Gc.blockOnAdBlock ? "Please disable your Ad-blocker and refresh the page." : "In the future, please disable your Ad-blocker.");
        if (j.append(l).append(k).append(n),
            g.append(h).append(i).append(j).append(o),
            Cc(a).append(g),
            Cc(".sg-loader-padding").css({
                "padding-left": mc,
                "padding-right": mc,
                "padding-bottom": mc
            }),
            b && g.css({
                "margin-top": oc.height / 2 - g.height() / 2,
                "margin-left": oc.width / 2 - g.width() / 2
            }), !W() && d) {
            var q = Cc(".sg-loader-card");
            q.css("height", q.height() + g.height() - kc.height / 2),
                g.css({
                    width: q.width() - 2 * mc,
                    "margin-left": mc,
                    background: "transparent"
                })
        }
    }

    function ta() {
        var a = Cc("<div>").addClass("sg-loader-click-to-play").append("").css("margin-top", (p(),
            mc + "px"));
        Cc(".sg-loader-teaser-overlay-content").append(a)
    }

    function ua() {
        Gc.partnerLogo && Cc("body").append(Cc("<img>").attr("src", Gc.partnerLogo).css("display", "none"))
    }

    function va(a) {
        if (Gc.partnerLogo) {
            var b = Cc("<div>").addClass("sg-loader-logo-container").css({
                "background-image": "url(" + Gc.partnerLogo + ")",
                width: lc.width,
                height: lc.height / 2,
                top: oc.height + 2 * mc,
                right: mc,
                opacity: 0
            });
            p() && b.css({
                    width: lc.width,
                    height: lc.height,
                    top: oc.height + 1.5 * mc,
                    "background-position": "center center"
                }),
                b.insertAfter(Cc(".sg-loader-ad-container")),
                "function" == typeof a && a()
        }
    }

    function wa() {
        Cc(".sg-loader-logo-container").animate({
            opacity: 1
        }, {
            duration: 400
        })
    }

    function xa() {
        Cc(".sg-loader-logo-container").animate({
            opacity: 0
        }, {
            duration: 300
        })
    }

    function ya(b, c) {
        try {
            if (Oc)
                return void ub("Teaser Animation called a second time");
            Oc = !0,
                ub("Animate teaser called"),
                Ba(),
                Aa(),
                Ca(),
                Cc(_c.button).hide(),
                Cc(_c.spinner).hide(),
                Cc(".sg-loader-click-to-play").hide();
            var d = b ? mc / 2 : mc;
            d = Wc && Gc.blockOnAdBlock && W() && !p() ? -mc : d;
            var e = b ? a.innerWidth / 2 - lc.width / 2 : mc;
            e = b && Gc.partnerLogo ? mc : e,
                Cc(_c.teaser).animate({
                    width: lc.width,
                    height: lc.height,
                    "margin-left": e,
                    "margin-right": b ? a.innerWidth / 2 - lc.width / 2 : 0,
                    "margin-top": d
                }, {
                    duration: 1e3,
                    complete: function() {
                        Cc(this).css("float", "left"),
                            b || Cc(this).css("margin-right", mc),
                            "function" == typeof c && c(b)
                    }
                })
        } catch (f) {
            ub("Failed to animate teaser"),
                ub(f),
                xb()
        }
    }

    function za(a) {
        va(wa),
            Da(),
            Ea(a),
            Ka()
    }

    function Aa() {
        W() || Cc(".sg-loader-card").animate({
            opacity: 0
        }, 1e3)
    }

    function Ba() {
        Cc(".sg-loader-header, .sg-loader-header-mobile").animate({
            opacity: 0
        }, 1e3)
    }

    function Ca() {
        Cc(".sg-loader-teaser-softgames").animate({
            opacity: 0
        }, 1e3)
    }

    function Da() {
        var a = Cc(_c.adContainer);
        a.css("visibility", "inherit"),
            a.animate({
                opacity: 1
            }, {
                duration: 500
            })
    }

    function Ea(b) {
        var c = Cc("<div>").addClass("sg-loader-loading-bar"),
            d = Cc("<div>").addClass("sg-loader-bar"),
            e = Cc("<div>").addClass("sg-loader-bar-background"),
            f = Cc("<div>").addClass("sg-loader-bar-opacity");
        d.append(e),
            d.append(f),
            c.append(d),
            c.insertAfter(Cc(_c.teaser));
        var g = nc.height;
        c.css({
                height: nc.height,
                width: g,
                padding: nc.padding + "px"
            }),
            b || $c ? c.css({
                "margin-top": mc + lc.height,
                "margin-left": Cc(a).width() / 2 - g / 2
            }) : c.css({
                "margin-left": Cc(a).width() / 2 - nc.height / 2 - 3 * mc - lc.width,
                float: "left"
            }),
            e.height(d.height()),
            f.height(d.height()),
            Fa(b)
    }

    function Fa(a) {
        Cc(".sg-loader-loading-bar").animate({
            opacity: 1
        }, {
            duration: 500,
            complete: function() {
                Ha(a)
            }
        })
    }

    function Ga() {
        Cc(".sg-loader-loading-text").animate({
            opacity: 1
        }, {
            duration: 500
        })
    }

    function Ha(b) {
        var c = $c ? Cc(a).width() / 2 - nc.width / 2 : 0;
        c = b ? mc : c,
            Cc(".sg-loader-loading-bar").animate({
                "margin-left": c,
                width: nc.width
            }, {
                duration: 1e3,
                complete: function() {
                    Ga(),
                        Ia()
                }
            })
    }

    function Ia() {
        // debugger;
        if (!Ic && !Mc) {
            ub("Start loading bar");
            var a = Lc || 2e4,
                b = 80,
                c = Date.now();
            Mc = setInterval(function() {
                var d = Date.now(),
                    e = d - c,
                    f = Math.min(e * b / a, b);
                Ja(f),
                    f >= b && (clearInterval(Mc),
                        Mc = null)
            }, 100)
        }
    }

    function Ja(a) {
        Cc(".sg-loader-bar").width(a + "%"),
            Cc(".sg-loader-bar-background, .sg-loader-bar-opacity").width(Cc(".sg-loader-bar").width() + "px")
    }

    function Ka() {
        var b = Cc("<div>").addClass("sg-loader-loading-text");
        p() && !$c ? b.insertAfter(Cc(".sg-loader-loading-bar")) : b.insertAfter(Cc(".sg-loader-teaser")),
            La(),
            p() ? b.css({
                "margin-top": mc / 4 + "px",
                "margin-left": mc + "px",
                width: Cc(a).width() - 2 * mc,
                "text-align": "center"
            }) : b.css({
                "margin-top": Math.max(0, Cc(".sg-loader-teaser").outerHeight(!0) - (b.height() + Cc(".sg-loader-bar").height() + mc)),
                "margin-right": pc.marginRight,
                width: Cc(a).width() - lc.width - 5 * mc
            });
        var c = setInterval(function() {
            Ic && Hc && clearInterval(c),
                La()
        }, 2500)
    }

    function La() {
        if (5145 === Gc.publisherId)
            return void Ma("ゲームデータをロード中");
        Xc.length > 0 ? Ma(Xc.splice(Na(0, Xc.length), 1)[0]) : Gc.loadingTexts && Gc.loadingTexts.length > 0 && (Xc = Cc.extend(!0, [], Gc.loadingTexts),
            La())
    }

    function Ma(a) {
        Cc(".sg-loader-loading-text").text(a)
    }

    function Na(a, b) {
        try {
            return Math.floor(Math.random() * (b - a) + a)
        } catch (c) {
            return ub("Failed to generate random number", c),
                null
        }
    }

    function Oa() {
        var a = Gc.adsConfiguration,
            b = Pa(Gc);
        Fc.injectConfiguration(b, a, function(a) {
            try {
                if (a)
                    throw a;
                Fc.displayMedia(Fc.SLOTS.SG_LOADER, {
                        showPlayButton: Ta
                    }, pb),
                    ub("Sent ad call to media controller"),
                    Ab("PrerollAdLoading")
            } catch (b) {
                ub("Failed to inject configuration into media controller"),
                    ub(b),
                    wb()
            }
        })
    }

    function Pa(a) {
        if (!a)
            return {};
        var b = Qa(a);

        return {
            publisherId: a.publisherId,
            publisher: a.publisherName,
            gameId: a.gameId,
            game: a.gameSlug,
            isMobile: W(),
            agentPlan: a.agentPlan,
            clientIpHash: a.clientIp,
            userAgent: a.userAgent,
            country: null,
            disablePrerollForNewUsers: a.disablePrerollForNewUsers,
            userId: b.id,
            isNewUser: b.isNew
        }
    }

    function Qa(a) {
        var b = "SG_PC_candyCrushMediaData_" + a.publisherId,
            c = Sa(b),
            d = !1;
        return c || (d = !0,
                c = Date.now() + "_" + Na(1, 1e5)),
            Ra(b, c, 1825), {
                id: c,
                isNew: d
            }
    }

    function Ra(a, b, c) {
        try {
            var d;
            if (c) {
                var e = new Date;
                e.setTime(e.getTime() + 24 * c * 60 * 60 * 1e3),
                    d = "; expires=" + e.toGMTString()
            } else
                d = "";
            Eb.cookie = a + "=" + b + d + "; path=/"
        } catch (f) {
            ub("Failed to write cookie"),
                ub(f)
        }
    }

    function Sa(a) {
        try {
            for (var b = a + "=", c = Eb.cookie.split(";"), d = 0; d < c.length; d++) {
                for (var e = c[d];
                    " " === e.charAt(0);)
                    e = e.substring(1, e.length);
                if (0 === e.indexOf(b))
                    return e.substring(b.length, e.length)
            }
        } catch (f) {
            ub("Failed to read cookie"),
                ub(f)
        }
        return null
    }

    function Ta(b) {
        _c.button.onclick = function() {
                la("loaderAdPlayButtonClicked"),
                    ub("Play button clicked"),
                    W() && (Ab("PrerollPreAdPlayButtonClicked", {}),
                        xa(),
                        ya(p(), za),
                        Cc(".sg-loader-logo-container").hide()),
                    _c.button.style.display = "none",
                    "function" == typeof b && b()
            },
            W() && !Gc.skipButtons ? (_c.spinner.style.display = "none",
                _c.button.style.display = "block",
                Cc(_c.button).addClass("pulsating"),
                ta(),
                Ab("PrerollPreAdPlayButtonVisible", {}),
                va(function() {
                    var b = Cc(".sg-loader-logo-container");
                    b.css({
                            width: kc.width / 2,
                            height: kc.height / 3
                        }),
                        b.css({
                            top: Cc(".sg-loader-teaser").offset().top + kc.height + 2 * mc + Cc(".sg-loader-button").outerHeight(!0) + Cc(".sg-loader-click-to-play").height(),
                            left: Cc(a).width() / 2 - b.width() / 2
                        }),
                        wa()
                })) : Cc(_c.button).trigger("click")
    }

    function Ua(a) {
        try {
            var b = a.data || {};
            "mediaController" === b.system ? "displayed" === b.action && (ub("Caught ad ready message", b),
                Va(b.data)) : "softgames1.1" === b.system && ("gameLoaded" === b.action ? hb() : "startLoadingGame" === b.action && Ab("GameLoading", {}))
        } catch (c) {
            ub("Error during message handling: ", c)
        }
    }

    function Va(a) {
        ub("Got ad displayed event", a),
            Ab("PrerollAdDisplay", {}),
            a ? a.isVideo ? (Jc = !0,
                a.duration && (Lc = 1e3 * a.duration)) : (Jc = !1,
                la("loaderAdFlowDone", "banner"),
                Hc = !0,
                Wa(),
                W() && ya(p(), za)) : (la("loaderAdFlowDone", "noData"),
                Hc = !0,
                Wa()),
            gb(),
            Cc(".sg-loader-ad-text").remove()
    }

    function Wa() {
        if (ub("Caught finish event", {
                adPlaybackDone: Hc,
                gameLoaded: Ic
            }),
            Hc && Jc && !Sc && ($(),
                $c || Wc || (Sc = !0)),
            (Ic || !Hc || !Jc) && Hc && Ic) {
            if (!(Jc || Kc || $c || Gc.skipButtons))
                return void nb(function() {
                    Xa(function(a) {
                        a && ub(a),
                            ub("Start banner ad cleanup"),
                            $();
                        try {
                            bb(),
                                $c || Wc || Sc || (Sc = !0)
                        } catch (b) {
                            ub("cleanUpAd failed", b),
                                xb()
                        }
                    })
                });
            if (!Kc && !$c)
                return void bb();
            ub("All events caught, start closing process"),
                cb(),
                eb()
        }
    }

    function Xa(a, b) {
        try {
            if (Uc)
                return;
            Uc = !0;
            var c = Cc("<div>").addClass("sg-loader-play-game-button"),
                d = Cc("<div>").addClass("sg-loader-button-background"),
                e = Cc("<div>").addClass("sg-loader-button-overlay"),
                f = Cc("<div>").addClass("sg-loader-triangle-container"),
                g = Cc("<div>").addClass("sg-loader-triangle");
            f.append(g),
                c.append(d).append(e).append(f),
                c.insertAfter(Cc(_c.button));
            var h = Cc("<div>").addClass("sg-loader-click-to-play-end").append(W() ? "Tap to play!" : "Click to play!");
            p() ? h.insertAfter(c) : h.insertBefore(c.parent()),
                _a(b),
                c.on("click", function() {
                    "function" == typeof a && a()
                })
        } catch (i) {
            a(i)
        }
    }

    function Ya(a) {
        Cc(".sg-loader-loading-text").animate({
            opacity: 0
        }, {
            duration: 500,
            complete: function() {
                Za(a)
            }
        })
    }

    function Za(b) {
        var c = p() || Tc || $c ? Cc(a).width() / 2 : Cc(a).width() / 2 - nc.height / 2 - 3 * mc - lc.width;
        Cc(".sg-loader-loading-bar").animate({
            width: nc.height,
            "margin-left": c + "px"
        }, {
            duration: 1e3,
            complete: function() {
                Cc(this).hide(),
                    Cc(".sg-loader-loading-text").remove(),
                    "function" == typeof b && b()
            }
        })
    }

    function $a(a) {
        Cc(_c.teaser).animate({
            "margin-left": mc
        }, {
            duration: 500,
            complete: function() {
                "function" == typeof a && a()
            }
        })
    }

    function _a() {
        var b = Cc(_c.teaser);
        b.css("margin-right", 0);
        var c = Cc(".sg-loader-button-container"),
            d = 8,
            e = Cc(".sg-loader-play-game-button, .sg-loader-button-background, .sg-loader-button-overlay");
        e.css({
                height: b.height() - d,
                width: b.width() - d,
                "line-height": b.height() - d + "px"
            }),
            c.css({
                width: b.width()
            });
        var f = .284 * e.height(),
            g = .2 * e.width();
        e.find(".sg-loader-triangle").css({
            "border-width": f + "px 0 " + f + "px " + g + "px"
        });
        var h = e.find(".sg-loader-triangle-container");
        h.css({
            left: e.width() / 2 - h.width() / 2 + d / 2,
            top: e.height() / 2 - h.height() / 2 + d / 2
        });
        var i = Cc(".sg-loader-click-to-play-end");
        p() ? (e.css({
                "font-size": "10vw",
                "margin-bottom": mc / 2
            }),
            c.css({
                float: "right",
                "margin-right": mc + "px"
            }),
            Gc.partnerLogo ? ab() : $a(ab),
            i.css({
                position: "relative"
            })) : (i.css({
                top: Cc(".sg-loader-teaser").height() / 2 - i.height() / 4 + 2 * mc + oc.height - 4,
                left: Cc(a).width() / 2 + e.width() / 2 + mc
            }),
            e.css({
                "font-size": "5vh"
            }),
            ab())
    }

    function ab() {
        Cc(".sg-loader-play-game-button, .sg-loader-click-to-play-end").animate({
            opacity: 1
        }, {
            duration: 500
        })
    }

    function bb() {
        ub("Ad clean up called"),
            Fc && Fc.close && Fc.close(),
            Kc = !0,
            Wa()
    }

    function cb(a) {
        db(ad.runGame, a || Math.floor(1e7 * Math.random() + 1e6), null)
    }

    function db(b, c, d) {
        try {
            if (!a.SG || "function" != typeof a.SG.sendCommand)
                throw new Error("SG.sendCommand doesnt exist");
            ub("sending unpause game command to game"),
                a.SG.sendCommand(b, c, d)
        } catch (e) {
            ub("failed to send command to game: ", e)
        }
    }

    function eb() {
        ub("Close loader teaser overlay ..."),
            a.jQuery ? a.jQuery(".sg-loader-teaser-overlay").animate({
                opacity: 0
            }, {
                duration: 1e3,
                complete: fb
            }) : fb()
    }

    function fb() {
        a.jQuery ? a.jQuery(".sg-loader-teaser-overlay").remove() : _c && _c.overlay && Eb.body && Eb.body.removeChild(_c.overlay),
            vb() ? la("loaderOverlayClosed") : Rc || (la("loaderFastFlowDisabled"),
                Rc = !0),
            ub("... close loader teaser overlay done")
    }

    function gb() {
        try {
            Nc ? ub("Tried to continue the loading flow a second time") : (Nc = !0,
                G(Rb, function(a) {
                    if (a)
                        return ub("Fatal: Can't continue with loading flow. Can't load softgames."),
                            void ub(a);
                    G(Sb, function(a) {
                        if (a)
                            return ub("Fatal: Can't continue with loading flow. Can't load sg-hooks."),
                                void ub(a);
                        ub("Finished loading old flow dependencies")
                    })
                }))
        } catch (a) {
            ub("Fatal: Can't continue with loading flow"),
                ub(a),
                xb()
        }
    }

    function hb() {
        ub("handleGameLoaded called"),
            Ab("GameLoaded", {}),
            Qc ? ub("Game loaded message received again") : (Qc = !0,
                jb())
    }

    function ib() {
        setTimeout(function() {
            nb(function() {
                ub("Displaying play button due to long ad time"),
                    Xa(function(a) {
                        a && ub(a),
                            ub("Start banner ad cleanup"),
                            $();
                        try {
                            Hc = !0,
                                bb(),
                                $c || Wc || Sc || (Sc = !0)
                        } catch (b) {
                            ub("cleanUpAd failed", b),
                                xb()
                        }
                    })
            })
        }, 2e4)
    }

    function jb() {
        ub("Finish loading bar"),
            Mc && (clearInterval(Mc),
                Mc = null);
        var a = 100,
            b = Date.now(),
            c = ob(),
            d = a - c,
            e = !1;
        Mc = setInterval(function() {
            var f = Date.now(),
                g = f - b,
                h = Math.min(g * d / 3e3, d) + c;
            Ja(h),
                h >= a && (clearInterval(Mc),
                    Mc = null,
                    ub("Loading bar finished"),
                    e || (e = !0,
                        la("loaderGameLoaded"),
                        $c ? (Ic = !0,
                            Wa()) : kb()))
        }, 100)
    }

    function kb() {
        var b = Cc("<h2>").addClass("sg-loader-thanks-title").append(""),
            c = Cc("<div>").addClass("sg-loader-thanks-text").append("The game is fully loaded."),
            d = Cc("<div>").addClass("sg-loader-thanks-container").append(b).append(c);
        d.insertAfter(Cc(_c.teaser)),
            _c.thanksContainer = d,
            p() ? Tc ? (d.css({
                    width: Cc(a).width() - 2 * mc,
                    "margin-left": mc
                }),
                c.css({
                    "font-size": "4vw"
                }),
                b.css({
                    "font-size": "5vw"
                })) : (Cc(_c.teaser).css("margin-right", mc),
                d.css({
                    width: Cc(a).width() - 3 * mc - lc.width
                }),
                c.css({
                    "font-size": "3vw"
                }),
                b.css({
                    "font-size": "4vw"
                })) : W() ? Tc || (d.css({
                    width: Cc(a).width() - lc.width - 4 * mc
                }),
                b.css({
                    "margin-top": 1.5 * mc,
                    "margin-bottom": 0,
                    "font-size": "2.5vw"
                }),
                c.css({
                    "font-size": "3vh"
                })) : Tc ? d.css({
                width: Cc(".sg-loader-teaser").width(),
                "margin-left": Cc(a).width() / 2 - Cc(".sg-loader-teaser").width() / 2
            }) : (d.css({
                    width: Cc(a).width() - lc.width - 4 * mc
                }),
                b.css({
                    "margin-top": Math.max(0, Cc(".sg-loader-teaser").outerHeight(!0) - Cc(".sg-loader-thanks-container").height() + mc),
                    "margin-bottom": 0
                })),
            Ya(lb)
    }

    function lb() {
        p() ? (xa(),
            Tc ? mb() : $a(mb)) : mb()
    }

    function mb() {
        Cc(_c.thanksContainer).css("display", "block").animate({
            opacity: 1
        }, {
            duration: 400,
            complete: function() {
                ub("Thank you text displayed");
                var a = Hc ? 1e3 : 2500;
                ib(), !Jc && Hc ? setTimeout(function() {
                    nb(function() {
                        Ic = !0,
                            ub("Thank you text removed"),
                            Wa()
                    })
                }, a) : (Ic = !0,
                    setTimeout(function() {
                        Wa()
                    }, a))
            }
        })
    }

    function nb(a) {
        a = a || function() {};
        var b = Cc(_c.thanksContainer);
        if (0 === parseInt(b.css("opacity")))
            return void a();
        b.animate({
            opacity: 0
        }, {
            duration: 400,
            complete: function() {
                Cc(this).remove(),
                    a()
            }
        })
    }

    function ob() {
        var a = Cc(".sg-loader-bar");
        return 1 !== a.length ? 0 : Number(a.get(0).style.width.replace("%", ""))
    }

    function pb(a, b, c) {
        if (Pc)
            ub("Ad done handler called a second time");
        else {
            Pc = !0,
                ub("Ad done handler called");
            try {
                Ab("PrerollAdComplete", {}),
                    Zc = !!c,
                    Kc = !0,
                    la("loaderAdFlowDone", "doneHandler"),
                    qb()
            } catch (d) {
                ub("Failed to handler ad done event"),
                    ub(d)
            }
        }
    }

    function qb() {
        Hc = !0,
            Oc ? rb() : ya(p(), function(a) {
                za(a),
                    rb()
            })
    }

    function rb() {
        Wa(),
            gb()
    }

    function sb(a, b, c) {
        try {
            var d;
            for (var e in c)
                c[e] && (d += "; " + e, !0 !== c[e] && (d += "=" + c[e]));
            Eb.cookie = Eb.cookie = a + "=" + b
        } catch (f) {
            ub("Cannot set coookie " + a, f)
        }
    }

    function tb(a) {
        try {
            for (var b = null, c = Eb.cookie ? Eb.cookie.split("; ") : [], d = 0; d < c.length; d++) {
                var e = c[d].split("="),
                    f = e.slice(1).join("=");
                if (a === e[0]) {
                    b = f;
                    break
                }
            }
            return b
        } catch (g) {
            ub("Cannot get cookie", g)
        }
        return null
    }

    function ub() {
        if (qc) {
            var a = Array.prototype.slice.call(arguments);
            console.log.apply(console, ["[sgLoader]"].concat(a))
        }
    }

    function vb() {
        return Vc
    }

    function wb() {
        qb()
    }

    function xb() {
        try {
            $(),
                _c && _c.overlay && Eb.body && Eb.body.removeChild(_c.overlay),
                gb(),
                la("loaderKilled")
        } catch (a) {
            ub("FATAL: EVEN FAILED TO KILL THE LOADER")
        }
    }

    function yb(b, c) {
        try {
            var d = "OldFlow_";
            Dc && (d = "NewFlow_");
            var e = d + b;
            a.mixpanel.track(e, c)
        } catch (f) {
            ub.error("Cannot track loading flow:", f)
        }
    }

    function zb() {
        try {
            for (var a = 0; a < zc.length; a++)
                yb(zc[a].name, zc[a].params);
            zc = []
        } catch (b) {
            ub.debug("Cannot process loading flow events", b)
        }
    }

    function Ab(a, b) {
        if (Bb())
            zc.length > 0 && zb(),
            yb(a, b);
        else
            try {
                var c = {
                    name: a,
                    params: b
                };
                zc.push(c)
            } catch (d) {
                ub.error("Cannot add event to tracking loading flow:", d)
            }
    }

    function Bb() {
        return void 0 !== a.mixpanel
    }

    function Cb(a, b) {
        return Ac.indexOf(a) > -1
    }

    function Db(b, c) {
        c.fastLoadingFlowEnabled && Cb(c.gameSlug, c.publisherName) && (! function(b, c) {
                if (!c.__SV) {
                    var d = a;
                    try {
                        var e, f, g, h = d.location,
                            i = h.hash;
                        e = function(a, b) {
                                return (f = a.match(RegExp(b + "=([^&]*)"))) ? f[1] : null
                            },
                            i && e(i, "state") && (g = JSON.parse(decodeURIComponent(e(i, "state"))),
                                "mpeditor" === g.action && (d.sessionStorage.setItem("_mpcehash", i),
                                    history.replaceState(g.desiredHash || "", b.title, h.pathname + h.search)))
                    } catch (l) {}
                    var j, k;
                    a.mixpanel = c,
                        c._i = [],
                        c.init = function(a, b, d) {
                            function e(a, b) {
                                var c = b.split(".");
                                2 == c.length && (a = a[c[0]],
                                        b = c[1]),
                                    a[b] = function() {
                                        a.push([b].concat(Array.prototype.slice.call(arguments, 0)))
                                    }
                            }
                            var f = c;
                            for (void 0 !== d ? f = c[d] = [] : d = "mixpanel",
                                f.people = f.people || [],
                                f.toString = function(a) {
                                    var b = "mixpanel";
                                    return "mixpanel" !== d && (b += "." + d),
                                        a || (b += " (stub)"),
                                        b
                                },
                                f.people.toString = function() {
                                    return f.toString(1) + ".people (stub)"
                                },
                                j = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" "),
                                k = 0; k < j.length; k++)
                                e(f, j[k]);
                            c._i.push([a, b, d])
                        },
                        c.__SV = 1.2,
                        d = b.createElement("script"),
                        d.type = "text/javascript",
                        d.async = !0,
                        d.src = "undefined" != typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === b.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js",
                        e = b.getElementsByTagName("script")[0],
                        e.parentNode.insertBefore(d, e)
                }
            }(Eb, a.mixpanel || []),
            mixpanel.init(b),
            mixpanel.register({
                game: c.gameSlug,
                publisher: c.publisherName,
                trackingVersion: Ec
            }))
    }
    a.b || (a.b = {});
    var Eb = a.document,
        Fb = Date.now(),
        Gb = "https:";
    a.location && (Gb = -1 !== a.location.protocol.indexOf("https") ? "https" : "http");
    if (a.location.protocol == "http:") {
        Gb = "http:";
    }
    if (a.location.protocol == "https:") {
        Gb = "https:";
    }
    if (a.location.protocol == "file:") {
        Gb = "file:";
    }
    // debugger;
    // var Hb = c("//m.softgames.de/api/v1/games/{gameSlug}/loader_config/", Gb) + "?env={env}",
    var Hb = "../assets/softgames.json",
        // Ib = c("//m.softgames.de/api/v1/games/{gameSlug}/loader_config/", Gb) + "?env={env}",
        Ib = "../assets/softgames.json",
        Jb = "1.9.3",
        // Kb = c("//mediamanager.softgames.de/sg-mc.js", Gb) + "?_v=" + Jb,
        // Lb = c("//media.gamesmedia.de/sg-mc.js", Gb) + "?_v=" + Jb,
        Kb = c("../assets/sg-mc1.js", Gb),
        Lb = c("../assets/sg-mc2.js", Gb),
        Mb = 2e4,
        Nb = b(),
        Ob = Nb + "/showads.js",
        Pb = Nb + "/advertisement.js",
        Qb = Nb + "/sg-loader.css?_=" + Fb,
        Rb = Nb + "/platform.js?_=" + Fb,
        Sb = Nb + "/sg.hooks.js?_=" + Fb,
        Tb = Nb + "/sg-ga-track-sdk.js?_=" + Fb,
        // Ub = Gb + "://dop3jnx8my3ym.cloudfront.net/jquery/3.1.0/jquery-3.1.0.min.js",
        Ub = "../assets/jquery-3.1.0.min.js",
        // Vb = Gb + "://d3ktldhyer9fya.cloudfront.net/assets/spinner.svg",
        // Wb = Gb + "://d3ktldhyer9fya.cloudfront.net/assets/loader-background.png",
        // Xb = Gb + "://d3ktldhyer9fya.cloudfront.net/assets/stop.png",
        // Yb = Gb + "://d3ktldhyer9fya.cloudfront.net/assets/softgames-text.png",
        // Zb = Gb + "://fonts.googleapis.com/css?family=Roboto",
        Vb = "../assets/spinner.svg",
        Wb = "../assets/loader-background.png",
        Xb = "../assets/stop.png",
        Yb = "../assets/softgames-text.png",
        Zb = "../assets/Roboto.css",
        $b = "splashscreen-game-url",
        _b = "splashscreen-big-gazme-url",
        ac = "is-wrapper",
        bc = "game-slug",
        cc = "publisher-name",
        dc = null,
        ec = .1,
        fc = .4,
        gc = .1,
        hc = .25,
        ic = 800,
        jc = .9,
        kc = null,
        lc = null,
        mc = null,
        nc = null,
        oc = null,
        pc = null,
        qc = U("loaderDebug"),
        // rc = "play.gamesmedia.de",
        rc = "",
        sc = "_j1",
        tc = [""],
        // uc = ["play.gamesmedia.de"],
        uc = [""],
        vc = "_pgu",
        wc = "_sgpf",
        xc = 31536e6,
        yc = "b59c78a55a82632c85b3b06f0f743ef7",
        zc = [],
        Ac = ["bubble-shooter-classic"],
        Bc = null,
        Cc = null,
        Dc = da() > 0,
        Ec = "2.0",
        Fc = null,
        Gc = null,
        Hc = !1,
        Ic = !1,
        Jc = null,
        Kc = !1,
        Lc = null,
        Mc = null,
        Nc = !1,
        Oc = !1,
        Pc = !1,
        Qc = !1,
        Rc = !1,
        Sc = !1,
        Tc = !1,
        Uc = !1,
        Vc = null,
        Wc = null,
        Xc = [],
        Yc = null,
        Zc = !1,
        $c = !1,
        _c = {
            spinner: null,
            button: null,
            adContainer: null,
            adSlot: null,
            teaser: null,
            thanksContainer: null
        },
        ad = {
            unpauseGame: "unpauseGame",
            runGame: "runGame"
        };
    try {
        if (ub("Starting sg loader"),
            ba() && (aa(),
                ca()),
            g()) {
            if (k() && (ub("Should execute second redirect"),
                    l()))
                return
        } else if (h() && (ub("Should execute redirect"),
                i()))
            return;
        Ab("Init", {});
        u([v, I, N, M], fa)
    } catch (bd) {
        ub("Failed to run loader flow"),
            ub(bd),
            xb()
    }
    return {
        isActive: vb,
        closeTeaserOverlay: eb,
        trackLoadingFlow: Ab
    }
}(window);