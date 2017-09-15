(function() {
    window.Softgames = function() {
            function i() {}
            var e, t, n, r;
            // debugger;
            return i.prototype.onShowAdCallback = !1,
                i.prototype.onTriggerConversionCallback = !1,
                i.prototype.onLevelUpCallback = !1,
                t = "../assets/api/voyager_base.js",
                // e = "d3tlss08qwqpkt.cloudfront.net",
                e = "../assets",
                // n = "d184oidcotjujk.cloudfront.net",
                n = "../assets",
                r = t.replace(e, n),
                i.prototype._getUrlParameters = function() {
                    var e = this;
                    return this._urlParameters === void 0 && (this._urlParameters = {},
                            this._location().replace(/[?&]+([^=&]+)=([^&]*)/gi, function(t, n, r) {
                                return e._urlParameters[n] = r
                            })),
                        this._urlParameters
                },
                i.prototype._getUrlParameter = function(e) {
                    var t;
                    return t = this._getUrlParameters(),
                        t[e]
                },
                i.prototype._location = function() {
                    return window.location.href
                },
                i.prototype._getProtocol = function() {
                    var e;
                    if (document.location.protocol === "https:") {
                        e = "https:";
                    }
                    if (document.location.protocol === "http:") {
                        e = "http:";
                    }
                    if (document.location.protocol === "file:") {
                        e = "file:";
                    }
                    // return e = !1, document && document.location && (e = "https:" === document.location.protocol), e ? "https:" : "http:"
                    return e;
                },
                i.prototype.getReady = function() {
                    return this._ready_to_start = !0,
                        this.loadVoyager()
                },
                i.prototype.loadVoyager = function() {
                    var e, n, i = this;
                    // return n = t,
                    // debugger;
                    return n = "../assets/api/voyager_base.js",
                        window.sgPlatformRestrictedHostname === !0 && (n = r),
                        // n.indexOf("http") !== 0 && (n = this._getProtocol() + n),
                        e = document.createElement("script"),
                        e.type = "text/javascript",
                        e.src = n,
                        e.onload = function() {
                            return window.softgamesDocumentReady = !0,
                                i.ready()
                        },
                        document.getElementsByTagName("head")[0].appendChild(e)
                },
                i
        }(),
        window.softgames = new Softgames,
        window.softgamesDocumentReady = !1,
        window.SG_DefaultLang = "en",
        window.SG_getLang = function() {
            var e;
            return e = window.softgames._getUrlParameter("locale"),
                typeof e == "undefined" && (e = window.softgames._getUrlParameter("lang")),
                typeof e == "undefined" && (e = SG_DefaultLang),
                e
        },
        document.addEventListener("DOMContentLoaded", function() {
            var e, t;
            return t = voyagerPrimaryUrl,
                window.sgPlatformRestrictedHostname === !0 && (t = voyagerSecondaryUrl),
                e = document.createElement("script"),
                e.type = "text/javascript",
                e.src = t,
                e.onload = function() {
                    return window.softgamesDocumentReady = !0,
                        window.softgames.ready()
                },
                document.getElementsByTagName("head")[0].appendChild(e)
        }, !1)
}).call(this);