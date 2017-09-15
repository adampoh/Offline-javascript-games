var SG_Hooks = {
    debug: !!window.console && !0,
    PAGE_WELCOME_SCREEN: "welcome-screen",
    PAGE_MODE_SELECTION: "mode-selection",
    PAGE_MAIN_MENU: "main-menu",
    PAGE_READY_FOR_MATCH: "ready-for-match",
    PAGE_PAUSE: "pause",
    PAGE_GAME_OVRE: "game-over",
    PAGE_LEVELS_MAP: "levels-map",
    PAGE_SHOP: "shop",
    PAGE_DAILY_GIFT: "daily-gift",
    OFFER_TYPE_BOOSTER: "booster",
    OFFER_TYPE_ITEM: "item",
    OFFER_TYPE_LIFE: "life",
    getLanguage: function(a) { return SG.initLangs(a) },
    getGameConfig: function() { return SG.getGameConfig() },
    isEnabledIncentiviseButton: function() { return SG.isEnabledIncentiviseButton() },
    loaded: function() { SG_Hooks.debug && console.log("game loaded"), SG.trigger({ type: "loaded" }) },
    start: function(a) { SG_Hooks.debug && console.log("game started with status:", a), SG.trigger({ type: "start", status: a }) },
    readyForMatch: function() { SG_Hooks.debug && console.log("ready for match"), SG.trigger({ type: "readyForMatch" }) },
    levelStarted: function(a) { SG_Hooks.debug && console.log("level started:" + a), SG.trigger({ type: "levelStarted", level: a }) },
    levelFinished: function(a, b, c, d) { SG_Hooks.debug && console.log("level finished:" + a + " score: " + b + "opponentScore: " + c), SG.trigger({ type: "levelFinished", level: a, score: b, opponentScore: c, gameRecord: d }) },
    tutorialFinished: function() { SG_Hooks.debug && console.log("tutorial finished"), SG.trigger({ type: "tutorialFinished" }) },
    levelUp: function(a, b, c) { SG_Hooks.debug && console.log("level up:" + a + "/" + b), SG.trigger({ type: "levelUp", level: a, lastLevelScore: b }, c) },
    gameOver: function(a, b, c) { SG_Hooks.debug && console.log("game over:" + a + "/" + b), SG.trigger({ type: "gameOver", score: b, level: a }, c) },
    gameCompleted: function(a, b) { SG_Hooks.debug && console.log("game completed:" + a), SG.trigger({ type: "gameCompleted", score: a }, b) },
    gamePause: function(a, b) { SG_Hooks.debug && console.log("game pause:" + a), SG.trigger({ type: "gamePause", state: a }, b) },
    gameRestart: function(a) { SG_Hooks.debug && console.log("game restart:"), SG.trigger({ type: "gameRestart" }, a) },
    selectMainMenu: function(a) { SG_Hooks.debug && console.log("selectMainMenu:"), SG.trigger({ type: "selectMainMenu" }, a) },
    selectLevel: function(a, b) { SG_Hooks.debug && console.log("selectLevel:" + a), SG.trigger({ type: "selectLevel", level: a }, b) },
    setSound: function(a, b) { SG_Hooks.debug && console.log("setSound:" + a), SG.trigger({ type: "gameCompleted", state: a }, b) },
    triggerIncentivise: function(a) { SG_Hooks.debug && console.log("triggerIncentivise"), SG.trigger({ type: "incentiviseTriggered" }, a) },
    triggerLogin: function(a) { SG_Hooks.debug && console.log("triggerLogin"), SG.triggerLogin(a) },
    triggerMoreGames: function() { try { SG_Hooks.debug && console.log("triggerMoreGames"), SG.redirectToPortal() } catch (a) { SG_Hooks.debug && console.error("Trigger more games failed", a) } },
    getLoginButton: function(a, b) { return SG_Hooks.debug && console.log("getLoginButton", a), SG.getLoginButton(a, b) },
    isLoginButtonEnabled: function(a) { SG_Hooks.debug && console.log("isLoginButtonEnabled"), SG.isLoginButtonEnabled(a) },
    getHighscoresPerLevel: function(a, b) { SG_Hooks.debug && console.log("getHighscoresPerLevel " + a), SG.getHighscoresPerLevel(a, b) },
    getOffers: function(a, b) { SG_Hooks.debug && console.log("getOffers for section: " + a), SG.getOffers(a, b) },
    startOffer: function(a, b) { SG_Hooks.debug && console.log("Start offer : " + a), SG.startOffer(a, b) },
    offerCompleted: function(a, b) { SG_Hooks.debug && console.log("Offer id [" + a + "] is accepted: " + String(b)), SG.dispatchEvent(SG.EVENT_OFFER_COMPLETED, { offerId: a, successful: b }) },
    getUserExperienceLevel: function() { return SG_Hooks.debug && console.log("Get in-game currency"), SG.getUserExperienceLevel() },
    getIngameCurrency: function() { return SG_Hooks.debug && console.log("Get in-game currency"), SG.getIngameCurrency() },
    addIngameCurrency: function(a) { return SG_Hooks.debug && console.log("Add in-game currency: ", a), SG.addIngameCurrency(a) },
    deductIngameCurrency: function(a) { return SG_Hooks.debug && console.log("Deduct in-game currency: ", a), SG.deductIngameCurrency(a) },
    getUnlockedBoosters: function() { return SG_Hooks.debug && console.log("Get unclocked boosters"), SG.getUnlockedBoosters() },
    addBooster: function(a, b) { return SG_Hooks.debug && console.log("Add booster: " + a + " - " + b), SG.addBooster(a, b) },
    deductBooster: function(a, b) { return SG_Hooks.debug && console.log("Deduct booster: " + a + " - " + b), SG.deductBooster(a, b) },
    getUnlockedItems: function() { return SG_Hooks.debug && console.log("Get unclocked items"), SG.getUnlockedItems() },
    addItem: function(a, b) { return SG_Hooks.debug && console.log("Add item: " + a + " - " + b), SG.addItem(a, b) },
    deductItem: function(a, b) { return SG_Hooks.debug && console.log("Deduct item: " + a + " - " + b), SG.deductItem(a, b) },
    getNativeAds: function(a, b) { SG.getNativeAds(a, b) },
    startNativeAd: function(a, b) { SG.startNativeAd(a, b) },
    setOrientationHandler: function(a) { SG.setOrientationHandler(a) },
    setResizeHandler: function(a) { SG.setResizeHandler(a) },
    setPauseHandler: function(a) { SG.setPauseHandler(a) },
    setUnpauseHandler: function(a) { SG.setUnpauseHandler(a) },
    buildKey: function(a) { return SG.getGameId() + "." + a },
    startMultiplayerMode: function(a) { SG.switchToMode("multi", a) },
    startSingleplayerMode: function(a) { SG.switchToMode("single", a) },
    registerObserver: function(a) { SG.registerGameObserver(a) },
    registerGameDataReceiver: function(a) { SG.registerGameDataReceiver(a) },
    triggerWalkthrough: function(a) { SG.trigger({ type: "triggerWalktrough" }, a) },
    triggerGift: function(a, b) { console.log(a), b() },
    triggerDailyTask: function(a) { a() },
    getAmountOfDailyTasksTodo: function(a) { a() },
    pageDisplayed: function(a) { SG_Hooks.debug && console.log("page displayed:" + a), SG.trigger({ type: "pageDisplayed", page: a }) },
    beforePlayButtonDisplay: function(a) { SG_Hooks.debug && console.log("Executing beforePlayButtonDisplay ...", { callbackGiven: !!a }), SG.dispatchEvent(SG.EVENT_BEFORE_PLAY_BUTTON_DISPLAY, null, a) },
    playButtonPressed: function(a) { SG_Hooks.debug && console.log("Executing playButtonPressed ...", { callbackGiven: !!a }), SG.dispatchEvent(SG.EVENT_PLAY_BUTTON_PRESSED, null, a) },
    sendRtmAction: function(a, b) { SG_Hooks.debug && console.log("Executing sendRtmAction ...", b), SG.dispatchEvent(SG.EVENT_RTM_ACTION, { eventName: a, eventData: b }) },
    track: function(a, b) { SG_Hooks.debug && console.log("Tracking event: " + a, b), SG.track(a, b) },
    assignPlayMatchCallback: function(a) { SG.assignPlayMatchCallback(a) },
    getStorageItem: function(a) { var b = null; try { b = localStorage.getItem(SG_Hooks.buildKey(a)) } catch (c) { return } return void 0 !== b && null !== b && (b = window.atob(b)), b },
    getStorageItemAsync: function(a, b, c) {
        try {
            if (!b || "function" != typeof b) throw b = function(a) { console.log(a) }, new Error("callback is not a valid function");
            if (!a || "string" != typeof a) throw new Error("key is not a valid string");
            var d = localStorage.getItem(SG_Hooks.buildKey(a));
            void 0 === d || null === d || c || (d = window.atob(d)), b(void 0, d)
        } catch (e) { b(e) }
    },
    setStorageItem: function(a, b) {
        var c = b;
        void 0 !== c && null !== c && (c = window.btoa(c));
        try { return localStorage.setItem(SG_Hooks.buildKey(a), c), b } catch (d) { return }
    },
    social: { getConfig: function() { return SG_Hooks.debug && console.log("Social getConfig called."), SG.social.getConfig() }, friends: { displayInvite: function(a, b) { SG_Hooks.debug && console.log("Social [Friends] displayInvite called."), SG.social.friends.displayInvite(a, b) }, getList: function(a) { SG_Hooks.debug && console.log("Social [Friends] getList called."), SG.social.friends.getList(a) } }, gameRequests: { displayGameRequest: function(a, b, c) { SG_Hooks.debug && console.log("Social [GameRequest] displayGameRequest called."), SG.social.gameRequests.displayGameRequest(a, b, c) }, sendGameRequest: function(a, b, c) { SG_Hooks.debug && console.log("Social [GameRequest] send called."), SG.social.gameRequests.sendGameRequest(a, b, c) }, registerCallback: function(a) { SG_Hooks.debug && console.log("Social [GameRequest] registerCallback called."), SG.social.gameRequests.registerCallback(a) } }, highscores: { sendScore: function(a, b) { SG_Hooks.debug && console.log("Social [Highscores] sendScore called."), SG.social.highscores.sendScore(a, b) }, getList: function(a, b) { SG_Hooks.debug && console.log("Social [Highscores] getList called."), SG.social.highscores.getList(a, b) } }, messages: { postOnWall: function(a, b, c) { SG_Hooks.debug && console.log("Social [Messages] postOnWall called."), SG.social.messages.postOnWall(a, b, c) } }, payments: { purchaseItems: function() { return SG_Hooks.debug && console.log("Social [Payments] purchaseItems called."), SG.social.payments.purchaseItems() }, triggerPurchase: function(a, b, c, d, e) { return SG_Hooks.debug && console.log("Social [Payments] triggerPurchase called."), SG.social.payments.triggerPurchase(a, b, c, d, e) } } },
    setStorageItemAsync: function(a, b, c, d) {
        try {
            if (c && "function" == typeof c || (c = function(b) { b ? console.log("failed to store item: " + a, b) : console.log("successfully stored item: " + a) }), !a || "string" != typeof a) throw new Error("key is not a valid string");
            if (!b || "string" != typeof b) throw new Error("value is not a valid string");
            void 0 === b || null === b || d || (b = window.btoa(b)), localStorage.setItem(SG_Hooks.buildKey(a), b), c()
        } catch (e) { c(e) }
    }
};