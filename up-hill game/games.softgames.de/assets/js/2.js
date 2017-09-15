webpackJsonp([2], { 387: function(e, n, t) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function i() { return t.e(3).then(t.bind(null, 714)) }

        function a() { return new p.default(function(e, n) { try { if (y.SG_MC) return w.debug("mediaCPM already loaded"), void e(y.SG_MC);
                    w.debug("Start loading mediaCPM ..."), h.loadScript(k).then(function() { w.debug("... finished loading mediaCPM"), e(y.SG_MC) }).catch(n) } catch (e) { w.debug("... failed loading mediaCPM"), n(e) } }) }

        function o(e, n, t) { return new p.default(function(r, i) { try { var a = e.adsConfigurations,
                        o = d(e, t);
                    n.injectEventHandler(e.events), n.injectViewQueue(e.viewQueue), w.debug("Inject config into media controller", { environmentConfig: o, oldAdConfiguration: a }), n.injectConfiguration(o, a, function(e) { try { if (e) throw e;
                            r(n) } catch (e) { i(e) } }) } catch (e) { i(e) } }) }

        function d(e, n) { if (!e) return {}; var t = null;
            e.moreGamesUtils && "function" == typeof e.moreGamesUtils.getSourceId && (t = e.moreGamesUtils.getSourceId()); var r = m + "_" + e.aid,
                i = n.get(r),
                a = !1; return i || (a = !0, i = Date.now() + "_" + (0, g.getRandomIntNumber)(1, 1e5)), n.set(r, i), { adBlockerActive: e.adBlockerHandler && e.adBlockerHandler.isDetected(), publisherId: e.aid, publisher: e.subplatform, gameId: e.gid, sourceGameId: t, game: e.game_slug, isMobile: e._isMobile(), locale: e.locale, country: e.country, userId: i, isNewUser: a, agentPlan: e.agentPlan, clientIpHash: e.clientIpHash, userAgent: e.userAgent, gameDetailsPageVersion: e.gameDetailsPageVersion, isOffer: e.offerWallConnector && e.offerWallConnector.isOfferwallConnectorActive(), showAdBlockerInfo: "true" === e.showAdBlockerInfo, adBlockerAutoSkipAds: "true" === e.adblockerAutoSkipAds, adBlockerInfoTemplate: e.adblocker_info, skipAds: !!e.skipAds, skipIngameAds: !!e.skipIngameAds, startAdsTimerOnGameLoad: !!e.startAdsTimerOnGameLoad, systemId: e.system_id, displayBannerInterval: e.displayBannerInterval, displayWrapperAd: !!e.displayWrapperAd, displayExternalAds: !!e.displayExternalAds, uiMainGameIframe: e.uiMainGameIframe, ingameAdPopupTemplate: e.ingameAdPopup, gameTeaserImage: e.gameTeaserImage, gameAdSettings: e.gameAdSettings, disablePrerollForNewUsers: e.disablePrerollForNewUsers } }

        function u(e, n, t) { var r = s(e, n, t); return { show: function(e, n) { if (!n) return r(e);
                    r(e).then(function() { n.apply(void 0, arguments) }).catch(function(e) { n(e) }) }, isInitiated: function() { return !0 }, incentiviseAdsAvailable: function() { return !!n && n.incentiviseAdsAvailable() }, getExternalTargeting: function() { return !!n && n.getExternalTargeting() }, getHost: function() { return !!n && n.getHost() }, SLOTS: n.SLOTS, EVENT_NAMES: n.EVENT_NAMES } }

        function s(e, n, t) { var r = l(e, n); return function(e) { return new p.default(function(i, a) { try { if (r(e)) return void i({ displayed: !1, eventName: null, clicked: !1, skipped: !0, blocked: !1, watchedPercentage: null }); if (!n || !n.isInitiated()) throw new Error("Media Controller not initialized");
                        t.viaGA(e), n.displayMedia(e, function(e) { for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                            e ? a(e) : i.apply(void 0, t) }) } catch (e) { w.error(e), t.viaSgTrack("newAdFlowVoyagerAdModuleFailed"), a(e) } }) } }

        function l(e, n) { var t = n.SLOTS,
                r = "sandbox" === e.system_id ? 1 : e.displayBannerInterval || v,
                i = n.shouldUseGameMediaPlayButton(),
                a = c(n.getLastOverlayDisplayedTimestamp, r); return function(n) { return !(!e || !t) && (e.skipAds ? (w.info("Skipping ad due to skipAds configuration"), !0) : e.skipIngameAds && n === t.IN_GAME ? (w.info("Skipping ingame ad due to skipIngameAds configuration"), !0) : i && !n.gameMediaPlayButton && "ingame" === n.name ? (w.info("Skipping ad due to ingame play button usage"), !0) : !(!n.useOverlay || n.ignoreOverlayInterval || !a()) && (w.info("Skipping ad due to overlay interval"), !0)) } }

        function c(e, n) { return function() { return Date.now() - e() < n } }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.init = void 0; var f = t(163),
            p = r(f),
            g = t(450),
            v = 3e3,
            m = "candyCrushMediaData",
            y = t(118),
            A = t(168),
            h = t(670),
            w = t(117).createLog("ads 🔮"),
            k = "https://mediamanager.softgames.de/sg-mc.js";
        n.init = function(e) { return new p.default(function(n, r) { try { if (w.info("Start init ..."), !e) throw new Error("voyager not given"); var d = t(674).get(e),
                        s = null;
                    i().then(function(e) { return s = e, a() }).then(function(n) { if (!n) throw new Error("Could not load media manager"); return w.info("MediaController loaded"), o(e, n, s) }).then(function(r) { t(478).init(e), t(675).init(e), A.addModule("ads", u(e, r, d)), w.info("... init done"), n() }).catch(function(e) { w.error("... failed to init"), w.error(e), r(e) }) } catch (e) { w.error("... failed to run init"), w.error(e), r(e) } }) } }, 450: function(e, n, t) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.getRandomIntNumber = function(e, n) { return Math.floor(Math.random() * (n - e) + e) } }, 478: function(e, n, t) { "use strict";

        function r(e) { return function(n) { try { e._triggerConversion(e.conversionFlowAdsAmout, n) } catch (e) { a.warn("Failed to trigger conversion"), a.warn(e) } } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = "adConversionHandler",
            a = t(117).createLog(i),
            o = t(479),
            d = 0;
        n.init = function(e) { var n = r(e);
            e.events.on(o.adShown, function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                d = e.amount || 0, n(d) }, i, "triggerConversionCheck") }, n.getLastConversionAdsDisplayedAmount = function() { return d || 0 } }, 479: function(e, n, t) { "use strict";
        e.exports = { displayNativeAd: "displayNativeAd", displayNativeAdDone: "displayNativeAdDone", voyagerAdCall: "voyagerAdCall", adShown: "adShown" } }, 670: function(e, n, t) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function i(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c; return s ? new d.default(function(t, r) { try { if (!e || "string" != typeof e || !e.trim()) throw new Error("No url given");
                    s.ajax({ method: "GET", url: e, dataType: "script", timeout: n, crossDomain: !0, cache: !0, success: function(n, i, a) { try { if (200 !== a.status) throw new Error("Failed to load script: " + e + "! Status: " + a.status);
                                t() } catch (e) { r(e) } }, error: function(e, n, t) { r(new Error(t)) } }) } catch (e) { r(e) } }) : a(e, n) }

        function a(e, n) { return new d.default(function(t, r) { try { if (!l) throw new Error("window.document does not exist"); var i = l.createElement("script"),
                        a = null;
                    i.type = "text/javascript", i.async = !0, i.onload = function() { try { a && clearTimeout(a), t() } catch (e) { r(e) } }, i.onerror = function() { a && clearTimeout(a), r(new Error("Failed to load script: " + e)) }, i.src = e; var o = l.getElementsByTagName("script")[0];
                    o.parentNode.insertBefore(i, o), a = setTimeout(function() { r(new Error("Failed to load script due to timeout: " + e)) }, n) } catch (e) { r(e) } }) } var o = t(163),
            d = r(o),
            u = t(118),
            s = u.jQuery,
            l = u.document,
            c = 1e4;
        e.exports = { loadScript: i } }, 674: function(e, n, t) { "use strict";

        function r(e) { this.viaSgTrack = i(e), this.viaGA = a(e) }

        function i(e) { var n = new e.trackerHandler.EventTracker(e.subplatform, "independentAdTracking"),
                t = { partner: e.subplatform, game: e.game_slug, isMobile: e._isMobile() }; return function(e) { try { n.sendEvents(n.createEvent(e, t, !1)) } catch (e) { o.error("Failed to track event", e) } } }

        function a(e) { return function(n) { try { var t = n.name,
                        r = u[t]; if (!r) return void o.debug("No pattern for " + t + ", no tracking"); var i = d.getLastConversionAdsDisplayedAmount(),
                        a = r.replace("#{adsDisplayed}", i);
                    e._trackAction(a), o.info("Tracked action:", a) } catch (e) { o.warn("Failed to track GA action"), o.warn(e) } } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var o = t(117).createLog("adTracker"),
            d = t(478),
            u = { preroll: "prerollAdPopup/#{adsDisplayed}", pregdproll: "preGDProllAdPopup/#{adsDisplayed}", ingame: "ingameAdPopup/#{adsDisplayed}", incentivise: "incentiviseAdPopup", second_preroll: "prerollAdPopup/#{adsDisplayed}" };
        n.get = function(e) { return new r(e) } }, 675: function(e, n, t) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = "nativeAdHandler",
            i = t(117).createLog(r),
            a = t(479);
        n.init = function(e) { var n = e.events;
            n.on(a.displayNativeAd, function() { e._onShowAd(function(e) { e && i.error("Failed to display native ad", e), n.fire(a.displayNativeAdDone) }) }, r, "showNativeAd") } } });