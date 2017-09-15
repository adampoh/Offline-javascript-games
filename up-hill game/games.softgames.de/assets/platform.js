function sg_exists() { return void 0 !== window.softgames && null !== window.softgames }

function SG_initAPI(a) { return SG.initLangs(a) }

function SG_hideAddressBar() { SG.hideAddressBar() }

function SG_OrientationHandler(a, b) { void 0 !== a && null !== a && SG.setOrientationHandler(a), void 0 !== b && null !== b && SG.setResizeHandler(b) }
var SG_Lang = "en",
    SG = {
        logger: null,
        loaded: !1,
        debug: !1,
        lang: "en",
        gameJS: [],
        d: document,
        loadScrnTimer: 10,
        loadingScreenUrl: "",
        queryParams: {},
        gameCommandObserver: null,
        gameDataReceiver: null,
        isTestingEnvString: "false",
        loadingFlowEvents: [],
        EVENT_BOOSTER_ADDED: "booster-added",
        EVENT_BOOSTER_DEDUCTED: "booster-deducted",
        EVENT_ITEM_ADDED: "item-added",
        EVENT_ITEM_DEDUCTED: "item-deducted",
        EVENT_OFFER_COMPLETED: "offer-completed",
        EVENT_PLAY_BUTTON_PRESSED: "game-play-button-pressed",
        EVENT_BEFORE_PLAY_BUTTON_DISPLAY: "before-game-play-button-display",
        EVENT_RTM_ACTION: "rtm-action",
        PRIMARY_SOURCE: "main",
        SECONDARY_SOURCE: "secondary",
        consoleLogViewerURI: "../assets/console-log-viewer.js",
        SG_PC_BASE_URL: "//page-controller.softgames.de",
        // SG_PC_BASE_URL: "../assets/page-controller.softgames.de/",
        PROTOCOL: window.location ? -1 !== window.location.protocol.indexOf("https") ? "https" : "http" : "https",
        restrictedHostnames: ["play.gamesmedia.de"],
        redirectToGamesmediaIfNeeded: function() {
            "use strict";

            function a() { return String(window.location) }

            function b() { var b = a(); return b ? -1 !== b.indexOf("//" + n) : (SG.log("Could not determine current url"), !1) }

            function c() { try { var a = d(); return a ? -1 !== p.indexOf(a) : (SG.log("Could not determine publisher"), !1) } catch (b) { return SG.log("Failed to determine if it is a gamesmedia publisher", b), !1 } }

            function d() { var a = e(m); return a || (a = i("p") || i("host") || null), a }

            function e(a) { var b = document.getElementsByName(a); return b && b.length ? b[0].getAttribute("content") : null }

            function f() { try { var a = g(n); if (!a) throw new Error("Failed to change domain"); return a += -1 !== a.indexOf("?") ? "&" : "?", a += o + "=true", window.location = a, !0 } catch (b) { return SG.log("Failed to redirect to gamesmedia", b), !1 } }

            function g(b) { var c = a(); if (!c) return c; var d = c.split("/"); if (d[1]) throw new Error("Invalid url: " + c); return d[2] = b, d.join("/") }

            function h() { return !!i(o) }

            function i(a) { var b = {}; return j().replace(/[?&]+([^=&]+)=([^&]*)/gi, function(a, c, d) { b[c] = d }), a ? b[a] : b }

            function j() { var a = window.location || {}; return a.href || String(a) }

            function k() {
                try {
                    var b = a();
                    if (!b) throw new Error("No current url");
                    var c = i(),
                        d = b.split("?")[0],
                        e = !1;
                    return c && (delete c[o], e = Object.keys(c).length > 0), b = d + (e ? "?" + l(c) : ""), window.location = b, !0
                } catch (f) { return SG.log("Failed to execute second redirect to gamesmedia", f), !1 }
            }

            function l(a) {
                var b = "";
                return Object.keys(a).forEach(function(c) {
                    var d = a[c];
                    b && (b += "&"), b += c + (d ? "=" + d : "")
                }), b
            }
            var m = "publisher-name",
                // n = "play.gamesmedia.de",
                n = "",
                o = "_j1",
                p = [""];
            if (b()) { if (h()) return SG.log("Should execute second redirect"), k() } else if (c()) return SG.log("Should execute redirect"), f();
            return !1
        },
        getLogger: function() { return !SG.logger && window.SoftgamesLogger && (SG.logger = new window.SoftgamesLogger("softgames-1.1")), SG.logger },
        logError: function() {
            try {
                var a = Array.prototype.slice.call(arguments),
                    b = SG.getLogger();
                b ? b.error.apply(b, a) : console.error.apply(console, a)
            } catch (c) { console.error("[FATAL softgames-1.1]", c) }
        },
        log: function() {
            try {
                var a = Array.prototype.slice.call(arguments),
                    b = SG.getLogger();
                b ? b.info.apply(b, a) : console.log.apply(console, a)
            } catch (c) { console.error("[FATAL softgames-1.1]", c) }
        },
        boot: function() { SG.isTestingEnv() && (SG.parseQueryParams(), SG.addTestingProperties()), window.sgPlatformRestrictedHostname = SG.isRestrictedHostname(), SG.initLangs(window.gameLangs), sg_exists() ? (window.softgames.gameInitCallback = SG.startGame, window.softgames.getReady()) : SG.startGame() },
        getGameId: function() { if (sg_exists()) return window.softgames.gameId() },
        startGame: function() { SG.loaded || (SG.loaded = !0, SG.showSpinner(), "function" == typeof window.gamePreLoader && window.gamePreLoader(), SG.messageStartLoadingGame(), SG.loadJsFiles(window.gameJS, function() { SG.hideLoadScrn(), window.gameOnLoadScript && eval(window.gameOnLoadScript) })) },
        showSpinner: function() {},
        showLoadingBar: function() { return void 0 === SG.getUrlParameters().disableLoadingBar || "true" !== SG.getUrlParameters().disableLoadingBar },
        showLoadScrn: function() { "use strict"; if (!SG.redirectToGamesmediaIfNeeded()) return window.sgLoader ? void SG.loadVoyagerOrConnector() : void SG.showLoadingDots() },
        // showLoadScrn: function() { "use strict"; if (SG.redirectToGamesmediaIfNeeded()) return window.sgLoader ? void SG.loadVoyagerOrConnector() : void SG.showLoadingDots() },
        showLoadingDots: function() {
            var a = SG.d.createElement("div");
            if (a.setAttribute("id", "sg-loadscrn"), SG.showLoadingBar()) {
                var b = SG.d.createElement("div");
                b.setAttribute("id", "sg-spinner"), a.appendChild(b)
            }
            if (-1 != window.location.href.indexOf("adultcontent")) {
                var c = SG.d.createElement("div");
                c.setAttribute("id", "sg-loadtext"), c.innerHTML = "One moment please...<br>Your site is almost loaded!", a.appendChild(c)
            }
            var d = function() {
                var b = SG.d.getElementsByTagName("body")[0];
                void 0 !== b ? (null === SG.d.getElementById("sg-loadscrn") && (SG.debug && console.log("show load-screen: complete"), b.appendChild(a)), SG.loadVoyagerOrConnector()) : (SG.debug && console.log("show load-screen: body-tag not ready. retrying in " + SG.loadScrnTimer + "ms"), setTimeout(d, SG.loadScrnTimer))
            };
            d()
        },
        hideLoadScrn: function() {
            if (window.sgLoader && !window.sgLoader.isActive()) window.sgLoader.closeTeaserOverlay();
            else {
                var a = SG.d.getElementById("sg-loadscrn");
                a && a.parentNode.removeChild(a)
            }
        },
        loadJsFiles: function(a, b) {
            var c = SG.d.getElementsByTagName("head")[0] || document.documentElement;
            a.length;
            if (a.length > 0) {
                var d = document.createElement("script");
                !1, d.type = "text/javascript", d.src = a[0], a.shift();
                var e = !1;
                d.onreadystatechange = d.onload = function() { e || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e = !0, d.onload = d.onreadystatechange = null, c && d.parentNode && c.removeChild(d), SG.loadJsFiles(a, b)) }, c.insertBefore(d, c.firstChild), SG.debug && console.log("loading " + d.src + ", " + a.length + " files left.")
            } else "function" == typeof b && (SG.debug && console.log("calling callback: " + b), b())
        },
        loadCSSFiles: function(a) {
            if (0 !== a.length)
                for (var b = SG.d.getElementsByTagName("head")[0] || document.documentElement, c = 0; c < a.length; c++) {
                    var d = document.createElement("link");
                    d.rel = "stylesheet", d.type = "text/css", d.href = a[c], b.insertBefore(d, b.firstChild)
                }
        },
        messageStartLoadingGame: function() { try { data = { system: "softgames1.1", action: "startLoadingGame" }, window.postMessage(data, "*"), window.parent && window.parent.postMessage(data, "*") } catch (a) { window.console && (console.error("Failed to message game started"), console.error(a)) } },
        messageGameLoaded: function() { try { data = { system: "softgames1.1", action: "gameLoaded" }, window.postMessage(data, "*"), window.parent && window.parent.postMessage(data, "*") } catch (a) { window.console && (console.error("Failed to message game started"), console.error(a)) } },
        trigger: function(a, b) {
            if (!sg_exists()) return !1;
            console.log("event data: ", a);
            var c = null;
            switch (a.type) {
                case "loaded":
                    c = { type: window.softgames.eventGameLoaded }, SG.messageGameLoaded();
                    break;
                case "start":
                    c = { type: window.softgames.eventStartingGame, status: a.status };
                    break;
                case "levelStarted":
                    c = { type: window.softgames.eventLevelStarted, level: a.level };
                    break;
                case "levelFinished":
                    c = { type: window.softgames.eventLevelFinished, level: a.level, score: a.score, opponentScore: a.opponentScore, gameRecord: a.gameRecord };
                    break;
                case "tutorialFinished":
                    c = { type: window.softgames.eventTutorialFinished };
                    break;
                case "levelUp":
                    c = { type: window.softgames.eventLevelUp, level: a.level, prevoius_level_score: a.lastLevelScore };
                    break;
                case "readyForMatch":
                    c = { type: window.softgames.eventReadyForMatch };
                    break;
                case "gameOver":
                    c = { type: window.softgames.eventGameOver, score: a.score, level: a.level };
                    break;
                case "gameCompleted":
                    c = { type: window.softgames.eventGameCompleted, score: a.score };
                    break;
                case "gamePause":
                    c = { type: window.softgames.eventGamePause, state: a.state };
                    break;
                case "gameRestart":
                    c = { type: window.softgames.eventGameRestart };
                    break;
                case "selectLevel":
                    c = { type: window.softgames.eventSelectLevel, level: a.level };
                    break;
                case "selectMainMenu":
                    c = { type: window.softgames.eventSelectMainMenu };
                    break;
                case "setSound":
                    c = { type: window.softgames.eventSound, state: a.state };
                    break;
                case "incentiviseTriggered":
                    c = { type: window.softgames.eventIncentiviseTriggered };
                    break;
                case "pageDisplayed":
                    c = { type: window.softgames.eventPageDisplayed, page: a.page };
                    break;
                case "triggerWalktrough":
                    c = { type: window.softgames.eventTriggerWalktrough }
            }
            return window.softgames.trigger(c, b), !0
        },
        initLangs: function(a) { var b = "function" == typeof SG_getLang ? SG_getLang() : "en"; return "[object array]" == Object.prototype.toString.call(a).toLowerCase() && a.indexOf(b) >= 0 && (SG.lang = b), SG_Lang = SG.lang, SG.lang },
        isEnabledIncentiviseButton: function() { return !!sg_exists() && window.softgames.isEnabledIncentiviseButton() },
        getLang: function() { return SG.lang },
        getGameConfig: function() { return sg_exists() ? window.softgames.game_config : void 0 },
        setOrientationHandler: function(a) { sg_exists() && (window.softgames.changeScreenOrientation = a) },
        setResizeHandler: function(a) { sg_exists() && (window.softgames.changeScreenSize = a) },
        setPauseHandler: function(a) { sg_exists() && (window.softgames.gamePauseFunction = a) },
        setUnpauseHandler: function(a) { sg_exists() && (window.softgames.gameUnpauseFunction = a) },
        hideAddressBar: function() { setTimeout(function() { window.scrollTo(0, 1) }, 10) },
        loadVoyagerOrConnector: function() { SG.parseQueryParams(), SG.useEmbedderFlow() ? SG.loadConnector() : SG.loadPageController() },
        useEmbedderFlow: function() { return !(!SG.queryParams.ng || "true" != SG.queryParams.ng) },
        parseQueryParams: function() {
            for (var a = window.location.search.substring(1).split("&"), b = 0; b < a.length; b++) {
                var c = a[b].split("=");
                SG.queryParams[c[0]] = c[1]
            }
        },
        loadConnector: function() {
            var a = document.createElement("script");
            a.type = "text/javascript", a.async = !0;
            var b = Math.floor(1e8 * Math.random() + 1);
            a.src = "https://games.softgames.de/assets/softgames-connector.js?_=" + b;
            var c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(a, c)
        },
        voyagerUrls: function() { var a = {}; return a[SG.PRIMARY_SOURCE] = "../assets/api/voyager.js", a[SG.SECONDARY_SOURCE] = "../assets/api/voyager1.js", a },
        isRestrictedHostname: function() { return SG.restrictedHostnames.indexOf(document.location.hostname) > -1 },
        voyagerSource: function() { return SG.isRestrictedHostname() ? SG.SECONDARY_SOURCE : SG.PRIMARY_SOURCE },
        getVoyagerUrl: function() { var a = SG.voyagerUrls()[SG.voyagerSource()]; return void 0 === a && (a = SG.voyagerUrls()[SG.PRIMARY_SOURCE]), a },
        loadVoyager: function() {
            var a = document.createElement("script");
            a.type = "text/javascript", a.async = !0;
            var b = Math.floor(1e8 * Math.random() + 1),
                c = SG.getVoyagerUrl();
            a.src = c + "?_=" + b, a.onload = SG.boot;
            var d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(a, d)
        },
        loadPageController: function() {
            var a = document.createElement("script");
            a.type = "text/javascript", a.async = !0;
            var b = Math.floor(1e8 * Math.random() + 1),
                c = SG.getPageControllerUrl();
            a.src = c + "?_=" + b, a.onload = function() { window.sgPc ? window.sgPc.init(function() { SG.loadVoyager() }) : SG.loadVoyager() };
            var d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(a, d)
        },
        getPageControllerUrl: function() {
            // return SG.extendProtocol(SG.SG_PC_BASE_URL, SG.PROTOCOL) + "/js/sg-pc.js?_=" + Date.now()
            return "../assets/sg-pc.js?_=" + Date.now()
        },
        extendProtocol: function(a, b) { return a ? (a = String(a), 0 === a.indexOf("//") ? b + ":" + a : a) : a },
        redirectToPortal: function() {
            if (!sg_exists()) return !1;
            try {
                window.softgames._trackAction("ingameRedirectClicked"), window.softgames._trackEvent("ingameRedirectClicked");
                SG.detectPortalUrl();
                window.softgames.redirectToPortal()
            } catch (a) { SG.logError(a) }
        },
        detectPortalUrl: function() { var a = softgames.back_url; return "string" != typeof a && (a = softgames.subplatform), "string" != typeof a ? a = "http://m.softgames.de" : !1 === a.match(/^http:\/\//) && (a = "http://" + a), a },
        getLogoUrl: function(a) { return "https://d1bjj4kazoovdg.cloudfront.net/assets/sg_ig_logo.png" },
        getUrlParameters: function() { for (var a, b = [], c = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) a = c[d].split("="), b.push(a[0]), b[a[0]] = a[1]; return b },
        isLoginButtonEnabled: function(a) { if (!sg_exists()) return !1; try { window.softgames.isLoginButtonEnabled(a) } catch (b) { SG.logError(b) } },
        triggerLogin: function(a) { if (!sg_exists()) return !1; try { window.softgames.triggerLogin(a), console.log("Not implemented!"), a(!0) } catch (b) { SG.logError(b) } },
        getLoginButton: function(a, b) { if (!sg_exists()) return !1; try { return window.softgames.loginHandler.getLoginButton(a, b) } catch (c) { SG.logError(c) } },
        getHighscoresPerLevel: function(a, b) { if (!sg_exists()) return !1; try { window.softgames.getHighscoresPerLevel(a, b) } catch (c) { SG.logError(c) } },
        getOffers: function(a, b) { console.log("Not implemented!"), b(void 0) },
        startOffer: function(a, b) { console.log("Not implemented!"), b(void 0) },
        getUserExperienceLevel: function() { return !!sg_exists() && (void 0 !== window.softgames.userGameDataHandler && window.softgames.userGameDataHandler.isInitiated() ? window.softgames.userGameDataHandler.getExperienceLevel() : void 0) },
        getIngameCurrency: function() { return !!sg_exists() && (void 0 !== window.softgames.userGameDataHandler && window.softgames.userGameDataHandler.isInitiated() ? window.softgames.userGameDataHandler.getCurrency() : void 0) },
        addIngameCurrency: function(a) { return !!sg_exists() && (void 0 !== window.softgames.userGameDataHandler && window.softgames.userGameDataHandler.isInitiated() ? (window.softgames.userGameDataHandler.addCurrency(a), window.softgames.userGameDataHandler.getCurrency()) : void 0) },
        deductIngameCurrency: function(a) { return !!sg_exists() && (void 0 !== window.softgames.userGameDataHandler && window.softgames.userGameDataHandler.isInitiated() ? (window.softgames.userGameDataHandler.deductCurrency(a), window.softgames.userGameDataHandler.getCurrency()) : void 0) },
        getUnlockedItems: function() { return !!sg_exists() && (void 0 !== window.softgames.gameItemHandler && window.softgames.gameItemHandler.isEnabled() ? window.softgames.gameItemHandler.getUnlocked() : void 0) },
        getUnlockedBoosters: function() { return !!sg_exists() && (void 0 !== window.softgames.gameBoosterHandler && window.softgames.gameBoosterHandler.isEnabled() ? window.softgames.gameBoosterHandler.getUnlocked() : void 0) },
        dispatchEvent: function(a, b, c) {
            if (!sg_exists()) return !1;
            void 0 !== typeof window.softgames.gameEventDispatcherHandler && setTimeout(function() { window.softgames.gameEventDispatcherHandler.dispatch(a, b, c) }, 0)
        },
        addBooster: function(a, b) { SG.dispatchEvent(SG.EVENT_BOOSTER_ADDED, { boosterSlug: a, amount: b }) },
        deductBooster: function(a, b) { SG.dispatchEvent(SG.EVENT_BOOSTER_DEDUCTED, { boosterSlug: a, amount: b }) },
        addItem: function(a, b) { SG.dispatchEvent(SG.EVENT_ITEM_ADDED, { itemSlug: a, amount: b }) },
        deductItem: function(a, b) { SG.dispatchEvent(SG.EVENT_ITEM_DEDUCTED, { itemSlug: a, amount: b }) },
        getNativeAds: function(a, b) { if (!sg_exists()) return !1; try { softgames.nativeAdsHandler.getAds(a, b) } catch (c) { SG.logError(c) } },
        startNativeAd: function(a, b) { if (!sg_exists()) return !1; try { softgames.nativeAdsHandler.startAd(a, b) } catch (c) { SG.logError(c) } },
        switchToMode: function(a, b) { if (!sg_exists()) return !1; try { "multi" === a ? softgames.multiplayerAsyncHandler.enable() : "single" === a ? softgames.multiplayerAsyncHandler.disable() : SG.logError("Undefined mode: " + a), "function" == typeof b && b() } catch (c) { SG.logError(c) } },
        registerGameObserver: function(a) { SG.gameCommandObserver = a, SG.log("Registered gameCommand observer") },
        registerGameDataReceiver: function(a) { SG.gameDataReceiver = a },
        sendCommand: function(a, b, c) {
            var d = { id: b, action: a, data: c };
            "function" == typeof SG.gameCommandObserver ? setTimeout(function() {
                try {
                    if (SG.log("Try to send command ...", d), !SG.gameCommandObserver) throw new Error("No gameCommandObserver given");
                    if ("function" != typeof SG.gameCommandObserver) throw new Error("gameCommandObserver is not a function");
                    SG.gameCommandObserver(d), SG.log("... sent command", d)
                } catch (a) { SG.logError("... failed to send command ...", d), SG.logError(a), SG.logError("...send command error end") }
            }, 0) : SG.logError("Game command observer is not registered to receive command", d)
        },
        isTestingEnv: function() { return "true" === SG.isTestingEnvString },
        addTestingProperties: function() { void 0 !== SG.queryParams && "true" === SG.queryParams.consoleLogViewer && SG.loadJsFiles([SG.consoleLogViewerURI], function() { SG.log("Loaded console log viewer") }) },
        track: function(a, b) {
            if (!sg_exists()) return !1;
            void 0 !== window.softgames.gameTrackerHandler && window.softgames.gameTrackerHandler.track(a, b)
        },
        trackLoadingFlow: function(a, b) {
            if (window.sgLoader) window.sgLoader.trackLoadingFlow(a, b);
            else if (SG.isTrackingLoadingFlowInitiated()) {
                var c = { name: a, params: b };
                SG.loadingFlowEvents.push(c)
            } else SG.initTrackingLoadingFlow()
        },
        isTrackingLoadingFlowInitiated: function() { return Array.isArray(SG.loadingFlowEvents) },
        initTrackingLoadingFlow: function() { SG.isTrackingLoadingFlowInitiated() || (SG.loadingFlowEvents = []) },
        social: { getConfig: function() { return SG_Hooks.debug && console.log("Social getConfig called."), window.softgames.socialHandler.getConfig() }, friends: { displayInvite: function(a, b) { SG_Hooks.debug && console.log("Social [Friends] displayInvite called."), window.softgames.socialHandler.displayInvite(a, b) }, getList: function(a) { SG_Hooks.debug && console.log("Social [Friends] getList called."), window.softgames.socialHandler.getFriendsList(a) } }, gameRequests: { displayGameRequest: function(a, b, c) { SG_Hooks.debug && console.log("Social [GameRequest] displayGameRequest called."), window.softgames.socialHandler.displayGameRequest(a, b, c) }, sendGameRequest: function(a, b, c) { SG_Hooks.debug && console.log("Social [GameRequest] send called."), window.softgames.socialHandler.sendGameRequest(a, b, c) }, registerCallback: function(a) { SG_Hooks.debug && console.log("Social [GameRequest] registerCallback called."), window.softgames.socialHandler.registerGameRequestCallback(a) } }, highscores: { sendScore: function(a, b) { SG_Hooks.debug && console.log("Social [Highscores] sendScore called."), window.softgames.socialHandler.sendHighscore(a, b) }, getList: function(a, b) { SG_Hooks.debug && console.log("Social [Highscores] getList called."), window.softgames.socialHandler.getHighscoresList(a, b) } }, messages: { postOnWall: function(a, b, c) { SG_Hooks.debug && console.log("Social [Messages] postOnWall called."), window.softgames.socialHandler.postMessageOnWall(a, b, c) } }, payments: { purchaseItems: function() { return SG_Hooks.debug && console.log("Social [Payments] purchaseItems called."), window.softgames.socialHandler.getPurchaseItems() }, triggerPurchase: function(a, b, c, d, e) { return SG_Hooks.debug && console.log("Social [Payments] triggerPurchase called."), window.softgames.socialHandler.triggerPurchase(a, b, c, d, e) } } },
        assignPlayMatchCallback: function(a) { if (!sg_exists()) return !1; try { softgames.assignPlayMatch(a) } catch (b) { SG.logError(b) } }
    };
SG.showLoadScrn();