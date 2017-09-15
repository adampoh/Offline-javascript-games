var _STRINGS = { Ad: { Mobile: { Preroll: { ReadyIn: "The game is ready in ", Loading: "Your game is loading...", Close: "Close" }, Header: { ReadyIn: "The game is ready in ", Loading: "Your game is loading...", Close: "Close" }, End: { ReadyIn: "Advertisement ends in ", Loading: "Please wait ...", Close: "Close" } } }, Splash: { Loading: "Loading ...", LogoLine1: "Some text here", LogoLine2: "powered by MarketJS", LogoLine3: "none" }, Game: { SelectPlayer: "Select Player", Win: "You win!", Lose: "You lose!", Score: "Score", Time: "Time", solarUnlock: "Martian Generator", mineUnlock: "Martian Mines", labUnlock: "Martian Lab", farmUnlock: "Martian Farm", ruinsUnlock: "Martian Ruins", upgrade: "UPGRADE", Upgrades: "UPGRADES", settings: "SETTINGS", menu: "MAIN MENU", loadgame: "LOAD GAME", load: "LOAD", select: "SELECT", selected: "SELECTED", reset: "RESET", gameslot: "GAME SLOT", newgame: "NEW GAME", completed: " - COLONY AUTOMATED", "new": "NEW", slot: "SLOT ", comfirm: "Click reset again to reset the game memory", minions: "Minion: ", duration: "Time: ", progress: "Completion: ", resources: "Resources: ", congrats: "CONGRATULATIONS", over: "GAME OVER", busy: ["The astronauts are busy, perhaps hire more astronauts from Earth?"], busy0: ["You don't have any astronauts, perhaps hire some from Earth?"], busy50: ["The astronauts are busy at the moment, please try again later"], max: ["You need to hire more astronauts from Earth to expand the working team"], success: "You have built a complete Mars Colony!", timetaken: "Time taken: ", tut0: { mobile: ["Tap on this button", "to hire one", "astronaut from Earth"], desktop: ["Click on this button", "to hire one", "astronaut from Earth"] }, tut1: { mobile: ["Tap on this button ", "to make astronaut", "work"], desktop: ["Click on this button ", "to make astronaut ", "work"] }, tut2: { mobile: ["The goal is to expand", "your Mars colony by", "generating resources"], desktop: ["The goal is to expand", "your Mars colony by", "generating resources"] }, tut3: { mobile: ["Let us wait while", "the astronaut delivers", "our resources"], desktop: ["Let us wait while", "the astronaut delivers", "our resources"] }, tut4: { mobile: ["Let's try to assign", "more astronauts to work", "in the farm"], desktop: ["Let's try to assign", "more astronauts to work", "in the farm"] }, tut5: { mobile: ["Opps! We do not have", "enough astronauts to", "do that, lets hire more"], desktop: ["Opps! We do not have", "enough astronauts to", "do that, lets hire more"] }, tut6: { mobile: ["Let's assign more", "astronauts to work", "in the farm again"], desktop: ["Let's assign more", "astronauts to work", "in the farm again"] }, tut7: { mobile: ["You can now order more", "astronauts to deliver", "your resources"], desktop: ["You can now order more", "astronauts to deliver", "your resources"] }, tut8: { mobile: ["That's the end of", "the tutorial, Have", "fun!"], desktop: ["That's the end of", "the tutorial, Have", "fun!"] }, tutTap: { mobile: ["Tap to Proceed"], desktop: ["Click to Proceed"] }, tutWait: { mobile: ["Please be patient"], desktop: ["Please be patient"] } }, Upgrades: { info0: ["FARM ROUTE", "Build a better path leading", "to the farm"], info1: ["BURGER TREE", "Improve food quality"], info2: ["SOLAR ROUTE", "Build a better path leading", "to the solar generator"], info3: ["SOLAR EXTENDED", "Improve solar energy", "collected"], info4: ["MINE ROUTE", "Build a better path leading", "to the mines"], info5: ["DEEP MINES", "Mine deeper for better", "resources"], info6: ["RUINS ROUTE", "Build a better path leading", "to the ruins"], info7: ["RUINS EXPERT", "Upgrade ruins leading", "quality"], info8: ["LAB ROUTE", "Build a better path leading", "to the lab"], info9: ["MAD SCIENTIST", "Upgrade lab resources", "quality"], info10: ["CHEAP CELL PLAN", "Hire astronaut for", "50% less"], info11: ["EXPLORATION DISCOUNT", "Reduce building price by", "25%"], info12: ["BOOT CAMP", "Speed up astronaut", "by 20%"], info13: ["DOUBLE DEAL", "Upgrade resource gain by", "25%"], info14: ["TRIPLE DEAL", "Upgrade resource gain by", "50%"], info15: ["MARSNET", "Build an AI to auto manage", "your Colony"] }, Results: { Title: "High score" } };
var _SETTINGS = { API: { Enabled: !0, Log: { Events: { InitializeGame: !0, EndGame: !0, Level: { Begin: !0, End: !0, Win: !0, Lose: !0, Draw: !0 } } } }, Ad: { Mobile: { Preroll: { Enabled: !0, Duration: 5, Width: 300, Height: 250, Rotation: { Enabled: !1, Weight: { MobileAdInGamePreroll: 40, MobileAdInGamePreroll2: 40, MobileAdInGamePreroll3: 20 } } }, Header: { Enabled: !1, Duration: 5, Width: 320, Height: 50, Rotation: { Enabled: !1, Weight: { MobileAdInGameHeader: 40, MobileAdInGameHeader2: 40, MobileAdInGameHeader3: 20 } } }, Footer: { Enabled: !1, Duration: 5, Width: 320, Height: 50, Rotation: { Enabled: !1, Weight: { MobileAdInGameFooter: 40, MobileAdInGameFooter2: 40, MobileAdInGameFooter3: 20 } } }, End: { Enabled: !1, Duration: 1, Width: 300, Height: 250, Rotation: { Enabled: !1, Weight: { MobileAdInGameEnd: 40, MobileAdInGameEnd2: 40, MobileAdInGameEnd3: 20 } } } } }, Language: { Default: "en" }, DeveloperBranding: { Splash: { Enabled: !0 }, Logo: { Enabled: !0, Link: "http://marketjs.com", LinkEnabled: !1, NewWindow: !0, Width: 166, Height: 61 } }, Branding: { Splash: { Enabled: !1 }, Logo: { Enabled: !1, Link: "http://google.com", LinkEnabled: !0, NewWindow: !0, Width: 280, Height: 34 } }, MoreGames: { Enabled: !0, Link: "http://www.marketjs.com/game/links/mobile", NewWindow: !0 }, Gamecenter: { Enabled: !0 } };
var MobileAdInGamePreroll = {
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
                c = b.MobileAdInGamePreroll,
                d = c + b.MobileAdInGamePreroll2,
                b = d + b.MobileAdInGamePreroll3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : f <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : f <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
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
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
            this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
                MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
                    MobileAdInGamePreroll.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
var MobileAdInGameHeader = {
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
                c = b.MobileAdInGameHeader,
                d = c + b.MobileAdInGameHeader2,
                b = d + b.MobileAdInGameHeader3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : f <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" : f <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
            console.log("Ad rotating header enabled")
        } else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", 0);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameFooter = {
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                c = b.MobileAdInGameFooter,
                d = c + b.MobileAdInGameFooter2,
                b = d + b.MobileAdInGameFooter3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : f <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" : f <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
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
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameEnd = {
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
                c = b.MobileAdInGameEnd,
                d = c + b.MobileAdInGameEnd2,
                b = d + b.MobileAdInGameEnd3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : f <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : f <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
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
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
                MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
(function(b, c) {
    function d(b, l, B) {
        if (B === c && 1 === b.nodeType)
            if (B = "data-" + l.replace(sc, "-$1").toLowerCase(), B = b.getAttribute(B), "string" == typeof B) {
                try { B = "true" === B ? !0 : "false" === B ? !1 : "null" === B ? null : +B + "" === B ? +B : tc.test(B) ? e.parseJSON(B) : B } catch (d) {}
                e.data(b, l, B)
            } else B = c;
        return B
    }

    function f(b) {
        for (var l in b)
            if (!("data" === l && e.isEmptyObject(b[l])) && "toJSON" !== l) return !1;
        return !0
    }

    function g() { return !1 }

    function m() { return !0 }

    function v(b) { return !b || !b.parentNode || 11 === b.parentNode.nodeType }

    function p(b, l) { do b = b[l]; while (b && 1 !== b.nodeType); return b }

    function y(b, l, c) {
        l = l || 0;
        if (e.isFunction(l)) return e.grep(b, function(b, u) { return !!l.call(b, u, b) === c });
        if (l.nodeType) return e.grep(b, function(b) { return b === l === c });
        if ("string" == typeof l) {
            var d = e.grep(b, function(b) { return 1 === b.nodeType });
            if (uc.test(l)) return e.filter(l, d, !c);
            l = e.filter(l, d)
        }
        return e.grep(b, function(b) { return 0 <= e.inArray(b, l) === c })
    }

    function s(b) {
        var l = wb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; l.length;) b.createElement(l.pop());
        return b
    }

    function z(b, l) {
        if (1 === l.nodeType && e.hasData(b)) {
            var c, d, t;
            d = e._data(b);
            var C = e._data(l, d),
                r = d.events;
            if (r)
                for (c in delete C.handle, C.events = {}, r) { d = 0; for (t = r[c].length; d < t; d++) e.event.add(l, c, r[c][d]) }
            C.data && (C.data = e.extend({}, C.data))
        }
    }

    function j(b, l) {
        var c;
        1 === l.nodeType && (l.clearAttributes && l.clearAttributes(), l.mergeAttributes && l.mergeAttributes(b), c = l.nodeName.toLowerCase(), "object" === c ? (l.parentNode && (l.outerHTML = b.outerHTML), e.support.html5Clone && b.innerHTML && !e.trim(l.innerHTML) && (l.innerHTML = b.innerHTML)) : "input" === c && xb.test(b.type) ? (l.defaultChecked = l.checked = b.checked, l.value !== b.value && (l.value = b.value)) : "option" === c ? l.selected = b.defaultSelected : "input" === c || "textarea" === c ? l.defaultValue = b.defaultValue : "script" === c && l.text !== b.text && (l.text = b.text), l.removeAttribute(e.expando))
    }

    function n(b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : [] }

    function q(b) { xb.test(b.type) && (b.defaultChecked = b.checked) }

    function x(b, l) {
        if (l in b) return l;
        for (var c = l.charAt(0).toUpperCase() + l.slice(1), e = l, d = yb.length; d--;)
            if (l = yb[d] + c, l in b) return l;
        return e
    }

    function G(b, l) { return b = l || b, "none" === e.css(b, "display") || !e.contains(b.ownerDocument, b) }

    function I(b, l) {
        for (var c, d, t = [], C = 0, r = b.length; C < r; C++) c = b[C], c.style && (t[C] = e._data(c, "olddisplay"), l ? (!t[C] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && G(c) && (t[C] = e._data(c, "olddisplay", M(c.nodeName)))) : (d = R(c, "display"), !t[C] && "none" !== d && e._data(c, "olddisplay", d)));
        for (C = 0; C < r; C++)
            if (c = b[C], c.style && (!l || "none" === c.style.display || "" === c.style.display)) c.style.display = l ? t[C] || "" : "none";
        return b
    }

    function F(b, l, c) { return (b = vc.exec(l)) ? Math.max(0, b[1] - (c || 0)) + (b[2] || "px") : l }

    function E(b, l, c, d) { l = c === (d ? "border" : "content") ? 4 : "width" === l ? 1 : 0; for (var t = 0; 4 > l; l += 2) "margin" === c && (t += e.css(b, c + fa[l], !0)), d ? ("content" === c && (t -= parseFloat(R(b, "padding" + fa[l])) || 0), "margin" !== c && (t -= parseFloat(R(b, "border" + fa[l] + "Width")) || 0)) : (t += parseFloat(R(b, "padding" + fa[l])) || 0, "padding" !== c && (t += parseFloat(R(b, "border" + fa[l] + "Width")) || 0)); return t }

    function N(b, l, c) {
        var d = "width" === l ? b.offsetWidth : b.offsetHeight,
            t = !0,
            C = e.support.boxSizing && "border-box" === e.css(b, "boxSizing");
        if (0 >= d || null == d) {
            d = R(b, l);
            if (0 > d || null == d) d = b.style[l];
            if (za.test(d)) return d;
            t = C && (e.support.boxSizingReliable || d === b.style[l]);
            d = parseFloat(d) || 0
        }
        return d + E(b, l, c || (C ? "border" : "content"), t) + "px"
    }

    function M(b) {
        if (Ya[b]) return Ya[b];
        var l = e("<" + b + ">").appendTo(D.body),
            c = l.css("display");
        l.remove();
        if ("none" === c || "" === c) {
            ma = D.body.appendChild(ma || e.extend(D.createElement("iframe"), { frameBorder: 0, width: 0, height: 0 }));
            if (!na || !ma.createElement) na = (ma.contentWindow || ma.contentDocument).document, na.write("<!doctype html><html><body>"), na.close();
            l = na.body.appendChild(na.createElement(b));
            c = R(l, "display");
            D.body.removeChild(ma)
        }
        return Ya[b] = c, c
    }

    function Q(b, l, c, d) {
        var t;
        if (e.isArray(l)) e.each(l, function(l, e) { c || wc.test(b) ? d(b, e) : Q(b + "[" + ("object" == typeof e ? l : "") + "]", e, c, d) });
        else if (!c && "object" === e.type(l))
            for (t in l) Q(b + "[" + t + "]", l[t], c, d);
        else d(b, l)
    }

    function Aa(b) {
        return function(l, c) {
            "string" != typeof l && (c = l, l = "*");
            var d, t, C = l.toLowerCase().split(ga),
                r = 0,
                f = C.length;
            if (e.isFunction(c))
                for (; r < f; r++) d = C[r], (t = /^\+/.test(d)) && (d = d.substr(1) || "*"), d = b[d] = b[d] || [], d[t ? "unshift" : "push"](c)
        }
    }

    function oa(b, l, B, e, d, C) {
        d = d || l.dataTypes[0];
        C = C || {};
        C[d] = !0;
        var r;
        d = b[d];
        for (var f = 0, j = d ? d.length : 0, g = b === Za; f < j && (g || !r); f++) r = d[f](l, B, e), "string" == typeof r && (!g || C[r] ? r = c : (l.dataTypes.unshift(r), r = oa(b, l, B, e, r, C)));
        return (g || !r) && !C["*"] && (r = oa(b, l, B, e, "*", C)), r
    }

    function ta(b, l) {
        var B, d, t = e.ajaxSettings.flatOptions || {};
        for (B in l) l[B] !== c && ((t[B] ? b : d || (d = {}))[B] = l[B]);
        d && e.extend(!0, b, d)
    }

    function zb() { try { return new b.XMLHttpRequest } catch (u) {} }

    function Ab() { return setTimeout(function() { Ba = c }, 0), Ba = e.now() }

    function Bb(b, l, c) {
        var d, t = 0,
            C = Ca.length,
            r = e.Deferred().always(function() { delete f.elem }),
            f = function() { for (var l = Ba || Ab(), l = Math.max(0, j.startTime + j.duration - l), c = 1 - (l / j.duration || 0), B = 0, e = j.tweens.length; B < e; B++) j.tweens[B].run(c); return r.notifyWith(b, [j, c, l]), 1 > c && e ? l : (r.resolveWith(b, [j]), !1) },
            j = r.promise({ elem: b, props: e.extend({}, l), opts: e.extend(!0, { specialEasing: {} }, c), originalProperties: l, originalOptions: c, startTime: Ba || Ab(), duration: c.duration, tweens: [], createTween: function(l, c) { var B = e.Tween(b, j.opts, l, c, j.opts.specialEasing[l] || j.opts.easing); return j.tweens.push(B), B }, stop: function(l) { for (var c = 0, B = l ? j.tweens.length : 0; c < B; c++) j.tweens[c].run(1); return l ? r.resolveWith(b, [j, l]) : r.rejectWith(b, [j, l]), this } });
        l = j.props;
        c = j.opts.specialEasing;
        var g, n, q, p;
        for (d in l)
            if (g = e.camelCase(d), n = c[g], q = l[d], e.isArray(q) && (n = q[1], q = l[d] = q[0]), d !== g && (l[g] = q, delete l[d]), (p = e.cssHooks[g]) && "expand" in p)
                for (d in q = p.expand(q), delete l[g], q) d in l || (l[d] = q[d], c[d] = n);
            else c[g] = n;
        for (; t < C; t++)
            if (d = Ca[t].call(j, b, l, j.opts)) return d;
        var m = j;
        e.each(l, function(b, u) { for (var l = (ua[b] || []).concat(ua["*"]), c = 0, B = l.length; c < B && !l[c].call(m, b, u); c++); });
        return e.isFunction(j.opts.start) && j.opts.start.call(b, j), e.fx.timer(e.extend(f, { anim: j, queue: j.opts.queue, elem: b })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function T(b, l, c, e, d) { return new T.prototype.init(b, l, c, e, d) }

    function Da(b, l) {
        var c, e = { height: b },
            d = 0;
        for (l = l ? 1 : 0; 4 > d; d += 2 - l) c = fa[d], e["margin" + c] = e["padding" + c] = b;
        return l && (e.opacity = e.width = b), e
    }

    function Cb(b) { return e.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1 }
    var Db, Ea, D = b.document,
        yc = b.location,
        zc = b.navigator,
        Ac = b.jQuery,
        Bc = b.$,
        Eb = Array.prototype.push,
        aa = Array.prototype.slice,
        Fb = Array.prototype.indexOf,
        Cc = Object.prototype.toString,
        $a = Object.prototype.hasOwnProperty,
        ab = String.prototype.trim,
        e = function(b, l) { return new e.fn.init(b, l, Db) },
        Fa = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Dc = /\S/,
        ga = /\s+/,
        Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Gc = /^[\],:{}\s]*$/,
        Hc = /(?:^|:|,)(?:\s*\[)+/g,
        Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Kc = /^-ms-/,
        Lc = /-([\da-z])/gi,
        Mc = function(b, l) { return (l + "").toUpperCase() },
        Ga = function() { D.addEventListener ? (D.removeEventListener("DOMContentLoaded", Ga, !1), e.ready()) : "complete" === D.readyState && (D.detachEvent("onreadystatechange", Ga), e.ready()) },
        Hb = {};
    e.fn = e.prototype = {
        constructor: e,
        init: function(b, l, B) {
            var d, t;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? d = [null, b, null] : d = Fc.exec(b);
                if (d && (d[1] || !l)) {
                    if (d[1]) return l = l instanceof e ? l[0] : l, t = l && l.nodeType ? l.ownerDocument || l : D, b = e.parseHTML(d[1], t, !0), Gb.test(d[1]) && e.isPlainObject(l) && this.attr.call(b, l, !0), e.merge(this, b);
                    if ((l = D.getElementById(d[2])) && l.parentNode) {
                        if (l.id !== d[2]) return B.find(b);
                        this.length = 1;
                        this[0] = l
                    }
                    return this.context = D, this.selector = b, this
                }
                return !l || l.jquery ? (l || B).find(b) : this.constructor(l).find(b)
            }
            return e.isFunction(b) ? B.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), e.makeArray(b, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() { return this.length },
        toArray: function() { return aa.call(this) },
        get: function(b) { return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b] },
        pushStack: function(b, l, c) { b = e.merge(this.constructor(), b); return b.prevObject = this, b.context = this.context, "find" === l ? b.selector = this.selector + (this.selector ? " " : "") + c : l && (b.selector = this.selector + "." + l + "(" + c + ")"), b },
        each: function(b, l) { return e.each(this, b, l) },
        ready: function(b) { return e.ready.promise().done(b), this },
        eq: function(b) { return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        slice: function() { return this.pushStack(aa.apply(this, arguments), "slice", aa.call(arguments).join(",")) },
        map: function(b) { return this.pushStack(e.map(this, function(l, c) { return b.call(l, c, l) })) },
        end: function() { return this.prevObject || this.constructor(null) },
        push: Eb,
        sort: [].sort,
        splice: [].splice
    };
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function() {
        var b, l, B, d, t, C, r = arguments[0] || {},
            j = 1,
            f = arguments.length,
            g = !1;
        "boolean" == typeof r && (g = r, r = arguments[1] || {}, j = 2);
        "object" != typeof r && !e.isFunction(r) && (r = {});
        for (f === j && (r = this, --j); j < f; j++)
            if (null != (b = arguments[j]))
                for (l in b) B = r[l], d = b[l], r !== d && (g && d && (e.isPlainObject(d) || (t = e.isArray(d))) ? (t ? (t = !1, C = B && e.isArray(B) ? B : []) : C = B && e.isPlainObject(B) ? B : {}, r[l] = e.extend(g, C, d)) : d !== c && (r[l] = d));
        return r
    };
    e.extend({
        noConflict: function(u) { return b.$ === e && (b.$ = Bc), u && b.jQuery === e && (b.jQuery = Ac), e },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) { b ? e.readyWait++ : e.ready(!0) },
        ready: function(b) {
            if (!(!0 === b ? --e.readyWait : e.isReady)) {
                if (!D.body) return setTimeout(e.ready, 1);
                e.isReady = !0;
                !0 !== b && 0 < --e.readyWait || (Ea.resolveWith(D, [e]), e.fn.trigger && e(D).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) { return "function" === e.type(b) },
        isArray: Array.isArray || function(b) { return "array" === e.type(b) },
        isWindow: function(b) { return null != b && b == b.window },
        isNumeric: function(b) { return !isNaN(parseFloat(b)) && isFinite(b) },
        type: function(b) { return null == b ? String(b) : Hb[Cc.call(b)] || "object" },
        isPlainObject: function(b) { if (!b || "object" !== e.type(b) || b.nodeType || e.isWindow(b)) return !1; try { if (b.constructor && !$a.call(b, "constructor") && !$a.call(b.constructor.prototype, "isPrototypeOf")) return !1 } catch (l) { return !1 } for (var B in b); return B === c || $a.call(b, B) },
        isEmptyObject: function(b) { for (var l in b) return !1; return !0 },
        error: function(b) { throw Error(b); },
        parseHTML: function(b, l, c) { var d; return !b || "string" != typeof b ? null : ("boolean" == typeof l && (c = l, l = 0), l = l || D, (d = Gb.exec(b)) ? [l.createElement(d[1])] : (d = e.buildFragment([b], l, c ? null : []), e.merge([], (d.cacheable ? e.clone(d.fragment) : d.fragment).childNodes))) },
        parseJSON: function(u) {
            if (!u || "string" != typeof u) return null;
            u = e.trim(u);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(u);
            if (Gc.test(u.replace(Ic, "@").replace(Jc, "]").replace(Hc, ""))) return (new Function("return " + u))();
            e.error("Invalid JSON: " + u)
        },
        parseXML: function(u) { var l, B; if (!u || "string" != typeof u) return null; try { b.DOMParser ? (B = new DOMParser, l = B.parseFromString(u, "text/xml")) : (l = new ActiveXObject("Microsoft.XMLDOM"), l.async = "false", l.loadXML(u)) } catch (d) { l = c } return (!l || !l.documentElement || l.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + u), l },
        noop: function() {},
        globalEval: function(u) { u && Dc.test(u) && (b.execScript || function(u) { b.eval.call(b, u) })(u) },
        camelCase: function(b) { return b.replace(Kc, "ms-").replace(Lc, Mc) },
        nodeName: function(b, l) { return b.nodeName && b.nodeName.toLowerCase() === l.toLowerCase() },
        each: function(b, l, B) {
            var d, t = 0,
                C = b.length,
                r = C === c || e.isFunction(b);
            if (B)
                if (r)
                    for (d in b) { if (!1 === l.apply(b[d], B)) break } else
                        for (; t < C && !1 !== l.apply(b[t++], B););
                else if (r)
                for (d in b) { if (!1 === l.call(b[d], d, b[d])) break } else
                    for (; t < C && !1 !== l.call(b[t], t, b[t++]););
            return b
        },
        trim: ab && !ab.call("\ufeff\u00a0") ? function(b) { return null == b ? "" : ab.call(b) } : function(b) { return null == b ? "" : (b + "").replace(Ec, "") },
        makeArray: function(b, l) { var c, d = l || []; return null != b && (c = e.type(b), null == b.length || "string" === c || "function" === c || "regexp" === c || e.isWindow(b) ? Eb.call(d, b) : e.merge(d, b)), d },
        inArray: function(b, l, c) {
            var d;
            if (l) {
                if (Fb) return Fb.call(l, b, c);
                d = l.length;
                for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in l && l[c] === b) return c
            }
            return -1
        },
        merge: function(b, l) {
            var d = l.length,
                e = b.length,
                t = 0;
            if ("number" == typeof d)
                for (; t < d; t++) b[e++] = l[t];
            else
                for (; l[t] !== c;) b[e++] = l[t++];
            return b.length = e, b
        },
        grep: function(b, c, d) {
            var e, t = [],
                C = 0,
                r = b.length;
            for (d = !!d; C < r; C++) e = !!c(b[C], C), d !== e && t.push(b[C]);
            return t
        },
        map: function(b, l, d) {
            var A, t, C = [],
                r = 0,
                j = b.length;
            if (b instanceof e || j !== c && "number" == typeof j && (0 < j && b[0] && b[j - 1] || 0 === j || e.isArray(b)))
                for (; r < j; r++) A = l(b[r], r, d), null != A && (C[C.length] = A);
            else
                for (t in b) A = l(b[t], t, d), null != A && (C[C.length] = A);
            return C.concat.apply([], C)
        },
        guid: 1,
        proxy: function(b, l) { var d, A, t; return "string" == typeof l && (d = b[l], l = b, b = d), e.isFunction(b) ? (A = aa.call(arguments, 2), t = function() { return b.apply(l, A.concat(aa.call(arguments))) }, t.guid = b.guid = b.guid || e.guid++, t) : c },
        access: function(b, l, d, A, t, C, r) {
            var j, f = null == d,
                g = 0,
                n = b.length;
            if (d && "object" == typeof d) {
                for (g in d) e.access(b, l, g, d[g], 1, C, A);
                t = 1
            } else if (A !== c) {
                j = r === c && e.isFunction(A);
                f && (j ? (j = l, l = function(b, u, c) { return j.call(e(b), c) }) : (l.call(b, A), l = null));
                if (l)
                    for (; g < n; g++) l(b[g], d, j ? A.call(b[g], g, l(b[g], d)) : A, r);
                t = 1
            }
            return t ? b : f ? l.call(b) : n ? l(b[0], d) : C
        },
        now: function() { return (new Date).getTime() }
    });
    e.ready.promise = function(u) {
        if (!Ea)
            if (Ea = e.Deferred(), "complete" === D.readyState) setTimeout(e.ready, 1);
            else if (D.addEventListener) D.addEventListener("DOMContentLoaded", Ga, !1), b.addEventListener("load", e.ready, !1);
        else {
            D.attachEvent("onreadystatechange", Ga);
            b.attachEvent("onload", e.ready);
            var c = !1;
            try { c = null == b.frameElement && D.documentElement } catch (d) {}
            c && c.doScroll && function t() {
                if (!e.isReady) {
                    try { c.doScroll("left") } catch (b) { return setTimeout(t, 50) }
                    e.ready()
                }
            }()
        }
        return Ea.promise(u)
    };
    e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, c) { Hb["[object " + c + "]"] = c.toLowerCase() });
    Db = e(D);
    var Ib = {};
    e.Callbacks = function(b) {
        var l;
        if ("string" == typeof b) {
            if (!(l = Ib[b])) {
                l = b;
                var d = Ib[l] = {};
                l = (e.each(l.split(ga), function(b, u) { d[u] = !0 }), d)
            }
        } else l = e.extend({}, b);
        b = l;
        var A, t, C, r, j, f, g = [],
            n = !b.once && [],
            q = function(c) {
                A = b.memory && c;
                t = !0;
                f = r || 0;
                r = 0;
                j = g.length;
                for (C = !0; g && f < j; f++)
                    if (!1 === g[f].apply(c[0], c[1]) && b.stopOnFalse) { A = !1; break }
                C = !1;
                g && (n ? n.length && q(n.shift()) : A ? g = [] : p.disable())
            },
            p = {
                add: function() {
                    if (g) {
                        var c = g.length;
                        (function xc(c) { e.each(c, function(c, l) { var d = e.type(l); "function" === d && (!b.unique || !p.has(l)) ? g.push(l) : l && l.length && "string" !== d && xc(l) }) })(arguments);
                        C ? j = g.length : A && (r = c, q(A))
                    }
                    return this
                },
                remove: function() { return g && e.each(arguments, function(b, u) { for (var c; - 1 < (c = e.inArray(u, g, c));) g.splice(c, 1), C && (c <= j && j--, c <= f && f--) }), this },
                has: function(b) { return -1 < e.inArray(b, g) },
                empty: function() { return g = [], this },
                disable: function() { return g = n = A = c, this },
                disabled: function() { return !g },
                lock: function() { return n = c, A || p.disable(), this },
                locked: function() { return !n },
                fireWith: function(b, u) { return u = u || [], u = [b, u.slice ? u.slice() : u], g && (!t || n) && (C ? n.push(u) : q(u)), this },
                fire: function() { return p.fireWith(this, arguments), this },
                fired: function() { return !!t }
            };
        return p
    };
    e.extend({
        Deferred: function(b) {
            var c = [
                    ["resolve", "done", e.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", e.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", e.Callbacks("memory")]
                ],
                d = "pending",
                A = {
                    state: function() { return d },
                    always: function() { return t.done(arguments).fail(arguments), this },
                    then: function() {
                        var b = arguments;
                        return e.Deferred(function(u) {
                            e.each(c, function(c, l) {
                                var d = l[0],
                                    B = b[c];
                                t[l[1]](e.isFunction(B) ? function() {
                                    var b = B.apply(this, arguments);
                                    b && e.isFunction(b.promise) ? b.promise().done(u.resolve).fail(u.reject).progress(u.notify) : u[d + "With"](this === t ? u : this, [b])
                                } : u[d])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) { return null != b ? e.extend(b, A) : A }
                },
                t = {};
            return A.pipe = A.then, e.each(c, function(b, u) {
                var e = u[2],
                    j = u[3];
                A[u[1]] = e.add;
                j && e.add(function() { d = j }, c[b ^ 1][2].disable, c[2][2].lock);
                t[u[0]] = e.fire;
                t[u[0] + "With"] = e.fireWith
            }), A.promise(t), b && b.call(t, t), t
        },
        when: function(b) {
            var c = 0,
                d = aa.call(arguments),
                A = d.length,
                t = 1 !== A || b && e.isFunction(b.promise) ? A : 0,
                j = 1 === t ? b : e.Deferred(),
                r = function(b, u, c) {
                    return function(l) {
                        u[b] = this;
                        c[b] = 1 < arguments.length ? aa.call(arguments) : l;
                        c === f ? j.notifyWith(u, c) : --t || j.resolveWith(u, c)
                    }
                },
                f, g, n;
            if (1 < A) {
                f = Array(A);
                g = Array(A);
                for (n = Array(A); c < A; c++) d[c] && e.isFunction(d[c].promise) ? d[c].promise().done(r(c, n, d)).fail(j.reject).progress(r(c, g, f)) : --t
            }
            return t || j.resolveWith(n, d), j.promise()
        }
    });
    var Nc = e,
        bb, P, Ha, ha, Ia, Ja, U, ia, Ka, cb, va, Jb, L = D.createElement("div");
    L.setAttribute("className", "t");
    L.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ha = L.getElementsByTagName("*");
    ha = L.getElementsByTagName("a")[0];
    ha.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ha || !Ha.length) bb = {};
    else {
        Ia = D.createElement("select");
        Ja = Ia.appendChild(D.createElement("option"));
        U = L.getElementsByTagName("input")[0];
        P = { leadingWhitespace: 3 === L.firstChild.nodeType, tbody: !L.getElementsByTagName("tbody").length, htmlSerialize: !!L.getElementsByTagName("link").length, style: /top/.test(ha.getAttribute("style")), hrefNormalized: "/a" === ha.getAttribute("href"), opacity: /^0.5/.test(ha.style.opacity), cssFloat: !!ha.style.cssFloat, checkOn: "on" === U.value, optSelected: Ja.selected, getSetAttribute: "t" !== L.className, enctype: !!D.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== D.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === D.compatMode, submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 };
        U.checked = !0;
        P.noCloneChecked = U.cloneNode(!0).checked;
        Ia.disabled = !0;
        P.optDisabled = !Ja.disabled;
        try { delete L.test } catch (Pd) { P.deleteExpando = !1 }!L.addEventListener && L.attachEvent && L.fireEvent && (L.attachEvent("onclick", Jb = function() { P.noCloneEvent = !1 }), L.cloneNode(!0).fireEvent("onclick"), L.detachEvent("onclick", Jb));
        U = D.createElement("input");
        U.value = "t";
        U.setAttribute("type", "radio");
        P.radioValue = "t" === U.value;
        U.setAttribute("checked", "checked");
        U.setAttribute("name", "t");
        L.appendChild(U);
        ia = D.createDocumentFragment();
        ia.appendChild(L.lastChild);
        P.checkClone = ia.cloneNode(!0).cloneNode(!0).lastChild.checked;
        P.appendChecked = U.checked;
        ia.removeChild(U);
        ia.appendChild(L);
        if (L.attachEvent)
            for (cb in { submit: !0, change: !0, focusin: !0 }) Ka = "on" + cb, (va = Ka in L) || (L.setAttribute(Ka, "return;"), va = "function" == typeof L[Ka]), P[cb + "Bubbles"] = va;
        bb = (e(function() {
            var u, c, d, e, t = D.getElementsByTagName("body")[0];
            t && (u = D.createElement("div"), u.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", t.insertBefore(u, t.firstChild), c = D.createElement("div"), u.appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d = c.getElementsByTagName("td"), d[0].style.cssText = "padding:0;margin:0;border:0;display:none", va = 0 === d[0].offsetHeight, d[0].style.display = "", d[1].style.display = "none", P.reliableHiddenOffsets = va && 0 === d[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", P.boxSizing = 4 === c.offsetWidth, P.doesNotIncludeMarginInBodyOffset = 1 !== t.offsetTop, b.getComputedStyle && (P.pixelPosition = "1%" !== (b.getComputedStyle(c, null) || {}).top, P.boxSizingReliable = "4px" === (b.getComputedStyle(c, null) || { width: "4px" }).width, e = D.createElement("div"), e.style.cssText = c.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", e.style.marginRight = e.style.width = "0", c.style.width = "1px", c.appendChild(e), P.reliableMarginRight = !parseFloat((b.getComputedStyle(e, null) || {}).marginRight)), "undefined" != typeof c.style.zoom && (c.innerHTML = "", c.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", P.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.style.overflow = "visible", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", P.shrinkWrapBlocks = 3 !== c.offsetWidth, u.style.zoom = 1), t.removeChild(u))
        }), ia.removeChild(L), Ha = ha = Ia = Ja = U = ia = L = null, P)
    }
    Nc.support = bb;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        sc = /([A-Z])/g;
    e.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
        hasData: function(b) { return b = b.nodeType ? e.cache[b[e.expando]] : b[e.expando], !!b && !f(b) },
        data: function(b, l, d, A) {
            if (e.acceptData(b)) {
                var t, j, r = e.expando,
                    f = "string" == typeof l,
                    g = b.nodeType,
                    n = g ? e.cache : b,
                    q = g ? b[r] : b[r] && r;
                if (q && n[q] && (A || n[q].data) || !(f && d === c)) {
                    q || (g ? b[r] = q = e.deletedIds.pop() || e.guid++ : q = r);
                    n[q] || (n[q] = {}, g || (n[q].toJSON = e.noop));
                    if ("object" == typeof l || "function" == typeof l) A ? n[q] = e.extend(n[q], l) : n[q].data = e.extend(n[q].data, l);
                    return t = n[q], A || (t.data || (t.data = {}), t = t.data), d !== c && (t[e.camelCase(l)] = d), f ? (j = t[l], null == j && (j = t[e.camelCase(l)])) : j = t, j
                }
            }
        },
        removeData: function(b, c, d) {
            if (e.acceptData(b)) {
                var A, t, j, r = b.nodeType,
                    g = r ? e.cache : b,
                    n = r ? b[e.expando] : e.expando;
                if (g[n]) {
                    if (c && (A = d ? g[n] : g[n].data)) {
                        e.isArray(c) || (c in A ? c = [c] : (c = e.camelCase(c), c in A ? c = [c] : c = c.split(" ")));
                        t = 0;
                        for (j = c.length; t < j; t++) delete A[c[t]];
                        if (!(d ? f : e.isEmptyObject)(A)) return
                    }
                    if (d || !(delete g[n].data, !f(g[n]))) r ? e.cleanData([b], !0) : e.support.deleteExpando || g != g.window ? delete g[n] : g[n] = null
                }
            }
        },
        _data: function(b, c, d) { return e.data(b, c, d, !0) },
        acceptData: function(b) { var c = b.nodeName && e.noData[b.nodeName.toLowerCase()]; return !c || !0 !== c && b.getAttribute("classid") === c }
    });
    e.fn.extend({
        data: function(b, l) {
            var B, A, t, j, r, f = this[0],
                g = 0,
                n = null;
            if (b === c) {
                if (this.length && (n = e.data(f), 1 === f.nodeType && !e._data(f, "parsedAttrs"))) {
                    t = f.attributes;
                    for (r = t.length; g < r; g++) j = t[g].name, j.indexOf("data-") || (j = e.camelCase(j.substring(5)), d(f, j, n[j]));
                    e._data(f, "parsedAttrs", !0)
                }
                return n
            }
            return "object" == typeof b ? this.each(function() { e.data(this, b) }) : (B = b.split(".", 2), B[1] = B[1] ? "." + B[1] : "", A = B[1] + "!", e.access(this, function(l) {
                if (l === c) return n = this.triggerHandler("getData" + A, [B[0]]), n === c && f && (n = e.data(f, b), n = d(f, b, n)), n === c && B[1] ? this.data(B[0]) : n;
                B[1] = l;
                this.each(function() {
                    var c = e(this);
                    c.triggerHandler("setData" + A, B);
                    e.data(this, b, l);
                    c.triggerHandler("changeData" +
                        A, B)
                })
            }, null, l, 1 < arguments.length, null, !1))
        },
        removeData: function(b) { return this.each(function() { e.removeData(this, b) }) }
    });
    e.extend({
        queue: function(b, c, d) { var A; if (b) return c = (c || "fx") + "queue", A = e._data(b, c), d && (!A || e.isArray(d) ? A = e._data(b, c, e.makeArray(d)) : A.push(d)), A || [] },
        dequeue: function(b, c) {
            c = c || "fx";
            var d = e.queue(b, c),
                A = d.length,
                t = d.shift(),
                j = e._queueHooks(b, c),
                r = function() { e.dequeue(b, c) };
            "inprogress" === t && (t = d.shift(), A--);
            t && ("fx" === c && d.unshift("inprogress"), delete j.stop, t.call(b, r, j));
            !A && j && j.empty.fire()
        },
        _queueHooks: function(b, c) {
            var d = c + "queueHooks";
            return e._data(b, d) || e._data(b, d, {
                empty: e.Callbacks("once memory").add(function() {
                    e.removeData(b, c + "queue", !0);
                    e.removeData(b, d, !0)
                })
            })
        }
    });
    e.fn.extend({
        queue: function(b, l) {
            var d = 2;
            return "string" != typeof b && (l = b, b = "fx", d--), arguments.length < d ? e.queue(this[0], b) : l === c ? this : this.each(function() {
                var c = e.queue(this, b, l);
                e._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && e.dequeue(this, b)
            })
        },
        dequeue: function(b) { return this.each(function() { e.dequeue(this, b) }) },
        delay: function(b, c) {
            return b = e.fx ? e.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, l) {
                var d = setTimeout(c, b);
                l.stop = function() { clearTimeout(d) }
            })
        },
        clearQueue: function(b) { return this.queue(b || "fx", []) },
        promise: function(b, l) {
            var d, A = 1,
                t = e.Deferred(),
                j = this,
                r = this.length,
                f = function() {--A || t.resolveWith(j, [j]) };
            "string" != typeof b && (l = b, b = c);
            for (b = b || "fx"; r--;)(d = e._data(j[r], b + "queueHooks")) && d.empty && (A++, d.empty.add(f));
            return f(), t.promise(l)
        }
    });
    var ca, Kb, Lb, Mb = /[\t\r\n]/g,
        Oc = /\r/g,
        Pc = /^(?:button|input)$/i,
        Qc = /^(?:button|input|object|select|textarea)$/i,
        Rc = /^a(?:rea|)$/i,
        Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ob = e.support.getSetAttribute;
    e.fn.extend({
        attr: function(b, c) { return e.access(this, e.attr, b, c, 1 < arguments.length) },
        removeAttr: function(b) { return this.each(function() { e.removeAttr(this, b) }) },
        prop: function(b, c) { return e.access(this, e.prop, b, c, 1 < arguments.length) },
        removeProp: function(b) { return b = e.propFix[b] || b, this.each(function() { try { this[b] = c, delete this[b] } catch (l) {} }) },
        addClass: function(b) {
            var c, d, A, t, j, r, f;
            if (e.isFunction(b)) return this.each(function(c) { e(this).addClass(b.call(this, c, this.className)) });
            if (b && "string" == typeof b) {
                c = b.split(ga);
                d = 0;
                for (A = this.length; d < A; d++)
                    if (t = this[d], 1 === t.nodeType)
                        if (!t.className && 1 === c.length) t.className = b;
                        else {
                            j = " " + t.className + " ";
                            r = 0;
                            for (f = c.length; r < f; r++) 0 > j.indexOf(" " + c[r] + " ") && (j += c[r] + " ");
                            t.className = e.trim(j)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var l, d, A, t, j, r, f;
            if (e.isFunction(b)) return this.each(function(c) { e(this).removeClass(b.call(this, c, this.className)) });
            if (b && "string" == typeof b || b === c) {
                l = (b || "").split(ga);
                r = 0;
                for (f = this.length; r < f; r++)
                    if (A = this[r], 1 === A.nodeType && A.className) {
                        d = (" " + A.className + " ").replace(Mb, " ");
                        t = 0;
                        for (j = l.length; t < j; t++)
                            for (; 0 <= d.indexOf(" " + l[t] + " ");) d = d.replace(" " + l[t] + " ", " ");
                        A.className = b ? e.trim(d) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b,
                A = "boolean" == typeof c;
            return e.isFunction(b) ? this.each(function(d) { e(this).toggleClass(b.call(this, d, this.className, c), c) }) : this.each(function() {
                if ("string" === d)
                    for (var t, j = 0, r = e(this), f = c, g = b.split(ga); t = g[j++];) f = A ? f : !r.hasClass(t), r[f ? "addClass" : "removeClass"](t);
                else if ("undefined" === d || "boolean" === d) this.className && e._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : e._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Mb, " ").indexOf(b)) return !0;
            return !1
        },
        val: function(b) { var l, d, A, t = this[0]; if (arguments.length) return A = e.isFunction(b), this.each(function(d) { var B, t = e(this); if (1 === this.nodeType && (A ? B = b.call(this, d, t.val()) : B = b, null == B ? B = "" : "number" == typeof B ? B += "" : e.isArray(B) && (B = e.map(B, function(b) { return null == b ? "" : b + "" })), l = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], !l || !("set" in l) || l.set(this, B, "value") === c)) this.value = B }); if (t) return l = e.valHooks[t.type] || e.valHooks[t.nodeName.toLowerCase()], l && "get" in l && (d = l.get(t, "value")) !== c ? d : (d = t.value, "string" == typeof d ? d.replace(Oc, "") : null == d ? "" : d) }
    });
    e.extend({
        valHooks: {
            option: { get: function(b) { var c = b.attributes.value; return !c || c.specified ? b.value : b.text } },
            select: {
                get: function(b) {
                    var c, d, A = b.selectedIndex,
                        t = [],
                        j = b.options,
                        r = "select-one" === b.type;
                    if (0 > A) return null;
                    b = r ? A : 0;
                    for (d = r ? A + 1 : j.length; b < d; b++)
                        if (c = j[b], c.selected && (e.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !e.nodeName(c.parentNode, "optgroup"))) {
                            c = e(c).val();
                            if (r) return c;
                            t.push(c)
                        }
                    return r && !t.length && j.length ? e(j[A]).val() : t
                },
                set: function(b, c) { var d = e.makeArray(c); return e(b).find("option").each(function() { this.selected = 0 <= e.inArray(e(this).val(), d) }), d.length || (b.selectedIndex = -1), d }
            }
        },
        attrFn: {},
        attr: function(b, l, d, A) {
            var t, j, r = b.nodeType;
            if (b && !(3 === r || 8 === r || 2 === r)) {
                if (A && e.isFunction(e.fn[l])) return e(b)[l](d);
                if ("undefined" == typeof b.getAttribute) return e.prop(b, l, d);
                (A = 1 !== r || !e.isXMLDoc(b)) && (l = l.toLowerCase(), j = e.attrHooks[l] || (Nb.test(l) ? Kb : ca));
                if (d !== c) { if (null === d) { e.removeAttr(b, l); return } return j && "set" in j && A && (t = j.set(b, d, l)) !== c ? t : (b.setAttribute(l, d + ""), d) }
                return j && "get" in j && A && null !== (t = j.get(b, l)) ? t : (t = b.getAttribute(l), null === t ? c : t)
            }
        },
        removeAttr: function(b, c) {
            var d, A, t, j, r = 0;
            if (c && 1 === b.nodeType)
                for (A = c.split(ga); r < A.length; r++)(t = A[r]) && (d = e.propFix[t] || t, j = Nb.test(t), j || e.attr(b, t, ""), b.removeAttribute(Ob ? t : d), j && d in b && (b[d] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (Pc.test(b.nodeName) && b.parentNode) e.error("type property can't be changed");
                    else if (!e.support.radioValue && "radio" === c && e.nodeName(b, "input")) { var d = b.value; return b.setAttribute("type", c), d && (b.value = d), c }
                }
            },
            value: {
                get: function(b, c) { return ca && e.nodeName(b, "button") ? ca.get(b, c) : c in b ? b.value : null },
                set: function(b, c, d) {
                    if (ca && e.nodeName(b, "button")) return ca.set(b, c, d);
                    b.value = c
                }
            }
        },
        propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
        prop: function(b, l, d) { var A, t, j, r = b.nodeType; if (b && !(3 === r || 8 === r || 2 === r)) return j = 1 !== r || !e.isXMLDoc(b), j && (l = e.propFix[l] || l, t = e.propHooks[l]), d !== c ? t && "set" in t && (A = t.set(b, d, l)) !== c ? A : b[l] = d : t && "get" in t && null !== (A = t.get(b, l)) ? A : b[l] },
        propHooks: { tabIndex: { get: function(b) { var l = b.getAttributeNode("tabindex"); return l && l.specified ? parseInt(l.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c } } }
    });
    Kb = { get: function(b, l) { var d, A = e.prop(b, l); return !0 === A || "boolean" != typeof A && (d = b.getAttributeNode(l)) && !1 !== d.nodeValue ? l.toLowerCase() : c }, set: function(b, c, d) { var A; return !1 === c ? e.removeAttr(b, d) : (A = e.propFix[d] || d, A in b && (b[A] = !0), b.setAttribute(d, d.toLowerCase())), d } };
    Ob || (Lb = { name: !0, id: !0, coords: !0 }, ca = e.valHooks.button = { get: function(b, l) { var d; return d = b.getAttributeNode(l), d && (Lb[l] ? "" !== d.value : d.specified) ? d.value : c }, set: function(b, c, d) { var e = b.getAttributeNode(d); return e || (e = D.createAttribute(d), b.setAttributeNode(e)), e.value = c + "" } }, e.each(["width", "height"], function(b, c) { e.attrHooks[c] = e.extend(e.attrHooks[c], { set: function(b, u) { if ("" === u) return b.setAttribute(c, "auto"), u } }) }), e.attrHooks.contenteditable = {
        get: ca.get,
        set: function(b, c, d) {
            "" === c && (c = "false");
            ca.set(b, c, d)
        }
    });
    e.support.hrefNormalized || e.each(["href", "src", "width", "height"], function(b, l) { e.attrHooks[l] = e.extend(e.attrHooks[l], { get: function(b) { b = b.getAttribute(l, 2); return null === b ? c : b } }) });
    e.support.style || (e.attrHooks.style = { get: function(b) { return b.style.cssText.toLowerCase() || c }, set: function(b, c) { return b.style.cssText = c + "" } });
    e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, { get: function(b) { b = b.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }));
    e.support.enctype || (e.propFix.enctype = "encoding");
    e.support.checkOn || e.each(["radio", "checkbox"], function() { e.valHooks[this] = { get: function(b) { return null === b.getAttribute("value") ? "on" : b.value } } });
    e.each(["radio", "checkbox"], function() { e.valHooks[this] = e.extend(e.valHooks[this], { set: function(b, c) { if (e.isArray(c)) return b.checked = 0 <= e.inArray(e(b).val(), c) } }) });
    var db = /^(?:textarea|input|select)$/i,
        Pb = /^([^\.]*|)(?:\.(.+)|)$/,
        Sc = /(?:^|\s)hover(\.\S+|)\b/,
        Tc = /^key/,
        Uc = /^(?:mouse|contextmenu)|click/,
        Qb = /^(?:focusinfocus|focusoutblur)$/,
        Rb = function(b) { return e.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1") };
    e.event = {
        add: function(b, l, d, A, t) {
            var j, r, f, g, n, q, p, m, s;
            if (!(3 === b.nodeType || 8 === b.nodeType || !l || !d || !(j = e._data(b)))) {
                d.handler && (p = d, d = p.handler, t = p.selector);
                d.guid || (d.guid = e.guid++);
                (f = j.events) || (j.events = f = {});
                (r = j.handle) || (j.handle = r = function(b) { return "undefined" != typeof e && (!b || e.event.triggered !== b.type) ? e.event.dispatch.apply(r.elem, arguments) : c }, r.elem = b);
                l = e.trim(Rb(l)).split(" ");
                for (j = 0; j < l.length; j++) {
                    g = Pb.exec(l[j]) || [];
                    n = g[1];
                    q = (g[2] || "").split(".").sort();
                    s = e.event.special[n] || {};
                    n = (t ? s.delegateType : s.bindType) || n;
                    s = e.event.special[n] || {};
                    g = e.extend({ type: n, origType: g[1], data: A, handler: d, guid: d.guid, selector: t, needsContext: t && e.expr.match.needsContext.test(t), namespace: q.join(".") }, p);
                    m = f[n];
                    if (!m && (m = f[n] = [], m.delegateCount = 0, !s.setup || !1 === s.setup.call(b, A, q, r))) b.addEventListener ? b.addEventListener(n, r, !1) : b.attachEvent && b.attachEvent("on" + n, r);
                    s.add && (s.add.call(b, g), g.handler.guid || (g.handler.guid = d.guid));
                    t ? m.splice(m.delegateCount++, 0, g) : m.push(g);
                    e.event.global[n] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, c, d, A, j) {
            var f, r, g, n, q, p, m, s, y, z, x = e.hasData(b) && e._data(b);
            if (x && (m = x.events)) {
                c = e.trim(Rb(c || "")).split(" ");
                for (f = 0; f < c.length; f++)
                    if (r = Pb.exec(c[f]) || [], g = n = r[1], r = r[2], g) {
                        s = e.event.special[g] || {};
                        g = (A ? s.delegateType : s.bindType) || g;
                        y = m[g] || [];
                        q = y.length;
                        r = r ? RegExp("(^|\\.)" + r.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (p = 0; p < y.length; p++) z = y[p], (j || n === z.origType) && (!d || d.guid === z.guid) && (!r || r.test(z.namespace)) && (!A || A === z.selector || "**" === A && z.selector) && (y.splice(p--, 1), z.selector && y.delegateCount--, s.remove && s.remove.call(b, z));
                        0 === y.length && q !== y.length && ((!s.teardown || !1 === s.teardown.call(b, r, x.handle)) && e.removeEvent(b, g, x.handle), delete m[g])
                    } else
                        for (g in m) e.event.remove(b, g + c[f], d, A, !0);
                e.isEmptyObject(m) && (delete x.handle, e.removeData(b, "events", !0))
            }
        },
        customEvent: { getData: !0, setData: !0, changeData: !0 },
        trigger: function(u, l, d, A) {
            if (!d || 3 !== d.nodeType && 8 !== d.nodeType) {
                var j, f, r, g, n, q, p, m = u.type || u;
                g = [];
                if (!Qb.test(m + e.event.triggered) && (0 <= m.indexOf("!") && (m = m.slice(0, -1), j = !0), 0 <= m.indexOf(".") && (g = m.split("."), m = g.shift(), g.sort()), d && !e.event.customEvent[m] || e.event.global[m]))
                    if (u = "object" == typeof u ? u[e.expando] ? u : new e.Event(m, u) : new e.Event(m), u.type = m, u.isTrigger = !0, u.exclusive = j, u.namespace = g.join("."), u.namespace_re = u.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, g = 0 > m.indexOf(":") ? "on" + m : "", d) {
                        if (u.result = c, u.target || (u.target = d), l = null != l ? e.makeArray(l) : [], l.unshift(u), n = e.event.special[m] || {}, !(n.trigger && !1 === n.trigger.apply(d, l))) {
                            p = [
                                [d, n.bindType || m]
                            ];
                            if (!A && !n.noBubble && !e.isWindow(d)) {
                                f = n.delegateType || m;
                                j = Qb.test(f + m) ? d : d.parentNode;
                                for (r = d; j; j = j.parentNode) p.push([j, f]), r = j;
                                r === (d.ownerDocument || D) && p.push([r.defaultView || r.parentWindow || b, f])
                            }
                            for (f = 0; f < p.length && !u.isPropagationStopped(); f++) j = p[f][0], u.type = p[f][1], (q = (e._data(j, "events") || {})[u.type] && e._data(j, "handle")) && q.apply(j, l), (q = g && j[g]) && e.acceptData(j) && q.apply && !1 === q.apply(j, l) && u.preventDefault();
                            return u.type = m, !A && !u.isDefaultPrevented() && (!n._default || !1 === n._default.apply(d.ownerDocument, l)) && ("click" !== m || !e.nodeName(d, "a")) && e.acceptData(d) && g && d[m] && ("focus" !== m && "blur" !== m || 0 !== u.target.offsetWidth) && !e.isWindow(d) && (r = d[g], r && (d[g] = null), e.event.triggered = m, d[m](), e.event.triggered = c, r && (d[g] = r)), u.result
                        }
                    } else
                        for (f in d = e.cache, d) d[f].events && d[f].events[m] && e.event.trigger(u, l, d[f].handle.elem, !0)
            }
        },
        dispatch: function(u) {
            u = e.event.fix(u || b.event);
            var l, d, A, j, f, r, g = (e._data(this, "events") || {})[u.type] || [],
                n = g.delegateCount,
                q = aa.call(arguments),
                p = !u.exclusive && !u.namespace,
                m = e.event.special[u.type] || {},
                s = [];
            q[0] = u;
            u.delegateTarget = this;
            if (!(m.preDispatch && !1 === m.preDispatch.call(this, u))) {
                if (n && (!u.button || "click" !== u.type))
                    for (d = u.target; d != this; d = d.parentNode || this)
                        if (!0 !== d.disabled || "click" !== u.type) {
                            j = {};
                            f = [];
                            for (l = 0; l < n; l++) A = g[l], r = A.selector, j[r] === c && (j[r] = A.needsContext ? 0 <= e(r, this).index(d) : e.find(r, this, null, [d]).length), j[r] && f.push(A);
                            f.length && s.push({ elem: d, matches: f })
                        }
                g.length > n && s.push({ elem: this, matches: g.slice(n) });
                for (l = 0; l < s.length && !u.isPropagationStopped(); l++) {
                    j = s[l];
                    u.currentTarget = j.elem;
                    for (d = 0; d < j.matches.length && !u.isImmediatePropagationStopped(); d++)
                        if (A = j.matches[d], p || !u.namespace && !A.namespace || u.namespace_re && u.namespace_re.test(A.namespace)) u.data = A.data, u.handleObj = A, A = ((e.event.special[A.origType] || {}).handle || A.handler).apply(j.elem, q), A !== c && (u.result = A, !1 === A && (u.preventDefault(), u.stopPropagation()))
                }
                return m.postDispatch && m.postDispatch.call(this, u), u.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: ["char", "charCode", "key", "keyCode"], filter: function(b, c) { return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, l) {
                var d, e, j, f = l.button,
                    r = l.fromElement;
                return null == b.pageX && null != l.clientX && (d = b.target.ownerDocument || D, e = d.documentElement, j = d.body, b.pageX = l.clientX + (e && e.scrollLeft || j && j.scrollLeft || 0) - (e && e.clientLeft || j && j.clientLeft || 0), b.pageY = l.clientY + (e && e.scrollTop || j && j.scrollTop || 0) - (e && e.clientTop || j && j.clientTop || 0)), !b.relatedTarget && r && (b.relatedTarget = r === b.target ? l.toElement : r), !b.which && f !== c && (b.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[e.expando]) return b;
            var c, d, j = b,
                f = e.event.fixHooks[b.type] || {},
                g = f.props ? this.props.concat(f.props) : this.props;
            b = e.Event(j);
            for (c = g.length; c;) d = g[--c], b[d] = j[d];
            return b.target || (b.target = j.srcElement || D), 3 === b.target.nodeType && (b.target = b.target.parentNode), b.metaKey = !!b.metaKey, f.filter ? f.filter(b, j) : b
        },
        special: { load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function(b, c, d) { e.isWindow(this) && (this.onbeforeunload = d) }, teardown: function(b, c) { this.onbeforeunload === c && (this.onbeforeunload = null) } } },
        simulate: function(b, c, d, j) {
            b = e.extend(new e.Event, d, { type: b, isSimulated: !0, originalEvent: {} });
            j ? e.event.trigger(b, null, c) : e.event.dispatch.call(c, b);
            b.isDefaultPrevented() && d.preventDefault()
        }
    };
    e.event.handle = e.event.dispatch;
    e.removeEvent = D.removeEventListener ? function(b, c, d) { b.removeEventListener && b.removeEventListener(c, d, !1) } : function(b, c, d) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, d))
    };
    e.Event = function(b, c) {
        if (this instanceof e.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? m : g) : this.type = b, c && e.extend(this, c), this.timeStamp = b && b.timeStamp || e.now(), this[e.expando] = !0;
        else return new e.Event(b, c)
    };
    e.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = m;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = m;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = m;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    e.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(b, c) {
        e.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var u, d = b.relatedTarget,
                    j = b.handleObj;
                if (!d || d !== this && !e.contains(this, d)) b.type = j.origType, u = j.handler.apply(this, arguments), b.type = c;
                return u
            }
        }
    });
    e.support.submitBubbles || (e.event.special.submit = {
        setup: function() {
            if (e.nodeName(this, "form")) return !1;
            e.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = e.nodeName(b, "input") || e.nodeName(b, "button") ? b.form : c) && !e._data(b, "_submit_attached") && (e.event.add(b, "submit._submit", function(b) { b._submit_bubble = !0 }), e._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) { b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && e.event.simulate("submit", this.parentNode, b, !0)) },
        teardown: function() {
            if (e.nodeName(this, "form")) return !1;
            e.event.remove(this, "._submit")
        }
    });
    e.support.changeBubbles || (e.event.special.change = {
        setup: function() {
            if (db.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) e.event.add(this, "propertychange._change", function(b) { "checked" === b.originalEvent.propertyName && (this._just_changed = !0) }), e.event.add(this, "click._change", function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    e.event.simulate("change", this, b, !0)
                });
                return !1
            }
            e.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                db.test(b.nodeName) && !e._data(b, "_change_attached") && (e.event.add(b, "change._change", function(b) { this.parentNode && !b.isSimulated && !b.isTrigger && e.event.simulate("change", this.parentNode, b, !0) }), e._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) { var c = b.target; if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments) },
        teardown: function() { return e.event.remove(this, "._change"), !db.test(this.nodeName) }
    });
    e.support.focusinBubbles || e.each({ focus: "focusin", blur: "focusout" }, function(b, c) {
        var d = 0,
            j = function(b) { e.event.simulate(c, b.target, e.event.fix(b), !0) };
        e.event.special[c] = { setup: function() { 0 === d++ && D.addEventListener(b, j, !0) }, teardown: function() { 0 === --d && D.removeEventListener(b, j, !0) } }
    });
    e.fn.extend({
        on: function(b, d, B, j, f) {
            var n, r;
            if ("object" == typeof b) { "string" != typeof d && (B = B || d, d = c); for (r in b) this.on(r, d, B, b[r], f); return this }
            null == B && null == j ? (j = d, B = d = c) : null == j && ("string" == typeof d ? (j = B, B = c) : (j = B, B = d, d = c));
            if (!1 === j) j = g;
            else if (!j) return this;
            return 1 === f && (n = j, j = function(b) { return e().off(b), n.apply(this, arguments) }, j.guid = n.guid || (n.guid = e.guid++)), this.each(function() { e.event.add(this, b, j, B, d) })
        },
        one: function(b, c, d, e) { return this.on(b, c, d, e, 1) },
        off: function(b, d, B) { var j, f; if (b && b.preventDefault && b.handleObj) return j = b.handleObj, e(b.delegateTarget).off(j.namespace ? j.origType + "." + j.namespace : j.origType, j.selector, j.handler), this; if ("object" == typeof b) { for (f in b) this.off(f, d, b[f]); return this } if (!1 === d || "function" == typeof d) B = d, d = c; return !1 === B && (B = g), this.each(function() { e.event.remove(this, b, B, d) }) },
        bind: function(b, c, d) { return this.on(b, null, c, d) },
        unbind: function(b, c) { return this.off(b, null, c) },
        live: function(b, c, d) { return e(this.context).on(b, this.selector, c, d), this },
        die: function(b, c) { return e(this.context).off(b, this.selector || "**", c), this },
        delegate: function(b, c, d, e) { return this.on(c, b, d, e) },
        undelegate: function(b, c, d) { return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d) },
        trigger: function(b, c) { return this.each(function() { e.event.trigger(b, c, this) }) },
        triggerHandler: function(b, c) { if (this[0]) return e.event.trigger(b, c, this[0], !0) },
        toggle: function(b) {
            var c = arguments,
                d = b.guid || e.guid++,
                j = 0,
                f = function(d) { var B = (e._data(this, "lastToggle" + b.guid) || 0) % j; return e._data(this, "lastToggle" + b.guid, B + 1), d.preventDefault(), c[B].apply(this, arguments) || !1 };
            for (f.guid = d; j < c.length;) c[j++].guid = d;
            return this.click(f)
        },
        hover: function(b, c) { return this.mouseenter(b).mouseleave(c || b) }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(b, c) {
        e.fn[c] = function(b, d) { return null == d && (d = b, b = null), 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c) };
        Tc.test(c) && (e.event.fixHooks[c] = e.event.keyHooks);
        Uc.test(c) && (e.event.fixHooks[c] = e.event.mouseHooks)
    });
    var Vc = b,
        H = function(b, c, d, e) {
            d = d || [];
            c = c || X;
            var j, f, r, g, n = c.nodeType;
            if (!b || "string" != typeof b) return d;
            if (1 !== n && 9 !== n) return [];
            r = La(c);
            if (!r && !e && (j = Wc.exec(b)))
                if (g = j[1])
                    if (9 === n) { f = c.getElementById(g); if (!f || !f.parentNode) return d; if (f.id === g) return d.push(f), d } else { if (c.ownerDocument && (f = c.ownerDocument.getElementById(g)) && Sb(c, f) && f.id === g) return d.push(f), d }
            else { if (j[2]) return pa.apply(d, qa.call(c.getElementsByTagName(b), 0)), d; if ((g = j[3]) && Tb && c.getElementsByClassName) return pa.apply(d, qa.call(c.getElementsByClassName(g), 0)), d }
            return eb(b.replace(Ma, "$1"), c, d, e, r)
        },
        wa = function(b) { return function(c) { return "input" === c.nodeName.toLowerCase() && c.type === b } },
        Ub = function(b) { return function(c) { var d = c.nodeName.toLowerCase(); return ("input" === d || "button" === d) && c.type === b } },
        ja = function(b) { return Y(function(c) { return c = +c, Y(function(d, e) { for (var j, f = b([], d.length, c), r = f.length; r--;) d[j = f[r]] && (d[j] = !(e[j] = d[j])) }) }) },
        Na = function(b, c, d) {
            if (b === c) return d;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        },
        Pa = function(b, c) {
            var d, e, j, f, r, g, n;
            if (r = Vb[O][b]) return c ? 0 : r.slice(0);
            r = b;
            g = [];
            for (n = J.preFilter; r;) {
                if (!d || (e = Xc.exec(r))) e && (r = r.slice(e[0].length)), g.push(j = []);
                d = !1;
                if (e = Yc.exec(r)) j.push(d = new Wb(e.shift())), r = r.slice(d.length), d.type = e[0].replace(Ma, " ");
                for (f in J.filter)(e = Oa[f].exec(r)) && (!n[f] || (e = n[f](e, X, !0))) && (j.push(d = new Wb(e.shift())), r = r.slice(d.length), d.type = f, d.matches = e);
                if (!d) break
            }
            return c ? r.length : r ? H.error(b) : Vb(b, g).slice(0)
        },
        gb = function(b, c, d) {
            var e = c.dir,
                j = d && "parentNode" === c.dir,
                f = Zc++;
            return c.first ? function(c, d, l) {
                for (; c = c[e];)
                    if (j || 1 === c.nodeType) return b(c, d, l)
            } : function(c, d, l) {
                if (l)
                    for (; c = c[e];) { if ((j || 1 === c.nodeType) && b(c, d, l)) return c } else
                        for (var B, g = xa + " " + f + " ", n = g + fb; c = c[e];)
                            if (j || 1 === c.nodeType) {
                                if ((B = c[O]) === n) return c.sizset;
                                if ("string" == typeof B && 0 === B.indexOf(g)) { if (c.sizset) return c } else {
                                    c[O] = n;
                                    if (b(c, d, l)) return c.sizset = !0, c;
                                    c.sizset = !1
                                }
                            }
            }
        },
        hb = function(b) {
            return 1 < b.length ? function(c, d, e) {
                for (var j = b.length; j--;)
                    if (!b[j](c, d, e)) return !1;
                return !0
            } : b[0]
        },
        Qa = function(b, c, d, e, j) {
            for (var f, r = [], g = 0, n = b.length, q = null != c; g < n; g++)
                if (f = b[g])
                    if (!d || d(f, e, j)) r.push(f), q && c.push(g);
            return r
        },
        ib = function(b, c, d, e, j, f) {
            return e && !e[O] && (e = ib(e)), j && !j[O] && (j = ib(j, f)), Y(function(f, g, n, C) {
                if (!f || !j) {
                    var q, p, m = [],
                        s = [],
                        y = g.length;
                    if (!(p = f)) {
                        p = c || "*";
                        var z = n.nodeType ? [n] : n,
                            x = [];
                        q = 0;
                        for (var v = z.length; q < v; q++) H(p, z[q], x, f);
                        p = x
                    }
                    z = b && (f || !c) ? Qa(p, m, b, n, C) : p;
                    x = d ? j || (f ? b : y || e) ? [] : g : z;
                    d && d(z, x, n, C);
                    if (e) {
                        p = Qa(x, s);
                        e(p, [], n, C);
                        for (n = p.length; n--;)
                            if (q = p[n]) x[s[n]] = !(z[s[n]] = q)
                    }
                    if (f)
                        for (n = b && x.length; n--;) { if (q = x[n]) f[m[n]] = !(g[m[n]] = q) } else x = Qa(x === g ? x.splice(y, x.length) : x), j ? j(null, g, x, C) : pa.apply(g, x)
                }
            })
        },
        jb = function(b) {
            var c, d, e, j = b.length,
                f = J.relative[b[0].type];
            d = f || J.relative[" "];
            for (var g = f ? 1 : 0, n = gb(function(b) { return b === c }, d, !0), q = gb(function(b) { return -1 < Xb.call(c, b) }, d, !0), p = [function(b, d, u) { return !f && (u || d !== Ra) || ((c = d).nodeType ? n(b, d, u) : q(b, d, u)) }]; g < j; g++)
                if (d = J.relative[b[g].type]) p = [gb(hb(p), d)];
                else {
                    d = J.filter[b[g].type].apply(null, b[g].matches);
                    if (d[O]) { for (e = ++g; e < j && !J.relative[b[e].type]; e++); return ib(1 < g && hb(p), 1 < g && b.slice(0, g - 1).join("").replace(Ma, "$1"), d, g < e && jb(b.slice(g, e)), e < j && jb(b = b.slice(e)), e < j && b.join("")) }
                    p.push(d)
                }
            return hb(p)
        },
        eb = function(b, c, d, e, j) {
            var f, g, n, q, p = Pa(b);
            if (!e && 1 === p.length) {
                g = p[0] = p[0].slice(0);
                if (2 < g.length && "ID" === (n = g[0]).type && 9 === c.nodeType && !j && J.relative[g[1].type]) {
                    c = J.find.ID(n.matches[0].replace(ka, ""), c, j)[0];
                    if (!c) return d;
                    b = b.slice(g.shift().length)
                }
                for (f = Oa.POS.test(b) ? -1 : g.length - 1; 0 <= f; f--) {
                    n = g[f];
                    if (J.relative[q = n.type]) break;
                    if (q = J.find[q])
                        if (e = q(n.matches[0].replace(ka, ""), kb.test(g[0].type) && c.parentNode || c, j)) {
                            g.splice(f, 1);
                            b = e.length && g.join("");
                            if (!b) return pa.apply(d, qa.call(e, 0)), d;
                            break
                        }
                }
            }
            return lb(b, p)(e, c, j, d, kb.test(b)), d
        },
        Yb = function() {},
        fb, mb, J, Sa, La, Sb, lb, nb, ya, Ra, Zb = !0,
        O = ("sizcache" + Math.random()).replace(".", ""),
        Wb = String,
        X = Vc.document,
        W = X.documentElement,
        xa = 0,
        Zc = 0,
        $c = [].pop,
        pa = [].push,
        qa = [].slice,
        Xb = [].indexOf || function(b) {
            for (var c = 0, d = this.length; c < d; c++)
                if (this[c] === b) return c;
            return -1
        },
        Y = function(b, c) { return b[O] = null == c || c, b },
        ob = function() {
            var b = {},
                c = [];
            return Y(function(d, e) { return c.push(d) > J.cacheLength && delete b[c.shift()], b[d] = e }, b)
        },
        $b = ob(),
        Vb = ob(),
        ac = ob(),
        bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        pb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)",
        Ma = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        ad = RegExp(pb),
        Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        kb = /[\x20\t\r\n\f]*[+~]/,
        bd = /h\d/i,
        cd = /input|select|textarea|button/i,
        ka = /\\(?!\\)/g,
        Oa = { ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/, NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/, TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"), ATTR: RegExp("^" + bc), PSEUDO: RegExp("^" + pb), POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i, CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i") },
        da = function(b) { var c = X.createElement("div"); try { return b(c) } catch (d) { return !1 } finally {} },
        dd = da(function(b) { return b.appendChild(X.createComment("")), !b.getElementsByTagName("*").length }),
        ed = da(function(b) { return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href") }),
        fd = da(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Tb = da(function(b) { return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length) }),
        gd = da(function(b) {
            b.id = O + 0;
            b.innerHTML = "<a name='" + O + "'></a><div name='" + O + "'></div>";
            W.insertBefore(b, W.firstChild);
            var c = X.getElementsByName && X.getElementsByName(O).length === 2 + X.getElementsByName(O + 0).length;
            return mb = !X.getElementById(O), W.removeChild(b), c
        });
    try { qa.call(W.childNodes, 0)[0].nodeType } catch (Qd) { qa = function(b) { for (var c, d = []; c = this[b]; b++) d.push(c); return d } }
    H.matches = function(b, c) { return H(b, null, null, c) };
    H.matchesSelector = function(b, c) { return 0 < H(c, null, null, [b]).length };
    Sa = H.getText = function(b) {
        var c, d = "",
            e = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) { if ("string" == typeof b.textContent) return b.textContent; for (b = b.firstChild; b; b = b.nextSibling) d += Sa(b) } else { if (3 === c || 4 === c) return b.nodeValue }
        else
            for (; c = b[e]; e++) d += Sa(c);
        return d
    };
    La = H.isXML = function(b) { return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1 };
    Sb = H.contains = W.contains ? function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b,
            e = c && c.parentNode;
        return b === e || !(!e || !(1 === e.nodeType && d.contains && d.contains(e)))
    } : W.compareDocumentPosition ? function(b, c) { return c && !!(b.compareDocumentPosition(c) & 16) } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b) return !0;
        return !1
    };
    H.attr = function(b, c) { var d, e = La(b); return e || (c = c.toLowerCase()), (d = J.attrHandle[c]) ? d(b) : e || fd ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null) };
    J = H.selectors = {
        cacheLength: 50,
        createPseudo: Y,
        match: Oa,
        attrHandle: ed ? {} : { href: function(b) { return b.getAttribute("href", 2) }, type: function(b) { return b.getAttribute("type") } },
        find: { ID: mb ? function(b, c, d) { if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ? [b] : [] } : function(b, c, d) { if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : [] }, TAG: dd ? function(b, c) { if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b) } : function(b, c) { var d = c.getElementsByTagName(b); if ("*" === b) { for (var e, j = [], f = 0; e = d[f]; f++) 1 === e.nodeType && j.push(e); return j } return d }, NAME: gd && function(b, c) { if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name) }, CLASS: Tb && function(b, c, d) { if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b) } },
        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
        preFilter: {
            ATTR: function(b) { return b[1] = b[1].replace(ka, ""), b[3] = (b[4] || b[5] || "").replace(ka, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4) },
            CHILD: function(b) { return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || H.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && H.error(b[0]), b },
            PSEUDO: function(b) {
                var c, d;
                if (Oa.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) ad.test(c) && (d = Pa(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: mb ? function(b) {
                return b = b.replace(ka, ""),
                    function(c) { return c.getAttribute("id") === b }
            } : function(b) {
                return b = b.replace(ka, ""),
                    function(c) { return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === b }
            },
            TAG: function(b) { return "*" === b ? function() { return !0 } : (b = b.replace(ka, "").toLowerCase(), function(c) { return c.nodeName && c.nodeName.toLowerCase() === b }) },
            CLASS: function(b) {
                var c = $b[O][b];
                return c || (c = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(b) { return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "") }
            },
            ATTR: function(b, c, d) { return function(e) { e = H.attr(e, b); return null == e ? "!=" === c : c ? (e += "", "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.substr(e.length - d.length) === d : "~=" === c ? -1 < (" " + e + " ").indexOf(d) : "|=" === c ? e === d || e.substr(0, d.length + 1) === d + "-" : !1) : !0 } },
            CHILD: function(b, c, d, e) {
                return "nth" === b ? function(b) {
                    var c, l;
                    c = b.parentNode;
                    if (1 === d && 0 === e) return !0;
                    if (c) { l = 0; for (c = c.firstChild; c && !(1 === c.nodeType && (l++, b === c)); c = c.nextSibling); }
                    return l -= e, l === d || 0 === l % d && 0 <= l / d
                } : function(c) {
                    var d = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; d = d.previousSibling;)
                                if (1 === d.nodeType) return !1;
                            if ("first" === b) return !0;
                            d = c;
                        case "last":
                            for (; d = d.nextSibling;)
                                if (1 === d.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(b, c) { var d, e = J.pseudos[b] || J.setFilters[b.toLowerCase()] || H.error("unsupported pseudo: " + b); return e[O] ? e(c) : 1 < e.length ? (d = [b, b, "", c], J.setFilters.hasOwnProperty(b.toLowerCase()) ? Y(function(b, d) { for (var u, j = e(b, c), f = j.length; f--;) u = Xb.call(b, j[f]), b[u] = !(d[u] = j[f]) }) : function(b) { return e(b, 0, d) }) : e }
        },
        pseudos: {
            not: Y(function(b) {
                var c = [],
                    d = [],
                    e = lb(b.replace(Ma, "$1"));
                return e[O] ? Y(function(b, c, d, l) {
                    l = e(b, null, l, []);
                    for (var u = b.length; u--;)
                        if (d = l[u]) b[u] = !(c[u] = d)
                }) : function(b, u, j) { return c[0] = b, e(c, null, j, d), !d.pop() }
            }),
            has: Y(function(b) { return function(c) { return 0 < H(b, c).length } }),
            contains: Y(function(b) { return function(c) { return -1 < (c.textContent || c.innerText || Sa(c)).indexOf(b) } }),
            enabled: function(b) { return !1 === b.disabled },
            disabled: function(b) { return !0 === b.disabled },
            checked: function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && !!b.checked || "option" === c && !!b.selected },
            selected: function(b) { return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected },
            parent: function(b) { return !J.pseudos.empty(b) },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) { return bd.test(b.nodeName) },
            text: function(b) { var c, d; return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c) },
            radio: wa("radio"),
            checkbox: wa("checkbox"),
            file: wa("file"),
            password: wa("password"),
            image: wa("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && "button" === b.type || "button" === c },
            input: function(b) { return cd.test(b.nodeName) },
            focus: function(b) { var c = b.ownerDocument; return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href) },
            active: function(b) { return b === b.ownerDocument.activeElement },
            first: ja(function() { return [0] }),
            last: ja(function(b, c) { return [c - 1] }),
            eq: ja(function(b, c, d) { return [0 > d ? d + c : d] }),
            even: ja(function(b, c) { for (var d = 0; d < c; d += 2) b.push(d); return b }),
            odd: ja(function(b, c) { for (var d = 1; d < c; d += 2) b.push(d); return b }),
            lt: ja(function(b, c, d) { for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c); return b }),
            gt: ja(function(b, c, d) { for (d = 0 > d ? d + c : d; ++d < c;) b.push(d); return b })
        }
    };
    nb = W.compareDocumentPosition ? function(b, c) { return b === c ? (ya = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1 } : function(b, c) {
        if (b === c) return ya = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, e, j = [],
            f = [];
        d = b.parentNode;
        e = c.parentNode;
        var g = d;
        if (d === e) return Na(b, c);
        if (!d) return -1;
        if (!e) return 1;
        for (; g;) j.unshift(g), g = g.parentNode;
        for (g = e; g;) f.unshift(g), g = g.parentNode;
        d = j.length;
        e = f.length;
        for (g = 0; g < d && g < e; g++)
            if (j[g] !== f[g]) return Na(j[g], f[g]);
        return g === d ? Na(b, f[g], -1) : Na(j[g], c, 1)
    };
    [0, 0].sort(nb);
    Zb = !ya;
    H.uniqueSort = function(b) {
        var c, d = 1;
        ya = Zb;
        b.sort(nb);
        if (ya)
            for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    H.error = function(b) { throw Error("Syntax error, unrecognized expression: " + b); };
    lb = H.compile = function(b, c) {
        var d, e = [],
            j = [],
            f = ac[O][b];
        if (!f) {
            c || (c = Pa(b));
            for (d = c.length; d--;) f = jb(c[d]), f[O] ? e.push(f) : j.push(f);
            var g = 0 < e.length,
                n = 0 < j.length,
                q = function(b, c, d, l, u) {
                    var f, B, p = [],
                        m = 0,
                        C = "0",
                        s = b && [],
                        y = null != u,
                        x = Ra,
                        z = b || n && J.find.TAG("*", u && c.parentNode || c),
                        v = xa += null == x ? 1 : Math.E;
                    for (y && (Ra = c !== X && c, fb = q.el); null != (u = z[C]); C++) {
                        if (n && u) {
                            for (f = 0; B = j[f]; f++)
                                if (B(u, c, d)) { l.push(u); break }
                            y && (xa = v, fb = ++q.el)
                        }
                        g && ((u = !B && u) && m--, b && s.push(u))
                    }
                    m += C;
                    if (g && C !== m) {
                        for (f = 0; B = e[f]; f++) B(s, p, c, d);
                        if (b) {
                            if (0 < m)
                                for (; C--;) !s[C] && !p[C] && (p[C] = $c.call(l));
                            p = Qa(p)
                        }
                        pa.apply(l, p);
                        y && !b && 0 < p.length && 1 < m + e.length && H.uniqueSort(l)
                    }
                    return y && (xa = v, Ra = x), s
                };
            d = (q.el = 0, g ? Y(q) : q);
            f = ac(b, d)
        }
        return f
    };
    if (X.querySelectorAll) {
        var cc, hd = eb,
            id = /'|\\/g,
            jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            Z = [":focus"],
            Ta = [":active", ":focus"],
            Ua = W.matchesSelector || W.mozMatchesSelector || W.webkitMatchesSelector || W.oMatchesSelector || W.msMatchesSelector;
        da(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Z.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Z.push(":checked")
        });
        da(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Z.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Z.push(":enabled", ":disabled")
        });
        Z = RegExp(Z.join("|"));
        eb = function(b, c, d, e, j) {
            if (!e && !j && (!Z || !Z.test(b))) {
                var f, g, n = !0,
                    q = O;
                g = c;
                f = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    f = Pa(b);
                    (n = c.getAttribute("id")) ? q = n.replace(id, "\\$&"): c.setAttribute("id", q);
                    q = "[id='" + q + "'] ";
                    for (g = f.length; g--;) f[g] = q + f[g].join("");
                    g = kb.test(b) && c.parentNode || c;
                    f = f.join(",")
                }
                if (f) try { return pa.apply(d, qa.call(g.querySelectorAll(f), 0)), d } catch (p) {} finally { n || c.removeAttribute("id") }
            }
            return hd(b, c, d, e, j)
        };
        Ua && (da(function(b) { cc = Ua.call(b, "div"); try { Ua.call(b, "[test!='']:sizzle"), Ta.push("!=", pb) } catch (c) {} }), Ta = RegExp(Ta.join("|")), H.matchesSelector = function(b, c) {
            c = c.replace(jd, "='$1']");
            if (!La(b) && !Ta.test(c) && (!Z || !Z.test(c))) try { var d = Ua.call(b, c); if (d || cc || b.document && 11 !== b.document.nodeType) return d } catch (e) {}
            return 0 < H(c, null, null, [b]).length
        })
    }
    J.pseudos.nth = J.pseudos.eq;
    J.filters = Yb.prototype = J.pseudos;
    J.setFilters = new Yb;
    H.attr = e.attr;
    e.find = H;
    e.expr = H.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.unique = H.uniqueSort;
    e.text = H.getText;
    e.isXMLDoc = H.isXML;
    e.contains = H.contains;
    var kd = /Until$/,
        ld = /^(?:parents|prev(?:Until|All))/,
        uc = /^.[^:#\[\.,]*$/,
        dc = e.expr.match.needsContext,
        md = { children: !0, contents: !0, next: !0, prev: !0 };
    e.fn.extend({
        find: function(b) {
            var c, d, j, f, g, n, q = this;
            if ("string" != typeof b) return e(b).filter(function() {
                c = 0;
                for (d = q.length; c < d; c++)
                    if (e.contains(q[c], this)) return !0
            });
            n = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (j = n.length, e.find(b, this[c], n), 0 < c)
                    for (f = j; f < n.length; f++)
                        for (g = 0; g < j; g++)
                            if (n[g] === n[f]) { n.splice(f--, 1); break }
            return n
        },
        has: function(b) {
            var c, d = e(b, this),
                j = d.length;
            return this.filter(function() {
                for (c = 0; c < j; c++)
                    if (e.contains(this, d[c])) return !0
            })
        },
        not: function(b) { return this.pushStack(y(this, b, !1), "not", b) },
        filter: function(b) { return this.pushStack(y(this, b, !0), "filter", b) },
        is: function(b) { return !!b && ("string" == typeof b ? dc.test(b) ? 0 <= e(b, this.context).index(this[0]) : 0 < e.filter(b, this).length : 0 < this.filter(b).length) },
        closest: function(b, c) {
            for (var d, j = 0, f = this.length, g = [], n = dc.test(b) || "string" != typeof b ? e(b, c || this.context) : 0; j < f; j++)
                for (d = this[j]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (n ? -1 < n.index(d) : e.find.matchesSelector(d, b)) { g.push(d); break }
                    d = d.parentNode
                }
            return g = 1 < g.length ? e.unique(g) : g, this.pushStack(g, "closest", b)
        },
        index: function(b) { return b ? "string" == typeof b ? e.inArray(this[0], e(b)) : e.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1 },
        add: function(b, c) {
            var d = "string" == typeof b ? e(b, c) : e.makeArray(b && b.nodeType ? [b] : b),
                j = e.merge(this.get(), d);
            return this.pushStack(v(d[0]) || v(j[0]) ? j : e.unique(j))
        },
        addBack: function(b) { return this.add(null == b ? this.prevObject : this.prevObject.filter(b)) }
    });
    e.fn.andSelf = e.fn.addBack;
    e.each({ parent: function(b) { return (b = b.parentNode) && 11 !== b.nodeType ? b : null }, parents: function(b) { return e.dir(b, "parentNode") }, parentsUntil: function(b, c, d) { return e.dir(b, "parentNode", d) }, next: function(b) { return p(b, "nextSibling") }, prev: function(b) { return p(b, "previousSibling") }, nextAll: function(b) { return e.dir(b, "nextSibling") }, prevAll: function(b) { return e.dir(b, "previousSibling") }, nextUntil: function(b, c, d) { return e.dir(b, "nextSibling", d) }, prevUntil: function(b, c, d) { return e.dir(b, "previousSibling", d) }, siblings: function(b) { return e.sibling((b.parentNode || {}).firstChild, b) }, children: function(b) { return e.sibling(b.firstChild) }, contents: function(b) { return e.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : e.merge([], b.childNodes) } }, function(b, c) { e.fn[b] = function(d, j) { var f = e.map(this, c, d); return kd.test(b) || (j = d), j && "string" == typeof j && (f = e.filter(j, f)), f = 1 < this.length && !md[b] ? e.unique(f) : f, 1 < this.length && ld.test(b) && (f = f.reverse()), this.pushStack(f, b, aa.call(arguments).join(",")) } });
    e.extend({ filter: function(b, c, d) { return d && (b = ":not(" + b + ")"), 1 === c.length ? e.find.matchesSelector(c[0], b) ? [c[0]] : [] : e.find.matches(b, c) }, dir: function(b, d, j) { var f = []; for (b = b[d]; b && 9 !== b.nodeType && (j === c || 1 !== b.nodeType || !e(b).is(j));) 1 === b.nodeType && f.push(b), b = b[d]; return f }, sibling: function(b, c) { for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b); return d } });
    var wb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        nd = / jQuery\d+="(?:null|\d+)"/g,
        qb = /^\s+/,
        ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        fc = /<([\w:]+)/,
        od = /<tbody/i,
        pd = /<|&#?\w+;/,
        qd = /<(?:script|style|link)/i,
        rd = /<(?:script|object|embed|option|style)/i,
        rb = RegExp("<(?:" + wb + ")[\\s/>]", "i"),
        xb = /^(?:checkbox|radio)$/,
        gc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        sd = /\/(java|ecma)script/i,
        td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        V = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] },
        hc = s(D),
        sb = hc.appendChild(D.createElement("div"));
    V.optgroup = V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    e.support.htmlSerialize || (V._default = [1, "X<div>", "</div>"]);
    e.fn.extend({
        text: function(b) { return e.access(this, function(b) { return b === c ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || D).createTextNode(b)) }, null, b, arguments.length) },
        wrapAll: function(b) {
            if (e.isFunction(b)) return this.each(function(c) { e(this).wrapAll(b.call(this, c)) });
            if (this[0]) {
                var c = e(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() { for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild; return b }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return e.isFunction(b) ? this.each(function(c) { e(this).wrapInner(b.call(this, c)) }) : this.each(function() {
                var c = e(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) { var c = e.isFunction(b); return this.each(function(d) { e(this).wrapAll(c ? b.call(this, d) : b) }) },
        unwrap: function() { return this.parent().each(function() { e.nodeName(this, "body") || e(this).replaceWith(this.childNodes) }).end() },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() { if (!v(this[0])) return this.domManip(arguments, !1, function(b) { this.parentNode.insertBefore(b, this) }); if (arguments.length) { var b = e.clean(arguments); return this.pushStack(e.merge(b, this), "before", this.selector) } },
        after: function() { if (!v(this[0])) return this.domManip(arguments, !1, function(b) { this.parentNode.insertBefore(b, this.nextSibling) }); if (arguments.length) { var b = e.clean(arguments); return this.pushStack(e.merge(this, b), "after", this.selector) } },
        remove: function(b, c) {
            for (var d, j = 0; null != (d = this[j]); j++)
                if (!b || e.filter(b, [d]).length) !c && 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), e.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && e.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) { return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() { return e.clone(this, b, c) }) },
        html: function(b) {
            return e.access(this, function(b) {
                var d = this[0] || {},
                    j = 0,
                    f = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
                if ("string" == typeof b && !qd.test(b) && (e.support.htmlSerialize || !rb.test(b)) && (e.support.leadingWhitespace || !qb.test(b)) && !V[(fc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ec, "<$1></$2>");
                    try {
                        for (; j < f; j++) d = this[j] || {}, 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (u) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return v(this[0]) ? this.length ? this.pushStack(e(e.isFunction(b) ? b() : b), "replaceWith", b) : this : e.isFunction(b) ? this.each(function(c) {
                var d = e(this),
                    j = d.html();
                d.replaceWith(b.call(this, c, j))
            }) : ("string" != typeof b && (b = e(b).detach()), this.each(function() {
                var c = this.nextSibling,
                    d = this.parentNode;
                e(this).remove();
                c ? e(c).before(b) : e(d).append(b)
            }))
        },
        detach: function(b) { return this.remove(b, !0) },
        domManip: function(b, d, j) {
            b = [].concat.apply([], b);
            var f, g, n, r = 0,
                q = b[0],
                p = [],
                m = this.length;
            if (!e.support.checkClone && 1 < m && "string" == typeof q && gc.test(q)) return this.each(function() { e(this).domManip(b, d, j) });
            if (e.isFunction(q)) return this.each(function(f) {
                var g = e(this);
                b[0] = q.call(this, f, d ? g.html() : c);
                g.domManip(b, d, j)
            });
            if (this[0]) {
                f = e.buildFragment(b, this, p);
                n = f.fragment;
                g = n.firstChild;
                1 === n.childNodes.length && (n = g);
                if (g) { d = d && e.nodeName(g, "tr"); for (f = f.cacheable || m - 1; r < m; r++) j.call(d && e.nodeName(this[r], "table") ? this[r].getElementsByTagName("tbody")[0] || this[r].appendChild(this[r].ownerDocument.createElement("tbody")) : this[r], r === f ? n : e.clone(n, !0, !0)) }
                n = g = null;
                p.length && e.each(p, function(b, c) {
                    c.src ? e.ajax ? e.ajax({ url: c.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : e.error("no ajax") : e.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td, ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    e.buildFragment = function(b, d, j) { var f, g, n, r = b[0]; return d = d || D, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof r && 512 > r.length && d === D && "<" === r.charAt(0) && !rd.test(r) && (e.support.checkClone || !gc.test(r)) && (e.support.html5Clone || !rb.test(r)) && (g = !0, f = e.fragments[r], n = f !== c), f || (f = d.createDocumentFragment(), e.clean(b, d, f, j), g && (e.fragments[r] = n && f)), { fragment: f, cacheable: g } };
    e.fragments = {};
    e.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(b, c) {
        e.fn[b] = function(d) {
            var j, f = 0,
                g = [];
            d = e(d);
            var n = d.length;
            j = 1 === this.length && this[0].parentNode;
            if ((null == j || j && 11 === j.nodeType && 1 === j.childNodes.length) && 1 === n) return d[c](this[0]), this;
            for (; f < n; f++) j = (0 < f ? this.clone(!0) : this).get(), e(d[f])[c](j), g = g.concat(j);
            return this.pushStack(g, b, d.selector)
        }
    });
    e.extend({
        clone: function(b, c, d) {
            var f, g, q, r;
            e.support.html5Clone || e.isXMLDoc(b) || !rb.test("<" + b.nodeName + ">") ? r = b.cloneNode(!0) : (sb.innerHTML = b.outerHTML, sb.removeChild(r = sb.firstChild));
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !e.isXMLDoc(b)) {
                j(b, r);
                f = n(b);
                g = n(r);
                for (q = 0; f[q]; ++q) g[q] && j(f[q], g[q])
            }
            if (c && (z(b, r), d)) {
                f = n(b);
                g = n(r);
                for (q = 0; f[q]; ++q) z(f[q], g[q])
            }
            return r
        },
        clean: function(b, c, d, j) {
            var f, g, n, p, m, y, x, z = c === D && hc,
                v = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = D;
            for (f = 0; null != (n = b[f]); f++)
                if ("number" == typeof n && (n += ""), n) {
                    if ("string" == typeof n)
                        if (pd.test(n)) {
                            z = z || s(c);
                            y = c.createElement("div");
                            z.appendChild(y);
                            n = n.replace(ec, "<$1></$2>");
                            g = (fc.exec(n) || ["", ""])[1].toLowerCase();
                            p = V[g] || V._default;
                            m = p[0];
                            for (y.innerHTML = p[1] + n + p[2]; m--;) y = y.lastChild;
                            if (!e.support.tbody) {
                                m = od.test(n);
                                p = "table" === g && !m ? y.firstChild && y.firstChild.childNodes : "<table>" === p[1] && !m ? y.childNodes : [];
                                for (g = p.length - 1; 0 <= g; --g) e.nodeName(p[g], "tbody") && !p[g].childNodes.length && p[g].parentNode.removeChild(p[g])
                            }!e.support.leadingWhitespace && qb.test(n) && y.insertBefore(c.createTextNode(qb.exec(n)[0]), y.firstChild);
                            n = y.childNodes;
                            y.parentNode.removeChild(y)
                        } else n = c.createTextNode(n);
                    n.nodeType ? v.push(n) : e.merge(v, n)
                }
            y && (n = y = z = null);
            if (!e.support.appendChecked)
                for (f = 0; null != (n = v[f]); f++) e.nodeName(n, "input") ? q(n) : "undefined" != typeof n.getElementsByTagName && e.grep(n.getElementsByTagName("input"), q);
            if (d) {
                b = function(b) { if (!b.type || sd.test(b.type)) return j ? j.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b) };
                for (f = 0; null != (n = v[f]); f++)
                    if (!e.nodeName(n, "script") || !b(n)) d.appendChild(n), "undefined" != typeof n.getElementsByTagName && (x = e.grep(e.merge([], n.getElementsByTagName("script")), b), v.splice.apply(v, [f + 1, 0].concat(x)), f += x.length)
            }
            return v
        },
        cleanData: function(b, c) {
            for (var d, j, f, g, n = 0, q = e.expando, p = e.cache, m = e.support.deleteExpando, y = e.event.special; null != (f = b[n]); n++)
                if (c || e.acceptData(f))
                    if (d = (j = f[q]) && p[j]) {
                        if (d.events)
                            for (g in d.events) y[g] ? e.event.remove(f, g) : e.removeEvent(f, g, d.handle);
                        p[j] && (delete p[j], m ? delete f[q] : f.removeAttribute ? f.removeAttribute(q) : f[q] = null, e.deletedIds.push(j))
                    }
        }
    });
    var Va, ea;
    e.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return { browser: b[1] || "", version: b[2] || "0" }
    };
    Va = e.uaMatch(zc.userAgent);
    ea = {};
    Va.browser && (ea[Va.browser] = !0, ea.version = Va.version);
    ea.chrome ? ea.webkit = !0 : ea.webkit && (ea.safari = !0);
    e.browser = ea;
    e.sub = function() {
        function b(c, d) { return new b.fn.init(c, d) }
        e.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, j) { return j && j instanceof e && !(j instanceof b) && (j = b(j)), e.fn.init.call(this, d, j, c) };
        b.fn.init.prototype = b.fn;
        var c = b(D);
        return b
    };
    var R, ma, na, tb = /alpha\([^)]*\)/i,
        ud = /opacity=([^)]*)/,
        vd = /^(top|right|bottom|left)$/,
        wd = /^(none|table(?!-c[ea]).+)/,
        ic = /^margin/,
        vc = RegExp("^(" + Fa + ")(.*)$", "i"),
        za = RegExp("^(" + Fa + ")(?!px)[a-z%]+$", "i"),
        xd = RegExp("^([-+])=(" + Fa + ")", "i"),
        Ya = {},
        yd = { position: "absolute", visibility: "hidden", display: "block" },
        jc = { letterSpacing: 0, fontWeight: 400 },
        fa = ["Top", "Right", "Bottom", "Left"],
        yb = ["Webkit", "O", "Moz", "ms"],
        zd = e.fn.toggle;
    e.fn.extend({
        css: function(b, d) { return e.access(this, function(b, d, j) { return j !== c ? e.style(b, d, j) : e.css(b, d) }, b, d, 1 < arguments.length) },
        show: function() { return I(this, !0) },
        hide: function() { return I(this) },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return e.isFunction(b) && e.isFunction(c) ? zd.apply(this, arguments) : this.each(function() {
                (d ? b : G(this)) ? e(this).show(): e(this).hide()
            })
        }
    });
    e.extend({
        cssHooks: { opacity: { get: function(b, c) { if (c) { var d = R(b, "opacity"); return "" === d ? "1" : d } } } },
        cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": e.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(b, d, j, f) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var g, n, q, p = e.camelCase(d),
                    m = b.style;
                d = e.cssProps[p] || (e.cssProps[p] = x(m, p));
                q = e.cssHooks[d] || e.cssHooks[p];
                if (j === c) return q && "get" in q && (g = q.get(b, !1, f)) !== c ? g : m[d];
                n = typeof j;
                "string" === n && (g = xd.exec(j)) && (j = (g[1] + 1) * g[2] + parseFloat(e.css(b, d)), n = "number");
                if (!(null == j || "number" === n && isNaN(j)))
                    if ("number" === n && !e.cssNumber[p] && (j += "px"), !q || !("set" in q) || (j = q.set(b, j, f)) !== c) try { m[d] = j } catch (y) {}
            }
        },
        css: function(b, d, j, f) { var g, n, q, p = e.camelCase(d); return d = e.cssProps[p] || (e.cssProps[p] = x(b.style, p)), q = e.cssHooks[d] || e.cssHooks[p], q && "get" in q && (g = q.get(b, !0, f)), g === c && (g = R(b, d)), "normal" === g && d in jc && (g = jc[d]), j || f !== c ? (n = parseFloat(g), j || e.isNumeric(n) ? n || 0 : g) : g },
        swap: function(b, c, d) {
            var e, j = {};
            for (e in c) j[e] = b.style[e], b.style[e] = c[e];
            d = d.call(b);
            for (e in c) b.style[e] = j[e];
            return d
        }
    });
    b.getComputedStyle ? R = function(c, d) {
        var j, f, g, n, q = b.getComputedStyle(c, null),
            p = c.style;
        return q && (j = q[d], "" === j && !e.contains(c.ownerDocument, c) && (j = e.style(c, d)), za.test(j) && ic.test(d) && (f = p.width, g = p.minWidth, n = p.maxWidth, p.minWidth = p.maxWidth = p.width = j, j = q.width, p.width = f, p.minWidth = g, p.maxWidth = n)), j
    } : D.documentElement.currentStyle && (R = function(b, c) {
        var d, e, j = b.currentStyle && b.currentStyle[c],
            f = b.style;
        return null == j && f && f[c] && (j = f[c]), za.test(j) && !vd.test(c) && (d = f.left, e = b.runtimeStyle && b.runtimeStyle.left, e && (b.runtimeStyle.left = b.currentStyle.left), f.left = "fontSize" === c ? "1em" : j, j = f.pixelLeft + "px", f.left = d, e && (b.runtimeStyle.left = e)), "" === j ? "auto" : j
    });
    e.each(["height", "width"], function(b, c) { e.cssHooks[c] = { get: function(b, d, j) { if (d) return 0 === b.offsetWidth && wd.test(R(b, "display")) ? e.swap(b, yd, function() { return N(b, c, j) }) : N(b, c, j) }, set: function(b, d, j) { return F(b, d, j ? E(b, c, j, e.support.boxSizing && "border-box" === e.css(b, "boxSizing")) : 0) } } });
    e.support.opacity || (e.cssHooks.opacity = {
        get: function(b, c) { return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : "" },
        set: function(b, c) {
            var d = b.style,
                j = b.currentStyle,
                f = e.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                g = j && j.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === e.trim(g.replace(tb, "")) && d.removeAttribute && (d.removeAttribute("filter"), j && !j.filter))) d.filter = tb.test(g) ? g.replace(tb, f) : g + " " + f
        }
    });
    e(function() { e.support.reliableMarginRight || (e.cssHooks.marginRight = { get: function(b, c) { return e.swap(b, { display: "inline-block" }, function() { if (c) return R(b, "marginRight") }) } });!e.support.pixelPosition && e.fn.position && e.each(["top", "left"], function(b, c) { e.cssHooks[c] = { get: function(b, d) { if (d) { var j = R(b, c); return za.test(j) ? e(b).position()[c] + "px" : j } } } }) });
    e.expr && e.expr.filters && (e.expr.filters.hidden = function(b) { return 0 === b.offsetWidth && 0 === b.offsetHeight || !e.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || R(b, "display")) }, e.expr.filters.visible = function(b) { return !e.expr.filters.hidden(b) });
    e.each({ margin: "", padding: "", border: "Width" }, function(b, c) {
        e.cssHooks[b + c] = {
            expand: function(d) {
                var e = "string" == typeof d ? d.split(" ") : [d],
                    j = {};
                for (d = 0; 4 > d; d++) j[b + fa[d] + c] = e[d] || e[d - 2] || e[0];
                return j
            }
        };
        ic.test(b) || (e.cssHooks[b + c].set = F)
    });
    var Ad = /%20/g,
        wc = /\[\]$/,
        kc = /\r?\n/g,
        Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Cd = /^(?:select|textarea)/i;
    e.fn.extend({ serialize: function() { return e.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { return this.elements ? e.makeArray(this.elements) : this }).filter(function() { return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type)) }).map(function(b, c) { var d = e(this).val(); return null == d ? null : e.isArray(d) ? e.map(d, function(b) { return { name: c.name, value: b.replace(kc, "\r\n") } }) : { name: c.name, value: d.replace(kc, "\r\n") } }).get() } });
    e.param = function(b, d) {
        var j, f = [],
            g = function(b, c) {
                c = e.isFunction(c) ? c() : null == c ? "" : c;
                f[f.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = e.ajaxSettings && e.ajaxSettings.traditional);
        if (e.isArray(b) || b.jquery && !e.isPlainObject(b)) e.each(b, function() { g(this.name, this.value) });
        else
            for (j in b) Q(j, b[j], d, g);
        return f.join("&").replace(Ad, "+")
    };
    var ra, la, Dd = /#.*$/,
        Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Fd = /^(?:GET|HEAD)$/,
        Gd = /^\/\//,
        lc = /\?/,
        Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Id = /([?&])_=[^&]*/,
        mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        nc = e.fn.load,
        Za = {},
        oc = {},
        pc = ["*/"] + ["*"];
    try { la = yc.href } catch (Rd) { la = D.createElement("a"), la.href = "", la = la.href }
    ra = mc.exec(la.toLowerCase()) || [];
    e.fn.load = function(b, d, j) {
        if ("string" != typeof b && nc) return nc.apply(this, arguments);
        if (!this.length) return this;
        var f, g, n, q = this,
            p = b.indexOf(" ");
        return 0 <= p && (f = b.slice(p, b.length), b = b.slice(0, p)), e.isFunction(d) ? (j = d, d = c) : d && "object" == typeof d && (g = "POST"), e.ajax({ url: b, type: g, dataType: "html", data: d, complete: function(b, c) { j && q.each(j, n || [b.responseText, c, b]) } }).done(function(b) {
            n = arguments;
            q.html(f ? e("<div>").append(b.replace(Hd, "")).find(f) : b)
        }), this
    };
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) { e.fn[c] = function(b) { return this.on(c, b) } });
    e.each(["get", "post"], function(b, d) { e[d] = function(b, j, f, g) { return e.isFunction(j) && (g = g || f, f = j, j = c), e.ajax({ type: d, url: b, data: j, success: f, dataType: g }) } });
    e.extend({
        getScript: function(b, d) { return e.get(b, c, d, "script") },
        getJSON: function(b, c, d) { return e.get(b, c, d, "json") },
        ajaxSetup: function(b, c) { return c ? ta(b, e.ajaxSettings) : (c = b, b = e.ajaxSettings), ta(b, c), b },
        ajaxSettings: { url: la, isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(ra[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": pc }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": b.String, "text html": !0, "text json": e.parseJSON, "text xml": e.parseXML }, flatOptions: { context: !0, url: !0 } },
        ajaxPrefilter: Aa(Za),
        ajaxTransport: Aa(oc),
        ajax: function(b, d) {
            function j(b, d, l, n) {
                var u, m, s, B, C, E = d;
                if (2 !== H) {
                    H = 2;
                    p && clearTimeout(p);
                    q = c;
                    g = n || "";
                    K.readyState = 0 < b ? 4 : 0;
                    if (l) {
                        B = x;
                        n = K;
                        var F, S, ba, N, L = B.contents,
                            J = B.dataTypes,
                            Q = B.responseFields;
                        for (S in Q) S in l && (n[Q[S]] = l[S]);
                        for (;
                            "*" === J[0];) J.shift(), F === c && (F = B.mimeType || n.getResponseHeader("content-type"));
                        if (F)
                            for (S in L)
                                if (L[S] && L[S].test(F)) { J.unshift(S); break }
                        if (J[0] in l) ba = J[0];
                        else {
                            for (S in l) {
                                if (!J[0] || B.converters[S + " " + J[0]]) { ba = S; break }
                                N || (N = S)
                            }
                            ba = ba || N
                        }
                        B = l = ba ? (ba !== J[0] && J.unshift(ba), l[ba]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (x.ifModified && (C = K.getResponseHeader("Last-Modified"), C && (e.lastModified[f] = C), C = K.getResponseHeader("Etag"), C && (e.etag[f] = C)), 304 === b) E = "notmodified", u = !0;
                        else {
                            var M;
                            a: {
                                u = x;m = B;
                                var O, E = u.dataTypes.slice();l = E[0];F = {};S = 0;u.dataFilter && (m = u.dataFilter(m, u.dataType));
                                if (E[1])
                                    for (M in u.converters) F[M.toLowerCase()] = u.converters[M];
                                for (; s = E[++S];)
                                    if ("*" !== s) {
                                        if ("*" !== l && l !== s) {
                                            M = F[l + " " + s] || F["* " + s];
                                            if (!M)
                                                for (O in F)
                                                    if (C = O.split(" "), C[1] === s && (M = F[l + " " + C[0]] || F["* " + C[0]])) {!0 === M ? M = F[O] : !0 !== F[O] && (s = C[0], E.splice(S--, 0, s)); break }
                                            if (!0 !== M)
                                                if (M && u["throws"]) m = M(m);
                                                else try { m = M(m) } catch (P) { M = { state: "parsererror", error: M ? P : "No conversion from " + l + " to " + s }; break a }
                                        }
                                        l = s
                                    }
                                M = { state: "success", data: m }
                            }
                            u = M;
                            E = u.state;
                            m = u.data;
                            s = u.error;
                            u = !s
                        }
                    else if (s = E, !E || b) E = "error", 0 > b && (b = 0);
                    K.status = b;
                    K.statusText = (d || E) + "";
                    u ? G.resolveWith(z, [m, E, K]) : G.rejectWith(z, [K, E, s]);
                    K.statusCode(I);
                    I = c;
                    y && v.trigger("ajax" + (u ? "Success" : "Error"), [K, x, u ? m : s]);
                    D.fireWith(z, [K, E]);
                    y && (v.trigger("ajaxComplete", [K, x]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var f, g, n, q, p, m, y, s, x = e.ajaxSetup({}, d),
                z = x.context || x,
                v = z !== x && (z.nodeType || z instanceof e) ? e(z) : e.event,
                G = e.Deferred(),
                D = e.Callbacks("once memory"),
                I = x.statusCode || {},
                E = {},
                F = {},
                H = 0,
                N = "canceled",
                K = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!H) {
                            var d = b.toLowerCase();
                            b = F[d] = F[d] || b;
                            E[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() { return 2 === H ? g : null },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === H) {
                            if (!n)
                                for (n = {}; d = Ed.exec(g);) n[d[1].toLowerCase()] = d[2];
                            d = n[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) { return H || (x.mimeType = b), this },
                    abort: function(b) { return b = b || N, q && q.abort(b), j(0, b), this }
                };
            G.promise(K);
            K.success = K.done;
            K.error = K.fail;
            K.complete = D.add;
            K.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > H)
                        for (c in b) I[c] = [I[c], b[c]];
                    else c = b[K.status], K.always(c)
                }
                return this
            };
            x.url = ((b || x.url) + "").replace(Dd, "").replace(Gd, ra[1] + "//");
            x.dataTypes = e.trim(x.dataType || "*").toLowerCase().split(ga);
            null == x.crossDomain && (m = mc.exec(x.url.toLowerCase()) || !1, x.crossDomain = m && m.join(":") + (m[3] ? "" : "http:" === m[1] ? 80 : 443) !== ra.join(":") + (ra[3] ? "" : "http:" === ra[1] ? 80 : 443));
            x.data && x.processData && "string" != typeof x.data && (x.data = e.param(x.data, x.traditional));
            oa(Za, x, d, K);
            if (2 === H) return K;
            y = x.global;
            x.type = x.type.toUpperCase();
            x.hasContent = !Fd.test(x.type);
            y && 0 === e.active++ && e.event.trigger("ajaxStart");
            if (!x.hasContent && (x.data && (x.url += (lc.test(x.url) ? "&" : "?") + x.data, delete x.data), f = x.url, !1 === x.cache)) {
                m = e.now();
                var L = x.url.replace(Id, "$1_=" + m);
                x.url = L + (L === x.url ? (lc.test(x.url) ? "&" : "?") + "_=" + m : "")
            }(x.data && x.hasContent && !1 !== x.contentType || d.contentType) && K.setRequestHeader("Content-Type", x.contentType);
            x.ifModified && (f = f || x.url, e.lastModified[f] && K.setRequestHeader("If-Modified-Since", e.lastModified[f]), e.etag[f] && K.setRequestHeader("If-None-Match", e.etag[f]));
            K.setRequestHeader("Accept", x.dataTypes[0] && x.accepts[x.dataTypes[0]] ? x.accepts[x.dataTypes[0]] + ("*" !== x.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : x.accepts["*"]);
            for (s in x.headers) K.setRequestHeader(s, x.headers[s]);
            if (!x.beforeSend || !1 !== x.beforeSend.call(z, K, x) && 2 !== H) {
                N = "abort";
                for (s in { success: 1, error: 1, complete: 1 }) K[s](x[s]);
                if (q = oa(oc, x, d, K)) {
                    K.readyState = 1;
                    y && v.trigger("ajaxSend", [K, x]);
                    x.async && 0 < x.timeout && (p = setTimeout(function() { K.abort("timeout") }, x.timeout));
                    try { H = 1, q.send(E, j) } catch (J) {
                        if (2 > H) j(-1, J);
                        else throw J;
                    }
                } else j(-1, "No Transport");
                return K
            }
            return K.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qc = [],
        Jd = /\?/,
        Wa = /(=)\?(?=&|$)|\?\?/,
        Kd = e.now();
    e.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var b = qc.pop() || e.expando + "_" + Kd++; return this[b] = !0, b } });
    e.ajaxPrefilter("json jsonp", function(d, j, f) {
        var g, n, q, p = d.data,
            m = d.url,
            x = !1 !== d.jsonp,
            s = x && Wa.test(m),
            y = x && !s && "string" == typeof p && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Wa.test(p);
        if ("jsonp" === d.dataTypes[0] || s || y) return g = d.jsonpCallback = e.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, n = b[g], s ? d.url = m.replace(Wa, "$1" + g) : y ? d.data = p.replace(Wa, "$1" + g) : x && (d.url += (Jd.test(m) ? "&" : "?") + d.jsonp + "=" + g), d.converters["script json"] = function() { return q || e.error(g + " was not called"), q[0] }, d.dataTypes[0] = "json", b[g] = function() { q = arguments }, f.always(function() {
            b[g] = n;
            d[g] && (d.jsonpCallback = j.jsonpCallback, qc.push(g));
            q && e.isFunction(n) && n(q[0]);
            q = n = c
        }), "script"
    });
    e.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function(b) { return e.globalEval(b), b } } });
    e.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    e.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, e = D.head || D.getElementsByTagName("head")[0] || D.documentElement;
            return {
                send: function(j, f) {
                    d = D.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, j) { if (j || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = c, j || f(200, "success") };
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() { d && d.onload(0, 1) }
            }
        }
    });
    var sa, ub = b.ActiveXObject ? function() { for (var b in sa) sa[b](0, 1) } : !1,
        Ld = 0;
    e.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && zb())) a: {
            try { c = new b.ActiveXObject("Microsoft.XMLHTTP"); break a } catch (d) {}
            c = void 0
        }
        return c
    } : zb;
    var vb = e.ajaxSettings.xhr();
    e.extend(e.support, { ajax: !!vb, cors: !!vb && "withCredentials" in vb });
    e.support.ajax && e.ajaxTransport(function(d) {
        if (!d.crossDomain || e.support.cors) {
            var j;
            return {
                send: function(f, g) {
                    var n, q, p = d.xhr();
                    d.username ? p.open(d.type, d.url, d.async, d.username, d.password) : p.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (q in d.xhrFields) p[q] = d.xhrFields[q];
                    d.mimeType && p.overrideMimeType && p.overrideMimeType(d.mimeType);
                    !d.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                    try { for (q in f) p.setRequestHeader(q, f[q]) } catch (m) {}
                    p.send(d.hasContent && d.data || null);
                    j = function(b, f) {
                        var q, m, x, s, y;
                        try {
                            if (j && (f || 4 === p.readyState))
                                if (j = c, n && (p.onreadystatechange = e.noop, ub && delete sa[n]), f) 4 !== p.readyState && p.abort();
                                else {
                                    q = p.status;
                                    x = p.getAllResponseHeaders();
                                    s = {};
                                    (y = p.responseXML) && y.documentElement && (s.xml = y);
                                    try { s.text = p.responseText } catch (B) {}
                                    try { m = p.statusText } catch (z) { m = "" }!q && d.isLocal && !d.crossDomain ? q = s.text ? 200 : 404 : 1223 === q && (q = 204)
                                }
                        } catch (v) { f || g(-1, v) }
                        s && g(q, m, s, x)
                    };
                    d.async ? 4 === p.readyState ? setTimeout(j, 0) : (n = ++Ld, ub && (sa || (sa = {}, e(b).unload(ub)), sa[n] = j), p.onreadystatechange = j) : j()
                },
                abort: function() { j && j(0, 1) }
            }
        }
    });
    var Ba, Xa, Md = /^(?:toggle|show|hide)$/,
        Nd = RegExp("^(?:([-+])=|)(" + Fa + ")([a-z%]*)$", "i"),
        Od = /queueHooks$/,
        Ca = [function(b, c, d) {
            var j, f, g, n, q, p, m = this,
                x = b.style,
                s = {},
                y = [],
                z = b.nodeType && G(b);
            d.queue || (q = e._queueHooks(b, "fx"), null == q.unqueued && (q.unqueued = 0, p = q.empty.fire, q.empty.fire = function() { q.unqueued || p() }), q.unqueued++, m.always(function() {
                m.always(function() {
                    q.unqueued--;
                    e.queue(b, "fx").length || q.empty.fire()
                })
            }));
            1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [x.overflow, x.overflowX, x.overflowY], "inline" === e.css(b, "display") && "none" === e.css(b, "float") && (!e.support.inlineBlockNeedsLayout || "inline" === M(b.nodeName) ? x.display = "inline-block" : x.zoom = 1));
            d.overflow && (x.overflow = "hidden", e.support.shrinkWrapBlocks || m.done(function() {
                x.overflow = d.overflow[0];
                x.overflowX = d.overflow[1];
                x.overflowY = d.overflow[2]
            }));
            for (j in c) f = c[j], Md.exec(f) && (delete c[j], f !== (z ? "hide" : "show") && y.push(j));
            if (f = y.length) {
                g = e._data(b, "fxshow") || e._data(b, "fxshow", {});
                z ? e(b).show() : m.done(function() { e(b).hide() });
                m.done(function() {
                    var c;
                    e.removeData(b, "fxshow", !0);
                    for (c in s) e.style(b, c, s[c])
                });
                for (j = 0; j < f; j++) c = y[j], n = m.createTween(c, z ? g[c] : 0), s[c] = g[c] || e.style(b, c), c in g || (g[c] = n.start, z && (n.end = n.start, n.start = "width" === c || "height" === c ? 1 : 0))
            }
        }],
        ua = {
            "*": [function(b, c) {
                var d, j, f = this.createTween(b, c),
                    g = Nd.exec(c),
                    n = f.cur(),
                    q = +n || 0,
                    p = 1,
                    m = 20;
                if (g) {
                    d = +g[2];
                    j = g[3] || (e.cssNumber[b] ? "" : "px");
                    if ("px" !== j && q) {
                        q = e.css(f.elem, b, !0) || d || 1;
                        do p = p || ".5", q /= p, e.style(f.elem, b, q + j); while (p !== (p = f.cur() / n) && 1 !== p && --m)
                    }
                    f.unit = j;
                    f.start = q;
                    f.end = g[1] ? q + (g[1] + 1) * d : d
                }
                return f
            }]
        };
    e.Animation = e.extend(Bb, {
        tweener: function(b, c) {
            e.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, j = 0, f = b.length; j < f; j++) d = b[j], ua[d] = ua[d] || [], ua[d].unshift(c)
        },
        prefilter: function(b, c) { c ? Ca.unshift(b) : Ca.push(b) }
    });
    e.Tween = T;
    T.prototype = {
        constructor: T,
        init: function(b, c, d, j, f, g) {
            this.elem = b;
            this.prop = d;
            this.easing = f || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = j;
            this.unit = g || (e.cssNumber[d] ? "" : "px")
        },
        cur: function() { var b = T.propHooks[this.prop]; return b && b.get ? b.get(this) : T.propHooks._default.get(this) },
        run: function(b) { var c, d = T.propHooks[this.prop]; return this.options.duration ? this.pos = c = e.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : T.propHooks._default.set(this), this }
    };
    T.prototype.init.prototype = T.prototype;
    T.propHooks = { _default: { get: function(b) { var c; return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = e.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop] }, set: function(b) { e.fx.step[b.prop] ? e.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[e.cssProps[b.prop]] || e.cssHooks[b.prop]) ? e.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now } } };
    T.propHooks.scrollTop = T.propHooks.scrollLeft = { set: function(b) { b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now) } };
    e.each(["toggle", "show", "hide"], function(b, c) {
        var d = e.fn[c];
        e.fn[c] = function(j, f, g) { return null == j || "boolean" == typeof j || !b && e.isFunction(j) && e.isFunction(f) ? d.apply(this, arguments) : this.animate(Da(c, !0), j, f, g) }
    });
    e.fn.extend({
        fadeTo: function(b, c, d, e) { return this.filter(G).css("opacity", 0).show().end().animate({ opacity: c }, b, d, e) },
        animate: function(b, c, d, j) {
            var f = e.isEmptyObject(b),
                g = e.speed(c, d, j);
            c = function() {
                var c = Bb(this, e.extend({}, b), g);
                f && c.stop(!0)
            };
            return f || !1 === g.queue ? this.each(c) : this.queue(g.queue, c)
        },
        stop: function(b, d, j) {
            var f = function(b) {
                var c = b.stop;
                delete b.stop;
                c(j)
            };
            return "string" != typeof b && (j = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    g = e.timers,
                    n = e._data(this);
                if (d) n[d] && n[d].stop && f(n[d]);
                else
                    for (d in n) n[d] && n[d].stop && Od.test(d) && f(n[d]);
                for (d = g.length; d--;) g[d].elem === this && (null == b || g[d].queue === b) && (g[d].anim.stop(j), c = !1, g.splice(d, 1));
                (c || !j) && e.dequeue(this, b)
            })
        }
    });
    e.each({ slideDown: Da("show"), slideUp: Da("hide"), slideToggle: Da("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(b, c) { e.fn[b] = function(b, d, e) { return this.animate(c, b, d, e) } });
    e.speed = function(b, c, d) {
        var j = b && "object" == typeof b ? e.extend({}, b) : { complete: d || !d && c || e.isFunction(b) && b, duration: b, easing: d && c || c && !e.isFunction(c) && c };
        j.duration = e.fx.off ? 0 : "number" == typeof j.duration ? j.duration : j.duration in e.fx.speeds ? e.fx.speeds[j.duration] : e.fx.speeds._default;
        if (null == j.queue || !0 === j.queue) j.queue = "fx";
        return j.old = j.complete, j.complete = function() {
            e.isFunction(j.old) && j.old.call(this);
            j.queue && e.dequeue(this, j.queue)
        }, j
    };
    e.easing = { linear: function(b) { return b }, swing: function(b) { return 0.5 - Math.cos(b * Math.PI) / 2 } };
    e.timers = [];
    e.fx = T.prototype.init;
    e.fx.tick = function() {
        for (var b, c = e.timers,
                d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || e.fx.stop()
    };
    e.fx.timer = function(b) { b() && e.timers.push(b) && !Xa && (Xa = setInterval(e.fx.tick, e.fx.interval)) };
    e.fx.interval = 13;
    e.fx.stop = function() {
        clearInterval(Xa);
        Xa = null
    };
    e.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    e.fx.step = {};
    e.expr && e.expr.filters && (e.expr.filters.animated = function(b) { return e.grep(e.timers, function(c) { return b === c.elem }).length });
    var rc = /^(?:body|html)$/i;
    e.fn.offset = function(b) {
        if (arguments.length) return b === c ? this : this.each(function(c) { e.offset.setOffset(this, b, c) });
        var d, j, f, g, n, q, p, m = { top: 0, left: 0 },
            x = this[0],
            s = x && x.ownerDocument;
        if (s) return (j = s.body) === x ? e.offset.bodyOffset(x) : (d = s.documentElement, e.contains(d, x) ? ("undefined" != typeof x.getBoundingClientRect && (m = x.getBoundingClientRect()), f = Cb(s), g = d.clientTop || j.clientTop || 0, n = d.clientLeft || j.clientLeft || 0, q = f.pageYOffset || d.scrollTop, p = f.pageXOffset || d.scrollLeft, { top: m.top + q - g, left: m.left + p - n }) : m)
    };
    e.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return e.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(e.css(b, "marginTop")) || 0, d += parseFloat(e.css(b, "marginLeft")) || 0), { top: c, left: d }
        },
        setOffset: function(b, c, d) {
            var j = e.css(b, "position");
            "static" === j && (b.style.position = "relative");
            var f = e(b),
                g = f.offset(),
                n = e.css(b, "top"),
                q = e.css(b, "left"),
                p = {},
                m = {},
                x, s;
            ("absolute" === j || "fixed" === j) && -1 < e.inArray("auto", [n, q]) ? (m = f.position(), x = m.top, s = m.left) : (x = parseFloat(n) || 0, s = parseFloat(q) || 0);
            e.isFunction(c) && (c = c.call(b, d, g));
            null != c.top && (p.top = c.top - g.top + x);
            null != c.left && (p.left = c.left - g.left + s);
            "using" in c ? c.using.call(b, p) : f.css(p)
        }
    };
    e.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    j = rc.test(c[0].nodeName) ? { top: 0, left: 0 } : c.offset();
                return d.top -= parseFloat(e.css(b, "marginTop")) || 0, d.left -= parseFloat(e.css(b, "marginLeft")) || 0, j.top += parseFloat(e.css(c[0], "borderTopWidth")) || 0, j.left += parseFloat(e.css(c[0], "borderLeftWidth")) || 0, { top: d.top - j.top, left: d.left - j.left }
            }
        },
        offsetParent: function() { return this.map(function() { for (var b = this.offsetParent || D.body; b && !rc.test(b.nodeName) && "static" === e.css(b, "position");) b = b.offsetParent; return b || D.body }) }
    });
    e.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(b, d) {
        var j = /Y/.test(d);
        e.fn[b] = function(f) {
            return e.access(this, function(b, f, g) {
                var n = Cb(b);
                if (g === c) return n ? d in n ? n[d] : n.document.documentElement[f] : b[f];
                n ? n.scrollTo(j ? e(n).scrollLeft() : g, j ? g : e(n).scrollTop()) : b[f] = g
            }, b, f, arguments.length, null)
        }
    });
    e.each({ Height: "height", Width: "width" }, function(b, d) {
        e.each({
            padding: "inner" +
                b,
            content: d,
            "": "outer" + b
        }, function(j, f) {
            e.fn[f] = function(f, g) {
                var n = arguments.length && (j || "boolean" != typeof f),
                    q = j || (!0 === f || !0 === g ? "margin" : "border");
                return e.access(this, function(d, j, f) { var g; return e.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (g = d.documentElement, Math.max(d.body["scroll" + b], g["scroll" + b], d.body["offset" + b], g["offset" + b], g["client" + b])) : f === c ? e.css(d, j, f, q) : e.style(d, j, f, q) }, d, n ? f : c, n, null)
            }
        })
    });
    b.jQuery = b.$ = e;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() { return e })
})(window);
var portraitMode = !1,
    mobilePortraitWidth = 480,
    mobilePortraitHeight = 640,
    mobileLandscapeWidth = 640,
    mobileLandscapeHeight = 480,
    mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
    mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight,
    desktopWidth = 640,
    desktopHeight = 480,
    w, h, multiplier, destW, destH, dynamicClickableEntityDivs = {},
    coreDivsToResize = ["game", "play", "orientate"],
    advancedDivsToResize = {
        MobileAdInGamePreroll: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height +
                20
        },
        MobileAdInGameEnd: { "box-width": _SETTINGS.Ad.Mobile.End.Width + 2, "box-height": _SETTINGS.Ad.Mobile.End.Height + 20 },
        MobileAdInGamePreroll2: { "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2, "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20 },
        MobileAdInGameEnd2: { "box-width": _SETTINGS.Ad.Mobile.End.Width + 2, "box-height": _SETTINGS.Ad.Mobile.End.Height + 20 },
        MobileAdInGamePreroll3: { "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2, "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20 },
        MobileAdInGameEnd3: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width +
                2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        }
    };

function adjustLayers(b) {
    for (var c = 0; c < coreDivsToResize.length; c++) ig.ua.mobile ? ($("#" + coreDivsToResize[c]).width(w), $("#" + coreDivsToResize[c]).height(h)) : ($("#" + coreDivsToResize[c]).width(destW), $("#" + coreDivsToResize[c]).height(destH), $("#" + coreDivsToResize[c]).css("left", b ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize) try {
        $("#" + key).width(w), $("#" + key).height(h), $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2), $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) /
            2)
    } catch (d) { console.log(d) }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}
var minHeight = 99999999;

function sizeHandler() {
    if ($("#game")) {
        w = window.innerWidth;
        h = window.innerHeight;
        ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier);
        widthRatio = window.innerWidth / mobileWidth;
        heightRatio = window.innerHeight / mobileHeight;
        adjustLayers();
        window.scrollTo(0, 1);
        for (var b = navigator.userAgent.split(" "), c = 0; c < b.length; c++) b[c].substr(0, 8);
        navigator.userAgent.indexOf("wv");
        navigator.userAgent.indexOf("SamsungBrowser")
    }
}

function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
    sizeHandler()
}

function fixSamsungHandler() { ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) { b.preventDefault(); return !1 }, !1), document.addEventListener("touchmove", function(b) { b.preventDefault(); return !1 }, !1), document.addEventListener("touchend", function(b) { b.preventDefault(); return !1 }, !1)) }
window.addEventListener("resize", function() { orientationHandler() }, !1);
window.addEventListener("orientationchange", function() { orientationHandler() }, !1);
document.ontouchmove = function(b) {
    window.scrollTo(0, 1);
    b.preventDefault()
};

function getInternetExplorerVersion() { var b = -1; "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1)); return b }
var ie = getInternetExplorerVersion();

function getQueryVariable(b) { for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) { var f = c[d].split("="); if (decodeURIComponent(f[0]) == b) return decodeURIComponent(f[1]) } }
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var f in b) this.settings[f] = b[f];
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
        var b = this,
            c = this.settings,
            d = {},
            f;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var g = function(c) { b.__addToManager(c) };
                this.context.addEventListener("canplaythrough", g, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", g, !0);
                    g("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (f in this.HTML5API) this[f] = this.HTML5API[f];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() { null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0) }), window.addEventListener("pageshow", function() { b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused) }))
        } else if (!0 === d.flashaudio) {
            for (f in this.FLASHAPI) this[f] = this.FLASHAPI[f];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            f, g = { flashvars: b.join("&"), quality: "high", bgcolor: "#000000", wmode: "transparent", allowscriptaccess: "always", allowfullscreen: "true" };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var m = document.createElement("object");
            m.id = "jukebox-flashstream-" + this.id;
            m.setAttribute("type", "application/x-shockwave-flash");
            m.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            m.setAttribute("width", "0");
            m.setAttribute("height", "0");
            g.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            g.flashvars = b.join("&amp;");
            for (f in g) b = document.createElement("param"), b.setAttribute("name", f), b.setAttribute("value", g[f]), m.appendChild(b);
            c.outerHTML = m.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c = document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            g.play = !1;
            g.loop = !1;
            g.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (f in g) c.setAttribute(f, g[f]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                f;
            if (void 0 !== d[b]) f = d[b].start;
            else if ("number" === typeof b) {
                f = b;
                for (var g in d)
                    if (f >= d[g].start && f <=
                        d[g].end) { b = g; break }
            }
            void 0 !== f && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(f))
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
    resume: function(b) {
        b = "number" === typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: { getVolume: function() { return this.context.volume || 1 }, setVolume: function(b) { this.context.volume = b; return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1 }, getCurrentTime: function() { return this.context.currentTime || 0 }, setCurrentTime: function(b) { try { return this.context.currentTime = b, !0 } catch (c) { return !1 } } },
    FLASHAPI: { getVolume: function() { return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1 }, setVolume: function(b) { return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1 }, getCurrentTime: function() { return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0 }, setCurrentTime: function(b) { return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1 } }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() { jukebox.Manager.loop() }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: { useFlash: !1, useGameLoop: !1 },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{ e: "3gp", m: ["audio/3gpp", "audio/amr"] }, { e: "aac", m: ["audio/aac", "audio/aacp"] }, { e: "amr", m: ["audio/amr", "audio/3gpp"] }, { e: "caf", m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"'] }, { e: "m4a", m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{") }, { e: "mp3", m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"] }, { e: "mpga", m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"] }, { e: "mp4", m: ["audio/mp4", "video/mp4"] }, { e: "ogg", m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"'] }, { e: "wav", m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"] }, { e: "webm", m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"] }], d, f, g = 0, m = c.length; g < m; g++)
                if (f = c[g].e, c[g].m.length && "object" === typeof c[g].m)
                    for (var v = 0, p = c[g].m.length; v < p; v++)
                        if (d = c[g].m[v], "" !== b.canPlayType(d)) { this.codecs[f] = d; break } else this.codecs[f] || (this.codecs[f] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try { new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0 } catch (y) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) { return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null },
    __getClone: function(b, c) {
        for (var d in this.__clones) { var f = this.__clones[d]; if (null === f.isPlaying && f.origin === b) return f }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var g in c) d[g] = c[g];
            d.autoplay = !1;
            g = new jukebox.Player(d, b);
            g.isClone = !0;
            g.wasReady = !1;
            return this.__clones[g.id] = g
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length && this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d], c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var f = b[c],
                g = f.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g]) return f
        }
        return null
    },
    add: function(b) { return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1 },
    remove: function(b) { return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1 },
    addToQueue: function(b, c) { return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({ pointer: b, origin: c }), !0) : !1 }
};
(function() {
    var b = {},
        c = null,
        d = !0,
        f = !1;
    if ("undefined" !== typeof AudioContext) c = new AudioContext;
    else if ("undefined" !== typeof webkitAudioContext) c = new webkitAudioContext;
    else if ("undefined" !== typeof Audio) { d = !1; try { new Audio } catch (g) { f = !0 } } else d = !1, f = !0;
    if (d) {
        var m = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        m.gain.value = 1;
        m.connect(c.destination)
    }
    var v = function() {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.noAudio = f;
        this._howls = []
    };
    v.prototype = {
        volume: function(b) {
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (m.gain.value = b);
                for (var c in this._howls)
                    if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                        for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? m.gain.value : this._volume
        },
        mute: function() { this._setMuted(!0); return this },
        unmute: function() { this._setMuted(!1); return this },
        _setMuted: function(b) {
            this._muted = b;
            d && (m.gain.value = b ? 0 : this._volume);
            for (var c in this._howls)
                if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                    for (var f = 0; f < this._howls[c]._audioNode.length; f++) this._howls[c]._audioNode[f].muted = b
        }
    };
    var p = new v,
        v = null;
    if (!f) var v = new Audio,
        y = { mp3: !!v.canPlayType("audio/mpeg;").replace(/^no$/, ""), opus: !!v.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""), ogg: !!v.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), wav: !!v.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), m4a: !!(v.canPlayType("audio/x-m4a;") || v.canPlayType("audio/aac;")).replace(/^no$/, ""), mp4: !!(v.canPlayType("audio/x-mp4;") || v.canPlayType("audio/aac;")).replace(/^no$/, ""), weba: !!v.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") };
    var s = function(b) {
        this._autoplay = b.autoplay || !1;
        this._buffer = b.buffer || !1;
        this._duration = b.duration || 0;
        this._format = b.format || null;
        this._loop = b.loop || !1;
        this._loaded = !1;
        this._sprite = b.sprite || {};
        this._src = b.src || "";
        this._pos3d = b.pos3d || [0, 0, -0.5];
        this._volume = void 0 !== b.volume ? b.volume : 1;
        this._urls = b.urls || [];
        this._rate = b.rate || 1;
        this._onload = [b.onload || function() {}];
        this._onloaderror = [b.onloaderror || function() {}];
        this._onend = [b.onend || function() {}];
        this._onpause = [b.onpause || function() {}];
        this._onplay = [b.onplay || function() {}];
        this._onendTimer = [];
        this._webAudio = d && !this._buffer;
        this._audioNode = [];
        this._webAudio && this._setupAudioNode();
        p._howls.push(this);
        this.load()
    };
    s.prototype = {
        load: function() {
            var d = this,
                g = null;
            if (!f) {
                for (var q = 0; q < d._urls.length; q++) {
                    var m, s;
                    if (d._format) m = d._format;
                    else if (s = d._urls[q].toLowerCase().split("?")[0], m = (m = s.match(/.+\.([^?]+)(\?|$)/)) && 2 <= m.length ? m : s.match(/data\:audio\/([^?]+);/)) m = m[1];
                    else { d.on("loaderror"); return }
                    if (y[m]) { g = d._urls[q]; break }
                }
                if (g) {
                    d._src = g;
                    if (d._webAudio) {
                        var v = g;
                        if (v in b) d._duration = b[v].duration, z(d);
                        else {
                            var F = new XMLHttpRequest;
                            F.open("GET", v, !0);
                            F.responseType = "arraybuffer";
                            F.onload = function() { c.decodeAudioData(F.response, function(c) { c && (b[v] = c, z(d, c)) }, function() { d.on("loaderror") }) };
                            F.onerror = function() { d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode, d.load()) };
                            try { F.send() } catch (E) { F.onerror() }
                        }
                    } else {
                        var N = new Audio;
                        d._audioNode.push(N);
                        N.src = g;
                        N._pos = 0;
                        N.preload = "auto";
                        N.volume = p._muted ? 0 : d._volume * p.volume();
                        b[g] = d;
                        var M = function() {
                            d._duration = Math.ceil(10 * N.duration) / 10;
                            0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = { _default: [0, 1E3 * d._duration] });
                            d._loaded || (d._loaded = !0, d.on("load"));
                            d._autoplay && d.play();
                            N.removeEventListener("canplaythrough", M, !1)
                        };
                        N.addEventListener("canplaythrough", M, !1);
                        N.load()
                    }
                    return d
                }
            }
            d.on("loaderror")
        },
        urls: function(b) { return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls },
        play: function(d, f) {
            var g = this;
            "function" === typeof d && (f = d);
            if (!d || "function" === typeof d) d = "_default";
            if (!g._loaded) return g.on("load", function() { g.play(d, f) }), g;
            if (!g._sprite[d]) return "function" === typeof f && f(), g;
            g._inactiveNode(function(m) {
                m._sprite = d;
                var s = 0 < m._pos ? m._pos : g._sprite[d][0] / 1E3,
                    y = g._sprite[d][1] / 1E3 - m._pos,
                    z = !(!g._loop && !g._sprite[d][2]),
                    v = "string" === typeof f ? f : Math.round(Date.now() * Math.random()) + "",
                    N, M = { id: v, sprite: d, loop: z };
                N = setTimeout(function() {
                    debugger;
                    !g._webAudio && z && g.stop(M.id, M.timer).play(d, M.id);
                    g._webAudio && !z && (g._nodeById(M.id).paused = !0, g._nodeById(M.id)._pos = 0);
                    !g._webAudio && !z && g.stop(M.id, M.timer);
                    g.on("end", v)
                }, 1E3 * y);
                g._onendTimer.push(N);
                M.timer = g._onendTimer[g._onendTimer.length - 1];
                if (g._webAudio) {
                    N = g._sprite[d][0] / 1E3;
                    var Q = g._sprite[d][1] / 1E3;
                    m.id = v;
                    m.paused = !1;
                    N = [z, N, Q];
                    Q = g._nodeById(v);
                    Q.bufferSource = c.createBufferSource();
                    Q.bufferSource.buffer = b[g._src];
                    Q.bufferSource.connect(Q.panner);
                    Q.bufferSource.loop = N[0];
                    N[0] && (Q.bufferSource.loopStart = N[1], Q.bufferSource.loopEnd = N[1] + N[2]);
                    Q.bufferSource.playbackRate.value = g._rate;
                    g._playStart = c.currentTime;
                    m.gain.value = g._volume;
                    "undefined" === typeof m.bufferSource.start ? m.bufferSource.noteGrainOn(0, s, y) : m.bufferSource.start(0, s, y)
                } else if (4 === m.readyState) m.id = v, m.currentTime = s, m.muted = p._muted, m.volume = g._volume * p.volume(), setTimeout(function() { m.play() }, 0);
                else {
                    g._clearEndTimer(N);
                    var Aa = d,
                        oa = f,
                        ta = function() {
                            g.play(Aa, oa);
                            m.removeEventListener("canplaythrough", ta, !1)
                        };
                    m.addEventListener("canplaythrough", ta, !1);
                    return g
                }
                g.on("play");
                "function" === typeof f && f(v);
                return g
            });
            return g
        },
        pause: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() { d.pause(b) }), d;
            d._clearEndTimer(c || 0);
            var f = b ? d._nodeById(b) : d._activeNode();
            if (f)
                if (f._pos = d.pos(null, b), d._webAudio) {
                    if (!f.bufferSource || f.paused) return d;
                    f.paused = !0;
                    "undefined" === typeof f.bufferSource.stop ? f.bufferSource.noteOff(0) : f.bufferSource.stop(0)
                } else f.pause();
            d.on("pause");
            return d
        },
        stop: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() { d.stop(b) }), d;
            d._clearEndTimer(c || 0);
            var f = b ? d._nodeById(b) : d._activeNode();
            if (f)
                if (f._pos = 0, d._webAudio) {
                    if (!f.bufferSource || f.paused) return d;
                    f.paused = !0;
                    "undefined" === typeof f.bufferSource.stop ? f.bufferSource.noteOff(0) : f.bufferSource.stop(0)
                } else f.pause(), f.currentTime = 0;
            return d
        },
        mute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() { c.mute(b) }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.volume = 0);
            return c
        },
        unmute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() { c.unmute(b) }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume : d.volume = c._volume);
            return c
        },
        volume: function(b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded) return d.on("play", function() { d.volume(b, c) }), d;
                var f = c ? d._nodeById(c) : d._activeNode();
                f && (d._webAudio ? f.gain.value = b : f.volume = b * p.volume());
                return d
            }
            return d._volume
        },
        loop: function(b) { return "boolean" === typeof b ? (this._loop = b, this) : this._loop },
        sprite: function(b) { return "object" === typeof b ? (this._sprite = b, this) : this._sprite },
        pos: function(b, d) {
            var f = this;
            if (!f._loaded) return f.on("load", function() { f.pos(b) }), "number" === typeof b ? f : f._pos || 0;
            b = parseFloat(b);
            var g = d ? f._nodeById(d) : f._activeNode();
            if (g) return 0 <= b ? (f.pause(d), g._pos = b, f.play(g._sprite, d), f) : f._webAudio ? g._pos + (c.currentTime - f._playStart) : g.currentTime;
            if (0 <= b) return f;
            for (g = 0; g < f._audioNode.length; g++)
                if (f._audioNode[g].paused && 4 === f._audioNode[g].readyState) return f._webAudio ? f._audioNode[g]._pos : f._audioNode[g].currentTime
        },
        pos3d: function(b, c, d, f) {
            debugger;
            var g = this;
            c = "undefined" === typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!g._loaded) return g.on("play", function() { g.pos3d(b, c, d, f) }), g;
            if (0 <= b || 0 > b) {
                if (g._webAudio) {
                    var p = f ? g._nodeById(f) : g._activeNode();
                    p && (g._pos3d = [b, c, d], p.panner.setPosition(b, c, d))
                }
            } else return g._pos3d;
            return g
        },
        fade: function(b, c, d, f, g) {
            var p = this,
                m = Math.abs(b - c),
                s = b > c ? "down" : "up",
                m = m / 0.01,
                y = d / m;
            if (!p._loaded) return p.on("load", function() { p.fade(b, c, d, f, g) }), p;
            p.volume(b, g);
            for (var z = 1; z <= m; z++)(function() {
                var b = Math.round(1E3 * (p._volume + ("up" === s ? 0.01 : -0.01) * z)) / 1E3;
                setTimeout(function() {
                    p.volume(b, g);
                    b === c && f && f()
                }, y * z)
            })()
        },
        fadeIn: function(b, c, d) { return this.volume(0).play().fade(0, b, c, d) },
        fadeOut: function(b, c, d, f) {
            var g = this;
            return g.fade(g._volume, b, c, function() {
                d && d();
                g.pause(f);
                g.on("end")
            }, f)
        },
        _nodeById: function(b) {
            for (var c =
                    this._audioNode[0], d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].id === b) { c = this._audioNode[d]; break }
            return c
        },
        _activeNode: function() {
            for (var b = null, c = 0; c < this._audioNode.length; c++)
                if (!this._audioNode[c].paused) { b = this._audioNode[c]; break }
            this._drainPool();
            return b
        },
        _inactiveNode: function(b) {
            for (var c = null, d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                    b(this._audioNode[d]);
                    c = !0;
                    break
                }
            this._drainPool();
            if (!c) {
                var f;
                this._webAudio ? (f = this._setupAudioNode(), b(f)) : (this.load(), f = this._audioNode[this._audioNode.length - 1], f.addEventListener("loadedmetadata", function() { b(f) }))
            }
        },
        _drainPool: function() {
            var b = 0,
                c;
            for (c = 0; c < this._audioNode.length; c++) this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--) this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        },
        _clearEndTimer: function(b) {
            b = this._onendTimer.indexOf(b);
            b = 0 <= b ? b : 0;
            this._onendTimer[b] && (clearTimeout(this._onendTimer[b]), this._onendTimer.splice(b, 1))
        },
        _setupAudioNode: function() {
            var b = this._audioNode,
                d = this._audioNode.length;
            b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
            b[d].gain.value = this._volume;
            b[d].paused = !0;
            b[d]._pos = 0;
            b[d].readyState = 4;
            b[d].connect(m);
            b[d].panner = c.createPanner();
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        },
        on: function(b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c) d.push(c);
            else
                for (var f = 0; f < d.length; f++) c ? d[f].call(this, c) : d[f].call(this);
            return this
        },
        off: function(b, c) {
            for (var d = this["_on" + b], f = c.toString(), g = 0; g < d.length; g++)
                if (f === d[g].toString()) { d.splice(g, 1); break }
            return this
        },
        unload: function() {
            for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++) c[d].paused || this.stop(c[d].id), this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            c = p._howls.indexOf(this);
            null !== c && 0 <= c && p._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d) var z = function(b, c) {
        b._duration = c ? c.duration : b._duration;
        0 === Object.getOwnPropertyNames(b._sprite).length && (b._sprite = { _default: [0, 1E3 * b._duration] });
        b._loaded || (b._loaded = !0, b.on("load"));
        b._autoplay && b.play()
    };
    "function" === typeof define && define.amd && define(function() { return { Howler: p, Howl: s } });
    "undefined" !== typeof exports && (exports.Howler = p, exports.Howl = s);
    window.Howler = p;
    window.Howl = s
})();
(function(b) {
    Number.prototype.map = function(b, c, d, f) { return d + (f - d) * ((this - b) / (c - b)) };
    Number.prototype.limit = function(b, c) { return Math.min(c, Math.max(b, this)) };
    Number.prototype.round = function(b) { b = Math.pow(10, b || 0); return Math.round(this * b) / b };
    Number.prototype.floor = function() { return Math.floor(this) };
    Number.prototype.ceil = function() { return Math.ceil(this) };
    Number.prototype.toInt = function() { return this | 0 };
    Number.prototype.toRad = function() { return this / 180 * Math.PI };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) { for (var c = this.length; c--;) this[c] === b && this.splice(c, 1); return this };
    Array.prototype.random = function() { return this[Math.floor(Math.random() * this.length)] };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            f = function() {},
            g = function() { return d.apply(this instanceof f && b ? this : b, c.concat(Array.prototype.slice.call(arguments))) };
        f.prototype = this.prototype;
        g.prototype = new f;
        return g
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) { return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b) },
        $new: function(b) { return document.createElement(b) },
        copy: function(b) {
            if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, f = b.length; d < f; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var f = c[d];
                if ("object" != typeof f || f instanceof HTMLElement || f instanceof ig.Class || null === f) b[d] = f;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = f instanceof Array ? [] : {};
                    ig.merge(b[d], f)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                f;
            for (f in b) c.push(f);
            c.sort();
            for (f = 0; f < c.length; f++) d.push(b[c[f]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var f = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + f] = b["moz" + f] = b["o" + f] = d : b["ms" + f] = b["moz" + f] = b["webkit" + f] = b["o" + f] = d
        },
        getVendorAttribute: function(b, c) { var d = c.charAt(0).toUpperCase() + c.substr(1); return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d] },
        normalizeVendorAttribute: function(b, c) { var d = ig.getVendorAttribute(b, c);!b[c] && d && (b[c] = d) },
        getImagePixels: function(b, c, d, f, g) {
            var n = ig.$new("canvas");
            n.width = b.width;
            n.height = b.height;
            var m = n.getContext("2d");
            ig.System.SCALE.CRISP(n, m);
            var x = ig.getVendorAttribute(m, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(m, "getImageDataHD");
            var v = b.width / x,
                I = b.height / x;
            n.width = Math.ceil(v);
            n.height = Math.ceil(I);
            m.drawImage(b, 0, 0, v, I);
            return 1 === x ? m.getImageData(c, d, f, g) : m.getImageDataHD(c, d, f, g)
        },
        module: function(b) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = { name: b, requires: [], loaded: !1, body: null };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() { ig._current.requires = Array.prototype.slice.call(arguments); return ig },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) { ig.resources.push(b) },
        setNocache: function(b) { ig.nocache = b ? "?" + Date.now() : "" },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = { name: b, requires: [], loaded: !1, body: null };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                f = ig.$new("script");
            f.type = "text/javascript";
            f.src = d;
            f.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            f.onerror = function() { throw "Failed to load module " + b + " at " + d + " required from " + c; };
            ig.$("head")[0].appendChild(f)
        },
        _execModules: function() {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], f = !0, g = 0; g < d.requires.length; g++) {
                    var n = d.requires[g];
                    ig.modules[n] ? ig.modules[n].loaded || (f = !1) : (f = !1, ig._loadScript(n, d.name))
                }
                f && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    f = [];
                    n = ig._loadQueue[c].requires;
                    for (g = 0; g < n.length; g++) d = ig.modules[n[g]], (!d || !d.loaded) && f.push(n[g]);
                    b.push(ig._loadQueue[c].name + " (requires: " + f.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
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
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = { width: b.innerWidth, height: b.innerHeight };
            ig.ua.screen = { width: b.screen.availWidth * ig.ua.pixelRatio, height: b.screen.availHeight * ig.ua.pixelRatio };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() { ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = { requires: [], loaded: !1, body: null }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1))) }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(f, g) {
            var m = c++;
            d[m] = !0;
            var v = function() { d[m] && (b.requestAnimationFrame(v, g), f()) };
            b.requestAnimationFrame(v, g);
            return m
        };
        b.ig.clearAnimation = function(b) { delete d[b] }
    } else b.ig.setAnimation = function(c) { return b.setInterval(c, 1E3 / 60) }, b.ig.clearAnimation = function(c) { b.clearInterval(c) };
    var f = !1,
        g = /xyz/.test(function() { xyz }) ? /\bparent\b/ : /.*/,
        m = 0;
    b.ig.Class = function() {};
    var v = function(b) {
        var c = this.prototype,
            d = {},
            f;
        for (f in b) "function" == typeof b[f] && "function" == typeof c[f] && g.test(b[f]) ? (d[f] = c[f], c[f] = function(b, c) {
            return function() {
                var f = this.parent;
                this.parent = d[b];
                var g = c.apply(this, arguments);
                this.parent = f;
                return g
            }
        }(f, b[f])) : c[f] = b[f]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!f) {
                if (this.staticInstantiate) { var b = this.staticInstantiate.apply(this, arguments); if (b) return b }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var s = this.prototype;
        f = !0;
        var z = new this;
        f = !1;
        for (var j in c) z[j] = "function" == typeof c[j] && "function" == typeof s[j] && g.test(c[j]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = s[b];
                var f = c.apply(this, arguments);
                this.parent = d;
                return f
            }
        }(j, c[j]) : c[j];
        d.prototype = z;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = v;
        d.classId = z.classId = ++m;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
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
        staticInstantiate: function(b) { return ig.Image.cache[b] || null },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) { this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this) },
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
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
                d = this.width * b,
                f = this.height * b,
                g = ig.$new("canvas");
            g.width = d;
            g.height = f;
            for (var m = g.getContext("2d"), v = m.getImageData(0, 0, d, f), p = 0; p < f; p++)
                for (var y = 0; y < d; y++) {
                    var s = 4 * (Math.floor(p / b) * this.width + Math.floor(y / b)),
                        z = 4 * (p * d + y);
                    v.data[z] = c.data[s];
                    v.data[z + 1] = c.data[s + 1];
                    v.data[z + 2] = c.data[s + 2];
                    v.data[z + 3] = c.data[s + 3]
                }
            m.putImageData(v, 0, 0);
            this.data = g
        },
        draw: function(b, c, d, f, g, m) {
            if (this.loaded) {
                var v = ig.system.scale;
                g = (g ? g : this.width) * v;
                m = (m ? m : this.height) * v;
                ig.system.context.drawImage(this.data, d ? d * v : 0, f ? f * v : 0, g, m, ig.system.getDrawPos(b), ig.system.getDrawPos(c), g, m);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, f, g, m, v) {
            g = g ? g : f;
            if (this.loaded && !(f > this.width || g > this.height)) {
                var p = ig.system.scale,
                    y = Math.floor(f * p),
                    s = Math.floor(g * p),
                    z = m ? -1 : 1,
                    j = v ? -1 : 1;
                if (m || v) ig.system.context.save(), ig.system.context.scale(z, j);
                ig.system.context.drawImage(this.data, Math.floor(d * f) % this.width * p, Math.floor(d * f / this.width) * g * p, y, s, ig.system.getDrawPos(b) * z - (m ? y : 0), ig.system.getDrawPos(c) * j - (v ? s : 0), y, s);
                (m || v) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() { for (var b in ig.Image.cache) ig.Image.cache[b].reload() }
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
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) { if (-1 !== b.indexOf("\n")) { b = b.split("\n"); for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d])); return c } return this._widthForLine(b) },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) { return b.split("\n").length * (this.height + this.lineSpacing) },
        draw: function(b, c, d, f) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) { b = b.split("\n"); for (var g = this.height + this.lineSpacing, m = 0; m < b.length; m++) this.draw(b[m], c, d + m * g, f) } else {
                if (f == ig.Font.ALIGN.RIGHT || f == ig.Font.ALIGN.CENTER) m = this._widthForLine(b), c -= f == ig.Font.ALIGN.CENTER ? m / 2 : m;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (m = 0; m < b.length; m++) f = b.charCodeAt(m), c += this._drawChar(f - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var f = ig.system.scale,
                g = this.widthMap[b] * f,
                m = (this.height - 2) * f;
            ig.system.context.drawImage(this.data, this.indices[b] * f, 0, g, m, ig.system.getDrawPos(c), ig.system.getDrawPos(d), g, m);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, f = 0, g = 0; g < b.width; g++) {
                var m = 4 * g + 3;
                127 < c.data[m] ? f++ : 128 > c.data[m] && f && (this.widthMap.push(f), this.indices.push(g - f), d++, f = 0)
            }
            this.widthMap.push(f);
            this.indices.push(g - f)
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
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) { var d = ig.Sound.use[c]; if (b.canPlayType(d.mime)) { this.format = d; break } }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var f = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
                        var g = new Audio(f);
                        g.load();
                        this.clips[b].push(g)
                    }
                return this.clips[b][0]
            }
            var m = new Audio(f);
            d && (m.addEventListener("canplaythrough", function p(c) {
                m.removeEventListener("canplaythrough", p, !1);
                d(b, !0, c)
            }, !1), m.addEventListener("error", function(c) { d(b, !1, c) }, !1));
            m.preload = "auto";
            m.load();
            this.clips[b] = [m];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) g = new Audio(f), g.load(), this.clips[b].push(g);
            return m
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended && (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
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
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack || (this.currentTrack = d)
            }
        },
        next: function() { this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play()) },
        pause: function() { this.currentTrack && this.currentTrack.pause() },
        stop: function() { this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0) },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(), this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() { return this._loop },
        setLooping: function(b) { this._loop = b; for (var c in this.tracks) this.tracks[c].loop = b },
        getVolume: function() { return this._volume },
        setVolume: function(b) { this._volume = b.limit(0, 1); for (var c in this.tracks) this.tracks[c].volume = this._volume },
        fadeOut: function(b) { this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50)) },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() { this._loop ? this.play() : this.next() }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) { ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0) },
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
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b = 0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) { b.load(this._loadCallbackBound) },
        end: function() { this.done || (this.done = !0, clearInterval(this._intervalId)) },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
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
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
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
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
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
        init: function(b, c, d, f, g) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, f, g);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) { this.running ? this.newGameClass = b : this.setGameNow(b) },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
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
        clear: function(b) {
            this.context.fillStyle = b;
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
    ig.System.DRAW = { AUTHENTIC: function(b) { return Math.round(b) * this.scale }, SMOOTH: function(b) { return Math.round(b * this.scale) }, SUBPIXEL: function(b) { return b * this.scale } };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
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
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() { this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1)) },
        initAccelerometer: function() { this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1) },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = { left: 0, top: 0 };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) { this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault()) },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                    c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, 0 > c && window.focus(), ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) { this.accel = b.accelerationIncludingGravity },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                f = this;
            d.addEventListener("touchstart", function(b) { f.touchStart(b, c) }, !1);
            d.addEventListener("touchend", function(b) { f.touchEnd(b, c) }, !1);
            d.addEventListener("MSPointerDown", function(b) { f.touchStart(b, c) }, !1);
            d.addEventListener("MSPointerUp", function(b) { f.touchEnd(b, c) }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) { return this.actions[b] },
        pressed: function(b) { return this.presses[b] },
        released: function(b) { return !!this.delayedKeyup[b] },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.sound-handler").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        formats: { ogg: ".ogg", mp3: ".mp3" },
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMuted: !1,
        muted: !1,
        bgmStarted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{ name: "staticSound", path: "media/audio/play/static" }, { name: "openingSound", path: "media/audio/opening/opening" }, { name: "kittyopeningSound", path: "media/audio/opening/kittyopening" }, { name: "click", path: "media/audio/click" }, { name: "resources", path: "media/audio/walk" }, { name: "fireworks", path: "media/audio/firework" }, { name: "land", path: "media/audio/land" }, { name: "walk", path: "media/audio/walk2" }, { name: "upgrade", path: "media/audio/blop" }, { name: "minion", path: "media/audio/minion" }, { name: "grow", path: "media/audio/grow" }, { name: "woosh", path: "media/audio/wosh" }, { name: "vacuum", path: "media/audio/vacuum" }, { name: "robot", path: "media/audio/robot" }, { name: "machine", path: "media/audio/machine" }, { name: "word", path: "media/audio/word" }, { name: "magic", path: "media/audio/magic" }],
        debug: !1,
        init: function() {
            ig.ua.mobile ? (this.initSfx(), this.setupJukebox()) : (this.initSfx(), this.setupDesktopMusic());
            this.setupWindowHandler()
        },
        allVoSoundLoaded: function() {
            if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
                this.debug && console.log("Vo ready");
                for (index = 0; index < this.voSoundLoaded.length; index++) this.voSoundLoaded[index].on("end", function(b) {
                    b.isPlaying = !1;
                    this.soundBuffer.pop()
                }.bind(this, this.voSoundLoaded[index])), this.voSoundLoaded[index].on("play", function(b) { b.isPlaying = !0 }.bind(this, this.voSoundLoaded[index]));
                return !0
            }
            return !1
        },
        allSfxSoundLoaded: function() { return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1 },
        stopBackgroundMusic: function() {
            ig.game && (!0 == ig.game.soundPlugIn ? ig.game.webaudioPlugin && ig.game.webaudioPlugin.stop() : ig.ua.mobile ? this.pausePosition = this.jukebox.player.pause() : ig.music.pause());
            this.bgmPlaying = !1
        },
        playBackgroundMusic: function() { this.bgmPlaying || (this.bgmStarted = !0, ig.game && (!0 == ig.game.soundPlugIn ? ig.game.webaudioPlugin && ig.game.webaudioPlugin.play() : ig.ua.mobile ? this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0) : ig.music.play()), this._unMuteBackgroundMusic(), this.bgmPlaying = !0) },
        playSound: function(b) { if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying) this.soundBuffer.push(b), b.play() },
        stopAllAndPlaySound: function(b) {
            this.stopAllSounds();
            this.playSound(b)
        },
        stopAllSounds: function() { for (index = 0; index < this.soundBuffer.length; index++) this.soundBuffer[index].isPlaying = !1, this.soundBuffer.splice(0, 1)[0].stop() },
        addSound: function(b, c, d) {
            var f = c + this.formats.ogg;
            c += this.formats.mp3;
            this.SOUNDID[b] = b;
            this[b] = d ? new Howl({ urls: [f, c], onload: d }) : new Howl({ urls: [f, c] })
        },
        _muteSounds: function() {
            for (i = 0; i < ig.resources.length; i++) ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute();
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function() {
            Howler.unmute();
            ig.Sound.enabled = !0;
            this.debug && console.log("Sounds can play")
        },
        _muteBackgroundMusic: function() {
            ig.game && (!0 == ig.game.soundPlugIn ? ig.game.webaudioPlugin && ig.game.webaudioPlugin.mute() : ig.ua.mobile ? (this.stopBackgroundMusic(), this.jukebox.player.setVolume(0)) : ig.music.volume = 0);
            this.debug && console.log("BGM muted");
            this.bgmPlaying = !1
        },
        _unMuteBackgroundMusic: function() { this.bgmStarted && (ig.game && (!0 == ig.game.soundPlugIn ? ig.game.webaudioPlugin && ig.game.webaudioPlugin.unmute() : ig.ua.mobile ? (this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.jukebox.player.setVolume(1)) : ig.music.volume = 1), this.debug && console.log("BGM can play"), this.bgmPlaying = !0) },
        focusBlurMute: function() { this.forceMuted || this.mute() },
        focusBlurUnmute: function() { this.forceMuted || (this.unmute(), ig.game && (ig.game.getSound(), ig.game.getMusic())) },
        setForceMuted: function(b) { this.forceMuted = b },
        mute: function() { this.muted || (this._muteSounds(), this._muteBackgroundMusic(), this.muted = !0) },
        unmute: function() { this.muted && (this._unMuteSounds(), this._unMuteBackgroundMusic(), this.muted = !1) },
        setupWindowHandler: function() {
            "true" === getQueryVariable("webview") ? ($(window).focus(function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }), $(window).blur(function() { ig.soundHandler && ig.soundHandler.focusBlurMute() })) : (window.onfocus = function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }, window.onblur = function() { ig.soundHandler && ig.soundHandler.focusBlurMute() })
        },
        initSfx: function() {
            for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
                var b = function(b) { this.sfxSoundLoaded.push(this[b]) }.bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b)
            }
        },
        initVoSfx: function() {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var b = function(b) { this.voSoundLoaded.push(this[b]) }.bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path, b)
            }
        },
        setupDesktopMusic: function() { ig.music.add("media/audio/bgm.*", "background") },
        setupJukebox: function() { ig.ua.mobile && (this.jukebox = new ig.Jukebox, this.pausePosition = this.jukebox.player.settings.spritemap.music.start) },
        forceLoopBGM: function() {
            if (ig.ua.winPhone && !this.forceMuted && this.bgmPlaying && this.jukebox && this.jukebox.player && this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop) {
                if (0 <= this.prevTime)
                    if (this.jukebox.player.getCurrentTime() === this.prevTime) { if (this.silentCounter || (this.silentCounter = 0), this.silentCounter++, this.jukebox.player.getCurrentTime() >= this.jukebox.player.settings.spritemap.music.end || this.silentCounter > 0.0010 * ig.soundHandler.jukebox.player.settings.timeout * ig.system.fps) ig.ua.mobile || this.jukebox.player.pause(), this.jukebox.player.play(this.jukebox.player.settings.spritemap.music.start, !0), this.silentCounter = null } else this.silentCounter = null;
                this.prevTime = this.jukebox.player.getCurrentTime()
            }
        }
    })
});

function getHiddenProp() {
    var b = ["webkit", "moz", "ms", "o"];
    if ("hidden" in document) return "hidden";
    for (var c = 0; c < b.length; c++)
        if (b[c] + "Hidden" in document) return b[c] + "Hidden";
    return null
}

function isHidden() { var b = getHiddenProp(); return !b ? !1 : document[b] }
var visProp = getHiddenProp();
if (visProp) {
    var evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
    document.addEventListener(evtname, visChange)
}
window.addEventListener("pagehide", function() { ig.soundHandler && ig.soundHandler.focusBlurMute() }, !1);
window.addEventListener("pageshow", function() {
    debugger;
    ig.ua.mobile && ig.game && ig.game.resumeGame();
    ig.soundHandler && ig.soundHandler.focusBlurUnmute()
}, !1);

function visChange() { isHidden() ? ig.soundHandler && ig.soundHandler.focusBlurMute() : (ig.ua.mobile && ig.game && ig.game.resumeGame(), ig.soundHandler && ig.soundHandler.focusBlurUnmute()) }
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function() {
    ig.main = function(b, c, d, f, g, m, v) {
        ig.system = new ig.System(b, d, f, g, m || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        ig.soundHandler = new ig.SoundHandler;
        (new(v || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
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
        init: function(b, c, d, f) {
            this.sheet = b;
            this.pivot = { x: b.width / 2, y: b.height / 2 };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!f;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() { this.gotoFrame(Math.floor(Math.random() * this.sequence.length)) },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
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
        init: function(b, c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var f = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = f.vel.x;
            this.vel.y = f.vel.y;
            this.accel.x = f.accel.x;
            this.accel.y = f.accel.y;
            this.health = f.health;
            this._killed = f._killed;
            this.standing = f.standing;
            this.type = f.type;
            this.checkAgainst = f.checkAgainst;
            this.collides = f.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, f) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, f);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, f) { return c ? (b + c * ig.system.tick).limit(-f, f) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-f, f) },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() { ig.game.removeEntity(this) },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) { return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y) },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = { NEVER: 0, LITE: 1, PASSIVE: 2, ACTIVE: 4, FIXED: 8 };
    ig.Entity.TYPE = { NONE: 0, A: 1, B: 2, BOTH: 3 };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision = function(b, c) {
        var d = null;
        if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
        else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
        b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
    };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var f = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -f : f, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -f / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, f / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var f = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var g = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, g = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, g, d == b ? -f : f, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, g = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, g, -f / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, f / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
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
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                f = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= f && f < this.height ? this.data[f][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, g) {
            this.parent(b, c);
            this.tiledef = g || ig.CollisionMap.defaultTileDef;
            for (var m in this.tiledef) m | 0 > this.lastSlope && (this.lastSlope = m | 0)
        },
        trace: function(b, c, g, m, v, p) {
            var y = { collision: { x: !1, y: !1, slope: !1 }, pos: { x: b, y: c }, tile: { x: 0, y: 0 } },
                s = Math.ceil(Math.max(Math.abs(g), Math.abs(m)) / this.tilesize);
            if (1 < s)
                for (var z = g / s, j = m / s, n = 0; n < s && (z || j) && !(this._traceStep(y,
                        b, c, z, j, v, p, g, m, n), b = y.pos.x, c = y.pos.y, y.collision.x && (g = z = 0), y.collision.y && (m = j = 0), y.collision.slope); n++);
            else this._traceStep(y, b, c, g, m, v, p, g, m, 0);
            return y
        },
        _traceStep: function(b, c, g, m, v, p, y, s, z, j) {
            b.pos.x += m;
            b.pos.y += v;
            var n = 0;
            if (m) {
                var q = 0 < m ? p : 0,
                    x = 0 > m ? this.tilesize : 0,
                    n = Math.max(Math.floor(g / this.tilesize), 0),
                    G = Math.min(Math.ceil((g + y) / this.tilesize), this.height);
                m = Math.floor((b.pos.x + q) / this.tilesize);
                var I = Math.floor((c + q) / this.tilesize);
                if (0 < j || m == I || 0 > I || I >= this.width) I = -1;
                if (0 <= m && m < this.width)
                    for (var F =
                            n; F < G && !(-1 != I && (n = this.data[F][I], 1 < n && n <= this.lastSlope && this._checkTileDef(b, n, c, g, s, z, p, y, I, F))); F++)
                        if (n = this.data[F][m], 1 == n || n > this.lastSlope || 1 < n && this._checkTileDef(b, n, c, g, s, z, p, y, m, F)) {
                            if (1 < n && n <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = n;
                            c = b.pos.x = m * this.tilesize - q + x;
                            s = 0;
                            break
                        }
            }
            if (v) {
                q = 0 < v ? y : 0;
                v = 0 > v ? this.tilesize : 0;
                n = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                x = Math.min(Math.ceil((b.pos.x + p) / this.tilesize), this.width);
                F = Math.floor((b.pos.y + q) / this.tilesize);
                G = Math.floor((g + q) / this.tilesize);
                if (0 < j || F == G || 0 > G || G >= this.height) G = -1;
                if (0 <= F && F < this.height)
                    for (m = n; m < x && !(-1 != G && (n = this.data[G][m], 1 < n && n <= this.lastSlope && this._checkTileDef(b, n, c, g, s, z, p, y, m, G))); m++)
                        if (n = this.data[F][m], 1 == n || n > this.lastSlope || 1 < n && this._checkTileDef(b, n, c, g, s, z, p, y, m, F)) {
                            if (1 < n && n <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = n;
                            b.pos.y = F * this.tilesize - q + v;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, g, m, v, p, y, s, z, j) {
            var n = this.tiledef[c];
            if (!n) return !1;
            c = (n[2] -
                n[0]) * this.tilesize;
            var q = (n[3] - n[1]) * this.tilesize,
                x = n[4];
            y = g + v + (0 > q ? y : 0) - (z + n[0]) * this.tilesize;
            s = m + p + (0 < c ? s : 0) - (j + n[1]) * this.tilesize;
            if (0 < c * s - q * y) {
                if (0 > v * -q + p * c) return x;
                z = Math.sqrt(c * c + q * q);
                j = q / z;
                z = -c / z;
                var G = y * j + s * z,
                    n = j * G,
                    G = z * G;
                if (n * n + G * G >= v * v + p * p) return x || 0.5 > c * (s - p) - q * (y - v);
                b.pos.x = g + v - n;
                b.pos.y = m + p - G;
                b.collision.slope = { x: c, y: q, nx: j, ny: z };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = { 5: [0, 1, 1, c, !0], 6: [0, c, 1, b, !0], 7: [0, b, 1, 0, !0], 3: [0, 1, 1, 0.5, !0], 4: [0, 0.5, 1, 0, !0], 2: [0, 1, 1, 0, !0], 10: [0.5, 1, 1, 0, !0], 21: [0, 1, 0.5, 0, !0], 32: [c, 1, 1, 0, !0], 43: [b, 1, c, 0, !0], 54: [0, 1, b, 0, !0], 27: [0, 0, 1, b, !0], 28: [0, b, 1, c, !0], 29: [0, c, 1, 1, !0], 25: [0, 0, 1, 0.5, !0], 26: [0, 0.5, 1, 1, !0], 24: [0, 0, 1, 1, !0], 11: [0, 0, 0.5, 1, !0], 22: [0.5, 0, 1, 1, !0], 33: [0, 0, b, 1, !0], 44: [b, 0, c, 1, !0], 55: [c, 0, 1, 1, !0], 16: [1, b, 0, 0, !0], 17: [1, c, 0, b, !0], 18: [1, 1, 0, c, !0], 14: [1, 0.5, 0, 0, !0], 15: [1, 1, 0, 0.5, !0], 13: [1, 1, 0, 0, !0], 8: [0.5, 1, 0, 0, !0], 19: [1, 1, 0.5, 0, !0], 30: [b, 1, 0, 0, !0], 41: [c, 1, b, 0, !0], 52: [1, 1, c, 0, !0], 38: [1, c, 0, 1, !0], 39: [1, b, 0, c, !0], 40: [1, 0, 0, b, !0], 36: [1, 0.5, 0, 1, !0], 37: [1, 0, 0, 0.5, !0], 35: [1, 0, 0, 1, !0], 9: [1, 0, 0.5, 1, !0], 20: [0.5, 0, 0, 1, !0], 31: [1, 0, c, 1, !0], 42: [c, 0, b, 1, !0], 53: [b, 0, 0, 1, !0], 12: [0, 0, 1, 0, !1], 23: [1, 1, 0, 1, !1], 34: [1, 0, 1, 1, !1], 45: [0, 1, 0, 0, !1] };
    ig.CollisionMap.staticNoCollision = { trace: function(b, c, g, m) { return { collision: { x: !1, y: !1, slope: !1 }, pos: { x: b + g, y: c + m }, tile: { x: 0, y: 0 } } } }
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
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b, c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                f = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var g = 0; g < f; g++) { this.preRenderedChunks[g] = []; for (var m = 0; m < d; m++) this.preRenderedChunks[g][m] = this.preRenderChunk(m, g, m == d - 1 ? b - m * this.chunkSize : this.chunkSize, g == f - 1 ? c - g * this.chunkSize : this.chunkSize) }
        },
        preRenderChunk: function(b, c, d, f) {
            var g = d / this.tilesize / ig.system.scale + 1,
                m = f / this.tilesize / ig.system.scale + 1,
                v = b * this.chunkSize / ig.system.scale % this.tilesize,
                p = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var y = ig.$new("canvas");
            y.width = d;
            y.height = f;
            y.retinaResolutionEnabled = !1;
            f = y.getContext("2d");
            ig.System.scaleMode(y, f);
            d = ig.system.context;
            ig.system.context = f;
            for (f = 0; f < g; f++)
                for (var s = 0; s < m; s++)
                    if (f + b < this.width && s + c < this.height) {
                        var z = this.data[s + c][f + b];
                        z && this.tiles.drawTile(f * this.tilesize - v, s * this.tilesize - p, z - 1, this.tilesize)
                    }
            ig.system.context = d;
            return y
        },
        draw: function() { this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled()) },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d = this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                f = Math.max(Math.floor(c / this.chunkSize), 0),
                g = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                m = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                v = this.preRenderedChunks[0].length,
                p = this.preRenderedChunks.length;
            this.repeat || (g = Math.min(g, v), m = Math.min(m, p));
            for (var y = 0; f < m; f++) {
                for (var s = 0, z = d; z < g; z++) {
                    var j = this.preRenderedChunks[f % p][z % v],
                        n = -b + z * this.chunkSize - s,
                        q = -c + f * this.chunkSize - y;
                    ig.system.context.drawImage(j, n, q);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(n, q, this.chunkSize, this.chunkSize));
                    this.repeat && j.width < this.chunkSize && n + j.width < ig.system.realWidth && (s += this.chunkSize - j.width, g++)
                }
                this.repeat && j.height < this.chunkSize && q + j.height < ig.system.realHeight && (y += this.chunkSize - j.height, m++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), f = (this.scroll.y / this.tilesize).toInt(), g = this.scroll.x % this.tilesize, m = this.scroll.y % this.tilesize, v = -g - this.tilesize, g = ig.system.width + this.tilesize - g, p = ig.system.height + this.tilesize - m, y = -1, m = -m - this.tilesize; m < p; y++, m += this.tilesize) {
                var s = y + f;
                if (s >= this.height || 0 > s) {
                    if (!this.repeat) continue;
                    s = (s % this.height + this.height) % this.height
                }
                for (var z = -1, j = v; j < g; z++, j += this.tilesize) {
                    b = z + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[s][b])(c = this.anims[b -
                        1]) ? c.draw(j, m) : this.tiles.drawTile(j, m, b - 1, this.tilesize)
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
        loadLevel: function(b) {
            this.screen = { x: 0, y: 0 };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var f = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    f.anims = this.backgroundAnims[d.tilesetName] || {};
                    f.repeat = d.repeat;
                    f.distance = d.distance;
                    f.foreground = !!d.foreground;
                    f.preRender = !!d.preRender;
                    f.name = d.name;
                    this.backgroundMaps.push(f)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) { this._levelToLoad = b },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) { return this.namedEntities[b] },
        getEntitiesByType: function(b) {
            b = "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var f = this.entities[d];
                f instanceof b && !f._killed && c.push(f)
            }
            return c
        },
        spawnEntity: function(b, c, d, f) {
            var g = "string" === typeof b ? ig.global[b] : b;
            if (!g) throw "Can't spawn entity of type " + b;
            b = new g(c, d, f || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() { this.entities.sort(this.sortBy) },
        sortEntitiesDeferred: function() { this._doSortEntities = !0 },
        removeEntity: function(b) {
            b.name && delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                    this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() { for (var b = 0; b < this.entities.length; b++) this.entities[b].draw() },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var f = {}, g = Math.floor(d.pos.y / this.cellSize), m = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, v = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, p = Math.floor(d.pos.x / this.cellSize); p < m; p++)
                        for (var y = g; y < v; y++)
                            if (b[p])
                                if (b[p][y]) {
                                    for (var s = b[p][y], z = 0; z < s.length; z++) d.touches(s[z]) && !f[s[z].id] && (f[s[z].id] = !0, ig.Entity.checkPair(d, s[z]));
                                    s.push(d)
                                } else b[p][y] = [d];
                else b[p] = {}, b[p][y] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) { return b.zIndex - c.zIndex },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        },
        POS_Y: function(b, c) { return b.pos.y + b.size.y - (c.pos.y + c.size.y) }
    }
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        bgIm: new ig.Image("media/graphics/sprites/home/home-bg.png"),
        logoIm: new ig.Image("media/graphics/sprites/home/logo.png"),
        shineIm: new ig.Image("media/graphics/sprites/home/shine.png"),
        sideRunIm: new ig.Image("media/graphics/sprites/minion/side-run.png"),
        barIm: new ig.Image("media/graphics/sprites/home/bar.png"),
        baseIm: new ig.Image("media/graphics/sprites/home/bar-base.png"),
        init: function(b, c) {
            this.parent(b, c);
            this.hidEle = document.createElement("canvas");
            this.hidCtx = this.hidEle.getContext("2d");
            this.hidEle.width = ig.system.width;
            this.hidEle.height = ig.system.height;
            this.logo = { scX: 1, scY: 1, shineX: -100 };
            this.bg = { scX: 1, scY: 1.005, fat: !1 };
            this.ctx = ig.system.context;
            this.right = { x: 0.34 * ig.system.width, y: 0.7 * ig.system.height - 30, draw: !0, animate: !0, frame: 0, frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], frameTime: 0.1, oriFrameTime: 0.1, loop: !0, frameX: 11, frameY: 1, off: { x: -this.sideRunIm.width / 2 / 11 - 2, y: -this.sideRunIm.height }, alp: 0, scX: -1, scY: 1, cent: !1, im: this.sideRunIm };
            ig.ua.mobile && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
        },
        ctxDrawer: function(b) {
            var c = b.ctx || ig.system.context,
                d = b.offX || 0,
                f = b.offY || 0,
                g = b.cent || !1,
                m = null == b.scX ? 1 : b.scX,
                v = null == b.scY ? 1 : b.scY,
                p = null == b.alp && 0 != b.alp ? 1 : b.alp,
                y = null == b.rot ? 0 : b.rot,
                s = b.sx,
                z = b.sy,
                j = b.sw,
                n = b.sh,
                q = j * m,
                x = n * v;
            if (!(0 >= p))
                if (0 < y || 0 > m || 0 > v) {
                    var G = b.x,
                        I = b.y,
                        d = g ? -j / 2 + d : d || 0,
                        f = g ? -n / 2 + f : f || 0;
                    0 < j && 0 < n && (c.save(), c.translate(G, I), c.scale(m, v), c.rotate(2 * Math.PI /
                        360 * y), c.globalAlpha = p, c.drawImage(b.pic, s, z, j, n, d, f, j, n), c.restore())
                } else G = g ? b.x - q / 2 + d : b.x + d, I = g ? b.y - x / 2 + f : b.y + f, 0 < j && 0 < n && (c.globalAlpha = p, c.drawImage(b.pic, s, z, j, n, G, I, q, x), c.globalAlpha = 1)
        },
        drawer: function(b) {
            var c = b.ctx || ig.system.context,
                d = b.offX || 0,
                f = b.offY || 0,
                g = b.cent || !1,
                m = null == b.scX ? 1 : b.scX,
                v = null == b.scY ? 1 : b.scY,
                p = null == b.alp && 0 != b.alp ? 1 : b.alp,
                y = null == b.rot ? 0 : b.rot,
                s = b.frameX || 1,
                z = b.frameY || 1,
                j = b.frame || 0,
                n = b.pic.width / s * (j % s),
                j = b.pic.height / z * Math.floor(j / s),
                q = b.pic.width / s,
                x = b.pic.height /
                z,
                s = b.pic.width / s * m,
                z = b.pic.height / z * v;
            0 >= p || (s = g ? b.x - s / 2 + d : b.x + d, g = g ? b.y - z / 2 + f : b.y + f, 0 < q && 0 < x && (c.save(), c.translate(s, g), c.scale(m, v), c.rotate(2 * Math.PI / 360 * y), c.globalAlpha = p, c.drawImage(b.pic.data, n, j, q, x, d, f, q, x), c.restore()))
        },
        textSet: function(b, c, d, f) {
            this.ctxRef = f = f || ig.system.context;
            f.font = b + "px " + (d || "patriot");
            f.fillStyle = c
        },
        textW: function(b) { return this.ctxRef.measureText(b).width },
        checkFrame: function(b) { return void 0 != this[b].frames && void 0 != this[b].frame ? !0 : !1 },
        textDraw: function(b) {
            var c = b.rot ? b.rot : 0,
                d = b.tx ? b.tx : 0,
                f = b.x ? b.x : 0,
                g = b.y ? b.y : 0,
                m = void 0 == b.scX ? 1 : b.scX,
                v = void 0 == b.scY ? 1 : b.scY,
                p = void 0 == b.scX ? 1 : b.scX,
                y = void 0 == b.scY ? 1 : b.scY,
                s = b.stroke ? b.stroke : !1,
                z = void 0 == b.strokeAlp ? 1 : b.strokeAlp,
                j = b.strokeColour ? b.strokeColour : "black",
                n = void 0 == b.alp ? 1 : b.alp,
                q = b.col ? b.col : this.ctx.fillStyle,
                x = b.font || "patriot",
                G = b.px || 10,
                I = b.strokeLine || 3,
                F = b.align || "center",
                E = b.ctx || ig.system.context;
            this.ctxRef = b.ctx || ig.system.context;
            E.font = G + "px " + x;
            void 0 != b.maxWidth && this.textW(d) * m > b.maxWidth && (p = b.maxWidth / this.textW(d), y = v / m * p);
            "left" == F ? f += 0.5 * this.textW(d) * p : "right" == F && (f -= 0.5 * this.textW(d) * p);
            E.save();
            b = E.measureText("M").width * y;
            E.translate(f, g + b / 2);
            E.scale(p, y);
            E.rotate(c ? 2 * Math.PI / 360 * c : 0);
            E.fillStyle = q;
            E.globalAlpha = z;
            !0 == s && (E.lineWidth = I, E.strokeStyle = j, E.strokeText(d, -this.textW(d) / 2, 0));
            E.globalAlpha = n;
            E.fillText(d, -this.textW(d) / 2, 0);
            E.restore()
        },
        end: function() {
            this.parent();
            var b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)",
                b)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        quickDraw: function(b) {
            null == this[b].count && (this[b].count = 0);
            1 < this[b].count ? (this[b].frame > this[b].frames.length ? this[b].frame = 0 : this[b].frame++, this[b].count = 0) : this[b].count++;
            this.drawer({ pic: this[b].im, x: this[b].x, y: this[b].y, frameX: this[b].frameX, frameY: this[b].frameY, frame: this[b].frames[this[b].frame], cent: this[b].cent, rot: void 0 == this[b].rot ? this.rot : this[b].rot, offX: this[b].off.x, offY: this[b].off.y, scX: this[b].scX, scY: this[b].scY })
        },
        draw: function() {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            this.ctx.clearRect(0, 0, ig.system.width, ig.system.height);
            this.right.x = ig.system.width / 2 - this.baseIm.width / 2 + (this.baseIm.width - 3) * this._drawStatus + 23;
            this.drawer({ pic: this.bgIm, x: ig.system.width / 2, y: 0.5 * ig.system.height, cent: !0, scX: 1, scY: 1 });
            !0 == this.bg.fat ? (1 < this.bg.scX ? this.bg.scX -= 5E-5 : (this.bg.scX = 1, this.bg.fat = !1), 1.01 > this.bg.scY ? this.bg.scY += 5E-5 : (this.bg.scY = 1.01, this.bg.fat = !1)) : (1.005 > this.bg.scX ? this.bg.scX += 5E-5 : (this.bg.scX = 1.005, this.bg.fat = !0), 1 < this.bg.scY ? this.bg.scY -= 5E-5 : (this.bg.scY = 1, this.bg.fat = !0));
            this.drawer({ ctx: this.hidCtx, pic: this.logoIm, x: 10, y: 10, cent: !1 });
            this.logo.shineX = this.logo.shineX < ig.system.width ? this.logo.shineX + 5 : -100;
            this.textDraw({ x: -100, y: -100, px: 1, tx: "hello" });
            this.hidCtx.save();
            this.hidCtx.globalCompositeOperation = "source-in";
            this.hidCtx.drawImage(this.shineIm.data, this.logo.shineX, 10);
            this.hidCtx.restore();
            this.drawer({ pic: this.logoIm, x: ig.system.width / 2, y: 0.3 * ig.system.height, cent: !0, scX: this.logo.scX, scY: this.logo.scY });
            this.ctxDrawer({ pic: this.hidEle, sx: 0, sy: 0, sw: this.logoIm.width + 20, sh: this.logoIm.height + 20, x: ig.system.width / 2, y: 0.3 * ig.system.height, cent: !0, scX: this.logo.scX, scY: this.logo.scY });
            this.ctx.drawImage(this.baseIm.data, ig.system.width / 2 - this.baseIm.width / 2, 0.8 * ig.system.height - 30);
            0 < this._drawStatus && 1 >= this._drawStatus && this.ctx.drawImage(this.barIm.data, 0, 0, this.barIm.width * this._drawStatus, this.barIm.height, ig.system.width / 2 - this.barIm.width / 2, 0.8 * ig.system.height - 30, this.barIm.width * this._drawStatus, this.barIm.height);
            this.quickDraw("right")
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens = b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() { for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause() };
    ig.Entity.prototype.resumeTweens = function() { for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume() };
    ig.Entity.prototype.stopTweens = function(b) { for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b) };
    ig.Tween = function(b, c, d, f) {
        var g = {},
            m = {},
            v = {},
            p = 0,
            y = !1,
            s = !1,
            z = !1;
        this.duration = d;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, f);
        this.loopNum = this.loopCount;
        this.chain = function(b) { z = b };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, f) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (f[b] = d[b]);
            else
                for (subprop in d[b]) f[b] || (f[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], f[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            p = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            s = !0;
            y = new ig.Timer;
            for (var d in c) this.initEnd(d, c, m);
            for (d in m) this.initStart(d, m, b, g), this.initDelta(d, v, b, m)
        };
        this.initDelta = function(b, c, d, f) {
            if ("object" !== typeof f[b]) c[b] = f[b] - d[b];
            else
                for (subprop in f[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], f[b])
        };
        this.propUpdate = function(b, c, d, f, g) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ? d[b] + f[b] * g : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], f[b], g)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!s) return !1;
            if (this.delay) {
                if (y.delta() < this.delay) return;
                this.delay = 0;
                y.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (y.delta() + p) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in v) this.propUpdate(property, b, g, v, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    z && z.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in g) this.propSet(property, g, b);
                    p = 0;
                    y.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, m);
                    ig.merge(d, g);
                    ig.merge(g, c);
                    ig.merge(m, d);
                    for (property in m) this.initDelta(property, v, b, m);
                    p = 0;
                    y.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            p += y.delta()
        };
        this.resume = function() {
            this.paused = !1;
            y.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, p += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = { Revert: 1, Reverse: 2 };
    ig.Tween.Easing = { Linear: {}, Quadratic: {}, Cubic: {}, Quartic: {}, Quintic: {}, Sinusoidal: {}, Exponential: {}, Circular: {}, Elastic: {}, Back: {}, Bounce: {} };
    ig.Tween.Easing.Linear.EaseNone = function(b) { return b };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) { return b * b };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) { return -b * (b - 2) };
    ig.Tween.Easing.Quadratic.EaseInOut = function(b) { return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1) };
    ig.Tween.Easing.Cubic.EaseIn = function(b) { return b * b * b };
    ig.Tween.Easing.Cubic.EaseOut = function(b) { return --b * b * b + 1 };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) { return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2) };
    ig.Tween.Easing.Quartic.EaseIn = function(b) { return b * b * b * b };
    ig.Tween.Easing.Quartic.EaseOut = function(b) { return -(--b * b * b * b - 1) };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) { return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2) };
    ig.Tween.Easing.Quintic.EaseIn = function(b) { return b * b * b * b * b };
    ig.Tween.Easing.Quintic.EaseOut = function(b) { return (b -= 1) * b * b * b * b + 1 };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) { return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2) };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) { return -Math.cos(b * Math.PI / 2) + 1 };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) { return Math.sin(b * Math.PI / 2) };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) { return -0.5 * (Math.cos(Math.PI * b) - 1) };
    ig.Tween.Easing.Exponential.EaseIn = function(b) { return 0 == b ? 0 : Math.pow(2, 10 * (b - 1)) };
    ig.Tween.Easing.Exponential.EaseOut = function(b) { return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1 };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) { return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2) };
    ig.Tween.Easing.Circular.EaseIn = function(b) { return -(Math.sqrt(1 - b * b) - 1) };
    ig.Tween.Easing.Circular.EaseOut = function(b) { return Math.sqrt(1 - --b * b) };
    ig.Tween.Easing.Circular.EaseInOut = function(b) { return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1) };
    ig.Tween.Easing.Elastic.EaseIn = function(b) {
        var c, d = 0.1,
            f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f))
    };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            f = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) { return b * b * (2.70158 * b - 1.70158) };
    ig.Tween.Easing.Back.EaseOut = function(b) { return (b -= 1) * b * (2.70158 * b + 1.70158) + 1 };
    ig.Tween.Easing.Back.EaseInOut = function(b) { return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2) };
    ig.Tween.Easing.Bounce.EaseIn = function(b) { return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b) };
    ig.Tween.Easing.Bounce.EaseOut = function(b) { return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375 };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) { return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5 }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function() { ig.Jukebox = ig.Class.extend({ init: function() { this.player = new jukebox.Player({ resources: ["media/audio/bgm.mp3", "media/audio/bgm.ogg"], autoplay: !1, spritemap: { music: { start: 0, end: 12.3, loop: !0 } }, timeout: 1E3 }) } }) });
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) { newLevels = []; return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1 },
        nextLevel: function() { return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1 },
        previousLevel: function() { return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1 },
        jumpTo: function(b) { var c = null; for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i); return 0 <= c ? this.loadLevel(c) : !1 },
        firstLevel: function() { return this.loadLevel(0) },
        lastLevel: function() {
            return this.loadLevel(this.levels.length -
                1)
        },
        reloadLevel: function() { return this.loadLevel(this.currentLevel) }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() { return !ig.Storage.instance ? null : ig.Storage.instance },
        init: function() { ig.Storage.instance = this },
        isCapable: function() { return "undefined" !== typeof window.localStorage },
        isSet: function(b) { return null !== this.get(b) },
        initUnset: function(b, c) { null === this.get(b) && this.set(b, c) },
        get: function(b) { if (!this.isCapable()) return null; try { return JSON.parse(localStorage.getItem(b)) } catch (c) { return window.localStorage.getItem(b) } },
        getInt: function(b) { return ~~this.get(b) },
        getFloat: function(b) { return parseFloat(this.get(b)) },
        getBool: function(b) { return !!this.get(b) },
        key: function(b) { return this.isCapable() ? window.localStorage.key(b) : null },
        set: function(b, c) { if (!this.isCapable()) return null; try { window.localStorage.setItem(b, JSON.stringify(c)) } catch (d) { console.log(d) } },
        setHighest: function(b, c) { c > this.getFloat(b) && this.set(b, c) },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.webaudio-music-player").defines(function() {
    WebaudioMusicPlayer = ig.Class.extend({
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        soundList: {},
        init: function(b) {
            this.webaudio = { compatibility: {}, gainNode: null, buffer: null, source_loop: {}, source_once: {} };
            try { this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, this.isSupported = !0 } catch (c) { console.log("Web Audio API not supported in this browser."); return }
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            var d = "start",
                f = "stop",
                g = this.webaudio.context.createBufferSource();
            "function" !== typeof g.start && (d = "noteOn");
            this.webaudio.compatibility.start = d;
            "function" !== typeof g.stop && (f = "noteOff");
            this.webaudio.compatibility.stop = f;
            for (var m in b) {
                this.soundList[m] = m;
                d = b[m].path;
                b = d + "." + ig.Sound.FORMAT.MP3.ext;
                var v = d + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS && (v = b) : (d = navigator.userAgent.toLowerCase(), -1 != d.indexOf("safari") && -1 >= d.indexOf("chrome") && (v = b));
                var p = new XMLHttpRequest;
                p.open("GET", v, !0);
                p.responseType = "arraybuffer";
                p.onload = function() {
                    this.webaudio.context.decodeAudioData(p.response, function(b) {
                        this.webaudio.buffer = b;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function() { console.log('Error decoding audio "' + v + '".') })
                }.bind(this);
                p.send();
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            webaudio = this.webaudio;
            var b = function() {
                var c = webaudio.context,
                    d = c.createBuffer(1, 1, 22050),
                    f = c.createBufferSource();
                f.buffer = d;
                f.connect(c.destination);
                "undefined" === typeof f.start ? f.noteOn(0) : f.start(0);
                setTimeout(function() {
                    (f.playbackState === f.PLAYING_STATE || f.playbackState === f.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                }, 0)
            };
            window.addEventListener("touchend", b, !1)
        },
        play: function() {
            if (this.isSupported)
                if (this.webaudio.buffer) {
                    if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                        this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                        this.webaudio.source_loop.buffer = this.webaudio.buffer;
                        this.webaudio.source_loop.loop = !0;
                        this.webaudio.source_loop.connect(this.webaudio.gainNode);
                        var b = 0;
                        this.pausedTime && (b = this.pausedTime);
                        this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                        if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration - b));
                        else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
                        this.webaudio.source_loop._playing = !0
                    }
                } else this.bgmPlaying = !0
        },
        stop: function() { this.bgmPlaying = !1; if (this.isSupported && this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime = this.webaudio.context.currentTime % this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0) },
        volume: function(b) { this.isSupported && this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = b) },
        getVolume: function() { return !this.isSupported || !this.webaudio.gainNode ? 0 : this.webaudio.gainNode.gain.value },
        mute: function() {!1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && this.stop()) },
        unmute: function() {!0 == this.muteFlag && (this.muteFlag = !1, this.play()) }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({ init: function() { ig.game.spawnEntity(EntityBranding, 0, 0) } });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: { x: 32, y: 32 },
        splash: new ig.Image("branding/splash1.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({ pos: { y: this.endPosY } }, 0.5, { easing: ig.Tween.Easing.Bounce.EaseIn });
            c = this.tween({}, 2.5, { onComplete: function() { ig.game.director.loadLevel(ig.game.director.currentLevel) } });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) { "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d)) },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                    v = window.innerWidth /
                    mobileWidth;
                $("#" + g.id).css("left", this.pos.x * v);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * v);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = w / 2 - destW / 2, v = h / 2 - destH / 2, console.log(m, v), $("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", v + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: { x: 32, y: 32 },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try { ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, { div_layer_name: b, centralize: centralize }) } catch (f) { console.log(f) }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: { x: 32, y: 32 },
        zIndex: 10001,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, d && d.centralize && (this.pos.x = ig.system.width /
                2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            d ? (console.log("branding settings found ... using that div layer name"), b = d.div_layer_name) : b = "branding-logo";
            _SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"), this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow));
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) { "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d)) },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                    v = window.innerWidth /
                    mobileWidth;
                $("#" + g.id).css("left", this.pos.x * v);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * v);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = w / 2 - destW / 2, v = h / 2 - destH / 2, console.log(m, v), $("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", v + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
                d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.plain").requires("impact.entity").defines(function() {
    EntityPlain = ig.Entity.extend({
        redraw: !1,
        sc: { x: 1, y: 1 },
        maxVel: { x: 5E3, y: 5E3 },
        sheetX: 1,
        sheetY: 1,
        gravityFactor: 0,
        clearColor: null,
        tweening: !1,
        which: 0,
        size: { x: 50, y: 50 },
        halfSize: { x: 50, y: 50 },
        ctxRef: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.ctx = ig.system.context)
        },
        circleHitTest: function(b, c, d, f, g, m) {
            b -= f;
            c -= g;
            return Math.sqrt(b * b + c * c) < d + m ? !0 : !1
        },
        getSize: function(b) {
            this.size.x = this[b].width;
            this.size.y = this[b].height;
            this.halfSize.x = this[b].width / 2;
            this.halfSize.y = this[b].height / 2
        },
        soundLooper: function(b) {
            null == this[b + "sTimer"] && (this[b + "sTimer"] = new ig.Timer, this[b + "sTime"] = this.sLoop[b].duration, this.sounder(b));
            this[b + "sTimer"].delta() > this[b + "sTime"] && (this[b + "sTimer"].reset(), this.sounder(b))
        },
        soundLoopReset: function(b) { this[b + "sTimer"].reset() },
        sounder: function(b) { try { ig.soundHandler.playSound(ig.soundHandler.SOUNDID[b]) } catch (c) { console.log(c) } },
        posXY: function(b) {
            b.pos.x = this.pointer.pos.x;
            b.pos.y = this.pointer.pos.y;
            console.log(this.pos.x, this.pos.y)
        },
        resetFrame: function(b) {
            this[b].ended = !1;
            this[b].frame = 0
        },
        runAnim: function(b) {
            void 0 == this[b] && (this[b] = {});
            this[b].ended = this[b].ended || !1;
            this[b].loop = this[b].loop || !1;
            this[b].frame = this[b].frame || 0;
            this[b].frameTimer = this[b].frameTimer || new ig.Timer;
            this[b].frameTime = this[b].frameTime || 0.03;
            !0 != this[b].ended && (!1 == this[b].loop && this[b].frame == this[b].frames.length - 1 ? (this[b].ended = !0, this.done && this.done(b)) : 1 < this[b].frames.length && this[b].frameTimer.delta() > this[b].frameTime && (this[b].frameTimer.reset(), this[b].frame = (this[b].frame + 1) % this[b].frames.length))
        },
        tweener: function(b, c, d, f, g) {
            var m = {};
            m[b] = c;
            null == g && (g = 0);
            null == f && (f = "none");
            this.tween("this" == b ? c : m, d, { delay: g, targ: b, seq: f, onComplete: function() { null != f && this.tweenF(f, b) }.bind(this), easing: ig.Tween.Easing.Quadratic.EaseOut }).start()
        },
        tweener2: function(b, c, d, f, g) {
            var m = {};
            m[b] = c;
            null == g && (g = 0);
            null == f && (f = "none");
            this.tween("this" == b ? c : m, d, { delay: g, targ: b, seq: f, onComplete: function() { null != f && this.tweenF(f, b) }.bind(this), easing: ig.Tween.Easing.Linear.EaseNone }).start()
        },
        tweener3: function(b, c, d, f, g) {
            var m = {};
            m[b] = c;
            null == g && (g = 0);
            null == f && (f = "none");
            this.tween("this" == b ? c : m, d, { delay: g, targ: b, seq: f, onComplete: function() { null != f && this.tweenF(f, b) }.bind(this), easing: ig.Tween.Easing.Elastic.EaseIn }).start()
        },
        sizer: function(b, c, d, f, g, m, v, p) {
            this.size.x = b.width / c * this.base.oriSc + (v || 0);
            this.size.y = b.height / d * this.base.oriSc + (p || 0);
            !0 == m ? (this.pos.x = f - this.size.x / 2, this.pos.y = g - this.size.y /
                2) : (this.pos.x = f, this.pos.y = g)
        },
        pauseT: function() { this.pauseTweens() },
        unpauseT: function() { this.resumeTweens() },
        unpause: function() {
            for (var b = 0; b < this.main.timers.length; b++) this.main.timers[b].unpause();
            this.unpauseT()
        },
        pause: function() {
            for (var b = 0; b < this.main.timers.length; b++) this.main.timers[b].pause();
            this.pauseT()
        },
        tinyTween: function(b, c, d) { if (b > c) return b -= d, b < c && (b = c), b; if (b < c) return b += d, b > c && (b = c), b; if (b == c) return b },
        clearBg: function() {
            ig.system.bgcontext.clearRect(0, 0, ig.system.width, ig.system.height);
            ig.game.redrawEntities()
        },
        centDraw: function(b, c, d, f, g) { this.drawer("game", b, 1, 1, 0, c, d, f, f, !0, 1, g) },
        ctxDrawer: function(b) {
            var c = b.ctx || ig.system.context,
                d = b.offX || 0,
                f = b.offY || 0,
                g = b.cent || !1,
                m = null == b.scX ? 1 : b.scX,
                v = null == b.scY ? 1 : b.scY,
                p = null == b.alp && 0 != b.alp ? 1 : b.alp,
                y = null == b.rot ? 0 : b.rot,
                s = b.sx,
                z = b.sy,
                j = b.sw,
                n = b.sh,
                q = j * m,
                x = n * v;
            if (!(0 >= p))
                if (0 < y || 0 > m || 0 > v) {
                    var G = b.x,
                        I = b.y,
                        d = g ? -j / 2 + d : d || 0,
                        f = g ? -n / 2 + f : f || 0;
                    0 < j && 0 < n && (c.save(), c.translate(G, I), c.scale(m, v), c.rotate(2 * Math.PI / 360 * y), c.globalAlpha = p, c.drawImage(b.pic, s, z, j, n, d, f, j, n), c.restore())
                } else G = g ? b.x - q / 2 + d : b.x + d, I = g ? b.y - x / 2 + f : b.y + f, 0 < j && 0 < n && (c.globalAlpha = p, c.drawImage(b.pic, s, z, j, n, G, I, q, x), c.globalAlpha = 1)
        },
        frameDrawer: function(b) {
            var c = b.ctx || ig.system.context,
                d = b.offX || 0,
                f = b.offY || 0,
                g = b.cent || !1,
                m = null == b.scX ? 1 : b.scX,
                v = null == b.scY ? 1 : b.scY,
                p = null == b.alp && 0 != b.alp ? 1 : b.alp,
                y = null == b.rot ? 0 : b.rot,
                s = b.frame.x,
                z = b.frame.y,
                j = b.frame.w,
                n = b.frame.h,
                q = j * m,
                x = n * v;
            if (!(0 >= p))
                if (0 < y || 0 > m || 0 > v) {
                    var G = b.x,
                        I = b.y,
                        d = g ? -j / 2 + d : d || 0,
                        f = g ? -n / 2 + f : f || 0;
                    0 < j && 0 < n && (c.save(), c.translate(G, I), c.scale(m, v), c.rotate(2 * Math.PI / 360 * y), c.globalAlpha = p, c.drawImage(b.pic, s, z, j, n, d, f, j, n), c.restore())
                } else G = g ? b.x - q / 2 + d : b.x + d, I = g ? b.y - x / 2 + f : b.y + f, 0 < j && 0 < n && (c.globalAlpha = p, c.drawImage(b.pic, s, z, j, n, G, I, q, x), c.globalAlpha = 1)
        },
        timitizer: function(b) {
            var c, d;
            c = Math.floor(b);
            b = String(c % 60);
            c = String(Math.floor(c / 60));
            d = String(Math.floor(c / 60));
            c = String(Math.floor(c % 60));
            b = 0 == b.length ? "00" : 1 == b.length ? "0" + b : Number(b) % 60;
            0 == c.length ? c = "00" : 1 == c.length && (c = "0" + c);
            0 == d.length ? d = "00" : 1 == d.length && (d = "0" + d);
            return 99 < c ? "99:99.99" : d + ":" + c + ":" + b
        },
        quickDraw: function(b) {
            !0 == this[b].animate && !1 == this.main.gamePaused && this.runAnim(b);
            this.drawer({ pic: this[b].im, x: this[b].x, y: this[b].y, frameX: this[b].frameX, frameY: this[b].frameY, frame: !1 == this.checkFrame(b) ? 0 : this[b].frames[this[b].frame], cent: this[b].cent, rot: void 0 == this[b].rot ? this.rot : this[b].rot, offX: this[b].off.x, offY: this[b].off.y, scX: this.scX * this[b].scX, scY: this.scY * this[b].scY })
        },
        drawer2: function(b) {
            var c = b.ctx || ig.system.context,
                d = b.offX || 0,
                f = b.offY || 0,
                g = b.cent || !1,
                m = null == b.scX ? 1 : b.scX,
                v = null == b.scY ? 1 : b.scY,
                p = null == b.alp && 0 != b.alp ? 1 : b.alp,
                y = null == b.rot ? 0 : b.rot,
                s = b.frameX || 1,
                z = b.frameY || 1,
                j = b.frame || 0,
                n = b.pic.width / s * (j % s),
                j = b.pic.height / z * Math.floor(j / s),
                q = b.pic.width / s,
                x = b.pic.height / z,
                s = b.pic.width / s * m,
                z = b.pic.height / z * v;
            if (!(0 >= p))
                if (0 < y || 0 > m || 0 > v) {
                    var G = b.x,
                        I = b.y,
                        d = g ? -q / 2 + d : d || 0,
                        f = g ? -x / 2 + f : f || 0;
                    0 < q && 0 < x && (c.save(), c.translate(G, I), c.scale(m, v), c.rotate(2 * Math.PI / 360 * y), c.globalAlpha = p, c.drawImage(b.pic.data, n, j, q, x, d, f, q, x), c.restore())
                } else G = g ? b.x - s / 2 + d : b.x + d, I = g ? b.y - z / 2 + f : b.y + f, 0 < q && 0 < x && (c.globalAlpha = p, c.drawImage(b.pic.data, n, j, q, x, G, I, s, z), c.globalAlpha = 1)
        },
        drawer: function(b) {
            var c = null == b.alp && 0 != b.alp ? 1 : b.alp,
                d = null == b.scX ? 1 : b.scX,
                f = null == b.scY ? 1 : b.scY;
            if (!(0 == c || 0 == d || 0 == f)) {
                var g = b.ctx || ig.system.context,
                    m = b.offX || 0,
                    v = b.offY || 0,
                    p = b.cent || !1,
                    y = null == b.rot ? 0 : b.rot,
                    s = b.frameX || 1,
                    z = b.frameY || 1,
                    j = b.frame || 0,
                    n = b.pic.width / s * (j % s),
                    j = b.pic.height / z * Math.floor(j / s),
                    q = b.pic.width / s,
                    x = b.pic.height / z,
                    s = b.pic.width /
                    s * d,
                    z = b.pic.height / z * f;
                0 >= c || (s = p ? b.x - s / 2 + m : b.x + m, p = p ? b.y - z / 2 + v : b.y + v, 0 < q && 0 < x && (g.save(), g.translate(s, p), g.scale(d, f), g.rotate(2 * Math.PI / 360 * y), g.globalAlpha = c, g.drawImage(b.pic.data, n, j, q, x, m, v, q, x), g.restore()))
            }
        },
        textSet: function(b, c, d, f) {
            this.ctxRef = f = f || ig.system.context;
            f.font = b + "px " + (d || "patriot");
            f.fillStyle = c
        },
        textLib: function(b, c, d) {
            d = d || 0;
            this.textDraw("game", _STRINGS.Game[b][3], _STRINGS.Game[b][4], _STRINGS.Game[b][0], (c || 0) + _STRINGS.Game[b][1] - this.ctx.measureText(_STRINGS.Game[b][0]).width /
                2 * _STRINGS.Game[b][3], _STRINGS.Game[b][2] + d)
        },
        textLibLeft: function(b, c, d) { this.textDraw("game", _STRINGS.Game[b][3], _STRINGS.Game[b][4], _STRINGS.Game[b][0], (c || 0) + _STRINGS.Game[b][1], _STRINGS.Game[b][2] + (d || 0)) },
        textW: function(b) { return this.ctxRef.measureText(b).width },
        textMax: function(b) { this.textSet(b.px, "white"); return this.textW(b.tx) > b.maxWidth ? b.maxWidth / this.textW(b.tx) : 1 },
        textDraw: function(b) {
            var c = b.rot ? b.rot : 0,
                d = b.tx ? b.tx : 0,
                f = b.x ? b.x : 0,
                g = b.y ? b.y : 0,
                m = void 0 == b.scX ? 1 : b.scX,
                v = void 0 == b.scY ? 1 : b.scY,
                p = void 0 == b.scX ? 1 : b.scX,
                y = void 0 == b.scY ? 1 : b.scY,
                s = b.stroke ? b.stroke : !1,
                z = void 0 == b.strokeAlp ? 1 : b.strokeAlp,
                j = b.strokeColour ? b.strokeColour : "black",
                n = void 0 == b.alp ? 1 : b.alp,
                q = b.col ? b.col : this.ctx.fillStyle,
                x = b.font || "patriot",
                G = b.px || 10,
                I = b.strokeLine || 3,
                F = b.align || "center";
            if (0 != n) {
                var E = b.ctx || ig.system.context;
                this.ctxRef = b.ctx || ig.system.context;
                E.font = G + "px " + x;
                void 0 != b.maxWidth && this.textW(d) * m > b.maxWidth && (p = b.maxWidth / this.textW(d), y = v / m * p);
                "left" == F ? f += 0.5 * this.textW(d) * p : "right" == F && (f -= 0.5 * this.textW(d) * p);
                E.save();
                b = E.measureText("M").width * y;
                E.translate(f, g + b / 2);
                E.scale(p, y);
                E.rotate(c ? 2 * Math.PI / 360 * c : 0);
                E.fillStyle = q;
                E.globalAlpha = z;
                !0 == s && (E.lineWidth = I, E.strokeStyle = j, E.strokeText(d, -this.textW(d) / 2, 0));
                E.globalAlpha = n;
                E.fillText(d, -this.textW(d) / 2, 0);
                E.restore()
            }
        },
        angleTo: function(b) { return Math.atan2(b.pos.y + b.size.y / 2 - (this.pos.y + 26 + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2)) },
        checkStorage: function() {
            try {
                return localStorage.setItem("test", "test"),
                    localStorage.removeItem("test"), "localStorage" in window && null !== window.localStorage
            } catch (b) { return !1 }
        },
        textLeft: function(b, c, d, f, g) {
            var m = ig.system.context;
            m.save();
            var v = m.measureText("M").width * g;
            m.translate(c, d + v / 2);
            m.scale(f, g);
            m.fillText(b, 0, 0);
            m.restore()
        },
        shuffleArray: function(b) { for (var c = b.length, d, f; 0 < c;) f = Math.floor(Math.random() * c), c--, d = b[c], b[c] = b[f], b[f] = d; return b }
    })
});
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("game.entities.plain").defines(function() {
    EntityPlainButtonMoreGames = EntityPlain.extend({
        gravityFactor: 0,
        butIm: new ig.Image("media/graphics/sprites/home/more.png"),
        size: { x: 64, y: 66 },
        oriSc: 1,
        sc: 1,
        mouseSc: 0.95,
        zIndex: 1E3,
        oriPos: { x: 0, y: 0 },
        update: function() { ig.global.wm || (this.parent(), !0 != this.tweening && (this.mouseSc = this.pointer.hoveringItem == this ? 1 : 0.95)) },
        draw: function() { ig.global.wm || this.drawer({ pic: this.butIm, x: this.pos.x + this.butIm.width / 2, y: this.pos.y + this.butIm.height / 2, scX: this.oriSc * this.sc * this.mouseSc, scY: this.oriSc * this.sc * this.mouseSc, cent: !0 }) },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        tweenF: function(b) {
            switch (b) {
                case "floatUp":
                    this.tweener("pos", { y: this.oriPos.y - 5 }, 0.8, "floatDown");
                    break;
                case "floatDown":
                    this.tweener("pos", { y: this.oriPos.y + 8 }, 1, "floatUp")
            }
        },
        init: function(b, c, d) {
            this.size.x = this.butIm.width;
            this.size.y = this.butIm.height;
            b -= this.size.x / 2;
            this.oriPos.x = b;
            this.oriPos.y = c;
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.MoreGames.Enabled ? (d.div_layer_name ? (console.log("settings found ... using that div layer name"), b = d.div_layer_name) : b = "more-games", console.log("div_layer_name:", b), this.checkClickableLayer(b, _SETTINGS.MoreGames.Link, _SETTINGS.MoreGames.NewWindow)) : this.kill())
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return console.log("clickable layer already exists ..."), !0;
            console.log("doesnt exist yet ...");
            return !1
        },
        checkClickableLayer: function(b, c, d) { "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d)) },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var m = window.innerHeight / mobileHeight,
                    v = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * v);
                $("#" + g.id).css("top", this.pos.y * m);
                $("#" + g.id).css("width", this.size.x * v);
                $("#" + g.id).css("height", this.size.y * m)
            } else m = document.getElementById("game").offsetLeft, v = document.getElementById("game").offsetTop, $("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", v + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: { x: 48, y: 48 },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) { this.parent(b, c, d) },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) { this.initTimer = new ig.Timer(0.1); try { ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound) } catch (b) { console.log(b) } } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer = null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var f = 0, g = 1; 48 >= g; g += 1) b.lineTo(0 + 800 * Math.cos(2 * g * Math.PI / 48), 0 + 800 * Math.sin(2 * g * Math.PI / 48)), f++, 2 == f && (f = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: { x: 48, y: 48 },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        init: function(b, c, d) { this.parent(b, c, d) },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) { this.initTimer = new ig.Timer(0.1); try { ig.soundHandler.playSound(ig.soundHandler.SOUNDID.kittyopeningSound) } catch (b) { console.log(b) } } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
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
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function(b) { this.objectArray.push(b) },
        clickObject: function(b) {
            this.isClicking && !this.firstClick && "function" == typeof b.clicked && (b.clicked(), this.firstClick = !0);
            this.firstClick && !this.isReleased && "function" == typeof b.clicking && b.clicking();
            this.firstClick && this.isReleased && "function" == typeof b.released && (b.released(), this.firstClick = !1)
        },
        letGo: function() {
            this.firstClick = !1;
            this.hoveringItem = null
        },
        update: function() {
            if (ig.ua.mobile) {
                var b = window.innerHeight / mobileHeight;
                this.pos.x = ig.input.mouse.x / (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x;
                this.pos.y = ig.input.mouse.y / b - this.size.y / 2
            } else this.pos.x = ig.input.mouse.x - this.size.x / 2, this.pos.y = ig.input.mouse.y - this.size.y / 2;
            var b = null,
                c = -1;
            for (a = this.objectArray.length -
                1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            null != b ? ("close" == b.name && console.log(b), null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && this.hoveringItem != b && this.hoveringItem.idle(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && (this.hoveringItem.idle(), this.hoveringItem = null);
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() { EntityPointerSelector = EntityPointer.extend({ zIndex: 1E3, _wmDrawBox: !0, _wmBoxColor: "rgba(0, 0, 255, 0.7)", size: { x: 20, y: 20 }, init: function(b, c, d) { this.parent(b, c, d) } }) });
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) { "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d)) },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("width", this.size.x * multiplier);
            $("#" + g.id).css("height", this.size.y * multiplier);
            $("#" + g.id).css("position", "absolute");
            var m = w / 2 - destW / 2,
                v = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + g.id).css("left", this.pos.x), $("#" + g.id).css("top", this.pos.y)) : ($("#" + g.id).css("left", m + this.pos.x * multiplier), $("#" + g.id).css("top", v + this.pos.y * multiplier));
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + g.id).width();
            dynamicClickableEntityDivs[b].height = $("#" + g.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() { for (var b = ig.game.getEntitiesByType(EntitySelect), c = 0; c < b.length; c++) b[c] != this && (b[c].isHovering = !1) },
        deselectOthers: function() { for (var b = ig.game.getEntitiesByType(EntitySelect), c = 0; c < b.length; c++) b[c] != this && (b[c].isSelected = !1) },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() { LevelOpening = { entities: [{ type: "EntityOpeningKitty", x: 520, y: 212 }], layer: [] } });
ig.baked = !0;
ig.module("game.entities.plain-but").requires("game.entities.plain").defines(function() {
    EntityPlainBut = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 2040,
        sc: 1,
        oriSc: 1,
        mouseSc: 0.95,
        runTask: !1,
        tweening: !1,
        oriPos: { x: 0, y: 0 },
        alp: 1,
        finalSc: 1,
        center: { x: 0, y: 0 },
        idleSc: 0.95,
        overSc: 1,
        downSc: 0.9,
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.size.x = this.butIm.width, this.size.y = this.butIm.height, this.oriPos.x = b, this.oriPos.y = c, this.hide(), this.oriStat && this.oriStat(), this.finalSc = this.oriSc * this.sc * this.mouseSc, this.menu && (this.pos.y = this.menu.off.y + this.oriPos.y), this.ready()) },
        clicked: function() {
            this.sc = this.downSc;
            this.buttonTask()
        },
        released: function() {!0 != this.tweening && (this.sc = this.overSc) },
        idle: function() {},
        hide: function() {
            this.pos.x = -200;
            this.pos.y = -200
        },
        show: function() {
            this.pos.x = this.oriPos.x;
            this.pos.y = this.oriPos.y;
            this.menu && (this.pos.y = this.menu.off.y + this.oriPos.y)
        },
        tweenF: function(b) {
            switch (b) {
                case "delayTask":
                    this.tweener("this", {}, 0.05, "delayTask2");
                    break;
                case "delayTask2":
                    this.buttonTask()
            }
        },
        update: function() { ig.global.wm || (this.parent(), this.idleUpdate()) },
        idleUpdate: function() {!0 != this.tweening && (this.mouseSc = this.pointer.hoveringItem == this ? this.overSc : this.idleSc, this.finalSc = this.oriSc * this.sc * this.mouseSc, this.center.x = this.pos.x + this.size.x / 2, this.center.y = this.pos.y + this.size.y / 2) },
        buttonTask: function() {},
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        draw: function() {
            this.parent();
            ig.global.wm || this.idleDraw()
        },
        idleDraw: function() { this.drawer({ pic: this.butIm, x: this.pos.x + this.size.x / 2, y: this.pos.y + this.size.y / 2, scX: this.finalSc, scY: this.finalSc, cent: !0, alp: this.alp }) }
    })
});
ig.baked = !0;
ig.module("game.entities.home-but").requires("game.entities.plain-but").defines(function() {
    debugger;
    EntityOptionBut = EntityPlainBut.extend({
        zIndex: 2020,
        oriSc: 0.98,
        butIm: new ig.Image("media/graphics/sprites/home/options.png"),
        oriStat: function() {
            this.oriPos.x -= this.size.x / 2;
            this.show()
        },
        ready: function() {
            this.parent();
            this.menu = ig.game.getEntitiesByType(EntitySettings)[0]
        },
        buttonTask: function() {!0 != this.main.gamePaused && !0 != this.menu.tweening && (this.sounder("click"), this.menu.tweenF("fadeIn"), ig.game.hideOverlay(["more-games"]), this.main.gamePaused = !0) }
    });
    EntityPlayBut = EntityPlainBut.extend({
        zIndex: 2020,
        oriSc: 0.98,
        butIm: new ig.Image("media/graphics/sprites/home/start.png"),
        clicked: function() {
            this.sc = 0.9;
            this.sounder("click")
        },
        ready: function() {
            this.parent();
            this.menu = ig.game.getEntitiesByType(EntityLoadBoard)[0]
        },
        released: function() {!0 != this.tweening && (this.sc = 1, this.tweenF("delayTask")) },
        oriStat: function() {
            this.oriPos.x -= this.size.x / 2;
            this.show()
        },
        buttonTask: function() {!0 != this.main.gamePaused && !0 != this.menu.tweening && (this.menu.tweenF("fadeIn"), ig.game.hideOverlay(["more-games"]), this.main.gamePaused = !0) }
    });
    EntityLoadBut = EntityPlainBut.extend({
        zIndex: 2020,
        oriSc: 0.98,
        butIm: new ig.Image("media/graphics/sprites/home/start.png"),
        clicked: function() {
            this.sc = 0.9;
            this.sounder("click")
        },
        released: function() {!0 != this.tweening && (this.sc = 1, this.tweenF("delayTask")) },
        oriStat: function() {
            this.oriPos.x -= this.size.x / 2;
            this.show()
        },
        buttonTask: function() {!0 != this.main.gamePaused && !0 != this.menu.tweening && (this.sounder("click"), this.menu.tweenF("fadeIn")) },
        idleDraw: function() { this.textDraw({ tx: _STRINGS.Game.loadgame, stroke: !0, strokeColour: "#9f0a01", strokeLine: 10, col: "white", x: this.pos.x + this.size.x / 2, y: this.pos.y + this.size.y / 2, px: 50, scX: 0.8 * this.finalSc, scY: this.finalSc }) }
    })
});
ig.baked = !0;
ig.module("game.entities.horizon-slider").requires("game.entities.plain-but").defines(function() {
    EntityHorizonSlider = EntityPlainBut.extend({
        zIndex: 2600,
        butIm: new ig.Image("media/graphics/sprites/setting/slider_knob.png"),
        barIm: new ig.Image("media/graphics/sprites/setting/slider_base.png"),
        minX: 0,
        maxX: 120,
        oriPos: { x: 0, y: 0 },
        off: { x: 0, y: 500 },
        tweening: !1,
        hold: { x: 0, y: 0 },
        holding: !1,
        posRef: { x: 0, y: 0 },
        init: function(b, c, d) { ig.global.wm || this.parent(b, c, d) },
        buttonTask: function() {!0 != this.tweening && !1 == this.holding && (this.holding = !0, this.hold.x = this.pos.x - this.pointer.pos.x) },
        oriStat: function() {
            var b = ig.system.width / 2 - (this.barIm.width + this.iconIm.width + 20) / 2;
            this.icon = { x: b, y: this.size.y / 2 - this.iconIm.height / 2 };
            this.bar = { x: b + 20 + this.iconIm.width, y: this.size.y / 2 - this.barIm.height / 2 };
            this.show()
        },
        tweenF: function(b) {
            switch (b) {
                case "fat":
                    this.tweener("this", { scX: 1.008, scY: 1 }, 1, "tall")
            }
        },
        update: function() { ig.global.wm || this.parent() },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        draw: function() {
            ig.global.wm ||
                (this.drawer({ pic: this.iconIm, x: this.icon.x, y: this.oriPos.y + this.icon.y + this.menu.off.y, cent: !1 }), this.drawer({ pic: this.barIm, x: this.bar.x, y: this.oriPos.y + this.bar.y + this.menu.off.y, cent: !1 }), this.parent())
        }
    });
    EntitySoundKnot = EntityHorizonSlider.extend({
        oriSc: 0.98,
        iconIm: new ig.Image("media/graphics/sprites/setting/sound_icon.png"),
        holding: !1,
        hold: { x: 0, y: 0 },
        posRef: { x: 0, y: 0 },
        oriStat: function() {
            this.parent();
            this.posRef.x = this.oriPos.x;
            this.bar.x += 3;
            this.icon.x += 6
        },
        ready: function() {
            this.parent();
            ig.game.getSound();
            this.oriPos.x = this.bar.x - 2 + ig.game.soundVolume * (this.barIm.width + 4 - this.butIm.width);
            this.pos.x = this.oriPos.x
        },
        buttonTask: function() {!0 != this.tweening && !1 == this.holding && (this.holding = !0, this.hold.x = this.pos.x - this.pointer.pos.x) },
        update: function() {
            !0 == this.holding && (this.pos.x = this.pointer.pos.x + this.hold.x, this.pos.x < this.bar.x - 2 && (this.pos.x = this.bar.x - 2), this.pos.x > this.bar.x - 2 + (this.barIm.width + 4 - this.butIm.width) && (this.pos.x = this.bar.x - 2 + (this.barIm.width + 4 - this.butIm.width)), ig.input.released("click") && (this.released(), this.pointer.firstClick = !1, ig.game.soundVolume = (this.pos.x - this.bar.x - 2) / (this.barIm.width + 4 - this.butIm.width), 0 > ig.game.soundVolume ? ig.game.soundVolume = 0 : 0.98 < ig.game.soundVolume && (ig.game.soundVolume = 1), ig.game.setSound(ig.game.soundVolume), this.holding = !1, this.sounder("click")));
            this.parent();
            this.pos.y = this.menu.off.y + this.oriPos.y
        }
    });
    EntityMusicBut = EntityHorizonSlider.extend({
        oriSc: 0.98,
        iconIm: new ig.Image("media/graphics/sprites/setting/music_icon.png"),
        oriStat: function() {
            this.parent();
            this.oriPos.x = this.bar.x - 2 + ig.game.musicVolume * (this.barIm.width + 4 - this.butIm.width);
            this.pos.x = this.oriPos.x;
            this.pos.y = this.oriPos.y;
            this.posRef.x = this.oriPos.x;
            this.sc = 1
        },
        buttonTask: function() {!0 != this.tweening && !1 == this.holding && (this.holding = !0, this.hold.x = this.pos.x - this.pointer.pos.x) },
        update: function() {
            !0 == this.holding && (this.pos.x = this.pointer.pos.x + this.hold.x, this.pos.x < this.bar.x - 2 && (this.pos.x = this.bar.x - 2), this.pos.x > this.bar.x - 2 + (this.barIm.width + 4 - this.butIm.width) && (this.pos.x = this.bar.x -
                    2 + (this.barIm.width + 4 - this.butIm.width)), ig.game.musicVolume = (this.pos.x - this.bar.x - 2) / (this.barIm.width + 4 - this.butIm.width), 0 > ig.game.musicVolume ? ig.game.musicVolume = 0 : 0.98 < ig.game.musicVolume && (ig.game.musicVolume = 1), !0 == ig.game.soundPlugIn ? ig.game.webaudioPlugin.volume(ig.game.musicVolume) : ig.ua.mobile ? ig.soundHandler.jukebox.player.setVolume((this.pos.x - this.bar.x - 2) / (this.barIm.width + 4 - this.butIm.width)) : ig.music.volume = (this.pos.x - this.bar.x - 2) / (this.barIm.width + 4 - this.butIm.width), ig.input.released("click") &&
                (this.released(), this.pointer.letGo(), this.holding = !1, ig.game.setMusic(ig.game.musicVolume), this.sounder("click")));
            this.parent();
            this.pos.y = this.menu.off.y + this.oriPos.y
        },
        ready: function() { null == this.pointer && (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], ig.game.getMusic(), this.oriPos.x = this.bar.x - 2 + ig.game.musicVolume * (this.barIm.width + 4 - this.butIm.width), this.pos.x = this.oriPos.x) }
    })
});
ig.baked = !0;
ig.module("game.entities.settings").requires("game.entities.plain", "game.entities.plain-but", "game.entities.horizon-slider").defines(function() {
    EntitySettings = EntityPlain.extend({
        zIndex: 2500,
        boardIm: new ig.Image("media/graphics/sprites/setting/board.png"),
        headerIm: new ig.Image("media/graphics/sprites/upgrade/header.png"),
        off: { x: 0, y: 500 },
        tweening: !1,
        alp: 0,
        oriAlp: 0.5,
        init: function(b, c, d) {
            ig.global.wm || (this.parent(b, c, d), this.off.y = 500, "home" != this.main.name ? (this.homeBut = ig.game.spawnEntity(EntitySettingHomeBut, ig.system.width / 2, ig.system.height / 2 + 58, { main: this.main, menu: this }), this.musicBut = ig.game.spawnEntity(EntityMusicBut, ig.system.width / 2, ig.system.height / 2 - 70 + 8, { main: this.main, menu: this }), this.soundBut = ig.game.spawnEntity(EntitySoundKnot, ig.system.width / 2, ig.system.height / 2 - 10 + 8, { main: this.main, menu: this })) : (this.musicBut = ig.game.spawnEntity(EntityMusicBut, ig.system.width / 2, ig.system.height / 2 - 60 + 8, { main: this.main, menu: this }), this.soundBut = ig.game.spawnEntity(EntitySoundKnot, ig.system.width / 2, ig.system.height /
                2 + 28, { main: this.main, menu: this })), ig.game.spawnEntity(EntitySettingCloseBut, 449, 91, { main: this.main, menu: this }))
        },
        tweenF: function(b) {
            switch (b) {
                case "fadeIn":
                    this.tweening = !0;
                    this.tweener("this", { alp: 1 }, 0.2, "boardIn");
                    break;
                case "boardIn":
                    this.tweener("off", { y: -10 }, 0.2, "boardIn2");
                    break;
                case "boardIn2":
                    this.tweener("off", { y: 0 }, 0.2, "boardInDone");
                    break;
                case "boardInDone":
                    this.tweening = !1;
                    this.main.gamePaused = !0;
                    break;
                case "boardOut":
                    this.tweening = !0;
                    this.tweener("off", { y: -10 }, 0.2, "boardOut2");
                    break;
                case "boardOut2":
                    this.tweener("off", { y: 500 }, 0.2, "fadeOut");
                    break;
                case "fadeOut":
                    !0 == this.dontFadeOut ? this.tweener("this", { alp: 1 }, 0.2, "boardOutDone") : this.tweener("this", { alp: 0 }, 0.2, "boardOutDone");
                    this.pointer.letGo();
                    break;
                case "boardOutDone":
                    this.tweening = !1, this.main.unpauseGame && this.main.unpauseGame(), this.main.gamePaused = !1
            }
        },
        update: function() { ig.global.wm || this.parent() },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.rendered = !0
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.ctx.globalAlpha = this.alp * this.oriAlp, this.ctx.fillStyle = "black", this.ctx.fillRect(0, 0, ig.system.width, ig.system.height), this.ctx.globalAlpha = 1, this.drawer({ x: ig.system.width / 2, y: 0.5 * ig.system.height + this.off.y + 8, cent: !0, pic: this.boardIm, scX: 0.9, scY: 0.9 }), this.drawer({ x: ig.system.width / 2, y: 0.23 * ig.system.height + this.off.y + 8, cent: !0, pic: this.headerIm, scX: 0.9, scY: 0.9 }), this.textDraw({
                align: "center",
                tx: _STRINGS.Game.settings,
                x: ig.system.width / 2,
                y: 0.222 * ig.system.height + this.off.y +
                    8,
                scX: 0.8,
                scY: 1,
                px: 48,
                col: "#1c2f28"
            }))
        }
    });
    EntitySettingCloseBut = EntityPlainBut.extend({
        zIndex: 2801,
        oriSc: 0.98,
        butIm: new ig.Image("media/graphics/sprites/upgrade/x_button.png"),
        oriStat: function() {
            this.pos.x = this.oriPos.x;
            this.pos.y = this.oriPos.y;
            this.sc = 1;
            this.show()
        },
        buttonTask: function() {!0 != this.menu.tweening && (this.sounder("click"), this.menu.tweenF("boardOut"), "home" == this.main.name && ig.game.showOverlay(["more-games"])) },
        update: function() {
            this.parent();
            this.pos.y = this.menu.off.y + this.oriPos.y
        },
        ready: function() { null == this.pointer && (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], this.base = ig.game.getEntitiesByType(EntityBase)[0]) }
    });
    EntitySettingHomeBut = EntityPlainBut.extend({
        zIndex: 2801,
        oriSc: 0.98,
        butIm: new ig.Image("media/graphics/sprites/setting/main_menu.png"),
        doTask: !1,
        oriStat: function() {
            this.sc = 1;
            this.show();
            this.size.x += 40;
            this.size.y += 5;
            this.oriPos.x -= this.size.x / 2;
            this.pos.x = this.oriPos.x;
            this.pos.y = this.oriPos.y
        },
        buttonTask: function() {!0 != this.menu.tweening && (this.sounder("click"), this.menu.dontFadeOut = !0, this.menu.tweenF("boardOut"), this.doTask = !0) },
        draw: function() { this.textDraw({ tx: _STRINGS.Game.menu, col: "#d87c10", x: this.pos.x + this.size.x / 2, y: this.pos.y + this.size.y / 2, px: 50, scX: 0.8 * this.finalSc, scY: this.finalSc }) },
        update: function() {
            this.parent();
            this.pos.y = this.menu.off.y + this.oriPos.y;
            !0 == this.doTask && !1 == this.menu.tweening && ig.game.director.jumpTo(LevelHome)
        },
        ready: function() { null == this.pointer && (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], this.base = ig.game.getEntitiesByType(EntityBase)[0]) }
    });
    EntitySettingsBut = EntityPlainBut.extend({
        zIndex: 2020,
        oriSc: 0.98,
        butIm: new ig.Image("media/graphics/sprites/game/setting.png"),
        oriStat: function() {
            this.oriPos.x -= this.size.x / 2;
            this.show()
        },
        buttonTask: function() {!0 != this.main.showUpgradesMenu && !0 != this.menu.tweening && (!0 != this.main.gamePaused && !0 != this.main.overMenu) && (this.sounder("click"), this.main.pauseGame && this.main.pauseGame(), this.menu.tweenF("fadeIn")) },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.base = ig.game.getEntitiesByType(EntityBase)[0];
            this.menu = ig.game.getEntitiesByType(EntitySettings)[0]
        }
    })
});
ig.baked = !0;
ig.module("game.entities.load-game-but").requires("game.entities.plain-but").defines(function() {
    EntityLoadGameBut = EntityPlainBut.extend({
        zIndex: 2801,
        oriSc: 0.98,
        butIm: new ig.Image("media/graphics/sprites/game/load.png"),
        doTask: !1,
        oriStat: function() {
            this.oriPos.x -= this.size.x + 30;
            this.centerPosY();
            this.sc = 1;
            this.show();
            this.pos.x = this.oriPos.x;
            this.pos.y = this.oriPos.y
        },
        centerPosY: function() { this.oriPos.y -= 0.5 * this.size.y + 4 },
        buttonTask: function() {!0 != this.menu.tweening && (this.sounder("click"), ig.game.slot = this.bar.slot, this.menu.tweenF("boardOut"), this.doTask = !0) },
        idleDraw: function() {
            this.parent();
            this.textDraw({ tx: !0 == this.dataExist ? _STRINGS.Game.load : _STRINGS.Game["new"], col: "#1c2f28", x: this.pos.x + this.size.x / 2 - 2 * this.finalSc, y: !0 == this.dataExist ? this.pos.y + this.size.y / 2 : this.pos.y + this.size.y / 2 + 1 * this.finalSc, px: 20, scX: 0.8 * this.finalSc, scY: this.finalSc })
        },
        update: function() {
            this.parent();
            this.pos.y = this.menu.off.y + this.oriPos.y;
            !0 == this.doTask && !1 == this.menu.tweening && (ig.game.hideOverlay(["more-games"]), ig.game.director.jumpTo(LevelGame))
        },
        ready: function() { null == this.pointer && (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], this.base = ig.game.getEntitiesByType(EntityBase)[0]) }
    })
});
ig.baked = !0;
ig.module("game.entities.load-reset-but").requires("game.entities.plain-but").defines(function() {
    EntityLoadResetBut = EntityPlainBut.extend({
        zIndex: 2801,
        oriSc: 0.7,
        butIm: new ig.Image("media/graphics/sprites/game/resetclose.png"),
        doTask: !1,
        comfirm: !1,
        oriStat: function() {
            this.oriPos.y += 0.4 * this.butIm.height - 1;
            this.oriPos.x -= 0.24 * this.butIm.width - 3;
            this.sc = 1;
            this.show();
            this.pos.x = this.oriPos.x;
            this.pos.y = this.oriPos.y;
            this.pos.y = this.menu.off.y + this.oriPos.y
        },
        buttonTask: function() {!0 != this.menu.tweening && (this.sounder("click"), !0 == this.comfirm ? (ig.game.storage.remove(ig.game["slotKey" + this.bar.slot]), ig.game.storage.remove(ig.game["timeKey" + this.bar.slot]), this.bar.resetSlot(), this.menu.tweenF("resetConfirm"), this.kill()) : (this.comfirm = !0, this.menu.tweenF("pingConfirm"))) },
        clicked: function() {
            this.sc = 0.9;
            this.buttonTask()
        },
        released: function() {!0 != this.tweening && (this.sc = 1) },
        update: function() {
            this.parent();
            this.pos.y = this.menu.off.y + this.oriPos.y
        },
        ready: function() { null == this.pointer && (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], this.base = ig.game.getEntitiesByType(EntityBase)[0]) }
    })
});
ig.baked = !0;
ig.module("game.entities.load-slot-but").requires("game.entities.plain-but", "game.entities.load-game-but", "game.entities.load-reset-but").defines(function() {
    EntityLoadSlotBut = EntityPlainBut.extend({
        zIndex: 2510,
        oriSc: 0.98,
        butIm: new ig.Image("media/graphics/sprites/game/load-idle.png"),
        idleIm: new ig.Image("media/graphics/sprites/game/load-idle.png"),
        selectIm: new ig.Image("media/graphics/sprites/game/load-select.png"),
        overSc: 0.95,
        idleSc: 0.95,
        downSc: 0.95,
        userData: {},
        dataExist: !1,
        progress: 0,
        time: 0,
        resources: 0,
        fullProgress: 115,
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.pos.y = this.menu.off.y + this.oriPos.y) },
        clicked: function() {},
        update: function() {
            this.parent();
            this.pos.y = this.menu.off.y + this.oriPos.y
        },
        released: function() {!0 != this.tweening && (this.sc = 1) },
        ready: function() { null == this.pointer && (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], this.slots = ig.game.getEntitiesByType(EntityLoadSlotBut), this.slot == ig.game.user && (this.butIm = this.selectIm), void 0 != ig.game.getSlot(this.slot) && (void 0 == ig.game.getSlot(this.slot).gameCompleted ? (ig.game.storage.remove(ig.game["slotKey" + this.slot]), ig.game.storage.remove(ig.game["timeKey" + this.slot])) : (this.userData = ig.game.getSlot(this.slot), this.dataExist = !0)), this.minions = this.userData.minions || 0, this.progress = this.userData.progress || 0, this.resources = this.userData.money || ig.game.initialMoney, this.timeOrigin = ig.game.getTime(this.slot) || 0, this.time = this.timitizer(this.timeOrigin), !0 == this.dataExist ? (ig.game.spawnEntity(EntityLoadResetBut, this.oriPos.x, this.oriPos.y, { main: this.main, menu: this.menu, slot: this.slot, bar: this }), this.loadBut = ig.game.spawnEntity(EntityLoadGameBut, this.oriPos.x + this.size.x + 15, this.oriPos.y + 0.5 * this.size.y, { main: this.main, menu: this.menu, slot: this.slot, dataExist: this.dataExist, bar: this })) : this.loadBut = ig.game.spawnEntity(EntityLoadGameBut, this.oriPos.x + this.size.x + 15, this.oriPos.y + 0.5 * this.size.y, { main: this.main, menu: this.menu, slot: this.slot, bar: this })) },
        resetSlot: function() {
            this.time = "0:00.0";
            this.progress = this.minions = 0;
            this.resources = ig.game.initialMoney;
            this.loadBut.dataExist = !1;
            this.loadBut.oriPos.y = this.oriPos.y + 0.5 * this.size.y;
            this.loadBut.centerPosY();
            this.userData = {}
        },
        oriStat: function() {
            this.oriPos.x -= this.size.x / 2;
            this.show()
        },
        buttonTask: function() {!0 != this.menu.tweening && this.menu.tweenF("fadeIn") },
        idleDraw: function() {
            this.parent();
            this.textDraw({
                align: "left",
                tx: !0 == this.userData.gameCompleted ? _STRINGS.Game.slot + (this.slot + 1) + _STRINGS.Game.completed : _STRINGS.Game.slot + (this.slot + 1),
                x: this.pos.x +
                    this.size.x / 2 - (0.48 * this.size.x - 16) * this.finalSc,
                y: this.pos.y + this.size.y / 2 - 0.3 * this.size.y * this.finalSc,
                px: 20,
                col: "#1c2f28",
                scX: 0.8 * this.finalSc,
                scY: 1 * this.finalSc,
                alp: 1
            });
            this.textDraw({ align: "left", tx: _STRINGS.Game.duration + this.time, x: this.pos.x + this.size.x / 2 - (0.48 * this.size.x - 16) * this.finalSc, y: this.pos.y + this.size.y / 2 - 0.01 * this.size.y * this.finalSc, px: 16, col: "#1c2f28", scX: 0.8 * this.finalSc, scY: 1 * this.finalSc, alp: 1 });
            this.textDraw({ align: "left", tx: _STRINGS.Game.progress + (100 * (this.progress / this.fullProgress)).toFixed(1) + "%", x: this.pos.x + this.size.x / 2 - (0.15 * this.size.x - 16) * this.finalSc, y: this.pos.y + this.size.y / 2 - 0.01 * this.size.y * this.finalSc, px: 16, col: "#1c2f28", scX: 0.8 * this.finalSc, scY: 1 * this.finalSc, alp: 1 });
            this.textDraw({ align: "left", tx: _STRINGS.Game.minions + this.minions, x: this.pos.x + this.size.x / 2 - (0.48 * this.size.x - 16) * this.finalSc, y: this.pos.y + this.size.y / 2 + 0.23 * this.size.y * this.finalSc, px: 16, col: "#1c2f28", scX: 0.8 * this.finalSc, scY: 1 * this.finalSc, alp: 1 });
            this.textDraw({ align: "left", tx: _STRINGS.Game.resources + this.resources, x: this.pos.x + this.size.x / 2 - (0.23 * this.size.x - 16) * this.finalSc, y: this.pos.y + this.size.y / 2 + 0.23 * this.size.y * this.finalSc, px: 16, col: "#1c2f28", scX: 0.8 * this.finalSc, scY: 1 * this.finalSc, alp: 1 })
        }
    })
});
ig.baked = !0;
ig.module("game.entities.load-board").requires("game.entities.plain", "game.entities.plain-but", "game.entities.load-slot-but").defines(function() {
    EntityLoadBoard = EntityPlain.extend({
        zIndex: 2500,
        boardIm: new ig.Image("media/graphics/sprites/game/board.png"),
        headerIm: new ig.Image("media/graphics/sprites/upgrade/header.png"),
        off: { x: 0, y: 0 },
        tweening: !1,
        alp: 0,
        oriAlp: 0.5,
        comfirm: { alp: 0 },
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.off.y = 500, this.size.x = this.boardIm.width, this.size.y = this.boardIm.height, ig.game.spawnEntity(EntityLoadCloseBut, 449, 71, { main: this.main, menu: this }), ig.game.spawnEntity(EntityLoadSlotBut, ig.system.width / 2 + 5, ig.system.height / 2 - 80 - 25, { main: this.main, menu: this, slot: 0 }), ig.game.spawnEntity(EntityLoadSlotBut, ig.system.width / 2 + 5, ig.system.height / 2 - 25 - 10, { main: this.main, menu: this, slot: 1 }), ig.game.spawnEntity(EntityLoadSlotBut, ig.system.width / 2 + 5, ig.system.height / 2 + 80 - 25 - 20, { main: this.main, menu: this, slot: 2 })) },
        tweenF: function(b) {
            switch (b) {
                case "pingConfirm":
                    this.comfirm.alp = 1;
                    this.tweener("comfirm", { alp: 0 }, 0.3, "resetConfirm", 5);
                    break;
                case "resetConfirm":
                    for (b = 0; b < this.tweens.length; b++) "comfirm" == this.tweens[b].targ && this.tweens[b].stop();
                    this.resetBut = ig.game.getEntitiesByType(EntityLoadResetBut);
                    for (b = this.comfirm.alp = 0; b < this.resetBut.length; b++) this.resetBut[b].comfirm = !1;
                    break;
                case "fadeIn":
                    this.tweening = !0;
                    this.tweener("this", { alp: 1 }, 0.2, "boardIn");
                    break;
                case "boardIn":
                    this.tweener("off", { y: -10 }, 0.2, "boardIn2");
                    break;
                case "boardIn2":
                    this.tweener("off", { y: 0 }, 0.2, "boardInDone");
                    break;
                case "boardInDone":
                    this.tweening = !1;
                    this.main.gamePaused = !0;
                    break;
                case "boardOut":
                    this.tweening = !0;
                    this.tweener("off", { y: -10 }, 0.2, "boardOut2");
                    break;
                case "boardOut2":
                    this.tweener("off", { y: 500 }, 0.2, "fadeOut");
                    break;
                case "fadeOut":
                    this.tweener("this", { alp: 0 }, 0.2, "boardOutDone");
                    this.pointer.letGo();
                    break;
                case "boardOutDone":
                    this.tweening = !1, this.main.gamePaused = !1
            }
        },
        update: function() { ig.global.wm || this.parent() },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.rendered = !0
        },
        draw: function() {
            this.parent();
            !ig.global.wm && 500 != this.off.y && (this.ctx.globalAlpha = this.alp * this.oriAlp, this.ctx.fillStyle = "black", this.ctx.fillRect(0, 0, ig.system.width, ig.system.height), this.ctx.globalAlpha = 1, this.drawer({ x: ig.system.width / 2, y: 0.5 * ig.system.height + this.off.y + 8, cent: !0, pic: this.boardIm, scX: 0.9, scY: 0.9 }), this.drawer({ x: ig.system.width / 2, y: 0.23 * ig.system.height + this.off.y + 8 - 20, cent: !0, pic: this.headerIm, scX: 0.9, scY: 0.9 }), this.textDraw({
                align: "center",
                tx: _STRINGS.Game.gameslot,
                x: ig.system.width / 2,
                y: 0.222 * ig.system.height +
                    this.off.y + 8 - 20,
                scX: 0.8,
                scY: 1,
                px: 48,
                col: "#1c2f28"
            }), this.textDraw({ align: "center", tx: _STRINGS.Game.comfirm, x: ig.system.width / 2, y: this.pos.y + 0.98 * this.size.y + this.off.y, scX: 0.8, scY: 1, px: 19, col: "#ff9314", alp: this.comfirm.alp }))
        }
    });
    EntityLoadCloseBut = EntityPlainBut.extend({
        zIndex: 2801,
        oriSc: 0.98,
        butIm: new ig.Image("media/graphics/sprites/upgrade/x_button.png"),
        oriStat: function() {
            this.pos.x = this.oriPos.x;
            this.pos.y = this.oriPos.y;
            this.sc = 1;
            this.show();
            this.pos.y = this.menu.off.y + this.oriPos.y
        },
        buttonTask: function() {!0 != this.menu.tweening && (this.sounder("click"), this.menu.tweenF("boardOut"), ig.game.showOverlay(["more-games"])) },
        update: function() {
            this.parent();
            this.pos.y = this.menu.off.y + this.oriPos.y
        },
        ready: function() { null == this.pointer && (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], this.base = ig.game.getEntitiesByType(EntityBase)[0]) }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-home").requires("game.entities.plain", "game.entities.home-but", "game.entities.settings", "game.entities.load-board").defines(function() {
    EntityPlainHome = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 1,
        sc: 2,
        size: { x: 50, y: 50 },
        gamePaused: !1,
        bgIm: new ig.Image("media/graphics/sprites/home/home-bg.png"),
        logoIm: new ig.Image("media/graphics/sprites/home/logo.png"),
        shineIm: new ig.Image("media/graphics/sprites/home/shine.png"),
        scX: 1,
        scY: 1,
        name: "home",
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), ig.game.redraw = !0, this.spawner(), this.logo = { scX: 1, scY: 1, shineX: -100 }, this.bg = { scX: 1, scY: 1.005 }) },
        spawner: function() {
            ig.game.spawnEntity(EntityPointer, 800, 800, { main: this });
            ig.game.spawnEntity(EntityPlayBut, 320, 280, { main: this });
            ig.game.spawnEntity(EntityOptionBut, 320, 340, { main: this });
            _SETTINGS.MoreGames.Enabled && ig.game.spawnEntity(EntityPlainButtonMoreGames, 320, 400, { main: this });
            ig.game.spawnEntity(EntitySettings, 0, 0, { main: this });
            ig.game.spawnEntity(EntityLoadBoard, 0, 0, { main: this })
        },
        tweenF: function(b) {
            switch (b) {
                case "shineLeft":
                    this.logo.shineX = -500;
                    this.tweener("logo", { shineX: this.logoIm.width + 20 }, 2, "expandLogo");
                    break;
                case "expandLogo":
                    this.tweener("logo", { scX: 0.95, scY: 0.95 }, 0.3, "shrinkLogo", 0.3);
                    break;
                case "shrinkLogo":
                    this.tweener("logo", { scX: 1, scY: 1 }, 0.25, "expandLogo2");
                    break;
                case "expandLogo2":
                    this.tweener("logo", { scX: 0.95, scY: 0.95 }, 0.3, "shrinkLogo2");
                    break;
                case "shrinkLogo2":
                    this.tweener("logo", { scX: 1, scY: 1 }, 0.25, "shineLeft");
                    break;
                case "bgFat":
                    this.tweener("bg", { scX: 1, scY: 1.01 }, 1, "bgTall");
                    break;
                case "bgTall":
                    this.tweener("bg", { scY: 1, scX: 1.005 }, 1, "bgFat")
            }
        },
        update: function() { ig.global.wm || this.parent() },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.tweenF("shineLeft");
            this.tweenF("bgTall")
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.drawer({ pic: this.bgIm, x: ig.system.width / 2, y: 0.5 * ig.system.height, cent: !0, scX: this.bg.scX, scY: this.bg.scY }), this.drawer({ ctx: ig.game.hidCtx, pic: this.logoIm, x: 10, y: 10, cent: !1 }), ig.game.hidCtx.save(), ig.game.hidCtx.globalCompositeOperation = "source-in", ig.game.hidCtx.drawImage(this.shineIm.data, this.logo.shineX, 10), ig.game.hidCtx.restore(), this.drawer({ pic: this.logoIm, x: ig.system.width / 2, y: 0.3 * ig.system.height, cent: !0, scX: this.logo.scX, scY: this.logo.scY }), this.ctxDrawer({ pic: ig.game.hidEle, sx: 0, sy: 0, sw: this.logoIm.width + 20, sh: this.logoIm.height + 20, x: ig.system.width / 2, y: 0.3 * ig.system.height, cent: !0, scX: this.logo.scX, scY: this.logo.scY }))
        }
    })
});
ig.baked = !0;
ig.module("game.levels.home").requires("impact.image", "game.entities.plain-home").defines(function() { LevelHome = { entities: [{ type: "EntityPlainHome", x: 0, y: 0 }], layer: [] } });
ig.baked = !0;
ig.module("game.entities.minion-add-but").requires("game.entities.plain-but").defines(function() {
    EntityMinionAddBut = EntityPlainBut.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        showBut: !1,
        size: { x: 50, y: 50 },
        gamePaused: !1,
        butIm: new ig.Image("media/graphics/sprites/game/add-minion.png"),
        moneyIm: new ig.Image("media/graphics/sprites/game/resources_mini_icon.png"),
        scX: 1,
        scY: 1,
        idleAlp: 1,
        moneyAlp: 1,
        init: function(b, c, d) { ig.global.wm || this.parent(b, c, d) },
        oriStat: function() { this.building.minionPrice = this.building.minionPrices[this.building.minionPriceIndex];!0 == this.main.userData[this.building.name].hide && this.hide() },
        getData: function(b) { this[b] = this.main.userData[this.building.name][b] || this[b] },
        setData: function(b) { this.main.userData[this.building.name][b] = this[b] },
        buttonTask: function() {
            if (0 != this.alp && !(ig.game.money < this.building.minionPrice) && !0 != this.main.showUpgradesMenu && !0 != this.main.gamePaused) {
                if (!0 == this.main.tutOn && (this.tut = ig.game.getEntitiesByType(EntityPlainTut)[0]))
                    if (4 == this.tut.seq || 6 == this.tut.seq) this.tut.nextTut();
                    else return;
                this.building.minionAmount >= ig.game.getEntitiesByType(EntityMinion).length ? (this.gui = ig.game.getEntitiesByType(EntityPlainGui)[0], this.gui.showMax()) : (ig.game.money -= this.building.minionPrice, this.main.userData.money = ig.game.money, this.main.userData.progress++, this.sounder("click"), this.building.minionAmount++, this.building.setData("minionAmount"), ig.game.spawnEntity(EntityPriceFader, this.pointer.pos.x + this.pointer.size.x / 2, this.pos.y, { main: this.main, money: -this.building.minionPrice, zIndex: this.zIndex + 1 }), 10 <= this.building.minionAmount ? (this.hide(), this.main.userData[this.building.name].hide = !0) : (this.building.minionPriceIndex++, this.building.minionPrice = this.building.minionPrices[this.building.minionPriceIndex], this.building.setData("minionPriceIndex")), this.main.saveGame())
            }
        },
        tweenF: function(b) {
            switch (b) {
                case "fadeOut":
                    this.tweener("this", { idleAlp: 0 }, 0.3);
                    break;
                case "fadeIn":
                    this.tweener("this", { idleAlp: 1 }, 0.3)
            }
        },
        update: function() { ig.global.wm || (this.parent(), this.moneyAlp = ig.game.money < this.building.minionPrice ? 0.7 : 1, this.alp = this.moneyAlp * this.idleAlp) },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        draw: function() {
            if (0 != this.alp && (this.parent(), !ig.global.wm)) {
                var b = this.building.minionPrice,
                    c = this.textMax({ tx: b, maxWidth: 0.6 * this.size.x, px: 14 }) * this.finalSc;
                this.textDraw({ tx: b, col: "black", x: this.center.x - 0.05 * this.size.x * this.finalSc, y: this.center.y + 0.14 * this.size.y * this.finalSc, px: 14, alp: this.alp, scX: 0.9 * c, scY: 1.2 * c })
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.minion-work-but").requires("game.entities.plain-but").defines(function() {
    EntityMinionWorkBut = EntityPlainBut.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        showBut: !1,
        size: { x: 50, y: 50 },
        gamePaused: !1,
        butIm: new ig.Image("media/graphics/sprites/game/callminion.png"),
        workingAlp: 1,
        idleAlp: 1,
        scX: 1,
        scY: 1,
        allowClick: !1,
        init: function(b, c, d) { ig.global.wm || this.parent(b, c, d) },
        buttonTask: function() {
            if (0 != this.alp && !0 != this.main.showUpgradesMenu && !0 != this.main.gamePaused && !(2 > this.building.state)) {
                if (!0 == this.main.tutOn)
                    if (this.tut = ig.game.getEntitiesByType(EntityPlainTut)[0], 1 == this.tut.seq || 7 == this.tut.seq) this.tut.nextTut();
                    else return;
                this.main.freeMinion.length < this.building.minionAmount ? (this.gui = ig.game.getEntitiesByType(EntityPlainGui)[0], this.gui.showBusy()) : (this.sounder("click"), this.building.summonMinion(), this.sounder("minion"))
            }
        },
        oriStat: function() {},
        tweenF: function(b) {
            switch (b) {
                case "fadeOut":
                    this.tweener("this", { workingAlp: 0 }, 0.3);
                    break;
                case "fadeIn":
                    this.tweener("this", { workingAlp: 1 }, 0.3)
            }
        },
        update: function() { ig.global.wm || (this.parent(), this.main.freeMinion.length >= this.building.minionAmount ? (this.idleAlp = 1, this.allowClick = !0) : this.allowClick = !1, this.alp = this.workingAlp * this.idleAlp) },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        draw: function() { 0 != this.alp && (this.parent(), this.textDraw({ tx: this.building.minionAmount, col: "white", x: this.pos.x + 0.46 * this.size.x, y: this.pos.y + 0.59 * this.size.y, px: 24, maxWidth: 0.5 * this.size.x, scX: 0.9 * this.finalSc, scY: 1.2 * this.finalSc, alp: this.alp })) }
    })
});
ig.baked = !0;
ig.module("game.entities.buildings-unlock-but").requires("game.entities.plain-but").defines(function() {
    EntityBuildingsUnlockBut = EntityPlainBut.extend({
        zIndex: 2090,
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: { x: 50, y: 50 },
        gamePaused: !1,
        butIm: new ig.Image("media/graphics/sprites/game/unlock.png"),
        textSc: 1,
        scX: 1,
        scY: 1,
        idleAlp: 1,
        moneyAlp: 1,
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.price = this.building.unlockPrice) },
        buttonTask: function() {
            !0 != this.main.tutOn && 0 != this.alp && (!0 != this.main.showUpgradesMenu && !0 != this.main.gamePaused && !(ig.game.money < this.building.unlockPrice) && !0 != this.tweening) && (ig.game.spawnEntity(EntityPriceFader, this.pointer.pos.x + this.pointer.size.x / 2, this.pos.y, { main: this.main, money: -this.building.unlockPrice, zIndex: this.zIndex + 1 }), this.sounder("click"), this.unlockUpgrades(), ig.game.money -= this.building.unlockPrice, this.main.userData.money = ig.game.money, this.main.userData.progress++, this.building.state++, this.building.changeState(), this.building.setData("state"), 5 > this.building.buildingId +
                1 && (this.base.buildings[this.building.buildingId + 1].state++, this.base.buildings[this.building.buildingId + 1].changeState(), this.base.buildings[this.building.buildingId + 1].setData("state")), this.main.saveGame(), this.hide())
        },
        unlockUpgrades: function() {
            var b;
            switch (this.building.buildingId) {
                case 1:
                    b = ["solar-road", "solar-resource", "unlock-discount", "minion-price"];
                    break;
                case 2:
                    b = ["mine-road", "mine-resource", "allx2", "minion-speed"];
                    break;
                case 3:
                    b = ["lab-road", "lab-resource", "allx4"];
                    break;
                case 4:
                    b = ["ruins-road", "ruins-resource", "final-upgrade"]
            }
            for (var c = 0; c < b.length; c++) {
                var d = this.upgrade.getIndex(b[c]);
                this.upgrade.upgradeList[d].unlocked = !0;
                this.upgrade.spawnUpgrades(d)
            }
            this.upgrade.saveResource()
        },
        oriStat: function() {},
        tweenF: function(b) {
            switch (b) {
                case "changePrice":
                    this.tweening = !0;
                    this.tweener("this", { textSc: 0 }, 0.1, "changePrice2", 0.5);
                    break;
                case "changePrice2":
                    this.building.unlockPrice *= this.building.discount;
                    this.tweener("this", { textSc: 1 }, 0.3, "doneTween");
                    break;
                case "doneTween":
                    this.tweening = !1
            }
        },
        update: function() { ig.global.wm || (this.parent(), this.moneyAlp = ig.game.money >= this.building.unlockPrice ? 1 : 0.7, this.alp = this.moneyAlp * this.idleAlp) },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.base = ig.game.getEntitiesByType(EntityBase)[0];
            this.upgrade = ig.game.getEntitiesByType(EntityUpgrade)[0]
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                var b = this.building.unlockName,
                    c = this.textMax({ tx: b, maxWidth: 0.79 * this.size.x, px: 14 }) * this.finalSc;
                this.textDraw({ tx: b, col: "white", x: this.center.x - 1.8 * this.finalSc, y: this.center.y - 12 * this.finalSc, px: 14, scX: 0.9 * c, scY: 1.2 * c, alp: this.alp });
                this.textDraw({ tx: this.building.unlockPrice, col: "black", x: this.center.x, y: this.center.y + 6 * 1.2 * this.finalSc, px: 16, scX: 0.9 * this.textSc * this.finalSc, scY: 1.2 * this.textSc * this.finalSc, alp: this.alp })
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buildings").requires("game.entities.plain", "game.entities.minion-add-but", "game.entities.minion-work-but", "game.entities.buildings-unlock-but").defines(function() {
    EntityBuildings = EntityPlain.extend({
        zIndex: 900,
        state: 0,
        states: ["locked", "unlockable", "basic", "upgraded"],
        alp: 0,
        discount: 0.75,
        upgradeBuilding: { queueUpgrade: !1, alp: 0.5, alp2: 0, show: !1, scX: 1, scY: 1 },
        checkUpgrade: !1,
        gaveDiscount: !1,
        allowWork: !0,
        oriPos: { x: 0, y: 0 },
        addButPos: { x: 0, y: 0 },
        workButPos: { x: 0, y: 0 },
        unlockButPos: { x: 0, y: 0 },
        grabPos: { x: 0, y: 0 },
        roadPos: { x: 0, y: 0 },
        basePos: { x: 0, y: 0 },
        scX: 1,
        scY: 1,
        minionInBuilding: 0,
        minions: [],
        expandQueue: [],
        tweening: !1,
        showUnlockBut: !1,
        showAddBut: !1,
        showWorkBut: !1,
        showRoad: !1,
        showBuilding: !1,
        minionAmount: 1,
        minionSpeed: 1,
        minionPrice: 10,
        resourcePrice: 0,
        unlockPrice: 25E3,
        resourceQuality: 0,
        resourceQualities: ["Basic", "Upgraded"],
        speeds: [0.028],
        speed: 0,
        quality: 0,
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.oriStat(), this.spawner(), this.changeState()) },
        getData: function(b) { this[b] = this.main.userData[this.name][b] || this[b] },
        setData: function(b) { this.main.userData[this.name][b] = this[b] },
        oriStat: function() {
            this.getData("state");
            this.getData("minionAmount");
            this.getData("minionPriceIndex");
            this.im = this.basicIm;
            this.unlockName = _STRINGS.Game[this.name + "Unlock"];
            this.speeds.push(0.95 * this.speeds[0]);
            this.speeds.push(0.5 * this.speeds[0])
        },
        spawner: function() {
            this.unlockBut = ig.game.spawnEntity(EntityBuildingsUnlockBut, this.unlockButPos.x, this.unlockButPos.y, { main: this.main, building: this });
            this.addBut = ig.game.spawnEntity(EntityMinionAddBut, this.addButPos.x, this.addButPos.y, { main: this.main, building: this });
            this.workBut = ig.game.spawnEntity(EntityMinionWorkBut, this.workButPos.x, this.workButPos.y, { main: this.main, building: this })
        },
        tweenF: function(b) {
            switch (b) {
                case "autoDelay":
                    this.tweener("this", {}, 3, "automate");
                    break;
                case "automate":
                    this.summonMinion();
                    break;
                case "expandRoad":
                    this.main.soundLooper("grow");
                    this.road.alp = 0.5;
                    this.tweener("road", { percent: 1, alp: 1 }, 1.5, "doneExpandRoad", 0.3);
                    break;
                case "doneExpandRoad":
                    this.road.clips = !1;
                    break;
                case "unlockBuilding":
                    this.tweener("this", { alp: 1, scX: 1.03, scY: 1.03 }, 0.2, "unlockBuilding2");
                    break;
                case "unlockBuilding2":
                    this.tweener("this", { scX: 1, scY: 1 }, 0.2);
                    break;
                case "upgradeBuilding":
                    this.upgradeBuilding.show = !0;
                    this.tweener("this", {}, 1.5, "upgradeBuilding2");
                    break;
                case "upgradeBuilding2":
                    this.main.soundLooper("robot");
                    this.tweener("this", { alp: 0, upgradeBuilding: { alp: 0, scX: 1.2, scY: 1.2, alp2: 1 } }, 0.5, "doneUpgradeBuilding");
                    break;
                case "doneUpgradeBuilding":
                    this.im = this.upgradeIm;
                    this.upgradeBuilding.show = !1;
                    this.upgradeBuilding.scX = 1;
                    this.alp = this.upgradeBuilding.scY = 1;
                    break;
                case "shrink":
                    this.tweening = !0;
                    this.tweener("this", { scX: 0.98, scY: 1.02 }, 0.2, "expand");
                    break;
                case "expand":
                    this.tweener("this", { scX: 1.02, scY: 0.98 }, 0.1, "shrink2");
                    break;
                case "shrink2":
                    this.tweener("this", { scX: 0.98, scY: 1.02 }, 0.2, "expand2");
                    break;
                case "expand2":
                    this.tweener("this", { scX: 1, scY: 1 }, 0.1, "shrink3");
                    break;
                case "shrink3":
                    this.tweener("this", { scX: 0.98, scY: 1.02 }, 0.2, "expand3");
                    break;
                case "expand3":
                    this.tweener("this", { scX: 1, scY: 1 }, 0.1, "checkQueue");
                    break;
                case "checkQueue":
                    0 < this.expandQueue.length && this.expandQueue.pop(), 0 < this.expandQueue.length ? this.tweenF("shrink") : this.tweening = !1
            }
        },
        changeState: function() {
            switch (this.states[this.state]) {
                case "unlockable":
                    this.showBuilding = !0;
                    this.alp = 0.5;
                    this.unlockBut.show();
                    break;
                case "basic":
                    this.showBuilding = !0, this.unlockBut.hide(), !0 != this.main.userData[this.name].hide && this.addBut.show(), this.workBut.show(), this.tweenF("unlockBuilding")
            }
        },
        summonMinion: function() {
            if (!1 != this.allowWork && !(2 > this.state)) {
                var b = this.main.freeMinion.length - this.minionAmount,
                    c = 0;
                if (this.main.freeMinion.length >= this.minionAmount) {
                    for (var d = this.main.freeMinion.length - 1; d >= b; d--) {
                        var f = this.main.freeMinion[d];
                        f.delaySeq = c;
                        f.work(this);
                        this.minions.push(this.main.freeMinion[d]);
                        this.main.freeMinion.splice(d, 1);
                        c++
                    }
                    this.allowWork = !1;
                    this.workBut.tweenF("fadeOut");
                    this.addBut.tweenF("fadeOut")
                }
            }
        },
        update: function() {!ig.global.wm && !0 != this.main.gamePaused && (this.parent(), !0 == this.road.queueUpgrade && !1 == this.main.showUpgradesMenu && (this.road.queueUpgrade = !1, this.tweenF("expandRoad")), !0 == this.upgradeBuilding.queueUpgrade && !1 == this.main.showUpgradesMenu && (this.upgradeBuilding.queueUpgrade = !1, this.tweenF("upgradeBuilding")), !1 == this.gaveDiscount && !0 == this.main.buildingPriceDelay && !1 == this.main.showUpgradesMenu && (this.gaveDiscount = !0, this.unlockBut.tweenF("changePrice")), !0 == this.tweening && this.main.soundLooper("machine")) },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.minion = ig.game.getEntitiesByType(EntityMinion)
        },
        drawRoad: function() {!0 == this.showRoad && (!0 == this.road.clips && (this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(this.road.clipRect.x, this.road.clipRect.y, this.road.clipRect.w, this.road.clipRect.h * this.road.percent), this.ctx.clip()), this.drawer({ pic: this.roadIm, x: this.road.x, y: this.road.y + this.road.offY, scX: this.road.scX, scY: this.road.scY, cent: !0, alp: this.road.alp }), !0 == this.road.clips && this.ctx.restore()) }
    })
});
ig.baked = !0;
ig.module("game.entities.buildings-farm").requires("game.entities.buildings").defines(function() {
    EntityBuildingsFarm = EntityBuildings.extend({
        basicIm: new ig.Image("media/graphics/sprites/buildings/farm_basic.png"),
        upgradeIm: new ig.Image("media/graphics/sprites/buildings/farm_upgraded.png"),
        roadIm: new ig.Image("media/graphics/sprites/buildings/road_farm.png"),
        state: 2,
        name: "farm",
        resourcePrices: [10, 20],
        buildingId: 0,
        delayResourcePercent: 0.5,
        speeds: [0.027],
        minionPrices: [40, 42, 44, 47, 50, 53, 56, 59, 63],
        minionPriceIndex: 0,
        unlockPrice: 0,
        road: { x: 0, y: 0, scX: 1, scY: 1, alp: 0, offY: 0, percent: 0, clips: !0, clipRect: { x: 246, y: 268, w: 158, h: 212 } },
        init: function(b, c, d) { this.parent(b, c, d) },
        oriStat: function() {
            this.parent();
            this.oriPos.x = ig.system.width / 2;
            this.oriPos.y = ig.system.height - this.im.height / 2 - 10;
            this.grabPos.x = this.oriPos.x;
            this.grabPos.y = this.oriPos.y + 100;
            this.roadPos.x = 270;
            this.roadPos.y = 216;
            this.road.x = 325;
            this.road.y = 365;
            this.workButPos.x = 265;
            this.workButPos.y = 328;
            this.unlockButPos.x = this.workButPos.x - 11;
            this.unlockButPos.y = this.workButPos.y + 10;
            this.addButPos.x = this.workButPos.x + 46 + 7;
            this.addButPos.y = this.workButPos.y + 10;
            this.basePos.x = 0.5 * ig.system.width;
            this.basePos.y = 0.4 * ig.system.height + 20
        },
        update: function() { ig.global.wm || this.parent() },
        draw: function() {!ig.global.wm && !0 == this.showBuilding && (this.drawer({ pic: this.im, x: ig.system.width / 2 - this.im.width / 2 * this.scX, y: ig.system.height - this.im.height * this.scY, cent: !1, alp: this.alp, scX: this.scX, scY: this.scY }), !0 == this.upgradeBuilding.show && (this.drawer({ pic: this.upgradeIm, x: ig.system.width / 2 - this.im.width / 2 * this.scX * this.upgradeBuilding.scX, y: ig.system.height - this.im.height * this.scY * this.upgradeBuilding.scY, cent: !1, alp: this.upgradeBuilding.alp, scX: this.scX * this.upgradeBuilding.scX, scY: this.scY * this.upgradeBuilding.scY }), this.drawer({ pic: this.upgradeIm, x: ig.system.width / 2 - this.im.width / 2 * this.scX, y: ig.system.height - this.im.height * this.scY, cent: !1, alp: this.upgradeBuilding.alp2, scX: this.scX, scY: this.scY }))) }
    })
});
ig.baked = !0;
ig.module("game.entities.buildings-lab").requires("game.entities.buildings").defines(function() {
    EntityBuildingsLab = EntityBuildings.extend({
        basicIm: new ig.Image("media/graphics/sprites/buildings/lab_basic.png"),
        upgradeIm: new ig.Image("media/graphics/sprites/buildings/lab_upgraded.png"),
        roadIm: new ig.Image("media/graphics/sprites/buildings/road_lab.png"),
        name: "lab",
        delayResourcePercent: 0.95,
        buildingId: 4,
        resourcePrices: [160, 320],
        minionPrices: [2560, 4096, 6553, 10484, 16774, 26838, 42940, 68704, 109926],
        minionPriceIndex: 0,
        unlockPrice: 3600,
        speeds: [0.039],
        road: { x: 0, y: 0, scX: 1, scY: 1, alp: 0, offY: 0, clips: !0, percent: 0, clipRect: { x: 476, y: 238, w: 166, h: 74 } },
        init: function(b, c, d) { this.parent(b, c, d) },
        oriStat: function() {
            this.parent();
            this.oriPos.x = ig.system.width - this.im.width / 2;
            this.oriPos.y = ig.system.height / 2;
            this.grabPos.x = this.oriPos.x + 100;
            this.grabPos.y = this.oriPos.y;
            this.roadPos.x = 440;
            this.roadPos.y = 202;
            this.road.x = 565;
            this.road.y = 279;
            this.workButPos.x = 500;
            this.workButPos.y = 211;
            this.unlockButPos.x = this.workButPos.x - 11;
            this.unlockButPos.y = this.workButPos.y + 10;
            this.addButPos.x = this.workButPos.x + 46 + 7;
            this.addButPos.y = this.workButPos.y + 10;
            this.basePos.x = 0.52 * ig.system.width;
            this.basePos.y = 0.4 * ig.system.height
        },
        update: function() { ig.global.wm || this.parent() },
        drawRoad: function() {
            !0 == this.showRoad && (!0 == this.road.clips && (this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(this.road.clipRect.x, this.road.clipRect.y, this.road.clipRect.w * this.road.percent, this.road.clipRect.h), this.ctx.clip()), this.drawer({
                pic: this.roadIm,
                x: this.road.x,
                y: this.road.y +
                    this.road.offY,
                scX: this.road.scX,
                scY: this.road.scY,
                cent: !0,
                alp: this.road.alp
            }), !0 == this.road.clips && this.ctx.restore())
        },
        draw: function() {
            !ig.global.wm && !0 == this.showBuilding && (this.drawer({ pic: this.im, x: ig.system.width - this.im.width * this.scX, y: ig.system.height / 2 - this.im.height / 2 * this.scY - 45, cent: !1, alp: this.alp, scX: this.scX, scY: this.scY }), !0 == this.upgradeBuilding.show && (this.drawer({
                pic: this.upgradeIm,
                x: ig.system.width - this.im.width * this.scX * this.upgradeBuilding.scX,
                y: ig.system.height / 2 - this.im.height /
                    2 * this.scY * this.upgradeBuilding.scY - 45,
                cent: !1,
                alp: this.upgradeBuilding.alp,
                scX: this.scX * this.upgradeBuilding.scX,
                scY: this.scY * this.upgradeBuilding.scY
            }), this.drawer({ pic: this.upgradeIm, x: ig.system.width - this.im.width * this.scX, y: ig.system.height / 2 - this.im.height / 2 * this.scY - 45, cent: !1, alp: this.upgradeBuilding.alp2, scX: this.scX, scY: this.scY })))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buildings-mine").requires("game.entities.buildings").defines(function() {
    EntityBuildingsMine = EntityBuildings.extend({
        basicIm: new ig.Image("media/graphics/sprites/buildings/mine_basic.png"),
        upgradeIm: new ig.Image("media/graphics/sprites/buildings/mine_upgraded.png"),
        roadIm: new ig.Image("media/graphics/sprites/buildings/road_mines.png"),
        name: "mine",
        delayResourcePercent: 0.6,
        buildingId: 2,
        resourcePrices: [40, 80],
        minionPrices: [260, 338, 439, 570, 741, 963, 1251, 1626, 2113],
        minionPriceIndex: 0,
        speeds: [0.033],
        unlockPrice: 1E3,
        road: { x: 0, y: 0, scX: 1, scY: 1, alp: 0, offY: 0, clips: !0, percent: 0, clipRect: { x: 19, y: 246, w: 237, h: 244 } },
        init: function(b, c, d) { this.parent(b, c, d) },
        oriStat: function() {
            this.parent();
            this.oriPos.x = this.im.width / 2;
            this.oriPos.y = ig.system.height - this.im.height / 2;
            this.grabPos.x = this.oriPos.x - 100;
            this.grabPos.y = this.oriPos.y + 100;
            this.roadPos.x = 185;
            this.roadPos.y = 211;
            this.road.x = 147;
            this.road.y = 346;
            this.workButPos.x = 67;
            this.workButPos.y = 304;
            this.unlockButPos.x = this.workButPos.x - 11;
            this.unlockButPos.y = this.workButPos.y + 10;
            this.addButPos.x = this.workButPos.x + 46 + 7;
            this.addButPos.y = this.workButPos.y + 10;
            this.basePos.x = 0.49 * ig.system.width;
            this.basePos.y = 0.4 * ig.system.height + 20
        },
        update: function() { ig.global.wm || this.parent() },
        draw: function() {!ig.global.wm && !0 == this.showBuilding && (this.drawer({ pic: this.im, x: 0, y: ig.system.height - this.im.height * this.scY, cent: !1, alp: this.alp, scX: this.scX, scY: this.scY }), !0 == this.upgradeBuilding.show && (this.drawer({ pic: this.upgradeIm, x: 0, y: ig.system.height - this.im.height * this.scY * this.upgradeBuilding.scY, cent: !1, alp: this.upgradeBuilding.alp, scX: this.scX * this.upgradeBuilding.scX, scY: this.scY * this.upgradeBuilding.scY }), this.drawer({ pic: this.upgradeIm, x: 0, y: ig.system.height - this.im.height * this.scY, cent: !1, alp: this.upgradeBuilding.alp2, scX: this.scX, scY: this.scY }))) }
    })
});
ig.baked = !0;
ig.module("game.entities.buildings-ruins").requires("game.entities.buildings").defines(function() {
    EntityBuildingsRuins = EntityBuildings.extend({
        basicIm: new ig.Image("media/graphics/sprites/buildings/ruins_basic.png"),
        upgradeIm: new ig.Image("media/graphics/sprites/buildings/ruins_upgraded.png"),
        roadIm: new ig.Image("media/graphics/sprites/buildings/road_ruins.png"),
        name: "ruins",
        delayResourcePercent: 0.5,
        buildingId: 3,
        resourcePrices: [80, 160],
        minionPrices: [870, 1261, 1828, 2650, 3842, 5570, 8076, 11710, 16979],
        minionPriceIndex: 0,
        unlockPrice: 1800,
        speeds: [0.036],
        zIndex: 10,
        road: { x: 0, y: 0, scX: 1, scY: 1, alp: 0, offY: 0, percent: 0, clips: !0, clipRect: { x: 0, y: 248, w: 164, h: 42 } },
        init: function(b, c, d) { this.parent(b, c, d) },
        oriStat: function() {
            this.parent();
            this.oriPos.x = this.im.width / 2;
            this.oriPos.y = ig.system.height / 2;
            this.grabPos.x = this.oriPos.x - 150;
            this.grabPos.y = this.oriPos.y - 30;
            this.roadPos.x = 139;
            this.roadPos.y = 204;
            this.road.x = 77;
            this.road.y = 269;
            this.workButPos.x = 26;
            this.workButPos.y = 108;
            this.unlockButPos.x = this.workButPos.x -
                11;
            this.unlockButPos.y = this.workButPos.y + 10;
            this.addButPos.x = this.workButPos.x + 46 + 7;
            this.addButPos.y = this.workButPos.y + 10;
            this.basePos.x = 0.48 * ig.system.width;
            this.basePos.y = 0.4 * ig.system.height
        },
        update: function() { ig.global.wm || this.parent() },
        drawRoad: function() {!0 == this.showRoad && (!0 == this.road.clips && (this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(this.road.clipRect.x + (1 - this.road.percent) * this.road.clipRect.w, this.road.clipRect.y, this.road.clipRect.w * this.road.percent, this.road.clipRect.h), this.ctx.clip()), this.drawer({ pic: this.roadIm, x: this.road.x, y: this.road.y + this.road.offY, scX: this.road.scX, scY: this.road.scY, cent: !0, alp: this.road.alp }), !0 == this.road.clips && this.ctx.restore()) },
        draw: function() {!ig.global.wm && !0 == this.showBuilding && (this.drawer({ pic: this.im, x: 0, y: ig.system.height / 2 - this.im.height / 2 * this.scY, cent: !1, alp: this.alp, scX: this.scX, scY: this.scY }), !0 == this.upgradeBuilding.show && (this.drawer({ pic: this.upgradeIm, x: 0, y: ig.system.height / 2 - this.im.height / 2 * this.scY * this.upgradeBuilding.scY, cent: !1, alp: this.upgradeBuilding.alp, scX: this.scX * this.upgradeBuilding.scX, scY: this.scY * this.upgradeBuilding.scY }), this.drawer({ pic: this.upgradeIm, x: 0, y: ig.system.height / 2 - this.im.height / 2 * this.scY, cent: !1, alp: this.upgradeBuilding.alp2, scX: this.scX, scY: this.scY }))) }
    })
});
ig.baked = !0;
ig.module("game.entities.buildings-solar").requires("game.entities.buildings").defines(function() {
    EntityBuildingsSolar = EntityBuildings.extend({
        basicIm: new ig.Image("media/graphics/sprites/buildings/solar_basic.png"),
        upgradeIm: new ig.Image("media/graphics/sprites/buildings/solar_upgraded.png"),
        roadIm: new ig.Image("media/graphics/sprites/buildings/road_solar.png"),
        name: "solar",
        delayResourcePercent: 0.6,
        state: 1,
        resourcePrices: [20, 40],
        buildingId: 1,
        minionPrices: [80, 92, 105, 120, 138, 158, 181, 208, 239],
        minionPriceIndex: 0,
        speeds: [0.03],
        unlockPrice: 50,
        road: { x: 0, y: 0, scX: 1, scY: 1, alp: 0, offY: 0, clips: !0, percent: 0, clipRect: { x: 356, y: 270, w: 284, h: 208 } },
        init: function(b, c, d) { this.parent(b, c, d) },
        oriStat: function() {
            this.parent();
            this.im = this.basicIm;
            this.oriPos.x = ig.system.width - this.im.width / 2;
            this.oriPos.y = ig.system.height - this.im.height / 2;
            this.grabPos.x = this.oriPos.x + 90;
            this.grabPos.y = this.oriPos.y + 150;
            this.roadPos.x = 367;
            this.roadPos.y = 209;
            this.road.x = 499;
            this.road.y = 350;
            this.workButPos.x = 465;
            this.workButPos.y = 332;
            this.unlockButPos.x = this.workButPos.x - 11;
            this.unlockButPos.y = this.workButPos.y + 10;
            this.addButPos.x = this.workButPos.x + 46 + 7;
            this.addButPos.y = this.workButPos.y + 10;
            this.basePos.x = 0.51 * ig.system.width;
            this.basePos.y = 0.4 * ig.system.height + 10
        },
        update: function() { ig.global.wm || this.parent() },
        draw: function() {!ig.global.wm && !0 == this.showBuilding && (this.drawer({ pic: this.im, x: ig.system.width - this.im.width * this.scX, y: ig.system.height - this.im.height * this.scY, cent: !1, alp: this.alp, scX: this.scX, scY: this.scY }), !0 == this.upgradeBuilding.show && (this.drawer({ pic: this.upgradeIm, x: ig.system.width - this.im.width * this.scX * this.upgradeBuilding.scX, y: ig.system.height - this.im.height * this.scY * this.upgradeBuilding.scY, cent: !1, alp: this.upgradeBuilding.alp, scX: this.scX * this.upgradeBuilding.scX, scY: this.scY * this.upgradeBuilding.scY }), this.drawer({ pic: this.upgradeIm, x: ig.system.width - this.im.width * this.scX, y: ig.system.height - this.im.height * this.scY, cent: !1, alp: this.upgradeBuilding.alp2, scX: this.scX, scY: this.scY }))) }
    })
});
ig.baked = !0;
ig.module("game.entities.over").requires("game.entities.plain", "game.entities.plain-but").defines(function() {
    EntityOver = EntityPlain.extend({
        zIndex: 2406,
        dustIm0: new ig.Image("media/graphics/sprites/game/dust1.png"),
        dustIm1: new ig.Image("media/graphics/sprites/game/dust2.png"),
        dustIm2: new ig.Image("media/graphics/sprites/game/dust3.png"),
        dustIm3: new ig.Image("media/graphics/sprites/game/dust4.png"),
        dustIm4: new ig.Image("media/graphics/sprites/game/dust5.png"),
        dustIm5: new ig.Image("media/graphics/sprites/game/dust6.png"),
        boardIm: new ig.Image("media/graphics/sprites/setting/board.png"),
        headerIm: new ig.Image("media/graphics/sprites/upgrade/header.png"),
        off: { x: 0, y: 500 },
        dusts: [],
        showDust: !1,
        alp: 0,
        oriAlp: 0.5,
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), ig.game.spawnEntity(EntitySettingCloseBut, 449, 91, { main: this.main, menu: this }), ig.game.spawnEntity(EntityOverHomeBut, 320, 310, { main: this.main, menu: this })) },
        tweenF: function(b, c) {
            switch (b) {
                case "fireworks":
                    this[c].tweening = !0;
                    var d = 40 + 20 * Math.random(),
                        f = 360 * (360 * (this[c].index % 10 / 10) / Math.PI);
                    this.tweener(c, { x: this[c].x + Math.cos(f) * d, y: this[c].y + Math.sin(f) * d, alp: 1 }, 3, "resetFireworks");
                    break;
                case "resetFireworks":
                    this[c].tweening = !1;
                    break;
                case "fadeIn":
                    this.tweening = !0;
                    this.main.overMenu = !0;
                    this.tweener("this", { alp: 1 }, 0.2, "boardIn");
                    break;
                case "fadeIn2":
                    this.tweener("this", {}, 2, "fadeIn3");
                    break;
                case "fadeIn3":
                    this.tweening = !0;
                    this.main.soundLooper("magic");
                    this.main.overMenu = !0;
                    this.tweener("this", { alp: 1 }, 0.2, "boardIn");
                    break;
                case "boardIn":
                    this.tweener("off", { y: -10 }, 0.2,
                        "boardIn2");
                    break;
                case "boardIn2":
                    this.tweener("off", { y: 0 }, 0.2, "boardInDone");
                    break;
                case "boardInDone":
                    this.tweening = !1;
                    break;
                case "boardOut":
                    this.tweening = !0;
                    this.tweener("off", { y: -10 }, 0.2, "boardOut2");
                    break;
                case "boardOut2":
                    this.tweener("off", { y: 500 }, 0.2, "fadeOut");
                    break;
                case "fadeOut":
                    this.tweener("this", { alp: 0 }, 0.2, "boardOutDone");
                    break;
                case "boardOutDone":
                    this.tweening = !1, this.main.gamePaused = !1, this.main.overMenu = !1
            }
        },
        createDust: function() {
            var b = this.dusts.length + 0;
            if (20 > b) {
                Math.random();
                Math.random();
                var c;
                0 == b % 20 && (Math.random(), Math.random(), c = 0.5 + 2 * Math.random());
                this["dust" + b] = {};
                this["dust" + b].im = this["dustIm" + Math.floor(6 * Math.random())];
                this["dust" + b].x = Math.random() * ig.system.width;
                this["dust" + b].y = Math.random() * ig.system.height;
                this["dust" + b].duration = c;
                this["dust" + b].sc = 0.5 + 1 * Math.random();
                this["dust" + b].rot = 360 * Math.random();
                this["dust" + b].alp = 1 * Math.random();
                this["dust" + b].velX = -0.5 + 1 * Math.random();
                this["dust" + b].velY = 1 * Math.random();
                this["dust" + b].rotSpeed = 3 * Math.random();
                this["dust" +
                    b].tweening = !1;
                this["dust" + b].index = b;
                this.dusts.push(this["dust" + b])
            } else this.showDust = !0
        },
        update: function() {
            if (!ig.global.wm && (this.parent(), this.createDust(), !0 == this.showDust))
                for (var b = 0; b < this.dusts.length; b++)
                    if (!1 == this["dust" + b].tweening) {
                        this["dust" + b].x += this["dust" + b].velX;
                        this["dust" + b].y += this["dust" + b].velY;
                        this["dust" + b].rot = (this["dust" + b].rot + this["dust" + b].rotSpeed) % 360;
                        if (-10 > this["dust" + b].x || this["dust" + b].x > ig.system.width + 10) this["dust" + b].y = 0, this["dust" + b].x = Math.random() * ig.system.width, this["dust" + b].velX = -0.5 + 1 * Math.random(), this["dust" + b].velY = 1 * Math.random(), this["dust" + b].sc = 1 * Math.random();
                        if (-10 > this["dust" + b].y || this["dust" + b].y > ig.system.height + 10) this["dust" + b].y = 0, this["dust" + b].x = Math.random() * ig.system.width, this["dust" + b].velX = -0.5 + 1 * Math.random(), this["dust" + b].velY = 1 * Math.random(), this["dust" + b].sc = 1 * Math.random();
                        this["dust" + b].count--;
                        0 > this["dust" + b].count && (this["dust" + b].velX += -0.5 + 1 * Math.random(), this["dust" + b].velY += 1 * Math.random(), this["dust" +
                            b].count = 1E3 * Math.random())
                    }
        },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                this.ctx.globalAlpha = this.alp * this.oriAlp;
                this.ctx.fillStyle = "black";
                this.ctx.fillRect(0, 0, ig.system.width, ig.system.height);
                if (!0 == this.showDust)
                    for (var b = 0; b < this.dusts.length; b++) this.drawer2({ pic: this["dust" + b].im, x: this["dust" + b].x, y: this["dust" + b].y, scX: this["dust" + b].sc, scY: this["dust" + b].sc, alp: this["dust" + b].alp, cent: !0, rot: this["dust" + b].rot });
                this.drawer({ x: ig.system.width / 2, y: 0.5 * ig.system.height + this.off.y + 8, cent: !0, pic: this.boardIm, scX: 0.9, scY: 0.9 });
                this.drawer({ x: ig.system.width / 2, y: 0.23 * ig.system.height + this.off.y + 8, cent: !0, pic: this.headerIm, scX: 0.9, scY: 0.9 });
                this.textDraw({ align: "center", tx: _STRINGS.Game.over, x: ig.system.width / 2, y: 0.222 * ig.system.height + this.off.y + 8, scX: 0.8, scY: 1, px: 48, col: "#1c2f28" });
                this.textDraw({ align: "center", tx: _STRINGS.Game.minions + this.main.userData.minions, x: ig.system.width / 2, y: 0.35 * ig.system.height + this.off.y, scX: 0.8, scY: 1, px: 21, col: "#a8d8a6", maxWidth: 0.7 * this.boardIm.width });
                this.textDraw({ align: "center", tx: _STRINGS.Game.timetaken, x: ig.system.width / 2, y: 0.435 * ig.system.height + this.off.y, scX: 0.8, scY: 1, px: 21, col: "#a8d8a6", maxWidth: 0.7 * this.boardIm.width });
                this.textDraw({ align: "center", tx: this.timitizer(ig.game.playTime), x: ig.system.width / 2, y: 0.49 * ig.system.height + this.off.y, scX: 0.8, scY: 1, px: 40, col: "#a8d8a6", maxWidth: 0.7 * this.boardIm.width });
                this.textDraw({
                    align: "center",
                    tx: _STRINGS.Game.progress + (100 * (this.main.userData.progress /
                        115)).toFixed(1) + "%",
                    x: ig.system.width / 2,
                    y: 0.585 * ig.system.height + this.off.y,
                    scX: 0.8,
                    scY: 1,
                    px: 21,
                    col: "#a8d8a6",
                    maxWidth: 0.7 * this.boardIm.width
                })
            }
        }
    });
    EntityOverCloseBut = EntityPlainBut.extend({
        zIndex: 2407,
        oriSc: 0.98,
        butIm: new ig.Image("media/graphics/sprites/upgrade/x_button.png"),
        oriStat: function() {
            this.pos.x = this.oriPos.x;
            this.pos.y = this.oriPos.y;
            this.sc = 1;
            this.show()
        },
        buttonTask: function() {!0 != this.menu.tweening && (this.menu.tweenF("boardOut"), ig.game.showOverlay(["more-games"])) },
        update: function() {
            this.parent();
            this.pos.y = this.menu.off.y + this.oriPos.y
        },
        ready: function() { null == this.pointer && (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], this.base = ig.game.getEntitiesByType(EntityBase)[0]) }
    });
    EntityOverHomeBut = EntityPlainBut.extend({
        zIndex: 2407,
        oriSc: 0.98,
        butIm: new ig.Image("media/graphics/sprites/setting/main_menu.png"),
        doTask: !1,
        oriStat: function() {
            this.sc = 1;
            this.show();
            this.size.x += 40;
            this.size.y += 5;
            this.oriPos.x -= this.size.x / 2;
            this.pos.x = this.oriPos.x;
            this.pos.y = this.oriPos.y
        },
        buttonTask: function() {!0 != this.menu.tweening && (this.menu.tweenF("boardOut"), this.doTask = !0) },
        draw: function() { this.textDraw({ tx: _STRINGS.Game.menu, col: "#d87c10", x: this.pos.x + this.size.x / 2, y: this.pos.y + this.size.y / 2, px: 50, scX: 0.8 * this.finalSc, scY: this.finalSc }) },
        update: function() {
            this.parent();
            this.pos.y = this.menu.off.y + this.oriPos.y;
            !0 == this.doTask && !1 == this.menu.tweening && ig.game.director.jumpTo(LevelHome)
        },
        ready: function() { null == this.pointer && (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], this.base = ig.game.getEntitiesByType(EntityBase)[0]) }
    })
});
ig.baked = !0;
ig.module("game.entities.fireworks").requires("game.entities.plain").defines(function() {
    EntityFireworks = EntityPlain.extend({
        zIndex: 2408,
        dustIm0: new ig.Image("media/graphics/sprites/game/dust1.png"),
        dustIm1: new ig.Image("media/graphics/sprites/game/dust2.png"),
        dustIm2: new ig.Image("media/graphics/sprites/game/dust3.png"),
        dustIm3: new ig.Image("media/graphics/sprites/game/dust4.png"),
        dustIm4: new ig.Image("media/graphics/sprites/game/dust5.png"),
        dustIm5: new ig.Image("media/graphics/sprites/game/dust6.png"),
        totalDust: 21,
        dusts: [],
        radius: 10,
        finishedDust: [],
        startDust: { x: 0, y: 0, alp: 1 },
        sLoop: { fireworks: { duration: 1 } },
        center: { x: 0, y: 0 },
        init: function(b, c, d) {
            if (!ig.global.wm) {
                this.parent(b, c, d);
                for (b = 0; b < this.totalDust; b++) this["dust" + b] = {}, this["dust" + b].index = b, this["dust" + b].name = "dust" + b, this.dusts.push(this["dust" + b]);
                this.startFireworks()
            }
        },
        startFireworks: function() {
            this.finishedDust.length = 0;
            this.tweenF("shootfireworksDelay")
        },
        oriStat: function() { this.radius = 2 + 10 * Math.random(); for (var b = 0; b < this.dusts.length; b++) this.dustStat(this.dusts[b]) },
        dustStat: function(b) {
            b.x = this.center.x;
            b.y = this.center.y;
            b.sc = 2;
            b.alp = 1;
            b.rot = 0;
            b.im = this["dustIm" + Math.floor(6 * Math.random())];
            b.percent = 0;
            this.tweenF("fireworks", b.name)
        },
        tweenF: function(b, c) {
            switch (b) {
                case "shootfireworksDelay":
                    this.startDust.alp = 0;
                    this.tweener2("startDust", {}, 4 * Math.random(), "shootfireworks");
                    break;
                case "shootfireworks":
                    this.startDust.alp = 1;
                    this.center.x = Math.random() * ig.system.width;
                    this.center.y = 0.3 * Math.random() * ig.system.height;
                    if ((this.congrats = ig.game.getEntitiesByType(EntityCongrats)[0]) && !0 == this.congrats.tweening) this.center.y = 0.2 * ig.system.height + 0.3 * Math.random() * ig.system.height;
                    this.startDust.x = this.center.x - 100 + 200 * Math.random();
                    this.startDust.y = this.center.y + 100 + 100 * Math.random();
                    this.tweener2("startDust", { x: this.center.x, y: this.center.y, alp: 1 }, 0.5, "prepareFireworks");
                    break;
                case "prepareFireworks":
                    this.startDust.alp = 0;
                    this.oriStat();
                    break;
                case "fireworks":
                    var d = 360 * (this[c].index % (this.dusts.length / 3) / (this.dusts.length / 3));
                    this[c].degree = d;
                    this[c].tweening = !0;
                    if (1 == this[c].index %
                        3) {
                        var f = 3 * this.radius;
                        this[c].sc = 1.5
                    } else 2 == this[c].index % 3 ? (f = 5 * this.radius, this[c].sc = 1.3) : (f = 7 * this.radius, this[c].sc = 1);
                    this[c].radius = f;
                    var g = 0.7;
                    if ((this.congrats = ig.game.getEntitiesByType(EntityCongrats)[0]) && !0 == this.congrats.tweening) this[c].sc += 1, g = 0.4, f += 3;
                    d = d / 180 * Math.PI;
                    this.soundLooper("fireworks");
                    this.tweener2(c, { x: this[c].x + Math.cos(d) * f, y: this[c].y + Math.sin(d) * f, rot: 360, sc: 0.3, percent: 1 }, g, "offTween");
                    break;
                case "offTween":
                    this[c].tweening = !1, this[c].alp = 0, this.finishedDust.push(this[c])
            }
        },
        update: function() { ig.global.wm || (this.parent(), this.finishedDust.length == this.dusts.length && this.startFireworks()) },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                this.drawer({ pic: this.dustIm1, x: this.startDust.x, y: this.startDust.y, alp: this.startDust.alp, scX: 0.7, scY: 0.7, cent: !0 });
                for (var b = 0; b < this.dusts.length; b++) {
                    this["dust" + b].degree += 1;
                    this["dust" + b].radian = this["dust" + b].degree / 180 * Math.PI;
                    if (void 0 == this["dust" + b].im) break;
                    this.drawer2({ pic: this["dust" + b].im, x: this["dust" + b].x, y: this["dust" + b].y, scX: this["dust" + b].sc, scY: this["dust" + b].sc, alp: this["dust" + b].alp, cent: !0, rot: this["dust" + b].rot })
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.congrats").requires("game.entities.plain").defines(function() {
    EntityCongrats = EntityPlain.extend({
        zIndex: 2081,
        letter: [],
        letters: [],
        idleSc: 1,
        textSize: 65,
        tweening: !1,
        barSc: 0,
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.prepareLetters({ word: _STRINGS.Game.congrats, name: "congrats", maxWidth: 0.7 * ig.system.width, px: this.textSize, scX: 0.9, tweenF: "congratsFadeIn", offX: 0, offY: 200 }), this.prepareLetters({ word: _STRINGS.Game.success, name: "success", maxWidth: 0.7 * ig.system.width, px: this.textSize, scX: 0.9, offX: 500, offY: 0 })) },
        prepareLetters: function(b) {
            this[b.name] = {};
            var c = this[b.name];
            ig.merge(c, b);
            c.characters = c.word.split("");
            c.idleSc = 1;
            c.letters = [];
            this.textSet(c.px, "white");
            c.wordWidth = this.textW(c.word) * c.scX;
            c.wordWidth > c.maxWidth && (c.idleSc = c.maxWidth / c.wordWidth);
            for (b = 0; b < c.characters.length; b++) {
                this[c.name + b] = {};
                var d = this[c.name + b],
                    f = ig.system.width / 2 - c.wordWidth * c.idleSc / 2,
                    g = this.textW(c.word.slice(0, b + 1)) * c.scX * c.idleSc,
                    m = 0.5 * (this.textW(c.characters[b]) * c.scX) * c.idleSc;
                d.targX = f + g - m;
                d.x = d.targX;
                d.alphabet = c.characters[b];
                d.sc = 0;
                d.index = b;
                d.offX = c.offX;
                d.offY = c.offY;
                d.alp = 0;
                d.name = c.name + b;
                c.letters.push(d);
                c.tweenF && this.tweenF(c.tweenF, d.name)
            }
        },
        tweenF: function(b, c) {
            switch (b) {
                case "congratsFadeIn":
                    this.tweening = !0;
                    this.main.soundLooper("magic");
                    this.tweener("this", { barSc: 1 }, 0.5);
                    this.tweener(c, { sc: 1.2, offY: -10 }, 0.2, "congratsFadeIn2", 0.1 * this[c].index + 1);
                    break;
                case "congratsFadeIn2":
                    this.tweener(c, { alp: 1, sc: 1, offY: 0 }, 0.2, "stay");
                    this.sounder("word");
                    break;
                case "stay":
                    if (this[c].index == this.congrats.letters.length - 1)
                        for (var d = 0; d < this.success.letters.length; d++) this.tweenF("successFadeIn", this.success.letters[d].name);
                    break;
                case "congratsFadeOut":
                    if (this[c].index == this.success.letters.length - 1)
                        for (d = 0; d < this.congrats.letters.length; d++) this.tweener(this.congrats.letters[d].name, { alp: 0, offX: 100 }, 0.1, "congratsFadeOut2", (this.congrats.letters.length - this.congrats.letters[d].index) * (1 / this.congrats.letters.length) + 0.1);
                    break;
                case "congratsFadeOut2":
                    this[c].index == this.congrats.letters.length - 1 && this.tweener(c, {}, 0.8, "keepBar");
                    break;
                case "keepBar":
                    this.tweener("this", { barSc: 0 }, 0.5, "finish");
                    break;
                case "finish":
                    this.tweening = !1;
                    this.over = ig.game.getEntitiesByType(EntityOver)[0];
                    this.over.tweenF("fadeIn");
                    this.kill();
                    break;
                case "successFadeIn":
                    this.tweening = !0;
                    this.tweener(c, { alp: 1, sc: 1.3, offX: 0 }, 0.2, "successFadeIn2", 0.05 * this[c].index);
                    break;
                case "successFadeIn2":
                    this.tweener(c, { alp: 1, sc: 1, offX: 0 }, 0.2);
                    this.sounder("word");
                    if (this[c].index == this.success.letters.length -
                        1)
                        for (d = 0; d < this.success.letters.length; d++) this.tweenF("successFadeOut", this.success.letters[d].name);
                    break;
                case "successFadeOut":
                    this.tweener(c, {}, 1 * (this.success.letters.length - this[c].index) / this.success.letters.length + 5, "successFadeOut1");
                    break;
                case "successFadeOut1":
                    this.main.soundLooper("magic");
                    this.tweening = !0;
                    this.tweener(c, { alp: 0, sc: 1.3, offX: 500 }, 0.3, "successFadeOut2");
                    break;
                case "successFadeOut2":
                    this.tweener(c, { alp: 0, sc: 0, offX: 500 }, 0.2, "congratsFadeOut")
            }
        },
        update: function() {
            ig.global.wm ||
                this.parent()
        },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        quickText: function(b) { for (var c = 0; c < this[b].letters.length; c++) this.textDraw({ tx: this[b + c].alphabet, x: this[b + c].x, y: 0.4 * ig.system.height + this[b + c].offY, scX: this[b].idleSc * this[b].scX * this[b + c].sc, scY: this[b].idleSc * this[b + c].sc, col: "white", px: this.textSize, stroke: !0, strokeColour: "#9f0a01", strokeLine: 8, strokeAlp: this[b + c].alp, alp: this[b + c].alp }) },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                this.ctx.globalAlpha = 0.5;
                this.ctx.fillStyle = "black";
                this.ctx.fillRect(ig.system.width / 2 - ig.system.width * this.barSc / 2, 0.44 * ig.system.height - 0.3 * ig.system.height / 2 - 2, ig.system.width * this.barSc, 0.3 * ig.system.height);
                for (var b = "congrats", c = 0; c < this[b].letters.length; c++) this.textDraw({ tx: this[b + c].alphabet, x: this[b + c].x + this[b + c].offX, y: 0.4 * ig.system.height + this[b + c].offY, scX: this[b].idleSc * this[b].scX * this[b + c].sc, scY: this[b].idleSc * this[b + c].sc, col: "white", px: this.textSize, stroke: !0, strokeColour: "#9f0a01", strokeLine: 8, strokeAlp: this[b + c].alp, alp: this[b + c].alp });
                b = "success";
                for (c = 0; c < this[b].letters.length; c++) this.textDraw({ tx: this[b + c].alphabet, x: this[b + c].x + this[b + c].offX, y: 0.49 * ig.system.height + this[b + c].offY, scX: this[b].idleSc * this[b].scX * this[b + c].sc, scY: this[b].idleSc * this[b + c].sc, col: "#1c2f28", stroke: !0, strokeColour: "#ffde5a", strokeLine: 10, strokeAlp: this[b + c].alp, px: Math.floor(0.8 * this.textSize), alp: this[b + c].alp })
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.base").requires("game.entities.plain", "game.entities.over", "game.entities.fireworks", "game.entities.congrats").defines(function() {
    EntityBase = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 10,
        checkUpgrade: !1,
        scX: 1,
        scY: 1,
        minionDiscount: !1,
        oriPos: { x: 0, y: 0 },
        buildings: [],
        baseIm: new ig.Image("media/graphics/sprites/base/base.png"),
        rayIm: new ig.Image("media/graphics/sprites/game/shine.png"),
        glowIm: new ig.Image("media/graphics/sprites/base/finalglow.png"),
        resource25Im: new ig.Image("media/graphics/sprites/base/allx25.png"),
        resource50Im: new ig.Image("media/graphics/sprites/base/allx50.png"),
        priceIm: new ig.Image("media/graphics/sprites/base/minion-price.png"),
        speedIm: new ig.Image("media/graphics/sprites/base/minion-speed.png"),
        discountIm: new ig.Image("media/graphics/sprites/base/unlock-discount.png"),
        finalIm: new ig.Image("media/graphics/sprites/base/final_upgrade.png"),
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.oriStat()) },
        oriStat: function() {
            this.oriPos.x = ig.system.width / 2 + 5;
            this.oriPos.y = ig.system.height /
                2 - 40;
            this.ray = { alp: 0, scX: 0, scY: 0, rot: 0, turn: !1 };
            this.resource25 = { name: "resource25", clips: !0, queueUpgrade: !1, offY: this.resource25Im.height, show: !1, x: 320, y: 128 + this.resource25Im.height / 2, scX: 0, scY: 0, im: this.resource25Im, clipRect: { x: 270, y: 88, w: 96, h: 96 } };
            this.resource50 = { name: "resource50", clips: !0, queueUpgrade: !1, offY: this.resource50Im.height, show: !1, x: 382, y: 113, scX: 0, scY: 0, im: this.resource50Im, clipRect: { x: 330, y: 47, w: 100, h: 140 } };
            this.price = { name: "price", clips: !0, queueUpgrade: !1, offY: this.priceIm.height, show: !1, x: 255, y: 131, scX: 0, scY: 0, im: this.priceIm, clipRect: { x: 214, y: 48, w: 88, h: 155 } };
            this.speed = { name: "speed", clips: !0, queueUpgrade: !1, offY: this.speedIm.height, show: !1, x: 418, y: 150, scX: 0, scY: 0, im: this.speedIm, clipRect: { x: 352, y: 106, w: 128, h: 94 } };
            this.unlockdiscount = { name: "unlockdiscount", clips: !0, queueUpgrade: !1, offY: this.discountIm.height, show: !1, x: 235, y: 167, scX: 0, scY: 0, im: this.discountIm, clipRect: { x: 168, y: 123, w: 118, h: 82 } };
            this.final = { name: "final", clips: !0, queueUpgrade: !1, offY: this.finalIm.height, show: !1, x: 320, y: 128 + this.finalIm.height / 2, scX: 0, scY: 0, im: this.finalIm, shineAlp: 0.4, clipRect: { x: 270, y: 88, w: 96, h: 96 } };
            this.back = [this.unlockdiscount, this.resource50, this.price, this.speed];
            this.front = [this.resource25, this.final];
            this.allBuildings = [this.unlockdiscount, this.resource50, this.price, this.speed, this.resource25, this.final]
        },
        tweenF: function(b, c) {
            switch (b) {
                case "growBuilding":
                    this.sounder("woosh");
                    "resource25" == c || "final" == c ? !0 == this.final.show && "resource25" == c || (!0 == this.resource25.show && "final" == c && (this.resource25.clips = !0, this.tweener("resource25", { offY: this.resource25Im.height, scX: 0, scY: 0 }, 0.2, "offClipping")), this.tweener(c, { offY: 0, scX: 1, scY: 1 }, 1, "offClipping")) : this.tweener(c, { offY: 0, scX: 1, scY: 1 }, this[c].im.height / 80, "offClipping");
                    break;
                case "offClipping":
                    this[c].clips = !1;
                    "final" == this[c].name && this.tweenF("winningRay");
                    break;
                case "winningRay":
                    this.main.gameCompleted = !0;
                    this.ray.turn = !0;
                    this.tweener("ray", { alp: 1, scX: 1, scY: 1 }, 0.3, "raySmall");
                    this.tweener("this", {}, 0.3, "globeSmall");
                    break;
                case "raySmall":
                    this.tweener("ray", { scX: 0.5, scY: 0.5 }, 1, "rayBig");
                    break;
                case "rayBig":
                    this.tweener("ray", { scX: 1, scY: 1 }, 2, "raySmall");
                    break;
                case "globeSmall":
                    this.tweener("final", { scX: 1, scY: 1 }, 0.2, "globeBig");
                    break;
                case "globeBig":
                    this.tweener("final", { scX: 1.03, scY: 1.03 }, 0.2, "globeSmall2");
                    break;
                case "globeSmall2":
                    this.tweener("final", { scX: 1, scY: 1 }, 0.2, "globeBig2");
                    break;
                case "globeBig2":
                    this.tweener("final", { scX: 1.03, scY: 1.03 }, 0.2, "globeSmall3");
                    break;
                case "globeSmall3":
                    this.tweener("final", { scX: 1, scY: 1 }, 0.5, "globeBig3");
                    break;
                case "globeBig3":
                    this.tweener("final", { scX: 1.03, scY: 1.03 }, 0.5, "globeSmall");
                    break;
                case "fat":
                    for (var d = 0; d < this.tweens.length; d++) "this" == this.tweens[d].targ && this.tweens[d].stop();
                    this.tweener("this", { scY: 0.9, scX: 0.9 }, 0.1, "tall");
                    break;
                case "tall":
                    this.tweener("this", { scX: 1.1, scY: 1.1 }, 0.1, "normal");
                    break;
                case "normal":
                    this.tweener("this", { scY: 1, scX: 1 }, 0.1, "idle")
            }
        },
        update: function() {
            if (!ig.global.wm && (this.parent(), !0 == this.checkUpgrade && !1 == this.main.showUpgradesMenu)) {
                for (var b = 0; b < this.allBuildings.length; b++) !0 == this.allBuildings[b].queueUpgrade && (this.allBuildings[b].queueUpgrade = !1, this.main.base.tweenF("growBuilding", this.allBuildings[b].name));
                this.checkUpgrade = !1
            }
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.farm = ig.game.getEntitiesByType(EntityBuildingsFarm)[0];
            this.solar = ig.game.getEntitiesByType(EntityBuildingsSolar)[0];
            this.mine = ig.game.getEntitiesByType(EntityBuildingsMine)[0];
            this.ruins = ig.game.getEntitiesByType(EntityBuildingsRuins)[0];
            this.lab = ig.game.getEntitiesByType(EntityBuildingsLab)[0];
            this.buildings = [this.farm, this.solar, this.mine, this.ruins, this.lab];
            this.main.buildings = [this.farm, this.solar, this.mine, this.ruins, this.lab]
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                !0 == this.ray.turn && (this.ray.rot = (this.ray.rot + 1) % 360);
                for (var b = 0; b < this.buildings.length; b++) this.buildings[b].drawRoad();
                for (b = 0; b < this.back.length; b++) !0 == this.back[b].show && (!0 == this.back[b].clips && (this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(this.back[b].clipRect.x, this.back[b].clipRect.y, this.back[b].clipRect.w, this.back[b].clipRect.h), this.ctx.clip()), this.drawer({ cent: !0, pic: this.back[b].im, x: this.back[b].x, y: this.back[b].y + this.back[b].offY, scX: this.back[b].scX, scY: this.back[b].scY }), !0 == this.back[b].clips && this.ctx.restore());
                this.drawer({ pic: this.baseIm, x: this.oriPos.x, y: this.oriPos.y, scX: this.scX, scY: this.scY, cent: !0 });
                for (b = 0; b < this.front.length; b++) !0 == this.front[b].show && (!0 == this.front[b].clips && (this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(this.front[b].clipRect.x, this.front[b].clipRect.y, this.front[b].clipRect.w, this.front[b].clipRect.h), this.ctx.clip()), "final" == this.front[b].name && this.drawer2({ cent: !0, pic: this.rayIm, x: this.front[b].x + 2, y: this.front[b].y + this.front[b].offY - this.front[b].im.width / 2 - 3, scX: this.ray.scX * this.scX, scY: this.ray.scY * this.scY, alp: this.ray.alp, rot: this.ray.rot }), this.ctx.drawImage(this.front[b].im.data, this.front[b].x - this.front[b].scX * this.scX * this.front[b].im.width / 2, this.front[b].y + this.front[b].offY - this.front[b].scY * this.scY * this.front[b].im.height, this.front[b].scX * this.scX * this.front[b].im.width, this.front[b].scY * this.scY * this.front[b].im.height), "final" == this.front[b].name && (this.ctx.globalAlpha = this.front[b].shineAlp, this.ctx.drawImage(this.glowIm.data, this.front[b].x - this.front[b].scX * this.scX * this.front[b].im.width / 2, this.front[b].y + this.front[b].offY - this.front[b].scY * this.scY * this.front[b].im.height, this.front[b].scX * this.scX * this.front[b].im.width, this.front[b].scY * this.scY * this.front[b].im.height), this.ctx.globalAlpha = 1), !0 == this.front[b].clips && this.ctx.restore())
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.minion").requires("game.entities.plain").defines(function() {
    EntityMinion = EntityPlain.extend({
        speed: 0.028,
        state: 0,
        states: ["capsule", "idle", "working"],
        building: "none",
        name: "minion",
        zIndex: 50,
        landed: !1,
        idleSpeed: 0.028,
        delayTime: 0.1,
        delayWorkTime: 0,
        delaySeq: 0,
        soundOn: !1,
        carrying: !1,
        scX: 1,
        scY: 1,
        facing: "idle",
        roadPos: { x: 0, y: 0 },
        targetPos: { x: 0, y: 300 },
        vel: { x: 0, y: 300 },
        accel: { x: 0, y: 1E3 },
        rot: 0,
        multiplier: [1, 0.75, 0.5],
        idleIm: new ig.Image("media/graphics/sprites/minion/idle.png"),
        capsuleIm: new ig.Image("media/graphics/sprites/minion/capsule.png"),
        frontRunIm: new ig.Image("media/graphics/sprites/minion/front-run.png"),
        backRunIm: new ig.Image("media/graphics/sprites/minion/back-run.png"),
        sideRunIm: new ig.Image("media/graphics/sprites/minion/side-run.png"),
        rayIm: new ig.Image("media/graphics/sprites/resources/ray.png"),
        shadowIm: new ig.Image("media/graphics/sprites/minion/shadow.png"),
        wifiIm: new ig.Image("media/graphics/sprites/minion/wifi.png"),
        oriStat: function() {
            this.capsule = { x: 0, y: 0, draw: !0, animate: !1, frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], frameTime: 0.05, oriFrameTime: 0.05, loop: !1, frameX: 15, frameY: 1, off: { x: -7, y: -10 }, alp: 0, rot: 0, cent: !0, scX: 1.05, scY: 1.05, im: this.capsuleIm };
            this.capsuleLand = 0.4 * ig.system.height + 100 * Math.random();
            this.idle = { x: 0, y: 0, draw: !0, animate: !0, frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], frameTime: 0.13, oriFrameTime: 0.13, loop: !0, frameX: 11, frameY: 1, off: { x: -this.idleIm.width / 2 / 11 - 2, y: -this.idleIm.height }, alp: 0, scX: 1, scY: 1, cent: !1, im: this.idleIm };
            this.left = { x: 0, y: 0, draw: !0, animate: !0, frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], frameTime: 0.1, oriFrameTime: 0.1, loop: !0, frameX: 11, frameY: 1, off: { x: -this.sideRunIm.width / 2 / 11 - 2, y: -this.sideRunIm.height }, alp: 0, scX: 1, scY: 1, cent: !1, im: this.sideRunIm };
            this.right = { x: 0, y: 0, draw: !0, animate: !0, frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], frameTime: 0.1, oriFrameTime: 0.1, loop: !0, frameX: 11, frameY: 1, off: { x: -this.sideRunIm.width / 2 / 11 - 2, y: -this.sideRunIm.height }, alp: 0, scX: -1, scY: 1, cent: !1, im: this.sideRunIm };
            this.front = {
                x: 0,
                y: 0,
                draw: !0,
                animate: !0,
                frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                frameTime: 0.1,
                oriFrameTime: 0.1,
                loop: !0,
                frameX: 11,
                frameY: 1,
                off: {
                    x: -this.frontRunIm.width /
                        2 / 11 - 2,
                    y: -this.frontRunIm.height
                },
                alp: 0,
                scX: 1,
                scY: 1,
                cent: !1,
                im: this.frontRunIm
            };
            this.back = { x: 0, y: 0, draw: !0, animate: !0, frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], frameTime: 0.1, oriFrameTime: 0.1, loop: !0, frameX: 11, frameY: 1, off: { x: -this.frontRunIm.width / 2 / 11 - 2, y: -this.frontRunIm.height }, alp: 0, scX: 1, scY: 1, cent: !1, im: this.backRunIm };
            this.size.x = this.idle.im.width / this.idle.frameX;
            this.size.y = this.idle.im.height;
            this.wifi = { alp: 0 };
            this.shadow = { offX: 0.2 * -this.shadowIm.width, offY: 0, x: this.size.x / 2, y: this.size.y, idleOffX: 0.2 * -this.shadowIm.width, idleOffY: 0, leftOffX: 0.1 * this.shadowIm.width, leftOffY: 2, rightOffX: 0.1 * -this.shadowIm.width, rightOffY: 2, frontOffX: 0.21 * -this.shadowIm.width, frontOffY: 2, backOffX: 0.2 * -this.shadowIm.width, backOffY: 0 };
            this.allAnims = [this.left, this.right, this.front, this.back]
        },
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.oriStat(), this.ready()) },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.base = ig.game.getEntitiesByType(EntityBase)[0];
            ig.game.sortGame = !0;
            this.tweenF("scaleTall")
        },
        work: function(b) {
            this.building = b;
            this.roadPos.x = b.roadPos.x;
            this.roadPos.y = b.roadPos.y;
            this.targetPos.x = b.grabPos.x;
            this.targetPos.y = b.grabPos.y;
            this.speed = b.speeds[b.speed];
            !0 == this.main.tutOn && (this.tut = ig.game.getEntitiesByType(EntityPlainTut)[0], 3 > this.tut.seq && (this.speed = 0.015));
            for (var c = 0; c < this.allAnims.length; c++) this.allAnims[c].frameTime = this.allAnims[c].oriFrameTime * this.multiplier[b.speed];
            this.tweenF("delayWork")
        },
        done: function(b) {
            switch (b) {
                case "capsule":
                    this.setState("idle"), this.tweenF("idleWalks")
            }
        },
        setState: function(b) { this.state = this.states.indexOf(b) },
        checkState: function(b) { return this.states[this.state] == b ? !0 : !1 },
        checkSides: function(b, c) {
            Math.abs(c) > Math.abs(b) ? 0 < c ? (this.facing = "front", 0 < b ? this[this.facing].scX = -1 : 0 > b && (this[this.facing].scX = 1)) : (this.facing = "back", 0 < b ? this[this.facing].scX = 1 : 0 > b && (this[this.facing].scX = -1)) : 0 < b ? this.facing = "right" : 0 > b && (this.facing = "left");
            this[this.facing].x = this.pos.x + this.size.x;
            this[this.facing].y = this.pos.y + 2 * this.size.y;
            this.shadow.offX = this.shadow[this.facing + "OffX"];
            this.shadow.offY = this.shadow[this.facing + "OffY"]
        },
        tweenF: function(b) {
            var c;
            switch (b) {
                case "idleWalks":
                    if ("idle" != this.states[this.state]) break;
                    if (0.45 < 1 * Math.random()) this.facing = "idle", this.shadow.offX = this.shadow.idleOffX, this.shadow.offY = this.shadow.idleOffY, this.tweener2("pos", {}, 5 * Math.random(), "idleWalks");
                    else {
                        b = ig.system.width / 2 - 270 + 540 * Math.random();
                        c = ig.system.height / 2 - 60 + 120 * Math.random();
                        var d = b - this.pos.x,
                            f = c - this.pos.y;
                        this.checkSides(d, f);
                        d = (Math.abs(d) + Math.abs(f)) / 2 * this.speed;
                        this.tweener2("pos", { x: b, y: c }, 2 * d, "idleWalks")
                    }
                    break;
                case "delayWork":
                    this.delayWorkTime = this.delayTime * this.delaySeq;
                    this.tweener("this", {}, this.delayWorkTime, "roadStart");
                    break;
                case "wifi":
                    this.tweener("wifi", { alp: 1 }, 0.1, "wifi2");
                    break;
                case "wifi2":
                    this.tweener("wifi", { alp: 0 }, 0.15, "wifi3", 0.1);
                    break;
                case "wifi3":
                    this.tweener("wifi", { alp: 1 }, 0.1, "wifi4");
                    break;
                case "wifi4":
                    this.tweener("wifi", { alp: 0 }, 0.15, "none", 0.1);
                    break;
                case "roadStart":
                    this.setState("working");
                    this.soundOn = !0;
                    this.tweenF("wifi");
                    for (b = 0; b < this.tweens.length; b++) "pos" == this.tweens[b].targ && this.tweens[b].stop();
                    this.pos.y < this.roadPos.y ? (b = this.roadPos.x, c = this.roadPos.y) : (b = "lab" == this.building.name || "ruins" == this.building.name ? 0 : 0.2, c = (this.pos.y - this.roadPos.y) / (this.building.grabPos.y - this.roadPos.y) + Math.random() * b, b = this.roadPos.x + (this.building.grabPos.x - this.roadPos.x) * c, c = this.roadPos.y + (this.building.grabPos.y - this.roadPos.y) * c);
                    if ("lab" == this.building.name || "ruins" == this.building.name) b =
                        this.building.grabPos.x, c = this.building.grabPos.y;
                    d = b - this.pos.x;
                    f = c - this.pos.y;
                    this.checkSides(d, f);
                    d = (Math.abs(d) + Math.abs(f)) / 2 * this.speed;
                    this.tweener2("pos", { x: b, y: c }, d, "fetch");
                    break;
                case "fetch":
                    b = this.building.grabPos.x;
                    c = this.building.grabPos.y;
                    d = b - this.pos.x;
                    f = c - this.pos.y;
                    this.checkSides(d, f);
                    d = (Math.abs(d) + Math.abs(f)) / 2 * this.speed;
                    this.tweener2("pos", { x: b, y: c }, d, "backRoad");
                    break;
                case "backRoad":
                    this.carrying = !0;
                    this.building.expandQueue.push(1);
                    !1 == this.building.tweening && this.building.tweenF("shrink");
                    b = this.roadPos.x;
                    c = this.roadPos.y;
                    d = b - this.pos.x;
                    f = c - this.pos.y;
                    this.checkSides(d, f);
                    d = (Math.abs(d) + Math.abs(f)) / 2 * this.speed;
                    ig.game.spawnEntity(EntityBuildingsResources, 0, 0, { main: this.main, carrier: this, building: this.building, delay: d * this.building.delayResourcePercent });
                    this.tweener2("pos", { x: b, y: c }, d, "back", 1);
                    break;
                case "back":
                    b = this.building.basePos.x - 5 + 10 * Math.random();
                    c = this.building.basePos.y;
                    this.soundOn = !1;
                    d = b - this.pos.x;
                    f = c - this.pos.y;
                    this.checkSides(d, f);
                    d = (Math.abs(d) + Math.abs(f)) / 2 * this.speed;
                    this.tweener2("pos", { x: b, y: c }, d, "giveResourceFat");
                    break;
                case "giveResourceFat":
                    this.facing = "back";
                    this.back.animate = !1;
                    this.shadow.offX = this.shadow.backOffX;
                    this.shadow.offY = this.shadow.backOffY;
                    this.carrying = !1;
                    this.resource.tweenF("closeRay");
                    this.tweener2("this", { scY: 0.8, scX: 1.2 }, 0.05, "giveResourceTall");
                    break;
                case "giveResourceTall":
                    if (!0 == this.main.tutOn && (this.tut = ig.game.getEntitiesByType(EntityPlainTut)[0])) 2 == this.tut.seq && (this.tut.seq = 3), 3 == this.tut.seq && this.tut.nextTut();
                    this.tweener2("this", { scX: 0.8, scY: 1.3 }, 0.1, "giveResourceNormal");
                    break;
                case "giveResourceNormal":
                    this.tweener2("this", { scX: 1, scY: 1 }, 0.3, "allowWork");
                    break;
                case "idle":
                    this.back.animate = !0;
                    this.resource = null;
                    b = this.pos.x - 200 + 400 * Math.random();
                    c = this.pos.y + 20 * Math.random();
                    d = b - this.pos.x;
                    f = c - this.pos.y;
                    this.checkSides(d, f);
                    d = (Math.abs(d) + Math.abs(f)) / 2 * this.speed;
                    this.tweener2("pos", { x: b, y: c }, d, "allowWork");
                    break;
                case "allowWork":
                    this.back.animate = !0;
                    this.resource = null;
                    this.setState("idle");
                    this.main.freeMinion.push(this);
                    this.building.minions.splice(this.building.minions.indexOf(this), 1);
                    0 == this.building.minions.length && (this.building.workBut.tweenF("fadeIn"), this.building.addBut.tweenF("fadeIn"), this.building.allowWork = !0, this.main.autoTimer.reset());
                    this.tweenF("idleWalks");
                    break;
                case "scaleTall":
                    this.tweener2("this", { scX: 1.01, scY: 0.99 }, 0.5, "scaleFat");
                    break;
                case "scaleFat":
                    this.tweener2("this", { scX: 0.99, scY: 1.01 }, 0.5, "scaleTall");
                    break;
                case "rotateRight":
                    this.rot = 0;
                    this.tweener2("this", { rot: 5 }, 0.3, "rotateRightBack");
                    break;
                case "rotateRightBack":
                    this.tweener2("this", { rot: 0 }, 0.3, "rotateLeft");
                    break;
                case "rotateLeft":
                    this.rot = 360;
                    this.tweener2("this", { rot: 355 }, 0.3, "rotateLeftBack");
                    break;
                case "rotateLeftBack":
                    this.tweener2("this", { rot: 360 }, 0.3, "rotateRight")
            }
        },
        changeState: function() {},
        getIndex: function(b) { return ig.game.entities.indexOf(b) },
        update: function() {
            if (!ig.global.wm) {
                !1 == this.main.gamePaused && this.parent();
                switch (this.states[this.state]) {
                    case "capsule":
                        this.capsule.x = this.pos.x + this.size.x / 2;
                        this.capsule.y = this.pos.y + this.size.y / 2 + 13;
                        this.idle.x = this.pos.x + this.size.x;
                        this.idle.y = this.pos.y + 2 * this.size.y;
                        !1 == this.landed && this.pos.y > this.capsuleLand && (this.landed = !0, this.main.freeMinion.push(this), this.main.soundLooper("land"), this.vel.y = 0, this.accel.y = 0, this.capsule.animate = !0, this.idle.x = this.pos.x + this.size.x, this.idle.y = this.pos.y + 2 * this.size.y);
                        this.capsule.rot += 0.05 * this.vel.x;
                        break;
                    case "idle":
                        this.idle.x = this.pos.x + this.size.x;
                        this.idle.y = this.pos.y + 2 * this.size.y;
                        this[this.facing].x = this.pos.x +
                            this.size.x;
                        this[this.facing].y = this.pos.y + 2 * this.size.y;
                        break;
                    case "working":
                        this[this.facing].x = this.pos.x + this.size.x, this[this.facing].y = this.pos.y + 2 * this.size.y
                }
                this.zIndex = this.pos.y + 1E-5 * this.index;
                null != this.resource && (this.resource.zIndex = this.zIndex - 1E-5)
            }
        },
        checkFrame: function(b) { return void 0 != this[b].frames && void 0 != this[b].frame ? !0 : !1 },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                this.drawer({
                    pic: this.shadowIm,
                    x: this.pos.x + this.shadow.x + this.shadow.offX,
                    y: this.pos.y + this.shadow.y +
                        this.shadow.offY,
                    cent: !0
                });
                switch (this.states[this.state]) {
                    case "capsule":
                        !0 == this.capsule.animate && this.quickDraw("idle");
                        this.quickDraw("capsule");
                        break;
                    case "idle":
                        this.quickDraw(this.facing);
                        break;
                    case "working":
                        this.quickDraw(this.facing)
                }
                this.drawer({ pic: this.wifiIm, x: this.pos.x + this.shadow.x + this.shadow.offX, y: this.pos.y, alp: this.wifi.alp, cent: !0 })
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.entity-pool").requires("impact.game").defines(function() {
    ig.EntityPool = {
        pools: {},
        mixin: { staticInstantiate: function(b, c, d) { return ig.EntityPool.getFromPool(this.classId, b, c, d) }, erase: function() { ig.EntityPool.putInPool(this) } },
        enableFor: function(b) { b.inject(this.mixin) },
        getFromPool: function(b, c, d, f) {
            b = this.pools[b];
            if (!b || !b.length) return null;
            b = b.pop();
            b.reset(c, d, f);
            return b
        },
        putInPool: function(b) { this.pools[b.classId] ? this.pools[b.classId].push(b) : this.pools[b.classId] = [b] },
        drainPool: function(b) { delete this.pools[b] },
        drainAllPools: function() { this.pools = {} }
    };
    ig.Game.inject({
        loadLevel: function(b) {
            ig.EntityPool.drainAllPools();
            this.parent(b)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buildings-resources").requires("game.entities.plain", "impact.entity-pool").defines(function() {
    EntityBuildingsResources = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 51,
        scX: 0,
        scY: 0,
        off: { x: 0, y: 30 },
        ray: { scX: 1, scY: 1 },
        alp: 0,
        onSound: !1,
        resourceQuality: "Basic",
        oriPos: { x: 0, y: 0 },
        whichType: "solar",
        solarBasicIm: new ig.Image("media/graphics/sprites/resources/solar_basic.png"),
        solarUpgradedIm: new ig.Image("media/graphics/sprites/resources/solar_upgraded.png"),
        labBasicIm: new ig.Image("media/graphics/sprites/resources/lab_basic.png"),
        labUpgradedIm: new ig.Image("media/graphics/sprites/resources/lab_upgraded.png"),
        mineBasicIm: new ig.Image("media/graphics/sprites/resources/mine_basic.png"),
        mineUpgradedIm: new ig.Image("media/graphics/sprites/resources/mine_upgraded.png"),
        farmBasicIm: new ig.Image("media/graphics/sprites/resources/farm_basic.png"),
        farmUpgradedIm: new ig.Image("media/graphics/sprites/resources/farm_upgraded.png"),
        ruinsBasicIm: new ig.Image("media/graphics/sprites/resources/ruins_basic.png"),
        ruinsUpgradedIm: new ig.Image("media/graphics/sprites/resources/ruins_upgraded.png"),
        rayIm: new ig.Image("media/graphics/sprites/resources/ray.png"),
        carrier: null,
        im: null,
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.oriStat()) },
        reset: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.oriStat()) },
        oriStat: function() {
            this.resourceQuality = 1 == this.building.resourceQuality ? 0.5 < 1 * Math.random() ? 0 : 1 : this.building.resourceQuality;
            this.im = this[this.building.name + this.building.resourceQualities[this.resourceQuality] + "Im"];
            this.size.x = this.im.width;
            this.size.y = this.im.height;
            this.carrier.resource = this;
            this.oriPos.x = this.pos.x + this.im.width / 2;
            this.oriPos.y = this.pos.y + this.im.height / 2;
            this.money = Math.floor(this.building.resourcePrices[this.resourceQuality] * this.main.resourcePercent);
            this.ray.scX = 0;
            ig.game.sortGame = !0;
            this.tweenF("ray")
        },
        tweenF: function(b) {
            switch (b) {
                case "ray":
                    this.tweener("ray", { scX: 1 }, 0.5, "appear", this.delay);
                    break;
                case "appear":
                    this.tweener("this", { scX: 1, scY: 1, alp: 1, off: { y: -30 } }, 0.3, "fat");
                    this.main.soundLooper("upgrade");
                    break;
                case "fat":
                    this.tweener("this", { scX: 1.008, scY: 1, off: { y: -10 } }, 0.5, "tall");
                    break;
                case "tall":
                    this.tweener("this", { scX: 1, scY: 1.0008, off: { y: 0 } }, 0.5, "fat");
                    break;
                case "closeRay":
                    this.stopTweens();
                    this.tweener("ray", { scX: 0 }, 0.3);
                    this.tweener("this", { pos: { y: this.pos.y - 90 }, scX: 1.2, scY: 1 }, 0.3, "throwInBase", 0.1);
                    this.onSound = !1;
                    break;
                case "throwInBase":
                    this.main.soundLooper("vacuum");
                    this.main.base.tweenF("fat");
                    this.tweener("this", { pos: { y: this.pos.y + 90 }, scX: 0, scY: 0 }, 0.2, "reachedBase");
                    break;
                case "reachedBase":
                    ig.game.money += this.money, 9999999999 < ig.game.money && (ig.game.money = 9999999999), this.main.userData.money = ig.game.money, this.main.saveGame(), ig.game.spawnEntity(EntityPriceFader, this.pos.x + this.size.x / 2, this.pos.y + this.size.y, { main: this.main, money: this.money, zIndex: this.zIndex + 1 }), this.carrier = null, this.kill()
            }
        },
        update: function() { ig.global.wm || (this.parent(), null != this.carrier && !0 == this.carrier.carrying && (this.pos.x = this.carrier.pos.x + this.carrier.size.x / 2 - this.size.x / 2, this.pos.y = this.carrier.pos.y - 80)) },
        giveBase: function() {},
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        draw: function() {
            this.parent();
            ig.global.wm || (!0 == this.onSound && this.main.soundLooper("resources"), this.drawer({ pic: this.rayIm, cent: !0, scX: this.ray.scX, scY: this.ray.scY, x: this.pos.x + this.size.x / 2, y: this.pos.y + 0.9 * this.size.y + this.off.y }), this.drawer({ x: this.pos.x + this.size.x + this.off.x, y: this.pos.y + 2 * this.size.y + this.off.y, pic: this.im, scX: 0.8 * this.scX, scY: 0.8 * this.scY, offX: -this.im.width / 2, offY: -this.im.height, rot: this.carrier.rot, alp: this.alp, cent: !1 }))
        }
    });
    ig.EntityPool.enableFor(EntityBuildingsResources)
});
ig.baked = !0;
ig.module("game.entities.plain-gui").requires("game.entities.plain").defines(function() {
    EntityPlainGui = EntityPlain.extend({
        zIndex: 2041,
        resourcesIm: new ig.Image("media/graphics/sprites/game/resources.png"),
        minionIm: new ig.Image("media/graphics/sprites/game/minion.png"),
        text: _STRINGS.Game.busy[0],
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), ig.game.redraw = !0, this.busy = { alp: 0 }) },
        tweenF: function(b) {
            switch (b) {
                case "busyFadeOut":
                    this.tweener("busy", { alp: 0 }, 1, "none", 3)
            }
        },
        update: function() { ig.global.wm || this.parent() },
        showBusy: function() {
            this.stopTweens();
            this.busy.alp = 1;
            this.text = 50 == this.main.userData.minions ? _STRINGS.Game.busy50[0] : 0 == this.main.userData.minions ? _STRINGS.Game.busy0[0] : _STRINGS.Game.busy[0];
            this.tweenF("busyFadeOut")
        },
        showMax: function() {
            this.stopTweens();
            this.busy.alp = 1;
            this.text = _STRINGS.Game.max[0];
            this.tweenF("busyFadeOut")
        },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        draw: function() {
            this.parent();
            ig.global.wm || (this.drawer({ cent: !0, x: 30, y: 30, pic: this.resourcesIm, scX: 0.9, scY: 0.9 }), this.textDraw({ tx: ig.game.money, align: "left", px: 20, col: "black", x: 65, y: 30 }), this.drawer({ cent: !0, x: 30, y: 80, pic: this.minionIm, scX: 0.9, scY: 0.9 }), this.textDraw({ tx: ig.game.getEntitiesByType(EntityMinion).length, align: "left", px: 20, col: "black", x: 65, y: 80 }), this.textDraw({ tx: this.text, maxWidth: 0.9 * ig.system.width, px: 20, stroke: !0, strokeColour: "#fdffae", strokeLine: 5, strokeAlp: this.busy.alp, col: "black", x: 0.5 * ig.system.width, y: 0.95 * ig.system.height, alp: this.busy.alp }))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.upgrade-but").requires("game.entities.plain-but").defines(function() {
    EntityUpgradeBut = EntityPlainBut.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 2100,
        off: { x: 0, y: 0 },
        size: { x: 50, y: 50 },
        gamePaused: !1,
        butIm: new ig.Image("media/graphics/sprites/game/upgrade-but.png"),
        warningIm: new ig.Image("media/graphics/sprites/game/warning.png"),
        sc: 1,
        scX: 1,
        scY: 1,
        init: function(b, c, d) { ig.global.wm || (b -= this.butIm.width / 2, this.parent(b, c, d)) },
        oriStat: function() {
            this.parent();
            this.show();
            this.warning = { show: !1, scX: 1, scY: 1, alp: 1 }
        },
        buttonTask: function() {!0 != this.main.tutOn && !0 != this.menu.tweening && !0 != this.main.gamePaused && (this.menu.tweenF("fadeIn"), this.tweenF("fadeOut")) },
        tweenF: function(b) {
            switch (b) {
                case "fadeOut":
                    this.tweener("pos", { y: this.oriPos.y - 100 }, 0.3, "fadeOut2");
                    break;
                case "fadeOut2":
                    this.pointer.letGo();
                    break;
                case "fadeIn":
                    b = !1;
                    this.allUpgrade = ig.game.getEntitiesByType(EntityUpgrade)[0];
                    for (var c = 0; c < this.allUpgrade.upgradeList.length; c++) !1 == this.allUpgrade.upgradeList[c].bought && (b = !0);
                    !0 == b ? this.tweener("pos", { y: this.oriPos.y }, 0.3, "fadeInDone") : this.tweener("pos", {}, 0.3, "fadeInDone");
                    break;
                case "fadeInDone":
                    this.main.showUpgradesMenu = !1
            }
        },
        update: function() { ig.global.wm || this.parent() },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.menu = ig.game.getEntitiesByType(EntityUpgrade)[0]
        },
        draw: function() { ig.global.wm || (this.drawer({ pic: this.butIm, x: ig.system.width / 2 - this.butIm.width / 2 * this.finalSc, y: this.pos.y, scX: this.finalSc, scY: this.finalSc, cent: !1, alp: this.alp }), this.textDraw({ tx: _STRINGS.Game.upgrade, col: "black", x: this.center.x, y: (this.center.y - 3) * this.finalSc, px: 21, scX: 0.9 * this.finalSc, scY: 1.2 * this.finalSc, alp: this.alp }), !0 == this.warning.show && this.drawer({ pic: this.warningIm, x: ig.system.width / 2 + 0.35 * this.butIm.width * this.finalSc, y: this.pos.y + 0.35 * this.size.y * this.finalSc, scX: this.finalSc, scY: this.finalSc, cent: !1, alp: this.alp })) }
    })
});
ig.baked = !0;
ig.module("game.entities.upgrade-bar-but").requires("game.entities.plain-but").defines(function() {
    EntityUpgradeBarBut = EntityPlainBut.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 2301,
        price: 10,
        idleAlp: 1,
        itemNum: 1,
        upgradeId: 1,
        shiftingUp: !1,
        shiftPercent: 0,
        size: { x: 50, y: 50 },
        barSize: { x: 50, y: 50 },
        gamePaused: !1,
        butIm: new ig.Image("media/graphics/sprites/upgrade/buy_upgrade.png"),
        barIm: new ig.Image("media/graphics/sprites/upgrade/upgrade_slot_base.png"),
        iconIm0: new ig.Image("media/graphics/sprites/upgrade/icons/farm-road.png"),
        iconIm1: new ig.Image("media/graphics/sprites/upgrade/icons/farm-resource.png"),
        iconIm2: new ig.Image("media/graphics/sprites/upgrade/icons/solar-road.png"),
        iconIm3: new ig.Image("media/graphics/sprites/upgrade/icons/solar-resource.png"),
        iconIm4: new ig.Image("media/graphics/sprites/upgrade/icons/mine-road.png"),
        iconIm5: new ig.Image("media/graphics/sprites/upgrade/icons/mine-resource.png"),
        iconIm6: new ig.Image("media/graphics/sprites/upgrade/icons/ruins-road.png"),
        iconIm7: new ig.Image("media/graphics/sprites/upgrade/icons/ruins-resource.png"),
        iconIm8: new ig.Image("media/graphics/sprites/upgrade/icons/lab-road.png"),
        iconIm9: new ig.Image("media/graphics/sprites/upgrade/icons/lab-resource.png"),
        iconIm10: new ig.Image("media/graphics/sprites/upgrade/icons/minion-price.png"),
        iconIm11: new ig.Image("media/graphics/sprites/upgrade/icons/unlock-discount.png"),
        iconIm12: new ig.Image("media/graphics/sprites/upgrade/icons/minion-speed.png"),
        iconIm13: new ig.Image("media/graphics/sprites/upgrade/icons/allx2.png"),
        iconIm14: new ig.Image("media/graphics/sprites/upgrade/icons/allx4.png"),
        iconIm15: new ig.Image("media/graphics/sprites/upgrade/icons/final-upgrade.png"),
        scX: 1,
        scY: 1,
        oriSc: 0.8,
        barScY: 1,
        init: function(b, c, d) {
            if (!ig.global.wm) {
                this.parent(b, c, d);
                if (0 == this.menu.upgrades.length) this.menu.upgrades.push(this);
                else
                    for (b = 0; b < this.menu.upgrades.length; b++)
                        if (this.menu.upgrades[b].upgradeId > this.upgradeId && -1 == this.menu.upgrades.indexOf(this)) { this.menu.upgrades.splice(b, 0, this); break } - 1 == this.menu.upgrades.indexOf(this) && this.menu.upgrades.push(this);
                for (b = 0; b < this.menu.upgrades.length; b++) this.menu.upgrades[b].itemNum = b
            }
        },
        oriStat: function() {
            this.barSize.x = this.barIm.width;
            this.barSize.y = this.barIm.height;
            this.size.x = this.butIm.width;
            this.size.y = this.butIm.height;
            this.show()
        },
        idleUpdate: function() { ig.game.money < this.price || this.parent() },
        clicked: function() { 442 < this.pointer.pos.y || 111 > this.pointer.pos.y || this.parent() },
        buttonTask: function() {!(ig.game.money < this.price) && !0 != this.menu.upgradeList[this.upgradeId].bought && !1 != this.main.showUpgradesMenu && (this.menu.upgradeList[this.upgradeId].bought = !0, this.menu.saveResource(), this.menu.upgradeTask(this.upgradeId), ig.game.money -= this.price, this.main.userData.money = ig.game.money, this.main.userData.progress++, ig.game.spawnEntity(EntityPriceFader, this.pointer.pos.x + this.pointer.size.x / 2, this.pos.y, { main: this.main, money: -this.price, zIndex: this.zIndex + 1 }), this.tweenF("disappear"), this.main.saveGame()) },
        tweenF: function(b) {
            switch (b) {
                case "fadeOut":
                    this.tweener("this", { alp: 0 }, 0.3);
                    break;
                case "fadeIn":
                    this.tweener("this", { alp: 1 }, 0.3);
                    break;
                case "disappear":
                    this.tweener("this", { barScY: 0, idleAlp: 0 }, 0.3, "kill");
                    break;
                case "kill":
                    this.knot = ig.game.getEntitiesByType(EntityUpgradeScrollKnot)[0];
                    this.knot.recalculatePos();
                    b = this.menu.upgrades.indexOf(this);
                    this.menu.upgrades.splice(this.menu.upgrades.indexOf(this), 1);
                    for (var c = 0; c < this.menu.upgrades.length; c++) c >= b && (this.menu.upgrades[c].itemNum = c, this.menu.upgrades[c].tweenF("shiftUp"));
                    this.kill();
                    break;
                case "shiftUp":
                    this.shiftingUp = !0;
                    this.shiftPercent = 1;
                    this.tweener("this", { shiftPercent: 0 }, 0.2, "doneShiftUp");
                    break;
                case "doneShiftUp":
                    this.shiftingUp = !1
            }
        },
        idleUpdate: function() {
            if (!(ig.game.money < this.price) && !0 != this.tweening) {
                if (this.pointer.hoveringItem == this) {
                    if (442 < this.pointer.pos.y || 111 > this.pointer.pos.y) return;
                    this.mouseSc = this.overSc
                } else this.mouseSc = this.idleSc;
                this.finalSc = this.oriSc * this.sc * this.mouseSc;
                this.center.x = this.pos.x + this.size.x / 2;
                this.center.y = this.pos.y + this.size.y / 2
            }
        },
        update: function() { ig.global.wm || (this.parent(), 0 != this.alp && (ig.game.money >= this.price ? (this.main.upgradeBut.warning.show = !0, this.moneyAlp = 1) : this.moneyAlp = 0.6, this.alp = this.moneyAlp * this.idleAlp)) },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        idleDraw: function() { this.drawer({ pic: this.butIm, x: this.pos.x + this.butIm.width / 2, y: this.pos.y + this.butIm.height / 2, scX: this.finalSc, scY: this.finalSc * this.barScY, cent: !0, alp: this.alp }) },
        draw: function() {
            var b = -this.menu.scrollY + 0.9 * this.itemNum * this.barSize.y + this.menu.off.y,
                c = 0.5 * this.barIm.height,
                d = 0.9 * this.shiftPercent * this.barSize.y;
            this.pos.y = this.oriPos.y + b + d;
            ig.global.wm || (this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(0, 111 + this.menu.off.y, ig.system.width, 331), this.ctx.clip(), this.drawer({ pic: this.barIm, x: 137 + this.barIm.width / 2, y: 105 + this.barIm.height / 2 + b + d, cent: !0, scX: 0.85, scY: 0.85 * this.barScY, alp: this.alp }), this.drawer({ pic: this["iconIm" + this.upgradeId], x: 199, y: 112 + b + 40 + d, cent: !0, scX: 0.85, scY: 0.85 * this.barScY, alp: this.alp }), this.textDraw({ align: "left", tx: _STRINGS.Upgrades["info" + this.upgradeId][0], x: 240, y: 108 + b + c - 0.2 * this.barIm.height * this.barScY + d, px: 16, col: "#1c2f28", scX: 0.8, scY: 1 * this.barScY, alp: this.alp }), this.textDraw({ align: "left", tx: _STRINGS.Upgrades["info" + this.upgradeId][1], x: 240, y: 108 + b + c - 0.2 * this.barIm.height * this.barScY + 17 * this.barScY + d, px: 13, col: "#365a4d", scX: 0.9, scY: 1 * this.barScY, alp: this.alp }), _STRINGS.Upgrades["info" + this.upgradeId][2] && this.textDraw({ align: "left", tx: _STRINGS.Upgrades["info" + this.upgradeId][2], x: 240, y: 108 + b + c - 0.2 * this.barIm.height * this.barScY + 30 * this.barScY + d, px: 13, col: "#365a4d", scX: 0.9, scY: 1 * this.barScY, alp: this.alp }), this.parent(), b = this.textMax({ tx: this.price, maxWidth: 0.88 * this.size.x, px: 27 }), this.textDraw({ align: "center", tx: this.price, x: this.pos.x + 0.5 * this.size.x, y: this.pos.y + 0.5 * this.size.y - 17 * this.finalSc * this.barScY, scX: 0.9 * this.finalSc * b, scY: this.finalSc * b * this.barScY, px: 27, col: "white", alp: this.alp }), this.ctx.restore())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.upgrade").requires("game.entities.plain", "game.entities.upgrade-bar-but", "game.entities.plain-but").defines(function() {
    EntityUpgrade = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 2300,
        upgradeNames: "farm-road farm-resource solar-road solar-resource mine-road mine-resource ruins-road ruins-resource lab-road lab-resource minion-price unlock-discount minion-speed allx2 allx4 final-upgrade".split(" "),
        scrollY: 0,
        tweening: !1,
        upgrades: [],
        upgradeList: [{ bought: !1, unlocked: !0, unlockPrice: 100, price: 160, upgradeId: 0 }, { bought: !1, unlocked: !0, unlockPrice: 100, price: 300, upgradeId: 1 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 320, upgradeId: 2 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 450, upgradeId: 3 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 830, upgradeId: 4 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 850, upgradeId: 5 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 1400, upgradeId: 6 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 1500, upgradeId: 7 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 2400, upgradeId: 8 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 2800, upgradeId: 9 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 3200, upgradeId: 10 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 600, upgradeId: 11 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 1500, upgradeId: 12 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 2900, upgradeId: 13 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 5E3, upgradeId: 14 }, { bought: !1, unlocked: !1, unlockPrice: 100, price: 15E4, upgradeId: 15 }],
        size: { x: 50, y: 50 },
        off: { x: 0, y: 500 },
        gamePaused: !1,
        boardIm: new ig.Image("media/graphics/sprites/game/board.png"),
        headerIm: new ig.Image("media/graphics/sprites/upgrade/header.png"),
        scrollBarIm: new ig.Image("media/graphics/sprites/game/scrollbar.png"),
        sc: 2,
        scX: 1,
        scY: 1,
        alp: 0,
        oriAlp: 0.5,
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.oriStat(), this.main.upgrade = this) },
        ready: function() {
            if (null == this.pointer) {
                this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
                this.base = ig.game.getEntitiesByType(EntityBase)[0];
                for (var b = !1, c = 0; c < this.upgradeList.length; c++) !0 == this.upgradeList[c].unlocked && !1 == this.upgradeList[c].bought ? (b = !0, ig.game.spawnEntity(EntityUpgradeBarBut, 389, 117, { main: this.main, itemNum: c, upgradeId: this.upgradeList[c].upgradeId, menu: this, price: this.upgradeList[c].price })) : !0 == this.upgradeList[c].bought && this.upgradeTask(this.upgradeList[c].upgradeId, !0)
            }!1 == b && (this.upgradeBut = ig.game.getEntitiesByType(EntityUpgradeBut)[0], this.upgradeBut.pos.y = -200)
        },
        getIndex: function(b) { return this.upgradeNames.indexOf(b) },
        saveResource: function() {!0 == ig.game.storagable && (this.main.userData.upgrades = this.upgradeList, this.main.saveGame()) },
        oriStat: function() {
            !0 == ig.game.storagable && (null == this.main.userData.upgrades ? this.saveResource() : this.upgradeList = this.main.userData.upgrades);
            ig.game.spawnEntity(EntityUpgradeCloseBut, 449, 55, { main: this.main, menu: this });
            ig.game.spawnEntity(EntityUpgradeScrollKnot, 463, 116, { main: this.main, menu: this })
        },
        spawnUpgrades: function(b) { ig.game.spawnEntity(EntityUpgradeBarBut, 389, 117, { main: this.main, upgradeId: this.upgradeList[b].upgradeId, menu: this, price: this.upgradeList[b].price }) },
        upgradeTask: function(b, c) {
            void 0 == this.base && (this.base = ig.game.getEntitiesByType(EntityBase)[0]);
            switch (this.upgradeNames[b]) {
                case "farm-road":
                    this.main.farm.showRoad = !0;
                    this.main.farm.speed += 1;
                    this.main.farm.road.queueUpgrade = !0;
                    break;
                case "farm-resource":
                    this.main.farm.resourceQuality = 1;
                    this.main.farm.resourcePrice = 1;
                    this.main.farm.upgradeBuilding.queueUpgrade = !0;
                    break;
                case "solar-road":
                    this.main.solar.showRoad = !0;
                    this.main.solar.speed += 1;
                    this.main.solar.road.queueUpgrade = !0;
                    break;
                case "solar-resource":
                    this.main.solar.resourceQuality = 1;
                    this.main.solar.resourcePrice = 1;
                    this.main.solar.upgradeBuilding.queueUpgrade = !0;
                    break;
                case "mine-road":
                    this.main.mine.showRoad = !0;
                    this.main.mine.speed += 1;
                    this.main.mine.road.queueUpgrade = !0;
                    break;
                case "mine-resource":
                    this.main.mine.resourceQuality = 1;
                    this.main.mine.resourcePrice = 1;
                    this.main.mine.upgradeBuilding.queueUpgrade = !0;
                    break;
                case "lab-road":
                    this.main.lab.showRoad = !0;
                    this.main.lab.speed += 1;
                    this.main.lab.road.queueUpgrade = !0;
                    break;
                case "lab-resource":
                    this.main.lab.resourceQuality = 1;
                    this.main.lab.resourcePrice = 1;
                    this.main.lab.upgradeBuilding.queueUpgrade = !0;
                    break;
                case "ruins-road":
                    this.main.ruins.showRoad = !0;
                    this.main.ruins.speed += 1;
                    this.main.ruins.road.queueUpgrade = !0;
                    break;
                case "ruins-resource":
                    this.main.ruins.resourceQuality = 1;
                    this.main.ruins.resourcePrice = 1;
                    this.main.ruins.upgradeBuilding.queueUpgrade = !0;
                    break;
                case "minion-price":
                    this.base.minionDiscount = !0;
                    this.main.minionPriceDelay = !0;
                    this.base.price.show = !0;
                    this.base.price.queueUpgrade = !0;
                    this.base.checkUpgrade = !0;
                    break;
                case "unlock-discount":
                    this.main.buildingPriceDelay = !0;
                    this.base.unlockdiscount.show = !0;
                    this.base.unlockdiscount.queueUpgrade = !0;
                    this.base.checkUpgrade = !0;
                    break;
                case "minion-speed":
                    for (var d = 0; d < this.base.buildings.length; d++) this.base.buildings[d].speed += 1;
                    this.base.speed.show = !0;
                    this.base.speed.queueUpgrade = !0;
                    this.base.checkUpgrade = !0;
                    break;
                case "allx2":
                    for (d = 0; d < this.base.buildings.length; d++) this.base.buildings[d].resourcePrice = 2;
                    this.main.resourcePercent += 0.25;
                    this.base.resource25.show = !0;
                    this.base.resource25.queueUpgrade = !0;
                    this.base.checkUpgrade = !0;
                    break;
                case "allx4":
                    for (d = 0; d < this.base.buildings.length; d++) this.base.buildings[d].resourcePrice = 3;
                    this.base.resource50.show = !0;
                    this.main.resourcePercent += 0.5;
                    this.base.resource50.queueUpgrade = !0;
                    this.base.checkUpgrade = !0;
                    break;
                case "final-upgrade":
                    this.main.automate = !0, this.upgradeBut = ig.game.getEntitiesByType(EntityUpgradeBut)[0], this.base.final.show = !0, this.base.final.queueUpgrade = !0, this.base.checkUpgrade = !0, c && (this.base.final.doneOver = !0), this.main.userData.gameCompleted = !0
            }
        },
        tweenF: function(b) {
            switch (b) {
                case "fadeIn":
                    this.tweening = !0;
                    this.tweener("this", { alp: 1 }, 0.2, "boardIn");
                    break;
                case "boardIn":
                    this.tweener("off", { y: -10 }, 0.2, "boardIn2");
                    break;
                case "boardIn2":
                    this.tweener("off", { y: 0 }, 0.2, "boardInDone");
                    break;
                case "boardInDone":
                    this.tweening = !1;
                    this.main.showUpgradesMenu = !0;
                    break;
                case "boardOut":
                    this.tweening = !0;
                    this.tweener("off", { y: -10 }, 0.2, "boardOut2");
                    break;
                case "boardOut2":
                    this.tweener("off", { y: 500 }, 0.2, "fadeOut");
                    break;
                case "fadeOut":
                    this.tweener("this", { alp: 0 }, 0.2, "boardOutDone");
                    this.pointer.letGo();
                    break;
                case "boardOutDone":
                    this.tweening = !1
            }
        },
        update: function() { ig.global.wm || this.parent() },
        draw: function() {
            this.parent();
            ig.global.wm || (this.ctx.globalAlpha = this.alp * this.oriAlp, this.ctx.fillStyle = "black", this.ctx.fillRect(0, 0, ig.system.width, ig.system.height), this.ctx.globalAlpha = 1, this.drawer({ x: ig.system.width / 2, y: 0.57 * ig.system.height + this.off.y, cent: !0, pic: this.boardIm, scX: 0.9, scY: 0.9 }), this.drawer({ x: 0.74 * ig.system.width, y: 0.57 * ig.system.height + this.off.y, cent: !0, pic: this.scrollBarIm, scX: 0.9, scY: 0.9 }), this.drawer({ x: ig.system.width / 2, y: 0.17 * ig.system.height + this.off.y, cent: !0, pic: this.headerIm, scX: 0.9, scY: 0.9 }), this.textDraw({ align: "center", tx: _STRINGS.Game.Upgrades, x: ig.system.width / 2, y: 0.163 * ig.system.height + this.off.y, scX: 0.8, scY: 1, px: 48, col: "#1c2f28" }))
        }
    });
    EntityUpgradeCloseBut = EntityPlainBut.extend({
        zIndex: 2301,
        oriSc: 0.98,
        butIm: new ig.Image("media/graphics/sprites/upgrade/x_button.png"),
        oriStat: function() {
            this.pos.x = this.oriPos.x;
            this.pos.y = this.oriPos.y;
            this.sc = 1
        },
        buttonTask: function() {!0 != this.menu.tweening && !0 != this.main.gamePaused && (this.menu.tweenF("boardOut"), this.main.upgradeBut.tweenF("fadeIn")) },
        update: function() {
            this.parent();
            this.pos.y = this.menu.off.y + this.oriPos.y
        },
        ready: function() { null == this.pointer && (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], this.base = ig.game.getEntitiesByType(EntityBase)[0]) }
    })
});
ig.baked = !0;
ig.module("game.entities.upgrade-scrollknot").requires("game.entities.plain").defines(function() {
    EntityUpgradeScrollKnot = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 2301,
        oriPos: { x: 0, y: 0 },
        off: { x: 0, y: 0 },
        holding: !1,
        hold: { x: 0, y: 0 },
        size: { x: 50, y: 50 },
        gamePaused: !1,
        butIm: new ig.Image("media/graphics/sprites/game/scrollknot.png"),
        idleIm: new ig.Image("media/graphics/sprites/game/scrollknot.png"),
        hoverIm: new ig.Image("media/graphics/sprites/game/scrollknot2.png"),
        minPos: 116,
        maxPos: 333,
        sc: 1,
        scX: 1,
        scY: 1,
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.oriPos.x = b, this.oriPos.y = c, this.size.x = this.butIm.width, this.size.y = this.butIm.height, this.menu.scrollY = 20 * (this.pos.y - this.minPos)) },
        clicked: function() {
            this.sc = 0.9;
            this.buttonTask()
        },
        released: function() {!0 != this.tweening && (this.sc = 1) },
        idle: function() {},
        hide: function() {
            this.pos.x = -200;
            this.pos.y = -200
        },
        show: function() {
            this.pos.x = this.oriPos.x;
            this.pos.y = this.oriPos.y
        },
        buttonTask: function() {!(5 > this.menu.upgrades.length) && !1 == this.holding && (this.holding = !0, this.hold.y = this.pos.y - this.pointer.pos.y) },
        oriStat: function() {
            this.parent();
            this.show()
        },
        tweenF: function(b) {
            switch (b) {
                case "fat":
                    this.tweener("this", { scX: 1.008, scY: 1 }, 1, "tall")
            }
        },
        update: function() {
            if (!ig.global.wm) {
                this.parent();
                if (this.pointer.hoveringItem == this) {
                    if (5 > this.menu.upgrades.length) return;
                    this.butIm != this.hoverIm && (this.butIm = this.hoverIm)
                } else this.butIm != this.idleIm && (this.butIm = this.idleIm);
                !0 == this.holding ? (ig.input.released("click") && (this.holding = !1, this.pointer.firstClick = !1, this.released()), this.oriPos.y = this.hold.y + this.pointer.pos.y) : ig.input.state("scrollUp") ? this.oriPos.y -= 5 : ig.input.state("scrollDown") && (this.oriPos.y += 5);
                this.oriPos.y < this.minPos ? this.oriPos.y = this.minPos : this.oriPos.y > this.maxPos && (this.oriPos.y = this.maxPos);
                this.scrollY = (this.oriPos.y - this.minPos) / (this.maxPos - this.minPos) * (78 * (this.menu.upgrades.length - 1) - 243);
                this.menu.scrollY = 4 < this.menu.upgrades.length ? this.scrollY : 0;
                this.pos.y = 4 < this.menu.upgrades.length ? this.oriPos.y + this.menu.off.y :
                    this.minPos + this.menu.off.y
            }
        },
        recalculatePos: function() {
            this.oriPos.y = this.scrollY * (this.maxPos - this.minPos) / (78 * (this.menu.upgrades.length - 2) - 243) + this.minPos;
            this.oriPos.y < this.minPos ? this.oriPos.y = this.minPos : this.oriPos.y > this.maxPos && (this.oriPos.y = this.maxPos)
        },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        draw: function() {
            this.parent();
            ig.global.wm || this.drawer({
                pic: this.butIm,
                x: this.pos.x + this.butIm.width / 2,
                y: this.pos.y + this.butIm.height / 2,
                scX: this.finalSc,
                scY: this.finalSc,
                cent: !0,
                alp: this.alp
            })
        }
    })
});
ig.baked = !0;
ig.module("game.entities.price-fader").requires("game.entities.plain", "impact.entity-pool").defines(function() {
    EntityPriceFader = EntityPlain.extend({
        zIndex: 2400,
        orizIndex: 2400,
        resourcesIm: new ig.Image("media/graphics/sprites/game/resources_mini_icon.png"),
        boardIm: new ig.Image("media/graphics/sprites/game/scores.png"),
        center: { x: 0, y: 0 },
        alp: 1,
        init: function(b, c, d) { ig.global.wm || (this.size.x = this.boardIm.width, this.size.y = this.boardIm.height, b -= this.size.x / 2, this.parent(b, c, d), this.oriStat()) },
        reset: function(b, c, d) { ig.global.wm || (b -= this.size.x / 2, this.parent(b, c, d), this.oriStat()) },
        oriStat: function() {
            this.alp = 1;
            this.scX = 0;
            this.scY = 1;
            this.tweenF("fadeOut");
            ig.game.sortGame = !0;
            this.orizIndex = this.zIndex
        },
        tweenF: function(b) {
            switch (b) {
                case "fadeOut":
                    this.tweener("this", { pos: { y: this.pos.y - 55 } }, 1, "kill", 0.1);
                    this.tweener("this", { scX: 1.2 }, 0.1, "size2");
                    this.tweener("this", { alp: 0 }, 0.5, "none", 0.4);
                    break;
                case "size2":
                    this.tweener("this", { scX: 1 }, 0.1, "size3");
                    break;
                case "size3":
                    this.tweener("this", { scX: 0 }, 0.1, "none", 0.8);
                    break;
                case "kill":
                    this.kill()
            }
        },
        update: function() { ig.global.wm || (this.parent(), this.zIndex = this.orizIndex + 0.1 * this.pos.y) },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        draw: function() {
            !0 != this.main.gameCompleted && (this.parent(), ig.global.wm || (this.center.x = this.pos.x + this.size.x / 2, this.center.y = this.pos.y + this.size.y / 2, this.drawer({ pic: this.boardIm, x: this.center.x, y: this.center.y, alp: this.alp, scX: this.scX, scY: this.scY, cent: !0 }), this.drawer({
                cent: !0,
                x: this.center.x -
                    0.75 * this.resourcesIm.width,
                y: this.center.y - 2,
                pic: this.resourcesIm,
                scX: 0.75 * this.scX,
                scY: 0.75 * this.scY,
                alp: this.alp,
                cent: !0
            }), this.textDraw({ tx: 0 < this.money ? "+" + this.money : this.money, align: "center", px: 13, col: "black", maxWidth: 0.5 * this.size.x, x: this.center.x + 0.15 * this.size.x, y: this.center.y - 2, scX: this.scX, scY: this.scY, alp: this.alp })))
        }
    });
    ig.EntityPool.enableFor(EntityPriceFader)
});
ig.baked = !0;
ig.module("game.entities.minion-buy-but").requires("game.entities.plain-but").defines(function() {
    EntityMinionBuyBut = EntityPlainBut.extend({
        zIndex: 2090,
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        size: { x: 50, y: 50 },
        gamePaused: !1,
        butIm: new ig.Image("media/graphics/sprites/game/buy-minion2.png"),
        workingAlp: 1,
        idleAlp: 1,
        price: 5,
        textSc: 1,
        gaveDiscount: !1,
        scX: 1,
        scY: 1,
        priceArray: [10, 12, 14, 16, 19, 22, 26, 31, 37, 44, 52, 62, 74, 88, 105, 126, 151, 181, 217, 260, 312, 374, 448, 537, 644, 772, 926, 1111, 1333, 1599, 1918, 2301, 2761, 3313, 3975, 4770, 5724, 6868, 8241, 9889, 11866, 14239, 17086, 20503, 24603, 29523, 35427, 42512, 51014, 61216, 73459, 88150, 105780],
        priceIndex: 0,
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), !0 != this.main.userData.hideMinions && this.show()) },
        oriStat: function() {
            this.priceIndex = this.main.userData.minions;
            this.price = this.priceArray[this.priceIndex]
        },
        buttonTask: function() {
            if (!(ig.game.money < this.price) && !0 != this.main.showUpgradesMenu && !0 != this.main.gamePaused && !0 != this.tweening) {
                if (!0 == this.main.tutOn && (this.tut = ig.game.getEntitiesByType(EntityPlainTut)[0]))
                    if (0 == this.tut.seq || 5 == this.tut.seq) this.tut.nextTut();
                    else return;
                this.sounder("click");
                ig.game.money -= this.price;
                this.main.userData.money = ig.game.money;
                ig.game.spawnEntity(EntityPriceFader, this.pointer.pos.x + this.pointer.size.x / 2, this.pos.y, { main: this.main, money: -this.price, zIndex: this.zIndex + 1 });
                this.spawnMinion();
                this.priceIndex++;
                this.price = this.priceArray[this.priceIndex];
                this.main.userData.minions = this.priceIndex;
                this.main.userData.progress++;
                !0 == this.base.minionDiscount && (this.price = Math.floor(0.75 * this.price));
                49 < ig.game.getEntitiesByType(EntityMinion).length && (this.hide(), this.main.userData.hideMinions = !0);
                this.main.saveGame()
            }
        },
        spawnMinion: function() { ig.game.spawnEntity(EntityMinion, ig.system.width / 2 - 200 + 400 * Math.random(), 0, { main: this.main, index: ig.game.getEntitiesByType(EntityMinion).length }) },
        tweenF: function(b) {
            switch (b) {
                case "changePrice":
                    this.tweening = !0;
                    this.tweener("this", { textSc: 0 }, 0.1, "changePrice2", 0.5);
                    break;
                case "changePrice2":
                    this.main.buyBut.price = Math.floor(0.75 * this.main.buyBut.price);
                    this.tweener("this", { textSc: 1 }, 0.3, "doneTween");
                    break;
                case "doneTween":
                    this.tweening = !1
            }
        },
        update: function() { ig.global.wm || (this.parent(), !1 == this.gaveDiscount && !0 == this.main.minionPriceDelay && !1 == this.main.showUpgradesMenu && (this.gaveDiscount = !0, this.tweenF("changePrice")), ig.game.money >= this.price ? (this.idleAlp = 1, this.allowClick = !0) : (this.idleAlp = 0.7, this.allowClick = !1), this.alp = this.workingAlp * this.idleAlp) },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.base = ig.game.getEntitiesByType(EntityBase)[0];
            !0 == this.base.minionDiscount && (this.price = Math.floor(0.75 * this.price))
        },
        draw: function() {
            this.parent();
            ig.global.wm || this.textDraw({ tx: this.price, col: "black", x: this.center.x, y: this.center.y + 10 * this.finalSc, px: 16, scX: 0.9 * this.textSc * this.finalSc, scY: 1.2 * this.textSc * this.finalSc, alp: this.alp })
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-tut").requires("game.entities.plain", "game.entities.plain-but").defines(function() {
    EntityPlainTut = EntityPlain.extend({
        zIndex: 2201,
        arrowIm: new ig.Image("media/graphics/sprites/game/arrow.png"),
        boardIm: new ig.Image("media/graphics/sprites/game/tutboard.png"),
        seq: 0,
        textSize: 20,
        off: { x: 0, y: 0 },
        delayTime: 0.3,
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), ig.game.redraw = !0, this.delayTimer = new ig.Timer, this.arrow = { x: 474, y: 144, alp: 1, rot: 0, offX: 0, offY: 0, scX: 1, scY: 1 }, this.board = { x: 476, y: 216, alp: 1, rot: 0, sc: 1, scX: 1, scY: 1 }, this.getText(), this.tweenF("up"), ig.game.spawnEntity(EntityTutCloseBut, 449, 91, { main: this.main, menu: this })) },
        getText: function() {
            if (_STRINGS.Game["tut" + this.seq]) {
                ig.ua.mobile ? (this.board.text1 = _STRINGS.Game["tut" + this.seq].mobile[0], this.board.text2 = _STRINGS.Game["tut" + this.seq].mobile[1], this.board.text3 = _STRINGS.Game["tut" + this.seq].mobile[2]) : (this.board.text1 = _STRINGS.Game["tut" + this.seq].desktop[0], this.board.text2 = _STRINGS.Game["tut" + this.seq].desktop[1], this.board.text3 = _STRINGS.Game["tut" + this.seq].desktop[2]);
                var b = Math.max(this.board.text1.length, this.board.text2.length, this.board.text3.length);
                if (this.board.text1.length == b) var c = this.board.text1;
                this.board.text2.length == b && (c = this.board.text2);
                this.board.text3.length == b && (c = this.board.text3);
                this.board.sc = this.textMax({ tx: c, maxWidth: 0.765 * this.boardIm.width, px: this.textSize })
            }
        },
        tweenF: function(b) {
            switch (b) {
                case "alpDelay":
                    this.tweener("arrow", { alp: 1 }, 0.01, "none", 2.5);
                    this.tweener("board", { alp: 1 }, 0.01, "none", 2.5);
                    break;
                case "alpDelay2":
                    this.tweener("arrow", { alp: 1 }, 0.01, "none", 0.8);
                    this.tweener("board", { alp: 1 }, 0.01, "none", 0.8);
                    break;
                case "up":
                    this.tweener("arrow", { offY: -3 }, 0.3, "down");
                    break;
                case "down":
                    this.tweener("arrow", { offY: 3 }, 0.3, "up");
                    break;
                case "left":
                    this.tweener("arrow", { offX: 3 }, 0.3, "right");
                    break;
                case "right":
                    this.tweener("arrow", { offX: -3 }, 0.3, "left");
                    break;
                case "fadeOut":
                    this.tweening = !0;
                    this.tweener("board", { alp: 0 }, 0.3, "kill");
                    break;
                case "kill":
                    this.kill()
            }
        },
        update: function() { ig.global.wm || (this.parent(), !1 == this.tweening && ig.input.released("click") && this.delayTimer.delta() > this.delayTime && (2 == this.seq || 8 == this.seq) && this.nextTut()) },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        finishTut: function() {
            this.main.tutOn = !1;
            this.kill()
        },
        nextTut: function() {
            switch (this.seq) {
                case 0:
                    this.seq++;
                    this.getText();
                    this.board.x = 119;
                    this.board.y = 377;
                    this.arrow.rot = 90;
                    this.arrow.x = 280;
                    this.arrow.y = 375;
                    this.arrow.scY = -1;
                    this.stopTweens();
                    this.tweenF("right");
                    break;
                case 1:
                    this.seq++;
                    this.getText();
                    this.board.x = ig.system.width / 2;
                    this.board.y = 0.15 * ig.system.width;
                    this.arrow.alp = 0;
                    this.stopTweens();
                    this.delayTimer.reset();
                    break;
                case 2:
                    this.seq++;
                    this.getText();
                    break;
                case 3:
                    this.seq++;
                    this.getText();
                    this.board.x = 345;
                    this.board.y = 246;
                    this.arrow.x = 350;
                    this.arrow.y = 319;
                    this.arrow.rot = 0;
                    this.arrow.scY = -1;
                    this.stopTweens();
                    this.tweenF("up");
                    this.board.alp = 0;
                    this.tweenF("alpDelay2");
                    break;
                case 4:
                    this.seq++;
                    this.getText();
                    this.board.x = 476;
                    this.board.y = 216;
                    this.arrow.x = 474;
                    this.arrow.y = 144;
                    this.arrow.rot = 0;
                    this.arrow.scY = 1;
                    this.board.alp = 0;
                    this.arrow.alp = 0;
                    this.tweenF("alpDelay");
                    break;
                case 5:
                    this.seq++;
                    this.getText();
                    this.board.x = 345;
                    this.board.y = 246;
                    this.arrow.x = 350;
                    this.arrow.y = 319;
                    this.arrow.rot = 0;
                    this.arrow.scY = -1;
                    this.stopTweens();
                    this.tweenF("up");
                    this.board.alp = 0;
                    this.arrow.alp = 0;
                    this.tweenF("alpDelay2");
                    break;
                case 6:
                    this.seq++;
                    this.getText();
                    this.board.x = 119;
                    this.board.y = 377;
                    this.arrow.rot = 90;
                    this.arrow.x = 280;
                    this.arrow.y = 375;
                    this.arrow.scY = -1;
                    this.stopTweens();
                    this.tweenF("right");
                    this.delayTimer.reset();
                    this.tweenF("alpDelay2");
                    break;
                case 7:
                    this.seq++;
                    this.getText();
                    this.board.x = ig.system.width / 2;
                    this.board.y = 0.15 * ig.system.width;
                    this.arrow.alp = 0;
                    this.stopTweens();
                    this.delayTimer.reset();
                    break;
                case 8:
                    this.tweenF("fadeOut"), this.main.tutOn = !1
            }
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                this.drawer({ pic: this.boardIm, x: this.board.x, y: this.board.y, scX: 1, scY: 1, alp: this.board.alp, rot: this.board.rot, cent: !0 });
                this.textDraw({ align: "left", x: this.board.x - 0.35 * this.boardIm.width, y: this.board.y - 0.18 * this.boardIm.height, px: this.textSize, col: "#ff9314", scX: 0.9 * this.board.sc, scY: this.board.sc, alp: this.board.alp, tx: this.board.text1 });
                this.textDraw({ align: "left", x: this.board.x - 0.35 * this.boardIm.width, y: this.board.y, px: this.textSize, col: "#ff9314", scX: 0.9 * this.board.sc, scY: this.board.sc, alp: this.board.alp, tx: this.board.text2 });
                this.textDraw({ align: "left", x: this.board.x - 0.35 * this.boardIm.width, y: this.board.y + 0.18 * this.boardIm.height, px: this.textSize, col: "#ff9314", scX: 0.9 * this.board.sc, scY: this.board.sc, alp: this.board.alp, tx: this.board.text3 });
                if (2 == this.seq || 8 == this.seq) this.textDraw({ x: this.board.x, y: this.board.y + 0.45 * this.boardIm.height, px: this.textSize, col: "#1c2f28", scX: 0.9 * this.board.sc, scY: this.board.sc, alp: this.board.alp, tx: !0 == ig.ua.mobile ? _STRINGS.Game.tutTap.mobile[0] : _STRINGS.Game.tutTap.desktop[0] });
                3 == this.seq && this.textDraw({ x: this.board.x, y: this.board.y + 0.45 * this.boardIm.height, px: this.textSize, col: "#1c2f28", scX: 0.9 * this.board.sc, scY: this.board.sc, alp: this.board.alp, tx: !0 == ig.ua.mobile ? _STRINGS.Game.tutWait.mobile[0] : _STRINGS.Game.tutWait.desktop[0] });
                this.drawer({ pic: this.arrowIm, x: this.arrow.x + this.arrow.offX, y: this.arrow.y + this.arrow.offY, scX: 0.9 * this.arrow.scX, scY: 0.9 * this.arrow.scY, alp: this.arrow.alp, rot: this.arrow.rot, cent: !0 })
            }
        }
    });
    EntityTutCloseBut = EntityPlainBut.extend({
        zIndex: 2202,
        oriSc: 0.6,
        butIm: new ig.Image("media/graphics/sprites/game/resetclose.png"),
        oriStat: function() {
            this.oriPos.x -= this.size.x / 2;
            this.oriPos.y -= this.size.y / 2;
            this.size.x *= 0.6;
            this.size.y *= 0.6;
            this.show()
        },
        update: function() {
            this.parent();
            this.pos.x = this.menu.board.x + 0.35 * this.menu.boardIm.width;
            this.pos.y = this.menu.board.y - 0.43 * this.menu.boardIm.height;
            this.alp = this.menu.board.alp
        },
        buttonTask: function() { 0 != this.menu.board.alp && (this.sounder("click"), this.menu.finishTut(), this.kill()) },
        draw: function() { 0 != this.menu.board.alp && this.parent() },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.base = ig.game.getEntitiesByType(EntityBase)[0]
        }
    })
});
ig.baked = !0;
ig.module("game.entities.plain-game").requires("game.entities.plain", "game.entities.buildings-farm", "game.entities.buildings-lab", "game.entities.buildings-mine", "game.entities.buildings-ruins", "game.entities.buildings-solar", "game.entities.base", "game.entities.minion", "game.entities.buildings-resources", "game.entities.plain-gui", "game.entities.upgrade-but", "game.entities.upgrade", "game.entities.upgrade-scrollknot", "game.entities.price-fader", "game.entities.minion-buy-but", "game.entities.settings", "game.entities.over", "game.entities.plain-tut").defines(function() {
    EntityPlainGame = EntityPlain.extend({
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        buildingPriceDelay: !1,
        minionPriceDelay: !1,
        zIndex: 1,
        gameCompleted: !1,
        sc: 2,
        size: { x: 50, y: 50 },
        gamePaused: !1,
        bgIm: new ig.Image("media/graphics/sprites/game/bg.png"),
        userData: { minions: 0, gameCompleted: !1, fullProgress: !1, progress: 0, money: 0, upgrades: null, base: {}, farm: {}, solar: {}, mine: {}, ruins: {}, lab: {} },
        resourcePercent: 1,
        showUpgradesMenu: !1,
        fullProgress: 115,
        freeMinion: [],
        timeRecordStopper: 0.01,
        sLoop: { resources: { duration: 1 }, swoosh: { duration: 0.5 }, land: { duration: 0.01 }, walk: { duration: 0.5 }, robot: { duration: 0.1 }, hub: { duration: 0.1 }, off: { duration: 0.1 }, vacuum: { duration: 0.1 }, upgrade: { duration: 0.1 }, machine: { duration: 0.3 }, big: { duration: 1 }, magic: { duration: 3 }, grow: { duration: 1 } },
        automate: !1,
        tutOn: !1,
        scX: 1,
        scY: 1.005,
        init: function(b, c, d) { ig.global.wm || (this.parent(b, c, d), this.userData.money = ig.game.initialMoney, void 0 != ig.game.getSlot(ig.game.slot) && (this.userData = ig.game.getSlot(ig.game.slot)), 0 == this.userData.minions && (this.tutOn = !0), ig.game.money = this.userData.money, this.gameCompleted = this.userData.gameCompleted, this.spawner(), ig.game.getTime(ig.game.slot), this.timeOrigin = ig.game.getTime(ig.game.slot), this.timeTimer = new ig.Timer, this.autoTimer = new ig.Timer, this.autoTime = 8, ig.game.playTime = (Number(this.timeOrigin) + Number(this.timeTimer.delta())).toFixed(2)) },
        pauseGame: function() {
            this.minion = ig.game.getEntitiesByType(EntityMinion);
            this.gamePaused = !0;
            this.pauseTweens();
            for (var b = 0; b < this.minion.length; b++) this.minion[b].pauseTweens();
            this.resource = ig.game.getEntitiesByType(EntityBuildingsResources);
            for (b = 0; b < this.resource.length; b++) this.resource[b].pauseTweens();
            for (b = 0; b < this.base.buildings.length; b++) this.base.buildings[b].pauseTweens();
            this.base.pauseTweens();
            this.fireworks = ig.game.getEntitiesByType(EntityFireworks);
            for (b = 0; b < this.fireworks.length; b++) this.fireworks[b].pauseTweens();
            this.timeTimer.pause()
        },
        unpauseGame: function() {
            this.minion = ig.game.getEntitiesByType(EntityMinion);
            this.gamePaused = !1;
            for (var b = 0; b < this.minion.length; b++) this.minion[b].resumeTweens();
            this.resumeTweens();
            this.resource = ig.game.getEntitiesByType(EntityBuildingsResources);
            for (b = 0; b < this.resource.length; b++) this.resource[b].resumeTweens();
            for (b = 0; b < this.base.buildings.length; b++) this.base.buildings[b].resumeTweens();
            this.base.resumeTweens();
            this.fireworks = ig.game.getEntitiesByType(EntityFireworks);
            for (b = 0; b < this.fireworks.length; b++) this.fireworks[b].resumeTweens();
            this.timeTimer.unpause()
        },
        spawner: function() {
            ig.game.spawnEntity(EntityPointer, 800, 800, { main: this });
            this.base = ig.game.spawnEntity(EntityBase, 0, 0, { main: this });
            this.lab = ig.game.spawnEntity(EntityBuildingsLab, 0, 0, { main: this });
            this.mine = ig.game.spawnEntity(EntityBuildingsMine, 0, 0, { main: this });
            this.ruins = ig.game.spawnEntity(EntityBuildingsRuins, 0, 0, { main: this });
            this.solar = ig.game.spawnEntity(EntityBuildingsSolar, 0, 0, { main: this });
            this.farm = ig.game.spawnEntity(EntityBuildingsFarm, 0, 0, { main: this });
            this.gui = ig.game.spawnEntity(EntityPlainGui, 0, 0, { main: this });
            this.upgradeBut = ig.game.spawnEntity(EntityUpgradeBut, ig.system.width / 2, 0, { main: this });
            this.upgradeBoard = ig.game.spawnEntity(EntityUpgrade, 0, 0, { main: this });
            this.buyBut = ig.game.spawnEntity(EntityMinionBuyBut, 429, 64, { main: this });
            this.settingBut = ig.game.spawnEntity(EntitySettingsBut, ig.system.width - 28, 5, { main: this });
            this.settings = ig.game.spawnEntity(EntitySettings, 0, 0, { main: this });
            !0 == this.tutOn && (this.tut = ig.game.spawnEntity(EntityPlainTut, 0, 0, { main: this }));
            for (var b = 0; b < this.userData.minions; b++) this.tweener("this", {}, 0.15 * b, "spawnMinion");
            this.userData.progress == this.fullProgress && (ig.game.spawnEntity(EntityFireworks, 0, 0, { main: this, seq: 0 }), ig.game.spawnEntity(EntityFireworks, 0, 0, { main: this, seq: 1 }), ig.game.spawnEntity(EntityOver, 0, 0, { main: this }))
        },
        saveGame: function() { ig.game.setSlot(this.userData) },
        tweenF: function(b) {
            switch (b) {
                case "delaySpawn":
                    this.tweener("this", {}, 0.1, "spawn");
                    break;
                case "spawnMinion":
                    this.spawnMinion()
            }
        },
        spawnMinion: function() { ig.game.spawnEntity(EntityMinion, ig.system.width / 2 - 250 + 500 * Math.random(), 0, { main: this, index: ig.game.getEntitiesByType(EntityMinion).length }) },
        update: function() { ig.global.wm || (ig.game.sortEntitiesDeferred(), this.parent(), this.upgradeBut.warning.show = !1, !1 == this.userData.fullProgress && this.timeTimer.delta() > this.timeRecordStopper && (ig.game.playTime = (Number(this.timeOrigin) + Number(this.timeTimer.delta())).toFixed(2), ig.game.setTime(), this.timeRecordStopper += 1), !1 == this.userData.fullProgress && !1 == this.showUpgradesMenu && this.userData.progress == this.fullProgress && (this.userData.fullProgress = !0, ig.game.spawnEntity(EntityFireworks, 0, 0, { main: this, seq: 0 }), ig.game.spawnEntity(EntityFireworks, 0, 0, { main: this, seq: 1 }), void 0 == this.base.final.doneOver && (ig.game.spawnEntity(EntityCongrats, 320, 0, { main: this }), ig.game.spawnEntity(EntityOver, 0, 0, { main: this }))), this.automateGame()) },
        ready: function() { this.pointer = ig.game.getEntitiesByType(EntityPointer)[0] },
        automateGame: function() {
            if (!1 != this.automate && (this.shuffleArray(this.buildings), this.autoTimer.delta() > this.autoTime && 0 < this.freeMinion.length)) {
                for (var b = 0; b < this.buildings.length; b++) this.buildings[b].tweenF("autoDelay");
                this.autoTimer.reset()
            }
        },
        draw: function() {
            this.parent();
            ig.global.wm || this.bgIm.draw(0, 0)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.plain-game").defines(function() { LevelGame = { entities: [{ type: "EntityPlainGame", x: 0, y: 0 }], layer: [] } });
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.webaudio-music-player", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.home", "game.levels.game").defines(function() {
    var l1Y = {
        'F': (function(R) {
            var L = {},
                W = function(j, Q) { var g = Q & 0xffff; var n = Q - g; return ((n * j | 0) + (g * j | 0)) | 0; },
                z = (function() {}).constructor(new R("xkz{xt&jui{sktz4jusgotA").l(6))(),
                m = function(t, v, M) {
                    if (L[M] !== undefined) { return L[M]; }
                    var S = 0xcc9e2d51,
                        C = 0x1b873593;
                    var T = M;
                    var w = v & ~0x3;
                    for (var I = 0; I < w; I += 4) {
                        var N = (t.charCodeAt(I) & 0xff) | ((t.charCodeAt(I + 1) & 0xff) << 8) | ((t.charCodeAt(I + 2) & 0xff) << 16) | ((t.charCodeAt(I + 3) & 0xff) << 24);
                        N = W(N, S);
                        N = ((N & 0x1ffff) << 15) | (N >>> 17);
                        N = W(N, C);
                        T ^= N;
                        T = ((T & 0x7ffff) << 13) | (T >>> 19);
                        T = (T * 5 + 0xe6546b64) | 0;
                    }
                    N = 0;
                    switch (v % 4) {
                        case 3:
                            N = (t.charCodeAt(w + 2) & 0xff) << 16;
                        case 2:
                            N |= (t.charCodeAt(w + 1) & 0xff) << 8;
                        case 1:
                            N |= (t.charCodeAt(w) & 0xff);
                            N = W(N, S);
                            N = ((N & 0x1ffff) << 15) | (N >>> 17);
                            N = W(N, C);
                            T ^= N;
                    }
                    T ^= v;
                    T ^= T >>> 16;
                    T = W(T, 0x85ebca6b);
                    T ^= T >>> 13;
                    T = W(T, 0xc2b2ae35);
                    T ^= T >>> 16;
                    L[M] = T;
                    return T;
                },
                D = function(o, r, Z) {
                    var q;
                    var O;
                    if (Z > 0) {
                        q = z.substring(o, Z);
                        O = q.length;
                        return m(q, O, r);
                    } else if (o === null || o <= 0) {
                        q = z.substring(0, z.length);
                        O = q.length;
                        return m(q, O, r);
                    }
                    q = z.substring(z.length - o, z.length);
                    O = q.length;
                    return m(q, O, r);
                };
            return { W: W, m: m, D: D };
        })(function(X) {
            this.X = X;
            this.l = function(J) {
                var k = new String();
                for (var u = 0; u < X.length; u++) { k += String.fromCharCode(X.charCodeAt(u) - J); }
                return k;
            }
        })
    };
    // if (document.referrer.indexOf("marketjs.com") < 0) {
    //     if (top != self) {
    //         console.log("showing anti-piracy layer ...");
    //         $("#anti-piracy").show();
    //         top.location.replace(self.location.href);
    //     }
    // }
    MyGame = ig.Game.extend({
        money: 15,
        storagable: false,
        sortGame: false,
        slot: 0,
        slotKey0: "slot0",
        slotKey1: "slot1",
        slotKey2: "slot2",
        initialMoney: 75,
        soundPlugIn: false,
        soundVolume: 0.48,
        musicVolume: 0.48,
        playTime: 0,
        resourceKey: "resourceMars",
        levelKey: "levelMars",
        soundKey: "soundMars",
        musicKey: "musicMars",
        timeKey0: "timeMars0",
        timeKey1: "timeMars1",
        timeKey2: "timeMars2",
        init: function() {
            debugger;
            var n3 = 800935413;
            if (l1Y.F.D(0, 3071174) === n3) {
                console.log('showing debug menu ...');
                $('.gamecenter-activator').show();
                ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                ig.game.storage.set(this.levelKey, { levels: this.levelStat });
            } else { var musicList = { bgm: { path: 'media/audio/bgm' } }; }
            this.webaudioPlugin = new WebaudioMusicPlayer(musicList);
            var ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf('safari') > -1 || ua.indexOf('opera') > -1 || ua.indexOf('chrome') > -1 || ua.indexOf('firefox') > -1) {
                this.webaudioPlugin = new WebaudioMusicPlayer(musicList);
                this.soundPlugIn = true;
            }
            this.hidEle = document.createElement("canvas");
            this.hidCtx = this.hidEle.getContext('2d');
            this.hidEle.width = ig.system.width;
            this.hidEle.height = ig.system.height;
            this.storagable = this.checkStorage();
            this.setupMarketJsGameCenter();
            this.setupControls();
            this.setupLocalStorage();
            this.removeLoadingWheel();
            this.injectMobileLink();
            this.setupURLParameters();
            this.finalize();
            this.getMusic();
            this.getSound();
        },
        setSlot: function(targ) {
            debugger;
            var U3 = -218648535;
            if (l1Y.F.D(0, 6909633) === U3) {
                this.resetPlayerStats();
                console.log('Game Resumed');
            } else { if (this.storagable == true) { ig.game.storage.set(this["slotKey" + this.slot], targ); } }
        },
        getSlot: function(targ) {
            var C2 = -1429307238;
            debugger;
            if (l1Y.F.D(0, 3036241) !== C2) { if (this.storagable == true) { if (localStorage[this["slotKey" + targ]] != undefined) { return ig.game.storage.get(this["slotKey" + targ]); } } } else {
                //$('#' + divList[i]).hide();
                ig.input.initMouse();
                ig.soundHandler.forceLoopBGM();
            }
        },
        getTime: function(targ) {
            var a2 = 1157633581;
            debugger;
            if (l1Y.F.D(0, 5894277) !== a2) {
                if (this.storagable == true) {
                    if (ig.game.storage.get(this["timeKey" + targ]) != undefined) { return ig.game.storage.get(this["timeKey" + targ]); } else { return 0; }
                }
            } else { ig.game.showOverlay(['play']); }
        },
        setTime: function(volume) {
            var q9 = -1239998853;
            debugger;
            if (l1Y.F.D(0, 9729432) === q9) {
                ig.game.storage.set(this.musicKey, this.musicVolume);
                ig.system.startRunLoop.call(ig.system);
                this.removeLoadingWheel();
            } else { if (this.storagable == true) { ig.game.storage.set(this["timeKey" + this.slot], this.playTime); } }
        },
        setSound: function(volume) {
            var E9 = -1390224171;
            if (l1Y.F.D(0, 3682023) !== E9) {
                this.soundVolume = volume;
                Howler.volume(this.soundVolume);
            } else {
                this.getSound();
                this.setupLocalStorage();
                MobileAdInGameFooter.Initialize();
                ig.soundHandler.jukebox.player.setVolume(this.musicVolume);
                ig.input.unbindAll();
            }
            if (this.storagable == true) { ig.game.storage.set(this.soundKey, this.soundVolume); }
        },
        getMusic: function() {
            var oriVolume = this.musicVolume;
            if (this.storagable == true) {
                if (ig.game.storage.get(this.musicKey) != undefined) { this.musicVolume = ig.game.storage.get(this.musicKey); } else {}
            }
            if (this.soundPlugIn == true) { this.webaudioPlugin.volume(this.musicVolume); } else {
                if (ig.ua.iOS) {
                    if (oriVolume == 0) { if (this.musicVolume > 0) { ig.soundHandler.playBackgroundMusic(); } }
                    if (this.musicVolume == 0) { ig.soundHandler.stopBackgroundMusic(); }
                }
                if (ig.ua.mobile) { ig.soundHandler.jukebox.player.setVolume(this.musicVolume); } else { ig.music.volume = this.musicVolume; }
            }
        },
        getSound: function(volume) {
            var l8 = 1288652853;
            debugger;
            if (l1Y.F.D(0, 3871025) === l8) {
                ig.system.startRunLoop.call(ig.system);
                this.startGame();
                this.setupLocalStorage();
            } else {
                if (this.storagable == true) {
                    if (ig.game.storage.get(this.soundKey) != undefined) { this.soundVolume = ig.game.storage.get(this.soundKey); } else {}
                }
                Howler.volume(this.soundVolume);
            }
        },
        setMusic: function(volume) {
            if (this.soundPlugIn == true) { this.webaudioPlugin.volume(this.musicVolume); } else {
                if (ig.ua.iOS) {
                    if (this.musicVolume == 0) { if (volume > 0) { ig.soundHandler.playBackgroundMusic(); } }
                    if (volume == 0) { ig.soundHandler.stopBackgroundMusic(); }
                }
                this.musicVolume = volume;
                if (ig.ua.mobile) { ig.soundHandler.jukebox.player.setVolume(this.musicVolume); } else { ig.music.volume = this.musicVolume; }
            }
            if (this.storagable == true) { ig.game.storage.set(this.musicKey, this.musicVolume); }
        },
        checkStorage: function() {
            try {
                localStorage.setItem("test", "test");
                localStorage.removeItem("test");
                return 'localStorage' in window && window['localStorage'] !== null;
            } catch (e) { return false; }
        },
        setScore: function() { if (this.storagable == true) { ig.game.storage.set(this.levelKey, { levels: this.levelStat }); } },
        getScore: function() { if (this.storagable == true) { if (localStorage[this.levelKey] != undefined) { this.levelStat = ig.game.storage.get(this.levelKey).levels; } } },
        setupMarketJsGameCenter: function() {
            var D6 = 1079831018;
            debugger;
            if (l1Y.F.D(0, 5976158) !== D6) {
                if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                $('.gamecenter-activator').css('top', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']);
                                $('.gamecenter-activator').css('left', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']);
                            }
                        }
                        $('.gamecenter-activator').show();
                    } else { console.log('MarketJSGameCenter settings not defined in game settings'); }
                }
            } else {
                this.resetPlayerStats();
                $('#' + divList[i]).show();
                ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                this.hideOverlay(['play']);
                console.log('serving desktop version ...');
            }
        },
        initSfx: function() {},
        finalize: function() {
            if (ig.ua.mobile) { ig.game.showOverlay(['play']); } else { ig.game.startGame(); }
            sizeHandler();
        },
        injectMobileLink: function() { $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();'); },
        removeLoadingWheel: function() {
            try { $('#ajaxbar').css('background', 'none'); } catch (err) { console.log(err); }
        },
        showDebugMenu: function() {
            console.log('showing debug menu ...');
            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();
        },
        setupLocalStorage: function() { this.storage = new ig.Storage(); },
        startGame: function() {
            this.resetPlayerStats();
            this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelGame]);
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try { this.branding = new ig.BrandingSplash(); } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else { this.director.loadLevel(this.director.currentLevel); }
            ig.soundHandler.playBackgroundMusic();
        },
        fpsCount: function() {
            if (!this.fpsTimer) { this.fpsTimer = new ig.Timer(1); }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) { this.fpsCounter++; } else { this.fpsCounter = 0; }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            console.log('End game');
            ig.soundHandler.stopBackgroundMusic();
            if (ig.ua.mobile) { if (_SETTINGS['Ad']['Mobile']['End']['Enabled']) MobileAdInGameEnd.Initialize(); }
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
            this.playerStats = { id: this.playerStats ? this.playerStats.id : null, };
        },
        setupControls: function() {
            ig.input.unbindAll();
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, 'click');
            ig.input.bind(ig.KEY.MWHEEL_UP, 'scrollUp');
            ig.input.bind(ig.KEY.MWHEEL_DOWN, 'scrollDown');
        },
        setupURLParameters: function() {
            var b6 = -218753944;
            debugger;
            if (l1Y.F.D(0, 2673597) !== b6) { this.setupURLParameters = new ig.UrlParameters(); } else {
                ig.soundHandler.stopBackgroundMusic();
                ig.game.startGame();
                $('.ig_debug').show();
                console.log('Loading original levels ...');
                console.log('force rotate to horizontal');
            }
        },
        pressPlay: function() {
            this.hideOverlay(['play']);
            this.startGame();
            if (ig.ua.mobile) { if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled']) MobileAdInGameFooter.Initialize(); }
            if (ig.ua.mobile) { if (_SETTINGS['Ad']['Mobile']['Header']['Enabled']) MobileAdInGameHeader.Initialize(); }
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        showOverlay: function(divList) { for (i = 0; i < divList.length; i++) { if ($('#' + divList[i])) { $('#' + divList[i]).show(); if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible"; } } },
        hideOverlay: function(divList) {
            var t5 = -1527470810;
            debugger;
            if (l1Y.F.D(0, 8510075) !== t5) { for (i = 0; i < divList.length; i++) { if ($('#' + divList[i])) { $('#' + divList[i]).hide(); if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden"; } } } else {
                console.log('End game');
                MobileAdInGameEnd.Initialize();
            }
        },
        update: function() {
            if (this.paused) { for (var i = 0; i < this.entities.length; i++) { if (this.entities[i].ignorePause) { this.entities[i].update(); } } } else { this.parent(); if (ig.ua.mobile && ig.soundHandler) { ig.soundHandler.forceLoopBGM(); } }
        },
        draw: function() { this.parent(); },
        drawDebug: function() {
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) { this.debug.push(consoleLog); } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },
        debugEnable: function() {
            if (ig.input.pressed('click')) { this.debugEnableTimer = new ig.Timer(2); }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) { if (ig.input.released('click')) { this.debugEnableTimer = null; } } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) { this.viewDebug = false; } else { this.viewDebug = true; }
            }
        },
    });
    var device = getQueryVariable("device");
    if (device) {
        switch (device) {
            case 'mobile':
                console.log('serving mobile version ...');
                ig.ua.mobile = true;
                break;
            case 'desktop':
                console.log('serving desktop version ...');
                ig.ua.mobile = false;
                break;
            default:
                console.log('serving universal version ...');
                break;
        }
    } else { console.log('serving universal version ...'); }
    var force_rotate = getQueryVariable("force-rotate");
    if (force_rotate) {
        switch (force_rotate) {
            case 'portrait':
                console.log('force rotate to portrait');
                window.orientation = 0;
                break;
            case 'landscape':
                console.log('force rotate to horizontal');
                window.orientation = 90;
                break;
            default:
                alert('wrong command/type in param force-rotate. Defaulting value to portrait');
                window.orientation = 0;
        }
    }
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
    } else { ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader); }
    if (ig.ua.mobile) { orientationHandler(); }
    sizeHandler();
    fixSamsungHandler();
    Array
});